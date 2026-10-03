// discord_app/modules/reactions/native/MessageReactionsContent.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import BottomSheetModal from "../../../../_runtime/06112_BottomSheetModal.js";
import FastListDefault from "../../../lib/native/FastList.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import MessageReactionsTypes from "../../messages/MessageReactionsTypes.tsx";
import ReactionActionCreators from "../ReactionActionCreators.tsx";
import BurstReactionAnimationPreviewDefault from "../../messages/native/burst_reactions/BurstReactionAnimationPreview.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import ReactionToProfileExperimentDefault from "../ReactionToProfileExperiment.tsx";
import useEmojiColorPalette from "../../emojis/hooks/useEmojiColorPalette.tsx";
import SwipeableFastListDefault from "../../../components_native/common/SwipeableFastList.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import MessageReactionsStore from "../../../stores/MessageReactionsStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";

const ReactionActionCreatorsAll = ReactionActionCreators;

require = fn;
function RemoveAllButton(channelId) {
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  noop = undefined;
  c6 = undefined;
  let callback;
  const tmp = closure_21();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let obj = require("initialize");
  const tmp6 = reactionSelectedIndex(messageId[41])(stateFromStores);
  [c5, c6] = useReducedMotion(noop.useState(true), 2);
  const tmp7 = useReducedMotion(noop.useState(true), 2);
  const sharedValue = require("ReanimatedRexport").useSharedValue(64);
  let obj2 = require("ReanimatedRexport");
  const fn = function h() {
    if (useReducedMotion) {
      let withTimingResult = sharedValue.get();
    } else {
      withTimingResult = timing.withTiming(sharedValue.get(), { duration: 200 });
    }
    return { maxWidth: withTimingResult };
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  fn.__workletHash = 16499689496895;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj4 = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const obj5 = require("ReanimatedRexport");
  class R {
    constructor() {
      if (useReducedMotion) {
        tmp5 = closure_8;
        value = closure_8.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_3;
        obj = closure_0(closure_3[42]);
        tmp3 = closure_8;
        value = obj.withTiming(closure_8.get(), { duration: 125 });
      }
      return { opacity: value, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  const obj6 = require("ReanimatedRexport");
  R.__closure = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  R.__workletHash = 8698187840986;
  R.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = obj6.useAnimatedStyle(R);
  callback = noop.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = noop.useEffect(() => {
    callback();
  }, items3);
  let tmp14 = null;
  if (tmp6) {
    const obj8 = {
      onPress() {
        if (c5) {
          _undefined(false);
          const result = sharedValue.set(useWindowDimensions.getWindowDimensions().width);
          const result1 = sharedValue1.set(1);
        } else {
          ReactionActionCreatorsAll.removeEmojiReactions(channelId, messageId, _require[reactionSelectedIndex].emoji);
          callback();
        }
      },
      children: null,
    };
    const obj9 = { style: null, children: null };
    const items4 = [tmp.removeAllButton, animatedStyle];
    obj9.style = items4;
    const obj10 = { color: reactionSelectedIndex(tmp3[13]).unsafe_rawColors.WHITE, size: "sm" };
    const items5 = [closure_17(require("TrashIcon").TrashIcon, obj10)];
    const obj11 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = require("util").intl;
    obj11.children = intl.string(require("util").t["zx/e4P"]);
    items5[1] = closure_17(closure_19, obj11);
    obj9.children = items5;
    obj8.children = closure_18(reactionSelectedIndex(tmp3[10]).View, obj9);
    tmp14 = closure_17(sharedValue, obj8);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  const tmp = closure_21();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(9978)(stateFromStores);
  const canRemoveReactions = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  const obj2 = {
    onPress: noop.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(9979, dependencyMap.paths),
        "ReactionEmojiOptionsActionSheet",
        { channelId, messageId, reaction, canRemoveReactions },
        "replaceTopSheet",
      );
    }, items2),
    style: tmp.emojiOptionsButton,
    children: null,
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1126).intl;
  obj3.children = intl.string(channelId(1126).t.pCaYID);
  const items3 = [closure_17(channelId(4886).Text, obj3)];
  const obj = channelId(504);
  items3[1] = closure_17(channelId(6708).ChevronSmallRightIcon, {
    color: messageId(587).colors.ICON_SUBTLE,
    size: "xs",
  });
  obj2.children = items3;
  return closure_18(closure_7, obj2);
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: metroRequire,
  Platform,
  Pressable: closure_7,
  StyleSheet: closure_8,
  View: closure_9,
} = get_ActivityIndicator);
const Constants = fn(1085);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(4886).Text);
let c20 = 48;
const createStyles = fn(4890);
let obj = {
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
  removeAllButton: null,
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
obj.listRow = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.tabContainer = {
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
obj.tabContainerSelected = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tab = { padding: 0, marginHorizontal: 8, marginBottom: 8 };
obj.tabSelected = { borderBottomColor: "transparent" };
let obj6 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tabActive = { borderRadius: nativeDefault.radii.sm };
obj.reactionTab = { display: "flex", flexDirection: "column" };
obj.removeButtonContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
let obj7 = { borderRadius: nativeDefault.radii.sm };
obj.emojiOptionsButton = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
let obj8 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj.removeAllButton = {
  backgroundColor: nativeDefault.colors.STATUS_DANGER,
  borderRadius: nativeDefault.radii.xxl,
  height: 32,
  overflow: "hidden",
  minWidth: 42,
  marginRight: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
};
let obj9 = {
  backgroundColor: nativeDefault.colors.STATUS_DANGER,
  borderRadius: nativeDefault.radii.xxl,
  height: 32,
  overflow: "hidden",
  minWidth: 42,
  marginRight: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
};
obj.reactionCountText = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.reactionCountTextSelected = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.emoji = { marginRight: 8 };
let obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.emojiText = {
  lineHeight: 24,
  fontSize: 20,
  textAlign: "center",
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
};
obj.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj.emojiTextIdentifier = { padding: 16 };
obj.avatar = { marginRight: 10 };
obj.buttonRow = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" };
obj.loadingSpinner = { height: 48, padding: 6 };
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      _require = channelId;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId });
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : (channelId) => {
      _require = channelId;
      const items = [PermissionStore];
      const items1 = [channelId];
      return require("initialize").useStateFromStores(
        items,
        () => PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId }),
        items1,
      );
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reactions) => {
      const cResult = reactions(576).c(7);
      reactions = reactions.reactions;
      const emoji = reactions.emoji;
      const isSelectedBurst = reactions.isSelectedBurst;
      closure_2 = tmp2;
      if (cResult[0] === emoji) {
        if (cResult[1] === tmp2) {
          if (cResult[2] === reactions) {
            let tmp3 = cResult[3];
          }
          const tmp6 = _slicedToArray(noop.useState(tmp3), 2);
          const _Math = Math;
          const bound = Math.min(tmp6[0], reactions.length - 1);
          if (cResult[4] === reactions[bound]) {
            if (cResult[5] === bound) {
              let tmp10 = cResult[6];
            }
            return tmp10;
          }
          const obj2 = {
            reactionSelected: reactions[bound],
            reactionSelectedIndex: bound,
            setReactionSelectedIndex: tmp6[1],
          };
          cResult[4] = reactions[bound];
          cResult[5] = bound;
          cResult[6] = obj2;
          tmp10 = obj2;
        }
      }
      const fn = function c() {
        if (null == emoji) {
          return 0;
        } else {
          const findIndexResult = reactions.findIndex((emoji) => {
            const emojiEqualsResult = reactions(dependencyMap[17]).emojiEquals(emoji.emoji, emoji);
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
      };
      cResult[0] = emoji;
      cResult[1] = undefined !== isSelectedBurst && isSelectedBurst;
      cResult[2] = reactions;
      cResult[3] = fn;
      tmp3 = fn;
      const obj = reactions(576);
    }
  : (reactions) => {
      reactions = reactions.reactions;
      ({ emoji: importDefault, isSelectedBurst } = reactions);
      if (isSelectedBurst === undefined) {
        isSelectedBurst = false;
      }
      const tmp = _slicedToArray(
        noop.useState(() => {
          if (null == importDefault) {
            return 0;
          } else {
            const findIndexResult = reactions.findIndex((emoji) => {
              const emojiEqualsResult = reactions(dependencyMap[17]).emojiEquals(emoji.emoji, closure_1_1);
              let num = emoji.burst_count;
              if (num == null) {
                num = 0;
              }
              let tmp2 = num > 0;
              if (isSelectedBurst) {
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
      const bound = Math.min(tmp[0], reactions.length - 1);
      return { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp[1] };
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(reactionType[15]).c(10);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reaction = channelId.reaction;
      reactionType = channelId.reactionType;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [MessageReactionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === messageId) {
          if (cResult[3] === reaction.emoji) {
            if (cResult[4] === reactionType) {
              let tmp6 = cResult[5];
              let tmp7 = cResult[6];
            }
            const tmpResult = tmp(tmp2[16]);
            const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7, messageId(tmp2[18]));
            if (reactionType === tmp(tmp2[19]).ReactionTypes.VOTE) {
              const count_details = reaction.count_details;
              let num2;
              if (count_details != null) {
                num2 = count_details.vote;
              }
              if (num2 == null) {
                num2 = 0;
              }
              let tmp13 = num2;
            } else {
              tmp13 = reactionType === tmp(tmp2[19]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
            }
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === tmp15) {
                let tmp16 = cResult[9];
              }
              return tmp16;
            }
            const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp13 > stateFromStores.length };
            cResult[7] = stateFromStores;
            cResult[8] = tmp13 > stateFromStores.length;
            cResult[9] = obj2;
            tmp16 = obj2;
          }
        }
      }
      const fn = function o() {
        const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, limit, reactionType);
        let items;
        if (reactions != null) {
          items = reactions.values();
        }
        if (items == null) {
          items = [];
        }
        return Array.from(items);
      };
      const items1 = [channelId, messageId, reaction.emoji, reactionType];
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = reaction.emoji;
      cResult[4] = reactionType;
      cResult[5] = fn;
      cResult[6] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj = channelId(reactionType[15]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reaction = channelId.reaction;
      const reactionType = channelId.reactionType;
      let items = [MessageReactionsStore];
      const items1 = [channelId, messageId, reaction.emoji, reactionType];
      const stateFromStores = channelId(reactionType[16]).useStateFromStores(
        items,
        () => {
          const reactions = MessageReactionsStore.getReactions(
            channelId,
            messageId,
            reaction.emoji,
            limit,
            reactionType,
          );
          let items;
          if (reactions != null) {
            items = reactions.values();
          }
          if (items == null) {
            items = [];
          }
          return Array.from(items);
        },
        items1,
        messageId(reactionType[18]),
      );
      const obj2 = { reactors: stateFromStores, reactorsHasMore: null };
      if (reactionType === channelId(reactionType[19]).ReactionTypes.VOTE) {
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
        tmp3 = reactionType === channelId(reactionType[19]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
      }
      obj2.reactorsHasMore = tmp3 > stateFromStores.length;
      return obj2;
    };
let closure_24 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(reactorsHasMore[15]).c(13);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reactionSelected = channelId.reactionSelected;
      ({ reactors, reactorsHasMore } = channelId);
      const reactionType = channelId.reactionType;
      noop = noop.useRef(false);
      let id = null;
      if (reactors.length > 0) {
        id = reactors[reactors.length - 1].id;
      }
      if (cResult[0] === channelId) {
        if (cResult[1] === messageId) {
          if (cResult[2] === reactionSelected) {
            if (cResult[3] === reactionType) {
              if (cResult[4] === id) {
                if (cResult[5] === reactorsHasMore) {
                  let tmp4 = cResult[6];
                }
                current = tmp4;
                closure_8 = obj2.useRef(tmp4);
                if (cResult[7] !== tmp4) {
                  class I {
                    constructor() {
                      closure_8.current = closure_7;
                      return;
                    }
                  }
                  const items = [tmp4];
                  cResult[7] = tmp4;
                  cResult[8] = I;
                  cResult[9] = items;
                  let tmp7 = items;
                } else {
                  class I {
                    constructor() {
                      closure_8.current = closure_7;
                      return;
                    }
                  }
                  tmp7 = cResult[9];
                }
                const effect = obj2.useEffect(I, tmp7);
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  class I {
                    constructor() {
                      closure_8.current = closure_7;
                      return;
                    }
                  }
                  cResult[10] = tmp11;
                } else {
                  class I {
                    constructor() {
                      closure_8.current = closure_7;
                      return;
                    }
                  }
                }
                const tmp13 = messageId(reactorsHasMore[22])(tmp11);
                closure_9 = tmp13;
                if (cResult[11] !== tmp13) {
                  class I {
                    constructor() {
                      closure_8.current = closure_7;
                      return;
                    }
                  }
                  cResult[11] = tmp13;
                  cResult[12] = tmp15;
                } else {
                  class I {
                    constructor() {
                      closure_8.current = closure_7;
                      return;
                    }
                  }
                }
                return messageId(reactorsHasMore[22])(tmp15);
              }
            }
          }
        }
      }
      const fn = function o(arg0, arg1) {
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
      };
      cResult[0] = channelId;
      cResult[1] = messageId;
      cResult[2] = reactionSelected;
      cResult[3] = reactionType;
      cResult[4] = id;
      cResult[5] = reactorsHasMore;
      cResult[6] = fn;
      tmp4 = fn;
      let obj = channelId(reactorsHasMore[15]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reactionSelected = channelId.reactionSelected;
      ({ reactors, reactorsHasMore } = channelId);
      const reactionType = channelId.reactionType;
      noop = undefined;
      current = undefined;
      closure_8 = undefined;
      closure_9 = undefined;
      noop = noop.useRef(false);
      let id = null;
      if (reactors.length > 0) {
        id = reactors[reactors.length - 1].id;
      }
      const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
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
      closure_9 = messageId(reactorsHasMore[22])(() =>
        _modDef12.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16),
      );
      return messageId(reactorsHasMore[22])(() => (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
      });
    };
let closure_25 = tmp6;
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(4);
      let tmp2 = closure_21();
      const loadingSpinner = tmp2;
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          if (cResult[2] === tmp2) {
            let tmp3 = cResult[3];
          }
          return tmp3;
        }
      }
      const fn = function o() {
        if (closure_1) {
          const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
          let tmp2 = constants(timestampProducer, obj);
        } else {
          tmp2 = null;
        }
        return tmp2;
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = tmp2;
      cResult[3] = fn;
      tmp3 = fn;
    }
  : (arg0, arg1) => {
      closure_1 = arg1;
      const tmp = closure_21();
      const loadingSpinner = tmp;
      const items = [arg0, arg1, tmp];
      return noop.useCallback(() => {
        if (closure_1) {
          const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
          let tmp2 = constants(timestampProducer, obj);
        } else {
          tmp2 = null;
        }
        return tmp2;
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, burst_count, arg4) => {
      _require = arg0;
      importDefault = arg1;
      closure_2 = arg2;
      dependencyMap = burst_count;
      closure_4 = arg4;
      const cResult = require("c").c(12);
      const tmp3 = closure_21();
      closure_5 = tmp3;
      const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "MessageReactionsContent" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      let obj = require("c");
      const reactionToProfileEnabled = ReactionToProfileExperimentDefault.useConfig(first).reactionToProfileEnabled;
      if (cResult[1] === arg4) {
        if (cResult[2] === analyticsLocations) {
          if (cResult[3] === arg2) {
            if (cResult[4] === arg1) {
              if (cResult[5] === burst_count.burst_count) {
                if (cResult[6] === burst_count.emoji) {
                  if (cResult[7] === reactionToProfileEnabled) {
                    if (cResult[8] === arg0) {
                      if (cResult[9] === tmp3.avatar) {
                        if (cResult[10] === tmp3.listRow) {
                          let tmp6 = cResult[11];
                        }
                        return tmp6;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const fn = function v(arg0, arg1) {
        user = user[arg1];
        const id = user.id;
        const diff = user.length - 1;
        channel = channel.getChannel(NORMAL);
        let guildId = null;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        let nickname = messageId(burst_count[25]).getNickname(guildId, NORMAL, user);
        if (nickname == null) {
          nickname = messageId(burst_count[26]).getGlobalName(user);
          const tmp4Result = messageId(burst_count[26]);
        }
        member = null;
        if (null != guildId) {
          member = member.getMember(guildId, id);
        }
        if (burst_count.burst_count > 0) {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.BURST;
          let tmp10 = closure_0;
        } else {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.NORMAL;
          tmp10 = closure_0;
        }
        let obj2 = { style: closure_5.listRow, children: null };
        const obj3 = messageId(burst_count[25]);
        const obj4 = { style: closure_5.avatar, size: tmp10(burst_count[29]).AvatarSizes.SMALL, source: null };
        const avatarSource = user.getAvatarSource(guildId);
        let guildMemberAvatarSource = avatarSource;
        if (null != guildId) {
          let avatar;
          if (member != null) {
            avatar = member.avatar;
          }
          guildMemberAvatarSource = avatarSource;
          if (null != avatar) {
            guildMemberAvatarSource = messageId(burst_count[30]).getGuildMemberAvatarSource(member, user);
            const tmp4Result4 = messageId(burst_count[30]);
          }
        }
        const obj5 = {
          leading: closure_1_17(tmp10(burst_count[29]).Avatar, obj4),
          label: closure_1_17(messageId(burst_count[31]), { user, nick: nickname }),
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
                  emoji: emoji.emoji,
                  location: ReactionActionCreators.ReactionLocations.MESSAGE,
                  userId: obj.id,
                  options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
                };
                return obj.removeReaction(obj2);
              },
              children: closure_1_17(tmp10(burst_count[33]).XSmallIcon, {}),
            };
            tmp14Result = closure_1_17(reactionToProfileEnabled, obj6);
          }
          tmp10Result = tmp10(burst_count[32]);
        }
        function openProfile() {
          localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(localUser, "stack");
        }
        obj5.trailing = tmp14Result;
        let tmp21;
        if (reactionToProfileEnabled) {
          tmp21 = openProfile;
        }
        obj5.onPress = tmp21;
        obj5.onLongPress = openProfile;
        const items = [closure_1_17(messageId(burst_count[28]), obj5)];
        let tmp14Result2 = null;
        if (arg1 !== diff) {
          tmp14Result2 = closure_1_17(messageId(burst_count[34]), {});
        }
        items[1] = tmp14Result2;
        obj2.children = items;
        return closure_1_18(closure_1_9, obj2);
      };
      cResult[1] = arg4;
      cResult[2] = analyticsLocations;
      cResult[3] = arg2;
      cResult[4] = arg1;
      cResult[5] = burst_count.burst_count;
      cResult[6] = burst_count.emoji;
      cResult[7] = reactionToProfileEnabled;
      cResult[8] = arg0;
      cResult[9] = tmp3.avatar;
      cResult[10] = tmp3.listRow;
      cResult[11] = fn;
      tmp6 = fn;
    }
  : (arg0, arg1, arg2, arg3, arg4) => {
      closure_0 = arg0;
      importDefault = arg1;
      closure_2 = arg2;
      dependencyMap = arg3;
      closure_4 = arg4;
      const tmp = closure_21();
      noop = tmp;
      const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      const reactionToProfileEnabled = ReactionToProfileExperimentDefault.useConfig({
        location: "MessageReactionsContent",
      }).reactionToProfileEnabled;
      let items = [arg0, arg2, arg4, arg1, arg3, tmp, analyticsLocations, reactionToProfileEnabled];
      return noop.useCallback((arg0, arg1) => {
        user = user[arg1];
        const id = user.id;
        const diff = user.length - 1;
        channel = channel.getChannel(NORMAL);
        let guildId = null;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        let nickname = messageId(burst_count[25]).getNickname(guildId, NORMAL, user);
        if (nickname == null) {
          nickname = messageId(burst_count[26]).getGlobalName(user);
          const tmp4Result = messageId(burst_count[26]);
        }
        member = null;
        if (null != guildId) {
          member = member.getMember(guildId, id);
        }
        if (burst_count.burst_count > 0) {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.BURST;
          let tmp10 = closure_0;
        } else {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.NORMAL;
          tmp10 = closure_0;
        }
        let obj2 = { style: closure_5.listRow, children: null };
        const obj3 = messageId(burst_count[25]);
        const obj4 = { style: closure_5.avatar, size: tmp10(burst_count[29]).AvatarSizes.SMALL, source: null };
        const avatarSource = user.getAvatarSource(guildId);
        let guildMemberAvatarSource = avatarSource;
        if (null != guildId) {
          let avatar;
          if (member != null) {
            avatar = member.avatar;
          }
          guildMemberAvatarSource = avatarSource;
          if (null != avatar) {
            guildMemberAvatarSource = messageId(burst_count[30]).getGuildMemberAvatarSource(member, user);
            const tmp4Result4 = messageId(burst_count[30]);
          }
        }
        const obj5 = {
          leading: closure_1_17(tmp10(burst_count[29]).Avatar, obj4),
          label: closure_1_17(messageId(burst_count[31]), { user, nick: nickname }),
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
                  emoji: emoji.emoji,
                  location: ReactionActionCreators.ReactionLocations.MESSAGE,
                  userId: obj.id,
                  options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
                };
                return obj.removeReaction(obj2);
              },
              children: closure_1_17(tmp10(burst_count[33]).XSmallIcon, {}),
            };
            tmp14Result = closure_1_17(reactionToProfileEnabled, obj6);
          }
          tmp10Result = tmp10(burst_count[32]);
        }
        function openProfile() {
          localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(localUser, "stack");
        }
        obj5.trailing = tmp14Result;
        let tmp21;
        if (reactionToProfileEnabled) {
          tmp21 = openProfile;
        }
        obj5.onPress = tmp21;
        obj5.onLongPress = openProfile;
        const items = [closure_1_17(messageId(burst_count[28]), obj5)];
        let tmp14Result2 = null;
        if (arg1 !== diff) {
          tmp14Result2 = closure_1_17(messageId(burst_count[34]), {});
        }
        items[1] = tmp14Result2;
        obj2.children = items;
        return closure_1_18(closure_1_9, obj2);
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, burst_count, arg3) => {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = arg3;
      const cResult = require("c").c(7);
      const tmp2 = closure_21();
      const buttonRow = tmp2;
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          if (cResult[2] === burst_count.burst_count) {
            if (cResult[3] === burst_count.emoji) {
              if (cResult[4] === arg3) {
                if (cResult[5] === tmp2.buttonRow) {
                  let tmp3 = cResult[6];
                }
                return tmp3;
              }
            }
          }
        }
      }
      const fn = function l(arg0, arg1) {
        const channelId = dependencyMap[arg1];
        if (burst_count.burst_count > 0) {
          let NORMAL = channelId(7259).ReactionTypes.BURST;
        } else {
          NORMAL = channelId(7259).ReactionTypes.NORMAL;
        }
        let obj = { style: buttonRow.buttonRow, children: null };
        let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: null };
        const intl = channelId(1126).intl;
        obj2.title = intl.string(channelId(1126).t.N86XcP);
        obj2.IconComponent = channelId(6017).XSmallIcon;
        obj2.color = messageId(587).unsafe_rawColors.RED_400;
        obj2.onPress = function onPress() {
          const obj2 = {
            channelId,
            messageId,
            emoji: emoji.emoji,
            location: ReactionActionCreators.ReactionLocations.MESSAGE,
            userId: channelId.id,
            options: null,
          };
          const obj = ReactionActionCreators;
          obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
          return obj.removeReaction(obj2);
        };
        obj2.height = height;
        obj.children = closure_1_17(messageId(9976), obj2);
        return closure_1_17(closure_1_9, obj);
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = burst_count.burst_count;
      cResult[3] = burst_count.emoji;
      cResult[4] = arg3;
      cResult[5] = tmp2.buttonRow;
      cResult[6] = fn;
      tmp3 = fn;
    }
  : (arg0, arg1, arg2, arg3) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const burst_count = arg2;
      dependencyMap = arg3;
      const tmp = closure_21();
      const buttonRow = tmp;
      const items = [arg3, arg0, arg1, arg2, tmp];
      return noop.useCallback((arg0, arg1) => {
        const channelId = dependencyMap[arg1];
        if (burst_count.burst_count > 0) {
          let NORMAL = channelId(7259).ReactionTypes.BURST;
        } else {
          NORMAL = channelId(7259).ReactionTypes.NORMAL;
        }
        let obj = { style: buttonRow.buttonRow, children: null };
        let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: null };
        const intl = channelId(1126).intl;
        obj2.title = intl.string(channelId(1126).t.N86XcP);
        obj2.IconComponent = channelId(6017).XSmallIcon;
        obj2.color = messageId(587).unsafe_rawColors.RED_400;
        obj2.onPress = function onPress() {
          const obj2 = {
            channelId,
            messageId,
            emoji: emoji.emoji,
            location: ReactionActionCreators.ReactionLocations.MESSAGE,
            userId: channelId.id,
            options: null,
          };
          const obj = ReactionActionCreators;
          obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
          return obj.removeReaction(obj2);
        };
        obj2.height = height;
        obj.children = closure_1_17(messageId(9976), obj2);
        return closure_1_17(closure_1_9, obj);
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(43);
      ({ reaction, selected } = arg0);
      const tmp4 = closure_21();
      if (cResult[0] !== reaction.burst_colors) {
        let burst_colors = reaction.burst_colors;
        if (burst_colors == null) {
          burst_colors = [];
        }
        cResult[0] = reaction.burst_colors;
        cResult[1] = burst_colors;
        let tmp6 = burst_colors;
      } else {
        tmp6 = cResult[1];
      }
      const emojiColorPalette = useEmojiColorPalette.useEmojiColorPalette(tmp6);
      if (cResult[2] !== emojiColorPalette) {
        let accentColor;
        if (emojiColorPalette != null) {
          accentColor = emojiColorPalette.accentColor;
        }
        let tmp12 = null;
        if (null != accentColor) {
          const obj2 = { color: emojiColorPalette.accentColor };
          tmp12 = obj2;
        }
        cResult[2] = emojiColorPalette;
        cResult[3] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== emojiColorPalette) {
        let tmp14 = null;
        if (null != emojiColorPalette) {
          const obj3 = {
            backgroundColor: ColorUtils.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity),
          };
          tmp14 = obj3;
          const tmpResult3 = ColorUtils;
        }
        cResult[4] = emojiColorPalette;
        cResult[5] = tmp14;
        let tmp13 = tmp14;
      } else {
        tmp13 = cResult[5];
      }
      const emoji = reaction.emoji;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function y() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[6] = items;
        cResult[7] = fn;
        let tmp16 = fn;
        let tmp15 = items;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult = useEmojiColorPalette;
      const stateFromStores = initialize.useStateFromStores(tmp15, tmp16);
      const AnimateEmoji = UserSettings.AnimateEmoji;
      let setting = !stateFromStores;
      if (!stateFromStores) {
        setting = AnimateEmoji.useSetting();
      }
      if (cResult[8] === emoji.animated) {
        if (cResult[9] === emoji.id) {
          if (cResult[10] === setting) {
            let tmp20 = cResult[11];
          }
          let tabContainerSelected = null;
          if (selected) {
            tabContainerSelected = tmp4.tabContainerSelected;
          }
          let tmp25 = null;
          if (selected) {
            tmp25 = null;
            if (tmp5) {
              tmp25 = tmp13;
            }
          }
          if (cResult[12] === tmp4.tabContainer) {
            if (cResult[13] === tabContainerSelected) {
              if (cResult[14] === tmp25) {
                let tmp26 = cResult[15];
              }
              let name = emoji.id;
              if (name == null) {
                name = emoji.name;
              }
              if (cResult[16] !== selected) {
                const obj4 = { selected };
                cResult[16] = selected;
                cResult[17] = obj4;
                let tmp27 = obj4;
              } else {
                tmp27 = cResult[17];
              }
              if (cResult[18] === tmp4.emoji) {
                if (cResult[19] === tmp4.emojiText) {
                  let tmp28 = cResult[20];
                }
                if (cResult[21] === tmp4.emoji) {
                  if (cResult[22] === tmp4.emojiImage) {
                    let tmp29 = cResult[23];
                  }
                  if (cResult[24] === emoji.name) {
                    if (cResult[25] === tmp20) {
                      if (cResult[26] === tmp28) {
                        if (cResult[27] === tmp29) {
                          let tmp30 = cResult[28];
                        }
                        let prop = null;
                        if (selected) {
                          prop = tmp4.reactionCountTextSelected;
                        }
                        let tmp35 = null;
                        if (tmp5) {
                          tmp35 = tmp9;
                        }
                        if (cResult[29] === tmp4.reactionCountText) {
                          if (cResult[30] === prop) {
                            if (cResult[31] === tmp35) {
                              let tmp36 = cResult[32];
                            }
                            const tmp37 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
                            if (cResult[33] === tmp36) {
                              if (cResult[34] === tmp37) {
                                let tmp38 = cResult[35];
                              }
                              if (cResult[36] === emoji.name) {
                                if (cResult[37] === name) {
                                  if (cResult[38] === tmp27) {
                                    if (cResult[39] === tmp30) {
                                      if (cResult[40] === tmp38) {
                                        if (cResult[41] === tmp26) {
                                          let tmp41 = cResult[42];
                                        }
                                        return tmp41;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj5 = {
                                style: tmp26,
                                accessible: true,
                                accessibilityLabel: emoji.name,
                                accessibilityState: tmp27,
                                children: null,
                              };
                              const items1 = [tmp30, tmp38];
                              obj5.children = items1;
                              const tmp44 = collapsedCategories(options, obj5, name);
                              cResult[36] = emoji.name;
                              cResult[37] = name;
                              cResult[38] = tmp27;
                              cResult[39] = tmp30;
                              cResult[40] = tmp38;
                              cResult[41] = tmp26;
                              cResult[42] = tmp44;
                              tmp41 = tmp44;
                            }
                            const obj6 = { variant: "text-md/bold", style: tmp36, children: tmp37 };
                            const tmp40 = constants(Text_Text.Text, obj6);
                            cResult[33] = tmp36;
                            cResult[34] = tmp37;
                            cResult[35] = tmp40;
                            tmp38 = tmp40;
                          }
                        }
                        const items2 = [tmp4.reactionCountText, prop, tmp35];
                        cResult[29] = tmp4.reactionCountText;
                        cResult[30] = prop;
                        cResult[31] = tmp35;
                        cResult[32] = items2;
                        tmp36 = items2;
                      }
                    }
                  }
                  const obj9 = { src: tmp20, name: emoji.name, textEmojiStyle: tmp28, fastImageStyle: tmp29 };
                  const tmp33 = constants(EmojiDefault, obj9);
                  cResult[24] = emoji.name;
                  cResult[25] = tmp20;
                  cResult[26] = tmp28;
                  cResult[27] = tmp29;
                  cResult[28] = tmp33;
                  tmp30 = tmp33;
                }
                const items3 = [,];
                ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp4);
                cResult[21] = tmp4.emoji;
                cResult[22] = tmp4.emojiImage;
                cResult[23] = items3;
                tmp29 = items3;
              }
              const items4 = [,];
              ({ emoji: arr4[0], emojiText: arr4[1] } = tmp4);
              cResult[18] = tmp4.emoji;
              cResult[19] = tmp4.emojiText;
              cResult[20] = items4;
              tmp28 = items4;
            }
          }
          const items5 = [tmp4.tabContainer, tabContainerSelected, tmp25];
          cResult[12] = tmp4.tabContainer;
          cResult[13] = tabContainerSelected;
          cResult[14] = tmp25;
          cResult[15] = items5;
          tmp26 = items5;
        }
      }
      let emojiURL;
      if (null != emoji.id) {
        const obj10 = { id: null, animated: null, size: 48 };
        ({ id: obj8.id, animated } = emoji);
        if (animated) {
          animated = setting;
        }
        obj10.animated = animated;
        emojiURL = AvatarUtilsDefault.getEmojiURL(obj10);
      }
      cResult[8] = emoji.animated;
      cResult[9] = emoji.id;
      cResult[10] = setting;
      cResult[11] = emojiURL;
      tmp20 = emojiURL;
      const tmpResult4 = initialize;
    }
  : (arg0) => {
      ({ reaction, selected } = arg0);
      const tmp = closure_21();
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
      const items = [AccessibilityStore];
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
      const items4 = [constants(EmojiDefault, obj8)];
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
      items4[1] = constants(Text_Text.Text, {
        variant: "text-md/bold",
        style: items5,
        children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count,
      });
      obj5.children = items4;
      let name = emoji.id;
      if (name == null) {
        name = emoji.name;
      }
      return collapsedCategories(options, obj5, name);
    };
const __initData = {
  code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}",
};
const __initData2 = {
  code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}",
};
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setReactionSelectedIndex) => {
      const cResult = reactionSelectedIndex(576).c(33);
      const tmp4 = closure_21();
      ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
      setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "ReactionTabs" };
        const obj3 = { autoTrackExposure: false };
        cResult[0] = obj2;
        cResult[1] = obj3;
        tmp5 = obj2;
        tmp6 = obj3;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = reactionSelectedIndex(576);
      const tmp7 = setReactionSelectedIndex;
      const tidaWebformEnabled = setReactionSelectedIndex(6687).useExperiment(tmp5, tmp6).tidaWebformEnabled;
      if (cResult[2] === reactionSelectedIndex) {
        if (cResult[3] === reactions) {
          if (cResult[7] !== setReactionSelectedIndex) {
            class T {
              constructor(arg0) {
                obj = closure_0(closure_3[50]);
                result = obj.triggerHapticFeedback(closure_1(closure_3[51]).IMPACT_LIGHT);
                tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
                return;
              }
            }
            cResult[7] = setReactionSelectedIndex;
            cResult[8] = T;
          } else {
            class T {
              constructor(arg0) {
                obj = closure_0(closure_3[50]);
                result = obj.triggerHapticFeedback(closure_1(closure_3[51]).IMPACT_LIGHT);
                tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
                return;
              }
            }
          }
          if (cResult[9] === reactionSelectedIndex) {
            class T {
              constructor(arg0) {
                obj = closure_0(closure_3[50]);
                result = obj.triggerHapticFeedback(closure_1(closure_3[51]).IMPACT_LIGHT);
                tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
                return;
              }
            }
          }
          const obj8 = {
            tabs: cResult[4],
            tabStyle: null,
            tabStyleActive: null,
            tabStyleSelected: null,
            tabIndexSelected: null,
            onSelect: null,
            initialNumTabsToRender: null,
          };
          ({ tab: obj5.tabStyle, tabActive: obj5.tabStyleActive, tabSelected: obj5.tabStyleSelected } = tmp4);
          obj8.tabIndexSelected = reactionSelectedIndex;
          obj8.onSelect = T;
          obj8.initialNumTabsToRender = reactionSelectedIndex(4521).MAX_REACTIONS;
          const tmp15 = closure_17(tmp7(9980), obj8);
          cResult[9] = reactionSelectedIndex;
          cResult[10] = tmp4.tab;
          cResult[11] = tmp4.tabActive;
          cResult[12] = tmp4.tabSelected;
          cResult[13] = cResult[4];
          cResult[14] = T;
          cResult[15] = tmp15;
          const tmp7Result = tmp7(9980);
        }
      }
      if (cResult[5] !== reactionSelectedIndex) {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_3[50]);
            result = obj.triggerHapticFeedback(closure_1(closure_3[51]).IMPACT_LIGHT);
            tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
            return;
          }
        }
        cResult[5] = reactionSelectedIndex;
        cResult[6] = R;
      } else {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_3[50]);
            result = obj.triggerHapticFeedback(closure_1(closure_3[51]).IMPACT_LIGHT);
            tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
            return;
          }
        }
      }
      const mapped = reactions.map(R);
      cResult[2] = reactionSelectedIndex;
      cResult[3] = reactions;
      cResult[4] = mapped;
      const obj4 = setReactionSelectedIndex(6687);
    }
  : (setReactionSelectedIndex) => {
      const tmp = closure_21();
      ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
      setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
      const obj2 = { style: tmp.reactionTab, children: null };
      const obj4 = {
        tabs: null,
        tabStyle: null,
        tabStyleActive: null,
        tabStyleSelected: null,
        tabIndexSelected: null,
        onSelect: null,
        initialNumTabsToRender: null,
      };
      const obj = setReactionSelectedIndex(6687);
      obj4.tabs = reactions.map((reaction, index) => {
        let str = reaction.emoji.id;
        if (str == null) {
          str = "";
        }
        return constants(
          closure_29,
          { reaction, selected: index === reactionSelectedIndex },
          "" + str + ":" + reaction.emoji.name,
        );
      });
      ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
      obj4.tabIndexSelected = reactionSelectedIndex;
      obj4.onSelect = function onSelect(arg0) {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        setReactionSelectedIndex(arg0);
      };
      obj4.initialNumTabsToRender = reactionSelectedIndex(4521).MAX_REACTIONS;
      const items = [
        closure_17(setReactionSelectedIndex(9980), obj4),
        closure_17(setReactionSelectedIndex(8899), { outer: true }),
      ];
      const obj5 = { style: tmp.removeButtonContainer, children: null };
      const obj7 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: null };
      const tmp5 = setReactionSelectedIndex(9980);
      obj7.children = reactionSelectedIndex(4521).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
      const items1 = [closure_17(reactionSelectedIndex(4886).Text, obj7)];
      const obj12 = {};
      const obj6 = reactionSelectedIndex(4521);
      const merged = Object.assign(setReactionSelectedIndex);
      items1[1] = closure_17(
        obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled
          ? EmojiOptionsButton
          : RemoveAllButton,
        obj12,
      );
      obj5.children = items1;
      items[2] = closure_18(closure_9, obj5);
      obj2.children = items;
      return closure_18(closure_9, obj2);
    };
fn(558);
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let obj12 = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let Storage = fn(510).Storage;
let closure_36 = Storage.get("MessageReactionsContent_SwipableBounced", false);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(10);
      const tmp4 = closure_21();
      const tmp5 = useSafeAreaInsetsDefault();
      const noResultsSource = generated_NoResults.useNoResultsSource();
      const sum = 338 + tmp5.bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.HmPOrp);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["pTJ5J/"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp8 = stringResult;
        tmp9 = stringResult1;
      } else {
        [tmp8, tmp9] = cResult;
      }
      if (cResult[2] !== noResultsSource) {
        const obj3 = { source: noResultsSource, title: tmp8, body: tmp9 };
        const tmp14 = constants(native.RefreshEmptyState, obj3);
        cResult[2] = noResultsSource;
        cResult[3] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp4.containerEmpty) {
        if (cResult[5] === tmp12) {
          let tmp15 = cResult[6];
        }
        if (cResult[7] === sum) {
          if (cResult[8] === tmp15) {
            let tmp17 = cResult[9];
          }
          return tmp17;
        }
        const obj4 = { scrollable: true, startHeight: sum, children: tmp15 };
        const tmp19 = constants(Sheet_BottomSheet.BottomSheet, obj4);
        cResult[7] = sum;
        cResult[8] = tmp15;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      }
      const tmp16 = constants(BottomSheetModal.BottomSheetView, { style: tmp4.containerEmpty, children: tmp12 });
      cResult[4] = tmp4.containerEmpty;
      cResult[5] = tmp12;
      cResult[6] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      const tmp = closure_21();
      const tmp2 = useSafeAreaInsetsDefault();
      const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: null };
      const obj3 = { style: tmp.containerEmpty, children: null };
      const obj4 = { source: generated_NoResults.useNoResultsSource(), title: null, body: null };
      const intl = util.intl;
      obj4.title = intl.string(util.t.HmPOrp);
      const intl2 = util.intl;
      obj4.body = intl2.string(util.t["pTJ5J/"]);
      obj3.children = constants(native.RefreshEmptyState, obj4);
      obj2.children = constants(BottomSheetModal.BottomSheetView, obj3);
      return constants(Sheet_BottomSheet.BottomSheet, obj2);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export const useReactors = tmp5;
export const useReactorsOnScrollNative = tmp6;
export const MessageReactionsEmpty = tmp7;
export const MessageReactionsContent = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(NORMAL[15]).c(56);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ emoji, reactions, isSelectedBurst, disableManage, disableTabs } = channelId);
      closure_21();
      if (cResult[0] === emoji) {
        if (cResult[1] === isSelectedBurst) {
          if (cResult[2] === reactions) {
            let tmp6 = cResult[3];
          }
          const tmp8 = closure_23(tmp6);
          const reactionSelected = tmp8.reactionSelected;
          ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp8);
          if (null != reactionSelected.me_vote) {
            NORMAL = tmp(tmp2[19]).ReactionTypes.VOTE;
          } else if (reactionSelected.burst_count > 0) {
            NORMAL = tmp(tmp2[19]).ReactionTypes.BURST;
          } else {
            NORMAL = tmp(tmp2[19]).ReactionTypes.NORMAL;
          }
          if (cResult[4] === channelId) {
            if (cResult[5] === messageId) {
              if (cResult[6] === reactionSelected) {
                if (cResult[7] === NORMAL) {
                  let tmp10 = cResult[8];
                }
                ({ reactors, reactorsHasMore } = closure_24(tmp10));
                const _Symbol = Symbol;
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  const items = [ChannelStore];
                  cResult[9] = items;
                  let tmp14 = items;
                } else {
                  tmp14 = cResult[9];
                }
                if (cResult[10] !== channelId) {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                  const items1 = [channelId];
                  cResult[10] = channelId;
                  cResult[11] = G;
                  cResult[12] = items1;
                  let tmp17 = items1;
                } else {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                  tmp17 = cResult[12];
                }
                const tmp12 = closure_24(tmp10);
                const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp14, G, tmp17);
                const tmpResult = tmp(tmp2[16]);
                const isActiveChannelOrUnarchivableThread = tmp(tmp2[58]).useIsActiveChannelOrUnarchivableThread(
                  stateFromStores,
                );
                messageId(tmp2[53])();
                closure_22(channelId) && !tmp4 && isActiveChannelOrUnarchivableThread;
                if (reactionSelected.emoji.id == null) {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                  const stringResult = obj6.string(tmp(tmp2[36]).t.gHp0C4);
                  cResult[13] = stringResult;
                } else {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                }
                if (cResult[14] === channelId) {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                }
                let obj2 = { channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL };
                cResult[14] = channelId;
                cResult[15] = messageId;
                cResult[16] = reactionSelected;
                cResult[17] = NORMAL;
                cResult[18] = reactors;
                cResult[19] = reactorsHasMore;
                cResult[20] = obj2;
                const tmpResult2 = tmp(tmp2[58]);
              }
            }
          }
          const obj3 = { channelId, messageId, reaction: reactionSelected, reactionType: NORMAL };
          cResult[4] = channelId;
          cResult[5] = messageId;
          cResult[6] = reactionSelected;
          cResult[7] = NORMAL;
          cResult[8] = obj3;
          tmp10 = obj3;
        }
      }
      const obj4 = { reactions, emoji, isSelectedBurst };
      cResult[0] = emoji;
      cResult[1] = isSelectedBurst;
      cResult[2] = reactions;
      cResult[3] = obj4;
      tmp6 = obj4;
      let obj = channelId(NORMAL[15]);
      tmp4 = undefined !== disableManage && disableManage;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      ({ messageId, reactions, disableManage } = channelId);
      ({ emoji, isSelectedBurst } = channelId);
      if (disableManage === undefined) {
        disableManage = false;
      }
      let flag = channelId.disableTabs;
      if (flag === undefined) {
        flag = false;
      }
      const tmp2 = closure_23({ reactions, emoji, isSelectedBurst });
      const reactionSelected = tmp2.reactionSelected;
      ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp2);
      if (null != reactionSelected.me_vote) {
        let NORMAL = channelId(7259).ReactionTypes.VOTE;
        let tmp5 = channelId;
      } else if (reactionSelected.burst_count > 0) {
        NORMAL = channelId(7259).ReactionTypes.BURST;
        tmp5 = channelId;
      } else {
        NORMAL = channelId(7259).ReactionTypes.NORMAL;
        tmp5 = channelId;
      }
      const tmp = closure_21();
      ({ reactors, reactorsHasMore } = closure_24({
        channelId,
        messageId,
        reaction: reactionSelected,
        reactionType: NORMAL,
      }));
      const tmp10 = closure_24({ channelId, messageId, reaction: reactionSelected, reactionType: NORMAL });
      const items = [ChannelStore];
      const items1 = [channelId];
      const stateFromStores = tmp5(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      const tmp5Result = tmp5(504);
      const isActiveChannelOrUnarchivableThread = tmp5(6772).useIsActiveChannelOrUnarchivableThread(stateFromStores);
      const tmp5Result3 = tmp5(6772);
      let tmp15 = closure_22(channelId);
      if (tmp15) {
        tmp15 = !disableManage;
      }
      if (tmp15) {
        tmp15 = isActiveChannelOrUnarchivableThread;
      }
      let name = reactionSelected.emoji.id;
      if (name == null) {
        name = reactionSelected.emoji.name;
      }
      const obj = {
        accessibilityLabel: null,
        footerSize: null,
        insetBottom: null,
        onScroll: null,
        renderFooter: null,
        renderItem: null,
        renderQuickActions: null,
        itemSize: null,
        sections: null,
        style: null,
      };
      const intl = tmp5(1126).intl;
      obj.accessibilityLabel = intl.string(tmp5(1126).t.gHp0C4);
      obj.footerSize = v48;
      obj.insetBottom = useSafeAreaInsetsDefault().bottom;
      obj.onScroll = closure_25({
        channelId,
        messageId,
        reactionSelected,
        reactors,
        reactorsHasMore,
        reactionType: NORMAL,
      });
      obj.renderFooter = closure_26(reactors, reactorsHasMore);
      obj.renderItem = closure_27(reactors, messageId, channelId, reactionSelected, tmp15);
      obj.renderQuickActions = closure_28(channelId, messageId, reactionSelected, reactors);
      obj.itemSize = v48;
      const items2 = [reactors.length];
      obj.sections = items2;
      obj.style = tmp.container;
      const callback = noop.useCallback(() => {
        c36 = true;
        const Storage = channelId(dependencyMap[57]).Storage;
        const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
      }, []);
      const tmp14 = useSafeAreaInsetsDefault();
      const tmp5Result4 = tmp5(1369);
      const obj2 = {
        scrollable: true,
        backdropOpacity: tmp5(7412).BACKDROP_OPACITY,
        backdropChildren: null,
        header: null,
        children: null,
      };
      let tmp18Result = null;
      if (NORMAL === tmp5(7259).ReactionTypes.BURST) {
        const obj3 = { style: closure_8.absoluteFill, pointerEvents: "none", children: null };
        const obj4 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
        obj3.children = closure_17(BurstReactionAnimationPreviewDefault, obj4);
        tmp18Result = closure_17(closure_9, obj3);
      }
      obj2.backdropChildren = tmp18Result;
      let tmp18Result3 = null;
      if (true !== flag) {
        const obj5 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
        tmp18Result3 = closure_17(closure_34, obj5);
      }
      obj2.header = tmp18Result3;
      if (tmp17) {
        const obj6 = { inActionSheet: true, bounceFirstRowOnMount: !c36, onBounceSwipable: callback };
        const merged = Object.assign(obj);
        let tmp18Result4 = closure_17(SwipeableFastListDefault, obj6, name);
        const tmp13Result = SwipeableFastListDefault;
      } else {
        const obj7 = { inActionSheet: true };
        const merged1 = Object.assign(obj);
        tmp18Result4 = closure_17(FastListDefault, obj7, name);
        const tmp13Result2 = FastListDefault;
      }
      obj2.children = tmp18Result4;
      return closure_17(tmp5(6645).BottomSheet, obj2);
    };
