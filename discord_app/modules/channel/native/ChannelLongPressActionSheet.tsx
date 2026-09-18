// discord_app/modules/channel/native/ChannelLongPressActionSheet.tsx
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import StageChannelPermissions from "../../stage_channels/StageChannelPermissions.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import useChannelName from "../useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import OptInChannelsActionCreators from "../../opt_in_channels/OptInChannelsActionCreators.tsx";
import NotificationSettingsUtils from "../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../actions/NotificationSettingsModalActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../actions/ChannelSettingsActionCreators.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../actions/native/CreateChannelModalActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import markChannelUnreadDefault from "../markChannelUnread.tsx";
import showChatGDMCustomizeActionSheetDefault from "../../group_dm/native/showChatGDMCustomizeActionSheet.tsx";
import openFavoritesGuildMoveToCategoryActionSheetDefault from "../../favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx";
import ChannelActionSheetUtils from "ChannelActionSheetUtils.tsx";
import InappropriateConversationsActionCreators from "../../self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx";
import MessageRequestActionCreators from "../../message_request/MessageRequestActionCreators.tsx";
import showThreadBrowserModalDefault from "../../threads/native/showThreadBrowserModal.tsx";
import ChannelCollapseActionCreatorsDefault from "../../../actions/ChannelCollapseActionCreators.tsx";
import hideLaunchPadDefault from "../../launchpad/native/hideLaunchPad.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelSpoilerAgreeStore from "../../spoiler_channels/ChannelSpoilerAgreeStore.tsx";
import StageInstanceStore from "../../stage_channels/StageInstanceStore.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import CategoryCollapseStore from "../../../stores/CategoryCollapseStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import CollapsedVoiceChannelStore from "../../../stores/CollapsedVoiceChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_35.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_35 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
  let guildStageVoice = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            closure_129_0 = guildStageVoice;
            const tmp21 = asyncRequireImpl;
            if (isGuildStageVoiceResult) {
              c2 = 2;
              c3 = 1;
              const obj4 = { value: tmp21(dependencyMap[20], dependencyMap.paths), done: false };
              return obj4;
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp21(dependencyMap[22], dependencyMap.paths), done: false };
              return obj5;
            }
            isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              value.openGuildVoiceModal(closure_129_0, "Channel List");
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            value.connectAndOpen(closure_129_0);
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
};
function ChannelLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  let items12;
  const tmp2 = guildId;
  const analyticsLocations = onClose(guildId[84])(onClose(guildId[85]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  let tmp3 = onClose(guildId[84]);
  const isFavoritesGuildSelected = channel(guildId[86]).useIsFavoritesGuildSelected();
  let obj = channel(guildId[86]);
  const items = [GuildStore];
  const stateFromStores = channel(guildId[87]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = channel(guildId[87]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = channel(guildId[87]).useStateFromStoresObject(items1, () => ({
    canManageChannel: PermissionStore.can(constants7.MANAGE_CHANNELS, channel),
    canCreateInstantInvite: PermissionStore.can(constants7.CREATE_INSTANT_INVITE, channel),
    canConnect: PermissionStore.can(constants7.CONNECT, channel),
    canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel),
  }));
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(guildId[87]);
  if (guildId == null) {
    guildId = closure_29;
  }
  const optInEnabledForGuild = channel(guildId[89]).useOptInEnabledForGuild(guildId);
  let obj4 = channel(guildId[89]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = tmp5(tmp2[87]).useStateFromStoresObject(items2, () => {
    const obj = {
      isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id),
      isParentOptedIn: null,
      isPinned: null,
    };
    let tmp = guildId;
    obj.isParentOptedIn = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData9;
    }
    obj.isPinned = UserGuildSettingsStore.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  const tmp5Result = tmp5(tmp2[87]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = tmp5(tmp2[87]).useStateFromStores(items3, () =>
    UserGuildSettingsStore.isChannelMuted(guildId, channel.id),
  );
  const tmp5Result13 = tmp5(tmp2[87]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = tmp5(tmp2[87]).useStateFromStores(items4, () =>
    ReadStateStore.hasUnreadOrMentions(channel.id),
  );
  const tmp5Result14 = tmp5(tmp2[87]);
  const canMarkChannelUnread = tmp5(tmp2[55]).useCanMarkChannelUnread(channel);
  const tmp5Result15 = tmp5(tmp2[55]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = tmp5(tmp2[87]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result16 = tmp5(tmp2[87]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = tmp5(tmp2[87]).useStateFromStores(items6, () =>
    CategoryCollapseStore.isCollapsed(channel.parent_id),
  );
  const tmp5Result17 = tmp5(tmp2[87]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = tmp5(tmp2[87]).useStateFromStores(items7, () =>
    CollapsedVoiceChannelStore.isCollapsed(channel.id),
  );
  const tmp5Result18 = tmp5(tmp2[87]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = tmp5(tmp2[87]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result19 = tmp5(tmp2[87]);
  let tmpResult = onClose(tmp2[28]);
  const tmpResultResult = onClose(tmp2[28])(channel, !channel.isThread());
  const DeveloperMode = tmp5(tmp2[91]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    let obj5 = { guild: stateFromStores, size: tmp5(tmp2[92]).GuildIconSizes.LARGE };
    let tmp24 = jsx(tmp(tmp2[92]), { guild: stateFromStores, size: tmp5(tmp2[92]).GuildIconSizes.LARGE });
    let tmp23 = jsx;
    const tmpResult2 = tmp(tmp2[92]);
  } else {
    tmp23 = jsx;
    const obj6 = { size: tmp5(tmp2[93]).AvatarSizes.LARGE, channel };
    tmp24 = jsx(tmp5(tmp2[93]).Avatar, { size: tmp5(tmp2[93]).AvatarSizes.LARGE, channel });
  }
  const tmp21 = onClose(tmp2[90])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = tmp5(tmp2[87]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result20 = tmp5(tmp2[87]);
  const tmp27 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [UserGuildSettingsStore];
  const stateFromStores8 = tmp5(tmp2[87]).useStateFromStores(items10, () =>
    UserGuildSettingsStore.isMessagesFavorite(channel.id),
  );
  const tmp5Result21 = tmp5(tmp2[87]);
  const inappropriateConversationsTiers = tmp5(tmp2[94]).useInappropriateConversationsTiers(channel);
  let isTier1;
  if (inappropriateConversationsTiers != null) {
    isTier1 = inappropriateConversationsTiers.isTier1;
  }
  let tmp31 = null != isTier1;
  if (tmp31) {
    let isTier11;
    if (inappropriateConversationsTiers != null) {
      isTier11 = inappropriateConversationsTiers.isTier1;
    }
    tmp31 = !isTier11;
  }
  let isTier2;
  if (inappropriateConversationsTiers != null) {
    isTier2 = inappropriateConversationsTiers.isTier2;
  }
  let tmp34 = null != isTier2;
  if (tmp34) {
    let isTier21;
    if (inappropriateConversationsTiers != null) {
      isTier21 = inappropriateConversationsTiers.isTier2;
    }
    tmp34 = !isTier21;
  }
  const tmp5Result22 = tmp5(tmp2[94]);
  const items11 = [ChannelSpoilerAgreeStore];
  const stateFromStores9 = tmp5(tmp2[87]).useStateFromStores(items11, () =>
    ChannelSpoilerAgreeStore.didAgree(channel.id),
  );
  const tmp5Result23 = tmp5(tmp2[87]);
  const tmp38 = onClose(tmp2[96])(channel);
  const tmp39 = onClose(tmp2[97])(channel);
  if (stateFromStores7 != null) {
    const isStaffResult = stateFromStores7.isStaff();
  }
  closure_129_0 = channel;
  closure_129_1 = stateFromStores1;
  closure_129_2 = isOptedIn;
  closure_129_3 = isPinned;
  closure_129_4 = stateFromStores8;
  closure_129_5 = analyticsLocations;
  closure_129_6 = tmp39;
  const obj7 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj7.buttons;
    const obj8 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[23]).intl;
    obj8.label = intl.string(tmp5(tmp2[23]).t.LYju5J);
    obj8.IconComponent = tmp5(tmp2[24]).UserCircleIcon;
    obj8.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    };
    buttons.push(obj8);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj7.buttons;
      const obj9 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp5(tmp2[23]).intl;
      obj9.label = intl2.string(tmp5(tmp2[23]).t.jsvgc3);
      obj9.IconComponent = tmp5(tmp2[26]).UserMinusIcon;
      obj9.onPress = function onPress() {
        ChannelActionCreatorsDefault.closePrivateChannel(
          channel.id,
          SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id,
        );
      };
      buttons1.push(obj9);
    }
  }
  const obj10 = { sectionKey: "gdm", buttons: [] };
  const obj11 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuildSelected) {
      const buttons2 = obj11.buttons;
      const obj12 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
      let intl3 = tmp5(tmp2[23]).intl;
      obj12.label = intl3.string(tmp5(tmp2[23]).t["26C4oi"]);
      obj12.IconComponent = tmp5(tmp2[26]).UserMinusIcon;
      obj12.onPress = function onPress() {
        const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        const intl = util.intl;
        const intl2 = util.intl;
        let formatResult = intl2.format(util.t.SSIVOu, { name: channelName });
        let formatToPlainStringResult1 = intl.formatToPlainString(util.t.hJ5Ap4, { name: channelName });
        if (channel.isManaged()) {
          const intl3 = util.intl;
          const obj2 = { name: channelName };
          formatToPlainStringResult1 = intl3.formatToPlainString(util.t.hVGjEW, obj2);
          const intl4 = util.intl;
          const obj3 = { name: channelName };
          formatResult = intl4.format(util.t.IK1Qvs, obj3);
        }
        const formatToPlainStringResult = intl.formatToPlainString(util.t.hJ5Ap4, { name: channelName });
        const obj5 = {
          title: formatToPlainStringResult1,
          body: formatResult,
          confirmText: null,
          cancelText: null,
          onConfirm: null,
        };
        const intl5 = util.intl;
        obj5.confirmText = intl5.string(util.t.p89ACt);
        const intl6 = util.intl;
        obj5.cancelText = intl6.string(util.t.gm1Vej);
        obj5.onConfirm = function onConfirm() {
          onClose(guildId[27]).closePrivateChannel(
            user.id,
            currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id,
          );
        };
        AlertActionCreatorsDefault.show(obj5);
      };
      buttons2.push(obj12);
    }
    const buttons3 = obj10.buttons;
    const obj13 = { label: null, IconComponent: null, onPress: null };
    let intl4 = tmp5(tmp2[23]).intl;
    obj13.label = intl4.string(tmp5(tmp2[23]).t["1r5E+m"]);
    obj13.IconComponent = tmp5(tmp2[30]).PencilIcon;
    obj13.onPress = function onPress() {
      showChatGDMCustomizeActionSheetDefault({ channelId: channel.id });
    };
    buttons3.push(obj13);
    if (tmp27) {
      const buttons4 = obj10.buttons;
      const obj14 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp5(tmp2[23]).intl;
      obj14.label = intl5.string(tmp5(tmp2[23]).t.OQ9MKu);
      obj14.IconComponent = tmp5(tmp2[32]).LinkIcon;
      obj14.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11181, dependencyMap.paths), { channelId: channel.id });
      };
      buttons4.push(obj14);
    }
  }
  items12 = [];
  if (obj7.buttons.length > 0) {
    items12.push(obj7);
  }
  let tmp47 = isFavoritesGuildSelected;
  if (isFavoritesGuildSelected) {
    tmp47 = null != channel.guild_id;
  }
  if (tmp47) {
    tmp47 = !channel.isCategory();
  }
  if (tmp47) {
    const obj15 = { sectionKey: "go-to-server", buttons: null };
    const obj16 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp5(tmp2[23]).intl;
    obj16.label = intl6.string(tmp(tmp2[35])["3KruG3"]);
    obj16.IconComponent = tmp5(tmp2[36]).ServerIcon;
    obj16.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items13 = [obj16];
    obj15.buttons = items13;
    items12.push(obj15);
  }
  if (null != tmp38) {
    const obj17 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj18 = { label: tmp38.label, IconComponent: tmp5(tmp2[38]).PlusLargeIcon, onPress: tmp38.perform };
    const items14 = [obj18];
    obj17.buttons = items14;
    items12.push(obj17);
  }
  const items15 = [];
  if (null != tmp39) {
    const obj19 = {
      label: tmp39.label,
      IconComponent: tmp5(tmp2[39]).FolderIcon,
      onPress() {
        openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, ChannelSpoilerAgreeStore);
      },
    };
    items15.push(obj19);
  }
  const tmp51 = onClose(tmp2[41])(onClose(tmp2[95])(channel, "ChannelLongPressActionSheet"));
  if (null != tmp51) {
    items15.push(tmp51);
  }
  if (items15.length > 0) {
    const obj20 = { sectionKey: "favorites", buttons: items15 };
    items12.push(obj20);
  }
  const guildId1 = channel.getGuildId();
  closure_129_7 = guildId1;
  const obj21 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj21.buttons;
    const obj22 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[23]).intl;
    obj22.label = intl7.string(tmp5(tmp2[23]).t.VINpSK);
    obj22.IconComponent = tmp5(tmp2[42]).GroupPlusIcon;
    obj22.onPress = function onPress() {
      const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, {
        source: constants6.CONTEXT_MENU,
      });
    };
    buttons5.push(obj22);
  }
  let isThreadResult = isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isThreadResult = null == guildId1;
  }
  if (!isThreadResult) {
    isThreadResult = channel.isThread();
  }
  if (!isThreadResult) {
    if (channel.isCategory()) {
      if (optInEnabledForGuild) {
        const buttons6 = obj21.buttons;
        const push = buttons6.push;
        const obj23 = { label: null, IconComponent: null, onPress: null };
        const intl9 = tmp5(tmp2[23]).intl;
        const string2 = intl9.string;
        const t2 = tmp5(tmp2[23]).t;
        if (isParentOptedIn) {
          obj23.label = string2(t2.jNphKT);
          obj23.IconComponent = tmp5(tmp2[47]).XSmallIcon;
          obj23.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(StageInstanceStore, tmp.parent_id, false, obj2);
            }
          };
          push(obj23);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
          } else {
            string2Result = string2(t2["9mysCh"]);
          }
          obj23.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp5(tmp2[47]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[38]).PlusLargeIcon;
          }
          obj23.IconComponent = PlusLargeIcon;
          obj23.onPress = function onPress() {
            OptInChannelsActionCreators.setOptInChannel(StageInstanceStore, channel.id, !guildId, {
              section: constants3.CHANNEL_ACTION_SHEET,
            });
          };
          push(obj23);
        }
      }
    } else {
      const buttons7 = obj21.buttons;
      const intl8 = tmp5(tmp2[23]).intl;
      const string = intl8.string;
      let t = tmp5(tmp2[23]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj24 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[44]).PinIcon,
        onPress() {
          OptInChannelsActionCreators.setIsFavorite(StageInstanceStore, channel.id, !setting, {
            section: constants3.CHANNEL_ACTION_SHEET,
          });
          if (!setting) {
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            if (null != rootNavigationRef) {
              const currentRoute = rootNavigationRef.getCurrentRoute();
              let name;
              if (currentRoute != null) {
                name = currentRoute.name;
              }
              const currentRoute1 = rootNavigationRef.getCurrentRoute();
              if (currentRoute1 != null) {
                const params = currentRoute1.params;
              }
              let tmp10 = "guilds" === name;
              if (tmp10) {
                guildId = undefined;
                if (params != null) {
                  guildId = params.guildId;
                }
                tmp10 = guildId === StageInstanceStore;
              }
              if (tmp10) {
                const obj3 = { jumpToChannelId: channel.id };
                rootNavigationRef.setParams(obj3);
              }
            }
            const tmpResult = RootNavigationRef;
          }
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
        },
      };
      t = buttons7.push(obj24);
    }
  }
  let isForumLikeChannelResult = closure_9(channel.type);
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = closure_10(channel.type);
  }
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (isForumLikeChannelResult) {
    const buttons8 = obj21.buttons;
    const obj25 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl10 = tmp5(tmp2[23]).intl;
    obj25.label = intl10.string(tmp5(tmp2[23]).t.WqhZss);
    obj25.IconComponent = tmp5(tmp2[32]).LinkIcon;
    obj25.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj25);
  }
  let isPrivateResult = !isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj26 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (tmp31) {
      const buttons9 = obj26.buttons;
      const obj27 = { label: null, IconComponent: null, onPress: null };
      const intl12 = tmp5(tmp2[23]).intl;
      obj27.label = intl12.string(tmp5(tmp2[23]).t.EuzCET);
      obj27.IconComponent = tmp5(tmp2[49]).WarningIcon;
      obj27.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(
          channel.id,
          SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
        );
      };
      buttons9.push(obj27);
    }
    if (tmp34) {
      const buttons10 = obj26.buttons;
      const obj28 = { label: null, IconComponent: null, onPress: null };
      const intl13 = tmp5(tmp2[23]).intl;
      obj28.label = intl13.string(tmp5(tmp2[23]).t["tBw/1i"]);
      obj28.IconComponent = tmp5(tmp2[49]).WarningIcon;
      obj28.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(
          channel.id,
          SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      };
      buttons10.push(obj28);
    }
    if (obj26.buttons.length > 0) {
      items12.push(obj26);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj29 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj29.buttons;
            const obj30 = { label: null, IconComponent: null, onPress: null };
            const intl14 = tmp5(tmp2[23]).intl;
            obj30.label = intl14.string(tmp5(tmp2[23]).t.L6623r);
            obj30.IconComponent = tmp5(tmp2[51]).InboxIcon;
            obj30.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons11.push(obj30);
          }
          const buttons12 = obj29.buttons;
          const obj31 = { label: null, IconComponent: null, onPress: null };
          const intl15 = tmp5(tmp2[23]).intl;
          obj31.label = intl15.string(tmp5(tmp2[23]).t["85YWlY"]);
          obj31.IconComponent = tmp5(tmp2[51]).InboxIcon;
          obj31.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons12.push(obj31);
          if (obj29.buttons.length > 0) {
            items12.push(obj29);
          }
        }
      }
    }
    if (obj21.buttons.length > 0) {
      items12.push(obj21);
    }
    const obj32 = { sectionKey: "notifications", buttons: [] };
    if (tmp76) {
      const MarkChannelUnreadExperiment = tmp5(tmp2[53]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!stateFromStores2) {
          if (canMarkChannelUnread) {
            const buttons13 = obj32.buttons;
            const obj33 = { label: null, IconComponent: null, onPress: null };
            const intl16 = tmp5(tmp2[23]).intl;
            obj33.label = intl16.string(tmp5(tmp2[23]).t.RpE9k7);
            obj33.IconComponent = tmp5(tmp2[54]).ChatMarkUnreadIcon;
            obj33.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons13.push(obj33);
          }
        }
      }
      const buttons14 = obj32.buttons;
      const obj34 = { label: null, IconComponent: null, onPress: null };
      const intl17 = tmp5(tmp2[23]).intl;
      obj34.label = intl17.string(tmp5(tmp2[23]).t.e6RscS);
      obj34.IconComponent = tmp5(tmp2[56]).EyeIcon;
      obj34.onPress = function onPress() {
        ReadStateActionCreators.ackChannel(channel, {
          section: constants3.CHANNEL_ACTION_SHEET,
          object: constants2.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: constants.ACK_MANUAL,
        });
      };
      buttons14.push(obj34);
    }
    if (!closure_12(channel.type)) {
      if (tmp86) {
        const buttons15 = obj32.buttons;
        const obj35 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl25 = tmp5(tmp2[23]).intl;
        obj35.label = intl25.string(tmp5(tmp2[23]).t.h850Ss);
        obj35.IconComponent = tmp5(tmp2[62]).ChannelNotificationIcon;
        obj35.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons15.push(obj35);
      }
      if (obj32.buttons.length > 0) {
        items12.push(obj32);
      }
      const obj36 = { sectionKey: "threads", buttons: [] };
      tmp86 =
        closure_9(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp89) {
        const buttons16 = obj36.buttons;
        const obj37 = { label: null, IconComponent: null, onPress: null };
        const intl26 = tmp5(tmp2[23]).intl;
        obj37.label = intl26.string(tmp5(tmp2[23]).t.B2panI);
        obj37.IconComponent = tmp5(tmp2[64]).ThreadIcon;
        obj37.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons16.push(obj37);
      }
      if (obj36.buttons.length > 0) {
        items12.push(obj36);
      }
      const obj38 = { sectionKey: "voice", buttons: [] };
      tmp89 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp21;
      if (!tmp93) {
        if (channel.isGuildVocal()) {
          const buttons17 = obj38.buttons;
          const push2 = buttons17.push;
          const obj39 = { label: null, IconComponent: null, onPress: null };
          const intl28 = tmp5(tmp2[23]).intl;
          const string6 = intl28.string;
          const t6 = tmp5(tmp2[23]).t;
          if (isGuildStageVoiceResult) {
            obj39.label = string6(t6["7vb2cc"]);
            obj39.IconComponent = tmp5(tmp2[67]).StageIcon;
            obj39.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj39);
            const buttons18 = obj38.buttons;
            const obj40 = { label: null, IconComponent: null, onPress: null };
            const intl29 = tmp5(tmp2[23]).intl;
            obj40.label = intl29.string(tmp5(tmp2[23]).t.ZXxLQg);
            obj40.IconComponent = tmp5(tmp2[68]).ChatIcon;
            obj40.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11217, dependencyMap.paths), { channel });
              hideLaunchPadDefault();
            };
            buttons18.push(obj40);
          } else {
            obj39.label = string6(t6.ZXxLQg);
            obj39.IconComponent = tmp5(tmp2[68]).ChatIcon;
            obj39.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj39);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp99) {
          const buttons19 = obj38.buttons;
          const obj41 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl30 = tmp5(tmp2[23]).intl;
          obj41.label = intl30.string(tmp5(tmp2[23]).t.saZaRb);
          obj41.IconComponent = tmp5(tmp2[47]).XSmallIcon;
          obj41.onPress = function onPress() {
            return (async () => {
              if (paths === 2) {
                paths = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  paths = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      paths = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      paths = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      c1 = 1;
                      paths = 1;
                      const obj4 = { value: tmp4(paths[21])(paths[73], paths.paths), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    paths = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    paths = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    value.openEndStageModal(closure_128_0);
                    paths = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp10) {
                  paths = tmp;
                  throw tmp10;
                }
              }
            })();
          };
          buttons19.push(obj41);
        }
        tmp99 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
        if (tmp101) {
          const buttons20 = obj38.buttons;
          const obj42 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl31 = tmp5(tmp2[23]).intl;
          obj42.label = intl31.string(tmp5(tmp2[23]).t["+78Pfm"]);
          obj42.IconComponent = tmp5(tmp2[74]).FlagIcon;
          obj42.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons20.push(obj42);
        }
        if (obj38.buttons.length > 0) {
          items12.push(obj38);
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores9) {
            const obj43 = { sectionKey: "spoiler", buttons: [] };
            const buttons21 = obj43.buttons;
            const obj44 = { label: null, IconComponent: null, onPress: null };
            const intl32 = tmp5(tmp2[23]).intl;
            obj44.label = intl32.string(tmp5(tmp2[23]).t.ix2UVZ);
            obj44.IconComponent = tmp5(tmp2[76]).EyeSlashIcon;
            obj44.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons21.push(obj44);
            items12.push(obj43);
          }
        }
        const obj45 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons22 = obj45.buttons;
          const intl33 = tmp5(tmp2[23]).intl;
          const string7 = intl33.string;
          const t7 = tmp5(tmp2[23]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
          } else {
            string7Result = string7(t7["3gUsJb"]);
          }
          const obj46 = {
            label: string7Result,
            IconComponent: tmp5(tmp2[78]).SettingsIcon,
            onPress() {
              ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
              ChannelSettingsActionCreatorsDefault.open(channel.id);
            },
          };
          buttons22.push(obj46);
          isCategoryResult = channel.isCategory();
          if (tmp109) {
            const buttons23 = obj45.buttons;
            const intl34 = tmp5(tmp2[23]).intl;
            const string8 = intl34.string;
            const t8 = tmp5(tmp2[23]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj47 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[38]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[79]).CopyIcon;
            }
            obj47.IconComponent = CopyIcon;
            obj47.onPress = function onPress() {
              let type;
              if (!channel.isCategory()) {
                type = channel.type;
              }
              guildId = channel.getGuildId();
              const obj = CreateChannelModalActionCreatorsDefault;
              let id;
              if (!channel.isCategory()) {
                id = channel.id;
              }
              obj.open(type, guildId, channel.isCategory() ? channel.id : channel.parent_id, id);
              const tmp3 = channel.isCategory() ? channel.id : channel.parent_id;
            };
            obj47 = buttons23.push(obj47);
            isCategoryResult1 = channel.isCategory();
          }
          tmp109 =
            closure_9(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
        }
        if (setting) {
          const buttons24 = obj45.buttons;
          const obj48 = { label: null, IconComponent: null, onPress: null };
          const intl35 = tmp5(tmp2[23]).intl;
          obj48.label = intl35.string(tmp5(tmp2[23]).t.gFHI3k);
          obj48.IconComponent = tmp5(tmp2[81]).IdIcon;
          obj48.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons24.push(obj48);
        }
        if (obj45.buttons.length > 0) {
          items12.push(obj45);
        }
        if (obj10.buttons.length > 0) {
          items12.push(obj10);
        }
        if (obj11.buttons.length > 0) {
          items12.push(obj11);
        }
        let formatToPlainStringResult;
        if (channel.isGroupDM()) {
          const intl36 = tmp5(tmp2[23]).intl;
          const obj49 = { members: channel.recipients.length + 1 };
          formatToPlainStringResult = intl36.formatToPlainString(tmp5(tmp2[23]).t.ABMKx3, obj49);
        }
        const items16 = [items12.length, setting, onClose];
        const effect = items12.useEffect(() => {
          if (!tmp) {
            onClose();
          }
          tmp = 0 !== items12.length || setting;
        }, items16);
        const obj50 = { value: analyticsLocations, children: null };
        const obj51 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp101 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
        obj51.startExpanded = tmp5(tmp2[99]).isMetaQuest();
        const obj52 = { icon: tmp24, title: tmpResultResult, subtitle: formatToPlainStringResult };
        obj51.header = tmp23(tmp5(tmp2[100]).ActionSheetIconHeader, obj52);
        obj51.children = items12.map((buttons) => {
          const obj = { hasIcons: true, children: null };
          buttons = buttons.buttons;
          obj.children = buttons.map((onPress, index) => {
            onPress = onPress.onPress;
            let str = "default";
            ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
            if (onPress.isDestructive) {
              str = "danger";
            }
            return closure_1_33(
              channel(7395).ActionSheetRow,
              {
                variant: str,
                label,
                icon: closure_1_33(channel(7395).ActionSheetRow.Icon, {
                  IconComponent,
                  style: iconStyle,
                  disableColor,
                }),
                trailing,
                onPress() {
                  if (onPress != null) {
                    tmp();
                  }
                  onClose();
                },
              },
              index,
            );
          });
          return jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: null }, buttons.sectionKey);
        });
        obj50.children = tmp23(tmp5(tmp2[98]).ActionSheet, obj51);
        return tmp23(tmp5(tmp2[84]).AnalyticsLocationProvider, obj50);
      } else {
        const buttons25 = obj38.buttons;
        const intl27 = tmp5(tmp2[23]).intl;
        const string5 = intl27.string;
        let t5 = tmp5(tmp2[23]).t;
        if (stateFromStores5) {
          let string5Result = string5(t5.JYF2Oa);
        } else {
          string5Result = string5(t5.LxzNiu);
        }
        const obj53 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[24]).UserCircleIcon,
          onPress() {
            ChannelCollapseActionCreatorsDefault.update(channel.id);
          },
        };
        t5 = buttons25.push(obj53);
      }
      tmp93 = closure_10(channel.type) && !stateFromStores4;
    }
    const intl18 = tmp5(tmp2[23]).intl;
    const string4 = intl18.string;
    const t4 = tmp5(tmp2[23]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl24 = tmp5(tmp2[23]).intl;
        let stringResult1 = intl24.string(tmp5(tmp2[23]).t.olaBeG);
        const buttons26 = obj32.buttons;
        const obj54 = {
          label: stringResult1,
          IconComponent: tmp5(tmp2[59]).BellIcon,
          onPress() {
            guildId = channel.getGuildId();
            const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(
              guildId,
              channel.id,
              { muted: !onClose },
              NotificationLabel.muted(!onClose),
            );
          },
        };
        buttons26.push(obj54);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl22 = tmp5(tmp2[23]).intl;
            stringResult1 = intl22.string(tmp5(tmp2[23]).t["Cq/TzF"]);
          }
        }
      }
      const intl23 = tmp5(tmp2[23]).intl;
      stringResult1 = intl23.string(tmp5(tmp2[23]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl21 = tmp5(tmp2[23]).intl;
        let stringResult2 = intl21.string(tmp5(tmp2[23]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl19 = tmp5(tmp2[23]).intl;
              stringResult2 = intl19.string(tmp5(tmp2[23]).t.bUUd8q);
            }
          }
        }
        const intl20 = tmp5(tmp2[23]).intl;
        stringResult2 = intl20.string(tmp5(tmp2[23]).t.LO3kaK);
      }
      const buttons27 = obj32.buttons;
      const obj55 = {
        label: stringResult2,
        IconComponent: tmp5(tmp2[58]).BellSlashIcon,
        onPress() {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (tmp) {
            const obj2 = {
              channelId: channel.id,
              initialRouteName: constants.MUTE,
              source: "channel-long-press-sheet",
            };
            rootNavigationRef.navigate("sidebar", obj2);
          }
          tmp = null != rootNavigationRef && rootNavigationRef.isReady();
        },
      };
      buttons27.push(obj55);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp76 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons28 = obj21.buttons;
    const intl11 = tmp5(tmp2[23]).intl;
    const string3 = intl11.string;
    let t3 = tmp5(tmp2[23]).t;
    if (stateFromStores8) {
      let string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj56 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[44]).PinIcon,
      onPress() {
        OptInChannelsActionCreators.setMessagesFavorite(channel.id, !items12);
      },
    };
    t3 = buttons28.push(obj56);
  }
  const tmp37 = onClose(tmp2[95])(channel, "ChannelLongPressActionSheet");
}
const SafetyWarningTypes = fn(11165).SafetyWarningTypes;
const ChannelRecord = fn(1962);
({
  isGuildTextChannelType: closure_9,
  isGuildVocalChannelType: c10,
  isReadableType: closure_11,
  isTextChannel: closure_12,
} = ChannelRecord);
const Constants = fn(1074);
({
  AnalyticsObjectTypes: closure_23,
  AnalyticsObjects: closure_24,
  AnalyticsSections: closure_25,
  ChannelSettingsSections: closure_26,
  ChannelTypes: closure_27,
  InstantInviteSources: closure_28,
  NULL_STRING_GUILD_ID: closure_29,
  Permissions: closure_30,
  ZERO_STRING_GUILD_ID: items,
} = Constants);
let closure_32 = fn(11166).ChannelDetailsNavigatorScreens;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, onClose };
    tmp3 = <ChannelLongPressActionSheetConnected channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
}
