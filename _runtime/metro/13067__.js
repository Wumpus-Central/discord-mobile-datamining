// _runtime/metro/13067__.js
import _mod13066 from "13066__.js";
import _mod13068 from "13068__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13066.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13068.getStackAsyncContextStrategy();
    const tmpResult = _mod13068;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13066.getMainCarrier();
  _mod13066.getSentryCarrier(mainCarrier).acs = acs;
};
