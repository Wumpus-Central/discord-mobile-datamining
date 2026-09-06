// _runtime/14215_IsValidTimeZoneName.js

export const IsValidTimeZoneName = function IsValidTimeZoneName(str, arg1) {
  ({ zoneNamesFromData, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const set = new Set();
  const set1 = new Set();
  const mapped = zoneNamesFromData.map((item) => item.toUpperCase());
  const item = mapped.forEach((item) => set.add(item));
  const keys = Object.keys(uppercaseLinks);
  const item1 = keys.forEach((item) => {
    set1.add(item.toUpperCase());
    set.add(uppercaseLinks[item].toUpperCase());
  });
  return set.has(formatted) || set1.has(formatted);
};
