// discord_app/modules/channel/native/ChannelLongPressActionSheet.tsx
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import connectToStage from "connectToStage";
import { SafetyWarningTypes } from "handleConnectionOpen";
import initialize from "initialize";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import closure_8 from "handleThreadCreateOrUpdate";
import createChannelRecord from "createChannelRecord";
import incrementVersion from "incrementVersion";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import closure_19 from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { ChannelDetailsNavigatorScreens as closure_31 } from "ChannelDetailsNavigatorScreens";
import { jsx } from "openChannelCallModal";

let c10;
let c9;
let closure_12;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let unpackModuleId;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
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
              let closure_1 = tmp2;
              const tmp22 = guildStageVoice(table[20]);
              if (isGuildStageVoiceResult) {
                table = 2;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = tmp22(tmp21[19], tmp21.paths);
                return obj1;
              } else {
                table = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp22(tmp21[21], tmp21.paths);
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
  const _handleVoiceOrStageChannelConnectPress = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function ChannelLongPressActionSheetConnected(channel) {
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let isOptedIn;
  let isParentOptedIn;
  let isPinned;
  channel = channel.channel;
  const onClose = channel.onClose;
  let stateFromStores1 = onClose;
  isOptedIn = undefined;
  isPinned = undefined;
  let items11;
  let string7Result = stateFromStores1;
  const tmp2 = isOptedIn;
  const analyticsLocations = stateFromStores1(isOptedIn[78])(stateFromStores1(isOptedIn[79]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  let guildId = channel.getGuildId();
  isOptedIn = guildId;
  const tmp5 = channel;
  let obj = channel(isOptedIn[80]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  let obj1 = channel(isOptedIn[81]);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_16.getGuild(isOptedIn));
  let obj2 = channel(isOptedIn[81]);
  const items1 = [getUncachedChannelPermissions];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ canManageChannel: outer1_17.can(outer1_29.MANAGE_CHANNELS, channel), canCreateInstantInvite: outer1_17.can(outer1_29.CREATE_INSTANT_INVITE, channel), canConnect: outer1_17.can(outer1_29.CONNECT, channel), canModerateStage: outer1_17.can(channel(isOptedIn[82]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(isOptedIn[83]);
  if (guildId == null) {
    guildId = closure_28;
  }
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guildId);
  let tmp5Result = tmp5(tmp2[81]);
  const items2 = [updateUserGuildSettingsInternal];
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: outer1_20.isChannelOptedIn(isOptedIn, channel.id), isParentOptedIn: null, isPinned: null };
    let tmp = isOptedIn;
    obj[1] = null != channel.parent_id && outer1_20.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = outer1_30;
    }
    obj[2] = outer1_20.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  tmp5Result = tmp5(tmp2[81]);
  const items3 = [updateUserGuildSettingsInternal];
  stateFromStores1 = tmp5Result.useStateFromStores(items3, () => outer1_20.isChannelMuted(isOptedIn, channel.id));
  let tmp10 = updateUserGuildSettingsInternal;
  const tmp3 = stateFromStores1(isOptedIn[78]);
  const items4 = [closure_8];
  const stateFromStores2 = tmp5(tmp2[81]).useStateFromStores(items4, () => {
    let hasThreadsForChannelResult = null != isOptedIn;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = outer1_8.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result1 = tmp5(tmp2[81]);
  const items5 = [incrementVersion];
  const stateFromStores3 = tmp5(tmp2[81]).useStateFromStores(items5, () => outer1_13.isCollapsed(channel.parent_id));
  const tmp5Result2 = tmp5(tmp2[81]);
  const items6 = [handleConnectionOpen];
  const stateFromStores4 = tmp5(tmp2[81]).useStateFromStores(items6, () => outer1_15.isCollapsed(channel.id));
  const tmp5Result3 = tmp5(tmp2[81]);
  const items7 = [handleStageInstanceCreateOrUpdate];
  const stateFromStores5 = tmp5(tmp2[81]).useStateFromStores(items7, () => outer1_7.isLive(channel.id));
  const tmp5Result4 = tmp5(tmp2[81]);
  const tmp17 = string7Result(tmp2[27])(channel, true);
  const DeveloperMode = tmp5(tmp2[85]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  isPinned = setting;
  if (null != stateFromStores) {
    obj = { guild: null, size: null };
    obj[0] = stateFromStores;
    obj[1] = tmp5(tmp2[86]).GuildIconSizes.LARGE;
    let tmp21 = jsx(string7Result(tmp2[86]), { guild: null, size: null });
    let tmp20 = jsx;
    const string7ResultResult = string7Result(tmp2[86]);
  } else {
    tmp20 = jsx;
    obj = { size: null, channel: null };
    obj[0] = tmp5(tmp2[87]).AvatarSizes.LARGE;
    obj[1] = channel;
    tmp21 = jsx(tmp5(tmp2[87]).Avatar, { size: null, channel: null });
  }
  const tmp18 = string7Result(tmp2[84])(channel);
  const items8 = [mergeGuildAvatar];
  const stateFromStores6 = tmp5(tmp2[81]).useStateFromStores(items8, () => currentUser.getCurrentUser());
  const tmp5Result5 = tmp5(tmp2[81]);
  const tmp24 = null != stateFromStores6 && channel.isOwner(stateFromStores6.id);
  const items9 = [tmp10];
  const stateFromStores7 = tmp5(tmp2[81]).useStateFromStores(items9, () => outer1_20.isMessagesFavorite(channel.id));
  const tmp5Result6 = tmp5(tmp2[81]);
  const inappropriateConversationsTiers = tmp5(tmp2[88]).useInappropriateConversationsTiers(channel);
  let isTier1;
  if (inappropriateConversationsTiers != null) {
    isTier1 = inappropriateConversationsTiers.isTier1;
  }
  let tmp28 = null != isTier1;
  if (tmp28) {
    let isTier11;
    if (inappropriateConversationsTiers != null) {
      isTier11 = inappropriateConversationsTiers.isTier1;
    }
    tmp28 = !isTier11;
  }
  let isTier2;
  if (inappropriateConversationsTiers != null) {
    isTier2 = inappropriateConversationsTiers.isTier2;
  }
  let tmp31 = null != isTier2;
  if (tmp31) {
    let isTier21;
    if (inappropriateConversationsTiers != null) {
      isTier21 = inappropriateConversationsTiers.isTier2;
    }
    tmp31 = !isTier21;
  }
  const tmp5Result7 = tmp5(tmp2[88]);
  const items10 = [guildId1];
  const stateFromStores8 = tmp5(tmp2[81]).useStateFromStores(items10, () => guildId1.didAgree(channel.id));
  const tmp5Result8 = tmp5(tmp2[81]);
  const tmp35 = string7Result(tmp2[90])(channel);
  if (stateFromStores6 != null) {
    const isStaffResult = stateFromStores6.isStaff();
  }
  items11 = stateFromStores7;
  obj1 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj1.buttons;
    obj2 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[22]).intl;
    obj2[0] = intl.string(tmp5(tmp2[22]).t.LYju5J);
    obj2[1] = tmp5(tmp2[23]).UserCircleIcon;
    obj2[2] = function onPress() {
      const obj = { userId: null, channelId: null, sourceAnalyticsLocations: null };
      obj[0] = channel.getRecipientId();
      obj[1] = channel.id;
      obj[2] = analyticsLocations;
      stateFromStores1(isOptedIn[24])(obj);
    };
    buttons.push(obj2);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj1.buttons;
      obj3 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp5(tmp2[22]).intl;
      obj3[0] = intl2.string(tmp5(tmp2[22]).t.jsvgc3);
      obj3[1] = tmp5(tmp2[25]).UserMinusIcon;
      obj3[2] = function onPress() {
        stateFromStores1(isOptedIn[26]).closePrivateChannel(channel.id, outer1_19.getCurrentlySelectedChannelId() === channel.id);
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
      let intl3 = tmp5(tmp2[22]).intl;
      obj6[0] = intl3.string(tmp5(tmp2[22]).t["26C4oi"]);
      obj6[1] = tmp5(tmp2[25]).UserMinusIcon;
      obj6[3] = function onPress() {
        let obj = channel(isOptedIn[27]);
        const channelName = obj.computeChannelName(channel, outer1_21, outer1_18);
        const intl = channel(isOptedIn[22]).intl;
        const intl2 = channel(isOptedIn[22]).intl;
        let formatResult = intl2.format(channel(isOptedIn[22]).t.SSIVOu, { name: channelName });
        let formatToPlainStringResult1 = intl.formatToPlainString(channel(isOptedIn[22]).t.hJ5Ap4, { name: channelName });
        if (channel.isManaged()) {
          const intl3 = tmp(tmp2[22]).intl;
          obj = { name: null };
          obj[0] = channelName;
          formatToPlainStringResult1 = intl3.formatToPlainString(tmp(tmp2[22]).t.hVGjEW, obj);
          const intl4 = tmp(tmp2[22]).intl;
          obj = { name: null };
          obj[0] = channelName;
          formatResult = intl4.format(tmp(tmp2[22]).t.IK1Qvs, obj);
        }
        const formatToPlainStringResult = intl.formatToPlainString(channel(isOptedIn[22]).t.hJ5Ap4, { name: channelName });
        const obj1 = { title: formatToPlainStringResult1, body: formatResult, confirmText: null, cancelText: null, onConfirm: null };
        const intl5 = tmp(tmp2[22]).intl;
        obj1[2] = intl5.string(channel(isOptedIn[22]).t.p89ACt);
        const intl6 = tmp(tmp2[22]).intl;
        obj1[3] = intl6.string(channel(isOptedIn[22]).t.gm1Vej);
        obj1[4] = function onConfirm() {
          outer1_1(outer1_2[26]).closePrivateChannel(user.id, outer1_19.getCurrentlySelectedChannelId() === user.id);
        };
        stateFromStores1(isOptedIn[28]).show(obj1);
      };
      buttons2.push(obj6);
    }
    const buttons3 = obj4.buttons;
    const obj7 = { label: null, IconComponent: null, onPress: null };
    let intl4 = tmp5(tmp2[22]).intl;
    obj7[0] = intl4.string(tmp5(tmp2[22]).t["1r5E+m"]);
    obj7[1] = tmp5(tmp2[29]).PencilIcon;
    obj7[2] = function onPress() {
      stateFromStores1(isOptedIn[30])({ channelId: channel.id });
    };
    buttons3.push(obj7);
    if (tmp24) {
      const buttons4 = obj4.buttons;
      const obj8 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp5(tmp2[22]).intl;
      obj8[0] = intl5.string(tmp5(tmp2[22]).t.OQ9MKu);
      obj8[1] = tmp5(tmp2[31]).LinkIcon;
      obj8[2] = function onPress() {
        let obj = stateFromStores1(isOptedIn[32]);
        obj = { channelId: channel.id };
        obj.pushLazy(channel(isOptedIn[20])(isOptedIn[33], isOptedIn.paths), obj);
      };
      buttons4.push(obj8);
    }
  }
  items11 = [];
  if (obj1.buttons.length > 0) {
    items11.push(obj1);
  }
  let tmp43 = isFavoritesGuildSelected;
  if (isFavoritesGuildSelected) {
    tmp43 = null != channel.guild_id;
  }
  if (tmp43) {
    tmp43 = !channel.isCategory();
  }
  if (tmp43) {
    const obj9 = { sectionKey: "go-to-server", buttons: null };
    const obj10 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp5(tmp2[22]).intl;
    obj10[0] = intl6.string(string7Result(tmp2[34])["3KruG3"]);
    obj10[1] = tmp5(tmp2[35]).ServerIcon;
    obj10[2] = function onPress() {
      channel(isOptedIn[36]).transitionToGuild(channel.guild_id, channel.id);
    };
    const items12 = [obj10];
    obj9[1] = items12;
    items11.push(obj9);
  }
  if (null != tmp35) {
    const obj11 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj12 = { label: null, IconComponent: null, onPress: null };
    obj12[0] = tmp35.label;
    obj12[1] = tmp5(tmp2[37]).PlusLargeIcon;
    obj12[2] = tmp35.perform;
    const items13 = [obj12];
    obj11[1] = items13;
    items11.push(obj11);
  }
  const tmp46 = string7Result(tmp2[38])(string7Result(tmp2[89])(channel, "ChannelLongPressActionSheet"));
  if (null != tmp46) {
    const obj13 = { sectionKey: "favorites", buttons: null };
    const items14 = [tmp46];
    obj13[1] = items14;
    items11.push(obj13);
  }
  guildId1 = channel.getGuildId();
  const obj14 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj14.buttons;
    const obj15 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[22]).intl;
    obj15[0] = intl7.string(tmp5(tmp2[22]).t.VINpSK);
    obj15[1] = tmp5(tmp2[39]).GroupPlusIcon;
    obj15[2] = function onPress() {
      let obj = channel(isOptedIn[40]);
      obj = { source: outer1_27.CONTEXT_MENU };
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
        const intl9 = tmp5(tmp2[22]).intl;
        const string2 = intl9.string;
        const t2 = tmp5(tmp2[22]).t;
        if (isParentOptedIn) {
          obj16[0] = string2(t2.jNphKT);
          obj16[1] = tmp5(tmp2[44]).XSmallIcon;
          obj16[2] = function onPress() {
            if (null != channel.parent_id) {
              let obj = channel(isOptedIn[42]);
              obj = { section: null };
              obj[0] = outer1_24.CHANNEL_ACTION_SHEET;
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
            let PlusLargeIcon = tmp5(tmp2[44]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[37]).PlusLargeIcon;
          }
          obj16[1] = PlusLargeIcon;
          obj16[2] = function onPress() {
            let obj = channel(isOptedIn[42]);
            obj = { section: outer1_24.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId1, channel.id, !isOptedIn, obj);
          };
          push(obj16);
        }
      }
    } else {
      const buttons7 = obj14.buttons;
      const intl8 = tmp5(tmp2[22]).intl;
      const string = intl8.string;
      let t = tmp5(tmp2[22]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj17 = { label: null, IconComponent: null, onPress: null };
      obj17[0] = stringResult;
      obj17[1] = tmp5(tmp2[41]).PinIcon;
      obj17[2] = function onPress() {
        let obj = channel(isOptedIn[42]);
        obj = { section: outer1_24.CHANNEL_ACTION_SHEET };
        obj.setIsFavorite(guildId1, channel.id, !isPinned, obj);
        if (!isPinned) {
          const rootNavigationRef = channel(isOptedIn[43]).getRootNavigationRef();
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
          const tmpResult = channel(isOptedIn[43]);
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
    const intl10 = tmp5(tmp2[22]).intl;
    obj18[0] = intl10.string(tmp5(tmp2[22]).t.WqhZss);
    obj18[1] = tmp5(tmp2[31]).LinkIcon;
    obj18[3] = function onPress() {
      const result = channel(isOptedIn[45]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
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
    if (tmp28) {
      const buttons9 = obj19.buttons;
      const obj20 = { label: null, IconComponent: null, onPress: null };
      const intl12 = tmp5(tmp2[22]).intl;
      obj20[0] = intl12.string(tmp5(tmp2[22]).t.EuzCET);
      obj20[1] = tmp5(tmp2[46]).WarningIcon;
      obj20[2] = function onPress() {
        const result = channel(isOptedIn[47]).markAsInappropriateConversation(channel.id, analyticsLocations.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons9.push(obj20);
    }
    if (tmp31) {
      const buttons10 = obj19.buttons;
      const obj21 = { label: null, IconComponent: null, onPress: null };
      const intl13 = tmp5(tmp2[22]).intl;
      obj21[0] = intl13.string(tmp5(tmp2[22]).t["tBw/1i"]);
      obj21[1] = tmp5(tmp2[46]).WarningIcon;
      obj21[2] = function onPress() {
        const result = channel(isOptedIn[47]).markAsInappropriateConversation(channel.id, analyticsLocations.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons10.push(obj21);
    }
    if (obj19.buttons.length > 0) {
      items11.push(obj19);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj22 = { sectionKey: "message-request", buttons: null };
          obj22[1] = [];
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj22.buttons;
            const obj23 = { label: null, IconComponent: null, onPress: null };
            const intl14 = tmp5(tmp2[22]).intl;
            obj23[0] = intl14.string(tmp5(tmp2[22]).t.L6623r);
            obj23[1] = tmp5(tmp2[48]).InboxIcon;
            obj23[2] = function onPress() {
              channel(isOptedIn[49]).markAsMessageRequest(channel.id);
            };
            buttons11.push(obj23);
          }
          const buttons12 = obj22.buttons;
          const obj24 = { label: null, IconComponent: null, onPress: null };
          const intl15 = tmp5(tmp2[22]).intl;
          obj24[0] = intl15.string(tmp5(tmp2[22]).t["85YWlY"]);
          obj24[1] = tmp5(tmp2[48]).InboxIcon;
          obj24[2] = function onPress() {
            const result = channel(isOptedIn[49]).clearMessageRequestState(channel.id);
          };
          buttons12.push(obj24);
          if (obj22.buttons.length > 0) {
            items11.push(obj22);
          }
        }
      }
    }
    if (obj14.buttons.length > 0) {
      items11.push(obj14);
    }
    const obj25 = { sectionKey: "notifications", buttons: null };
    obj25[1] = [];
    if (tmp70) {
      const buttons13 = obj25.buttons;
      const obj26 = { label: null, IconComponent: null, onPress: null };
      const intl16 = tmp5(tmp2[22]).intl;
      obj26[0] = intl16.string(tmp5(tmp2[22]).t.e6RscS);
      obj26[1] = tmp5(tmp2[50]).EyeIcon;
      obj26[2] = function onPress() {
        let obj = channel(isOptedIn[51]);
        obj = { section: outer1_24.CHANNEL_ACTION_SHEET, object: outer1_23.MARK_CHANNEL_AS_READ_BUTTON, objectType: outer1_22.ACK_MANUAL };
        obj.ackChannel(channel, obj);
      };
      buttons13.push(obj26);
    }
    if (!callback5(channel.type)) {
      if (tmp79) {
        const buttons14 = obj25.buttons;
        const obj27 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl24 = tmp5(tmp2[22]).intl;
        obj27[0] = intl24.string(tmp5(tmp2[22]).t.h850Ss);
        obj27[1] = tmp5(tmp2[56]).ChannelNotificationIcon;
        obj27[3] = function onPress() {
          stateFromStores1(isOptedIn[57]).setSection(outer1_25.NOTIFICATIONS);
          const obj = stateFromStores1(isOptedIn[57]);
          stateFromStores1(isOptedIn[57]).open(channel.id);
        };
        buttons14.push(obj27);
      }
      if (obj25.buttons.length > 0) {
        items11.push(obj25);
      }
      const obj28 = { sectionKey: "threads", buttons: null };
      obj28[1] = [];
      tmp79 = tmp56(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp82) {
        const buttons15 = obj28.buttons;
        const obj29 = { label: null, IconComponent: null, onPress: null };
        const intl25 = tmp5(tmp2[22]).intl;
        obj29[0] = intl25.string(tmp5(tmp2[22]).t.B2panI);
        obj29[1] = tmp5(tmp2[58]).ThreadIcon;
        obj29[2] = function onPress() {
          stateFromStores1(isOptedIn[59])(channel);
        };
        buttons15.push(obj29);
      }
      if (obj28.buttons.length > 0) {
        items11.push(obj28);
      }
      const obj30 = { sectionKey: "voice", buttons: null };
      obj30[1] = [];
      tmp82 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores2 || tmp18;
      if (!tmp86) {
        if (channel.isGuildVocal()) {
          const buttons16 = obj30.buttons;
          const push2 = buttons16.push;
          const obj31 = { label: null, IconComponent: null, onPress: null };
          const intl27 = tmp5(tmp2[22]).intl;
          const string6 = intl27.string;
          const t6 = tmp5(tmp2[22]).t;
          if (isGuildStageVoiceResult) {
            obj31[0] = string6(t6["7vb2cc"]);
            obj31[1] = tmp5(tmp2[61]).StageIcon;
            obj31[2] = function onPress() {
              outer1_33(channel);
            };
            push2(obj31);
            const buttons17 = obj30.buttons;
            const obj32 = { label: null, IconComponent: null, onPress: null };
            const intl28 = tmp5(tmp2[22]).intl;
            obj32[0] = intl28.string(tmp5(tmp2[22]).t.ZXxLQg);
            obj32[1] = tmp5(tmp2[62]).ChatIcon;
            obj32[2] = function onPress() {
              let obj = stateFromStores1(isOptedIn[63]);
              obj.hideActionSheet();
              obj = { channel };
              stateFromStores1(isOptedIn[32]).pushLazy(channel(isOptedIn[20])(isOptedIn[64], isOptedIn.paths), obj);
              stateFromStores1(isOptedIn[65])();
            };
            buttons17.push(obj32);
          } else {
            obj31[0] = string6(t6.ZXxLQg);
            obj31[1] = tmp5(tmp2[62]).ChatIcon;
            obj31[2] = function onPress() {
              outer1_33(channel);
              stateFromStores1(isOptedIn[66]).updateChatOpen(channel.id, true);
              stateFromStores1(isOptedIn[65])();
            };
            push2(obj31);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp92) {
          const buttons18 = obj30.buttons;
          const obj33 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl29 = tmp5(tmp2[22]).intl;
          obj33[0] = intl29.string(tmp5(tmp2[22]).t.saZaRb);
          obj33[1] = tmp5(tmp2[44]).XSmallIcon;
          obj33[3] = function onPress() {
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
                      let closure_0 = tmp4;
                      c1 = 1;
                      paths = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = outer1_0(paths[20])(paths[67], paths.paths);
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
          buttons18.push(obj33);
        }
        tmp92 = channel.isGuildStageVoice() && stateFromStores5 && canModerateStage;
        if (tmp94) {
          const buttons19 = obj30.buttons;
          const obj34 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl30 = tmp5(tmp2[22]).intl;
          obj34[0] = intl30.string(tmp5(tmp2[22]).t["+78Pfm"]);
          obj34[1] = tmp5(tmp2[68]).FlagIcon;
          obj34[3] = function onPress() {
            const result = channel(isOptedIn[69]).showReportModalForStageChannel(channel);
          };
          buttons19.push(obj34);
        }
        if (obj30.buttons.length > 0) {
          items11.push(obj30);
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores8) {
            const obj35 = { sectionKey: "spoiler", buttons: null };
            obj35[1] = [];
            const buttons20 = obj35.buttons;
            const obj36 = { label: null, IconComponent: null, onPress: null };
            const intl31 = tmp5(tmp2[22]).intl;
            obj36[0] = intl31.string(tmp5(tmp2[22]).t.ix2UVZ);
            obj36[1] = tmp5(tmp2[70]).EyeSlashIcon;
            obj36[2] = function onPress() {
              stateFromStores1(isOptedIn[71]).clearSpoilerAgree(channel.id);
            };
            buttons20.push(obj36);
            items11.push(obj35);
          }
        }
        const obj37 = { sectionKey: "admin-actions", buttons: null };
        obj37[1] = [];
        if (canManageChannel) {
          const buttons21 = obj37.buttons;
          const intl32 = tmp5(tmp2[22]).intl;
          const string7 = intl32.string;
          const t7 = tmp5(tmp2[22]).t;
          if (isCategoryResult) {
            string7Result = string7(t7.zdPFs9);
          } else {
            string7Result = string7(t7["3gUsJb"]);
          }
          const obj38 = { label: null, IconComponent: null, onPress: null };
          obj38[0] = string7Result;
          obj38[1] = tmp5(tmp2[72]).SettingsIcon;
          obj38[2] = function onPress() {
            stateFromStores1(isOptedIn[57]).setSection(outer1_25.OVERVIEW);
            const obj = stateFromStores1(isOptedIn[57]);
            stateFromStores1(isOptedIn[57]).open(channel.id);
          };
          string7Result = buttons21.push(obj38);
          string7Result = tmp56(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
          if (string7Result) {
            const buttons22 = obj37.buttons;
            string7Result = channel.isCategory();
            const intl33 = tmp5(tmp2[22]).intl;
            const string8 = intl33.string;
            const t8 = tmp5(tmp2[22]).t;
            if (string7Result) {
              string7Result = string8(t8["fUYU+j"]);
            } else {
              string7Result = string8(t8.dEaPc4);
            }
            let obj39 = { label: null, IconComponent: null, onPress: null };
            obj39[0] = string7Result;
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[37]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[73]).CopyIcon;
            }
            obj39[1] = CopyIcon;
            obj39[2] = function onPress() {
              let type;
              if (!channel.isCategory()) {
                type = obj2.type;
              }
              const guildId = obj2.getGuildId();
              const obj = stateFromStores1(isOptedIn[74]);
              let id;
              if (!channel.isCategory()) {
                id = obj2.id;
              }
              obj.open(type, guildId, channel.isCategory() ? channel.id : channel.parent_id, id);
            };
            obj39 = buttons22.push(obj39);
          }
          isCategoryResult = channel.isCategory();
        }
        if (setting) {
          const buttons23 = obj37.buttons;
          const obj40 = { label: null, IconComponent: null, onPress: null };
          const intl34 = tmp5(tmp2[22]).intl;
          obj40[0] = intl34.string(tmp5(tmp2[22]).t.gFHI3k);
          obj40[1] = tmp5(tmp2[75]).IdIcon;
          obj40[2] = function onPress() {
            channel(isOptedIn[76]).copy(channel.id);
            const obj = channel(isOptedIn[76]);
            channel(isOptedIn[77]).presentIdCopied();
          };
          string7Result = buttons23.push(obj40);
        }
        if (obj37.buttons.length > 0) {
          string7Result = items11.push(obj37);
        }
        if (obj4.buttons.length > 0) {
          string7Result = items11.push(obj4);
        }
        if (obj5.buttons.length > 0) {
          string7Result = items11.push(obj5);
        }
        string7Result = undefined;
        if (channel.isGroupDM()) {
          const intl35 = tmp5(tmp2[22]).intl;
          const obj41 = { members: null };
          obj41[0] = channel.recipients.length + 1;
          string7Result = intl35.formatToPlainString(tmp5(tmp2[22]).t.ABMKx3, obj41);
        }
        string7Result = items11;
        const items15 = [items11.length, setting, onClose];
        string7Result = items11.useEffect(() => {
          if (!tmp) {
            stateFromStores1();
          }
        }, items15);
        const obj42 = { value: null, children: null };
        obj42[0] = analyticsLocations;
        const obj43 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp94 = channel.isGuildStageVoice() && stateFromStores5 && canConnect;
        obj43[1] = tmp5(tmp2[92]).isMetaQuest();
        const obj44 = { icon: null, title: null, subtitle: null };
        obj44[0] = tmp21;
        obj44[1] = tmp17;
        obj44[2] = string7Result;
        obj43[2] = tmp20(tmp5(tmp2[93]).ActionSheetIconHeader, obj44);
        obj43[3] = items11.map((buttons) => {
          let obj = { hasIcons: true, children: null };
          buttons = buttons.buttons;
          obj[1] = buttons.map((onPress) => {
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
            const obj = { variant: str, label, icon: null, trailing: null, onPress: null };
            obj[2] = outer1_32(outer1_0(outer1_2[94]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor });
            obj[3] = trailing;
            obj[4] = function onPress() {
              if (onPress != null) {
                tmp();
              }
              outer1_1();
            };
            return outer1_32(outer1_0(outer1_2[94]).ActionSheetRow, obj, arg1);
          });
          return outer1_32(channel(isOptedIn[94]).ActionSheetRow.Group, obj, buttons.sectionKey);
        });
        obj42[1] = tmp20(tmp5(tmp2[91]).ActionSheet, obj43);
        return tmp20(tmp5(tmp2[78]).AnalyticsLocationProvider, obj42);
      } else {
        const buttons24 = obj30.buttons;
        const intl26 = tmp5(tmp2[22]).intl;
        const string5 = intl26.string;
        let t5 = tmp5(tmp2[22]).t;
        if (stateFromStores4) {
          let string5Result = string5(t5.JYF2Oa);
        } else {
          string5Result = string5(t5.LxzNiu);
        }
        const obj45 = { label: null, IconComponent: null, onPress: null };
        obj45[0] = string5Result;
        obj45[1] = tmp5(tmp2[23]).UserCircleIcon;
        obj45[2] = function onPress() {
          stateFromStores1(isOptedIn[60]).update(channel.id);
        };
        t5 = buttons24.push(obj45);
      }
      tmp86 = callback3(channel.type) && !stateFromStores3;
    }
    const intl17 = tmp5(tmp2[22]).intl;
    const string4 = intl17.string;
    const t4 = tmp5(tmp2[22]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl23 = tmp5(tmp2[22]).intl;
        let stringResult1 = intl23.string(tmp5(tmp2[22]).t.olaBeG);
        const buttons25 = obj25.buttons;
        const obj46 = { label: null, IconComponent: null, onPress: null };
        obj46[0] = stringResult1;
        obj46[1] = tmp5(tmp2[53]).BellIcon;
        obj46[2] = function onPress() {
          let obj = stateFromStores1(isOptedIn[54]);
          const guildId = channel.getGuildId();
          obj = { muted: !stateFromStores1 };
          const NotificationLabel = channel(isOptedIn[55]).NotificationLabel;
          const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!stateFromStores1));
        };
        buttons25.push(obj46);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl21 = tmp5(tmp2[22]).intl;
            stringResult1 = intl21.string(tmp5(tmp2[22]).t["Cq/TzF"]);
          }
        }
      }
      const intl22 = tmp5(tmp2[22]).intl;
      stringResult1 = intl22.string(tmp5(tmp2[22]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl20 = tmp5(tmp2[22]).intl;
        let stringResult2 = intl20.string(tmp5(tmp2[22]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl18 = tmp5(tmp2[22]).intl;
              stringResult2 = intl18.string(tmp5(tmp2[22]).t.bUUd8q);
            }
          }
        }
        const intl19 = tmp5(tmp2[22]).intl;
        stringResult2 = intl19.string(tmp5(tmp2[22]).t.LO3kaK);
      }
      const buttons26 = obj25.buttons;
      const obj47 = { label: null, IconComponent: null, onPress: null };
      obj47[0] = stringResult2;
      obj47[1] = tmp5(tmp2[52]).BellSlashIcon;
      obj47[2] = function onPress() {
        let obj = channel(isOptedIn[43]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (tmp) {
          obj = { channelId: null, initialRouteName: null, source: "channel-long-press-sheet" };
          obj[0] = channel.id;
          obj[1] = outer1_31.MUTE;
          rootNavigationRef.navigate("sidebar", obj);
        }
      };
      buttons26.push(obj47);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp70 = callback4(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons27 = obj14.buttons;
    const intl11 = tmp5(tmp2[22]).intl;
    const string3 = intl11.string;
    let t3 = tmp5(tmp2[22]).t;
    if (stateFromStores7) {
      let string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj48 = { label: null, IconComponent: null, onPress: null };
    obj48[0] = string3Result;
    obj48[1] = tmp5(tmp2[41]).PinIcon;
    obj48[2] = function onPress() {
      channel(isOptedIn[42]).setMessagesFavorite(channel.id, !items11);
    };
    t3 = buttons27.push(obj48);
  }
}
({ isGuildTextChannelType: c9, isGuildVocalChannelType: c10, isReadableType: unpackModuleId, isTextChannel: closure_12 } = createChannelRecord);
({ AnalyticsObjectTypes: closure_22, AnalyticsObjects: closure_23, AnalyticsSections: closure_24, ChannelSettingsSections: closure_25, ChannelTypes: closure_26, InstantInviteSources: closure_27, NULL_STRING_GUILD_ID: closure_28, Permissions: closure_29, ZERO_STRING_GUILD_ID: closure_30 } = ME);
let result = require("handleConnectionOpen").fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  let onClose;
  let require;
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  let obj = require(stateFromStores[81]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_14.getChannel(closure_0));
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