// === Module 12162: EmojiSuggestionChatButton ===

// Module 12162 (EmojiSuggestionChatButton)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 12157 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ExpressionPickerViewType = fn(1241).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles((height) => {
  const obj = { wrapper: { height, width: height }, glyphOverlay: null, glyphButton: null, image: null, surrogates: null };
  const obj2 = {};
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj2.alignItems = "center";
  obj2.justifyContent = "center";
  obj.glyphOverlay = obj2;
  const size = { borderRadius: nativeDefault.radii.sm, height, width: height, alignItems: "center", justifyContent: "center" };
  obj.glyphButton = size;
  const size1 = { height: height - nativeDefault.space.PX_8, width: height - nativeDefault.space.PX_8 };
  obj.image = size1;
  let num = 28;
  if (obj5.isAndroid()) {
    num = 26;
  }
  obj5 = PlatformUtils;
  obj.surrogates = { fontSize: num * ((height - nativeDefault.space.PX_8) / 33), color: nativeDefault.colors.TEXT_DEFAULT };
  return obj;
});
let closure_12 = { code: "function EmojiSuggestionChatButtonTsx1(finished){const{runOnJS,setDisplayedEmoji}=this.__closure;if(finished===true){runOnJS(setDisplayedEmoji)(undefined);}}" };
const __initData = { code: "function EmojiSuggestionChatButtonTsx2(){const{emojiAnimationProgress}=this.__closure;return{opacity:emojiAnimationProgress.get(),transform:[{scale:emojiAnimationProgress.get()}]};}" };
const __initData2 = { code: "function EmojiSuggestionChatButtonTsx3(){const{emojiAnimationProgress}=this.__closure;return{opacity:1-emojiAnimationProgress.get()};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionChatButton.tsx");

export const EmojiSuggestionChatButton = function EmojiSuggestionChatButton(arg0) {
  ({ active, onPress } = arg0);
  ({ style, showKeyboardIcon, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, active: 0, showKeyboardIcon: 0, onPress: 0, ref: 0 }));
  let unlockedEmojis;
  let lockedEmojis;
  noop = undefined;
  let sharedValue;
  let tmp4Result2Result = lockedEmojis;
  const token = onPress(lockedEmojis[9]).useToken(unlockedEmojis(lockedEmojis[7]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp6 = closure_11(token);
  let obj = onPress(lockedEmojis[9]);
  const emojiSuggestionBarState = onPress(lockedEmojis[10]).useEmojiSuggestionBarState(merged, onPress(lockedEmojis[10]).MAX_SUGGESTIONS_LARGE, 1, ref);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  let first;
  if (true !== active) {
    first = unlockedEmojis[0];
  }
  let emojiIdentity;
  if (null != first) {
    emojiIdentity = onPress(tmp4Result2Result[10]).getEmojiIdentity(first);
    const tmp2Result = onPress(tmp4Result2Result[10]);
  }
  let obj2 = onPress(lockedEmojis[10]);
  [tmp11, c4] = first(noop.useState(first), 2);
  const tmp10 = first(noop.useState(first), 2);
  let num = 0;
  if (null != first) {
    num = 1;
  }
  sharedValue = onPress(tmp4Result2Result[11]).useSharedValue(num);
  let items = [emojiIdentity];
  const effect = obj4.useEffect(() => {
    if (null != first) {
      setDisplayedEmoji(tmp);
      const result = sharedValue.set(spring.withSpring(1, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG));
    } else {
      const obj2 = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          onPress(lockedEmojis[11]).runOnJS(setDisplayedEmoji)(undefined);
          const obj = onPress(lockedEmojis[11]);
        }
      };
      const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setDisplayedEmoji };
      fn.__closure = obj3;
      fn.__workletHash = 11486975633278;
      fn.__initData = __initData;
      const result1 = sharedValue.set(obj2.withSpring(0, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG, "respect-motion-settings", fn));
    }
  }, items);
  const tmp2Result5 = onPress(tmp4Result2Result[11]);
  class G {
    constructor() {
      obj = { opacity: closure_5.get(), transform: null };
      obj1 = { scale: closure_5.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  G.__closure = { emojiAnimationProgress: sharedValue };
  G.__workletHash = 12888902078160;
  G.__initData = __initData;
  const animatedStyle = onPress(tmp4Result2Result[11]).useAnimatedStyle(G);
  const tmp2Result6 = onPress(tmp4Result2Result[11]);
  class M {
    constructor() {
      obj = { opacity: 1 - closure_5.get() };
      return obj;
    }
  }
  M.__closure = { emojiAnimationProgress: sharedValue };
  M.__workletHash = 3538426469891;
  M.__initData = __initData2;
  const items1 = [onPress, unlockedEmojis, lockedEmojis];
  const animatedStyle1 = onPress(tmp4Result2Result[11]).useAnimatedStyle(M);
  let obj3 = { style: null, children: null };
  const items2 = [tmp6.wrapper, style];
  obj3.style = items2;
  const callback = obj4.useCallback(() => {
    onPress(ExpressionPickerViewType.EMOJI, { unlocked: unlockedEmojis, locked: lockedEmojis });
  }, items1);
  const obj5 = { style: animatedStyle1, pointerEvents: null, children: null };
  let str = "auto";
  if (null != tmp11) {
    str = "none";
  }
  obj5.pointerEvents = str;
  obj5.children = closure_9(unlockedEmojis(tmp4Result2Result[13]), { active, showKeyboardIcon, onPress });
  const items3 = [closure_9(unlockedEmojis(tmp4Result2Result[11]).View, obj5), ];
  if (null == tmp11) {
    items3[1] = tmp20;
    obj3.children = items3;
    return closure_10(closure_6, obj3);
  } else {
    const obj6 = { style: null, pointerEvents: null, children: null };
    const items4 = [tmp6.glyphOverlay, animatedStyle];
    obj6.style = items4;
    let str2 = "none";
    if (null != first) {
      str2 = "auto";
    }
    obj6.pointerEvents = str2;
    const obj7 = { style: tmp6.glyphButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = onPress(tmp4Result2Result[15]).intl;
    obj7.accessibilityLabel = intl.string(onPress(tmp4Result2Result[15]).t.iZ7Mz9);
    obj7.onPress = callback;
    if (null == tmp11.id) {
      const obj8 = { allowFontScaling: false, style: tmp6.surrogates, children: tmp11.surrogates };
      obj7.children = closure_9(onPress(tmp4Result2Result[21]).LegacyText, obj8);
      obj6.children = closure_9(onPress(tmp4Result2Result[14]).PressableOpacity, obj7);
      closure_9(tmp4(tmp4Result2Result[11]).View, obj6);
    }
    const obj9 = { resizeMode: "contain", style: tmp6.image, placeholder: null, source: null, usesSmallCache: true };
    const tmp4Result = tmp4(tmp4Result2Result[16]);
    if (tmp2Result8.isThemeDark(ThemeStore.theme)) {
      let tmp4Result3 = tmp4(tmp4Result2Result[18]);
    } else {
      tmp4Result3 = tmp4(tmp4Result2Result[19]);
    }
    obj9.placeholder = tmp4Result3;
    const obj10 = { uri: null };
    tmp2Result8 = onPress(tmp4Result2Result[17]);
    tmp4Result2Result = tmp4(tmp4Result2Result[20])(tmp11, false, token - tmp4(tmp4Result2Result[7]).space.PX_8);
    obj10.uri = tmp4Result2Result;
    obj9.source = obj10;
    closure_9(tmp4Result, obj9);
    const tmp4Result4 = tmp4(tmp4Result2Result[20]);
  }
  const tmp2Result7 = onPress(tmp4Result2Result[11]);
};