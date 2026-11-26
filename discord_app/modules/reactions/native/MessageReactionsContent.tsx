// discord_app/modules/reactions/native/MessageReactionsContent.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02120_asyncRequireImpl.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../_runtime/05275_BottomSheetModal.js";
import BurstReactionAnimationPreviewDefault from "../../messages/native/burst_reactions/BurstReactionAnimationPreview.tsx";
import MessageReactionsTypes from "../../messages/MessageReactionsTypes.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import FastListDefault from "../../../lib/native/FastList.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ReactionActionCreators from "../ReactionActionCreators.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import useEmojiColorPalette from "../../emojis/hooks/useEmojiColorPalette.tsx";
import SwipeableFastListDefault from "../../../components_native/common/SwipeableFastList.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import MessageReactionsStore from "../../../stores/MessageReactionsStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

const ReactionActionCreatorsAll = ReactionActionCreators;

require = fn;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = channelId(reactionType[12]).useStateFromStores(
    items,
    () => {
      const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, limit, reactionType);
      items = undefined;
      if (reactions != null) {
        items = reactions.values();
      }
      if (items == null) {
        items = [];
      }
      return Array.from(items);
    },
    items1,
    messageId(reactionType[14]),
  );
  const obj2 = { reactors: stateFromStores, reactorsHasMore: null };
  if (reactionType === channelId(reactionType[15]).ReactionTypes.VOTE) {
    const count_details = reaction.count_details;
    let num;
    if (count_details != null) {
      num = count_details.vote;
    }
    if (num == null) {
      num = 0;
    }
    let tmp3 = num;
  } else {
    tmp3 = reactionType === channelId(reactionType[15]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  obj2.reactorsHasMore = tmp3 > stateFromStores.length;
  return obj2;
}
function useReactorsOnScrollNative(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  noop = undefined;
  let current;
  closure_8 = undefined;
  closure_9 = undefined;
  noop = noop.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  current = obj.useCallback((arg0, arg1) => {
    let tmp = arg0 / arg1 > 0.75 && reactorsHasMore;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const reactors = ReactionActionCreatorsAll.getReactors(obj2);
      reactors.then(() => {
        ref.current = false;
      });
    }
  }, items);
  closure_8 = obj.useRef(current);
  const items1 = [current];
  const effect = obj.useEffect(() => {
    closure_8.current = current;
  }, items1);
  closure_9 = messageId(reactorsHasMore[17])(() =>
    applyDefault.debounce((AUTO_DISMISS, items1) => ref.current(AUTO_DISMISS, items1), 16),
  );
  return messageId(reactorsHasMore[17])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function ReactionTab(arg0) {
  ({ reaction, selected } = arg0);
  const tmp = closure_19();
  let burst_colors = reaction.burst_colors;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = useEmojiColorPalette.useEmojiColorPalette(burst_colors);
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp7 = null;
  if (null != accentColor) {
    const obj2 = { color: emojiColorPalette.accentColor };
    tmp7 = obj2;
  }
  let tmp8 = null;
  if (null != emojiColorPalette) {
    const obj3 = {
      backgroundColor: ColorUtils.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity),
    };
    tmp8 = obj3;
    const tmp3Result = ColorUtils;
  }
  const emoji = reaction.emoji;
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj4 = { id: null, animated: null, size: 48 };
    ({ id: obj7.id, animated } = emoji);
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp10;
    }
    obj4.animated = animated;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj4);
  }
  const items1 = [tmp.tabContainer, ,];
  let tabContainerSelected = null;
  if (selected) {
    tabContainerSelected = tmp.tabContainerSelected;
  }
  items1[1] = tabContainerSelected;
  let tmp16 = null;
  if (selected) {
    tmp16 = null;
    if (tmp2) {
      tmp16 = tmp8;
    }
  }
  const obj5 = {
    style: items1,
    accessible: true,
    accessibilityLabel: emoji.name,
    accessibilityState: { selected },
    children: null,
  };
  items1[2] = tmp16;
  const obj8 = { src: emojiURL, name: emoji.name, textEmojiStyle: null, fastImageStyle: null };
  const items2 = [,];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  obj8.textEmojiStyle = items2;
  const items3 = [,];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  obj8.fastImageStyle = items3;
  const items4 = [closure_1_17(EmojiDefault, obj8)];
  const items5 = [tmp.reactionCountText, ,];
  let prop = null;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp19 = null;
  if (reaction.burst_count > 0) {
    tmp19 = tmp7;
  }
  items5[2] = tmp19;
  items4[1] = closure_1_17(Text_Text.Text, {
    variant: "body-md/semibold",
    style: items5,
    children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count,
  });
  obj5.children = items4;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return collapsedCategories(React6, obj5, name);
}
function EmojiOptionsButton(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  const tmp = closure_19();
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(12244)(stateFromStores);
  const canRemoveReactions = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  const obj2 = {
    onPress: noop.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(12245, dependencyMap.paths),
        "ReactionEmojiOptionsActionSheet",
        { channelId, messageId, reaction, canRemoveReactions },
        "replaceTopSheet",
      );
    }, items2),
    style: tmp.emojiOptionsButton,
    children: null,
  };
  const obj3 = { variant: "body-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1112).intl;
  obj3.children = intl.string(channelId(1112).t.pCaYID);
  const items3 = [closure_17(channelId(5634).Text, obj3)];
  const obj = channelId(504);
  items3[1] = closure_17(channelId(7558).ChevronSmallRightIcon, {
    color: messageId(575).colors.ICON_SUBTLE,
    size: "xs",
  });
  obj2.children = items3;
  return closure_18(closure_7, obj2);
}
function ReactionTabs(setReactionSelectedIndex) {
  const tmp = closure_19();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  const obj = { style: tmp.reactionTab, children: null };
  const obj3 = {
    tabs: reactions.map((reaction, index) => {
      let str = "normal-";
      if (reaction.burst_count > 0) {
        str = "burst-";
      }
      let str2 = reaction.emoji.id;
      if (str2 == null) {
        str2 = "";
      }
      return closure_2_17(
        ReactionTab,
        { reaction, selected: index === reactionSelectedIndex },
        "" + str + str2 + ":" + reaction.emoji.name,
      );
    }),
    tabStyle: null,
    tabStyleActive: null,
    tabStyleSelected: null,
    tabIndexSelected: reactionSelectedIndex,
    onSelect(arg0) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      setReactionSelectedIndex(arg0);
    },
  };
  ({ tab: obj2.tabStyle, tabActive: obj2.tabStyleActive, tabSelected: obj2.tabStyleSelected } = tmp);
  items = [
    closure_17(setReactionSelectedIndex(12246), obj3),
    closure_17(setReactionSelectedIndex(8094), { outer: true }),
  ];
  const obj4 = { style: tmp.removeButtonContainer, children: null };
  const obj6 = { style: tmp.emojiTextIdentifier, variant: "body-sm/medium", color: "text-default", children: null };
  const tmp2 = setReactionSelectedIndex(12246);
  obj6.children = reactionSelectedIndex(4987).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [closure_17(reactionSelectedIndex(5634).Text, obj6)];
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = closure_17(EmojiOptionsButton, {});
  obj4.children = items1;
  items[2] = closure_18(closure_9, obj4);
  obj.children = items;
  return closure_18(closure_9, obj);
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: closure_6,
  Platform,
  Pressable: metroImportDefault,
  StyleSheet: closure_8,
  View: closure_9,
} = get_ActivityIndicator);
const Constants = fn(1071);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  container: { flex: 1 },
  containerEmpty: {
    padding: 32,
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  },
  listRow: null,
  tabContainer: null,
  tabContainerSelected: null,
  tab: null,
  tabSelected: null,
  tabActive: null,
  reactionTab: null,
  removeButtonContainer: null,
  emojiOptionsButton: null,
  reactionCountText: null,
  reactionCountTextSelected: null,
  emoji: null,
  emojiText: null,
  emojiImage: null,
  emojiTextIdentifier: null,
  avatar: null,
  buttonRow: null,
  loadingSpinner: null,
};
let obj3 = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj2.listRow = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.tabContainer = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  padding: 8,
  marginTop: 8,
};
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  padding: 8,
  marginTop: 8,
};
obj2.tabContainerSelected = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj2.tab = { padding: 0, marginHorizontal: 8, marginBottom: 8 };
obj2.tabSelected = { borderBottomColor: "transparent" };
let obj6 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj2.tabActive = { borderRadius: nativeDefault.radii.sm };
obj2.reactionTab = { display: "flex", flexDirection: "column" };
obj2.removeButtonContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
let obj7 = { borderRadius: nativeDefault.radii.sm };
obj2.emojiOptionsButton = {
  flexDirection: "row",
  alignItems: "center",
  marginRight: nativeDefault.space.PX_16,
  gap: 2,
};
let obj8 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj2.reactionCountText = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.reactionCountTextSelected = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.emoji = { marginRight: 8 };
const obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.emojiText = {
  lineHeight: 24,
  fontSize: 20,
  textAlign: "center",
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj2.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj2.emojiTextIdentifier = { padding: 16 };
obj2.avatar = { marginRight: 10 };
obj2.buttonRow = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" };
obj2.loadingSpinner = { height: 48, padding: 6 };
let closure_19 = createStyles.createStyles(obj2);
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let Storage = fn(510).Storage;
let closure_26 = Storage.get("MessageReactionsContent_SwipableBounced", false);
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export function MessageReactionsEmpty() {
  const tmp = closure_19();
  const tmp2 = useSafeAreaInsetsDefault();
  const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: null };
  const obj3 = { style: tmp.containerEmpty, children: null };
  const obj4 = { source: generated_NoResults.useNoResultsSource(), title: null, body: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.HmPOrp);
  const intl2 = util.intl;
  obj4.body = intl2.string(util.t["pTJ5J/"]);
  obj3.children = closure_1_17(native.RefreshEmptyState, obj4);
  obj2.children = closure_1_17(BottomSheetModal.BottomSheetView, obj3);
  return closure_1_17(Sheet_BottomSheet.BottomSheet, obj2);
}
export function MessageReactionsContent(channelId) {
  channelId = channelId.channelId;
  ({ messageId, reactions, isSelectedBurst, disableManage } = channelId);
  if (disableManage === undefined) {
    disableManage = false;
  }
  let flag = channelId.disableTabs;
  if (flag === undefined) {
    flag = false;
  }
  closure_129_2 = undefined;
  closure_129_0 = reactions;
  const emoji = channelId.emoji;
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  closure_129_2 = isSelectedBurst;
  let tmp3 = _slicedToArray(
    noop.useState(() => {
      if (null == messageId) {
        return 0;
      } else {
        const findIndexResult = channelId.findIndex((emoji) => {
          const emojiEqualsResult = channelId(dependencyMap[13]).emojiEquals(emoji.emoji, messageId);
          let num = emoji.burst_count;
          if (num == null) {
            num = 0;
          }
          let tmp2 = num > 0;
          if (closure_1_2) {
            if (tmp2) {
              tmp2 = emojiEqualsResult;
            }
            let tmp3 = tmp2;
          } else {
            tmp3 = !tmp2;
            if (!tmp2) {
              tmp3 = emojiEqualsResult;
            }
          }
          return tmp3;
        });
        let num = 0;
        if (findIndexResult >= 0) {
          num = findIndexResult;
        }
        return num;
      }
    }),
    2,
  );
  const bound = Math.min(tmp3[0], reactions.length - 1);
  if (null != reactions[bound].me_vote) {
    let NORMAL = channelId(5625).ReactionTypes.VOTE;
    let tmp8 = channelId;
    let tmp10 = channelId;
  } else if (tmp5.burst_count > 0) {
    NORMAL = channelId(5625).ReactionTypes.BURST;
    tmp8 = channelId;
    tmp10 = channelId;
  } else {
    NORMAL = channelId(5625).ReactionTypes.NORMAL;
    tmp8 = channelId;
    tmp10 = channelId;
  }
  let tmp2 = closure_19();
  ({ reactors, reactorsHasMore } = useReactors({
    channelId,
    messageId,
    reaction: reactions[bound],
    reactionType: NORMAL,
  }));
  const tmp16 = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL });
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = tmp10(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp10Result = tmp10(504);
  const isActiveChannelOrUnarchivableThread = tmp10(7628).useIsActiveChannelOrUnarchivableThread(stateFromStores);
  closure_130_0 = channelId;
  const tmp10Result3 = tmp10(7628);
  const tmp20 = useSafeAreaInsetsDefault();
  const items2 = [PermissionStore];
  const items3 = [channelId];
  const tmp21 =
    tmp8(504).useStateFromStores(
      items2,
      () => PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId }),
      items3,
    ) &&
    !disableManage &&
    isActiveChannelOrUnarchivableThread;
  let name = tmp5.emoji.id;
  if (name == null) {
    name = tmp5.emoji.name;
  }
  let obj2 = {
    accessibilityLabel: null,
    footerSize: 48,
    insetBottom: null,
    onScroll: null,
    renderFooter: null,
    renderItem: null,
    renderQuickActions: null,
    itemSize: 48,
    sections: null,
    style: null,
  };
  let intl = tmp10(1112).intl;
  obj2.accessibilityLabel = intl.string(tmp10(1112).t.gHp0C4);
  obj2.insetBottom = tmp20.bottom;
  obj2.onScroll = useReactorsOnScrollNative({
    channelId,
    messageId,
    reactionSelected: reactions[bound],
    reactors,
    reactorsHasMore,
    reactionType: NORMAL,
  });
  closure_131_0 = reactors;
  closure_131_1 = reactorsHasMore;
  const tmpResult = closure_19();
  closure_131_2 = tmpResult;
  const items4 = [reactors, reactorsHasMore, tmpResult];
  obj2.renderFooter = noop.useCallback(() => {
    if (messageId) {
      const obj = { style: channelId.loadingSpinner, size: "large" };
      let tmp2 = closure_2_17(timestampProducer, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items4);
  closure_132_0 = reactors;
  closure_132_1 = messageId;
  closure_132_2 = channelId;
  closure_132_3 = tmp5;
  closure_132_4 = tmp21;
  const tmpResult3 = closure_19();
  closure_132_5 = tmpResult3;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  closure_132_6 = analyticsLocations;
  const items5 = [reactors, channelId, tmp21, messageId, reactions[bound], tmpResult3, analyticsLocations];
  obj2.renderItem = noop.useCallback((arg0, arg1) => {
    user = user[arg1];
    const id = user.id;
    const diff = user.length - 1;
    channel = channel.getChannel(NORMAL);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let nickname = messageId(dependencyMap[20]).getNickname(guildId, NORMAL, user);
    if (nickname == null) {
      nickname = messageId(dependencyMap[21]).getGlobalName(user);
      const tmp4Result = messageId(dependencyMap[21]);
    }
    member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id);
    }
    if (burst_count.burst_count > 0) {
      NORMAL = channelId(dependencyMap[15]).ReactionTypes.BURST;
      let tmp10 = channelId;
    } else {
      NORMAL = channelId(dependencyMap[15]).ReactionTypes.NORMAL;
      tmp10 = channelId;
    }
    let obj2 = { style: closure_5.listRow, children: null };
    const obj3 = messageId(dependencyMap[20]);
    const obj4 = { style: closure_5.avatar, size: tmp10(dependencyMap[24]).AvatarSizes.SMALL, source: null };
    const avatarSource = user.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = messageId(dependencyMap[25]).getGuildMemberAvatarSource(member, user);
        const tmp4Result4 = messageId(dependencyMap[25]);
      }
    }
    const obj5 = {
      leading: closure_1_17(tmp10(dependencyMap[24]).Avatar, obj4),
      label: closure_1_17(messageId(dependencyMap[26]), { user, nick: nickname }),
      trailing: null,
      onPress: null,
      onLongPress: null,
    };
    obj4.source = guildMemberAvatarSource;
    let tmp14Result = null;
    if (closure_4) {
      tmp14Result = null;
      if (tmp10Result.isAndroid()) {
        const obj6 = {
          onPress() {
            obj = ReactionActionCreators;
            const obj2 = {
              channelId,
              messageId,
              emoji: dependencyMap.emoji,
              location: ReactionActionCreators.ReactionLocations.MESSAGE,
              userId: obj.id,
              options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
            };
            return obj.removeReaction(obj2);
          },
          children: closure_1_17(tmp10(dependencyMap[28]).XSmallIcon, {}),
        };
        tmp14Result = closure_1_17(closure_1_7, obj6);
      }
      tmp10Result = tmp10(dependencyMap[27]);
    }
    function openProfile() {
      localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(localUser, "stack");
    }
    obj5.trailing = tmp14Result;
    obj5.onPress = openProfile;
    obj5.onLongPress = openProfile;
    items = [closure_1_17(messageId(dependencyMap[23]), obj5)];
    let tmp14Result2 = null;
    if (arg1 !== diff) {
      tmp14Result2 = closure_1_17(messageId(dependencyMap[29]), {});
    }
    items[1] = tmp14Result2;
    obj2.children = items;
    return closure_1_18(closure_1_9, obj2);
  }, items5);
  closure_133_0 = channelId;
  closure_133_1 = messageId;
  closure_133_2 = tmp5;
  closure_133_3 = reactors;
  const tmpResult4 = closure_19();
  closure_133_4 = tmpResult4;
  const items6 = [reactors, channelId, messageId, reactions[bound], tmpResult4];
  obj2.renderQuickActions = noop.useCallback((arg0, arg1) => {
    const id = burst_count[arg1];
    if (channelId.burst_count > 0) {
      let NORMAL = channelId(dependencyMap[15]).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(dependencyMap[15]).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: null };
    let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: 48 };
    const intl = channelId(dependencyMap[31]).intl;
    obj2.title = intl.string(channelId(dependencyMap[31]).t.N86XcP);
    obj2.IconComponent = channelId(dependencyMap[28]).XSmallIcon;
    obj2.color = messageId(dependencyMap[11]).unsafe_rawColors.RED_400;
    obj2.onPress = function onPress() {
      const obj2 = {
        channelId,
        messageId,
        emoji: channelId.emoji,
        location: ReactionActionCreators.ReactionLocations.MESSAGE,
        userId: id.id,
        options: null,
      };
      const obj = ReactionActionCreators;
      obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
      return obj.removeReaction(obj2);
    };
    obj.children = closure_1_17(messageId(dependencyMap[30]), obj2);
    return closure_1_17(closure_1_9, obj);
  }, items6);
  const items7 = [reactors.length];
  obj2.sections = items7;
  obj2.style = tmp2.container;
  const callback = noop.useCallback(() => {
    c26 = true;
    const Storage = channelId(dependencyMap[49]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp8Result = tmp8(504);
  const tmp10Result4 = tmp10(1379);
  let obj3 = {
    scrollable: true,
    backdropOpacity: tmp10(5001).BACKDROP_OPACITY,
    backdropChildren: null,
    header: null,
    children: null,
  };
  let tmp27Result = null;
  if (NORMAL === tmp8(5625).ReactionTypes.BURST) {
    let obj4 = { style: absoluteFill.absoluteFill, pointerEvents: "none", children: null };
    let obj5 = { emoji: tmp5.emoji, reactionType: NORMAL, messageId, channelId };
    obj4.children = closure_17(BurstReactionAnimationPreviewDefault, obj5);
    tmp27Result = closure_17(closure_9, obj4);
  }
  obj3.backdropChildren = tmp27Result;
  let tmp27Result3 = null;
  if (true !== flag) {
    let obj6 = { reactions, reactionSelectedIndex: bound, setReactionSelectedIndex: tmp3[1], messageId, channelId };
    tmp27Result3 = closure_17(ReactionTabs, obj6);
  }
  obj3.header = tmp27Result3;
  if (tmp26) {
    const obj7 = { inActionSheet: true, bounceFirstRowOnMount: !c26, onBounceSwipable: callback };
    const merged = Object.assign(obj2);
    let tmp27Result4 = closure_17(SwipeableFastListDefault, obj7, name);
    const tmp19Result = SwipeableFastListDefault;
  } else {
    const obj8 = { inActionSheet: true };
    const merged1 = Object.assign(obj2);
    tmp27Result4 = closure_17(FastListDefault, obj8, name);
    const tmp19Result2 = FastListDefault;
  }
  obj3.children = tmp27Result4;
  return closure_17(tmp10(5271).BottomSheet, obj3);
}
