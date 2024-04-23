import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier,category, details, taste, photo } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);

        // send data for mongodb
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'Succes!',
                    text: 'Coffee Updated successfuly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            } 

        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-3xl font-bold">Update coffee: {name} </h1>
        <form onSubmit={handleUpdateCoffee}>
            {/* name */}
            <div className="md:flex gap-3 my-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffe Name</span>
                    </label>
                    <label className="input-gruop">
                    <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-gruop">
                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* taste */}
            <div className="md:flex gap-3 my-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-gruop">
                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-gruop">
                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* catagory & details */}
            <div className="md:flex gap-3 my-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-gruop">
                    <input type="Category" name="category"  defaultValue={category}  placeholder="Enter coffee category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-gruop">
                    <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Photo url */}
            <div className="">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-gruop">
                    <input type="Category" name="photo" defaultValue={photo} placeholder="Enter coffee category" className="input input-bordered w-full" />
                    </label>
                </div>
              
            </div>
              <input type="submit" value="Update coffee" className="btn btn-block mt-4" />
        </form>
    </div>
    );
};

export default UpdateCoffee;