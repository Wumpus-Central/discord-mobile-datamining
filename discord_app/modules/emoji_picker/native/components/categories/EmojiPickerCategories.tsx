// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../haptics/HapticFeedbackTypes.tsx";
import FastestListDefault from "../../../../fastest_list/FastestList.android.tsx";
import EmojiPickerCategoriesItemDefault from "EmojiPickerCategoriesItem.tsx";
import useExpressionPickerCategoriesPlaceholderConfigDefault from "../../../../expression_picker/native/categories/useExpressionPickerCategoriesPlaceholderConfig.tsx";
import ExpressionPickerCategoriesDefault from "../../../../expression_picker/native/categories/ExpressionPickerCategories.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const EmojiCategoryTypes = fn(6972).EmojiCategoryTypes;
const Constants = fn(1072);
({
  AnalyticEvents: hasOwnProperty,
  AnalyticsPages: closure_6,
  CATEGORY_ICON_SIZE,
  EXPRESSION_FOOTER_HEIGHT,
} = Constants);
const ExpressionPickerViewType = fn(1228).ExpressionPickerViewType;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5306);
let obj = {
  list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT },
  listPlaceholder: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED },
  item: {
    height: EXPRESSION_FOOTER_HEIGHT,
    width: EXPRESSION_FOOTER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE },
};
let closure_12 = createStyles.createStyles(obj);
let closure_13 = {
  code: "(function EmojiPickerCategoriesTsx1(){let[categoryIndexActive]=this.__closure;return categoryIndexActive.get();})",
};
let closure_14 = {
  code: "(function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){let[blockRef,EXPRESSION_FOOTER_HEIGHT,scheduleOnRN,scrollToCategoryIndex]=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){scheduleOnRN(scrollToCategoryIndex,categoryIndex);}})",
};
let closure_15 = {
  code: "(function EmojiPickerCategoriesTsx3(){let[inPortalKeyboard,bottomSheetIndex]=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;})",
};
let closure_16 = {
  code: "(function EmojiPickerCategoriesTsx4(){let[bottomSheetOpen]=this.__closure;return bottomSheetOpen.get();})",
};
let closure_17 = {
  code: "(function EmojiPickerCategoriesTsx5(open){let[scheduleOnRN,handleScrollToCategoryIndex]=this.__closure;if(!open){return;}scheduleOnRN(handleScrollToCategoryIndex);})",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx");

export default noop.memo(function EmojiPickerCategories(bottomSheetRef) {
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  _require = bottomSheetRef;
  const categories = bottomSheetRef.categories;
  importDefault = categories;
  const categoryIndexActive = bottomSheetRef.categoryIndexActive;
  dependencyMap = categoryIndexActive;
  const emojiPickerListRef = bottomSheetRef.emojiPickerListRef;
  noop = emojiPickerListRef;
  ({ onBackspace, portalHostName } = bottomSheetRef);
  ({ bottomSheetIndex, style } = bottomSheetRef);
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
  let derivedValue;
  let ref2;
  let ref3;
  let callback2;
  let callback3;
  const tmp = derivedValue();
  closure_7 = tmp;
  const sharedValue = require("../../../../../../_runtime/metro/01655__.js").useSharedValue(undefined);
  noop.useRef(undefined);
  const ref = noop.useRef(null);
  items = [categories];
  const memo = noop.useMemo(() => {
    let arr = _undefined2;
    let num = 0;
    if (0 < _undefined2.length) {
      while (_undefined2[num].type !== EmojiCategoryTypes.UNICODE) {
        num = num + 1;
        arr = _undefined2;
      }
      const obj2 = { sections: null, firstUnicodeCategory: null, firstUnicodeCategoryIndex: null };
      items = [_undefined2.length];
      obj2.sections = items;
      obj2.firstUnicodeCategory = _undefined2[num];
      obj2.firstUnicodeCategoryIndex = num;
      return obj2;
    }
    const obj = { sections: null };
    const items1 = [arr.length];
    obj.sections = items1;
    return obj;
  }, items);
  ({ firstUnicodeCategory, sections, firstUnicodeCategoryIndex } = memo);
  const callback = noop.useCallback((item) => {
    if (null != ref.current) {
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item, animated: false };
        current.scrollToLocation(obj);
      }
    }
  }, []);
  let obj = require("../../../../../../_runtime/metro/01655__.js");
  let items1 = [ref2, categoryIndexActive];
  _require = undefined;
  [tmp8, tmp9] = items1;
  class EmojiPickerCategoriesTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp9];
  EmojiPickerCategoriesTsx1.__closure = items2;
  EmojiPickerCategoriesTsx1.__workletHash = 726737127541;
  EmojiPickerCategoriesTsx1.__initData = tmp8;
  const items3 = [
    ref3,
    sharedValue,
    closure_7,
    require("../../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    callback,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
  class EmojiPickerCategoriesTsx2 {
    constructor(arg0, arg1) {
      value = closure_0.get();
      if (null != arg1) {
        tmp2 = bottomSheetRef;
        if (bottomSheetRef !== arg1) {
          if (null != value) {
            tmp3 = closure_1;
            result = bottomSheetRef * closure_1;
            tmp5 = result > value.end || result < value.start;
            if (tmp5) {
              tmp6 = closure_2;
              tmp7 = closure_3;
              tmp8 = closure_2(closure_3, bottomSheetRef);
            }
          }
        }
      }
      return;
    }
  }
  const items4 = [tmp12, tmp13, tmp14, tmp15];
  EmojiPickerCategoriesTsx2.__closure = items4;
  EmojiPickerCategoriesTsx2.__workletHash = 7202421305396;
  EmojiPickerCategoriesTsx2.__initData = tmp11;
  const animatedReaction = require("../../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    EmojiPickerCategoriesTsx1,
    EmojiPickerCategoriesTsx2,
  );
  const items5 = [sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    if (null != ref.current) {
      const obj = {
        start: nativeEvent.nativeEvent.contentOffset.x,
        end: nativeEvent.nativeEvent.contentOffset.x + tmp.current,
      };
      const result = sharedValue.set(obj);
    }
  }, items5);
  let obj3 = require("../../../../../../_runtime/metro/01655__.js");
  const tmp10 = closure_7;
  const items6 = [callback2, flag, bottomSheetIndex];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items6;
  class EmojiPickerCategoriesTsx3 {
    constructor() {
      value = closure_1.get();
      if (closure_0) {
        num2 = 1;
        tmp2 = 1 === value;
      } else {
        num = 0;
        tmp2 = 0 === value;
      }
      return tmp2;
    }
  }
  const items7 = [tmp19, tmp20];
  EmojiPickerCategoriesTsx3.__closure = items7;
  EmojiPickerCategoriesTsx3.__workletHash = 1755978433752;
  EmojiPickerCategoriesTsx3.__initData = tmp18;
  derivedValue = require("../../../../../../_runtime/metro/01655__.js").useDerivedValue(EmojiPickerCategoriesTsx3);
  ref2 = obj2.useRef(undefined);
  ref3 = obj2.useRef(false);
  const items8 = [derivedValue, bottomSheetRef, emojiPickerListRef, flag, isSearching, onClearSearch];
  callback2 = obj2.useCallback(() => {
    let current = arg0;
    if (arg0 === undefined) {
      current = ref2.current;
    }
    if (null != current) {
      if (!derivedValue.get()) {
        if (flag) {
          if (_undefined != null) {
            const current2 = _undefined.current;
            if (current2 != null) {
              current2.expandActionSheet();
            }
          }
          ref2.current = current;
          closure_14.current = false;
        }
      }
      let tmp7 = isSearching;
      if (!isSearching) {
        if (null != _undefined3.current) {
          ref2.current = undefined;
          closure_14.current = false;
          const current3 = tmp8.current;
          const obj = { index: current };
          current3.scrollToHeaderIndex(obj);
        }
      } else {
        tmp7 = onClearSearch;
      }
      ref2.current = current;
      closure_14.current = true;
      tmp7 = tmp7();
    }
  }, items8);
  const tmp2Result = require("../../../../../../_runtime/metro/01655__.js");
  const items9 = [callback3, derivedValue];
  _require = undefined;
  [tmp23, tmp24] = items9;
  class EmojiPickerCategoriesTsx4 {
    constructor() {
      return closure_0.get();
    }
  }
  const items10 = [tmp24];
  EmojiPickerCategoriesTsx4.__closure = items10;
  EmojiPickerCategoriesTsx4.__workletHash = 4255098648304;
  EmojiPickerCategoriesTsx4.__initData = tmp23;
  const items11 = [closure_17, require("../../../../../../_runtime/metro/01708__.js").scheduleOnRN, callback2];
  _require = undefined;
  importDefault = undefined;
  [tmp25, tmp26, tmp27] = items11;
  class EmojiPickerCategoriesTsx5 {
    constructor(arg0) {
      if (bottomSheetRef) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1);
      }
      return;
    }
  }
  const items12 = [tmp26, tmp27];
  EmojiPickerCategoriesTsx5.__closure = items12;
  EmojiPickerCategoriesTsx5.__workletHash = 806583209655;
  EmojiPickerCategoriesTsx5.__initData = tmp25;
  const animatedReaction1 = require("../../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    EmojiPickerCategoriesTsx4,
    EmojiPickerCategoriesTsx5,
  );
  const items13 = [isSearching, categoryIndexActive, emojiPickerListRef];
  const effect = obj2.useEffect(() => {
    if (!isSearching) {
      if (ref3.current) {
        if (null != ref2.current) {
          const current = ref2.current;
          ref2.current = undefined;
          tmp.current = false;
          const result = categoryIndexActive.set(current);
          const current2 = _undefined3.current;
          if (current2 != null) {
            const obj = { index: current };
            current2.scrollToHeaderIndex(obj);
          }
        }
      }
    }
  }, items13);
  const items14 = [callback2];
  callback3 = obj2.useCallback((arg0, type) => {
    if (type.type === EmojiCategoryTypes.GUILD) {
      guild = type.guild;
      if (null != guild) {
        const obj2 = { location: null, tab: null, guild_id: null };
        const obj3 = { page: constants2.EXPRESSION_PICKER };
        obj2.location = obj3;
        obj2.tab = ExpressionPickerViewType.EMOJI;
        obj2.guild_id = guild.id;
        AnalyticsUtilsDefault.track(constants.EXPRESSION_PICKER_CATEGORY_SELECTED, obj2);
      }
    }
    callback2(arg0);
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items14);
  const items15 = [callback3, callback];
  const items16 = [sharedValue];
  const callback4 = obj2.useCallback((arg0, arg1) => {
    callback3(arg0, arg1);
    callback(arg0);
  }, items15);
  const items17 = [categories, categoryIndexActive, callback3, tmp];
  const callback5 = obj2.useCallback((nativeEvent) => {
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
  }, items16);
  const callback6 = obj2.useCallback(
    (arg0, index) =>
      React6(EmojiPickerCategoriesItemDefault, {
        category: _undefined2[index],
        categoryIndexActive,
        index,
        handlePressCategory: callback3,
        loadingStyle: closure_7.listPlaceholder,
        locked: _undefined2[index].isNitroLocked,
        style: closure_7.item,
      }),
    items17,
  );
  const tmp2Result2 = require("../../../../../../_runtime/metro/01655__.js");
  const memo1 = obj2.useMemo(() => {
    const Gesture = _undefined(categoryIndexActive[14]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  let obj4 = { portalHostName, style, children: null };
  const tmp35 = useExpressionPickerCategoriesPlaceholderConfigDefault();
  const obj5 = {
    gesture: memo1,
    children: ref(FastestListDefault, {
      estimatedListSize: "windowSize",
      horizontal: true,
      itemSize: tmp10,
      keyboardShouldPersistTaps: "always",
      listId: sharedValue.EMOJI,
      onLayout: callback5,
      onScroll: callback1,
      placeholderConfig: tmp35,
      ref,
      renderAhead,
      renderItem: callback6,
      scrollReporting: "callbacks",
      sections,
      showsHorizontalScrollIndicator: false,
      style: tmp.list,
    }),
  };
  const items18 = [ref(require("LegacyBaseButton").GestureDetector, obj5), ,];
  let tmp37Result = null;
  if (null != firstUnicodeCategory) {
    const obj7 = {
      blockRef: sharedValue,
      category: firstUnicodeCategory,
      categoryIndex: firstUnicodeCategoryIndex,
      onPress: callback4,
      style: tmp.item,
    };
    tmp37Result = tmp37(tmp34(11332), obj7);
  }
  items18[1] = tmp37Result;
  let tmp37Result2 = null;
  if (null != onBackspace) {
    const obj8 = { style: null, iconStyle: null, onBackspace: null };
    ({ item: obj10.style, keyboardItem: obj10.iconStyle } = tmp);
    obj8.onBackspace = onBackspace;
    tmp37Result2 = tmp37(tmp34(11334), obj8);
  }
  items18[2] = tmp37Result2;
  obj4.children = callback(ref, { children: items18 });
  return ref(ExpressionPickerCategoriesDefault, obj4);
});
