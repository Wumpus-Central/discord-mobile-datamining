// === Module 16592: ICYMIMessageRow ===

// Module 16592 (ICYMIMessageRow)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5601 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8469 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11045 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11787 */;
import ICYMIShared from "ICYMIShared" /* 16588 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
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
    context = closure_3.useContext(message(closure_2[14]).ICYMIContext);
    obj = message(closure_2[15]);
    result = obj.extractMediaSourcesFromMessage(message, message, channel.guild_id, message(closure_2[16]).GRAVITY_VALID_EMBED_TYPES);
    obj2 = message(closure_2[17]);
    items = [];
    items[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
    items1 = [, , ];
    items1[0] = message.attachments.length;
    ({ content: arr3[1], embeds: arr3[2] } = message);
    memo = closure_3.useMemo(() => {
      let tmp2 = 1 !== message.embeds.length;
      if (!tmp2) {
        tmp2 = message.attachments.length > 0;
      }
      let tmp3 = !tmp2;
      if (!tmp2) {
        tmp3 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
        const tmp5 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
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
      obj1 = { paddingLeft: null };
      obj1.paddingLeft = context.margin;
      tmp10 = obj1;
    }
    obj11 = { style: items2, children: null };
    items2[1] = tmp10;
    tmp12Result = !memo;
    if (!memo) {
      tmp12 = jsx;
      obj12 = { message: null, muted: null, lineClamp: null, messageOptions: null, pointerEvents: null };
      obj12.message = message;
      obj12.muted = stateFromStores;
      obj12.lineClamp = num;
      num2 = 0;
      obj13 = undefined;
      if (0 === result.length) {
        if (message.attachments.length > 0) {
          if (0 === message.embeds.length) {
            obj13 = { renderAttachments: true };
          }
        }
      }
      obj12.messageOptions = obj13;
      str = "none";
      if (everyResult) {
        str = "auto";
      }
      obj12.pointerEvents = str;
      tmp12Result = tmp12(tmp2(tmp3[18]).MessageRowPreview, obj12);
    }
    items3 = [, , ];
    items3[0] = tmp12Result;
    tmp13 = result.length > 0;
    if (tmp13) {
      tmp14 = jsx;
      obj14 = { style: null, children: null };
      obj14.style = tmp.media;
      tmp15 = channel;
      obj15 = { message: null, visible: null, itemType: "message" };
      obj15.message = message;
      obj15.visible = flag2;
      obj14.children = jsx(channel(tmp3[19]), obj15);
      tmp13 = jsx(tmp9, obj14);
    }
    items3[1] = tmp13;
    tmp16 = 0 === result.length && message.embeds.length > 0;
    if (tmp16) {
      tmp17 = jsx;
      obj16 = { style: null, children: null };
      obj16.style = tmp.media;
      obj17 = { message: null, muted: null, lineClamp: 3 };
      obj17.message = message;
      obj17.muted = stateFromStores;
      obj16.children = jsx(tmp2(tmp3[18]).NonMediaEmbedsRowPreview, obj17);
      tmp16 = jsx(tmp9, obj16);
    }
    items3[2] = tmp16;
    obj11.children = items3;
    return tmp8(tmp9, obj11);
  }
}
function ReplyMessageContent(message) {
  message = message.message;
  ({ channel, guild } = message);
  const tmp = closure_18();
  const context = noop.useContext(message(16550).ICYMIContext);
  const items = [UserStore];
  const stateFromStores = message(504).useStateFromStores(items, () => UserStore.getUser(message.author.id));
  const obj2 = message(504);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = message(504).useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, message.author.id));
  let colorString;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_12;
  }
  const width = noop.useContext(tmp2(16550).ICYMIContext).width;
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj4 = { style: tmp.replyPreview, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", style: { fontStyle: "italic" }, children: null };
    const intl = tmp2(1114).intl;
    obj5.children = intl.string(tmp2(1114).t.mPPcez);
    const items2 = [closure_14(tmp2(4632).Text, obj5), ];
    const obj6 = { style: tmp.replyInner, children: null };
    const obj7 = { animate: false, guildId: guild.id, user: stateFromStores, size: tmp2(1176).AvatarSizes.SMALL };
    const items3 = [closure_14(tmp2(1176).Avatar, obj7), ];
    const obj8 = { style: null, children: null };
    const obj9 = { gap: 4, width: width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2 };
    obj8.style = obj9;
    const obj10 = { variant: "text-md/semibold", style: null, lineClamp: 1, children: null };
    const obj11 = { color: colorString };
    obj10.style = obj11;
    obj10.children = tmp2(4788).getName(guild.id, channel.id, stateFromStores);
    const items4 = [closure_14(tmp2(4632).Text, obj10), ];
    const obj12 = { value: null, children: null };
    const obj13 = { width: width - 2 * PX_12 - 30 - PX_8 - 2, margin: null, inset: null };
    ({ margin: obj14.margin, inset: obj14.inset } = context);
    obj12.value = obj13;
    const obj15 = { message, channel, guild, nested: true };
    obj12.children = closure_14(MessageRowContent, obj15);
    items4[1] = closure_14(tmp2(16550).ICYMIContext.Provider, obj12);
    obj8.children = items4;
    items3[1] = closure_15(View, obj8);
    obj6.children = items3;
    items2[1] = closure_15(View, obj6);
    obj4.children = items2;
    tmp8 = closure_15(View, obj4);
    const tmp2Result = tmp2(4788);
  }
  return tmp8;
}
const View = fn(17).View;
const ITEM_PADDING = fn(16587).ITEM_PADDING;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_8 = nativeDefault.space.PX_8;
const createICYMIStyles = fn(16549);
const collapsedCategories = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  const obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 }, messagePreview: null, replyPreview: null, replyInner: null, afterMessage: null, media: null, footer: null };
  const obj2 = { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 };
  let num = 0;
  if (obj3.isAndroid()) {
    num = -2;
  }
  obj3 = PlatformUtils;
  obj.messagePreview = { marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 };
  const obj4 = { marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 };
  obj.replyPreview = { gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 };
  obj.replyInner = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj.afterMessage = { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin };
  obj.media = { marginRight: paddingLeft.margin };
  const obj5 = { gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 };
  const obj6 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj.footer = { marginTop: nativeDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset };
  return obj;
});
let closure_21 = noop.memo((message) => {
  message = message.message;
  const channel = message.channel;
  const guild = message.guild;
  ({ visible, messageContext } = message);
  const items = [UserGuildSettingsStore];
  let id;
  const stateFromStores = message(guild[17]).useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = noop.useEffect(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      const membersById = GuildActionCreatorsDefault.requestMembersById(id1, message.author.id);
    }
  }, items1);
  let obj = message(guild[17]);
  let reply_message_id;
  if (messageContext != null) {
    reply_message_id = messageContext.reply_message_id;
  }
  const iCYMIMessage = message(guild[25]).useICYMIMessage(channel.id, reply_message_id);
  const tmpResult = message(guild[25]);
  let before_message_id;
  if (messageContext != null) {
    before_message_id = messageContext.before_message_id;
  }
  const iCYMIMessage1 = message(guild[25]).useICYMIMessage(channel.id, before_message_id);
  const tmp10 = closure_18();
  const items2 = [channel.id, message];
  const items3 = [channel, message];
  const callback = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(message.id, "message", "long_press_channel");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } });
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [channel.id, guild.id, message.id];
  const callback1 = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(message.id, "message", "long_press_message");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } });
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
    const obj4 = showLongPressMessageActionSheet;
    const result = obj4.showLongPressMessageActionSheet({ channel, message, user: UserStore.getUser(message.author.id) });
  }, items3);
  const callback2 = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(message.id, "message", "press_message");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } });
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    ICYMIShared.navigateToPost(channel.id, guild.id, message.id);
  }, items4);
  let obj3 = { actionLabel: null, id: null, interactionType: "message", channelId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, message: null, shouldFeatureUser: true, children: null };
  const tmp15 = channel;
  const tmpResult3 = message(guild[25]);
  const intl = tmp(tmp2[21]).intl;
  obj3.actionLabel = intl.string(message(guild[21]).t.hMFMY9);
  obj3.id = message.id;
  obj3.channelId = channel.id;
  const tmp16 = channel(guild[30]);
  obj3.timestamp = channel(guild[31]).extractTimestamp(message.id);
  obj3.onHeaderPress = callback2;
  obj3.onHeaderLongPress = callback;
  obj3.message = message;
  let obj4 = { onPress: callback2, onLongPress: callback1, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: channel(guild[33])({ channel }), accessibilityHint: null, style: null, children: null };
  const obj6 = channel(guild[31]);
  obj4.accessibilityHint = message(guild[33]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj4.style = tmp10.pressable;
  let tmp17 = null;
  if (null != iCYMIMessage1) {
    const obj5 = { message: iCYMIMessage1, channel, guild, visible };
    tmp17 = closure_14(MessageRowContent, obj5);
  }
  const items5 = [tmp17, closure_14(MessageRowContent, { message, channel, guild, visible }), ];
  let tmp20Result = null;
  if (null != iCYMIMessage) {
    const obj7 = { message: iCYMIMessage, channel, guild };
    tmp20Result = closure_14(ReplyMessageContent, obj7);
  }
  items5[2] = tmp20Result;
  obj4.children = items5;
  const items6 = [closure_15(message(guild[32]).PressableHighlight, obj4), ];
  const obj8 = { style: tmp10.footer, children: closure_14(tmp15(guild[34]), { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "message" }) };
  items6[1] = closure_14(View, obj8);
  obj3.children = items6;
  return closure_15(tmp16, obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default function MessageRowWrapper(arg0) {
  let gravityMessage;
  ({ message, messageContext, visible } = arg0);
  gravityMessage = gravityMessage(8468).useGravityMessage(message);
  const obj = gravityMessage(8468);
  const items = [ChannelStore];
  const stateFromStores = gravityMessage(504).useStateFromStores(items, () => ChannelStore.getChannel(gravityMessage.getChannelId()));
  const obj2 = gravityMessage(504);
  const items1 = [GuildStore];
  const stateFromStores1 = gravityMessage(504).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  gravityMessage(504);
  [][0] = RelationshipStore;
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (null != stateFromStores1) {
      tmp6 = null;
      if (!tmp5) {
        const obj4 = { message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, messageContext, visible };
        tmp6 = closure_14(closure_21, obj4);
      }
    }
  }
  return tmp6;
};
export { MessageRowContent };