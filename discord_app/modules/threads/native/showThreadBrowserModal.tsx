// === Module 13869: showThreadBrowserModal ===

// Module 13869 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import ThreadUtils from "ThreadUtils" /* 8518 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10531 */;
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