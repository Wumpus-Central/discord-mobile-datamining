// discord_app/modules/main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx
import 00570__ from "../../../../../_runtime/metro/00570__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = module_570.create(() => ({ channelId: null }));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx");

export default obj;
export const setVisibleChannelScreen = function setVisibleChannelScreen(channelId) {
  if (obj.getState().channelId !== channelId) {
    const obj2 = { channelId };
    obj.setState(obj2);
  }
};