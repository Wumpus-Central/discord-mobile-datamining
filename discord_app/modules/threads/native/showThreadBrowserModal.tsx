// === Module 9891: showThreadBrowserModal ===

// Module 9891 (showThreadBrowserModal)
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4235 */;
import getAccessibilityLabelFormatter from "getAccessibilityLabelFormatter" /* 7384 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 9819 */;

let closure_2 = ChannelDetailsNavigatorScreens.ChannelDetailsNavigatorScreens;
let result = set.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = getAccessibilityLabelFormatter;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  const obj2 = getRootNavigationRef;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};