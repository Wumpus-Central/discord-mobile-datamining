// discord_app/modules/icymi/native/ICYMIForumThreadRow.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createICYMIStyles = fn(16394);
let closure_9 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = {
    pressable: { flex: 1, paddingLeft: marginHorizontal.inset },
    container: { marginHorizontal: marginHorizontal.margin },
    subtitle: { marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin },
    footer: {
      justifyContent: "flex-end",
      paddingLeft: marginHorizontal.inset,
      marginTop: marginHorizontal.margin,
      gap: marginHorizontal.margin,
    },
    threadAsComments: { marginHorizontal: marginHorizontal.margin },
    ICYMICardInteractionRow: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin },
  };
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(stateFromStores[8]).c(60);
      channel = channel.channel;
      const message = channel.message;
      closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function _() {
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = channel(stateFromStores[8]);
      stateFromStores = channel(stateFromStores[9]).useStateFromStores(first, tmp7);
      const author = message.author;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
      }
      if (cResult[4] !== channel.parent_id) {
        class C {
          constructor() {
            return closure_5.getChannel(channel.parent_id);
          }
        }
        cResult[4] = channel.parent_id;
        cResult[5] = C;
      } else {
        class C {
          constructor() {
            return closure_5.getChannel(channel.parent_id);
          }
        }
      }
      channel(stateFromStores[9]);
      if (cResult[6] === author.id) {
        class C {
          constructor() {
            return closure_5.getChannel(channel.parent_id);
          }
        }
        if (stateFromStores != null) {
          class C {
            constructor() {
              return closure_5.getChannel(channel.parent_id);
            }
          }
        }
        if (cResult[7] === undefined) {
          class C {
            constructor() {
              return closure_5.getChannel(channel.parent_id);
            }
          }
        }
        if (stateFromStores != null) {
          class C {
            constructor() {
              return closure_5.getChannel(channel.parent_id);
            }
          }
        }
        if (cResult[9] === author.id) {
          class C {
            constructor() {
              return closure_5.getChannel(channel.parent_id);
            }
          }
          const effect = author.useEffect(S, tmp16);
          if (cResult[12] === channel) {
            class C {
              constructor() {
                return closure_5.getChannel(channel.parent_id);
              }
            }
          }
          class A {
            constructor() {
              tmp = closure_2;
              obj = closure_1(closure_2[11]);
              tmp2 = message;
              itemInteractedResult = obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
              obj2 = closure_1(closure_2[11]);
              obj1 = {
                itemId: message.id,
                itemType: "forum_thread",
                actionParameters: {
                  actionGestureType: "press",
                  actionTargetElement: "item_container",
                  actionIntentType: "navigate",
                  actionDestinationType: "channel",
                },
              };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              tmp6 = null != channel;
              tmp5 = channel;
              if (tmp6) {
                tmp7 = closure_2;
                tmp6 = null != closure_2;
              }
              if (tmp6) {
                tmp8 = closure_0;
                obj4 = closure_0(tmp[12]);
                tmp9 = closure_2;
                navigateToPostResult = obj4.navigateToPost(tmp5.id, closure_2.id, tmp2.id);
              }
              return;
            }
          }
          cResult[12] = channel;
          cResult[13] = stateFromStores;
          cResult[14] = message.id;
          cResult[15] = A;
        }
        const items2 = [author.id, undefined];
        cResult[9] = author.id;
        cResult[10] = undefined;
        cResult[11] = items2;
        tmp16 = items2;
      }
      cResult[6] = author.id;
      if (stateFromStores != null) {
        class C {
          constructor() {
            return closure_5.getChannel(channel.parent_id);
          }
        }
      }
      class S {
        constructor() {
          tmp = closure_2;
          id = undefined;
          if (closure_2 != null) {
            id = tmp.id;
          }
          if (null != id) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[10]);
            id1 = undefined;
            if (tmp != null) {
              id1 = tmp.id;
            }
            tmp6 = author;
            items = [];
            items[0] = author.id;
            membersById = obj.requestMembersById(id1, items);
          }
          return;
        }
      }
      cResult[7] = undefined;
      cResult[8] = S;
      const tmpResult = channel(stateFromStores[9]);
    }
  : (channel) => {
      channel = channel.channel;
      const message = channel.message;
      let stateFromStores;
      const tmp = closure_9();
      let items = [GuildStore];
      stateFromStores = channel(stateFromStores[9]).useStateFromStores(items, () => {
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        return GuildStore.getGuild(guildId);
      });
      const author = message.author;
      let obj = channel(stateFromStores[9]);
      const items1 = [ChannelStore];
      const items2 = [author.id];
      let id;
      const stateFromStores1 = channel(stateFromStores[9]).useStateFromStores(items1, () =>
        ChannelStore.getChannel(channel.parent_id),
      );
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      items2[1] = id;
      const effect = author.useEffect(() => {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (null != id) {
          let id1;
          if (stateFromStores != null) {
            id1 = stateFromStores.id;
          }
          const items = [author.id];
          const membersById = GuildActionCreatorsDefault.requestMembersById(id1, items);
        }
      }, items2);
      const items3 = [channel, stateFromStores, message.id];
      const callback = obj3.useCallback(() => {
        ICYMIActionCreatorsDefault.itemInteracted(message.id, "forum_thread", "press_forum_thread");
        ICYMIActionCreatorsDefault.feedItemActioned({
          itemId: message.id,
          itemType: "forum_thread",
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "item_container",
            actionIntentType: "navigate",
            actionDestinationType: "channel",
          },
        });
        let tmp6 = null != channel;
        if (tmp6) {
          tmp6 = null != stateFromStores;
        }
        if (tmp6) {
          ICYMIShared.navigateToPost(channel.id, stateFromStores.id, message.id);
        }
        const obj3 = {
          itemId: message.id,
          itemType: "forum_thread",
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "item_container",
            actionIntentType: "navigate",
            actionDestinationType: "channel",
          },
        };
      }, items3);
      const items4 = [channel.parent_id, message.id];
      const callback1 = obj3.useCallback(() => {
        if (null != channel.parent_id) {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
          const obj3 = {
            itemId: message.id,
            itemType: "forum_thread",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_container",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          };
          ICYMIActionCreatorsDefault.feedItemActioned(obj3);
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(tmp.parent_id);
        }
      }, items4);
      let obj2 = channel(stateFromStores[9]);
      const gravityMessage = channel(stateFromStores[14]).useGravityMessage(message);
      let tmp13 = null;
      if (null != channel) {
        tmp13 = null;
        if (null != channel.guild_id) {
          tmp13 = null;
          if (null != stateFromStores) {
            tmp13 = null;
            if (null != author) {
              tmp13 = null;
              if (null != stateFromStores1) {
                let obj4 = {
                  actionLabel: null,
                  id: null,
                  interactionType: "forum_thread",
                  channelId: null,
                  timestamp: null,
                  onHeaderPress: null,
                  onHeaderLongPress: null,
                  message: null,
                  shouldFeatureUser: true,
                  children: null,
                };
                const intl = tmp2(tmp3[16]).intl;
                obj4.actionLabel = intl.string(tmp2(tmp3[16]).t.bYNuVx);
                obj4.id = gravityMessage.id;
                obj4.channelId = channel.parent_id;
                const tmp11Result = tmp11(tmp3[23]);
                obj4.timestamp = tmp11(tmp3[17]).extractTimestamp(gravityMessage.id);
                obj4.onHeaderPress = callback;
                obj4.onHeaderLongPress = callback1;
                obj4.message = gravityMessage;
                const obj5 = {
                  onPress: callback,
                  onLongPress: callback1,
                  accessibilityRole: "button",
                  unstable_pressDelay: 130,
                  style: tmp.pressable,
                  children: null,
                };
                const obj6 = { style: tmp.container, children: null };
                const obj7 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: tmp12 };
                const items5 = [closure_7(tmp2(tmp3[18]).Text, obj7), ,];
                const obj8 = {
                  variant: "text-md/normal",
                  color: "text-subtle",
                  style: tmp.subtitle,
                  lineClamp: 5,
                  children: null,
                };
                const tmp11Result3 = tmp11(tmp3[17]);
                obj8.children = tmp11(tmp3[19]).parseInlineReply(message.content, true);
                items5[1] = closure_7(tmp2(tmp3[18]).Text, obj8);
                const obj9 = { message, visible: channel.visible, itemType: "forum_thread" };
                items5[2] = closure_7(tmp11(tmp3[20]), obj9);
                obj6.children = items5;
                obj5.children = closure_8(View, obj6);
                const items6 = [closure_7(tmp2(tmp3[21]).PressableHighlight, obj5)];
                const obj10 = { style: tmp.footer, children: null };
                const obj11 = { style: tmp.ICYMICardInteractionRow, children: null };
                const obj12 = {
                  message: gravityMessage,
                  channel,
                  guild: stateFromStores,
                  backgroundVariant: "base",
                  id: gravityMessage.id,
                  itemType: "forum_thread",
                };
                obj11.children = closure_7(tmp11(tmp3[22]), obj12);
                obj10.children = closure_7(View, obj11);
                items6[1] = closure_7(View, obj10);
                obj4.children = items6;
                tmp13 = closure_8(tmp11Result, obj4);
                const tmp11Result4 = tmp11(tmp3[19]);
              }
            }
          }
        }
      }
      return tmp13;
    };
let closure_10 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(4);
      ({ message, threadChannel, visible } = arg0);
      if (cResult[0] === message) {
        if (cResult[1] === threadChannel) {
          if (cResult[2] === visible) {
            let tmp2 = cResult[3];
          }
          return tmp2;
        }
      }
      const tmp3 = React5(closure_10, { message, channel: threadChannel, visible });
      cResult[0] = message;
      cResult[1] = threadChannel;
      cResult[2] = visible;
      cResult[3] = tmp3;
      tmp2 = tmp3;
    }
  : (message) =>
      React5(closure_10, { message: message.message, channel: message.threadChannel, visible: message.visible });
export const MAX_AVATARS_IN_PILE = 3;
export const ICYMIForumThreadRow = tmp3;
