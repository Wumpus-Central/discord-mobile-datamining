// discord_app/modules/icymi/native/ICYMIShared.tsx
import set from "../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import GuildIconSizes from "../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import _safeTransitionToDefault from "../../links/safeTransitionTo.native.tsx";
import SolidCutout from "../../../design/components/Icon/native/ClipView.tsx";
import SolidCutoutDefault from "../../../design/components/Icon/native/ClipView.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../threads/ThreadMessageStore.tsx";
import closure_6 from "../../../stores/ChannelStore.tsx";
import closure_7 from "../../../stores/GuildMemberStore.tsx";
import closure_8 from "../../../stores/PermissionStore.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import { runAfterInteractions } from "../../../utils/native/RunAfterInteractionsUtils.tsx";

require = arg1;
class Separator {
  constructor() {
    obj = { style: closure_21().separator };
    return jsx(View, obj);
  }
}
function CutoutGuildIconWithUser(guild) {
  guild = guild.guild;
  let obj = { guild, icon: null };
  obj = { animate: true, style: callback3().authorIcon, guildId: guild.id, user: guild.author, size: Button.AvatarSizes.XSMALL };
  obj[1] = callback(Button.Avatar, obj);
  return callback(CutoutGuildIcon, obj);
}
class CutoutGuildIcon {
  constructor(arg0) {
    obj = { style: { width: 40, height: 40 }, children: null };
    ({ guild, icon } = global);
    obj = { cutouts: null, children: null };
    obj1 = { shape: null, x: 16, y: 14, size: 32 };
    tmp = require("SolidCutout");
    obj1[0] = require("SolidCutout").CutoutShape.Circle;
    items = [];
    items[0] = obj1;
    obj[0] = items;
    obj2 = { guild, size: null };
    tmp2 = require("GuildIconSizes");
    obj2[1] = require("GuildIconSizes").GuildIconSizes.NORMAL;
    obj[1] = jsx(tmp2, obj2);
    items1 = [, ];
    items1[0] = jsx(tmp, obj);
    items1[1] = icon;
    obj[1] = items1;
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
    obj = require("getFontScale");
    tmp5 = jsxs;
    tmp7 = jsx;
    fontScale = obj.useFontScale();
    tmp6 = Fragment;
    obj = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: null };
    tmp8 = View;
    obj1 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory, children: null };
    obj2 = { style: tmp.header, children: null };
    items = [, ];
    items[0] = avatar;
    obj3 = { style: tmp.headerInfo, children: null };
    obj4 = { style: tmp.title, children: null };
    obj5 = { style: tmp.titleLeft, children: null };
    items1 = [, ];
    items1[0] = title;
    tmp7Result = !hideTimestamp;
    if (!hideTimestamp) {
      obj6 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
      tmp2Result = require("getRelativeTimestamp");
      obj6[3] = tmp2Result.getRelativeTimestamp(timestamp);
      tmp7Result = tmp7(require("Text").Text, obj6);
    }
    items1[1] = tmp7Result;
    obj5[1] = items1;
    items2 = [, ];
    items2[0] = tmp5(tmp8, obj5);
    tmp7Result1 = null;
    if (!disableInteractions) {
      tmp7Result1 = null;
      if (null != guild) {
        obj7 = { onPress: null, style: null, hitSlop: 8, children: null };
        obj7[0] = function onPress() {
          let obj = guild(closure_1_2[29]);
          obj = { guildId: guild.id, channelId: null, id: null, type: null };
          let id;
          if (null != id) {
            id = id.id;
          }
          obj[1] = id;
          obj[2] = closure_2;
          obj[3] = closure_3;
          return obj.openDetailsActionSheet(obj);
        };
        obj7[1] = tmp.subtitleTrailing;
        obj8 = { color: null, size: "sm" };
        tmp11 = channel;
        obj8[0] = require("Themes").colors.ICON_MUTED;
        obj7[3] = tmp7(require("MoreHorizontalIcon").MoreHorizontalIcon, obj8);
        tmp7Result1 = tmp7(require("PressableBase").PressableOpacity, obj7);
      }
    }
    obj9 = { children: null };
    items2[1] = tmp7Result1;
    obj4[1] = items2;
    items3 = [, ];
    items3[0] = tmp5(tmp8, obj4);
    obj10 = { style: tmp.subTitleContainer, children: tmp7(tmp8, obj11) };
    obj11 = { style: tmp.subtitle, children: subtitle };
    items3[1] = tmp7(tmp8, obj10);
    obj3[1] = items3;
    items[1] = tmp5(tmp8, obj3);
    obj2[1] = items;
    obj1[1] = tmp5(tmp8, obj2);
    obj[3] = tmp7(tmp8, obj1);
    items4 = [, ];
    items4[0] = tmp7(require("PressableBase").PressableHighlight, obj);
    items4[1] = children;
    obj9[0] = items4;
    return tmp5(tmp6, obj9);
  }
}
({ AnalyticsObjects: c10, AnalyticsObjectTypes: unpackModuleId, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: map1, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = ME);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let closure_21 = createICYMIStyles.createICYMIStyles((paddingBottom) => {
  let obj = set;
  let num = 0;
  if (obj.isAndroid()) {
    num = -2;
  }
  obj = { simplePostContent: { flex: 1, marginTop: num, overflow: "hidden" }, content: null, insetIconWrapper: null, authorIcon: null, moreDetailsIcon: null, channelNameAndAccessory: null, channelNameAndAccessoryLarge: null, header: null, headerInfo: null, title: null, titleLeft: null, subTitleContainer: null, subtitle: null, genContentSubtitle: null, genContentSubtitleChannel: null, subtitleTrailing: null, separator: null, eventsSubtitle: null, comments: null, recentCommentText: null, commentCount: null, commentsIcon: null, chevron: null };
  let num2 = 0;
  if (tmpResult.isAndroid()) {
    num2 = -2;
  }
  obj[1] = { flex: 1, marginTop: num2, overflow: "hidden", paddingTop: paddingBottom.margin };
  obj = { position: "absolute", right: -4, bottom: -2, padding: 4, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  obj[2] = obj;
  obj[3] = { position: "absolute", right: -4, bottom: -2 };
  const tmp = require;
  tmpResult = set;
  obj[4] = { tintColor: ThemesDefault.colors.TEXT_MUTED };
  obj[5] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin };
  obj[6] = { flexDirection: "column", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin };
  obj[7] = { flexDirection: "row", flexGrow: 1 };
  obj[8] = { flexGrow: 1, flexShrink: 1, marginLeft: paddingBottom.margin };
  obj[9] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj[10] = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  obj1 = { tintColor: ThemesDefault.colors.TEXT_MUTED };
  obj[11] = { flexDirection: "row", justifyContent: "space-between", borderRadius: ThemesDefault.radii.sm };
  obj[12] = { flexShrink: 1, flexGrow: 0, width: "100%" };
  const obj2 = { flexDirection: "row", justifyContent: "space-between", borderRadius: ThemesDefault.radii.sm };
  obj[13] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[14] = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj[15] = { paddingVertical: 1 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[16] = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[17] = { flexDirection: "row", alignItems: "center" };
  const obj4 = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[18] = { padding: 8, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: ThemesDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj[19] = { flexGrow: 1, flexShrink: 1, marginRight: 12 };
  obj[20] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" };
  const obj5 = { padding: 8, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: ThemesDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj[21] = { width: 20, height: 20, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj6 = { width: 20, height: 20, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[22] = { tintColor: ThemesDefault.colors.TEXT_MUTED };
  return obj;
});
let closure_26 = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  const _require = id;
  importDefault = id3;
  const timerId = setTimeout(() => {
    let obj = id(closure_1_2[14]);
    obj = { page: closure_1_12.ICYMI, object: closure_1_10.ACK_MESSAGE_VIEWED, objectType: closure_1_11.ACK_SEMI_AUTOMATIC };
    obj.ack(id, obj, true, true, closure_1);
  }, 1500);
  _safeTransitionToDefault(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    require("../../../utils/native/RunAfterInteractionsUtils.tsx").runAfterInteractions(() => {
      let obj = id3(closure_1_2[17]);
      obj = { channelId: id, limit: closure_1_14, jump: null };
      obj = { messageId: id3, flash: true, jumpType: id(closure_1_2[18]).JumpType.ANIMATED };
      obj[2] = obj;
      const messages = obj.fetchMessages(obj);
    }, 150);
    let obj = runAfterInteractions;
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
  let obj = guild(author[31]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  let tmp2Result = tmp2(tmp3[32]);
  const name = tmp2Result.useName(guild.id, channel.id, author);
  const items1 = [author.id, channel.id, id];
  obj = { guild, channel, timestamp, avatar: null, title: null, subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: "announcement", children: null };
  const callback = id.useCallback(() => {
    let obj = channel(author[33]);
    obj.itemInteracted(id, "announcement", "open_profile");
    obj = { itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    channel(author[33]).feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    channel(author[34])(obj);
  }, items1);
  obj[3] = callback(CutoutGuildIconWithUser, { guild, author });
  obj = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj[4] = callback(guild(author[27]).Text, obj, channel.id);
  obj1 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: callback3().subtitle, children: null };
  const obj2 = { variant: "text-md/semibold", onPress: callback, style: { color: colorString }, children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj2[3] = `${tmp10} `;
  const items2 = [callback(guild(author[27]).Text, obj2), , ];
  const tmp = callback3();
  const tmp8 = GuildContentPost;
  const tmp9 = closure_19;
  items2[1] = callback(guild(author[35]).AnnouncementsIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE });
  tmp2Result = tmp2(tmp3[36]);
  items2[2] = ` ${tmp13(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  obj1[4] = items2;
  obj[5] = tmp9(guild(author[27]).Text, obj1);
  obj[6] = onHeaderPress;
  obj[7] = onHeaderLongPress;
  obj[8] = id;
  obj[10] = children;
  return callback(tmp8, obj);
};
export const GuildEventPost = function GuildEventPost(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const event = guild.event;
  const type = guild.type;
  let creator_id;
  let stateFromStores;
  let stateFromStores1;
  ({ children, onHeaderPress } = guild);
  creator_id = event.host_id;
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  let obj = guild(event[37]);
  if (null != creator_id) {
    const items = [creator_id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedUsers = obj.useEnsureHydratedUsers(event.guild_id, items1);
  let tmp2Result = tmp2(tmp3[31]);
  const items2 = [closure_9];
  stateFromStores = tmp2Result.useStateFromStores(items2, () => closure_1_9.getUser(creator_id));
  tmp2Result = tmp2(tmp3[31]);
  const items3 = [closure_7];
  stateFromStores1 = tmp2Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = closure_1_7.getMember(guild.id, tmp);
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
      let obj = channel(event[33]);
      obj.itemInteracted(event.id, type, "open_profile");
      obj = { itemId: null, itemType: "guild_event", actionParameters: null };
      obj[0] = event.id;
      obj[2] = { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" };
      channel(event[33]).feedItemActioned(obj);
      obj = { userId: null, roleId: null, channelId: null };
      obj[0] = tmp.id;
      let highestRoleId;
      const obj2 = channel(event[33]);
      if (stateFromStores1 != null) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      obj[1] = highestRoleId;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj[2] = id;
      channel(event[34])(obj);
      const tmp11 = channel(event[34]);
    }
  }, items4);
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  obj = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: null, title: null, subtitle: null, id: null, type: null, onHeaderPress: null, children: null };
  if (null != stateFromStores) {
    obj = { guild: null, author: null };
    obj[0] = guild;
    obj[1] = stateFromStores;
    let tmp13Result = tmp13(CutoutGuildIconWithUser, obj);
  } else {
    obj1 = { guild: null, size: null };
    obj1[0] = guild;
    obj1[1] = tmp2(tmp3[24]).GuildIconSizes.NORMAL;
    tmp13Result = tmp13(channel(tmp3[24]), obj1);
    const tmp16 = channel(tmp3[24]);
  }
  obj[4] = tmp13Result;
  obj[5] = closure_18(guild(event[27]).Text, { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name }, event.id);
  const obj3 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: callback3().subtitle, children: null };
  if (null != stateFromStores) {
    const obj4 = { variant: "text-md/semibold", onPress: null, style: null, children: null };
    obj4[1] = callback;
    const obj5 = { color: null };
    obj5[0] = colorString;
    obj4[2] = obj5;
    const username = stateFromStores.username;
    let combined = username;
    if (username.length > 20) {
      const _HermesInternal = HermesInternal;
      combined = "" + username.slice(0, 17) + "...";
    }
    obj4[3] = `${tmp22} `;
    const items5 = [tmp13(tmp2(tmp3[27]).Text, obj4), , ];
    const obj6 = { size: "sm", color: null };
    obj6[1] = channel(tmp3[21]).colors.TEXT_SUBTLE;
    items5[1] = tmp13(tmp2(tmp3[38]).CalendarIcon, obj6);
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
    t[0] = items5;
  } else {
    const obj7 = { children: null };
    const obj8 = { size: "sm", color: null };
    obj8[1] = channel(tmp3[21]).colors.TEXT_SUBTLE;
    const items6 = [tmp13(tmp2(tmp3[38]).CalendarIcon, obj8), ];
    const intl2 = tmp2(tmp3[39]).intl;
    items6[1] = ` ${tmp28(tmp2(tmp3[39]).t.T7MIsc)}`;
    obj7[0] = items6;
    obj3[4] = tmp20(tmp21, obj7);
    obj[6] = tmp13(tmp19, obj3);
    obj[7] = event.id;
    obj[8] = type;
    obj[9] = onHeaderPress;
    obj[10] = children;
    return tmp13(GuildContentPost, obj);
  }
};
export const MessageContentPost = function MessageContentPost(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const message = guild.message;
  const id = guild.id;
  const type = guild.type;
  let obj = message;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = message.useMemo(() => guild(author[36]).determineContentType(channel, message), items);
  obj1 = guild(author[31]);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => closure_1_7.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  let tmp2Result = tmp2(tmp3[32]);
  const name = tmp2Result.useName(guild.id, channel.id, author);
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
    let obj = channel(author[33]);
    obj.itemInteracted(id, type, "open_profile");
    obj = { itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    channel(author[33]).feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    channel(author[34])(obj);
  }, items2);
  obj = { guild, channel, timestamp, avatar: callback(CutoutGuildIconWithUser, { guild, author }), title: callback(tmp2(tmp3[27]).Text, obj, channel.id), subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: null, children: null };
  obj = { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
  obj1 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: { marginRight: obj.useContext(tmp2(tmp3[40]).ICYMIContext).margin }, children: null };
  const obj2 = { style: { color: colorString }, onPress: callback, variant: "text-md/semibold", children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj2[3] = `${tmp10} `;
  const items3 = [callback(guild(author[27]).Text, obj2), callback(LightbulbIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE }), ];
  tmp2Result = tmp2(tmp3[36]);
  items3[2] = ` ${obj9.contentTypeToText(tmp)}`;
  obj1[4] = items3;
  obj[5] = closure_19(guild(author[27]).Text, obj1);
  obj[6] = onHeaderPress;
  obj[7] = onHeaderLongPress;
  obj[8] = id;
  obj[9] = type;
  obj[10] = children;
  return callback(GuildContentPost, obj);
};
export const SimplePost = function SimplePost(arg0) {
  ({ children, hideDivider, highlight } = arg0);
  if (highlight === undefined) {
    highlight = false;
  }
  let token;
  dependencyMap = undefined;
  let sharedValue;
  const tmp = callback3();
  let obj = highlight(4101);
  token = obj.useToken(token(712).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, token(4315)());
  obj1 = highlight(4228);
  const hexWithOpacityResult = obj1.hexWithOpacity(token(712).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  let obj2 = highlight(4120);
  sharedValue = obj2.useSharedValue(0);
  const tmp2 = token;
  const tmp4 = token(4315)();
  const fn = function c() {
    const obj = { backgroundColor: highlight(_undefined[44]).interpolateColor(sharedValue.get(), [0, 1], items) };
    items = [token, _undefined];
    return obj;
  };
  obj = { interpolateColor: highlight(4120).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__closure = obj;
  fn.__workletHash = 11116019021445;
  fn.__initData = closure_26;
  let items = [highlight, sharedValue];
  const animatedStyle = highlight(4120).useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (highlight) {
      const obj = highlight(_undefined[44]);
      const obj2 = highlight(_undefined[45]);
      const withTimingResult = highlight(_undefined[45]).withTiming(1, { duration: 500 });
      const obj3 = highlight(_undefined[44]);
      const result = sharedValue.set(obj.withSequence(withTimingResult, obj3.withDelay(500, highlight(_undefined[45]).withTiming(0, { duration: 350 }))));
      const obj4 = highlight(_undefined[45]);
    }
  }, items);
  obj = { children: null };
  if (highlight) {
    obj1 = { style: null, children: null };
    const items1 = [tmp.simplePostContent, animatedStyle];
    obj1[0] = items1;
    obj1[1] = children;
    const items2 = [tmp12(tmp2(4120).View, obj1), ];
    let tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = tmp12(Separator, {});
    }
    items2[1] = tmp12Result;
    obj[0] = items2;
    let tmp16 = obj;
  } else {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.simplePostContent;
    obj2[1] = children;
    const items3 = [tmp12(View, obj2), ];
    tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = tmp12(Separator, {});
    }
    items3[1] = tmp12Result;
    obj[0] = items3;
    tmp16 = obj;
  }
  return closure_19(closure_20, tmp16);
};
export const ThreadAsComments = function ThreadAsComments(arg0) {
  ({ guild, parentMessage } = arg0);
  guild = parentMessage;
  ({ onPress, style, inForum } = arg0);
  const tmp = callback3();
  if (inForum == null) {
    inForum = false;
  }
  let obj = guild(inForum[31]);
  const items = [closure_6, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { thread: closure_1_6.getChannel(parentMessage.id), messageCount: null, mostRecentMessage: null };
    let num = closure_1_5.getCount(parentMessage.id);
    if (num == null) {
      num = 0;
    }
    obj[1] = num;
    obj[2] = closure_1_5.getMostRecentMessage(parentMessage.id);
    return obj;
  });
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const items1 = [guild.id, inForum, parentMessage];
  const effect = React.useEffect(() => {
    let tmp2 = parentMessage.hasFlag(closure_1_15.HAS_THREAD) || inForum;
    if (tmp2) {
      tmp2 = null == closure_1_5.getMostRecentMessage(tmp.id);
    }
    if (tmp2) {
      let obj = parentMessage(inForum[46]);
      obj.preload(guild.id, tmp.id);
      obj = { channelId: null, isPreload: true, limit: 25 };
      obj[0] = tmp.id;
      const messages = parentMessage(inForum[17]).fetchMessages(obj);
      const obj2 = parentMessage(inForum[17]);
    }
  }, items1);
  obj1 = guild(inForum[31]);
  const items2 = [closure_8];
  if (obj1.useStateFromStores(items2, () => closure_1_8.canWithPartialContext(closure_1_16.VIEW_CHANNEL, { channelId: guild.id }))) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        obj = { style: null, onPress: null, children: null };
        const items3 = [tmp.comments, style];
        obj[0] = items3;
        obj[1] = onPress;
        let author;
        if (mostRecentMessage != null) {
          author = mostRecentMessage.author;
        }
        obj = { user: null, guildId: null, size: null };
        obj[0] = author;
        obj[1] = thread.guild_id;
        obj[2] = tmp2(tmp3[22]).AvatarSizes.XSMALL;
        const items4 = [callback(tmp2(tmp3[22]).Avatar, obj), , ];
        obj1 = { variant: "text-sm/semibold", lineClamp: 1, style: null, children: null };
        obj1[2] = tmp.recentCommentText;
        if (mostRecentMessage.content.length > 0) {
          let obj5 = parentMessage(tmp3[49]);
          let parseInlineReplyResult = obj5.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = tmp2(tmp3[39]).intl;
          parseInlineReplyResult = intl.string(tmp2(tmp3[39]).t["6kp9H2"]);
        }
        obj1[3] = parseInlineReplyResult;
        items4[1] = callback(tmp2(tmp3[27]).Text, obj1);
        let obj2 = { style: null, children: null };
        obj2[0] = tmp.commentCount;
        const obj3 = { style: null };
        obj3[0] = tmp.commentsIcon;
        const items5 = [callback(tmp2(tmp3[47]).ChatIcon, obj3), , ];
        const obj4 = { variant: "text-sm/bold", color: "interactive-text-default", children: null };
        obj4[2] = str;
        items5[1] = callback(tmp2(tmp3[27]).Text, obj4);
        obj5 = { style: null, size: "xxs" };
        obj5[0] = tmp.chevron;
        items5[2] = callback(tmp2(tmp3[48]).ChevronSmallRightIcon, obj5);
        obj2[1] = items5;
        items4[2] = callback2(View, obj2);
        obj[2] = items4;
        return callback2(tmp2(tmp3[26]).PressableHighlight, obj);
      }
    }
    const obj6 = { style: null, onPress: null, children: null };
    const items6 = [tmp.comments, style];
    obj6[0] = items6;
    obj6[1] = onPress;
    const obj7 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: null, children: null };
    obj7[3] = tmp.recentCommentText;
    const intl2 = tmp2(tmp3[39]).intl;
    obj7[4] = intl2.string(tmp2(tmp3[39]).t.VMWjXW);
    const items7 = [callback(tmp2(tmp3[27]).Text, obj7), ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.commentCount;
    const obj9 = { style: null };
    obj9[0] = tmp.commentsIcon;
    const items8 = [callback(tmp2(tmp3[47]).ChatIcon, obj9), ];
    const obj10 = { style: null, size: "xxs" };
    obj10[0] = tmp.chevron;
    items8[1] = callback(tmp2(tmp3[48]).ChevronSmallRightIcon, obj10);
    obj8[1] = items8;
    items7[1] = callback2(View, obj8);
    obj6[2] = items7;
    return callback2(tmp2(tmp3[26]).PressableHighlight, obj6);
  } else {
    return null;
  }
};