import ensureGuildLoaded from "ensureGuildLoaded";

let require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = importDefault(9728)(arg0);
  const require = tmp;
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [ensureGuildLoaded];
  const items1 = [tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let parentChannelId;
    if (outer1_3 != null) {
      parentChannelId = tmp.parentChannelId;
    }
    return outer1_3.getChannel(parentChannelId);
  }, items1);
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      obj = { threadSettingsDraft: null, parentChannel: null };
      obj[0] = tmp;
      obj[1] = stateFromStores;
      tmp3 = obj;
    }
  }
  return tmp3;
};