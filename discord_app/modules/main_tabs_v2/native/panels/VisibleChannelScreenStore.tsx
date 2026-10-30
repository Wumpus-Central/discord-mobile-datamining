// discord_app/modules/main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx
import 00560__ from "../../../../../_runtime/metro/00560__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = module_560.create(() => ({ channelId: null }));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx");

export default obj;
export function setVisibleChannelScreen(channelId) {
  if (obj.getState().channelId !== channelId) {
    const obj2 = { channelId };
    obj.setState(obj2);
  }
}