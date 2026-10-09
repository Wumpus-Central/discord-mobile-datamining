// === Module 12157: ChatBeginningRow ===

// Module 12157 (ChatBeginningRow)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import _modDef3827 from "module_3827" /* 3827 */;
import LinkingDefault from "Linking" /* 4765 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import useToken from "useToken" /* 4779 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import useThemeDefault from "useTheme" /* 4992 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5078 */;
import Text_Text from "Text/Text" /* 5087 */;
import useAlertStore from "useAlertStore" /* 5300 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import useChannelNameDefault from "useChannelName" /* 5418 */;
import Pressables from "Pressables" /* 6191 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6805 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6856 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import ReportModals from "ReportModals" /* 7704 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import ChatIcon from "ChatIcon" /* 8182 */;
import ThreadIcon from "ThreadIcon" /* 8184 */;
import TextLockIcon from "TextLockIcon" /* 8189 */;
import TextIcon from "TextIcon" /* 8191 */;
import AppsLockIcon from "AppsLockIcon" /* 8216 */;
import AppsIcon2 from "AppsIcon" /* 8217 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
import RowButton from "RowButton" /* 8565 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8667 */;
import BellIcon from "BellIcon" /* 8756 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 9667 */;
import PencilIcon from "PencilIcon" /* 9694 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10297 */;
import openGroupDMAddMembers from "openGroupDMAddMembers" /* 10713 */;
import showChatGDMUpsellActionSheetDefault from "showChatGDMUpsellActionSheet" /* 10725 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 10731 */;
import _modDef12159 from "module_12159" /* 12159 */;
import ChannelAccessInfoDefault from "ChannelAccessInfo" /* 12160 */;
import _modDef12291 from "module_12291" /* 12291 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12292 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 12295 */;
import PortalAccessibilityWorkaroundViewDefault from "PortalAccessibilityWorkaroundView" /* 12332 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6972 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8622 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6793 */;
import UserProfileStore from "UserProfileStore" /* 7314 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildChannelStore from "GuildChannelStore" /* 4707 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import UserStore from "UserStore" /* 1390 */;

const openGroupDMAddMembersDefault = openGroupDMAddMembers;

require = fn;
function MuteAppButton(channel) {
  channel = channel.channel;
  const tmp = closure_47();
  const items = [UserGuildSettingsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(null, channel.id));
  let tmp6Result = null;
  if (channel.user.bot) {
    let str = "destructive";
    if (stateFromStores) {
      str = "secondary";
    }
    let obj2 = { size: "sm", variant: str, text: null, icon: null, onPress: null };
    let intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (stateFromStores) {
      let stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj2.text = stringResult;
    let obj3 = { size: tmp2(1200).Icon.Sizes.SMALL, source: stateFromStores(stateFromStores ? 10313 : 7875), color: null, style: null };
    let WHITE;
    if (!stateFromStores) {
      WHITE = tmp8(587).unsafe_rawColors.WHITE;
    }
    obj3.color = WHITE;
    obj3.style = tmp.appDMButtonIcon;
    obj2.icon = closure_44(tmp2(1200).Icon, obj3);
    obj2.onPress = function onPress() {
      if (stateFromStores) {
        const obj = { guildId: null, channelId: channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
        const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj);
        const tmpResult = NotificationSettingsModalActionCreatorsDefault;
        const obj2 = { text: null, icon: null };
        const intl = util.intl;
        obj2.text = intl.string(util.t["/6kulz"]);
        obj2.icon = BellIcon.BellIcon;
        ToastActionCreatorsDefault.openMana("NOTIFICATIONS_UNMUTED", obj2);
      } else {
        const obj3 = { channel };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12298, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj3);
        const tmpResult2 = ActionSheetActionCreatorsDefault;
      }
    };
    tmp6Result = closure_44(tmp2(5376).Button, obj2);
  }
  return tmp6Result;
}
function ChatBeginningRowDM(channel) {
  channel = channel.channel;
  const user = channel.user;
  authorizedAppsFetchState = undefined;
  let userTag;
  let tmp = closure_47();
  dependencyMap = tmp;
  const analyticsLocations = user(6848)().analyticsLocations;
  let id;
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = closure_30;
  }
  let tmp4Result = user(12287)(id);
  id = tmp4Result;
  const tmp4 = user(12287);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return { authorizedAppToken: AuthorizedAppsStore.getNewestTokenForApplication(id), authorizedAppsFetchState: AuthorizedAppsStore.getFetchState() };
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  let obj = channel(504);
  let items1 = [UserProfileStore];
  let items2 = [user];
  let stateFromStores = channel(504).useStateFromStores(items1, () => {
    let mutualGuilds = null;
    if (null != user) {
      mutualGuilds = UserProfileStore.getMutualGuilds(tmp.id);
    }
    return mutualGuilds;
  }, items2);
  let obj2 = channel(504);
  let id1;
  const isSystemDMResult = channel.isSystemDM();
  if (tmp4Result != null) {
    id1 = tmp4Result.id;
  }
  const tmp2ResultResult = user(12299)(id1, user.bot);
  const project = tmp2ResultResult.project;
  let items3 = [user, channel];
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
    userTag = tmp2(4923).getUserTag(user, { decoration: "never", identifiable: "always" });
    const tmp2Result3 = tmp2(4923);
    const name = tmp2(4923).getName(user);
    let intl6 = tmp7(1126).intl;
    let stringResult = intl6.string(tmp7(1126).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1126).intl;
      let obj3 = { username: name };
      stringResult = intl.formatToPlainString(tmp7(1126).t.Q56TRC, obj3);
    }
    function handleCopyUserTag() {
      ClipboardUtils.copy(userTag);
      const result = ToastUtils.presentUsernameCopied();
    }
    let obj4 = { channel, user, showingSpamBanner: channel.showingSpamBanner };
    const tmp20 = closure_44(closure_56, obj4);
    let obj5 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile() {
          showUserProfileActionSheetDefault({ userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
        },
      accessibilityLabel: null,
      children: null
    };
    let intl2 = tmp7(1126).intl;
    obj5.accessibilityLabel = intl2.string(tmp7(1126).t.iXAna6);
    let obj6 = { style: tmp.avatar, user, guildId: channel.guild_id, size: tmp7(1200).AvatarSizes.XXLARGE, avatarDecoration: user.avatarDecoration };
    obj5.children = closure_44(tmp7(1200).Avatar, obj6);
    const items5 = [closure_44(tmp7(6191).PressableOpacity, obj5), , , , , , ];
    let obj7 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: null, children: null };
    let intl3 = tmp7(1126).intl;
    obj7.accessibilityHint = intl3.string(tmp7(1126).t.y5MwJy);
    let obj8 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
    obj7.children = closure_44(tmp7(5087).Text, obj8);
    items5[1] = closure_44(tmp7(6191).PressableOpacity, obj7);
    let tmp18Result = null;
    if (!user.isProvisional) {
      let obj9 = { accessibilityRole: "button", onPress: handleCopyUserTag, accessibilityHint: null, children: null };
      let intl4 = tmp7(1126).intl;
      obj9.accessibilityHint = intl4.string(tmp7(1126).t.y5MwJy);
      const obj10 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      obj9.children = closure_44(tmp7(5087).Text, obj10);
      tmp18Result = closure_44(tmp7(6191).PressableOpacity, obj9);
    }
    items5[2] = tmp18Result;
    let obj11 = { style: tmp.dmBeginningMessage, variant: "text-md/medium", color: "text-default", children: stringResult };
    items5[3] = closure_44(tmp7(5087).Text, obj11);
    let tmp18Result3 = null;
    if (user.isProvisional) {
      let obj12 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp18Result3 = closure_44(tmp7(12324).ChatProvisionalAccountExplainerCard, obj12);
    }
    items5[4] = tmp18Result3;
    let tmp21Result;
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
                  const result = channel(8299).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
                  const obj = channel(8299);
                  channel(7046).transitionToGuild(arg0);
                  const obj2 = channel(7046);
                  user(5055).hideActionSheet();
                  const obj3 = user(5055);
                  user(5941).popWithKey(closure_1_42);
                }
            };
            ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12300, dependencyMap.paths), "MutualGuildsActionSheet", obj2);
          }
        }
        const substr = stateFromStores.slice(0, num2);
        let obj13 = { accessibilityRole: "button", onPress: handleOpenMutualGuilds, style: tmp.mutualGuildsContainer, children: null };
        let obj14 = {
          size: tmp7(6165).GuildIconSizes.SMALL,
          names: substr.map((guild) => guild.guild.name),
          totalCount: stateFromStores.length,
          children: substr.map((guild) => {
                  guild = guild.guild;
                  const obj = { guild, size: channel(dependencyMap[104]).GuildIconSizes.SMALL };
                  return closure_1_44(user(dependencyMap[104]), obj, guild.id);
                })
        };
        const items6 = [closure_44(tmp7(12315).GuildIconPile, obj14), ];
        let obj15 = { style: tmp.mutualGuildsLabel, variant: "text-sm/medium", color: "text-default", children: null };
        let intl5 = tmp7(1126).intl;
        const obj16 = { count: stateFromStores.length };
        obj15.children = intl5.format(tmp7(1126).t.eE3oep, obj16);
        items6[1] = closure_44(tmp7(5087).Text, obj15);
        obj13.children = items6;
        tmp21Result = closure_46(tmp7(6191).PressableOpacity, obj13);
      }
    }
    items5[5] = tmp21Result;
    const obj17 = { style: tmp.dmButtonRow, children: null };
    if (user.isNonUserBot()) {
      const obj18 = { children: null };
      obj17.children = null;
      items5[6] = closure_44(closure_7, obj17);
      obj18.children = items5;
      return closure_46(closure_45, obj18);
    } else if (user.bot) {
      let tmp29 = null;
      if (null != tmp4Result) {
        if (null == authorizedAppToken) {
          tmp29 = null;
        }
        const obj19 = { channel, user };
        const items7 = [closure_44(MuteAppButton, obj19), ];
        if (null != project) {
          const obj20 = { project };
          let tmp18Result4 = closure_44(closure_58, obj20);
        } else {
          tmp18Result4 = null;
          if (null != authorizedAppToken) {
            tmp18Result4 = null;
            if (false === tmp2ResultResult.isOwned) {
              const obj21 = { user, application: tmp4Result, channel, oauth2Token: authorizedAppToken };
              tmp18Result4 = closure_44(closure_57, obj21);
            }
          }
        }
        const obj22 = { children: null };
        items7[1] = tmp18Result4;
        obj22.children = items7;
        closure_46(closure_45, obj22);
      }
      const obj23 = { children: null };
      const items8 = [tmp29, tmp20];
      obj23.children = items8;
      let tmp21Result4 = closure_46(closure_45, obj23);
    } else {
      const obj24 = { reportButton: tmp20 };
      tmp21Result4 = closure_44(function RelationshipButtons(reportButton) {
        reportButton = reportButton.reportButton;
        function handleBlock() {
          user(paths[90]).openLazy(channel(paths[92])(paths[108], paths.paths), closure_2_43, { userId: user.id, channelId: id.id });
        }
        const items = [RelationshipStore];
        const stateFromStores = initialize.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
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
          const items1 = [closure_2_44(Text_Text.Text, obj4), ];
          const obj6 = { style: paths.pendingIncomingButtons, children: null };
          const obj7 = { text: null, size: "sm", variant: "active", onPress: null };
          const intl6 = util.intl;
          obj7.text = intl6.string(util.t["+WbSn5"]);
          obj7.onPress = function handleAcceptFriend() {
            const result = user(paths[106]).maybeConfirmFriendRequestAccept({ userId: user.id, location: constants.DM_CHANNEL });
          };
          const items2 = [closure_2_44(components_Button_Button.Button, obj7), , , ];
          const obj8 = { text: null, size: "sm", variant: "secondary", onPress: null };
          const intl7 = util.intl;
          obj8.text = intl7.string(util.t.rQSndv);
          obj8.onPress = function handleIgnoreFriendRequest() {
            user(paths[105]).cancelFriendRequest(user.id, { location: constants.DM_CHANNEL });
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
                user(paths[105]).addRelationship(obj2);
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
              const obj = channel(paths[107]);
              obj2.userDisplayName = user(paths[49]).getName(closure_1_1);
              obj2.onConfirm = function onConfirm() {
                user(paths[105]).removeFriend(id.id, { location: constants.DM_CHANNEL });
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
              user(paths[105]).unblockUser(user.id, { location: constants.DM_CHANNEL });
            }
            const obj13 = { text: null, size: "sm", variant: "secondary", onPress: null };
            const intl2 = util.intl;
            obj13.text = intl2.string(util.t.XyHpKH);
            obj13.onPress = handleUnblock;
            tmp4Result2 = closure_2_44(components_Button_Button.Button, obj13);
          } else {
            tmp4Result2 = null;
            if (constants8.PENDING_OUTGOING === stateFromStores) {
              const obj14 = { text: null, size: "sm", variant: "active", disabled: true, onPress: "Boolean" };
              const intl9 = util.intl;
              obj14.text = intl9.string(util.t.xMH6vD);
              tmp4Result2 = closure_2_44(components_Button_Button.Button, obj14);
            }
          }
          const items3 = [tmp4Result2, , ];
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
      }, obj24);
    }
    const tmp2Result4 = tmp2(4923);
  }
  const tmp2Result = user(12299);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FetchState = fn(6793).FetchState;
const THREAD_CHANNEL_TYPES = fn(2068).THREAD_CHANNEL_TYPES;
const isGuildOwner = fn(2082).isGuildOwner;
const Constants = fn(1085);
({ AnalyticEvents: closure_25, AnalyticsPages: closure_26, AnalyticsSections: closure_27, ChannelSettingsSections: closure_28, ChannelTypes: closure_29, EMPTY_STRING_SNOWFLAKE_ID: closure_30, GuildSettingsSections: items, HelpdeskArticles: closure_32, InstantInviteSources: closure_33, Permissions: closure_34, RelationshipTypes: closure_35, UPLOAD_MEDIUM_SIZE: closure_36, WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_37 } = Constants);
const ChannelFlags = fn(2071).ChannelFlags;
const number = fn(10716).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const GuildProgressConstants = fn(12158);
({ AnalyticsActions: closure_40, AnalyticsSetupTypes: closure_41 } = GuildProgressConstants);
let closure_42 = fn(12117).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
let closure_43 = fn(10381).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_44, Fragment: closure_45, jsxs: closure_46 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { position: "absolute", width: "100%" }, contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 }, title: { marginTop: 16 }, subtitle: { marginBottom: 16, lineHeight: 20 }, gdmInviteFriends: { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" }, gdmShareInviteLink: null, gdmShareInviteLinkNoRelationships: null, ctaLabel: null, ctaContainer: null, ctaButton: null, ctaAddRoles: null, avatar: null, avatarRedesign: null, centerHeader: null, gdmText: null, dmTitle: null, dmBeginningMessage: null, provisionalAccountExplainer: null, mutualGuildsLabel: null, mutualGuildsContainer: null, iconContainer: null, threadDetails: null, threadCreatorRoleDot: null, tagContainer: null, dmButtonRow: null, pendingIncoming: null, pendingIncomingButtons: null, appDMButtonIcon: null, formCtaIcon: null };
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
obj2.provisionalAccountExplainer = { marginTop: 12 };
obj2.mutualGuildsLabel = { marginTop: 8, marginLeft: 8, height: 26 };
obj2.mutualGuildsContainer = { flexDirection: "row", alignItems: "center", marginTop: 6 };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center" };
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
let ReactCompilerGating = fn(558);
let closure_48 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowIcon(isPrivate) {
  const cResult = isPrivate(isForumPost[30]).c(22);
  isPrivate = isPrivate.isPrivate;
  const isThread = isPrivate.isThread;
  isForumPost = isPrivate.isForumPost;
  const channelType = isPrivate.channelType;
  const tmp4 = closure_47();
  if (cResult[0] === channelType) {
    if (cResult[1] === isForumPost) {
      if (cResult[2] === isPrivate) {
        if (cResult[3] === isThread) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp4.iconContainer) {
            let tmp6 = cResult[7];
            let tmp7 = cResult[8];
            let str = cResult[9];
            let str2 = cResult[10];
            let tmp8 = cResult[11];
            let tmp9 = cResult[12];
          }
          if (cResult[13] === tmp6) {
            if (cResult[14] === str) {
              if (cResult[15] === str2) {
                if (cResult[16] === tmp8) {
                  let tmp13 = cResult[17];
                }
                if (cResult[18] === tmp7) {
                  if (cResult[19] === tmp9) {
                    if (cResult[20] === tmp13) {
                      let tmp16 = cResult[21];
                    }
                    return tmp16;
                  }
                }
                let obj2 = { style: tmp9, children: tmp13 };
                const tmp18 = closure_44(tmp7, obj2);
                cResult[18] = tmp7;
                cResult[19] = tmp9;
                cResult[20] = tmp13;
                cResult[21] = tmp18;
                tmp16 = tmp18;
              }
            }
          }
          let obj3 = { size: str, color: str2, accessibilityLabel: tmp8 };
          const tmp15 = closure_44(tmp6, obj3);
          cResult[13] = tmp6;
          cResult[14] = str;
          cResult[15] = str2;
          cResult[16] = tmp8;
          cResult[17] = tmp15;
          tmp13 = tmp15;
        }
        const tmp5Result = tmp5();
        const IconComponent = tmp5Result.IconComponent;
        const iconContainer = tmp4.iconContainer;
        const intl = tmp(tmp2[32]).intl;
        const stringResult = intl.string(tmp5Result.label);
        cResult[5] = tmp5;
        cResult[6] = tmp4.iconContainer;
        cResult[7] = IconComponent;
        cResult[8] = closure_7;
        cResult[9] = "lg";
        cResult[10] = "icon-strong";
        cResult[11] = stringResult;
        cResult[12] = iconContainer;
        tmp9 = iconContainer;
        tmp8 = stringResult;
        str2 = "icon-strong";
        str = "lg";
        tmp7 = closure_7;
        tmp6 = IconComponent;
      }
    }
  }
  function getIconComponentAndLabel() {
    if (isForumPost) {
      const obj2 = { IconComponent: ChatIcon.ChatIcon, label: util.t.Y4REmB };
      let tmp6 = obj2;
    } else if (isThread) {
      const obj3 = { IconComponent: ThreadIcon.ThreadIcon, label: util.t["7Xm5QI"] };
      tmp6 = obj3;
    } else if (channelType === constants4.GUILD_APP) {
      if (isPrivate) {
        let AppsIcon = AppsLockIcon.AppsLockIcon;
      } else {
        AppsIcon = AppsIcon2.AppsIcon;
      }
      const obj = { IconComponent: AppsIcon, label: util.t.ZkcrC2 };
    } else {
      const obj4 = { IconComponent: null, label: null };
      if (isPrivate) {
        obj4.IconComponent = TextLockIcon.TextLockIcon;
        obj4.label = util.t.GK18KJ;
        tmp6 = obj4;
      } else {
        obj4.IconComponent = TextIcon.TextIcon;
        obj4.label = util.t.GK18KJ;
        tmp6 = obj4;
      }
    }
    return tmp6;
  }
  cResult[0] = channelType;
  cResult[1] = isForumPost;
  cResult[2] = isPrivate;
  cResult[3] = isThread;
  cResult[4] = getIconComponentAndLabel;
  tmp5 = getIconComponentAndLabel;
  let obj = isPrivate(isForumPost[30]);
  tmp = isPrivate;
  tmp2 = isForumPost;
}) : (function ChatBeginningRowIcon(arg0) {
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
    const obj = { IconComponent: AppsIcon, label: tmp9(1126).t.ZkcrC2 };
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
  const intl = tmp4(1126).intl;
  obj6.accessibilityLabel = intl.string(label);
  obj5.children = closure_1_44(IconComponent, obj6);
  return closure_1_44(React5, obj5);
});
ReactCompilerGating = fn(558);
let closure_49 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowHeader(channelType) {
  const cResult = subtitleLink(576).c(17);
  ({ title, subtitle, isPrivate, isThread, isNSFW, isForumPost, isGameInvitesPost, subtitleLink } = channelType);
  channelType = channelType.channelType;
  const tmp4 = closure_47();
  const obj = subtitleLink(576);
  const tmp5 = null != subtitleLink && subtitleLink(5361).useIsScreenReaderEnabled();
  if (cResult[0] === channelType) {
    if (cResult[1] === isForumPost) {
      if (cResult[2] === isGameInvitesPost) {
        if (cResult[3] === isNSFW) {
          if (cResult[4] === isPrivate) {
            if (cResult[5] === isThread) {
              if (cResult[6] === tmp4) {
                if (cResult[7] === title) {
                  let tmp6 = cResult[8];
                }
                if (cResult[9] === tmp5) {
                  if (cResult[10] === tmp4) {
                    if (cResult[11] === subtitle) {
                      if (cResult[12] === subtitleLink) {
                        let tmp12 = cResult[13];
                      }
                      if (cResult[14] === tmp6) {
                        if (cResult[15] === tmp12) {
                          let tmp15 = cResult[16];
                        }
                        return tmp15;
                      }
                      const obj3 = { children: null };
                      const items = [tmp6, tmp12];
                      obj3.children = items;
                      const tmp18 = closure_46(closure_45, obj3);
                      cResult[14] = tmp6;
                      cResult[15] = tmp12;
                      cResult[16] = tmp18;
                      tmp15 = tmp18;
                    }
                  }
                }
                let tmp14Result = null != subtitle;
                if (tmp14Result) {
                  let str;
                  if (tmp5) {
                    str = "link";
                  }
                  const obj4 = { accessibilityRole: str, onPress: null, style: null, variant: "text-md/medium", color: "text-default", children: null };
                  let fn;
                  if (tmp5) {
                    fn = () => LinkingDefault.openURL(subtitleLink);
                  }
                  obj4.onPress = fn;
                  obj4.style = tmp4.subtitle;
                  obj4.children = subtitle;
                  tmp14Result = closure_44(subtitleLink(5087).Text, obj4);
                }
                cResult[9] = tmp5;
                cResult[10] = tmp4;
                cResult[11] = subtitle;
                cResult[12] = subtitleLink;
                cResult[13] = tmp14Result;
                tmp12 = tmp14Result;
              }
            }
          }
        }
      }
    }
  }
  let tmp8Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    const obj5 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
    const items1 = [closure_44(closure_48, obj5), ];
    const items2 = [tmp4.title, ];
    let num = 8;
    if (isForumPost) {
      num = 0;
    }
    const obj6 = { children: null };
    const obj7 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const obj8 = { marginBottom: num };
    items2[1] = obj8;
    obj7.style = items2;
    obj7.children = title;
    items1[1] = closure_44(subtitleLink(5087).Text, obj7);
    obj6.children = items1;
    tmp8Result = closure_46(closure_45, obj6);
  }
  cResult[0] = channelType;
  cResult[1] = isForumPost;
  cResult[2] = isGameInvitesPost;
  cResult[3] = isNSFW;
  cResult[4] = isPrivate;
  cResult[5] = isThread;
  cResult[6] = tmp4;
  cResult[7] = title;
  cResult[8] = tmp8Result;
  tmp6 = tmp8Result;
  const obj2 = subtitleLink(5361);
}) : (function ChatBeginningRowHeader(arg0) {
  ({ subtitle, isForumPost, isGameInvitesPost, subtitleLink } = arg0);
  ({ title, isPrivate, isThread, isNSFW, channelType } = arg0);
  const tmp = closure_47();
  const tmp4 = null != subtitleLink && subtitleLink(5361).useIsScreenReaderEnabled();
  let tmp5Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    const obj2 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
    const items = [closure_44(closure_48, obj2), ];
    const items1 = [tmp.title, ];
    let num = 8;
    if (isForumPost) {
      num = 0;
    }
    const obj3 = { children: null };
    const obj4 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const obj5 = { marginBottom: num };
    items1[1] = obj5;
    obj4.style = items1;
    obj4.children = title;
    items[1] = closure_44(subtitleLink(5087).Text, obj4);
    obj3.children = items;
    tmp5Result = closure_46(closure_45, obj3);
  }
  const children = [tmp5Result, ];
  let tmp11Result = null != subtitle;
  if (tmp11Result) {
    let str;
    if (tmp4) {
      str = "link";
    }
    const obj6 = { accessibilityRole: str, onPress: null, style: null, variant: "text-md/medium", color: "text-default", children: null };
    let fn;
    if (tmp4) {
      fn = () => LinkingDefault.openURL(subtitleLink);
    }
    obj6.onPress = fn;
    obj6.style = tmp.subtitle;
    obj6.children = subtitle;
    tmp11Result = closure_44(subtitleLink(5087).Text, obj6);
  }
  children[1] = tmp11Result;
  return closure_46(closure_45, { children });
});
ReactCompilerGating = fn(558);
let closure_50 = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkManageButtons(theme) {
  const cResult = channel(576).c(20);
  ({ canManageRoles, canEdit, isPrivate, channel } = theme);
  const tmp4 = closure_47();
  let obj = channel(576);
  const token = channel(4779).useToken(nativeDefault.colors.TEXT_LINK, theme.theme);
  if (cResult[0] === canManageRoles) {
    if (cResult[1] === channel) {
      if (cResult[2] === token) {
        if (cResult[3] === isPrivate) {
          if (cResult[4] === tmp4.ctaAddRoles) {
            if (cResult[5] === tmp4.ctaButton) {
              if (cResult[6] === tmp4.ctaLabel) {
                if (cResult[7] === tmp4.subtitle) {
                  let tmp7 = cResult[8];
                }
                if (cResult[9] === canEdit) {
                  if (cResult[10] === channel) {
                    if (cResult[11] === token) {
                      if (cResult[12] === tmp4.ctaButton) {
                        if (cResult[13] === tmp4.ctaLabel) {
                          if (cResult[14] === tmp4.subtitle) {
                            let tmp11 = cResult[15];
                          }
                          if (cResult[16] === tmp4.ctaContainer) {
                            if (cResult[17] === tmp7) {
                              if (cResult[18] === tmp11) {
                                let tmp15 = cResult[19];
                              }
                              return tmp15;
                            }
                          }
                          const obj3 = { style: tmp4.ctaContainer, children: null };
                          const items = [tmp7, tmp11];
                          obj3.children = items;
                          const tmp18 = closure_46(closure_7, obj3);
                          cResult[16] = tmp4.ctaContainer;
                          cResult[17] = tmp7;
                          cResult[18] = tmp11;
                          cResult[19] = tmp18;
                          tmp15 = tmp18;
                        }
                      }
                    }
                  }
                }
                let tmp12 = canEdit;
                if (canEdit) {
                  const obj4 = {
                    accessibilityRole: "button",
                    onPress() {
                                      ChannelSettingsActionCreatorsDefault.setSection(constants3.OVERVIEW);
                                      ChannelSettingsActionCreatorsDefault.open(channel.id);
                                    },
                    style: null,
                    children: null
                  };
                  const items1 = [, ];
                  ({ ctaButton: arr4[0], subtitle: arr4[1] } = tmp4);
                  obj4.style = items1;
                  const obj5 = { size: "xs", color: token };
                  const items2 = [closure_44(channel(9694).PencilIcon, obj5), ];
                  const obj6 = { style: tmp4.ctaLabel, variant: "text-sm/medium", color: "text-link", children: null };
                  const intl2 = channel(1126).intl;
                  obj6.children = intl2.string(channel(1126).t.GE1Tlo);
                  items2[1] = closure_44(channel(5087).Text, obj6);
                  obj4.children = items2;
                  tmp12 = closure_46(channel(6191).PressableOpacity, obj4);
                }
                cResult[9] = canEdit;
                cResult[10] = channel;
                cResult[11] = token;
                cResult[12] = tmp4.ctaButton;
                cResult[13] = tmp4.ctaLabel;
                cResult[14] = tmp4.subtitle;
                cResult[15] = tmp12;
                tmp11 = tmp12;
              }
            }
          }
        }
      }
    }
  }
  let tmp8 = isPrivate;
  if (isPrivate) {
    tmp8 = canManageRoles;
  }
  if (tmp8) {
    const obj7 = {
      accessibilityRole: "button",
      onPress() {
          return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(channel);
        },
      style: null,
      children: null
    };
    const items3 = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp4);
    obj7.style = items3;
    const obj8 = { source: _modDef12159, size: channel(1200).IconSizes.REFRESH_SMALL_16, color: token };
    const items4 = [closure_44(channel(1200).Icon, obj8), ];
    const obj9 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items5 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp4);
    obj9.style = items5;
    const intl = channel(1126).intl;
    obj9.children = intl.string(channel(1126).t.dMJ3Y6);
    items4[1] = closure_44(channel(5087).Text, obj9);
    obj7.children = items4;
    tmp8 = closure_46(channel(6191).PressableOpacity, obj7);
  }
  cResult[0] = canManageRoles;
  cResult[1] = channel;
  cResult[2] = token;
  cResult[3] = isPrivate;
  cResult[4] = tmp4.ctaAddRoles;
  cResult[5] = tmp4.ctaButton;
  cResult[6] = tmp4.ctaLabel;
  cResult[7] = tmp4.subtitle;
  cResult[8] = tmp8;
  tmp7 = tmp8;
  const obj2 = channel(4779);
}) : (function LinkManageButtons(arg0) {
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
      children: null
    };
    const items = [, ];
    ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
    obj3.style = items;
    const obj4 = { source: _modDef12159, size: native.IconSizes.REFRESH_SMALL_16, color: token };
    const items1 = [closure_44(native.Icon, obj4), ];
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-link", children: null };
    const items2 = [, ];
    ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
    obj5.style = items2;
    const intl = util.intl;
    obj5.children = intl.string(util.t.dMJ3Y6);
    items1[1] = closure_44(Text_Text.Text, obj5);
    obj3.children = items1;
    isPrivate = closure_46(Pressables.PressableOpacity, obj3);
  }
  const items3 = [isPrivate, ];
  if (canEdit) {
    const obj6 = {
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
    obj6.style = items4;
    const obj7 = { size: "xs", color: token };
    const items5 = [closure_44(PencilIcon.PencilIcon, obj7), ];
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
});
ReactCompilerGating = fn(558);
let closure_51 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadOwner(userId) {
  const cResult = userId(576).c(28);
  userId = userId.userId;
  const guildId = userId.guildId;
  const tmp4 = closure_47();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function o() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === guildId) {
    if (cResult[5] === userId) {
      let tmp11 = cResult[6];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [AccessibilityStore];
      const fn3 = function b() {
        return roleStyle.roleStyle;
      };
      cResult[7] = items2;
      cResult[8] = fn3;
      let tmp14 = fn3;
      let tmp13 = items2;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    const tmpResult5 = tmp(504);
    const stateFromStores2 = tmp(504).useStateFromStores(tmp13, tmp14);
    let nick;
    if (stateFromStores1 != null) {
      nick = stateFromStores1.nick;
    }
    if (cResult[9] === nick) {
      if (cResult[10] === stateFromStores) {
        let tmp19 = cResult[11];
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
      const processColorStringsArray = tmp(7961).useProcessColorStringsArray(colorStrings);
      const tmpResult8 = tmp(7961);
      let id;
      const useIsRoleStyleAndRoleColorsEligibleForERC = tmpResult8.useIsRoleStyleAndRoleColorsEligibleForERC;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if ("username" === stateFromStores2) {
        if (cResult[12] !== colorString) {
          let tmp45;
          if (null != colorString) {
            const obj2 = { color: colorString };
            tmp45 = obj2;
          }
          cResult[12] = colorString;
          cResult[13] = tmp45;
          let tmp44 = tmp45;
        } else {
          tmp44 = cResult[13];
        }
        let tmp46;
        if (tmp33) {
          tmp46 = processColorStringsArray;
        }
        if (cResult[14] === tmp44) {
          if (cResult[15] === tmp19) {
            if (cResult[16] === tmp46) {
              let tmp47 = cResult[17];
            }
            return tmp47;
          }
        }
        const obj3 = { gradientColors: tmp46, style: tmp44, variant: "text-md/semibold", color: "text-default", children: tmp19 };
        const tmp49 = closure_44(tmp(5087).Text, obj3);
        cResult[14] = tmp44;
        cResult[15] = tmp19;
        cResult[16] = tmp46;
        cResult[17] = tmp49;
        tmp47 = tmp49;
      } else {
        if (cResult[18] === colorString) {
          if (cResult[19] === colorStrings) {
            if (cResult[20] === stateFromStores2) {
              if (cResult[21] === tmp4) {
                let tmp34 = cResult[22];
              }
              if (cResult[23] !== tmp19) {
                const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp19 };
                const tmp39 = closure_44(tmp(5087).Text, obj4);
                cResult[23] = tmp19;
                cResult[24] = tmp39;
                let tmp37 = tmp39;
              } else {
                tmp37 = cResult[24];
              }
              if (cResult[25] === tmp34) {
                if (cResult[26] === tmp37) {
                  let tmp40 = cResult[27];
                }
                return tmp40;
              }
              const obj6 = { children: null };
              const items3 = [tmp34, tmp37];
              obj6.children = items3;
              const tmp43 = closure_46(closure_45, obj6);
              cResult[25] = tmp34;
              cResult[26] = tmp37;
              cResult[27] = tmp43;
              tmp40 = tmp43;
            }
          }
        }
        let tmp35 = "dot" === stateFromStores2 && null != colorString;
        if (tmp35) {
          const obj7 = { color: colorString, colors: colorStrings, containerStyles: tmp4.threadCreatorRoleDot };
          tmp35 = closure_44(tmp(1200).RoleDot, obj7);
        }
        cResult[18] = colorString;
        cResult[19] = colorStrings;
        cResult[20] = stateFromStores2;
        cResult[21] = tmp4;
        cResult[22] = tmp35;
        tmp34 = tmp35;
      }
      const tmpResult7 = tmp(7961);
    }
    let str;
    if (stateFromStores1 != null) {
      str = stateFromStores1.nick;
    }
    if (str == null) {
      str = guildId(4923).getName(stateFromStores);
      const obj5 = guildId(4923);
    }
    if (str == null) {
      str = "???";
    }
    let nick1;
    if (stateFromStores1 != null) {
      nick1 = stateFromStores1.nick;
    }
    cResult[9] = nick1;
    cResult[10] = stateFromStores;
    cResult[11] = str;
    tmp19 = str;
    const tmpResult6 = tmp(504);
  }
  const fn2 = function v() {
    let member = null;
    if (null != userId) {
      member = GuildMemberStore.getMember(guildId, tmp);
    }
    return member;
  };
  cResult[4] = guildId;
  cResult[5] = userId;
  cResult[6] = fn2;
  tmp11 = fn2;
  const tmpResult = userId(504);
}) : (function ThreadOwner(arg0) {
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
    str = guildId(4923).getName(stateFromStores);
    const obj4 = guildId(4923);
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
  const processColorStringsArray = enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(colorStrings);
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
    const obj6 = { gradientColors: tmp18, style: tmp16, variant: "text-md/semibold", color: "text-default", children: str };
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
    const items3 = [tmp13, ];
    const obj9 = { variant: "text-md/semibold", color: "text-default", children: str };
    items3[1] = closure_44(Text_Text.Text, obj9);
    obj8.children = items3;
    return closure_46(closure_45, obj8);
  }
  const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
});
ReactCompilerGating = fn(558);
let closure_52 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowThread(channel) {
  const cResult = channel(576).c(31);
  channel = channel.channel;
  const tmp4 = closure_47();
  const tmp5 = useChannelNameDefault(channel);
  if (cResult[0] !== channel) {
    const result = tmp(8587).isPrivateGuildChannel(channel);
    cResult[0] = channel;
    cResult[1] = result;
    let tmp6 = result;
    const tmpResult = tmp(8587);
  } else {
    tmp6 = cResult[1];
  }
  const obj = channel(576);
  const appliedTags = channel(6970).useAppliedTags(channel);
  const tmpResult4 = channel(6970);
  const isGameInvitesPost = channel(6967).useIsGameInvitesPost(channel);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumPostMessagesStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel.id) {
    const fn = function v() {
      return ForumPostMessagesStore.getMessage(channel.id);
    };
    cResult[3] = channel.id;
    cResult[4] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult5 = channel(6967);
  const firstMessage = channel(504).useStateFromStoresObject(tmp9, tmp11).firstMessage;
  if (null == channel.threadMetadata) {
    return null;
  } else {
    if (cResult[5] !== channel) {
      const isNSFWResult = channel.isNSFW();
      cResult[5] = channel;
      cResult[6] = isNSFWResult;
      let tmp12 = isNSFWResult;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== channel) {
      const isForumPostResult = channel.isForumPost();
      cResult[7] = channel;
      cResult[8] = isForumPostResult;
      let tmp14 = isForumPostResult;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp5) {
      if (cResult[10] === isGameInvitesPost) {
        if (cResult[11] === tmp6) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp14) {
              let tmp16 = cResult[14];
            }
            if (cResult[15] === channel) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === appliedTags) {
                  let tmp20 = cResult[18];
                }
                if (cResult[19] === channel) {
                  if (cResult[20] === tmp4) {
                    let tmp24 = cResult[21];
                  }
                  if (cResult[22] === channel) {
                    if (cResult[23] === firstMessage) {
                      if (cResult[24] === tmp4) {
                        let tmp28 = cResult[25];
                      }
                      if (cResult[26] === tmp16) {
                        if (cResult[27] === tmp20) {
                          if (cResult[28] === tmp24) {
                          }
                        }
                      }
                      const obj2 = { children: null };
                      const items1 = [tmp16, tmp20, tmp24, tmp28];
                      obj2.children = items1;
                      const tmp34 = closure_46(closure_45, obj2);
                      cResult[26] = tmp16;
                      cResult[27] = tmp20;
                      cResult[28] = tmp24;
                      cResult[29] = tmp28;
                      cResult[30] = tmp34;
                    }
                  }
                  let tmp29 = null;
                  if (channel.isForumPost()) {
                    tmp29 = null;
                    if (null == firstMessage) {
                      const obj3 = { style: tmp4.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
                      const intl2 = tmp(1126).intl;
                      obj3.children = intl2.string(tmp(1126).t.mE3KJN);
                      tmp29 = closure_44(tmp(5087).Text, obj3);
                    }
                  }
                  cResult[22] = channel;
                  cResult[23] = firstMessage;
                  cResult[24] = tmp4;
                  cResult[25] = tmp29;
                  tmp28 = tmp29;
                }
                const isForumPostResult1 = channel.isForumPost();
                let tmp26 = !isForumPostResult1;
                if (!isForumPostResult1) {
                  const obj4 = { style: tmp4.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
                  const intl = tmp(1126).intl;
                  const obj5 = {
                    usernameHook(arg0, arg1) {
                                      return closure_2_44(closure_51, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
                                    }
                  };
                  obj4.children = intl.format(tmp(1126).t.imPXd5, obj5);
                  tmp26 = closure_44(tmp(5087).Text, obj4);
                }
                cResult[19] = channel;
                cResult[20] = tmp4;
                cResult[21] = tmp26;
                tmp24 = tmp26;
              }
            }
            let tmp21 = null;
            if (channel.isForumPost()) {
              tmp21 = null;
              if (appliedTags.length > 0) {
                const obj6 = { style: tmp4.tagContainer, children: appliedTags.map((tag) => closure_1_44(channel(dependencyMap[55]).AppliedForumTagPill, { tag }, tag.id)) };
                tmp21 = closure_44(closure_7, obj6);
              }
            }
            cResult[15] = channel;
            cResult[16] = tmp4;
            cResult[17] = appliedTags;
            cResult[18] = tmp21;
            tmp20 = tmp21;
          }
        }
      }
    }
    const obj7 = { isNSFW: tmp12, title: tmp5, isPrivate: tmp6, isThread: true, isForumPost: tmp14, isGameInvitesPost };
    const tmp19 = closure_44(closure_49, obj7);
    cResult[9] = tmp5;
    cResult[10] = isGameInvitesPost;
    cResult[11] = tmp6;
    cResult[12] = tmp12;
    cResult[13] = tmp14;
    cResult[14] = tmp19;
    tmp16 = tmp19;
  }
  const tmpResult6 = channel(504);
}) : (function ChatBeginningRowThread(channel) {
  channel = channel.channel;
  const tmp = closure_47();
  const tmp3 = useChannelNameDefault(channel);
  const result = channel(8587).isPrivateGuildChannel(channel);
  const obj = channel(8587);
  const appliedTags = channel(6970).useAppliedTags(channel);
  const obj2 = channel(6970);
  const isGameInvitesPost = channel(6967).useIsGameInvitesPost(channel);
  channel(504);
  [][0] = ForumPostMessagesStore;
  let tmp10Result = null;
  if (null != channel.threadMetadata) {
    const obj4 = { isNSFW: channel.isNSFW(), title: tmp3, isPrivate: result, isThread: true, isForumPost: channel.isForumPost(), isGameInvitesPost };
    const items = [closure_44(closure_49, obj4), , , ];
    let tmp12Result = null;
    if (channel.isForumPost()) {
      tmp12Result = null;
      if (appliedTags.length > 0) {
        const obj5 = { style: tmp.tagContainer, children: appliedTags.map((tag) => closure_1_44(channel(dependencyMap[55]).AppliedForumTagPill, { tag }, tag.id)) };
        tmp12Result = closure_44(closure_7, obj5);
      }
    }
    items[1] = tmp12Result;
    const isForumPostResult = channel.isForumPost();
    let tmp12Result3 = !isForumPostResult;
    if (!isForumPostResult) {
      const obj6 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
      const intl = tmp4(1126).intl;
      const obj7 = {
        usernameHook(arg0, arg1) {
              return closure_2_44(closure_51, { userId: channel.ownerId, guildId: channel.guild_id }, arg1);
            }
      };
      obj6.children = intl.format(tmp4(1126).t.imPXd5, obj7);
      tmp12Result3 = closure_44(tmp4(5087).Text, obj6);
    }
    items[2] = tmp12Result3;
    let tmp12Result4 = null;
    if (channel.isForumPost()) {
      tmp12Result4 = null;
      if (null == tmp8) {
        const obj8 = { style: tmp.threadDetails, variant: "text-md/medium", color: "text-default", children: null };
        const intl2 = tmp4(1126).intl;
        obj8.children = intl2.string(tmp4(1126).t.mE3KJN);
        tmp12Result4 = closure_44(tmp4(5087).Text, obj8);
      }
    }
    const obj9 = { children: null };
    items[3] = tmp12Result4;
    obj9.children = items;
    tmp10Result = closure_46(closure_45, obj9);
  }
  return tmp10Result;
});
ReactCompilerGating = fn(558);
let closure_53 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowGuildNonDefaultChannel(arg0) {
  let QuwqjG = channel;
  const cResult = channel(576).c(37);
  ({ guild, channel } = arg0);
  const tmp4 = useChannelNameDefault(channel, true);
  const tmp5 = useChannelNameDefault(channel, false);
  if (cResult[0] !== channel) {
    const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
    cResult[0] = channel;
    cResult[1] = canResult;
    let tmp6 = canResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== channel) {
    const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
    cResult[2] = channel;
    cResult[3] = canResult1;
    let tmp10 = canResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== channel) {
    const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
    cResult[4] = channel;
    cResult[5] = canResult2;
    topic = canResult2;
  } else {
    topic = cResult[5];
  }
  if (cResult[6] !== channel) {
    const result = QuwqjG(8587).isPrivateGuildChannel(channel);
    cResult[6] = channel;
    cResult[7] = result;
    let tmp17 = result;
    const QuwqjGResult = QuwqjG(8587);
  } else {
    tmp17 = cResult[7];
  }
  const tmp19 = useThemeDefault();
  if (cResult[8] !== tmp4) {
    const intl = QuwqjG(1126).intl;
    const obj2 = { channelName: tmp4 };
    const formatToPlainStringResult = intl.formatToPlainString(QuwqjG(1126).t.q0tgLe, obj2);
    cResult[8] = tmp4;
    cResult[9] = formatToPlainStringResult;
    let tmp20 = formatToPlainStringResult;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === topic) {
    if (cResult[11] === channel.id) {
      if (cResult[12] === channel.topic) {
        if (cResult[13] === tmp4) {
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp17) {
              if (cResult[17] === channel.type) {
                if (cResult[18] === tmp17) {
                  if (cResult[19] === tmp22) {
                    if (cResult[20] === tmp20) {
                      let tmp24 = cResult[21];
                    }
                    if (cResult[22] === tmp6) {
                      if (cResult[23] === tmp10) {
                        if (cResult[24] === channel) {
                          if (cResult[25] === tmp17) {
                            if (cResult[26] === tmp19) {
                              let tmp28 = cResult[27];
                            }
                            if (cResult[28] === tmp6) {
                              if (cResult[29] === channel) {
                                if (cResult[30] === guild) {
                                  if (cResult[31] === tmp17) {
                                    let tmp32 = cResult[32];
                                  }
                                  if (cResult[33] === tmp24) {
                                    if (cResult[34] === tmp28) {
                                      if (cResult[35] === tmp32) {
                                        let tmp35 = cResult[36];
                                      }
                                      return tmp35;
                                    }
                                  }
                                  const obj3 = { children: null };
                                  const items = [tmp24, tmp28, tmp32];
                                  obj3.children = items;
                                  const tmp38 = closure_46(closure_45, obj3);
                                  cResult[33] = tmp24;
                                  cResult[34] = tmp28;
                                  cResult[35] = tmp32;
                                  cResult[36] = tmp38;
                                  tmp35 = tmp38;
                                }
                              }
                            }
                            let tmp33 = null;
                            if (tmp17) {
                              tmp33 = null;
                              if (tmp6) {
                                const obj4 = { channel, guild };
                                tmp33 = closure_44(ChannelAccessInfoDefault, obj4);
                              }
                            }
                            cResult[28] = tmp6;
                            cResult[29] = channel;
                            cResult[30] = guild;
                            cResult[31] = tmp17;
                            cResult[32] = tmp33;
                            tmp32 = tmp33;
                          }
                        }
                      }
                    }
                    const obj5 = { canManageRoles: tmp10, canEdit: tmp6, isPrivate: tmp17, channel, theme: tmp19 };
                    const tmp31 = closure_44(closure_50, obj5);
                    cResult[22] = tmp6;
                    cResult[23] = tmp10;
                    cResult[24] = channel;
                    cResult[25] = tmp17;
                    cResult[26] = tmp19;
                    cResult[27] = tmp31;
                    tmp28 = tmp31;
                  }
                }
              }
              const obj6 = { title: tmp20, subtitle: cResult[16], isPrivate: tmp17, channelType: channel.type };
              const tmp27 = closure_44(closure_49, obj6);
              cResult[17] = channel.type;
              cResult[18] = tmp17;
              cResult[19] = cResult[16];
              cResult[20] = tmp20;
              cResult[21] = tmp27;
              tmp24 = tmp27;
            }
          }
        }
      }
    }
  }
  const intl2 = QuwqjG(1126).intl;
  if (tmp17) {
    QuwqjG = QuwqjG(1126).t.QuwqjG;
    const obj7 = {
      channelName: tmp4,
      topicHook() {
          return MarkupUtilsDefault.parseTopic(channel.topic, true, { channelId: channel.id });
        }
    };
    let formatResult = intl2.format(QuwqjG, obj7);
  } else if (topic) {
    const obj8 = { channelName: tmp4 };
    formatResult = intl2.formatToPlainString(QuwqjG(1126).t.JHKUGB, obj8);
  } else {
    const obj9 = { channelName: tmp5 };
    formatResult = intl2.format(QuwqjG(1126).t.hPVEQG, obj9);
  }
  cResult[10] = topic;
  ({ id: tmp2[11], topic } = channel);
  cResult[12] = topic;
  cResult[13] = tmp4;
  cResult[14] = tmp5;
  cResult[15] = tmp17;
  cResult[16] = formatResult;
  const obj = channel(576);
}) : (function ChatBeginningRowGuildNonDefaultChannel(channel) {
  channel = channel.channel;
  const tmp3 = useChannelNameDefault(channel, true);
  const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
  const tmp4 = useChannelNameDefault(channel, false);
  const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
  const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
  const result = channel(8587).isPrivateGuildChannel(channel);
  const obj = channel(8587);
  const intl = channel(1126).intl;
  const tmp10 = useThemeDefault();
  const intl2 = channel(1126).intl;
  if (result) {
    const obj2 = {
      channelName: tmp3,
      topicHook() {
          return MarkupUtilsDefault.parseTopic(channel.topic, true, { channelId: channel.id });
        }
    };
    let formatResult = intl2.format(tmp8(1126).t.QuwqjG, obj2);
  } else if (canResult2) {
    const obj3 = { channelName: tmp3 };
    formatResult = intl2.formatToPlainString(tmp8(1126).t.JHKUGB, obj3);
  } else {
    const obj4 = { channelName: tmp4 };
    formatResult = intl2.format(tmp8(1126).t.hPVEQG, obj4);
  }
  const formatToPlainStringResult = intl.formatToPlainString(channel(1126).t.q0tgLe, { channelName: tmp3 });
  const children = [closure_44(closure_49, { title: intl.formatToPlainString(channel(1126).t.q0tgLe, { channelName: tmp3 }), subtitle: formatResult, isPrivate: result, channelType: channel.type }), closure_44(closure_50, { canManageRoles: canResult1, canEdit: canResult, isPrivate: result, channel, theme: tmp10 }), ];
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
});
ReactCompilerGating = fn(558);
let closure_54 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowGuild(guild) {
  const cResult = guild(576).c(9);
  guild = guild.guild;
  const channel = guild.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function o() {
      return GuildChannelStore.getDefaultChannel(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guild(576);
  const stateFromStores = guild(504).useStateFromStores(first, tmp6);
  if (PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel)) {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (id === channel.id) {
      if (cResult[3] === channel) {
        if (cResult[4] === guild) {
          let tmp12 = cResult[5];
        }
        return tmp12;
      }
      const obj2 = { guild, channel };
      const tmp15 = closure_44(closure_55, obj2);
      cResult[3] = channel;
      cResult[4] = guild;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    }
  }
  if (cResult[6] === channel) {
    if (cResult[7] === guild) {
      let tmp10 = cResult[8];
    }
    return tmp10;
  }
  const tmp11 = closure_44(closure_53, { guild, channel });
  cResult[6] = channel;
  cResult[7] = guild;
  cResult[8] = tmp11;
  tmp10 = tmp11;
  const tmpResult = guild(504);
}) : (function ChatBeginningRowGuild(guild) {
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
      let tmp4 = closure_44(closure_55, obj2);
    }
    return tmp4;
  }
  tmp4 = closure_44(closure_53, { guild, channel });
  const obj = guild(504);
});
ReactCompilerGating = fn(558);
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(id[30]).c(50);
  guild = guild.guild;
  const channel = guild.channel;
  id = guild.id;
  const tmp4 = closure_47();
  let obj = guild(id[30]);
  const completedStates = guild(id[59]).useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj2 = guild(id[59]);
  const permissions = guild(id[59]).usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj3 = guild(id[59]);
  const stateFromStores = guild(id[48]).useStateFromStores(tmp7, tmp8);
  channel(id[60])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  isGuildOwner(guild, stateFromStores);
  const tmp11 = channel;
  const tmpResult = guild(id[48]);
  let obj5 = channel(id[61]);
  channel(id[61]).extractTimestamp(guild.id) < Date.now() - closure_37;
  if (cResult[2] !== channel) {
    let result = tmp(tmp2[52]).isPrivateGuildChannel(channel);
    cResult[2] = channel;
    cResult[3] = result;
    const tmpResult4 = tmp(tmp2[52]);
  }
  const extractTimestampResult = channel(id[61]).extractTimestamp(guild.id);
  const isEligibleForGuildProgress = guild(id[62]).useIsEligibleForGuildProgress(guild);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    class L {
      constructor() {
        return closure_1_11.getErrors();
      }
    }
    cResult[4] = items1;
    cResult[5] = L;
    let tmp20 = L;
    let tmp19 = items1;
  } else {
    tmp19 = cResult[4];
    tmp20 = cResult[5];
  }
  const tmpResult5 = guild(id[62]);
  const stateFromStoresObject = guild(id[48]).useStateFromStoresObject(tmp19, tmp20);
  if (cResult[6] !== stateFromStoresObject.message) {
    class G {
      constructor() {
        if (null != closure_3.message) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[63]);
          presentErrorResult = obj.presentError(tmp.message);
        }
        return;
      }
    }
    const items2 = [stateFromStoresObject.message];
    class L {
      constructor() {
        return closure_1_11.getErrors();
      }
    }
    cResult[6] = stateFromStoresObject.message;
    cResult[7] = G;
    cResult[8] = items2;
    let tmp24 = items2;
  } else {
    class G {
      constructor() {
        if (null != closure_3.message) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[63]);
          presentErrorResult = obj.presentError(tmp.message);
        }
        return;
      }
    }
    tmp24 = cResult[8];
  }
  const layoutEffect = noop.useLayoutEffect(G, tmp24);
  if (!canManageGuild) {
    class G {
      constructor() {
        if (null != closure_3.message) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[63]);
          presentErrorResult = obj.presentError(tmp.message);
        }
        return;
      }
    }
    if (!canInvite) {
      class G {
        constructor() {
          if (null != closure_3.message) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[63]);
            presentErrorResult = obj.presentError(tmp.message);
          }
          return;
        }
      }
    } else {
      class G {
        constructor() {
          if (null != closure_3.message) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[63]);
            presentErrorResult = obj.presentError(tmp.message);
          }
          return;
        }
      }
      function inviteFriends() {
        if (null != guild.vanityURLCode) {
          const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(tmp, channel, constants6.WELCOME_MESSAGE);
        } else {
          const obj2 = { source: constants6.WELCOME_MESSAGE };
          const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj2);
        }
      }
      class L {
        constructor() {
          return closure_1_11.getErrors();
        }
      }
      cResult[18] = guild;
      cResult[19] = inviteFriends;
    }
  } else {
    class G {
      constructor() {
        if (null != closure_3.message) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[63]);
          presentErrorResult = obj.presentError(tmp.message);
        }
        return;
      }
    }
    const _Symbol = Symbol;
    class L {
      constructor() {
        return closure_1_11.getErrors();
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          if (null != closure_3.message) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[63]);
            presentErrorResult = obj.presentError(tmp.message);
          }
          return;
        }
      }
      const stringResult = obj9.string(tmp(tmp2[32]).t["Yhi9/N"]);
      class L {
        constructor() {
          return closure_1_11.getErrors();
        }
      }
      cResult[12] = stringResult;
      let PERSONALIZE_SERVER = stringResult;
    } else {
      class G {
        constructor() {
          if (null != closure_3.message) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[63]);
            presentErrorResult = obj.presentError(tmp.message);
          }
          return;
        }
      }
    }
    if (cResult[13] === tmp26) {
      class G {
        constructor() {
          if (null != closure_3.message) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[63]);
            presentErrorResult = obj.presentError(tmp.message);
          }
          return;
        }
      }
    }
    let obj4 = { onPress: tmp26, source: tmp28, iconStyle: tmp4.formCtaIcon, title: PERSONALIZE_SERVER, isCompleted: guildPersonalized, analyticsSetupType: constants10.CHANNEL_WELCOME, analyticsAction: null };
    PERSONALIZE_SERVER = constants9.PERSONALIZE_SERVER;
    obj4.analyticsAction = PERSONALIZE_SERVER;
    const tmp34 = closure_44(tmp11(tmp2[67]), obj4);
    cResult[13] = tmp26;
    cResult[14] = guildPersonalized;
    guildPersonalized = tmp4.formCtaIcon;
    cResult[15] = guildPersonalized;
    cResult[16] = tmp34;
  }
  const tmpResult6 = guild(id[48]);
}) : ((guild) => {
  guild = guild.guild;
  const channel = guild.channel;
  const id = guild.id;
  const tmp = closure_47();
  const completedStates = guild(id[59]).useCompletedStates(guild);
  ({ guildPopulated, guildPersonalized } = completedStates);
  let obj = guild(id[59]);
  const permissions = guild(id[59]).usePermissions(channel, guild);
  ({ canInvite, canManageGuild } = permissions);
  let obj2 = guild(id[59]);
  const items = [UserStore];
  const stateFromStores = guild(id[48]).useStateFromStores(items, () => currentUser.getCurrentUser());
  channel(id[60])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
  let obj3 = guild(id[48]);
  const tmp9 = isGuildOwner(guild, stateFromStores);
  let obj4 = channel(id[61]);
  const extractTimestampResult = channel(id[61]).extractTimestamp(guild.id);
  const tmp11 = channel(id[61]).extractTimestamp(guild.id) < Date.now() - closure_37;
  let result = guild(id[52]).isPrivateGuildChannel(channel);
  let obj5 = guild(id[52]);
  const isEligibleForGuildProgress = guild(id[62]).useIsEligibleForGuildProgress(guild);
  let obj6 = guild(id[62]);
  const items1 = [GuildSettingsStore];
  const stateFromStoresObject = guild(id[48]).useStateFromStoresObject(items1, () => errors.getErrors());
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items2);
  if (canManageGuild) {
    closure_4 = async function _addServerIcon2() {
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
          return { value: "IconComponent", done: null };
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
              tmp5(8621).init(id);
              const obj7 = tmp5(8621);
              const obj5 = { size };
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: tmp5(7750).openImagePicker(obj5), done: false };
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
              tmp5(8621).updateIcon(closure_129_2, base64);
              const obj = tmp5(8621);
              tmp5(8621).open(closure_129_2, constants.LANDING);
              const obj2 = tmp5(8621);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
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
      analyticsAction: null
    };
    let obj9 = { uri: tmp7(tmp3[66]) };
    obj8.source = obj9;
    obj8.iconStyle = tmp.formCtaIcon;
    const intl = tmp2(tmp3[32]).intl;
    obj8.title = intl.string(tmp2(tmp3[32]).t["Yhi9/N"]);
    obj8.isCompleted = guildPersonalized;
    obj8.analyticsSetupType = constants10.CHANNEL_WELCOME;
    obj8.analyticsAction = constants9.PERSONALIZE_SERVER;
    const tmp17 = closure_44(tmp7(tmp3[67]), obj8);
    const tmp7Result = tmp7(tmp3[67]);
  }
  if (canInvite) {
    const obj10 = {
      onPress: function inviteFriends() {
          if (null != guild.vanityURLCode) {
            const result = instant_invite_InstantInviteUtils.showVanityUrlInviteActionSheet(tmp, channel, constants6.WELCOME_MESSAGE);
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
      analyticsAction: null
    };
    const obj11 = { uri: tmp7(tmp3[69]) };
    obj10.source = obj11;
    obj10.iconStyle = tmp.formCtaIcon;
    const intl2 = tmp2(tmp3[32]).intl;
    obj10.title = intl2.string(tmp2(tmp3[32]).t.q9n0Ta);
    obj10.isCompleted = guildPopulated;
    obj10.analyticsSetupType = constants10.CHANNEL_WELCOME;
    obj10.analyticsAction = constants9.INVITE;
    const tmp22 = closure_44(tmp7(tmp3[67]), obj10);
    const tmp7Result3 = tmp7(tmp3[67]);
  }
  const intl3 = tmp2(tmp3[32]).intl;
  const string = intl3.string;
  const t = tmp2(tmp3[32]).t;
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
  let obj7 = guild(id[48]);
  const combined = "" + channel(id[70]).getArticleURL(constants5.GUILD_GETTING_STARTED) + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
  const items3 = [stringResult, ];
  let tmp31Result = null;
  if (tmp28) {
    const obj12 = { children: null };
    const intl4 = tmp2(tmp3[32]).intl;
    const obj13 = { guideURL: combined };
    const items4 = [" ", intl4.format(tmp2(tmp3[32]).t.UOtD32, obj13)];
    obj12.children = items4;
    tmp31Result = closure_46(closure_45, obj12);
  }
  items3[1] = tmp31Result;
  const obj14 = { title: null, subtitle: null, isPrivate: null, subtitleLink: null };
  const tmp7Result4 = channel(id[70]);
  const intl5 = tmp2(tmp3[32]).intl;
  obj14.title = intl5.formatToPlainString(guild(id[32]).t["j59F/c"], { guildName: guild.name });
  obj14.subtitle = closure_46(closure_45, { children: items3 });
  obj14.isPrivate = result;
  let tmp37;
  if (tmp28) {
    tmp37 = combined;
  }
  obj14.subtitleLink = tmp37;
  const children = [closure_44(closure_49, obj14), ];
  if (isEligibleForGuildProgress) {
    const obj16 = { guild };
    let tmp31Result3 = closure_44(tmp7(tmp3[71]), obj16);
  } else {
    const obj17 = { children: null };
    const items6 = [tmp22, tmp17];
    obj17.children = items6;
    tmp31Result3 = closure_46(closure_45, obj17);
  }
  children[1] = tmp31Result3;
  return closure_46(noop.Fragment, { children });
});
ReactCompilerGating = fn(558);
let closure_56 = ReactCompilerGating.isReactCompilerEnabled() ? (function DMSpamButton(channel) {
  const cResult = channel(576).c(7);
  channel = channel.channel;
  ({ user, showingSpamBanner } = channel);
  let obj = channel(576);
  const dMMessageToReport = channel(12285).useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      if (cResult[0] === channel) {
        if (cResult[1] === message) {
          let tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.HHZmDn);
          cResult[3] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp7) {
          if (cResult[5] === tmp11) {
            let tmp12 = cResult[6];
          }
          return tmp12;
        }
        const obj3 = { size: "sm", variant: "destructive", text: tmp9, disabled: null == message, onPress: tmp7 };
        const tmp14 = closure_44(tmp(5376).Button, obj3);
        cResult[4] = tmp7;
        cResult[5] = null == message;
        cResult[6] = tmp14;
        tmp12 = tmp14;
      }
      function handleShowReportModal() {
        if (null != message) {
          const result = ReportModals.showReportModalForFirstDM(tmp, () => {
            message(dependencyMap[74]).closePrivateChannel(id.id, true);
          });
        }
      }
      cResult[0] = channel;
      cResult[1] = message;
      cResult[2] = handleShowReportModal;
      tmp7 = handleShowReportModal;
    }
  }
  return null;
}) : (function DMSpamButton(channel) {
  channel = channel.channel;
  const user = channel.user;
  const dMMessageToReport = channel(12285).useDMMessageToReport(channel, user.id, true === user.bot);
  const message = dMMessageToReport.message;
  if (!channel.showingSpamBanner) {
    if (dMMessageToReport.isReportable) {
      const obj2 = { size: "sm", variant: "destructive", text: null, disabled: null, onPress: null };
      const intl = tmp(1126).intl;
      obj2.text = intl.string(tmp(1126).t.HHZmDn);
      obj2.disabled = null == message;
      obj2.onPress = function handleShowReportModal() {
        if (null != message) {
          const result = ReportModals.showReportModalForFirstDM(tmp, () => {
            message(dependencyMap[74]).closePrivateChannel(id.id, true);
          });
        }
      };
      return closure_44(tmp(5376).Button, obj2);
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
let closure_57 = ReactCompilerGating.isReactCompilerEnabled() ? (function DeauthorizeAppButton(application) {
  let Button = application;
  let tmp = oauth2Token;
  const cResult = application(oauth2Token[30]).c(15);
  application = application.application;
  const channel = application.channel;
  oauth2Token = application.oauth2Token;
  const tmp3 = closure_47();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function o() {
      return selfEmbeddedActivities.getSelfEmbeddedActivities();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = application(oauth2Token[30]);
  const stateFromStores = Button(tmp[48]).useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (application.user.bot) {
    tmp8 = null;
    if (null != application) {
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = Button(tmp[32]).intl;
        const stringResult = intl.string(Button(tmp[32]).t.xUqheM);
        cResult[2] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp3.appDMButtonIcon) {
        let obj2 = { size: Button(tmp[44]).Icon.Sizes.SMALL, source: channel(tmp[76]), style: tmp3.appDMButtonIcon };
        const tmp14 = closure_44(Button(tmp[44]).Icon, obj2);
        cResult[3] = tmp3.appDMButtonIcon;
        cResult[4] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === application) {
        if (cResult[6] === channel.id) {
          if (cResult[7] === channel.type) {
            if (cResult[8] === stateFromStores) {
              if (cResult[9] === oauth2Token.id) {
                if (cResult[10] === oauth2Token.scopes) {
                  let tmp15 = cResult[11];
                }
                if (cResult[12] === tmp11) {
                }
                Button = Button(tmp[75]).Button;
                let obj3 = { size: "sm", variant: "secondary", text: tmp9, icon: tmp11, onPress: tmp15 };
                tmp = closure_44(Button, obj3);
                cResult[12] = tmp11;
                cResult[13] = tmp15;
                cResult[14] = tmp;
              }
            }
          }
        }
      }
      const fn2 = function b() {
        useAlertStore.openAlert("confirm-delete-authed-app", closure_2_44(UserSettingsAuthedAppDeleteWarningModalDefault, {
          application,
          scopes: oauth2Token.scopes,
          onDelete() {
            channel(oauth2Token[79]).delete(id2.id);
            value = stateFromStores.get(id.id);
            const obj = channel(oauth2Token[79]);
            let _location;
            if (value != null) {
              _location = value.location;
            }
            const result = application(oauth2Token[80]).leaveEmbeddedActivity({ location: _location, applicationId: id.id });
            const obj2 = application(oauth2Token[80]);
            const obj3 = { location: _location, applicationId: id.id };
          }
        }));
        let obj2 = {
          application,
          scopes: oauth2Token.scopes,
          onDelete() {
            channel(oauth2Token[79]).delete(id2.id);
            value = stateFromStores.get(id.id);
            const obj = channel(oauth2Token[79]);
            let _location;
            if (value != null) {
              _location = value.location;
            }
            const result = application(oauth2Token[80]).leaveEmbeddedActivity({ location: _location, applicationId: id.id });
            const obj2 = application(oauth2Token[80]);
            const obj3 = { location: _location, applicationId: id.id };
          }
        };
        AnalyticsUtilsDefault.track(constants.APP_MANAGE_CTA_CLICKED, { application_id: application.id, channel_id: channel.id, channel_type: channel.type });
      };
      cResult[5] = application;
      cResult[6] = channel.id;
      cResult[7] = channel.type;
      cResult[8] = stateFromStores;
      cResult[9] = oauth2Token.id;
      cResult[10] = oauth2Token.scopes;
      cResult[11] = fn2;
      tmp15 = fn2;
    }
  }
  return tmp8;
}) : (function DeauthorizeAppButton(application) {
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
      const intl = tmp2(1126).intl;
      obj2.text = intl.string(tmp2(1126).t.xUqheM);
      let obj3 = { size: tmp2(1200).Icon.Sizes.SMALL, source: _modDef12291, style: tmp.appDMButtonIcon };
      obj2.icon = closure_44(tmp2(1200).Icon, obj3);
      obj2.onPress = function onPress() {
        useAlertStore.openAlert("confirm-delete-authed-app", closure_2_44(UserSettingsAuthedAppDeleteWarningModalDefault, {
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
            const result = application(scopes[80]).leaveEmbeddedActivity({ location: _location, applicationId: id.id });
            const obj2 = application(scopes[80]);
            const obj3 = { location: _location, applicationId: id.id };
          }
        }));
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
            const result = application(scopes[80]).leaveEmbeddedActivity({ location: _location, applicationId: id.id });
            const obj2 = application(scopes[80]);
            const obj3 = { location: _location, applicationId: id.id };
          }
        };
        AnalyticsUtilsDefault.track(constants.APP_MANAGE_CTA_CLICKED, { application_id: application.id, channel_id: closure_1_1.id, channel_type: closure_1_1.type });
      };
      tmp4 = closure_44(tmp2(5376).Button, obj2);
    }
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let closure_58 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditConjuredAppButton(project) {
  const cResult = project(576).c(8);
  project = project.project;
  const tmp4 = closure_47();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef3827.jMMrDM);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.appDMButtonIcon) {
    const obj2 = { size: "xs", style: tmp4.appDMButtonIcon };
    const tmp10 = closure_44(tmp(9694).PencilIcon, obj2);
    cResult[1] = tmp4.appDMButtonIcon;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== project) {
    const fn = function l() {
      return openConjureProjectInBuilderDefault(project);
    };
    cResult[3] = project;
    cResult[4] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === tmp11) {
      let tmp12 = cResult[7];
    }
    return tmp12;
  }
  const tmp13 = closure_44(project(5376).Button, { size: "sm", variant: "secondary", text: first, icon: tmp8, onPress: tmp11 });
  cResult[5] = tmp8;
  cResult[6] = tmp11;
  cResult[7] = tmp13;
  tmp12 = tmp13;
  const obj = project(576);
}) : (function EditConjuredAppButton(project) {
  project = project.project;
  const obj = { size: "sm", variant: "secondary", text: null, icon: null, onPress: null };
  const intl = project(1126).intl;
  obj.text = intl.string(_modDef3827.jMMrDM);
  const tmp = closure_47();
  obj.icon = closure_44(project(9694).PencilIcon, { size: "xs", style: closure_47().appDMButtonIcon });
  obj.onPress = function onPress() {
    return openConjureProjectInBuilderDefault(project);
  };
  return closure_44(project(5376).Button, obj);
});
ReactCompilerGating = fn(558);
let closure_60 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowDMGuard(channel) {
  _require = channel;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.channel) {
    const fn = function o() {
      channel = channel.channel;
      return UserStore.getUser(channel.getRecipientId());
    };
    cResult[1] = channel.channel;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === channel) {
    }
    const obj2 = {};
    const merged = Object.assign(channel);
    obj2.user = stateFromStores;
    const tmp14 = closure_44(ChatBeginningRowDM, obj2);
    cResult[3] = channel;
    cResult[4] = stateFromStores;
    cResult[5] = tmp14;
  }
  const tmpResult = require("initialize");
}) : (function ChatBeginningRowDMGuard(arg0) {
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
});
ReactCompilerGating = fn(558);
let closure_62 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowButton(arg0) {
  const cResult = c.c(12);
  ({ title, subtitle, IconComponent, iconVariant, style, onPress, trailing } = arg0);
  if (cResult[0] === IconComponent) {
    if (cResult[1] === iconVariant) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === onPress) {
      if (cResult[4] === subtitle) {
        if (cResult[5] === tmp4) {
          if (cResult[6] === title) {
            if (cResult[7] === trailing) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === style) {
              if (cResult[10] === tmp6) {
                let tmp9 = cResult[11];
              }
              return tmp9;
            }
            const obj2 = { style, children: tmp6 };
            const tmp12 = closure_1_44(React5, obj2);
            cResult[9] = style;
            cResult[10] = tmp6;
            cResult[11] = tmp12;
            tmp9 = tmp12;
          }
        }
      }
    }
    const obj3 = { onPress, icon: tmp4, label: title, subLabel: subtitle, trailing };
    const tmp8 = closure_1_44(RowButton.RowButton, obj3);
    cResult[3] = onPress;
    cResult[4] = subtitle;
    cResult[5] = tmp4;
    cResult[6] = title;
    cResult[7] = trailing;
    cResult[8] = tmp8;
    tmp6 = tmp8;
  }
  const tmp5 = closure_1_44(RowButton.RowButton.Icon, { IconComponent, variant: iconVariant });
  cResult[0] = IconComponent;
  cResult[1] = iconVariant;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function ChatBeginningRowButton(style) {
  const obj = { style: style.style, children: closure_1_44(RowButton.RowButton, { onPress, icon: closure_1_44(RowButton.RowButton.Icon, { IconComponent, variant: iconVariant }), label: title, subLabel: subtitle, trailing }) };
  ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
  return closure_1_44(React5, obj);
});
const GroupDMChatBeginning = "GroupDMChatBeginning";
ReactCompilerGating = fn(558);
let closure_64 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRowGroupDM(channel) {
  const cResult = require("c").c(55);
  channel = channel.channel;
  _require = channel;
  let obj = require("c");
  importDefault = closure_47();
  require("useChannelName")(channel);
  [first, _slicedToArray] = onClick.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function h() {
      return relationshipCount.getRelationshipCount() > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmp4 = closure_47();
  const tmp5 = importDefault;
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[2] !== channel.id) {
    const fn2 = function f() {
      openGroupDMAddMembersDefault(user.id, constants2.CHANNEL_TEXT_AREA);
    };
    cResult[2] = channel.id;
    cResult[3] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
  }
  onClick = tmp13;
  if (cResult[4] === channel) {
    if (cResult[5] === first) {
      let tmp14 = cResult[6];
    }
    onClick2 = tmp14;
    if (cResult[7] === channel.id) {
      if (cResult[8] === tmp13) {
        let tmp15 = cResult[9];
      }
      const onPress = tmp15;
      if (cResult[10] !== tmp14) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
        cResult[10] = tmp14;
        class P {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[111]);
            tmp3 = AnalyticsSections;
            groupDMAddMembersAction = obj.getGroupDMAddMembersAction(closure_0.id, AnalyticsSections.CHANNEL_TEXT_AREA);
            if ("open" === groupDMAddMembersAction) {
              tmpResult = tmp(tmp2[113]);
              if (tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
                tmp9 = closure_5;
                tmp10 = closure_5();
              } else {
                tmp6 = closure_1;
                obj1 = { onClick: null };
                tmp7 = closure_5;
                obj1.onClick = closure_5;
                tmp8 = closure_1(tmp2[115])(obj1);
              }
            } else {
              tmpResult1 = tmp(tmp2[111]);
              result = tmpResult1.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp3.CHANNEL_TEXT_AREA);
            }
            return;
          }
        }
        cResult[11] = N;
      } else {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      class P {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[111]);
          tmp3 = AnalyticsSections;
          groupDMAddMembersAction = obj.getGroupDMAddMembersAction(closure_0.id, AnalyticsSections.CHANNEL_TEXT_AREA);
          if ("open" === groupDMAddMembersAction) {
            tmpResult = tmp(tmp2[113]);
            if (tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp9 = closure_5;
              tmp10 = closure_5();
            } else {
              tmp6 = closure_1;
              obj1 = { onClick: null };
              tmp7 = closure_5;
              obj1.onClick = closure_5;
              tmp8 = closure_1(tmp2[115])(obj1);
            }
          } else {
            tmpResult1 = tmp(tmp2[111]);
            result = tmpResult1.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp3.CHANNEL_TEXT_AREA);
          }
          return;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
        tmp18[0] = GroupDMChatBeginning;
        class P {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[111]);
            tmp3 = AnalyticsSections;
            groupDMAddMembersAction = obj.getGroupDMAddMembersAction(closure_0.id, AnalyticsSections.CHANNEL_TEXT_AREA);
            if ("open" === groupDMAddMembersAction) {
              tmpResult = tmp(tmp2[113]);
              if (tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
                tmp9 = closure_5;
                tmp10 = closure_5();
              } else {
                tmp6 = closure_1;
                obj1 = { onClick: null };
                tmp7 = closure_5;
                obj1.onClick = closure_5;
                tmp8 = closure_1(tmp2[115])(obj1);
              }
            } else {
              tmpResult1 = tmp(tmp2[111]);
              result = tmpResult1.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp3.CHANNEL_TEXT_AREA);
            }
            return;
          }
        }
        cResult[12] = tmp18;
      } else {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      const tmp5Result = tmp5(tmp2[116]);
      const groupDMNitroAudience = tmp(tmp2[117]).useGroupDMNitroAudience();
      if (channel.recipients != null) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      if (undefined == null) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      const sum = tmp22 + 1;
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
        cResult[13] = tmp24;
        class P {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[111]);
            tmp3 = AnalyticsSections;
            groupDMAddMembersAction = obj.getGroupDMAddMembersAction(closure_0.id, AnalyticsSections.CHANNEL_TEXT_AREA);
            if ("open" === groupDMAddMembersAction) {
              tmpResult = tmp(tmp2[113]);
              if (tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
                tmp9 = closure_5;
                tmp10 = closure_5();
              } else {
                tmp6 = closure_1;
                obj1 = { onClick: null };
                tmp7 = closure_5;
                obj1.onClick = closure_5;
                tmp8 = closure_1(tmp2[115])(obj1);
              }
            } else {
              tmpResult1 = tmp(tmp2[111]);
              result = tmpResult1.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp3.CHANNEL_TEXT_AREA);
            }
            return;
          }
        }
      } else {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      if (cResult[14] === groupDMNitroAudience) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      let result = stateFromStores;
      if (stateFromStores) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
        result = obj5.isGroupDMNitroUpsellAudience(groupDMNitroAudience);
      }
      if (result) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      if (result) {
        class N {
          constructor() {
            tmp = closure_2;
            obj = closure_0(closure_2[113]);
            if (obj.UNSAFE_isDismissibleContentDismissed(closure_0(closure_2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
              tmp5 = closure_6;
              tmp6 = closure_6();
            } else {
              tmp2 = closure_1;
              obj1 = { onClick: null };
              tmp3 = closure_6;
              obj1.onClick = closure_6;
              tmp4 = closure_1(tmp[115])(obj1);
            }
            return;
          }
        }
      }
      cResult[14] = groupDMNitroAudience;
      cResult[15] = tmp5Result.useConfig(tmp18).enabled;
      cResult[16] = stateFromStores;
      cResult[17] = sum;
      cResult[18] = result;
      let tmpResult2 = tmp(tmp2[117]);
    }
    class P {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[111]);
        tmp3 = AnalyticsSections;
        groupDMAddMembersAction = obj.getGroupDMAddMembersAction(closure_0.id, AnalyticsSections.CHANNEL_TEXT_AREA);
        if ("open" === groupDMAddMembersAction) {
          tmpResult = tmp(tmp2[113]);
          if (tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[114]).DismissibleContent.GDM_INVITE_REMINDER)) {
            tmp9 = closure_5;
            tmp10 = closure_5();
          } else {
            tmp6 = closure_1;
            obj1 = { onClick: null };
            tmp7 = closure_5;
            obj1.onClick = closure_5;
            tmp8 = closure_1(tmp2[115])(obj1);
          }
        } else {
          tmpResult1 = tmp(tmp2[111]);
          result = tmpResult1.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, tmp3.CHANNEL_TEXT_AREA);
        }
        return;
      }
    }
    cResult[7] = channel.id;
    cResult[8] = tmp13;
    cResult[9] = P;
    tmp15 = P;
  }
  _require = stateFromStores(function*() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = undefined;
            if (c2) {
              v3 = 3;
            } else {
              v3(true);
              c2 = 1;
              v3 = 1;
              const obj5 = { value: tmp5(first[112]).mobileCreateInvite(tmp2, constants.GROUP_DM), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          if (null != closure_128_0) {
            const obj = tmp2(first[68]);
            obj.handleCopy(closure_128_0, tmp2, constants.GROUP_DM, false);
          }
          v3(false);
        }
        v3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } catch (tmp27) {
        v3 = tmp;
        throw tmp27;
      }
    }
  });
  function t4() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[4] = channel;
  cResult[5] = first;
  cResult[6] = t4;
  tmp14 = t4;
  let tmpResult = require("initialize");
}) : (function ChatBeginningRowGroupDM(channel) {
  channel = channel.channel;
  let first;
  onClick = undefined;
  let callback1;
  const tmp = closure_47();
  const arr = first(5418)(channel);
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
  callback1 = noop.useCallback(callback1(function*() {
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
        return { value: "IconComponent", done: null };
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
              const obj5 = { value: tmp2(8480).mobileCreateInvite(channel, constants.GROUP_DM), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          if (null != closure_128_0) {
            const obj = tmp5(8667);
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
  }), items2);
  const items3 = [channel.id, onClick];
  const items4 = [callback1];
  const callback2 = noop.useCallback(() => {
    const groupDMAddMembersAction = openGroupDMAddMembers.getGroupDMAddMembersAction(channel.id, constants2.CHANNEL_TEXT_AREA);
    if ("open" === groupDMAddMembersAction) {
      if (tmpResult.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
        onClick();
      } else {
        const obj2 = { onClick };
        showChatGDMUpsellActionSheetDefault(obj2);
      }
      tmpResult = DismissibleContentUnsafeUtils;
    } else {
      const result = openGroupDMAddMembers.showGroupDMAddMembersRoadblock(groupDMAddMembersAction, constants2.CHANNEL_TEXT_AREA);
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
  let obj2 = first(10717);
  const obj3 = { location: GroupDMChatBeginning };
  const groupDMNitroAudience = channel(10714).useGroupDMNitroAudience();
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
  let obj4 = channel(10714);
  if (stateFromStores) {
    enabled = tmp7(10714).isGroupDMNitroUpsellAudience(groupDMNitroAudience);
    const tmp7Result = tmp7(10714);
  }
  if (enabled) {
    enabled = obj2.useConfig(obj3).enabled;
  }
  if (enabled) {
    enabled = sum >= tmp16;
  }
  let obj5 = { audience: groupDMNitroAudience, location: GroupDMChatBeginning, acquisitionStrategy: null };
  tmp16 = first(10715)({ useNitroCapExperiment: true });
  obj5.acquisitionStrategy = channel(10714).GroupDMNitroAcquisitionStrategy.MARKETING;
  const tmp2Result = first(10721);
  let obj6 = { style: tmp.centerHeader, children: null };
  const obj7 = { style: tmp.avatarRedesign, channel, size: null, accessible: false };
  const tmp2ResultResult = first(10721)(obj5);
  obj7.size = channel(1200).AvatarSizes.XXLARGE;
  const items5 = [closure_44(first(10246), obj7), , , ];
  const obj8 = { style: tmp.dmTitle, variant: null, color: "mobile-text-heading-primary", children: null };
  let str = "heading-xxl/extrabold";
  if (null != arr) {
    str = "heading-xxl/extrabold";
    if (arr.length > 40) {
      str = "heading-lg/extrabold";
    }
  }
  const tmp23 = channel.id === channel(6917).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
  obj8.variant = str;
  obj8.children = arr;
  items5[1] = closure_44(channel(5087).Text, obj8);
  const obj9 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default", children: null };
  const intl = tmp7(1126).intl;
  if (tmp23) {
    const obj10 = { name: arr };
    let formatResult = intl.format(tmp7(1126).t.MFwcqO, obj10);
  } else {
    formatResult = intl.string(tmp7(1126).t["0Q7uk0"]);
  }
  obj9.children = formatResult;
  items5[2] = closure_44(channel(5087).Text, obj9);
  let tmp19Result = null;
  if (!tmp23) {
    if (enabled) {
      const obj11 = { style: tmp.gdmInviteFriends, onPress: tmp2ResultResult, IconComponent: tmp7(9016).NitroWheelIcon, iconVariant: "default", title: null, subtitle: null };
      const intl3 = tmp7(1126).intl;
      obj11.title = intl3.string(tmp7(1126).t["LR+Ptf"]);
      const intl4 = tmp7(1126).intl;
      const obj12 = { number };
      obj11.subtitle = intl4.formatToPlainString(tmp7(1126).t["8o8Zk5"], obj12);
      let tmp21Result = closure_44(closure_62, obj11);
    } else {
      tmp21Result = null;
      if (stateFromStores) {
        const obj13 = { style: tmp.gdmInviteFriends, onPress: callback2, IconComponent: tmp7(10297).GroupPlusIcon, iconVariant: "default", title: null };
        const intl2 = tmp7(1126).intl;
        obj13.title = intl2.string(tmp7(1126).t["LR+Ptf"]);
        tmp21Result = closure_44(closure_62, obj13);
      }
    }
    const items6 = [tmp21Result, , ];
    const items7 = [tmp.gdmShareInviteLink, ];
    let prop = null;
    if (!stateFromStores) {
      prop = tmp.gdmShareInviteLinkNoRelationships;
    }
    const obj14 = { style: null, onPress: null, IconComponent: null, title: null, subtitle: null, trailing: null };
    items7[1] = prop;
    obj14.style = items7;
    obj14.onPress = callback3;
    obj14.IconComponent = tmp7(5040).LinkIcon;
    const intl5 = tmp7(1126).intl;
    obj14.title = intl5.string(tmp7(1126).t["3XVNyt"]);
    const intl6 = tmp7(1126).intl;
    obj14.subtitle = intl6.string(tmp7(1126).t.qa9CQu);
    let tmp21Result3 = null;
    if (first) {
      tmp21Result3 = closure_44(closure_6, {});
    }
    obj14.trailing = tmp21Result3;
    items6[1] = closure_44(closure_62, obj14);
    let tmp21Result4 = null;
    if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
      const obj15 = { channelId: channel.id };
      tmp21Result4 = closure_44(tmp2(12328), obj15);
    }
    const obj16 = { children: null };
    items6[2] = tmp21Result4;
    obj16.children = items6;
    tmp19Result = closure_46(closure_45, obj16);
  }
  items5[3] = tmp19Result;
  obj6.children = items5;
  return closure_46(closure_7, obj6);
});
ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChatBeginningRow(channelId) {
  const cResult = channelId(576).c(29);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ shouldRender, showingSpamBanner } = channelId);
  const tmp4 = closure_47();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    class E {
      constructor() {
        return closure_20.getGuild(guildId);
      }
    }
    cResult[4] = guildId;
    cResult[5] = E;
  } else {
    class E {
      constructor() {
        return closure_20.getGuild(guildId);
      }
    }
  }
  const tmpResult = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp9, E);
  const tmpResult2 = channelId(504);
  [r10057, dependencyMap] = noop.useState(undefined);
  if (shouldRender) {
    class E {
      constructor() {
        return closure_20.getGuild(guildId);
      }
    }
    shouldRender = null != stateFromStores;
  }
  if (!shouldRender) {
    class E {
      constructor() {
        return closure_20.getGuild(guildId);
      }
    }
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
      cResult[16] = M;
    } else {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
    }
    if (null != null) {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
    }
    if (cResult[17] !== 0) {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
      tmp20[0] = num10;
      cResult[17] = num10;
      cResult[18] = tmp20;
    } else {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
    }
    if (cResult[19] === tmp4.container) {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
      if (cResult[22] === channelId) {
        class M {
          constructor(arg0) {
            height = channelId.nativeEvent.layout.height;
            tmp = closure_2((arg0) => {
              let tmp = arg0;
              if (null == arg0) {
                tmp = height;
              } else {
                const _Math = Math;
              }
              return tmp;
            });
            return;
          }
        }
      }
      let tmp23 = null != null;
      if (tmp23) {
        class M {
          constructor(arg0) {
            height = channelId.nativeEvent.layout.height;
            tmp = closure_2((arg0) => {
              let tmp = arg0;
              if (null == arg0) {
                tmp = height;
              } else {
                const _Math = Math;
              }
              return tmp;
            });
            return;
          }
        }
        const obj2 = { style: tmp4.contentWrapper, onLayout: M, children: null };
        tmp23 = closure_44(closure_7, obj2, channelId);
      }
      cResult[22] = channelId;
      cResult[23] = null;
      cResult[24] = tmp4.contentWrapper;
      cResult[25] = tmp23;
    }
    const items2 = [tmp4.container, tmp20];
    cResult[19] = tmp4.container;
    cResult[20] = tmp20;
    cResult[21] = items2;
  } else {
    class M {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = closure_2((arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            tmp = height;
          } else {
            const _Math = Math;
          }
          return tmp;
        });
        return;
      }
    }
    if (!THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
    }
    if (cResult[6] !== stateFromStores) {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
      const obj3 = { channel: stateFromStores };
      const tmp16 = closure_44(closure_52, obj3);
      cResult[6] = stateFromStores;
      cResult[7] = tmp16;
    } else {
      class M {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = closure_2((arg0) => {
            let tmp = arg0;
            if (null == arg0) {
              tmp = height;
            } else {
              const _Math = Math;
            }
            return tmp;
          });
          return;
        }
      }
    }
  }
  const tmp13 = _slicedToArray(noop.useState(undefined), 2);
}) : (function ChatBeginningRow(channelId) {
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
    const items2 = [tmp.container, ];
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
    let tmp8 = closure_44(closure_52, obj7);
  } else if (stateFromStores.isDM()) {
    const obj8 = { channel: stateFromStores, showingSpamBanner: channelId.showingSpamBanner };
    tmp8 = closure_44(closure_60, obj8);
  } else if (stateFromStores.isGroupDM()) {
    const obj9 = { channel: stateFromStores };
    tmp8 = closure_44(closure_64, obj9);
  } else if (null != stateFromStores1) {
    const obj10 = { guild: stateFromStores1, channel: stateFromStores };
    tmp8 = closure_44(closure_54, obj10);
  }
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
});