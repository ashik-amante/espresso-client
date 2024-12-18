

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    className="w-72"
                    alt="Movie" />
            </figure>
            <div className=" justify-around flex  w-full items-center">
                <div>
                    <h2 className="card-title">Name :{name}</h2>
                    <p>{chef}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className=" justify-end">
                    <div className="join join-vertical space-y-4 j">
                        <button className="btn ">View</button>
                        <button className="btn ">Updatde</button>
                        <button className="btn ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;