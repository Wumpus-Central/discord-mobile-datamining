// === Module 14202: CanonicalizeTimeZoneName ===

// Module 14202 (CanonicalizeTimeZoneName)

export const CanonicalizeTimeZoneName = function CanonicalizeTimeZoneName(str, arg1) {
  ({ zoneNames, uppercaseLinks } = arg1);
  const formatted = str.toUpperCase();
  const tmp2 = uppercaseLinks[formatted] || zoneNames.reduce((acc, item) => {
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