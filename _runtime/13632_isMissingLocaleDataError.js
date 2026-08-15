// _runtime/13632_isMissingLocaleDataError.js
import e from "e";

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
    const apply = tmp.apply;
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