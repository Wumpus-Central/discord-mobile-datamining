// === Module 9410: ? ===

// Module 9410
import importAllResult from "noop";
import getEmojiToGroupId from "getEmojiToGroupId";
import { EmojiCategoryTypes } from "EmojiCategoryTypes";
import { IMAGE_SIZE } from "IMAGE_SIZE";
import { PADDING_VERTICAL } from "ExpressionPickerViewType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";
import BottomSheetModal from "BottomSheetModal";
import isMetaQuest from "isMetaQuest";
import importDefaultResult from "module_4054";

let c10;
let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { flex: 1 } });
let closure_12 = BottomSheetModal.createBottomSheetScrollableComponent(require("BottomSheetModal").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent);
isMetaQuest = isMetaQuest.isMetaQuest();
let closure_14 = { code: "function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}" };
let closure_15 = { code: "function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}" };
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  let paddingBottom;
  let paddingTop;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const bottomSheetIndex = analyticsLocations.bottomSheetIndex;
  const categoryIndexActive = analyticsLocations.categoryIndexActive;
  const data = analyticsLocations.data;
  const animateEmoji = analyticsLocations.animateEmoji;
  const guildId = analyticsLocations.guildId;
  const inPortalKeyboard = analyticsLocations.inPortalKeyboard;
  const onPressEmoji = analyticsLocations.onPressEmoji;
  const onLongPressEmoji = analyticsLocations.onLongPressEmoji;
  const onShowNitroUpsell = analyticsLocations.onShowNitroUpsell;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  ref = undefined;
  let callback;
  let callback1;
  ({ paddingTop, paddingBottom } = analyticsLocations);
  ref = data.useRef(null);
  const items = [ref, data];
  const effect = data.useEffect(() => {
    let hasGuildData = null != ref.current;
    if (hasGuildData) {
      hasGuildData = data.hasGuildData;
    }
    if (hasGuildData) {
      const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
      Commands.refreshEmojis(ref.current);
    }
  }, items);
  callback = data.useCallback((arg0) => {
    if (null != ref.current) {
      const Commands = analyticsLocations(categoryIndexActive[8]).Commands;
      Commands.scrollingEnabled(tmp.current, arg0);
    }
  }, []);
  let obj = analyticsLocations(categoryIndexActive[7]);
  class H {
    constructor() {
      return bottomSheetIndex.get();
    }
  }
  H.__closure = { bottomSheetIndex };
  H.__workletHash = 10656486632396;
  H.__initData = closure_14;
  class D {
    constructor(arg0) {
      tmp = !inPortalKeyboard;
      if (inPortalKeyboard) {
        num = 0;
        tmp = analyticsLocations < 0;
      }
      if (!tmp) {
        tmp = f82601;
      }
      if (!tmp) {
        num2 = 0;
        if (0 === analyticsLocations) {
          tmp6 = analyticsLocations;
          tmp7 = categoryIndexActive;
          obj2 = analyticsLocations(categoryIndexActive[7]);
          tmp8 = c12;
          flag2 = false;
          tmp9 = obj2.runOnJS(c12)(false);
        } else {
          num3 = 1;
          if (1 === analyticsLocations) {
            tmp2 = analyticsLocations;
            tmp3 = categoryIndexActive;
            obj = analyticsLocations(categoryIndexActive[7]);
            tmp4 = c12;
            flag = true;
            tmp5 = obj.runOnJS(c12)(true);
          }
        }
      }
      return;
    }
  }
  obj = { inPortalKeyboard, IS_META_QUEST: callback1, runOnJS: analyticsLocations(categoryIndexActive[7]).runOnJS, scrollingEnabled: callback };
  D.__closure = obj;
  D.__workletHash = 2460528828147;
  D.__initData = closure_15;
  const animatedReaction = obj.useAnimatedReaction(H, D);
  const items1 = [guildId];
  callback1 = data.useCallback((emojiId) => {
    emojiId = emojiId.emojiId;
    if (null != emojiId) {
      const disambiguatedEmojiContext = animateEmoji.getDisambiguatedEmojiContext(guildId);
      let byId = disambiguatedEmojiContext.getById(emojiId);
    } else {
      byId = bottomSheetIndex(categoryIndexActive[11]).getByName(tmp);
      const obj = bottomSheetIndex(categoryIndexActive[11]);
    }
    return byId;
  }, items1);
  const items2 = [onPressEmoji, callback1];
  const items3 = [onLongPressEmoji, callback1];
  const callback2 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onPressEmoji(tmp);
    }
  }, items2);
  const items4 = [categoryIndexActive];
  const callback3 = data.useCallback((nativeEvent) => {
    const tmp = callback1(nativeEvent.nativeEvent);
    if (null != tmp) {
      onLongPressEmoji(tmp);
    }
  }, items3);
  const items5 = [onShowNitroUpsell];
  const callback4 = data.useCallback((nativeEvent) => {
    const result = categoryIndexActive.set(nativeEvent.nativeEvent.index);
  }, items4);
  const callback5 = data.useCallback((nativeEvent) => {
    onShowNitroUpsell(nativeEvent.nativeEvent.showNitroUpsell);
  }, items5);
  const imperativeHandle = data.useImperativeHandle(ref, () => ({
    scrollToHeaderIndex(animated) {
      let flag = animated.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != ref.current) {
        const Commands = outer1_0(outer1_2[8]).Commands;
        Commands.scrollToHeaderIndex(tmp.current, animated.index, flag);
      }
    },
    forceUpdate() {

    },
    onStickyHeaderRendered() {

    }
  }));
  const items6 = [animateEmoji];
  obj = { config: data.useMemo(() => ({ animateEmoji, scrollFastOptimizationEnabled: true, scrollFastVelocity: 8000, disableAnimationsOnScroll: true }), items6), emojiData: data, emojiMargin: onPressEmoji, emojiSize: inPortalKeyboard, onPressEmoji: callback2, onLongPressEmoji: callback3, onStickyHeaderRender: callback4, onShowNitroUpsell: callback5, paddingTop, paddingBottom, useTier0UpsellContent, ref, style: ref().container };
  const items7 = [guildId, analyticsLocations, useTier0UpsellContent, data.hasSearchUpsell];
  let tmp = ref();
  const obj1 = { children: null };
  const items8 = [
    onLongPressEmoji(callback, obj),
    data.useMemo(() => {
      let tmp = null;
      if (data.hasSearchUpsell) {
        let obj = { portalId: null, children: null };
        obj[0] = guildId.PREMIUM_UPSELL;
        obj = { guildId: null, analyticsLocations: null, useTier0UpsellContent: null };
        obj[0] = guildId;
        obj[1] = analyticsLocations;
        obj[2] = useTier0UpsellContent;
        obj[1] = onLongPressEmoji(analyticsLocations(categoryIndexActive[13]).PremiumSearchUpsell, obj);
        tmp = onLongPressEmoji(bottomSheetIndex(categoryIndexActive[12]), obj);
        const tmp5 = bottomSheetIndex(categoryIndexActive[12]);
      }
      return tmp;
    }, items7)
  ];
  obj1[0] = items8;
  return useTier0UpsellContent(onShowNitroUpsell, obj1);
});
let result = require("EmojiCategoryTypes").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx");

export default forwardRefResult;