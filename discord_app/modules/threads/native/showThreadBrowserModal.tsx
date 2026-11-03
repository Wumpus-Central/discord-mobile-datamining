// === Module 11129: showThreadBrowserModal ===

// Module 11129 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5322 */;
import ThreadUtils from "ThreadUtils" /* 8471 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10267 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let result = size.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  const result = ThreadUtils.trackThreadBrowserOpened();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    const obj3 = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj3);
  }
  tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
};