// === Module 11056: showThreadBrowserModal ===

// Module 11056 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import ThreadUtils from "ThreadUtils" /* 7853 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11008 */;
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