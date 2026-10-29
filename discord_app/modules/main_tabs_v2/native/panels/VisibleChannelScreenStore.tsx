// === Module 18489: VisibleChannelScreenStore ===

// Module 18489 (VisibleChannelScreenStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const obj = module_570.create(() => ({ channelId: null }));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/VisibleChannelScreenStore.tsx");

export default obj;
export function setVisibleChannelScreen(channelId) {
  if (obj.getState().channelId !== channelId) {
    const obj2 = { channelId };
    obj.setState(obj2);
  }
}