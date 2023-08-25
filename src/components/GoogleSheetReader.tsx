import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface Book {
  Date: string;
  Time: string;
  ID: string;
  Shelf: string;
  Row: string;
}

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
        return book.ID.toLowerCase().includes(search.toLowerCase());
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
      <div>
        <input
          className=""
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {filteredBooks.map((book, index) => (
            <li key={index}>
              {book.ID} ({book.Shelf}) - {book.Row}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoogleSheetReader;
