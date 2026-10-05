// === Module 16461: ICYMIForumThreadRow ===

// Module 16461 (ICYMIForumThreadRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import ICYMIShared from "ICYMIShared" /* 16435 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16394 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { pressable: { flex: 1, paddingLeft: marginHorizontal.inset }, container: { marginHorizontal: marginHorizontal.margin }, subtitle: { marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin }, footer: { justifyContent: "flex-end", paddingLeft: marginHorizontal.inset, marginTop: marginHorizontal.margin, gap: marginHorizontal.margin }, threadAsComments: { marginHorizontal: marginHorizontal.margin }, ICYMICardInteractionRow: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin } };
  ({ marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let stateFromStores;
  let tmp17;
  let tmp7;
  const tmp = channel;
  let obj = channel(stateFromStores[8]);
  const cResult = obj.c(60);
  channel = channel.channel;
  const message = channel.message;
  closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function _() {
      let guildId;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return getGuild(guildId);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[9]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const author = message.author;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
  }
  if (cResult[4] !== channel.parent_id) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
    cResult[4] = channel.parent_id;
    cResult[5] = C;
  } else {
    class C {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
  }
  tmp(stateFromStores[9]);
  if (cResult[6] === author.id) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
    const tmp13 = cResult[7];
    if (stateFromStores != null) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channel.parent_id);
        }
      }
    }
    if (tmp13 === undefined) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channel.parent_id);
        }
      }
    }
    if (stateFromStores != null) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channel.parent_id);
        }
      }
    }
    if (cResult[9] === author.id) {
      class C {
        constructor() {
          return ChannelStore.getChannel(channel.parent_id);
        }
      }
      const effect = author.useEffect(S, tmp17);
      if (cResult[12] === channel) {
        class C {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
      }
      class A {
        constructor() {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
          const obj2 = ICYMIActionCreatorsDefault;
          const obj3 = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
          obj2.feedItemActioned(obj3);
          const tmp6 = null != channel && null != stateFromStores;
          if (tmp6) {
            const obj4 = ICYMIShared;
            obj4.navigateToPost(channel.id, stateFromStores.id, message.id);
          }
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
    tmp17 = items2;
  }
  cResult[6] = author.id;
  if (stateFromStores != null) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channel.parent_id);
      }
    }
  }
  class S {
    constructor() {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (null != id) {
        let id1;
        const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
        GuildActionCreatorsDefault;
        if (stateFromStores != null) {
          id1 = stateFromStores.id;
        }
        const items = [author.id];
        const membersById = requestMembersById(id1, items);
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = S;
}) : ((channel) => {
  let intl;
  let items5;
  let items6;
  let obj11;
  let obj12;
  let obj6;
  let tmp11Result3;
  let tmp11Result4;
  channel = channel.channel;
  const message = channel.message;
  let stateFromStores;
  const visible = channel.visible;
  const tmp = closure_9();
  let obj = channel(stateFromStores[9]);
  let items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return getGuild(guildId);
  });
  const author = message.author;
  let obj2 = channel(stateFromStores[9]);
  const items1 = [ChannelStore];
  let obj3 = author;
  const items2 = [author.id, ];
  let id;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const useEffect = author.useEffect;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items2[1] = id;
  const effect = useEffect(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (null != id) {
      let id1;
      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
      GuildActionCreatorsDefault;
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      const items = [author.id];
      const membersById = requestMembersById(id1, items);
    }
  }, items2);
  const items3 = [channel, stateFromStores, message.id];
  const callback = obj3.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const tmp6 = null != channel && null != stateFromStores;
    if (tmp6) {
      const obj4 = ICYMIShared;
      obj4.navigateToPost(channel.id, stateFromStores.id, message.id);
    }
  }, items3);
  const items4 = [channel.parent_id, message.id];
  const callback1 = obj3.useCallback(() => {
    if (null != channel.parent_id) {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
      const obj3 = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedItemActioned(obj3);
      const obj4 = openChannelLongPressActionSheet;
      const result = obj4.openChannelLongPressActionSheet(tmp.parent_id);
    }
  }, items4);
  const tmp2Result = channel(stateFromStores[14]);
  const gravityMessage = tmp2Result.useGravityMessage(message);
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
            let obj4 = { actionLabel: intl.string(channel(stateFromStores[16]).t.bYNuVx), id: gravityMessage.id, interactionType: "forum_thread", channelId: channel.parent_id, timestamp: tmp11Result3.extractTimestamp(gravityMessage.id), onHeaderPress: callback, onHeaderLongPress: callback1, message: gravityMessage, shouldFeatureUser: true, children: items6 };
            const tmp11Result = message(stateFromStores[23]);
            intl = tmp2(tmp3[16]).intl;
            tmp11Result3 = message(stateFromStores[17]);
            const obj5 = { onPress: callback, onLongPress: callback1, accessibilityRole: "button", unstable_pressDelay: 130, style: tmp.pressable, children: closure_8(View, obj6) };
            obj6 = { style: tmp.container, children: items5 };
            const PressableHighlight = tmp2(tmp3[21]).PressableHighlight;
            const obj7 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: tmp12 };
            items5 = [closure_7(channel(stateFromStores[18]).Text, obj7), , ];
            const obj8 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, lineClamp: 5, children: tmp11Result4.parseInlineReply(message.content, true) };
            const Text = tmp2(tmp3[18]).Text;
            tmp11Result4 = message(stateFromStores[19]);
            items5[1] = closure_7(Text, obj8);
            const obj9 = { message, visible, itemType: "forum_thread" };
            items5[2] = closure_7(message(stateFromStores[20]), obj9);
            items6 = [closure_7(PressableHighlight, obj5), ];
            const obj10 = { style: tmp.footer, children: closure_7(View, obj11) };
            obj11 = { style: tmp.ICYMICardInteractionRow, children: closure_7(message(stateFromStores[22]), obj12) };
            obj12 = { message: gravityMessage, channel, guild: stateFromStores, backgroundVariant: "base", id: gravityMessage.id, itemType: "forum_thread" };
            items6[1] = closure_7(View, obj10);
            tmp13 = closure_8(tmp11Result, obj4);
          }
        }
      }
    }
  }
  return tmp13;
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let message;
  let threadChannel;
  let visible;
  const obj = react2;
  const cResult = obj.c(4);
  ({ message, threadChannel, visible } = arg0);
  if (cResult[0] === message) {
    if (cResult[1] === threadChannel) {
      let tmp2;
      if (cResult[2] === visible) {
        tmp2 = cResult[3];
      }
      return tmp2;
    }
  }
  const tmp3 = metroImportDefault(closure_10, { message, channel: threadChannel, visible });
  cResult[0] = message;
  cResult[1] = threadChannel;
  cResult[2] = visible;
  cResult[3] = tmp3;
  tmp2 = tmp3;
}) : ((message) => {
  const obj = { message: message.message, channel: message.threadChannel, visible: message.visible };
  return metroImportDefault(closure_10, obj);
});
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default tmp4;
export const MAX_AVATARS_IN_PILE = 3;
export const ICYMIForumThreadRow = tmp3;