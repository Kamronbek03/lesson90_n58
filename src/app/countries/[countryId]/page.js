import { notFound } from "next/navigation";
import countries from "@/data/countries";
import Link from "next/link";

export default function CountryDetail({ params }) {
  const { countryId } = params;

  const country = countries.find(
    (c) => c.name.toLowerCase().replace(/ /g, "-") === countryId.toLowerCase()
  );

  if (!country) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 bg-[#f0efef] dark:bg-[#202C36] px-20">
      <Link href="/countries">
        <button className="bg-white dark:bg-[#2B3844] text-gray-800 dark:text-white p-2 rounded-md shadow-md mb-8">
          &larr; Back
        </button>
      </Link>
      <div className="flex flex-col md:flex-row items-center pb-[80px]">
        <img
          src={country.flag}
          alt={country.name}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
        />
        <div className="mt-6 md:mt-0 md:ml-10">
          <h2 className="text-3xl font-bold dark:text-white">{country.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Native Name: {country.nativeName}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Population: {country.population.toLocaleString()}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Region: {country.region}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Sub Region: {country.subRegion}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Capital: {country.capital}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Top Level Domain: {country.topLevelDomain.join(", ")}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Currencies: {country.currencies.join(", ")}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Languages: {country.languages.join(", ")}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Border Countries:
          </p>
          <div className="flex flex-wrap mt-2">
            {country.borders.map((border) => (
              <span
                key={border}
                className="bg-white dark:bg-[#2B3844] text-gray-800 dark:text-white p-2 rounded-md shadow-md m-1"
              >
                {border}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
