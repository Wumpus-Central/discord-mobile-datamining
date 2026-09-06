// === Module 16519: ICYMIForumThreadRow ===

// Module 16519 (ICYMIForumThreadRow)
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10913 */;
import ICYMIShared from "ICYMIShared" /* 16491 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
class ICYMIForumThreadRow {
  constructor(arg0) {
    channel = global.channel;
    message = global.message;
    closure_2 = undefined;
    author = undefined;
    tmp = closure_9();
    tmp2 = channel;
    tmp3 = closure_2;
    obj = channel(closure_2[7]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return GuildStore.getGuild(guildId);
    });
    closure_2 = stateFromStores;
    author = message.author;
    obj2 = channel(closure_2[7]);
    items1 = [];
    items1[0] = closure_5;
    obj3 = author;
    items2 = [, ];
    items2[0] = author.id;
    id = undefined;
    stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items2[1] = id;
    effect = author.useEffect(() => {
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
    items3 = [, , ];
    items3[0] = channel;
    items3[1] = stateFromStores;
    items3[2] = message.id;
    callback = obj3.useCallback(() => {
      let obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
      obj = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj);
      let tmp6 = null != channel;
      if (tmp6) {
        tmp6 = null != stateFromStores;
      }
      if (tmp6) {
        ICYMIShared.navigateToPost(channel.id, stateFromStores.id, message.id);
      }
    }, items3);
    items4 = [, ];
    items4[0] = channel.parent_id;
    items4[1] = message.id;
    callback1 = obj3.useCallback(() => {
      if (null != channel.parent_id) {
        let obj = ICYMIActionCreatorsDefault;
        obj.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
        obj = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
        ICYMIActionCreatorsDefault.feedItemActioned(obj);
        const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(tmp.parent_id);
      }
    }, items4);
    tmp2Result = tmp2(tmp3[12]);
    gravityMessage = tmp2Result.useGravityMessage(message);
    tmp11 = message;
    tmp13 = null;
    if (null != channel) {
      tmp13 = null;
      if (null != channel.guild_id) {
        tmp13 = null;
        if (null != stateFromStores) {
          tmp13 = null;
          if (null != author) {
            tmp13 = null;
            if (null != stateFromStores1) {
              tmp14 = jsxs;
              obj = { actionLabel: null, id: null, interactionType: "forum_thread", channelId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, message: null, shouldFeatureUser: true, children: null };
              tmp11Result = tmp11(tmp3[14]);
              intl = tmp2(tmp3[15]).intl;
              obj.actionLabel = intl.string(tmp2(tmp3[15]).t.bYNuVx);
              obj.id = gravityMessage.id;
              obj.channelId = channel.parent_id;
              tmp11Result1 = tmp11(tmp3[16]);
              obj.timestamp = tmp11Result1.extractTimestamp(gravityMessage.id);
              obj.onHeaderPress = callback;
              obj.onHeaderLongPress = callback1;
              obj.message = gravityMessage;
              tmp16 = jsx;
              obj1 = { onPress: null, onLongPress: null, accessibilityRole: "button", unstable_pressDelay: 130, style: null, children: null };
              obj1.onPress = callback;
              obj1.onLongPress = callback1;
              obj1.style = tmp.pressable;
              tmp17 = View;
              obj2 = { style: null, children: null };
              obj2.style = tmp.container;
              obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
              obj3.children = tmp12;
              items5 = [, , ];
              items5[0] = jsx(tmp2(tmp3[18]).Text, obj3);
              obj4 = { variant: "text-md/normal", color: "text-subtle", style: null, lineClamp: 5, children: null };
              obj4.style = tmp.subtitle;
              tmp11Result2 = tmp11(tmp3[19]);
              flag = true;
              obj4.children = tmp11Result2.parseInlineReply(message.content, true);
              items5[1] = jsx(tmp2(tmp3[18]).Text, obj4);
              obj5 = { message: null, visible: null, itemType: "forum_thread" };
              obj5.message = message;
              obj5.visible = global.visible;
              items5[2] = jsx(tmp11(tmp3[20]), obj5);
              obj2.children = items5;
              obj1.children = jsxs(View, obj2);
              items6 = [, ];
              items6[0] = jsx(tmp2(tmp3[17]).PressableHighlight, obj1);
              obj6 = { style: null, children: null };
              obj6.style = tmp.footer;
              obj7 = { style: null, children: null };
              obj7.style = tmp.ICYMICardInteractionRow;
              obj8 = { message: null, channel: null, guild: null, backgroundVariant: "base", id: null, itemType: "forum_thread" };
              obj8.message = gravityMessage;
              obj8.channel = channel;
              obj8.guild = stateFromStores;
              obj8.id = gravityMessage.id;
              obj7.children = jsx(tmp11(tmp3[21]), obj8);
              obj6.children = jsx(View, obj7);
              items6[1] = jsx(View, obj6);
              obj.children = items6;
              tmp13 = jsxs(tmp11Result, obj);
            }
          }
        }
      }
    }
    return tmp13;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createICYMIStyles = fn(16452);
const React7 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  let obj = { pressable: { flex: 1, paddingLeft: marginHorizontal.inset }, container: { marginHorizontal: marginHorizontal.margin }, subtitle: null, footer: null, threadAsComments: null, ICYMICardInteractionRow: null };
  obj = { marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin };
  obj.subtitle = obj;
  obj.footer = { justifyContent: "flex-end", paddingLeft: marginHorizontal.inset, marginTop: marginHorizontal.margin, gap: marginHorizontal.margin };
  obj.threadAsComments = { marginHorizontal: marginHorizontal.margin };
  obj.ICYMICardInteractionRow = { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default function ForumThreadRowWrapper(message) {
  return React5(ICYMIForumThreadRow, { message: message.message, channel: message.threadChannel, visible: message.visible });
};
export const MAX_AVATARS_IN_PILE = 3;
export { ICYMIForumThreadRow };