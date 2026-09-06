// === Module 10963: showThreadBrowserModal ===

// Module 10963 (showThreadBrowserModal)
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ThreadUtils from "ThreadUtils" /* 7781 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10916 */;
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
};