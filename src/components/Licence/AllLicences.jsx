"use client";
//styles
import styles from "./AllLicences.module.css";
//hooks
import { useState, useEffect } from "react";

//components
import Licenceitem from "./LicenceItem";
import Loading from "@/app/loading";

const AllLicences = () => {
  const [licences, setLicences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLicences = async () => {
    setIsLoading(true);
    const result = await fetch(
      "http://localhost:5124/Licence/GetLicencePageable?PageNumber=1&PageSize=10"
    );

    const res = await result.json();
    setLicences(res.licences);
    setIsLoading(false);
    console.log("res promenljiva je:", res);
  };

  useEffect(() => {
    fetchLicences();
  }, []);

  const licencesToShow = licences.map((licence) => {
    return isLoading ? (
      <Loading />
    ) : (
      <Licenceitem
        name={licence.name}
        price={licence.price}
        img={licence.img}
        category={licence.category}
        id={licence.id}
      />
    );
  });
  return <div className={styles["wrapper"]}>{licencesToShow}</div>;
};

export default AllLicences;
