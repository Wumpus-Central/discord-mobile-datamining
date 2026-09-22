// _runtime/metro/13073__.js
import _mod13072 from "13072__.js";
import _mod13074 from "13074__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13072.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13074.getStackAsyncContextStrategy();
    const tmpResult = _mod13074;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13072.getMainCarrier();
  _mod13072.getSentryCarrier(mainCarrier).acs = acs;
};
