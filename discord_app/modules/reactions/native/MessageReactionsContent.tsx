// discord_app/modules/reactions/native/MessageReactionsContent.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import BottomSheetModal from "../../../../_runtime/06119_BottomSheetModal.js";
import FastListDefault from "../../../lib/native/FastList.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import MessageReactionsTypes from "../../messages/MessageReactionsTypes.tsx";
import ReactionActionCreators from "../ReactionActionCreators.tsx";
import BurstReactionAnimationPreviewDefault from "../../messages/native/burst_reactions/BurstReactionAnimationPreview.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import useEmojiColorPalette2 from "../../emojis/hooks/useEmojiColorPalette.tsx";
import SwipeableFastListDefault from "../../../components_native/common/SwipeableFastList.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import MessageReactionsStore from "../../../stores/MessageReactionsStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReactionActionCreatorsAll = ReactionActionCreators;
let BottomSheet, _require, c36, channel, dependencyMap, importDefault, member, set;

let Platform;
let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp4;
const ReactionToProfileExperimentDefault = tmp4(9988);
function RemoveAllButton(channelId) {
  let View;
  let _undefined;
  let c5;
  let c6;
  let intl;
  let items4;
  let items5;
  let obj9;
  let reactionSelectedIndex;
  let require;
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  react = undefined;
  c6 = undefined;
  let callback;
  const tmp = closure_21();
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  const tmp6 = reactionSelectedIndex(messageId[41])(stateFromStores);
  [c5, c6] = useReducedMotion(react.useState(true), 2);
  useReducedMotion(react.useState(true), 2);
  let obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(64);
  const fn = function h() {
    let withTimingResult;
    if (useReducedMotion) {
      withTimingResult = sharedValue.get();
    } else {
      const obj = timing;
      withTimingResult = obj.withTiming(sharedValue.get(), { duration: 200 });
    }
    return { maxWidth: withTimingResult };
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  fn.__workletHash = 16499689496895;
  fn.__initData = __initData;
  ({ useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = require("ReanimatedRexport");
  const sharedValue1 = obj5.useSharedValue(0);
  const obj6 = require("ReanimatedRexport");
  class R {
    constructor() {
      let withTimingResult;
      if (useReducedMotion) {
        withTimingResult = sharedValue1.get();
      } else {
        const obj = timing;
        withTimingResult = obj.withTiming(sharedValue1.get(), { duration: 125 });
      }
      return { opacity: withTimingResult, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  R.__closure = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  R.__workletHash = 8698187840986;
  R.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  ({ useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming });
  const animatedStyle1 = obj6.useAnimatedStyle(R);
  callback = react.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = react.useEffect(() => {
    callback();
  }, items3);
  let tmp14 = null;
  if (tmp6) {
    const obj8 = {
      onPress() {
        if (c5) {
          _undefined(false);
          set = sharedValue.set;
          const obj2 = useWindowDimensions;
          const result = set(obj2.getWindowDimensions().width);
          const result1 = sharedValue1.set(1);
        } else {
          const obj = ReactionActionCreatorsAll;
          obj.removeEmojiReactions(channelId, messageId, _require[reactionSelectedIndex].emoji);
          callback();
        }
      },
      children: closure_18(View, obj9),
    };
    obj9 = { style: items4, children: items5 };
    items4 = [tmp.removeAllButton, animatedStyle];
    View = reactionSelectedIndex(tmp3[10]).View;
    const obj10 = { color: reactionSelectedIndex(messageId[13]).unsafe_rawColors.WHITE, size: "sm" };
    const TrashIcon = require("TrashIcon").TrashIcon;
    items5 = [closure_17(TrashIcon, obj10)];
    const obj11 = {
      style: animatedStyle1,
      variant: "text-sm/semibold",
      color: "text-overlay-light",
      children: intl.string(require("intl").t["zx/e4P"]),
    };
    intl = require("intl").intl;
    items5[1] = closure_17(closure_19, obj11);
    tmp14 = closure_17(sharedValue, obj8);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  let intl;
  let items3;
  let reaction;
  let reactionSelectedIndex;
  let reactions;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  const tmp = closure_21();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(9991)(stateFromStores);
  const canRemoveReactions = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  let obj2 = {
    onPress: react.useCallback(() => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channelId, messageId, reaction, canRemoveReactions };
      obj.openLazy(asyncRequire(9992, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", obj2, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: items3,
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: intl.string(channelId(1126).t.pCaYID) };
  const Text = channelId(4892).Text;
  intl = channelId(1126).intl;
  items3 = [closure_17(Text, obj3)];
  const obj4 = { color: messageId(587).colors.ICON_SUBTLE, size: "xs" };
  const ChevronSmallRightIcon = channelId(6715).ChevronSmallRightIcon;
  items3[1] = closure_17(ChevronSmallRightIcon, obj4);
  return closure_18(closure_7, obj2);
}
let react = react_mod;
({
  ActivityIndicator: metroRequire,
  Platform,
  Pressable: metroImportDefault,
  StyleSheet: metroImportAll,
  View: c9,
} = react_native);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let c20 = 48;
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1 },
  containerEmpty: obj2,
  listRow: obj3,
  tabContainer: obj4,
  tabContainerSelected: obj5,
  tab: { padding: 0, marginHorizontal: 8, marginBottom: 8 },
  tabSelected: { borderBottomColor: "transparent" },
  tabActive: obj6,
  reactionTab: { display: "flex", flexDirection: "column" },
  removeButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emojiOptionsButton: obj7,
  removeAllButton: obj8,
  reactionCountText: obj9,
  reactionCountTextSelected: obj10,
  emoji: { marginRight: 8 },
  emojiText: obj11,
  emojiImage: { resizeMode: "contain", width: 24, height: 24 },
  emojiTextIdentifier: { padding: 16 },
  avatar: { marginRight: 10 },
  buttonRow: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" },
  loadingSpinner: { height: 48, padding: 6 },
};
obj2 = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
obj5 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj6 = { borderRadius: nativeDefault.radii.sm };
obj7 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj8 = {
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
obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj11 = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_21 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      let tmp7;
      _require = channelId;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          const obj = { channelId };
          return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, obj);
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (channelId) => {
      _require = channelId;
      let obj = require("get initialized");
      const items = [PermissionStore];
      const items1 = [channelId];
      return obj.useStateFromStores(
        items,
        () => {
          const obj = { channelId };
          return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, obj);
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reactions) => {
      let obj = reactions(576);
      const cResult = obj.c(7);
      reactions = reactions.reactions;
      const emoji = reactions.emoji;
      const isSelectedBurst = reactions.isSelectedBurst;
      let tmp2 = undefined !== isSelectedBurst && isSelectedBurst;
      let closure_2 = tmp2;
      if (cResult[0] === emoji) {
        if (cResult[1] === tmp2) {
          let tmp3;
          if (cResult[2] === reactions) {
            tmp3 = cResult[3];
          }
          let num = 2;
          const tmp6 = _slicedToArray(react.useState(tmp3), 2);
          const _Math = Math;
          const tmp7 = tmp6[1];
          const bound = Math.min(tmp6[0], reactions.length - 1);
          if (cResult[4] === reactions[bound]) {
            let tmp11;
            if (cResult[5] === bound) {
              tmp11 = cResult[6];
            }
            return tmp11;
          }
          const obj2 = {
            reactionSelected: reactions[bound],
            reactionSelectedIndex: bound,
            setReactionSelectedIndex: tmp7,
          };
          cResult[4] = reactions[bound];
          cResult[5] = bound;
          cResult[6] = obj2;
          tmp11 = obj2;
        }
      }
      const fn = function c() {
        if (null == emoji) {
          return 0;
        } else {
          const findIndexResult = reactions.findIndex((emoji) => {
            let tmp4;
            const obj = reactions(dependencyMap[17]);
            const emojiEqualsResult = obj.emojiEquals(emoji.emoji, emoji);
            let num = emoji.burst_count;
            if (num == null) {
              num = 0;
            }
            let tmp2 = num > 0;
            if (closure_1_2) {
              if (tmp2) {
                tmp2 = emojiEqualsResult;
              }
              tmp4 = tmp2;
            } else {
              tmp4 = !tmp2 && emojiEqualsResult;
            }
            return tmp4;
          });
          let num = 0;
          if (findIndexResult >= 0) {
            num = findIndexResult;
          }
          return num;
        }
      };
      cResult[0] = emoji;
      cResult[1] = tmp2;
      cResult[2] = reactions;
      cResult[3] = fn;
      tmp3 = fn;
    }
  : (reactions) => {
      let isSelectedBurst;
      reactions = reactions.reactions;
      ({ emoji: importDefault, isSelectedBurst } = reactions);
      if (isSelectedBurst === undefined) {
        isSelectedBurst = false;
      }
      const tmp = _slicedToArray(
        react.useState(() => {
          if (null == importDefault) {
            return 0;
          } else {
            const findIndexResult = reactions.findIndex((emoji) => {
              let tmp4;
              const obj = reactions(dependencyMap[17]);
              const emojiEqualsResult = obj.emojiEquals(emoji.emoji, closure_1_1);
              let num = emoji.burst_count;
              if (num == null) {
                num = 0;
              }
              let tmp2 = num > 0;
              if (isSelectedBurst) {
                if (tmp2) {
                  tmp2 = emojiEqualsResult;
                }
                tmp4 = tmp2;
              } else {
                tmp4 = !tmp2 && emojiEqualsResult;
              }
              return tmp4;
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
      let tmp2 = tmp[1];
      const bound = Math.min(tmp[0], reactions.length - 1);
      let obj = { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp2 };
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let reactionType;
      const obj = channelId(reactionType[15]);
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reaction = channelId.reaction;
      reactionType = channelId.reactionType;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [MessageReactionsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === messageId) {
          if (cResult[3] === reaction.emoji) {
            let tmp6;
            let tmp7;
            let tmp13;
            if (cResult[4] === reactionType) {
              tmp6 = cResult[5];
              tmp7 = cResult[6];
            }
            const tmpResult = channelId(reactionType[16]);
            const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7, messageId(tmp2[18]));
            if (reactionType === channelId(reactionType[19]).ReactionTypes.VOTE) {
              const count_details = reaction.count_details;
              let num2;
              if (count_details != null) {
                num2 = count_details.vote;
              }
              if (num2 == null) {
                num2 = 0;
              }
              tmp13 = num2;
            } else {
              tmp13 = reactionType === tmp(tmp2[19]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
            }
            if (cResult[7] === stateFromStores) {
              let tmp16;
              if (cResult[8] === tmp13 > stateFromStores.length) {
                tmp16 = cResult[9];
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
        const reactions = MessageReactionsStore.getReactions(
          channelId,
          messageId,
          reaction.emoji,
          closure_15,
          reactionType,
        );
        let items;
        const _Array = Array;
        if (reactions != null) {
          items = reactions.values();
        }
        if (items == null) {
          items = [];
        }
        return from(items);
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
    }
  : (channelId) => {
      let tmp3;
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reaction = channelId.reaction;
      const reactionType = channelId.reactionType;
      let items = [MessageReactionsStore];
      const items1 = [channelId, messageId, reaction.emoji, reactionType];
      const obj = channelId(reactionType[16]);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const reactions = MessageReactionsStore.getReactions(
            channelId,
            messageId,
            reaction.emoji,
            closure_15,
            reactionType,
          );
          let items;
          const _Array = Array;
          if (reactions != null) {
            items = reactions.values();
          }
          if (items == null) {
            items = [];
          }
          return from(items);
        },
        items1,
        messageId(reactionType[18]),
      );
      const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp3 > stateFromStores.length };
      const tmp = channelId;
      const tmp2 = reactionType;
      if (reactionType === channelId(reactionType[19]).ReactionTypes.VOTE) {
        const count_details = reaction.count_details;
        let num;
        if (count_details != null) {
          num = count_details.vote;
        }
        if (num == null) {
          num = 0;
        }
        tmp3 = num;
      } else {
        tmp3 = reactionType === tmp(tmp2[19]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
      }
      return obj2;
    };
let closure_24 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let reactors;
      let reactorsHasMore;
      let ref;
      let obj = channelId(reactorsHasMore[15]);
      const cResult = obj.c(13);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reactionSelected = channelId.reactionSelected;
      ({ reactors, reactorsHasMore } = channelId);
      const reactionType = channelId.reactionType;
      let obj2 = react;
      react = react.useRef(false);
      let id = null;
      if (reactors.length > 0) {
        id = reactors[reactors.length - 1].id;
      }
      if (cResult[0] === channelId) {
        if (cResult[1] === messageId) {
          if (cResult[2] === reactionSelected) {
            if (cResult[3] === reactionType) {
              if (cResult[4] === id) {
                let tmp4;
                let tmp7;
                if (cResult[5] === reactorsHasMore) {
                  tmp4 = cResult[6];
                }
                current = tmp4;
                let closure_8 = obj2.useRef(tmp4);
                if (cResult[7] !== tmp4) {
                  class I {
                    constructor() {
                      closure_8.current = current;
                    }
                  }
                  const items = [tmp4];
                  cResult[7] = tmp4;
                  cResult[8] = I;
                  cResult[9] = items;
                  tmp7 = items;
                } else {
                  class I {
                    constructor() {
                      closure_8.current = current;
                    }
                  }
                  tmp7 = cResult[9];
                }
                const effect = obj2.useEffect(I, tmp7);
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  class I {
                    constructor() {
                      closure_8.current = current;
                    }
                  }
                  cResult[10] = tmp11;
                } else {
                  class I {
                    constructor() {
                      closure_8.current = current;
                    }
                  }
                }
                const tmp13 = messageId(reactorsHasMore[22])(tmp11);
                let closure_9 = tmp13;
                const tmp12 = messageId;
                if (cResult[11] !== tmp13) {
                  class I {
                    constructor() {
                      closure_8.current = current;
                    }
                  }
                  cResult[11] = tmp13;
                  cResult[12] = tmp15;
                } else {
                  class I {
                    constructor() {
                      closure_8.current = current;
                    }
                  }
                }
                return tmp12(reactorsHasMore[22])(tmp15);
              }
            }
          }
        }
      }
      const fn = function o(arg0, arg1) {
        const tmp = arg0 / arg1 > 0.75 && reactorsHasMore && !ref.current;
        if (tmp) {
          ref.current = true;
          const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
          const obj = ReactionActionCreatorsAll;
          const reactors = obj.getReactors(obj2);
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
    }
  : (channelId) => {
      let reactors;
      let reactorsHasMore;
      let ref;
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      const reactionSelected = channelId.reactionSelected;
      ({ reactors, reactorsHasMore } = channelId);
      const reactionType = channelId.reactionType;
      react = undefined;
      current = undefined;
      let closure_8;
      let closure_9;
      let obj = react;
      react = react.useRef(false);
      let id = null;
      if (reactors.length > 0) {
        id = reactors[reactors.length - 1].id;
      }
      const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
      current = obj.useCallback((arg0, arg1) => {
        const tmp = arg0 / arg1 > 0.75 && reactorsHasMore && !ref.current;
        if (tmp) {
          ref.current = true;
          const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
          const obj = ReactionActionCreatorsAll;
          const reactors = obj.getReactors(obj2);
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
      closure_9 = messageId(reactorsHasMore[22])(() => {
        const obj = _modDef12;
        return obj.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16);
      });
      return messageId(reactorsHasMore[22])(() => (nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
      });
    };
let closure_25 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let length;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp2 = closure_21();
      const loadingSpinner = tmp2;
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          let tmp3;
          if (cResult[2] === tmp2) {
            tmp3 = cResult[3];
          }
          return tmp3;
        }
      }
      const fn = function o() {
        let tmp3;
        if (closure_1) {
          const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
          tmp3 = closure_17(metroRequire, obj);
        } else {
          tmp3 = null;
        }
        return tmp3;
      };
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = tmp2;
      cResult[3] = fn;
      tmp3 = fn;
    }
  : (arg0, arg1) => {
      let length;
      let closure_1 = arg1;
      const tmp = closure_21();
      const loadingSpinner = tmp;
      const items = [arg0, arg1, tmp];
      return react.useCallback(() => {
        let tmp3;
        if (closure_1) {
          const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
          tmp3 = closure_17(metroRequire, obj);
        } else {
          tmp3 = null;
        }
        return tmp3;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, burst_count, arg4) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      importDefault = arg1;
      let closure_2 = arg2;
      dependencyMap = burst_count;
      let closure_4 = arg4;
      let tmp = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(12);
      const tmp3 = closure_21();
      let closure_5 = tmp3;
      const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "MessageReactionsContent" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      let tmp4Result = ReactionToProfileExperimentDefault;
      const reactionToProfileEnabled = tmp4Result.useConfig(first).reactionToProfileEnabled;
      if (cResult[1] === arg4) {
        if (cResult[2] === analyticsLocations) {
          if (cResult[3] === arg2) {
            if (cResult[4] === arg1) {
              if (cResult[5] === burst_count.burst_count) {
                if (cResult[6] === burst_count.emoji) {
                  if (cResult[7] === reactionToProfileEnabled) {
                    if (cResult[8] === arg0) {
                      if (cResult[9] === tmp3.avatar) {
                        let tmp6;
                        if (cResult[10] === tmp3.listRow) {
                          tmp6 = cResult[11];
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
        let NORMAL;
        let channelId;
        let emoji;
        let guildMemberAvatarSource;
        let items;
        let openProfile;
        let tmp10;
        let tmp14Result;
        let tmp21;
        let user;
        user = user[arg1];
        const id = user.id;
        const diff = user.length - 1;
        channel = channel.getChannel(NORMAL);
        let guildId = null;
        const tmp2 = NORMAL;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        const obj3 = messageId(burst_count[25]);
        let nickname = obj3.getNickname(guildId, tmp2, user);
        if (nickname == null) {
          const tmp4Result = messageId(burst_count[26]);
          nickname = tmp4Result.getGlobalName(user);
        }
        member = null;
        if (null != guildId) {
          member = member.getMember(guildId, id);
        }
        if (burst_count.burst_count > 0) {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.BURST;
          tmp10 = closure_0;
        } else {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.NORMAL;
          tmp10 = closure_0;
        }
        const obj2 = { style: closure_5.listRow, children: items };
        const obj4 = {
          style: closure_5.avatar,
          size: tmp10(burst_count[29]).AvatarSizes.SMALL,
          source: guildMemberAvatarSource,
        };
        const tmp4Result3 = messageId(burst_count[28]);
        const Avatar = tmp10(burst_count[29]).Avatar;
        const avatarSource = user.getAvatarSource(guildId);
        guildMemberAvatarSource = avatarSource;
        if (null != guildId) {
          let avatar;
          if (member != null) {
            avatar = member.avatar;
          }
          guildMemberAvatarSource = avatarSource;
          if (null != avatar) {
            const tmp4Result4 = messageId(burst_count[30]);
            guildMemberAvatarSource = tmp4Result4.getGuildMemberAvatarSource(member, user);
          }
        }
        const obj5 = {
          leading: closure_1_17(Avatar, obj4),
          label: closure_1_17(messageId(burst_count[31]), { user, nick: nickname }),
          trailing: tmp14Result,
          onPress: tmp21,
          onLongPress: openProfile,
        };
        tmp14Result = null;
        if (closure_4) {
          tmp14Result = null;
          const tmp10Result = tmp10(burst_count[32]);
          if (tmp10Result.isAndroid()) {
            const obj6 = {
              onPress() {
                const tmp = ReactionActionCreators;
                obj = {
                  channelId,
                  messageId,
                  emoji: emoji.emoji,
                  location: ReactionActionCreators.ReactionLocations.MESSAGE,
                  userId: obj.id,
                  options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
                };
                const removeReaction = tmp.removeReaction;
                ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
                return removeReaction(obj);
              },
              children: closure_1_17(tmp10(burst_count[33]).XSmallIcon, {}),
            };
            tmp14Result = closure_1_17(reactionToProfileEnabled, obj6);
          }
        }
        openProfile = function openProfile() {
          let localUser;
          localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(localUser, "stack");
        };
        tmp21 = undefined;
        if (reactionToProfileEnabled) {
          tmp21 = openProfile;
        }
        items = [closure_1_17(tmp4Result3, obj5)];
        let tmp14Result2 = null;
        if (arg1 !== diff) {
          tmp14Result2 = closure_1_17(messageId(burst_count[34]), {});
        }
        items[1] = tmp14Result2;
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
      let burst_count;
      let closure_1;
      let closure_5;
      let closure_0 = arg0;
      importDefault = arg1;
      let closure_2 = arg2;
      dependencyMap = arg3;
      let closure_4 = arg4;
      let tmp = closure_21();
      react = tmp;
      const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      let obj = ReactionToProfileExperimentDefault;
      const reactionToProfileEnabled = obj.useConfig({ location: "MessageReactionsContent" }).reactionToProfileEnabled;
      let items = [arg0, arg2, arg4, arg1, arg3, tmp, analyticsLocations, reactionToProfileEnabled];
      return react.useCallback((arg0, arg1) => {
        let NORMAL;
        let channelId;
        let emoji;
        let guildMemberAvatarSource;
        let items;
        let openProfile;
        let tmp10;
        let tmp14Result;
        let tmp21;
        let user;
        user = user[arg1];
        const id = user.id;
        const diff = user.length - 1;
        channel = channel.getChannel(NORMAL);
        let guildId = null;
        const tmp2 = NORMAL;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        const obj3 = messageId(burst_count[25]);
        let nickname = obj3.getNickname(guildId, tmp2, user);
        if (nickname == null) {
          const tmp4Result = messageId(burst_count[26]);
          nickname = tmp4Result.getGlobalName(user);
        }
        member = null;
        if (null != guildId) {
          member = member.getMember(guildId, id);
        }
        if (burst_count.burst_count > 0) {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.BURST;
          tmp10 = closure_0;
        } else {
          NORMAL = closure_0(burst_count[19]).ReactionTypes.NORMAL;
          tmp10 = closure_0;
        }
        const obj2 = { style: closure_5.listRow, children: items };
        const obj4 = {
          style: closure_5.avatar,
          size: tmp10(burst_count[29]).AvatarSizes.SMALL,
          source: guildMemberAvatarSource,
        };
        const tmp4Result3 = messageId(burst_count[28]);
        const Avatar = tmp10(burst_count[29]).Avatar;
        const avatarSource = user.getAvatarSource(guildId);
        guildMemberAvatarSource = avatarSource;
        if (null != guildId) {
          let avatar;
          if (member != null) {
            avatar = member.avatar;
          }
          guildMemberAvatarSource = avatarSource;
          if (null != avatar) {
            const tmp4Result4 = messageId(burst_count[30]);
            guildMemberAvatarSource = tmp4Result4.getGuildMemberAvatarSource(member, user);
          }
        }
        const obj5 = {
          leading: closure_1_17(Avatar, obj4),
          label: closure_1_17(messageId(burst_count[31]), { user, nick: nickname }),
          trailing: tmp14Result,
          onPress: tmp21,
          onLongPress: openProfile,
        };
        tmp14Result = null;
        if (closure_4) {
          tmp14Result = null;
          const tmp10Result = tmp10(burst_count[32]);
          if (tmp10Result.isAndroid()) {
            const obj6 = {
              onPress() {
                const tmp = ReactionActionCreators;
                obj = {
                  channelId,
                  messageId,
                  emoji: emoji.emoji,
                  location: ReactionActionCreators.ReactionLocations.MESSAGE,
                  userId: obj.id,
                  options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
                };
                const removeReaction = tmp.removeReaction;
                ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
                return removeReaction(obj);
              },
              children: closure_1_17(tmp10(burst_count[33]).XSmallIcon, {}),
            };
            tmp14Result = closure_1_17(reactionToProfileEnabled, obj6);
          }
        }
        openProfile = function openProfile() {
          let localUser;
          localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(localUser, "stack");
        };
        tmp21 = undefined;
        if (reactionToProfileEnabled) {
          tmp21 = openProfile;
        }
        items = [closure_1_17(tmp4Result3, obj5)];
        let tmp14Result2 = null;
        if (arg1 !== diff) {
          tmp14Result2 = closure_1_17(messageId(burst_count[34]), {});
        }
        items[1] = tmp14Result2;
        return closure_1_18(closure_1_9, obj2);
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, burst_count, arg3) => {
      let closure_0;
      let closure_3;
      let height;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg3;
      let obj = require("react");
      const cResult = obj.c(7);
      const tmp2 = closure_21();
      const buttonRow = tmp2;
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          if (cResult[2] === burst_count.burst_count) {
            if (cResult[3] === burst_count.emoji) {
              if (cResult[4] === arg3) {
                let tmp3;
                if (cResult[5] === tmp2.buttonRow) {
                  tmp3 = cResult[6];
                }
                return tmp3;
              }
            }
          }
        }
      }
      const fn = function l(arg0, arg1) {
        let emoji;
        let intl;
        let obj2;
        let tmp5;
        const channelId = closure_3[arg1];
        if (burst_count.burst_count > 0) {
          let NORMAL = channelId(closure_3[19]).ReactionTypes.BURST;
        } else {
          let tmp = channelId;
          NORMAL = channelId(closure_3[19]).ReactionTypes.NORMAL;
        }
        let obj = { style: buttonRow.buttonRow, children: closure_1_17(tmp5, obj2) };
        obj2 = {
          title: intl.string(channelId(closure_3[36]).t.N86XcP),
          IconComponent: channelId(closure_3[33]).XSmallIcon,
          color: messageId(closure_3[13]).unsafe_rawColors.RED_400,
          onPress() {
            const tmp = ReactionActionCreators;
            const removeReaction = tmp.removeReaction;
            const obj = {
              channelId,
              messageId,
              emoji: emoji.emoji,
              location: ReactionActionCreators.ReactionLocations.MESSAGE,
              userId: channelId.id,
              options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
            };
            ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
            return removeReaction(obj);
          },
          height,
        };
        tmp5 = messageId(closure_3[35]);
        intl = channelId(closure_3[36]).intl;
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
      let height;
      let closure_0 = arg0;
      let closure_1 = arg1;
      const burst_count = arg2;
      let closure_3 = arg3;
      let tmp = closure_21();
      const buttonRow = tmp;
      const items = [arg3, arg0, arg1, arg2, tmp];
      return react.useCallback((arg0, arg1) => {
        let emoji;
        let intl;
        let obj2;
        let tmp5;
        const channelId = closure_3[arg1];
        if (burst_count.burst_count > 0) {
          let NORMAL = channelId(closure_3[19]).ReactionTypes.BURST;
        } else {
          let tmp = channelId;
          NORMAL = channelId(closure_3[19]).ReactionTypes.NORMAL;
        }
        let obj = { style: buttonRow.buttonRow, children: closure_1_17(tmp5, obj2) };
        obj2 = {
          title: intl.string(channelId(closure_3[36]).t.N86XcP),
          IconComponent: channelId(closure_3[33]).XSmallIcon,
          color: messageId(closure_3[13]).unsafe_rawColors.RED_400,
          onPress() {
            const tmp = ReactionActionCreators;
            const removeReaction = tmp.removeReaction;
            const obj = {
              channelId,
              messageId,
              emoji: emoji.emoji,
              location: ReactionActionCreators.ReactionLocations.MESSAGE,
              userId: channelId.id,
              options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST },
            };
            ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
            return removeReaction(obj);
          },
          height,
        };
        tmp5 = messageId(closure_3[35]);
        intl = channelId(closure_3[36]).intl;
        return closure_1_17(closure_1_9, obj);
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let animated;
      let items1;
      let reaction;
      let selected;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp6;
      let tmp9;
      let tmpResult3;
      let useReducedMotion;
      const obj = react2;
      const cResult = obj.c(43);
      ({ reaction, selected } = arg0);
      const tmp4 = closure_21();
      if (cResult[0] !== reaction.burst_colors) {
        let burst_colors = reaction.burst_colors;
        if (burst_colors == null) {
          burst_colors = [];
        }
        cResult[0] = reaction.burst_colors;
        cResult[1] = burst_colors;
        tmp6 = burst_colors;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult = useEmojiColorPalette2;
      const emojiColorPalette = tmpResult.useEmojiColorPalette(tmp6);
      if (cResult[2] !== emojiColorPalette) {
        let accentColor;
        if (emojiColorPalette != null) {
          accentColor = emojiColorPalette.accentColor;
        }
        let tmp12 = null;
        if (null != accentColor) {
          tmp12 = { color: emojiColorPalette.accentColor };
          const obj2 = { color: emojiColorPalette.accentColor };
        }
        cResult[2] = emojiColorPalette;
        cResult[3] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== emojiColorPalette) {
        let tmp14 = null;
        if (null != emojiColorPalette) {
          const obj3 = {
            backgroundColor: tmpResult3.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity),
          };
          tmp14 = obj3;
          tmpResult3 = ColorUtils;
        }
        cResult[4] = emojiColorPalette;
        cResult[5] = tmp14;
        tmp13 = tmp14;
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
        tmp16 = fn;
        tmp15 = items;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult4 = get_initialized;
      const stateFromStores = tmpResult4.useStateFromStores(tmp15, tmp16);
      const AnimateEmoji = UserSettings.AnimateEmoji;
      const tmp19 = !stateFromStores && AnimateEmoji.useSetting();
      if (cResult[8] === emoji.animated) {
        if (cResult[9] === emoji.id) {
          let tmp20;
          if (cResult[10] === tmp19) {
            tmp20 = cResult[11];
          }
          let tabContainerSelected = null;
          if (selected) {
            tabContainerSelected = tmp4.tabContainerSelected;
          }
          let tmp26 = null;
          if (selected) {
            tmp26 = null;
            if (reaction.burst_count > 0) {
              tmp26 = tmp13;
            }
          }
          if (cResult[12] === tmp4.tabContainer) {
            if (cResult[13] === tabContainerSelected) {
              let tmp27;
              let tmp28;
              if (cResult[14] === tmp26) {
                tmp27 = cResult[15];
              }
              let name = emoji.id;
              if (name == null) {
                name = emoji.name;
              }
              if (cResult[16] !== selected) {
                const obj4 = { selected };
                cResult[16] = selected;
                cResult[17] = obj4;
                tmp28 = obj4;
              } else {
                tmp28 = cResult[17];
              }
              if (cResult[18] === tmp4.emoji) {
                let tmp29;
                if (cResult[19] === tmp4.emojiText) {
                  tmp29 = cResult[20];
                }
                if (cResult[21] === tmp4.emoji) {
                  let tmp30;
                  if (cResult[22] === tmp4.emojiImage) {
                    tmp30 = cResult[23];
                  }
                  if (cResult[24] === emoji.name) {
                    if (cResult[25] === tmp20) {
                      if (cResult[26] === tmp29) {
                        let tmp31;
                        if (cResult[27] === tmp30) {
                          tmp31 = cResult[28];
                        }
                        let prop = null;
                        if (selected) {
                          prop = tmp4.reactionCountTextSelected;
                        }
                        let tmp36 = null;
                        if (reaction.burst_count > 0) {
                          tmp36 = tmp9;
                        }
                        if (cResult[29] === tmp4.reactionCountText) {
                          if (cResult[30] === prop) {
                            let tmp37;
                            if (cResult[31] === tmp36) {
                              tmp37 = cResult[32];
                            }
                            const tmp38 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
                            if (cResult[33] === tmp37) {
                              let tmp39;
                              if (cResult[34] === tmp38) {
                                tmp39 = cResult[35];
                              }
                              if (cResult[36] === emoji.name) {
                                if (cResult[37] === name) {
                                  if (cResult[38] === tmp28) {
                                    if (cResult[39] === tmp31) {
                                      if (cResult[40] === tmp39) {
                                        let tmp42;
                                        if (cResult[41] === tmp27) {
                                          tmp42 = cResult[42];
                                        }
                                        return tmp42;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj5 = {
                                style: tmp27,
                                accessible: true,
                                accessibilityLabel: emoji.name,
                                accessibilityState: tmp28,
                                children: items1,
                              };
                              items1 = [tmp31, tmp39];
                              const tmp45 = authStore4(React4, obj5, name);
                              cResult[36] = emoji.name;
                              cResult[37] = name;
                              cResult[38] = tmp28;
                              cResult[39] = tmp31;
                              cResult[40] = tmp39;
                              cResult[41] = tmp27;
                              cResult[42] = tmp45;
                              tmp42 = tmp45;
                            }
                            const obj6 = { variant: "text-md/bold", style: tmp37, children: tmp38 };
                            const tmp41 = closure_17(Text_Text.Text, obj6);
                            cResult[33] = tmp37;
                            cResult[34] = tmp38;
                            cResult[35] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                        const items2 = [tmp4.reactionCountText, prop, tmp36];
                        cResult[29] = tmp4.reactionCountText;
                        cResult[30] = prop;
                        cResult[31] = tmp36;
                        cResult[32] = items2;
                        tmp37 = items2;
                      }
                    }
                  }
                  const obj8 = { src: tmp20, name: emoji.name, textEmojiStyle: tmp29, fastImageStyle: tmp30 };
                  const tmp34 = closure_17(EmojiDefault, obj8);
                  cResult[24] = emoji.name;
                  cResult[25] = tmp20;
                  cResult[26] = tmp29;
                  cResult[27] = tmp30;
                  cResult[28] = tmp34;
                  tmp31 = tmp34;
                }
                const items3 = [,];
                ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp4);
                cResult[21] = tmp4.emoji;
                cResult[22] = tmp4.emojiImage;
                cResult[23] = items3;
                tmp30 = items3;
              }
              const items4 = [,];
              ({ emoji: arr4[0], emojiText: arr4[1] } = tmp4);
              cResult[18] = tmp4.emoji;
              cResult[19] = tmp4.emojiText;
              cResult[20] = items4;
              tmp29 = items4;
            }
          }
          const items5 = [tmp4.tabContainer, tabContainerSelected, tmp26];
          cResult[12] = tmp4.tabContainer;
          cResult[13] = tabContainerSelected;
          cResult[14] = tmp26;
          cResult[15] = items5;
          tmp27 = items5;
        }
      }
      let emojiURL;
      if (null != emoji.id) {
        const obj9 = { id: null, animated, size: 48 };
        ({ id: obj7.id, animated } = emoji);
        const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
        AvatarUtilsDefault;
        if (animated) {
          animated = tmp19;
        }
        emojiURL = getEmojiURL(obj9);
      }
      cResult[8] = emoji.animated;
      cResult[9] = emoji.id;
      cResult[10] = tmp19;
      cResult[11] = emojiURL;
      tmp20 = emojiURL;
    }
  : (arg0) => {
      let animated;
      let items2;
      let items3;
      let items4;
      let reaction;
      let selected;
      let tmp3Result;
      let useReducedMotion;
      ({ reaction, selected } = arg0);
      const tmp = closure_21();
      let burst_colors = reaction.burst_colors;
      const useEmojiColorPalette = useEmojiColorPalette2.useEmojiColorPalette;
      useEmojiColorPalette2;
      if (burst_colors == null) {
        burst_colors = [];
      }
      const emojiColorPalette = useEmojiColorPalette(burst_colors);
      let accentColor;
      if (emojiColorPalette != null) {
        accentColor = emojiColorPalette.accentColor;
      }
      let tmp8 = null;
      if (null != accentColor) {
        tmp8 = { color: emojiColorPalette.accentColor };
        const obj = { color: emojiColorPalette.accentColor };
      }
      let tmp9 = null;
      if (null != emojiColorPalette) {
        const obj2 = {
          backgroundColor: tmp3Result.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity),
        };
        tmp9 = obj2;
        tmp3Result = ColorUtils;
      }
      const emoji = reaction.emoji;
      const items = [AccessibilityStore];
      const tmp3Result2 = get_initialized;
      const stateFromStores = tmp3Result2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const AnimateEmoji = UserSettings.AnimateEmoji;
      let emojiURL;
      if (null != emoji.id) {
        const obj3 = { id: null, animated, size: 48 };
        ({ id: obj5.id, animated } = emoji);
        const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
        AvatarUtilsDefault;
        if (animated) {
          animated = !stateFromStores;
        }
        if (animated) {
          animated = tmp11;
        }
        emojiURL = getEmojiURL(obj3);
      }
      const items1 = [tmp.tabContainer, ,];
      let tabContainerSelected = null;
      if (selected) {
        tabContainerSelected = tmp.tabContainerSelected;
      }
      items1[1] = tabContainerSelected;
      let tmp18 = null;
      if (selected) {
        tmp18 = null;
        if (reaction.burst_count > 0) {
          tmp18 = tmp9;
        }
      }
      const obj4 = {
        style: items1,
        accessible: true,
        accessibilityLabel: emoji.name,
        accessibilityState: { selected },
        children: items4,
      };
      items1[2] = tmp18;
      const obj6 = { src: emojiURL, name: emoji.name, textEmojiStyle: items2, fastImageStyle: items3 };
      items2 = [,];
      ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
      items3 = [,];
      ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
      items4 = [closure_17(EmojiDefault, obj6)];
      const items5 = [tmp.reactionCountText, ,];
      let prop = null;
      const Text = Text_Text.Text;
      if (selected) {
        prop = tmp.reactionCountTextSelected;
      }
      items5[1] = prop;
      let tmp21 = null;
      if (reaction.burst_count > 0) {
        tmp21 = tmp8;
      }
      const obj7 = {
        variant: "text-md/bold",
        style: items5,
        children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count,
      };
      items5[2] = tmp21;
      items4[1] = closure_17(Text, obj7);
      let name = emoji.id;
      if (name == null) {
        name = emoji.name;
      }
      return authStore4(React4, obj4, name);
    };
const __initData = {
  code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}",
};
const __initData2 = {
  code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setReactionSelectedIndex) => {
      let reactionSelectedIndex;
      let reactions;
      let tmp5;
      let tmp6;
      let obj = reactionSelectedIndex(576);
      const cResult = obj.c(33);
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
      const obj4 = setReactionSelectedIndex(6694);
      const tidaWebformEnabled = obj4.useExperiment(tmp5, tmp6).tidaWebformEnabled;
      const tmp7 = setReactionSelectedIndex;
      if (cResult[2] === reactionSelectedIndex) {
        let tmp8;
        if (cResult[3] === reactions) {
          tmp8 = cResult[4];
        }
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
        ({ tab: obj5.tabStyle, tabActive: obj5.tabStyleActive, tabSelected: obj5.tabStyleSelected } = tmp4);
        const obj8 = {
          tabs: tmp8,
          tabStyle: null,
          tabStyleActive: null,
          tabStyleSelected: null,
          tabIndexSelected: reactionSelectedIndex,
          onSelect: T,
          initialNumTabsToRender: reactionSelectedIndex(4527).MAX_REACTIONS,
        };
        const tmp7Result = tmp7(9993);
        cResult[9] = reactionSelectedIndex;
        cResult[10] = tmp4.tab;
        cResult[11] = tmp4.tabActive;
        cResult[12] = tmp4.tabSelected;
        cResult[13] = tmp8;
        cResult[14] = T;
        cResult[15] = closure_17(tmp7Result, obj8);
        const tmp15 = closure_17(tmp7Result, obj8);
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
      tmp8 = mapped;
    }
  : (setReactionSelectedIndex) => {
      let items;
      let items1;
      let obj6;
      let reactionSelectedIndex;
      let reactions;
      const tmp = closure_21();
      ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
      setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
      let obj = setReactionSelectedIndex(6694);
      const obj2 = { style: tmp.reactionTab, children: items };
      const tidaWebformEnabled = obj.useExperiment(
        { location: "ReactionTabs" },
        { autoTrackExposure: false },
      ).tidaWebformEnabled;
      const obj4 = {
        tabs: reactions.map((reaction, index) => {
          let str = reaction.emoji.id;
          const obj = { reaction, selected: index === reactionSelectedIndex };
          if (str == null) {
            str = "";
          }
          return closure_17(closure_29, obj, "" + str + ":" + reaction.emoji.name);
        }),
        tabStyle: null,
        tabStyleActive: null,
        tabStyleSelected: null,
        tabIndexSelected: reactionSelectedIndex,
        onSelect(arg0) {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          setReactionSelectedIndex(arg0);
        },
        initialNumTabsToRender: reactionSelectedIndex(4527).MAX_REACTIONS,
      };
      ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
      const tmp5 = setReactionSelectedIndex(9993);
      items = [closure_17(tmp5, obj4), closure_17(setReactionSelectedIndex(8928), { outer: true })];
      const obj5 = { style: tmp.removeButtonContainer, children: items1 };
      const obj7 = {
        style: tmp.emojiTextIdentifier,
        variant: "eyebrow",
        color: "text-default",
        children: obj6.getReactionEmojiName(reactions[reactionSelectedIndex].emoji),
      };
      const Text = reactionSelectedIndex(4892).Text;
      obj6 = reactionSelectedIndex(4527);
      items1 = [closure_17(Text, obj7)];
      const obj12 = {};
      const tmp6 = tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton;
      const merged = Object.assign(setReactionSelectedIndex);
      items1[1] = closure_17(tmp6, obj12);
      items[2] = closure_18(closure_9, obj5);
      return closure_18(closure_9, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp12;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_21();
      const tmp5 = useSafeAreaInsetsDefault();
      const obj2 = generated_NoResults;
      const noResultsSource = obj2.useNoResultsSource();
      const sum = 338 + tmp5.bottom;
      const containerEmpty = tmp4.containerEmpty;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.HmPOrp);
        const intl2 = intl3.intl;
        const stringResult1 = intl2.string(intl3.t["pTJ5J/"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp8 = stringResult;
        tmp9 = stringResult1;
      } else {
        [tmp8, tmp9] = cResult;
      }
      if (cResult[2] !== noResultsSource) {
        const obj3 = { source: noResultsSource, title: tmp8, body: tmp9 };
        const tmp14 = closure_17(native.RefreshEmptyState, obj3);
        cResult[2] = noResultsSource;
        cResult[3] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp4.containerEmpty) {
        let tmp15;
        if (cResult[5] === tmp12) {
          tmp15 = cResult[6];
        }
        if (cResult[7] === sum) {
          let tmp17;
          if (cResult[8] === tmp15) {
            tmp17 = cResult[9];
          }
          return tmp17;
        }
        const obj4 = { scrollable: true, startHeight: sum, children: tmp15 };
        const tmp19 = closure_17(Sheet_BottomSheet.BottomSheet, obj4);
        cResult[7] = sum;
        cResult[8] = tmp15;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      }
      const tmp16 = closure_17(BottomSheetModal.BottomSheetView, { style: containerEmpty, children: tmp12 });
      cResult[4] = tmp4.containerEmpty;
      cResult[5] = tmp12;
      cResult[6] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      let BottomSheetView;
      let RefreshEmptyState;
      let intl;
      let intl2;
      let obj3;
      let obj4;
      const tmp = closure_21();
      const tmp2 = useSafeAreaInsetsDefault();
      const obj = generated_NoResults;
      const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: closure_17(BottomSheetView, obj3) };
      const noResultsSource = obj.useNoResultsSource();
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj3 = { style: tmp.containerEmpty, children: closure_17(RefreshEmptyState, obj4) };
      BottomSheetView = BottomSheetModal.BottomSheetView;
      obj4 = { source: noResultsSource, title: intl.string(intl3.t.HmPOrp), body: intl2.string(intl3.t["pTJ5J/"]) };
      RefreshEmptyState = native.RefreshEmptyState;
      intl = intl3.intl;
      intl2 = intl3.intl;
      return closure_17(BottomSheet, obj2);
    };
let Storage = Storage2.Storage;
let closure_36 = Storage.get("MessageReactionsContent_SwipableBounced", false);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let NORMAL;
      let disableManage;
      let disableTabs;
      let emoji;
      let isSelectedBurst;
      let reactionSelectedIndex;
      let reactions;
      let reactors;
      let reactorsHasMore;
      let setReactionSelectedIndex;
      let obj = channelId(NORMAL[15]);
      const cResult = obj.c(56);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ emoji, reactions, isSelectedBurst, disableManage, disableTabs } = channelId);
      const tmp4 = undefined !== disableManage && disableManage;
      closure_21();
      if (cResult[0] === emoji) {
        if (cResult[1] === isSelectedBurst) {
          let tmp6;
          if (cResult[2] === reactions) {
            tmp6 = cResult[3];
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
                let tmp10;
                let tmp14;
                let tmp17;
                if (cResult[7] === NORMAL) {
                  tmp10 = cResult[8];
                }
                ({ reactors, reactorsHasMore } = closure_24(tmp10));
                const _Symbol = Symbol;
                closure_24(tmp10);
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  const items = [ChannelStore];
                  cResult[9] = items;
                  tmp14 = items;
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
                  tmp17 = items1;
                } else {
                  class G {
                    constructor() {
                      return closure_11.getChannel(channelId);
                    }
                  }
                  tmp17 = cResult[12];
                }
                const tmpResult = channelId(NORMAL[16]);
                const stateFromStores = tmpResult.useStateFromStores(tmp14, G, tmp17);
                const tmpResult2 = channelId(NORMAL[58]);
                const isActiveChannelOrUnarchivableThread =
                  tmpResult2.useIsActiveChannelOrUnarchivableThread(stateFromStores);
                messageId(NORMAL[53])();
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
                  cResult[13] = obj6.string(channelId(NORMAL[36]).t.gHp0C4);
                  const stringResult = obj6.string(channelId(NORMAL[36]).t.gHp0C4);
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
    }
  : (channelId) => {
      let NORMAL;
      let disableManage;
      let emoji;
      let intl;
      let isSelectedBurst;
      let items2;
      let messageId;
      let obj4;
      let reactionSelectedIndex;
      let reactions;
      let reactors;
      let reactorsHasMore;
      let setReactionSelectedIndex;
      let tmp18Result;
      let tmp18Result3;
      let tmp18Result4;
      let tmp5;
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
      const tmp = closure_21();
      const tmp2 = closure_23({ reactions, emoji, isSelectedBurst });
      const reactionSelected = tmp2.reactionSelected;
      ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp2);
      if (null != reactionSelected.me_vote) {
        NORMAL = channelId(7272).ReactionTypes.VOTE;
        tmp5 = channelId;
      } else if (reactionSelected.burst_count > 0) {
        NORMAL = channelId(7272).ReactionTypes.BURST;
        tmp5 = channelId;
      } else {
        NORMAL = channelId(7272).ReactionTypes.NORMAL;
        tmp5 = channelId;
      }
      ({ reactors, reactorsHasMore } = closure_24({
        channelId,
        messageId,
        reaction: reactionSelected,
        reactionType: NORMAL,
      }));
      closure_24({ channelId, messageId, reaction: reactionSelected, reactionType: NORMAL });
      const items = [ChannelStore];
      const items1 = [channelId];
      const tmp5Result = tmp5(504);
      const stateFromStores = tmp5Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      const tmp5Result3 = tmp5(6782);
      const isActiveChannelOrUnarchivableThread = tmp5Result3.useIsActiveChannelOrUnarchivableThread(stateFromStores);
      const tmp14 = useSafeAreaInsetsDefault();
      const tmp15 = closure_22(channelId) && !disableManage && isActiveChannelOrUnarchivableThread;
      let name = reactionSelected.emoji.id;
      if (name == null) {
        name = reactionSelected.emoji.name;
      }
      const obj = {
        accessibilityLabel: intl.string(tmp5(1126).t.gHp0C4),
        footerSize: v48,
        insetBottom: tmp14.bottom,
        onScroll: closure_25({
          channelId,
          messageId,
          reactionSelected,
          reactors,
          reactorsHasMore,
          reactionType: NORMAL,
        }),
        renderFooter: closure_26(reactors, reactorsHasMore),
        renderItem: closure_27(reactors, messageId, channelId, reactionSelected, tmp15),
        renderQuickActions: closure_28(channelId, messageId, reactionSelected, reactors),
        itemSize: v48,
        sections: items2,
        style: tmp.container,
      };
      intl = tmp5(1126).intl;
      items2 = [reactors.length];
      const callback = react.useCallback(() => {
        c36 = true;
        const Storage = channelId(dependencyMap[57]).Storage;
        const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
      }, []);
      const tmp5Result4 = tmp5(1369);
      const obj2 = {
        scrollable: true,
        backdropOpacity: tmp5(7423).BACKDROP_OPACITY,
        backdropChildren: tmp18Result,
        header: tmp18Result3,
        children: tmp18Result4,
      };
      const tmp17 = tmp5Result4.isIOS() && tmp15;
      BottomSheet = tmp5(6652).BottomSheet;
      tmp18Result = null;
      if (NORMAL === tmp5(7272).ReactionTypes.BURST) {
        const obj3 = {
          style: closure_8.absoluteFill,
          pointerEvents: "none",
          children: closure_17(BurstReactionAnimationPreviewDefault, obj4),
        };
        obj4 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
        tmp18Result = closure_17(closure_9, obj3);
      }
      tmp18Result3 = null;
      if (true !== flag) {
        const obj5 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
        tmp18Result3 = closure_17(closure_34, obj5);
      }
      if (tmp17) {
        const obj6 = { inActionSheet: true, bounceFirstRowOnMount: !c36, onBounceSwipable: callback };
        const tmp13Result = SwipeableFastListDefault;
        const merged = Object.assign(obj);
        tmp18Result4 = closure_17(tmp13Result, obj6, name);
      } else {
        const obj7 = { inActionSheet: true };
        const tmp13Result2 = FastListDefault;
        const merged1 = Object.assign(obj);
        tmp18Result4 = closure_17(tmp13Result2, obj7, name);
      }
      return closure_17(BottomSheet, obj2);
    };
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export const useReactors = tmp6;
export const useReactorsOnScrollNative = tmp7;
export const MessageReactionsEmpty = tmp8;
export const MessageReactionsContent = tmp9;
