// discord_app/modules/threads/native/components/ThreadParentMessage.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import transitionTo from "../../../routing/router_utils.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import setOptionsDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import DCDChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import processMessage from "../../../replies/ReferencedMessageStore.tsx";
import { ReferencedMessageState } from "../../../replies/ReferencedMessageStore.tsx";
import reinjectEphemerals from "../../../../stores/MessageStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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