// discord_app/modules/threads/native/showThreadBrowserModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import getAccessibilityLabelFormatter from "../ThreadUtils.tsx";
import ChannelDetailsNavigatorScreens from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";

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