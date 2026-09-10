// === Module 11688: openPinnedMessages ===

// Module 11688 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4463 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10988 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj);
  }
  tmp = null != rootNavigationRef && rootNavigationRef.isReady();
};