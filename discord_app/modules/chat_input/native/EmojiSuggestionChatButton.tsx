// discord_app/modules/chat_input/native/EmojiSuggestionChatButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../_runtime/05297_LegacyBaseButton.js";
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(4820).ContentDismissActionType;
const ExpressionPickerViewType = fn(1243).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4971);
let closure_12 = createStyles.createStyles((height, marginVertical) => {
  const obj = {
    swipeArea: { marginVertical: -marginVertical, paddingVertical: marginVertical },
    wrapper: { height, width: height },
    glyphOverlay: null,
    glyphButton: null,
    image: null,
    surrogates: null,
  };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.alignItems = "center";
  obj2.justifyContent = "center";
  obj.glyphOverlay = obj2;
  const size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.glyphButton = size;
  const size1 = { height: height - nativeDefault.space.PX_8, width: height - nativeDefault.space.PX_8 };
  obj.image = size1;
  let num = 28;
  if (obj5.isAndroid()) {
    num = 26;
  }
  obj5 = PlatformUtils;
  obj.surrogates = {
    fontSize: num * ((height - nativeDefault.space.PX_8) / 33),
    color: nativeDefault.colors.TEXT_DEFAULT,
  };
  return obj;
});
let closure_13 = {
  code: "function EmojiSuggestionChatButtonTsx1(finished){const{runOnJS,setDisplayedEmoji}=this.__closure;if(finished===true){runOnJS(setDisplayedEmoji)(undefined);}}",
};
const __initData = {
  code: "function EmojiSuggestionChatButtonTsx2(){const{emojiAnimationProgress}=this.__closure;return{opacity:emojiAnimationProgress.get(),transform:[{scale:emojiAnimationProgress.get()}]};}",
};
const __initData2 = {
  code: "function EmojiSuggestionChatButtonTsx3(){const{emojiAnimationProgress}=this.__closure;return{opacity:1-emojiAnimationProgress.get()};}",
};
let closure_16 = {
  code: "function EmojiSuggestionChatButtonTsx4(){const{runOnJS,insertTopEmoji}=this.__closure;runOnJS(insertTopEmoji)();}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionChatButton.tsx");

export const EmojiSuggestionChatButton = function EmojiSuggestionChatButton(arg0) {
  ({ active, onPress } = arg0);
  ({ style, showKeyboardIcon, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, active: 0, showKeyboardIcon: 0, onPress: 0, ref: 0 }));
  let unlockedEmojis;
  let lockedEmojis;
  c5 = undefined;
  let dismissCoachmark;
  let sharedValue;
  let callback1;
  let gesture;
  let gesture1;
  let gesture2;
  let tmp4Result2Result = lockedEmojis;
  const token = onPress(lockedEmojis[10]).useToken(
    unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  );
  let obj = onPress(lockedEmojis[10]);
  const token1 = onPress(lockedEmojis[10]).useToken(
    unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
  );
  let obj2 = onPress(lockedEmojis[10]);
  const tmp7 = closure_12(
    token,
    (token1 - token) / 2 +
      onPress(lockedEmojis[10]).useToken(
        unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
      ),
  );
  let obj3 = onPress(lockedEmojis[10]);
  const emojiSuggestionBarState = onPress(lockedEmojis[11]).useEmojiSuggestionBarState(
    merged,
    onPress(lockedEmojis[11]).MAX_SUGGESTIONS_LARGE,
    0,
    ref,
  );
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const handlePress = emojiSuggestionBarState.handlePress;
  let first;
  if (true !== active) {
    first = unlockedEmojis[0];
  }
  let emojiIdentity;
  if (null != first) {
    emojiIdentity = tmp2(tmp4Result2Result[11]).getEmojiIdentity(first);
    const tmp2Result = tmp2(tmp4Result2Result[11]);
  }
  const obj4 = onPress(lockedEmojis[11]);
  [tmp12, c5] = handlePress(first.useState(first), 2);
  const ref1 = first.useRef(null);
  dismissCoachmark = tmp4(tmp4Result2Result[12])(ref1, null != first).dismissCoachmark;
  const tmp11 = handlePress(first.useState(first), 2);
  let num = 0;
  if (null != first) {
    num = 1;
  }
  sharedValue = onPress(tmp4Result2Result[13]).useSharedValue(num);
  let items = [emojiIdentity];
  const effect = obj6.useEffect(() => {
    if (null != first) {
      setDisplayedEmoji(tmp);
      const result = sharedValue.set(spring.withSpring(1, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG));
    } else {
      const obj2 = spring;
      const fn = function t(arg0) {
        if (true === arg0) {
          onPress(lockedEmojis[13]).runOnJS(setDisplayedEmoji)(undefined);
          const obj = onPress(lockedEmojis[13]);
        }
      };
      const obj3 = { runOnJS: ReanimatedRexport.runOnJS, setDisplayedEmoji };
      fn.__closure = obj3;
      fn.__workletHash = 11486975633278;
      fn.__initData = __initData;
      const result1 = sharedValue.set(
        obj2.withSpring(0, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG, "respect-motion-settings", fn),
      );
    }
  }, items);
  const tmp2Result5 = onPress(tmp4Result2Result[13]);
  class V {
    constructor() {
      obj = { opacity: closure_7.get(), transform: null };
      obj1 = { scale: closure_7.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  V.__closure = { emojiAnimationProgress: sharedValue };
  V.__workletHash = 12888902078160;
  V.__initData = __initData;
  const animatedStyle = onPress(tmp4Result2Result[13]).useAnimatedStyle(V);
  const tmp2Result6 = onPress(tmp4Result2Result[13]);
  class X {
    constructor() {
      obj = { opacity: 1 - closure_7.get() };
      return obj;
    }
  }
  X.__closure = { emojiAnimationProgress: sharedValue };
  X.__workletHash = 3538426469891;
  X.__initData = __initData2;
  let items1 = [dismissCoachmark, onPress, unlockedEmojis, lockedEmojis];
  const animatedStyle1 = onPress(tmp4Result2Result[13]).useAnimatedStyle(X);
  const items2 = [first, handlePress];
  const callback = obj6.useCallback(() => {
    dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
    onPress(ExpressionPickerViewType.EMOJI, { unlocked: unlockedEmojis, locked: lockedEmojis });
  }, items1);
  callback1 = obj6.useCallback(() => {
    if (null != first) {
      handlePress(tmp);
    }
  }, items2);
  gesture = obj6.useContext(tmp4(tmp4Result2Result[15])).gesture;
  const context = obj6.useContext(tmp2(tmp4Result2Result[15]).MainTabsChannelScreenStackContext);
  gesture1 = undefined;
  if (context != null) {
    gesture1 = context.gesture;
  }
  const context1 = obj6.useContext(tmp2(tmp4Result2Result[16]).SwipeForMemberListContext);
  gesture2 = undefined;
  if (context1 != null) {
    gesture2 = context1.gesture;
  }
  const items3 = [first, callback1, gesture, gesture1, gesture2];
  const items4 = [onPress, unlockedEmojis, lockedEmojis];
  const memo = obj6.useMemo(() => {
    const items = [gesture, gesture1, gesture2];
    const found = items.filter((item) => null != item);
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const items1 = [...found];
    const enabledResult = Gesture.Pan().enabled(null != first);
    const applyResult = Gesture.Pan()
      .enabled(null != first)
      .blocksExternalGesture.apply(items1);
    const activeOffsetXResult = Gesture.Pan()
      .enabled(null != first)
      .blocksExternalGesture.apply(items1)
      .activeOffsetX(-15);
    const failOffsetXResult = Gesture.Pan()
      .enabled(null != first)
      .blocksExternalGesture.apply(items1)
      .activeOffsetX(-15)
      .failOffsetX(15);
    const fn = function t() {
      onPress(lockedEmojis[13]).runOnJS(callback1)();
    };
    const failOffsetYResult = Gesture.Pan()
      .enabled(null != first)
      .blocksExternalGesture.apply(items1)
      .activeOffsetX(-15)
      .failOffsetX(15)
      .failOffsetY([-15, 15]);
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, insertTopEmoji: callback1 };
    fn.__workletHash = 3138575008034;
    fn.__initData = __initData2;
    return failOffsetYResult.onStart(fn);
  }, items3);
  const callback2 = obj6.useCallback((arg0) => {
    onPress(arg0, { unlocked: unlockedEmojis, locked: lockedEmojis });
  }, items4);
  const obj5 = { gesture: memo, children: null };
  const obj7 = { style: tmp7.swipeArea, children: null };
  const obj8 = { ref: ref1, collapsable: false, style: null, children: null };
  const items5 = [tmp7.wrapper, style];
  obj8.style = items5;
  const obj9 = { style: animatedStyle1, pointerEvents: null, children: null };
  let str = "auto";
  if (null != tmp12) {
    str = "none";
  }
  obj9.pointerEvents = str;
  obj9.children = gesture1(unlockedEmojis(tmp4Result2Result[18]), { active, showKeyboardIcon, onPress: callback2 });
  const items6 = [gesture1(unlockedEmojis(tmp4Result2Result[13]).View, obj9)];
  if (null == tmp12) {
    items6[1] = tmp29;
    obj8.children = items6;
    obj7.children = gesture2(tmp27, obj8);
    obj5.children = tmp26(tmp27, obj7);
    return tmp26(tmp2(tmp4Result2Result[17]).GestureDetector, obj5);
  } else {
    const obj10 = { style: null, pointerEvents: null, children: null };
    const items7 = [tmp7.glyphOverlay, animatedStyle];
    obj10.style = items7;
    let str2 = "none";
    if (null != first) {
      str2 = "auto";
    }
    obj10.pointerEvents = str2;
    const obj11 = {
      style: tmp7.glyphButton,
      accessibilityRole: "button",
      accessibilityLabel: null,
      onPress: null,
      children: null,
    };
    const intl = tmp2(tmp4Result2Result[20]).intl;
    obj11.accessibilityLabel = intl.string(tmp2(tmp4Result2Result[20]).t.iZ7Mz9);
    obj11.onPress = callback;
    if (null == tmp12.id) {
      const obj12 = { allowFontScaling: false, style: tmp7.surrogates, children: tmp12.surrogates };
      obj11.children = tmp26(tmp2(tmp4Result2Result[26]).LegacyText, obj12);
      obj10.children = tmp26(tmp2(tmp4Result2Result[19]).PressableOpacity, obj11);
      tmp26(tmp4(tmp4Result2Result[13]).View, obj10);
    }
    const obj13 = { resizeMode: "contain", style: tmp7.image, placeholder: null, source: null, usesSmallCache: true };
    const tmp4Result = tmp4(tmp4Result2Result[21]);
    if (tmp2Result8.isThemeDark(sharedValue.theme)) {
      let tmp4Result3 = tmp4(tmp4Result2Result[23]);
    } else {
      tmp4Result3 = tmp4(tmp4Result2Result[24]);
    }
    obj13.placeholder = tmp4Result3;
    const obj14 = { uri: null };
    tmp2Result8 = tmp2(tmp4Result2Result[22]);
    tmp4Result2Result = tmp4(tmp4Result2Result[25])(tmp12, false, token - tmp4(tmp4Result2Result[8]).space.PX_8);
    obj14.uri = tmp4Result2Result;
    obj13.source = obj14;
    tmp26(tmp4Result, obj13);
    const tmp4Result4 = tmp4(tmp4Result2Result[25]);
  }
};
