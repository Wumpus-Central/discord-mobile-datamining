// === Module 16171: ThreadChannelStarterMessage ===

// Module 16171 (ThreadChannelStarterMessage)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import PressableBase from "PressableBase" /* 5036 */;
import setOptionsDefault from "setOptions" /* 7809 */;
import DCDChatItemDefault from "DCDChatItem" /* 8742 */;
import closure_3 from "processMessage" /* 7308 */;
import { ReferencedMessageState } from "processMessage" /* 7308 */;
import closure_5 from "reinjectEphemerals" /* 4703 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let obj = new setOptionsDefault();
obj.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
const result = require("set").fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = function ThreadChannelStarterMessage(arg0) {
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getMessage(closure_2, closure_1));
  let state;
  if (stateFromStores != null) {
    state = stateFromStores.state;
  }
  let tmp5 = null;
  if (state === ReferencedMessageState.LOADED) {
    obj = { accessibilityRole: "button", onPress: null, children: null };
    obj[1] = function onPress() {
      closure_1_0(closure_1_2[7]).transitionToGuild(closure_0, closure_2, closure_1);
    };
    obj = { rowGenerator: null, message: null, pointerEvents: "none" };
    obj[0] = obj;
    obj[1] = stateFromStores.message;
    obj[2] = jsx(DCDChatItemDefault, { rowGenerator: null, message: null, pointerEvents: "none" });
    tmp5 = jsx(PressableBase.PressableOpacity, { rowGenerator: null, message: null, pointerEvents: "none" });
  }
  return tmp5;
};
export const ThreadCreationStarterMessage = function ThreadCreationStarterMessage(arg0) {
  ({ messageId: require, channelId: importDefault } = arg0);
  obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getMessage(closure_1, closure_0));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { rowGenerator: null, message: null, style: null, pointerEvents: "none" };
    obj[0] = obj;
    obj[1] = stateFromStores;
    obj[2] = { overflow: "visible" };
    tmp3 = jsx(DCDChatItemDefault, { rowGenerator: null, message: null, style: null, pointerEvents: "none" });
  }
  return tmp3;
};