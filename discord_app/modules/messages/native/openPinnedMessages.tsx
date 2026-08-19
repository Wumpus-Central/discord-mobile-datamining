// discord_app/modules/messages/native/openPinnedMessages.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ChannelDetailsNavigatorScreens from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";

let closure_2 = ChannelDetailsNavigatorScreens.ChannelDetailsNavigatorScreens;
const result = obj132.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(arg0, arg1) {
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: null, channelId: null, source: null };
    obj[0] = constants.PINNED_MESSAGES;
    obj[1] = arg0;
    obj[2] = arg1;
    rootNavigationRef.navigate("sidebar", obj);
  }
  tmp = null != rootNavigationRef && rootNavigationRef.isReady();
};