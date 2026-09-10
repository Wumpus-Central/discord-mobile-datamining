// === Module 11035: showThreadBrowserModal ===

// Module 11035 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4463 */;
import ThreadUtils from "ThreadUtils" /* 7832 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10988 */;
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