// === Module 10171: EmojiPickerListComponent ===

// Module 10171 (EmojiPickerListComponent)
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5087 */;
import PortalToNativeViewDefault from "PortalToNativeView" /* 7359 */;
import EmojiPickerPremiumSearchUpsell from "EmojiPickerPremiumSearchUpsell" /* 10160 */;
import EmojiPickerNativeComponent2 from "EmojiPickerNativeComponent" /* 10172 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 6916 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;
const EmojiPickerNativeComponentDefault = EmojiPickerNativeComponent2;

require = fn;
const EmojiCategoryTypes = fn(6919).EmojiCategoryTypes;
const IMAGE_SIZE = fn(10073).IMAGE_SIZE;
const PADDING_VERTICAL = fn(1228).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let closure_11 = createStyles.createStyles({ container: { flex: 1 } });
const EmojiPickerNativeComponent = module_1652.createAnimatedComponent(EmojiPickerNativeComponentDefault);
const BottomSheetModal = fn(5398);
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(fn(5398).SCROLLABLE_TYPE.SCROLLVIEW, EmojiPickerNativeComponent);
const MetaQuestUtils = fn(1624);
let closure_13 = MetaQuestUtils.isMetaQuest();
let closure_14 = { code: "(function EmojiPickerListComponentAndroidTsx1(){let[bottomSheetIndex]=this.__closure;return bottomSheetIndex.get();})" };
let closure_15 = { code: "(function EmojiPickerListComponentAndroidTsx2(index){let[inPortalKeyboard,IS_META_QUEST,scheduleOnRN,scrollingEnabled]=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){scheduleOnRN(scrollingEnabled,false);}else if(index===1){scheduleOnRN(scrollingEnabled,true);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default function EmojiPickerListComponent(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  _require = analyticsLocations;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  c1 = categoryIndexActive;
  const data = analyticsLocations.data;
  dependencyMap = data;
  const animateEmoji = analyticsLocations.animateEmoji;
  noop = animateEmoji;
  const guildId = analyticsLocations.guildId;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let callback1;
  ({ bottomSheetIndex, inPortalKeyboard, paddingTop, paddingBottom, ref } = analyticsLocations);
  const ref1 = noop.useRef(null);
  items = [ref1, data];
  const effect = noop.useEffect(() => {
    let hasGuildData = null != ref1.current;
    if (hasGuildData) {
      hasGuildData = _undefined2.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.refreshEmojis(ref1.current);
    }
  }, items);
  const callback = noop.useCallback((arg0) => {
    if (null != ref1.current) {
      const Commands = EmojiPickerNativeComponent2.Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let tmp = closure_11();
  let tmp5 = _require;
  const items1 = [closure_14, bottomSheetIndex];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class EmojiPickerListComponentAndroidTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp8];
  EmojiPickerListComponentAndroidTsx1.__closure = items2;
  EmojiPickerListComponentAndroidTsx1.__workletHash = 7865271848533;
  EmojiPickerListComponentAndroidTsx1.__initData = tmp7;
  const items3 = [closure_15, inPortalKeyboard, closure_13, tmp5(1705).scheduleOnRN, callback];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items3;
  class EmojiPickerListComponentAndroidTsx2 {
    constructor(arg0) {
      tmp = !closure_0;
      if (closure_0) {
        num = 0;
        tmp = analyticsLocations < 0;
      }
      if (!tmp) {
        tmp = closure_1;
      }
      if (!tmp) {
        num2 = 0;
        if (0 === analyticsLocations) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          flag2 = false;
          tmp7 = closure_2(closure_3, false);
        } else {
          num3 = 1;
          if (1 === analyticsLocations) {
            tmp2 = closure_2;
            tmp3 = closure_3;
            flag = true;
            tmp4 = closure_2(closure_3, true);
          }
        }
      }
      return;
    }
  }
  const items4 = [tmp10, tmp11, tmp12, tmp13];
  EmojiPickerListComponentAndroidTsx2.__closure = items4;
  EmojiPickerListComponentAndroidTsx2.__workletHash = 15639036497539;
  EmojiPickerListComponentAndroidTsx2.__initData = tmp9;
  const animatedReaction = require("module_1652").useAnimatedReaction(EmojiPickerListComponentAndroidTsx1, EmojiPickerListComponentAndroidTsx2);
  const items5 = [guildId];
  callback1 = obj.useCallback((emojiId) => {
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      let byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      byId = UnicodeEmojisDefault.getByName(tmp);
    }
    return byId;
  }, items5);
  const items6 = [onPressEmoji, callback1];
  const items7 = [onLongPressEmoji, callback1];
  const callback2 = obj.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items6);
  const items8 = [categoryIndexActive];
  const callback3 = obj.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items7);
  const items9 = [onShowNitroUpsell];
  const callback4 = obj.useCallback((nativeEvent) => {
    const result = _undefined.set(nativeEvent.nativeEvent.index);
  }, items8);
  const callback5 = obj.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items9);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = c0(c2[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, animated.index, flag);
      }
    },
    forceUpdate() {

    },
    onStickyHeaderRendered() {

    }
  }));
  const items10 = [animateEmoji];
  let obj2 = require("module_1652");
  const items11 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  const obj3 = { config: noop.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items10), emojiData: data, emojiMargin: onShowNitroUpsell, emojiSize: onLongPressEmoji, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref: ref1, style: tmp.container };
  const obj4 = { children: null };
  const items12 = [
    useTier0UpsellContent(closure_12, { config: noop.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items10), emojiData: data, emojiMargin: onShowNitroUpsell, emojiSize: onLongPressEmoji, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref: ref1, style: tmp.container }),
    noop.useMemo(() => {
      let tmp = null;
      if (_undefined2.hasSearchUpsell) {
        const obj = { portalId: EmojiCategoryTypes.PREMIUM_UPSELL, children: null };
        const obj2 = { guildId, analyticsLocations, useTier0UpsellContent };
        obj.children = React6(EmojiPickerPremiumSearchUpsell.PremiumSearchUpsell, obj2);
        tmp = React6(PortalToNativeViewDefault, obj);
      }
      return tmp;
    }, items11)
  ];
  obj4.children = items12;
  return callback1(ref1, obj4);
};