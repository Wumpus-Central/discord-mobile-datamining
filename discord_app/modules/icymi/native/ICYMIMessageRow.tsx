// === Module 16495: MessageRowContent ===

// Module 16495 (MessageRowContent)
import ThemesDefault from "Themes" /* 576 */;
import set from "set" /* 1115 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1957 */;
import closure_6 from "trackCommunicationDisabled" /* 2021 */;
import closure_7 from "createGuildRecordFromRust" /* 1979 */;
import closure_8 from "markAllUserIdListsStale" /* 4209 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 4741 */;
import closure_10 from "mergeGuildAvatar" /* 1371 */;
import { ITEM_PADDING } from "ITEM_PADDING" /* 16490 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16452 */;

require = arg1;
class MessageRowContent {
  constructor(arg0) {
    message = global.message;
    channel = global.channel;
    num = global.lineClamp;
    if (num === undefined) {
      num = 3;
    }
    flag = global.nested;
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.visible;
    if (flag2 === undefined) {
      flag2 = false;
    }
    tmp = closure_18();
    tmp2 = message;
    tmp3 = closure_2;
    context = closure_3.useContext(require("context").ICYMIContext);
    obj = require("isValidImageAttachment");
    result = obj.extractMediaSourcesFromMessage(message, message, channel.guild_id, require("MessageEmbedTypes").GRAVITY_VALID_EMBED_TYPES);
    obj2 = require("initialize");
    items = [];
    items[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items, () => closure_1_9.isChannelMuted(channel.getGuildId(), channel.id));
    items1 = [, , ];
    items1[0] = message.attachments.length;
    ({ content: arr3[1], embeds: arr3[2] } = message);
    memo = closure_3.useMemo(() => {
      let tmp2 = 1 !== message.embeds.length;
      if (!tmp2) {
        tmp2 = tmp.attachments.length > 0;
      }
      let tmp3 = !tmp2;
      if (!tmp2) {
        tmp3 = tmp.embeds[0].type === closure_1_13.GIFV && tmp.embeds[0].url === tmp.content;
        const tmp5 = tmp.embeds[0].type === closure_1_13.GIFV && tmp.embeds[0].url === tmp.content;
      }
      return tmp3;
    }, items1);
    attachments = message.attachments;
    tmp9 = View;
    items2 = [, ];
    items2[0] = tmp.messagePreview;
    tmp10 = null;
    everyResult = attachments.every((content_type) => {
      content_type = content_type.content_type;
      let startsWithResult;
      if (content_type != null) {
        startsWithResult = content_type.startsWith("audio/");
      }
      return startsWithResult;
    });
    tmp8 = jsxs;
    if (!flag) {
      obj = { paddingLeft: null };
      obj[0] = context.margin;
      tmp10 = obj;
    }
    obj1 = { style: items2, children: null };
    items2[1] = tmp10;
    tmp12Result = !memo;
    if (!memo) {
      tmp12 = jsx;
      obj2 = { message: null, muted: null, lineClamp: null, messageOptions: null, pointerEvents: null };
      obj2[0] = message;
      obj2[1] = stateFromStores;
      obj2[2] = num;
      num2 = 0;
      obj3 = undefined;
      if (0 === result.length) {
        if (message.attachments.length > 0) {
          if (0 === message.embeds.length) {
            obj3 = { renderAttachments: true };
          }
        }
      }
      obj2[3] = obj3;
      str = "none";
      if (everyResult) {
        str = "auto";
      }
      obj2[4] = str;
      tmp12Result = tmp12(require("ICYMIMessageRowPreview").MessageRowPreview, obj2);
    }
    items3 = [, , ];
    items3[0] = tmp12Result;
    tmp13 = result.length > 0;
    if (tmp13) {
      tmp14 = jsx;
      obj4 = { style: null, children: null };
      obj4[0] = tmp.media;
      tmp15 = channel;
      obj5 = { message: null, visible: null, itemType: "message" };
      obj5[0] = message;
      obj5[1] = flag2;
      obj4[1] = jsx(require("MediaMosaicVideo"), obj5);
      tmp13 = jsx(tmp9, obj4);
    }
    items3[1] = tmp13;
    tmp16 = 0 === result.length && message.embeds.length > 0;
    if (tmp16) {
      tmp17 = jsx;
      obj6 = { style: null, children: null };
      obj6[0] = tmp.media;
      obj7 = { message: null, muted: null, lineClamp: 3 };
      obj7[0] = message;
      obj7[1] = stateFromStores;
      obj6[1] = jsx(require("ICYMIMessageRowPreview").NonMediaEmbedsRowPreview, obj7);
      tmp16 = jsx(tmp9, obj6);
    }
    items3[2] = tmp16;
    obj1[1] = items3;
    return tmp8(tmp9, obj1);
  }
}
function ReplyMessageContent(message) {
  message = message.message;
  ({ channel, guild } = message);
  const tmp = callback3();
  let obj = importAllResult;
  const context = importAllResult.useContext(message(16453).ICYMIContext);
  obj1 = message(504);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getUser(message.author.id));
  let obj2 = message(504);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_6.getMember(guild.id, message.author.id));
  let colorString;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_12;
  }
  const width = obj.useContext(tmp2(16453).ICYMIContext).width;
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.replyPreview;
    obj = { variant: "text-sm/semibold", color: "text-muted", style: null, children: null };
    obj[2] = { fontStyle: "italic" };
    const intl = tmp2(1114).intl;
    obj[3] = intl.string(tmp2(1114).t.mPPcez);
    const items2 = [callback(tmp2(4556).Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.replyInner;
    obj2 = { animate: false, guildId: null, user: null, size: null };
    obj2[1] = guild.id;
    obj2[2] = stateFromStores;
    obj2[3] = tmp2(1178).AvatarSizes.SMALL;
    const items3 = [callback(tmp2(1178).Avatar, obj2), ];
    const obj3 = { style: null, children: null };
    const obj4 = { gap: 4, width: null };
    obj4[1] = width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2;
    obj3[0] = obj4;
    const obj5 = { variant: "text-md/semibold", style: null, lineClamp: 1, children: null };
    const obj6 = { color: null };
    obj6[0] = colorString;
    obj5[1] = obj6;
    obj5[3] = tmp2(4712).getName(guild.id, channel.id, stateFromStores);
    const items4 = [callback(tmp2(4556).Text, obj5), ];
    const obj7 = { value: null, children: null };
    const obj8 = { width: null, margin: null, inset: null };
    obj8[0] = width - 2 * PX_12 - 30 - PX_8 - 2;
    ({ margin: obj14[1], inset: obj14[2] } = context);
    obj7[0] = obj8;
    const obj9 = { message: null, channel: null, guild: null, nested: true };
    obj9[0] = message;
    obj9[1] = channel;
    obj9[2] = guild;
    obj7[1] = callback(MessageRowContent, obj9);
    items4[1] = callback(tmp2(16453).ICYMIContext.Provider, obj7);
    obj3[1] = items4;
    items3[1] = callback2(View, obj3);
    obj1[1] = items3;
    items2[1] = callback2(View, obj1);
    obj[1] = items2;
    tmp8 = callback2(View, obj);
    const tmp2Result = tmp2(4712);
  }
  return tmp8;
}
let c3 = importAllResult;
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_12 = ThemesDefault.space.PX_12;
const PX_8 = ThemesDefault.space.PX_8;
let closure_18 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  let obj = { pressable: null, messagePreview: null, replyPreview: null, replyInner: null, afterMessage: null, media: null, footer: null };
  obj = { flex: 1, paddingLeft: paddingLeft.inset, gap: ThemesDefault.space.PX_8 };
  obj[0] = obj;
  let obj2 = set;
  let num = 0;
  if (obj2.isAndroid()) {
    num = -2;
  }
  obj = { marginTop: num, borderRadius: tmp(576).radii.md, gap: 0 };
  obj[1] = obj;
  obj[2] = { gap: ThemesDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.lg, maxHeight: 132 };
  obj2 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj[3] = obj2;
  obj[4] = { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin };
  obj[5] = { marginRight: paddingLeft.margin };
  obj1 = { gap: ThemesDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.lg, maxHeight: 132 };
  obj[6] = { marginTop: ThemesDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: ThemesDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset };
  return obj;
});
let closure_21 = importAllResult.memo((message) => {
  message = message.message;
  const channel = message.channel;
  const guild = message.guild;
  ({ visible, messageContext } = message);
  let obj = message(guild[17]);
  const items = [closure_9];
  obj1 = importAllResult;
  let id;
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.isChannelMuted(channel.getGuildId(), channel.id));
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = importAllResult.useEffect(() => {
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      let id1;
      if (tmp != null) {
        id1 = tmp.id;
      }
      const membersById = channel(guild[24]).requestMembersById(id1, message.author.id);
      const obj = channel(guild[24]);
    }
  }, items1);
  let tmpResult = tmp(tmp2[25]);
  let reply_message_id;
  if (messageContext != null) {
    reply_message_id = messageContext.reply_message_id;
  }
  const iCYMIMessage = tmpResult.useICYMIMessage(channel.id, reply_message_id);
  tmpResult = tmp(tmp2[25]);
  let before_message_id;
  if (messageContext != null) {
    before_message_id = messageContext.before_message_id;
  }
  const iCYMIMessage1 = tmpResult.useICYMIMessage(channel.id, before_message_id);
  const tmp10 = callback3();
  const items2 = [channel.id, message];
  const items3 = [channel, message];
  const callback = obj1.useCallback(() => {
    let obj = channel(guild[26]);
    obj.itemInteracted(message.id, "message", "long_press_channel");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
    channel(guild[26]).feedItemActioned(obj);
    const obj2 = channel(guild[26]);
    const result = message(guild[27]).openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [channel.id, guild.id, message.id];
  const callback1 = obj1.useCallback(() => {
    let obj = channel(guild[26]);
    obj.itemInteracted(message.id, "message", "long_press_message");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
    channel(guild[26]).feedItemActioned(obj);
    const obj2 = channel(guild[26]);
    obj = { channel, message, user: closure_1_10.getUser(message.author.id) };
    const result = message(guild[28]).showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = obj1.useCallback(() => {
    let obj = channel(guild[26]);
    obj.itemInteracted(message.id, "message", "press_message");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    channel(guild[26]).feedItemActioned(obj);
    const obj2 = channel(guild[26]);
    message(guild[29]).navigateToPost(channel.id, guild.id, message.id);
  }, items4);
  obj = { actionLabel: null, id: null, interactionType: "message", channelId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, message: null, shouldFeatureUser: true, children: null };
  const intl = tmp(tmp2[21]).intl;
  obj[0] = intl.string(message(guild[21]).t.hMFMY9);
  obj[1] = message.id;
  obj[3] = channel.id;
  const tmp15 = channel;
  const tmp16 = channel(guild[30]);
  obj[4] = channel(guild[31]).extractTimestamp(message.id);
  obj[5] = callback2;
  obj[6] = callback;
  obj[7] = message;
  obj = { onPress: callback2, onLongPress: callback1, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: channel(tmp2[33])({ channel }), accessibilityHint: null, style: null, children: null };
  const obj6 = channel(guild[31]);
  obj[5] = message(guild[33]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj[6] = tmp10.pressable;
  let tmp17 = null;
  if (null != iCYMIMessage1) {
    obj1 = { message: null, channel: null, guild: null, visible: null };
    obj1[0] = iCYMIMessage1;
    obj1[1] = channel;
    obj1[2] = guild;
    obj1[3] = visible;
    tmp17 = callback(MessageRowContent, obj1);
  }
  const items5 = [tmp17, callback(MessageRowContent, { message, channel, guild, visible }), ];
  let tmp20Result = null;
  if (null != iCYMIMessage) {
    let obj2 = { message: null, channel: null, guild: null };
    obj2[0] = iCYMIMessage;
    obj2[1] = channel;
    obj2[2] = guild;
    tmp20Result = tmp20(ReplyMessageContent, obj2);
  }
  items5[2] = tmp20Result;
  obj[7] = items5;
  const items6 = [closure_15(message(guild[32]).PressableHighlight, obj), ];
  const tmpResult1 = message(guild[33]);
  items6[1] = callback(View, { style: tmp10.footer, children: callback(tmp15(guild[34]), obj4) });
  obj[9] = items6;
  return closure_15(tmp16, obj);
});
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default function MessageRowWrapper(arg0) {
  let gravityMessage;
  let stateFromStores;
  ({ message, messageContext, visible } = arg0);
  let obj = gravityMessage(8350);
  gravityMessage = obj.useGravityMessage(message);
  const items = [closure_5];
  stateFromStores = gravityMessage(504).useStateFromStores(items, () => closure_1_5.getChannel(gravityMessage.getChannelId()));
  const obj2 = gravityMessage(504);
  const items1 = [closure_7];
  const stateFromStores1 = gravityMessage(504).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return closure_1_7.getGuild(guild_id);
  });
  gravityMessage(504);
  [][0] = closure_8;
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (null != stateFromStores1) {
      tmp6 = null;
      if (!tmp5) {
        obj = { message: null, channel: null, guild: null, messageContext: null, visible: null };
        obj[0] = gravityMessage;
        obj[1] = stateFromStores;
        obj[2] = stateFromStores1;
        obj[3] = messageContext;
        obj[4] = visible;
        tmp6 = callback(closure_21, obj);
      }
    }
  }
  return tmp6;
};
export { MessageRowContent };