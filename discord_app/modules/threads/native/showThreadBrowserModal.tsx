// discord_app/modules/threads/native/showThreadBrowserModal.tsx
import { ChannelDetailsNavigatorScreens as closure_2 } from "ChannelDetailsNavigatorScreens";

let result = require("getRootNavigationRef").fileFinishedImporting("modules/threads/native/showThreadBrowserModal.tsx");

export default function showThreadBrowserModal(id) {
  let obj = require("../ThreadUtils.tsx") /* getAccessibilityLabelFormatter */;
  const result = obj.trackThreadBrowserOpened();
  const rootNavigationRef = require("../../main_tabs_v2/RootNavigationRef.native.tsx") /* getRootNavigationRef */.getRootNavigationRef();
  const obj2 = require("../../main_tabs_v2/RootNavigationRef.native.tsx") /* getRootNavigationRef */;
  if (tmp2) {
    obj = { channelId: null, initialRouteName: null };
    obj[0] = id.id;
    obj[1] = constants.THREADS;
    rootNavigationRef.navigate("sidebar", obj);
  }
};