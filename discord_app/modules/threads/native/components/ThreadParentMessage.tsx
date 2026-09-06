// === Module 16622: ThreadParentMessage ===

// Module 16622 (ThreadParentMessage)
import initialize from "initialize" /* 504 */;
import router_utils from "router_utils" /* 1100 */;
import Pressables from "Pressables" /* 5123 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import ChatItemDefault from "ChatItem" /* 8652 */;
import noop from "module_19" /* 19 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7595 */;
import MessageStore from "MessageStore" /* 4781 */;

require = fn;
const ReferencedMessageState = fn(7595).ReferencedMessageState;
const jsx = fn(21).jsx;
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = function ThreadChannelStarterMessage(arg0) {
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  rowGenerator = initialize;
  const items = [ReferencedMessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => ReferencedMessageStore.getMessage(dependencyMap, importDefault));
  let state;
  if (stateFromStores != null) {
    state = stateFromStores.state;
  }
  let tmp5 = null;
  if (state === ReferencedMessageState.LOADED) {
    rowGenerator = {
      accessibilityRole: "button",
      onPress() {
          router_utils.transitionToGuild(closure_1_0, dependencyMap, importDefault);
        },
      children: null
    };
    rowGenerator = { rowGenerator: null, message: null, pointerEvents: "none" };
    rowGenerator.rowGenerator = rowGenerator;
    rowGenerator.message = stateFromStores.message;
    rowGenerator.children = jsx(ChatItemDefault, { rowGenerator: null, message: null, pointerEvents: "none" });
    tmp5 = jsx(Pressables.PressableOpacity, { rowGenerator: null, message: null, pointerEvents: "none" });
  }
  return tmp5;
};
export const ThreadCreationStarterMessage = function ThreadCreationStarterMessage(arg0) {
  ({ messageId: require, channelId: importDefault } = arg0);
  rowGenerator = initialize;
  const items = [MessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => MessageStore.getMessage(importDefault, require));
  let tmp3 = null;
  if (null != stateFromStores) {
    rowGenerator = { rowGenerator: null, message: null, style: null, pointerEvents: "none" };
    rowGenerator.rowGenerator = rowGenerator;
    rowGenerator.message = stateFromStores;
    rowGenerator.style = { overflow: "visible" };
    tmp3 = jsx(ChatItemDefault, { rowGenerator: null, message: null, style: null, pointerEvents: "none" });
  }
  return tmp3;
};