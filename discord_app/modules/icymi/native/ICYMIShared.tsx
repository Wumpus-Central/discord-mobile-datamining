// === Module 16588: ICYMIShared ===

// Module 16588 (ICYMIShared)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import Client from "Client" /* 4567 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4626 */;
import timing from "timing" /* 4637 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4649 */;
import GuildIcon from "GuildIcon" /* 5665 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7213 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7350 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7559 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8296 */;
import ICYMIUtils from "ICYMIUtils" /* 8468 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8469 */;
import ClipView from "ClipView" /* 8940 */;
import openDetailsActionSheet from "openDetailsActionSheet" /* 16589 */;
import noop from "module_19" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7409 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
class Separator {
  constructor() {
    obj = { style: closure_21().separator };
    return jsx(View, obj);
  }
}
function CutoutGuildIconWithUser(guild) {
  guild = guild.guild;
  const obj = { guild, icon: null };
  const tmp = closure_21();
  obj.icon = collapsedCategories(native.Avatar, { animate: true, style: closure_21().authorIcon, guildId: guild.id, user: guild.author, size: native.AvatarSizes.XSMALL });
  return collapsedCategories(CutoutGuildIcon, obj);
}
class CutoutGuildIcon {
  constructor(arg0) {
    obj = { style: { width: 40, height: 40 }, children: null };
    ({ guild, icon } = global);
    obj1 = { cutouts: null, children: null };
    point = { shape: null, x: 16, y: 14, size: 32 };
    tmp = closure_1(closure_2[23]);
    point.shape = closure_0(closure_2[23]).CutoutShape.Circle;
    items = [];
    items[0] = point;
    obj1.cutouts = items;
    obj5 = { guild, size: null };
    tmp2 = closure_1(closure_2[24]);
    obj5.size = closure_0(closure_2[24]).GuildIconSizes.NORMAL;
    obj1.children = jsx(tmp2, obj5);
    items1 = [, ];
    items1[0] = jsx(tmp, obj1);
    items1[1] = icon;
    obj.children = items1;
    return jsxs(View, obj);
  }
}
class GuildContentPost {
  constructor(arg0) {
    guild = global.guild;
    ({ channel, hideTimestamp, id, type } = global);
    ({ timestamp, children, avatar, title, subtitle, onHeaderPress, onHeaderLongPress, disableInteractions } = global);
    tmp = closure_21();
    tmp2 = guild;
    tmp3 = id;
    obj = guild(id[25]);
    tmp5 = jsxs;
    tmp7 = jsx;
    fontScale = obj.useFontScale();
    tmp6 = Fragment;
    obj1 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: null };
    tmp8 = View;
    obj15 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory, children: null };
    obj16 = { style: tmp.header, children: null };
    items = [, ];
    items[0] = avatar;
    obj17 = { style: tmp.headerInfo, children: null };
    obj18 = { style: tmp.title, children: null };
    obj19 = { style: tmp.titleLeft, children: null };
    items1 = [, ];
    items1[0] = title;
    tmp7Result = !hideTimestamp;
    if (!hideTimestamp) {
      obj20 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
      tmp2Result = tmp2(tmp3[28]);
      obj20.children = tmp2Result.getRelativeTimestamp(timestamp);
      tmp7Result = tmp7(tmp2(tmp3[27]).Text, obj20);
    }
    items1[1] = tmp7Result;
    obj19.children = items1;
    items2 = [, ];
    items2[0] = tmp5(tmp8, obj19);
    tmp7Result1 = null;
    if (!disableInteractions) {
      tmp7Result1 = null;
      if (null != guild) {
        obj21 = { onPress: null, style: null, hitSlop: 8, children: null };
        obj21.onPress = function onPress() {
          const obj2 = { guildId: guild.id, channelId: null, id: null, type: null };
          id = undefined;
          if (null != id) {
            id = id.id;
          }
          obj2.channelId = id;
          obj2.id = id2;
          obj2.type = type;
          return openDetailsActionSheet.openDetailsActionSheet(obj2);
        };
        obj21.style = tmp.subtitleTrailing;
        obj22 = { color: null, size: "sm" };
        tmp11 = channel;
        obj22.color = channel(tmp3[21]).colors.ICON_MUTED;
        obj21.children = tmp7(tmp2(tmp3[30]).MoreHorizontalIcon, obj22);
        tmp7Result1 = tmp7(tmp2(tmp3[26]).PressableOpacity, obj21);
      }
    }
    obj23 = { children: null };
    items2[1] = tmp7Result1;
    obj18.children = items2;
    items3 = [, ];
    items3[0] = tmp5(tmp8, obj18);
    obj24 = { style: tmp.subTitleContainer, children: null };
    obj25 = { style: tmp.subtitle, children: subtitle };
    obj24.children = tmp7(tmp8, obj25);
    items3[1] = tmp7(tmp8, obj24);
    obj17.children = items3;
    items[1] = tmp5(tmp8, obj17);
    obj16.children = items;
    obj15.children = tmp5(tmp8, obj16);
    obj1.children = tmp7(tmp8, obj15);
    items4 = [, ];
    items4[0] = tmp7(guild(id[26]).PressableHighlight, obj1);
    items4[1] = children;
    obj23.children = items4;
    return tmp5(tmp6, obj23);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsObjects: c10, AnalyticsObjectTypes: closure_11, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: map1, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const createICYMIStyles = fn(16549);
createICYMIStyles.createICYMIStyles((paddingBottom) => {
  let num = 0;
  if (obj.isAndroid()) {
    num = -2;
  }
  const obj2 = { simplePostContent: { flex: 1, marginTop: num, overflow: "hidden" }, content: null, insetIconWrapper: null, authorIcon: null, moreDetailsIcon: null, channelNameAndAccessory: null, channelNameAndAccessoryLarge: null, header: null, headerInfo: null, title: null, titleLeft: null, subTitleContainer: null, subtitle: null, genContentSubtitle: null, genContentSubtitleChannel: null, subtitleTrailing: null, separator: null, eventsSubtitle: null, comments: null, recentCommentText: null, commentCount: null, commentsIcon: null, chevron: null };
  obj = PlatformUtils;
  let num2 = 0;
  if (tmpResult.isAndroid()) {
    num2 = -2;
  }
  obj2.content = { flex: 1, marginTop: num2, overflow: "hidden", paddingTop: paddingBottom.margin };
  const rect = { position: "absolute", right: -4, bottom: -2, padding: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  obj2.insetIconWrapper = rect;
  obj2.authorIcon = { position: "absolute", right: -4, bottom: -2 };
  tmpResult = PlatformUtils;
  obj2.moreDetailsIcon = { tintColor: nativeDefault.colors.TEXT_MUTED };
  obj2.channelNameAndAccessory = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin };
  obj2.channelNameAndAccessoryLarge = { flexDirection: "column", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin };
  obj2.header = { flexDirection: "row", flexGrow: 1 };
  obj2.headerInfo = { flexGrow: 1, flexShrink: 1, marginLeft: paddingBottom.margin };
  obj2.title = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj2.titleLeft = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  const obj3 = { tintColor: nativeDefault.colors.TEXT_MUTED };
  obj2.subTitleContainer = { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm };
  obj2.subtitle = { flexShrink: 1, flexGrow: 0, width: "100%" };
  const obj4 = { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm };
  obj2.genContentSubtitle = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj2.genContentSubtitleChannel = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj2.subtitleTrailing = { paddingVertical: 1 };
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj2.separator = size;
  obj2.eventsSubtitle = { flexDirection: "row", alignItems: "center" };
  const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj2.comments = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj2.recentCommentText = { flexGrow: 1, flexShrink: 1, marginRight: 12 };
  obj2.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" };
  const size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj2.commentsIcon = size1;
  const obj6 = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj2.chevron = { tintColor: nativeDefault.colors.TEXT_MUTED };
  return obj2;
});
const __initData = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  _require = id;
  importDefault = id3;
  const timerId = setTimeout(() => {
    ReadStateActionCreators.ack(closure_0, { page: constants3.ICYMI, object: constants.ACK_MESSAGE_VIEWED, objectType: constants2.ACK_SEMI_AUTOMATIC }, true, true, closure_1);
  }, 1500);
  safeTransitionToDefault(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    require("RunAfterInteractionsUtils").runAfterInteractions(() => {
      const obj2 = { channelId, limit, jump: null };
      const obj = MessageActionCreatorsDefault;
      obj2.jump = { messageId, flash: true, jumpType: Client.JumpType.ANIMATED };
      const messages = obj.fetchMessages(obj2);
    }, 150);
    let obj = require("RunAfterInteractionsUtils");
  }
};
export { Separator };
export const truncateUsername = function truncateUsername(arr) {
  let combined = arr;
  if (arr.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + arr.slice(0, 17) + "...";
  }
  return combined;
};
export { CutoutGuildIcon };
export { GuildContentPost };
export const AnnouncementContentPost = function AnnouncementContentPost(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const id = guild.id;
  ({ timestamp, children, mentioned, onHeaderPress, onHeaderLongPress } = guild);
  const tmp = closure_21();
  const items = [GuildMemberStore];
  const stateFromStores = guild(author[31]).useStateFromStores(items, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  let obj = guild(author[31]);
  const name = guild(author[32]).useName(guild.id, channel.id, author);
  const items1 = [author.id, channel.id, id];
  const element = { guild, channel, timestamp, avatar: null, title: null, subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: "announcement", children: null };
  const callback = id.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(id, "announcement", "open_profile");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } });
    showUserProfileActionSheetDefault({ userId: author.id, channelId: channel.id });
  }, items1);
  element.avatar = closure_18(CutoutGuildIconWithUser, { guild, author });
  element.title = closure_18(guild(author[27]).Text, { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name }, channel.id);
  const obj3 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const obj4 = { variant: "text-md/semibold", onPress: callback, style: { color: colorString }, children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj4.children = `${tmp10} `;
  const items2 = [closure_18(guild(author[27]).Text, obj4), , ];
  const obj2 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  const tmp2Result = guild(author[32]);
  items2[1] = closure_18(guild(author[35]).AnnouncementsIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE });
  guild(author[36]);
  items2[2] = ` ${tmp13(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  obj3.children = items2;
  element.subtitle = closure_19(guild(author[27]).Text, obj3);
  element.onHeaderPress = onHeaderPress;
  element.onHeaderLongPress = onHeaderLongPress;
  element.id = id;
  element.children = children;
  return closure_18(GuildContentPost, element);
};
export const GuildEventPost = function GuildEventPost(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const event = guild.event;
  const type = guild.type;
  let stateFromStores;
  let stateFromStores1;
  ({ children, onHeaderPress } = guild);
  let creator_id = event.host_id;
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  const tmp = closure_21();
  if (null != creator_id) {
    const items = [creator_id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedUsers = guild(event[37]).useEnsureHydratedUsers(event.guild_id, items1);
  let obj = guild(event[37]);
  const items2 = [UserStore];
  stateFromStores = guild(event[31]).useStateFromStores(items2, () => UserStore.getUser(creator_id));
  const tmp2Result = guild(event[31]);
  const items3 = [GuildMemberStore];
  stateFromStores1 = guild(event[31]).useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = GuildMemberStore.getMember(guild.id, tmp);
    }
    return member;
  });
  const items4 = [stateFromStores, , , , ];
  let id;
  if (channel != null) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = event.id;
  let highestRoleId;
  if (stateFromStores1 != null) {
    highestRoleId = stateFromStores1.highestRoleId;
  }
  items4[3] = highestRoleId;
  items4[4] = type;
  let colorString;
  const callback = type.useCallback(() => {
    if (null != stateFromStores) {
      ICYMIActionCreatorsDefault.itemInteracted(event.id, type, "open_profile");
      const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj3);
      const obj4 = { userId: tmp.id, roleId: null, channelId: null };
      let highestRoleId;
      if (stateFromStores1 != null) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      obj4.roleId = highestRoleId;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj4.channelId = id;
      showUserProfileActionSheetDefault(obj4);
    }
  }, items4);
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const element = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: null, title: null, subtitle: null, id: null, type: null, onHeaderPress: null, children: null };
  if (null != stateFromStores) {
    let obj2 = { guild, author: stateFromStores };
    let tmp13Result = closure_18(CutoutGuildIconWithUser, obj2);
  } else {
    let obj3 = { guild, size: tmp2(tmp3[24]).GuildIconSizes.NORMAL };
    tmp13Result = closure_18(channel(tmp3[24]), obj3);
    const tmp16 = channel(tmp3[24]);
  }
  element.avatar = tmp13Result;
  element.title = closure_18(guild(event[27]).Text, { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name }, event.id);
  const obj5 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  if (null != stateFromStores) {
    const obj6 = { variant: "text-md/semibold", onPress: callback, style: null, children: null };
    const obj7 = { color: colorString };
    obj6.style = obj7;
    const username = stateFromStores.username;
    let combined = username;
    if (username.length > 20) {
      const _HermesInternal = HermesInternal;
      combined = "" + username.slice(0, 17) + "...";
    }
    obj6.children = `${tmp22} `;
    const items5 = [closure_18(tmp2(tmp3[27]).Text, obj6), , ];
    const obj8 = { size: "sm", color: channel(tmp3[21]).colors.TEXT_SUBTLE };
    items5[1] = closure_18(tmp2(tmp3[38]).CalendarIcon, obj8);
    const intl = tmp2(tmp3[39]).intl;
    const string = intl.string;
    let t = tmp2(tmp3[39]).t;
    if (tmp12) {
      let text = ` ${string(obj12["42OrO4"])}`;
    } else {
      text = ` ${string(obj12.Vu15se)}`;
    }
    t = { children: null };
    items5[2] = text;
    t.children = items5;
  } else {
    const obj9 = { children: null };
    const obj10 = { size: "sm", color: channel(tmp3[21]).colors.TEXT_SUBTLE };
    const items6 = [closure_18(tmp2(tmp3[38]).CalendarIcon, obj10), ];
    const intl2 = tmp2(tmp3[39]).intl;
    items6[1] = ` ${tmp28(tmp2(tmp3[39]).t.T7MIsc)}`;
    obj9.children = items6;
    obj5.children = tmp20(tmp21, obj9);
    element.subtitle = closure_18(tmp19, obj5);
    element.id = event.id;
    element.type = type;
    element.onHeaderPress = onHeaderPress;
    element.children = children;
    return closure_18(GuildContentPost, element);
  }
  let obj4 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  tmp12 = null != event.host_id;
  const tmp2Result2 = guild(event[31]);
};
export const MessageContentPost = function MessageContentPost(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const message = guild.message;
  const id = guild.id;
  const type = guild.type;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = message.useMemo(() => ICYMIUtils.determineContentType(channel, message), items);
  const items1 = [GuildMemberStore];
  const stateFromStores = guild(author[31]).useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const obj2 = guild(author[31]);
  const name = guild(author[32]).useName(guild.id, channel.id, author);
  if (guild(author[9]).ContentType.POPULAR_MESSAGE === memo) {
    let LightbulbIcon = tmp2(tmp3[10]).FireIcon;
  } else if (tmp2(tmp3[9]).ContentType.IMAGE === memo) {
    LightbulbIcon = tmp2(tmp3[11]).ImageIcon;
  } else if (tmp2(tmp3[9]).ContentType.VIDEO === memo) {
    LightbulbIcon = tmp2(tmp3[12]).CirclePlayIcon;
  } else {
    LightbulbIcon = tmp2(tmp3[13]).LightbulbIcon;
  }
  const items2 = [author.id, channel.id, id, type];
  const callback = obj.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(id, type, "open_profile");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } });
    showUserProfileActionSheetDefault({ userId: author.id, channelId: channel.id });
  }, items2);
  const element = { guild, channel, timestamp, avatar: closure_18(CutoutGuildIconWithUser, { guild, author }), title: closure_18(guild(author[27]).Text, { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name }, channel.id), subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: null, children: null };
  const obj4 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: { marginRight: message.useContext(guild(author[40]).ICYMIContext).margin }, children: null };
  const obj5 = { style: { color: colorString }, onPress: callback, variant: "text-md/semibold", children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj5.children = `${tmp10} `;
  const items3 = [closure_18(guild(author[27]).Text, obj5), , ];
  const obj3 = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
  const tmp2Result = guild(author[32]);
  items3[1] = closure_18(LightbulbIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE });
  guild(author[36]);
  items3[2] = ` ${obj9.contentTypeToText(tmp)}`;
  obj4.children = items3;
  element.subtitle = closure_19(guild(author[27]).Text, obj4);
  element.onHeaderPress = onHeaderPress;
  element.onHeaderLongPress = onHeaderLongPress;
  element.id = id;
  element.type = type;
  element.children = children;
  return closure_18(GuildContentPost, element);
};
export const SimplePost = function SimplePost(arg0) {
  ({ children, hideDivider, highlight } = arg0);
  if (highlight === undefined) {
    highlight = false;
  }
  let token;
  const tmp = closure_21();
  const tmp2 = token;
  const tmp4 = token(4571)();
  token = highlight(4338).useToken(token(576).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, tmp4);
  let obj = highlight(4338);
  const hexWithOpacityResult = highlight(4486).hexWithOpacity(token(576).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  let obj2 = highlight(4486);
  const sharedValue = highlight(4373).useSharedValue(0);
  let obj3 = highlight(4373);
  const fn = function c() {
    const obj = { backgroundColor: null };
    const items = [token, c2];
    obj.backgroundColor = ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  let obj4 = highlight(4373);
  fn.__closure = { interpolateColor: highlight(4373).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__workletHash = 11116019021445;
  fn.__initData = __initData;
  let items = [highlight, sharedValue];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (highlight) {
      const obj = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1, { duration: 500 });
      const obj3 = ReanimatedRexport;
      const result = sharedValue.set(obj.withSequence(withTimingResult, obj3.withDelay(500, timing.withTiming(0, { duration: 350 }))));
    }
  }, items);
  const obj6 = { children: null };
  if (highlight) {
    const obj7 = { style: null, children: null };
    const items1 = [tmp.simplePostContent, animatedStyle];
    obj7.style = items1;
    obj7.children = children;
    const items2 = [closure_18(tmp2(4373).View, obj7), ];
    let tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = closure_18(Separator, {});
    }
    items2[1] = tmp12Result;
    obj6.children = items2;
    let tmp16 = obj6;
  } else {
    const obj8 = { style: tmp.simplePostContent, children };
    const items3 = [closure_18(View, obj8), ];
    let tmp12Result2 = null;
    if (!hideDivider) {
      tmp12Result2 = closure_18(Separator, {});
    }
    items3[1] = tmp12Result2;
    obj6.children = items3;
    tmp16 = obj6;
  }
  return closure_19(closure_20, tmp16);
};
export const ThreadAsComments = function ThreadAsComments(arg0) {
  ({ guild, parentMessage } = arg0);
  ({ onPress, style, inForum } = arg0);
  const tmp = closure_21();
  if (inForum == null) {
    inForum = false;
  }
  closure_129_0 = guild;
  closure_129_1 = parentMessage;
  closure_129_2 = inForum;
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = parentMessage(504).useStateFromStoresObject(items, () => {
    const obj = { thread: ChannelStore.getChannel(importDefault.id), messageCount: null, mostRecentMessage: null };
    let num = ThreadMessageStore.getCount(importDefault.id);
    if (num == null) {
      num = 0;
    }
    obj.messageCount = num;
    obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(importDefault.id);
    return obj;
  });
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const items1 = [guild.id, inForum, parentMessage];
  const effect = noop.useEffect(() => {
    let tmp2 = closure_1_1.hasFlag(constants4.HAS_THREAD) || dependencyMap;
    if (tmp2) {
      tmp2 = null == ThreadMessageStore.getMostRecentMessage(closure_1_1.id);
    }
    if (tmp2) {
      ChannelActionCreatorsDefault.preload(parentMessage.id, closure_1_1.id);
      const obj3 = { channelId: closure_1_1.id, isPreload: true, limit: 25 };
      const messages = MessageActionCreatorsDefault.fetchMessages(obj3);
    }
  }, items1);
  let obj = parentMessage(504);
  const items2 = [PermissionStore];
  if (obj2.useStateFromStores(items2, () => PermissionStore.canWithPartialContext(constants5.VIEW_CHANNEL, { channelId: parentMessage.id }))) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        let obj3 = { style: null, onPress: null, children: null };
        const items3 = [tmp.comments, style];
        obj3.style = items3;
        obj3.onPress = onPress;
        let author;
        if (mostRecentMessage != null) {
          author = mostRecentMessage.author;
        }
        const obj4 = { user: author, guildId: thread.guild_id, size: parentMessage(1176).AvatarSizes.XSMALL };
        const items4 = [closure_18(parentMessage(1176).Avatar, obj4), , ];
        const obj5 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp.recentCommentText, children: null };
        if (mostRecentMessage.content.length > 0) {
          let parseInlineReplyResult = MarkupUtilsDefault.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = parentMessage(1114).intl;
          parseInlineReplyResult = intl.string(parentMessage(1114).t["6kp9H2"]);
        }
        obj5.children = parseInlineReplyResult;
        items4[1] = closure_18(parentMessage(4632).Text, obj5);
        const obj7 = { style: tmp.commentCount, children: null };
        const obj8 = { style: tmp.commentsIcon };
        const items5 = [closure_18(parentMessage(5152).ChatIcon, obj8), , ];
        const obj9 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
        items5[1] = closure_18(parentMessage(4632).Text, obj9);
        const obj10 = { style: tmp.chevron, size: "xxs" };
        items5[2] = closure_18(parentMessage(7312).ChevronSmallRightIcon, obj10);
        obj7.children = items5;
        items4[2] = closure_19(View, obj7);
        obj3.children = items4;
        return closure_19(parentMessage(5204).PressableHighlight, obj3);
      }
    }
    const obj11 = { style: null, onPress: null, children: null };
    const items6 = [tmp.comments, style];
    obj11.style = items6;
    obj11.onPress = onPress;
    const obj12 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.recentCommentText, children: null };
    const intl2 = parentMessage(1114).intl;
    obj12.children = intl2.string(parentMessage(1114).t.VMWjXW);
    const items7 = [closure_18(parentMessage(4632).Text, obj12), ];
    const obj13 = { style: tmp.commentCount, children: null };
    const obj14 = { style: tmp.commentsIcon };
    const items8 = [closure_18(parentMessage(5152).ChatIcon, obj14), ];
    const obj15 = { style: tmp.chevron, size: "xxs" };
    items8[1] = closure_18(parentMessage(7312).ChevronSmallRightIcon, obj15);
    obj13.children = items8;
    items7[1] = closure_19(View, obj13);
    obj11.children = items7;
    return closure_19(parentMessage(5204).PressableHighlight, obj11);
  } else {
    return null;
  }
  obj2 = parentMessage(504);
};