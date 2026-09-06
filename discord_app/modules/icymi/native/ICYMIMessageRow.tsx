// === Module 16495: ICYMIMessageRow ===

// Module 16495 (ICYMIMessageRow)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10913 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11657 */;
import ICYMIShared from "ICYMIShared" /* 16491 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
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
        tmp2 = tmp.attachments.length > 0;
      }
      let tmp3 = !tmp2;
      if (!tmp2) {
        tmp3 = tmp.embeds[0].type === constants.GIFV && tmp.embeds[0].url === tmp.content;
        const tmp5 = tmp.embeds[0].type === constants.GIFV && tmp.embeds[0].url === tmp.content;
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
      obj.paddingLeft = context.margin;
      tmp10 = obj;
    }
    obj1 = { style: items2, children: null };
    items2[1] = tmp10;
    tmp12Result = !memo;
    if (!memo) {
      tmp12 = jsx;
      obj2 = { message: null, muted: null, lineClamp: null, messageOptions: null, pointerEvents: null };
      obj2.message = message;
      obj2.muted = stateFromStores;
      obj2.lineClamp = num;
      num2 = 0;
      obj3 = undefined;
      if (0 === result.length) {
        if (message.attachments.length > 0) {
          if (0 === message.embeds.length) {
            obj3 = { renderAttachments: true };
          }
        }
      }
      obj2.messageOptions = obj3;
      str = "none";
      if (everyResult) {
        str = "auto";
      }
      obj2.pointerEvents = str;
      tmp12Result = tmp12(tmp2(tmp3[18]).MessageRowPreview, obj2);
    }
    items3 = [, , ];
    items3[0] = tmp12Result;
    tmp13 = result.length > 0;
    if (tmp13) {
      tmp14 = jsx;
      obj4 = { style: null, children: null };
      obj4.style = tmp.media;
      tmp15 = channel;
      obj5 = { message: null, visible: null, itemType: "message" };
      obj5.message = message;
      obj5.visible = flag2;
      obj4.children = jsx(channel(tmp3[19]), obj5);
      tmp13 = jsx(tmp9, obj4);
    }
    items3[1] = tmp13;
    tmp16 = 0 === result.length && message.embeds.length > 0;
    if (tmp16) {
      tmp17 = jsx;
      obj6 = { style: null, children: null };
      obj6.style = tmp.media;
      obj7 = { message: null, muted: null, lineClamp: 3 };
      obj7.message = message;
      obj7.muted = stateFromStores;
      obj6.children = jsx(tmp2(tmp3[18]).NonMediaEmbedsRowPreview, obj7);
      tmp16 = jsx(tmp9, obj6);
    }
    items3[2] = tmp16;
    obj1.children = items3;
    return tmp8(tmp9, obj1);
  }
}
function ReplyMessageContent(message) {
  message = message.message;
  ({ channel, guild } = message);
  const tmp = closure_18();
  let obj = noop;
  const context = noop.useContext(message(16453).ICYMIContext);
  let obj1 = message(504);
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => UserStore.getUser(message.author.id));
  let obj2 = message(504);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, message.author.id));
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
    obj = { style: tmp.replyPreview, children: null };
    obj = { variant: "text-sm/semibold", color: "text-muted", style: { fontStyle: "italic" }, children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t.mPPcez);
    const items2 = [closure_14(tmp2(4556).Text, obj), ];
    obj1 = { style: tmp.replyInner, children: null };
    obj2 = { animate: false, guildId: guild.id, user: stateFromStores, size: tmp2(1178).AvatarSizes.SMALL };
    const items3 = [closure_14(tmp2(1178).Avatar, obj2), ];
    const obj3 = { style: null, children: null };
    const obj4 = { gap: 4, width: width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2 };
    obj3.style = obj4;
    const obj5 = { variant: "text-md/semibold", style: null, lineClamp: 1, children: null };
    const obj6 = { color: colorString };
    obj5.style = obj6;
    obj5.children = tmp2(4712).getName(guild.id, channel.id, stateFromStores);
    const items4 = [closure_14(tmp2(4556).Text, obj5), ];
    const obj7 = { value: null, children: null };
    const obj8 = { width: width - 2 * PX_12 - 30 - PX_8 - 2, margin: null, inset: null };
    ({ margin: obj14.margin, inset: obj14.inset } = context);
    obj7.value = obj8;
    const obj9 = { message, channel, guild, nested: true };
    obj7.children = closure_14(MessageRowContent, obj9);
    items4[1] = closure_14(tmp2(16453).ICYMIContext.Provider, obj7);
    obj3.children = items4;
    items3[1] = closure_15(View, obj3);
    obj1.children = items3;
    items2[1] = closure_15(View, obj1);
    obj.children = items2;
    tmp8 = closure_15(View, obj);
    const tmp2Result = tmp2(4712);
  }
  return tmp8;
}
const View = fn(17).View;
const ITEM_PADDING = fn(16490).ITEM_PADDING;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_8 = nativeDefault.space.PX_8;
const createICYMIStyles = fn(16452);
const collapsedCategories = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  let obj = { pressable: null, messagePreview: null, replyPreview: null, replyInner: null, afterMessage: null, media: null, footer: null };
  obj = { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 };
  obj.pressable = obj;
  let obj2 = PlatformUtils;
  let num = 0;
  if (obj2.isAndroid()) {
    num = -2;
  }
  obj = { marginTop: num, borderRadius: tmp(576).radii.md, gap: 0 };
  obj.messagePreview = obj;
  obj.replyPreview = { gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 };
  obj2 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj.replyInner = obj2;
  obj.afterMessage = { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin };
  obj.media = { marginRight: paddingLeft.margin };
  const obj1 = { gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 };
  obj.footer = { marginTop: nativeDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset };
  return obj;
});
let closure_21 = noop.memo((message) => {
  message = message.message;
  const channel = message.channel;
  const guild = message.guild;
  ({ visible, messageContext } = message);
  let obj = message(guild[17]);
  const items = [UserGuildSettingsStore];
  let obj1 = noop;
  let id;
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = noop.useEffect(() => {
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      let id1;
      if (tmp != null) {
        id1 = tmp.id;
      }
      const membersById = GuildActionCreatorsDefault.requestMembersById(id1, message.author.id);
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
  const tmp10 = closure_18();
  const items2 = [channel.id, message];
  const items3 = [channel, message];
  const callback = obj1.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "long_press_channel");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [channel.id, guild.id, message.id];
  const callback1 = obj1.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "long_press_message");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    obj = { channel, message, user: UserStore.getUser(message.author.id) };
    const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = obj1.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "press_message");
    obj = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    ICYMIShared.navigateToPost(channel.id, guild.id, message.id);
  }, items4);
  obj = { actionLabel: null, id: null, interactionType: "message", channelId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, message: null, shouldFeatureUser: true, children: null };
  const intl = tmp(tmp2[21]).intl;
  obj.actionLabel = intl.string(message(guild[21]).t.hMFMY9);
  obj.id = message.id;
  obj.channelId = channel.id;
  const tmp15 = channel;
  const tmp16 = channel(guild[30]);
  obj.timestamp = channel(guild[31]).extractTimestamp(message.id);
  obj.onHeaderPress = callback2;
  obj.onHeaderLongPress = callback;
  obj.message = message;
  obj = { onPress: callback2, onLongPress: callback1, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: channel(tmp2[33])({ channel }), accessibilityHint: null, style: null, children: null };
  const obj6 = channel(guild[31]);
  obj.accessibilityHint = message(guild[33]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj.style = tmp10.pressable;
  let tmp17 = null;
  if (null != iCYMIMessage1) {
    obj1 = { message: iCYMIMessage1, channel, guild, visible };
    tmp17 = closure_14(MessageRowContent, obj1);
  }
  const items5 = [tmp17, closure_14(MessageRowContent, { message, channel, guild, visible }), ];
  let tmp20Result = null;
  if (null != iCYMIMessage) {
    let obj2 = { message: iCYMIMessage, channel, guild };
    tmp20Result = tmp20(ReplyMessageContent, obj2);
  }
  items5[2] = tmp20Result;
  obj.children = items5;
  const items6 = [closure_15(message(guild[32]).PressableHighlight, obj), ];
  const obj3 = { style: tmp10.footer, children: closure_14(tmp15(guild[34]), { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "message" }) };
  items6[1] = closure_14(View, obj3);
  obj.children = items6;
  return closure_15(tmp16, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default function MessageRowWrapper(arg0) {
  let gravityMessage;
  ({ message, messageContext, visible } = arg0);
  let obj = gravityMessage(8350);
  gravityMessage = obj.useGravityMessage(message);
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
        obj = { message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, messageContext, visible };
        tmp6 = closure_14(closure_21, obj);
      }
    }
  }
  return tmp6;
};
export { MessageRowContent };