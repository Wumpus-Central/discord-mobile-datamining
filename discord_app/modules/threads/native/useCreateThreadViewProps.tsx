// discord_app/modules/threads/native/useCreateThreadViewProps.tsx
import useGetThreadDraftSettingsDefault from "../useGetThreadDraftSettings.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

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