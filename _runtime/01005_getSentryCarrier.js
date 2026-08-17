// _runtime/01005_getSentryCarrier.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

require = arg1;
const dependencyMap = arg6;
arg5.getSentryCarrier = () => {
  const mainCarrier = registerSpanErrorInstrumentation.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[registerSpanErrorInstrumentation.SDK_VERSION] || {};
  tmp4[registerSpanErrorInstrumentation.SDK_VERSION] = tmp5;
  return tmp5;
};