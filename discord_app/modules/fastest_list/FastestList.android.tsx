// discord_app/modules/fastest_list/FastestList.android.tsx
import "_readOnlyError";
import importAllResult from "noop";
import jsxProd from "jsxProd";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult1 from "module_4042";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import BottomSheetModal from "BottomSheetModal";
import importDefaultResult2 from "module_4042";

let c4;
let c5;
let closure_6;
const require = arg1;
let c3 = importAllResult;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(require("BottomSheetModal").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent);
let c9 = 0;
const forwardRefResult = importAllResult.forwardRef(function FastestList(estimatedListSize, ref) {
  let inActionSheet;
  let itemSize;
  let keyboardDismissMode;
  let listFooterAlwaysMounted;
  let listFooterSize;
  let listHeaderAlwaysMounted;
  let listHeaderSize;
  let marginEnd;
  let marginStart;
  let onLayout;
  let onScroll;
  let onScrollBeginDrag;
  let onScrollEndDrag;
  let placeholderConfig;
  let placeholdersForceEnabled;
  let renderAhead;
  let renderItem;
  let renderListFooter;
  let renderListHeader;
  let renderSectionFooter;
  let renderSectionHeader;
  let scrollReporting;
  let sectionFooterSize;
  let sectionHeaderSize;
  let sections;
  let showsHorizontalScrollIndicator;
  let style;
  let style2;
  let wrapChildren;
  let closure_0 = estimatedListSize;
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
        const Commands = outer1_0(outer1_2[4]).Commands;
        Commands.scrollToTop(tmp.current, flag);
      }
    },
    scrollToLocation(paddingStart) {
      let animated;
      let item;
      let section;
      ({ section, item, animated } = paddingStart);
      if (animated === undefined) {
        animated = false;
      }
      let num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      if (null != ref.current) {
        const Commands = outer1_0(outer1_2[4]).Commands;
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
    const outer1_9 = tmp + 1;
    return "" + str + "-" + +outer1_9;
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
    tmp10Result = __INTERNAL_VIEW_CONFIG;
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
const result = require("jsxProd").fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default forwardRefResult;