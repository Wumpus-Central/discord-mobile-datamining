// === Module 11504: useCreateThreadViewProps ===

// Module 11504 (useCreateThreadViewProps)
import useGetThreadDraftSettingsDefault from "useGetThreadDraftSettings" /* 10392 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
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
};