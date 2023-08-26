import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Book } from "../type";
import BookView from "./BookView";

interface GoogleSheetReaderProps {
  sheetId: string;
}

const GoogleSheetReader: React.FC<GoogleSheetReaderProps> = ({ sheetId }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (books) {
      const filteredBooks = books.filter((book) => {
        // don't add book that dont have a title
        if (!book.Title) return false;
        return book.Title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredBooks(filteredBooks);
    }
  }, [search, books]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/pub?output=csv`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Google Sheets");
        }

        const csv = await response.text();
        const results = Papa.parse(csv, { header: true }).data as Book[];
        setBooks(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getData();
  }, [sheetId]);

  return (
    <div>
      {/* search */}
      <div className="w-full p-7 h-full">
        <input
          className="w-full flex justify-center items-center px-6 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Search Book..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-6">
          {filteredBooks.map((book, index) => (
            <BookView book={book} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GoogleSheetReader;
