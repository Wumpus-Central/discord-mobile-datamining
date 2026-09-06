// _runtime/metro/04536__.js
import PATTERN_CHARS from "../04537_PATTERN_CHARS.js";

const obj = { success: null, error: null, warning: null, heartbeat: null, tripleClick: null, notification: null };
obj.success = PATTERN_CHARS.pattern("oO.O");
obj.error = PATTERN_CHARS.pattern("OO.OO");
obj.warning = PATTERN_CHARS.pattern("O.O");
obj.heartbeat = PATTERN_CHARS.pattern("oO--oO");
obj.tripleClick = PATTERN_CHARS.pattern("o.o.o");
obj.notification = PATTERN_CHARS.pattern("o-O=o");

export const Patterns = obj;
