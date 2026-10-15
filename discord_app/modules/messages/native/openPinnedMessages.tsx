// === Module 9847: openPinnedMessages ===

// Module 9847 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 5033 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 9848 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj2);
  }
  tmp = null != rootNavigationRef && rootNavigationRef.isReady();
};