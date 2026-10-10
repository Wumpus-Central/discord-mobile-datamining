// discord_app/modules/chat_input/native/EmojiSuggestionBarSmall.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import EmojiPickerListRow from "../../emoji_picker/native/components/EmojiPickerListRow.tsx";
import openEmojiActionSheet2 from "../../emoji_picker/native/components/openEmojiActionSheet.tsx";
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let closure_3 = ["anchorTop", "onOccupiedHeightChange", "ref"];
const jsx = fn(21).jsx;
const sum = fn(9429).IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const CONTAINER_SMALL_WRAPPER_HEIGHT = sum + nativeDefault.space.PX_8;
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { containerSmall: null };
  const rect = {
    position: "absolute",
    top: null,
    right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    height: sum,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderWidth: 1,
    borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
  };
  const diff = arg0 - sum;
  rect.top = diff - nativeDefault.space.PX_8;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.containerSmall = rect;
  return obj;
});
const __initData = {
  code: "function EmojiSuggestionBarSmallTsx1(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}",
};
const __initData2 = {
  code: "function EmojiSuggestionBarSmallTsx2(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}",
};
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiSuggestionBarSmallAnimated(displayEmojis) {
      const cResult = displayEmojis(handlePress[7]).c(11);
      displayEmojis = displayEmojis.displayEmojis;
      const reducedMotion = displayEmojis.reducedMotion;
      handlePress = displayEmojis.handlePress;
      const handlePressEmojiUnavailable = displayEmojis.handlePressEmojiUnavailable;
      ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
      const tmp3 = closure_9(displayEmojis.anchorTop);
      let obj = displayEmojis(handlePress[7]);
      const tmp = handlePress;
      const suggestionBarHeight = displayEmojis(handlePress[8]).useSuggestionBarHeight(
        displayEmojis.transitionState,
        cleanUp,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
        onOccupiedHeightChange,
      );
      let obj2 = displayEmojis(handlePress[8]);
      const fn = function n() {
        const obj = { opacity: null };
        const items = [0, closure_8];
        obj.opacity = ReanimatedRexport.interpolate(suggestionBarHeight.get(), items, [0, 1]);
        return obj;
      };
      const obj3 = displayEmojis(handlePress[9]);
      fn.__closure = {
        interpolate: displayEmojis(handlePress[9]).interpolate,
        heightSv: suggestionBarHeight,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
      };
      fn.__workletHash = 1856279964267;
      fn.__initData = __initData;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === tmp3.containerSmall) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === displayEmojis) {
          if (cResult[4] === handlePress) {
            if (cResult[5] === handlePressEmojiUnavailable) {
              if (cResult[6] === reducedMotion) {
                let tmp7 = cResult[7];
              }
              if (cResult[8] === tmp6) {
                if (cResult[9] === tmp7) {
                  let tmp9 = cResult[10];
                }
                return tmp9;
              }
              const obj5 = { style: tmp6, children: tmp7 };
              const tmp12 = jsx(reducedMotion(tmp[9]).View, { style: tmp6, children: tmp7 });
              cResult[8] = tmp6;
              cResult[9] = tmp7;
              cResult[10] = tmp12;
              tmp9 = tmp12;
            }
          }
        }
        const mapped = displayEmojis.map((emoji, index) => {
          const locked = emoji.locked;
          const obj = { index, reducedMotion, children: null };
          const obj2 = {
            emoji: emoji.emoji,
            disabled: locked,
            onPressEmoji: locked ? handlePressEmojiUnavailable : handlePress,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          };
          if (locked) {
            let openEmojiActionSheet = handlePressEmojiUnavailable;
          } else {
            openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
          }
          obj2.onLongPressEmoji = openEmojiActionSheet;
          obj2.animateEmoji = !reducedMotion;
          obj.children = jsx(EmojiPickerListRow.EmojiItem, {
            emoji: emoji.emoji,
            disabled: locked,
            onPressEmoji: locked ? handlePressEmojiUnavailable : handlePress,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          });
          return jsx(
            EmojiSuggestionBarUtils.EmojiEntranceAnimation,
            { index, reducedMotion, children: null },
            EmojiSuggestionBarUtils.getEmojiEntranceKey(displayEmojis, index),
          );
        });
        cResult[3] = displayEmojis;
        cResult[4] = handlePress;
        cResult[5] = handlePressEmojiUnavailable;
        cResult[6] = reducedMotion;
        cResult[7] = mapped;
        tmp7 = mapped;
      }
      let items = [tmp3.containerSmall, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = tmp3.containerSmall;
      cResult[2] = items;
      tmp6 = items;
      const obj4 = {
        interpolate: displayEmojis(handlePress[9]).interpolate,
        heightSv: suggestionBarHeight,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
      };
    }
  : function EmojiSuggestionBarSmallAnimated(displayEmojis) {
      displayEmojis = displayEmojis.displayEmojis;
      ({
        reducedMotion: importDefault,
        handlePress: dependencyMap,
        handlePressEmojiUnavailable: closure_3,
        transitionState,
      } = displayEmojis);
      ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
      const tmp = closure_9(displayEmojis.anchorTop);
      const suggestionBarHeight = displayEmojis(12138).useSuggestionBarHeight(
        transitionState,
        cleanUp,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
        onOccupiedHeightChange,
      );
      let obj = displayEmojis(12138);
      const fn = function j() {
        const obj = { opacity: null };
        const items = [0, closure_8];
        obj.opacity = ReanimatedRexport.interpolate(suggestionBarHeight.get(), items, [0, 1]);
        return obj;
      };
      let obj2 = displayEmojis(4850);
      fn.__closure = {
        interpolate: displayEmojis(4850).interpolate,
        heightSv: suggestionBarHeight,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
      };
      fn.__workletHash = 8299755729224;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj4 = {
        style: null,
        children: displayEmojis.map((emoji, index) => {
          const locked = emoji.locked;
          const obj = { index, reducedMotion, children: null };
          const obj2 = {
            emoji: emoji.emoji,
            disabled: locked,
            onPressEmoji: locked ? closure_1_3 : dependencyMap,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          };
          if (locked) {
            let openEmojiActionSheet = closure_1_3;
          } else {
            openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
          }
          obj2.onLongPressEmoji = openEmojiActionSheet;
          obj2.animateEmoji = !reducedMotion;
          obj.children = jsx(EmojiPickerListRow.EmojiItem, {
            emoji: emoji.emoji,
            disabled: locked,
            onPressEmoji: locked ? closure_1_3 : dependencyMap,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          });
          return jsx(
            EmojiSuggestionBarUtils.EmojiEntranceAnimation,
            { index, reducedMotion, children: null },
            EmojiSuggestionBarUtils.getEmojiEntranceKey(displayEmojis, index),
          );
        }),
      };
      let items = [tmp.containerSmall, animatedStyle];
      obj4.style = items;
      return jsx(ReanimatedRexportDefault.View, {
        style: null,
        children: displayEmojis.map((emoji, index) => {
          const locked = emoji.locked;
          const obj = { index, reducedMotion, children: null };
          const obj2 = {
            emoji: emoji.emoji,
            disabled: locked,
            onPressEmoji: locked ? closure_1_3 : dependencyMap,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          };
          if (locked) {
            let openEmojiActionSheet = closure_1_3;
          } else {
            openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
          }
          obj2.onLongPressEmoji = openEmojiActionSheet;
          obj2.animateEmoji = !reducedMotion;
          obj.children = jsx(EmojiPickerListRow.EmojiItem, {
            emoji: emoji.emoji,
            disabled: locked,
            onPressEmoji: locked ? closure_1_3 : dependencyMap,
            onLongPressEmoji: null,
            animateEmoji: null,
            isSectionNitroLocked: false,
          });
          return jsx(
            EmojiSuggestionBarUtils.EmojiEntranceAnimation,
            { index, reducedMotion, children: null },
            EmojiSuggestionBarUtils.getEmojiEntranceKey(displayEmojis, index),
          );
        }),
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export const EmojiSuggestionBarSmall = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiSuggestionBarSmall(anchorTop) {
      const cResult = require("c").c(19);
      if (cResult[0] !== anchorTop) {
        anchorTop = anchorTop.anchorTop;
        _require = anchorTop;
        const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
        importDefault = onOccupiedHeightChange;
        const tmp10 = _objectWithoutProperties(anchorTop, closure_3);
        cResult[0] = anchorTop;
        cResult[1] = anchorTop;
        cResult[2] = onOccupiedHeightChange;
        cResult[3] = tmp10;
        cResult[4] = anchorTop.ref;
        let tmp7 = ref;
        let tmp6 = tmp10;
      } else {
        _require = cResult[1];
        importDefault = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let obj = require("c");
      const emojiSuggestionBarState = require("EmojiSuggestionBarUtils").useEmojiSuggestionBarState(
        tmp6,
        tmp(12138).MAX_SUGGESTIONS_LARGE,
        1,
        tmp7,
      );
      ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } =
        emojiSuggestionBarState);
      if (0 === unlockedEmojis.length) {
        if (0 === lockedEmojis.length) {
          if (cResult[13] === tmp4) {
            if (cResult[14] === tmp5) {
              let tmp15 = cResult[15];
            }
            class O {
              constructor(arg0, arg1, arg2, arg3) {
                obj = {};
                merged = Object.assign(arg1);
                obj.anchorTop = closure_0;
                obj.onOccupiedHeightChange = closure_1;
                obj.transitionState = arg2;
                obj.cleanUp = arg3;
                return jsx(EmojiSuggestionBarSmallAnimated, obj, anchorTop);
              }
            }
            const obj2 = { item: undefined, renderItem: tmp15 };
            const tmp18 = jsx(tmp(4827).TransitionItem, { item: undefined, renderItem: tmp15 });
            cResult[16] = undefined;
            cResult[17] = tmp15;
            cResult[18] = tmp18;
          }
          class O {
            constructor(arg0, arg1, arg2, arg3) {
              obj = {};
              merged = Object.assign(arg1);
              obj.anchorTop = closure_0;
              obj.onOccupiedHeightChange = closure_1;
              obj.transitionState = arg2;
              obj.cleanUp = arg3;
              return jsx(EmojiSuggestionBarSmallAnimated, obj, anchorTop);
            }
          }
          cResult[13] = tmp4;
          cResult[14] = tmp5;
          cResult[15] = O;
          tmp15 = O;
        }
      }
      if (cResult[5] === lockedEmojis) {
        if (cResult[6] === unlockedEmojis) {
          let tmp12 = cResult[7];
        }
        class O {
          constructor(arg0, arg1, arg2, arg3) {
            obj = {};
            merged = Object.assign(arg1);
            obj.anchorTop = closure_0;
            obj.onOccupiedHeightChange = closure_1;
            obj.transitionState = arg2;
            obj.cleanUp = arg3;
            return jsx(EmojiSuggestionBarSmallAnimated, obj, anchorTop);
          }
        }
        const obj3 = { displayEmojis: tmp12, reducedMotion, handlePress, handlePressEmojiUnavailable };
        cResult[8] = handlePress;
        cResult[9] = handlePressEmojiUnavailable;
        cResult[10] = reducedMotion;
        cResult[11] = tmp12;
        cResult[12] = obj3;
      }
      const tmpResult = require("EmojiSuggestionBarUtils");
      const sortEmojisForDisplayResult = require("EmojiSuggestionBarUtils").sortEmojisForDisplay(
        unlockedEmojis,
        lockedEmojis.slice(0, 2),
        3,
      );
      cResult[5] = lockedEmojis;
      cResult[6] = unlockedEmojis;
      cResult[7] = sortEmojisForDisplayResult;
      tmp12 = sortEmojisForDisplayResult;
      const tmpResult2 = require("EmojiSuggestionBarUtils");
    }
  : function EmojiSuggestionBarSmall(anchorTop) {
      anchorTop = anchorTop.anchorTop;
      const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
      let merged = Object.assign(anchorTop, Object.assign({ anchorTop: 0, onOccupiedHeightChange: 0, ref: 0 }));
      let unlockedEmojis;
      const emojiSuggestionBarState = anchorTop(unlockedEmojis[8]).useEmojiSuggestionBarState(
        merged,
        anchorTop(unlockedEmojis[8]).MAX_SUGGESTIONS_LARGE,
        1,
        anchorTop.ref,
      );
      unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
      const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
      const reducedMotion = emojiSuggestionBarState.reducedMotion;
      const handlePress = emojiSuggestionBarState.handlePress;
      const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
      const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
      const items1 = [anchorTop, onOccupiedHeightChange];
      const item = handlePress.useMemo(() => {
        const obj = {
          displayEmojis: EmojiSuggestionBarUtils.sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3),
          reducedMotion,
          handlePress,
          handlePressEmojiUnavailable,
        };
        return obj;
      }, items);
      const renderItem = handlePress.useCallback((key, arg1, transitionState, cleanUp) => {
        const obj = {};
        const merged = Object.assign(arg1);
        obj.anchorTop = anchorTop;
        obj.onOccupiedHeightChange = onOccupiedHeightChange;
        obj.transitionState = transitionState;
        obj.cleanUp = cleanUp;
        return <closure_12 key={key} />;
      }, items1);
      return handlePressEmojiUnavailable(anchorTop(unlockedEmojis[12]).TransitionItem, { item, renderItem });
    };
