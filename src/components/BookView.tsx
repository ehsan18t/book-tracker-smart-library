import { Book } from "../type";

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
          <div className="bg-red-200 ring-1 ring-red-500 rounded-3xl px-2 py-1">
            Shelf: {book.Shelf}
          </div>
          <div className="bg-green-200 ring-1 ring-green-500 rounded-3xl px-2 py-1">
            Row: {book.Row}
          </div>
        </div>
        <div className=" pt-3 flex justify-center items-center text-center px-5 text-xs text-slate-500">
          Updated: {book.Date}
        </div>
      </div>
    </div>
  );
};

export default BookView;
