// discord_app/modules/threads/native/useCreateThreadViewProps.tsx
import useGetThreadDraftSettingsDefault from "../useGetThreadDraftSettings.tsx";
import closure_3 from "../../../stores/ChannelStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = useGetThreadDraftSettingsDefault(arg0);
  const _require = tmp;
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const items1 = [tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let parentChannelId;
    if (parentChannelId != null) {
      parentChannelId = parentChannelId.parentChannelId;
    }
    return closure_1_3.getChannel(parentChannelId);
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