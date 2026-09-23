// === Module 11311: showThreadBrowserModal ===

// Module 11311 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4685 */;
import ThreadUtils from "ThreadUtils" /* 8108 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11262 */;
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