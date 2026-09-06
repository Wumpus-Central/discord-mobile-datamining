// discord_app/modules/messages/native/openPinnedMessages.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ChannelDetailsConstants from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj);
  }
}
