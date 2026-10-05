// _runtime/metro/14020__.js
import 01172__ from "01172__.js";

module_1172.__extends(function MissingLocaleDataError() {
  const self = this;
  const applyResult = null !== Error && Error(...arguments) || self;
  applyResult.type = "MISSING_LOCALE_DATA";
  return applyResult;
}, Error);

export const isMissingLocaleDataError = function isMissingLocaleDataError(type) {
  return "MISSING_LOCALE_DATA" === type.type;
};