// === Module 10692: ChannelLongPressActionSheet ===

// Module 10692 (ChannelLongPressActionSheet)
import router_utils from "router_utils" /* 1114 */;
import util from "util" /* 1128 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4831 */;
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import useChannelName from "useChannelName" /* 5604 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5710 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5908 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6830 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7206 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7209 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7210 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7215 */;
import ClipboardUtils from "ClipboardUtils" /* 7285 */;
import ActionSheetRow from "ActionSheetRow" /* 7294 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7411 */;
import ReportModals from "ReportModals" /* 8108 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8975 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9050 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10025 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10093 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10696 */;
import openFavoritesGuildMoveToCategoryActionSheetDefault from "openFavoritesGuildMoveToCategoryActionSheet" /* 10843 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10863 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10864 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10867 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10872 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10878 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10879 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 13844 */;
import openAppChannelToChatDefault from "openAppChannelToChat" /* 13845 */;
import closeFrameDefault from "closeFrame" /* 13846 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6683 */;
import StageInstanceStore from "StageInstanceStore" /* 4828 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6790 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7213 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7636 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6704 */;
import UserStore from "UserStore" /* 1392 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureRemixSheetDefault = ConjureRemixSheet;

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
        return { value: "IconComponent", done: "+352" };
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
  const conjureProjectId = channel.conjureProjectId;
  const appFrameId = channel.appFrameId;
  const conjureRemixProject = channel.conjureRemixProject;
  ({ canManageChannel, canConnect, hasUnread, canMarkUnread, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
  let guildId = channel.getGuildId();
  const items = [];
  if (tmp2) {
    let obj = { sectionKey: "conjure-remix", buttons: null };
    let obj2 = { label: null, IconComponent: null, onPress: null };
    let intl = channel(isOptedIn[24]).intl;
    obj2.label = intl.string(isMuted(isOptedIn[25]).KMwCb7);
    obj2.IconComponent = channel(isOptedIn[26]).RemixIcon;
    obj2.onPress = function onPress() {
      const obj2 = {
        key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
        content: jsx(ConjureRemixSheetDefault, {
          project: conjureRemixProject,
          currentGuildId: guildId,
          onRemixed(arg0, arg1) {
            return channel(isOptedIn[29]).transitionTo(closure_1_32.CHANNEL(arg1, constants.CONJURE, arg0));
          }
        })
      };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    const items1 = [obj2];
    obj.buttons = items1;
    items.push(obj);
  }
  let obj3 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    const buttons = obj3.buttons;
    let obj4 = { label: null, IconComponent: null, onPress: null };
    let intl2 = channel(isOptedIn[24]).intl;
    obj4.label = intl2.string(channel(isOptedIn[24]).t.LYju5J);
    obj4.IconComponent = channel(isOptedIn[30]).UserCircleIcon;
    obj4.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    };
    buttons.push(obj4);
    if (!isFavoritesGuild) {
      const buttons1 = obj3.buttons;
      let obj5 = { label: null, IconComponent: null, onPress: null };
      let intl3 = tmp7(isOptedIn[24]).intl;
      obj5.label = intl3.string(tmp7(isOptedIn[24]).t.jsvgc3);
      obj5.IconComponent = tmp7(isOptedIn[32]).UserMinusIcon;
      obj5.onPress = function onPress() {
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
      };
      buttons1.push(obj5);
    }
  }
  const obj6 = { sectionKey: "gdm", buttons: [] };
  const obj7 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuild) {
      const buttons2 = obj7.buttons;
      const obj8 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
      let intl4 = channel(isOptedIn[24]).intl;
      obj8.label = intl4.string(channel(isOptedIn[24]).t["26C4oi"]);
      obj8.IconComponent = channel(isOptedIn[32]).UserMinusIcon;
      obj8.onPress = function onPress() {
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
          isMuted(isOptedIn[33]).closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
        };
        AlertActionCreatorsDefault.show(obj5);
      };
      buttons2.push(obj8);
    }
    const buttons3 = obj6.buttons;
    const obj9 = { label: null, IconComponent: null, onPress: null };
    let intl5 = channel(isOptedIn[24]).intl;
    obj9.label = intl5.string(channel(isOptedIn[24]).t["1r5E+m"]);
    obj9.IconComponent = channel(isOptedIn[36]).PencilIcon;
    obj9.onPress = function onPress() {
      showChatGDMCustomizeActionSheetDefault({ channelId: channel.id });
    };
    buttons3.push(obj9);
    if (isOwner) {
      const buttons4 = obj6.buttons;
      const obj10 = { label: null, IconComponent: null, onPress: null };
      let intl6 = tmp14(isOptedIn[24]).intl;
      obj10.label = intl6.string(tmp14(isOptedIn[24]).t.OQ9MKu);
      obj10.IconComponent = tmp14(isOptedIn[38]).LinkIcon;
      obj10.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10820, dependencyMap.paths), { channelId: channel.id });
      };
      buttons4.push(obj10);
    }
  }
  if (obj3.buttons.length > 0) {
    items.push(obj3);
  }
  let tmp19 = isFavoritesGuild;
  if (isFavoritesGuild) {
    tmp19 = null != channel.guild_id;
  }
  if (tmp19) {
    tmp19 = !channel.isCategory();
  }
  if (tmp19) {
    const obj11 = { sectionKey: "go-to-server", buttons: null };
    const obj12 = { label: null, IconComponent: null, onPress: null };
    const intl7 = channel(isOptedIn[24]).intl;
    obj12.label = intl7.string(isMuted(isOptedIn[41])["3KruG3"]);
    obj12.IconComponent = channel(isOptedIn[42]).ServerIcon;
    obj12.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items2 = [obj12];
    obj11.buttons = items2;
    items.push(obj11);
  }
  if (null != favoritesCategoryAddAction) {
    const obj13 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj14 = { label: favoritesCategoryAddAction.label, IconComponent: channel(isOptedIn[43]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform };
    const items3 = [obj14];
    obj13.buttons = items3;
    items.push(obj13);
  }
  const items4 = [];
  if (null != favoritesMoveAction) {
    const obj15 = {
      label: favoritesMoveAction.label,
      IconComponent: channel(isOptedIn[44]).FolderIcon,
      onPress() {
          openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, favoritesMoveAction);
        }
    };
    items4.push(obj15);
  }
  const tmp32 = isMuted(isOptedIn[46])(favorites);
  if (null != tmp32) {
    items4.push(tmp32);
  }
  if (items4.length > 0) {
    const obj16 = { sectionKey: "favorites", buttons: items4 };
    items.push(obj16);
  }
  if (tmp35) {
    const obj17 = { sectionKey: "conjure", buttons: null };
    const obj18 = { label: null, IconComponent: null, onPress: null };
    const intl8 = channel(isOptedIn[24]).intl;
    obj18.label = intl8.string(isMuted(isOptedIn[25]).jMMrDM);
    obj18.IconComponent = channel(isOptedIn[36]).PencilIcon;
    obj18.onPress = function onPress() {
      router_utils.transitionTo(__initData4.CHANNEL(guildId, StaticChannelRoute.CONJURE, conjureProjectId));
    };
    const items5 = [obj18];
    obj17.buttons = items5;
    items.push(obj17);
  }
  const obj19 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj19.buttons;
    const obj20 = { label: null, IconComponent: null, onPress: null };
    const intl9 = channel(isOptedIn[24]).intl;
    obj20.label = intl9.string(channel(isOptedIn[24]).t.VINpSK);
    obj20.IconComponent = channel(isOptedIn[47]).GroupPlusIcon;
    obj20.onPress = function onPress() {
      const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: constants6.CONTEXT_MENU });
    };
    buttons5.push(obj20);
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
        const buttons6 = obj19.buttons;
        const push = buttons6.push;
        const obj21 = { label: null, IconComponent: null, onPress: null };
        const intl11 = channel(isOptedIn[24]).intl;
        const string2 = intl11.string;
        const t2 = channel(isOptedIn[24]).t;
        if (isParentOptedIn) {
          obj21.label = string2(t2.jNphKT);
          obj21.IconComponent = tmp45(isOptedIn[52]).XSmallIcon;
          obj21.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(guildId, tmp.parent_id, false, obj2);
            }
          };
          push(obj21);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
            let tmp47 = tmp45;
          } else {
            string2Result = string2(t2["9mysCh"]);
            tmp47 = tmp45;
          }
          obj21.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp47(isOptedIn[52]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp47(isOptedIn[43]).PlusLargeIcon;
          }
          obj21.IconComponent = PlusLargeIcon;
          obj21.onPress = function onPress() {
            OptInChannelsActionCreators.setOptInChannel(guildId, channel.id, !isOptedIn, { section: constants3.CHANNEL_ACTION_SHEET });
          };
          push(obj21);
        }
      }
    } else {
      const buttons7 = obj19.buttons;
      const intl10 = channel(isOptedIn[24]).intl;
      const string = intl10.string;
      let t = channel(isOptedIn[24]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
        let tmp44 = tmp42;
      } else {
        stringResult = string(t.RMpwZu);
        tmp44 = tmp42;
      }
      const obj22 = {
        label: stringResult,
        IconComponent: tmp44(isOptedIn[49]).PinIcon,
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
      t = buttons7.push(obj22);
    }
  }
  let isForumLikeChannelResult = conjureRemixProject(channel.type);
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = guildId(channel.type);
  }
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (isForumLikeChannelResult) {
    const buttons8 = obj19.buttons;
    const obj23 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl12 = channel(isOptedIn[24]).intl;
    obj23.label = intl12.string(channel(isOptedIn[24]).t.WqhZss);
    obj23.IconComponent = channel(isOptedIn[38]).LinkIcon;
    obj23.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj23);
  }
  let isPrivateResult = !isFavoritesGuild;
  if (!isFavoritesGuild) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj24 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (canMarkAsTier1InappropriateConversation) {
      const buttons9 = obj24.buttons;
      const obj25 = { label: null, IconComponent: null, onPress: null };
      const intl14 = channel(isOptedIn[24]).intl;
      obj25.label = intl14.string(channel(isOptedIn[24]).t.EuzCET);
      obj25.IconComponent = channel(isOptedIn[54]).WarningIcon;
      obj25.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons9.push(obj25);
    }
    if (canMarkAsTier2InappropriateConversation) {
      const buttons10 = obj24.buttons;
      const obj26 = { label: null, IconComponent: null, onPress: null };
      const intl15 = channel(isOptedIn[24]).intl;
      obj26.label = intl15.string(channel(isOptedIn[24]).t["tBw/1i"]);
      obj26.IconComponent = channel(isOptedIn[54]).WarningIcon;
      obj26.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons10.push(obj26);
    }
    if (obj24.buttons.length > 0) {
      items.push(obj24);
    }
    if (isStaff) {
      if (developerMode) {
        if (channel.isDM()) {
          const obj27 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj27.buttons;
            const obj28 = { label: null, IconComponent: null, onPress: null };
            const intl16 = channel(isOptedIn[24]).intl;
            obj28.label = intl16.string(channel(isOptedIn[24]).t.L6623r);
            obj28.IconComponent = channel(isOptedIn[56]).InboxIcon;
            obj28.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons11.push(obj28);
          }
          const buttons12 = obj27.buttons;
          const obj29 = { label: null, IconComponent: null, onPress: null };
          const intl17 = channel(isOptedIn[24]).intl;
          obj29.label = intl17.string(channel(isOptedIn[24]).t["85YWlY"]);
          obj29.IconComponent = channel(isOptedIn[56]).InboxIcon;
          obj29.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons12.push(obj29);
          if (obj27.buttons.length > 0) {
            items.push(obj27);
          }
        }
      }
    }
    if (obj19.buttons.length > 0) {
      items.push(obj19);
    }
    const obj30 = { sectionKey: "notifications", buttons: [] };
    if (tmp71) {
      const MarkChannelUnreadExperiment = channel(isOptedIn[58]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!hasUnread) {
          if (canMarkUnread) {
            const buttons13 = obj30.buttons;
            const obj31 = { label: null, IconComponent: null, onPress: null };
            const intl18 = tmp72(isOptedIn[24]).intl;
            obj31.label = intl18.string(tmp72(isOptedIn[24]).t.RpE9k7);
            obj31.IconComponent = tmp72(isOptedIn[59]).ChatMarkUnreadIcon;
            obj31.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons13.push(obj31);
          }
        }
      }
      const buttons14 = obj30.buttons;
      const obj32 = { label: null, IconComponent: null, onPress: null };
      const intl19 = tmp72(isOptedIn[24]).intl;
      obj32.label = intl19.string(channel(isOptedIn[24]).t.e6RscS);
      obj32.IconComponent = channel(isOptedIn[61]).EyeIcon;
      obj32.onPress = function onPress() {
        ReadStateActionCreators.ackChannel(channel, { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL });
      };
      buttons14.push(obj32);
    }
    if (!closure_12(channel.type)) {
      if (tmp83) {
        const buttons15 = obj30.buttons;
        const obj33 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl27 = channel(isOptedIn[24]).intl;
        obj33.label = intl27.string(channel(isOptedIn[24]).t.h850Ss);
        obj33.IconComponent = channel(isOptedIn[67]).ChannelNotificationIcon;
        obj33.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons15.push(obj33);
      }
      if (obj30.buttons.length > 0) {
        items.push(obj30);
      }
      const obj34 = { sectionKey: "threads", buttons: [] };
      tmp83 = tmp50(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp87) {
        const buttons16 = obj34.buttons;
        const obj35 = { label: null, IconComponent: null, onPress: null };
        const intl28 = channel(isOptedIn[24]).intl;
        obj35.label = intl28.string(channel(isOptedIn[24]).t.B2panI);
        obj35.IconComponent = channel(isOptedIn[69]).ThreadIcon;
        obj35.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons16.push(obj35);
      }
      if (obj34.buttons.length > 0) {
        items.push(obj34);
      }
      const obj36 = { sectionKey: "voice", buttons: [] };
      tmp87 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
      if (!tmp92) {
        if (channel.isGuildVocal()) {
          const buttons17 = obj36.buttons;
          const push2 = buttons17.push;
          const obj37 = { label: null, IconComponent: null, onPress: null };
          const intl30 = channel(isOptedIn[24]).intl;
          const string6 = intl30.string;
          const t6 = channel(isOptedIn[24]).t;
          if (isGuildStageVoiceResult) {
            obj37.label = string6(t6["7vb2cc"]);
            obj37.IconComponent = tmp97(isOptedIn[72]).StageIcon;
            obj37.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj37);
            const buttons18 = obj36.buttons;
            const obj38 = { label: null, IconComponent: null, onPress: null };
            const intl31 = tmp97(isOptedIn[24]).intl;
            obj38.label = intl31.string(tmp97(isOptedIn[24]).t.ZXxLQg);
            obj38.IconComponent = tmp97(isOptedIn[73]).ChatIcon;
            obj38.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10880, dependencyMap.paths), { channel });
              hideLaunchPadDefault();
            };
            buttons18.push(obj38);
          } else {
            obj37.label = string6(t6.ZXxLQg);
            obj37.IconComponent = tmp97(isOptedIn[73]).ChatIcon;
            obj37.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj37);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp101) {
          const buttons19 = obj36.buttons;
          const obj39 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl32 = channel(isOptedIn[24]).intl;
          obj39.label = intl32.string(channel(isOptedIn[24]).t.saZaRb);
          obj39.IconComponent = channel(isOptedIn[52]).XSmallIcon;
          obj39.onPress = function onPress() {
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
                  return { value: "IconComponent", done: "+352" };
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
                      const obj4 = { value: tmp4(paths[22])(paths[77], paths.paths), done: false };
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
                    return { value: "IconComponent", done: "+352" };
                  }
                } catch (tmp10) {
                  paths = tmp;
                  throw tmp10;
                }
              }
            })();
          };
          buttons19.push(obj39);
        }
        tmp101 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
        if (tmp104) {
          const buttons20 = obj36.buttons;
          const obj40 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl33 = channel(isOptedIn[24]).intl;
          obj40.label = intl33.string(channel(isOptedIn[24]).t["+78Pfm"]);
          obj40.IconComponent = channel(isOptedIn[78]).FlagIcon;
          obj40.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons20.push(obj40);
        }
        if (obj36.buttons.length > 0) {
          items.push(obj36);
        }
        if (channel.type === constants5.GUILD_APP) {
          if (null != channel.application_id) {
            const obj41 = { sectionKey: "app-channel", buttons: null };
            const obj42 = { label: null, IconComponent: null, onPress: null };
            const intl39 = channel(isOptedIn[24]).intl;
            obj42.label = intl39.string(channel(isOptedIn[24]).t.ZXxLQg);
            obj42.IconComponent = channel(isOptedIn[73]).ChatIcon;
            obj42.onPress = function onPress() {
              openAppChannelToChatDefault(channel);
              hideLaunchPadDefault();
            };
            const items6 = [obj42];
            obj41.buttons = items6;
            if (null != appFrameId) {
              const buttons21 = obj41.buttons;
              const obj43 = { label: null, IconComponent: null, onPress: null };
              const intl34 = tmp128(isOptedIn[24]).intl;
              obj43.label = intl34.string(tmp128(isOptedIn[24]).t.VkMnR2);
              obj43.IconComponent = tmp128(isOptedIn[81]).DoorExitIcon;
              obj43.onPress = function onPress() {
                closeFrameDefault(appFrameId);
              };
              buttons21.push(obj43);
            }
            items.push(obj41);
          }
        }
        if (channel.isSpoilerChannel()) {
          if (isSpoilerAgreed) {
            const obj44 = { sectionKey: "spoiler", buttons: [] };
            const buttons22 = obj44.buttons;
            const obj45 = { label: null, IconComponent: null, onPress: null };
            const intl35 = channel(isOptedIn[24]).intl;
            obj45.label = intl35.string(channel(isOptedIn[24]).t.ix2UVZ);
            obj45.IconComponent = channel(isOptedIn[83]).EyeSlashIcon;
            obj45.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons22.push(obj45);
            items.push(obj44);
          }
        }
        const obj46 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons23 = obj46.buttons;
          const intl36 = channel(isOptedIn[24]).intl;
          const string7 = intl36.string;
          const t7 = channel(isOptedIn[24]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
            let tmp117 = tmp115;
          } else {
            string7Result = string7(t7["3gUsJb"]);
            tmp117 = tmp115;
          }
          const obj47 = {
            label: string7Result,
            IconComponent: tmp117(isOptedIn[85]).SettingsIcon,
            onPress() {
                      ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                      ChannelSettingsActionCreatorsDefault.open(channel.id);
                    }
          };
          buttons23.push(obj47);
          let isForumLikeChannelResult1 = tmp50(channel.type);
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
            const buttons24 = obj46.buttons;
            const intl37 = tmp117(isOptedIn[24]).intl;
            const string8 = intl37.string;
            const t8 = tmp117(isOptedIn[24]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj48 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp117(isOptedIn[43]).PlusLargeIcon;
            } else {
              CopyIcon = tmp117(isOptedIn[86]).CopyIcon;
            }
            obj48.IconComponent = CopyIcon;
            obj48.onPress = function onPress() {
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
            obj48 = buttons24.push(obj48);
            isCategoryResult1 = channel.isCategory();
          }
          isCategoryResult = channel.isCategory();
        }
        if (developerMode) {
          const buttons25 = obj46.buttons;
          const obj49 = { label: null, IconComponent: null, onPress: null };
          const intl38 = channel(isOptedIn[24]).intl;
          obj49.label = intl38.string(channel(isOptedIn[24]).t.gFHI3k);
          obj49.IconComponent = channel(isOptedIn[88]).IdIcon;
          obj49.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons25.push(obj49);
        }
        if (obj46.buttons.length > 0) {
          items.push(obj46);
        }
        if (obj6.buttons.length > 0) {
          items.push(obj6);
        }
        if (obj7.buttons.length > 0) {
          items.push(obj7);
        }
        return items;
      } else {
        const buttons26 = obj36.buttons;
        const intl29 = channel(isOptedIn[24]).intl;
        const string5 = intl29.string;
        let t5 = channel(isOptedIn[24]).t;
        if (isCollapsedVoiceChannel) {
          let string5Result = string5(t5.JYF2Oa);
          let tmp95 = tmp93;
        } else {
          string5Result = string5(t5.LxzNiu);
          tmp95 = tmp93;
        }
        const obj50 = {
          label: string5Result,
          IconComponent: tmp95(isOptedIn[30]).UserCircleIcon,
          onPress() {
                  ChannelCollapseActionCreatorsDefault.update(channel.id);
                }
        };
        t5 = buttons26.push(obj50);
      }
      tmp92 = guildId(channel.type) && !isInCollapsedCategory;
    }
    const intl20 = channel(isOptedIn[24]).intl;
    const string4 = intl20.string;
    const t4 = channel(isOptedIn[24]).t;
    if (isMuted) {
      if (channel.isCategory()) {
        const intl26 = tmp76(isOptedIn[24]).intl;
        let stringResult1 = intl26.string(tmp76(isOptedIn[24]).t.olaBeG);
        const buttons27 = obj30.buttons;
        const obj51 = {
          label: stringResult1,
          IconComponent: tmp76(isOptedIn[64]).BellIcon,
          onPress() {
                  const obj2 = { guildId: channel.getGuildId(), channelId: channel.id, settings: { muted: !isMuted }, label: null };
                  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
                  obj2.label = NotificationLabel.muted(!isMuted);
                  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj2);
                }
        };
        buttons27.push(obj51);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl24 = tmp76(isOptedIn[24]).intl;
            stringResult1 = intl24.string(tmp76(isOptedIn[24]).t["Cq/TzF"]);
          }
        }
      }
      const intl25 = tmp76(isOptedIn[24]).intl;
      stringResult1 = intl25.string(tmp76(isOptedIn[24]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl23 = tmp76(isOptedIn[24]).intl;
        let stringResult2 = intl23.string(tmp76(isOptedIn[24]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl21 = tmp76(isOptedIn[24]).intl;
              stringResult2 = intl21.string(tmp76(isOptedIn[24]).t.bUUd8q);
            }
          }
        }
        const intl22 = tmp76(isOptedIn[24]).intl;
        stringResult2 = intl22.string(tmp76(isOptedIn[24]).t.LO3kaK);
      }
      const buttons28 = obj30.buttons;
      const obj52 = {
        label: stringResult2,
        IconComponent: tmp76(isOptedIn[63]).BellSlashIcon,
        onPress() {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (tmp) {
                const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
                rootNavigationRef.navigate("sidebar", obj2);
              }
              tmp = null != rootNavigationRef && rootNavigationRef.isReady();
            }
      };
      buttons28.push(obj52);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp71 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons29 = obj19.buttons;
    const intl13 = channel(isOptedIn[24]).intl;
    const string3 = intl13.string;
    let t3 = channel(isOptedIn[24]).t;
    if (isMessagesFavorited) {
      let string3Result = string3(t3.vDYmad);
      let tmp58 = tmp56;
    } else {
      string3Result = string3(t3["uKw3A+"]);
      tmp58 = tmp56;
    }
    const obj53 = {
      label: string3Result,
      IconComponent: tmp58(isOptedIn[49]).PinIcon,
      onPress() {
          OptInChannelsActionCreators.setMessagesFavorite(channel.id, !isMessagesFavorited);
        }
    };
    t3 = buttons29.push(obj53);
  }
  tmp2 = null != conjureRemixProject && null != guildId;
  tmp35 = null != conjureProjectId && null != guildId;
}
const SafetyWarningTypes = fn(10693).SafetyWarningTypes;
const ChannelRecord = fn(4827);
({ isGuildTextChannelType: closure_9, isGuildVocalChannelType: c10, isReadableType: closure_11, isTextChannel: closure_12 } = ChannelRecord);
const StaticChannelRoute = fn(4830).StaticChannelRoute;
const Constants = fn(1087);
({ AnalyticsObjectTypes: closure_24, AnalyticsObjects: closure_25, AnalyticsSections: closure_26, ChannelSettingsSections: closure_27, ChannelTypes: closure_28, InstantInviteSources: closure_29, NULL_STRING_GUILD_ID: closure_30, Permissions: closure_31, Routes: closure_32, ZERO_STRING_GUILD_ID: items } = Constants);
let closure_34 = fn(10024).ChannelDetailsNavigatorScreens;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheetConnected(channel) {
  const cResult = channel(576).c(69);
  channel = channel.channel;
  const onClose = channel.onClose;
  let obj = channel(576);
  const analyticsLocations = onClose(7253)(onClose(7278).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    let tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmp4 = onClose(7253);
  const isFavoritesGuildSelected = channel(10845).useIsFavoritesGuildSelected();
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
  const tmpResult = channel(10845);
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
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[97]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
    cResult[6] = channel;
    cResult[7] = O;
  } else {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[97]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
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
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[97]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  const optInEnabledForGuild = channel(6813).useOptInEnabledForGuild(tmp5);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[97]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
    const items2 = [UserGuildSettingsStore];
    cResult[8] = items2;
  } else {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[97]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  if (cResult[9] === channel.id) {
    class O {
      constructor() {
        obj = { canManageChannel: closure_17.can(Permissions.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_17.can(Permissions.CREATE_INSTANT_INVITE, channel), canConnect: closure_17.can(Permissions.CONNECT, channel), canModerateStage: closure_17.can(closure_0(closure_2[97]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
        return obj;
      }
    }
  }
  class R {
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
  cResult[12] = R;
  const tmpResult6 = channel(6813);
}) : (function ChannelLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  noop = undefined;
  const analyticsLocations = onClose(guildId[93])(onClose(guildId[94]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp3 = onClose(guildId[93]);
  const isFavoritesGuildSelected = channel(guildId[95]).useIsFavoritesGuildSelected();
  let obj = channel(guildId[95]);
  const items = [GuildStore];
  const stateFromStores = channel(guildId[96]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = channel(guildId[96]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = channel(guildId[96]).useStateFromStoresObject(items1, () => ({ canManageChannel: PermissionStore.can(constants7.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants7.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants7.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  const obj3 = channel(guildId[96]);
  if (guildId == null) {
    guildId = closure_30;
  }
  const optInEnabledForGuild = channel(guildId[98]).useOptInEnabledForGuild(guildId);
  const obj4 = channel(guildId[98]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = channel(guildId[96]).useStateFromStoresObject(items2, () => {
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
  const tmp5Result = channel(guildId[96]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = channel(guildId[96]).useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const tmp5Result14 = channel(guildId[96]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = channel(guildId[96]).useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result15 = channel(guildId[96]);
  const canMarkChannelUnread = channel(guildId[60]).useCanMarkChannelUnread(channel);
  const tmp5Result16 = channel(guildId[60]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = channel(guildId[96]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result17 = channel(guildId[96]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = channel(guildId[96]).useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const tmp5Result18 = channel(guildId[96]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = channel(guildId[96]).useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const tmp5Result19 = channel(guildId[96]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = channel(guildId[96]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result20 = channel(guildId[96]);
  const tmpResult = onClose(guildId[34]);
  const tmpResultResult = onClose(guildId[34])(channel, !channel.isThread());
  const DeveloperMode = tmp5(tmp2[100]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    const obj5 = { guild: stateFromStores, size: tmp5(tmp2[101]).GuildIconSizes.LARGE };
    let tmp24 = jsx(tmp(tmp2[101]), { guild: stateFromStores, size: tmp5(tmp2[101]).GuildIconSizes.LARGE });
    let tmp23 = jsx;
    const tmpResult3 = tmp(tmp2[101]);
  } else {
    tmp23 = jsx;
    const obj6 = { size: tmp5(tmp2[102]).AvatarSizes.LARGE, channel };
    tmp24 = jsx(tmp5(tmp2[102]).Avatar, { size: tmp5(tmp2[102]).AvatarSizes.LARGE, channel });
  }
  const tmp21 = onClose(guildId[99])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = channel(guildId[96]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result21 = channel(guildId[96]);
  const tmp27 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [UserGuildSettingsStore];
  const stateFromStores8 = channel(guildId[96]).useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result22 = channel(guildId[96]);
  const inappropriateConversationsTiers = channel(guildId[103]).useInappropriateConversationsTiers(channel);
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
  const tmp5Result23 = channel(guildId[103]);
  const items11 = [ChannelSpoilerAgreeStore];
  const stateFromStores9 = channel(guildId[96]).useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp5Result24 = channel(guildId[96]);
  const tmp37 = onClose(guildId[104])(channel);
  const tmp39 = onClose(guildId[106])(channel);
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
  const tmp38 = onClose(guildId[105])(channel);
  const isConjureChannelCandidate = channel(guildId[107]).useIsConjureChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp44 = null;
  const tmp5Result25 = channel(guildId[107]);
  if (isConjureChannelCandidate) {
    tmp44 = channel;
  }
  const tmpResult2Result = onClose(guildId[108])(tmp44);
  const tmp46 = onClose(guildId[110])(channel, isConjureChannelCandidate);
  const obj7 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, hasUnread: stateFromStores2, canMarkUnread: canMarkChannelUnread, isOwner: tmp27, hasThreads: stateFromStores3, isNsfwGated: tmp21, isInCollapsedCategory: stateFromStores4, isCollapsedVoiceChannel: stateFromStores5, isLiveStageChannel: stateFromStores6, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, isMessagesFavorited: stateFromStores8, canMarkAsTier1InappropriateConversation: tmp31, canMarkAsTier2InappropriateConversation: tmp34, isSpoilerAgreed: stateFromStores9, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected, isStaff: null, favorites: null, favoritesCategoryAddAction: null, favoritesMoveAction: null, conjureProjectId: null, appFrameId: null, conjureRemixProject: null };
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
  obj7.conjureProjectId = id;
  obj7.appFrameId = onClose(guildId[109])(channel).frameId;
  obj7.conjureRemixProject = tmp46.remixProject;
  const tmp47Result = getActionSheetButtons(obj7);
  noop = tmp47Result;
  if (channel.isGroupDM()) {
    const intl = tmp5(tmp2[24]).intl;
    const obj8 = { members: channel.recipients.length + 1 };
    const formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp2[24]).t.ABMKx3, obj8);
  }
  const items12 = [tmp47Result.length, setting, onClose];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      onClose();
    }
    tmp = 0 !== length.length || setting;
  }, items12);
  const obj9 = { value: analyticsLocations, children: null };
  const obj10 = { showGradient: true, startExpanded: null, header: null, children: null };
  const tmpResult4 = onClose(guildId[108]);
  obj10.startExpanded = channel(guildId[112]).isMetaQuest();
  const header = tmp46.header;
  let icon;
  if (header != null) {
    icon = header.icon;
  }
  if (icon == null) {
    icon = tmp24;
  }
  const obj11 = { icon, title: null, subtitle: null };
  const header2 = tmp46.header;
  let title;
  if (header2 != null) {
    title = header2.title;
  }
  if (title == null) {
    title = tmpResultResult;
  }
  obj11.title = title;
  const header3 = tmp46.header;
  let subtitle;
  if (header3 != null) {
    subtitle = header3.subtitle;
  }
  if (subtitle == null) {
    subtitle = formatToPlainStringResult;
  }
  obj11.subtitle = subtitle;
  obj10.header = tmp23(channel(guildId[113]).ActionSheetIconHeader, obj11);
  obj10.children = tmp47Result.map((buttons) => {
    const obj = { hasIcons: true, children: null };
    buttons = buttons.buttons;
    obj.children = buttons.map((onPress, index) => {
      onPress = onPress.onPress;
      let str = "default";
      ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
      if (onPress.isDestructive) {
        str = "danger";
      }
      return closure_1_35(channel(7294).ActionSheetRow, {
        variant: str,
        label,
        icon: closure_1_35(channel(7294).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
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
  obj9.children = tmp23(channel(guildId[111]).ActionSheet, obj10);
  return tmp23(channel(guildId[93]).AnalyticsLocationProvider, obj9);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelLongPressActionSheet(channelId) {
  const cResult = channelId(stateFromStores[92]).c(10);
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
  const obj = channelId(stateFromStores[92]);
  stateFromStores = channelId(stateFromStores[96]).useStateFromStores(first, tmp6);
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
  const tmpResult = channelId(stateFromStores[96]);
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