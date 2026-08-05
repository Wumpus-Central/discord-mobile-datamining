import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { DCDChatItem } from "../../../../components_native/chat/ChatItem.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
// discord_app/modules/threads/native/components/ThreadParentMessage.tsx
import "noop";
import processMessage from "processMessage";
import { ReferencedMessageState } from "processMessage";
import reinjectEphemerals from "reinjectEphemerals";
import { jsx } from "jsxProd";

const require = arg1;
let obj = new require("setOptions")();
obj.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
const result = require("reinjectEphemerals").fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = function ThreadChannelStarterMessage(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  let obj = initialize /* initialize */;
  const items = [processMessage];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getMessage(closure_2, closure_1));
  let state;
  if (stateFromStores != null) {
    state = stateFromStores.state;
  }
  let tmp5 = null;
  if (state === ReferencedMessageState.LOADED) {
    obj = { accessibilityRole: "button", onPress: null, children: null };
    obj[1] = function onPress() {
      outer1_0(outer1_2[7]).transitionToGuild(closure_0, closure_2, closure_1);
    };
    obj = { rowGenerator: null, message: null };
    obj[0] = obj;
    obj[1] = stateFromStores.message;
    obj[2] = jsx(DCDChatItem, { rowGenerator: null, message: null });
    tmp5 = jsx(PressableBase /* PressableBase */.PressableOpacity, { rowGenerator: null, message: null });
  }
  return tmp5;
};
export const ThreadCreationStarterMessage = function ThreadCreationStarterMessage(arg0) {
  let importDefault;
  let require;
  ({ messageId: require, channelId: importDefault } = arg0);
  let obj = initialize /* initialize */;
  const items = [reinjectEphemerals];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getMessage(closure_1, closure_0));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { rowGenerator: null, message: null };
    obj[0] = obj;
    obj[1] = stateFromStores;
    tmp3 = jsx(DCDChatItem, { rowGenerator: null, message: null });
  }
  return tmp3;
};