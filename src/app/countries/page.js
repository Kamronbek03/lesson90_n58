"use client";

import { useState } from "react";
import countries from "@/data/countries";
import Link from "next/link";

export default function Countries() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region ? country.region === region : true)
  );

  return (
    <div className="container mx-auto p-4 bg-[#f0efef] dark:bg-[#202C36] px-20">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-md border bg-white dark:bg-[#2B3844] dark:text-white"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-2 rounded-md border bg-white dark:bg-[#2B3844] dark:text-white mt-4 md:mt-0"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-6 justify-between">
        {filteredCountries.map((country) => (
          <Link
            key={country.name}
            href={`/countries/${country.name.toLowerCase().replace(/ /g, "-")}`}
          >
            <div className="bg-white dark:bg-[#2B3844] rounded-lg shadow-md cursor-pointer w-[264px]">
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-32 object-cover rounded-md"
                style={{ padding: "0px" }} // Ensure flag image fits the card width
              />
              <h2 className="mt-4 pl-4 font-bold text-lg dark:text-white">
                {country.name}
              </h2>
              <p className="text-sm pl-4 text-gray-700 dark:text-gray-300">
                Population: {country.population.toLocaleString("en-US")}
              </p>
              <p className="text-sm pl-4 text-gray-700 dark:text-gray-300">
                Region: {country.region}
              </p>
              <p className="text-sm pl-4 text-gray-700 dark:text-gray-300">
                Capital: {country.capital}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
