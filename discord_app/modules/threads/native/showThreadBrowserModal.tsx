// === Module 10995: showThreadBrowserModal ===

// Module 10995 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4432 */;
import ThreadUtils from "ThreadUtils" /* 7795 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10948 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let result = size.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = ThreadUtils;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    obj = { channelId: id.id, initialRouteName: constants.THREADS };
    rootNavigationRef.navigate("sidebar", obj);
  }
  tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
};