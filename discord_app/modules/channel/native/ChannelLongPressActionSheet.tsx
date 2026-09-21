// === Module 11178: ChannelLongPressActionSheet ===

// Module 11178 (ChannelLongPressActionSheet)
import router_utils from "router_utils" /* 1101 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2049 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import useChannelName from "useChannelName" /* 4909 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5108 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5737 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7355 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7358 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7359 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7364 */;
import ClipboardUtils from "ClipboardUtils" /* 7434 */;
import ActionSheetRow from "ActionSheetRow" /* 7444 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8448 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8903 */;
import ReportModals from "ReportModals" /* 8907 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9822 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10076 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10504 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 11183 */;
import openFavoritesGuildMoveToCategoryActionSheetDefault from "openFavoritesGuildMoveToCategoryActionSheet" /* 11218 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 11221 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 11222 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 11225 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 11229 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 11230 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 11232 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 7572 */;
import StageInstanceStore from "StageInstanceStore" /* 2046 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5724 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7362 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7769 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_37 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
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
              const obj4 = { value: tmp21(dependencyMap[21], dependencyMap.paths), done: false };
              return obj4;
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp21(dependencyMap[23], dependencyMap.paths), done: false };
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
  const analyticsLocations = onClose(guildId[86])(onClose(guildId[87]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  let tmp3 = onClose(guildId[86]);
  const isFavoritesGuildSelected = channel(guildId[88]).useIsFavoritesGuildSelected();
  let obj = channel(guildId[88]);
  const items = [GuildStore];
  const stateFromStores = channel(guildId[89]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = channel(guildId[89]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = channel(guildId[89]).useStateFromStoresObject(items1, () => ({ canManageChannel: PermissionStore.can(constants7.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants7.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants7.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(guildId[89]);
  if (guildId == null) {
    guildId = closure_30;
  }
  const optInEnabledForGuild = channel(guildId[91]).useOptInEnabledForGuild(guildId);
  let obj4 = channel(guildId[91]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = tmp5(tmp2[89]).useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null, isPinned: null };
    let tmp = guildId;
    obj.isParentOptedIn = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData11;
    }
    obj.isPinned = UserGuildSettingsStore.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  const tmp5Result = tmp5(tmp2[89]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = tmp5(tmp2[89]).useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const tmp5Result14 = tmp5(tmp2[89]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = tmp5(tmp2[89]).useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result15 = tmp5(tmp2[89]);
  const canMarkChannelUnread = tmp5(tmp2[57]).useCanMarkChannelUnread(channel);
  const tmp5Result16 = tmp5(tmp2[57]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = tmp5(tmp2[89]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result17 = tmp5(tmp2[89]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = tmp5(tmp2[89]).useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const tmp5Result18 = tmp5(tmp2[89]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = tmp5(tmp2[89]).useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const tmp5Result19 = tmp5(tmp2[89]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = tmp5(tmp2[89]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result20 = tmp5(tmp2[89]);
  let tmpResult = onClose(tmp2[29]);
  const tmpResultResult = onClose(tmp2[29])(channel, !channel.isThread());
  const DeveloperMode = tmp5(tmp2[93]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    let obj5 = { guild: stateFromStores, size: tmp5(tmp2[94]).GuildIconSizes.LARGE };
    let tmp24 = jsx(tmp(tmp2[94]), { guild: stateFromStores, size: tmp5(tmp2[94]).GuildIconSizes.LARGE });
    let tmp23 = jsx;
    const tmpResult3 = tmp(tmp2[94]);
  } else {
    tmp23 = jsx;
    const obj6 = { size: tmp5(tmp2[95]).AvatarSizes.LARGE, channel };
    tmp24 = jsx(tmp5(tmp2[95]).Avatar, { size: tmp5(tmp2[95]).AvatarSizes.LARGE, channel });
  }
  const tmp21 = onClose(tmp2[92])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = tmp5(tmp2[89]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result21 = tmp5(tmp2[89]);
  const tmp27 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [UserGuildSettingsStore];
  const stateFromStores8 = tmp5(tmp2[89]).useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result22 = tmp5(tmp2[89]);
  const inappropriateConversationsTiers = tmp5(tmp2[96]).useInappropriateConversationsTiers(channel);
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
  const tmp5Result23 = tmp5(tmp2[96]);
  const items11 = [ChannelSpoilerAgreeStore];
  const stateFromStores9 = tmp5(tmp2[89]).useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp5Result24 = tmp5(tmp2[89]);
  const tmp38 = onClose(tmp2[98])(channel);
  const tmp39 = onClose(tmp2[99])(channel);
  const tmp37 = onClose(tmp2[97])(channel, "ChannelLongPressActionSheet");
  const isVibegrationsChannelCandidate = tmp5(tmp2[100]).useIsVibegrationsChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp42 = null;
  const tmp5Result25 = tmp5(tmp2[100]);
  if (isVibegrationsChannelCandidate) {
    tmp42 = channel;
  }
  const tmpResult2Result = onClose(tmp2[101])(tmp42);
  if (stateFromStores7 != null) {
    const isStaffResult = stateFromStores7.isStaff();
  }
  let id;
  if (tmpResult2Result != null) {
    id = tmpResult2Result.id;
  }
  if (id == null) {
    id = null;
  }
  closure_129_0 = channel;
  closure_129_1 = stateFromStores1;
  closure_129_2 = isOptedIn;
  closure_129_3 = isPinned;
  closure_129_4 = stateFromStores8;
  closure_129_5 = analyticsLocations;
  closure_129_6 = tmp39;
  closure_129_7 = id;
  const obj7 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj7.buttons;
    const obj8 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[24]).intl;
    obj8.label = intl.string(tmp5(tmp2[24]).t.LYju5J);
    obj8.IconComponent = tmp5(tmp2[25]).UserCircleIcon;
    obj8.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    };
    buttons.push(obj8);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj7.buttons;
      const obj9 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp5(tmp2[24]).intl;
      obj9.label = intl2.string(tmp5(tmp2[24]).t.jsvgc3);
      obj9.IconComponent = tmp5(tmp2[27]).UserMinusIcon;
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
      let intl3 = tmp5(tmp2[24]).intl;
      obj12.label = intl3.string(tmp5(tmp2[24]).t["26C4oi"]);
      obj12.IconComponent = tmp5(tmp2[27]).UserMinusIcon;
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
          onClose(guildId[28]).closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
        };
        AlertActionCreatorsDefault.show(obj5);
      };
      buttons2.push(obj12);
    }
    const buttons3 = obj10.buttons;
    const obj13 = { label: null, IconComponent: null, onPress: null };
    let intl4 = tmp5(tmp2[24]).intl;
    obj13.label = intl4.string(tmp5(tmp2[24]).t["1r5E+m"]);
    obj13.IconComponent = tmp5(tmp2[31]).PencilIcon;
    obj13.onPress = function onPress() {
      showChatGDMCustomizeActionSheetDefault({ channelId: channel.id });
    };
    buttons3.push(obj13);
    if (tmp27) {
      const buttons4 = obj10.buttons;
      const obj14 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp5(tmp2[24]).intl;
      obj14.label = intl5.string(tmp5(tmp2[24]).t.OQ9MKu);
      obj14.IconComponent = tmp5(tmp2[33]).LinkIcon;
      obj14.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11195, dependencyMap.paths), { channelId: channel.id });
      };
      buttons4.push(obj14);
    }
  }
  items12 = [];
  if (obj7.buttons.length > 0) {
    items12.push(obj7);
  }
  let tmp52 = isFavoritesGuildSelected;
  if (isFavoritesGuildSelected) {
    tmp52 = null != channel.guild_id;
  }
  if (tmp52) {
    tmp52 = !channel.isCategory();
  }
  if (tmp52) {
    const obj15 = { sectionKey: "go-to-server", buttons: null };
    const obj16 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp5(tmp2[24]).intl;
    obj16.label = intl6.string(tmp(tmp2[36])["3KruG3"]);
    obj16.IconComponent = tmp5(tmp2[37]).ServerIcon;
    obj16.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items13 = [obj16];
    obj15.buttons = items13;
    items12.push(obj15);
  }
  if (null != tmp38) {
    const obj17 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj18 = { label: tmp38.label, IconComponent: tmp5(tmp2[39]).PlusLargeIcon, onPress: tmp38.perform };
    const items14 = [obj18];
    obj17.buttons = items14;
    items12.push(obj17);
  }
  const items15 = [];
  if (null != tmp39) {
    const obj19 = {
      label: tmp39.label,
      IconComponent: tmp5(tmp2[40]).FolderIcon,
      onPress() {
          openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, ChannelSpoilerAgreeStore);
        }
    };
    items15.push(obj19);
  }
  const tmp56 = onClose(tmp2[42])(tmp37);
  if (null != tmp56) {
    items15.push(tmp56);
  }
  if (items15.length > 0) {
    const obj20 = { sectionKey: "favorites", buttons: items15 };
    items12.push(obj20);
  }
  const guildId1 = channel.getGuildId();
  closure_129_8 = guildId1;
  if (tmp60) {
    const obj21 = { sectionKey: "vibegrations", buttons: null };
    const obj22 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[24]).intl;
    obj22.label = intl7.string(tmp(tmp2[43]).NXfIfj);
    obj22.IconComponent = tmp5(tmp2[31]).PencilIcon;
    obj22.onPress = function onPress() {
      router_utils.transitionTo(__initData10.CHANNEL(ActiveThreadsStore, StaticChannelRoute.VIBEGRATIONS, StageInstanceStore));
    };
    const items16 = [obj22];
    obj21.buttons = items16;
    items12.push(obj21);
  }
  const obj23 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj23.buttons;
    const obj24 = { label: null, IconComponent: null, onPress: null };
    const intl8 = tmp5(tmp2[24]).intl;
    obj24.label = intl8.string(tmp5(tmp2[24]).t.VINpSK);
    obj24.IconComponent = tmp5(tmp2[44]).GroupPlusIcon;
    obj24.onPress = function onPress() {
      const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: constants6.CONTEXT_MENU });
    };
    buttons5.push(obj24);
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
        const buttons6 = obj23.buttons;
        const push = buttons6.push;
        const obj25 = { label: null, IconComponent: null, onPress: null };
        const intl10 = tmp5(tmp2[24]).intl;
        const string2 = intl10.string;
        const t2 = tmp5(tmp2[24]).t;
        if (isParentOptedIn) {
          obj25.label = string2(t2.jNphKT);
          obj25.IconComponent = tmp5(tmp2[49]).XSmallIcon;
          obj25.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(ActiveThreadsStore, tmp.parent_id, false, obj2);
            }
          };
          push(obj25);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
          } else {
            string2Result = string2(t2["9mysCh"]);
          }
          obj25.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp5(tmp2[49]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[39]).PlusLargeIcon;
          }
          obj25.IconComponent = PlusLargeIcon;
          obj25.onPress = function onPress() {
            OptInChannelsActionCreators.setOptInChannel(ActiveThreadsStore, channel.id, !guildId, { section: constants3.CHANNEL_ACTION_SHEET });
          };
          push(obj25);
        }
      }
    } else {
      const buttons7 = obj23.buttons;
      const intl9 = tmp5(tmp2[24]).intl;
      const string = intl9.string;
      let t = tmp5(tmp2[24]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj26 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[46]).PinIcon,
        onPress() {
              OptInChannelsActionCreators.setIsFavorite(ActiveThreadsStore, channel.id, !setting, { section: constants3.CHANNEL_ACTION_SHEET });
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
                    tmp10 = guildId === ActiveThreadsStore;
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
      t = buttons7.push(obj26);
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
    const buttons8 = obj23.buttons;
    const obj27 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl11 = tmp5(tmp2[24]).intl;
    obj27.label = intl11.string(tmp5(tmp2[24]).t.WqhZss);
    obj27.IconComponent = tmp5(tmp2[33]).LinkIcon;
    obj27.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj27);
  }
  let isPrivateResult = !isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj28 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (tmp31) {
      const buttons9 = obj28.buttons;
      const obj29 = { label: null, IconComponent: null, onPress: null };
      const intl13 = tmp5(tmp2[24]).intl;
      obj29.label = intl13.string(tmp5(tmp2[24]).t.EuzCET);
      obj29.IconComponent = tmp5(tmp2[51]).WarningIcon;
      obj29.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons9.push(obj29);
    }
    if (tmp34) {
      const buttons10 = obj28.buttons;
      const obj30 = { label: null, IconComponent: null, onPress: null };
      const intl14 = tmp5(tmp2[24]).intl;
      obj30.label = intl14.string(tmp5(tmp2[24]).t["tBw/1i"]);
      obj30.IconComponent = tmp5(tmp2[51]).WarningIcon;
      obj30.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons10.push(obj30);
    }
    if (obj28.buttons.length > 0) {
      items12.push(obj28);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj31 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj31.buttons;
            const obj32 = { label: null, IconComponent: null, onPress: null };
            const intl15 = tmp5(tmp2[24]).intl;
            obj32.label = intl15.string(tmp5(tmp2[24]).t.L6623r);
            obj32.IconComponent = tmp5(tmp2[53]).InboxIcon;
            obj32.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons11.push(obj32);
          }
          const buttons12 = obj31.buttons;
          const obj33 = { label: null, IconComponent: null, onPress: null };
          const intl16 = tmp5(tmp2[24]).intl;
          obj33.label = intl16.string(tmp5(tmp2[24]).t["85YWlY"]);
          obj33.IconComponent = tmp5(tmp2[53]).InboxIcon;
          obj33.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons12.push(obj33);
          if (obj31.buttons.length > 0) {
            items12.push(obj31);
          }
        }
      }
    }
    if (obj23.buttons.length > 0) {
      items12.push(obj23);
    }
    const obj34 = { sectionKey: "notifications", buttons: [] };
    if (tmp83) {
      const MarkChannelUnreadExperiment = tmp5(tmp2[55]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!stateFromStores2) {
          if (canMarkChannelUnread) {
            const buttons13 = obj34.buttons;
            const obj35 = { label: null, IconComponent: null, onPress: null };
            const intl17 = tmp5(tmp2[24]).intl;
            obj35.label = intl17.string(tmp5(tmp2[24]).t.RpE9k7);
            obj35.IconComponent = tmp5(tmp2[56]).ChatMarkUnreadIcon;
            obj35.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons13.push(obj35);
          }
        }
      }
      const buttons14 = obj34.buttons;
      const obj36 = { label: null, IconComponent: null, onPress: null };
      const intl18 = tmp5(tmp2[24]).intl;
      obj36.label = intl18.string(tmp5(tmp2[24]).t.e6RscS);
      obj36.IconComponent = tmp5(tmp2[58]).EyeIcon;
      obj36.onPress = function onPress() {
        ReadStateActionCreators.ackChannel(channel, { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL });
      };
      buttons14.push(obj36);
    }
    if (!closure_12(channel.type)) {
      if (tmp93) {
        const buttons15 = obj34.buttons;
        const obj37 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl26 = tmp5(tmp2[24]).intl;
        obj37.label = intl26.string(tmp5(tmp2[24]).t.h850Ss);
        obj37.IconComponent = tmp5(tmp2[64]).ChannelNotificationIcon;
        obj37.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons15.push(obj37);
      }
      if (obj34.buttons.length > 0) {
        items12.push(obj34);
      }
      const obj38 = { sectionKey: "threads", buttons: [] };
      tmp93 = closure_9(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp96) {
        const buttons16 = obj38.buttons;
        const obj39 = { label: null, IconComponent: null, onPress: null };
        const intl27 = tmp5(tmp2[24]).intl;
        obj39.label = intl27.string(tmp5(tmp2[24]).t.B2panI);
        obj39.IconComponent = tmp5(tmp2[66]).ThreadIcon;
        obj39.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons16.push(obj39);
      }
      if (obj38.buttons.length > 0) {
        items12.push(obj38);
      }
      const obj40 = { sectionKey: "voice", buttons: [] };
      tmp96 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp21;
      if (!tmp100) {
        if (channel.isGuildVocal()) {
          const buttons17 = obj40.buttons;
          const push2 = buttons17.push;
          const obj41 = { label: null, IconComponent: null, onPress: null };
          const intl29 = tmp5(tmp2[24]).intl;
          const string6 = intl29.string;
          const t6 = tmp5(tmp2[24]).t;
          if (isGuildStageVoiceResult) {
            obj41.label = string6(t6["7vb2cc"]);
            obj41.IconComponent = tmp5(tmp2[69]).StageIcon;
            obj41.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj41);
            const buttons18 = obj40.buttons;
            const obj42 = { label: null, IconComponent: null, onPress: null };
            const intl30 = tmp5(tmp2[24]).intl;
            obj42.label = intl30.string(tmp5(tmp2[24]).t.ZXxLQg);
            obj42.IconComponent = tmp5(tmp2[70]).ChatIcon;
            obj42.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11231, dependencyMap.paths), { channel });
              hideLaunchPadDefault();
            };
            buttons18.push(obj42);
          } else {
            obj41.label = string6(t6.ZXxLQg);
            obj41.IconComponent = tmp5(tmp2[70]).ChatIcon;
            obj41.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj41);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp106) {
          const buttons19 = obj40.buttons;
          const obj43 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl31 = tmp5(tmp2[24]).intl;
          obj43.label = intl31.string(tmp5(tmp2[24]).t.saZaRb);
          obj43.IconComponent = tmp5(tmp2[49]).XSmallIcon;
          obj43.onPress = function onPress() {
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
                      const obj4 = { value: tmp4(paths[22])(paths[75], paths.paths), done: false };
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
          buttons19.push(obj43);
        }
        tmp106 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
        if (tmp108) {
          const buttons20 = obj40.buttons;
          const obj44 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl32 = tmp5(tmp2[24]).intl;
          obj44.label = intl32.string(tmp5(tmp2[24]).t["+78Pfm"]);
          obj44.IconComponent = tmp5(tmp2[76]).FlagIcon;
          obj44.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons20.push(obj44);
        }
        if (obj40.buttons.length > 0) {
          items12.push(obj40);
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores9) {
            const obj45 = { sectionKey: "spoiler", buttons: [] };
            const buttons21 = obj45.buttons;
            const obj46 = { label: null, IconComponent: null, onPress: null };
            const intl33 = tmp5(tmp2[24]).intl;
            obj46.label = intl33.string(tmp5(tmp2[24]).t.ix2UVZ);
            obj46.IconComponent = tmp5(tmp2[78]).EyeSlashIcon;
            obj46.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons21.push(obj46);
            items12.push(obj45);
          }
        }
        const obj47 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons22 = obj47.buttons;
          const intl34 = tmp5(tmp2[24]).intl;
          const string7 = intl34.string;
          const t7 = tmp5(tmp2[24]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
          } else {
            string7Result = string7(t7["3gUsJb"]);
          }
          const obj48 = {
            label: string7Result,
            IconComponent: tmp5(tmp2[80]).SettingsIcon,
            onPress() {
                      ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                      ChannelSettingsActionCreatorsDefault.open(channel.id);
                    }
          };
          buttons22.push(obj48);
          isCategoryResult = channel.isCategory();
          if (tmp116) {
            const buttons23 = obj47.buttons;
            const intl35 = tmp5(tmp2[24]).intl;
            const string8 = intl35.string;
            const t8 = tmp5(tmp2[24]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj49 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[39]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[81]).CopyIcon;
            }
            obj49.IconComponent = CopyIcon;
            obj49.onPress = function onPress() {
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
            obj49 = buttons23.push(obj49);
            isCategoryResult1 = channel.isCategory();
          }
          tmp116 = closure_9(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
        }
        if (setting) {
          const buttons24 = obj47.buttons;
          const obj50 = { label: null, IconComponent: null, onPress: null };
          const intl36 = tmp5(tmp2[24]).intl;
          obj50.label = intl36.string(tmp5(tmp2[24]).t.gFHI3k);
          obj50.IconComponent = tmp5(tmp2[83]).IdIcon;
          obj50.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons24.push(obj50);
        }
        if (obj47.buttons.length > 0) {
          items12.push(obj47);
        }
        if (obj10.buttons.length > 0) {
          items12.push(obj10);
        }
        if (obj11.buttons.length > 0) {
          items12.push(obj11);
        }
        let formatToPlainStringResult;
        if (channel.isGroupDM()) {
          const intl37 = tmp5(tmp2[24]).intl;
          const obj51 = { members: channel.recipients.length + 1 };
          formatToPlainStringResult = intl37.formatToPlainString(tmp5(tmp2[24]).t.ABMKx3, obj51);
        }
        const items17 = [items12.length, setting, onClose];
        const effect = items12.useEffect(() => {
          if (!tmp) {
            onClose();
          }
          tmp = 0 !== items12.length || setting;
        }, items17);
        const obj52 = { value: analyticsLocations, children: null };
        const obj53 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp108 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
        obj53.startExpanded = tmp5(tmp2[103]).isMetaQuest();
        const obj54 = { icon: tmp24, title: tmpResultResult, subtitle: formatToPlainStringResult };
        obj53.header = tmp23(tmp5(tmp2[104]).ActionSheetIconHeader, obj54);
        obj53.children = items12.map((buttons) => {
          const obj = { hasIcons: true, children: null };
          buttons = buttons.buttons;
          obj.children = buttons.map((onPress, index) => {
            onPress = onPress.onPress;
            let str = "default";
            ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
            if (onPress.isDestructive) {
              str = "danger";
            }
            return closure_1_35(channel(7444).ActionSheetRow, {
              variant: str,
              label,
              icon: closure_1_35(channel(7444).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
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
        obj52.children = tmp23(tmp5(tmp2[102]).ActionSheet, obj53);
        return tmp23(tmp5(tmp2[86]).AnalyticsLocationProvider, obj52);
      } else {
        const buttons25 = obj40.buttons;
        const intl28 = tmp5(tmp2[24]).intl;
        const string5 = intl28.string;
        let t5 = tmp5(tmp2[24]).t;
        if (stateFromStores5) {
          let string5Result = string5(t5.JYF2Oa);
        } else {
          string5Result = string5(t5.LxzNiu);
        }
        const obj55 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[25]).UserCircleIcon,
          onPress() {
                  ChannelCollapseActionCreatorsDefault.update(channel.id);
                }
        };
        t5 = buttons25.push(obj55);
      }
      tmp100 = closure_10(channel.type) && !stateFromStores4;
    }
    const intl19 = tmp5(tmp2[24]).intl;
    const string4 = intl19.string;
    const t4 = tmp5(tmp2[24]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl25 = tmp5(tmp2[24]).intl;
        let stringResult1 = intl25.string(tmp5(tmp2[24]).t.olaBeG);
        const buttons26 = obj34.buttons;
        const obj56 = {
          label: stringResult1,
          IconComponent: tmp5(tmp2[61]).BellIcon,
          onPress() {
                  guildId = channel.getGuildId();
                  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
                  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(guildId, channel.id, { muted: !onClose }, NotificationLabel.muted(!onClose));
                }
        };
        buttons26.push(obj56);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl23 = tmp5(tmp2[24]).intl;
            stringResult1 = intl23.string(tmp5(tmp2[24]).t["Cq/TzF"]);
          }
        }
      }
      const intl24 = tmp5(tmp2[24]).intl;
      stringResult1 = intl24.string(tmp5(tmp2[24]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl22 = tmp5(tmp2[24]).intl;
        let stringResult2 = intl22.string(tmp5(tmp2[24]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl20 = tmp5(tmp2[24]).intl;
              stringResult2 = intl20.string(tmp5(tmp2[24]).t.bUUd8q);
            }
          }
        }
        const intl21 = tmp5(tmp2[24]).intl;
        stringResult2 = intl21.string(tmp5(tmp2[24]).t.LO3kaK);
      }
      const buttons27 = obj34.buttons;
      const obj57 = {
        label: stringResult2,
        IconComponent: tmp5(tmp2[60]).BellSlashIcon,
        onPress() {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (tmp) {
                const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
                rootNavigationRef.navigate("sidebar", obj2);
              }
              tmp = null != rootNavigationRef && rootNavigationRef.isReady();
            }
      };
      buttons27.push(obj57);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp83 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons28 = obj23.buttons;
    const intl12 = tmp5(tmp2[24]).intl;
    const string3 = intl12.string;
    let t3 = tmp5(tmp2[24]).t;
    if (stateFromStores8) {
      let string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj58 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[46]).PinIcon,
      onPress() {
          OptInChannelsActionCreators.setMessagesFavorite(channel.id, !items12);
        }
    };
    t3 = buttons28.push(obj58);
  }
  tmp60 = null != id && null != guildId1;
  const tmpResult4 = onClose(tmp2[101]);
}
const SafetyWarningTypes = fn(11179).SafetyWarningTypes;
const ChannelRecord = fn(2045);
({ isGuildTextChannelType: closure_9, isGuildVocalChannelType: c10, isReadableType: closure_11, isTextChannel: closure_12 } = ChannelRecord);
const StaticChannelRoute = fn(2048).StaticChannelRoute;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_24, AnalyticsObjects: closure_25, AnalyticsSections: closure_26, ChannelSettingsSections: closure_27, ChannelTypes: closure_28, InstantInviteSources: closure_29, NULL_STRING_GUILD_ID: closure_30, Permissions: items, Routes: closure_32, ZERO_STRING_GUILD_ID: closure_33 } = Constants);
let closure_34 = fn(11180).ChannelDetailsNavigatorScreens;
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