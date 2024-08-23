"use client";

import { useState } from "react";
import countries from "@/data/countries";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function formatCountryName(name) {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export default function Countries() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region ? country.region === region : true)
  );

  return (
    <div className="container pt-[104px] mx-auto p-4 bg-[#f0efef] dark:bg-[#202C36] px-20">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="relative w-full md:w-1/2">
          <MagnifyingGlassIcon
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-white ${
              search ? "hidden" : ""
            }`}
          />
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 pl-10 rounded-md border-none outline-none bg-white dark:bg-[#2B3844] dark:text-white"
          />
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-2 rounded-md border-none outline-none bg-white dark:bg-[#2B3844] dark:text-white mt-4 md:mt-0"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[75px]">
        {filteredCountries.map((country) => (
          <Link
            key={country.name}
            href={`/countries/${formatCountryName(country.name)}`}
          >
            <div className="bg-white pb-5 dark:bg-[#2B3844] rounded-lg shadow-md cursor-pointer w-[264px]">
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h2 className="mt-4 pl-4 mb-2 font-bold text-lg dark:text-white">
                {country.name}
              </h2>
              <p className="text-sm pl-4 text-gray-700 dark:text-gray-300">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString("en-US")}
              </p>
              <p className="text-sm pl-4 text-gray-700 dark:text-gray-300">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="text-sm pl-4 text-gray-700 dark:text-gray-300">
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
