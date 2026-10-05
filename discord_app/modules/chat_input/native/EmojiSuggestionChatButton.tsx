// === Module 12072: EmojiSuggestionChatButton ===

// Module 12072 (EmojiSuggestionChatButton)
import nativeDefault from "native" /* 587 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 12068 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let set, set2;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((height) => {
  let num;
  let obj2;
  let size1;
  const obj = { wrapper: { height, width: height }, glyphOverlay: obj2, glyphButton: size, image: size1, surrogates: { fontSize: num * ((height - nativeDefault.space.PX_8) / 33), color: nativeDefault.colors.TEXT_DEFAULT } };
  obj2 = { alignItems: "center", justifyContent: "center" };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  size = { borderRadius: nativeDefault.radii.sm, height, width: height, alignItems: "center", justifyContent: "center" };
  size1 = { height: height - nativeDefault.space.PX_8, width: height - nativeDefault.space.PX_8 };
  num = 28;
  const obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    num = 26;
  }
  ({ fontSize: num * ((height - nativeDefault.space.PX_8) / 33), color: nativeDefault.colors.TEXT_DEFAULT });
  return obj;
});
let closure_12 = { code: "function EmojiSuggestionChatButtonTsx1(finished){const{runOnJS,setDisplayedEmoji}=this.__closure;if(finished===true){runOnJS(setDisplayedEmoji)(undefined);}}" };
const __initData = { code: "function EmojiSuggestionChatButtonTsx2(){const{emojiAnimationProgress}=this.__closure;return{opacity:emojiAnimationProgress.get(),transform:[{scale:emojiAnimationProgress.get()}]};}" };
const __initData2 = { code: "function EmojiSuggestionChatButtonTsx3(){const{emojiAnimationProgress}=this.__closure;return{opacity:1-emojiAnimationProgress.get()};}" };
const forwardRefResult = react.forwardRef((arg0, arg1) => {
  let PressableOpacity;
  let active;
  let c4;
  let intl;
  let items2;
  let items3;
  let items4;
  let obj7;
  let obj9;
  let onPress;
  let setDisplayedEmoji;
  let showKeyboardIcon;
  let str;
  let str2;
  let style;
  let tmp11;
  let tmp20Result;
  let tmp4Result3;
  let tmp4Result4;
  ({ active, onPress } = arg0);
  ({ style, showKeyboardIcon } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, active: 0, showKeyboardIcon: 0, onPress: 0 }));
  let unlockedEmojis;
  let lockedEmojis;
  react = undefined;
  let sharedValue;
  let obj = onPress(lockedEmojis[9]);
  const token = obj.useToken(unlockedEmojis(lockedEmojis[7]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp6 = closure_11(token);
  let obj2 = onPress(lockedEmojis[10]);
  const emojiSuggestionBarState = obj2.useEmojiSuggestionBarState(merged, onPress(lockedEmojis[10]).MAX_SUGGESTIONS_LARGE, 1, arg1);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  let first;
  if (true !== active) {
    first = unlockedEmojis[0];
  }
  let emojiIdentity;
  if (null != first) {
    const tmp2Result = onPress(lockedEmojis[10]);
    emojiIdentity = tmp2Result.getEmojiIdentity(first);
  }
  [tmp11, c4] = first(react.useState(first), 2);
  first(react.useState(first), 2);
  let num = 0;
  const useSharedValue = onPress(tmp3[11]).useSharedValue;
  onPress(lockedEmojis[11]);
  if (null != first) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [emojiIdentity];
  const effect = obj4.useEffect(() => {
    if (null != first) {
      setDisplayedEmoji(tmp);
      set = sharedValue.set;
      let obj = spring;
      const result = set(obj.withSpring(1, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG));
    } else {
      set2 = sharedValue.set;
      const withSpring = spring.withSpring;
      const fn = function t(arg0) {
        if (true === arg0) {
          const obj = onPress(lockedEmojis[11]);
          obj.runOnJS(setDisplayedEmoji)(undefined);
        }
      };
      const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setDisplayedEmoji };
      const ITEM_ENTRANCE_SPRING_CONFIG = EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG;
      fn.__closure = obj2;
      fn.__workletHash = 11486975633278;
      fn.__initData = __initData;
      set2(withSpring(0, ITEM_ENTRANCE_SPRING_CONFIG, "respect-motion-settings", fn));
    }
  }, items);
  const tmp2Result6 = onPress(lockedEmojis[11]);
  class R {
    constructor() {
      let items;
      const obj = { opacity: sharedValue.get(), transform: items };
      items = [{ scale: sharedValue.get() }];
      ({ scale: sharedValue.get() });
      return obj;
    }
  }
  R.__closure = { emojiAnimationProgress: sharedValue };
  R.__workletHash = 12888902078160;
  R.__initData = __initData;
  const animatedStyle = tmp2Result6.useAnimatedStyle(R);
  const tmp2Result7 = onPress(lockedEmojis[11]);
  class G {
    constructor() {
      const obj = { opacity: 1 - sharedValue.get() };
      return obj;
    }
  }
  G.__closure = { emojiAnimationProgress: sharedValue };
  G.__workletHash = 3538426469891;
  G.__initData = __initData2;
  const items1 = [onPress, unlockedEmojis, lockedEmojis];
  const animatedStyle1 = tmp2Result7.useAnimatedStyle(G);
  const obj3 = { style: items2, children: items3 };
  items2 = [tmp6.wrapper, style];
  const callback = obj4.useCallback(() => {
    const obj = { unlocked: unlockedEmojis, locked: lockedEmojis };
    onPress(ExpressionPickerViewType.EMOJI, obj);
  }, items1);
  const obj5 = { style: animatedStyle1, pointerEvents: str, children: closure_9(unlockedEmojis(lockedEmojis[13]), { active, showKeyboardIcon, onPress }) };
  str = "auto";
  const View = tmp4(tmp3[11]).View;
  if (null != tmp11) {
    str = "none";
  }
  items3 = [closure_9(View, obj5), ];
  let tmp20Result2 = null != tmp11;
  if (tmp20Result2) {
    const obj6 = { style: items4, pointerEvents: str2, children: closure_9(PressableOpacity, obj7) };
    items4 = [tmp6.glyphOverlay, animatedStyle];
    str2 = "none";
    const View2 = tmp4(tmp3[11]).View;
    if (null != first) {
      str2 = "auto";
    }
    obj7 = { style: tmp6.glyphButton, accessibilityRole: "button", accessibilityLabel: intl.string(onPress(lockedEmojis[15]).t.iZ7Mz9), onPress: callback, children: tmp20Result };
    PressableOpacity = onPress(tmp3[14]).PressableOpacity;
    intl = onPress(tmp3[15]).intl;
    if (null != tmp11.id) {
      const obj8 = { resizeMode: "contain", style: tmp6.image, placeholder: tmp4Result3, source: obj9, usesSmallCache: true };
      const tmp4Result = unlockedEmojis(lockedEmojis[16]);
      const tmp2Result8 = onPress(lockedEmojis[17]);
      if (tmp2Result8.isThemeDark(ThemeStore.theme)) {
        tmp4Result3 = tmp4(tmp3[18]);
      } else {
        tmp4Result3 = tmp4(tmp3[19]);
      }
      obj9 = { uri: tmp4Result4(tmp11, false, token - unlockedEmojis(lockedEmojis[7]).space.PX_8) };
      tmp4Result4 = unlockedEmojis(lockedEmojis[20]);
      tmp20Result = closure_9(tmp4Result, obj8);
    } else {
      const obj10 = { allowFontScaling: false, style: tmp6.surrogates, children: tmp11.surrogates };
      tmp20Result = closure_9(onPress(tmp3[21]).LegacyText, obj10);
    }
    tmp20Result2 = closure_9(View2, obj6);
  }
  items3[1] = tmp20Result2;
  return closure_10(closure_6, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionChatButton.tsx");

export const EmojiSuggestionChatButton = forwardRefResult;