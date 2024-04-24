import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {_id, name, quantity, supplier, taste, photo } = coffee;


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
          
           fetch(`https://coffee-store-server-beta-swart.vercel.app/coffee/${_id}`, {
            method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.deletedCount > 0 ){
                 Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success"
            });
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining)
            }
           })
          }
        });
  }
  return (
    <div className="card card-side bg-[#c0b597] shadow-xl p-6">
      <figure><img src={photo} alt="Movie" className="w-1/2" /></figure>
      <div className="flex justify-between  w-full items-center">
        <div>
        <h2 className="card-title"> Name: {name} </h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vartical space-y-4">
            <button className="btn">view</button>
            <button className="btn ">
              <Link to={`updateCoffee/${_id}`}>Edit</Link>
            </button>
            <button onClick={ () =>  handleDelete(_id)} className="btn bg-orange-500">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;