// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../haptics/HapticFeedbackTypes.tsx";
import EmojiPickerCategoriesItemDefault from "EmojiPickerCategoriesItem.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const EmojiCategoryTypes = fn(5463).EmojiCategoryTypes;
const Constants = fn(1074);
({
  AnalyticEvents: hasOwnProperty,
  AnalyticsPages: metroRequire,
  CATEGORY_ICON_SIZE,
  EXPRESSION_FOOTER_HEIGHT,
} = Constants);
let ExpressionPickerViewType = fn(1219).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let obj = {
  list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT },
  listPlaceholder: null,
  item: null,
  keyboardItem: null,
};
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.listPlaceholder = obj;
obj.item = {
  height: EXPRESSION_FOOTER_HEIGHT,
  width: EXPRESSION_FOOTER_HEIGHT,
  justifyContent: "center",
  alignItems: "center",
};
obj.keyboardItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = {
  code: "function EmojiPickerCategoriesTsx1(){const{categoryIndexActive}=this.__closure;return categoryIndexActive.get();}",
};
let __initData = {
  code: "function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){const{blockRef,EXPRESSION_FOOTER_HEIGHT,runOnJS,scrollToCategoryIndex}=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){runOnJS(scrollToCategoryIndex)(categoryIndex);}}",
};
let __initData2 = {
  code: "function EmojiPickerCategoriesTsx3(){const{inPortalKeyboard,bottomSheetIndex}=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}",
};
let closure_16 = {
  code: "function EmojiPickerCategoriesTsx4(){const{bottomSheetOpen}=this.__closure;return bottomSheetOpen.get();}",
};
let closure_17 = {
  code: "function EmojiPickerCategoriesTsx5(open){const{runOnJS,handleScrollToCategoryIndex}=this.__closure;if(!open){return;}runOnJS(handleScrollToCategoryIndex)();}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx");

export default noop.memo(function EmojiPickerCategories(bottomSheetRef) {
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
  let scrollToCategoryIndex;
  let derivedValue;
  __initData = undefined;
  __initData2 = undefined;
  let callback2;
  let callback3;
  const tmp = scrollToCategoryIndex();
  ExpressionPickerViewType = tmp;
  let obj = bottomSheetRef(categories[7]);
  const sharedValue = obj.useSharedValue(undefined);
  categoryIndexActive.useRef(undefined);
  const ref = categoryIndexActive.useRef(null);
  let items = [categories];
  const memo = categoryIndexActive.useMemo(() => {
    let arr = categories;
    let num = 0;
    if (0 < categories.length) {
      while (categories[num].type !== EmojiCategoryTypes.UNICODE) {
        num = num + 1;
        arr = categories;
      }
      let obj = { sections: null, firstUnicodeCategory: null, firstUnicodeCategoryIndex: null };
      const items = [categories.length];
      obj.sections = items;
      obj.firstUnicodeCategory = categories[num];
      obj.firstUnicodeCategoryIndex = num;
      return obj;
    }
    obj = { sections: null };
    const items1 = [arr.length];
    obj.sections = items1;
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
  let obj1 = bottomSheetRef(categories[7]);
  const fn = function w() {
    return categoryIndexActive.get();
  };
  fn.__closure = { categoryIndexActive };
  fn.__workletHash = 2293356797932;
  fn.__initData = derivedValue;
  const fn2 = function j(arg0, arg1) {
    value = sharedValue.get();
    if (null != arg1) {
      if (arg0 !== arg1) {
        if (null != value) {
          const result = arg0 * EXPRESSION_FOOTER_HEIGHT;
          if (tmp5) {
            ReanimatedRexport.runOnJS(callback)(arg0);
          }
          tmp5 = result > value.end || result < value.start;
        }
      }
    }
  };
  obj = {
    blockRef: sharedValue,
    EXPRESSION_FOOTER_HEIGHT: onClearSearch,
    runOnJS: bottomSheetRef(categories[7]).runOnJS,
    scrollToCategoryIndex,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 7148256102464;
  fn2.__initData = __initData;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  let items1 = [sharedValue];
  const callback1 = categoryIndexActive.useCallback((nativeEvent) => {
    if (null != ref.current) {
      const obj = {
        start: nativeEvent.nativeEvent.contentOffset.x,
        end: nativeEvent.nativeEvent.contentOffset.x + tmp.current,
      };
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
  X.__initData = __initData2;
  derivedValue = obj3.useDerivedValue(X);
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
          const obj = { index: current };
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
      ReanimatedRexport.runOnJS(callback2)();
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
          const current = ref2.current;
          ref2.current = undefined;
          tmp.current = false;
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
    if (type.type === EmojiCategoryTypes.GUILD) {
      const guild = type.guild;
      if (null != guild) {
        let obj = { location: null, tab: null, guild_id: null };
        obj = { page: constants2.EXPRESSION_PICKER };
        obj.location = obj;
        obj.tab = ExpressionPickerViewType.EMOJI;
        obj.guild_id = guild.id;
        obj.track(constants.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
      }
    }
    callback2(arg0);
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items4);
  const items5 = [callback3, scrollToCategoryIndex];
  const items6 = [sharedValue];
  const callback4 = categoryIndexActive.useCallback((arg0, arg1) => {
    callback3(arg0, arg1);
    callback(arg0);
  }, items5);
  const items7 = [categories, categoryIndexActive, callback3, tmp];
  const callback5 = categoryIndexActive.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.layout.width;
    value = sharedValue.get();
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
    obj.end = num2 + ref.current;
    const result = sharedValue.set(obj);
  }, items6);
  const callback6 = categoryIndexActive.useCallback(
    (arg0, index) =>
      React7(EmojiPickerCategoriesItemDefault, {
        category: categories[index],
        categoryIndexActive,
        index,
        handlePressCategory: callback3,
        loadingStyle: closure_8.listPlaceholder,
        locked: categories[index].isNitroLocked,
        style: closure_8.item,
      }),
    items7,
  );
  const memo1 = categoryIndexActive.useMemo(() => {
    const Gesture = bottomSheetRef(categories[13]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  obj1 = { portalHostName, style: bottomSheetRef.style, children: null };
  const tmp18 = bottomSheetIndex(categories[12])();
  const obj2 = { gesture: memo1, children: null };
  obj3 = {
    estimatedListSize: "windowSize",
    horizontal: true,
    itemSize: onClearSearch,
    keyboardShouldPersistTaps: "always",
    listId: ExpressionPickerViewType.EMOJI,
    onLayout: callback5,
    onScroll: callback1,
    placeholderConfig: tmp18,
    ref,
    renderAhead,
    renderItem: callback6,
    scrollReporting: "callbacks",
    sections,
    showsHorizontalScrollIndicator: false,
    style: tmp.list,
  };
  obj2.children = sharedValue(bottomSheetIndex(categories[15]), obj3);
  const items8 = [sharedValue(bottomSheetRef(categories[13]).GestureDetector, obj2), ,];
  let tmp20Result = null;
  if (null != firstUnicodeCategory) {
    obj4 = {
      blockRef: sharedValue,
      category: firstUnicodeCategory,
      categoryIndex: firstUnicodeCategoryIndex,
      onPress: callback4,
      style: tmp.item,
    };
    tmp20Result = tmp20(tmp17(tmp2[16]), obj4);
  }
  items8[1] = tmp20Result;
  tmp20Result = null;
  if (null != onBackspace) {
    const obj5 = { style: null, iconStyle: null, onBackspace: null };
    ({ item: obj11.style, keyboardItem: obj11.iconStyle } = tmp);
    obj5.onBackspace = onBackspace;
    tmp20Result = tmp20(tmp17(tmp2[17]), obj5);
  }
  items8[2] = tmp20Result;
  obj1.children = ref(ref, { children: items8 });
  return sharedValue(bottomSheetIndex(categories[14]), obj1);
});
