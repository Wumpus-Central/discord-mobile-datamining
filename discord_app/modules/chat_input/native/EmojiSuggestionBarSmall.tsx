// discord_app/modules/chat_input/native/EmojiSuggestionBarSmall.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import EmojiPickerListConstants from "../../emoji_picker/native/components/EmojiPickerListConstants.tsx";
import EmojiPickerListRow from "../../emoji_picker/native/components/EmojiPickerListRow.tsx";
import openEmojiActionSheet2 from "../../emoji_picker/native/components/openEmojiActionSheet.tsx";
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let anchorTop, displayEmojis, importDefault, locked;

let closure_3 = ["anchorTop", "onOccupiedHeightChange"];
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const jsx = Fragment.jsx;
const sum = IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const metroImportDefault = sum;
const CONTAINER_SMALL_WRAPPER_HEIGHT = sum + nativeDefault.space.PX_8;
let closure_9 = createStyles.createStyles((arg0) => {
  let diff;
  let rect;
  const obj = { containerSmall: rect };
  rect = {
    position: "absolute",
    top: diff - nativeDefault.space.PX_8,
    right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    height: metroImportDefault,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderWidth: 1,
    borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
  };
  diff = arg0 - metroImportDefault;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  return obj;
});
const __initData = {
  code: "function EmojiSuggestionBarSmallTsx1(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}",
};
const __initData2 = {
  code: "function EmojiSuggestionBarSmallTsx2(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (displayEmojis) => {
      let cleanUp;
      let handlePress;
      let onOccupiedHeightChange;
      let obj = displayEmojis(handlePress[7]);
      const cResult = obj.c(11);
      displayEmojis = displayEmojis.displayEmojis;
      const reducedMotion = displayEmojis.reducedMotion;
      const tmp = handlePress;
      handlePress = displayEmojis.handlePress;
      const handlePressEmojiUnavailable = displayEmojis.handlePressEmojiUnavailable;
      const transitionState = displayEmojis.transitionState;
      ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
      const tmp3 = closure_9(displayEmojis.anchorTop);
      let obj2 = displayEmojis(handlePress[8]);
      const suggestionBarHeight = obj2.useSuggestionBarHeight(
        transitionState,
        cleanUp,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
        onOccupiedHeightChange,
      );
      const fn = function n() {
        let items;
        let obj2;
        const obj = { opacity: obj2.interpolate(suggestionBarHeight.get(), items, [0, 1]) };
        items = [0, CONTAINER_SMALL_WRAPPER_HEIGHT];
        obj2 = ReanimatedRexport;
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
      ({
        interpolate: displayEmojis(handlePress[9]).interpolate,
        heightSv: suggestionBarHeight,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
      });
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        let tmp6;
        if (cResult[1] === tmp3.containerSmall) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === displayEmojis) {
          if (cResult[4] === handlePress) {
            if (cResult[5] === handlePressEmojiUnavailable) {
              let tmp7;
              if (cResult[6] === reducedMotion) {
                tmp7 = cResult[7];
              }
              if (cResult[8] === tmp6) {
                let tmp9;
                if (cResult[9] === tmp7) {
                  tmp9 = cResult[10];
                }
                return tmp9;
              }
              const tmp12 = jsx(reducedMotion(tmp[9]).View, { style: tmp6, children: tmp7 });
              cResult[8] = tmp6;
              cResult[9] = tmp7;
              cResult[10] = tmp12;
              tmp9 = tmp12;
            }
          }
        }
        const mapped = displayEmojis.map((locked, index) => {
          locked = locked.locked;
          const emoji = locked.emoji;
          const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
          const EmojiItem = EmojiPickerListRow.EmojiItem;
          if (locked) {
            let openEmojiActionSheet = handlePressEmojiUnavailable;
          } else {
            openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
          }
          const tmp2Result = EmojiSuggestionBarUtils;
          return (
            <EmojiEntranceAnimation
              key={tmp2Result.getEmojiEntranceKey(displayEmojis, index)}
              index={index}
              reducedMotion={reducedMotion}
            >
              {null}
            </EmojiEntranceAnimation>
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
    }
  : (displayEmojis) => {
      let cleanUp;
      let onOccupiedHeightChange;
      let reducedMotion;
      let transitionState;
      displayEmojis = displayEmojis.displayEmojis;
      ({
        reducedMotion: importDefault,
        handlePress: dependencyMap,
        handlePressEmojiUnavailable: closure_3,
        transitionState,
      } = displayEmojis);
      ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
      const tmp = closure_9(displayEmojis.anchorTop);
      let obj = displayEmojis(12083);
      const suggestionBarHeight = obj.useSuggestionBarHeight(
        transitionState,
        cleanUp,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
        onOccupiedHeightChange,
      );
      let obj2 = displayEmojis(4618);
      const fn = function j() {
        let items;
        let obj2;
        const obj = { opacity: obj2.interpolate(suggestionBarHeight.get(), items, [0, 1]) };
        items = [0, CONTAINER_SMALL_WRAPPER_HEIGHT];
        obj2 = ReanimatedRexport;
        return obj;
      };
      fn.__closure = {
        interpolate: displayEmojis(4618).interpolate,
        heightSv: suggestionBarHeight,
        CONTAINER_SMALL_WRAPPER_HEIGHT,
      };
      fn.__workletHash = 8299755729224;
      fn.__initData = __initData2;
      ({ interpolate: displayEmojis(4618).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let items = [tmp.containerSmall, animatedStyle];
      const View = ReanimatedRexportDefault.View;
      return (
        <View style={items}>
          {displayEmojis.map((locked, index) => {
            locked = locked.locked;
            const emoji = locked.emoji;
            const EmojiEntranceAnimation = EmojiSuggestionBarUtils.EmojiEntranceAnimation;
            const EmojiItem = EmojiPickerListRow.EmojiItem;
            if (locked) {
              let openEmojiActionSheet = closure_3;
            } else {
              openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
            }
            const tmp2Result = EmojiSuggestionBarUtils;
            return (
              <EmojiEntranceAnimation
                key={tmp2Result.getEmojiEntranceKey(displayEmojis, index)}
                index={index}
                reducedMotion={importDefault}
              >
                {null}
              </EmojiEntranceAnimation>
            );
          })}
        </View>
      );
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (anchorTop, arg1) => {
        let _require;
        let handlePress;
        let handlePressEmojiUnavailable;
        let lockedEmojis;
        let reducedMotion;
        let tmp6;
        let unlockedEmojis;
        const obj = require("react");
        const cResult = obj.c(18);
        if (cResult[0] !== anchorTop) {
          anchorTop = anchorTop.anchorTop;
          _require = anchorTop;
          const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
          importDefault = onOccupiedHeightChange;
          const tmp9 = _objectWithoutProperties(anchorTop, closure_3);
          cResult[0] = anchorTop;
          cResult[1] = anchorTop;
          cResult[2] = onOccupiedHeightChange;
          cResult[3] = tmp9;
          tmp6 = tmp9;
        } else {
          _require = cResult[1];
          importDefault = cResult[2];
          tmp6 = cResult[3];
        }
        const tmpResult = require("EmojiSuggestionBarUtils");
        const emojiSuggestionBarState = tmpResult.useEmojiSuggestionBarState(
          tmp6,
          tmp(12083).MAX_SUGGESTIONS_LARGE,
          1,
          arg1,
        );
        ({ unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable } =
          emojiSuggestionBarState);
        if (0 !== unlockedEmojis.length) {
          if (cResult[4] === lockedEmojis) {
            let tmp12;
            if (cResult[5] === unlockedEmojis) {
              tmp12 = cResult[6];
            }
            const obj2 = { displayEmojis: tmp12, reducedMotion, handlePress, handlePressEmojiUnavailable };
            cResult[7] = handlePress;
            cResult[8] = handlePressEmojiUnavailable;
            cResult[9] = reducedMotion;
            cResult[10] = tmp12;
            cResult[11] = obj2;
          }
          const tmpResult2 = require("EmojiSuggestionBarUtils");
          const sortEmojisForDisplayResult = tmpResult2.sortEmojisForDisplay(
            unlockedEmojis,
            lockedEmojis.slice(0, 2),
            3,
          );
          cResult[4] = lockedEmojis;
          cResult[5] = unlockedEmojis;
          cResult[6] = sortEmojisForDisplayResult;
          tmp12 = sortEmojisForDisplayResult;
        }
        if (cResult[12] === tmp4) {
          let tmp15;
          if (cResult[13] === tmp5) {
            tmp15 = cResult[14];
          }
          if (cResult[15] === tmp11) {
            let tmp16;
            if (cResult[16] === tmp15) {
              tmp16 = cResult[17];
            }
            return tmp16;
          }
          const tmp18 = jsx(require("native").TransitionItem, { item: tmp11, renderItem: tmp15 });
          cResult[15] = tmp11;
          cResult[16] = tmp15;
          cResult[17] = tmp18;
          tmp16 = tmp18;
        }
        class O {
          constructor(arg0, arg1, arg2, arg3) {
            obj = {};
            merged = Object.assign(arg1);
            obj.anchorTop = closure_0;
            obj.onOccupiedHeightChange = closure_1;
            obj.transitionState = arg2;
            obj.cleanUp = arg3;
            return jsx(f60208, obj, anchorTop);
          }
        }
        cResult[12] = tmp4;
        cResult[13] = tmp5;
        cResult[14] = O;
        tmp15 = O;
      }
    : (anchorTop, arg1) => {
        anchorTop = anchorTop.anchorTop;
        const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
        let merged = Object.assign(anchorTop, Object.assign({ anchorTop: 0, onOccupiedHeightChange: 0 }));
        let unlockedEmojis;
        let obj = anchorTop(unlockedEmojis[8]);
        const emojiSuggestionBarState = obj.useEmojiSuggestionBarState(
          merged,
          anchorTop(unlockedEmojis[8]).MAX_SUGGESTIONS_LARGE,
          1,
          arg1,
        );
        unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
        const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
        const reducedMotion = emojiSuggestionBarState.reducedMotion;
        const handlePress = emojiSuggestionBarState.handlePress;
        const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
        const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
        const items1 = [anchorTop, onOccupiedHeightChange];
        const item = handlePress.useMemo(() => {
          let obj2;
          const obj = {
            displayEmojis: obj2.sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3),
            reducedMotion,
            handlePress,
            handlePressEmojiUnavailable,
          };
          obj2 = EmojiSuggestionBarUtils;
          return obj;
        }, items);
        const renderItem = handlePress.useCallback((key, arg1, transitionState, cleanUp) => {
          const merged = Object.assign(arg1);
          return (
            <closure_12
              key={key}
              anchorTop={anchorTop}
              onOccupiedHeightChange={onOccupiedHeightChange}
              transitionState={transitionState}
              cleanUp={cleanUp}
            />
          );
        }, items1);
        return handlePressEmojiUnavailable(anchorTop(unlockedEmojis[12]).TransitionItem, { item, renderItem });
      },
);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export const EmojiSuggestionBarSmall = forwardRefResult;
