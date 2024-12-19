import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees,setCoffees }) => {
    const { name, chef, supplier, taste, category, details, photo, _id } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof=> cof._id !== _id)
                            setCoffees(remaining)
                        }

                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    className="w-52"
                    alt="Movie" />
            </figure>
            <div className=" justify-around flex  w-full items-center p-2">
                <div>
                    <h2 className="card-title">Name :{name}</h2>
                    <p>{chef}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className=" justify-end mr-2">
                    <div className="join join-vertical space-y-4 j">
                        <button className="btn bg-gray-700 text-white">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn bg-green-600">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;