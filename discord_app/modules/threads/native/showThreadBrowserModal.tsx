// === Module 10006: showThreadBrowserModal ===

// Module 10006 (showThreadBrowserModal)
import obj132 from "obj132" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import getAccessibilityLabelFormatter from "getAccessibilityLabelFormatter" /* 7528 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 9922 */;

let closure_2 = ChannelDetailsNavigatorScreens.ChannelDetailsNavigatorScreens;
let result = obj132.fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = getAccessibilityLabelFormatter;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
  tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
};