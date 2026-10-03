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
const ReferencedMessageState = fn(7102).ReferencedMessageState;
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
fn(558);
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let PressableOpacity = guildId;
      let tmp = channelId;
      const cResult = guildId(channelId[6]).c(13);
      guildId = guildId.guildId;
      const messageId = guildId.messageId;
      channelId = guildId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReferencedMessageStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === messageId) {
          let tmp5 = cResult[3];
        }
        const stateFromStores = PressableOpacity(tmp[7]).useStateFromStores(first, tmp5);
        state = undefined;
        if (stateFromStores != null) {
          state = stateFromStores.state;
        }
        if (state !== ReferencedMessageState.LOADED) {
          return null;
        } else {
          if (cResult[4] === channelId) {
            if (cResult[5] === guildId) {
              if (cResult[6] === messageId) {
                let tmp11 = cResult[7];
              }
              class S {
                constructor() {
                  obj = closure_0(closure_2[8]);
                  transitionToGuildResult = obj.transitionToGuild(guildId, channelId, messageId);
                  return;
                }
              }
              if (cResult[10] === tmp11) {
                class S {
                  constructor() {
                    obj = closure_0(closure_2[8]);
                    transitionToGuildResult = obj.transitionToGuild(guildId, channelId, messageId);
                    return;
                  }
                }
              }
              PressableOpacity = PressableOpacity(tmp[10]).PressableOpacity;
              const obj2 = { accessibilityRole: "button", onPress: tmp11, children: tmp12 };
              tmp = (
                <PressableOpacity accessibilityRole="button" onPress={tmp11}>
                  {tmp12}
                </PressableOpacity>
              );
              cResult[10] = tmp11;
              cResult[11] = tmp12;
              cResult[12] = tmp;
            }
          }
          class S {
            constructor() {
              obj = closure_0(closure_2[8]);
              transitionToGuildResult = obj.transitionToGuild(guildId, channelId, messageId);
              return;
            }
          }
          cResult[4] = channelId;
          cResult[5] = guildId;
          cResult[6] = messageId;
          cResult[7] = S;
          tmp11 = S;
        }
        const PressableOpacityResult = PressableOpacity(tmp[7]);
      }
      const fn = function u() {
        return ReferencedMessageStore.getMessage(channelId, messageId);
      };
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = fn;
      tmp5 = fn;
      const obj = guildId(channelId[6]);
    }
  : (arg0) => {
      ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
      rowGenerator = initialize;
      const items = [ReferencedMessageStore];
      const stateFromStores = rowGenerator.useStateFromStores(items, () =>
        ReferencedMessageStore.getMessage(dependencyMap, importDefault),
      );
      state = undefined;
      if (stateFromStores != null) {
        state = stateFromStores.state;
      }
      let tmp5 = null;
      if (state === ReferencedMessageState.LOADED) {
        const obj2 = {
          accessibilityRole: "button",
          onPress() {
            router_utils.transitionToGuild(_require, dependencyMap, importDefault);
          },
          children: null,
        };
        const obj3 = { rowGenerator, message: stateFromStores.message, pointerEvents: "none" };
        obj2.children = jsx(ChatItemDefault, { rowGenerator, message: stateFromStores.message, pointerEvents: "none" });
        tmp5 = jsx(Pressables.PressableOpacity, {
          accessibilityRole: "button",
          onPress() {
            router_utils.transitionToGuild(_require, dependencyMap, importDefault);
          },
          children: null,
        });
      }
      return tmp5;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export const ThreadChannelStarterMessage = tmp4;
export const ThreadCreationStarterMessage = ReactCompilerGating.isReactCompilerEnabled()
  ? (messageId) => {
      let tmp2 = dependencyMap;
      rowGenerator = messageId(576);
      const cResult = rowGenerator.c(7);
      messageId = messageId.messageId;
      const channelId = messageId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === messageId) {
          let tmp6 = cResult[3];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
        if (null == stateFromStores) {
          return null;
        } else {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { overflow: "visible" };
            cResult[4] = obj2;
            let tmp9 = obj2;
          } else {
            tmp9 = cResult[4];
          }
          if (cResult[5] !== stateFromStores) {
            const obj3 = { rowGenerator, message: stateFromStores, style: tmp9, pointerEvents: "none" };
            tmp2 = jsx(channelId(8303), { rowGenerator, message: stateFromStores, style: tmp9, pointerEvents: "none" });
            cResult[5] = stateFromStores;
            cResult[6] = tmp2;
          }
        }
        const tmpResult = tmp(504);
      }
      const fn = function c() {
        return MessageStore.getMessage(channelId, messageId);
      };
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = fn;
      tmp6 = fn;
      tmp = messageId;
    }
  : (arg0) => {
      ({ messageId: require, channelId: importDefault } = arg0);
      rowGenerator = initialize;
      const items = [MessageStore];
      const stateFromStores = rowGenerator.useStateFromStores(items, () =>
        MessageStore.getMessage(importDefault, _require),
      );
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
