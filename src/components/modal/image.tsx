import type { FC } from "react";
import type { Car } from "../../types";
import getImage from "../../utils/getImage";

interface Props {
  car: Car;
}

const Image: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="w-full h-50">
        <img
          src={getImage(car, "", true)}
          className="size-full object-cover rounded-md"
          alt={car.make + "" + car.model}
        />
      </div>

      <div className="flex gap-3 my-3!">
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "29")}
            className="mx-auto! object-contain"
            alt={car.make + "" + car.model + "front view"}
          />
        </div>

        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "33")}
            className="mx-auto! object-contain"
            alt={car.make + "" + car.model + "side view"}
          />
        </div>

        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "13")}
            className="mx-auto! object-contain"
            alt={car.make + "" + car.model + "back view"}
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
