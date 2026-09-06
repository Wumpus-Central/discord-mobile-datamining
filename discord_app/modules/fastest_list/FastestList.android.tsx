// discord_app/modules/fastest_list/FastestList.android.tsx
import _readOnlyErrorDefault from "../../../_runtime/metro/00377__readOnlyError.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult1 from "../reanimated/ReanimatedRexport.tsx";
import BottomSheetModal from "../../../_runtime/06627_BottomSheetModal.js";

const require = arg1;
_readOnlyErrorDefault;
let c3 = importAllResult;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const animatedComponent = importDefaultResult1.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
let closure_7 = importDefaultResult1.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(
  require("BottomSheetModal").SCROLLABLE_TYPE.SCROLLVIEW,
  animatedComponent,
);
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
  const onContentLengthChange = estimatedListSize.onContentLengthChange;
  ({ placeholderConfig, renderAhead } = estimatedListSize);
  let str = "nominal";
  ({
    itemSize,
    listFooterSize,
    listFooterAlwaysMounted,
    listHeaderSize,
    listHeaderAlwaysMounted,
    onLayout,
    placeholdersForceEnabled,
  } = estimatedListSize);
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
  ref = listId.useRef(null);
  const ref1 = listId.useRef(null);
  const ref2 = listId.useRef(estimatedListSize);
  const items = [estimatedListSize];
  const effect = listId.useEffect(() => {
    ref2.current = closure_0;
  }, items);
  ({ style: style2, marginEnd, marginStart } = num(num2[6])({ style }));
  const imperativeHandle = listId.useImperativeHandle(ref, () => ({
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
      num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      if (null != ref.current) {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        Commands.scrollToLocation(tmp.current, section, item, animated, num);
      }
    },
  }));
  const items1 = [ref1];
  const tmp12 = num(num2[6])({ style });
  const tmp5 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  const callback = listId.useCallback((nativeEvent) => {
    const current = ref1.current;
    if (current != null) {
      current.setVisibleItems(nativeEvent.nativeEvent);
    }
  }, items1);
  num(num2[8])({ estimatedListSize: estimatedListSize.estimatedListSize, horizontal: tmp2 });
  const items2 = [listId];
  const tmp14 = num(num2[7])(ref2);
  const memo = listId.useMemo(() => {
    let str = "fst";
    if (null != listId) {
      str = listId;
    }
    closure_9 = tmp + 1;
    return "" + str + "-" + +closure_9;
  }, items2);
  const tmp19 = num(num2[10])({
    fastestListId: memo,
    itemSize,
    keyExtractor: estimatedListSize.keyExtractor,
    listFooterSize,
    listHeaderSize,
    sections,
    sectionHeaderSize,
    sectionFooterSize,
  });
  closure_8 = tmp19;
  const items3 = [num2, num, onContentLengthChange, tmp19];
  const memo1 = listId.useMemo(() => {
    let reduced;
    if (null != onContentLengthChange) {
      ({ itemSizeIsUniform: closure_0, itemSizes } = closure_8);
      ({
        sectionFooterSizeIsUniform: num2,
        sectionFooterSizes: listId,
        sectionHeaderSizeIsUniform: onContentLengthChange,
        sectionHeaderSizes: ref,
        sections,
      } = closure_8);
      const first = itemSizes[0];
      num = undefined;
      ({ listFooterSize, listHeaderSize } = closure_8);
      if (first != null) {
        num = first.sizes[0];
      }
      if (num == null) {
        num = 0;
      }
      reduced = sections.reduce(
        (arg0, arg1, arg2) => {
          num = 0;
          if (!closure_4) {
            num = arg2;
          }
          num2 = closure_5[num];
          if (num2 == null) {
            num2 = 0;
          }
          let num3 = 0;
          if (!closure_2) {
            num3 = arg2;
          }
          let num4 = closure_3[num3];
          if (num4 == null) {
            num4 = 0;
          }
          const sum = arg0 + num2;
          if (closure_0) {
            let num5 = arg1 * num;
          } else {
            num5 = undefined;
            if (itemSizes[arg2] != null) {
              const sizes = tmp5.sizes;
              num5 = sizes.reduce((arg0, arg1) => arg0 + arg1, 0);
            }
            if (num5 == null) {
              num5 = 0;
            }
          }
          return sum + num5 + num4;
        },
        itemSizes + listHeaderSize + listFooterSize + num2,
      );
      const tmp3 = itemSizes;
      const tmp4 = num2;
    }
    return reduced;
  }, items3);
  closure_9 = memo1;
  const items4 = [memo1, onContentLengthChange];
  const effect1 = listId.useEffect(() => {
    let tmp2 = null != closure_9;
    if (tmp2) {
      tmp2 = null != onContentLengthChange;
    }
    if (tmp2) {
      onContentLengthChange(closure_9);
    }
  }, items4);
  const tmp17 = num(num2[9])(placeholderConfig);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = num(num2[11])(estimatedListSize, tmp2));
  if (tmp3) {
    let tmp10Result = closure_8;
  } else {
    if ("animatedScrollPosition" !== scrollReporting) {
      if ("animatedCallbacks" !== scrollReporting) {
        tmp10Result = tmp10(tmp11[4]);
      }
    }
    tmp10Result = ref2;
  }
  let obj = {
    accessibilityLabel: estimatedListSize.accessibilityLabel,
    horizontal: tmp2,
    insetStart: num,
    insetEnd: num2,
    keyboardDismissOnDrag: null,
    onUnexpectedItemSize: null,
    onLayout: null,
    onScroll: null,
    onScrollBeginDrag: null,
    onScrollEndDrag: null,
    onVisibleItemsChanged: null,
    placeholderConfig: null,
    ref: null,
    renderAhead: null,
    scrollEventThrottle: null,
    sectionsVersioned: null,
    showsHorizontalScrollIndicator: null,
    showsVerticalScrollIndicator: null,
    style: null,
  };
  let tmp25 = "on-drag" === keyboardDismissMode;
  if (!tmp25) {
    tmp25 = "interactive" === keyboardDismissMode;
  }
  obj[4] = tmp25;
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
  let tmp24Result = tmp24(tmp10Result, obj);
  if (tmp) {
    if (null != placeholderConfig) {
      obj = { children: null };
      const items5 = [tmp24Result, tmp27];
      obj[0] = items5;
      tmp24Result = ref1(ref, obj);
    }
    return tmp24Result;
  }
  obj = {};
  tmp10Result = tmp10(tmp11[13]);
  const merged = Object.assign(estimatedListSize);
  tmp24Result = tmp24(tmp10Result, obj);
});
const result = require("set").fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default forwardRefResult;
