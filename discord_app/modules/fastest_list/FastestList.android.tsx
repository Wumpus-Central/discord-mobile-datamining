// === Module 7055: FastestList ===

// Module 7055 (FastestList)
import FastestListNativeComponentDefault from "FastestListNativeComponent" /* 7056 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
const FastestListNativeComponent = ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
const BottomSheetModal = fn(6627);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(fn(6627).SCROLLABLE_TYPE.SCROLLVIEW, FastestListNativeComponent);
let closure_9 = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default noop.forwardRef(function FastestList(estimatedListSize, ref) {
  let current = estimatedListSize;
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
  ref = listId.useRef(null);
  const ref1 = listId.useRef(null);
  const ref2 = listId.useRef(estimatedListSize);
  const items = [estimatedListSize];
  const effect = listId.useEffect(() => {
    ref2.current = current;
  }, items);
  ({ style: style2, marginEnd, marginStart } = num(num2[6])({ style }));
  const imperativeHandle = listId.useImperativeHandle(ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != ref.current) {
        const Commands = closure_0(num2[4]).Commands;
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
        const Commands = closure_0(num2[4]).Commands;
        Commands.scrollToLocation(tmp.current, section, item, animated, num);
      }
    }
  }));
  const items1 = [ref1];
  const tmp12 = num(num2[6])({ style });
  const tmp5 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  const callback = listId.useCallback((nativeEvent) => {
    current = ref1.current;
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
  const tmp19 = num(num2[10])({ fastestListId: memo, itemSize, keyExtractor: estimatedListSize.keyExtractor, listFooterSize, listHeaderSize, sections, sectionHeaderSize, sectionFooterSize });
  closure_8 = tmp19;
  const items3 = [num2, num, onContentLengthChange, tmp19];
  const memo1 = listId.useMemo(() => {
    let reduced;
    if (null != onContentLengthChange) {
      ({ itemSizeIsUniform: closure_0, itemSizes } = closure_8);
      ({ sectionFooterSizeIsUniform: num2, sectionFooterSizes: listId, sectionHeaderSizeIsUniform: onContentLengthChange, sectionHeaderSizes: ref, sections } = closure_8);
      const first = itemSizes[0];
      num = undefined;
      ({ listFooterSize, listHeaderSize } = closure_8);
      if (first != null) {
        num = first.sizes[0];
      }
      if (num == null) {
        num = 0;
      }
      reduced = sections.reduce((acc, item, index) => {
        num = 0;
        if (!onContentLengthChange) {
          num = index;
        }
        num2 = ref[num];
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = 0;
        if (!closure_1_2) {
          num3 = index;
        }
        let num4 = listId[num3];
        if (num4 == null) {
          num4 = 0;
        }
        const sum = acc + num2;
        if (current) {
          let num5 = item * num;
        } else {
          num5 = undefined;
          if (itemSizes[index] != null) {
            const sizes = tmp5.sizes;
            num5 = sizes.reduce((acc, item) => acc + item, 0);
          }
          if (num5 == null) {
            num5 = 0;
          }
        }
        return sum + num5 + num4;
      }, num + listHeaderSize + listFooterSize + num2);
    }
    return reduced;
  }, items3);
  const items4 = [memo1, onContentLengthChange];
  const effect1 = listId.useEffect(() => {
    let tmp2 = null != memo1;
    if (tmp2) {
      tmp2 = null != onContentLengthChange;
    }
    if (tmp2) {
      onContentLengthChange(memo1);
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
  let obj = { accessibilityLabel: estimatedListSize.accessibilityLabel, horizontal: tmp2, insetStart: num, insetEnd: num2, keyboardDismissOnDrag: null, onUnexpectedItemSize: null, onLayout: null, onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null, onVisibleItemsChanged: null, placeholderConfig: null, ref: null, renderAhead: null, scrollEventThrottle: null, sectionsVersioned: null, showsHorizontalScrollIndicator: null, showsVerticalScrollIndicator: null, style: null };
  let tmp25 = "on-drag" === keyboardDismissMode;
  if (!tmp25) {
    tmp25 = "interactive" === keyboardDismissMode;
  }
  obj.keyboardDismissOnDrag = tmp25;
  obj.onUnexpectedItemSize = tmp14;
  obj.onLayout = onLayout;
  obj.onScroll = onScroll;
  obj.onScrollBeginDrag = onScrollBeginDrag;
  obj.onScrollEndDrag = onScrollEndDrag;
  obj.onVisibleItemsChanged = callback;
  obj.placeholderConfig = tmp17;
  obj.ref = ref;
  obj.renderAhead = str;
  obj.scrollEventThrottle = num3;
  obj.sectionsVersioned = tmp19;
  obj.showsHorizontalScrollIndicator = tmp4;
  obj.showsVerticalScrollIndicator = tmp5;
  obj.style = style2;
  let tmp24Result = tmp24(tmp10Result, obj);
  if (tmp) {
    if (null != placeholderConfig) {
      obj = { children: null };
      const items5 = [tmp24Result, tmp27];
      obj.children = items5;
      tmp24Result = ref1(ref, obj);
    }
    return tmp24Result;
  }
  obj = {};
  tmp10Result = tmp10(tmp11[13]);
  const merged = Object.assign(estimatedListSize);
  tmp24Result = tmp24(tmp10Result, obj);
});