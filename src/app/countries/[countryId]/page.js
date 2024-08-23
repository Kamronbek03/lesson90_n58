import { notFound } from "next/navigation";
import countries from "@/data/countries";
import Link from "next/link";

// Helper function to format country names for URL
function formatCountryName(name) {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, ""); // Remove any special characters
}

export default function CountryDetail({ params }) {
  const { countryId } = params;

  const country = countries.find(
    (c) => formatCountryName(c.name) === countryId.toLowerCase()
  );

  if (!country) {
    notFound();
  }

  return (
    <div className="container pt-[104px] mx-auto min-h-screen p-4 bg-[#f0efef] dark:bg-[#202C36] px-20">
      <Link href="/countries">
        <button className="bg-white dark:bg-[#2B3844] text-gray-800 dark:text-white p-2 rounded-md shadow-md mb-8">
          &larr; Back
        </button>
      </Link>
      <div className="flex flex-col md:flex-row items-center justify-between pb-[80px]">
        <img
          src={country.flag}
          alt={country.name}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
        />
        <div className="mt-6 md:mt-0 md:ml-10">
          <h2 className="text-3xl font-bold dark:text-white mb-[23px]">
            {country.name}
          </h2>
          <div className="flex flex-wrap  gap-[117px]">
            <div className="flex flex-col  flex-wrap gap-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Native Name:</strong> {country.nativeName}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Sub Region:</strong> {country.subRegion}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-[68px]">
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Top Level Domain:</strong>{" "}
                {country.topLevelDomain.join(", ")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Currencies:</strong> {country.currencies.join(", ")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Languages:</strong> {country.languages.join(", ")}
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            <strong>Border Countries:</strong>
          </p>
          <div className="flex flex-wrap gap-[16px] mt-2">
            {country.borders.map((border) => (
              <span
                key={border}
                className="bg-white dark:bg-[#2B3844] text-gray-800 dark:text-white p-2 rounded-md shadow-md"
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
