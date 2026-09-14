// === Module 14345: ? ===

// Module 14345
import e from "e" /* 1160 */;

e.__extends(function MissingLocaleDataError() {
  const self = this;
  let tmp2 = null !== Error;
  if (!tmp2) {
    if (!tmp2) {
      tmp2 = self;
    }
    tmp2.type = "MISSING_LOCALE_DATA";
    return tmp2;
  } else {
    const apply = Error.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
  }
}, Error);

export const isMissingLocaleDataError = function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
};