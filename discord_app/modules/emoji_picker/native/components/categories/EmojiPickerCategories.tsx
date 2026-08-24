// === Module 9460: EXPRESSION_FOOTER_HEIGHT ===

// Module 9460 (EXPRESSION_FOOTER_HEIGHT)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { EmojiCategoryTypes } from "EmojiCategoryTypes" /* 6768 */;
import ME from "ME" /* 676 */;
import { ExpressionPickerViewType } from "ExpressionPickerViewType" /* 1338 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
let c3 = importAllResult;
({ AnalyticEvents: c5, AnalyticsPages: closure_6, CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = ME);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, listPlaceholder: null, item: null, keyboardItem: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
obj[1] = obj;
obj[2] = { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" };
obj[3] = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function EmojiPickerCategoriesTsx1(){const{categoryIndexActive}=this.__closure;return categoryIndexActive.get();}" };
let closure_14 = { code: "function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){const{blockRef,EXPRESSION_FOOTER_HEIGHT,runOnJS,scrollToCategoryIndex}=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){runOnJS(scrollToCategoryIndex)(categoryIndex);}}" };
let closure_15 = { code: "function EmojiPickerCategoriesTsx3(){const{inPortalKeyboard,bottomSheetIndex}=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
let closure_16 = { code: "function EmojiPickerCategoriesTsx4(){const{bottomSheetOpen}=this.__closure;return bottomSheetOpen.get();}" };
let closure_17 = { code: "function EmojiPickerCategoriesTsx5(open){const{runOnJS,handleScrollToCategoryIndex}=this.__closure;if(!open){return;}runOnJS(handleScrollToCategoryIndex)();}" };
const memoResult = importAllResult.memo(function EmojiPickerCategories(bottomSheetRef) {
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const categories = bottomSheetRef.categories;
  const categoryIndexActive = bottomSheetRef.categoryIndexActive;
  const emojiPickerListRef = bottomSheetRef.emojiPickerListRef;
  ({ onBackspace, portalHostName } = bottomSheetRef);
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
  ExpressionPickerViewType = undefined;
  let sharedValue;
  closure_10 = undefined;
  let ref;
  let callback;
  let derivedValue;
  closure_14 = undefined;
  closure_15 = undefined;
  let callback2;
  let callback3;
  const tmp = callback();
  ExpressionPickerViewType = tmp;
  let obj = bottomSheetRef(categories[7]);
  sharedValue = obj.useSharedValue(undefined);
  closure_10 = categoryIndexActive.useRef(undefined);
  ref = categoryIndexActive.useRef(null);
  let items = [categories];
  const memo = categoryIndexActive.useMemo(() => {
    let arr = categories;
    let num = 0;
    if (0 < categories.length) {
      while (categories[num].type !== emojiPickerListRef.UNICODE) {
        num = num + 1;
        arr = arr2;
      }
      const obj = { sections: null, firstUnicodeCategory: null, firstUnicodeCategoryIndex: null };
      const items = [categories.length];
      obj[0] = items;
      obj[1] = categories[num];
      obj[2] = num;
      return obj;
    }
    const sections = [arr.length];
    return { sections };
  }, items);
  ({ firstUnicodeCategory, sections, firstUnicodeCategoryIndex } = memo);
  callback = categoryIndexActive.useCallback((arg0) => {
    if (null != ref.current) {
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item: null, animated: false };
        obj[1] = arg0;
        current.scrollToLocation(obj);
      }
    }
  }, []);
  obj1 = bottomSheetRef(categories[7]);
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
          const result = arg0 * onClearSearch;
          if (tmp5) {
            bottomSheetRef(categories[7]).runOnJS(callback)(arg0);
            const obj = bottomSheetRef(categories[7]);
          }
          tmp5 = result > value.end || result < value.start;
        }
      }
    }
  };
  obj = { blockRef: sharedValue, EXPRESSION_FOOTER_HEIGHT: onClearSearch, runOnJS: bottomSheetRef(categories[7]).runOnJS, scrollToCategoryIndex: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 7148256102464;
  fn2.__initData = closure_14;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue];
  const callback1 = categoryIndexActive.useCallback((nativeEvent) => {
    if (null != ref.current) {
      const obj = { start: null, end: null };
      obj[0] = nativeEvent.nativeEvent.contentOffset.x;
      obj[1] = nativeEvent.nativeEvent.contentOffset.x + tmp.current;
      const result = sharedValue.set(obj);
    }
  }, items1);
  let obj3 = bottomSheetRef(categories[7]);
  class X {
    constructor() {
      value = bottomSheetIndex.get();
      if (c5) {
        num2 = 1;
        tmp2 = 1 === value;
      } else {
        num = 0;
        tmp2 = 0 === value;
      }
      return tmp2;
    }
  }
  X.__closure = { inPortalKeyboard: flag, bottomSheetIndex };
  X.__workletHash = 15413192314561;
  X.__initData = closure_15;
  derivedValue = obj3.useDerivedValue(X);
  closure_14 = categoryIndexActive.useRef(undefined);
  closure_15 = categoryIndexActive.useRef(false);
  const items2 = [derivedValue, bottomSheetRef, emojiPickerListRef, flag, isSearching, onClearSearch];
  callback2 = categoryIndexActive.useCallback(() => {
    let current = arg0;
    if (arg0 === undefined) {
      current = ref2.current;
    }
    if (null != current) {
      if (!derivedValue.get()) {
        if (flag) {
          if (bottomSheetRef != null) {
            const current2 = bottomSheetRef.current;
            if (current2 != null) {
              current2.expandActionSheet();
            }
          }
          ref2.current = current;
          closure_15.current = false;
        }
      }
      let tmp7 = isSearching;
      if (!isSearching) {
        if (null != emojiPickerListRef.current) {
          ref2.current = undefined;
          closure_15.current = false;
          const current3 = tmp8.current;
          const obj = { index: null };
          obj[0] = current;
          current3.scrollToHeaderIndex(obj);
        }
      } else {
        tmp7 = onClearSearch;
      }
      ref2.current = current;
      closure_15.current = true;
      tmp7 = tmp7();
    }
  }, items2);
  let obj4 = bottomSheetRef(categories[7]);
  class B {
    constructor() {
      return closure_13.get();
    }
  }
  B.__closure = { bottomSheetOpen: derivedValue };
  B.__workletHash = 13172461706889;
  B.__initData = callback2;
  const fn3 = function z(arg0) {
    if (arg0) {
      bottomSheetRef(categories[7]).runOnJS(callback2)();
      const obj = bottomSheetRef(categories[7]);
    }
  };
  obj = { runOnJS: bottomSheetRef(categories[7]).runOnJS, handleScrollToCategoryIndex: callback2 };
  fn3.__closure = obj;
  fn3.__workletHash = 13670816929775;
  fn3.__initData = callback3;
  const animatedReaction1 = obj4.useAnimatedReaction(B, fn3);
  const items3 = [isSearching, categoryIndexActive, emojiPickerListRef];
  const effect = categoryIndexActive.useEffect(() => {
    if (!isSearching) {
      if (ref3.current) {
        if (null != ref2.current) {
          const current = tmp2.current;
          tmp2.current = undefined;
          tmp.current = false;
          const result = categoryIndexActive.set(current);
          const current2 = emojiPickerListRef.current;
          if (current2 != null) {
            const obj = { index: null };
            obj[0] = current;
            current2.scrollToHeaderIndex(obj);
          }
        }
      }
    }
  }, items3);
  const items4 = [callback2];
  callback3 = categoryIndexActive.useCallback((arg0, type) => {
    if (type.type === emojiPickerListRef.GUILD) {
      const guild = type.guild;
      if (null != guild) {
        let obj = bottomSheetIndex(categories[8]);
        obj = { location: null, tab: null, guild_id: null };
        obj = { page: null };
        obj[0] = isSearching.EXPRESSION_PICKER;
        obj[0] = obj;
        obj[1] = closure_8.EMOJI;
        obj[2] = guild.id;
        obj.track(flag.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
      }
    }
    callback2(arg0);
    const result = bottomSheetRef(categories[9]).triggerHapticFeedback(bottomSheetIndex(categories[10]).IMPACT_LIGHT);
  }, items4);
  const items5 = [callback3, callback];
  const items6 = [sharedValue];
  const callback4 = categoryIndexActive.useCallback((arg0, arg1) => {
    callback3(arg0, arg1);
    callback(arg0);
  }, items5);
  const items7 = [categories, categoryIndexActive, callback3, tmp];
  const callback5 = categoryIndexActive.useCallback((nativeEvent) => {
    closure_10.current = nativeEvent.nativeEvent.layout.width;
    const value = sharedValue.get();
    let num;
    if (value != null) {
      num = value.start;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { start: num, end: null };
    let num2;
    if (value != null) {
      num2 = value.start;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[1] = num2 + closure_10.current;
    const result = sharedValue.set(obj);
  }, items6);
  const callback6 = categoryIndexActive.useCallback((arg0, index) => sharedValue(bottomSheetIndex(categories[11]), { category: categories[index], categoryIndexActive, index, handlePressCategory: callback3, loadingStyle: closure_8.listPlaceholder, locked: categories[index].isNitroLocked, style: closure_8.item }), items7);
  const memo1 = categoryIndexActive.useMemo(() => {
    const Gesture = bottomSheetRef(categories[13]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  obj1 = { portalHostName, style: bottomSheetRef.style, children: null };
  const tmp18 = bottomSheetIndex(categories[12])();
  const tmp21 = bottomSheetIndex(categories[14]);
  const tmp22 = ref;
  const tmp23 = closure_10;
  obj3 = { estimatedListSize: "windowSize", horizontal: true, itemSize: onClearSearch, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.EMOJI, onLayout: callback5, onScroll: callback1, placeholderConfig: tmp18, ref, renderAhead, renderItem: callback6, scrollReporting: "callbacks", sections, showsHorizontalScrollIndicator: false, style: tmp.list };
  const items8 = [sharedValue(bottomSheetRef(categories[13]).GestureDetector, { gesture: memo1, children: sharedValue(bottomSheetIndex(categories[15]), obj3) }), , ];
  let tmp20Result = null;
  if (null != firstUnicodeCategory) {
    obj4 = { blockRef: null, category: null, categoryIndex: null, onPress: null, style: null };
    obj4[0] = sharedValue;
    obj4[1] = firstUnicodeCategory;
    obj4[2] = firstUnicodeCategoryIndex;
    obj4[3] = callback4;
    obj4[4] = tmp.item;
    tmp20Result = tmp20(tmp17(tmp2[16]), obj4);
  }
  items8[1] = tmp20Result;
  tmp20Result = null;
  if (null != onBackspace) {
    const obj5 = { style: null, iconStyle: null, onBackspace: null };
    ({ item: obj11[0], keyboardItem: obj11[1] } = tmp);
    obj5[2] = onBackspace;
    tmp20Result = tmp20(tmp17(tmp2[17]), obj5);
  }
  items8[2] = tmp20Result;
  obj1[2] = tmp22(tmp23, { children: items8 });
  return sharedValue(tmp21, obj1);
});
let result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx");

export default memoResult;