// === Module 13636: __exportStarResult1 ===

// Module 13636 (__exportStarResult1)
arg5.CanonicalizeTimeZoneName = function CanonicalizeTimeZoneName(str) {
  ({ zoneNames, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const tmp2 = uppercaseLinks[formatted] || zoneNames.reduce((arg0, str) => {
    arg0[str.toUpperCase()] = str;
    return arg0;
  }, {})[formatted];
  if ("Etc/UTC" !== tmp2) {
    if ("Etc/GMT" !== tmp2) {
      return tmp2;
    }
  }
  return "UTC";
};