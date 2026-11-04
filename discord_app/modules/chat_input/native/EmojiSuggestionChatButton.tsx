// discord_app/modules/chat_input/native/EmojiSuggestionChatButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import LegacyBaseButton from "../../../../_runtime/05428_LegacyBaseButton.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const ContentDismissActionType = fn(4987).ContentDismissActionType;
const ExpressionPickerViewType = fn(1228).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5141);
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
  code: "(function EmojiSuggestionChatButtonTsx1(finished){let[scheduleOnRN,setDisplayedEmoji]=this.__closure;if(finished===true){scheduleOnRN(setDisplayedEmoji,undefined);}})",
};
let closure_14 = {
  code: "(function EmojiSuggestionChatButtonTsx2(){let[emojiAnimationProgress]=this.__closure;return{opacity:emojiAnimationProgress.get(),transform:[{scale:emojiAnimationProgress.get()}]};})",
};
let closure_15 = {
  code: "(function EmojiSuggestionChatButtonTsx3(){let[emojiAnimationProgress]=this.__closure;return{opacity:1-emojiAnimationProgress.get()};})",
};
let closure_16 = {
  code: "(function EmojiSuggestionChatButtonTsx4(){let[scheduleOnRN,insertTopEmoji]=this.__closure;scheduleOnRN(insertTopEmoji);})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionChatButton.tsx");

export function EmojiSuggestionChatButton(arg0) {
  ({ active, onPress } = arg0);
  _require = onPress;
  ({ style, showKeyboardIcon, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, active: 0, showKeyboardIcon: 0, onPress: 0, ref: 0 }));
  let unlockedEmojis;
  let lockedEmojis;
  c5 = undefined;
  let dismissCoachmark;
  let sharedValue;
  let callback1;
  gesture = undefined;
  let gesture1;
  let gesture2;
  let tmp4Result2Result = lockedEmojis;
  const token = require("useToken").useToken(
    unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  );
  let obj = require("useToken");
  const token1 = require("useToken").useToken(
    unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
  );
  let obj2 = require("useToken");
  const tmp7 = closure_12(
    token,
    (token1 - token) / 2 +
      require("useToken").useToken(
        unlockedEmojis(lockedEmojis[8]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
      ),
  );
  const obj3 = require("useToken");
  const emojiSuggestionBarState = require("EmojiSuggestionBarUtils").useEmojiSuggestionBarState(
    merged,
    require("EmojiSuggestionBarUtils").MAX_SUGGESTIONS_LARGE,
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
  const obj4 = require("EmojiSuggestionBarUtils");
  [tmp12, c5] = handlePress(first.useState(first), 2);
  const ref1 = first.useRef(null);
  dismissCoachmark = tmp4(tmp4Result2Result[12])(ref1, null != first).dismissCoachmark;
  const tmp11 = handlePress(first.useState(first), 2);
  let num = 0;
  if (null != first) {
    num = 1;
  }
  sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(num);
  items = [emojiIdentity];
  const effect = obj6.useEffect(() => {
    if (null != first) {
      _undefined2(tmp);
      const result = sharedValue.set(spring_spring.withSpring(1, EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG));
    } else {
      const obj2 = spring_spring;
      const ITEM_ENTRANCE_SPRING_CONFIG = EmojiSuggestionBarUtils.ITEM_ENTRANCE_SPRING_CONFIG;
      items = [closure_13, _mod1705.scheduleOnRN, _undefined2];
      c0 = undefined;
      c1 = undefined;
      [tmp2, tmp3, tmp4] = items;
      class EmojiSuggestionChatButtonTsx1 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1, undefined);
          }
          return;
        }
      }
      const items1 = [tmp3, tmp4];
      EmojiSuggestionChatButtonTsx1.__closure = items1;
      EmojiSuggestionChatButtonTsx1.__workletHash = 5025215433738;
      EmojiSuggestionChatButtonTsx1.__initData = tmp2;
      const result1 = sharedValue.set(
        obj2.withSpring(0, ITEM_ENTRANCE_SPRING_CONFIG, "respect-motion-settings", EmojiSuggestionChatButtonTsx1),
      );
    }
  }, items);
  const tmp2Result5 = require("../../../../_runtime/metro/01652__.js");
  let items1 = [closure_14, sharedValue];
  _require = undefined;
  [tmp16, tmp17] = items1;
  class EmojiSuggestionChatButtonTsx2 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  let items2 = [tmp17];
  EmojiSuggestionChatButtonTsx2.__closure = items2;
  EmojiSuggestionChatButtonTsx2.__workletHash = 5109148724809;
  EmojiSuggestionChatButtonTsx2.__initData = tmp16;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    EmojiSuggestionChatButtonTsx2,
  );
  const tmp2Result6 = require("../../../../_runtime/metro/01652__.js");
  let items3 = [closure_15, sharedValue];
  _require = undefined;
  [tmp19, tmp20] = items3;
  class EmojiSuggestionChatButtonTsx3 {
    constructor() {
      obj = { opacity: 1 - closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp20];
  EmojiSuggestionChatButtonTsx3.__closure = items4;
  EmojiSuggestionChatButtonTsx3.__workletHash = 9498675997018;
  EmojiSuggestionChatButtonTsx3.__initData = tmp19;
  const items5 = [dismissCoachmark, onPress, unlockedEmojis, lockedEmojis];
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    EmojiSuggestionChatButtonTsx3,
  );
  const items6 = [first, handlePress];
  const callback = obj6.useCallback(() => {
    dismissCoachmark(ContentDismissActionType.TAKE_ACTION);
    _undefined(ExpressionPickerViewType.EMOJI, { unlocked: unlockedEmojis, locked: lockedEmojis });
  }, items5);
  callback1 = obj6.useCallback(() => {
    if (null != first) {
      handlePress(tmp);
    }
  }, items6);
  gesture = obj6.useContext(tmp4(tmp4Result2Result[16])).gesture;
  const context = obj6.useContext(tmp2(tmp4Result2Result[16]).MainTabsChannelScreenStackContext);
  gesture1 = undefined;
  if (context != null) {
    gesture1 = context.gesture;
  }
  const context1 = obj6.useContext(tmp2(tmp4Result2Result[17]).SwipeForMemberListContext);
  gesture2 = undefined;
  if (context1 != null) {
    gesture2 = context1.gesture;
  }
  const items7 = [first, callback1, gesture, gesture1, gesture2];
  const items8 = [onPress, unlockedEmojis, lockedEmojis];
  const memo = obj6.useMemo(() => {
    items = [gesture, gesture1, gesture2];
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
    const items2 = [closure_16, _mod1705.scheduleOnRN, callback1];
    c0 = undefined;
    c1 = undefined;
    [tmp3, tmp4, tmp5] = items2;
    class EmojiSuggestionChatButtonTsx4 {
      constructor() {
        tmp = closure_0(closure_1);
        return;
      }
    }
    const items3 = [tmp4, tmp5];
    EmojiSuggestionChatButtonTsx4.__closure = items3;
    EmojiSuggestionChatButtonTsx4.__workletHash = 15406539784442;
    EmojiSuggestionChatButtonTsx4.__initData = tmp3;
    return Gesture.Pan()
      .enabled(null != first)
      .blocksExternalGesture.apply(items1)
      .activeOffsetX(-15)
      .failOffsetX(15)
      .failOffsetY([-15, 15])
      .onStart(EmojiSuggestionChatButtonTsx4);
  }, items7);
  const callback2 = obj6.useCallback((arg0) => {
    _undefined(arg0, { unlocked: unlockedEmojis, locked: lockedEmojis });
  }, items8);
  const obj5 = { gesture: memo, children: null };
  const obj7 = { style: tmp7.swipeArea, children: null };
  const obj8 = { ref: ref1, collapsable: false, style: null, children: null };
  const items9 = [tmp7.wrapper, style];
  obj8.style = items9;
  const obj9 = { style: animatedStyle1, pointerEvents: null, children: null };
  let str = "auto";
  if (null != tmp12) {
    str = "none";
  }
  obj9.pointerEvents = str;
  obj9.children = gesture1(unlockedEmojis(tmp4Result2Result[19]), { active, showKeyboardIcon, onPress: callback2 });
  const items10 = [gesture1(unlockedEmojis(tmp4Result2Result[13]).View, obj9)];
  if (null == tmp12) {
    items10[1] = tmp33;
    obj8.children = items10;
    obj7.children = gesture2(tmp31, obj8);
    obj5.children = tmp30(tmp31, obj7);
    return tmp30(tmp2(tmp4Result2Result[18]).GestureDetector, obj5);
  } else {
    const obj10 = { style: null, pointerEvents: null, children: null };
    const items11 = [tmp7.glyphOverlay, animatedStyle];
    obj10.style = items11;
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
    const intl = tmp2(tmp4Result2Result[21]).intl;
    obj11.accessibilityLabel = intl.string(tmp2(tmp4Result2Result[21]).t.iZ7Mz9);
    obj11.onPress = callback;
    if (null == tmp12.id) {
      const obj12 = { allowFontScaling: false, style: tmp7.surrogates, children: tmp12.surrogates };
      obj11.children = tmp30(tmp2(tmp4Result2Result[27]).LegacyText, obj12);
      obj10.children = tmp30(tmp2(tmp4Result2Result[20]).PressableOpacity, obj11);
      tmp30(tmp4(tmp4Result2Result[13]).View, obj10);
    }
    const obj13 = { resizeMode: "contain", style: tmp7.image, placeholder: null, source: null, usesSmallCache: true };
    const tmp4Result = tmp4(tmp4Result2Result[22]);
    if (tmp2Result8.isThemeDark(sharedValue.theme)) {
      let tmp4Result3 = tmp4(tmp4Result2Result[24]);
    } else {
      tmp4Result3 = tmp4(tmp4Result2Result[25]);
    }
    obj13.placeholder = tmp4Result3;
    const obj14 = { uri: null };
    tmp2Result8 = tmp2(tmp4Result2Result[23]);
    tmp4Result2Result = tmp4(tmp4Result2Result[26])(tmp12, false, token - tmp4(tmp4Result2Result[8]).space.PX_8);
    obj14.uri = tmp4Result2Result;
    obj13.source = obj14;
    tmp30(tmp4Result, obj13);
    const tmp4Result4 = tmp4(tmp4Result2Result[26]);
  }
}
