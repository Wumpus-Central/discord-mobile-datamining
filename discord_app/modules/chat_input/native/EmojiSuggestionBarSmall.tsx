// === Module 14238: EmojiSuggestionBarSmall ===

// Module 14238 (EmojiSuggestionBarSmall)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 10147 */;
import openEmojiActionSheet2 from "openEmojiActionSheet" /* 10171 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 14223 */;
import noop from "module_19" /* 19 */;

require = fn;
function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  displayEmojis = displayEmojis.displayEmojis;
  _require = displayEmojis;
  ({ reducedMotion: c1, handlePress: c2, handlePressEmojiUnavailable: noop, transitionState } = displayEmojis);
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  const tmp = closure_7(displayEmojis.anchorTop);
  const suggestionBarHeight = require("EmojiSuggestionBarUtils").useSuggestionBarHeight(transitionState, cleanUp, closure_6, onOccupiedHeightChange);
  let obj = require("EmojiSuggestionBarUtils");
  items = [closure_8, require("module_1652").interpolate, suggestionBarHeight, closure_6];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class EmojiSuggestionBarSmallTsx1 {
    constructor() {
      obj = { opacity: null };
      items = [0];
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), items, [0, 1]);
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  EmojiSuggestionBarSmallTsx1.__closure = items1;
  EmojiSuggestionBarSmallTsx1.__workletHash = 1179846537362;
  EmojiSuggestionBarSmallTsx1.__initData = tmp4;
  const animatedStyle = require("module_1652").useAnimatedStyle(EmojiSuggestionBarSmallTsx1);
  const obj3 = {
    style: null,
    children: displayEmojis.map((emoji, index) => {
      const locked = emoji.locked;
      const obj = { index, reducedMotion, children: null };
      const obj2 = { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : c2, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false };
      if (locked) {
        let openEmojiActionSheet = noop;
      } else {
        openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
      }
      obj2.onLongPressEmoji = openEmojiActionSheet;
      obj2.animateEmoji = !reducedMotion;
      obj.children = jsx(EmojiPickerListRow.EmojiItem, { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : c2, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false });
      return jsx(EmojiSuggestionBarUtils.EmojiEntranceAnimation, { index, reducedMotion, children: null }, EmojiSuggestionBarUtils.getEmojiEntranceKey(c0, index));
    })
  };
  const items2 = [tmp.containerSmall, animatedStyle];
  obj3.style = items2;
  return jsx(_modDef1652.View, {
    style: null,
    children: displayEmojis.map((emoji, index) => {
      const locked = emoji.locked;
      const obj = { index, reducedMotion, children: null };
      const obj2 = { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : c2, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false };
      if (locked) {
        let openEmojiActionSheet = noop;
      } else {
        openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
      }
      obj2.onLongPressEmoji = openEmojiActionSheet;
      obj2.animateEmoji = !reducedMotion;
      obj.children = jsx(EmojiPickerListRow.EmojiItem, { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : c2, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false });
      return jsx(EmojiSuggestionBarUtils.EmojiEntranceAnimation, { index, reducedMotion, children: null }, EmojiSuggestionBarUtils.getEmojiEntranceKey(c0, index));
    })
  });
}
const jsx = fn(21).jsx;
const sum = fn(10064).IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const hasOwnProperty = sum;
let closure_6 = sum + nativeDefault.space.PX_8;
const createStyles = fn(5140);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { containerSmall: null };
  const rect = { position: "absolute", top: null, right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, height: sum, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  const diff = arg0 - sum;
  rect.top = diff - nativeDefault.space.PX_8;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.containerSmall = rect;
  return obj;
});
let closure_8 = { code: "(function EmojiSuggestionBarSmallTsx1(){let[interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT]=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export function EmojiSuggestionBarSmall(anchorTop) {
  anchorTop = anchorTop.anchorTop;
  const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
  let merged = Object.assign(anchorTop, Object.assign({ anchorTop: 0, onOccupiedHeightChange: 0, ref: 0 }));
  let unlockedEmojis;
  const emojiSuggestionBarState = anchorTop(unlockedEmojis[5]).useEmojiSuggestionBarState(merged, anchorTop(unlockedEmojis[5]).MAX_SUGGESTIONS_LARGE, 1, anchorTop.ref);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const items1 = [anchorTop, onOccupiedHeightChange];
  const item = lockedEmojis.useMemo(() => {
    const obj = { displayEmojis: EmojiSuggestionBarUtils.sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3), reducedMotion, handlePress, handlePressEmojiUnavailable };
    return obj;
  }, items);
  const renderItem = lockedEmojis.useCallback((key, arg1, transitionState, cleanUp) => {
    const obj = {};
    const merged = Object.assign(arg1);
    obj.anchorTop = anchorTop;
    obj.onOccupiedHeightChange = onOccupiedHeightChange;
    obj.transitionState = transitionState;
    obj.cleanUp = cleanUp;
    return <EmojiSuggestionBarSmallAnimated key={key} />;
  }, items1);
  return reducedMotion(anchorTop(unlockedEmojis[9]).TransitionItem, { item, renderItem });
}