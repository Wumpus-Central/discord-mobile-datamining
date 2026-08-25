// === Module 8681: ? ===

// Module 8681
import _readOnlyErrorDefault from "_readOnlyError" /* 377 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8682 */;
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult1 from "module_4120" /* 4120 */;
import BottomSheetModal from "BottomSheetModal" /* 5505 */;

const require = arg1;
_readOnlyErrorDefault;
let c3 = importAllResult;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const animatedComponent = importDefaultResult1.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
let closure_7 = importDefaultResult1.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(require("BottomSheetModal").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent);
let c9 = 0;
const importDefaultResult2 = importDefaultResult1;
const forwardRefResult = importAllResult.forwardRef(function FastestList(estimatedListSize, ref) {
  closure_0 = estimatedListSize;
  const enabled = estimatedListSize.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const horizontal = estimatedListSize.horizontal;
  let tmp2 = undefined !== horizontal;
  if (tmp2) {
    tmp2 = horizontal;
  }
  ({ keyboardDismissMode, inActionSheet } = estimatedListSize);
  let tmp3 = undefined !== inActionSheet;
  if (tmp3) {
    tmp3 = inActionSheet;
  }
  const insetStart = estimatedListSize.insetStart;
  let num = 0;
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const insetEnd = estimatedListSize.insetEnd;
  let num2 = 0;
  if (undefined !== insetEnd) {
    num2 = insetEnd;
  }
  const listId = estimatedListSize.listId;
  ({ placeholderConfig, renderAhead } = estimatedListSize);
  let str = "nominal";
  ({ itemSize, listFooterSize, listFooterAlwaysMounted, listHeaderSize, listHeaderAlwaysMounted, onLayout, placeholdersForceEnabled } = estimatedListSize);
  if (undefined !== renderAhead) {
    str = renderAhead;
  }
  const scrollEventThrottle = estimatedListSize.scrollEventThrottle;
  let num3 = 32;
  ({ renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter } = estimatedListSize);
  if (undefined !== scrollEventThrottle) {
    num3 = scrollEventThrottle;
  }
  ({ scrollReporting, showsHorizontalScrollIndicator } = estimatedListSize);
  let tmp4 = undefined === showsHorizontalScrollIndicator;
  ({ sections, sectionHeaderSize, sectionFooterSize } = estimatedListSize);
  if (!tmp4) {
    tmp4 = showsHorizontalScrollIndicator;
  }
  const showsVerticalScrollIndicator = estimatedListSize.showsVerticalScrollIndicator;
  ({ style, wrapChildren } = estimatedListSize);
  ref = ref1.useRef(null);
  ref1 = ref1.useRef(null);
  const ref2 = ref1.useRef(estimatedListSize);
  const items = [estimatedListSize];
  const effect = ref1.useEffect(() => {
    ref2.current = closure_0;
  }, items);
  ({ style: style2, marginEnd, marginStart } = listId(ref[6])({ style }));
  const imperativeHandle = ref1.useImperativeHandle(ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != ref.current) {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        Commands.scrollToTop(tmp.current, flag);
      }
    },
    scrollToLocation(paddingStart) {
      ({ section, item, animated } = paddingStart);
      if (animated === undefined) {
        animated = false;
      }
      let num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      if (null != ref.current) {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        Commands.scrollToLocation(tmp.current, section, item, animated, num);
      }
    }
  }));
  const items1 = [ref1];
  const tmp12 = listId(ref[6])({ style });
  const tmp5 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  const callback = ref1.useCallback((nativeEvent) => {
    const current = ref1.current;
    if (current != null) {
      current.setVisibleItems(nativeEvent.nativeEvent);
    }
  }, items1);
  listId(ref[8])({ estimatedListSize: estimatedListSize.estimatedListSize, horizontal: tmp2 });
  const items2 = [listId];
  const tmp14 = listId(ref[7])(ref2);
  const memo = ref1.useMemo(() => {
    let str = "fst";
    if (null != listId) {
      str = listId;
    }
    closure_9 = tmp + 1;
    return "" + str + "-" + +closure_9;
  }, items2);
  const tmp17 = listId(ref[9])(placeholderConfig);
  const tmp19 = listId(ref[10])({ fastestListId: memo, itemSize, keyExtractor: estimatedListSize.keyExtractor, listFooterSize, listHeaderSize, sections, sectionHeaderSize, sectionFooterSize });
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = listId(ref[11])(estimatedListSize, tmp2));
  if (tmp3) {
    let tmp10Result = closure_8;
  } else {
    if ("animatedScrollPosition" !== scrollReporting) {
      if ("animatedCallbacks" !== scrollReporting) {
        tmp10Result = tmp10(tmp11[4]);
      }
    }
    tmp10Result = closure_7;
  }
  let obj = { accessibilityLabel: estimatedListSize.accessibilityLabel, horizontal: tmp2, insetStart: num, insetEnd: num2, keyboardDismissOnDrag: null, onUnexpectedItemSize: null, onLayout: null, onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null, onVisibleItemsChanged: null, placeholderConfig: null, ref: null, renderAhead: null, scrollEventThrottle: null, sectionsVersioned: null, showsHorizontalScrollIndicator: null, showsVerticalScrollIndicator: null, style: null };
  let tmp23 = "on-drag" === keyboardDismissMode;
  if (!tmp23) {
    tmp23 = "interactive" === keyboardDismissMode;
  }
  obj[4] = tmp23;
  obj[5] = tmp14;
  obj[6] = onLayout;
  obj[7] = onScroll;
  obj[8] = onScrollBeginDrag;
  obj[9] = onScrollEndDrag;
  obj[10] = callback;
  obj[11] = tmp17;
  obj[12] = ref;
  obj[13] = str;
  obj[14] = num3;
  obj[15] = tmp19;
  obj[16] = tmp4;
  obj[17] = tmp5;
  obj[18] = style2;
  let tmp22Result = tmp22(tmp10Result, obj);
  if (tmp) {
    if (null != placeholderConfig) {
      obj = { children: null };
      const items3 = [tmp22Result, tmp25];
      obj[0] = items3;
      tmp22Result = callback(closure_5, obj);
    }
    return tmp22Result;
  }
  obj = {};
  tmp10Result = tmp10(tmp11[13]);
  const merged = Object.assign(estimatedListSize);
  tmp22Result = tmp22(tmp10Result, obj);
});
const result = require("set").fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default forwardRefResult;