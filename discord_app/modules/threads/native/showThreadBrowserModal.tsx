// discord_app/modules/threads/native/showThreadBrowserModal.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ThreadUtils from "../ThreadUtils.tsx";
import ChannelDetailsConstants from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
