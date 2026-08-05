// _runtime/14220_uniqBy.js

export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      require("06981_baseUniq.js") /* baseUniq */(arg0, require("00720_baseIteratee.js") /* baseIteratee */(arg1, 2));
      const tmp5 = require("06981_baseUniq.js") /* baseUniq */;
    }
    return [];
  }
};