import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
// discord_app/modules/icymi/native/ICYMIForumThreadRow.tsx
import getDefaultRules from "get defaultRules";
import { View } from "PressableBase";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import jsxProd from "AddEmojiButton";
import createICYMIStyles from "createICYMIStyles";

let error;
let metroImportAll;
const require = arg1;
class ICYMIForumThreadRow {
  constructor(arg0) {
    channel = global.channel;
    message = global.message;
    c2 = undefined;
    author = undefined;
    tmp = f61870();
    tmp2 = channel;
    tmp3 = c2;
    obj = require("initialize");
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return outer1_6.getGuild(guildId);
    });
    c2 = stateFromStores;
    author = message.author;
    obj2 = require("initialize");
    items1 = [];
    items1[0] = View;
    obj3 = author;
    items2 = [, ];
    items2[0] = author.id;
    id = undefined;
    stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_5.getChannel(channel.parent_id));
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items2[1] = id;
    effect = author.useEffect(() => {
      let id;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      if (null != id) {
        let id1;
        if (tmp != null) {
          id1 = tmp.id;
        }
        const items = [author.id];
        const membersById = message(stateFromStores[8]).requestMembersById(id1, items);
        const obj = message(stateFromStores[8]);
      }
    }, items2);
    items3 = [, , ];
    items3[0] = channel;
    items3[1] = stateFromStores;
    items3[2] = message.id;
    callback = obj3.useCallback(() => {
      let obj = message(stateFromStores[9]);
      obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
      obj = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
      message(stateFromStores[9]).feedItemActioned(obj);
      let tmp6 = null != channel;
      if (tmp6) {
        tmp6 = null != stateFromStores;
      }
      if (tmp6) {
        channel(stateFromStores[10]).navigateToPost(channel.id, stateFromStores.id, message.id);
        const obj4 = channel(stateFromStores[10]);
      }
    }, items3);
    items4 = [, ];
    items4[0] = channel.parent_id;
    items4[1] = message.id;
    callback1 = obj3.useCallback(() => {
      if (null != channel.parent_id) {
        let obj = message(stateFromStores[9]);
        obj.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
        obj = { itemId: null, itemType: "forum_thread", actionParameters: null };
        obj[0] = message.id;
        obj[2] = { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null };
        message(stateFromStores[9]).feedItemActioned(obj);
        const obj2 = message(stateFromStores[9]);
        const result = channel(stateFromStores[11]).openChannelLongPressActionSheet(tmp.parent_id);
        const obj4 = channel(stateFromStores[11]);
      }
    }, items4);
    tmp2Result = require("generateHydrationId");
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
              tmp11Result = require("CutoutGuildIconWithUserCustom");
              intl = require("getSystemLocale").intl;
              obj[0] = intl.string(require("getSystemLocale").t.bYNuVx);
              obj[1] = gravityMessage.id;
              obj[3] = channel.parent_id;
              tmp11Result1 = require("DISCORD_EPOCH");
              obj[4] = tmp11Result1.extractTimestamp(gravityMessage.id);
              obj[5] = callback;
              obj[6] = callback1;
              obj[7] = gravityMessage;
              tmp16 = jsx;
              obj1 = { onPress: null, onLongPress: null, accessibilityRole: "button", unstable_pressDelay: 130, style: null, children: null };
              obj1[0] = callback;
              obj1[1] = callback1;
              obj1[4] = tmp.pressable;
              tmp17 = View;
              obj2 = { style: null, children: null };
              obj2[0] = tmp.container;
              obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
              obj3[2] = tmp12;
              items5 = [, , ];
              items5[0] = jsx(require("Text").Text, obj3);
              obj4 = { variant: "text-md/normal", color: "text-subtle", style: null, lineClamp: 5, children: null };
              obj4[2] = tmp.subtitle;
              tmp11Result2 = require("get defaultRules");
              flag = true;
              obj4[4] = tmp11Result2.parseInlineReply(message.content, true);
              items5[1] = jsx(require("Text").Text, obj4);
              obj5 = { message: null, visible: null, itemType: "forum_thread" };
              obj5[0] = message;
              obj5[1] = global.visible;
              items5[2] = jsx(require("MediaMosaicVideo"), obj5);
              obj2[1] = items5;
              obj1[5] = jsxs(View, obj2);
              items6 = [, ];
              items6[0] = jsx(require("PressableBase").PressableHighlight, obj1);
              obj6 = { style: null, children: null };
              obj6[0] = tmp.footer;
              obj7 = { style: null, children: null };
              obj7[0] = tmp.ICYMICardInteractionRow;
              obj8 = { message: null, channel: null, guild: null, backgroundVariant: "base", id: null, itemType: "forum_thread" };
              obj8[0] = gravityMessage;
              obj8[1] = channel;
              obj8[2] = stateFromStores;
              obj8[4] = gravityMessage.id;
              obj7[1] = jsx(require("AddEmojiButton"), obj8);
              obj6[1] = jsx(View, obj7);
              items6[1] = jsx(View, obj6);
              obj[9] = items6;
              tmp13 = jsxs(tmp11Result, obj);
            }
          }
        }
      }
    }
    return tmp13;
  }
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  obj = { pressable: obj, container: obj, subtitle: null, footer: null, threadAsComments: null, ICYMICardInteractionRow: null };
  obj = { flex: 1, paddingLeft: marginHorizontal.inset };
  obj = { marginHorizontal: marginHorizontal.margin };
  obj[2] = { marginTop: Themes.space.PX_8, marginBottom: marginHorizontal.margin };
  obj[3] = { justifyContent: "flex-end", paddingLeft: marginHorizontal.inset, marginTop: marginHorizontal.margin, gap: marginHorizontal.margin };
  obj[4] = { marginHorizontal: marginHorizontal.margin };
  obj[5] = { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin };
  return obj;
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default function ForumThreadRowWrapper(message) {
  return callback(ICYMIForumThreadRow, { message: message.message, channel: message.threadChannel, visible: message.visible });
};
export const MAX_AVATARS_IN_PILE = 3;
export { ICYMIForumThreadRow };