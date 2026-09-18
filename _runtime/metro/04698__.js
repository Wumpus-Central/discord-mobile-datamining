// _runtime/metro/04698__.js
import PATTERN_CHARS_mod from "../04699_PATTERN_CHARS.js";

const obj = { success: null, error: null, warning: null, heartbeat: null, tripleClick: null, notification: null };
let PATTERN_CHARS = PATTERN_CHARS_mod;
obj.success = PATTERN_CHARS.pattern("oO.O");
let PATTERN_CHARS = PATTERN_CHARS_mod;
obj.error = PATTERN_CHARS.pattern("OO.OO");
let PATTERN_CHARS = PATTERN_CHARS_mod;
obj.warning = PATTERN_CHARS.pattern("O.O");
let PATTERN_CHARS = PATTERN_CHARS_mod;
obj.heartbeat = PATTERN_CHARS.pattern("oO--oO");
let PATTERN_CHARS = PATTERN_CHARS_mod;
obj.tripleClick = PATTERN_CHARS.pattern("o.o.o");
let PATTERN_CHARS = PATTERN_CHARS_mod;
obj.notification = PATTERN_CHARS.pattern("o-O=o");

export const Patterns = obj;
