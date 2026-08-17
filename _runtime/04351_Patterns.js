// _runtime/04351_Patterns.js
import set from "set" /* 4352 */;

const obj = { success: null, error: null, warning: null, heartbeat: null, tripleClick: null, notification: null };
obj[0] = set.pattern("oO.O");
obj[1] = set.pattern("OO.OO");
obj[2] = set.pattern("O.O");
obj[3] = set.pattern("oO--oO");
obj[4] = set.pattern("o.o.o");
obj[5] = set.pattern("o-O=o");

export const Patterns = obj;