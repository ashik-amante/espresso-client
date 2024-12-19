
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee);
        
        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added successfully!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold text-center mb-10">Add A Coffee</h1>
            <form onSubmit={handleAddCoffee}> 
                <div>
                    {/* form row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4 md:w-1/2 ">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Chef</span>
                            </div>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* supplier row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4 md:w-1/2 ">
                            <div className="label">
                                <span className="label-text"> Supplier Name</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Taste </span>
                            </div>
                            <input type="text" name="taste" placeholder="Coffee taste " className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* Category row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4 md:w-1/2 ">
                            <div className="label">
                                <span className="label-text"> Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Coffee category " className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full md:w-1/2">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* photo  row */}
                    <div className="md:flex mb-6">
                        <label className="form-control w-full  mr-4  ">
                            <div className="label">
                                <span className="label-text"> Photo</span>
                            </div>
                            <input type="text" name="photo" placeholder="Enter Photo url " className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <input className="btn bg-green-700 text-white btn-block" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddCoffee;