// === Module 13784: __exportStarResult8 ===

// Module 13784 (__exportStarResult8)
arg5.IsValidTimeZoneName = function IsValidTimeZoneName(str) {
  ({ zoneNamesFromData, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const set = new Set();
  const set1 = new Set();
  const mapped = zoneNamesFromData.map((str) => str.toUpperCase());
  const item = mapped.forEach((arg0) => set.add(arg0));
  const keys = Object.keys(uppercaseLinks);
  const item1 = keys.forEach((str) => {
    set1.add(str.toUpperCase());
    set.add(uppercaseLinks[str].toUpperCase());
  });
  return set.has(formatted) || set1.has(formatted);
};