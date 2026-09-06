// discord_app/modules/icymi/native/ICYMIShared.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import native from "../../../design/void/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Client from "../../../flow/Client.tsx";
import MarkupUtilsDefault from "../../markup/MarkupUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import safeTransitionToDefault from "../../links/safeTransitionTo.native.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import ICYMIUtils from "../ICYMIUtils.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import openDetailsActionSheet from "util/openDetailsActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ThreadMessageStore from "../../threads/ThreadMessageStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
class Separator {
  constructor() {
    obj = { style: closure_21().separator };
    return jsx(View, obj);
  }
}
function CutoutGuildIconWithUser(guild) {
  guild = guild.guild;
  let obj = { guild, icon: null };
  obj = {
    animate: true,
    style: closure_21().authorIcon,
    guildId: guild.id,
    user: guild.author,
    size: native.AvatarSizes.XSMALL,
  };
  obj.icon = collapsedCategories(native.Avatar, obj);
  return collapsedCategories(CutoutGuildIcon, obj);
}
class CutoutGuildIcon {
  constructor(arg0) {
    obj = { style: { width: 40, height: 40 }, children: null };
    ({ guild, icon } = global);
    obj = { cutouts: null, children: null };
    point = { shape: null, x: 16, y: 14, size: 32 };
    tmp = closure_1(closure_2[23]);
    point.shape = closure_0(closure_2[23]).CutoutShape.Circle;
    items = [];
    items[0] = point;
    obj.cutouts = items;
    obj1 = { guild, size: null };
    tmp2 = closure_1(closure_2[24]);
    obj1.size = closure_0(closure_2[24]).GuildIconSizes.NORMAL;
    obj.children = jsx(tmp2, obj1);
    items1 = [,];
    items1[0] = jsx(tmp, obj);
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
    obj = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: null };
    tmp8 = View;
    obj1 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory, children: null };
    obj2 = { style: tmp.header, children: null };
    items = [,];
    items[0] = avatar;
    obj3 = { style: tmp.headerInfo, children: null };
    obj4 = { style: tmp.title, children: null };
    obj5 = { style: tmp.titleLeft, children: null };
    items1 = [,];
    items1[0] = title;
    tmp7Result = !hideTimestamp;
    if (!hideTimestamp) {
      obj6 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
      tmp2Result = tmp2(tmp3[28]);
      obj6.children = tmp2Result.getRelativeTimestamp(timestamp);
      tmp7Result = tmp7(tmp2(tmp3[27]).Text, obj6);
    }
    items1[1] = tmp7Result;
    obj5.children = items1;
    items2 = [,];
    items2[0] = tmp5(tmp8, obj5);
    tmp7Result1 = null;
    if (!disableInteractions) {
      tmp7Result1 = null;
      if (null != guild) {
        obj7 = { onPress: null, style: null, hitSlop: 8, children: null };
        obj7.onPress = function onPress() {
          const obj = { guildId: guild.id, channelId: null, id: null, type: null };
          id = undefined;
          if (null != id) {
            id = id.id;
          }
          obj.channelId = id;
          obj.id = id2;
          obj.type = type;
          return obj.openDetailsActionSheet(obj);
        };
        obj7.style = tmp.subtitleTrailing;
        obj8 = { color: null, size: "sm" };
        tmp11 = channel;
        obj8.color = channel(tmp3[21]).colors.ICON_MUTED;
        obj7.children = tmp7(tmp2(tmp3[30]).MoreHorizontalIcon, obj8);
        tmp7Result1 = tmp7(tmp2(tmp3[26]).PressableOpacity, obj7);
      }
    }
    obj9 = { children: null };
    items2[1] = tmp7Result1;
    obj4.children = items2;
    items3 = [,];
    items3[0] = tmp5(tmp8, obj4);
    obj10 = { style: tmp.subTitleContainer, children: null };
    obj11 = { style: tmp.subtitle, children: subtitle };
    obj10.children = tmp7(tmp8, obj11);
    items3[1] = tmp7(tmp8, obj10);
    obj3.children = items3;
    items[1] = tmp5(tmp8, obj3);
    obj2.children = items;
    obj1.children = tmp5(tmp8, obj2);
    obj.children = tmp7(tmp8, obj1);
    items4 = [,];
    items4[0] = tmp7(guild(id[26]).PressableHighlight, obj);
    items4[1] = children;
    obj9.children = items4;
    return tmp5(tmp6, obj9);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({
  AnalyticsObjects: c10,
  AnalyticsObjectTypes: closure_11,
  AnalyticsPages: closure_12,
  DEFAULT_ROLE_COLOR_HEX: map1,
  MAX_MESSAGES_FOR_JUMP: closure_14,
  MessageFlags: closure_15,
  Permissions: closure_16,
  Routes: closure_17,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const createICYMIStyles = fn(16452);
createICYMIStyles.createICYMIStyles((paddingBottom) => {
  let obj = PlatformUtils;
  let num = 0;
  if (obj.isAndroid()) {
    num = -2;
  }
  obj = {
    simplePostContent: { flex: 1, marginTop: num, overflow: "hidden" },
    content: null,
    insetIconWrapper: null,
    authorIcon: null,
    moreDetailsIcon: null,
    channelNameAndAccessory: null,
    channelNameAndAccessoryLarge: null,
    header: null,
    headerInfo: null,
    title: null,
    titleLeft: null,
    subTitleContainer: null,
    subtitle: null,
    genContentSubtitle: null,
    genContentSubtitleChannel: null,
    subtitleTrailing: null,
    separator: null,
    eventsSubtitle: null,
    comments: null,
    recentCommentText: null,
    commentCount: null,
    commentsIcon: null,
    chevron: null,
  };
  let num2 = 0;
  if (tmpResult.isAndroid()) {
    num2 = -2;
  }
  obj.content = { flex: 1, marginTop: num2, overflow: "hidden", paddingTop: paddingBottom.margin };
  const rect = {
    position: "absolute",
    right: -4,
    bottom: -2,
    padding: 4,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  };
  obj.insetIconWrapper = rect;
  obj.authorIcon = { position: "absolute", right: -4, bottom: -2 };
  obj = { tintColor: nativeDefault.colors.TEXT_MUTED };
  obj.moreDetailsIcon = obj;
  obj.channelNameAndAccessory = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: paddingBottom.margin,
    marginHorizontal: paddingBottom.margin,
  };
  obj.channelNameAndAccessoryLarge = {
    flexDirection: "column",
    paddingBottom: paddingBottom.margin,
    marginHorizontal: paddingBottom.margin,
  };
  obj.header = { flexDirection: "row", flexGrow: 1 };
  obj.headerInfo = { flexGrow: 1, flexShrink: 1, marginLeft: paddingBottom.margin };
  obj.title = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj.titleLeft = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  tmpResult = PlatformUtils;
  obj.subTitleContainer = {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: nativeDefault.radii.sm,
  };
  obj.subtitle = { flexShrink: 1, flexGrow: 0, width: "100%" };
  const obj1 = { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm };
  obj.genContentSubtitle = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.genContentSubtitleChannel = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj.subtitleTrailing = { paddingVertical: 1 };
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.separator = size;
  obj.eventsSubtitle = { flexDirection: "row", alignItems: "center" };
  const obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.comments = {
    padding: 8,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.md,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  };
  obj.recentCommentText = { flexGrow: 1, flexShrink: 1, marginRight: 12 };
  obj.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" };
  const size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = size1;
  const obj3 = {
    padding: 8,
    backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
    borderRadius: nativeDefault.radii.md,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  };
  obj.chevron = { tintColor: nativeDefault.colors.TEXT_MUTED };
  return obj;
});
const __initData = {
  code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  _require = id;
  importDefault = id3;
  const timerId = setTimeout(() => {
    const obj = {
      page: constants3.ICYMI,
      object: constants.ACK_MESSAGE_VIEWED,
      objectType: constants2.ACK_SEMI_AUTOMATIC,
    };
    obj.ack(closure_0, obj, true, true, closure_1);
  }, 1500);
  safeTransitionToDefault(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    require("RunAfterInteractionsUtils").runAfterInteractions(() => {
      let obj = { channelId, limit, jump: null };
      obj = { messageId, flash: true, jumpType: Client.JumpType.ANIMATED };
      obj.jump = obj;
      const messages = obj.fetchMessages(obj);
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
  let obj = guild(author[31]);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getMember(guild.id, author.id));
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
  const element = {
    guild,
    channel,
    timestamp,
    avatar: null,
    title: null,
    subtitle: null,
    onHeaderPress: null,
    onHeaderLongPress: null,
    id: null,
    type: "announcement",
    children: null,
  };
  const callback = id.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, "announcement", "open_profile");
    obj = {
      itemId: id,
      itemType: "announcement",
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "item_header",
        actionIntentType: "open",
        actionDestinationType: "user",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    showUserProfileActionSheetDefault(obj);
  }, items1);
  element.avatar = closure_18(CutoutGuildIconWithUser, { guild, author });
  obj = {
    style: { maxWidth: 225 },
    lineClamp: 1,
    variant: "text-sm/medium",
    color: "text-muted",
    children: guild.name,
  };
  element.title = closure_18(guild(author[27]).Text, obj, channel.id);
  obj = {
    lineClamp: 2,
    variant: "text-md/normal",
    color: "text-default",
    style: closure_21().subtitle,
    children: null,
  };
  const obj1 = { variant: "text-md/semibold", onPress: callback, style: { color: colorString }, children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj1.children = `${tmp10} `;
  const items2 = [closure_18(guild(author[27]).Text, obj1), ,];
  const tmp = closure_21();
  items2[1] = closure_18(guild(author[35]).AnnouncementsIcon, {
    size: "sm",
    color: channel(author[21]).colors.TEXT_SUBTLE,
  });
  tmp2Result = tmp2(tmp3[36]);
  items2[2] = ` ${tmp13(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  obj.children = items2;
  element.subtitle = closure_19(guild(author[27]).Text, obj);
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
  let obj = guild(event[37]);
  if (null != creator_id) {
    const items = [creator_id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedUsers = obj.useEnsureHydratedUsers(event.guild_id, items1);
  let tmp2Result = tmp2(tmp3[31]);
  const items2 = [UserStore];
  stateFromStores = tmp2Result.useStateFromStores(items2, () => UserStore.getUser(creator_id));
  tmp2Result = tmp2(tmp3[31]);
  const items3 = [GuildMemberStore];
  stateFromStores1 = tmp2Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = GuildMemberStore.getMember(guild.id, tmp);
    }
    return member;
  });
  const items4 = [stateFromStores, , , ,];
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
      let obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(event.id, type, "open_profile");
      obj = {
        itemId: event.id,
        itemType: "guild_event",
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "item_header",
          actionIntentType: "open",
          actionDestinationType: "user",
        },
      };
      ICYMIActionCreatorsDefault.feedItemActioned(obj);
      obj = { userId: tmp.id, roleId: null, channelId: null };
      let highestRoleId;
      if (stateFromStores1 != null) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      obj.roleId = highestRoleId;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj.channelId = id;
      showUserProfileActionSheetDefault(obj);
    }
  }, items4);
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const element = {
    guild,
    channel,
    timestamp: 0,
    hideTimestamp: true,
    avatar: null,
    title: null,
    subtitle: null,
    id: null,
    type: null,
    onHeaderPress: null,
    children: null,
  };
  if (null != stateFromStores) {
    obj = { guild, author: stateFromStores };
    let tmp13Result = closure_18(CutoutGuildIconWithUser, obj);
  } else {
    obj = { guild, size: tmp2(tmp3[24]).GuildIconSizes.NORMAL };
    tmp13Result = closure_18(channel(tmp3[24]), obj);
    const tmp16 = channel(tmp3[24]);
  }
  element.avatar = tmp13Result;
  element.title = closure_18(
    guild(event[27]).Text,
    { style: { maxWidth: 225 }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name },
    event.id,
  );
  let obj2 = {
    lineClamp: 2,
    variant: "text-md/normal",
    color: "text-default",
    style: closure_21().subtitle,
    children: null,
  };
  if (null != stateFromStores) {
    const obj3 = { variant: "text-md/semibold", onPress: callback, style: null, children: null };
    const obj4 = { color: colorString };
    obj3.style = obj4;
    const username = stateFromStores.username;
    let combined = username;
    if (username.length > 20) {
      const _HermesInternal = HermesInternal;
      combined = "" + username.slice(0, 17) + "...";
    }
    obj3.children = `${tmp22} `;
    const items5 = [closure_18(tmp2(tmp3[27]).Text, obj3), ,];
    const obj5 = { size: "sm", color: channel(tmp3[21]).colors.TEXT_SUBTLE };
    items5[1] = closure_18(tmp2(tmp3[38]).CalendarIcon, obj5);
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
    const obj6 = { children: null };
    const obj7 = { size: "sm", color: channel(tmp3[21]).colors.TEXT_SUBTLE };
    const items6 = [closure_18(tmp2(tmp3[38]).CalendarIcon, obj7)];
    const intl2 = tmp2(tmp3[39]).intl;
    items6[1] = ` ${tmp28(tmp2(tmp3[39]).t.T7MIsc)}`;
    obj6.children = items6;
    obj2.children = tmp20(tmp21, obj6);
    element.subtitle = closure_18(tmp19, obj2);
    element.id = event.id;
    element.type = type;
    element.onHeaderPress = onHeaderPress;
    element.children = children;
    return closure_18(GuildContentPost, element);
  }
  const obj1 = {
    style: { maxWidth: 225 },
    lineClamp: 1,
    variant: "text-sm/medium",
    color: "text-muted",
    children: guild.name,
  };
  const tmp = closure_21();
  tmp12 = null != event.host_id;
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
  const memo = message.useMemo(() => ICYMIUtils.determineContentType(channel, message), items);
  let obj1 = guild(author[31]);
  const items1 = [GuildMemberStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, author.id));
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
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, type, "open_profile");
    obj = {
      itemId: id,
      itemType: "message",
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "item_header",
        actionIntentType: "open",
        actionDestinationType: "user",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    obj = { userId: author.id, channelId: channel.id };
    showUserProfileActionSheetDefault(obj);
  }, items2);
  const element = {
    guild,
    channel,
    timestamp,
    avatar: closure_18(CutoutGuildIconWithUser, { guild, author }),
    title: null,
    subtitle: null,
    onHeaderPress: null,
    onHeaderLongPress: null,
    id: null,
    type: null,
    children: null,
  };
  obj = {
    style: { maxWidth: 225 },
    lineClamp: 1,
    variant: "text-sm/medium",
    color: "text-default",
    children: guild.name,
  };
  element.title = closure_18(guild(author[27]).Text, obj, channel.id);
  obj = {
    lineClamp: 2,
    variant: "text-md/normal",
    color: "text-default",
    style: { marginRight: obj.useContext(tmp2(tmp3[40]).ICYMIContext).margin },
    children: null,
  };
  obj1 = { style: { color: colorString }, onPress: callback, variant: "text-md/semibold", children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj1.children = `${tmp10} `;
  const items3 = [
    closure_18(guild(author[27]).Text, obj1),
    closure_18(LightbulbIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE }),
  ];
  tmp2Result = tmp2(tmp3[36]);
  items3[2] = ` ${obj9.contentTypeToText(tmp)}`;
  obj.children = items3;
  element.subtitle = closure_19(guild(author[27]).Text, obj);
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
  let obj = highlight(4262);
  token = obj.useToken(token(576).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, token(4495)());
  let obj1 = highlight(4409);
  const hexWithOpacityResult = obj1.hexWithOpacity(token(576).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  let obj2 = highlight(4296);
  const sharedValue = obj2.useSharedValue(0);
  const tmp2 = token;
  const tmp4 = token(4495)();
  const fn = function c() {
    const obj = { backgroundColor: null };
    const items = [token, c2];
    obj.backgroundColor = ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  obj = {
    interpolateColor: highlight(4296).interpolateColor,
    progress: sharedValue,
    bgColor: token,
    bgColorHighlighted: hexWithOpacityResult,
  };
  fn.__closure = obj;
  fn.__workletHash = 11116019021445;
  fn.__initData = __initData;
  let items = [highlight, sharedValue];
  const animatedStyle = highlight(4296).useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (highlight) {
      const obj = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1, { duration: 500 });
      const obj3 = ReanimatedRexport;
      const result = sharedValue.set(
        obj.withSequence(withTimingResult, obj3.withDelay(500, timing.withTiming(0, { duration: 350 }))),
      );
    }
  }, items);
  obj = { children: null };
  if (highlight) {
    obj1 = { style: null, children: null };
    const items1 = [tmp.simplePostContent, animatedStyle];
    obj1.style = items1;
    obj1.children = children;
    const items2 = [closure_18(tmp2(4296).View, obj1)];
    let tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = closure_18(Separator, {});
    }
    items2[1] = tmp12Result;
    obj.children = items2;
    let tmp16 = obj;
  } else {
    obj2 = { style: tmp.simplePostContent, children };
    const items3 = [closure_18(View, obj2)];
    tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = closure_18(Separator, {});
    }
    items3[1] = tmp12Result;
    obj.children = items3;
    tmp16 = obj;
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
  let obj = parentMessage(504);
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
      let obj = ChannelActionCreatorsDefault;
      obj.preload(parentMessage.id, closure_1_1.id);
      obj = { channelId: closure_1_1.id, isPreload: true, limit: 25 };
      const messages = MessageActionCreatorsDefault.fetchMessages(obj);
    }
  }, items1);
  let obj1 = parentMessage(504);
  const items2 = [PermissionStore];
  if (
    obj1.useStateFromStores(items2, () =>
      PermissionStore.canWithPartialContext(constants5.VIEW_CHANNEL, { channelId: parentMessage.id }),
    )
  ) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        obj = { style: null, onPress: null, children: null };
        const items3 = [tmp.comments, style];
        obj.style = items3;
        obj.onPress = onPress;
        let author;
        if (mostRecentMessage != null) {
          author = mostRecentMessage.author;
        }
        obj = { user: author, guildId: thread.guild_id, size: parentMessage(1178).AvatarSizes.XSMALL };
        const items4 = [closure_18(parentMessage(1178).Avatar, obj), ,];
        obj1 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp.recentCommentText, children: null };
        if (mostRecentMessage.content.length > 0) {
          let obj5 = MarkupUtilsDefault;
          let parseInlineReplyResult = obj5.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = parentMessage(1114).intl;
          parseInlineReplyResult = intl.string(parentMessage(1114).t["6kp9H2"]);
        }
        obj1.children = parseInlineReplyResult;
        items4[1] = closure_18(parentMessage(4556).Text, obj1);
        let obj2 = { style: tmp.commentCount, children: null };
        const obj3 = { style: tmp.commentsIcon };
        const items5 = [closure_18(parentMessage(5071).ChatIcon, obj3), ,];
        const obj4 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
        items5[1] = closure_18(parentMessage(4556).Text, obj4);
        obj5 = { style: tmp.chevron, size: "xxs" };
        items5[2] = closure_18(parentMessage(7209).ChevronSmallRightIcon, obj5);
        obj2.children = items5;
        items4[2] = closure_19(View, obj2);
        obj.children = items4;
        return closure_19(parentMessage(5123).PressableHighlight, obj);
      }
    }
    const obj6 = { style: null, onPress: null, children: null };
    const items6 = [tmp.comments, style];
    obj6.style = items6;
    obj6.onPress = onPress;
    const obj7 = {
      variant: "text-md/semibold",
      color: "text-muted",
      lineClamp: 1,
      style: tmp.recentCommentText,
      children: null,
    };
    const intl2 = parentMessage(1114).intl;
    obj7.children = intl2.string(parentMessage(1114).t.VMWjXW);
    const items7 = [closure_18(parentMessage(4556).Text, obj7)];
    const obj8 = { style: tmp.commentCount, children: null };
    const obj9 = { style: tmp.commentsIcon };
    const items8 = [closure_18(parentMessage(5071).ChatIcon, obj9)];
    const obj10 = { style: tmp.chevron, size: "xxs" };
    items8[1] = closure_18(parentMessage(7209).ChevronSmallRightIcon, obj10);
    obj8.children = items8;
    items7[1] = closure_19(View, obj8);
    obj6.children = items7;
    return closure_19(parentMessage(5123).PressableHighlight, obj6);
  } else {
    return null;
  }
};
