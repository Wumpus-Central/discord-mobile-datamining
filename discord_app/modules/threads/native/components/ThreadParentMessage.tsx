// discord_app/modules/threads/native/components/ThreadParentMessage.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReferencedMessageStore from "../../../replies/ReferencedMessageStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";

require = fn;
const ReferencedMessageState = fn(7921).ReferencedMessageState;
const jsx = fn(21).jsx;
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({
  renderCodedLinks: false,
  renderGiftCode: false,
  renderActivityInstanceEmbed: false,
  renderActivityInviteEmbed: false,
  renderEmbeds: true,
  ignoreMentioned: true,
  inlineAttachmentMedia: true,
  inlineEmbedMedia: true,
  renderReactions: false,
  renderReplies: true,
  renderThreadEmbeds: false,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = function ThreadChannelStarterMessage(arg0) {
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  rowGenerator = initialize;
  const items = [ReferencedMessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () =>
    ReferencedMessageStore.getMessage(dependencyMap, importDefault),
  );
  let state;
  if (stateFromStores != null) {
    state = stateFromStores.state;
  }
  let tmp5 = null;
  if (state === ReferencedMessageState.LOADED) {
    const obj2 = {
      accessibilityRole: "button",
      onPress() {
        router_utils.transitionToGuild(closure_1_0, dependencyMap, importDefault);
      },
      children: null,
    };
    const obj3 = { rowGenerator, message: stateFromStores.message, pointerEvents: "none" };
    obj2.children = jsx(ChatItemDefault, { rowGenerator, message: stateFromStores.message, pointerEvents: "none" });
    tmp5 = jsx(Pressables.PressableOpacity, {
      accessibilityRole: "button",
      onPress() {
        router_utils.transitionToGuild(closure_1_0, dependencyMap, importDefault);
      },
      children: null,
    });
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
    const obj2 = { rowGenerator, message: stateFromStores, style: { overflow: "visible" }, pointerEvents: "none" };
    tmp3 = jsx(ChatItemDefault, {
      rowGenerator,
      message: stateFromStores,
      style: { overflow: "visible" },
      pointerEvents: "none",
    });
  }
  return tmp3;
};
