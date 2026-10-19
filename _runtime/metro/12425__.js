// === Module 12425: ? ===

// Module 12425
import _mod12424 from "module_12424" /* 12424 */;
import _mod12426 from "module_12426" /* 12426 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12424.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12426.getStackAsyncContextStrategy();
    const tmpResult = _mod12426;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12424.getMainCarrier();
  _mod12424.getSentryCarrier(mainCarrier).acs = acs;
};