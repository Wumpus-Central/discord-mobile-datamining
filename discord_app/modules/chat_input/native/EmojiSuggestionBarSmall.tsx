// === Module 12431: EmojiSuggestionBarSmall ===

// Module 12431 (EmojiSuggestionBarSmall)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import EmojiPickerListRow from "EmojiPickerListRow" /* 10310 */;
import openEmojiActionSheet2 from "openEmojiActionSheet" /* 10328 */;
import EmojiSuggestionBarUtils from "EmojiSuggestionBarUtils" /* 12426 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  displayEmojis = displayEmojis.displayEmojis;
  ({ reducedMotion: importDefault, handlePress: dependencyMap, handlePressEmojiUnavailable: noop, transitionState } = displayEmojis);
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  let obj = displayEmojis(12426);
  const suggestionBarHeight = obj.useSuggestionBarHeight(transitionState, cleanUp, CONTAINER_SMALL_WRAPPER_HEIGHT, onOccupiedHeightChange);
  const tmp = closure_7(displayEmojis.anchorTop);
  class A {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[6]);
      items = [0];
      items[1] = closure_6;
      obj.opacity = obj2.interpolate(closure_4.get(), items, [0, 1]);
      return obj;
    }
  }
  obj = { interpolate: displayEmojis(4296).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT };
  A.__closure = obj;
  A.__workletHash = 1856279964267;
  A.__initData = __initData;
  const animatedStyle = displayEmojis(4296).useAnimatedStyle(A);
  obj = {
    style: null,
    children: displayEmojis.map((emoji, index) => {
      const locked = emoji.locked;
      let obj = { index, reducedMotion, children: null };
      obj = { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : dependencyMap, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false };
      if (locked) {
        let openEmojiActionSheet = noop;
      } else {
        openEmojiActionSheet = openEmojiActionSheet2.openEmojiActionSheet;
      }
      obj.onLongPressEmoji = openEmojiActionSheet;
      obj.animateEmoji = !reducedMotion;
      obj.children = jsx(EmojiPickerListRow.EmojiItem, { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : dependencyMap, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false });
      return jsx(EmojiSuggestionBarUtils.EmojiEntranceAnimation, { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? noop : dependencyMap, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false }, EmojiSuggestionBarUtils.getEmojiEntranceKey(displayEmojis, index));
    })
  };
  let items = [tmp.containerSmall, animatedStyle];
  obj.style = items;
  return suggestionBarHeight(ReanimatedRexportDefault.View, obj);
}
const jsx = fn(21).jsx;
const sum = fn(10290).IMAGE_SIZE + 2 * nativeDefault.space.PX_8 + 2;
const hasOwnProperty = sum;
const CONTAINER_SMALL_WRAPPER_HEIGHT = sum + nativeDefault.space.PX_8;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { containerSmall: null };
  const rect = { position: "absolute", top: null, right: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, height: sum, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  const diff = arg0 - sum;
  rect.top = diff - nativeDefault.space.PX_8;
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.containerSmall = rect;
  return obj;
});
const __initData = { code: "function EmojiSuggestionBarSmallTsx1(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export const EmojiSuggestionBarSmall = noop.forwardRef((anchorTop, arg1) => {
  anchorTop = anchorTop.anchorTop;
  const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
  let unlockedEmojis;
  let merged = Object.assign(anchorTop, Object.assign({ anchorTop: 0, onOccupiedHeightChange: 0 }));
  const emojiSuggestionBarState = anchorTop(unlockedEmojis[5]).useEmojiSuggestionBarState(merged, anchorTop(unlockedEmojis[5]).MAX_SUGGESTIONS_LARGE, arg1);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  const lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  const reducedMotion = emojiSuggestionBarState.reducedMotion;
  const handlePress = emojiSuggestionBarState.handlePress;
  const handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
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
});