// === Module 9778: useCreateThreadViewProps ===

// Module 9778 (useCreateThreadViewProps)
import useGetThreadDraftSettingsDefault from "useGetThreadDraftSettings" /* 9779 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(8);
  const tmp4 = useGetThreadDraftSettingsDefault(arg0);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let parentChannelId;
  if (tmp4 != null) {
    parentChannelId = tmp4.parentChannelId;
  }
  if (cResult[1] !== parentChannelId) {
    let parentChannelId1;
    if (tmp4 != null) {
      parentChannelId1 = tmp4.parentChannelId;
    }
    const fn = function u() {
      parentChannelId = undefined;
      if (parentChannelId != null) {
        parentChannelId = parentChannelId.parentChannelId;
      }
      return ChannelStore.getChannel(parentChannelId);
    };
    cResult[1] = parentChannelId1;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp8, tmp10);
  let tmp12 = null;
  if (null != tmp4) {
    tmp12 = null;
    if (null != stateFromStores) {
      if (cResult[5] === stateFromStores) {
      }
      const obj2 = { threadSettingsDraft: tmp4, parentChannel: stateFromStores };
      cResult[5] = stateFromStores;
      cResult[6] = tmp4;
      cResult[7] = obj2;
    }
  }
  return tmp12;
}) : ((arg0) => {
  const tmp = useGetThreadDraftSettingsDefault(arg0);
  _require = tmp;
  const items = [ChannelStore];
  const items1 = [tmp];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    parentChannelId = undefined;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    return ChannelStore.getChannel(parentChannelId);
  }, items1);
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      const obj2 = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
      tmp3 = obj2;
    }
  }
  return tmp3;
});