// _runtime/06980_uniqWith.js

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require("06981_baseUniq.js") /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};