// === Module 9081: useIsPrivateChannelWithEnabledActivities ===

// Module 9081 (useIsPrivateChannelWithEnabledActivities)
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let flag;
    if (stateFromStores != null) {
      flag = stateFromStores.isPrivate();
    }
    if (flag == null) {
      flag = false;
    }
    cResult[3] = stateFromStores;
    cResult[4] = flag;
    tmp7 = flag;
  } else {
    tmp7 = cResult[4];
  }
  return tmp7;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.isPrivate();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
});
const result = size.fileFinishedImporting("modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx");

export default tmp2;
export const isPrivateChannelWithEnabledActivities = function isPrivateChannelWithEnabledActivities(arg0) {
  if (null == arg0) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(arg0);
    let flag;
    if (channel != null) {
      flag = channel.isPrivate();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
};