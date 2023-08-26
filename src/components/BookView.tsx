import { Book } from "../type";
import { BsBookshelf } from "react-icons/bs";
import { AiOutlineInsertRowBelow } from "react-icons/ai";

interface Props {
  book: Book;
}

const BookView = ({ book }: Props) => {
  return (
    <div className="flex flex-col gap-3 shadow rounded-lg">
      <img
        className="h-64 md:h-72 w-full object-cover rounded-t-lg"
        src={book.Cover}
        alt={book.Title}
      />
      <div className="p-4">
        <div className="font-semibold">{book.Title}</div>

        <div className="flex py-5 justify-between text-xs text-gray-600 border-b-[1px]">
          <div className="flex gap-2 items-center ring-1 ring-amber-500 rounded-3xl px-2 py-1">
            <BsBookshelf /> Shelf: {book.Shelf}
          </div>
          <div className="flex gap-2 items-center ring-1 ring-green-500 rounded-3xl px-2 py-1">
            <AiOutlineInsertRowBelow />
            Row: {book.Row}
          </div>
        </div>
        <div className="pt-3 flex justify-center items-center text-center px-5 text-xs text-slate-500">
          Updated: {book.Date}
        </div>
      </div>
    </div>
  );
};

export default BookView;
