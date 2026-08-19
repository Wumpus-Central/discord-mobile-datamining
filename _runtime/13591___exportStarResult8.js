// === Module 13591: __exportStarResult8 ===

// Module 13591 (__exportStarResult8)
arg5.IsValidTimeZoneName = function IsValidTimeZoneName(str) {
  ({ zoneNamesFromData, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const set = new Set();
  const set1 = new Set();
  const mapped = zoneNamesFromData.map((item, index) => item.toUpperCase());
  const item = mapped.forEach((item, index) => set.add(item));
  const keys = Object.keys(uppercaseLinks);
  const item1 = keys.forEach((item, index) => {
    set1.add(item.toUpperCase());
    set.add(uppercaseLinks[item].toUpperCase());
  });
  return set.has(formatted) || set1.has(formatted);
};