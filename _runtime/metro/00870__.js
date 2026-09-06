// _runtime/metro/00870__.js
import _mod682 from "00682__.js";

require = arg1;
const dependencyMap = arg6;

export const getSentryCarrier = () => {
  const mainCarrier = _mod682.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[_mod682.SDK_VERSION] || {};
  tmp4[_mod682.SDK_VERSION] = tmp5;
  return tmp5;
};
