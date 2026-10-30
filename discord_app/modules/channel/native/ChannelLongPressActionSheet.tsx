// === Module 10783: ChannelLongPressActionSheet ===

// Module 10783 (ChannelLongPressActionSheet)
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4866 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import useChannelName from "useChannelName" /* 5647 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7273 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7276 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7277 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7282 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import ActionSheetRow from "ActionSheetRow" /* 7362 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8191 */;
import ReportModals from "ReportModals" /* 8344 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9025 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9099 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10118 */;
import openFavoritesGuildMoveToCategoryActionSheetDefault from "openFavoritesGuildMoveToCategoryActionSheet" /* 10810 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10828 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10957 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10962 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10963 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10966 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10971 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10977 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10978 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11786 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 14341 */;
import openAppChannelToChatDefault from "openAppChannelToChat" /* 14342 */;
import closeFrameDefault from "closeFrame" /* 14344 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6748 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6855 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7280 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7699 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureRemixSheetDefault = ConjureRemixSheet;

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
  let isConjureChannelCandidate;
  let frameId;
  let items14;
  const tmp2 = guildId;
  const analyticsLocations = onClose(guildId[92])(onClose(guildId[93]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  let tmp3 = onClose(guildId[92]);
  const isFavoritesGuildSelected = channel(guildId[94]).useIsFavoritesGuildSelected();
  let obj = channel(guildId[94]);
  const items = [GuildStore];
  const stateFromStores = channel(guildId[95]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = channel(guildId[95]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = channel(guildId[95]).useStateFromStoresObject(items1, () => ({ canManageChannel: PermissionStore.can(constants7.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants7.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants7.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(guildId[95]);
  if (guildId == null) {
    guildId = closure_29;
  }
  const optInEnabledForGuild = channel(guildId[97]).useOptInEnabledForGuild(guildId);
  let obj4 = channel(guildId[97]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = tmp5(tmp2[95]).useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null, isPinned: null };
    let tmp = guildId;
    obj.isParentOptedIn = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData9;
    }
    obj.isPinned = UserGuildSettingsStore.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  const tmp5Result = tmp5(tmp2[95]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = tmp5(tmp2[95]).useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const tmp5Result16 = tmp5(tmp2[95]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = tmp5(tmp2[95]).useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result17 = tmp5(tmp2[95]);
  const canMarkChannelUnread = tmp5(tmp2[60]).useCanMarkChannelUnread(channel);
  const tmp5Result18 = tmp5(tmp2[60]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = tmp5(tmp2[95]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result19 = tmp5(tmp2[95]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = tmp5(tmp2[95]).useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const tmp5Result20 = tmp5(tmp2[95]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = tmp5(tmp2[95]).useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const tmp5Result21 = tmp5(tmp2[95]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = tmp5(tmp2[95]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result22 = tmp5(tmp2[95]);
  let tmpResult = onClose(tmp2[28]);
  const tmpResultResult = onClose(tmp2[28])(channel, !channel.isThread());
  const DeveloperMode = tmp5(tmp2[99]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    let obj5 = { guild: stateFromStores, size: tmp5(tmp2[100]).GuildIconSizes.LARGE };
    let tmp24 = jsx(tmp(tmp2[100]), { guild: stateFromStores, size: tmp5(tmp2[100]).GuildIconSizes.LARGE });
    let tmp23 = jsx;
    const tmpResult3 = tmp(tmp2[100]);
  } else {
    tmp23 = jsx;
    const obj6 = { size: tmp5(tmp2[101]).AvatarSizes.LARGE, channel };
    tmp24 = jsx(tmp5(tmp2[101]).Avatar, { size: tmp5(tmp2[101]).AvatarSizes.LARGE, channel });
  }
  const tmp21 = onClose(tmp2[98])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = tmp5(tmp2[95]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result23 = tmp5(tmp2[95]);
  const tmp27 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [UserGuildSettingsStore];
  const stateFromStores8 = tmp5(tmp2[95]).useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result24 = tmp5(tmp2[95]);
  const inappropriateConversationsTiers = tmp5(tmp2[102]).useInappropriateConversationsTiers(channel);
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
  const tmp5Result25 = tmp5(tmp2[102]);
  const items11 = [items14];
  const stateFromStores9 = tmp5(tmp2[95]).useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp5Result26 = tmp5(tmp2[95]);
  const tmp38 = onClose(tmp2[104])(channel);
  const tmp39 = onClose(tmp2[105])(channel);
  let isFavorites;
  if (tmp39 != null) {
    isFavorites = tmp39.isFavorites;
  }
  let tmp41 = null;
  if (true === isFavorites) {
    const destinations = tmp39.destinations;
    tmp41 = null;
    if (destinations.some((disabled) => !disabled.disabled)) {
      tmp41 = tmp39;
    }
  }
  const tmp37 = onClose(tmp2[103])(channel);
  isConjureChannelCandidate = tmp5(tmp2[106]).useIsConjureChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp44 = null;
  const tmp5Result27 = tmp5(tmp2[106]);
  if (isConjureChannelCandidate) {
    tmp44 = channel;
  }
  const tmpResult2Result = onClose(tmp2[107])(tmp44);
  const tmp46 = onClose(tmp2[108])(channel);
  frameId = tmp46.frameId;
  const tmpResult4 = onClose(tmp2[107]);
  const items12 = [tmp5(tmp2[109]).ApexExperimentStore];
  const items13 = [isConjureChannelCandidate, frameId];
  const stateFromStores10 = tmp5(tmp2[95]).useStateFromStores(items12, () => {
    let tmp = isConjureChannelCandidate;
    if (isConjureChannelCandidate) {
      tmp = null != frameId;
    }
    if (tmp) {
      tmp = 2 === EmbeddedAppShimExperiment.getEmbeddedAppShimVersion("ChannelLongPressActionSheet");
    }
    return tmp;
  }, items13);
  const tmp48 = onClose(tmp2[111])(channel, isConjureChannelCandidate);
  const tmp5Result28 = tmp5(tmp2[95]);
  let tmp49 = null != tmpResult2Result;
  if (!tmp49) {
    tmp49 = null != tmp48.remixProject;
  }
  const isConjureMobileEnabled = tmp5(tmp2[112]).useIsConjureMobileEnabled(tmp49, "ChannelLongPressActionSheet");
  if (stateFromStores7 != null) {
    const isStaffResult = stateFromStores7.isStaff();
  }
  let tmp52 = null;
  if (isConjureMobileEnabled) {
    let id;
    if (tmpResult2Result != null) {
      id = tmpResult2Result.id;
    }
    if (id == null) {
      id = null;
    }
    tmp52 = id;
  }
  let remixProject = null;
  if (isConjureMobileEnabled) {
    remixProject = tmp48.remixProject;
  }
  let userMuted = null;
  if (stateFromStores10) {
    userMuted = tmp46.userMuted;
  }
  closure_129_0 = channel;
  closure_129_1 = stateFromStores1;
  closure_129_2 = isOptedIn;
  closure_129_3 = isPinned;
  closure_129_4 = stateFromStores8;
  closure_129_5 = analyticsLocations;
  closure_129_6 = tmp41;
  closure_129_7 = tmp52;
  closure_129_8 = frameId;
  closure_129_9 = remixProject;
  const guildId1 = channel.getGuildId();
  closure_129_10 = guildId1;
  const obj7 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj7.buttons;
    const obj8 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[23]).intl;
    obj8.label = intl.string(tmp5(tmp2[23]).t.LYju5J);
    obj8.IconComponent = tmp5(tmp2[24]).UserCircleIcon;
    obj8.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: frameId };
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
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
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
        const obj5 = { title: formatToPlainStringResult1, body: formatResult, confirmText: null, cancelText: null, onConfirm: null };
        const intl5 = util.intl;
        obj5.confirmText = intl5.string(util.t.p89ACt);
        const intl6 = util.intl;
        obj5.cancelText = intl6.string(util.t.gm1Vej);
        obj5.onConfirm = function onConfirm() {
          onClose(guildId[27]).closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
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
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10787, dependencyMap.paths), { channelId: channel.id });
      };
      buttons4.push(obj14);
    }
  }
  items14 = [];
  if (obj7.buttons.length > 0) {
    items14.push(obj7);
  }
  let tmp63 = isFavoritesGuildSelected;
  if (isFavoritesGuildSelected) {
    tmp63 = null != channel.guild_id;
  }
  if (tmp63) {
    tmp63 = !channel.isCategory();
  }
  if (tmp63) {
    const obj15 = { sectionKey: "go-to-server", buttons: null };
    const obj16 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp5(tmp2[23]).intl;
    obj16.label = intl6.string(tmp(tmp2[35])["3KruG3"]);
    obj16.IconComponent = tmp5(tmp2[36]).ServerIcon;
    obj16.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items15 = [obj16];
    obj15.buttons = items15;
    items14.push(obj15);
  }
  if (null != tmp38) {
    const obj17 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj18 = { label: tmp38.label, IconComponent: tmp5(tmp2[38]).PlusLargeIcon, onPress: tmp38.perform };
    const items16 = [obj18];
    obj17.buttons = items16;
    items14.push(obj17);
  }
  const items17 = [];
  if (null != tmp41) {
    const obj19 = {
      label: tmp41.label,
      IconComponent: tmp5(tmp2[39]).FolderIcon,
      onPress() {
          openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, items14);
        }
    };
    items17.push(obj19);
  }
  const tmp67 = onClose(tmp2[41])(tmp37);
  if (null != tmp67) {
    items17.push(tmp67);
  }
  if (items17.length > 0) {
    const obj20 = { sectionKey: "favorites", buttons: items17 };
    items14.push(obj20);
  }
  const obj21 = { sectionKey: "conjure", buttons: [] };
  if (tmp70) {
    const buttons5 = obj21.buttons;
    const obj22 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[23]).intl;
    obj22.label = intl7.string(tmp(tmp2[42]).KMwCb7);
    obj22.IconComponent = tmp5(tmp2[43]).RemixIcon;
    obj22.onPress = function onPress() {
      const obj2 = {
        key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
        content: jsx(ConjureRemixSheetDefault, {
          project,
          currentGuildId,
          onRemixed(arg0) {
            return onClose(guildId[46])(arg0);
          }
        })
      };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    buttons5.push(obj22);
  }
  if (tmp72) {
    const buttons6 = obj21.buttons;
    const obj23 = { label: null, IconComponent: null, onPress: null };
    const intl8 = tmp5(tmp2[23]).intl;
    obj23.label = intl8.string(tmp(tmp2[42]).jMMrDM);
    obj23.IconComponent = tmp5(tmp2[30]).PencilIcon;
    obj23.onPress = function onPress() {
      openConjureHomeScreenDefault(StageInstanceStore);
    };
    buttons6.push(obj23);
  }
  if (obj21.buttons.length > 0) {
    items14.push(obj21);
  }
  const obj24 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons7 = obj24.buttons;
    const obj25 = { label: null, IconComponent: null, onPress: null };
    const intl9 = tmp5(tmp2[23]).intl;
    obj25.label = intl9.string(tmp5(tmp2[23]).t.VINpSK);
    obj25.IconComponent = tmp5(tmp2[47]).GroupPlusIcon;
    obj25.onPress = function onPress() {
      const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: constants6.CONTEXT_MENU });
    };
    buttons7.push(obj25);
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
        const buttons8 = obj24.buttons;
        const push = buttons8.push;
        const obj26 = { label: null, IconComponent: null, onPress: null };
        const intl11 = tmp5(tmp2[23]).intl;
        const string2 = intl11.string;
        const t2 = tmp5(tmp2[23]).t;
        if (isParentOptedIn) {
          obj26.label = string2(t2.jNphKT);
          obj26.IconComponent = tmp5(tmp2[52]).XSmallIcon;
          obj26.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(currentGuildId, tmp.parent_id, false, obj2);
            }
          };
          push(obj26);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
          } else {
            string2Result = string2(t2["9mysCh"]);
          }
          obj26.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp5(tmp2[52]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[38]).PlusLargeIcon;
          }
          obj26.IconComponent = PlusLargeIcon;
          obj26.onPress = function onPress() {
            OptInChannelsActionCreators.setOptInChannel(currentGuildId, channel.id, !guildId, { section: constants3.CHANNEL_ACTION_SHEET });
          };
          push(obj26);
        }
      }
    } else {
      const buttons9 = obj24.buttons;
      const intl10 = tmp5(tmp2[23]).intl;
      const string = intl10.string;
      let t = tmp5(tmp2[23]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj27 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[49]).PinIcon,
        onPress() {
              OptInChannelsActionCreators.setIsFavorite(currentGuildId, channel.id, !setting, { section: constants3.CHANNEL_ACTION_SHEET });
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
                    tmp10 = guildId === currentGuildId;
                  }
                  if (tmp10) {
                    const obj3 = { jumpToChannelId: channel.id };
                    rootNavigationRef.setParams(obj3);
                  }
                }
                const tmpResult = RootNavigationRef;
              }
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
            }
      };
      t = buttons9.push(obj27);
    }
  }
  let isForumLikeChannelResult = project(channel.type);
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = currentGuildId(channel.type);
  }
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (isForumLikeChannelResult) {
    const buttons10 = obj24.buttons;
    const obj28 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl12 = tmp5(tmp2[23]).intl;
    obj28.label = intl12.string(tmp5(tmp2[23]).t.WqhZss);
    obj28.IconComponent = tmp5(tmp2[32]).LinkIcon;
    obj28.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons10.push(obj28);
  }
  let isPrivateResult = !isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj29 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (tmp31) {
      const buttons11 = obj29.buttons;
      const obj30 = { label: null, IconComponent: null, onPress: null };
      const intl14 = tmp5(tmp2[23]).intl;
      obj30.label = intl14.string(tmp5(tmp2[23]).t.EuzCET);
      obj30.IconComponent = tmp5(tmp2[54]).WarningIcon;
      obj30.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons11.push(obj30);
    }
    if (tmp34) {
      const buttons12 = obj29.buttons;
      const obj31 = { label: null, IconComponent: null, onPress: null };
      const intl15 = tmp5(tmp2[23]).intl;
      obj31.label = intl15.string(tmp5(tmp2[23]).t["tBw/1i"]);
      obj31.IconComponent = tmp5(tmp2[54]).WarningIcon;
      obj31.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons12.push(obj31);
    }
    if (obj29.buttons.length > 0) {
      items14.push(obj29);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj32 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons13 = obj32.buttons;
            const obj33 = { label: null, IconComponent: null, onPress: null };
            const intl16 = tmp5(tmp2[23]).intl;
            obj33.label = intl16.string(tmp5(tmp2[23]).t.L6623r);
            obj33.IconComponent = tmp5(tmp2[56]).InboxIcon;
            obj33.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons13.push(obj33);
          }
          const buttons14 = obj32.buttons;
          const obj34 = { label: null, IconComponent: null, onPress: null };
          const intl17 = tmp5(tmp2[23]).intl;
          obj34.label = intl17.string(tmp5(tmp2[23]).t["85YWlY"]);
          obj34.IconComponent = tmp5(tmp2[56]).InboxIcon;
          obj34.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons14.push(obj34);
          if (obj32.buttons.length > 0) {
            items14.push(obj32);
          }
        }
      }
    }
    if (obj24.buttons.length > 0) {
      items14.push(obj24);
    }
    const obj35 = { sectionKey: "notifications", buttons: [] };
    if (tmp96) {
      const MarkChannelUnreadExperiment = tmp5(tmp2[58]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!stateFromStores2) {
          if (canMarkChannelUnread) {
            const buttons15 = obj35.buttons;
            const obj36 = { label: null, IconComponent: null, onPress: null };
            const intl18 = tmp5(tmp2[23]).intl;
            obj36.label = intl18.string(tmp5(tmp2[23]).t.RpE9k7);
            obj36.IconComponent = tmp5(tmp2[59]).ChatMarkUnreadIcon;
            obj36.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons15.push(obj36);
          }
        }
      }
      const buttons16 = obj35.buttons;
      const obj37 = { label: null, IconComponent: null, onPress: null };
      const intl19 = tmp5(tmp2[23]).intl;
      obj37.label = intl19.string(tmp5(tmp2[23]).t.e6RscS);
      obj37.IconComponent = tmp5(tmp2[61]).EyeIcon;
      obj37.onPress = function onPress() {
        ReadStateActionCreators.ackChannel(channel, { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL });
      };
      buttons16.push(obj37);
    }
    if (!closure_12(channel.type)) {
      if (tmp106) {
        const buttons17 = obj35.buttons;
        const obj38 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl27 = tmp5(tmp2[23]).intl;
        obj38.label = intl27.string(tmp5(tmp2[23]).t.h850Ss);
        obj38.IconComponent = tmp5(tmp2[67]).ChannelNotificationIcon;
        obj38.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons17.push(obj38);
      }
      if (obj35.buttons.length > 0) {
        items14.push(obj35);
      }
      const obj39 = { sectionKey: "threads", buttons: [] };
      tmp106 = project(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp109) {
        const buttons18 = obj39.buttons;
        const obj40 = { label: null, IconComponent: null, onPress: null };
        const intl28 = tmp5(tmp2[23]).intl;
        obj40.label = intl28.string(tmp5(tmp2[23]).t.B2panI);
        obj40.IconComponent = tmp5(tmp2[69]).ThreadIcon;
        obj40.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons18.push(obj40);
      }
      if (obj39.buttons.length > 0) {
        items14.push(obj39);
      }
      const obj41 = { sectionKey: "voice", buttons: [] };
      tmp109 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp21;
      if (!tmp113) {
        if (channel.isGuildVocal()) {
          const buttons19 = obj41.buttons;
          const push2 = buttons19.push;
          const obj42 = { label: null, IconComponent: null, onPress: null };
          const intl30 = tmp5(tmp2[23]).intl;
          const string6 = intl30.string;
          const t6 = tmp5(tmp2[23]).t;
          if (isGuildStageVoiceResult) {
            obj42.label = string6(t6["7vb2cc"]);
            obj42.IconComponent = tmp5(tmp2[72]).StageIcon;
            obj42.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj42);
            const buttons20 = obj41.buttons;
            const obj43 = { label: null, IconComponent: null, onPress: null };
            const intl31 = tmp5(tmp2[23]).intl;
            obj43.label = intl31.string(tmp5(tmp2[23]).t.ZXxLQg);
            obj43.IconComponent = tmp5(tmp2[73]).ChatIcon;
            obj43.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10979, dependencyMap.paths), { channel });
              hideLaunchPadDefault();
            };
            buttons20.push(obj43);
          } else {
            obj42.label = string6(t6.ZXxLQg);
            obj42.IconComponent = tmp5(tmp2[73]).ChatIcon;
            obj42.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj42);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp119) {
          const buttons21 = obj41.buttons;
          const obj44 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl32 = tmp5(tmp2[23]).intl;
          obj44.label = intl32.string(tmp5(tmp2[23]).t.saZaRb);
          obj44.IconComponent = tmp5(tmp2[52]).XSmallIcon;
          obj44.onPress = function onPress() {
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
                      const obj4 = { value: tmp4(paths[21])(paths[77], paths.paths), done: false };
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
          buttons21.push(obj44);
        }
        tmp119 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
        if (tmp121) {
          const buttons22 = obj41.buttons;
          const obj45 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl33 = tmp5(tmp2[23]).intl;
          obj45.label = intl33.string(tmp5(tmp2[23]).t["+78Pfm"]);
          obj45.IconComponent = tmp5(tmp2[78]).FlagIcon;
          obj45.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons22.push(obj45);
        }
        if (obj41.buttons.length > 0) {
          items14.push(obj41);
        }
        if (channel.type === constants5.GUILD_APP) {
          if (null != channel.application_id) {
            const obj46 = { sectionKey: "app-channel", buttons: null };
            const obj47 = { label: null, IconComponent: null, onPress: null };
            const intl40 = tmp5(tmp2[23]).intl;
            obj47.label = intl40.string(tmp5(tmp2[23]).t.ZXxLQg);
            obj47.IconComponent = tmp5(tmp2[73]).ChatIcon;
            obj47.onPress = function onPress() {
              openAppChannelToChatDefault(channel);
              hideLaunchPadDefault();
            };
            const items18 = [obj47];
            obj46.buttons = items18;
            if (tmp125) {
              const buttons23 = obj46.buttons;
              buttons23.push(tmp(tmp2[81])(frameId, userMuted));
            }
            if (null != frameId) {
              const buttons24 = obj46.buttons;
              const obj48 = { label: null, IconComponent: null, onPress: null };
              const intl34 = tmp5(tmp2[23]).intl;
              obj48.label = intl34.string(tmp5(tmp2[23]).t.VkMnR2);
              obj48.IconComponent = tmp5(tmp2[82]).DoorExitIcon;
              obj48.onPress = function onPress() {
                closeFrameDefault(ActiveThreadsStore);
              };
              buttons24.push(obj48);
            }
            items14.push(obj46);
            tmp125 = null != frameId && null != userMuted;
          }
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores9) {
            const obj49 = { sectionKey: "spoiler", buttons: [] };
            const buttons25 = obj49.buttons;
            const obj50 = { label: null, IconComponent: null, onPress: null };
            const intl35 = tmp5(tmp2[23]).intl;
            obj50.label = intl35.string(tmp5(tmp2[23]).t.ix2UVZ);
            obj50.IconComponent = tmp5(tmp2[84]).EyeSlashIcon;
            obj50.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons25.push(obj50);
            items14.push(obj49);
          }
        }
        const obj51 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons26 = obj51.buttons;
          const intl36 = tmp5(tmp2[23]).intl;
          const string7 = intl36.string;
          const t7 = tmp5(tmp2[23]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
          } else {
            string7Result = string7(t7["3gUsJb"]);
          }
          const obj52 = {
            label: string7Result,
            IconComponent: tmp5(tmp2[86]).SettingsIcon,
            onPress() {
                      ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                      ChannelSettingsActionCreatorsDefault.open(channel.id);
                    }
          };
          buttons26.push(obj52);
          isCategoryResult = channel.isCategory();
          if (tmp134) {
            const buttons27 = obj51.buttons;
            const intl37 = tmp5(tmp2[23]).intl;
            const string8 = intl37.string;
            const t8 = tmp5(tmp2[23]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj53 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[38]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[87]).CopyIcon;
            }
            obj53.IconComponent = CopyIcon;
            obj53.onPress = function onPress() {
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
            obj53 = buttons27.push(obj53);
            isCategoryResult1 = channel.isCategory();
          }
          tmp134 = project(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
        }
        if (setting) {
          const buttons28 = obj51.buttons;
          const obj54 = { label: null, IconComponent: null, onPress: null };
          const intl38 = tmp5(tmp2[23]).intl;
          obj54.label = intl38.string(tmp5(tmp2[23]).t.gFHI3k);
          obj54.IconComponent = tmp5(tmp2[89]).IdIcon;
          obj54.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons28.push(obj54);
        }
        if (obj51.buttons.length > 0) {
          items14.push(obj51);
        }
        if (obj10.buttons.length > 0) {
          items14.push(obj10);
        }
        if (obj11.buttons.length > 0) {
          items14.push(obj11);
        }
        if (channel.isGroupDM()) {
          const intl39 = tmp5(tmp2[23]).intl;
          const obj55 = { members: channel.recipients.length + 1 };
          let formatToPlainStringResult = intl39.formatToPlainString(tmp5(tmp2[23]).t.ABMKx3, obj55);
        }
        const items19 = [items14.length, setting, onClose];
        const effect = isConjureChannelCandidate.useEffect(() => {
          if (!tmp) {
            onClose();
          }
          tmp = 0 !== items14.length || setting;
        }, items19);
        const obj56 = { value: analyticsLocations, children: null };
        const obj57 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp121 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
        obj57.startExpanded = tmp5(tmp2[114]).isMetaQuest();
        const header = tmp48.header;
        let icon;
        if (header != null) {
          icon = header.icon;
        }
        if (icon == null) {
          icon = tmp24;
        }
        const obj58 = { icon, title: null, subtitle: null };
        const header2 = tmp48.header;
        let title;
        if (header2 != null) {
          title = header2.title;
        }
        if (title == null) {
          title = tmpResultResult;
        }
        obj58.title = title;
        const header3 = tmp48.header;
        let subtitle;
        if (header3 != null) {
          subtitle = header3.subtitle;
        }
        if (subtitle == null) {
          subtitle = formatToPlainStringResult;
        }
        obj58.subtitle = subtitle;
        obj57.header = tmp23(tmp5(tmp2[115]).ActionSheetIconHeader, obj58);
        obj57.children = items14.map((buttons) => {
          const obj = { hasIcons: true, children: null };
          buttons = buttons.buttons;
          obj.children = buttons.map((onPress, index) => {
            onPress = onPress.onPress;
            let str = "default";
            ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
            if (onPress.isDestructive) {
              str = "danger";
            }
            return closure_1_33(channel(7362).ActionSheetRow, {
              variant: str,
              label,
              icon: closure_1_33(channel(7362).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
              trailing,
              onPress() {
                if (onPress != null) {
                  tmp();
                }
                onClose();
              }
            }, index);
          });
          return jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: null }, buttons.sectionKey);
        });
        obj56.children = tmp23(tmp5(tmp2[113]).ActionSheet, obj57);
        return tmp23(tmp5(tmp2[92]).AnalyticsLocationProvider, obj56);
      } else {
        const buttons29 = obj41.buttons;
        const intl29 = tmp5(tmp2[23]).intl;
        const string5 = intl29.string;
        let t5 = tmp5(tmp2[23]).t;
        if (stateFromStores5) {
          let string5Result = string5(t5.JYF2Oa);
        } else {
          string5Result = string5(t5.LxzNiu);
        }
        const obj59 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[24]).UserCircleIcon,
          onPress() {
                  ChannelCollapseActionCreatorsDefault.update(channel.id);
                }
        };
        t5 = buttons29.push(obj59);
      }
      tmp113 = currentGuildId(channel.type) && !stateFromStores4;
    }
    const intl20 = tmp5(tmp2[23]).intl;
    const string4 = intl20.string;
    const t4 = tmp5(tmp2[23]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl26 = tmp5(tmp2[23]).intl;
        let stringResult1 = intl26.string(tmp5(tmp2[23]).t.olaBeG);
        const buttons30 = obj35.buttons;
        const obj60 = {
          label: stringResult1,
          IconComponent: tmp5(tmp2[64]).BellIcon,
          onPress() {
                  const obj2 = { guildId: channel.getGuildId(), channelId: channel.id, settings: { muted: !onClose }, label: null };
                  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
                  obj2.label = NotificationLabel.muted(!onClose);
                  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
                }
        };
        buttons30.push(obj60);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl24 = tmp5(tmp2[23]).intl;
            stringResult1 = intl24.string(tmp5(tmp2[23]).t["Cq/TzF"]);
          }
        }
      }
      const intl25 = tmp5(tmp2[23]).intl;
      stringResult1 = intl25.string(tmp5(tmp2[23]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl23 = tmp5(tmp2[23]).intl;
        let stringResult2 = intl23.string(tmp5(tmp2[23]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl21 = tmp5(tmp2[23]).intl;
              stringResult2 = intl21.string(tmp5(tmp2[23]).t.bUUd8q);
            }
          }
        }
        const intl22 = tmp5(tmp2[23]).intl;
        stringResult2 = intl22.string(tmp5(tmp2[23]).t.LO3kaK);
      }
      const buttons31 = obj35.buttons;
      const obj61 = {
        label: stringResult2,
        IconComponent: tmp5(tmp2[63]).BellSlashIcon,
        onPress() {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (tmp) {
                const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
                rootNavigationRef.navigate("sidebar", obj2);
              }
              tmp = null != rootNavigationRef && rootNavigationRef.isReady();
            }
      };
      buttons31.push(obj61);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp96 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons32 = obj24.buttons;
    const intl13 = tmp5(tmp2[23]).intl;
    const string3 = intl13.string;
    let t3 = tmp5(tmp2[23]).t;
    if (stateFromStores8) {
      let string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj62 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[49]).PinIcon,
      onPress() {
          OptInChannelsActionCreators.setMessagesFavorite(channel.id, !isConjureChannelCandidate);
        }
    };
    t3 = buttons32.push(obj62);
  }
  const tmp5Result29 = tmp5(tmp2[112]);
  tmp70 = null != remixProject && null != guildId1;
  tmp72 = null != tmp52 && null != guildId1;
}
const SafetyWarningTypes = fn(10784).SafetyWarningTypes;
const ChannelRecord = fn(4862);
({ isGuildTextChannelType: closure_9, isGuildVocalChannelType: c10, isReadableType: closure_11, isTextChannel: closure_12 } = ChannelRecord);
const Constants = fn(1072);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: closure_31 } = Constants);
let closure_32 = fn(10117).ChannelDetailsNavigatorScreens;
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
};