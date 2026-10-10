// === Module 10283: ChannelLongPressActionSheet ===

// Module 10283 (ChannelLongPressActionSheet)
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2073 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5106 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import useChannelName from "useChannelName" /* 5421 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6799 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6802 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6803 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6808 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import ActionSheetRow from "ActionSheetRow" /* 6894 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7014 */;
import ReportModals from "ReportModals" /* 7721 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8303 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8605 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8682 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 9630 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 9696 */;
import openFavoritesGuildMoveToCategoryActionSheetDefault from "openFavoritesGuildMoveToCategoryActionSheet" /* 10310 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10334 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10335 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10338 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10343 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10349 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10350 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 12687 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 5945 */;
import StageInstanceStore from "StageInstanceStore" /* 2070 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6060 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6806 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7249 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import UserStore from "UserStore" /* 1390 */;

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
        return { value: "IconComponent", done: "+51" };
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
            const tmp21 = require("asyncRequireImpl");
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
function getActionSheetButtons(channel) {
  channel = channel.channel;
  ({ canCreateInstantInvite, developerMode, isMuted } = channel);
  ({ isLiveStageChannel, isOptedIn } = channel);
  const isPinned = channel.isPinned;
  const isMessagesFavorited = channel.isMessagesFavorited;
  ({ analyticsLocations: SafetyWarningTypes, isFavoritesGuild, favoritesCategoryAddAction, favoritesMoveAction } = channel);
  const vibegrationsProjectId = channel.vibegrationsProjectId;
  let guildId;
  let obj = { sectionKey: "dm", buttons: [] };
  ({ canManageChannel, canConnect, hasUnread, canMarkUnread, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
  if (channel.isDM()) {
    const buttons = obj.buttons;
    let obj2 = { label: null, IconComponent: null, onPress: null };
    let intl = channel(isOptedIn[24]).intl;
    obj2.label = intl.string(channel(isOptedIn[24]).t.LYju5J);
    obj2.IconComponent = channel(isOptedIn[25]).UserCircleIcon;
    obj2.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    };
    buttons.push(obj2);
    if (!isFavoritesGuild) {
      const buttons1 = obj.buttons;
      let obj3 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp(isOptedIn[24]).intl;
      obj3.label = intl2.string(tmp(isOptedIn[24]).t.jsvgc3);
      obj3.IconComponent = tmp(isOptedIn[27]).UserMinusIcon;
      obj3.onPress = function onPress() {
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
      };
      buttons1.push(obj3);
    }
  }
  let obj4 = { sectionKey: "gdm", buttons: [] };
  let obj5 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuild) {
      const buttons2 = obj5.buttons;
      const obj6 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
      let intl3 = channel(isOptedIn[24]).intl;
      obj6.label = intl3.string(channel(isOptedIn[24]).t["26C4oi"]);
      obj6.IconComponent = channel(isOptedIn[27]).UserMinusIcon;
      obj6.onPress = function onPress() {
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
          isMuted(isOptedIn[28]).closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
        };
        AlertActionCreatorsDefault.show(obj5);
      };
      buttons2.push(obj6);
    }
    const buttons3 = obj4.buttons;
    const obj7 = { label: null, IconComponent: null, onPress: null };
    let intl4 = channel(isOptedIn[24]).intl;
    obj7.label = intl4.string(channel(isOptedIn[24]).t["1r5E+m"]);
    obj7.IconComponent = channel(isOptedIn[31]).PencilIcon;
    obj7.onPress = function onPress() {
      showChatGDMCustomizeActionSheetDefault({ channelId: channel.id });
    };
    buttons3.push(obj7);
    if (isOwner) {
      const buttons4 = obj4.buttons;
      const obj8 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp8(isOptedIn[24]).intl;
      obj8.label = intl5.string(tmp8(isOptedIn[24]).t.OQ9MKu);
      obj8.IconComponent = tmp8(isOptedIn[33]).LinkIcon;
      obj8.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10287, dependencyMap.paths), { channelId: channel.id });
      };
      buttons4.push(obj8);
    }
  }
  const items = [];
  if (obj.buttons.length > 0) {
    items.push(obj);
  }
  let tmp13 = isFavoritesGuild;
  if (isFavoritesGuild) {
    tmp13 = null != channel.guild_id;
  }
  if (tmp13) {
    tmp13 = !channel.isCategory();
  }
  if (tmp13) {
    const obj9 = { sectionKey: "go-to-server", buttons: null };
    const obj10 = { label: null, IconComponent: null, onPress: null };
    let intl6 = channel(isOptedIn[24]).intl;
    obj10.label = intl6.string(isMuted(isOptedIn[36])["3KruG3"]);
    obj10.IconComponent = channel(isOptedIn[37]).ServerIcon;
    obj10.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items1 = [obj10];
    obj9.buttons = items1;
    items.push(obj9);
  }
  if (null != favoritesCategoryAddAction) {
    const obj11 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj12 = { label: favoritesCategoryAddAction.label, IconComponent: channel(isOptedIn[39]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform };
    const items2 = [obj12];
    obj11.buttons = items2;
    items.push(obj11);
  }
  const items3 = [];
  if (null != favoritesMoveAction) {
    const obj13 = {
      label: favoritesMoveAction.label,
      IconComponent: channel(isOptedIn[40]).FolderIcon,
      onPress() {
          openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, favoritesMoveAction);
        }
    };
    items3.push(obj13);
  }
  const tmp27 = isMuted(isOptedIn[42])(favorites);
  if (null != tmp27) {
    items3.push(tmp27);
  }
  if (items3.length > 0) {
    const obj14 = { sectionKey: "favorites", buttons: items3 };
    items.push(obj14);
  }
  guildId = channel.getGuildId();
  if (tmp31) {
    const obj15 = { sectionKey: "conjure", buttons: null };
    const obj16 = { label: null, IconComponent: null, onPress: null };
    const intl7 = channel(isOptedIn[24]).intl;
    obj16.label = intl7.string(isMuted(isOptedIn[43]).jMMrDM);
    obj16.IconComponent = channel(isOptedIn[31]).PencilIcon;
    obj16.onPress = function onPress() {
      router_utils.transitionTo(__initData4.CHANNEL(guildId, StaticChannelRoute.CONJURE, vibegrationsProjectId));
    };
    const items4 = [obj16];
    obj15.buttons = items4;
    items.push(obj15);
  }
  const obj17 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj17.buttons;
    const obj18 = { label: null, IconComponent: null, onPress: null };
    const intl8 = channel(isOptedIn[24]).intl;
    obj18.label = intl8.string(channel(isOptedIn[24]).t.VINpSK);
    obj18.IconComponent = channel(isOptedIn[44]).GroupPlusIcon;
    obj18.onPress = function onPress() {
      const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: constants6.CONTEXT_MENU });
    };
    buttons5.push(obj18);
  }
  let isThreadResult = isFavoritesGuild;
  if (!isFavoritesGuild) {
    isThreadResult = null == guildId;
  }
  if (!isThreadResult) {
    isThreadResult = channel.isThread();
  }
  if (!isThreadResult) {
    if (channel.isCategory()) {
      if (isOptInEnabled) {
        const buttons6 = obj17.buttons;
        const push = buttons6.push;
        const obj19 = { label: null, IconComponent: null, onPress: null };
        const intl10 = channel(isOptedIn[24]).intl;
        const string2 = intl10.string;
        const t2 = channel(isOptedIn[24]).t;
        if (isParentOptedIn) {
          obj19.label = string2(t2.jNphKT);
          obj19.IconComponent = tmp41(isOptedIn[49]).XSmallIcon;
          obj19.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(guildId, tmp.parent_id, false, obj2);
            }
          };
          push(obj19);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
            let tmp43 = tmp41;
          } else {
            string2Result = string2(t2["9mysCh"]);
            tmp43 = tmp41;
          }
          obj19.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp43(isOptedIn[49]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp43(isOptedIn[39]).PlusLargeIcon;
          }
          obj19.IconComponent = PlusLargeIcon;
          obj19.onPress = function onPress() {
            OptInChannelsActionCreators.setOptInChannel(guildId, channel.id, !isOptedIn, { section: constants3.CHANNEL_ACTION_SHEET });
          };
          push(obj19);
        }
      }
    } else {
      const buttons7 = obj17.buttons;
      const intl9 = channel(isOptedIn[24]).intl;
      const string = intl9.string;
      let t = channel(isOptedIn[24]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
        let tmp40 = tmp38;
      } else {
        stringResult = string(t.RMpwZu);
        tmp40 = tmp38;
      }
      const obj20 = {
        label: stringResult,
        IconComponent: tmp40(isOptedIn[46]).PinIcon,
        onPress() {
              OptInChannelsActionCreators.setIsFavorite(guildId, channel.id, !isPinned, { section: constants3.CHANNEL_ACTION_SHEET });
              if (!isPinned) {
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
                    tmp10 = guildId === tmp3;
                  }
                  if (tmp10) {
                    const obj3 = { jumpToChannelId: channel.id };
                    rootNavigationRef.setParams(obj3);
                  }
                }
                const tmpResult = RootNavigationRef;
              }
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              tmp3 = guildId;
            }
      };
      t = buttons7.push(obj20);
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
    const buttons8 = obj17.buttons;
    const obj21 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl11 = channel(isOptedIn[24]).intl;
    obj21.label = intl11.string(channel(isOptedIn[24]).t.WqhZss);
    obj21.IconComponent = channel(isOptedIn[33]).LinkIcon;
    obj21.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj21);
  }
  let isPrivateResult = !isFavoritesGuild;
  if (!isFavoritesGuild) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj22 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (canMarkAsTier1InappropriateConversation) {
      const buttons9 = obj22.buttons;
      const obj23 = { label: null, IconComponent: null, onPress: null };
      const intl13 = channel(isOptedIn[24]).intl;
      obj23.label = intl13.string(channel(isOptedIn[24]).t.EuzCET);
      obj23.IconComponent = channel(isOptedIn[51]).WarningIcon;
      obj23.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons9.push(obj23);
    }
    if (canMarkAsTier2InappropriateConversation) {
      const buttons10 = obj22.buttons;
      const obj24 = { label: null, IconComponent: null, onPress: null };
      const intl14 = channel(isOptedIn[24]).intl;
      obj24.label = intl14.string(channel(isOptedIn[24]).t["tBw/1i"]);
      obj24.IconComponent = channel(isOptedIn[51]).WarningIcon;
      obj24.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons10.push(obj24);
    }
    if (obj22.buttons.length > 0) {
      items.push(obj22);
    }
    if (isStaff) {
      if (developerMode) {
        if (channel.isDM()) {
          const obj25 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj25.buttons;
            const obj26 = { label: null, IconComponent: null, onPress: null };
            const intl15 = channel(isOptedIn[24]).intl;
            obj26.label = intl15.string(channel(isOptedIn[24]).t.L6623r);
            obj26.IconComponent = channel(isOptedIn[53]).InboxIcon;
            obj26.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons11.push(obj26);
          }
          const buttons12 = obj25.buttons;
          const obj27 = { label: null, IconComponent: null, onPress: null };
          const intl16 = channel(isOptedIn[24]).intl;
          obj27.label = intl16.string(channel(isOptedIn[24]).t["85YWlY"]);
          obj27.IconComponent = channel(isOptedIn[53]).InboxIcon;
          obj27.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons12.push(obj27);
          if (obj25.buttons.length > 0) {
            items.push(obj25);
          }
        }
      }
    }
    if (obj17.buttons.length > 0) {
      items.push(obj17);
    }
    const obj28 = { sectionKey: "notifications", buttons: [] };
    if (tmp67) {
      const MarkChannelUnreadExperiment = channel(isOptedIn[55]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!hasUnread) {
          if (canMarkUnread) {
            const buttons13 = obj28.buttons;
            const obj29 = { label: null, IconComponent: null, onPress: null };
            const intl17 = tmp68(isOptedIn[24]).intl;
            obj29.label = intl17.string(tmp68(isOptedIn[24]).t.RpE9k7);
            obj29.IconComponent = tmp68(isOptedIn[56]).ChatMarkUnreadIcon;
            obj29.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons13.push(obj29);
          }
        }
      }
      const buttons14 = obj28.buttons;
      const obj30 = { label: null, IconComponent: null, onPress: null };
      const intl18 = tmp68(isOptedIn[24]).intl;
      obj30.label = intl18.string(channel(isOptedIn[24]).t.e6RscS);
      obj30.IconComponent = channel(isOptedIn[58]).EyeIcon;
      obj30.onPress = function onPress() {
        ReadStateActionCreators.ackChannel(channel, { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL });
      };
      buttons14.push(obj30);
    }
    if (!closure_12(channel.type)) {
      if (tmp79) {
        const buttons15 = obj28.buttons;
        const obj31 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl26 = channel(isOptedIn[24]).intl;
        obj31.label = intl26.string(channel(isOptedIn[24]).t.h850Ss);
        obj31.IconComponent = channel(isOptedIn[64]).ChannelNotificationIcon;
        obj31.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons15.push(obj31);
      }
      if (obj28.buttons.length > 0) {
        items.push(obj28);
      }
      const obj32 = { sectionKey: "threads", buttons: [] };
      tmp79 = closure_9(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp83) {
        const buttons16 = obj32.buttons;
        const obj33 = { label: null, IconComponent: null, onPress: null };
        const intl27 = channel(isOptedIn[24]).intl;
        obj33.label = intl27.string(channel(isOptedIn[24]).t.B2panI);
        obj33.IconComponent = channel(isOptedIn[66]).ThreadIcon;
        obj33.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons16.push(obj33);
      }
      if (obj32.buttons.length > 0) {
        items.push(obj32);
      }
      const obj34 = { sectionKey: "voice", buttons: [] };
      tmp83 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
      if (!tmp88) {
        if (channel.isGuildVocal()) {
          const buttons17 = obj34.buttons;
          const push2 = buttons17.push;
          const obj35 = { label: null, IconComponent: null, onPress: null };
          const intl29 = channel(isOptedIn[24]).intl;
          const string6 = intl29.string;
          const t6 = channel(isOptedIn[24]).t;
          if (isGuildStageVoiceResult) {
            obj35.label = string6(t6["7vb2cc"]);
            obj35.IconComponent = tmp93(isOptedIn[69]).StageIcon;
            obj35.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj35);
            const buttons18 = obj34.buttons;
            const obj36 = { label: null, IconComponent: null, onPress: null };
            const intl30 = tmp93(isOptedIn[24]).intl;
            obj36.label = intl30.string(tmp93(isOptedIn[24]).t.ZXxLQg);
            obj36.IconComponent = tmp93(isOptedIn[70]).ChatIcon;
            obj36.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10351, dependencyMap.paths), { channel });
              hideLaunchPadDefault();
            };
            buttons18.push(obj36);
          } else {
            obj35.label = string6(t6.ZXxLQg);
            obj35.IconComponent = tmp93(isOptedIn[70]).ChatIcon;
            obj35.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj35);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp97) {
          const buttons19 = obj34.buttons;
          const obj37 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl31 = channel(isOptedIn[24]).intl;
          obj37.label = intl31.string(channel(isOptedIn[24]).t.saZaRb);
          obj37.IconComponent = channel(isOptedIn[49]).XSmallIcon;
          obj37.onPress = function onPress() {
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
                  return { value: "IconComponent", done: "+51" };
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
                    return { value: "IconComponent", done: "+51" };
                  }
                } catch (tmp10) {
                  paths = tmp;
                  throw tmp10;
                }
              }
            })();
          };
          buttons19.push(obj37);
        }
        tmp97 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
        if (tmp100) {
          const buttons20 = obj34.buttons;
          const obj38 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl32 = channel(isOptedIn[24]).intl;
          obj38.label = intl32.string(channel(isOptedIn[24]).t["+78Pfm"]);
          obj38.IconComponent = channel(isOptedIn[76]).FlagIcon;
          obj38.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons20.push(obj38);
        }
        if (obj34.buttons.length > 0) {
          items.push(obj34);
        }
        if (channel.isSpoilerChannel()) {
          if (isSpoilerAgreed) {
            const obj39 = { sectionKey: "spoiler", buttons: [] };
            const buttons21 = obj39.buttons;
            const obj40 = { label: null, IconComponent: null, onPress: null };
            const intl33 = channel(isOptedIn[24]).intl;
            obj40.label = intl33.string(channel(isOptedIn[24]).t.ix2UVZ);
            obj40.IconComponent = channel(isOptedIn[78]).EyeSlashIcon;
            obj40.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons21.push(obj40);
            items.push(obj39);
          }
        }
        const obj41 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons22 = obj41.buttons;
          const intl34 = channel(isOptedIn[24]).intl;
          const string7 = intl34.string;
          const t7 = channel(isOptedIn[24]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
            let tmp110 = tmp108;
          } else {
            string7Result = string7(t7["3gUsJb"]);
            tmp110 = tmp108;
          }
          const obj42 = {
            label: string7Result,
            IconComponent: tmp110(isOptedIn[80]).SettingsIcon,
            onPress() {
                      ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                      ChannelSettingsActionCreatorsDefault.open(channel.id);
                    }
          };
          buttons22.push(obj42);
          let isForumLikeChannelResult1 = closure_9(channel.type);
          if (!isForumLikeChannelResult1) {
            isForumLikeChannelResult1 = channel.isForumLikeChannel();
          }
          if (!isForumLikeChannelResult1) {
            isForumLikeChannelResult1 = channel.isGuildVoice();
          }
          if (!isForumLikeChannelResult1) {
            isForumLikeChannelResult1 = channel.isCategory();
          }
          if (isForumLikeChannelResult1) {
            const buttons23 = obj41.buttons;
            const intl35 = tmp110(isOptedIn[24]).intl;
            const string8 = intl35.string;
            const t8 = tmp110(isOptedIn[24]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj43 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp110(isOptedIn[39]).PlusLargeIcon;
            } else {
              CopyIcon = tmp110(isOptedIn[81]).CopyIcon;
            }
            obj43.IconComponent = CopyIcon;
            obj43.onPress = function onPress() {
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
            obj43 = buttons23.push(obj43);
            isCategoryResult1 = channel.isCategory();
          }
          isCategoryResult = channel.isCategory();
        }
        if (developerMode) {
          const buttons24 = obj41.buttons;
          const obj44 = { label: null, IconComponent: null, onPress: null };
          const intl36 = channel(isOptedIn[24]).intl;
          obj44.label = intl36.string(channel(isOptedIn[24]).t.gFHI3k);
          obj44.IconComponent = channel(isOptedIn[83]).IdIcon;
          obj44.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons24.push(obj44);
        }
        if (obj41.buttons.length > 0) {
          items.push(obj41);
        }
        if (obj4.buttons.length > 0) {
          items.push(obj4);
        }
        if (obj5.buttons.length > 0) {
          items.push(obj5);
        }
        return items;
      } else {
        const buttons25 = obj34.buttons;
        const intl28 = channel(isOptedIn[24]).intl;
        const string5 = intl28.string;
        let t5 = channel(isOptedIn[24]).t;
        if (isCollapsedVoiceChannel) {
          let string5Result = string5(t5.JYF2Oa);
          let tmp91 = tmp89;
        } else {
          string5Result = string5(t5.LxzNiu);
          tmp91 = tmp89;
        }
        const obj45 = {
          label: string5Result,
          IconComponent: tmp91(isOptedIn[25]).UserCircleIcon,
          onPress() {
                  ChannelCollapseActionCreatorsDefault.update(channel.id);
                }
        };
        t5 = buttons25.push(obj45);
      }
      tmp88 = closure_10(channel.type) && !isInCollapsedCategory;
    }
    const intl19 = channel(isOptedIn[24]).intl;
    const string4 = intl19.string;
    const t4 = channel(isOptedIn[24]).t;
    if (isMuted) {
      if (channel.isCategory()) {
        const intl25 = tmp72(isOptedIn[24]).intl;
        let stringResult1 = intl25.string(tmp72(isOptedIn[24]).t.olaBeG);
        const buttons26 = obj28.buttons;
        const obj46 = {
          label: stringResult1,
          IconComponent: tmp72(isOptedIn[61]).BellIcon,
          onPress() {
                  const obj2 = { guildId: channel.getGuildId(), channelId: channel.id, settings: { muted: !isMuted }, label: null };
                  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
                  obj2.label = NotificationLabel.muted(!isMuted);
                  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
                }
        };
        buttons26.push(obj46);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl23 = tmp72(isOptedIn[24]).intl;
            stringResult1 = intl23.string(tmp72(isOptedIn[24]).t["Cq/TzF"]);
          }
        }
      }
      const intl24 = tmp72(isOptedIn[24]).intl;
      stringResult1 = intl24.string(tmp72(isOptedIn[24]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl22 = tmp72(isOptedIn[24]).intl;
        let stringResult2 = intl22.string(tmp72(isOptedIn[24]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl20 = tmp72(isOptedIn[24]).intl;
              stringResult2 = intl20.string(tmp72(isOptedIn[24]).t.bUUd8q);
            }
          }
        }
        const intl21 = tmp72(isOptedIn[24]).intl;
        stringResult2 = intl21.string(tmp72(isOptedIn[24]).t.LO3kaK);
      }
      const buttons27 = obj28.buttons;
      const obj47 = {
        label: stringResult2,
        IconComponent: tmp72(isOptedIn[60]).BellSlashIcon,
        onPress() {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (tmp) {
                const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
                rootNavigationRef.navigate("sidebar", obj2);
              }
              tmp = null != rootNavigationRef && rootNavigationRef.isReady();
            }
      };
      buttons27.push(obj47);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp67 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons28 = obj17.buttons;
    const intl12 = channel(isOptedIn[24]).intl;
    const string3 = intl12.string;
    let t3 = channel(isOptedIn[24]).t;
    if (isMessagesFavorited) {
      let string3Result = string3(t3.vDYmad);
      let tmp54 = tmp52;
    } else {
      string3Result = string3(t3["uKw3A+"]);
      tmp54 = tmp52;
    }
    const obj48 = {
      label: string3Result,
      IconComponent: tmp54(isOptedIn[46]).PinIcon,
      onPress() {
          OptInChannelsActionCreators.setMessagesFavorite(channel.id, !isMessagesFavorited);
        }
    };
    t3 = buttons28.push(obj48);
  }
  tmp31 = null != vibegrationsProjectId && null != guildId;
}
const SafetyWarningTypes = fn(10284).SafetyWarningTypes;
const ChannelRecord = fn(2069);
({ isGuildTextChannelType: closure_9, isGuildVocalChannelType: c10, isReadableType: closure_11, isTextChannel: closure_12 } = ChannelRecord);
const StaticChannelRoute = fn(2072).StaticChannelRoute;
const Constants = fn(1085);
({ AnalyticsObjectTypes: closure_24, AnalyticsObjects: closure_25, AnalyticsSections: closure_26, ChannelSettingsSections: closure_27, ChannelTypes: closure_28, InstantInviteSources: closure_29, NULL_STRING_GUILD_ID: closure_30, Permissions: items, Routes: closure_32, ZERO_STRING_GUILD_ID: closure_33 } = Constants);
let closure_34 = fn(9629).ChannelDetailsNavigatorScreens;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheetConnected(channel) {
  const cResult = channel(576).c(69);
  channel = channel.channel;
  const onClose = channel.onClose;
  let obj = channel(576);
  const analyticsLocations = onClose(6851)(onClose(6878).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    let tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmp4 = onClose(6851);
  const isFavoritesGuildSelected = channel(10312).useIsFavoritesGuildSelected();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const fn = function b() {
      return GuildStore.getGuild(closure_2);
    };
    cResult[3] = tmp5;
    cResult[4] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = channel(10312);
  const stateFromStores = channel(504).useStateFromStores(tmp8, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[5] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== channel) {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[92]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
    cResult[6] = channel;
    cResult[7] = O;
  } else {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[92]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  const tmpResult4 = channel(504);
  const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp12, O);
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  const tmpResult5 = channel(504);
  if (tmp5 == null) {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[92]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  const optInEnabledForGuild = channel(6076).useOptInEnabledForGuild(tmp5);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[92]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
    const items2 = [UserGuildSettingsStore];
    cResult[8] = items2;
  } else {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[92]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  if (cResult[9] === channel.id) {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[92]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  class F {
    constructor() {
      obj = { isOptedIn: closure_21.isChannelOptedIn(closure_2, channel.id), isParentOptedIn: null, isPinned: null };
      obj2 = closure_21;
      tmp = closure_2;
      tmp2 = channel;
      tmp3 = null != channel.parent_id && obj2.isChannelOptedIn(tmp, tmp2.parent_id);
      obj.isParentOptedIn = tmp3;
      if (tmp == null) {
        tmp = ZERO_STRING_GUILD_ID;
      }
      obj.isPinned = obj2.isFavorite(tmp, tmp2.id);
      return obj;
    }
  }
  cResult[9] = channel.id;
  cResult[10] = channel.parent_id;
  cResult[11] = tmp5;
  cResult[12] = F;
  const tmpResult6 = channel(6076);
}) : (function ChannelLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  noop = undefined;
  const analyticsLocations = onClose(guildId[88])(onClose(guildId[89]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp3 = onClose(guildId[88]);
  const isFavoritesGuildSelected = channel(guildId[90]).useIsFavoritesGuildSelected();
  let obj = channel(guildId[90]);
  const items = [GuildStore];
  const stateFromStores = channel(guildId[91]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = channel(guildId[91]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = channel(guildId[91]).useStateFromStoresObject(items1, () => ({ canManageChannel: PermissionStore.can(constants7.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants7.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants7.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  const obj3 = channel(guildId[91]);
  if (guildId == null) {
    guildId = closure_30;
  }
  const optInEnabledForGuild = channel(guildId[93]).useOptInEnabledForGuild(guildId);
  const obj4 = channel(guildId[93]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = channel(guildId[91]).useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null, isPinned: null };
    let tmp = guildId;
    obj.isParentOptedIn = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData5;
    }
    obj.isPinned = UserGuildSettingsStore.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isParentOptedIn, isPinned } = stateFromStoresObject1);
  const tmp5Result = channel(guildId[91]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = channel(guildId[91]).useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const tmp5Result14 = channel(guildId[91]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = channel(guildId[91]).useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result15 = channel(guildId[91]);
  const canMarkChannelUnread = channel(guildId[57]).useCanMarkChannelUnread(channel);
  const tmp5Result16 = channel(guildId[57]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = channel(guildId[91]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result17 = channel(guildId[91]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = channel(guildId[91]).useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const tmp5Result18 = channel(guildId[91]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = channel(guildId[91]).useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const tmp5Result19 = channel(guildId[91]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = channel(guildId[91]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result20 = channel(guildId[91]);
  const tmpResult = onClose(guildId[29]);
  const tmpResultResult = onClose(guildId[29])(channel, !channel.isThread());
  const DeveloperMode = tmp5(tmp2[95]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    const obj5 = { guild: stateFromStores, size: tmp5(tmp2[96]).GuildIconSizes.LARGE };
    let tmp24 = jsx(tmp(tmp2[96]), { guild: stateFromStores, size: tmp5(tmp2[96]).GuildIconSizes.LARGE });
    let tmp23 = jsx;
    const tmpResult3 = tmp(tmp2[96]);
  } else {
    tmp23 = jsx;
    const obj6 = { size: tmp5(tmp2[97]).AvatarSizes.LARGE, channel };
    tmp24 = jsx(tmp5(tmp2[97]).Avatar, { size: tmp5(tmp2[97]).AvatarSizes.LARGE, channel });
  }
  const tmp21 = onClose(guildId[94])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = channel(guildId[91]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result21 = channel(guildId[91]);
  const tmp27 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [UserGuildSettingsStore];
  const stateFromStores8 = channel(guildId[91]).useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result22 = channel(guildId[91]);
  const inappropriateConversationsTiers = channel(guildId[98]).useInappropriateConversationsTiers(channel);
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
  const tmp5Result23 = channel(guildId[98]);
  const items11 = [ChannelSpoilerAgreeStore];
  const stateFromStores9 = channel(guildId[91]).useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp5Result24 = channel(guildId[91]);
  const tmp37 = onClose(guildId[99])(channel, "ChannelLongPressActionSheet");
  const tmp39 = onClose(guildId[101])(channel);
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
  const tmp38 = onClose(guildId[100])(channel);
  const isConjureChannelCandidate = channel(guildId[102]).useIsConjureChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp44 = null;
  const tmp5Result25 = channel(guildId[102]);
  if (isConjureChannelCandidate) {
    tmp44 = channel;
  }
  const tmpResult2Result = onClose(guildId[103])(tmp44);
  const obj7 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, hasUnread: stateFromStores2, canMarkUnread: canMarkChannelUnread, isOwner: tmp27, hasThreads: stateFromStores3, isNsfwGated: tmp21, isInCollapsedCategory: stateFromStores4, isCollapsedVoiceChannel: stateFromStores5, isLiveStageChannel: stateFromStores6, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, isMessagesFavorited: stateFromStores8, canMarkAsTier1InappropriateConversation: tmp31, canMarkAsTier2InappropriateConversation: tmp34, isSpoilerAgreed: stateFromStores9, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected, isStaff: null, favorites: null, favoritesCategoryAddAction: null, favoritesMoveAction: null, vibegrationsProjectId: null };
  let isStaffResult;
  if (stateFromStores7 != null) {
    isStaffResult = stateFromStores7.isStaff();
  }
  obj7.isStaff = true === isStaffResult;
  obj7.favorites = tmp37;
  obj7.favoritesCategoryAddAction = tmp38;
  obj7.favoritesMoveAction = tmp41;
  let id;
  if (tmpResult2Result != null) {
    id = tmpResult2Result.id;
  }
  if (id == null) {
    id = null;
  }
  obj7.vibegrationsProjectId = id;
  const tmp46Result = getActionSheetButtons(obj7);
  noop = tmp46Result;
  let formatToPlainStringResult;
  if (channel.isGroupDM()) {
    const intl = tmp5(tmp2[24]).intl;
    const obj8 = { members: channel.recipients.length + 1 };
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp2[24]).t.ABMKx3, obj8);
  }
  const items12 = [tmp46Result.length, setting, onClose];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      onClose();
    }
    tmp = 0 !== length.length || setting;
  }, items12);
  const obj9 = { value: analyticsLocations, children: null };
  const obj10 = { showGradient: true, startExpanded: null, header: null, children: null };
  const tmpResult4 = onClose(guildId[103]);
  obj10.startExpanded = channel(guildId[105]).isMetaQuest();
  obj10.header = tmp23(channel(guildId[106]).ActionSheetIconHeader, { icon: tmp24, title: tmpResultResult, subtitle: formatToPlainStringResult });
  obj10.children = tmp46Result.map((buttons) => {
    const obj = { hasIcons: true, children: null };
    buttons = buttons.buttons;
    obj.children = buttons.map((onPress, index) => {
      onPress = onPress.onPress;
      let str = "default";
      ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
      if (onPress.isDestructive) {
        str = "danger";
      }
      return closure_1_35(channel(6894).ActionSheetRow, {
        variant: str,
        label,
        icon: closure_1_35(channel(6894).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
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
  obj9.children = tmp23(channel(guildId[104]).ActionSheet, obj10);
  return tmp23(channel(guildId[88]).AnalyticsLocationProvider, obj9);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheet(channelId) {
  const cResult = channelId(stateFromStores[87]).c(10);
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(stateFromStores[87]);
  stateFromStores = channelId(stateFromStores[91]).useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === onClose) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === onClose) {
        let tmp12 = cResult[9];
      }
      return tmp12;
    }
    let tmp13 = null;
    if (null != stateFromStores) {
      const obj2 = { channel: stateFromStores, onClose };
      tmp13 = <closure_39 channel={stateFromStores} onClose={onClose} />;
    }
    cResult[7] = stateFromStores;
    cResult[8] = onClose;
    cResult[9] = tmp13;
    tmp12 = tmp13;
  }
  const fn2 = function h() {
    if (null == stateFromStores) {
      onClose();
    }
  };
  const items1 = [stateFromStores, onClose];
  cResult[3] = stateFromStores;
  cResult[4] = onClose;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn2;
  const tmpResult = channelId(stateFromStores[91]);
}) : (function ChannelLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(_require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, onClose };
    tmp3 = <closure_39 channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
});