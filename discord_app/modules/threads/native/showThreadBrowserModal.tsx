// discord_app/modules/threads/native/showThreadBrowserModal.tsx
import set from "../../../../_runtime/00002_set.js";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import getAccessibilityLabelFormatter from "../ThreadUtils.tsx";
import ChannelDetailsNavigatorScreens from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";

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
}
