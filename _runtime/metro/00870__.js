// _runtime/metro/00870__.js
import _mod681 from "00681__.js";

require = arg1;
const dependencyMap = arg6;

export () => {
  const mainCarrier = _mod681.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[_mod681.SDK_VERSION] || {};
  tmp4[_mod681.SDK_VERSION] = tmp5;
  return tmp5;
}