// === Module 9967: EmojiPickerCategories ===

// Module 9967 (EmojiPickerCategories)
import nativeDefault from "native" /* 587 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4862 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5649 */;
import EmojiPickerCategoriesItemDefault from "EmojiPickerCategoriesItem" /* 9968 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let set;

let CATEGORY_ICON_SIZE;
let EXPRESSION_FOOTER_HEIGHT;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let unpackModuleId;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = Constants);
let ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, listPlaceholder: obj2, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "function EmojiPickerCategoriesTsx1(){const{categoryIndexActive}=this.__closure;return categoryIndexActive.get();}" };
let __initData = { code: "function EmojiPickerCategoriesTsx2(categoryIndex_0,categoryIndexPrev){const{blockRef,EXPRESSION_FOOTER_HEIGHT,runOnJS,scrollToCategoryIndex}=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex_0===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex_0*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){runOnJS(scrollToCategoryIndex)(categoryIndex_0);}}" };
let __initData2 = { code: "function EmojiPickerCategoriesTsx3(){const{inPortalKeyboard,bottomSheetIndex}=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
let closure_16 = { code: "function EmojiPickerCategoriesTsx4(){const{bottomSheetOpen}=this.__closure;return bottomSheetOpen.get();}" };
let closure_17 = { code: "function EmojiPickerCategoriesTsx5(open){const{runOnJS,handleScrollToCategoryIndex}=this.__closure;if(!open){return;}runOnJS(handleScrollToCategoryIndex)();}" };
const memoResult = react.memo(function EmojiPickerCategories(bottomSheetRef) {
  let closure_8;
  let firstUnicodeCategory;
  let firstUnicodeCategoryIndex;
  let isSearching;
  let items8;
  let obj9;
  let onBackspace;
  let portalHostName;
  let ref2;
  let ref3;
  let renderAhead;
  let sections;
  let tmp22;
  let tmp23;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const categories = bottomSheetRef.categories;
  const categoryIndexActive = bottomSheetRef.categoryIndexActive;
  const emojiPickerListRef = bottomSheetRef.emojiPickerListRef;
  ({ onBackspace, portalHostName } = bottomSheetRef);
  const style = bottomSheetRef.style;
  if (portalHostName === undefined) {
    portalHostName = "expression-footer";
  }
  let flag = bottomSheetRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  ({ isSearching, renderAhead } = bottomSheetRef);
  if (isSearching === undefined) {
    isSearching = false;
  }
  const onClearSearch = bottomSheetRef.onClearSearch;
  let scrollToCategoryIndex;
  let derivedValue;
  __initData = undefined;
  __initData2 = undefined;
  let callback2;
  let callback3;
  let tmp = scrollToCategoryIndex();
  ExpressionPickerViewType = tmp;
  let tmp2 = categories;
  let obj = bottomSheetRef(categories[7]);
  const sharedValue = obj.useSharedValue(undefined);
  categoryIndexActive.useRef(undefined);
  const ref = categoryIndexActive.useRef(null);
  let items = [categories];
  const memo = categoryIndexActive.useMemo(() => {
    let items;
    let items1;
    let arr = categories;
    let num = 0;
    if (0 < categories.length) {
      while (categories[num].type !== EmojiCategoryTypes.UNICODE) {
        num = num + 1;
        arr = categories;
      }
      const obj2 = { sections: items, firstUnicodeCategory: categories[num], firstUnicodeCategoryIndex: num };
      items = [categories.length];
      return obj2;
    }
    const obj = { sections: items1 };
    items1 = [arr.length];
    return obj;
  }, items);
  ({ firstUnicodeCategory, sections, firstUnicodeCategoryIndex } = memo);
  scrollToCategoryIndex = categoryIndexActive.useCallback((item) => {
    if (null != ref.current) {
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item, animated: false };
        current.scrollToLocation(obj);
      }
    }
  }, []);
  let obj2 = bottomSheetRef(categories[7]);
  const fn = function w() {
    return categoryIndexActive.get();
  };
  fn.__closure = { categoryIndexActive };
  fn.__workletHash = 2293356797932;
  fn.__initData = derivedValue;
  const fn2 = function j(arg0, arg1) {
    const value = sharedValue.get();
    if (null != arg1) {
      if (arg0 !== arg1) {
        if (null != value) {
          const result = arg0 * EXPRESSION_FOOTER_HEIGHT;
          const tmp5 = result > value.end || result < value.start;
          if (tmp5) {
            const obj = ReanimatedRexport;
            obj.runOnJS(callback)(arg0);
          }
        }
      }
    }
  };
  let obj3 = { blockRef: sharedValue, EXPRESSION_FOOTER_HEIGHT: onClearSearch, runOnJS: bottomSheetRef(categories[7]).runOnJS, scrollToCategoryIndex };
  fn2.__closure = obj3;
  fn2.__workletHash = 14214555212704;
  fn2.__initData = __initData;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  let items1 = [sharedValue];
  const callback1 = categoryIndexActive.useCallback((nativeEvent) => {
    if (null != ref.current) {
      const obj = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + tmp.current };
      const result = sharedValue.set(obj);
    }
  }, items1);
  let obj4 = bottomSheetRef(categories[7]);
  class X {
    constructor() {
      let tmp2;
      const value = bottomSheetIndex.get();
      if (flag) {
        tmp2 = 1 === value;
      } else {
        tmp2 = 0 === value;
      }
      return tmp2;
    }
  }
  X.__closure = { inPortalKeyboard: flag, bottomSheetIndex };
  X.__workletHash = 15413192314561;
  X.__initData = __initData2;
  derivedValue = obj4.useDerivedValue(X);
  __initData = categoryIndexActive.useRef(undefined);
  __initData2 = categoryIndexActive.useRef(false);
  const items2 = [derivedValue, bottomSheetRef, emojiPickerListRef, flag, isSearching, onClearSearch];
  callback2 = categoryIndexActive.useCallback(() => {
    let current = arg0;
    if (arg0 === undefined) {
      current = ref2.current;
    }
    if (null != current) {
      if (!derivedValue.get()) {
        const tmp3 = flag;
        if (tmp3) {
          if (bottomSheetRef != null) {
            const current2 = bottomSheetRef.current;
            if (current2 != null) {
              current2.expandActionSheet();
            }
          }
          ref2.current = current;
          ref3.current = false;
        }
        return tmp14;
      }
      if (isSearching) {
        if (null != onClearSearch) {
          ref2.current = current;
          ref3.current = true;
          tmp9();
        }
      }
      if (null != emojiPickerListRef.current) {
        ref2.current = undefined;
        ref3.current = false;
        const current3 = tmp10.current;
        const obj = { index: current };
        current3.scrollToHeaderIndex(obj);
      }
    }
  }, items2);
  const obj5 = bottomSheetRef(categories[7]);
  class B {
    constructor() {
      return derivedValue.get();
    }
  }
  B.__closure = { bottomSheetOpen: derivedValue };
  B.__workletHash = 13172461706889;
  B.__initData = callback2;
  const fn3 = function z(arg0) {
    const tmp = arg0;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback2)();
    }
  };
  fn3.__closure = { runOnJS: bottomSheetRef(categories[7]).runOnJS, handleScrollToCategoryIndex: callback2 };
  fn3.__workletHash = 13670816929775;
  fn3.__initData = callback3;
  ({ runOnJS: bottomSheetRef(categories[7]).runOnJS, handleScrollToCategoryIndex: callback2 });
  const animatedReaction1 = obj5.useAnimatedReaction(B, fn3);
  const items3 = [isSearching, categoryIndexActive, emojiPickerListRef];
  const effect = categoryIndexActive.useEffect(() => {
    if (!isSearching) {
      if (ref3.current) {
        if (null != ref2.current) {
          const current = ref2.current;
          ref2.current = undefined;
          tmp2.current = false;
          const result = categoryIndexActive.set(current);
          const current2 = emojiPickerListRef.current;
          if (current2 != null) {
            const obj = { index: current };
            current2.scrollToHeaderIndex(obj);
          }
        }
      }
    }
  }, items3);
  const items4 = [callback2];
  callback3 = categoryIndexActive.useCallback((arg0, type) => {
    let obj3;
    if (type.type === EmojiCategoryTypes.GUILD) {
      const guild = type.guild;
      if (null != guild) {
        const obj2 = { location: obj3, tab: ExpressionPickerViewType.EMOJI, guild_id: guild.id };
        obj3 = { page: metroRequire.EXPRESSION_PICKER };
        const obj = AnalyticsUtilsDefault;
        obj.track(hasOwnProperty.EXPRESSION_PICKER_CATEGORY_SELECTED, obj2);
      }
    }
    callback2(arg0);
    const obj4 = HapticUtils;
    const result = obj4.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items4);
  const items5 = [callback3, scrollToCategoryIndex];
  const items6 = [sharedValue];
  const callback4 = categoryIndexActive.useCallback((arg0, arg1) => {
    callback3(arg0, arg1);
    callback(arg0);
  }, items5);
  const items7 = [categories, categoryIndexActive, callback3, tmp];
  const callback5 = categoryIndexActive.useCallback((nativeEvent) => {
    let num2;
    ref.current = nativeEvent.nativeEvent.layout.width;
    const value = sharedValue.get();
    let num;
    set = sharedValue.set;
    if (value != null) {
      num = value.start;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { start: num, end: num2 + ref.current };
    num2 = undefined;
    if (value != null) {
      num2 = value.start;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const result = set(obj);
  }, items6);
  const callback6 = categoryIndexActive.useCallback((arg0, index) => {
    const obj = { category: categories[index], categoryIndexActive, index, handlePressCategory: callback3, loadingStyle: closure_8.listPlaceholder, locked: categories[index].isNitroLocked, style: closure_8.item };
    return React4(EmojiPickerCategoriesItemDefault, obj);
  }, items7);
  const tmp18 = bottomSheetIndex(categories[12])();
  const memo1 = categoryIndexActive.useMemo(() => {
    const Gesture = bottomSheetRef(categories[13]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  const obj7 = { portalHostName, style, children: tmp22(tmp23, { children: items8 }) };
  const obj8 = { gesture: memo1, children: sharedValue(bottomSheetIndex(categories[15]), obj9) };
  const tmp21 = bottomSheetIndex(categories[14]);
  const GestureDetector = bottomSheetRef(categories[13]).GestureDetector;
  obj9 = { estimatedListSize: "windowSize", horizontal: true, itemSize: onClearSearch, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.EMOJI, onLayout: callback5, onScroll: callback1, placeholderConfig: tmp18, ref, renderAhead, renderItem: callback6, scrollReporting: "callbacks", sections, showsHorizontalScrollIndicator: false, style: tmp.list };
  items8 = [sharedValue(GestureDetector, obj8), , ];
  let tmp20Result = null;
  tmp22 = ref;
  tmp23 = ref;
  if (null != firstUnicodeCategory) {
    const obj10 = { blockRef: sharedValue, category: firstUnicodeCategory, categoryIndex: firstUnicodeCategoryIndex, onPress: callback4, style: tmp.item };
    tmp20Result = tmp20(tmp17(tmp2[16]), obj10);
  }
  items8[1] = tmp20Result;
  let tmp20Result2 = null;
  if (null != onBackspace) {
    const obj18 = { style: null, iconStyle: null, onBackspace };
    ({ item: obj11.style, keyboardItem: obj11.iconStyle } = tmp);
    tmp20Result2 = tmp20(tmp17(tmp2[17]), obj18);
  }
  items8[2] = tmp20Result2;
  return sharedValue(tmp21, obj7);
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx");

export default memoResult;