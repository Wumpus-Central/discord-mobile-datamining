// discord_app/modules/channel/native/ChannelLongPressActionSheet.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { SafetyWarningTypes } from "../../self_mod/ChannelSafetyWarningsStore.tsx";
import closure_6 from "../../spoiler_channels/ChannelSpoilerAgreeStore.tsx";
import closure_7 from "../../stage_channels/StageInstanceStore.tsx";
import closure_8 from "../../threads/ActiveThreadsStore.tsx";
import createChannelRecord from "../../../records/ChannelRecord.tsx";
import closure_13 from "../../../stores/CategoryCollapseStore.tsx";
import closure_14 from "../../../stores/ChannelStore.tsx";
import closure_15 from "../../../stores/CollapsedVoiceChannelStore.tsx";
import closure_16 from "../../../stores/GuildStore.tsx";
import closure_17 from "../../../stores/PermissionStore.tsx";
import closure_18 from "../../../stores/ReadStateStore.tsx";
import closure_19 from "../../../stores/RelationshipStore.tsx";
import closure_20 from "../../../stores/SelectedChannelStore.tsx";
import closure_21 from "../../../stores/UserGuildSettingsStore.tsx";
import closure_22 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import { ChannelDetailsNavigatorScreens as closure_32 } from "../../main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = _handleVoiceOrStageChannelConnectPress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0, openGuildVoiceModal) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw openGuildVoiceModal;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = openGuildVoiceModal;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw openGuildVoiceModal;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = openGuildVoiceModal;
              return obj;
            } else {
              closure_1 = tmp2;
              const tmp22 = guildStageVoice(table[21]);
              if (isGuildStageVoiceResult) {
                table = 2;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = tmp22(tmp21[20], tmp21.paths);
                return obj1;
              } else {
                table = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp22(tmp21[22], tmp21.paths);
                return obj2;
              }
              isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c3 = 3;
                throw openGuildVoiceModal;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = openGuildVoiceModal;
                return obj3;
              } else {
                openGuildVoiceModal.openGuildVoiceModal(guildStageVoice, "Channel List");
                c3 = 3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw openGuildVoiceModal;
            } else if (arg0 !== 2) {
              openGuildVoiceModal.connectAndOpen(guildStageVoice);
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = openGuildVoiceModal;
            return obj;
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_35 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function ChannelLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let stateFromStores1 = onClose;
  isOptedIn = undefined;
  isPinned = undefined;
  let items12;
  let arr29 = stateFromStores1;
  const tmp2 = isOptedIn;
  const analyticsLocations = stateFromStores1(isOptedIn[82])(stateFromStores1(isOptedIn[83]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  let guildId = channel.getGuildId();
  isOptedIn = guildId;
  const tmp5 = channel;
  let obj = channel(isOptedIn[84]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  obj1 = channel(isOptedIn[85]);
  const items = [closure_16];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_16.getGuild(isOptedIn));
  let obj2 = channel(isOptedIn[85]);
  const items1 = [closure_17];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ canManageChannel: closure_1_17.can(closure_1_30.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_1_17.can(closure_1_30.CREATE_INSTANT_INVITE, channel), canConnect: closure_1_17.can(closure_1_30.CONNECT, channel), canModerateStage: closure_1_17.can(channel(isOptedIn[86]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(isOptedIn[87]);
  if (guildId == null) {
    guildId = closure_29;
  }
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guildId);
  let tmp5Result = tmp5(tmp2[85]);
  const items2 = [closure_21];
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: closure_1_21.isChannelOptedIn(isOptedIn, channel.id), isParentOptedIn: null != channel.parent_id && closure_1_21.isChannelOptedIn(tmp, channel.parent_id), isPinned: null };
    tmp = isOptedIn;
    if (tmp == null) {
      tmp = closure_1_31;
    }
    obj[2] = closure_1_21.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  tmp5Result = tmp5(tmp2[85]);
  const items3 = [closure_21];
  stateFromStores1 = tmp5Result.useStateFromStores(items3, () => closure_1_21.isChannelMuted(isOptedIn, channel.id));
  let tmp10 = closure_21;
  const tmp3 = stateFromStores1(isOptedIn[82]);
  const items4 = [closure_18];
  const stateFromStores2 = tmp5(tmp2[85]).useStateFromStores(items4, () => closure_1_18.hasUnreadOrMentions(channel.id));
  const tmp5Result1 = tmp5(tmp2[85]);
  const canMarkChannelUnread = tmp5(tmp2[53]).useCanMarkChannelUnread(channel);
  const tmp5Result2 = tmp5(tmp2[53]);
  const items5 = [closure_8];
  const stateFromStores3 = tmp5(tmp2[85]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != isOptedIn;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = closure_1_8.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result3 = tmp5(tmp2[85]);
  const items6 = [closure_13];
  const stateFromStores4 = tmp5(tmp2[85]).useStateFromStores(items6, () => closure_1_13.isCollapsed(channel.parent_id));
  const tmp5Result4 = tmp5(tmp2[85]);
  const items7 = [closure_15];
  const stateFromStores5 = tmp5(tmp2[85]).useStateFromStores(items7, () => closure_1_15.isCollapsed(channel.id));
  const tmp5Result5 = tmp5(tmp2[85]);
  const items8 = [closure_7];
  const stateFromStores6 = tmp5(tmp2[85]).useStateFromStores(items8, () => closure_1_7.isLive(channel.id));
  const tmp5Result6 = tmp5(tmp2[85]);
  const tmp19 = arr29(tmp2[28])(channel, true);
  const DeveloperMode = tmp5(tmp2[89]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  isPinned = setting;
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp5(tmp2[90]).GuildIconSizes.LARGE;
    let tmp23 = jsx(arr29(tmp2[90]), { guild: null, size: null });
    let tmp22 = jsx;
    const arr30Result = arr29(tmp2[90]);
  } else {
    tmp22 = jsx;
    obj = { size: null, channel: null };
    obj[0] = tmp5(tmp2[91]).AvatarSizes.LARGE;
    obj[1] = channel;
    tmp23 = jsx(tmp5(tmp2[91]).Avatar, { size: null, channel: null });
  }
  const tmp20 = arr29(tmp2[88])(channel);
  const items9 = [closure_22];
  const stateFromStores7 = tmp5(tmp2[85]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result7 = tmp5(tmp2[85]);
  const tmp26 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [tmp10];
  const stateFromStores8 = tmp5(tmp2[85]).useStateFromStores(items10, () => closure_1_21.isMessagesFavorite(channel.id));
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
  const items11 = [guildId1];
  const stateFromStores9 = tmp5(tmp2[85]).useStateFromStores(items11, () => guildId1.didAgree(channel.id));
  const tmp5Result10 = tmp5(tmp2[85]);
  const tmp37 = arr29(tmp2[94])(channel);
  if (stateFromStores7 != null) {
    const isStaffResult = stateFromStores7.isStaff();
  }
  items12 = stateFromStores8;
  obj1 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj1.buttons;
    obj2 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[23]).intl;
    obj2[0] = intl.string(tmp5(tmp2[23]).t.LYju5J);
    obj2[1] = tmp5(tmp2[24]).UserCircleIcon;
    obj2[2] = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      stateFromStores1(isOptedIn[25])(obj);
    };
    buttons.push(obj2);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj1.buttons;
      obj3 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp5(tmp2[23]).intl;
      obj3[0] = intl2.string(tmp5(tmp2[23]).t.jsvgc3);
      obj3[1] = tmp5(tmp2[26]).UserMinusIcon;
      obj3[2] = function onPress() {
        stateFromStores1(isOptedIn[27]).closePrivateChannel(channel.id, closure_1_20.getCurrentlySelectedChannelId() === channel.id);
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
      obj6[0] = intl3.string(tmp5(tmp2[23]).t["26C4oi"]);
      obj6[1] = tmp5(tmp2[26]).UserMinusIcon;
      obj6[3] = function onPress() {
        let obj = channel(isOptedIn[28]);
        const channelName = obj.computeChannelName(channel, closure_1_22, closure_1_19);
        const intl = channel(isOptedIn[23]).intl;
        const intl2 = channel(isOptedIn[23]).intl;
        let formatResult = intl2.format(channel(isOptedIn[23]).t.SSIVOu, { name: channelName });
        let formatToPlainStringResult1 = intl.formatToPlainString(channel(isOptedIn[23]).t.hJ5Ap4, { name: channelName });
        if (channel.isManaged()) {
          const intl3 = tmp(tmp2[23]).intl;
          obj = { name: null };
          obj[0] = channelName;
          formatToPlainStringResult1 = intl3.formatToPlainString(tmp(tmp2[23]).t.hVGjEW, obj);
          const intl4 = tmp(tmp2[23]).intl;
          obj = { name: null };
          obj[0] = channelName;
          formatResult = intl4.format(tmp(tmp2[23]).t.IK1Qvs, obj);
        }
        const formatToPlainStringResult = intl.formatToPlainString(channel(isOptedIn[23]).t.hJ5Ap4, { name: channelName });
        obj1 = { title: formatToPlainStringResult1, body: formatResult, confirmText: null, cancelText: null, onConfirm: null };
        const intl5 = tmp(tmp2[23]).intl;
        obj1[2] = intl5.string(channel(isOptedIn[23]).t.p89ACt);
        const intl6 = tmp(tmp2[23]).intl;
        obj1[3] = intl6.string(channel(isOptedIn[23]).t.gm1Vej);
        obj1[4] = function onConfirm() {
          closure_1_1(closure_1_2[27]).closePrivateChannel(user.id, closure_1_20.getCurrentlySelectedChannelId() === user.id);
        };
        stateFromStores1(isOptedIn[29]).show(obj1);
      };
      buttons2.push(obj6);
    }
    const buttons3 = obj4.buttons;
    const obj7 = { label: null, IconComponent: null, onPress: null };
    let intl4 = tmp5(tmp2[23]).intl;
    obj7[0] = intl4.string(tmp5(tmp2[23]).t["1r5E+m"]);
    obj7[1] = tmp5(tmp2[30]).PencilIcon;
    obj7[2] = function onPress() {
      stateFromStores1(isOptedIn[31])({ channelId: channel.id });
    };
    buttons3.push(obj7);
    if (tmp26) {
      const buttons4 = obj4.buttons;
      const obj8 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp5(tmp2[23]).intl;
      obj8[0] = intl5.string(tmp5(tmp2[23]).t.OQ9MKu);
      obj8[1] = tmp5(tmp2[32]).LinkIcon;
      obj8[2] = function onPress() {
        let obj = stateFromStores1(isOptedIn[33]);
        obj = { channelId: channel.id };
        obj.pushLazy(channel(isOptedIn[21])(isOptedIn[34], isOptedIn.paths), obj);
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
    obj10[0] = intl6.string(arr29(tmp2[35])["3KruG3"]);
    obj10[1] = tmp5(tmp2[36]).ServerIcon;
    obj10[2] = function onPress() {
      channel(isOptedIn[37]).transitionToGuild(channel.guild_id, channel.id);
    };
    const items13 = [obj10];
    obj9[1] = items13;
    items12.push(obj9);
  }
  if (null != tmp37) {
    const obj11 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj12 = { label: null, IconComponent: null, onPress: null };
    obj12[0] = tmp37.label;
    obj12[1] = tmp5(tmp2[38]).PlusLargeIcon;
    obj12[2] = tmp37.perform;
    const items14 = [obj12];
    obj11[1] = items14;
    items12.push(obj11);
  }
  const tmp48 = arr29(tmp2[39])(arr29(tmp2[93])(channel, "ChannelLongPressActionSheet"));
  if (null != tmp48) {
    const obj13 = { sectionKey: "favorites", buttons: null };
    const items15 = [tmp48];
    obj13[1] = items15;
    items12.push(obj13);
  }
  guildId1 = channel.getGuildId();
  const obj14 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj14.buttons;
    const obj15 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[23]).intl;
    obj15[0] = intl7.string(tmp5(tmp2[23]).t.VINpSK);
    obj15[1] = tmp5(tmp2[40]).GroupPlusIcon;
    obj15[2] = function onPress() {
      let obj = channel(isOptedIn[41]);
      obj = { source: closure_1_28.CONTEXT_MENU };
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
          obj16[0] = string2(t2.jNphKT);
          obj16[1] = tmp5(tmp2[45]).XSmallIcon;
          obj16[2] = function onPress() {
            if (null != channel.parent_id) {
              let obj = channel(isOptedIn[43]);
              obj = { section: null };
              obj[0] = closure_1_25.CHANNEL_ACTION_SHEET;
              obj.setOptInChannel(guildId1, tmp.parent_id, false, obj);
            }
          };
          push(obj16);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
          } else {
            string2Result = string2(t2["9mysCh"]);
          }
          obj16[0] = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp5(tmp2[45]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[38]).PlusLargeIcon;
          }
          obj16[1] = PlusLargeIcon;
          obj16[2] = function onPress() {
            let obj = channel(isOptedIn[43]);
            obj = { section: closure_1_25.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId1, channel.id, !isOptedIn, obj);
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
      const obj17 = { label: null, IconComponent: null, onPress: null };
      obj17[0] = stringResult;
      obj17[1] = tmp5(tmp2[42]).PinIcon;
      obj17[2] = function onPress() {
        let obj = channel(isOptedIn[43]);
        obj = { section: closure_1_25.CHANNEL_ACTION_SHEET };
        obj.setIsFavorite(guildId1, channel.id, !isPinned, obj);
        if (!isPinned) {
          const rootNavigationRef = channel(isOptedIn[44]).getRootNavigationRef();
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
              let guildId;
              if (params != null) {
                guildId = params.guildId;
              }
              tmp10 = guildId === guildId1;
            }
            if (tmp10) {
              obj = { jumpToChannelId: null };
              obj[0] = channel.id;
              rootNavigationRef.setParams(obj);
            }
          }
          const tmpResult = channel(isOptedIn[44]);
        }
      };
      t = buttons7.push(obj17);
    }
  }
  let isForumLikeChannelResult = callback2(channel.type);
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = callback3(channel.type);
  }
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (isForumLikeChannelResult) {
    const buttons8 = obj14.buttons;
    const obj18 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl10 = tmp5(tmp2[23]).intl;
    obj18[0] = intl10.string(tmp5(tmp2[23]).t.WqhZss);
    obj18[1] = tmp5(tmp2[32]).LinkIcon;
    obj18[3] = function onPress() {
      const result = channel(isOptedIn[46]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj18);
  }
  let isPrivateResult = !isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj19 = { sectionKey: "safety-warning-tooling", buttons: null };
    obj19[1] = [];
    if (tmp30) {
      const buttons9 = obj19.buttons;
      const obj20 = { label: null, IconComponent: null, onPress: null };
      const intl12 = tmp5(tmp2[23]).intl;
      obj20[0] = intl12.string(tmp5(tmp2[23]).t.EuzCET);
      obj20[1] = tmp5(tmp2[47]).WarningIcon;
      obj20[2] = function onPress() {
        const result = channel(isOptedIn[48]).markAsInappropriateConversation(channel.id, analyticsLocations.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons9.push(obj20);
    }
    if (tmp33) {
      const buttons10 = obj19.buttons;
      const obj21 = { label: null, IconComponent: null, onPress: null };
      const intl13 = tmp5(tmp2[23]).intl;
      obj21[0] = intl13.string(tmp5(tmp2[23]).t["tBw/1i"]);
      obj21[1] = tmp5(tmp2[47]).WarningIcon;
      obj21[2] = function onPress() {
        const result = channel(isOptedIn[48]).markAsInappropriateConversation(channel.id, analyticsLocations.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons10.push(obj21);
    }
    if (obj19.buttons.length > 0) {
      items12.push(obj19);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj22 = { sectionKey: "message-request", buttons: null };
          obj22[1] = [];
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj22.buttons;
            const obj23 = { label: null, IconComponent: null, onPress: null };
            const intl14 = tmp5(tmp2[23]).intl;
            obj23[0] = intl14.string(tmp5(tmp2[23]).t.L6623r);
            obj23[1] = tmp5(tmp2[49]).InboxIcon;
            obj23[2] = function onPress() {
              channel(isOptedIn[50]).markAsMessageRequest(channel.id);
            };
            buttons11.push(obj23);
          }
          const buttons12 = obj22.buttons;
          const obj24 = { label: null, IconComponent: null, onPress: null };
          const intl15 = tmp5(tmp2[23]).intl;
          obj24[0] = intl15.string(tmp5(tmp2[23]).t["85YWlY"]);
          obj24[1] = tmp5(tmp2[49]).InboxIcon;
          obj24[2] = function onPress() {
            const result = channel(isOptedIn[50]).clearMessageRequestState(channel.id);
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
    const obj25 = { sectionKey: "notifications", buttons: null };
    obj25[1] = [];
    if (tmp72) {
      const MarkChannelUnreadExperiment = tmp5(tmp2[51]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!stateFromStores2) {
          if (canMarkChannelUnread) {
            const buttons13 = obj25.buttons;
            const obj26 = { label: null, IconComponent: null, onPress: null };
            const intl16 = tmp5(tmp2[23]).intl;
            obj26[0] = intl16.string(tmp5(tmp2[23]).t.RpE9k7);
            obj26[1] = tmp5(tmp2[52]).ChatMarkUnreadIcon;
            obj26[2] = function onPress() {
              stateFromStores1(isOptedIn[53])(channel.id);
            };
            buttons13.push(obj26);
          }
        }
      }
      const buttons14 = obj25.buttons;
      const obj27 = { label: null, IconComponent: null, onPress: null };
      const intl17 = tmp5(tmp2[23]).intl;
      obj27[0] = intl17.string(tmp5(tmp2[23]).t.e6RscS);
      obj27[1] = tmp5(tmp2[54]).EyeIcon;
      obj27[2] = function onPress() {
        let obj = channel(isOptedIn[55]);
        obj = { section: closure_1_25.CHANNEL_ACTION_SHEET, object: closure_1_24.MARK_CHANNEL_AS_READ_BUTTON, objectType: closure_1_23.ACK_MANUAL };
        obj.ackChannel(channel, obj);
      };
      buttons14.push(obj27);
    }
    if (!callback5(channel.type)) {
      if (tmp82) {
        const buttons15 = obj25.buttons;
        const obj28 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl25 = tmp5(tmp2[23]).intl;
        obj28[0] = intl25.string(tmp5(tmp2[23]).t.h850Ss);
        obj28[1] = tmp5(tmp2[60]).ChannelNotificationIcon;
        obj28[3] = function onPress() {
          stateFromStores1(isOptedIn[61]).setSection(closure_1_26.NOTIFICATIONS);
          const obj = stateFromStores1(isOptedIn[61]);
          stateFromStores1(isOptedIn[61]).open(channel.id);
        };
        buttons15.push(obj28);
      }
      if (obj25.buttons.length > 0) {
        items12.push(obj25);
      }
      const obj29 = { sectionKey: "threads", buttons: null };
      obj29[1] = [];
      tmp82 = tmp58(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp85) {
        const buttons16 = obj29.buttons;
        const obj30 = { label: null, IconComponent: null, onPress: null };
        const intl26 = tmp5(tmp2[23]).intl;
        obj30[0] = intl26.string(tmp5(tmp2[23]).t.B2panI);
        obj30[1] = tmp5(tmp2[62]).ThreadIcon;
        obj30[2] = function onPress() {
          stateFromStores1(isOptedIn[63])(channel);
        };
        buttons16.push(obj30);
      }
      if (obj29.buttons.length > 0) {
        items12.push(obj29);
      }
      const obj31 = { sectionKey: "voice", buttons: null };
      obj31[1] = [];
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
            obj32[0] = string6(t6["7vb2cc"]);
            obj32[1] = tmp5(tmp2[65]).StageIcon;
            obj32[2] = function onPress() {
              closure_1_34(channel);
            };
            push2(obj32);
            const buttons18 = obj31.buttons;
            const obj33 = { label: null, IconComponent: null, onPress: null };
            const intl29 = tmp5(tmp2[23]).intl;
            obj33[0] = intl29.string(tmp5(tmp2[23]).t.ZXxLQg);
            obj33[1] = tmp5(tmp2[66]).ChatIcon;
            obj33[2] = function onPress() {
              let obj = stateFromStores1(isOptedIn[67]);
              obj.hideActionSheet();
              obj = { channel };
              stateFromStores1(isOptedIn[33]).pushLazy(channel(isOptedIn[21])(isOptedIn[68], isOptedIn.paths), obj);
              stateFromStores1(isOptedIn[69])();
            };
            buttons18.push(obj33);
          } else {
            obj32[0] = string6(t6.ZXxLQg);
            obj32[1] = tmp5(tmp2[66]).ChatIcon;
            obj32[2] = function onPress() {
              closure_1_34(channel);
              stateFromStores1(isOptedIn[70]).updateChatOpen(channel.id, true);
              stateFromStores1(isOptedIn[69])();
            };
            push2(obj32);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp95) {
          const buttons19 = obj31.buttons;
          const obj34 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl30 = tmp5(tmp2[23]).intl;
          obj34[0] = intl30.string(tmp5(tmp2[23]).t.saZaRb);
          obj34[1] = tmp5(tmp2[45]).XSmallIcon;
          obj34[3] = function onPress() {
            return isPinned(function*() {
              if (paths === 2) {
                paths = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp3 === 3) {
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
                  paths = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      paths = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      paths = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      closure_0 = tmp4;
                      c1 = 1;
                      paths = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = closure_1_0(paths[21])(paths[71], paths.paths);
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    paths = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    paths = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    arg1.openEndStageModal(closure_0);
                    paths = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
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
          obj35[0] = intl31.string(tmp5(tmp2[23]).t["+78Pfm"]);
          obj35[1] = tmp5(tmp2[72]).FlagIcon;
          obj35[3] = function onPress() {
            const result = channel(isOptedIn[73]).showReportModalForStageChannel(channel);
          };
          buttons20.push(obj35);
        }
        if (obj31.buttons.length > 0) {
          items12.push(obj31);
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores9) {
            const obj36 = { sectionKey: "spoiler", buttons: null };
            obj36[1] = [];
            const buttons21 = obj36.buttons;
            const obj37 = { label: null, IconComponent: null, onPress: null };
            const intl32 = tmp5(tmp2[23]).intl;
            obj37[0] = intl32.string(tmp5(tmp2[23]).t.ix2UVZ);
            obj37[1] = tmp5(tmp2[74]).EyeSlashIcon;
            obj37[2] = function onPress() {
              stateFromStores1(isOptedIn[75]).clearSpoilerAgree(channel.id);
            };
            arr29 = buttons21.push(obj37);
            arr29 = items12.push(obj36);
          }
        }
        const obj38 = { sectionKey: "admin-actions", buttons: null };
        obj38[1] = [];
        if (canManageChannel) {
          const buttons22 = obj38.buttons;
          arr29 = channel.isCategory();
          const intl33 = tmp5(tmp2[23]).intl;
          const string7 = intl33.string;
          const t7 = tmp5(tmp2[23]).t;
          if (arr29) {
            arr29 = string7(t7.zdPFs9);
          } else {
            arr29 = string7(t7["3gUsJb"]);
          }
          const obj39 = { label: null, IconComponent: null, onPress: null };
          obj39[0] = arr29;
          obj39[1] = tmp5(tmp2[76]).SettingsIcon;
          obj39[2] = function onPress() {
            stateFromStores1(isOptedIn[61]).setSection(closure_1_26.OVERVIEW);
            const obj = stateFromStores1(isOptedIn[61]);
            stateFromStores1(isOptedIn[61]).open(channel.id);
          };
          arr29 = buttons22.push(obj39);
          arr29 = tmp58(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
          if (arr29) {
            const buttons23 = obj38.buttons;
            arr29 = channel.isCategory();
            const intl34 = tmp5(tmp2[23]).intl;
            const string8 = intl34.string;
            const t8 = tmp5(tmp2[23]).t;
            if (arr29) {
              arr29 = string8(t8["fUYU+j"]);
            } else {
              arr29 = string8(t8.dEaPc4);
            }
            let obj40 = { label: null, IconComponent: null, onPress: null };
            obj40[0] = arr29;
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[38]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[77]).CopyIcon;
            }
            obj40[1] = CopyIcon;
            obj40[2] = function onPress() {
              let type;
              if (!channel.isCategory()) {
                type = obj2.type;
              }
              const guildId = obj2.getGuildId();
              const obj = stateFromStores1(isOptedIn[78]);
              let id;
              if (!channel.isCategory()) {
                id = obj2.id;
              }
              obj.open(type, guildId, channel.isCategory() ? channel.id : channel.parent_id, id);
            };
            obj40 = buttons23.push(obj40);
          }
        }
        if (setting) {
          const buttons24 = obj38.buttons;
          const obj41 = { label: null, IconComponent: null, onPress: null };
          const intl35 = tmp5(tmp2[23]).intl;
          obj41[0] = intl35.string(tmp5(tmp2[23]).t.gFHI3k);
          obj41[1] = tmp5(tmp2[79]).IdIcon;
          obj41[2] = function onPress() {
            channel(isOptedIn[80]).copy(channel.id);
            const obj = channel(isOptedIn[80]);
            channel(isOptedIn[81]).presentIdCopied();
          };
          arr29 = buttons24.push(obj41);
        }
        if (obj38.buttons.length > 0) {
          arr29 = items12.push(obj38);
        }
        if (obj4.buttons.length > 0) {
          arr29 = items12.push(obj4);
        }
        if (obj5.buttons.length > 0) {
          arr29 = items12.push(obj5);
        }
        arr29 = undefined;
        if (channel.isGroupDM()) {
          const intl36 = tmp5(tmp2[23]).intl;
          const obj42 = { members: null };
          obj42[0] = channel.recipients.length + 1;
          arr29 = intl36.formatToPlainString(tmp5(tmp2[23]).t.ABMKx3, obj42);
        }
        arr29 = items12;
        const items16 = [items12.length, setting, onClose];
        arr29 = items12.useEffect(() => {
          if (!tmp) {
            stateFromStores1();
          }
        }, items16);
        const obj43 = { value: null, children: null };
        obj43[0] = analyticsLocations;
        const obj44 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp97 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
        obj44[1] = tmp5(tmp2[96]).isMetaQuest();
        const obj45 = { icon: null, title: null, subtitle: null };
        obj45[0] = tmp23;
        obj45[1] = tmp19;
        obj45[2] = arr29;
        obj44[2] = tmp22(tmp5(tmp2[97]).ActionSheetIconHeader, obj45);
        obj44[3] = items12.map((buttons) => {
          buttons = buttons.buttons;
          return closure_1_33(channel(isOptedIn[98]).ActionSheetRow.Group, {
            hasIcons: true,
            children: buttons.map((onPress) => {
              onPress = onPress.onPress;
              let str = "default";
              ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
              if (onPress.isDestructive) {
                str = "danger";
              }
              return closure_1_33(closure_1_0(closure_1_2[98]).ActionSheetRow, {
                variant: str,
                label,
                icon: closure_1_33(closure_1_0(closure_1_2[98]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
                trailing,
                onPress() {
                  if (onPress != null) {
                    tmp();
                  }
                  closure_1_1();
                }
              }, arg1);
            })
          }, buttons.sectionKey);
        });
        obj43[1] = tmp22(tmp5(tmp2[95]).ActionSheet, obj44);
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
        const obj46 = { label: null, IconComponent: null, onPress: null };
        obj46[0] = string5Result;
        obj46[1] = tmp5(tmp2[24]).UserCircleIcon;
        obj46[2] = function onPress() {
          stateFromStores1(isOptedIn[64]).update(channel.id);
        };
        t5 = buttons25.push(obj46);
      }
      tmp89 = callback3(channel.type) && !stateFromStores4;
    }
    const intl18 = tmp5(tmp2[23]).intl;
    const string4 = intl18.string;
    const t4 = tmp5(tmp2[23]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl24 = tmp5(tmp2[23]).intl;
        let stringResult1 = intl24.string(tmp5(tmp2[23]).t.olaBeG);
        const buttons26 = obj25.buttons;
        const obj47 = { label: null, IconComponent: null, onPress: null };
        obj47[0] = stringResult1;
        obj47[1] = tmp5(tmp2[57]).BellIcon;
        obj47[2] = function onPress() {
          let obj = stateFromStores1(isOptedIn[58]);
          const guildId = channel.getGuildId();
          obj = { muted: !stateFromStores1 };
          const NotificationLabel = channel(isOptedIn[59]).NotificationLabel;
          const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!stateFromStores1));
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
      const obj48 = { label: null, IconComponent: null, onPress: null };
      obj48[0] = stringResult2;
      obj48[1] = tmp5(tmp2[56]).BellSlashIcon;
      obj48[2] = function onPress() {
        let obj = channel(isOptedIn[44]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (tmp) {
          obj = { channelId: null, initialRouteName: null, source: "channel-long-press-sheet" };
          obj[0] = channel.id;
          obj[1] = closure_1_32.MUTE;
          rootNavigationRef.navigate("sidebar", obj);
        }
      };
      buttons27.push(obj48);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp72 = callback4(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
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
    const obj49 = { label: null, IconComponent: null, onPress: null };
    obj49[0] = string3Result;
    obj49[1] = tmp5(tmp2[42]).PinIcon;
    obj49[2] = function onPress() {
      channel(isOptedIn[43]).setMessagesFavorite(channel.id, !items12);
    };
    t3 = buttons28.push(obj49);
  }
}
({ isGuildTextChannelType: c9, isGuildVocalChannelType: c10, isReadableType: unpackModuleId, isTextChannel: closure_12 } = createChannelRecord);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: closure_31 } = ME);
let result = require("set").fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  let obj = require(stateFromStores[85]);
  const items = [closure_14];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_14.getChannel(closure_0));
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: null, onClose: null };
    obj[0] = stateFromStores;
    obj[1] = onClose;
    tmp3 = <ChannelLongPressActionSheetConnected channel={null} onClose={null} />;
  }
  return tmp3;
};