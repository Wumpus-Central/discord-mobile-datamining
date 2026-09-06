// discord_app/modules/threads/native/useCreateThreadViewProps.tsx
import useGetThreadDraftSettingsDefault from "../useGetThreadDraftSettings.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThreadViewProps.tsx");

export default function useCreateThreadViewProps(arg0) {
  const tmp = useGetThreadDraftSettingsDefault(arg0);
  _require = tmp;
  let obj = require("useStateFromStores");
  const items = [ChannelStore];
  const items1 = [tmp];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      parentChannelId = undefined;
      if (parentChannelId != null) {
        parentChannelId = parentChannelId.parentChannelId;
      }
      return ChannelStore.getChannel(parentChannelId);
    },
    items1,
  );
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = null;
    if (null != stateFromStores) {
      obj = { threadSettingsDraft: tmp, parentChannel: stateFromStores };
      tmp3 = obj;
    }
  }
  return tmp3;
}
