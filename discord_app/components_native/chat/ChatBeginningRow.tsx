// discord_app/components_native/chat/ChatBeginningRow.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelConstants from "../../modules/channel/ChannelConstants.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import _modDef3753 from "../../modules/conjure/intl/ConjureUntranslated.messages.js";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../modules/toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../modules/design/DesignSystemsNotificationComponentsExperiment.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import DismissibleContentUnsafeUtils from "../../modules/dismissible_content/DismissibleContentUnsafeUtils.tsx";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import MarkupUtilsDefault from "../../modules/markup/MarkupUtils.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../modules/channel/useChannelName.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import ChatIcon from "../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadIcon from "../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import TextLockIcon from "../../design/components/Icon/native/redesign/generated/TextLockIcon.tsx";
import TextIcon from "../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import AppsLockIcon from "../../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import AppsIcon2 from "../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import AuthorizedAppsStore2 from "../../modules/oauth2/AuthorizedAppsStore.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../actions/NotificationSettingsModalActionCreators.tsx";
import AuthorizedAppsActionCreatorsDefault from "../../modules/oauth2/AuthorizedAppsActionCreators.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import showUserProfileActionSheetDefault from "../../modules/user_profile/native/showUserProfileActionSheet.tsx";
import maybeFetchUserProfileDefault from "../../modules/user_profile/maybeFetchUserProfile.tsx";
import ReportModals from "../../modules/in_app_reports/ReportModals.tsx";
import NitroWheelIcon from "../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import RowButton2 from "../../design/components/TableRow/native/RowButton.native.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../modules/activities/native/EmbeddedActivitiesNativeManager.tsx";
import BellIcon from "../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import instant_invite_InstantInviteUtils from "../../modules/instant_invite/native/InstantInviteUtils.tsx";
import GroupPlusIcon from "../../design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx";
import RestrictionConfirmationConstants from "../../modules/relationships/native/RestrictionConfirmationConstants.tsx";
import PencilIcon from "../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import ChannelSettingsActionCreatorsDefault from "../../actions/ChannelSettingsActionCreators.tsx";
import openGroupDMAddMembers from "../../modules/group_dm/native/openGroupDMAddMembers.tsx";
import GroupDMConstants from "../../modules/group_dm/GroupDMConstants.tsx";
import showChatGDMUpsellActionSheetDefault from "../../modules/group_dm/native/showChatGDMUpsellActionSheet.tsx";
import channel_permissions_ChannelPermissionsUtils from "../../modules/channel_permissions/native/ChannelPermissionsUtils.tsx";
import MessageRequestConstants from "../../modules/message_request/MessageRequestConstants.tsx";
import AssetRegistryDefault from "../../../_runtime/12141_AssetRegistry.js";
import ChannelAccessInfoDefault from "../../modules/channel_permissions/native/components/ChannelAccessInfo.tsx";
import AssetRegistryDefault2 from "../../../_runtime/12276_AssetRegistry.js";
import UserSettingsAuthedAppDeleteWarningModalDefault from "../../modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx";
import openConjureProjectInBuilderDefault from "../../modules/conjure/projects/openConjureProjectInBuilder.tsx";
import PortalAccessibilityWorkaroundViewDefault from "../../modules/a11y/native/PortalAccessibilityWorkaroundView.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../modules/a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../modules/activities/EmbeddedActivitiesStore.tsx";
import ForumPostMessagesStore from "../../modules/forums/ForumPostMessagesStore.tsx";
import GuildSettingsStore from "../../modules/guild_settings/GuildSettingsStore.tsx";
import UserProfileStore from "../../modules/user_profile/UserProfileStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import GuildProgressConstants from "../../modules/guild_progress/GuildProgressConstants.tsx";
import Fragment_mod from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const openGroupDMAddMembersDefault = openGroupDMAddMembers;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, c3, dependencyMap, importDefault, onClick, onClick2, userId;

let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let closure_40;
let closure_41;
let closure_44;
let closure_45;
let closure_46;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
function MuteAppButton(channel) {
  let Icon;
  let WHITE;
  let closure_1;
  let obj3;
  let stringResult;
  channel = channel.channel;
  let stateFromStores;
  const user = channel.user;
  const tmp = closure_47();
  importDefault = tmp;
  let obj = channel(stateFromStores[48]);
  const items = [UserGuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(null, channel.id));
  let tmp6Result = null;
  if (user.bot) {
    let str = "destructive";
    const Button = tmp2(tmp3[75]).Button;
    if (stateFromStores) {
      str = "secondary";
    }
    let obj2 = {
      size: "sm",
      variant: str,
      text: stringResult,
      icon: closure_44(Icon, obj3),
      onPress() {
        let intl;
        let intl2;
        if (stateFromStores) {
          let obj = {
            guildId: null,
            channelId: channel.id,
            settings: { muted: false },
            label: NotificationSettingsUtils.NotificationLabels.Unmuted,
          };
          const updateChannelOverrideSettings =
            NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
          NotificationSettingsModalActionCreatorsDefault;
          const result = updateChannelOverrideSettings(obj);
          const obj4 = DesignSystemsNotificationComponentsExperiment;
          const designSystemsNotificationComponents = obj4.getDesignSystemsNotificationComponents("ChatBeginningRow");
          const tmp19 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents) {
            let obj2 = { text: intl2.string(intl10.t["/6kulz"]), icon: BellIcon.BellIcon };
            const openMana = tmp19.openMana;
            intl2 = intl10.intl;
            openMana("NOTIFICATIONS_UNMUTED", obj2);
          } else {
            const open = tmp19.open;
            const obj3 = {
              key: "NOTIFICATIONS_UNMUTED",
              content: intl.string(intl10.t["/6kulz"]),
              icon() {
                let Icon;
                let obj2;
                const obj = { style: closure_1_1.unmutedNotificationContainer, children: closure_2_44(Icon, obj2) };
                obj2 = {
                  source: closure_1(stateFromStores[85]),
                  color: closure_1(stateFromStores[28]).unsafe_rawColors.WHITE,
                  style: closure_1_1.unmutedNotification,
                };
                Icon = channel(stateFromStores[44]).Icon;
                return closure_2_44(closure_2_7, obj);
              },
            };
            intl = intl10.intl;
            open(obj3);
          }
        } else {
          const obj5 = { channel };
          const tmpResult2 = ActionSheetActionCreatorsDefault;
          tmpResult2.openLazy(asyncRequire(12282, dependencyMap.paths), "MessageNotificationChannelActionSheet", obj5);
        }
      },
    };
    let intl = tmp2(tmp3[32]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[32]).t;
    if (stateFromStores) {
      stringResult = string(t.YqAjXy);
    } else {
      stringResult = string(t.w4m945);
    }
    obj3 = {
      size: channel(stateFromStores[44]).Icon.Sizes.SMALL,
      source: importDefault(stateFromStores ? stateFromStores[84] : stateFromStores[85]),
      color: WHITE,
      style: tmp.appDMButtonIcon,
    };
    Icon = tmp2(tmp3[44]).Icon;
    WHITE = undefined;
    if (!stateFromStores) {
      WHITE = tmp8(tmp3[28]).unsafe_rawColors.WHITE;
    }
    tmp6Result = closure_44(Button, obj2);
  }
  return tmp6Result;
}
function ChatBeginningRowDM(channel) {
  let Avatar;
  let authorizedAppToken;
  let authorizedAppsFetchState;
  let closure_2;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items6;
  let items8;
  let obj10;
  let obj16;
  let obj6;
  let obj8;
  let relationshipType;
  let tmp27;
  channel = channel.channel;
  const user = channel.user;
  authorizedAppsFetchState = undefined;
  let userTag;
  const showingSpamBanner = channel.showingSpamBanner;
  let tmp = closure_47();
  dependencyMap = tmp;
  const analyticsLocations = user(6664)().analyticsLocations;
  let id;
  const tmp4 = user(12269);
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = closure_30;
  }
  let tmp4Result = tmp4(id);
  id = tmp4Result;
  let obj = channel(504);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    id = undefined;
    const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
    if (id != null) {
      id = id.id;
    }
    const obj2 = {
      authorizedAppToken: getNewestTokenForApplication(id),
      authorizedAppsFetchState: AuthorizedAppsStore.getFetchState(),
    };
    return obj2;
  });
  ({ authorizedAppToken, authorizedAppsFetchState } = stateFromStoresObject);
  let obj2 = channel(504);
  let items1 = [UserProfileStore];
  let items2 = [user];
  let stateFromStores = obj2.useStateFromStores(
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
  let id1;
  const isSystemDMResult = channel.isSystemDM();
  const tmp2Result = user(12283);
  if (tmp4Result != null) {
    id1 = tmp4Result.id;
  }
  const tmp2ResultResult = tmp2Result(id1, user.bot);
  const project = tmp2ResultResult.project;
  let items3 = [user, channel];
  const isOwned = tmp2ResultResult.isOwned;
  const effect = authorizedAppsFetchState.useEffect(() => {
    let getAvatarURL;
    let guild_id;
    ({ id, getAvatarURL } = user);
    const tmp = maybeFetchUserProfileDefault;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp(id, getAvatarURL(guild_id, 80), { withMutualGuilds: true, dispatchWait: true });
  }, items3);
  let bot;
  const useEffect = authorizedAppsFetchState.useEffect;
  if (user != null) {
    bot = user.bot;
  }
  const items4 = [bot, authorizedAppToken, authorizedAppsFetchState];
  const effect1 = useEffect(() => {
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    if (bot) {
      bot = authorizedAppsFetchState === FetchState.NOT_FETCHED;
    }
    if (bot) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items4);
  if (null == user) {
    return null;
  } else {
    const tmp2Result3 = user(4728);
    userTag = tmp2Result3.getUserTag(user, { decoration: "never", identifiable: "always" });
    const tmp2Result4 = user(4728);
    const name = tmp2Result4.getName(user);
    let intl6 = tmp7(1126).intl;
    let stringResult = intl6.string(tmp7(1126).t.Rzvnig);
    if (!isSystemDMResult) {
      let intl = tmp7(1126).intl;
      let obj3 = { username: name };
      stringResult = intl.formatToPlainString(tmp7(1126).t.Q56TRC, obj3);
    }
    function handleCopyUserTag() {
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }
    let obj4 = { channel, user, showingSpamBanner };
    const tmp20 = closure_44(closure_56, obj4);
    let obj5 = {
      accessibilityRole: "button",
      onPress: function handleOpenProfile() {
        const obj = { userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      },
      accessibilityLabel: intl2.string(channel(1126).t.iXAna6),
      children: closure_44(Avatar, obj6),
    };
    const PressableOpacity = tmp7(5916).PressableOpacity;
    intl2 = tmp7(1126).intl;
    obj6 = {
      style: tmp.avatar,
      user,
      guildId: channel.guild_id,
      size: channel(1188).AvatarSizes.XXLARGE,
      avatarDecoration: user.avatarDecoration,
    };
    Avatar = tmp7(1188).Avatar;
    const items5 = [closure_44(PressableOpacity, obj5), , , , , ,];
    let obj7 = {
      accessibilityRole: "button",
      onPress: handleCopyUserTag,
      accessibilityHint: intl3.string(channel(1126).t.y5MwJy),
      children: closure_44(channel(4892).Text, obj8),
    };
    const PressableOpacity2 = tmp7(5916).PressableOpacity;
    intl3 = tmp7(1126).intl;
    obj8 = { variant: "heading-xxl/extrabold", color: "mobile-text-heading-primary", children: name };
    items5[1] = closure_44(PressableOpacity2, obj7);
    let tmp18Result = null;
    if (!user.isProvisional) {
      let obj9 = {
        accessibilityRole: "button",
        onPress: handleCopyUserTag,
        accessibilityHint: intl4.string(channel(1126).t.y5MwJy),
        children: closure_44(channel(4892).Text, obj10),
      };
      const PressableOpacity3 = tmp7(5916).PressableOpacity;
      intl4 = tmp7(1126).intl;
      obj10 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
      tmp18Result = closure_44(PressableOpacity3, obj9);
    }
    items5[2] = tmp18Result;
    let obj11 = {
      style: tmp.dmBeginningMessage,
      variant: "text-md/medium",
      color: "text-default",
      children: stringResult,
    };
    items5[3] = closure_44(channel(4892).Text, obj11);
    let tmp18Result3 = null;
    if (user.isProvisional) {
      let obj12 = { style: tmp.provisionalAccountExplainer, userId: user.id, iconSize: 14 };
      tmp18Result3 = closure_44(tmp7(12308).ChatProvisionalAccountExplainerCard, obj12);
    }
    items5[4] = tmp18Result3;
    let tmp21Result;
    if (null != stateFromStores) {
      if (stateFromStores.length >= 1) {
        let num2 = 5;
        const slice = stateFromStores.slice;
        if (stateFromStores.length > 5) {
          num2 = 4;
        }
        function handleOpenMutualGuilds() {
          if (null != user) {
            let obj = ActionSheetActionCreatorsDefault;
            let obj2 = {
              user: tmp,
              onPressMutualGuild(arg0) {
                const obj = channel(closure_1_2[101]);
                const result = obj.trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
                const obj2 = channel(closure_1_2[102]);
                obj2.transitionToGuild(arg0);
                const obj3 = user(closure_1_2[91]);
                obj3.hideActionSheet();
                const obj4 = user(closure_1_2[103]);
                obj4.popWithKey(closure_1_42);
              },
            };
            obj.openLazy(asyncRequire(12284, dependencyMap.paths), "MutualGuildsActionSheet", obj2);
          }
        }
        const substr = slice(0, num2);
        let obj13 = {
          accessibilityRole: "button",
          onPress: handleOpenMutualGuilds,
          style: tmp.mutualGuildsContainer,
          children: items6,
        };
        const PressableOpacity4 = tmp7(5916).PressableOpacity;
        let obj14 = {
          size: channel(5978).GuildIconSizes.SMALL,
          names: substr.map((guild) => guild.guild.name),
          totalCount: stateFromStores.length,
          children: substr.map((guild) => {
            guild = guild.guild;
            const obj = { guild, size: channel(closure_2[105]).GuildIconSizes.SMALL };
            const tmp = user(closure_2[105]);
            return closure_1_44(tmp, obj, guild.id);
          }),
        };
        const GuildIconPile = tmp7(12299).GuildIconPile;
        items6 = [closure_44(GuildIconPile, obj14)];
        let obj15 = {
          style: tmp.mutualGuildsLabel,
          variant: "text-sm/medium",
          color: "text-default",
          children: intl5.format(channel(1126).t.eE3oep, obj16),
        };
        let Text = tmp7(4892).Text;
        intl5 = tmp7(1126).intl;
        obj16 = { count: stateFromStores.length };
        items6[1] = closure_44(Text, obj15);
        tmp21Result = closure_46(PressableOpacity4, obj13);
      }
    }
    items5[5] = tmp21Result;
    const obj17 = { style: tmp.dmButtonRow, children: tmp27 };
    tmp27 = null;
    if (!user.isNonUserBot()) {
      let tmp21Result4;
      if (user.bot) {
        let tmp21Result3 = null;
        if (null != tmp4Result) {
          if (null != authorizedAppToken) {
            let tmp18Result4;
            const obj18 = { channel, user };
            const items7 = [closure_44(MuteAppButton, obj18)];
            if (null != project) {
              const obj19 = { project };
              tmp18Result4 = closure_44(closure_58, obj19);
            } else {
              tmp18Result4 = null;
              if (null != authorizedAppToken) {
                tmp18Result4 = null;
                if (false === isOwned) {
                  const obj20 = { user, application: tmp4Result, channel, oauth2Token: authorizedAppToken };
                  tmp18Result4 = closure_44(closure_57, obj20);
                }
              }
            }
            const obj21 = { children: items7 };
            items7[1] = tmp18Result4;
            tmp21Result3 = closure_46(closure_45, obj21);
          } else {
            tmp21Result3 = null;
          }
        }
        const obj22 = { children: items8 };
        items8 = [tmp21Result3, tmp20];
        tmp21Result4 = closure_46(closure_45, obj22);
      } else {
        const obj23 = { reportButton: tmp20 };
        tmp21Result4 = closure_44(function RelationshipButtons(reportButton) {
          let format;
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let intl6;
          let intl7;
          let intl8;
          let intl9;
          let items1;
          let items2;
          let obj10;
          let obj5;
          let uIomXw;
          reportButton = reportButton.reportButton;
          function handleBlock() {
            const obj = user(paths[91]);
            const obj2 = { userId: user.id, channelId: id.id };
            obj.openLazy(channel(paths[93])(paths[109], paths.paths), closure_2_43, obj2);
          }
          let obj = get_initialized;
          const items = [RelationshipStore];
          const stateFromStores = obj.useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
          let obj2 = { text: intl.string(intl10.t.l4Emac), size: "sm", variant: "secondary", onPress: handleBlock };
          const Button = components_Button_Button.Button;
          intl = intl10.intl;
          if (stateFromStores === constants.PENDING_INCOMING) {
            let obj3 = { style: paths.pendingIncoming, children: items1 };
            const obj4 = { variant: "text-sm/normal", color: "text-default", children: format(uIomXw, obj5) };
            const Text = Text_Text.Text;
            const intl5 = intl10.intl;
            format = intl5.format;
            obj5 = { username: obj10.getName(user) };
            uIomXw = intl10.t.uIomXw;
            obj10 = UserUtilsDefault;
            items1 = [numOpens(Text, obj4)];
            const obj6 = { style: paths.pendingIncomingButtons, children: items2 };
            const obj7 = {
              text: intl6.string(intl10.t["+WbSn5"]),
              size: "sm",
              variant: "active",
              onPress: function handleAcceptFriend() {
                const obj = user(paths[107]);
                const obj2 = { userId: user.id, location: constants.DM_CHANNEL };
                const result = obj.maybeConfirmFriendRequestAccept(obj2);
              },
            };
            const Button5 = components_Button_Button.Button;
            intl6 = intl10.intl;
            items2 = [numOpens(Button5, obj7), , ,];
            const obj8 = {
              text: intl7.string(intl10.t.rQSndv),
              size: "sm",
              variant: "secondary",
              onPress: function handleIgnoreFriendRequest() {
                const obj = user(paths[106]);
                const obj2 = { location: constants.DM_CHANNEL };
                obj.cancelFriendRequest(user.id, obj2);
              },
            };
            const Button6 = components_Button_Button.Button;
            intl7 = intl10.intl;
            items2[1] = numOpens(Button6, obj8);
            const obj9 = {
              text: intl8.string(intl10.t.l4Emac),
              size: "sm",
              variant: "secondary",
              onPress: handleBlock,
            };
            const Button7 = components_Button_Button.Button;
            intl8 = intl10.intl;
            items2[2] = numOpens(Button7, obj9);
            items2[3] = reportButton;
            items1[1] = closure_46(metroImportDefault, obj6);
            return closure_46(metroImportDefault, obj3);
          } else {
            let tmp4Result2;
            if (constants.NONE === stateFromStores) {
              let bot;
              if (user != null) {
                bot = user.bot;
              }
              let tmp4Result = null;
              if (!bot) {
                function handleAddFriend() {
                  let obj3;
                  const obj2 = { userId: user.id, context: obj3 };
                  obj3 = { location: constants.DM_CHANNEL };
                  const obj = user(paths[106]);
                  obj.addRelationship(obj2);
                }
                const obj11 = {
                  text: intl4.string(intl10.t["PMsq/b"]),
                  size: "sm",
                  variant: "active",
                  onPress: handleAddFriend,
                };
                const Button4 = components_Button_Button.Button;
                intl4 = intl10.intl;
                tmp4Result = numOpens(Button4, obj11);
              }
              tmp4Result2 = tmp4Result;
            } else if (constants.FRIEND === stateFromStores) {
              function handleRemoveFriend() {
                let obj2;
                let obj = {
                  userDisplayName: obj2.getName(closure_1_1),
                  onConfirm() {
                    const obj = user(paths[106]);
                    const obj2 = { location: constants.DM_CHANNEL };
                    obj.removeFriend(id.id, obj2);
                  },
                };
                const confirmRemoveFriend = channel(paths[108]).confirmRemoveFriend;
                channel(paths[108]);
                obj2 = user(paths[49]);
                confirmRemoveFriend(obj);
              }
              const obj12 = {
                text: intl3.string(intl10.t.cvSt1J),
                size: "sm",
                variant: "secondary",
                onPress: handleRemoveFriend,
              };
              const Button3 = components_Button_Button.Button;
              intl3 = intl10.intl;
              tmp4Result2 = numOpens(Button3, obj12);
            } else if (constants.BLOCKED === stateFromStores) {
              function handleUnblock() {
                const obj = user(paths[106]);
                const obj2 = { location: constants.DM_CHANNEL };
                obj.unblockUser(user.id, obj2);
              }
              const obj13 = {
                text: intl2.string(intl10.t.XyHpKH),
                size: "sm",
                variant: "secondary",
                onPress: handleUnblock,
              };
              const Button2 = components_Button_Button.Button;
              intl2 = intl10.intl;
              tmp4Result2 = numOpens(Button2, obj13);
            } else {
              tmp4Result2 = null;
              if (constants.PENDING_OUTGOING === stateFromStores) {
                const obj14 = {
                  text: intl9.string(intl10.t.xMH6vD),
                  size: "sm",
                  variant: "active",
                  disabled: true,
                  onPress: "a",
                };
                const Button8 = components_Button_Button.Button;
                intl9 = intl10.intl;
                tmp4Result2 = numOpens(Button8, obj14);
              }
            }
            const items3 = [tmp4Result2, ,];
            let tmp11 = null;
            if (stateFromStores !== constants.BLOCKED) {
              tmp11 = tmp5;
            }
            const obj15 = { children: items3 };
            items3[1] = tmp11;
            items3[2] = reportButton;
            return closure_46(closure_45, obj15);
          }
        }, obj23);
      }
      tmp27 = tmp21Result4;
    }
    const obj24 = { children: items5 };
    items5[6] = closure_44(closure_7, obj17);
    return closure_46(closure_45, obj24);
  }
}
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const FetchState = AuthorizedAppsStore2.FetchState;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const isGuildOwner = GuildRecord.isGuildOwner;
({
  AnalyticEvents: closure_25,
  AnalyticsPages: closure_26,
  AnalyticsSections: closure_27,
  ChannelSettingsSections: closure_28,
  ChannelTypes: closure_29,
  EMPTY_STRING_SNOWFLAKE_ID: closure_30,
  GuildSettingsSections: closure_31,
  HelpdeskArticles: closure_32,
  InstantInviteSources: closure_33,
  Permissions: closure_34,
  RelationshipTypes: closure_35,
  UPLOAD_MEDIUM_SIZE: closure_36,
  WELCOME_OLD_GUILD_AGE_THRESHOLD: closure_37,
} = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ AnalyticsActions: closure_40, AnalyticsSetupTypes: closure_41 } = GuildProgressConstants);
let closure_42 = MessageRequestConstants.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
let closure_43 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
let Fragment = Fragment_mod;
({ jsx: closure_44, Fragment: closure_45, jsxs: closure_46 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { position: "absolute", width: "100%" },
  contentWrapper: { paddingVertical: 8, paddingHorizontal: 12 },
  title: { marginTop: 16 },
  subtitle: { marginBottom: 16, lineHeight: 20 },
  gdmInviteFriends: obj2,
  gdmShareInviteLink: obj3,
  gdmShareInviteLinkNoRelationships: { marginTop: 16 },
  ctaLabel: { marginLeft: 8 },
  ctaContainer: { flexDirection: "row", flexWrap: "wrap" },
  ctaButton: { flexDirection: "row", alignItems: "center" },
  ctaAddRoles: { paddingRight: 24 },
  avatar: { marginBottom: 16 },
  avatarRedesign: { marginBottom: 16 },
  centerHeader: { paddingHorizontal: 8, alignItems: "center" },
  gdmText: { textAlign: "center" },
  dmTitle: { marginBottom: 8, textAlign: "center" },
  dmBeginningMessage: { marginTop: 8 },
  provisionalAccountExplainer: { marginTop: 12 },
  mutualGuildsLabel: { marginTop: 8, marginLeft: 8, height: 26 },
  mutualGuildsContainer: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  iconContainer: size,
  threadDetails: { lineHeight: 20 },
  threadCreatorRoleDot: { paddingRight: 4, paddingTop: 2 },
  tagContainer: { marginTop: 8, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: 4 },
  unmutedNotificationContainer: size1,
  unmutedNotification: { width: 16, height: 16 },
  dmButtonRow: { marginTop: 16, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 8 },
  pendingIncoming: { flexDirection: "column", gap: 8 },
  pendingIncomingButtons: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  appDMButtonIcon: { marginRight: 2 },
  formCtaIcon: { width: 32, height: 32 },
};
obj2 = { borderRadius: nativeDefault.radii.lg, marginTop: 16, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg, marginTop: 8, width: "100%" };
size = {
  width: 64,
  height: 64,
  borderRadius: nativeDefault.radii.xxl,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  justifyContent: "center",
  alignItems: "center",
};
size1 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
  height: 24,
  width: 24,
  padding: 4,
  alignContent: "center",
};
let closure_47 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_48 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isPrivate) => {
      let isForumPost;
      let obj = isPrivate(isForumPost[30]);
      const cResult = obj.c(22);
      const tmp = isPrivate;
      isPrivate = isPrivate.isPrivate;
      const isThread = isPrivate.isThread;
      const tmp2 = isForumPost;
      isForumPost = isPrivate.isForumPost;
      const channelType = isPrivate.channelType;
      const tmp4 = closure_47();
      if (cResult[0] === channelType) {
        if (cResult[1] === isForumPost) {
          if (cResult[2] === isPrivate) {
            let tmp5;
            if (cResult[3] === isThread) {
              tmp5 = cResult[4];
            }
            if (cResult[5] === tmp5) {
              let tmp6;
              let tmp7;
              let str;
              let str2;
              let tmp8;
              let tmp9;
              if (cResult[6] === tmp4.iconContainer) {
                tmp6 = cResult[7];
                tmp7 = cResult[8];
                str = cResult[9];
                str2 = cResult[10];
                tmp8 = cResult[11];
                tmp9 = cResult[12];
              }
              if (cResult[13] === tmp6) {
                if (cResult[14] === str) {
                  if (cResult[15] === str2) {
                    let tmp13;
                    if (cResult[16] === tmp8) {
                      tmp13 = cResult[17];
                    }
                    if (cResult[18] === tmp7) {
                      if (cResult[19] === tmp9) {
                        let tmp16;
                        if (cResult[20] === tmp13) {
                          tmp16 = cResult[21];
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
            const label = tmp5Result.label;
            const intl = tmp(tmp2[32]).intl;
            const stringResult = intl.string(label);
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
      const fn = function n() {
        let tmp7;
        if (isForumPost) {
          tmp7 = { IconComponent: ChatIcon.ChatIcon, label: intl10.t.Y4REmB };
          const obj2 = { IconComponent: ChatIcon.ChatIcon, label: intl10.t.Y4REmB };
        } else if (isThread) {
          tmp7 = { IconComponent: ThreadIcon.ThreadIcon, label: intl10.t["7Xm5QI"] };
          const obj3 = { IconComponent: ThreadIcon.ThreadIcon, label: intl10.t["7Xm5QI"] };
        } else if (channelType === constants.GUILD_APP) {
          let AppsIcon;
          if (isPrivate) {
            AppsIcon = AppsLockIcon.AppsLockIcon;
          } else {
            AppsIcon = AppsIcon2.AppsIcon;
          }
          tmp7 = { IconComponent: AppsIcon, label: intl10.t.ZkcrC2 };
          const obj = { IconComponent: AppsIcon, label: intl10.t.ZkcrC2 };
        } else {
          const obj4 = { IconComponent: null, label: null };
          if (isPrivate) {
            obj4.IconComponent = TextLockIcon.TextLockIcon;
            obj4.label = intl10.t.GK18KJ;
            tmp7 = obj4;
          } else {
            obj4.IconComponent = TextIcon.TextIcon;
            obj4.label = intl10.t.GK18KJ;
            tmp7 = obj4;
          }
        }
        return tmp7;
      };
      cResult[0] = channelType;
      cResult[1] = isForumPost;
      cResult[2] = isPrivate;
      cResult[3] = isThread;
      cResult[4] = fn;
      tmp5 = fn;
    }
  : (arg0) => {
      let IconComponent;
      let channelType;
      let intl;
      let isForumPost;
      let isNSFW;
      let isPrivate;
      let isThread;
      let label;
      let obj6;
      let tmp4;
      let tmp5;
      ({ isPrivate, isNSFW } = arg0);
      ({ isThread, isForumPost, channelType } = arg0);
      const tmp = closure_47();
      if (isForumPost) {
        tmp4 = require;
        tmp5 = { IconComponent: ChatIcon.ChatIcon, label: intl10.t.Y4REmB };
        const obj2 = { IconComponent: ChatIcon.ChatIcon, label: intl10.t.Y4REmB };
      } else if (isThread) {
        tmp4 = require;
        tmp5 = { IconComponent: ThreadIcon.ThreadIcon, label: intl10.t["7Xm5QI"] };
        const obj3 = { IconComponent: ThreadIcon.ThreadIcon, label: intl10.t["7Xm5QI"] };
      } else if (channelType === constants4.GUILD_APP) {
        let AppsIcon;
        let tmp9;
        if (isPrivate) {
          AppsIcon = AppsLockIcon.AppsLockIcon;
          tmp9 = require;
        } else {
          AppsIcon = AppsIcon2.AppsIcon;
          tmp9 = require;
        }
        tmp4 = tmp9;
        tmp5 = { IconComponent: AppsIcon, label: tmp9(1126).t.ZkcrC2 };
        const obj = { IconComponent: AppsIcon, label: tmp9(1126).t.ZkcrC2 };
      } else {
        const obj4 = { IconComponent: null, label: null };
        if (isPrivate) {
          obj4.IconComponent = TextLockIcon.TextLockIcon;
          obj4.label = intl10.t.GK18KJ;
          tmp4 = require;
          tmp5 = obj4;
        } else {
          obj4.IconComponent = TextIcon.TextIcon;
          obj4.label = intl10.t.GK18KJ;
          tmp4 = require;
          tmp5 = obj4;
        }
      }
      const obj5 = { style: tmp.iconContainer, children: numOpens(IconComponent, obj6) };
      obj6 = { size: "lg", color: "icon-strong", accessibilityLabel: intl.string(label) };
      ({ IconComponent, label } = tmp5);
      intl = tmp4(1126).intl;
      return numOpens(metroImportDefault, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_49 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelType) => {
      let fn;
      let isForumPost;
      let isGameInvitesPost;
      let isNSFW;
      let isPrivate;
      let isThread;
      let items;
      let subtitle;
      let subtitleLink;
      let title;
      let obj = subtitleLink(576);
      const cResult = obj.c(17);
      ({ title, subtitle, isPrivate, isThread, isNSFW, isForumPost, isGameInvitesPost, subtitleLink } = channelType);
      channelType = channelType.channelType;
      const tmp4 = closure_47();
      const obj2 = subtitleLink(5777);
      const tmp5 = null != subtitleLink && obj2.useIsScreenReaderEnabled();
      if (cResult[0] === channelType) {
        if (cResult[1] === isForumPost) {
          if (cResult[2] === isGameInvitesPost) {
            if (cResult[3] === isNSFW) {
              if (cResult[4] === isPrivate) {
                if (cResult[5] === isThread) {
                  if (cResult[6] === tmp4) {
                    let tmp6;
                    if (cResult[7] === title) {
                      tmp6 = cResult[8];
                    }
                    if (cResult[9] === tmp5) {
                      if (cResult[10] === tmp4) {
                        if (cResult[11] === subtitle) {
                          let tmp12;
                          if (cResult[12] === subtitleLink) {
                            tmp12 = cResult[13];
                          }
                          if (cResult[14] === tmp6) {
                            let tmp15;
                            if (cResult[15] === tmp12) {
                              tmp15 = cResult[16];
                            }
                            return tmp15;
                          }
                          const obj3 = { children: items };
                          items = [tmp6, tmp12];
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
                      const Text2 = subtitleLink(4892).Text;
                      if (tmp5) {
                        str = "link";
                      }
                      const obj4 = {
                        accessibilityRole: str,
                        onPress: fn,
                        style: tmp4.subtitle,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: subtitle,
                      };
                      fn = undefined;
                      if (tmp5) {
                        fn = () => {
                          const obj = LinkingDefault;
                          return obj.openURL(subtitleLink);
                        };
                      }
                      tmp14Result = closure_44(Text2, obj4);
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
      if (tmp8Result) {
        const obj5 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
        const items1 = [closure_44(closure_48, obj5)];
        const items2 = [tmp4.title];
        let num = 8;
        const Text = subtitleLink(4892).Text;
        if (isForumPost) {
          num = 0;
        }
        const obj6 = { children: items1 };
        const obj7 = {
          style: items2,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: title,
        };
        const obj8 = { marginBottom: num };
        items2[1] = obj8;
        items1[1] = closure_44(Text, obj7);
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
    }
  : (arg0) => {
      let channelType;
      let fn;
      let isForumPost;
      let isGameInvitesPost;
      let isNSFW;
      let isPrivate;
      let isThread;
      let subtitle;
      let subtitleLink;
      let title;
      ({ subtitle, isForumPost, isGameInvitesPost, subtitleLink } = arg0);
      ({ title, isPrivate, isThread, isNSFW, channelType } = arg0);
      const tmp = closure_47();
      let obj = subtitleLink(5777);
      const tmp4 = null != subtitleLink && obj.useIsScreenReaderEnabled();
      let tmp5Result = !isGameInvitesPost;
      if (tmp5Result) {
        const obj2 = { isNSFW, isPrivate, isThread, isForumPost, channelType };
        const items = [closure_44(closure_48, obj2)];
        const items1 = [tmp.title];
        let num = 8;
        const Text = subtitleLink(4892).Text;
        if (isForumPost) {
          num = 0;
        }
        const obj3 = { children: items };
        const obj4 = {
          style: items1,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: title,
        };
        const obj5 = { marginBottom: num };
        items1[1] = obj5;
        items[1] = closure_44(Text, obj4);
        tmp5Result = closure_46(closure_45, obj3);
      }
      const children = [tmp5Result];
      let tmp11Result = null != subtitle;
      if (tmp11Result) {
        let str;
        const Text2 = subtitleLink(4892).Text;
        if (tmp4) {
          str = "link";
        }
        const obj6 = {
          accessibilityRole: str,
          onPress: fn,
          style: tmp.subtitle,
          variant: "text-md/medium",
          color: "text-default",
          children: subtitle,
        };
        fn = undefined;
        if (tmp4) {
          fn = () => {
            const obj = LinkingDefault;
            return obj.openURL(subtitleLink);
          };
        }
        tmp11Result = closure_44(Text2, obj6);
      }
      children[1] = tmp11Result;
      return closure_46(closure_45, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_50 = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      let canEdit;
      let canManageRoles;
      let channel;
      let intl;
      let intl2;
      let isPrivate;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj = channel(576);
      const cResult = obj.c(20);
      ({ canManageRoles, canEdit, isPrivate, channel } = theme);
      theme = theme.theme;
      const tmp4 = closure_47();
      let obj2 = channel(4586);
      const token = obj2.useToken(nativeDefault.colors.TEXT_LINK, theme);
      if (cResult[0] === canManageRoles) {
        if (cResult[1] === channel) {
          if (cResult[2] === token) {
            if (cResult[3] === isPrivate) {
              if (cResult[4] === tmp4.ctaAddRoles) {
                if (cResult[5] === tmp4.ctaButton) {
                  if (cResult[6] === tmp4.ctaLabel) {
                    let tmp7;
                    if (cResult[7] === tmp4.subtitle) {
                      tmp7 = cResult[8];
                    }
                    if (cResult[9] === canEdit) {
                      if (cResult[10] === channel) {
                        if (cResult[11] === token) {
                          if (cResult[12] === tmp4.ctaButton) {
                            if (cResult[13] === tmp4.ctaLabel) {
                              let tmp11;
                              if (cResult[14] === tmp4.subtitle) {
                                tmp11 = cResult[15];
                              }
                              if (cResult[16] === tmp4.ctaContainer) {
                                if (cResult[17] === tmp7) {
                                  let tmp15;
                                  if (cResult[18] === tmp11) {
                                    tmp15 = cResult[19];
                                  }
                                  return tmp15;
                                }
                              }
                              const obj3 = { style: tmp4.ctaContainer, children: items };
                              items = [tmp7, tmp11];
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
                    if (tmp12) {
                      const obj4 = {
                        accessibilityRole: "button",
                        onPress() {
                          const obj = ChannelSettingsActionCreatorsDefault;
                          obj.setSection(constants.OVERVIEW);
                          const obj2 = ChannelSettingsActionCreatorsDefault;
                          obj2.open(channel.id);
                        },
                        style: items1,
                        children: items2,
                      };
                      items1 = [,];
                      ({ ctaButton: arr4[0], subtitle: arr4[1] } = tmp4);
                      const PressableOpacity2 = channel(5916).PressableOpacity;
                      const obj5 = { size: "xs", color: token };
                      items2 = [closure_44(channel(10071).PencilIcon, obj5)];
                      const obj6 = {
                        style: items3,
                        variant: "text-sm/medium",
                        color: "text-link",
                        children: intl2.string(channel(1126).t.GE1Tlo),
                      };
                      items3 = [tmp4.ctaLabel];
                      const Text2 = channel(4892).Text;
                      intl2 = channel(1126).intl;
                      items2[1] = closure_44(Text2, obj6);
                      tmp12 = closure_46(PressableOpacity2, obj4);
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
      let tmp8 = isPrivate && canManageRoles;
      if (tmp8) {
        const obj7 = {
          accessibilityRole: "button",
          onPress() {
            const obj = channel_permissions_ChannelPermissionsUtils;
            return obj.openAddMembersActionSheet(channel);
          },
          style: items4,
          children: items5,
        };
        items4 = [,];
        ({ ctaButton: arr[0], subtitle: arr[1] } = tmp4);
        const PressableOpacity = channel(5916).PressableOpacity;
        const obj8 = { source: AssetRegistryDefault, size: channel(1188).IconSizes.REFRESH_SMALL_16, color: token };
        const Icon = channel(1188).Icon;
        items5 = [closure_44(Icon, obj8)];
        const obj9 = {
          style: items6,
          variant: "text-sm/medium",
          color: "text-link",
          children: intl.string(channel(1126).t.dMJ3Y6),
        };
        items6 = [,];
        ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp4);
        const Text = channel(4892).Text;
        intl = channel(1126).intl;
        items5[1] = closure_44(Text, obj9);
        tmp8 = closure_46(PressableOpacity, obj7);
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
    }
  : (arg0) => {
      let canEdit;
      let canManageRoles;
      let id;
      let intl;
      let intl2;
      let isPrivate;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let require;
      let theme;
      ({ canEdit, isPrivate, channel: require } = arg0);
      ({ canManageRoles, theme } = arg0);
      const tmp = closure_47();
      let obj = useToken;
      const token = obj.useToken(nativeDefault.colors.TEXT_LINK, theme);
      let obj2 = { style: tmp.ctaContainer, children: items3 };
      if (isPrivate) {
        isPrivate = canManageRoles;
      }
      if (isPrivate) {
        const obj3 = {
          accessibilityRole: "button",
          onPress() {
            const obj = channel_permissions_ChannelPermissionsUtils;
            return obj.openAddMembersActionSheet(require);
          },
          style: items,
          children: items1,
        };
        items = [,];
        ({ ctaButton: arr[0], subtitle: arr[1] } = tmp);
        const PressableOpacity = Pressables.PressableOpacity;
        const obj4 = { source: AssetRegistryDefault, size: native.IconSizes.REFRESH_SMALL_16, color: token };
        const Icon = native.Icon;
        items1 = [closure_44(Icon, obj4)];
        const obj5 = {
          style: items2,
          variant: "text-sm/medium",
          color: "text-link",
          children: intl.string(intl10.t.dMJ3Y6),
        };
        items2 = [,];
        ({ ctaLabel: arr3[0], ctaAddRoles: arr3[1] } = tmp);
        const Text = Text_Text.Text;
        intl = intl10.intl;
        items1[1] = closure_44(Text, obj5);
        isPrivate = closure_46(PressableOpacity, obj3);
      }
      items3 = [isPrivate];
      if (canEdit) {
        const obj6 = {
          accessibilityRole: "button",
          onPress() {
            const obj = ChannelSettingsActionCreatorsDefault;
            obj.setSection(constants.OVERVIEW);
            const obj2 = ChannelSettingsActionCreatorsDefault;
            obj2.open(require.id);
          },
          style: items4,
          children: items5,
        };
        items4 = [,];
        ({ ctaButton: arr5[0], subtitle: arr5[1] } = tmp);
        const PressableOpacity2 = Pressables.PressableOpacity;
        const obj7 = { size: "xs", color: token };
        items5 = [closure_44(PencilIcon.PencilIcon, obj7)];
        const obj8 = {
          style: items6,
          variant: "text-sm/medium",
          color: "text-link",
          children: intl2.string(intl10.t.GE1Tlo),
        };
        items6 = [tmp.ctaLabel];
        const Text2 = Text_Text.Text;
        intl2 = intl10.intl;
        items5[1] = closure_44(Text2, obj8);
        canEdit = closure_46(PressableOpacity2, obj6);
      }
      items3[1] = canEdit;
      return closure_46(closure_7, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_51 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let items3;
      let roleStyle;
      let tmp7;
      let tmp9;
      const tmp = userId;
      const obj = userId(576);
      const cResult = obj.c(28);
      userId = userId.userId;
      const guildId = userId.guildId;
      const tmp4 = closure_47();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function o() {
          return UserStore.getUser(userId);
        };
        cResult[1] = userId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === guildId) {
        let tmp11;
        let tmp14;
        let tmp13;
        if (cResult[5] === userId) {
          tmp11 = cResult[6];
        }
        const tmpResult5 = tmp(504);
        const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, tmp11);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [AccessibilityStore];
          const fn3 = function y() {
            return roleStyle.roleStyle;
          };
          cResult[7] = items2;
          cResult[8] = fn3;
          tmp14 = fn3;
          tmp13 = items2;
        } else {
          tmp13 = cResult[7];
          tmp14 = cResult[8];
        }
        const tmpResult6 = tmp(504);
        const stateFromStores2 = tmpResult6.useStateFromStores(tmp13, tmp14);
        let nick;
        const tmp17 = cResult[9];
        if (stateFromStores1 != null) {
          nick = stateFromStores1.nick;
        }
        if (tmp17 === nick) {
          let tmp20;
          if (cResult[10] === stateFromStores) {
            tmp20 = cResult[11];
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
          const tmpResult7 = tmp(7631);
          const processColorStringsArray = tmpResult7.useProcessColorStringsArray(colorStrings);
          let id;
          const useIsRoleStyleAndRoleColorsEligibleForERC = tmp(7631).useIsRoleStyleAndRoleColorsEligibleForERC;
          const tmpResult8 = tmp(7631);
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          if ("username" === stateFromStores2) {
            let tmp45;
            if (cResult[12] !== colorString) {
              let tmp46;
              if (null != colorString) {
                tmp46 = { color: colorString };
                const obj2 = { color: colorString };
              }
              cResult[12] = colorString;
              cResult[13] = tmp46;
              tmp45 = tmp46;
            } else {
              tmp45 = cResult[13];
            }
            let tmp47;
            if (tmp34) {
              tmp47 = processColorStringsArray;
            }
            if (cResult[14] === tmp45) {
              if (cResult[15] === tmp20) {
                let tmp48;
                if (cResult[16] === tmp47) {
                  tmp48 = cResult[17];
                }
                return tmp48;
              }
            }
            const obj3 = {
              gradientColors: tmp47,
              style: tmp45,
              variant: "text-md/semibold",
              color: "text-default",
              children: tmp20,
            };
            const tmp50 = closure_44(tmp(4892).Text, obj3);
            cResult[14] = tmp45;
            cResult[15] = tmp20;
            cResult[16] = tmp47;
            cResult[17] = tmp50;
            tmp48 = tmp50;
          } else {
            if (cResult[18] === colorString) {
              if (cResult[19] === colorStrings) {
                if (cResult[20] === stateFromStores2) {
                  let tmp35;
                  let tmp38;
                  if (cResult[21] === tmp4) {
                    tmp35 = cResult[22];
                  }
                  if (cResult[23] !== tmp20) {
                    const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp20 };
                    const tmp40 = closure_44(tmp(4892).Text, obj4);
                    cResult[23] = tmp20;
                    cResult[24] = tmp40;
                    tmp38 = tmp40;
                  } else {
                    tmp38 = cResult[24];
                  }
                  if (cResult[25] === tmp35) {
                    let tmp41;
                    if (cResult[26] === tmp38) {
                      tmp41 = cResult[27];
                    }
                    return tmp41;
                  }
                  const obj6 = { children: items3 };
                  items3 = [tmp35, tmp38];
                  const tmp44 = closure_46(closure_45, obj6);
                  cResult[25] = tmp35;
                  cResult[26] = tmp38;
                  cResult[27] = tmp44;
                  tmp41 = tmp44;
                }
              }
            }
            let tmp36 = "dot" === stateFromStores2 && null != colorString;
            if (tmp36) {
              const obj7 = { color: colorString, colors: colorStrings, containerStyles: tmp4.threadCreatorRoleDot };
              tmp36 = closure_44(tmp(1188).RoleDot, obj7);
            }
            cResult[18] = colorString;
            cResult[19] = colorStrings;
            cResult[20] = stateFromStores2;
            cResult[21] = tmp4;
            cResult[22] = tmp36;
            tmp35 = tmp36;
          }
        }
        let str;
        if (stateFromStores1 != null) {
          str = stateFromStores1.nick;
        }
        if (str == null) {
          const obj5 = guildId(4728);
          str = obj5.getName(stateFromStores);
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
        tmp20 = str;
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
    }
  : (arg0) => {
      let guildId;
      let items3;
      let require;
      let roleStyle;
      ({ userId: require, guildId } = arg0);
      const tmp = closure_47();
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(_require));
      const items1 = [GuildMemberStore];
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let member = null;
        if (null != _require) {
          member = GuildMemberStore.getMember(guildId, tmp);
        }
        return member;
      });
      const items2 = [AccessibilityStore];
      const obj3 = get_initialized;
      const stateFromStores2 = obj3.useStateFromStores(items2, () => roleStyle.roleStyle);
      let str;
      if (stateFromStores1 != null) {
        str = stateFromStores1.nick;
      }
      if (str == null) {
        const obj4 = guildId(4728);
        str = obj4.getName(stateFromStores);
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
      const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
      const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
      enhanced_role_colors_EnhancedRoleColorUtils;
      if (stateFromStores != null) {
        const id = stateFromStores.id;
      }
      if ("username" === stateFromStores2) {
        let tmp16;
        if (null != colorString) {
          tmp16 = { color: colorString };
          const obj5 = { color: colorString };
        }
        let tmp18;
        const Text = Text_Text.Text;
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
        return closure_44(Text, obj6);
      } else {
        let tmp13 = "dot" === stateFromStores2 && null != colorString;
        if (tmp13) {
          const obj7 = { color: colorString, colors: colorStrings, containerStyles: tmp.threadCreatorRoleDot };
          tmp13 = closure_44(native.RoleDot, obj7);
        }
        const obj8 = { children: items3 };
        items3 = [tmp13];
        const obj9 = { variant: "text-md/semibold", color: "text-default", children: str };
        items3[1] = closure_44(Text_Text.Text, obj9);
        return closure_46(closure_45, obj8);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_52 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let intl;
      let intl2;
      let items1;
      let obj5;
      let tmp11;
      let tmp6;
      let tmp9;
      let obj = channel(576);
      const cResult = obj.c(31);
      channel = channel.channel;
      const tmp4 = closure_47();
      const tmp5 = useChannelNameDefault(channel);
      if (cResult[0] !== channel) {
        const tmpResult = channel(9250);
        const result = tmpResult.isPrivateGuildChannel(channel);
        cResult[0] = channel;
        cResult[1] = result;
        tmp6 = result;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult4 = channel(6788);
      const appliedTags = tmpResult4.useAppliedTags(channel);
      const tmpResult5 = channel(6785);
      const isGameInvitesPost = tmpResult5.useIsGameInvitesPost(channel);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ForumPostMessagesStore];
        cResult[2] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== channel.id) {
        const fn = function v() {
          return ForumPostMessagesStore.getMessage(channel.id);
        };
        cResult[3] = channel.id;
        cResult[4] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      const tmpResult6 = channel(504);
      const firstMessage = tmpResult6.useStateFromStoresObject(tmp9, tmp11).firstMessage;
      let tmp12 = null;
      if (null != channel.threadMetadata) {
        let tmp13;
        let tmp15;
        if (cResult[5] !== channel) {
          const isNSFWResult = channel.isNSFW();
          cResult[5] = channel;
          cResult[6] = isNSFWResult;
          tmp13 = isNSFWResult;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== channel) {
          const isForumPostResult = channel.isForumPost();
          cResult[7] = channel;
          cResult[8] = isForumPostResult;
          tmp15 = isForumPostResult;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === isGameInvitesPost) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === tmp13) {
                let tmp17;
                if (cResult[13] === tmp15) {
                  tmp17 = cResult[14];
                }
                if (cResult[15] === channel) {
                  if (cResult[16] === tmp4) {
                    let tmp21;
                    if (cResult[17] === appliedTags) {
                      tmp21 = cResult[18];
                    }
                    if (cResult[19] === channel) {
                      let tmp25;
                      if (cResult[20] === tmp4) {
                        tmp25 = cResult[21];
                      }
                      if (cResult[22] === channel) {
                        if (cResult[23] === firstMessage) {
                          let tmp29;
                          if (cResult[24] === tmp4) {
                            tmp29 = cResult[25];
                          }
                          if (cResult[26] === tmp17) {
                            if (cResult[27] === tmp21) {
                              if (cResult[28] === tmp25) {
                                let tmp32;
                                if (cResult[29] === tmp29) {
                                  tmp32 = cResult[30];
                                }
                                tmp12 = tmp32;
                              }
                            }
                          }
                          const obj2 = { children: items1 };
                          items1 = [tmp17, tmp21, tmp25, tmp29];
                          const tmp35 = closure_46(closure_45, obj2);
                          cResult[26] = tmp17;
                          cResult[27] = tmp21;
                          cResult[28] = tmp25;
                          cResult[29] = tmp29;
                          cResult[30] = tmp35;
                          tmp32 = tmp35;
                        }
                      }
                      let tmp30 = null;
                      if (channel.isForumPost()) {
                        tmp30 = null;
                        if (null == firstMessage) {
                          const obj3 = {
                            style: tmp4.threadDetails,
                            variant: "text-md/medium",
                            color: "text-default",
                            children: intl2.string(channel(1126).t.mE3KJN),
                          };
                          const Text2 = tmp(4892).Text;
                          intl2 = tmp(1126).intl;
                          tmp30 = closure_44(Text2, obj3);
                        }
                      }
                      cResult[22] = channel;
                      cResult[23] = firstMessage;
                      cResult[24] = tmp4;
                      cResult[25] = tmp30;
                      tmp29 = tmp30;
                    }
                    let tmp27 = !channel.isForumPost();
                    channel.isForumPost();
                    if (tmp27) {
                      const obj4 = {
                        style: tmp4.threadDetails,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: intl.format(channel(1126).t.imPXd5, obj5),
                      };
                      const Text = tmp(4892).Text;
                      intl = tmp(1126).intl;
                      obj5 = {
                        usernameHook(arg0, arg1) {
                          const obj = { userId: channel.ownerId, guildId: channel.guild_id };
                          return numOpens(closure_51, obj, arg1);
                        },
                      };
                      tmp27 = closure_44(Text, obj4);
                    }
                    cResult[19] = channel;
                    cResult[20] = tmp4;
                    cResult[21] = tmp27;
                    tmp25 = tmp27;
                  }
                }
                let tmp22 = null;
                if (channel.isForumPost()) {
                  tmp22 = null;
                  if (appliedTags.length > 0) {
                    const obj6 = {
                      style: tmp4.tagContainer,
                      children: appliedTags.map((tag) => {
                        const obj = { tag };
                        return closure_1_44(channel(dependencyMap[55]).AppliedForumTagPill, obj, tag.id);
                      }),
                    };
                    tmp22 = closure_44(closure_7, obj6);
                  }
                }
                cResult[15] = channel;
                cResult[16] = tmp4;
                cResult[17] = appliedTags;
                cResult[18] = tmp22;
                tmp21 = tmp22;
              }
            }
          }
        }
        const obj7 = {
          isNSFW: tmp13,
          title: tmp5,
          isPrivate: tmp6,
          isThread: true,
          isForumPost: tmp15,
          isGameInvitesPost,
        };
        const tmp20 = closure_44(closure_49, obj7);
        cResult[9] = tmp5;
        cResult[10] = isGameInvitesPost;
        cResult[11] = tmp6;
        cResult[12] = tmp13;
        cResult[13] = tmp15;
        cResult[14] = tmp20;
        tmp17 = tmp20;
      }
      return tmp12;
    }
  : (channel) => {
      let intl;
      let intl2;
      let obj7;
      channel = channel.channel;
      const tmp = closure_47();
      const tmp3 = useChannelNameDefault(channel);
      let obj = channel(9250);
      const result = obj.isPrivateGuildChannel(channel);
      const obj2 = channel(6788);
      const appliedTags = obj2.useAppliedTags(channel);
      const obj3 = channel(6785);
      const isGameInvitesPost = obj3.useIsGameInvitesPost(channel);
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
        const items = [closure_44(closure_49, obj4), , ,];
        let tmp12Result = null;
        if (channel.isForumPost()) {
          tmp12Result = null;
          if (appliedTags.length > 0) {
            const obj5 = {
              style: tmp.tagContainer,
              children: appliedTags.map((tag) => {
                const obj = { tag };
                return closure_1_44(channel(dependencyMap[55]).AppliedForumTagPill, obj, tag.id);
              }),
            };
            tmp12Result = closure_44(closure_7, obj5);
          }
        }
        items[1] = tmp12Result;
        let tmp12Result3 = !channel.isForumPost();
        channel.isForumPost();
        if (tmp12Result3) {
          const obj6 = {
            style: tmp.threadDetails,
            variant: "text-md/medium",
            color: "text-default",
            children: intl.format(channel(1126).t.imPXd5, obj7),
          };
          const Text = tmp4(4892).Text;
          intl = tmp4(1126).intl;
          obj7 = {
            usernameHook(arg0, arg1) {
              const obj = { userId: channel.ownerId, guildId: channel.guild_id };
              return numOpens(closure_51, obj, arg1);
            },
          };
          tmp12Result3 = closure_44(Text, obj6);
        }
        items[2] = tmp12Result3;
        let tmp12Result4 = null;
        if (channel.isForumPost()) {
          tmp12Result4 = null;
          if (null == tmp8) {
            const obj8 = {
              style: tmp.threadDetails,
              variant: "text-md/medium",
              color: "text-default",
              children: intl2.string(channel(1126).t.mE3KJN),
            };
            const Text2 = tmp4(4892).Text;
            intl2 = tmp4(1126).intl;
            tmp12Result4 = closure_44(Text2, obj8);
          }
        }
        const obj9 = { children: items };
        items[3] = tmp12Result4;
        tmp10Result = closure_46(closure_45, obj9);
      }
      return tmp10Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_53 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let formatResult;
      let guild;
      let items;
      let tmp11;
      let tmp15;
      let tmp19;
      let tmp22;
      let tmp7;
      let obj = channel(576);
      const cResult = obj.c(37);
      ({ guild, channel } = arg0);
      const tmp5 = useChannelNameDefault(channel, true);
      const tmp6 = useChannelNameDefault(channel, false);
      if (cResult[0] !== channel) {
        const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
        cResult[0] = channel;
        cResult[1] = canResult;
        tmp7 = canResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== channel) {
        const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
        cResult[2] = channel;
        cResult[3] = canResult1;
        tmp11 = canResult1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== channel) {
        const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
        cResult[4] = channel;
        cResult[5] = canResult2;
        tmp15 = canResult2;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== channel) {
        const tmpResult = channel(9250);
        const result = tmpResult.isPrivateGuildChannel(channel);
        cResult[6] = channel;
        cResult[7] = result;
        tmp19 = result;
      } else {
        tmp19 = cResult[7];
      }
      const tmp21 = useThemeDefault();
      if (cResult[8] !== tmp5) {
        const intl = channel(1126).intl;
        let obj2 = { channelName: tmp5 };
        const formatToPlainStringResult = intl.formatToPlainString(channel(1126).t.q0tgLe, obj2);
        cResult[8] = tmp5;
        cResult[9] = formatToPlainStringResult;
        tmp22 = formatToPlainStringResult;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp15) {
        if (cResult[11] === channel.id) {
          if (cResult[12] === channel.topic) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp6) {
                let tmp24;
                if (cResult[15] === tmp19) {
                  tmp24 = cResult[16];
                }
                if (cResult[17] === channel.type) {
                  if (cResult[18] === tmp19) {
                    if (cResult[19] === tmp24) {
                      let tmp26;
                      if (cResult[20] === tmp22) {
                        tmp26 = cResult[21];
                      }
                      if (cResult[22] === tmp7) {
                        if (cResult[23] === tmp11) {
                          if (cResult[24] === channel) {
                            if (cResult[25] === tmp19) {
                              let tmp30;
                              if (cResult[26] === tmp21) {
                                tmp30 = cResult[27];
                              }
                              if (cResult[28] === tmp7) {
                                if (cResult[29] === channel) {
                                  if (cResult[30] === guild) {
                                    let tmp34;
                                    if (cResult[31] === tmp19) {
                                      tmp34 = cResult[32];
                                    }
                                    if (cResult[33] === tmp26) {
                                      if (cResult[34] === tmp30) {
                                        let tmp37;
                                        if (cResult[35] === tmp34) {
                                          tmp37 = cResult[36];
                                        }
                                        return tmp37;
                                      }
                                    }
                                    const obj3 = { children: items };
                                    items = [tmp26, tmp30, tmp34];
                                    const tmp40 = closure_46(closure_45, obj3);
                                    cResult[33] = tmp26;
                                    cResult[34] = tmp30;
                                    cResult[35] = tmp34;
                                    cResult[36] = tmp40;
                                    tmp37 = tmp40;
                                  }
                                }
                              }
                              let tmp35 = null;
                              if (tmp19) {
                                tmp35 = null;
                                if (tmp7) {
                                  const obj4 = { channel, guild };
                                  tmp35 = closure_44(ChannelAccessInfoDefault, obj4);
                                }
                              }
                              cResult[28] = tmp7;
                              cResult[29] = channel;
                              cResult[30] = guild;
                              cResult[31] = tmp19;
                              cResult[32] = tmp35;
                              tmp34 = tmp35;
                            }
                          }
                        }
                      }
                      const obj5 = { canManageRoles: tmp11, canEdit: tmp7, isPrivate: tmp19, channel, theme: tmp21 };
                      const tmp33 = closure_44(closure_50, obj5);
                      cResult[22] = tmp7;
                      cResult[23] = tmp11;
                      cResult[24] = channel;
                      cResult[25] = tmp19;
                      cResult[26] = tmp21;
                      cResult[27] = tmp33;
                      tmp30 = tmp33;
                    }
                  }
                }
                const obj6 = { title: tmp22, subtitle: tmp24, isPrivate: tmp19, channelType: channel.type };
                const tmp29 = closure_44(closure_49, obj6);
                cResult[17] = channel.type;
                cResult[18] = tmp19;
                cResult[19] = tmp24;
                cResult[20] = tmp22;
                cResult[21] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
        }
      }
      const intl2 = channel(1126).intl;
      if (tmp19) {
        const obj7 = {
          channelName: tmp5,
          topicHook() {
            const obj = MarkupUtilsDefault;
            const obj2 = { channelId: channel.id };
            return obj.parseTopic(channel.topic, true, obj2);
          },
        };
        formatResult = intl2.format(channel(1126).t.QuwqjG, obj7);
      } else if (tmp15) {
        const obj8 = { channelName: tmp5 };
        formatResult = intl2.formatToPlainString(channel(1126).t.JHKUGB, obj8);
      } else {
        const obj9 = { channelName: tmp6 };
        formatResult = intl2.format(channel(1126).t.hPVEQG, obj9);
      }
      cResult[10] = tmp15;
      cResult[11] = channel.id;
      cResult[12] = channel.topic;
      cResult[13] = tmp5;
      cResult[14] = tmp6;
      cResult[15] = tmp19;
      cResult[16] = formatResult;
      tmp24 = formatResult;
    }
  : (channel) => {
      let formatResult;
      channel = channel.channel;
      const guild = channel.guild;
      const tmp3 = useChannelNameDefault(channel, true);
      const tmp4 = useChannelNameDefault(channel, false);
      const canResult = PermissionStore.can(constants7.MANAGE_CHANNELS, channel);
      const canResult1 = PermissionStore.can(constants7.MANAGE_ROLES, channel);
      const canResult2 = PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel);
      let obj = channel(9250);
      const result = obj.isPrivateGuildChannel(channel);
      const tmp10 = useThemeDefault();
      const intl = channel(1126).intl;
      const formatToPlainStringResult = intl.formatToPlainString(channel(1126).t.q0tgLe, { channelName: tmp3 });
      const intl2 = channel(1126).intl;
      if (result) {
        let obj2 = {
          channelName: tmp3,
          topicHook() {
            const obj = MarkupUtilsDefault;
            const obj2 = { channelId: channel.id };
            return obj.parseTopic(channel.topic, true, obj2);
          },
        };
        formatResult = intl2.format(tmp8(1126).t.QuwqjG, obj2);
      } else if (canResult2) {
        const obj3 = { channelName: tmp3 };
        formatResult = intl2.formatToPlainString(tmp8(1126).t.JHKUGB, obj3);
      } else {
        const obj4 = { channelName: tmp4 };
        formatResult = intl2.format(tmp8(1126).t.hPVEQG, obj4);
      }
      const children = [, ,];
      const obj5 = {
        title: formatToPlainStringResult,
        subtitle: formatResult,
        isPrivate: result,
        channelType: channel.type,
      };
      children[0] = closure_44(closure_49, obj5);
      children[1] = closure_44(closure_50, {
        canManageRoles: canResult1,
        canEdit: canResult,
        isPrivate: result,
        channel,
        theme: tmp10,
      });
      let tmp15Result = null;
      if (result) {
        tmp15Result = null;
        if (canResult) {
          const obj6 = { channel, guild };
          tmp15Result = closure_44(ChannelAccessInfoDefault, obj6);
        }
      }
      children[2] = tmp15Result;
      return closure_46(closure_45, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_54 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let tmp6;
      const obj = guild(576);
      const cResult = obj.c(9);
      const tmp = guild;
      guild = guild.guild;
      const channel = guild.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function o() {
          return GuildChannelStore.getDefaultChannel(guild.id);
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel)) {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (id === channel.id) {
          if (cResult[3] === channel) {
            let tmp12;
            if (cResult[4] === guild) {
              tmp12 = cResult[5];
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
        let tmp10;
        if (cResult[7] === guild) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      const tmp11 = closure_44(closure_53, { guild, channel });
      cResult[6] = channel;
      cResult[7] = guild;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
  : (guild) => {
      guild = guild.guild;
      const channel = guild.channel;
      const items = [GuildChannelStore];
      const obj = guild(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
      if (PermissionStore.can(constants7.READ_MESSAGE_HISTORY, channel)) {
        let tmp4;
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (id === channel.id) {
          const obj2 = { guild, channel };
          tmp4 = closure_44(closure_55, obj2);
        }
        return tmp4;
      }
      tmp4 = closure_44(closure_53, { guild, channel });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_55 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let canInvite;
      let canManageGuild;
      let currentUser;
      let errors;
      let guildPersonalized;
      let guildPopulated;
      let id;
      let items3;
      let items4;
      let tmp16;
      let tmp19;
      let tmp20;
      let tmp24;
      let tmp42;
      let tmp7;
      let tmp8;
      const tmp = guild;
      let obj = guild(id[30]);
      const cResult = obj.c(50);
      guild = guild.guild;
      const channel = guild.channel;
      id = guild.id;
      const tmp4 = closure_47();
      let obj2 = guild(id[59]);
      const completedStates = obj2.useCompletedStates(guild);
      ({ guildPopulated, guildPersonalized } = completedStates);
      let obj3 = guild(id[59]);
      const permissions = obj3.usePermissions(channel, guild);
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
      const tmpResult = tmp(id[48]);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      channel(id[60])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
      isGuildOwner(guild, stateFromStores);
      const obj5 = channel(id[61]);
      const extractTimestampResult = obj5.extractTimestamp(guild.id);
      const tmp11 = channel;
      const tmp15 = extractTimestampResult < Date.now() - closure_37;
      if (cResult[2] !== channel) {
        const tmpResult4 = tmp(id[52]);
        let result = tmpResult4.isPrivateGuildChannel(channel);
        cResult[2] = channel;
        cResult[3] = result;
        tmp16 = result;
      } else {
        tmp16 = cResult[3];
      }
      const tmpResult5 = tmp(id[62]);
      const isEligibleForGuildProgress = tmpResult5.useIsEligibleForGuildProgress(guild);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildSettingsStore];
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        cResult[4] = items1;
        cResult[5] = D;
        tmp20 = D;
        tmp19 = items1;
      } else {
        tmp19 = cResult[4];
        tmp20 = cResult[5];
      }
      const tmpResult6 = tmp(id[48]);
      const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp19, tmp20);
      if (cResult[6] !== stateFromStoresObject.message) {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        const items2 = [stateFromStoresObject.message];
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        cResult[6] = stateFromStoresObject.message;
        cResult[7] = G;
        cResult[8] = items2;
        tmp24 = items2;
      } else {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        tmp24 = cResult[8];
      }
      const layoutEffect = react.useLayoutEffect(G, tmp24);
      if (canManageGuild) {
        let tmp29;
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        const _Symbol = Symbol;
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        const _Symbol2 = Symbol;
        const formCtaIcon = tmp4.formCtaIcon;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
          const stringResult = obj9.string(tmp(id[32]).t["Yhi9/N"]);
          class D {
            constructor() {
              return errors.getErrors();
            }
          }
          cResult[12] = stringResult;
          tmp29 = stringResult;
        } else {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
        }
        if (cResult[13] === tmp26) {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
        }
        const obj4 = {
          onPress: tmp26,
          source: tmp28,
          iconStyle: formCtaIcon,
          title: tmp29,
          isCompleted: guildPersonalized,
          analyticsSetupType: constants10.CHANNEL_WELCOME,
          analyticsAction: constants9.PERSONALIZE_SERVER,
        };
        cResult[13] = tmp26;
        cResult[14] = guildPersonalized;
        cResult[15] = tmp4.formCtaIcon;
        cResult[16] = closure_44(tmp11(id[67]), obj4);
        const tmp35 = closure_44(tmp11(id[67]), obj4);
      }
      if (canInvite) {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        function re() {
          if (null != guild.vanityURLCode) {
            const obj3 = instant_invite_InstantInviteUtils;
            const result = obj3.showVanityUrlInviteActionSheet(tmp, channel, constants.WELCOME_MESSAGE);
          } else {
            const obj2 = { source: constants.WELCOME_MESSAGE };
            const obj = instant_invite_InstantInviteUtils;
            const result1 = obj.showInstantInviteActionSheet(channel, obj2);
          }
        }
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        cResult[18] = guild;
        cResult[19] = re;
      }
      if (tmp15) {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
          const stringResult1 = obj11.string(tmp(id[32]).t["gwyU/J"]);
          class D {
            constructor() {
              return errors.getErrors();
            }
          }
          cResult[26] = stringResult1;
        } else {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
        }
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
      } else {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
      }
      let tmp40 = !isEligibleForGuildProgress;
      if (tmp40) {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        tmp40 = tmp41;
      }
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        const articleURL = obj12.getArticleURL(constants5.GUILD_GETTING_STARTED);
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        cResult[29] = articleURL;
        tmp42 = articleURL;
      } else {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
      }
      const combined =
        "" + tmp42 + "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
      if (cResult[30] !== tmp40) {
        let tmp47;
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        if (tmp40) {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
          const obj6 = { children: items3 };
          class D {
            constructor() {
              return errors.getErrors();
            }
          }
          const obj7 = { guideURL: combined };
          items3 = [" ", obj14.format(tmp(id[32]).t.UOtD32, obj7)];
          tmp47 = closure_46(closure_45, obj6);
        }
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        cResult[31] = tmp47;
      } else {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
      }
      if (cResult[32] === tmp37) {
        class G {
          constructor() {
            if (null != stateFromStoresObject.message) {
              const obj = ToastUtils;
              obj.presentError(tmp.message);
            }
          }
        }
        if (cResult[35] !== guild.name) {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
          const formatToPlainString = tmp52.formatToPlainString;
          const obj8 = { guildName: null };
          class D {
            constructor() {
              return errors.getErrors();
            }
          }
          cResult[35] = guild.name;
          cResult[36] = formatToPlainString(tmp(id[32]).t["j59F/c"], obj8);
          const formatToPlainStringResult = formatToPlainString(tmp(id[32]).t["j59F/c"], obj8);
        } else {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
        }
        class D {
          constructor() {
            return errors.getErrors();
          }
        }
        if (cResult[37] === tmp16) {
          class G {
            constructor() {
              if (null != stateFromStoresObject.message) {
                const obj = ToastUtils;
                obj.presentError(tmp.message);
              }
            }
          }
        }
        const obj10 = { title: tmp51, subtitle: tmp49, isPrivate: tmp16, subtitleLink: undefined };
        cResult[37] = tmp16;
        cResult[38] = tmp49;
        cResult[39] = tmp51;
        cResult[40] = undefined;
        cResult[41] = closure_44(closure_49, obj10);
        const tmp58 = closure_44(closure_49, obj10);
      }
      const obj13 = { children: items4 };
      items4 = [tmp37, tmp46];
      cResult[32] = tmp37;
      cResult[33] = tmp46;
      cResult[34] = closure_46(closure_45, obj13);
      const tmp50 = closure_46(closure_45, obj13);
    }
  : (guild) => {
      let canInvite;
      let canManageGuild;
      let currentUser;
      let errors;
      let guildPersonalized;
      let guildPopulated;
      let intl;
      let intl2;
      let intl5;
      let items4;
      let items6;
      let obj11;
      let obj15;
      let obj9;
      let stringResult;
      let tmp17;
      let tmp22;
      let tmp31Result2;
      let tmp31Result3;
      let tmp37;
      guild = guild.guild;
      const channel = guild.channel;
      const id = guild.id;
      const tmp = closure_47();
      const tmp3 = id;
      let obj = guild(id[59]);
      const completedStates = obj.useCompletedStates(guild);
      ({ guildPopulated, guildPersonalized } = completedStates);
      let obj2 = guild(id[59]);
      const permissions = obj2.usePermissions(channel, guild);
      ({ canInvite, canManageGuild } = permissions);
      let obj3 = guild(id[48]);
      const items = [UserStore];
      const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
      channel(id[60])(null != stateFromStores, "ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined");
      const tmp9 = isGuildOwner(guild, stateFromStores);
      let obj4 = channel(id[61]);
      const extractTimestampResult = obj4.extractTimestamp(guild.id);
      const tmp11 = extractTimestampResult < Date.now() - closure_37;
      let obj5 = guild(id[52]);
      let result = obj5.isPrivateGuildChannel(channel);
      let obj6 = guild(id[62]);
      const isEligibleForGuildProgress = obj6.useIsEligibleForGuildProgress(guild);
      let obj7 = guild(id[48]);
      const items1 = [GuildSettingsStore];
      const stateFromStoresObject = obj7.useStateFromStoresObject(items1, () => errors.getErrors());
      const items2 = [stateFromStoresObject.message];
      const layoutEffect = react.useLayoutEffect(() => {
        if (null != stateFromStoresObject.message) {
          obj = ToastUtils;
          obj.presentError(tmp.message);
        }
      }, items2);
      if (canManageGuild) {
        obj = function _addServerIcon2() {
          obj = _asyncToGenerator(async () => {
            let closure_1;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                let base64;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    let closure_0 = tmp;
                    base64 = undefined;
                    const obj7 = tmp4(c2[64]);
                    obj7.init(id);
                    const obj5 = { size };
                    const obj8 = tmp4(c2[65]);
                    c2 = 1;
                    c3 = 1;
                    const obj6 = { value: obj8.openImagePicker(obj5), done: false };
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
                    obj = tmp4(c2[64]);
                    obj.updateIcon(closure_129_2, base64);
                    const obj2 = tmp4(c2[64]);
                    obj2.open(closure_129_2, constants.LANDING);
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp17) {
                c3 = 3;
                throw tmp17;
              }
            }
          });
          return obj(...arguments);
        };
        let obj8 = {
          onPress: function addServerIcon() {
            return obj(...arguments);
          },
          source: obj9,
          iconStyle: tmp.formCtaIcon,
          title: intl.string(guild(tmp3[32]).t["Yhi9/N"]),
          isCompleted: guildPersonalized,
          analyticsSetupType: constants10.CHANNEL_WELCOME,
          analyticsAction: constants9.PERSONALIZE_SERVER,
        };
        obj9 = { uri: channel(tmp3[66]) };
        const tmp7Result = channel(tmp3[67]);
        intl = tmp2(tmp3[32]).intl;
        tmp17 = closure_44(tmp7Result, obj8);
      }
      if (canInvite) {
        const obj10 = {
          onPress: function inviteFriends() {
            if (null != guild.vanityURLCode) {
              const obj3 = instant_invite_InstantInviteUtils;
              const result = obj3.showVanityUrlInviteActionSheet(tmp, channel, constants.WELCOME_MESSAGE);
            } else {
              const obj2 = { source: constants.WELCOME_MESSAGE };
              obj = instant_invite_InstantInviteUtils;
              const result1 = obj.showInstantInviteActionSheet(channel, obj2);
            }
          },
          source: obj11,
          iconStyle: tmp.formCtaIcon,
          title: intl2.string(guild(tmp3[32]).t.q9n0Ta),
          isCompleted: guildPopulated,
          analyticsSetupType: constants10.CHANNEL_WELCOME,
          analyticsAction: constants9.INVITE,
        };
        obj11 = { uri: channel(tmp3[69]) };
        const tmp7Result3 = channel(tmp3[67]);
        intl2 = tmp2(tmp3[32]).intl;
        tmp22 = closure_44(tmp7Result3, obj10);
      }
      const intl3 = tmp2(tmp3[32]).intl;
      const string = intl3.string;
      const t = tmp2(tmp3[32]).t;
      if (tmp11) {
        stringResult = string(t["gwyU/J"]);
      } else if (tmp9) {
        stringResult = string(t["1ach9C"]);
      } else {
        stringResult = string(t["ezm+/j"]);
      }
      let tmp28 = !isEligibleForGuildProgress;
      if (tmp28) {
        tmp28 = null != tmp22 || null != tmp17;
        const tmp29 = null != tmp22 || null != tmp17;
      }
      const tmp7Result4 = channel(tmp3[70]);
      const combined =
        "" +
        tmp7Result4.getArticleURL(constants5.GUILD_GETTING_STARTED) +
        "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm";
      const items3 = [stringResult];
      let tmp31Result = null;
      if (tmp28) {
        const obj12 = { children: items4 };
        const intl4 = tmp2(tmp3[32]).intl;
        const obj13 = { guideURL: combined };
        items4 = [" ", intl4.format(guild(tmp3[32]).t.UOtD32, obj13)];
        tmp31Result = closure_46(closure_45, obj12);
      }
      items3[1] = tmp31Result;
      const Fragment = react.Fragment;
      const obj14 = {
        title: intl5.formatToPlainString(guild(tmp3[32]).t["j59F/c"], obj15),
        subtitle: tmp31Result2,
        isPrivate: result,
        subtitleLink: tmp37,
      };
      tmp31Result2 = closure_46(closure_45, { children: items3 });
      intl5 = tmp2(tmp3[32]).intl;
      tmp37 = undefined;
      obj15 = { guildName: guild.name };
      if (tmp28) {
        tmp37 = combined;
      }
      const children = [closure_44(closure_49, obj14)];
      if (isEligibleForGuildProgress) {
        const obj16 = { guild };
        tmp31Result3 = closure_44(tmp7(tmp3[71]), obj16);
      } else {
        const obj17 = { children: items6 };
        items6 = [tmp22, tmp17];
        tmp31Result3 = closure_46(closure_45, obj17);
      }
      children[1] = tmp31Result3;
      return closure_46(Fragment, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_56 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DMSpamButton(channel) {
      let showingSpamBanner;
      let user;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(7);
      channel = channel.channel;
      ({ user, showingSpamBanner } = channel);
      const obj2 = channel(12267);
      const dMMessageToReport = obj2.useDMMessageToReport(channel, user.id, true === user.bot);
      const message = dMMessageToReport.message;
      if (!showingSpamBanner) {
        if (dMMessageToReport.isReportable) {
          if (cResult[0] === channel) {
            let tmp7;
            let tmp9;
            if (cResult[1] === message) {
              tmp7 = cResult[2];
            }
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.HHZmDn);
              cResult[3] = stringResult;
              tmp9 = stringResult;
            } else {
              tmp9 = cResult[3];
            }
            if (cResult[4] === tmp7) {
              let tmp12;
              if ((cResult[5] === null) == message) {
                tmp12 = cResult[6];
              }
              return tmp12;
            }
            const obj3 = { size: "sm", variant: "destructive", text: tmp9, disabled: null == message, onPress: tmp7 };
            const tmp14 = closure_44(tmp(5601).Button, obj3);
            cResult[4] = tmp7;
            cResult[5] = null == message;
            cResult[6] = tmp14;
            tmp12 = tmp14;
          }
          function handleShowReportModal() {
            let id;
            if (null != message) {
              let obj = ReportModals;
              const result = obj.showReportModalForFirstDM(tmp, () => {
                const obj = message(dependencyMap[74]);
                obj.closePrivateChannel(id.id, true);
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
    }
  : function DMSpamButton(channel) {
      let intl;
      channel = channel.channel;
      const user = channel.user;
      const tmp = channel;
      const showingSpamBanner = channel.showingSpamBanner;
      let obj = channel(12267);
      const dMMessageToReport = obj.useDMMessageToReport(channel, user.id, true === user.bot);
      const message = dMMessageToReport.message;
      if (!showingSpamBanner) {
        if (dMMessageToReport.isReportable) {
          const obj2 = {
            size: "sm",
            variant: "destructive",
            text: intl.string(tmp(1126).t.HHZmDn),
            disabled: null == message,
            onPress: function handleShowReportModal() {
              let id;
              if (null != message) {
                let obj = ReportModals;
                const result = obj.showReportModalForFirstDM(tmp, () => {
                  const obj = message(dependencyMap[74]);
                  obj.closePrivateChannel(id.id, true);
                });
              }
            },
          };
          const Button = tmp(5601).Button;
          intl = tmp(1126).intl;
          return closure_44(Button, obj2);
        }
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_57 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DeauthorizeAppButton(application) {
      let oauth2Token;
      let selfEmbeddedActivities;
      let tmp5;
      let tmp6;
      let obj = application(oauth2Token[30]);
      const cResult = obj.c(15);
      application = application.application;
      const channel = application.channel;
      oauth2Token = application.oauth2Token;
      const user = application.user;
      const tmp4 = closure_47();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore];
        const fn = function o() {
          return selfEmbeddedActivities.getSelfEmbeddedActivities();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = application(oauth2Token[48]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      let tmp9 = null;
      if (user.bot) {
        tmp9 = null;
        if (null != application) {
          let tmp10;
          let tmp12;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[32]).intl;
            const stringResult = intl.string(application(oauth2Token[32]).t.xUqheM);
            cResult[2] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[2];
          }
          if (cResult[3] !== tmp4.appDMButtonIcon) {
            let obj2 = {
              size: application(oauth2Token[44]).Icon.Sizes.SMALL,
              source: channel(oauth2Token[76]),
              style: tmp4.appDMButtonIcon,
            };
            const Icon = tmp(tmp2[44]).Icon;
            const tmp15 = closure_44(Icon, obj2);
            cResult[3] = tmp4.appDMButtonIcon;
            cResult[4] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[4];
          }
          if (cResult[5] === application) {
            if (cResult[6] === channel.id) {
              if (cResult[7] === channel.type) {
                if (cResult[8] === stateFromStores) {
                  if (cResult[9] === oauth2Token.id) {
                    let tmp16;
                    if (cResult[10] === oauth2Token.scopes) {
                      tmp16 = cResult[11];
                    }
                    if (cResult[12] === tmp12) {
                      let tmp17;
                      if (cResult[13] === tmp16) {
                        tmp17 = cResult[14];
                      }
                      tmp9 = tmp17;
                    }
                    let obj3 = { size: "sm", variant: "secondary", text: tmp10, icon: tmp12, onPress: tmp16 };
                    const tmp19 = closure_44(application(oauth2Token[75]).Button, obj3);
                    cResult[12] = tmp12;
                    cResult[13] = tmp16;
                    cResult[14] = tmp19;
                    tmp17 = tmp19;
                  }
                }
              }
            }
          }
          const fn2 = function y() {
            let id;
            let id2;
            let obj = useAlertStore;
            let obj2 = {
              application,
              scopes: oauth2Token.scopes,
              onDelete() {
                const obj = channel(oauth2Token[79]);
                obj.delete(id2.id);
                const value = stateFromStores.get(id.id);
                let _location;
                const leaveActivity = channel(oauth2Token[80]).leaveActivity;
                channel(oauth2Token[80]);
                if (value != null) {
                  _location = value.location;
                }
                const obj2 = { location: _location, applicationId: id.id };
                leaveActivity(obj2);
              },
            };
            obj.openAlert("confirm-delete-authed-app", numOpens(UserSettingsAuthedAppDeleteWarningModalDefault, obj2));
            const obj3 = AnalyticsUtilsDefault;
            const obj4 = { application_id: application.id, channel_id: channel.id, channel_type: channel.type };
            obj3.track(constants.APP_MANAGE_CTA_CLICKED, obj4);
          };
          cResult[5] = application;
          cResult[6] = channel.id;
          cResult[7] = channel.type;
          cResult[8] = stateFromStores;
          cResult[9] = oauth2Token.id;
          cResult[10] = oauth2Token.scopes;
          cResult[11] = fn2;
          tmp16 = fn2;
        }
      }
      return tmp9;
    }
  : function DeauthorizeAppButton(application) {
      let Icon;
      let intl;
      let obj3;
      let scopes;
      let selfEmbeddedActivities;
      application = application.application;
      ({ channel: importDefault, oauth2Token: dependencyMap } = application);
      const user = application.user;
      const tmp = closure_47();
      let obj = application(504);
      const items = [EmbeddedActivitiesStore];
      let closure_3 = obj.useStateFromStores(items, () => selfEmbeddedActivities.getSelfEmbeddedActivities());
      let tmp4 = null;
      if (user.bot) {
        tmp4 = null;
        if (null != application) {
          let obj2 = {
            size: "sm",
            variant: "secondary",
            text: intl.string(application(1126).t.xUqheM),
            icon: closure_44(Icon, obj3),
            onPress() {
              let id;
              let id2;
              let obj = useAlertStore;
              let obj2 = {
                application,
                scopes: dependencyMap.scopes,
                onDelete() {
                  const obj = AuthorizedAppsActionCreatorsDefault;
                  obj.delete(id2.id);
                  const value = closure_1_3.get(id.id);
                  let _location;
                  const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
                  EmbeddedActivitiesNativeManagerDefault;
                  if (value != null) {
                    _location = value.location;
                  }
                  const obj2 = { location: _location, applicationId: id.id };
                  leaveActivity(obj2);
                },
              };
              obj.openAlert(
                "confirm-delete-authed-app",
                numOpens(UserSettingsAuthedAppDeleteWarningModalDefault, obj2),
              );
              const obj3 = AnalyticsUtilsDefault;
              const obj4 = {
                application_id: application.id,
                channel_id: importDefault.id,
                channel_type: importDefault.type,
              };
              obj3.track(constants.APP_MANAGE_CTA_CLICKED, obj4);
            },
          };
          const Button = tmp2(5601).Button;
          intl = tmp2(1126).intl;
          obj3 = {
            size: application(1188).Icon.Sizes.SMALL,
            source: AssetRegistryDefault2,
            style: tmp.appDMButtonIcon,
          };
          Icon = tmp2(1188).Icon;
          tmp4 = closure_44(Button, obj2);
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_58 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditConjuredAppButton(project) {
      let first;
      let tmp11;
      let tmp8;
      const obj = project(576);
      const cResult = obj.c(8);
      project = project.project;
      const tmp4 = closure_47();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3753.jMMrDM);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.appDMButtonIcon) {
        const obj2 = { size: "xs", style: tmp4.appDMButtonIcon };
        const tmp10 = closure_44(project(10071).PencilIcon, obj2);
        cResult[1] = tmp4.appDMButtonIcon;
        cResult[2] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== project) {
        const fn = function l() {
          return openConjureProjectInBuilderDefault(project);
        };
        cResult[3] = project;
        cResult[4] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp8) {
        let tmp12;
        if (cResult[6] === tmp11) {
          tmp12 = cResult[7];
        }
        return tmp12;
      }
      const tmp13 = closure_44(project(5601).Button, {
        size: "sm",
        variant: "secondary",
        text: first,
        icon: tmp8,
        onPress: tmp11,
      });
      cResult[5] = tmp8;
      cResult[6] = tmp11;
      cResult[7] = tmp13;
      tmp12 = tmp13;
    }
  : function EditConjuredAppButton(project) {
      let intl;
      let obj2;
      project = project.project;
      const obj = {
        size: "sm",
        variant: "secondary",
        text: intl.string(_modDef3753.jMMrDM),
        icon: closure_44(project(10071).PencilIcon, obj2),
        onPress() {
          return openConjureProjectInBuilderDefault(project);
        },
      };
      const tmp = closure_47();
      const Button = project(5601).Button;
      intl = project(1126).intl;
      obj2 = { size: "xs", style: tmp.appDMButtonIcon };
      return closure_44(Button, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_60 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatBeginningRowDMGuard(channel) {
      let first;
      let tmp6;
      _require = channel;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let tmp8 = null;
      if (null != stateFromStores) {
        if (cResult[3] === channel) {
          let tmp9;
          if (cResult[4] === stateFromStores) {
            tmp9 = cResult[5];
          }
          tmp8 = tmp9;
        }
        const obj2 = { user: stateFromStores };
        const merged = Object.assign(channel);
        const tmp15 = closure_44(ChatBeginningRowDM, obj2);
        cResult[3] = channel;
        cResult[4] = stateFromStores;
        cResult[5] = tmp15;
        tmp9 = tmp15;
      }
      return tmp8;
    }
  : function ChatBeginningRowDMGuard(arg0) {
      _require = arg0;
      const items = [UserStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        channel = channel.channel;
        return UserStore.getUser(channel.getRecipientId());
      });
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj2 = { user: stateFromStores };
        const merged = Object.assign(arg0);
        tmp2 = closure_44(ChatBeginningRowDM, obj2);
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_62 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatBeginningRowButton(arg0) {
      let IconComponent;
      let iconVariant;
      let onPress;
      let style;
      let subtitle;
      let title;
      let trailing;
      const obj = react2;
      const cResult = obj.c(12);
      ({ title, subtitle, IconComponent, iconVariant, style, onPress, trailing } = arg0);
      if (cResult[0] === IconComponent) {
        let tmp4;
        if (cResult[1] === iconVariant) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === onPress) {
          if (cResult[4] === subtitle) {
            if (cResult[5] === tmp4) {
              if (cResult[6] === title) {
                let tmp6;
                if (cResult[7] === trailing) {
                  tmp6 = cResult[8];
                }
                if (cResult[9] === style) {
                  let tmp9;
                  if (cResult[10] === tmp6) {
                    tmp9 = cResult[11];
                  }
                  return tmp9;
                }
                const obj2 = { style, children: tmp6 };
                const tmp12 = numOpens(metroImportDefault, obj2);
                cResult[9] = style;
                cResult[10] = tmp6;
                cResult[11] = tmp12;
                tmp9 = tmp12;
              }
            }
          }
        }
        const obj3 = { onPress, icon: tmp4, label: title, subLabel: subtitle, trailing };
        const tmp8 = numOpens(RowButton2.RowButton, obj3);
        cResult[3] = onPress;
        cResult[4] = subtitle;
        cResult[5] = tmp4;
        cResult[6] = title;
        cResult[7] = trailing;
        cResult[8] = tmp8;
        tmp6 = tmp8;
      }
      const tmp5 = numOpens(RowButton2.RowButton.Icon, { IconComponent, variant: iconVariant });
      cResult[0] = IconComponent;
      cResult[1] = iconVariant;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : function ChatBeginningRowButton(style) {
      let IconComponent;
      let RowButton;
      let iconVariant;
      let obj2;
      let onPress;
      let subtitle;
      let title;
      let trailing;
      ({ title, subtitle, IconComponent, iconVariant, onPress, trailing } = style);
      const obj = { style: style.style, children: numOpens(RowButton, obj2) };
      obj2 = {
        onPress,
        icon: numOpens(RowButton2.RowButton.Icon, { IconComponent, variant: iconVariant }),
        label: title,
        subLabel: subtitle,
        trailing,
      };
      RowButton = RowButton2.RowButton;
      return numOpens(metroImportDefault, obj);
    };
const GroupDMChatBeginning = "GroupDMChatBeginning";
ReactCompilerGating = ReactCompilerGating_mod;
let closure_64 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatBeginningRowGroupDM(channel) {
      let closure_3;
      let first;
      let obj5;
      let onPress2;
      let relationshipCount;
      let tmp10;
      let tmp13;
      let tmp9;
      let tmp = channel;
      let obj = channel(first[30]);
      const cResult = obj.c(55);
      channel = channel.channel;
      const tmp4 = closure_47();
      importDefault = tmp4;
      require("useChannelName")(channel);
      [first, _slicedToArray] = onClick.useState(false);
      const tmp5 = importDefault;
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
      let tmpResult = tmp(tmp2[48]);
      const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
      if (cResult[2] !== channel.id) {
        const fn2 = function f() {
          openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_TEXT_AREA);
        };
        cResult[2] = channel.id;
        cResult[3] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[3];
      }
      onClick = tmp13;
      if (cResult[4] === channel) {
        let tmp14;
        if (cResult[5] === first) {
          tmp14 = cResult[6];
        }
        onClick2 = tmp14;
        if (cResult[7] === channel.id) {
          let tmp15;
          if (cResult[8] === tmp13) {
            tmp15 = cResult[9];
          }
          const onPress = tmp15;
          if (cResult[10] !== tmp14) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
            cResult[10] = tmp14;
            class P {
              constructor() {
                const obj = openGroupDMAddMembers;
                const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
                if ("open" === groupDMAddMembersAction) {
                  const tmpResult = DismissibleContentUnsafeUtils;
                  if (
                    tmpResult.UNSAFE_isDismissibleContentDismissed(
                      dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
                    )
                  ) {
                    onClick();
                  } else {
                    const obj2 = { onClick };
                    showChatGDMUpsellActionSheetDefault(obj2);
                  }
                } else {
                  const tmpResult2 = openGroupDMAddMembers;
                  const result = tmpResult2.showGroupDMAddMembersRoadblock(
                    groupDMAddMembersAction,
                    constants.CHANNEL_TEXT_AREA,
                  );
                }
              }
            }
            cResult[11] = N;
          } else {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          class P {
            constructor() {
              const obj = openGroupDMAddMembers;
              const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
              if ("open" === groupDMAddMembersAction) {
                const tmpResult = DismissibleContentUnsafeUtils;
                if (
                  tmpResult.UNSAFE_isDismissibleContentDismissed(
                    dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
                  )
                ) {
                  onClick();
                } else {
                  const obj2 = { onClick };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              } else {
                const tmpResult2 = openGroupDMAddMembers;
                const result = tmpResult2.showGroupDMAddMembersRoadblock(
                  groupDMAddMembersAction,
                  constants.CHANNEL_TEXT_AREA,
                );
              }
            }
          }
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
            tmp18[0] = GroupDMChatBeginning;
            class P {
              constructor() {
                const obj = openGroupDMAddMembers;
                const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
                if ("open" === groupDMAddMembersAction) {
                  const tmpResult = DismissibleContentUnsafeUtils;
                  if (
                    tmpResult.UNSAFE_isDismissibleContentDismissed(
                      dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
                    )
                  ) {
                    onClick();
                  } else {
                    const obj2 = { onClick };
                    showChatGDMUpsellActionSheetDefault(obj2);
                  }
                } else {
                  const tmpResult2 = openGroupDMAddMembers;
                  const result = tmpResult2.showGroupDMAddMembersRoadblock(
                    groupDMAddMembersAction,
                    constants.CHANNEL_TEXT_AREA,
                  );
                }
              }
            }
            cResult[12] = tmp18;
          } else {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          const tmp5Result = tmp5(first[117]);
          const enabled = tmp5Result.useConfig(tmp18).enabled;
          let tmpResult2 = tmp(tmp2[118]);
          const groupDMNitroAudience = tmpResult2.useGroupDMNitroAudience();
          if (channel.recipients != null) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          if (undefined == null) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          const sum = tmp22 + 1;
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
            cResult[13] = tmp24;
            class P {
              constructor() {
                const obj = openGroupDMAddMembers;
                const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
                if ("open" === groupDMAddMembersAction) {
                  const tmpResult = DismissibleContentUnsafeUtils;
                  if (
                    tmpResult.UNSAFE_isDismissibleContentDismissed(
                      dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
                    )
                  ) {
                    onClick();
                  } else {
                    const obj2 = { onClick };
                    showChatGDMUpsellActionSheetDefault(obj2);
                  }
                } else {
                  const tmpResult2 = openGroupDMAddMembers;
                  const result = tmpResult2.showGroupDMAddMembersRoadblock(
                    groupDMAddMembersAction,
                    constants.CHANNEL_TEXT_AREA,
                  );
                }
              }
            }
          } else {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          if (cResult[14] === groupDMNitroAudience) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          let result = stateFromStores;
          if (result) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
            result = obj5.isGroupDMNitroUpsellAudience(groupDMNitroAudience);
          }
          if (result) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          if (result) {
            class N {
              constructor() {
                const obj = DismissibleContentUnsafeUtils;
                if (
                  obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
                ) {
                  onClick2();
                } else {
                  const obj2 = { onClick: onClick2 };
                  showChatGDMUpsellActionSheetDefault(obj2);
                }
              }
            }
          }
          cResult[14] = groupDMNitroAudience;
          cResult[15] = enabled;
          cResult[16] = stateFromStores;
          cResult[17] = sum;
          cResult[18] = result;
        }
        class P {
          constructor() {
            const obj = openGroupDMAddMembers;
            const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
            if ("open" === groupDMAddMembersAction) {
              const tmpResult = DismissibleContentUnsafeUtils;
              if (
                tmpResult.UNSAFE_isDismissibleContentDismissed(
                  dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
                )
              ) {
                onClick();
              } else {
                const obj2 = { onClick };
                showChatGDMUpsellActionSheetDefault(obj2);
              }
            } else {
              const tmpResult2 = openGroupDMAddMembers;
              const result = tmpResult2.showGroupDMAddMembersRoadblock(
                groupDMAddMembersAction,
                constants.CHANNEL_TEXT_AREA,
              );
            }
          }
        }
        cResult[7] = channel.id;
        cResult[8] = tmp13;
        cResult[9] = P;
        tmp15 = P;
      }
      _require = stateFromStores(function* () {
        let obj3;
        let v3;
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            let tmp;
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
                closure_1 = tmp4;
                tmp = undefined;
                const tmp30 = c2;
                if (!tmp30) {
                  v3(true);
                  c2 = 1;
                  v3 = 1;
                  const obj5 = { value: obj3.mobileCreateInvite(tmp, constants.GROUP_DM), done: false };
                  obj3 = closure_2_1(first[113]);
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = value;
              if (null != tmp) {
                const obj = tmp(first[68]);
                obj.handleCopy(tmp, tmp, constants.GROUP_DM, false);
              }
              v3(false);
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp26) {
            v3 = 3;
            throw tmp26;
          }
        }
      });
      function t4() {
        return closure_0(...arguments);
      }
      cResult[4] = channel;
      cResult[5] = first;
      cResult[6] = t4;
      tmp14 = t4;
    }
  : function ChatBeginningRowGroupDM(channel) {
      let closure_2;
      let formatResult;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items5;
      let obj12;
      let relationshipCount;
      let str;
      let tmp22Result3;
      channel = channel.channel;
      let first;
      dependencyMap = undefined;
      onClick = undefined;
      let callback1;
      const tmp = closure_47();
      const tmp3 = dependencyMap;
      const arr = first(5049)(channel);
      let tmp4 = onClick(react.useState(false), 2);
      first = tmp4[0];
      dependencyMap = tmp6;
      let obj = channel(504);
      const items = [RelationshipStore];
      const stateFromStores = obj.useStateFromStores(items, () => relationshipCount.getRelationshipCount() > 0);
      const items1 = [channel];
      onClick = react.useCallback(() => {
        openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_TEXT_AREA);
      }, items1);
      const items2 = [channel, first, tmp6];
      callback1 = react.useCallback(
        callback1(function* () {
          let closure_0;
          let closure_1;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let tmp4;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  tmp4 = undefined;
                  if (!first) {
                    closure_2(true);
                    const obj3 = tmp(c2[113]);
                    c2 = 1;
                    c3 = 1;
                    const obj5 = { value: obj3.mobileCreateInvite(channel, constants.GROUP_DM), done: false };
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                tmp4 = value;
                if (null != tmp4) {
                  const obj = tmp4(c2[68]);
                  obj.handleCopy(tmp4, closure_129_0, constants.GROUP_DM, false);
                }
                closure_129_2(false);
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp26) {
              c3 = 3;
              throw tmp26;
            }
          }
        }),
        items2,
      );
      const items3 = [channel.id, onClick];
      const items4 = [callback1];
      const callback2 = react.useCallback(() => {
        const obj = openGroupDMAddMembers;
        const groupDMAddMembersAction = obj.getGroupDMAddMembersAction(channel.id, constants.CHANNEL_TEXT_AREA);
        if ("open" === groupDMAddMembersAction) {
          const tmpResult = DismissibleContentUnsafeUtils;
          if (
            tmpResult.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)
          ) {
            onClick();
          } else {
            const obj2 = { onClick };
            showChatGDMUpsellActionSheetDefault(obj2);
          }
        } else {
          const tmpResult2 = openGroupDMAddMembers;
          const result = tmpResult2.showGroupDMAddMembersRoadblock(
            groupDMAddMembersAction,
            constants.CHANNEL_TEXT_AREA,
          );
        }
      }, items3);
      const callback3 = react.useCallback(() => {
        const obj = DismissibleContentUnsafeUtils;
        if (obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER)) {
          callback1();
        } else {
          const obj2 = { onClick: callback1 };
          showChatGDMUpsellActionSheetDefault(obj2);
        }
      }, items4);
      let obj2 = first(11229);
      let obj3 = { location: GroupDMChatBeginning };
      const enabled = obj2.useConfig(obj3).enabled;
      let obj4 = channel(11226);
      const groupDMNitroAudience = obj4.useGroupDMNitroAudience();
      const recipients = channel.recipients;
      let num;
      if (recipients != null) {
        num = recipients.length;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + 1;
      let result = stateFromStores;
      const tmp16 = first(11227)({ useNitroCapExperiment: true });
      if (stateFromStores) {
        const tmp7Result = channel(11226);
        result = tmp7Result.isGroupDMNitroUpsellAudience(groupDMNitroAudience);
      }
      if (result) {
        result = enabled;
      }
      if (result) {
        result = sum >= tmp16;
      }
      let obj5 = {
        audience: groupDMNitroAudience,
        location: GroupDMChatBeginning,
        acquisitionStrategy: tmp7(11226).GroupDMNitroAcquisitionStrategy.MARKETING,
      };
      const id = channel.id;
      let obj6 = { style: tmp.centerHeader, children: items5 };
      const tmp2Result = first(11233);
      const tmp2ResultResult = tmp2Result(obj5);
      const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = tmp7(6736).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      const obj7 = { style: tmp.avatarRedesign, channel, size: channel(1188).AvatarSizes.XXLARGE, accessible: false };
      const tmp2Result2 = first(10661);
      items5 = [closure_44(tmp2Result2, obj7), , ,];
      const obj8 = { style: tmp.dmTitle, variant: str, color: "mobile-text-heading-primary", children: arr };
      str = "heading-xxl/extrabold";
      const Text = tmp7(4892).Text;
      if (null != arr) {
        str = "heading-xxl/extrabold";
        if (arr.length > 40) {
          str = "heading-lg/extrabold";
        }
      }
      items5[1] = closure_44(Text, obj8);
      const obj9 = { style: tmp.gdmText, variant: "text-md/medium", color: "text-default", children: formatResult };
      const Text2 = tmp7(4892).Text;
      const intl = tmp7(1126).intl;
      if (id === FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        const obj10 = { name: arr };
        formatResult = intl.format(tmp7(1126).t.MFwcqO, obj10);
      } else {
        formatResult = intl.string(tmp7(1126).t["0Q7uk0"]);
      }
      items5[2] = closure_44(Text2, obj9);
      let tmp20Result = null;
      if (id !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
        let tmp22Result;
        if (result) {
          const obj11 = {
            style: tmp.gdmInviteFriends,
            onPress: tmp2ResultResult,
            IconComponent: channel(8346).NitroWheelIcon,
            iconVariant: "default",
            title: intl3.string(channel(1126).t["LR+Ptf"]),
            subtitle: intl4.formatToPlainString(channel(1126).t["8o8Zk5"], obj12),
          };
          intl3 = tmp7(1126).intl;
          intl4 = tmp7(1126).intl;
          obj12 = { number };
          tmp22Result = closure_44(closure_62, obj11);
        } else {
          tmp22Result = null;
          if (stateFromStores) {
            const obj13 = {
              style: tmp.gdmInviteFriends,
              onPress: callback2,
              IconComponent: channel(9729).GroupPlusIcon,
              iconVariant: "default",
              title: intl2.string(channel(1126).t["LR+Ptf"]),
            };
            intl2 = tmp7(1126).intl;
            tmp22Result = closure_44(closure_62, obj13);
          }
        }
        const items6 = [tmp22Result, ,];
        const items7 = [tmp.gdmShareInviteLink];
        let prop = null;
        if (!stateFromStores) {
          prop = tmp.gdmShareInviteLinkNoRelationships;
        }
        items7[1] = prop;
        const obj14 = {
          style: items7,
          onPress: callback3,
          IconComponent: channel(4845).LinkIcon,
          title: intl5.string(channel(1126).t["3XVNyt"]),
          subtitle: intl6.string(channel(1126).t.qa9CQu),
          trailing: tmp22Result3,
        };
        intl5 = tmp7(1126).intl;
        intl6 = tmp7(1126).intl;
        tmp22Result3 = null;
        if (first) {
          tmp22Result3 = closure_44(closure_6, {});
        }
        items6[1] = closure_44(closure_62, obj14);
        let tmp22Result4 = null;
        if (channel.hasFlag(ChannelFlags.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) {
          const obj15 = { channelId: channel.id };
          tmp22Result4 = closure_44(tmp2(12312), obj15);
        }
        const obj16 = { children: items6 };
        items6[2] = tmp22Result4;
        tmp20Result = closure_46(closure_45, obj16);
      }
      items5[3] = tmp20Result;
      return closure_46(closure_7, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatBeginningRow(channelId) {
      let first;
      let shouldRender;
      let showingSpamBanner;
      let tmp7;
      let tmp9;
      let tmp = channelId;
      const obj = channelId(576);
      const cResult = obj.c(29);
      channelId = channelId.channelId;
      const guildId = channelId.guildId;
      ({ shouldRender, showingSpamBanner } = channelId);
      const tmp4 = closure_47();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        class E {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[4] = guildId;
        cResult[5] = E;
      } else {
        class E {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, E);
      [r10057, dependencyMap] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      if (shouldRender) {
        class E {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        shouldRender = null != stateFromStores;
      }
      let tmp14 = null;
      if (shouldRender) {
        class E {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
          class E {
            constructor() {
              return GuildStore.getGuild(guildId);
            }
          }
        } else {
          class E {
            constructor() {
              return GuildStore.getGuild(guildId);
            }
          }
        }
        tmp14 = tmp16;
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
      if (null != tmp14) {
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
        tmp19[0] = 0;
        cResult[17] = 0;
        cResult[18] = tmp19;
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
        let tmp21 = null != tmp14;
        if (tmp21) {
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
          const obj2 = { style: tmp4.contentWrapper, onLayout: M, children: tmp14 };
          tmp21 = closure_44(closure_7, obj2, channelId);
        }
        cResult[22] = channelId;
        cResult[23] = tmp14;
        cResult[24] = tmp4.contentWrapper;
        cResult[25] = tmp21;
      }
      const items2 = [tmp4.container, tmp19];
      cResult[19] = tmp4.container;
      cResult[20] = tmp19;
      cResult[21] = items2;
    }
  : function ChatBeginningRow(channelId) {
      let _undefined;
      let c2;
      let shouldRender;
      let tmp19Result;
      let tmp5;
      channelId = channelId.channelId;
      ({ guildId: importDefault, shouldRender } = channelId);
      dependencyMap = undefined;
      const showingSpamBanner = channelId.showingSpamBanner;
      let tmp = closure_47();
      const items = [ChannelStore];
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      const items1 = [GuildStore];
      const obj3 = channelId(504);
      const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
      [tmp5, c2] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      if (shouldRender) {
        shouldRender = null != stateFromStores;
      }
      let tmp7 = null;
      if (shouldRender) {
        let tmp9;
        if (THREAD_CHANNEL_TYPES.has(stateFromStores.type)) {
          const obj2 = { channel: stateFromStores };
          tmp9 = closure_44(closure_52, obj2);
        } else if (stateFromStores.isDM()) {
          const obj5 = { channel: stateFromStores, showingSpamBanner };
          tmp9 = closure_44(closure_60, obj5);
        } else if (stateFromStores.isGroupDM()) {
          const obj6 = { channel: stateFromStores };
          tmp9 = closure_44(closure_64, obj6);
        } else {
          tmp9 = null;
          if (null != stateFromStores1) {
            const obj7 = { guild: stateFromStores1, channel: stateFromStores };
            tmp9 = closure_44(closure_54, obj7);
          }
        }
        tmp7 = tmp9;
      }
      const callback = react.useCallback((nativeEvent) => {
        const height = nativeEvent.nativeEvent.layout.height;
        let tmp = _undefined((arg0) => {
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
      const tmp20 = PortalAccessibilityWorkaroundViewDefault;
      if (null != tmp7) {
        num = tmp5;
      }
      const obj8 = { style: items2, children: tmp19Result };
      items2[1] = { height: num };
      tmp19Result = null != tmp7;
      if (tmp19Result) {
        const obj9 = { style: tmp.contentWrapper, onLayout: callback, children: tmp7 };
        tmp19Result = closure_44(closure_7, obj9, channelId);
      }
      return closure_44(tmp20, obj8);
    };
size = size_mod;
let result = size.fileFinishedImporting("components_native/chat/ChatBeginningRow.tsx");

export default tmp7;
