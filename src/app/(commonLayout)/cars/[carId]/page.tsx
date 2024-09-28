/* eslint-disable @typescript-eslint/no-explicit-any */


const CarDetailspage = ({params}:any) => {
    return (
        <div>
            car id : {params.carId}
        </div>
    );
};

export default CarDetailspage;