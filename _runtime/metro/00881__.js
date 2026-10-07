// === Module 881: ? ===

// Module 881
import _mod693 from "module_693" /* 693 */;

require = arg1;
const dependencyMap = arg6;

export const getSentryCarrier = () => {
  const mainCarrier = _mod693.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[_mod693.SDK_VERSION] || {};
  tmp4[_mod693.SDK_VERSION] = tmp5;
  return tmp5;
};