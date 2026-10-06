// === Module 9791: useCreateThreadViewProps ===

// Module 9791 (useCreateThreadViewProps)
import useGetThreadDraftSettingsDefault from "useGetThreadDraftSettings" /* 9792 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp11;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp4 = useGetThreadDraftSettingsDefault(arg0);
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let parentChannelId;
  const tmp7 = cResult[1];
  if (tmp4 != null) {
    parentChannelId = tmp4.parentChannelId;
  }
  if (tmp7 !== parentChannelId) {
    let parentChannelId1;
    if (tmp4 != null) {
      parentChannelId1 = tmp4.parentChannelId;
    }
    const fn = function u() {
      parentChannelId = undefined;
      const getChannel = ChannelStore.getChannel;
      if (parentChannelId != null) {
        parentChannelId = parentChannelId.parentChannelId;
      }
      return getChannel(parentChannelId);
    };
    cResult[1] = parentChannelId1;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp11);
  let tmp13 = null;
  if (null != tmp4) {
    tmp13 = null;
    if (null != stateFromStores) {
      if (cResult[5] === stateFromStores) {
        let tmp14;
        if (cResult[6] === tmp4) {
          tmp14 = cResult[7];
        }
        tmp13 = tmp14;
      }
      const obj2 = { threadSettingsDraft: tmp4, parentChannel: stateFromStores };
      cResult[5] = stateFromStores;
      cResult[6] = tmp4;
      cResult[7] = obj2;
      tmp14 = obj2;
    }
  }
  return tmp13;
}) : ((arg0) => {
  const tmp = useGetThreadDraftSettingsDefault(arg0);
  _require = tmp;
  const items = [ChannelStore];
  const items1 = [tmp];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => {
    parentChannelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    return getChannel(parentChannelId);
  }, items1);
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      tmp3 = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
      const obj2 = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default tmp2;