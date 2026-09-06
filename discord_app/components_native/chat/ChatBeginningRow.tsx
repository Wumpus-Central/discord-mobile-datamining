// === Module 12468: ChatBeginningRow ===

// Module 12468 (ChatBeginningRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import LinkingDefault from "Linking" /* 4255 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import useToken from "useToken" /* 4262 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import useThemeDefault from "useTheme" /* 4495 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ChatIcon from "ChatIcon" /* 5071 */;
import ThreadIcon from "ThreadIcon" /* 5073 */;
import TextLockIcon from "TextLockIcon" /* 5078 */;
import TextIcon from "TextIcon" /* 5080 */;
import AppsLockIcon from "AppsLockIcon" /* 5105 */;
import AppsIcon2 from "AppsIcon" /* 5106 */;
import Pressables from "Pressables" /* 5123 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7170 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8187 */;
import RowButton from "RowButton" /* 8595 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import ReportModals from "ReportModals" /* 8629 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import PencilIcon from "PencilIcon" /* 10250 */;
import openGroupDMAddMembers from "openGroupDMAddMembers" /* 11590 */;
import showChatGDMUpsellActionSheetDefault from "showChatGDMUpsellActionSheet" /* 11602 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11608 */;
import _modDef12470 from "module_12470" /* 12470 */;
import ChannelAccessInfoDefault from "ChannelAccessInfo" /* 12471 */;
import _modDef12596 from "module_12596" /* 12596 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12597 */;
import PortalAccessibilityWorkaroundViewDefault from "PortalAccessibilityWorkaroundView" /* 12635 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 7277 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

const openGroupDMAddMembersDefault = openGroupDMAddMembers;

require = fn;
function ChatBeginningRowIcon(arg0) {
  ({ isPrivate, isNSFW } = arg0);
  ({ isThread, isForumPost, channelType } = arg0);
  if (isForumPost) {
    let obj = { IconComponent: ChatIcon.ChatIcon, label: util.t.Y4REmB };
    let tmp4 = require;
    let tmp5 = obj;
  } else if (isThread) {
    obj = { IconComponent: ThreadIcon.ThreadIcon, label: util.t["7Xm5QI"] };
    tmp4 = require;
    tmp5 = obj;
  } else if (channelType === constants4.GUILD_APP) {
    if (isPrivate) {
      let AppsIcon = AppsLockIcon.AppsLockIcon;
      let tmp9 = require;
    } else {
      AppsIcon = AppsIcon2.AppsIcon;
      tmp9 = require;
    }
    obj = { IconComponent: AppsIcon, label: tmp9(1114).t.ZkcrC2 };
  } else {
    const obj1 = { IconComponent: null, label: null };
    if (isPrivate) {
      obj1.IconComponent = TextLockIcon.TextLockIcon;
      obj1.label = util.t.GK18KJ;
      tmp4 = require;
      tmp5 = obj1;
    } else {
      obj1.IconComponent = TextIcon.TextIcon;
      obj1.label = util.t.GK18KJ;
      tmp4 = require;
      tmp5 = obj1;
    }
  }
  const obj2 = { style: closure_47().iconContainer, children: null };
  const obj3 = { size: "lg", color: "icon-strong", accessibilityLabel: null };
  ({ IconComponent, label } = tmp5);
  const intl = tmp4(1114).intl;
  obj3.accessibilityLabel = intl.string(label);
  obj2.children = closure_1_44(IconComponent, obj3);
  return closure_1_44(React5, obj2);
}
function ChatBeginningRowHeader(arg0) {
  ({ subtitle, isForumPost, isGameInvitesPost, subtitleLink } = arg0);
  ({ title, isPrivate, isThread, isNSFW, channelType } = arg0);
  const tmp = closure_47();
  let obj = subtitleLink(4962);
  const tmp4 = null != subtitleLink && obj.useIsScreenReaderEnabled();
  let tmp5Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    obj = { isNSFW, isPrivate, isThread, isForumPost, channelType };
    const items = [closure_44(ChatBeginningRowIcon, obj), ];
    const items1 = [tmp.title, ];
    let num = 8;
    if (isForumPost) {
      num = 0;
    }
    obj = { children: null };
    const obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const obj2 = { marginBottom: num };
    items1[1] = obj2;
    obj1.style = items1;
    obj1.children = title;
    items[1] = closure_44(subtitleLink(4556).Text, obj1);
    obj.children = items;
    tmp5Result = closure_46(closure_45, obj);
  }
  const children = [tmp5Result, ];
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    let str;
    if (tmp4) {
      str = "link";
    }
    const obj3 = { accessibilityRole: str, onPress: null, style: null, variant: "text-md/medium", color: "text-default", children: null };
    let fn;
    if (tmp4) {
      fn = () => LinkingDefault.openURL(subtitleLink);
    }
    obj3.onPress = fn;
    obj3.style = tmp.subtitle;
    obj3.children = subtitle;
    tmp11Result = closure_44(subtitleLink(4556).Text, obj3);
  }
  children[1] = tmp11Result;
  return closure_46(closure_45, { children });
}
function LinkManageButtons(arg0) {
  ({ canEdit, isPrivate, channel: require } = arg0);
  ({ canManageRoles, theme } = arg0);
  const tmp = closure_47();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_LINK, theme);
  obj = { style: tmp.ctaContainer, children: null };
  if (isPrivate) {
    isPrivate = canManageRoles;
  }
  if (isPrivate) {
    obj = {
      accessibilityRole: "button",
      onPress() {
          return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(id);
        },
      style: null,
      children: null
    };
    const items = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    obj.style = items;
    const obj1 = { source: _modDef12470, size: native.IconSizes.REFRESH_SMALL_16, color: token };
    const items1 = [closure_44(native.Icon, obj1), ];
    const obj2 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    obj2.style = items2;
    const intl = util.intl;
    obj2.children = intl.string(util.t.dMJ3Y6);
    items1[1] = closure_44(Text_Text.Text, obj2);
    obj.children = items1;
    isPrivate = closure_46(Pressables.PressableOpacity, obj);
  }
  const items3 = [isPrivate, ];
  if (canEdit) {
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants3.OVERVIEW);
          ChannelSettingsActionCreatorsDefault.open(id.id);
        },
      style: null,
      children: null
    };
    const items4 = [, ];
    ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
    obj3.style = items4;
    const obj4 = { size: "xs", color: token };
    const items5 = [closure_44(PencilIcon.PencilIcon, obj4), ];
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items6 = [tmp.ctaLabel];
    obj5.style = items6;
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.GE1Tlo);
    items5[1] = closure_44(Text_Text.Text, obj5);
    obj3.children = items5;
    canEdit = closure_46(Pressables.PressableOpacity, obj3);
  }
  items3[1] = canEdit;
  obj.children = items3;
  return closure_46(closure_7, obj);
}
function ThreadOwner(arg0) {
  ({ userId: require, guildId } = arg0);
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(_require));
  let obj1 = initialize;
  const items1 = [GuildMemberStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let member = null;
    if (null != _require) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  });
  let obj2 = initialize;
  const items2 = [AccessibilityStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => roleStyle.roleStyle);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.nick;
  }
  if (str == null) {
    let obj3 = guildId(4404);
    str = obj3.getName(stateFromStores);
  }
  if (str == null) {
    str = "???";
  }
  let colorString;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  let colorStrings;
  if (stateFromStores1 != null) {
    colorStrings = stateFromStores1.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  let tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
  tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if ("username" === stateFromStores2) {
    let tmp16;
    if (null != colorString) {
      obj = { color: colorString };
      tmp16 = obj;
    }
    let tmp18;
    if (tmp12) {
      tmp18 = processColorStringsArray;
    }
    obj = { gradientColors: tmp18, style: tmp16, variant: "text-md/semibold", color: "text-default", children: str };
    return closure_44(Text_Text.Text, obj);
  } else {
    let tmp13 = "dot" === stateFromStores2;
    if (tmp13) {
      tmp13 = null != colorString;
    }
    if (tmp13) {
      obj1 = { color: colorString, colors: colorStrings, containerStyles: tmp.threadCreatorRoleDot };
      tmp13 = closure_44(native.RoleDot, obj1);
    }
    obj2 = { children: null };
    const items3 = [tmp13, ];
    obj3 = { variant: "text-md/semibold", color: "text-default", children: str };
    items3[1] = closure_44(Text_Text.Text, obj3);
    obj2.children = items3;
    return closure_46(closure_45, obj2);
  }
  tmp = closure_47();
}
function ChatBeginningRowThread(channel) {
  channel = channel.channel;
  const tmp = closure_47();
  let obj = channel(9738);
  const result = obj.isPrivateGuildChannel(channel);
  let obj1 = channel(7275);
  const appliedTags = obj1.useAppliedTags(channel);
  let obj2 = channel(7272);
  const isGameInvitesPost = obj2.useIsGameInvitesPost(channel);
  channel(504);
  [][0] = ForumPostMessagesStore;
  let tmp10Result = null;
  if (null != channel.threadMetadata) {
    obj = { isNSFW: channel.isNSFW(), title: tmp3, isPrivate: result, isThread: true, isForumPost: channel.isForumPost(), isGameInvitesPost };
    const items = [closure_44(ChatBeginningRowHeader, obj), , , ];
    let tmp12Result = null;
    if (channel.isForumPost()) {
      tmp12Result = null;
      if (appliedTags.length > 0) {
        obj = { style: tmp.tagContainer, children: appliedTags.map((tag) => closure_1_44(channel(dependencyMap[53]).AppliedForumTagPill, { tag }, tag.id)) };
        tmp12Result = closure_44(closure_7, obj);
      }
    }
    items[1] = tmp12Result;
    const isForumPostResult = channel.isForumPost();
    tmp12Result = !isForumPostResult;
    if (!isForumPostResult) {
      obj1 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
      const intl = tmp4(1114).intl;
      obj2 = {
        usernameHook(arg0, arg1) {
              return closure_2_44(ThreadOwner, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
            }
      };
      obj1.children = intl.format(tmp4(1114).t.imPXd5, obj2);
      tmp12Result = closure_44(tmp4(4556).Text, obj1);
    }
    items[2] = tmp12Result;
    let tmp12Result1 = null;
    if (channel.isForumPost()) {
      tmp12Result1 = null;
      if (null == tmp8) {
        const obj3 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
        const intl2 = tmp4(1114).intl;
        obj3.children = intl2.string(tmp4(1114).t.mE3KJN);
        tmp12Result1 = closure_44(tmp4(4556).Text, obj3);
      }
    }
    const obj4 = { children: null };
    items[3] = tmp12Result1;
    obj4.children = items;
    tmp10Result = closure_46(closure_45, obj4);
  }
  return tmp10Result;
}
function ChatBeginningRowGuildNonDefaultChannel(channel) {
  channel = channel.channel;
  const tmp3 = useChannelNameDefault(channel, true);
  const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
  const tmp4 = useChannelNameDefault(channel, false);
  const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
  let obj = channel(9738);
  const result = obj.isPrivateGuildChannel(channel);
  const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
  const intl = channel(1114).intl;
  const tmp10 = useThemeDefault();
  const intl2 = channel(1114).intl;
  if (result) {
    obj = {
      channelName: tmp3,
      topicHook() {
          const obj = { channelId: channel.id };
          return obj.parseTopic(channel.topic, true, obj);
        }
    };
    let formatResult = intl2.format(tmp8(1114).t.QuwqjG, obj);
  } else if (canResult2) {
    obj = { channelName: tmp3 };
    formatResult = intl2.formatToPlainString(tmp8(1114).t.JHKUGB, obj);
  } else {
    const obj1 = { channelName: tmp4 };
    formatResult = intl2.format(tmp8(1114).t.hPVEQG, obj1);
  }
  const formatToPlainStringResult = intl.formatToPlainString(channel(1114).t.q0tgLe, { channelName: tmp3 });
  const children = [closure_44(ChatBeginningRowHeader, { title: intl.formatToPlainString(channel(1114).t.q0tgLe, { channelName: tmp3 }), subtitle: formatResult, isPrivate: result, channelType: channel.type }), closure_44(LinkManageButtons, { canManageRoles: canResult1, canEdit: canResult, isPrivate: result, channel, theme: tmp10 }), ];
  let tmp15Result = null;
  if (result) {
    tmp15Result = null;
    if (canResult) {
      const obj3 = { channel, guild: channel.guild };
      tmp15Result = closure_44(ChannelAccessInfoDefault, obj3);
    }
  }
  children[2] = tmp15Result;
  return closure_46(closure_45, { children });
}
function ChatBeginningRowGuild(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let obj = guild(504);
  const items = [GuildChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  if (PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel)) {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      obj = { guild, channel };
      let tmp4 = closure_44(ChatBeginningRowGuildDefaultChannel, obj);
    }
    return tmp4;
  }
  tmp4 = closure_44(ChatBeginningRowGuildNonDefaultChannel, { guild, channel });
}
function DMSpamButton(channel) {
  channel = channel.channel;
  const user = channel.user;
  let obj = channel(12592);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!channel.showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      obj = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl = tmp(1114).intl;
      obj.text = intl.string(tmp(1114).t.HHZmDn);
      obj.disabled = null == message;
      obj.onPress = function handleShowReportModal() {
        if (null != message) {
          const result = ReportModals.showReportModalForFirstDM(tmp, () => {
            message(dependencyMap[72]).closePrivateChannel(id.id, true);
          });
        }
      };
      return closure_44(tmp(4975).Button, obj);
    }
  }
  return null;
}
function ManageAppButton(application) {
  application = application.application;
  ({ channel: importDefault, oauth2Token: dependencyMap } = application);
  let obj = application(504);
  const items = [EmbeddedActivitiesStore];
  closure_3 = obj.useStateFromStores(items, () => selfEmbeddedActivities.getSelfEmbeddedActivities());
  let tmp4 = null;
  if (application.user.bot) {
    tmp4 = null;
    if (null != application) {
      obj = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
      const intl = tmp2(1114).intl;
      obj.text = intl.string(tmp2(1114).t["5S3sQF"]);
      obj = { size: tmp2(1178).Icon.Sizes.SMALL, source: _modDef12596, style: tmp.appDMButtonIcon };
      obj.icon = closure_44(tmp2(1178).Icon, obj);
      obj.onPress = function onPress() {
        let obj = {
          application,
          scopes: scopes.scopes,
          onDelete() {
            let obj = require("AuthorizedAppsActionCreators");
            obj.delete(id2.id);
            value = closure_1_3.get(id.id);
            let _location;
            if (value != null) {
              _location = value.location;
            }
            obj = { location: _location, applicationId: id.id };
            require("EmbeddedActivitiesNativeManager").leaveActivity(obj);
            const obj2 = require("EmbeddedActivitiesNativeManager");
          }
        };
        obj.openAlert("confirm-delete-authed-app", closure_2_44(UserSettingsAuthedAppDeleteWarningModalDefault, obj));
        obj = { application_id: application.id, channel_id: closure_1_1.id, channel_type: closure_1_1.type };
        AnalyticsUtilsDefault.track(constants.APP_MANAGE_CTA_CLICKED, obj);
      };
      tmp4 = closure_44(tmp2(4975).Button, obj);
    }
  }
  return tmp4;
}
function MuteAppButton(channel) {
  channel = channel.channel;
  let stateFromStores;
  const tmp = closure_47();
  importDefault = tmp;
  let obj = channel(stateFromStores[46]);
  const items = [UserGuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(null, channel.id));
  let tmp6Result = null;
  if (channel.user.bot) {
    let str = "destructive";
    if (stateFromStores) {
      str = "secondary";
    }
    obj = { size: "sm", variant: str, text: null, icon: null, onPress: null };
    let intl = tmp2(tmp3[30]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[30]).t;
    if (stateFromStores) {
      let stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj.text = stringResult;
    obj = { size: tmp2(tmp3[42]).Icon.Sizes.SMALL, source: importDefault(stateFromStores ? tmp3[80] : tmp3[81]), color: null, style: null };
    let WHITE;
    if (!stateFromStores) {
      WHITE = tmp8(tmp3[28]).unsafe_rawColors.WHITE;
    }
    obj.color = WHITE;
    obj.style = tmp.appDMButtonIcon;
    obj.icon = closure_44(tmp2(tmp3[42]).Icon, obj);
    obj.onPress = function onPress() {
      if (stateFromStores) {
        let tmpResult = NotificationSettingsModalActionCreatorsDefault;
        const result = tmpResult.updateChannelOverrideSettings(null, channel.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
        let obj = { key: "NOTIFICATIONS_UNMUTED", content: null, icon: null };
        const intl = util.intl;
        obj.content = intl.string(util.t["/6kulz"]);
        obj.icon = function icon() {
          let obj = { style: closure_1_1.unmutedNotificationContainer, children: null };
          obj = { source: closure_1(stateFromStores[81]), color: closure_1(stateFromStores[28]).unsafe_rawColors.WHITE, style: closure_1_1.unmutedNotification };
          obj.children = closure_2_44(channel(stateFromStores[42]).Icon, obj);
          return closure_2_44(closure_2_7, obj);
        };
        ToastActionCreatorsDefault.open(obj);
      } else {
        tmpResult = ActionSheetActionCreatorsDefault;
        obj = { channel };
        tmpResult.openLazy(asyncRequireImpl(12599, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj);
      }
    };
    tmp6Result = closure_44(tmp2(tmp3[73]).Button, obj);
  }
  return tmp6Result;
}
function ChatBeginningRowDMGuard(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    channel = channel.channel;
    return UserStore.getUser(channel.getRecipientId());
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.user = stateFromStores;
    tmp2 = closure_44(ChatBeginningRowDM, obj);
  }
  return tmp2;
}
function ChatBeginningRowDM(channel) {
  channel = channel.channel;
  const user = channel.user;
  authorizedAppsFetchState = undefined;
  let userTag;
  let tmp = closure_47();
  dependencyMap = tmp;
  const analyticsLocations = user(7162)().analyticsLocations;
  let id;
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = closure_30;
  }
  let tmp4Result = user(12600)(id);
  id = tmp4Result;
  let obj = channel(504);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = AuthorizedAppsStore;
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    obj = { authorizedAppToken: AuthorizedAppsStore.getNewestTokenForApplication(id), authorizedAppsFetchState: obj.getFetchState() };
    return obj;
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  let obj1 = channel(504);
  let items1 = [UserProfileStore];
  let items2 = [user];
  let stateFromStores = obj1.useStateFromStores(items1, () => {
    let mutualGuilds = null;
    if (null != user) {
      mutualGuilds = UserProfileStore.getMutualGuilds(tmp.id);
    }
    return mutualGuilds;
  }, items2);
  let items3 = [user, channel];
  const tmp4 = user(12600);
  const effect = authorizedAppsFetchState.useEffect(() => {
    let guild_id;
    ({ id, getAvatarURL } = user);
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    maybeFetchUserProfileDefault(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true, dispatchWait: true });
  }, items3);
  let bot;
  if (user != null) {
    bot = user.bot;
  }
  const items4 = [bot, authorizedAppToken, authorizedAppsFetchState];
  const effect1 = authorizedAppsFetchState.useEffect(() => {
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    if (bot) {
      bot = authorizedAppsFetchState === FetchState.NOT_FETCHED;
    }
    if (bot) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items4);
  if (null == user) {
    return null;
  } else {
    let tmp2Result = tmp2(4404);
    userTag = tmp2Result.getUserTag(user, { decoration: "never", identifiable: "always" });
    tmp2Result = tmp2(4404);
    const name = tmp2Result.getName(user);
    let intl6 = tmp7(1114).intl;
    let stringResult = intl6.string(tmp7(1114).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1114).intl;
      obj = { username: name };
      stringResult = intl.formatToPlainString(tmp7(1114).t.Q56TRC, obj);
    }
    function handleCopyUserTag() {
      ClipboardUtils.copy(userTag);
      const result = ToastUtils.presentUsernameCopied();
    }
    obj = { channel, user, showingSpamBanner: channel.showingSpamBanner };
    const tmp17 = closure_44(DMSpamButton, obj);
    obj1 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile() {
          showUserProfileActionSheetDefault({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
        },
      accessibilityLabel: null,
      children: null
    };
    let intl2 = tmp7(1114).intl;
    obj1.accessibilityLabel = intl2.string(tmp7(1114).t.iXAna6);
    let obj2 = { style: tmp.avatar, user, guildId: channel.guild_id, size: tmp7(1178).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
    obj1.children = closure_44(tmp7(1178).Avatar, obj2);
    const items5 = [closure_44(tmp7(5123).PressableOpacity, obj1), , , , , , ];
    let obj3 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: null, children: null };
    let intl3 = tmp7(1114).intl;
    obj3.accessibilityHint = intl3.string(tmp7(1114).t.y5MwJy);
    let obj4 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
    obj3.children = closure_44(tmp7(4556).Text, obj4);
    items5[1] = closure_44(tmp7(5123).PressableOpacity, obj3);
    let tmp15Result = null;
    if (!user.isProvisional) {
      let obj5 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: null, children: null };
      let intl4 = tmp7(1114).intl;
      obj5.accessibilityHint = intl4.string(tmp7(1114).t.y5MwJy);
      let obj6 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      obj5.children = closure_44(tmp7(4556).Text, obj6);
      tmp15Result = closure_44(tmp7(5123).PressableOpacity, obj5);
    }
    items5[2] = tmp15Result;
    let obj7 = { style: tmp.dmBeginningMessage, variant: "text-md/medium", color: "text-default", children: stringResult };
    items5[3] = closure_44(tmp7(4556).Text, obj7);
    tmp15Result = null;
    if (user.isProvisional) {
      let obj8 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp15Result = closure_44(tmp7(12627).ChatProvisionalAccountExplainerCard, obj8);
    }
    items5[4] = tmp15Result;
    let tmp18Result;
    if (null != stateFromStores) {
      if (stateFromStores.length >= 1) {
        let num2 = 5;
        if (stateFromStores.length > 5) {
          num2 = 4;
        }
        function handleOpenMutualGuilds() {
          if (null != user) {
            let obj = {
              user: tmp,
              onPressMutualGuild(arg0) {
                  const result = channel(8191).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
                  const obj = channel(8191);
                  channel(7342).transitionToGuild(arg0);
                  const obj2 = channel(7342);
                  user(4527).hideActionSheet();
                  const obj3 = user(4527);
                  user(4763).popWithKey(closure_1_42);
                }
            };
            obj.openLazy(asyncRequireImpl(12601, dependencyMap.paths), "MutualGuildsActionSheet", obj);
          }
        }
        const substr = stateFromStores.slice(0, num2);
        let obj9 = { accessibilityRole: "button", onPress: handleOpenMutualGuilds, style: tmp.mutualGuildsContainer, children: null };
        let obj10 = {
          size: tmp7(5584).GuildIconSizes.SMALL,
          names: substr.map((guild) => guild.guild.name),
          totalCount: stateFromStores.length,
          children: substr.map((guild) => {
                  guild = guild.guild;
                  const obj = { guild, size: channel(dependencyMap[98]).GuildIconSizes.SMALL };
                  return closure_1_44(user(dependencyMap[98]), obj, guild.id);
                })
        };
        const items6 = [closure_44(tmp7(12618).GuildIconPile, obj10), ];
        let obj11 = { style: tmp.mutualGuildsLabel, variant: "text-sm/medium", color: "text-default", children: null };
        let intl5 = tmp7(1114).intl;
        const obj12 = { count: stateFromStores.length };
        obj11.children = intl5.format(tmp7(1114).t.eE3oep, obj12);
        items6[1] = closure_44(tmp7(4556).Text, obj11);
        obj9.children = items6;
        tmp18Result = closure_46(tmp7(5123).PressableOpacity, obj9);
      }
    }
    items5[5] = tmp18Result;
    const obj13 = { style: tmp.dmButtonRow, children: null };
    if (user.isNonUserBot()) {
      const obj14 = { children: null };
      obj13.children = null;
      items5[6] = closure_44(closure_7, obj13);
      obj14.children = items5;
      return closure_46(closure_45, obj14);
    } else if (user.bot) {
      tmp18Result = null;
      if (null != authorizedAppToken) {
        tmp18Result = null;
        if (null != tmp4Result) {
          const obj15 = { children: null };
          const obj16 = { channel, user };
          const items7 = [closure_44(MuteAppButton, obj16), ];
          const obj17 = { user, application: tmp4Result, channel, oauth2Token: authorizedAppToken };
          items7[1] = closure_44(ManageAppButton, obj17);
          obj15.children = items7;
          tmp18Result = closure_46(closure_45, obj15);
        }
      }
      const obj18 = { children: null };
      const items8 = [tmp18Result, tmp17];
      obj18.children = items8;
      let tmp18Result1 = closure_46(closure_45, obj18);
    } else {
      const obj19 = { reportButton: tmp17 };
      tmp18Result1 = closure_44(function RelationshipButtons(reportButton) {
        reportButton = reportButton.reportButton;
        function handleBlock() {
          user(paths[85]);
          const obj = { userId: user.id, channelId: id.id };
          obj.openLazy(channel(paths[87])(paths[102], paths.paths), closure_2_43, obj);
        }
        let obj = initialize;
        const items = [RelationshipStore];
        const stateFromStores = obj.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
        obj = { text: null, size: "sm", variant: "secondary", onPress: null };
        const Button = components_Button_Button.Button;
        const intl = util.intl;
        obj.text = intl.string(util.t.l4Emac);
        obj.onPress = handleBlock;
        if (stateFromStores === constants8.PENDING_INCOMING) {
          obj = { style: paths.pendingIncoming, children: null };
          const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
          const intl5 = util.intl;
          const obj2 = { username: null };
          let obj9 = UserUtilsDefault;
          obj2.username = obj9.getName(user);
          obj1.children = intl5.format(util.t.uIomXw, obj2);
          const items1 = [closure_2_44(Text_Text.Text, obj1), ];
          const obj3 = { style: paths.pendingIncomingButtons, children: null };
          const obj4 = { text: null, size: "sm", variant: "active", onPress: null };
          const intl6 = util.intl;
          obj4.text = intl6.string(util.t["+WbSn5"]);
          obj4.onPress = function handleAcceptFriend() {
            user(paths[100]);
            const obj = { userId: user.id, location: constants.DM_CHANNEL };
            const result = obj.maybeConfirmFriendRequestAccept(obj);
          };
          const items2 = [closure_2_44(components_Button_Button.Button, obj4), , , ];
          const obj5 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl7 = util.intl;
          obj5.text = intl7.string(util.t.rQSndv);
          obj5.onPress = function handleIgnoreFriendRequest() {
            user(paths[99]);
            const obj = { location: constants.DM_CHANNEL };
            obj.cancelFriendRequest(user.id, obj);
          };
          items2[1] = closure_2_44(components_Button_Button.Button, obj5);
          const obj6 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl8 = util.intl;
          obj6.text = intl8.string(util.t.l4Emac);
          obj6.onPress = handleBlock;
          items2[2] = closure_2_44(components_Button_Button.Button, obj6);
          items2[3] = reportButton;
          obj3.children = items2;
          items1[1] = closure_2_46(React5, obj3);
          obj.children = items1;
          return closure_2_46(React5, obj);
        } else {
          if (constants8.NONE === stateFromStores) {
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            let tmp4Result = null;
            if (!bot) {
              function handleAddFriend() {
                user(paths[99]);
                let obj = { userId: user.id, context: null };
                obj = { location: constants.DM_CHANNEL };
                obj.context = obj;
                obj.addRelationship(obj);
              }
              const obj7 = { text: null, size: "sm", variant: "active", onPress: null };
              const intl4 = util.intl;
              obj7.text = intl4.string(util.t["PMsq/b"]);
              obj7.onPress = handleAddFriend;
              tmp4Result = closure_2_44(components_Button_Button.Button, obj7);
            }
          } else if (constants8.FRIEND === stateFromStores) {
            function handleRemoveFriend() {
              channel(paths[101]);
              let obj = {
                userDisplayName: user(paths[47]).getName(closure_1_1),
                onConfirm() {
                  user(paths[99]);
                  const obj = { location: constants.DM_CHANNEL };
                  obj.removeFriend(id.id, obj);
                }
              };
              obj.confirmRemoveFriend(obj);
            }
            const obj8 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl3 = util.intl;
            obj8.text = intl3.string(util.t.cvSt1J);
            obj8.onPress = handleRemoveFriend;
            tmp4Result = closure_2_44(components_Button_Button.Button, obj8);
          } else if (constants8.BLOCKED === stateFromStores) {
            function handleUnblock() {
              user(paths[99]);
              const obj = { location: constants.DM_CHANNEL };
              obj.unblockUser(user.id, obj);
            }
            obj9 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl2 = util.intl;
            obj9.text = intl2.string(util.t.XyHpKH);
            obj9.onPress = handleUnblock;
            tmp4Result = closure_2_44(components_Button_Button.Button, obj9);
          } else {
            tmp4Result = null;
            if (constants8.PENDING_OUTGOING === stateFromStores) {
              const obj10 = { text: null, size: "sm", variant: "active", disabled: true, onPress: "padding" };
              const intl9 = util.intl;
              obj10.text = intl9.string(util.t.xMH6vD);
              tmp4Result = closure_2_44(components_Button_Button.Button, obj10);
            }
          }
          const items3 = [tmp4Result, , ];
          let tmp11 = null;
          if (stateFromStores !== constants8.BLOCKED) {
            tmp11 = tmp5;
          }
          const obj11 = { children: null };
          items3[1] = tmp11;
          items3[2] = reportButton;
          obj11.children = items3;
          return closure_2_46(closure_2_45, obj11);
        }
      }, obj19);
    }
  }
  isSystemDMResult = channel.isSystemDM();
}
function ChatBeginningRowButton(style) {
  let obj = { style: style.style, children: null };
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  obj = { onPress, icon: closure_1_44(RowButton.RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing };
  obj.children = closure_1_44(RowButton.RowButton, obj);
  return closure_1_44(React5, obj);
}
function ChatBeginningRowGroupDM(channel) {
  channel = channel.channel;
  let first;
  let onClick;
  let callback1;
  const tmp = closure_47();
  const arr = first(4713)(channel);
  const tmp4 = onClick(noop.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp6;
  let obj = channel(504);
  const items = [RelationshipStore];
  const stateFromStores = obj.useStateFromStores(items, () => relationshipCount.getRelationshipCount() > 0);
  const items1 = [channel];
  onClick = noop.useCallback(() => {
    openGroupDMAddMembersDefault(channel.id, constants2.CHANNEL_TEXT_AREA);
  }, items1);
  const items2 = [channel, first, tmp4[1]];
  callback1 = noop.useCallback(callback1(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            if (first) {
              c3 = 3;
            } else {
              dependencyMap(true);
              let obj2 = tmp2(8378);
              dependencyMap = 1;
              c3 = 1;
              const obj1 = { value: obj2.mobileCreateInvite(channel, constants.GROUP_DM), done: false };
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          if (null != closure_128_0) {
            obj = tmp5(9820);
            obj.handleCopy(closure_128_0, closure_129_0, constants.GROUP_DM, false);
          }
          closure_129_2(false);
        }
        c3 = 3;
        obj2 = { value, done: true };
        return obj2;
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  }), items2);
  const items3 = [channel.id, onClick];
  const items4 = [callback1];
  const callback2 = noop.useCallback(() => {
    let obj = openGroupDMAddMembers;
    const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants2.CHANNEL_TEXT_AREA);
    if ("open" === groupDMAddMembersAction) {
      let tmpResult = DismissibleContentUnsafeUtils;
      if (tmpResult.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
        onClick();
      } else {
        obj = { onClick };
        showChatGDMUpsellActionSheetDefault(obj);
      }
    } else {
      tmpResult = openGroupDMAddMembers;
      const result = tmpResult.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, constants2.CHANNEL_TEXT_AREA);
    }
  }, items3);
  const callback3 = noop.useCallback(() => {
    let obj = DismissibleContentUnsafeUtils;
    if (obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
      callback1();
    } else {
      obj = { onClick: callback1 };
      showChatGDMUpsellActionSheetDefault(obj);
    }
  }, items4);
  let obj1 = first(11594);
  obj = { location: GroupDMChatBeginning };
  let obj3 = channel(11591);
  const groupDMNitroAudience = obj3.useGroupDMNitroAudience();
  const recipients = channel.recipients;
  let num;
  if (recipients != null) {
    num = recipients.length;
  }
  if (num == null) {
    num = 0;
  }
  const sum = num + 1;
  let enabled = stateFromStores;
  if (stateFromStores) {
    enabled = tmp7(11591).isGroupDMNitroUpsellAudience(groupDMNitroAudience);
    const tmp7Result = tmp7(11591);
  }
  if (enabled) {
    enabled = obj1.useConfig(obj).enabled;
  }
  if (enabled) {
    enabled = sum >= tmp16;
  }
  obj = { audience: groupDMNitroAudience, location: GroupDMChatBeginning, acquisitionStrategy: null };
  tmp2(11598);
  obj.acquisitionStrategy = channel(11591).GroupDMNitroAcquisitionStrategy.MARKETING;
  tmp16 = first(11592)({ useNitroCapExperiment: true });
  obj1 = { style: tmp.centerHeader, children: null };
  let obj2 = { style: tmp.avatarRedesign, channel, size: null, accessible: false };
  const tmp2Result = tmp2(10910);
  obj2.size = channel(1178).AvatarSizes.XXLARGE;
  const items5 = [closure_44(tmp2Result, obj2), , , ];
  obj3 = { style: tmp.dmTitle, variant: null, color: "mobile-text-heading-primary", children: null };
  let str = "heading-xxl/extrabold";
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  const tmp23 = channel.id === channel(7221).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  obj3.variant = str;
  obj3.children = arr;
  items5[1] = closure_44(channel(4556).Text, obj3);
  const obj4 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp7(1114).intl;
  if (tmp23) {
    const obj5 = { name: arr };
    let formatResult = intl.format(tmp7(1114).t.MFwcqO, obj5);
  } else {
    formatResult = intl.string(tmp7(1114).t["0Q7uk0"]);
  }
  obj4.children = formatResult;
  items5[2] = closure_44(channel(4556).Text, obj4);
  let tmp19Result = null;
  if (!tmp23) {
    if (enabled) {
      const obj6 = { style: tmp.gdmInviteFriends, onPress: tmp2ResultResult, IconComponent: tmp7(8662).NitroWheelIcon, iconVariant: "default", title: null, subtitle: null };
      const intl3 = tmp7(1114).intl;
      obj6.title = intl3.string(tmp7(1114).t["LR+Ptf"]);
      const intl4 = tmp7(1114).intl;
      const obj7 = { number };
      obj6.subtitle = intl4.formatToPlainString(tmp7(1114).t["8o8Zk5"], obj7);
      let tmp21Result = closure_44(ChatBeginningRowButton, obj6);
    } else {
      tmp21Result = null;
      if (stateFromStores) {
        const obj8 = { style: tmp.gdmInviteFriends, onPress: callback2, IconComponent: tmp7(10032).GroupPlusIcon, iconVariant: "default", title: null };
        const intl2 = tmp7(1114).intl;
        obj8.title = intl2.string(tmp7(1114).t["LR+Ptf"]);
        tmp21Result = closure_44(ChatBeginningRowButton, obj8);
      }
    }
    const items6 = [tmp21Result, , ];
    const items7 = [tmp.gdmShareInviteLink, ];
    let prop = null;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    const obj9 = { style: null, onPress: null, IconComponent: null, title: null, subtitle: null, trailing: null };
    items7[1] = prop;
    obj9.style = items7;
    obj9.onPress = callback3;
    obj9.IconComponent = tmp7(4503).LinkIcon;
    const intl5 = tmp7(1114).intl;
    obj9.title = intl5.string(tmp7(1114).t["3XVNyt"]);
    const intl6 = tmp7(1114).intl;
    obj9.subtitle = intl6.string(tmp7(1114).t.qa9CQu);
    tmp21Result = null;
    if (first) {
      tmp21Result = closure_44(closure_6, {});
    }
    obj9.trailing = tmp21Result;
    items6[1] = closure_44(ChatBeginningRowButton, obj9);
    let tmp21Result1 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj10 = { channelId: channel.id };
      tmp21Result1 = closure_44(tmp2(12631), obj10);
    }
    const obj11 = { children: null };
    items6[2] = tmp21Result1;
    obj11.children = items6;
    tmp19Result = closure_46(closure_45, obj11);
  }
  items5[3] = tmp19Result;
  obj1.children = items5;
  return closure_46(closure_7, obj1);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FetchState = fn(7107).FetchState;
const THREAD_CHANNEL_TYPES = fn(1961).THREAD_CHANNEL_TYPES;
const isGuildOwner = fn(1975).isGuildOwner;
const Constants = fn(1074);
({ AnalyticEvents: closure_25, AnalyticsPages: closure_26, AnalyticsSections: closure_27, ChannelSettingsSections: closure_28, ChannelTypes: closure_29, EMPTY_STRING_SNOWFLAKE_ID: closure_30, GuildSettingsSections: items, HelpdeskArticles: closure_32, InstantInviteSources: closure_33, Permissions: closure_34, RelationshipTypes: closure_35, UPLOAD_MEDIUM_SIZE: closure_36, WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_37 } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
const number = fn(11593).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const GuildProgressConstants = fn(12469);
({ AnalyticsActions: closure_40, AnalyticsSetupTypes: closure_41 } = GuildProgressConstants);
let closure_42 = fn(12443).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
let closure_43 = fn(11382).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_44, Fragment: closure_45, jsxs: closure_46 } = jsxProd);
fn(4560);
let createStyles = { container: { position: "absolute", width: "100%" }, contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 }, title: { marginTop: 16 }, subtitle: { marginBottom: 16, lineHeight: 20 }, gdmInviteFriends: null, gdmShareInviteLink: null, gdmShareInviteLinkNoRelationships: null, ctaLabel: null, ctaContainer: null, ctaButton: null, ctaAddRoles: null, avatar: null, avatarRedesign: null, centerHeader: null, gdmText: null, dmTitle: null, dmBeginningMessage: null, provisionalAccountExplainer: null, mutualGuildsLabel: null, mutualGuildsContainer: null, iconContainer: null, threadDetails: null, threadCreatorRoleDot: null, tagContainer: null, unmutedNotificationContainer: null, unmutedNotification: null, dmButtonRow: null, pendingIncoming: null, pendingIncomingButtons: null, appDMButtonIcon: null, formCtaIcon: null };
createStyles = { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" };
createStyles.gdmInviteFriends = createStyles;
createStyles.gdmShareInviteLink = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
createStyles.gdmShareInviteLinkNoRelationships = { marginTop: 16 };
createStyles.ctaLabel = { marginLeft: 8 };
createStyles.ctaContainer = { flexDirection: "row", flexWrap: "wrap" };
createStyles.ctaButton = { flexDirection: "row", alignItems: "center" };
createStyles.ctaAddRoles = { paddingRight: 24 };
createStyles.avatar = { marginBottom: 16 };
createStyles.avatarRedesign = { marginBottom: 16 };
createStyles.centerHeader = { paddingHorizontal: 8, alignItems: "center" };
createStyles.gdmText = { textAlign: "center" };
createStyles.dmTitle = { marginBottom: 8, textAlign: "center" };
createStyles.dmBeginningMessage = { marginTop: 8 };
createStyles.provisionalAccountExplainer = { marginTop: 12 };
createStyles.mutualGuildsLabel = { marginTop: 8, marginLeft: 8, height: 26 };
createStyles.mutualGuildsContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center" };
createStyles.iconContainer = size;
createStyles.threadDetails = { lineHeight: 20 };
createStyles.threadCreatorRoleDot = { paddingRight: 4, paddingTop: 2 };
createStyles.tagContainer = { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 4 };
const size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE, height: 24, width: 24, padding: 4, alignContent: "center" };
createStyles.unmutedNotificationContainer = size1;
createStyles.unmutedNotification = { width: 16, height: 16 };
createStyles.dmButtonRow = { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 };
createStyles.pendingIncoming = { flexDirection: "column", gap: 8 };
createStyles.pendingIncomingButtons = { flexDirection: "row", flexWrap: "wrap", gap: 8 };
createStyles.appDMButtonIcon = { marginRight: 2 };
createStyles.formCtaIcon = { width: 32, height: 32 };
let closure_47 = createStyles.createStyles(createStyles);
function ChatBeginningRowGuildDefaultChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const id = guild.id;
  const tmp = closure_47();
  let obj = guild(id[57]);
  const completedStates = obj.useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj1 = guild(id[57]);
  const permissions = obj1.usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj2 = guild(id[46]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  channel(id[58])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  let obj3 = channel(id[59]);
  const tmp9 = isGuildOwner(guild, stateFromStores);
  const extractTimestampResult = obj3.extractTimestamp(guild.id);
  let obj4 = guild(id[50]);
  let result = obj4.isPrivateGuildChannel(channel);
  let obj5 = guild(id[60]);
  const isEligibleForGuildProgress = obj5.useIsEligibleForGuildProgress(guild);
  let obj6 = guild(id[46]);
  const items1 = [GuildSettingsStore];
  const stateFromStoresObject = obj6.useStateFromStoresObject(items1, () => errors.getErrors());
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items2);
  if (canManageGuild) {
    closure_4 = async function _addServerIcon() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp2;
              let base64;
              tmp5(9063).init(id);
              const obj7 = tmp5(9063);
              let obj1 = { size };
              dependencyMap = 1;
              c3 = 1;
              const obj2 = { value: tmp5(5138).openImagePicker(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            base64 = value.base64;
            if (null != base64) {
              obj = tmp5(9063);
              obj.updateIcon(closure_129_2, base64);
              obj1 = tmp5(9063);
              obj1.open(closure_129_2, constants.LANDING);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    };
    obj = {
      onPress: function addServerIcon() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      source: null,
      iconStyle: null,
      title: null,
      isCompleted: null,
      analyticsSetupType: null,
      analyticsAction: null
    };
    obj = { uri: null };
    let tmp7Result = tmp7(tmp3[64]);
    obj.uri = tmp7(tmp3[65]);
    obj.source = obj;
    obj.iconStyle = tmp.formCtaIcon;
    const intl = tmp2(tmp3[30]).intl;
    obj.title = intl.string(tmp2(tmp3[30]).t["Yhi9/N"]);
    obj.isCompleted = guildPersonalized;
    obj.analyticsSetupType = constants10.CHANNEL_WELCOME;
    obj.analyticsAction = constants9.PERSONALIZE_SERVER;
    const tmp17 = closure_44(tmp7Result, obj);
  }
  if (canInvite) {
    obj1 = {
      onPress: function inviteFriends() {
          if (null != guild.vanityURLCode) {
            const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(tmp, channel, constants6.WELCOME_MESSAGE);
          } else {
            const obj = { source: constants6.WELCOME_MESSAGE };
            const result1 = obj.showInstantInviteActionSheet(channel, obj);
          }
        },
      source: null,
      iconStyle: null,
      title: null,
      isCompleted: null,
      analyticsSetupType: null,
      analyticsAction: null
    };
    obj2 = { uri: null };
    tmp7Result = tmp7(tmp3[64]);
    obj2.uri = tmp7(tmp3[67]);
    obj1.source = obj2;
    obj1.iconStyle = tmp.formCtaIcon;
    const intl2 = tmp2(tmp3[30]).intl;
    obj1.title = intl2.string(tmp2(tmp3[30]).t.q9n0Ta);
    obj1.isCompleted = guildPopulated;
    obj1.analyticsSetupType = constants10.CHANNEL_WELCOME;
    obj1.analyticsAction = constants9.INVITE;
    const tmp22 = closure_44(tmp7Result, obj1);
  }
  const intl3 = tmp2(tmp3[30]).intl;
  const string = intl3.string;
  const t = tmp2(tmp3[30]).t;
  if (tmp11) {
    let stringResult = string(t["gwyU/J"]);
  } else if (tmp9) {
    stringResult = string(t["1ach9C"]);
  } else {
    stringResult = string(t["ezm+/j"]);
  }
  let tmp28 = !isEligibleForGuildProgress;
  if (!isEligibleForGuildProgress) {
    tmp28 = null != tmp22 || null != tmp17;
    const tmp29 = null != tmp22 || null != tmp17;
  }
  tmp11 = obj3.extractTimestamp(guild.id) < Date.now() - closure_37;
  const combined = "" + channel(id[68]).getArticleURL(constants5.GUILD_GETTING_STARTED) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  const items3 = [stringResult, ];
  let tmp31Result = null;
  if (tmp28) {
    obj3 = { children: null };
    const intl4 = tmp2(tmp3[30]).intl;
    obj4 = { guideURL: combined };
    const items4 = [" ", intl4.format(tmp2(tmp3[30]).t.UOtD32, obj4)];
    obj3.children = items4;
    tmp31Result = closure_46(closure_45, obj3);
  }
  items3[1] = tmp31Result;
  obj5 = { title: null, subtitle: null, isPrivate: null, subtitleLink: null };
  tmp31Result = closure_46(closure_45, { children: items3 });
  const intl5 = tmp2(tmp3[30]).intl;
  obj6 = { guildName: guild.name };
  obj5.title = intl5.formatToPlainString(guild(id[30]).t["j59F/c"], obj6);
  obj5.subtitle = tmp31Result;
  obj5.isPrivate = result;
  let tmp37;
  if (tmp28) {
    tmp37 = combined;
  }
  obj5.subtitleLink = tmp37;
  const children = [closure_44(ChatBeginningRowHeader, obj5), ];
  if (isEligibleForGuildProgress) {
    let obj7 = { guild };
    let tmp31Result1 = closure_44(tmp7(tmp3[69]), obj7);
  } else {
    const obj8 = { children: null };
    const items6 = [tmp22, tmp17];
    obj8.children = items6;
    tmp31Result1 = closure_46(closure_45, obj8);
  }
  children[1] = tmp31Result1;
  return closure_46(noop.Fragment, { children });
}
const GroupDMChatBeginning = "GroupDMChatBeginning";
size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default function ChatBeginningRow(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, shouldRender } = channelId);
  dependencyMap = undefined;
  let tmp = closure_47();
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  let obj3 = noop;
  [tmp5, c2] = _slicedToArray(noop.useState(undefined), 2);
  if (shouldRender) {
    shouldRender = null != stateFromStores;
  }
  if (!shouldRender) {
    const callback = obj3.useCallback((nativeEvent) => {
      const height = nativeEvent.nativeEvent.layout.height;
      _undefined((arg0) => {
        let tmp = arg0;
        if (null == arg0) {
          tmp = height;
        } else {
          const _Math = Math;
        }
        return tmp;
      });
    }, []);
    const items2 = [tmp.container, ];
    let num = 0;
    if (null != null) {
      num = tmp5;
    }
    obj = { style: null, children: null };
    obj = { height: num };
    items2[1] = obj;
    obj.style = items2;
    let tmp19Result = null != null;
    if (tmp19Result) {
      const obj1 = { style: tmp.contentWrapper, onLayout: callback, children: null };
      tmp19Result = closure_44(closure_7, obj1, channelId);
    }
    obj.children = tmp19Result;
    return closure_44(PortalAccessibilityWorkaroundViewDefault, obj);
  } else if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
    obj2 = { channel: stateFromStores };
    let tmp8 = closure_44(ChatBeginningRowThread, obj2);
  } else if (stateFromStores.isDM()) {
    obj3 = { channel: stateFromStores, showingSpamBanner: channelId.showingSpamBanner };
    tmp8 = closure_44(ChatBeginningRowDMGuard, obj3);
  } else if (stateFromStores.isGroupDM()) {
    const obj4 = { channel: stateFromStores };
    tmp8 = closure_44(ChatBeginningRowGroupDM, obj4);
  } else if (null != stateFromStores1) {
    const obj5 = { guild: stateFromStores1, channel: stateFromStores };
    tmp8 = closure_44(ChatBeginningRowGuild, obj5);
  }
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
};