// discord_app/modules/messages/native/openPinnedMessages.tsx
import set from "set" /* 2 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 9922 */;

let closure_2 = ChannelDetailsNavigatorScreens.ChannelDetailsNavigatorScreens;
const result = set.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(arg0, arg1) {
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { initialRouteName: null, channelId: null, source: null };
    obj[0] = constants.PINNED_MESSAGES;
    obj[1] = arg0;
    obj[2] = arg1;
    rootNavigationRef.navigate("sidebar", obj);
  }
};