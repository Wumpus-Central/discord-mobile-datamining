// === Module 15844: ThreadChannelStarterMessage ===

// Module 15844 (ThreadChannelStarterMessage)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import transitionTo from "transitionTo" /* 1222 */;
import PressableBase from "PressableBase" /* 5433 */;
import setOptionsDefault from "setOptions" /* 8157 */;
import DCDChatItemDefault from "DCDChatItem" /* 10066 */;
import processMessage from "processMessage" /* 5013 */;
import { ReferencedMessageState } from "processMessage" /* 5013 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
let obj = new setOptionsDefault();
obj.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
const result = require("obj132").fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

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
      transitionTo.transitionToGuild(closure_0, closure_2, closure_1);
    };
    obj = { rowGenerator: null, message: null };
    obj[0] = obj;
    obj[1] = stateFromStores.message;
    obj[2] = jsx(DCDChatItemDefault, { rowGenerator: null, message: null });
    tmp5 = jsx(PressableBase.PressableOpacity, { rowGenerator: null, message: null });
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
    obj = { rowGenerator: null, message: null, style: null };
    obj[0] = obj;
    obj[1] = stateFromStores;
    obj[2] = { overflow: "visible" };
    tmp3 = jsx(DCDChatItemDefault, { rowGenerator: null, message: null, style: null });
  }
  return tmp3;
};