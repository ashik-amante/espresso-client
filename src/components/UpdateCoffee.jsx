import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {name,chef,supplier,taste,category,details,photo,_id} = coffee
    const handleUpdateCoffee = event=>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const updatedCoffee = {name,chef,supplier,taste,category,details,photo}
            console.log(updatedCoffee);

             Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Update it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
            
                            fetch(`http://localhost:5000/coffee/${_id}`, {
                                method: 'PUT',
                                headers:{
                                    'content-type': 'application/json',
                                },
                                body:JSON.stringify(updatedCoffee)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.modifiedCount > 0) {
                                        Swal.fire({
                                            title: "Updated!",
                                            text: "Your coffee has been Updated.",
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    });
           
        }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold text-center mb-10">Update Coffee of: {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4 md:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Chef</span>
                            </div>
                            <input type="text" name="chef" placeholder="Enter coffee chef" defaultValue={chef} className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* supplier row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4 md:w-1/2 ">
                            <div className="label">
                                <span className="label-text"> Supplier Name</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier} className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Taste </span>
                            </div>
                            <input type="text" name="taste" placeholder="Coffee taste " defaultValue={taste} className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* Category row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4 md:w-1/2 ">
                            <div className="label">
                                <span className="label-text"> Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Coffee category " defaultValue={category} className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Enter coffee details" defaultValue={details} className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* photo  row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4  ">
                            <div className="label">
                                <span className="label-text"> Photo</span>
                            </div>
                            <input type="text" name="photo" placeholder="Enter Photo url " defaultValue={photo} className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <input className="btn bg-green-700 text-white btn-block" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCoffee;