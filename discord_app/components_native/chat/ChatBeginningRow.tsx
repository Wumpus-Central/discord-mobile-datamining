// discord_app/components_native/chat/ChatBeginningRow.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../_runtime/01994_asyncRequireImpl.js";
import _modDef3868 from "../../modules/conjure/intl/ConjureUntranslated.messages.js";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../modules/dismissible_content/DismissibleContentUnsafeUtils.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import useChannelNameDefault from "../../modules/channel/useChannelName.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../modules/toast/native/ToastActionCreators.tsx";
import MarkupUtilsDefault from "../../modules/markup/MarkupUtils.tsx";
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../actions/NotificationSettingsModalActionCreators.tsx";
import AuthorizedAppsActionCreatorsDefault from "../../modules/oauth2/AuthorizedAppsActionCreators.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import RowButton from "../../design/components/TableRow/native/RowButton.native.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import ReportModals from "../../modules/in_app_reports/ReportModals.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import ChatIcon from "../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadIcon from "../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import TextLockIcon from "../../design/components/Icon/native/redesign/generated/TextLockIcon.tsx";
import TextIcon from "../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import AppsLockIcon from "../../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import AppsIcon2 from "../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import showUserProfileActionSheetDefault from "../../modules/user_profile/native/showUserProfileActionSheet.tsx";
import maybeFetchUserProfileDefault from "../../modules/user_profile/maybeFetchUserProfile.tsx";
import instant_invite_InstantInviteUtils from "../../modules/instant_invite/native/InstantInviteUtils.tsx";
import BellIcon from "../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import PencilIcon from "../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import openGroupDMAddMembers from "../../modules/group_dm/native/openGroupDMAddMembers.tsx";
import showChatGDMUpsellActionSheetDefault from "../../modules/group_dm/native/showChatGDMUpsellActionSheet.tsx";
import channel_permissions_ChannelPermissionsUtils from "../../modules/channel_permissions/native/ChannelPermissionsUtils.tsx";
import _modDef14028 from "../../../_runtime/metro/14028__.js";
import ChannelAccessInfoDefault from "../../modules/channel_permissions/native/components/ChannelAccessInfo.tsx";
import _modDef14156 from "../../../_runtime/metro/14156__.js";
import UserSettingsAuthedAppDeleteWarningModalDefault from "../../modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx";
import openConjureProjectInBuilderDefault from "../../modules/conjure/projects/openConjureProjectInBuilder.native.tsx";
import PortalAccessibilityWorkaroundViewDefault from "../../modules/a11y/native/PortalAccessibilityWorkaroundView.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../modules/activities/EmbeddedActivitiesStore.tsx";
import ForumPostMessagesStore from "../../modules/forums/ForumPostMessagesStore.tsx";
import GuildSettingsStore from "../../modules/guild_settings/GuildSettingsStore.tsx";
import AuthorizedAppsStore from "../../modules/oauth2/AuthorizedAppsStore.tsx";
import UserProfileStore from "../../modules/user_profile/UserProfileStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const openGroupDMAddMembersDefault = openGroupDMAddMembers;

require = fn;
function ChatBeginningRowIcon(arg0) {
  ({ isPrivate, isNSFW } = arg0);
  ({ isThread, isForumPost, channelType } = arg0);
  if (isForumPost) {
    const obj2 = { IconComponent: ChatIcon.ChatIcon, label: util.t.Y4REmB };
    let tmp4 = require;
    let tmp5 = obj2;
  } else if (isThread) {
    const obj3 = { IconComponent: ThreadIcon.ThreadIcon, label: util.t["7Xm5QI"] };
    tmp4 = require;
    tmp5 = obj3;
  } else if (channelType === constants4.GUILD_APP) {
    if (isPrivate) {
      let AppsIcon = AppsLockIcon.AppsLockIcon;
      let tmp9 = require;
    } else {
      AppsIcon = AppsIcon2.AppsIcon;
      tmp9 = require;
    }
    const obj = { IconComponent: AppsIcon, label: tmp9(1113).t.ZkcrC2 };
  } else {
    const obj4 = { IconComponent: null, label: null };
    if (isPrivate) {
      obj4.IconComponent = TextLockIcon.TextLockIcon;
      obj4.label = util.t.GK18KJ;
      tmp4 = require;
      tmp5 = obj4;
    } else {
      obj4.IconComponent = TextIcon.TextIcon;
      obj4.label = util.t.GK18KJ;
      tmp4 = require;
      tmp5 = obj4;
    }
  }
  const obj5 = { style: closure_47().iconContainer, children: null };
  const obj6 = { size: "lg", color: "icon-strong", accessibilityLabel: null };
  ({ IconComponent, label } = tmp5);
  const intl = tmp4(1113).intl;
  obj6.accessibilityLabel = intl.string(label);
  obj5.children = closure_1_44(IconComponent, obj6);
  return closure_1_44(React5, obj5);
}
function ChatBeginningRowHeader(arg0) {
  ({ subtitle, isForumPost, isGameInvitesPost, subtitleLink } = arg0);
  ({ title, isPrivate, isThread, isNSFW, channelType } = arg0);
  const tmp = closure_47();
  const tmp4 = null != subtitleLink && subtitleLink(5274).useIsScreenReaderEnabled();
  let tmp5Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    const obj2 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
    const items = [closure_44(ChatBeginningRowIcon, obj2)];
    const items1 = [tmp.title];
    let num = 8;
    if (isForumPost) {
      num = 0;
    }
    const obj3 = { children: null };
    const obj4 = {
      style: null,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj4.style = items1;
    obj4.children = title;
    items[1] = closure_44(subtitleLink(5624).Text, obj4);
    obj3.children = items;
    tmp5Result = closure_46(closure_45, obj3);
  }
  const children = [tmp5Result];
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    let str;
    if (tmp4) {
      str = "link";
    }
    const obj6 = {
      accessibilityRole: str,
      onPress: null,
      style: null,
      variant: "text-md/medium",
      color: "text-default",
      children: null,
    };
    let fn;
    if (tmp4) {
      fn = () => LinkingDefault.openURL(subtitleLink);
    }
    obj6.onPress = fn;
    obj6.style = tmp.subtitle;
    obj6.children = subtitle;
    tmp11Result = closure_44(subtitleLink(5624).Text, obj6);
  }
  children[1] = tmp11Result;
  return closure_46(closure_45, { children });
}
function LinkManageButtons(arg0) {
  ({ canEdit, isPrivate, channel: require } = arg0);
  ({ canManageRoles, theme } = arg0);
  const tmp = closure_47();
  const token = useToken.useToken(nativeDefault.colors.TEXT_LINK, theme);
  const obj2 = { style: tmp.ctaContainer, children: null };
  if (isPrivate) {
    isPrivate = canManageRoles;
  }
  if (isPrivate) {
    const obj3 = {
      accessibilityRole: "button",
      onPress() {
        return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(id);
      },
      style: null,
      children: null,
    };
    const items = [,];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    obj3.style = items;
    const obj4 = { source: _modDef14028, size: native.IconSizes.REFRESH_SMALL_16, color: token };
    const items1 = [closure_44(native.Icon, obj4)];
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items2 = [,];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    obj5.style = items2;
    const intl = util.intl;
    obj5.children = intl.string(util.t.dMJ3Y6);
    items1[1] = closure_44(Text_Text.Text, obj5);
    obj3.children = items1;
    isPrivate = closure_46(Pressables.PressableOpacity, obj3);
  }
  const items3 = [isPrivate];
  if (canEdit) {
    const obj6 = {
      accessibilityRole: "button",
      onPress() {
        ChannelSettingsActionCreatorsDefault.setSection(constants3.OVERVIEW);
        ChannelSettingsActionCreatorsDefault.open(id.id);
      },
      style: null,
      children: null,
    };
    const items4 = [,];
    ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
    obj6.style = items4;
    const obj7 = { size: "xs", color: token };
    const items5 = [closure_44(PencilIcon.PencilIcon, obj7)];
    const obj8 = { style: tmp.ctaLabel, variant: "text-sm/medium", color: "text-link", children: null };
    const intl2 = util.intl;
    obj8.children = intl2.string(util.t.GE1Tlo);
    items5[1] = closure_44(Text_Text.Text, obj8);
    obj6.children = items5;
    canEdit = closure_46(Pressables.PressableOpacity, obj6);
  }
  items3[1] = canEdit;
  obj2.children = items3;
  return closure_46(closure_7, obj2);
}
function ThreadOwner(arg0) {
  ({ userId: require, guildId } = arg0);
  const tmp = closure_47();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(_require));
  const items1 = [GuildMemberStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    let member = null;
    if (null != _require) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  });
  const items2 = [AccessibilityStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => roleStyle.roleStyle);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.nick;
  }
  if (str == null) {
    str = guildId(5068).getName(stateFromStores);
    const obj4 = guildId(5068);
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
  const processColorStringsArray =
    enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
  enhanced_role_colors_EnhancedRoleColorUtils;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if ("username" === stateFromStores2) {
    let tmp16;
    if (null != colorString) {
      const obj5 = { color: colorString };
      tmp16 = obj5;
    }
    let tmp18;
    if (tmp12) {
      tmp18 = processColorStringsArray;
    }
    const obj6 = {
      gradientColors: tmp18,
      style: tmp16,
      variant: "text-md/semibold",
      color: "text-default",
      children: str,
    };
    return closure_44(Text_Text.Text, obj6);
  } else {
    let tmp13 = "dot" === stateFromStores2;
    if (tmp13) {
      tmp13 = null != colorString;
    }
    if (tmp13) {
      const obj7 = { color: colorString, colors: colorStrings, containerStyles: tmp.threadCreatorRoleDot };
      tmp13 = closure_44(native.RoleDot, obj7);
    }
    const obj8 = { children: null };
    const items3 = [tmp13];
    const obj9 = { variant: "text-md/semibold", color: "text-default", children: str };
    items3[1] = closure_44(Text_Text.Text, obj9);
    obj8.children = items3;
    return closure_46(closure_45, obj8);
  }
  const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
}
function ChatBeginningRowThread(channel) {
  channel = channel.channel;
  const tmp = closure_47();
  const tmp3 = useChannelNameDefault(channel);
  const result = channel(9031).isPrivateGuildChannel(channel);
  const obj = channel(9031);
  const appliedTags = channel(7456).useAppliedTags(channel);
  const obj2 = channel(7456);
  const isGameInvitesPost = channel(7453).useIsGameInvitesPost(channel);
  channel(504);
  [][0] = ForumPostMessagesStore;
  let tmp10Result = null;
  if (null != channel.threadMetadata) {
    const obj4 = {
      isNSFW: channel.isNSFW(),
      title: tmp3,
      isPrivate: result,
      isThread: true,
      isForumPost: channel.isForumPost(),
      isGameInvitesPost,
    };
    const items = [closure_44(ChatBeginningRowHeader, obj4), , ,];
    let tmp12Result = null;
    if (channel.isForumPost()) {
      tmp12Result = null;
      if (appliedTags.length > 0) {
        const obj5 = {
          style: tmp.tagContainer,
          children: appliedTags.map((tag) =>
            closure_1_44(channel(dependencyMap[53]).AppliedForumTagPill, { tag }, tag.id),
          ),
        };
        tmp12Result = closure_44(closure_7, obj5);
      }
    }
    items[1] = tmp12Result;
    const isForumPostResult = channel.isForumPost();
    let tmp12Result3 = !isForumPostResult;
    if (!isForumPostResult) {
      const obj6 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
      const intl = tmp4(1113).intl;
      const obj7 = {
        usernameHook(arg0, arg1) {
          return closure_2_44(ThreadOwner, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
        },
      };
      obj6.children = intl.format(tmp4(1113).t.imPXd5, obj7);
      tmp12Result3 = closure_44(tmp4(5624).Text, obj6);
    }
    items[2] = tmp12Result3;
    let tmp12Result4 = null;
    if (channel.isForumPost()) {
      tmp12Result4 = null;
      if (null == tmp8) {
        const obj8 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
        const intl2 = tmp4(1113).intl;
        obj8.children = intl2.string(tmp4(1113).t.mE3KJN);
        tmp12Result4 = closure_44(tmp4(5624).Text, obj8);
      }
    }
    const obj9 = { children: null };
    items[3] = tmp12Result4;
    obj9.children = items;
    tmp10Result = closure_46(closure_45, obj9);
  }
  return tmp10Result;
}
function ChatBeginningRowGuildNonDefaultChannel(channel) {
  channel = channel.channel;
  const tmp3 = useChannelNameDefault(channel, true);
  const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
  const tmp4 = useChannelNameDefault(channel, false);
  const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
  const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
  const result = channel(9031).isPrivateGuildChannel(channel);
  const obj = channel(9031);
  const intl = channel(1113).intl;
  const tmp10 = useThemeDefault();
  const intl2 = channel(1113).intl;
  if (result) {
    const obj2 = {
      channelName: tmp3,
      topicHook() {
        return MarkupUtilsDefault.parseTopic(channel.topic, true, { channelId: channel.id });
      },
    };
    let formatResult = intl2.format(tmp8(1113).t.QuwqjG, obj2);
  } else if (canResult2) {
    const obj3 = { channelName: tmp3 };
    formatResult = intl2.formatToPlainString(tmp8(1113).t.JHKUGB, obj3);
  } else {
    const obj4 = { channelName: tmp4 };
    formatResult = intl2.format(tmp8(1113).t.hPVEQG, obj4);
  }
  const formatToPlainStringResult = intl.formatToPlainString(channel(1113).t.q0tgLe, { channelName: tmp3 });
  const children = [
    closure_44(ChatBeginningRowHeader, {
      title: intl.formatToPlainString(channel(1113).t.q0tgLe, { channelName: tmp3 }),
      subtitle: formatResult,
      isPrivate: result,
      channelType: channel.type,
    }),
    closure_44(LinkManageButtons, {
      canManageRoles: canResult1,
      canEdit: canResult,
      isPrivate: result,
      channel,
      theme: tmp10,
    }),
  ];
  let tmp15Result = null;
  if (result) {
    tmp15Result = null;
    if (canResult) {
      const obj6 = { channel, guild: channel.guild };
      tmp15Result = closure_44(ChannelAccessInfoDefault, obj6);
    }
  }
  children[2] = tmp15Result;
  return closure_46(closure_45, { children });
}
function ChatBeginningRowGuild(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const items = [GuildChannelStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  if (PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel)) {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      const obj2 = { guild, channel };
      let tmp4 = closure_44(ChatBeginningRowGuildDefaultChannel, obj2);
    }
    return tmp4;
  }
  tmp4 = closure_44(ChatBeginningRowGuildNonDefaultChannel, { guild, channel });
  const obj = guild(504);
}
function DMSpamButton(channel) {
  channel = channel.channel;
  const user = channel.user;
  const dMMessageToReport = channel(14151).useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!channel.showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      const obj2 = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl = tmp(1113).intl;
      obj2.text = intl.string(tmp(1113).t.HHZmDn);
      obj2.disabled = null == message;
      obj2.onPress = function handleShowReportModal() {
        if (null != message) {
          const result = ReportModals.showReportModalForFirstDM(tmp, () => {
            message(dependencyMap[72]).closePrivateChannel(id.id, true);
          });
        }
      };
      return closure_44(tmp(5634).Button, obj2);
    }
  }
  return null;
}
function DeauthorizeAppButton(application) {
  application = application.application;
  ({ channel: importDefault, oauth2Token: dependencyMap } = application);
  const tmp = closure_47();
  const items = [EmbeddedActivitiesStore];
  closure_3 = application(504).useStateFromStores(items, () => selfEmbeddedActivities.getSelfEmbeddedActivities());
  let tmp4 = null;
  if (application.user.bot) {
    tmp4 = null;
    if (null != application) {
      let obj2 = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
      const intl = tmp2(1113).intl;
      obj2.text = intl.string(tmp2(1113).t.xUqheM);
      let obj3 = { size: tmp2(1187).Icon.Sizes.SMALL, source: _modDef14156, style: tmp.appDMButtonIcon };
      obj2.icon = closure_44(tmp2(1187).Icon, obj3);
      obj2.onPress = function onPress() {
        useAlertStore.openAlert(
          "confirm-delete-authed-app",
          closure_2_44(UserSettingsAuthedAppDeleteWarningModalDefault, {
            application,
            scopes: scopes.scopes,
            onDelete() {
              require("AuthorizedAppsActionCreators").delete(id2.id);
              value = closure_1_3.get(id.id);
              const obj = require("AuthorizedAppsActionCreators");
              let _location;
              if (value != null) {
                _location = value.location;
              }
              const result = application(scopes[78]).leaveEmbeddedActivity({
                location: _location,
                applicationId: id.id,
              });
              const obj2 = application(scopes[78]);
              const obj3 = { location: _location, applicationId: id.id };
            },
          }),
        );
        let obj2 = {
          application,
          scopes: scopes.scopes,
          onDelete() {
            require("AuthorizedAppsActionCreators").delete(id2.id);
            value = closure_1_3.get(id.id);
            const obj = require("AuthorizedAppsActionCreators");
            let _location;
            if (value != null) {
              _location = value.location;
            }
            const result = application(scopes[78]).leaveEmbeddedActivity({ location: _location, applicationId: id.id });
            const obj2 = application(scopes[78]);
            const obj3 = { location: _location, applicationId: id.id };
          },
        };
        AnalyticsUtilsDefault.track(constants.APP_MANAGE_CTA_CLICKED, {
          application_id: application.id,
          channel_id: closure_1_1.id,
          channel_type: closure_1_1.type,
        });
      };
      tmp4 = closure_44(tmp2(5634).Button, obj2);
    }
  }
  return tmp4;
}
function EditConjuredAppButton(project) {
  project = project.project;
  const obj = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
  const intl = project(1113).intl;
  obj.text = intl.string(_modDef3868.jMMrDM);
  const tmp = closure_47();
  obj.icon = closure_44(project(10232).PencilIcon, { size: "xs", style: closure_47().appDMButtonIcon });
  obj.onPress = function onPress() {
    return openConjureProjectInBuilderDefault(project);
  };
  return closure_44(project(5634).Button, obj);
}
function MuteAppButton(channel) {
  channel = channel.channel;
  const tmp = closure_47();
  const items = [UserGuildSettingsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelMuted(null, channel.id),
  );
  let tmp6Result = null;
  if (channel.user.bot) {
    let str = "destructive";
    if (stateFromStores) {
      str = "secondary";
    }
    let obj2 = { size: "sm", variant: str, text: null, icon: null, onPress: null };
    let intl = tmp2(1113).intl;
    const string = intl.string;
    const t = tmp2(1113).t;
    if (stateFromStores) {
      let stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj2.text = stringResult;
    let obj3 = {
      size: tmp2(1187).Icon.Sizes.SMALL,
      source: stateFromStores(stateFromStores ? 10993 : 8399),
      color: null,
      style: null,
    };
    let WHITE;
    if (!stateFromStores) {
      WHITE = tmp8(575).unsafe_rawColors.WHITE;
    }
    obj3.color = WHITE;
    obj3.style = tmp.appDMButtonIcon;
    obj2.icon = closure_44(tmp2(1187).Icon, obj3);
    obj2.onPress = function onPress() {
      if (stateFromStores) {
        const obj = {
          guildId: null,
          channelId: channel.id,
          settings: { muted: false },
          label: NotificationSettingsUtils.NotificationLabels.Unmuted,
        };
        const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj);
        const tmpResult = NotificationSettingsModalActionCreatorsDefault;
        const obj2 = { text: null, icon: null };
        const intl = util.intl;
        obj2.text = intl.string(util.t["/6kulz"]);
        obj2.icon = BellIcon.BellIcon;
        ToastActionCreatorsDefault.open("NOTIFICATIONS_UNMUTED", obj2);
      } else {
        const obj3 = { channel };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(14161, dependencyMap.paths),
          "MessageNotificationChannelActionSheet",
          obj3,
        );
        const tmpResult2 = ActionSheetActionCreatorsDefault;
      }
    };
    tmp6Result = closure_44(tmp2(5634).Button, obj2);
  }
  return tmp6Result;
}
function ChatBeginningRowDMGuard(arg0) {
  _require = arg0;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    channel = channel.channel;
    return UserStore.getUser(channel.getRecipientId());
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.user = stateFromStores;
    tmp2 = closure_44(ChatBeginningRowDM, obj2);
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
  const analyticsLocations = user(7326)().analyticsLocations;
  let id;
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = closure_30;
  }
  let tmp4Result = user(14153)(id);
  id = tmp4Result;
  const tmp4 = user(14153);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return {
      authorizedAppToken: AuthorizedAppsStore.getNewestTokenForApplication(id),
      authorizedAppsFetchState: AuthorizedAppsStore.getFetchState(),
    };
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  let obj = channel(504);
  let items1 = [UserProfileStore];
  let items2 = [user];
  let stateFromStores = channel(504).useStateFromStores(
    items1,
    () => {
      let mutualGuilds = null;
      if (null != user) {
        mutualGuilds = UserProfileStore.getMutualGuilds(tmp.id);
      }
      return mutualGuilds;
    },
    items2,
  );
  let obj2 = channel(504);
  let id1;
  const isSystemDMResult = channel.isSystemDM();
  if (tmp4Result != null) {
    id1 = tmp4Result.id;
  }
  const tmp2Result = user(14162);
  ({ project, isOwned } = user(14162)(id1, user.bot));
  const tmp2ResultResult = user(14162)(id1, user.bot);
  let items3 = [user, channel];
  const isEmptyMessageRequestChat = channel(14163).useIsEmptyMessageRequestChat(channel.id);
  const effect = authorizedAppsFetchState.useEffect(() => {
    let guild_id;
    ({ id, getAvatarURL } = user);
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    maybeFetchUserProfileDefault(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true });
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
    userTag = tmp2(5068).getUserTag(user, { decoration: "never", identifiable: "always" });
    const tmp2Result3 = tmp2(5068);
    const name = tmp2(5068).getName(user);
    let intl6 = tmp7(1113).intl;
    let stringResult = intl6.string(tmp7(1113).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1113).intl;
      let obj3 = { username: name };
      stringResult = intl.formatToPlainString(tmp7(1113).t.Q56TRC, obj3);
    }
    function handleCopyUserTag() {
      ClipboardUtils.copy(userTag);
      const result = ToastUtils.presentUsernameCopied();
    }
    let obj4 = { channel, user, showingSpamBanner: channel.showingSpamBanner };
    const tmp21 = closure_44(DMSpamButton, obj4);
    let obj5 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile() {
        showUserProfileActionSheetDefault({
          userId: user.id,
          channelId: channel.id,
          sourceAnalyticsLocations: analyticsLocations,
        });
      },
      accessibilityLabel: null,
      children: null,
    };
    let intl2 = tmp7(1113).intl;
    obj5.accessibilityLabel = intl2.string(tmp7(1113).t.iXAna6);
    let obj6 = {
      style: tmp.avatar,
      user,
      guildId: channel.guild_id,
      size: tmp7(1187).AvatarSizes.XXLARGE,
      avatarDecoration: user.avatarDecoration,
    };
    obj5.children = closure_44(tmp7(1187).Avatar, obj6);
    const items5 = [closure_44(tmp7(6980).PressableOpacity, obj5), , , , , , ,];
    let obj7 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: null, children: null };
    let intl3 = tmp7(1113).intl;
    obj7.accessibilityHint = intl3.string(tmp7(1113).t.y5MwJy);
    let obj8 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
    obj7.children = closure_44(tmp7(5624).Text, obj8);
    items5[1] = closure_44(tmp7(6980).PressableOpacity, obj7);
    let tmp19Result = null;
    if (!user.isProvisional) {
      let obj9 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: null, children: null };
      let intl4 = tmp7(1113).intl;
      obj9.accessibilityHint = intl4.string(tmp7(1113).t.y5MwJy);
      const obj10 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      obj9.children = closure_44(tmp7(5624).Text, obj10);
      tmp19Result = closure_44(tmp7(6980).PressableOpacity, obj9);
    }
    items5[2] = tmp19Result;
    let obj11 = {
      style: tmp.dmBeginningMessage,
      variant: "text-md/medium",
      color: "text-default",
      children: stringResult,
    };
    items5[3] = closure_44(tmp7(5624).Text, obj11);
    let tmp19Result4 = null;
    if (user.isProvisional) {
      let obj12 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp19Result4 = closure_44(tmp7(14187).ChatProvisionalAccountExplainerCard, obj12);
    }
    items5[4] = tmp19Result4;
    let tmp22Result;
    if (null != stateFromStores) {
      if (stateFromStores.length >= 1) {
        let num2 = 5;
        if (stateFromStores.length > 5) {
          num2 = 4;
        }
        function handleOpenMutualGuilds() {
          if (null != user) {
            let obj2 = {
              user: tmp,
              onPressMutualGuild(arg0) {
                const result = channel(8762).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
                const obj = channel(8762);
                channel(7522).transitionToGuild(arg0);
                const obj2 = channel(7522);
                user(5258).hideActionSheet();
                const obj3 = user(5258);
                user(6744).popWithKey(closure_1_42);
              },
            };
            ActionSheetActionCreatorsDefault.openLazy(
              asyncRequireImpl(14164, dependencyMap.paths),
              "MutualGuildsActionSheet",
              obj2,
            );
          }
        }
        const substr = stateFromStores.slice(0, num2);
        let obj13 = {
          accessibilityRole: "button",
          onPress: handleOpenMutualGuilds,
          style: tmp.mutualGuildsContainer,
          children: null,
        };
        let obj14 = {
          size: tmp7(6957).GuildIconSizes.SMALL,
          names: substr.map((guild) => guild.guild.name),
          totalCount: stateFromStores.length,
          children: substr.map((guild) => {
            guild = guild.guild;
            const obj = { guild, size: channel(dependencyMap[103]).GuildIconSizes.SMALL };
            return closure_1_44(user(dependencyMap[103]), obj, guild.id);
          }),
        };
        const items6 = [closure_44(tmp7(14179).GuildIconPile, obj14)];
        let obj15 = { style: tmp.mutualGuildsLabel, variant: "text-sm/medium", color: "text-default", children: null };
        let intl5 = tmp7(1113).intl;
        const obj16 = { count: stateFromStores.length };
        obj15.children = intl5.format(tmp7(1113).t.eE3oep, obj16);
        items6[1] = closure_44(tmp7(5624).Text, obj15);
        obj13.children = items6;
        tmp22Result = closure_46(tmp7(6980).PressableOpacity, obj13);
      }
    }
    items5[5] = tmp22Result;
    const obj17 = { style: tmp.dmButtonRow, children: null };
    if (user.isNonUserBot()) {
      obj17.children = null;
      items5[6] = closure_44(closure_7, obj17);
      let tmp19Result5 = null;
      if (isEmptyMessageRequestChat) {
        const obj18 = { style: tmp.dmEmptyChat };
        tmp19Result5 = closure_44(tmp2(14191), obj18);
      }
      const obj19 = { children: null };
      items5[7] = tmp19Result5;
      obj19.children = items5;
      return closure_46(closure_45, obj19);
    } else if (user.bot) {
      let tmp30 = null;
      if (null != tmp4Result) {
        if (null == authorizedAppToken) {
          tmp30 = null;
        }
        const obj20 = { channel, user };
        const items7 = [closure_44(MuteAppButton, obj20)];
        if (null != project) {
          const obj21 = { project };
          let tmp19Result6 = closure_44(EditConjuredAppButton, obj21);
        } else {
          tmp19Result6 = null;
          if (null != authorizedAppToken) {
            tmp19Result6 = null;
            if (false === isOwned) {
              const obj22 = { user, application: tmp4Result, channel, oauth2Token: authorizedAppToken };
              tmp19Result6 = closure_44(DeauthorizeAppButton, obj22);
            }
          }
        }
        const obj23 = { children: null };
        items7[1] = tmp19Result6;
        obj23.children = items7;
        closure_46(closure_45, obj23);
      }
      const obj24 = { children: null };
      const items8 = [tmp30, tmp21];
      obj24.children = items8;
      let tmp22Result4 = closure_46(closure_45, obj24);
    } else {
      const obj25 = { reportButton: tmp21 };
      tmp22Result4 = closure_44(function RelationshipButtons(reportButton) {
        reportButton = reportButton.reportButton;
        function handleBlock() {
          user(paths[88]).openLazy(channel(paths[90])(paths[107], paths.paths), closure_2_43, {
            userId: user.id,
            channelId: id.id,
          });
        }
        const items = [RelationshipStore];
        const stateFromStores = initialize.useStateFromStores(items, () =>
          relationshipType.getRelationshipType(user.id),
        );
        let obj2 = { text: null, size: "sm", variant: "secondary", onPress: null };
        const Button = components_Button_Button.Button;
        const intl = util.intl;
        obj2.text = intl.string(util.t.l4Emac);
        obj2.onPress = handleBlock;
        if (stateFromStores === constants8.PENDING_INCOMING) {
          const obj3 = { style: paths.pendingIncoming, children: null };
          const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
          const intl5 = util.intl;
          const obj5 = { username: UserUtilsDefault.getName(user) };
          obj4.children = intl5.format(util.t.uIomXw, obj5);
          const items1 = [closure_2_44(Text_Text.Text, obj4)];
          const obj6 = { style: paths.pendingIncomingButtons, children: null };
          const obj7 = { text: null, size: "sm", variant: "active", onPress: null };
          const intl6 = util.intl;
          obj7.text = intl6.string(util.t["+WbSn5"]);
          obj7.onPress = function handleAcceptFriend() {
            const result = user(paths[105]).maybeConfirmFriendRequestAccept({
              userId: user.id,
              location: constants.DM_CHANNEL,
            });
          };
          const items2 = [closure_2_44(components_Button_Button.Button, obj7), , ,];
          const obj8 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl7 = util.intl;
          obj8.text = intl7.string(util.t.rQSndv);
          obj8.onPress = function handleIgnoreFriendRequest() {
            user(paths[104]).cancelFriendRequest(user.id, { location: constants.DM_CHANNEL });
          };
          items2[1] = closure_2_44(components_Button_Button.Button, obj8);
          const obj9 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl8 = util.intl;
          obj9.text = intl8.string(util.t.l4Emac);
          obj9.onPress = handleBlock;
          items2[2] = closure_2_44(components_Button_Button.Button, obj9);
          items2[3] = reportButton;
          obj6.children = items2;
          items1[1] = closure_2_46(React5, obj6);
          obj3.children = items1;
          return closure_2_46(React5, obj3);
        } else {
          if (constants8.NONE === stateFromStores) {
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            let tmp4Result = null;
            if (!bot) {
              function handleAddFriend() {
                const obj2 = { userId: user.id, context: { location: constants.DM_CHANNEL } };
                user(paths[104]).addRelationship(obj2);
              }
              const obj11 = { text: null, size: "sm", variant: "active", onPress: null };
              const intl4 = util.intl;
              obj11.text = intl4.string(util.t["PMsq/b"]);
              obj11.onPress = handleAddFriend;
              tmp4Result = closure_2_44(components_Button_Button.Button, obj11);
            }
            let tmp4Result2 = tmp4Result;
          } else if (constants8.FRIEND === stateFromStores) {
            function handleRemoveFriend() {
              const obj2 = { userDisplayName: null, onConfirm: null };
              const obj = channel(paths[106]);
              obj2.userDisplayName = user(paths[47]).getName(closure_1_1);
              obj2.onConfirm = function onConfirm() {
                user(paths[104]).removeFriend(id.id, { location: constants.DM_CHANNEL });
              };
              obj.confirmRemoveFriend(obj2);
            }
            const obj12 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl3 = util.intl;
            obj12.text = intl3.string(util.t.cvSt1J);
            obj12.onPress = handleRemoveFriend;
            tmp4Result2 = closure_2_44(components_Button_Button.Button, obj12);
          } else if (constants8.BLOCKED === stateFromStores) {
            function handleUnblock() {
              user(paths[104]).unblockUser(user.id, { location: constants.DM_CHANNEL });
            }
            const obj13 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl2 = util.intl;
            obj13.text = intl2.string(util.t.XyHpKH);
            obj13.onPress = handleUnblock;
            tmp4Result2 = closure_2_44(components_Button_Button.Button, obj13);
          } else {
            tmp4Result2 = null;
            if (constants8.PENDING_OUTGOING === stateFromStores) {
              const obj14 = { text: null, size: "sm", variant: "active", disabled: true, onPress: "applicationId" };
              const intl9 = util.intl;
              obj14.text = intl9.string(util.t.xMH6vD);
              tmp4Result2 = closure_2_44(components_Button_Button.Button, obj14);
            }
          }
          const items3 = [tmp4Result2, ,];
          let tmp11 = null;
          if (stateFromStores !== constants8.BLOCKED) {
            tmp11 = tmp5;
          }
          const obj15 = { children: null };
          items3[1] = tmp11;
          items3[2] = reportButton;
          obj15.children = items3;
          return closure_2_46(closure_2_45, obj15);
        }
      }, obj25);
    }
    const tmp2Result4 = tmp2(5068);
  }
  const tmp7Result = channel(14163);
}
function ChatBeginningRowButton(style) {
  const obj = {
    style: style.style,
    children: closure_1_44(RowButton.RowButton, {
      onPress,
      icon: closure_1_44(RowButton.RowButton.Icon, { IconComponent, variant: iconVariant }),
      label: title,
      subLabel: subtitle,
      trailing,
    }),
  };
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  return closure_1_44(React5, obj);
}
function ChatBeginningRowGroupDM(channel) {
  channel = channel.channel;
  let first;
  let onClick;
  let callback1;
  const tmp = closure_47();
  const arr = first(5652)(channel);
  const tmp4 = onClick(noop.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp6;
  const items = [RelationshipStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => relationshipCount.getRelationshipCount() > 0);
  const items1 = [channel];
  onClick = noop.useCallback(() => {
    openGroupDMAddMembersDefault(channel.id, constants2.CHANNEL_TEXT_AREA);
  }, items1);
  const items2 = [channel, first, tmp4[1]];
  callback1 = noop.useCallback(
    callback1(function* () {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              if (first) {
                c3 = 3;
              } else {
                dependencyMap(true);
                dependencyMap = 1;
                c3 = 1;
                const obj5 = { value: tmp2(8946).mobileCreateInvite(channel, constants.GROUP_DM), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            if (null != closure_128_0) {
              const obj = tmp5(9118);
              obj.handleCopy(closure_128_0, closure_129_0, constants.GROUP_DM, false);
            }
            closure_129_2(false);
          }
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } catch (tmp27) {
          c3 = tmp;
          throw tmp27;
        }
      }
    }),
    items2,
  );
  const items3 = [channel.id, onClick];
  const items4 = [callback1];
  const callback2 = noop.useCallback(() => {
    const groupDMAddMembersAction = openGroupDMAddMembers.getGroupDMAddMembersAction(
      channel.id,
      constants2.CHANNEL_TEXT_AREA,
    );
    if ("open" === groupDMAddMembersAction) {
      if (tmpResult.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
        onClick();
      } else {
        const obj2 = { onClick };
        showChatGDMUpsellActionSheetDefault(obj2);
      }
      tmpResult = DismissibleContentUnsafeUtils;
    } else {
      const result = openGroupDMAddMembers.showGroupDMAddMembersRoadblock(
        groupDMAddMembersAction,
        constants2.CHANNEL_TEXT_AREA,
      );
      const tmpResult2 = openGroupDMAddMembers;
    }
  }, items3);
  const callback3 = noop.useCallback(() => {
    if (obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
      callback1();
    } else {
      const obj2 = { onClick: callback1 };
      showChatGDMUpsellActionSheetDefault(obj2);
    }
    obj = DismissibleContentUnsafeUtils;
  }, items4);
  let obj = channel(504);
  let obj2 = first(11629);
  const obj3 = { location: GroupDMChatBeginning };
  const groupDMNitroAudience = channel(11626).useGroupDMNitroAudience();
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
  let obj4 = channel(11626);
  if (stateFromStores) {
    enabled = tmp7(11626).isGroupDMNitroUpsellAudience(groupDMNitroAudience);
    const tmp7Result = tmp7(11626);
  }
  if (enabled) {
    enabled = obj2.useConfig(obj3).enabled;
  }
  if (enabled) {
    enabled = sum >= tmp16;
  }
  let obj5 = { audience: groupDMNitroAudience, location: GroupDMChatBeginning, acquisitionStrategy: null };
  tmp16 = first(11627)({ useNitroCapExperiment: true });
  obj5.acquisitionStrategy = channel(11626).GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp2Result = first(11633);
  let obj6 = { style: tmp.centerHeader, children: null };
  const obj7 = { style: tmp.avatarRedesign, channel, size: null, accessible: false };
  const tmp2ResultResult = first(11633)(obj5);
  obj7.size = channel(1187).AvatarSizes.XXLARGE;
  const items5 = [closure_44(first(10799), obj7), , ,];
  const obj8 = { style: tmp.dmTitle, variant: null, color: "mobile-text-heading-primary", children: null };
  let str = "heading-xxl/extrabold";
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  const tmp23 = channel.id === channel(7396).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  obj8.variant = str;
  obj8.children = arr;
  items5[1] = closure_44(channel(5624).Text, obj8);
  const obj9 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp7(1113).intl;
  if (tmp23) {
    const obj10 = { name: arr };
    let formatResult = intl.format(tmp7(1113).t.MFwcqO, obj10);
  } else {
    formatResult = intl.string(tmp7(1113).t["0Q7uk0"]);
  }
  obj9.children = formatResult;
  items5[2] = closure_44(channel(5624).Text, obj9);
  let tmp19Result = null;
  if (!tmp23) {
    if (enabled) {
      const obj11 = {
        style: tmp.gdmInviteFriends,
        onPress: tmp2ResultResult,
        IconComponent: tmp7(9528).NitroWheelIcon,
        iconVariant: "default",
        title: null,
        subtitle: null,
      };
      const intl3 = tmp7(1113).intl;
      obj11.title = intl3.string(tmp7(1113).t["LR+Ptf"]);
      const intl4 = tmp7(1113).intl;
      const obj12 = { number };
      obj11.subtitle = intl4.formatToPlainString(tmp7(1113).t["8o8Zk5"], obj12);
      let tmp21Result = closure_44(ChatBeginningRowButton, obj11);
    } else {
      tmp21Result = null;
      if (stateFromStores) {
        const obj13 = {
          style: tmp.gdmInviteFriends,
          onPress: callback2,
          IconComponent: tmp7(10977).GroupPlusIcon,
          iconVariant: "default",
          title: null,
        };
        const intl2 = tmp7(1113).intl;
        obj13.title = intl2.string(tmp7(1113).t["LR+Ptf"]);
        tmp21Result = closure_44(ChatBeginningRowButton, obj13);
      }
    }
    const items6 = [tmp21Result, ,];
    const items7 = [tmp.gdmShareInviteLink];
    let prop = null;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    const obj14 = { style: null, onPress: null, IconComponent: null, title: null, subtitle: null, trailing: null };
    items7[1] = prop;
    obj14.style = items7;
    obj14.onPress = callback3;
    obj14.IconComponent = tmp7(5727).LinkIcon;
    const intl5 = tmp7(1113).intl;
    obj14.title = intl5.string(tmp7(1113).t["3XVNyt"]);
    const intl6 = tmp7(1113).intl;
    obj14.subtitle = intl6.string(tmp7(1113).t.qa9CQu);
    let tmp21Result3 = null;
    if (first) {
      tmp21Result3 = closure_44(closure_6, {});
    }
    obj14.trailing = tmp21Result3;
    items6[1] = closure_44(ChatBeginningRowButton, obj14);
    let tmp21Result4 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj15 = { channelId: channel.id };
      tmp21Result4 = closure_44(tmp2(14192), obj15);
    }
    const obj16 = { children: null };
    items6[2] = tmp21Result4;
    obj16.children = items6;
    tmp19Result = closure_46(closure_45, obj16);
  }
  items5[3] = tmp19Result;
  obj6.children = items5;
  return closure_46(closure_7, obj6);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FetchState = fn(7276).FetchState;
const THREAD_CHANNEL_TYPES = fn(4867).THREAD_CHANNEL_TYPES;
const isGuildOwner = fn(4881).isGuildOwner;
const Constants = fn(1072);
({
  AnalyticEvents: closure_25,
  AnalyticsPages: closure_26,
  AnalyticsSections: closure_27,
  ChannelSettingsSections: closure_28,
  ChannelTypes: closure_29,
  EMPTY_STRING_SNOWFLAKE_ID: closure_30,
  GuildSettingsSections: closure_31,
  HelpdeskArticles: closure_32,
  InstantInviteSources: items,
  Permissions: closure_34,
  RelationshipTypes: closure_35,
  UPLOAD_MEDIUM_SIZE: closure_36,
  WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_37,
} = Constants);
const ChannelFlags = fn(4870).ChannelFlags;
const number = fn(11628).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const GuildProgressConstants = fn(14027);
({ AnalyticsActions: closure_40, AnalyticsSetupTypes: closure_41 } = GuildProgressConstants);
let closure_42 = fn(14001).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
let closure_43 = fn(11287).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_44, Fragment: closure_45, jsxs: closure_46 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { position: "absolute", width: "100%" },
  contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 },
  title: { marginTop: 16 },
  subtitle: { marginBottom: 16, lineHeight: 20 },
  gdmInviteFriends: { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" },
  gdmShareInviteLink: null,
  gdmShareInviteLinkNoRelationships: null,
  ctaLabel: null,
  ctaContainer: null,
  ctaButton: null,
  ctaAddRoles: null,
  avatar: null,
  avatarRedesign: null,
  centerHeader: null,
  gdmText: null,
  dmTitle: null,
  dmBeginningMessage: null,
  dmEmptyChat: null,
  provisionalAccountExplainer: null,
  mutualGuildsLabel: null,
  mutualGuildsContainer: null,
  iconContainer: null,
  threadDetails: null,
  threadCreatorRoleDot: null,
  tagContainer: null,
  dmButtonRow: null,
  pendingIncoming: null,
  pendingIncomingButtons: null,
  appDMButtonIcon: null,
  formCtaIcon: null,
};
let obj3 = { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" };
obj2.gdmShareInviteLink = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
obj2.gdmShareInviteLinkNoRelationships = { marginTop: 16 };
obj2.ctaLabel = { marginLeft: 8 };
obj2.ctaContainer = { flexDirection: "row", flexWrap: "wrap" };
obj2.ctaButton = { flexDirection: "row", alignItems: "center" };
obj2.ctaAddRoles = { paddingRight: 24 };
obj2.avatar = { marginBottom: 16 };
obj2.avatarRedesign = { marginBottom: 16 };
obj2.centerHeader = { paddingHorizontal: 8, alignItems: "center" };
obj2.gdmText = { textAlign: "center" };
obj2.dmTitle = { marginBottom: 8, textAlign: "center" };
obj2.dmBeginningMessage = { marginTop: 8 };
let obj4 = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
obj2.dmEmptyChat = { marginTop: nativeDefault.space.PX_24 };
obj2.provisionalAccountExplainer = { marginTop: 12 };
obj2.mutualGuildsLabel = { marginTop: 8, marginLeft: 8, height: 26 };
obj2.mutualGuildsContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let size = {
  width: 64,
  height: 64,
  borderRadius: nativeDefault.radii.xxl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  justifyContent: "center",
  alignItems: "center",
};
obj2.iconContainer = size;
obj2.threadDetails = { lineHeight: 20 };
obj2.threadCreatorRoleDot = { paddingRight: 4, paddingTop: 2 };
obj2.tagContainer = { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 4 };
obj2.dmButtonRow = { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 };
obj2.pendingIncoming = { flexDirection: "column", gap: 8 };
obj2.pendingIncomingButtons = { flexDirection: "row", flexWrap: "wrap", gap: 8 };
obj2.appDMButtonIcon = { marginRight: 2 };
obj2.formCtaIcon = { width: 32, height: 32 };
let closure_47 = createStyles.createStyles(obj2);
function ChatBeginningRowGuildDefaultChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const id = guild.id;
  const tmp = closure_47();
  const completedStates = guild(id[57]).useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj = guild(id[57]);
  const permissions = guild(id[57]).usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj2 = guild(id[57]);
  const items = [UserStore];
  const stateFromStores = guild(id[46]).useStateFromStores(items, () => currentUser.getCurrentUser());
  channel(id[58])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  let obj3 = guild(id[46]);
  const tmp9 = isGuildOwner(guild, stateFromStores);
  let obj4 = channel(id[59]);
  const extractTimestampResult = channel(id[59]).extractTimestamp(guild.id);
  const tmp11 = channel(id[59]).extractTimestamp(guild.id) < Date.now() - closure_37;
  let result = guild(id[50]).isPrivateGuildChannel(channel);
  let obj5 = guild(id[50]);
  const isEligibleForGuildProgress = guild(id[60]).useIsEligibleForGuildProgress(guild);
  let obj6 = guild(id[60]);
  const items1 = [GuildSettingsStore];
  const stateFromStoresObject = guild(id[46]).useStateFromStoresObject(items1, () => errors.getErrors());
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp2;
              let base64;
              tmp5(9074).init(id);
              const obj7 = tmp5(9074);
              const obj5 = { size };
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: tmp5(8220).openImagePicker(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            base64 = value.base64;
            if (null != base64) {
              tmp5(9074).updateIcon(closure_129_2, base64);
              const obj = tmp5(9074);
              tmp5(9074).open(closure_129_2, constants.LANDING);
              const obj2 = tmp5(9074);
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp18) {
          c3 = tmp;
          throw tmp18;
        }
      }
    };
    const obj8 = {
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
      analyticsAction: null,
    };
    let obj9 = { uri: tmp7(tmp3[65]) };
    obj8.source = obj9;
    obj8.iconStyle = tmp.formCtaIcon;
    const intl = tmp2(tmp3[30]).intl;
    obj8.title = intl.string(tmp2(tmp3[30]).t["Yhi9/N"]);
    obj8.isCompleted = guildPersonalized;
    obj8.analyticsSetupType = constants10.CHANNEL_WELCOME;
    obj8.analyticsAction = constants9.PERSONALIZE_SERVER;
    const tmp17 = closure_44(tmp7(tmp3[64]), obj8);
    const tmp7Result = tmp7(tmp3[64]);
  }
  if (canInvite) {
    const obj10 = {
      onPress: function inviteFriends() {
        if (null != guild.vanityURLCode) {
          const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(
            tmp,
            channel,
            constants6.WELCOME_MESSAGE,
          );
        } else {
          const obj2 = { source: constants6.WELCOME_MESSAGE };
          const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj2);
        }
      },
      source: null,
      iconStyle: null,
      title: null,
      isCompleted: null,
      analyticsSetupType: null,
      analyticsAction: null,
    };
    const obj11 = { uri: tmp7(tmp3[67]) };
    obj10.source = obj11;
    obj10.iconStyle = tmp.formCtaIcon;
    const intl2 = tmp2(tmp3[30]).intl;
    obj10.title = intl2.string(tmp2(tmp3[30]).t.q9n0Ta);
    obj10.isCompleted = guildPopulated;
    obj10.analyticsSetupType = constants10.CHANNEL_WELCOME;
    obj10.analyticsAction = constants9.INVITE;
    const tmp22 = closure_44(tmp7(tmp3[64]), obj10);
    const tmp7Result3 = tmp7(tmp3[64]);
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
  let obj7 = guild(id[46]);
  const combined =
    "" +
    channel(id[68]).getArticleURL(constants5.GUILD_GETTING_STARTED) +
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  const items3 = [stringResult];
  let tmp31Result = null;
  if (tmp28) {
    const obj12 = { children: null };
    const intl4 = tmp2(tmp3[30]).intl;
    const obj13 = { guideURL: combined };
    const items4 = [" ", intl4.format(tmp2(tmp3[30]).t.UOtD32, obj13)];
    obj12.children = items4;
    tmp31Result = closure_46(closure_45, obj12);
  }
  items3[1] = tmp31Result;
  const obj14 = { title: null, subtitle: null, isPrivate: null, subtitleLink: null };
  const tmp7Result4 = channel(id[68]);
  const intl5 = tmp2(tmp3[30]).intl;
  obj14.title = intl5.formatToPlainString(guild(id[30]).t["j59F/c"], { guildName: guild.name });
  obj14.subtitle = closure_46(closure_45, { children: items3 });
  obj14.isPrivate = result;
  let tmp37;
  if (tmp28) {
    tmp37 = combined;
  }
  obj14.subtitleLink = tmp37;
  const children = [closure_44(ChatBeginningRowHeader, obj14)];
  if (isEligibleForGuildProgress) {
    const obj16 = { guild };
    let tmp31Result3 = closure_44(tmp7(tmp3[69]), obj16);
  } else {
    const obj17 = { children: null };
    const items6 = [tmp22, tmp17];
    obj17.children = items6;
    tmp31Result3 = closure_46(closure_45, obj17);
  }
  children[1] = tmp31Result3;
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
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(504);
  const items1 = [GuildStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  const obj3 = channelId(504);
  [tmp5, c2] = noop.useState(undefined);
  if (shouldRender) {
    shouldRender = null != stateFromStores;
  }
  if (!shouldRender) {
    const callback = noop.useCallback((nativeEvent) => {
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
    const items2 = [tmp.container];
    let num = 0;
    if (null != null) {
      num = tmp5;
    }
    const obj2 = { style: null, children: null };
    const obj5 = { height: num };
    items2[1] = obj5;
    obj2.style = items2;
    let tmp19Result = null != null;
    if (tmp19Result) {
      const obj6 = { style: tmp.contentWrapper, onLayout: callback, children: null };
      tmp19Result = closure_44(closure_7, obj6, channelId);
    }
    obj2.children = tmp19Result;
    return closure_44(PortalAccessibilityWorkaroundViewDefault, obj2);
  } else if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
    const obj7 = { channel: stateFromStores };
    let tmp8 = closure_44(ChatBeginningRowThread, obj7);
  } else if (stateFromStores.isDM()) {
    const obj8 = { channel: stateFromStores, showingSpamBanner: channelId.showingSpamBanner };
    tmp8 = closure_44(ChatBeginningRowDMGuard, obj8);
  } else if (stateFromStores.isGroupDM()) {
    const obj9 = { channel: stateFromStores };
    tmp8 = closure_44(ChatBeginningRowGroupDM, obj9);
  } else if (null != stateFromStores1) {
    const obj10 = { guild: stateFromStores1, channel: stateFromStores };
    tmp8 = closure_44(ChatBeginningRowGuild, obj10);
  }
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
}
