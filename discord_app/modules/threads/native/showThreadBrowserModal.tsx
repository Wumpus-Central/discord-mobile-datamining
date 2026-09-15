// === Module 11100: showThreadBrowserModal ===

// Module 11100 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import ThreadUtils from "ThreadUtils" /* 7886 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11052 */;
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