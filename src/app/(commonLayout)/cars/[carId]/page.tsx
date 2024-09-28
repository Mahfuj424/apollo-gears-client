/* eslint-disable @typescript-eslint/no-explicit-any */

const CarDetailspage = ({
  params,
  searchParams,
}: {
  params: { carId: string };
  searchParams: any;
}) => {
  return (
    <div>
      car id : {params.carId} <br /> {searchParams.carName}
    </div>
  );
};

export default CarDetailspage;
