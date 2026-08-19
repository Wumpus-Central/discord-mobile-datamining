// discord_app/components_native/chat/ChatBeginningRow.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Button2 from "../../design/void/native.tsx";
import _modDef4090 from "../../lib/native/Linking.tsx";
import map from "../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import computeChannelNameDefault from "../../modules/channel/useChannelName.tsx";
import PressableBase from "../../design/void/Pressables/native/Pressables.tsx";
import get_defaultRulesDefault from "../../modules/markup/MarkupUtils.tsx";
import ChatIcon from "../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadIcon from "../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import TextLockIcon from "../../design/components/Icon/native/redesign/generated/TextLockIcon.tsx";
import TextIcon from "../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import RowButtonWrapper from "../../design/components/TableRow/native/RowButton.native.tsx";
import initDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import processColorStrings from "../../modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import PencilIcon from "../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import openAddMembersActionSheet from "../../modules/channel_permissions/native/ChannelPermissionsUtils.tsx";
import registerAssetDefault from "../../../_runtime/11638_registerAsset.js";
import ChannelAccessInfoDefault from "../../modules/channel_permissions/native/components/ChannelAccessInfo.tsx";
import registerAssetDefault2 from "../../../_runtime/11765_registerAsset.js";
import UserSettingsAuthedAppDeleteWarningModalDefault from "../../modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx";
import PortalAccessibilityWorkaroundViewDefault from "../../modules/a11y/native/PortalAccessibilityWorkaroundView.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../modules/a11y/AccessibilityStore.tsx";
import participantFromServer from "../../modules/activities/EmbeddedActivitiesStore.tsx";
import handleLoadThreadsSuccess from "../../modules/forums/ForumPostMessagesStore.tsx";
import handleFormInit from "../../modules/guild_settings/GuildSettingsStore.tsx";
import recomputeFromAppTokens from "../../modules/oauth2/AuthorizedAppsStore.tsx";
import { FetchState } from "../../modules/oauth2/AuthorizedAppsStore.tsx";
import createUserWidgetFromServer from "../../modules/user_profile/UserProfileStore.tsx";
import { THREAD_CHANNEL_TYPES } from "../../records/ChannelRecord.tsx";
import { isGuildOwner } from "../../records/GuildRecord.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import updateUserGuildSettingsInternal from "../../stores/UserGuildSettingsStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { ChannelFlags } from "../../modules/channel/ChannelConstants.tsx";
import Steps from "../../modules/guild_progress/GuildProgressConstants.tsx";
import { MOBILE_MESSAGE_REQUESTS_MODAL_KEY as closure_40 } from "../../modules/message_request/MessageRequestConstants.tsx";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_41 } from "../../modules/relationships/native/RestrictionConfirmationConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = fn;
function ChatBeginningRowIcon(arg0) {
  ({ isPrivate, isThread, isForumPost } = arg0);
  let obj = { IconComponent: null, label: null };
  if (isForumPost) {
    obj[0] = ChatIcon.ChatIcon;
    obj[1] = getSystemLocale.t.Y4REmB;
    let tmp5 = require;
    let tmp6 = obj;
  } else if (isThread) {
    obj[0] = ThreadIcon.ThreadIcon;
    obj[1] = getSystemLocale.t["7Xm5QI"];
    tmp5 = require;
    tmp6 = obj;
  } else if (isPrivate) {
    obj[0] = TextLockIcon.TextLockIcon;
    obj[1] = getSystemLocale.t.GK18KJ;
    tmp5 = require;
    tmp6 = obj;
  } else {
    obj[0] = TextIcon.TextIcon;
    obj[1] = getSystemLocale.t.GK18KJ;
    tmp5 = require;
    tmp6 = obj;
  }
  { style: callback3().iconContainer, children: null };
  obj = { size: "lg", color: "icon-strong", accessibilityLabel: null };
  ({ IconComponent, label } = tmp6);
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(label);
  obj[1] = callback2(IconComponent, obj);
  return callback2(closure_7, obj);
}
function ChatBeginningRowHeader(arg0) {
  ({ subtitle, isForumPost, subtitleLink } = arg0);
  ({ title, isPrivate, isThread, isNSFW } = arg0);
  const tmp = callback3();
  let obj = subtitleLink(4721);
  const tmp4 = null != subtitleLink && obj.useIsScreenReaderEnabled();
  const children = [callback2(ChatBeginningRowIcon, { isNSFW, isPrivate, isThread, isForumPost }), , ];
  const items1 = [tmp.title, ];
  let num = 8;
  if (isForumPost) {
    num = 0;
  }
  items1[1] = { marginBottom: num };
  children[1] = callback2(subtitleLink(4734).Text, { style: items1, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title });
  let tmp7Result = null != subtitle;
  if (tmp7Result) {
    let str;
    if (tmp4) {
      str = "link";
    }
    obj = { accessibilityRole: null, onPress: null, style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj[0] = str;
    let fn;
    if (tmp4) {
      fn = () => _modDef4090.openURL(subtitleLink);
    }
    obj[1] = fn;
    obj[2] = tmp.subtitle;
    obj[5] = subtitle;
    tmp7Result = callback2(subtitleLink(4734).Text, obj);
  }
  children[2] = tmp7Result;
  return callback2(closure_43, { children });
}
function LinkManageButtons(arg0) {
  ({ canEdit, isPrivate, channel: require } = arg0);
  ({ canManageRoles, theme } = arg0);
  const tmp = callback3();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.TEXT_LINK, theme);
  obj = { style: tmp.ctaContainer, children: null };
  if (isPrivate) {
    isPrivate = canManageRoles;
  }
  if (isPrivate) {
    obj = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj[1] = function onPress() {
      return openAddMembersActionSheet.openAddMembersActionSheet(closure_0);
    };
    const items = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    obj[2] = items;
    obj1 = { source: null, size: null, color: null };
    obj1[0] = registerAssetDefault;
    obj1[1] = Button2.IconSizes.REFRESH_SMALL_16;
    obj1[2] = token;
    const items1 = [callback2(Button2.Icon, obj1), ];
    const obj2 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    obj2[0] = items2;
    const intl = getSystemLocale.intl;
    obj2[3] = intl.string(getSystemLocale.t.dMJ3Y6);
    items1[1] = callback2(Text.Text, obj2);
    obj[3] = items1;
    isPrivate = callback2(PressableBase.PressableOpacity, obj);
  }
  const items3 = [isPrivate, ];
  if (canEdit) {
    const obj3 = { accessibilityRole: "button", onPress: null, style: null, children: null };
    obj3[1] = function onPress() {
      initDefault.setSection(closure_1_28.OVERVIEW);
      initDefault.open(id.id);
    };
    const items4 = [, ];
    ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
    obj3[2] = items4;
    const obj4 = { size: "xs", color: null };
    obj4[1] = token;
    const items5 = [callback2(PencilIcon.PencilIcon, obj4), ];
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items6 = [tmp.ctaLabel];
    obj5[0] = items6;
    const intl2 = getSystemLocale.intl;
    obj5[3] = intl2.string(getSystemLocale.t.GE1Tlo);
    items5[1] = callback2(Text.Text, obj5);
    obj3[3] = items5;
    canEdit = callback2(PressableBase.PressableOpacity, obj3);
  }
  items3[1] = canEdit;
  obj[1] = items3;
  return callback2(closure_7, obj);
}
function ThreadOwner(arg0) {
  ({ userId: require, guildId } = arg0);
  let obj = initialize;
  const items = [closure_24];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_24.getUser(closure_0));
  obj1 = initialize;
  const items1 = [closure_19];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_0) {
      member = closure_1_19.getMember(guildId, tmp);
    }
    return member;
  });
  let obj2 = initialize;
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => roleStyle.roleStyle);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.nick;
  }
  if (str == null) {
    let obj3 = guildId(4219);
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
  let tmp2Result = processColorStrings;
  const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
  tmp2Result = processColorStrings;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if ("username" === stateFromStores2) {
    let tmp16;
    if (null != colorString) {
      obj = { color: null };
      obj[0] = colorString;
      tmp16 = obj;
    }
    let tmp18;
    if (tmp12) {
      tmp18 = processColorStringsArray;
    }
    obj = { gradientColors: null, style: null, variant: "text-md/semibold", color: "text-default", children: null };
    obj[0] = tmp18;
    obj[1] = tmp16;
    obj[4] = str;
    return callback2(Text.Text, obj);
  } else {
    let tmp13 = "dot" === stateFromStores2;
    if (tmp13) {
      tmp13 = null != colorString;
    }
    if (tmp13) {
      obj1 = { color: null, colors: null, containerStyles: null };
      obj1[0] = colorString;
      obj1[1] = colorStrings;
      obj1[2] = tmp.threadCreatorRoleDot;
      tmp13 = callback2(Button2.RoleDot, obj1);
    }
    obj2 = { children: null };
    const items3 = [tmp13, ];
    obj3 = { variant: "text-md/semibold", color: "text-default", children: null };
    obj3[2] = str;
    items3[1] = callback2(Text.Text, obj3);
    obj2[0] = items3;
    return callback2(closure_43, obj2);
  }
  tmp = callback3();
}
function ChatBeginningRowThread(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = channel(8850);
  const result = obj.isPrivateGuildChannel(channel);
  obj1 = channel(7237);
  const appliedTags = obj1.useAppliedTags(channel);
  channel(589);
  [][0] = closure_10;
  let tmp9Result = null;
  if (null != channel.threadMetadata) {
    obj = { isNSFW: null, title: null, isPrivate: null, isThread: true, isForumPost: null };
    obj[0] = channel.isNSFW();
    obj[1] = tmp3;
    obj[2] = result;
    obj[4] = channel.isForumPost();
    const items = [callback2(ChatBeginningRowHeader, obj), , , ];
    let tmp11Result = null;
    if (channel.isForumPost()) {
      tmp11Result = null;
      if (appliedTags.length > 0) {
        obj = { style: null, children: null };
        obj[0] = tmp.tagContainer;
        obj[1] = appliedTags.map((item, index) => callback(channel(table[49]).AppliedForumTagPill, { tag: item }, item.id));
        tmp11Result = callback2(closure_7, obj);
      }
    }
    items[1] = tmp11Result;
    const isForumPostResult = channel.isForumPost();
    tmp11Result = !isForumPostResult;
    if (!isForumPostResult) {
      obj1 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
      obj1[0] = tmp.threadDetails;
      const intl = tmp4(1236).intl;
      const obj2 = { usernameHook: null };
      obj2[0] = function usernameHook(arg0, arg1) {
        return closure_1_42(ThreadOwner, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
      };
      obj1[3] = intl.format(tmp4(1236).t.imPXd5, obj2);
      tmp11Result = callback2(tmp4(4734).Text, obj1);
    }
    items[2] = tmp11Result;
    let tmp11Result1 = null;
    if (channel.isForumPost()) {
      tmp11Result1 = null;
      if (null == tmp7) {
        const obj3 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
        obj3[0] = tmp.threadDetails;
        const intl2 = tmp4(1236).intl;
        obj3[3] = intl2.string(tmp4(1236).t.mE3KJN);
        tmp11Result1 = callback2(tmp4(4734).Text, obj3);
      }
    }
    const obj4 = { children: null };
    items[3] = tmp11Result1;
    obj4[0] = items;
    tmp9Result = callback2(closure_43, obj4);
  }
  return tmp9Result;
}
function ChatBeginningRowGuildNonDefaultChannel(channel) {
  channel = channel.channel;
  const tmp3 = computeChannelNameDefault(channel, true);
  const canResult = closure_21.can(constants2.MANAGE_CHANNELS, channel);
  const tmp4 = computeChannelNameDefault(channel, false);
  const canResult1 = closure_21.can(constants2.MANAGE_ROLES, channel);
  let obj = channel(8850);
  const result = obj.isPrivateGuildChannel(channel);
  const canResult2 = closure_21.can(constants2.READ_MESSAGE_HISTORY, channel);
  const intl = channel(1236).intl;
  const tmp10 = useThemeDefault();
  const intl2 = channel(1236).intl;
  if (result) {
    obj = { channelName: null, topicHook: null };
    obj[0] = tmp3;
    obj[1] = function topicHook() {
      const obj = { channelId: channel.id };
      return obj.parseTopic(channel.topic, true, obj);
    };
    let formatResult = intl2.format(tmp8(1236).t.QuwqjG, obj);
  } else if (canResult2) {
    obj = { channelName: null };
    obj[0] = tmp3;
    formatResult = intl2.formatToPlainString(tmp8(1236).t.JHKUGB, obj);
  } else {
    obj1 = { channelName: null };
    obj1[0] = tmp4;
    formatResult = intl2.format(tmp8(1236).t.hPVEQG, obj1);
  }
  const children = [callback2(ChatBeginningRowHeader, { title: intl.formatToPlainString(channel(1236).t.q0tgLe, { channelName: tmp3 }), subtitle: formatResult, isPrivate: result }), callback2(LinkManageButtons, { canManageRoles: canResult1, canEdit: canResult, isPrivate: result, channel, theme: tmp10 }), ];
  let tmp15Result = null;
  if (result) {
    tmp15Result = null;
    if (canResult) {
      const obj2 = { channel: null, guild: null };
      obj2[0] = channel;
      obj2[1] = channel.guild;
      tmp15Result = callback2(ChannelAccessInfoDefault, obj2);
    }
  }
  children[2] = tmp15Result;
  return callback2(closure_43, { children });
}
function ChatBeginningRowGuild(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  let obj = guild(589);
  const items = [closure_18];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_18.getDefaultChannel(guild.id));
  if (closure_21.can(constants2.READ_MESSAGE_HISTORY, channel)) {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      obj = { guild: null, channel: null };
      obj[0] = guild;
      obj[1] = channel;
      let tmp4 = callback2(ChatBeginningRowGuildDefaultChannel, obj);
    }
    return tmp4;
  }
  tmp4 = callback2(ChatBeginningRowGuildNonDefaultChannel, { guild, channel });
}
function DMSpamButton(channel) {
  channel = channel.channel;
  const user = channel.user;
  let obj = channel(11761);
  const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!channel.showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      obj = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl = tmp(1236).intl;
      obj[2] = intl.string(tmp(1236).t.HHZmDn);
      obj[3] = null == message;
      obj[4] = function handleShowReportModal() {
        if (null != message) {
          const result = channel(dependencyMap[67]).showReportModalForFirstDM(tmp, () => {
            message(closure_1_2[68]).closePrivateChannel(id.id, true);
          });
          const obj = channel(dependencyMap[67]);
        }
      };
      return callback2(tmp(4745).Button, obj);
    }
  }
  return null;
}
function ManageAppButton(application) {
  application = application.application;
  ({ channel: importDefault, oauth2Token: dependencyMap } = application);
  let obj = application(589);
  const items = [closure_9];
  closure_3 = obj.useStateFromStores(items, () => selfEmbeddedActivities.getSelfEmbeddedActivities());
  let tmp4 = null;
  if (application.user.bot) {
    tmp4 = null;
    if (null != application) {
      obj = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
      const intl = tmp2(1236).intl;
      obj[2] = intl.string(tmp2(1236).t["5S3sQF"]);
      obj = { size: null, source: null, style: null };
      obj[0] = tmp2(1297).Icon.Sizes.SMALL;
      obj[1] = registerAssetDefault2;
      obj[2] = tmp.appDMButtonIcon;
      obj[3] = callback2(tmp2(1297).Icon, obj);
      obj[4] = function onPress() {
        application(dependencyMap[71]);
        let obj = {
          application,
          scopes: scopes.scopes,
          onDelete() {
            let obj = closure_1_1(closure_1_2[73]);
            obj.delete(id2.id);
            const value = closure_3.get(id.id);
            let _location;
            if (value != null) {
              _location = value.location;
            }
            obj = { location: _location, applicationId: id.id };
            closure_1_1(closure_1_2[74]).leaveActivity(obj);
            const obj2 = closure_1_1(closure_1_2[74]);
          }
        };
        obj.openAlert("confirm-delete-authed-app", closure_1_42(UserSettingsAuthedAppDeleteWarningModalDefault, obj));
        obj = { application_id: application.id, channel_id: closure_1.id, channel_type: closure_1.type };
        expandEventPropertiesDefault.track(closure_1_25.APP_MANAGE_CTA_CLICKED, obj);
      };
      tmp4 = callback2(tmp2(4745).Button, obj);
    }
  }
  return tmp4;
}
function MuteAppButton(channel) {
  channel = channel.channel;
  let stateFromStores;
  const tmp = callback3();
  closure_1 = tmp;
  let obj = channel(stateFromStores[43]);
  const items = [closure_23];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_23.isChannelMuted(null, channel.id));
  let tmp6Result = null;
  if (channel.user.bot) {
    let str = "destructive";
    if (stateFromStores) {
      str = "secondary";
    }
    obj = { size: "sm", variant: null, text: null, icon: null, onPress: null };
    obj[1] = str;
    let intl = tmp2(tmp3[29]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[29]).t;
    if (stateFromStores) {
      let stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj[2] = stringResult;
    obj = { size: null, source: null, color: null, style: null };
    obj[0] = tmp2(tmp3[39]).Icon.Sizes.SMALL;
    obj[1] = closure_1(stateFromStores ? tmp3[76] : tmp3[77]);
    let WHITE;
    if (!stateFromStores) {
      WHITE = tmp8(tmp3[27]).unsafe_rawColors.WHITE;
    }
    obj[2] = WHITE;
    obj[3] = tmp.appDMButtonIcon;
    obj[3] = callback(tmp2(tmp3[39]).Icon, obj);
    obj[4] = function onPress() {
      if (stateFromStores) {
        let tmpResult = callback(stateFromStores[78]);
        const result = tmpResult.updateChannelOverrideSettings(null, channel.id, { muted: false }, channel(stateFromStores[79]).NotificationLabels.Unmuted);
        let obj = { key: "NOTIFICATIONS_UNMUTED", content: null, icon: null };
        const intl = channel(stateFromStores[29]).intl;
        obj[1] = intl.string(channel(stateFromStores[29]).t["/6kulz"]);
        obj[2] = function icon() {
          const obj = { source: closure_1_1(stateFromStores[77]), color: closure_1_1(stateFromStores[27]).unsafe_rawColors.WHITE, style: closure_1.unmutedNotification };
          obj[1] = closure_1_42(channel(stateFromStores[39]).Icon, obj);
          return closure_1_42(closure_1_7, obj);
        };
        callback(stateFromStores[80]).open(obj);
        const obj4 = callback(stateFromStores[80]);
      } else {
        tmpResult = callback(stateFromStores[81]);
        obj = { channel: null };
        obj[0] = channel;
        tmpResult.openLazy(channel(stateFromStores[83])(stateFromStores[82], stateFromStores.paths), "MessageNotificationChannelActionSheet", obj);
      }
    };
    tmp6Result = callback(tmp2(tmp3[69]).Button, obj);
  }
  return tmp6Result;
}
function ChatBeginningRowDMGuard(arg0) {
  const _require = arg0;
  let obj = initialize;
  const items = [closure_24];
  const stateFromStores = obj.useStateFromStores(items, () => {
    channel = channel.channel;
    return closure_1_24.getUser(channel.getRecipientId());
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.user = stateFromStores;
    tmp2 = callback2(ChatBeginningRowDM, obj);
  }
  return tmp2;
}
function ChatBeginningRowDM(channel) {
  channel = channel.channel;
  const user = channel.user;
  closure_4 = undefined;
  authorizedAppsFetchState = undefined;
  let userTag;
  let tmp = callback3();
  dependencyMap = tmp;
  const analyticsLocations = user(7139)().analyticsLocations;
  let id;
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = closure_29;
  }
  let tmp4Result = user(11769)(id);
  closure_4 = tmp4Result;
  let obj = channel(589);
  let items = [closure_12];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = closure_1_12;
    let id;
    if (id != null) {
      id = id.id;
    }
    obj = { authorizedAppToken: closure_1_12.getNewestTokenForApplication(id), authorizedAppsFetchState: obj.getFetchState() };
    return obj;
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  obj1 = channel(589);
  let items1 = [closure_14];
  let items2 = [user];
  let stateFromStores = obj1.useStateFromStores(items1, () => {
    let mutualGuilds = null;
    if (null != user) {
      mutualGuilds = closure_1_14.getMutualGuilds(tmp.id);
    }
    return mutualGuilds;
  }, items2);
  let items3 = [user, channel];
  const tmp4 = user(11769);
  const effect = authorizedAppsFetchState.useEffect(() => {
    let guild_id;
    ({ id, getAvatarURL } = user);
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    user(closure_2[86])(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true, dispatchWait: true });
    const tmp = user(closure_2[86]);
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
      const response = user(closure_2[73]).fetch();
      const obj = user(closure_2[73]);
    }
  }, items4);
  if (null == user) {
    return null;
  } else {
    let tmp2Result = tmp2(4219);
    userTag = tmp2Result.getUserTag(user, { decoration: "never", identifiable: "always" });
    tmp2Result = tmp2(4219);
    const name = tmp2Result.getName(user);
    let intl6 = tmp7(1236).intl;
    let stringResult = intl6.string(tmp7(1236).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1236).intl;
      obj = { username: null };
      obj[0] = name;
      stringResult = intl.formatToPlainString(tmp7(1236).t.Q56TRC, obj);
    }
    function handleCopyUserTag() {
      channel(closure_2[88]).copy(userTag);
      const obj = channel(closure_2[88]);
      const result = channel(closure_2[57]).presentUsernameCopied();
    }
    obj = { channel: null, user: null, showingSpamBanner: null };
    obj[0] = channel;
    obj[1] = user;
    obj[2] = channel.showingSpamBanner;
    const tmp17 = callback2(DMSpamButton, obj);
    obj1 = { accessibilityRole: "button", onPress: null, accessibilityLabel: null, children: null };
    obj1[1] = function handleOpenProfile() {
      user(closure_2[87])({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
    };
    let intl2 = tmp7(1236).intl;
    obj1[2] = intl2.string(tmp7(1236).t.iXAna6);
    let obj2 = { style: null, user: null, guildId: null, size: null, avatarDecoration: null };
    obj2[0] = tmp.avatar;
    obj2[1] = user;
    obj2[2] = channel.guild_id;
    obj2[3] = tmp7(1297).AvatarSizes.XXLARGE;
    obj2[4] = user.avatarDecoration;
    obj1[3] = callback2(tmp7(1297).Avatar, obj2);
    const items5 = [callback2(tmp7(5433).PressableOpacity, obj1), , , , , , ];
    let obj3 = { accessibilityRole: "button", onPress: null, accessibilityHint: null, children: null };
    obj3[1] = handleCopyUserTag;
    let intl3 = tmp7(1236).intl;
    obj3[2] = intl3.string(tmp7(1236).t.y5MwJy);
    let obj4 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj4[2] = name;
    obj3[3] = callback2(tmp7(4734).Text, obj4);
    items5[1] = callback2(tmp7(5433).PressableOpacity, obj3);
    let tmp15Result = null;
    if (!user.isProvisional) {
      let obj5 = { accessibilityRole: "button", onPress: null, accessibilityHint: null, children: null };
      obj5[1] = handleCopyUserTag;
      let intl4 = tmp7(1236).intl;
      obj5[2] = intl4.string(tmp7(1236).t.y5MwJy);
      let obj6 = { variant: "heading-lg/medium", color: "text-default", children: null };
      obj6[2] = userTag;
      obj5[3] = callback2(tmp7(4734).Text, obj6);
      tmp15Result = callback2(tmp7(5433).PressableOpacity, obj5);
    }
    items5[2] = tmp15Result;
    let obj7 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj7[0] = tmp.dmBeginningMessage;
    obj7[3] = stringResult;
    items5[3] = callback2(tmp7(4734).Text, obj7);
    tmp15Result = null;
    if (user.isProvisional) {
      let obj8 = { style: null, userId: null, iconSize: 14 };
      obj8[0] = tmp.provisionalAccountExplainer;
      obj8[1] = user.id;
      tmp15Result = callback2(tmp7(11798).ChatProvisionalAccountExplainerCard, obj8);
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
            user(closure_2[81]);
            let obj = { user: null, onPressMutualGuild: null };
            obj[0] = tmp;
            obj[1] = function onPressMutualGuild(arg0) {
              const result = callback(8935).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
              const obj = callback(8935);
              callback(7302).transitionToGuild(arg0);
              const obj2 = callback(7302);
              callback2(4342).hideActionSheet();
              const obj3 = callback2(4342);
              callback2(5260).popWithKey(closure_40);
            };
            obj.openLazy(channel(closure_2[83])(closure_2[89], closure_2.paths), "MutualGuildsActionSheet", obj);
          }
        }
        const substr = stateFromStores.slice(0, num2);
        let obj9 = { accessibilityRole: "button", onPress: null, style: null, children: null };
        obj9[1] = handleOpenMutualGuilds;
        obj9[2] = tmp.mutualGuildsContainer;
        let obj10 = { size: null, names: null, totalCount: null, children: null };
        obj10[0] = tmp7(7188).GuildIconSizes.SMALL;
        obj10[1] = substr.map((item, index) => item.guild.name);
        obj10[2] = stateFromStores.length;
        obj10[3] = substr.map((item, index) => {
          const guild = item.guild;
          const obj = { guild, size: channel(closure_2[94]).GuildIconSizes.SMALL };
          return callback(user(closure_2[94]), obj, guild.id);
        });
        const items6 = [callback2(tmp7(11787).GuildIconPile, obj10), ];
        let obj11 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
        obj11[0] = tmp.mutualGuildsLabel;
        let intl5 = tmp7(1236).intl;
        const obj12 = { count: null };
        obj12[0] = stateFromStores.length;
        obj11[3] = intl5.format(tmp7(1236).t.eE3oep, obj12);
        items6[1] = callback2(tmp7(4734).Text, obj11);
        obj9[3] = items6;
        tmp18Result = callback2(tmp7(5433).PressableOpacity, obj9);
      }
    }
    items5[5] = tmp18Result;
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.dmButtonRow;
    if (user.isNonUserBot()) {
      const obj14 = { children: null };
      obj13[1] = null;
      items5[6] = callback2(closure_7, obj13);
      obj14[0] = items5;
      return callback2(closure_43, obj14);
    } else if (user.bot) {
      tmp18Result = null;
      if (null != authorizedAppToken) {
        tmp18Result = null;
        if (null != tmp4Result) {
          const obj15 = { children: null };
          const obj16 = { channel: null, user: null };
          obj16[0] = channel;
          obj16[1] = user;
          const items7 = [callback2(MuteAppButton, obj16), ];
          const obj17 = { user: null, application: null, channel: null, oauth2Token: null };
          obj17[0] = user;
          obj17[1] = tmp4Result;
          obj17[2] = channel;
          obj17[3] = authorizedAppToken;
          items7[1] = callback2(ManageAppButton, obj17);
          obj15[0] = items7;
          tmp18Result = callback2(closure_43, obj15);
        }
      }
      const obj18 = { children: null };
      const items8 = [tmp18Result, tmp17];
      obj18[0] = items8;
      let tmp18Result1 = callback2(closure_43, obj18);
    } else {
      const obj19 = { reportButton: null };
      obj19[0] = tmp17;
      tmp18Result1 = callback2(function RelationshipButtons(reportButton) {
        reportButton = reportButton.reportButton;
        function handleBlock() {
          closure_1_1(closure_1_2[81]);
          const obj = { userId: user.id, channelId: id.id };
          obj.openLazy(channel(closure_1_2[83])(closure_1_2[98], closure_1_2.paths), closure_1_41, obj);
        }
        let obj = channel(closure_2[43]);
        const items = [closure_1_22];
        const stateFromStores = obj.useStateFromStores(items, () => closure_1_22.getRelationshipType(user.id));
        obj = { text: null, size: "sm", variant: "secondary", onPress: null };
        const Button = channel(closure_2[69]).Button;
        const intl = channel(closure_2[29]).intl;
        obj[0] = intl.string(channel(closure_2[29]).t.l4Emac);
        obj[3] = handleBlock;
        if (stateFromStores === closure_1_34.PENDING_INCOMING) {
          obj = { style: null, children: null };
          obj[0] = closure_2.pendingIncoming;
          obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
          const intl5 = channel(closure_2[29]).intl;
          const obj2 = { username: null };
          let obj9 = user(closure_2[44]);
          obj2[0] = obj9.getName(user);
          obj1[2] = intl5.format(channel(closure_2[29]).t.uIomXw, obj2);
          const items1 = [closure_1_42(channel(closure_2[34]).Text, obj1), ];
          const obj3 = { style: null, children: null };
          obj3[0] = closure_2.pendingIncomingButtons;
          const obj4 = { text: null, size: "sm", variant: "active", onPress: null };
          const intl6 = channel(closure_2[29]).intl;
          obj4[0] = intl6.string(channel(closure_2[29]).t["+WbSn5"]);
          obj4[3] = function handleAcceptFriend() {
            closure_1_1(closure_1_2[96]);
            const obj = { userId: user.id, location: closure_1_26.DM_CHANNEL };
            const result = obj.maybeConfirmFriendRequestAccept(obj);
          };
          const items2 = [closure_1_42(channel(closure_2[69]).Button, obj4), , , ];
          const obj5 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl7 = channel(closure_2[29]).intl;
          obj5[0] = intl7.string(channel(closure_2[29]).t.rQSndv);
          obj5[3] = function handleIgnoreFriendRequest() {
            closure_1_1(closure_1_2[95]);
            const obj = { location: closure_1_26.DM_CHANNEL };
            obj.cancelFriendRequest(user.id, obj);
          };
          items2[1] = closure_1_42(channel(closure_2[69]).Button, obj5);
          const obj6 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl8 = channel(closure_2[29]).intl;
          obj6[0] = intl8.string(channel(closure_2[29]).t.l4Emac);
          obj6[3] = handleBlock;
          items2[2] = closure_1_42(channel(closure_2[69]).Button, obj6);
          items2[3] = reportButton;
          obj3[1] = items2;
          items1[1] = closure_1_44(closure_1_7, obj3);
          obj[1] = items1;
          return closure_1_44(closure_1_7, obj);
        } else {
          if (closure_1_34.NONE === stateFromStores) {
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            let tmp4Result = null;
            if (!bot) {
              function handleAddFriend() {
                let obj = closure_1_1(closure_1_2[95]);
                obj = { location: closure_1_26.DM_CHANNEL };
                obj.addRelationship(obj);
              }
              const obj7 = { text: null, size: "sm", variant: "active", onPress: null };
              const intl4 = channel(closure_2[29]).intl;
              obj7[0] = intl4.string(channel(closure_2[29]).t["PMsq/b"]);
              obj7[3] = handleAddFriend;
              tmp4Result = closure_1_42(channel(closure_2[69]).Button, obj7);
            }
          } else if (closure_1_34.FRIEND === stateFromStores) {
            function handleRemoveFriend() {
              channel(closure_1_2[97]);
              let obj = {
                userDisplayName: user(closure_1_2[44]).getName(closure_1),
                onConfirm() {
                  closure_1_1(closure_1_2[95]);
                  const obj = { location: closure_1_26.DM_CHANNEL };
                  obj.removeFriend(id.id, obj);
                }
              };
              obj.confirmRemoveFriend(obj);
            }
            const obj8 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl3 = channel(closure_2[29]).intl;
            obj8[0] = intl3.string(channel(closure_2[29]).t.cvSt1J);
            obj8[3] = handleRemoveFriend;
            tmp4Result = closure_1_42(channel(closure_2[69]).Button, obj8);
          } else if (closure_1_34.BLOCKED === stateFromStores) {
            function handleUnblock() {
              closure_1_1(closure_1_2[95]);
              const obj = { location: closure_1_26.DM_CHANNEL };
              obj.unblockUser(user.id, obj);
            }
            obj9 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl2 = channel(closure_2[29]).intl;
            obj9[0] = intl2.string(channel(closure_2[29]).t.XyHpKH);
            obj9[3] = handleUnblock;
            tmp4Result = closure_1_42(channel(closure_2[69]).Button, obj9);
          } else {
            tmp4Result = null;
            if (closure_1_34.PENDING_OUTGOING === stateFromStores) {
              const obj10 = { text: null, size: "sm", variant: "active", disabled: true, onPress: "accessible" };
              const intl9 = channel(closure_2[29]).intl;
              obj10[0] = intl9.string(channel(closure_2[29]).t.xMH6vD);
              tmp4Result = closure_1_42(channel(closure_2[69]).Button, obj10);
            }
          }
          const items3 = [tmp4Result, , ];
          let tmp11 = null;
          if (stateFromStores !== closure_1_34.BLOCKED) {
            tmp11 = tmp5;
          }
          const obj11 = { children: null };
          items3[1] = tmp11;
          items3[2] = reportButton;
          obj11[0] = items3;
          return closure_1_44(closure_1_43, obj11);
        }
      }, obj19);
    }
  }
  isSystemDMResult = channel.isSystemDM();
}
function ChatBeginningRowButton(style) {
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  const obj = { onPress, icon: callback2(RowButtonWrapper.RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing };
  obj[1] = callback2(RowButtonWrapper.RowButton, obj);
  return callback2(closure_7, obj);
}
function ChatBeginningRowGroupDM(channel) {
  channel = channel.channel;
  let first;
  let callback;
  let callback1;
  const tmp = callback3();
  const arr = first(4984)(channel);
  const tmp4 = callback(React.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp6;
  let obj = channel(589);
  const items = [closure_22];
  const stateFromStores = obj.useStateFromStores(items, () => relationshipCount.getRelationshipCount() > 0);
  const items1 = [channel];
  callback = React.useCallback(() => {
    channel(4229).navigateToNewGroupDM(channel.id, closure_1_27.CHANNEL_TEXT_AREA);
  }, items1);
  const items2 = [channel, first, tmp4[1]];
  callback1 = React.useCallback(callback1(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp2;
            closure_0 = tmp5;
            closure_0 = undefined;
            if (first) {
              c3 = 3;
            } else {
              dependencyMap(true);
              let obj2 = first(8042);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.mobileCreateInvite(channel, closure_1_32.GROUP_DM);
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          if (null != closure_0) {
            obj = channel(8918);
            obj.handleCopy(closure_0, closure_0, closure_1_32.GROUP_DM, false);
          }
          dependencyMap(false);
        }
        c3 = 3;
        obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  }), items2);
  const items3 = [callback];
  const items4 = [callback1];
  const callback2 = React.useCallback(() => {
    let obj = channel(4196);
    if (obj.UNSAFE_isDismissibleContentDismissed(channel(1377).DismissibleContent.GDM_INVITE_REMINDER)) {
      callback();
    } else {
      obj = { onClick: null };
      obj[0] = callback;
      first(10790)(obj);
    }
  }, items3);
  callback3 = React.useCallback(() => {
    let obj = channel(4196);
    if (obj.UNSAFE_isDismissibleContentDismissed(channel(1377).DismissibleContent.GDM_INVITE_REMINDER)) {
      callback1();
    } else {
      obj = { onClick: null };
      obj[0] = callback1;
      first(10790)(obj);
    }
  }, items4);
  obj = { style: tmp.avatarRedesign, channel, size: channel(1297).AvatarSizes.XXLARGE, accessible: false };
  const items5 = [callback2(first(9916), obj), , , ];
  obj1 = { style: tmp.dmTitle, variant: null, color: "mobile-text-heading-primary", children: null };
  let str = "heading-xxl/extrabold";
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  const tmp17 = channel.id === channel(5389).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  obj1[1] = str;
  obj1[3] = arr;
  items5[1] = callback2(channel(4734).Text, obj1);
  let obj2 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp7(1236).intl;
  if (tmp17) {
    const obj3 = { name: null };
    obj3[0] = arr;
    let formatResult = intl.format(tmp7(1236).t.MFwcqO, obj3);
  } else {
    formatResult = intl.string(tmp7(1236).t["0Q7uk0"]);
  }
  obj2[3] = formatResult;
  items5[2] = callback2(channel(4734).Text, obj2);
  let tmp13Result = null;
  if (!tmp17) {
    let tmp15Result = null;
    if (stateFromStores) {
      const obj4 = { style: null, onPress: null, IconComponent: null, iconVariant: "default", title: null };
      obj4[0] = tmp.gdmInviteFriends;
      obj4[1] = callback2;
      obj4[2] = tmp7(9991).GroupPlusIcon;
      const intl2 = tmp7(1236).intl;
      obj4[4] = intl2.string(tmp7(1236).t["LR+Ptf"]);
      tmp15Result = tmp15(ChatBeginningRowButton, obj4);
    }
    const items6 = [tmp15Result, , ];
    const items7 = [tmp.gdmShareInviteLink, ];
    let prop = null;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    const obj5 = { style: null, onPress: null, IconComponent: null, title: null, subtitle: null, trailing: null };
    items7[1] = prop;
    obj5[0] = items7;
    obj5[1] = callback3;
    obj5[2] = tmp7(4318).LinkIcon;
    const intl3 = tmp7(1236).intl;
    obj5[3] = intl3.string(tmp7(1236).t["3XVNyt"]);
    const intl4 = tmp7(1236).intl;
    obj5[4] = intl4.string(tmp7(1236).t.qa9CQu);
    tmp15Result = null;
    if (first) {
      tmp15Result = tmp15(closure_6, {});
    }
    obj5[5] = tmp15Result;
    items6[1] = tmp15(ChatBeginningRowButton, obj5);
    let tmp15Result1 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj6 = { channelId: null };
      obj6[0] = channel.id;
      tmp15Result1 = tmp15(first(11802), obj6);
    }
    const obj7 = { children: null };
    items6[2] = tmp15Result1;
    obj7[0] = items6;
    tmp13Result = callback2(closure_43, obj7);
  }
  items5[3] = tmp13Result;
  obj[1] = items5;
  return callback2(closure_7, obj);
}
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_25, AnalyticsPages: closure_26, AnalyticsSections: closure_27, ChannelSettingsSections: closure_28, EMPTY_STRING_SNOWFLAKE_ID: closure_29, GuildSettingsSections: closure_30, HelpdeskArticles: closure_31, InstantInviteSources: closure_32, Permissions: closure_33, RelationshipTypes: closure_34, UPLOAD_MEDIUM_SIZE: closure_35, WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_36 } = ME);
({ AnalyticsActions: closure_38, AnalyticsSetupTypes: closure_39 } = Steps);
({ jsx: closure_42, Fragment: closure_43, jsxs: closure_44 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.lg, marginTop: 16, width: "100%" };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { borderRadius: ThemesDefault.radii.lg, marginTop: 8, width: "100%" };
createCacheKey[6] = { marginTop: 16 };
createCacheKey[7] = { marginLeft: 8 };
createCacheKey[8] = { flexDirection: "row", flexWrap: "wrap" };
createCacheKey[9] = { flexDirection: "row", alignItems: "center" };
createCacheKey[10] = { paddingRight: 24 };
createCacheKey[11] = { marginBottom: 16 };
createCacheKey[12] = { marginBottom: 16 };
createCacheKey[13] = { paddingHorizontal: 8, alignItems: "center" };
createCacheKey[14] = { textAlign: "center" };
createCacheKey[15] = { marginBottom: 8, textAlign: "center" };
createCacheKey[16] = { marginTop: 8 };
createCacheKey[17] = { marginTop: 12 };
createCacheKey[18] = { marginTop: 8, marginLeft: 8, height: 26 };
createCacheKey[19] = { flexDirection: "row", alignItems: "center", marginTop: 6 };
createCacheKey[20] = { width: 64, height: 64, borderRadius: ThemesDefault.radii.xxl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center" };
createCacheKey[21] = { lineHeight: 20 };
createCacheKey[22] = { paddingRight: 4, paddingTop: 2 };
createCacheKey[23] = { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap" };
createCacheKey[24] = { borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.STATUS_POSITIVE, height: 24, width: 24, padding: 4, alignContent: "center" };
createCacheKey[25] = { width: 16, height: 16 };
createCacheKey[26] = { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 };
createCacheKey[27] = { flexDirection: "column", gap: 8 };
createCacheKey[28] = { flexDirection: "row", flexWrap: "wrap", gap: 8 };
createCacheKey[29] = { marginRight: 2 };
createCacheKey[30] = { width: 32, height: 32 };
let closure_45 = createCacheKey.createStyles(createCacheKey);
function ChatBeginningRowGuildDefaultChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const id = guild.id;
  let tmp = callback3();
  let obj = guild(id[53]);
  const completedStates = obj.useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  obj1 = guild(id[53]);
  const permissions = obj1.usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj2 = guild(id[43]);
  const items = [closure_24];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  channel(id[54])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  let obj3 = channel(id[55]);
  const tmp9 = isGuildOwner(guild, stateFromStores);
  const extractTimestampResult = obj3.extractTimestamp(guild.id);
  let obj4 = guild(id[47]);
  let result = obj4.isPrivateGuildChannel(channel);
  let obj5 = guild(id[56]);
  const isEligibleForGuildProgress = obj5.useIsEligibleForGuildProgress(guild);
  let obj6 = guild(id[43]);
  const items1 = [closure_11];
  const stateFromStoresObject = obj6.useStateFromStoresObject(items1, () => errors.getErrors());
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      guild(id[57]).presentError(tmp.message);
      const obj = guild(id[57]);
    }
  }, items2);
  if (canManageGuild) {
    function _addServerIcon() {
      const self = this;
      const tmp = _addServerIcon(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw base64;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = base64;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw base64;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = base64;
                return obj;
              } else {
                closure_1 = tmp5;
                base64 = tmp2;
                base64 = undefined;
                closure_1_1(8874).init(dependencyMap);
                const obj7 = closure_1_1(8874);
                obj1 = { size: null };
                obj1[0] = closure_1_35;
                dependencyMap = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_1(4838).openImagePicker(obj1);
                return obj2;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw base64;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = base64;
              return obj3;
            } else {
              base64 = base64.base64;
              if (null != base64) {
                obj = closure_1_1(8874);
                obj.updateIcon(dependencyMap, base64);
                obj1 = closure_1_1(8874);
                obj1.open(dependencyMap, closure_1_30.LANDING);
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp18) {
            c3 = tmp;
            throw tmp18;
          }
        }
      });
      closure_4 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    obj = { onPress: null, source: null, iconStyle: null, title: null, isCompleted: null, analyticsSetupType: null, analyticsAction: null };
    obj[0] = function addServerIcon() {
      const self = this;
      const apply = _addServerIcon.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj = { uri: null };
    let tmp7Result = tmp7(tmp3[60]);
    obj[0] = tmp7(tmp3[61]);
    obj[1] = obj;
    obj[2] = tmp.formCtaIcon;
    const intl = tmp2(tmp3[29]).intl;
    obj[3] = intl.string(tmp2(tmp3[29]).t["Yhi9/N"]);
    obj[4] = guildPersonalized;
    obj[5] = constants4.CHANNEL_WELCOME;
    obj[6] = constants3.PERSONALIZE_SERVER;
    const tmp17 = callback2(tmp7Result, obj);
  }
  if (canInvite) {
    obj1 = { onPress: null, source: null, iconStyle: null, title: null, isCompleted: null, analyticsSetupType: null, analyticsAction: null };
    obj1[0] = function inviteFriends() {
      if (null != guild.vanityURLCode) {
        const result = guild(id[62]).showVanityUrlInviteActionSheet(tmp, channel, closure_1_32.WELCOME_MESSAGE);
        const obj3 = guild(id[62]);
      } else {
        guild(id[62]);
        const obj = { source: null };
        obj[0] = closure_1_32.WELCOME_MESSAGE;
        const result1 = obj.showInstantInviteActionSheet(channel, obj);
      }
    };
    obj2 = { uri: null };
    tmp7Result = tmp7(tmp3[60]);
    obj2[0] = tmp7(tmp3[63]);
    obj1[1] = obj2;
    obj1[2] = tmp.formCtaIcon;
    const intl2 = tmp2(tmp3[29]).intl;
    obj1[3] = intl2.string(tmp2(tmp3[29]).t.q9n0Ta);
    obj1[4] = guildPopulated;
    obj1[5] = constants4.CHANNEL_WELCOME;
    obj1[6] = constants3.INVITE;
    const tmp22 = callback2(tmp7Result, obj1);
  }
  const intl3 = tmp2(tmp3[29]).intl;
  const string = intl3.string;
  const t = tmp2(tmp3[29]).t;
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
  }
  tmp11 = obj3.extractTimestamp(guild.id) < Date.now() - closure_36;
  const combined = "" + channel(id[64]).getArticleURL(constants.GUILD_GETTING_STARTED) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  const items3 = [stringResult, ];
  let tmp31Result = null;
  if (tmp28) {
    obj3 = { children: null };
    const intl4 = tmp2(tmp3[29]).intl;
    obj4 = { guideURL: null };
    obj4[0] = combined;
    const items4 = [" ", intl4.format(tmp2(tmp3[29]).t.UOtD32, obj4)];
    obj3[0] = items4;
    tmp31Result = callback2(closure_43, obj3);
  }
  items3[1] = tmp31Result;
  obj5 = { title: null, subtitle: null, isPrivate: null, subtitleLink: null };
  tmp31Result = callback2(closure_43, { children: items3 });
  const intl5 = tmp2(tmp3[29]).intl;
  obj6 = { guildName: guild.name };
  obj5[0] = intl5.formatToPlainString(guild(id[29]).t["j59F/c"], obj6);
  obj5[1] = tmp31Result;
  obj5[2] = result;
  let tmp37;
  if (tmp28) {
    tmp37 = combined;
  }
  obj5[3] = tmp37;
  const children = [callback2(ChatBeginningRowHeader, obj5), ];
  if (isEligibleForGuildProgress) {
    let obj7 = { guild: null };
    obj7[0] = guild;
    let tmp31Result1 = callback2(tmp7(tmp3[65]), obj7);
  } else {
    const obj8 = { children: null };
    const items6 = [tmp22, tmp17];
    obj8[0] = items6;
    tmp31Result1 = callback2(closure_43, obj8);
  }
  children[1] = tmp31Result1;
  return callback2(React.Fragment, { children });
}
let result = require("obj132").fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default function ChatBeginningRow(channelId) {
  channelId = channelId.channelId;
  ({ guildId: importDefault, shouldRender } = channelId);
  dependencyMap = undefined;
  let tmp = callback3();
  let obj = channelId(589);
  const items = [closure_17];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_17.getChannel(channelId));
  let obj2 = channelId(589);
  const items1 = [closure_20];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_20.getGuild(closure_1));
  let obj3 = React;
  [tmp5, c2] = callback(React.useState(undefined), 2);
  if (shouldRender) {
    shouldRender = null != stateFromStores;
  }
  if (!shouldRender) {
    callback = obj3.useCallback((nativeEvent) => {
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
    obj = { height: null };
    obj[0] = num;
    items2[1] = obj;
    obj[0] = items2;
    let tmp19Result = null != null;
    if (tmp19Result) {
      obj1 = { style: null, onLayout: null, children: null };
      obj1[0] = tmp.contentWrapper;
      obj1[1] = callback;
      obj1[2] = null;
      tmp19Result = callback2(closure_7, obj1, channelId);
    }
    obj[1] = tmp19Result;
    return callback2(PortalAccessibilityWorkaroundViewDefault, obj);
  } else if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
    obj2 = { channel: null };
    obj2[0] = stateFromStores;
    let tmp8 = callback2(ChatBeginningRowThread, obj2);
  } else if (stateFromStores.isDM()) {
    obj3 = { channel: null, showingSpamBanner: null };
    obj3[0] = stateFromStores;
    obj3[1] = channelId.showingSpamBanner;
    tmp8 = callback2(ChatBeginningRowDMGuard, obj3);
  } else if (stateFromStores.isGroupDM()) {
    const obj4 = { channel: null };
    obj4[0] = stateFromStores;
    tmp8 = callback2(ChatBeginningRowGroupDM, obj4);
  } else if (null != stateFromStores1) {
    const obj5 = { guild: null, channel: null };
    obj5[0] = stateFromStores1;
    obj5[1] = stateFromStores;
    tmp8 = callback2(ChatBeginningRowGuild, obj5);
  }
  const tmp4 = callback(React.useState(undefined), 2);
};