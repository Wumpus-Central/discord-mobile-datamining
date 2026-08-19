// === Module 13578: __exportStarResult1 ===

// Module 13578 (__exportStarResult1)
arg5.CanonicalizeTimeZoneName = function CanonicalizeTimeZoneName(str) {
  ({ zoneNames, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const tmp2 = uppercaseLinks[formatted] || zoneNames.reduce((acc, item, index) => {
    acc[item.toUpperCase()] = item;
    return acc;
  }, {})[formatted];
  if ("Etc/UTC" !== tmp2) {
    if ("Etc/GMT" !== tmp2) {
      return tmp2;
    }
  }
  return "UTC";
};