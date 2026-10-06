// === Module 16805: ThreadParentMessage ===

// Module 16805 (ThreadParentMessage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import router_utils from "router_utils" /* 1112 */;
import Pressables from "Pressables" /* 5916 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7115 */;
import RowGeneratorDefault from "RowGenerator" /* 7602 */;
import ChatItemDefault from "ChatItem" /* 8336 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5116 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;
let guildId;

const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const jsx = Fragment.jsx;
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let channelId;
  let first;
  let obj = guildId(channelId[6]);
  const cResult = obj.c(13);
  guildId = guildId.guildId;
  const messageId = guildId.messageId;
  channelId = guildId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferencedMessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp6;
    if (cResult[2] === messageId) {
      tmp6 = cResult[3];
    }
    const tmpResult = guildId(channelId[7]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    let state;
    if (stateFromStores != null) {
      state = stateFromStores.state;
    }
    if (state === ReferencedMessageState.LOADED) {
      if (cResult[4] === channelId) {
        if (cResult[5] === guildId) {
          let tmp12;
          if (cResult[6] === messageId) {
            tmp12 = cResult[7];
          }
          class S {
            constructor() {
              const obj = router_utils;
              obj.transitionToGuild(guildId, channelId, messageId);
            }
          }
          if (cResult[10] === tmp12) {
            class S {
              constructor() {
                const obj = router_utils;
                obj.transitionToGuild(guildId, channelId, messageId);
              }
            }
          }
          cResult[10] = tmp12;
          cResult[11] = tmp13;
          cResult[12] = jsx(guildId(channelId[10]).PressableOpacity, { accessibilityRole: "button", onPress: tmp12, children: tmp13 });
          const tmp16 = jsx(guildId(channelId[10]).PressableOpacity, { accessibilityRole: "button", onPress: tmp12, children: tmp13 });
        }
      }
      class S {
        constructor() {
          const obj = router_utils;
          obj.transitionToGuild(guildId, channelId, messageId);
        }
      }
      cResult[4] = channelId;
      cResult[5] = guildId;
      cResult[6] = messageId;
      cResult[7] = S;
      tmp12 = S;
    }
    return null;
  }
  const fn = function u() {
    return ReferencedMessageStore.getMessage(channelId, messageId);
  };
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0) => {
  let require;
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  rowGenerator = get_initialized;
  const items = [ReferencedMessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => ReferencedMessageStore.getMessage(dependencyMap, importDefault));
  let state;
  if (stateFromStores != null) {
    state = stateFromStores.state;
  }
  let tmp5 = null;
  if (state === ReferencedMessageState.LOADED) {
    const PressableOpacity = Pressables.PressableOpacity;
    tmp5 = <PressableOpacity accessibilityRole="button" onPress={function onPress() {
      const obj = router_utils;
      obj.transitionToGuild(_require, dependencyMap, importDefault);
    }}>{null}</PressableOpacity>;
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((messageId) => {
  let first;
  rowGenerator = messageId(576);
  const cResult = rowGenerator.c(7);
  const tmp = messageId;
  messageId = messageId.messageId;
  const channelId = messageId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp6;
    if (cResult[2] === messageId) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    let tmp8 = null;
    if (null != stateFromStores) {
      let tmp9;
      let tmp10;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { overflow: "visible" };
        cResult[4] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== stateFromStores) {
        const tmp14 = jsx(channelId(8336), { rowGenerator, message: stateFromStores, style: tmp9, pointerEvents: "none" });
        cResult[5] = stateFromStores;
        cResult[6] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[6];
      }
      tmp8 = tmp10;
    }
    return tmp8;
  }
  const fn = function c() {
    return MessageStore.getMessage(channelId, messageId);
  };
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0) => {
  let require;
  ({ messageId: require, channelId: importDefault } = arg0);
  rowGenerator = get_initialized;
  const items = [MessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => MessageStore.getMessage(importDefault, _require));
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = jsx(ChatItemDefault, { rowGenerator, message: stateFromStores, style: { overflow: "visible" }, pointerEvents: "none" });
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = tmp4;
export const ThreadCreationStarterMessage = tmp5;