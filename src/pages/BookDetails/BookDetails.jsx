import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { image, bookName, author, category, review, tags } = singleBook || {};

    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // array of collection
        // if book already exists then show an alert
        // if book not exists then push it in the collection or array

        addToStoredDB(id)
    }
    // console.log(typeof id, data)
    return (
        <div className='flex w-5/6 mx-auto p-12 gap-8'>
            <img className='h-[480px]' src={image} alt="" />
            <div>
                <h4 className='text-[30px] font-bold'>{bookName}</h4>
                <p className='font-semibold text-red-600 text-2xl mb-3'>By : {author}</p>
                <p className='font-semibold text-green-500 mb-1.5'>{category}</p>
                <p className='mb-2'>{review}</p>
                <div className="flex justify-around mb-2">
                    {tags.map((tag) => (
                        <button className='text-blue-700'>{tag}</button>
                    ))}
                </div>
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
                <button className="btn btn-info m-2">Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;