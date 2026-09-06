// discord_app/modules/channel/native/ChannelLongPressActionSheet.tsx
import router_utils from "../../routing/router_utils.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
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
  return (async (arg0, value) => {
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
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = guildStageVoice;
            const tmp21 = asyncRequireImpl;
            if (isGuildStageVoiceResult) {
              c2 = 2;
              c3 = 1;
              const obj1 = { value: tmp21(tmp20[20], tmp20.paths), done: false };
              return obj1;
            } else {
              c2 = 1;
              c3 = 1;
              const obj2 = { value: tmp21(tmp20[22], tmp20.paths), done: false };
              return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
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
          obj = { value, done: true };
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
  const analyticsLocations = onClose(guildId[82])(onClose(guildId[83]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  let obj = channel(guildId[84]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  let obj1 = channel(guildId[85]);
  const items = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = channel(guildId[85]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({
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
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guildId);
  let tmp5Result = tmp5(tmp2[85]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
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
  tmp5Result = tmp5(tmp2[85]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = tmp5Result.useStateFromStores(items3, () =>
    UserGuildSettingsStore.isChannelMuted(guildId, channel.id),
  );
  let tmp10 = UserGuildSettingsStore;
  const tmp3 = onClose(guildId[82]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = tmp5(tmp2[85]).useStateFromStores(items4, () =>
    ReadStateStore.hasUnreadOrMentions(channel.id),
  );
  const tmp5Result1 = tmp5(tmp2[85]);
  const canMarkChannelUnread = tmp5(tmp2[53]).useCanMarkChannelUnread(channel);
  const tmp5Result2 = tmp5(tmp2[53]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = tmp5(tmp2[85]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result3 = tmp5(tmp2[85]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = tmp5(tmp2[85]).useStateFromStores(items6, () =>
    CategoryCollapseStore.isCollapsed(channel.parent_id),
  );
  const tmp5Result4 = tmp5(tmp2[85]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = tmp5(tmp2[85]).useStateFromStores(items7, () =>
    CollapsedVoiceChannelStore.isCollapsed(channel.id),
  );
  const tmp5Result5 = tmp5(tmp2[85]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = tmp5(tmp2[85]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result6 = tmp5(tmp2[85]);
  const tmp19 = onClose(tmp2[28])(channel, true);
  const DeveloperMode = tmp5(tmp2[89]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, size: tmp5(tmp2[90]).GuildIconSizes.LARGE };
    let tmp23 = jsx(tmp(tmp2[90]), { guild: stateFromStores, size: tmp5(tmp2[90]).GuildIconSizes.LARGE });
    let tmp22 = jsx;
    let tmpResult = tmp(tmp2[90]);
  } else {
    tmp22 = jsx;
    obj = { size: tmp5(tmp2[91]).AvatarSizes.LARGE, channel };
    tmp23 = jsx(tmp5(tmp2[91]).Avatar, { size: tmp5(tmp2[91]).AvatarSizes.LARGE, channel });
  }
  const tmp20 = onClose(tmp2[88])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = tmp5(tmp2[85]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result7 = tmp5(tmp2[85]);
  const tmp26 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [tmp10];
  const stateFromStores8 = tmp5(tmp2[85]).useStateFromStores(items10, () =>
    UserGuildSettingsStore.isMessagesFavorite(channel.id),
  );
  const tmp5Result8 = tmp5(tmp2[85]);
  const inappropriateConversationsTiers = tmp5(tmp2[92]).useInappropriateConversationsTiers(channel);
  let isTier1;
  if (inappropriateConversationsTiers != null) {
    isTier1 = inappropriateConversationsTiers.isTier1;
  }
  let tmp30 = null != isTier1;
  if (tmp30) {
    let isTier11;
    if (inappropriateConversationsTiers != null) {
      isTier11 = inappropriateConversationsTiers.isTier1;
    }
    tmp30 = !isTier11;
  }
  let isTier2;
  if (inappropriateConversationsTiers != null) {
    isTier2 = inappropriateConversationsTiers.isTier2;
  }
  let tmp33 = null != isTier2;
  if (tmp33) {
    let isTier21;
    if (inappropriateConversationsTiers != null) {
      isTier21 = inappropriateConversationsTiers.isTier2;
    }
    tmp33 = !isTier21;
  }
  const tmp5Result9 = tmp5(tmp2[92]);
  const items11 = [ChannelSpoilerAgreeStore];
  const stateFromStores9 = tmp5(tmp2[85]).useStateFromStores(items11, () =>
    ChannelSpoilerAgreeStore.didAgree(channel.id),
  );
  const tmp5Result10 = tmp5(tmp2[85]);
  const tmp37 = onClose(tmp2[94])(channel);
  if (stateFromStores7 != null) {
    const isStaffResult = stateFromStores7.isStaff();
  }
  closure_129_0 = channel;
  closure_129_1 = stateFromStores1;
  closure_129_2 = isOptedIn;
  closure_129_3 = isPinned;
  closure_129_4 = stateFromStores8;
  closure_129_5 = analyticsLocations;
  obj1 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj1.buttons;
    obj2 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[23]).intl;
    obj2.label = intl.string(tmp5(tmp2[23]).t.LYju5J);
    obj2.IconComponent = tmp5(tmp2[24]).UserCircleIcon;
    obj2.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    };
    buttons.push(obj2);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj1.buttons;
      obj3 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp5(tmp2[23]).intl;
      obj3.label = intl2.string(tmp5(tmp2[23]).t.jsvgc3);
      obj3.IconComponent = tmp5(tmp2[26]).UserMinusIcon;
      obj3.onPress = function onPress() {
        ChannelActionCreatorsDefault.closePrivateChannel(
          channel.id,
          SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id,
        );
      };
      buttons1.push(obj3);
    }
  }
  const obj4 = { sectionKey: "gdm", buttons: [] };
  const obj5 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuildSelected) {
      const buttons2 = obj5.buttons;
      const obj6 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
      let intl3 = tmp5(tmp2[23]).intl;
      obj6.label = intl3.string(tmp5(tmp2[23]).t["26C4oi"]);
      obj6.IconComponent = tmp5(tmp2[26]).UserMinusIcon;
      obj6.onPress = function onPress() {
        let obj = useChannelName;
        const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
        const intl = util.intl;
        const intl2 = util.intl;
        let formatResult = intl2.format(util.t.SSIVOu, { name: channelName });
        let formatToPlainStringResult1 = intl.formatToPlainString(util.t.hJ5Ap4, { name: channelName });
        if (channel.isManaged()) {
          const intl3 = tmp(1114).intl;
          obj = { name: channelName };
          formatToPlainStringResult1 = intl3.formatToPlainString(tmp(1114).t.hVGjEW, obj);
          const intl4 = tmp(1114).intl;
          obj = { name: channelName };
          formatResult = intl4.format(tmp(1114).t.IK1Qvs, obj);
        }
        const formatToPlainStringResult = intl.formatToPlainString(util.t.hJ5Ap4, { name: channelName });
        const obj1 = {
          title: formatToPlainStringResult1,
          body: formatResult,
          confirmText: null,
          cancelText: null,
          onConfirm: null,
        };
        const intl5 = tmp(1114).intl;
        obj1.confirmText = intl5.string(util.t.p89ACt);
        const intl6 = tmp(1114).intl;
        obj1.cancelText = intl6.string(util.t.gm1Vej);
        obj1.onConfirm = function onConfirm() {
          onClose(guildId[27]).closePrivateChannel(
            user.id,
            currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id,
          );
        };
        AlertActionCreatorsDefault.show(obj1);
      };
      buttons2.push(obj6);
    }
    const buttons3 = obj4.buttons;
    const obj7 = { label: null, IconComponent: null, onPress: null };
    let intl4 = tmp5(tmp2[23]).intl;
    obj7.label = intl4.string(tmp5(tmp2[23]).t["1r5E+m"]);
    obj7.IconComponent = tmp5(tmp2[30]).PencilIcon;
    obj7.onPress = function onPress() {
      showChatGDMCustomizeActionSheetDefault({ channelId: channel.id });
    };
    buttons3.push(obj7);
    if (tmp26) {
      const buttons4 = obj4.buttons;
      const obj8 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp5(tmp2[23]).intl;
      obj8.label = intl5.string(tmp5(tmp2[23]).t.OQ9MKu);
      obj8.IconComponent = tmp5(tmp2[32]).LinkIcon;
      obj8.onPress = function onPress() {
        const obj = { channelId: channel.id };
        obj.pushLazy(asyncRequireImpl(10931, dependencyMap.paths), obj);
      };
      buttons4.push(obj8);
    }
  }
  items12 = [];
  if (obj1.buttons.length > 0) {
    items12.push(obj1);
  }
  let tmp45 = isFavoritesGuildSelected;
  if (isFavoritesGuildSelected) {
    tmp45 = null != channel.guild_id;
  }
  if (tmp45) {
    tmp45 = !channel.isCategory();
  }
  if (tmp45) {
    const obj9 = { sectionKey: "go-to-server", buttons: null };
    const obj10 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp5(tmp2[23]).intl;
    obj10.label = intl6.string(tmp(tmp2[35])["3KruG3"]);
    obj10.IconComponent = tmp5(tmp2[36]).ServerIcon;
    obj10.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items13 = [obj10];
    obj9.buttons = items13;
    items12.push(obj9);
  }
  if (null != tmp37) {
    const obj11 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj12 = { label: tmp37.label, IconComponent: tmp5(tmp2[38]).PlusLargeIcon, onPress: tmp37.perform };
    const items14 = [obj12];
    obj11.buttons = items14;
    items12.push(obj11);
  }
  const tmp48 = onClose(tmp2[39])(onClose(tmp2[93])(channel, "ChannelLongPressActionSheet"));
  if (null != tmp48) {
    const obj13 = { sectionKey: "favorites", buttons: null };
    const items15 = [tmp48];
    obj13.buttons = items15;
    items12.push(obj13);
  }
  const guildId1 = channel.getGuildId();
  closure_129_6 = guildId1;
  const obj14 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj14.buttons;
    const obj15 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[23]).intl;
    obj15.label = intl7.string(tmp5(tmp2[23]).t.VINpSK);
    obj15.IconComponent = tmp5(tmp2[40]).GroupPlusIcon;
    obj15.onPress = function onPress() {
      const obj = { source: constants6.CONTEXT_MENU };
      const result = obj.showInstantInviteActionSheet(channel, obj);
    };
    buttons5.push(obj15);
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
        const buttons6 = obj14.buttons;
        const push = buttons6.push;
        const obj16 = { label: null, IconComponent: null, onPress: null };
        const intl9 = tmp5(tmp2[23]).intl;
        const string2 = intl9.string;
        const t2 = tmp5(tmp2[23]).t;
        if (isParentOptedIn) {
          obj16.label = string2(t2.jNphKT);
          obj16.IconComponent = tmp5(tmp2[45]).XSmallIcon;
          obj16.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(ChannelSpoilerAgreeStore, tmp.parent_id, false, obj);
            }
          };
          push(obj16);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
          } else {
            string2Result = string2(t2["9mysCh"]);
          }
          obj16.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp5(tmp2[45]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[38]).PlusLargeIcon;
          }
          obj16.IconComponent = PlusLargeIcon;
          obj16.onPress = function onPress() {
            const obj = { section: constants3.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(ChannelSpoilerAgreeStore, channel.id, !guildId, obj);
          };
          push(obj16);
        }
      }
    } else {
      const buttons7 = obj14.buttons;
      const intl8 = tmp5(tmp2[23]).intl;
      const string = intl8.string;
      let t = tmp5(tmp2[23]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj17 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[42]).PinIcon,
        onPress() {
          let obj = { section: constants3.CHANNEL_ACTION_SHEET };
          obj.setIsFavorite(ChannelSpoilerAgreeStore, channel.id, !setting, obj);
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
                tmp10 = guildId === ChannelSpoilerAgreeStore;
              }
              if (tmp10) {
                obj = { jumpToChannelId: channel.id };
                rootNavigationRef.setParams(obj);
              }
            }
            const tmpResult = RootNavigationRef;
          }
        },
      };
      t = buttons7.push(obj17);
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
    const buttons8 = obj14.buttons;
    const obj18 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl10 = tmp5(tmp2[23]).intl;
    obj18.label = intl10.string(tmp5(tmp2[23]).t.WqhZss);
    obj18.IconComponent = tmp5(tmp2[32]).LinkIcon;
    obj18.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj18);
  }
  let isPrivateResult = !isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj19 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (tmp30) {
      const buttons9 = obj19.buttons;
      const obj20 = { label: null, IconComponent: null, onPress: null };
      const intl12 = tmp5(tmp2[23]).intl;
      obj20.label = intl12.string(tmp5(tmp2[23]).t.EuzCET);
      obj20.IconComponent = tmp5(tmp2[47]).WarningIcon;
      obj20.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(
          channel.id,
          SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
        );
      };
      buttons9.push(obj20);
    }
    if (tmp33) {
      const buttons10 = obj19.buttons;
      const obj21 = { label: null, IconComponent: null, onPress: null };
      const intl13 = tmp5(tmp2[23]).intl;
      obj21.label = intl13.string(tmp5(tmp2[23]).t["tBw/1i"]);
      obj21.IconComponent = tmp5(tmp2[47]).WarningIcon;
      obj21.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(
          channel.id,
          SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      };
      buttons10.push(obj21);
    }
    if (obj19.buttons.length > 0) {
      items12.push(obj19);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj22 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj22.buttons;
            const obj23 = { label: null, IconComponent: null, onPress: null };
            const intl14 = tmp5(tmp2[23]).intl;
            obj23.label = intl14.string(tmp5(tmp2[23]).t.L6623r);
            obj23.IconComponent = tmp5(tmp2[49]).InboxIcon;
            obj23.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons11.push(obj23);
          }
          const buttons12 = obj22.buttons;
          const obj24 = { label: null, IconComponent: null, onPress: null };
          const intl15 = tmp5(tmp2[23]).intl;
          obj24.label = intl15.string(tmp5(tmp2[23]).t["85YWlY"]);
          obj24.IconComponent = tmp5(tmp2[49]).InboxIcon;
          obj24.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons12.push(obj24);
          if (obj22.buttons.length > 0) {
            items12.push(obj22);
          }
        }
      }
    }
    if (obj14.buttons.length > 0) {
      items12.push(obj14);
    }
    const obj25 = { sectionKey: "notifications", buttons: [] };
    if (tmp72) {
      const MarkChannelUnreadExperiment = tmp5(tmp2[51]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!stateFromStores2) {
          if (canMarkChannelUnread) {
            const buttons13 = obj25.buttons;
            const obj26 = { label: null, IconComponent: null, onPress: null };
            const intl16 = tmp5(tmp2[23]).intl;
            obj26.label = intl16.string(tmp5(tmp2[23]).t.RpE9k7);
            obj26.IconComponent = tmp5(tmp2[52]).ChatMarkUnreadIcon;
            obj26.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons13.push(obj26);
          }
        }
      }
      const buttons14 = obj25.buttons;
      const obj27 = { label: null, IconComponent: null, onPress: null };
      const intl17 = tmp5(tmp2[23]).intl;
      obj27.label = intl17.string(tmp5(tmp2[23]).t.e6RscS);
      obj27.IconComponent = tmp5(tmp2[54]).EyeIcon;
      obj27.onPress = function onPress() {
        const obj = {
          section: constants3.CHANNEL_ACTION_SHEET,
          object: constants2.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: constants.ACK_MANUAL,
        };
        obj.ackChannel(channel, obj);
      };
      buttons14.push(obj27);
    }
    if (!closure_12(channel.type)) {
      if (tmp82) {
        const buttons15 = obj25.buttons;
        const obj28 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl25 = tmp5(tmp2[23]).intl;
        obj28.label = intl25.string(tmp5(tmp2[23]).t.h850Ss);
        obj28.IconComponent = tmp5(tmp2[60]).ChannelNotificationIcon;
        obj28.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons15.push(obj28);
      }
      if (obj25.buttons.length > 0) {
        items12.push(obj25);
      }
      const obj29 = { sectionKey: "threads", buttons: [] };
      tmp82 =
        tmp58(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp85) {
        const buttons16 = obj29.buttons;
        const obj30 = { label: null, IconComponent: null, onPress: null };
        const intl26 = tmp5(tmp2[23]).intl;
        obj30.label = intl26.string(tmp5(tmp2[23]).t.B2panI);
        obj30.IconComponent = tmp5(tmp2[62]).ThreadIcon;
        obj30.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons16.push(obj30);
      }
      if (obj29.buttons.length > 0) {
        items12.push(obj29);
      }
      const obj31 = { sectionKey: "voice", buttons: [] };
      tmp85 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp20;
      if (!tmp89) {
        if (channel.isGuildVocal()) {
          const buttons17 = obj31.buttons;
          const push2 = buttons17.push;
          const obj32 = { label: null, IconComponent: null, onPress: null };
          const intl28 = tmp5(tmp2[23]).intl;
          const string6 = intl28.string;
          const t6 = tmp5(tmp2[23]).t;
          if (isGuildStageVoiceResult) {
            obj32.label = string6(t6["7vb2cc"]);
            obj32.IconComponent = tmp5(tmp2[65]).StageIcon;
            obj32.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj32);
            const buttons18 = obj31.buttons;
            const obj33 = { label: null, IconComponent: null, onPress: null };
            const intl29 = tmp5(tmp2[23]).intl;
            obj33.label = intl29.string(tmp5(tmp2[23]).t.ZXxLQg);
            obj33.IconComponent = tmp5(tmp2[66]).ChatIcon;
            obj33.onPress = function onPress() {
              let obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              obj = { channel };
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10965, dependencyMap.paths), obj);
              hideLaunchPadDefault();
            };
            buttons18.push(obj33);
          } else {
            obj32.label = string6(t6.ZXxLQg);
            obj32.IconComponent = tmp5(tmp2[66]).ChatIcon;
            obj32.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj32);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp95) {
          const buttons19 = obj31.buttons;
          const obj34 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl30 = tmp5(tmp2[23]).intl;
          obj34.label = intl30.string(tmp5(tmp2[23]).t.saZaRb);
          obj34.IconComponent = tmp5(tmp2[45]).XSmallIcon;
          obj34.onPress = function onPress() {
            return (async (arg0, value) => {
              if (paths === 2) {
                paths = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                  paths = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      paths = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      paths = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 1;
                      paths = 1;
                      const obj1 = { value: tmp4(paths[21])(paths[71], paths.paths), done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    paths = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    paths = 3;
                    obj = { value, done: true };
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
          buttons19.push(obj34);
        }
        tmp95 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
        if (tmp97) {
          const buttons20 = obj31.buttons;
          const obj35 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl31 = tmp5(tmp2[23]).intl;
          obj35.label = intl31.string(tmp5(tmp2[23]).t["+78Pfm"]);
          obj35.IconComponent = tmp5(tmp2[72]).FlagIcon;
          obj35.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons20.push(obj35);
        }
        if (obj31.buttons.length > 0) {
          items12.push(obj31);
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores9) {
            const obj36 = { sectionKey: "spoiler", buttons: [] };
            const buttons21 = obj36.buttons;
            const obj37 = { label: null, IconComponent: null, onPress: null };
            const intl32 = tmp5(tmp2[23]).intl;
            obj37.label = intl32.string(tmp5(tmp2[23]).t.ix2UVZ);
            obj37.IconComponent = tmp5(tmp2[74]).EyeSlashIcon;
            obj37.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons21.push(obj37);
            items12.push(obj36);
          }
        }
        const obj38 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons22 = obj38.buttons;
          const intl33 = tmp5(tmp2[23]).intl;
          const string7 = intl33.string;
          const t7 = tmp5(tmp2[23]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
          } else {
            string7Result = string7(t7["3gUsJb"]);
          }
          const obj39 = {
            label: string7Result,
            IconComponent: tmp5(tmp2[76]).SettingsIcon,
            onPress() {
              ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
              ChannelSettingsActionCreatorsDefault.open(channel.id);
            },
          };
          buttons22.push(obj39);
          isCategoryResult = channel.isCategory();
          if (tmp105) {
            const buttons23 = obj38.buttons;
            const intl34 = tmp5(tmp2[23]).intl;
            const string8 = intl34.string;
            const t8 = tmp5(tmp2[23]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj40 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[38]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[77]).CopyIcon;
            }
            obj40.IconComponent = CopyIcon;
            obj40.onPress = function onPress() {
              let type;
              if (!channel.isCategory()) {
                type = obj2.type;
              }
              guildId = obj2.getGuildId();
              const obj = CreateChannelModalActionCreatorsDefault;
              let id;
              if (!channel.isCategory()) {
                id = obj2.id;
              }
              obj.open(type, guildId, channel.isCategory() ? channel.id : channel.parent_id, id);
            };
            obj40 = buttons23.push(obj40);
            isCategoryResult1 = channel.isCategory();
          }
          tmp105 =
            tmp58(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
        }
        if (setting) {
          const buttons24 = obj38.buttons;
          const obj41 = { label: null, IconComponent: null, onPress: null };
          const intl35 = tmp5(tmp2[23]).intl;
          obj41.label = intl35.string(tmp5(tmp2[23]).t.gFHI3k);
          obj41.IconComponent = tmp5(tmp2[79]).IdIcon;
          obj41.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons24.push(obj41);
        }
        if (obj38.buttons.length > 0) {
          items12.push(obj38);
        }
        if (obj4.buttons.length > 0) {
          items12.push(obj4);
        }
        if (obj5.buttons.length > 0) {
          items12.push(obj5);
        }
        let formatToPlainStringResult;
        if (channel.isGroupDM()) {
          const intl36 = tmp5(tmp2[23]).intl;
          const obj42 = { members: channel.recipients.length + 1 };
          formatToPlainStringResult = intl36.formatToPlainString(tmp5(tmp2[23]).t.ABMKx3, obj42);
        }
        const items16 = [items12.length, setting, onClose];
        const effect = items12.useEffect(() => {
          if (!tmp) {
            onClose();
          }
        }, items16);
        const obj43 = { value: analyticsLocations, children: null };
        const obj44 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp97 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
        obj44.startExpanded = tmp5(tmp2[96]).isMetaQuest();
        const obj45 = { icon: tmp23, title: tmp19, subtitle: formatToPlainStringResult };
        obj44.header = tmp22(tmp5(tmp2[97]).ActionSheetIconHeader, obj45);
        obj44.children = items12.map((buttons) => {
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
              channel(7200).ActionSheetRow,
              {
                variant: str,
                label,
                icon: closure_1_33(channel(7200).ActionSheetRow.Icon, {
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
        obj43.children = tmp22(tmp5(tmp2[95]).ActionSheet, obj44);
        return tmp22(tmp5(tmp2[82]).AnalyticsLocationProvider, obj43);
      } else {
        const buttons25 = obj31.buttons;
        const intl27 = tmp5(tmp2[23]).intl;
        const string5 = intl27.string;
        let t5 = tmp5(tmp2[23]).t;
        if (stateFromStores5) {
          let string5Result = string5(t5.JYF2Oa);
        } else {
          string5Result = string5(t5.LxzNiu);
        }
        const obj46 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[24]).UserCircleIcon,
          onPress() {
            ChannelCollapseActionCreatorsDefault.update(channel.id);
          },
        };
        t5 = buttons25.push(obj46);
      }
      tmp89 = closure_10(channel.type) && !stateFromStores4;
    }
    const intl18 = tmp5(tmp2[23]).intl;
    const string4 = intl18.string;
    const t4 = tmp5(tmp2[23]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl24 = tmp5(tmp2[23]).intl;
        let stringResult1 = intl24.string(tmp5(tmp2[23]).t.olaBeG);
        const buttons26 = obj25.buttons;
        const obj47 = {
          label: stringResult1,
          IconComponent: tmp5(tmp2[57]).BellIcon,
          onPress() {
            guildId = channel.getGuildId();
            const obj = { muted: !onClose };
            const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
            const result = obj.updateChannelOverrideSettings(
              guildId,
              channel.id,
              obj,
              NotificationLabel.muted(!onClose),
            );
          },
        };
        buttons26.push(obj47);
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
      const buttons27 = obj25.buttons;
      const obj48 = {
        label: stringResult2,
        IconComponent: tmp5(tmp2[56]).BellSlashIcon,
        onPress() {
          let obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          if (tmp) {
            obj = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
            rootNavigationRef.navigate("sidebar", obj);
          }
        },
      };
      buttons27.push(obj48);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp72 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons28 = obj14.buttons;
    const intl11 = tmp5(tmp2[23]).intl;
    const string3 = intl11.string;
    let t3 = tmp5(tmp2[23]).t;
    if (stateFromStores8) {
      let string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj49 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[42]).PinIcon,
      onPress() {
        OptInChannelsActionCreators.setMessagesFavorite(channel.id, !items12);
      },
    };
    t3 = buttons28.push(obj49);
  }
}
const SafetyWarningTypes = fn(10915).SafetyWarningTypes;
const ChannelRecord = fn(1961);
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
let closure_32 = fn(10916).ChannelDetailsNavigatorScreens;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  let obj = require("initialize");
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, onClose };
    tmp3 = <ChannelLongPressActionSheetConnected channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
}
