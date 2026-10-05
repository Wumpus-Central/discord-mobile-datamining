// discord_app/modules/channel/native/ChannelLongPressActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import router_utils from "../../routing/router_utils.tsx";
import intl37 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ChannelConstants from "../ChannelConstants.tsx";
import StageChannelPermissions from "../../stage_channels/StageChannelPermissions.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import useChannelName from "../useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../actions/AlertActionCreators.tsx";
import ReadStateActionCreators from "../../../actions/ReadStateActionCreators.tsx";
import OptInChannelsActionCreators from "../../opt_in_channels/OptInChannelsActionCreators.tsx";
import NotificationSettingsUtils from "../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../actions/NotificationSettingsModalActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow2 from "../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import ReportModals from "../../in_app_reports/ReportModals.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../actions/native/CreateChannelModalActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../instant_invite/native/InstantInviteUtils.tsx";
import ChannelSafetyWarningsStore from "../../self_mod/ChannelSafetyWarningsStore.tsx";
import MessageRequestActionCreators from "../../message_request/MessageRequestActionCreators.tsx";
import InappropriateConversationsActionCreators from "../../self_mod/inappropriate_conversation/InappropriateConversationsActionCreators.tsx";
import markChannelUnreadDefault from "../markChannelUnread.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../actions/ChannelSettingsActionCreators.tsx";
import ChannelDetailsConstants from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";
import showChatGDMCustomizeActionSheetDefault from "../../group_dm/native/showChatGDMCustomizeActionSheet.tsx";
import openFavoritesGuildMoveToCategoryActionSheetDefault from "../../favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx";
import ChannelActionSheetUtils from "ChannelActionSheetUtils.tsx";
import showThreadBrowserModalDefault from "../../threads/native/showThreadBrowserModal.tsx";
import ChannelCollapseActionCreatorsDefault from "../../../actions/ChannelCollapseActionCreators.tsx";
import hideLaunchPadDefault from "../../launchpad/native/hideLaunchPad.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ChannelSpoilerAgreeStore from "../../spoiler_channels/ChannelSpoilerAgreeStore.tsx";
import StageInstanceStore from "../../stage_channels/StageInstanceStore.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
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
import Constants from "../../../Constants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c1, channelId, closure_1, dependencyMap;

let c10;
let c9;
let closure_12;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let unpackModuleId;
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  obj = _asyncToGenerator(async (arg0) => {
    const guildStageVoice = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_1 = tmp;
              const isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
              const tmp19 = require("asyncRequire");
              if (isGuildStageVoiceResult) {
                c2 = 2;
                c3 = 1;
                const obj4 = { value: tmp19(dependencyMap[21], dependencyMap.paths), done: false };
                return obj4;
              } else {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp19(dependencyMap[23], dependencyMap.paths), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              } else {
                value.openGuildVoiceModal(guildStageVoice, "Channel List");
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              value.connectAndOpen(guildStageVoice);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
function getActionSheetButtons(channel) {
  let CopyIcon;
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canMarkAsTier1InappropriateConversation;
  let canMarkAsTier2InappropriateConversation;
  let canMarkUnread;
  let canModerateStage;
  let currentlySelectedChannelId;
  let developerMode;
  let favorites;
  let favoritesCategoryAddAction;
  let favoritesMoveAction;
  let hasThreads;
  let hasUnread;
  let intl;
  let intl11;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl2;
  let intl26;
  let intl27;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl36;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isCollapsedVoiceChannel;
  let isFavoritesGuild;
  let isInCollapsedCategory;
  let isLiveStageChannel;
  let isMuted;
  let isNsfwGated;
  let isOptInEnabled;
  let isOptedIn;
  let isOwner;
  let isParentOptedIn;
  let isSpoilerAgreed;
  let isStaff;
  let items1;
  let items2;
  let items4;
  let sourceAnalyticsLocations;
  channel = channel.channel;
  ({ canCreateInstantInvite, developerMode, isMuted } = channel);
  ({ isLiveStageChannel, isOptedIn } = channel);
  const isPinned = channel.isPinned;
  const isMessagesFavorited = channel.isMessagesFavorited;
  ({
    analyticsLocations: SafetyWarningTypes,
    isFavoritesGuild,
    favoritesCategoryAddAction,
    favoritesMoveAction,
  } = channel);
  const vibegrationsProjectId = channel.vibegrationsProjectId;
  let guildId;
  obj = { sectionKey: "dm", buttons: [] };
  ({
    canManageChannel,
    canConnect,
    hasUnread,
    canMarkUnread,
    isOwner,
    hasThreads,
    isNsfwGated,
    isInCollapsedCategory,
    isCollapsedVoiceChannel,
    canModerateStage,
    isOptInEnabled,
    isParentOptedIn,
    canMarkAsTier1InappropriateConversation,
    canMarkAsTier2InappropriateConversation,
    isSpoilerAgreed,
    isStaff,
    favorites,
  } = channel);
  if (channel.isDM()) {
    const buttons = obj.buttons;
    let obj2 = {
      label: intl.string(channel(isOptedIn[24]).t.LYju5J),
      IconComponent: channel(isOptedIn[25]).UserCircleIcon,
      onPress() {
        obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: SafetyWarningTypes };
        const tmp = showUserProfileActionSheetDefault;
        tmp(obj);
      },
    };
    let tmp = channel;
    const push = buttons.push;
    intl = channel(isOptedIn[24]).intl;
    push(obj2);
    if (!isFavoritesGuild) {
      const buttons1 = obj.buttons;
      let obj3 = {
        label: intl2.string(tmp(isOptedIn[24]).t.jsvgc3),
        IconComponent: tmp(isOptedIn[27]).UserMinusIcon,
        onPress() {
          obj = ChannelActionCreatorsDefault;
          obj.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
        },
      };
      const push2 = buttons1.push;
      intl2 = tmp(isOptedIn[24]).intl;
      push2(obj3);
    }
  }
  let obj4 = { sectionKey: "gdm", buttons: [] };
  const obj5 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuild) {
      const buttons2 = obj5.buttons;
      const push3 = buttons2.push;
      const obj6 = {
        label: intl3.string(channel(isOptedIn[24]).t["26C4oi"]),
        IconComponent: channel(isOptedIn[27]).UserMinusIcon,
        isDestructive: true,
        onPress() {
          let intl5;
          let intl6;
          let user;
          obj = useChannelName;
          const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
          const intl = intl37.intl;
          const formatToPlainStringResult = intl.formatToPlainString(intl37.t.hJ5Ap4, { name: channelName });
          const intl2 = intl37.intl;
          let formatResult = intl2.format(intl37.t.SSIVOu, { name: channelName });
          let formatToPlainStringResult1 = formatToPlainStringResult;
          if (channel.isManaged()) {
            const intl3 = intl37.intl;
            const obj2 = { name: channelName };
            formatToPlainStringResult1 = intl3.formatToPlainString(intl37.t.hVGjEW, obj2);
            const intl4 = intl37.intl;
            const obj3 = { name: channelName };
            formatResult = intl4.format(intl37.t.IK1Qvs, obj3);
          }
          const obj4 = {
            title: formatToPlainStringResult1,
            body: formatResult,
            confirmText: intl5.string(intl37.t.p89ACt),
            cancelText: intl6.string(intl37.t.gm1Vej),
            onConfirm() {
              obj = isMuted(isOptedIn[28]);
              obj.closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
            },
          };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl5 = intl37.intl;
          intl6 = intl37.intl;
          show(obj4);
        },
      };
      intl3 = channel(isOptedIn[24]).intl;
      push3(obj6);
    }
    const buttons3 = obj4.buttons;
    const push4 = buttons3.push;
    const obj7 = {
      label: intl4.string(channel(isOptedIn[24]).t["1r5E+m"]),
      IconComponent: channel(isOptedIn[31]).PencilIcon,
      onPress() {
        obj = { channelId: channel.id };
        showChatGDMCustomizeActionSheetDefault(obj);
      },
    };
    intl4 = channel(isOptedIn[24]).intl;
    push4(obj7);
    if (isOwner) {
      const buttons4 = obj4.buttons;
      const push5 = buttons4.push;
      const obj8 = {
        label: intl5.string(channel(isOptedIn[24]).t.OQ9MKu),
        IconComponent: channel(isOptedIn[33]).LinkIcon,
        onPress() {
          obj = ModalActionCreatorsDefault;
          const obj2 = { channelId: channel.id };
          obj.pushLazy(asyncRequire(10668, dependencyMap.paths), obj2);
        },
      };
      intl5 = tmp8(isOptedIn[24]).intl;
      push5(obj8);
    }
  }
  const items = [];
  if (obj.buttons.length > 0) {
    items.push(obj);
  }
  const tmp13 = isFavoritesGuild && null != channel.guild_id && !channel.isCategory();
  if (tmp13) {
    const obj9 = { sectionKey: "go-to-server", buttons: items1 };
    const push6 = items.push;
    const obj10 = {
      label: intl6.string(isMuted(isOptedIn[36])["3KruG3"]),
      IconComponent: channel(isOptedIn[37]).ServerIcon,
      onPress() {
        obj = router_utils;
        obj.transitionToGuild(channel.guild_id, channel.id);
      },
    };
    intl6 = channel(isOptedIn[24]).intl;
    items1 = [obj10];
    push6(obj9);
  }
  if (null != favoritesCategoryAddAction) {
    const obj11 = { sectionKey: "favorites-add-to-category", buttons: items2 };
    const push7 = items.push;
    items2 = [
      {
        label: favoritesCategoryAddAction.label,
        IconComponent: channel(isOptedIn[39]).PlusLargeIcon,
        onPress: favoritesCategoryAddAction.perform,
      },
    ];
    const obj12 = {
      label: favoritesCategoryAddAction.label,
      IconComponent: channel(isOptedIn[39]).PlusLargeIcon,
      onPress: favoritesCategoryAddAction.perform,
    };
    push7(obj11);
  }
  const items3 = [];
  if (null != favoritesMoveAction) {
    const push8 = items3.push;
    const obj13 = {
      label: favoritesMoveAction.label,
      IconComponent: channel(isOptedIn[40]).FolderIcon,
      onPress() {
        openFavoritesGuildMoveToCategoryActionSheetDefault(channel.id, favoritesMoveAction);
      },
    };
    push8(obj13);
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
  const tmp31 = null != vibegrationsProjectId && null != guildId;
  if (tmp31) {
    const obj15 = { sectionKey: "conjure", buttons: items4 };
    const push9 = items.push;
    const obj16 = {
      label: intl7.string(isMuted(isOptedIn[43]).jMMrDM),
      IconComponent: channel(isOptedIn[31]).PencilIcon,
      onPress() {
        obj = router_utils;
        obj.transitionTo(__initData2.CHANNEL(guildId, StaticChannelRoute.CONJURE, vibegrationsProjectId));
      },
    };
    intl7 = channel(isOptedIn[24]).intl;
    items4 = [obj16];
    push9(obj15);
  }
  const obj17 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj17.buttons;
    const push10 = buttons5.push;
    const obj18 = {
      label: intl8.string(channel(isOptedIn[24]).t.VINpSK),
      IconComponent: channel(isOptedIn[44]).GroupPlusIcon,
      onPress() {
        obj = instant_invite_InstantInviteUtils;
        const obj2 = { source: constants5.CONTEXT_MENU };
        const result = obj.showInstantInviteActionSheet(channel, obj2);
      },
    };
    intl8 = channel(isOptedIn[24]).intl;
    push10(obj18);
  }
  const tmp37 = isFavoritesGuild || null == guildId || channel.isThread();
  if (!tmp37) {
    if (!channel.isCategory()) {
      let stringResult;
      let tmp40;
      const buttons6 = obj17.buttons;
      const push11 = buttons6.push;
      const intl9 = channel(isOptedIn[24]).intl;
      const string = intl9.string;
      const t = channel(isOptedIn[24]).t;
      if (isPinned) {
        stringResult = string(t.M5PWSf);
        tmp40 = tmp38;
      } else {
        stringResult = string(t.RMpwZu);
        tmp40 = tmp38;
      }
      const obj19 = {
        label: stringResult,
        IconComponent: tmp40(isOptedIn[46]).PinIcon,
        onPress() {
          obj = OptInChannelsActionCreators;
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
          obj.setIsFavorite(guildId, channel.id, !isPinned, obj2);
          const tmp3 = guildId;
          if (!isPinned) {
            const tmpResult = RootNavigationRef;
            const rootNavigationRef = tmpResult.getRootNavigationRef();
            if (null != rootNavigationRef) {
              let params;
              const currentRoute = rootNavigationRef.getCurrentRoute();
              let name;
              if (currentRoute != null) {
                name = currentRoute.name;
              }
              const currentRoute1 = rootNavigationRef.getCurrentRoute();
              if (currentRoute1 != null) {
                params = currentRoute1.params;
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
          }
        },
      };
      push11(obj19);
    }
    if (isOptInEnabled) {
      const buttons7 = obj17.buttons;
      const push12 = buttons7.push;
      const obj20 = { label: null, IconComponent: null, onPress: null };
      const intl10 = channel(isOptedIn[24]).intl;
      const string2 = intl10.string;
      const t2 = channel(isOptedIn[24]).t;
      if (isParentOptedIn) {
        obj20.label = string2(t2.jNphKT);
        obj20.IconComponent = channel(isOptedIn[49]).XSmallIcon;
        obj20.onPress = function onPress() {
          if (null != channel.parent_id) {
            obj = OptInChannelsActionCreators;
            const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId, tmp.parent_id, false, obj2);
          }
        };
        push12(obj20);
      } else {
        let string2Result;
        let tmp44;
        let PlusLargeIcon;
        if (isOptedIn) {
          string2Result = string2(t2["3zySTA"]);
          tmp44 = tmp42;
        } else {
          string2Result = string2(t2["9mysCh"]);
          tmp44 = tmp42;
        }
        obj20.label = string2Result;
        if (isOptedIn) {
          PlusLargeIcon = tmp44(isOptedIn[49]).XSmallIcon;
        } else {
          PlusLargeIcon = tmp44(isOptedIn[39]).PlusLargeIcon;
        }
        obj20.IconComponent = PlusLargeIcon;
        obj20.onPress = function onPress() {
          obj = OptInChannelsActionCreators;
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
          obj.setOptInChannel(guildId, channel.id, !isOptedIn, obj2);
        };
        push12(obj20);
      }
    }
  }
  const isForumLikeChannelResult = closure_9(channel.type) || closure_10(channel.type) || channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const buttons8 = obj17.buttons;
    const push13 = buttons8.push;
    const obj21 = {
      label: intl11.string(channel(isOptedIn[24]).t.WqhZss),
      IconComponent: channel(isOptedIn[33]).LinkIcon,
      isDestructive: false,
      onPress() {
        obj = ChannelActionSheetUtils;
        const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
      },
    };
    intl11 = channel(isOptedIn[24]).intl;
    push13(obj21);
  }
  const tmp52 = !isFavoritesGuild && channel.isPrivate();
  if (tmp52) {
    let string3Result;
    let tmp55;
    const buttons9 = obj17.buttons;
    const push14 = buttons9.push;
    const intl12 = channel(isOptedIn[24]).intl;
    const string3 = intl12.string;
    const t3 = channel(isOptedIn[24]).t;
    if (isMessagesFavorited) {
      string3Result = string3(t3.vDYmad);
      tmp55 = tmp53;
    } else {
      string3Result = string3(t3["uKw3A+"]);
      tmp55 = tmp53;
    }
    const obj22 = {
      label: string3Result,
      IconComponent: tmp55(isOptedIn[46]).PinIcon,
      onPress() {
        obj = OptInChannelsActionCreators;
        obj.setMessagesFavorite(channel.id, !isMessagesFavorited);
      },
    };
    push14(obj22);
  }
  const obj23 = { sectionKey: "safety-warning-tooling", buttons: [] };
  if (canMarkAsTier1InappropriateConversation) {
    const buttons10 = obj23.buttons;
    const push15 = buttons10.push;
    const obj24 = {
      label: intl13.string(channel(isOptedIn[24]).t.EuzCET),
      IconComponent: channel(isOptedIn[51]).WarningIcon,
      onPress() {
        obj = InappropriateConversationsActionCreators;
        const result = obj.markAsInappropriateConversation(
          channel.id,
          SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
        );
      },
    };
    intl13 = channel(isOptedIn[24]).intl;
    push15(obj24);
  }
  if (canMarkAsTier2InappropriateConversation) {
    const buttons11 = obj23.buttons;
    const push16 = buttons11.push;
    const obj25 = {
      label: intl14.string(channel(isOptedIn[24]).t["tBw/1i"]),
      IconComponent: channel(isOptedIn[51]).WarningIcon,
      onPress() {
        obj = InappropriateConversationsActionCreators;
        const result = obj.markAsInappropriateConversation(
          channel.id,
          SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      },
    };
    intl14 = channel(isOptedIn[24]).intl;
    push16(obj25);
  }
  if (obj23.buttons.length > 0) {
    items.push(obj23);
  }
  if (isStaff) {
    if (developerMode) {
      if (channel.isDM()) {
        const obj26 = { sectionKey: "message-request", buttons: [] };
        if (true !== channel.isMessageRequest) {
          const buttons12 = obj26.buttons;
          const push17 = buttons12.push;
          const obj27 = {
            label: intl15.string(channel(isOptedIn[24]).t.L6623r),
            IconComponent: channel(isOptedIn[53]).InboxIcon,
            onPress() {
              obj = MessageRequestActionCreators;
              obj.markAsMessageRequest(channel.id);
            },
          };
          intl15 = channel(isOptedIn[24]).intl;
          push17(obj27);
        }
        const buttons13 = obj26.buttons;
        const push18 = buttons13.push;
        const obj28 = {
          label: intl16.string(channel(isOptedIn[24]).t["85YWlY"]),
          IconComponent: channel(isOptedIn[53]).InboxIcon,
          onPress() {
            obj = MessageRequestActionCreators;
            const result = obj.clearMessageRequestState(channel.id);
          },
        };
        intl16 = channel(isOptedIn[24]).intl;
        push18(obj28);
        if (obj26.buttons.length > 0) {
          items.push(obj26);
        }
      }
    }
  }
  if (obj17.buttons.length > 0) {
    items.push(obj17);
  }
  const obj29 = { sectionKey: "notifications", buttons: [] };
  const tmp68 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  if (tmp68) {
    const MarkChannelUnreadExperiment = channel(isOptedIn[55]).MarkChannelUnreadExperiment;
    if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
      if (!hasUnread) {
        if (canMarkUnread) {
          const buttons14 = obj29.buttons;
          const push19 = buttons14.push;
          const obj30 = {
            label: intl17.string(channel(isOptedIn[24]).t.RpE9k7),
            IconComponent: channel(isOptedIn[56]).ChatMarkUnreadIcon,
            onPress() {
              markChannelUnreadDefault(channel.id);
            },
          };
          intl17 = tmp69(isOptedIn[24]).intl;
          push19(obj30);
        }
      }
    }
    const buttons15 = obj29.buttons;
    const push20 = buttons15.push;
    const obj31 = {
      label: intl18.string(channel(isOptedIn[24]).t.e6RscS),
      IconComponent: channel(isOptedIn[58]).EyeIcon,
      onPress() {
        obj = ReadStateActionCreators;
        const obj2 = {
          section: constants3.CHANNEL_ACTION_SHEET,
          object: constants2.MARK_CHANNEL_AS_READ_BUTTON,
          objectType: constants.ACK_MANUAL,
        };
        obj.ackChannel(channel, obj2);
      },
    };
    intl18 = tmp69(isOptedIn[24]).intl;
    push20(obj31);
  }
  if (!closure_12(channel.type)) {
    const tmp79 =
      closure_9(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
    if (tmp79) {
      const buttons16 = obj29.buttons;
      const push23 = buttons16.push;
      const obj32 = {
        label: intl26.string(channel(isOptedIn[24]).t.h850Ss),
        IconComponent: channel(isOptedIn[64]).ChannelNotificationIcon,
        disableColor: true,
        onPress() {
          obj = ChannelSettingsActionCreatorsDefault;
          obj.setSection(constants4.NOTIFICATIONS);
          const obj2 = ChannelSettingsActionCreatorsDefault;
          obj2.open(channel.id);
        },
      };
      intl26 = channel(isOptedIn[24]).intl;
      push23(obj32);
    }
    if (obj29.buttons.length > 0) {
      items.push(obj29);
    }
    const obj33 = { sectionKey: "threads", buttons: [] };
    const tmp83 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
    if (!tmp83) {
      const buttons17 = obj33.buttons;
      const push24 = buttons17.push;
      const obj34 = {
        label: intl27.string(channel(isOptedIn[24]).t.B2panI),
        IconComponent: channel(isOptedIn[66]).ThreadIcon,
        onPress() {
          showThreadBrowserModalDefault(channel);
        },
      };
      intl27 = channel(isOptedIn[24]).intl;
      push24(obj34);
    }
    if (obj33.buttons.length > 0) {
      items.push(obj33);
    }
    const obj35 = { sectionKey: "voice", buttons: [] };
    const tmp88 = closure_10(channel.type) && !isInCollapsedCategory;
    if (tmp88) {
      let string5Result;
      let tmp91;
      const buttons18 = obj35.buttons;
      const push25 = buttons18.push;
      const intl28 = channel(isOptedIn[24]).intl;
      const string5 = intl28.string;
      const t5 = channel(isOptedIn[24]).t;
      if (isCollapsedVoiceChannel) {
        string5Result = string5(t5.JYF2Oa);
        tmp91 = tmp89;
      } else {
        string5Result = string5(t5.LxzNiu);
        tmp91 = tmp89;
      }
      const obj36 = {
        label: string5Result,
        IconComponent: tmp91(isOptedIn[25]).UserCircleIcon,
        onPress() {
          obj = ChannelCollapseActionCreatorsDefault;
          obj.update(channel.id);
        },
      };
      push25(obj36);
    }
    if (channel.isGuildVocal()) {
      const buttons19 = obj35.buttons;
      const push26 = buttons19.push;
      const obj37 = { label: null, IconComponent: null, onPress: null };
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl29 = channel(isOptedIn[24]).intl;
      const string6 = intl29.string;
      const t6 = channel(isOptedIn[24]).t;
      if (isGuildStageVoiceResult) {
        obj37.label = string6(t6["7vb2cc"]);
        obj37.IconComponent = channel(isOptedIn[69]).StageIcon;
        obj37.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
        };
        push26(obj37);
        const buttons20 = obj35.buttons;
        const push27 = buttons20.push;
        const obj38 = {
          label: intl30.string(channel(isOptedIn[24]).t.ZXxLQg),
          IconComponent: channel(isOptedIn[70]).ChatIcon,
          onPress() {
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = ModalActionCreatorsDefault;
            const obj3 = { channel };
            obj2.pushLazy(asyncRequire(10701, dependencyMap.paths), obj3);
            hideLaunchPadDefault();
          },
        };
        intl30 = tmp94(isOptedIn[24]).intl;
        push27(obj38);
      } else {
        obj37.label = string6(t6.ZXxLQg);
        obj37.IconComponent = channel(isOptedIn[70]).ChatIcon;
        obj37.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
          obj = ChannelRTCActionCreatorsDefault;
          obj.updateChatOpen(channel.id, true);
          hideLaunchPadDefault();
        };
        push26(obj37);
      }
    }
    const tmp98 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
    if (tmp98) {
      const buttons21 = obj35.buttons;
      const push28 = buttons21.push;
      const obj39 = {
        label: intl31.string(channel(isOptedIn[24]).t.saZaRb),
        IconComponent: channel(isOptedIn[49]).XSmallIcon,
        isDestructive: true,
        onPress() {
          return (async () => {
            let closure_0;
            let paths;
            if (paths === 2) {
              paths = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                    const obj4 = { value: tmp3(paths[22])(paths[75], paths.paths), done: false };
                    return obj4;
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
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp9) {
                paths = 3;
                throw tmp9;
              }
            }
          })();
        },
      };
      intl31 = channel(isOptedIn[24]).intl;
      push28(obj39);
    }
    const tmp101 = channel.isGuildStageVoice() && isLiveStageChannel && canConnect;
    if (tmp101) {
      const buttons22 = obj35.buttons;
      const push29 = buttons22.push;
      const obj40 = {
        label: intl32.string(channel(isOptedIn[24]).t["+78Pfm"]),
        IconComponent: channel(isOptedIn[76]).FlagIcon,
        isDestructive: true,
        onPress() {
          obj = ReportModals;
          const result = obj.showReportModalForStageChannel(channel);
        },
      };
      intl32 = channel(isOptedIn[24]).intl;
      push29(obj40);
    }
    if (obj35.buttons.length > 0) {
      items.push(obj35);
    }
    if (channel.isSpoilerChannel()) {
      if (isSpoilerAgreed) {
        const obj41 = { sectionKey: "spoiler", buttons: [] };
        const buttons23 = obj41.buttons;
        const push30 = buttons23.push;
        const obj42 = {
          label: intl33.string(channel(isOptedIn[24]).t.ix2UVZ),
          IconComponent: channel(isOptedIn[78]).EyeSlashIcon,
          onPress() {
            obj = GuildActionCreatorsDefault;
            obj.clearSpoilerAgree(channel.id);
          },
        };
        intl33 = channel(isOptedIn[24]).intl;
        push30(obj42);
        items.push(obj41);
      }
    }
    const obj43 = { sectionKey: "admin-actions", buttons: [] };
    if (canManageChannel) {
      let string7Result;
      let tmp111;
      const buttons24 = obj43.buttons;
      const push31 = buttons24.push;
      const isCategoryResult = channel.isCategory();
      const intl34 = channel(isOptedIn[24]).intl;
      const string7 = intl34.string;
      const t7 = channel(isOptedIn[24]).t;
      if (isCategoryResult) {
        string7Result = string7(t7.zdPFs9);
        tmp111 = tmp109;
      } else {
        string7Result = string7(t7["3gUsJb"]);
        tmp111 = tmp109;
      }
      const obj44 = {
        label: string7Result,
        IconComponent: tmp111(isOptedIn[80]).SettingsIcon,
        onPress() {
          obj = ChannelSettingsActionCreatorsDefault;
          obj.setSection(constants4.OVERVIEW);
          const obj2 = ChannelSettingsActionCreatorsDefault;
          obj2.open(channel.id);
        },
      };
      push31(obj44);
      const isForumLikeChannelResult1 =
        closure_9(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
      if (isForumLikeChannelResult1) {
        let string8Result;
        const buttons25 = obj43.buttons;
        const push32 = buttons25.push;
        const isCategoryResult1 = channel.isCategory();
        const intl35 = tmp111(isOptedIn[24]).intl;
        const string8 = intl35.string;
        const t8 = tmp111(isOptedIn[24]).t;
        if (isCategoryResult1) {
          string8Result = string8(t8["fUYU+j"]);
        } else {
          string8Result = string8(t8.dEaPc4);
        }
        const obj45 = {
          label: string8Result,
          IconComponent: CopyIcon,
          onPress() {
            const open = CreateChannelModalActionCreatorsDefault.open;
            let type;
            CreateChannelModalActionCreatorsDefault;
            if (!channel.isCategory()) {
              type = channel.type;
            }
            guildId = channel.getGuildId();
            let id;
            const tmp4 = channel.isCategory() ? channel.id : channel.parent_id;
            if (!channel.isCategory()) {
              id = channel.id;
            }
            open(type, guildId, tmp4, id);
          },
        };
        if (channel.isCategory()) {
          CopyIcon = tmp111(isOptedIn[39]).PlusLargeIcon;
        } else {
          CopyIcon = tmp111(isOptedIn[81]).CopyIcon;
        }
        push32(obj45);
      }
    }
    if (developerMode) {
      const buttons26 = obj43.buttons;
      const push33 = buttons26.push;
      const obj46 = {
        label: intl36.string(channel(isOptedIn[24]).t.gFHI3k),
        IconComponent: channel(isOptedIn[83]).IdIcon,
        onPress() {
          obj = ClipboardUtils;
          obj.copy(channel.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        },
      };
      intl36 = channel(isOptedIn[24]).intl;
      push33(obj46);
    }
    if (obj43.buttons.length > 0) {
      items.push(obj43);
    }
    if (obj4.buttons.length > 0) {
      items.push(obj4);
    }
    if (obj5.buttons.length > 0) {
      items.push(obj5);
    }
    return items;
  }
  const intl19 = channel(isOptedIn[24]).intl;
  const string4 = intl19.string;
  const t4 = channel(isOptedIn[24]).t;
  if (isMuted) {
    let stringResult1;
    const string4Result = string4(t4.OYefme);
    if (channel.isCategory()) {
      const intl25 = tmp72(isOptedIn[24]).intl;
      stringResult1 = intl25.string(tmp72(isOptedIn[24]).t.olaBeG);
    } else {
      if (!channel.isDM()) {
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
    }
    const buttons27 = obj29.buttons;
    const push22 = buttons27.push;
    const obj47 = {
      label: stringResult1,
      IconComponent: channel(isOptedIn[61]).BellIcon,
      onPress() {
        let NotificationLabel;
        let obj2;
        const tmp = NotificationSettingsModalActionCreatorsDefault;
        const updateChannelOverrideSettings = tmp.updateChannelOverrideSettings;
        obj = {
          guildId: channel.getGuildId(),
          channelId: channel.id,
          settings: obj2,
          label: NotificationLabel.muted(!isMuted),
        };
        obj2 = { muted: !isMuted };
        NotificationLabel = NotificationSettingsUtils.NotificationLabel;
        const result = updateChannelOverrideSettings(obj);
      },
    };
    push22(obj47);
  } else {
    let stringResult2;
    const string4Result1 = string4(t4.tbeRRJ);
    if (channel.isCategory()) {
      const intl22 = tmp72(isOptedIn[24]).intl;
      stringResult2 = intl22.string(tmp72(isOptedIn[24]).t.pNMCg2);
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
    const buttons28 = obj29.buttons;
    const push21 = buttons28.push;
    const obj48 = {
      label: stringResult2,
      IconComponent: channel(isOptedIn[60]).BellSlashIcon,
      onPress() {
        obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        const tmp = null != rootNavigationRef && rootNavigationRef.isReady();
        if (tmp) {
          const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
          rootNavigationRef.navigate("sidebar", obj2);
        }
      },
    };
    push21(obj48);
  }
}
let react = react_mod;
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({
  isGuildTextChannelType: c9,
  isGuildVocalChannelType: c10,
  isReadableType: unpackModuleId,
  isTextChannel: closure_12,
} = ChannelRecord);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({
  AnalyticsObjectTypes: closure_24,
  AnalyticsObjects: closure_25,
  AnalyticsSections: closure_26,
  ChannelSettingsSections: closure_27,
  ChannelTypes: closure_28,
  InstantInviteSources: closure_29,
  NULL_STRING_GUILD_ID: closure_30,
  Permissions: closure_31,
  Routes: closure_32,
  ZERO_STRING_GUILD_ID: closure_33,
} = Constants);
let closure_34 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let canConnect;
      let canCreateInstantInvite;
      let canManageChannel;
      let canModerateStage;
      let closure_2;
      let currentUser;
      let length;
      let tmp10;
      let tmp12;
      let tmp5;
      let tmp8;
      let tmp = channel;
      obj = channel(576);
      const cResult = obj.c(69);
      channel = channel.channel;
      const onClose = channel.onClose;
      const tmp4 = onClose(6657);
      const analyticsLocations = tmp4(onClose(6681).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
      if (cResult[0] !== channel) {
        const guildId = channel.getGuildId();
        cResult[0] = channel;
        cResult[1] = guildId;
        tmp5 = guildId;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      const tmpResult = tmp(10036);
      const isFavoritesGuildSelected = tmpResult.useIsFavoritesGuildSelected();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[2] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        const fn = function b() {
          return GuildStore.getGuild(closure_2);
        };
        cResult[3] = tmp5;
        cResult[4] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult4 = tmp(504);
      const stateFromStores = tmpResult4.useStateFromStores(tmp8, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[5] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== channel) {
        class O {
          constructor() {
            obj = {
              canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
              canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
              canConnect: PermissionStore.can(constants.CONNECT, channel),
              canModerateStage: PermissionStore.can(
                StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                channel,
              ),
            };
            return obj;
          }
        }
        cResult[6] = channel;
        cResult[7] = O;
      } else {
        class O {
          constructor() {
            obj = {
              canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
              canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
              canConnect: PermissionStore.can(constants.CONNECT, channel),
              canModerateStage: PermissionStore.can(
                StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                channel,
              ),
            };
            return obj;
          }
        }
      }
      const tmpResult5 = tmp(504);
      const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp12, O);
      ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
      const useOptInEnabledForGuild = tmp(7046).useOptInEnabledForGuild;
      tmp(7046);
      const tmp17 = tmp5;
      if (tmp5 == null) {
        class O {
          constructor() {
            obj = {
              canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
              canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
              canConnect: PermissionStore.can(constants.CONNECT, channel),
              canModerateStage: PermissionStore.can(
                StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                channel,
              ),
            };
            return obj;
          }
        }
      }
      const optInEnabledForGuild = useOptInEnabledForGuild(tmp17);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            obj = {
              canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
              canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
              canConnect: PermissionStore.can(constants.CONNECT, channel),
              canModerateStage: PermissionStore.can(
                StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                channel,
              ),
            };
            return obj;
          }
        }
        const items2 = [UserGuildSettingsStore];
        cResult[8] = items2;
      } else {
        class O {
          constructor() {
            obj = {
              canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
              canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
              canConnect: PermissionStore.can(constants.CONNECT, channel),
              canModerateStage: PermissionStore.can(
                StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                channel,
              ),
            };
            return obj;
          }
        }
      }
      if (cResult[9] === channel.id) {
        class O {
          constructor() {
            obj = {
              canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
              canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
              canConnect: PermissionStore.can(constants.CONNECT, channel),
              canModerateStage: PermissionStore.can(
                StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                channel,
              ),
            };
            return obj;
          }
        }
      }
      class F {
        constructor() {
          let isFavorite;
          let tmp;
          obj = {
            isOptedIn: UserGuildSettingsStore.isChannelOptedIn(closure_2, channel.id),
            isParentOptedIn:
              null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id),
            isPinned: isFavorite(tmp, channel.id),
          };
          tmp = closure_2;
          isFavorite = UserGuildSettingsStore.isFavorite;
          null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
          if (tmp == null) {
            tmp = closure_33;
          }
          return obj;
        }
      }
      cResult[9] = channel.id;
      cResult[10] = channel.parent_id;
      cResult[11] = tmp5;
      cResult[12] = F;
    }
  : (channel) => {
      let ActionSheet;
      let canConnect;
      let canCreateInstantInvite;
      let canManageChannel;
      let canModerateStage;
      let currentUser;
      let id;
      let isOptedIn;
      let isParentOptedIn;
      let isPinned;
      let isStaffResult;
      let length;
      let obj9;
      let tmp24;
      let tmp25;
      let tmp5Result26;
      channel = channel.channel;
      const onClose = channel.onClose;
      let guildId;
      let setting;
      react = undefined;
      let tmp = onClose;
      const tmp3 = onClose(guildId[88]);
      const analyticsLocations = tmp3(onClose(guildId[89]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
      guildId = channel.getGuildId();
      obj = channel(guildId[90]);
      const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
      const items = [GuildStore];
      const obj2 = channel(guildId[91]);
      const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      const items1 = [PermissionStore];
      const obj3 = channel(guildId[91]);
      const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
        obj = {
          canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel),
          canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel),
          canConnect: PermissionStore.can(constants.CONNECT, channel),
          canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel),
        };
        return obj;
      });
      ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
      const useOptInEnabledForGuild = channel(guildId[93]).useOptInEnabledForGuild;
      channel(guildId[93]);
      if (guildId == null) {
        guildId = closure_30;
      }
      const optInEnabledForGuild = useOptInEnabledForGuild(guildId);
      const items2 = [UserGuildSettingsStore];
      const tmp5Result = channel(guildId[91]);
      const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
        let isFavorite;
        let tmp;
        obj = {
          isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id),
          isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id),
          isPinned: isFavorite(tmp, channel.id),
        };
        tmp = guildId;
        isFavorite = UserGuildSettingsStore.isFavorite;
        null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
        if (tmp == null) {
          tmp = closure_33;
        }
        return obj;
      });
      ({ isOptedIn, isParentOptedIn, isPinned } = stateFromStoresObject1);
      const items3 = [UserGuildSettingsStore];
      const tmp5Result14 = channel(guildId[91]);
      const stateFromStores1 = tmp5Result14.useStateFromStores(items3, () =>
        UserGuildSettingsStore.isChannelMuted(guildId, channel.id),
      );
      const items4 = [ReadStateStore];
      const tmp5Result15 = channel(guildId[91]);
      const stateFromStores2 = tmp5Result15.useStateFromStores(items4, () =>
        ReadStateStore.hasUnreadOrMentions(channel.id),
      );
      const tmp5Result16 = channel(guildId[57]);
      const canMarkChannelUnread = tmp5Result16.useCanMarkChannelUnread(channel);
      const items5 = [ActiveThreadsStore];
      const tmp5Result17 = channel(guildId[91]);
      const stateFromStores3 = tmp5Result17.useStateFromStores(items5, () => {
        const hasThreadsForChannelResult = null != guildId && ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
        return hasThreadsForChannelResult;
      });
      const items6 = [CategoryCollapseStore];
      const tmp5Result18 = channel(guildId[91]);
      const stateFromStores4 = tmp5Result18.useStateFromStores(items6, () =>
        CategoryCollapseStore.isCollapsed(channel.parent_id),
      );
      const items7 = [CollapsedVoiceChannelStore];
      const tmp5Result19 = channel(guildId[91]);
      const stateFromStores5 = tmp5Result19.useStateFromStores(items7, () =>
        CollapsedVoiceChannelStore.isCollapsed(channel.id),
      );
      const items8 = [StageInstanceStore];
      const tmp5Result20 = channel(guildId[91]);
      const stateFromStores6 = tmp5Result20.useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
      const tmpResult = tmp(tmp2[29]);
      const tmpResultResult = tmpResult(channel, !channel.isThread());
      const tmp22 = tmp(guildId[94])(channel);
      const DeveloperMode = tmp5(tmp2[95]).DeveloperMode;
      setting = DeveloperMode.useSetting();
      if (null != stateFromStores) {
        tmp(guildId[96]);
        tmp25 = <tmpResult3 guild={stateFromStores} size={channel(guildId[96]).GuildIconSizes.LARGE} />;
        tmp24 = jsx;
      } else {
        tmp24 = jsx;
        const Avatar = tmp5(tmp2[97]).Avatar;
        tmp25 = <Avatar size={channel(guildId[97]).AvatarSizes.LARGE} channel={channel} />;
      }
      const items9 = [UserStore];
      const tmp5Result21 = channel(guildId[91]);
      const stateFromStores7 = tmp5Result21.useStateFromStores(items9, () => currentUser.getCurrentUser());
      const items10 = [UserGuildSettingsStore];
      const tmp28 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
      const tmp5Result22 = channel(guildId[91]);
      const stateFromStores8 = tmp5Result22.useStateFromStores(items10, () =>
        UserGuildSettingsStore.isMessagesFavorite(channel.id),
      );
      const tmp5Result23 = channel(guildId[98]);
      const inappropriateConversationsTiers = tmp5Result23.useInappropriateConversationsTiers(channel);
      let isTier1;
      if (inappropriateConversationsTiers != null) {
        isTier1 = inappropriateConversationsTiers.isTier1;
      }
      let tmp32 = null != isTier1;
      if (tmp32) {
        let isTier11;
        if (inappropriateConversationsTiers != null) {
          isTier11 = inappropriateConversationsTiers.isTier1;
        }
        tmp32 = !isTier11;
      }
      let isTier2;
      if (inappropriateConversationsTiers != null) {
        isTier2 = inappropriateConversationsTiers.isTier2;
      }
      let tmp35 = null != isTier2;
      if (tmp35) {
        let isTier21;
        if (inappropriateConversationsTiers != null) {
          isTier21 = inappropriateConversationsTiers.isTier2;
        }
        tmp35 = !isTier21;
      }
      const items11 = [ChannelSpoilerAgreeStore];
      const tmp5Result24 = channel(guildId[91]);
      const stateFromStores9 = tmp5Result24.useStateFromStores(items11, () =>
        ChannelSpoilerAgreeStore.didAgree(channel.id),
      );
      const tmp38 = tmp(guildId[99])(channel, "ChannelLongPressActionSheet");
      const tmp39 = tmp(guildId[100])(channel);
      const tmp40 = tmp(guildId[101])(channel);
      let isFavorites;
      if (tmp40 != null) {
        isFavorites = tmp40.isFavorites;
      }
      let tmp42 = null;
      if (true === isFavorites) {
        const destinations = tmp40.destinations;
        tmp42 = null;
        if (destinations.some((disabled) => !disabled.disabled)) {
          tmp42 = tmp40;
        }
      }
      const tmp5Result25 = channel(guildId[102]);
      const isConjureChannelCandidate = tmp5Result25.useIsConjureChannelCandidate(
        channel,
        "ChannelLongPressActionSheet",
      );
      let tmp45 = null;
      const tmpResult4 = tmp(guildId[103]);
      if (isConjureChannelCandidate) {
        tmp45 = channel;
      }
      const tmpResult2Result = tmpResult4(tmp45);
      const obj6 = {
        channel,
        canManageChannel,
        canCreateInstantInvite,
        canConnect,
        developerMode: setting,
        isMuted: stateFromStores1,
        hasUnread: stateFromStores2,
        canMarkUnread: canMarkChannelUnread,
        isOwner: tmp28,
        hasThreads: stateFromStores3,
        isNsfwGated: tmp22,
        isInCollapsedCategory: stateFromStores4,
        isCollapsedVoiceChannel: stateFromStores5,
        isLiveStageChannel: stateFromStores6,
        canModerateStage,
        isOptInEnabled: optInEnabledForGuild,
        isOptedIn,
        isParentOptedIn,
        isPinned,
        isMessagesFavorited: stateFromStores8,
        canMarkAsTier1InappropriateConversation: tmp32,
        canMarkAsTier2InappropriateConversation: tmp35,
        isSpoilerAgreed: stateFromStores9,
        analyticsLocations,
        isFavoritesGuild: isFavoritesGuildSelected,
        isStaff: true === isStaffResult,
        favorites: tmp38,
        favoritesCategoryAddAction: tmp39,
        favoritesMoveAction: tmp42,
        vibegrationsProjectId: id,
      };
      isStaffResult = undefined;
      if (stateFromStores7 != null) {
        isStaffResult = stateFromStores7.isStaff();
      }
      id = undefined;
      if (tmpResult2Result != null) {
        id = tmpResult2Result.id;
      }
      if (id == null) {
        id = null;
      }
      const tmp47Result = getActionSheetButtons(obj6);
      react = tmp47Result;
      let formatToPlainStringResult;
      if (channel.isGroupDM()) {
        const intl = tmp5(tmp2[24]).intl;
        const obj7 = { members: channel.recipients.length + 1 };
        formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp2[24]).t.ABMKx3, obj7);
      }
      const items12 = [tmp47Result.length, setting, onClose];
      const effect = react.useEffect(() => {
        const tmp = 0 !== length.length || setting;
        if (!tmp) {
          onClose();
        }
      }, items12);
      const obj8 = { value: analyticsLocations, children: tmp24(ActionSheet, obj9) };
      const AnalyticsLocationProvider = tmp5(tmp2[88]).AnalyticsLocationProvider;
      obj9 = {
        showGradient: true,
        startExpanded: tmp5Result26.isMetaQuest(),
        header: tmp24(channel(guildId[106]).ActionSheetIconHeader, {
          icon: tmp25,
          title: tmpResultResult,
          subtitle: formatToPlainStringResult,
        }),
        children: tmp47Result.map((buttons) => {
          buttons = buttons.buttons;
          const Group = ActionSheetRow2.ActionSheetRow.Group;
          return (
            <Group key={buttons.sectionKey} hasIcons>
              {buttons.map((onPress, index) => {
                let IconComponent;
                let disableColor;
                let iconStyle;
                let label;
                let trailing;
                onPress = onPress.onPress;
                let str = "default";
                ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
                if (onPress.isDestructive) {
                  str = "danger";
                }
                obj = {
                  variant: str,
                  label,
                  icon: closure_1_35(channel(guildId[107]).ActionSheetRow.Icon, {
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
                };
                const ActionSheetRow = channel(guildId[107]).ActionSheetRow;
                return closure_1_35(ActionSheetRow, obj, index);
              })}
            </Group>
          );
        }),
      };
      ActionSheet = tmp5(tmp2[104]).ActionSheet;
      tmp5Result26 = channel(guildId[105]);
      return tmp24(AnalyticsLocationProvider, obj8);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let stateFromStores;
      let tmp6;
      obj = channelId(stateFromStores[87]);
      const cResult = obj.c(10);
      const tmp = channelId;
      channelId = channelId.channelId;
      const onClose = channelId.onClose;
      const tmp2 = stateFromStores;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[91]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === stateFromStores) {
        let tmp8;
        let tmp9;
        if (cResult[4] === onClose) {
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        const effect = react.useEffect(tmp8, tmp9);
        if (cResult[7] === stateFromStores) {
          let tmp12;
          if (cResult[8] === onClose) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
        let tmp13 = null;
        if (null != stateFromStores) {
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
    }
  : (arg0) => {
      let onClose;
      let require;
      ({ channelId: require, onClose } = arg0);
      let stateFromStores;
      const items = [ChannelStore];
      obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
      const items1 = [stateFromStores, onClose];
      const effect = react.useEffect(() => {
        if (null == stateFromStores) {
          onClose();
        }
      }, items1);
      let tmp3 = null;
      if (null != stateFromStores) {
        tmp3 = <closure_39 channel={stateFromStores} onClose={onClose} />;
      }
      return tmp3;
    };
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default tmp4;
