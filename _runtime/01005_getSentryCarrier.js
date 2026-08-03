const require = arg1;
const dependencyMap = arg6;
arg5.getSentryCarrier = () => {
  const mainCarrier = require(817) /* registerSpanErrorInstrumentation */.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[require(undefined, 817) /* registerSpanErrorInstrumentation */.SDK_VERSION] || {};
  tmp4[require(817) /* registerSpanErrorInstrumentation */.SDK_VERSION] = tmp5;
  return tmp5;
};