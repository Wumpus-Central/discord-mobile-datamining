// === Module 13996: SANCTIONED_UNITS ===

// Module 13996 (SANCTIONED_UNITS)
function removeUnitNamespace(arr) {
  return arr.slice(arr.indexOf("-") + 1);
}
const SANCTIONED_UNITS = exports.SANCTIONED_UNITS;
const SANCTIONED_UNITS_export = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

export { removeUnitNamespace };
export const IsSanctionedSimpleUnitIdentifier = function IsSanctionedSimpleUnitIdentifier(arg0) {
  const SIMPLE_UNITS = exports.SIMPLE_UNITS;
  return SIMPLE_UNITS.indexOf(arg0) > -1;
};
export { SANCTIONED_UNITS_export as SANCTIONED_UNITS };
export const SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);