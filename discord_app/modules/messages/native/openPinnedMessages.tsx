// === Module 11746: openPinnedMessages ===

// Module 11746 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11047 */;
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