// === Module 12231: EmojiSuggestionBarSmallAnimated ===

// Module 12231 (EmojiSuggestionBarSmallAnimated)
import ThemesDefault from "Themes" /* 709 */;
import _modDef4217 from "module_4217" /* 4217 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function EmojiSuggestionBarSmallAnimated(displayEmojis) {
  displayEmojis = displayEmojis.displayEmojis;
  ({ reducedMotion: importDefault, handlePress: dependencyMap, handlePressEmojiUnavailable: closure_3, transitionState } = displayEmojis);
  let suggestionBarHeight;
  ({ onOccupiedHeightChange, cleanUp } = displayEmojis);
  let obj = displayEmojis(12226);
  suggestionBarHeight = obj.useSuggestionBarHeight(transitionState, cleanUp, closure_6, onOccupiedHeightChange);
  const tmp = callback(displayEmojis.anchorTop);
  class A {
    constructor() {
      obj = { opacity: null };
      obj2 = displayEmojis(handlePress[6]);
      items = [0];
      items[1] = closure_1_6;
      obj[0] = obj2.interpolate(closure_4.get(), items, [0, 1]);
      return obj;
    }
  }
  obj = { interpolate: displayEmojis(4217).interpolate, heightSv: suggestionBarHeight, CONTAINER_SMALL_WRAPPER_HEIGHT: closure_6 };
  A.__closure = obj;
  A.__workletHash = 1856279964267;
  A.__initData = closure_8;
  const animatedStyle = displayEmojis(4217).useAnimatedStyle(A);
  obj = {
    style: items,
    children: displayEmojis.map((emoji, index) => {
      const locked = emoji.locked;
      let obj = { index, reducedMotion: closure_1, children: null };
      obj = { emoji: emoji.emoji, disabled: locked, onPressEmoji: locked ? closure_3 : closure_2, onLongPressEmoji: null, animateEmoji: null, isSectionNitroLocked: false };
      if (locked) {
        let openEmojiActionSheet = closure_3;
      } else {
        openEmojiActionSheet = tmp2(tmp3[8]).openEmojiActionSheet;
      }
      obj[3] = openEmojiActionSheet;
      obj[4] = !closure_1;
      obj[2] = suggestionBarHeight(displayEmojis(closure_1_2[7]).EmojiItem, obj);
      return suggestionBarHeight(displayEmojis(closure_1_2[5]).EmojiEntranceAnimation, obj, displayEmojis(closure_1_2[5]).getEmojiEntranceKey(displayEmojis, index));
    })
  };
  items = [tmp.containerSmall, animatedStyle];
  return suggestionBarHeight(_modDef4217.View, obj);
}
let c3 = importAllResult;
const sum = require("IMAGE_SIZE").IMAGE_SIZE + 2 * ThemesDefault.space.PX_8 + 2;
let c5 = sum;
let closure_6 = sum + ThemesDefault.space.PX_8;
let closure_7 = createCacheKey.createStyles((arg0) => {
  let obj = { containerSmall: null };
  obj = { position: "absolute", top: diff - ThemesDefault.space.PX_8, right: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, height: closure_5, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_8, borderWidth: 1, borderColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BORDER, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
  diff = arg0 - closure_5;
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
  obj[0] = obj;
  return obj;
});
let closure_8 = { code: "function EmojiSuggestionBarSmallTsx1(){const{interpolate,heightSv,CONTAINER_SMALL_WRAPPER_HEIGHT}=this.__closure;return{opacity:interpolate(heightSv.get(),[0,CONTAINER_SMALL_WRAPPER_HEIGHT],[0,1])};}" };
const forwardRefResult = importAllResult.forwardRef((anchorTop, ref) => {
  anchorTop = anchorTop.anchorTop;
  const onOccupiedHeightChange = anchorTop.onOccupiedHeightChange;
  let unlockedEmojis;
  let lockedEmojis;
  let reducedMotion;
  let handlePress;
  let handlePressEmojiUnavailable;
  let merged = Object.assign(anchorTop, Object.create(null));
  const emojiSuggestionBarState = anchorTop(unlockedEmojis[5]).useEmojiSuggestionBarState(merged, anchorTop(unlockedEmojis[5]).MAX_SUGGESTIONS_LARGE, ref);
  unlockedEmojis = emojiSuggestionBarState.unlockedEmojis;
  lockedEmojis = emojiSuggestionBarState.lockedEmojis;
  reducedMotion = emojiSuggestionBarState.reducedMotion;
  handlePress = emojiSuggestionBarState.handlePress;
  handlePressEmojiUnavailable = emojiSuggestionBarState.handlePressEmojiUnavailable;
  const items = [unlockedEmojis, lockedEmojis, reducedMotion, handlePress, handlePressEmojiUnavailable];
  const items1 = [anchorTop, onOccupiedHeightChange];
  const item = lockedEmojis.useMemo(() => {
    const obj = { displayEmojis: anchorTop(unlockedEmojis[5]).sortEmojisForDisplay(unlockedEmojis, lockedEmojis.slice(0, 2), 3), reducedMotion, handlePress, handlePressEmojiUnavailable };
    return obj;
  }, items);
  const renderItem = lockedEmojis.useCallback((arg0, arg1, transitionState, cleanUp) => {
    const obj = {};
    const merged = Object.assign(arg1);
    obj.anchorTop = anchorTop;
    obj.onOccupiedHeightChange = onOccupiedHeightChange;
    obj.transitionState = transitionState;
    obj.cleanUp = cleanUp;
    return reducedMotion(closure_1_9, obj, arg0);
  }, items1);
  return reducedMotion(anchorTop(unlockedEmojis[9]).TransitionItem, { item, renderItem });
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/EmojiSuggestionBarSmall.tsx");

export const EmojiSuggestionBarSmall = forwardRefResult;