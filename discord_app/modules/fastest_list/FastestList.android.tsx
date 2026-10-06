// === Module 6559: FastestList ===

// Module 6559 (FastestList)
import FastestListNativeComponentDefault from "FastestListNativeComponent" /* 6560 */;
import _readOnlyError from "_readOnlyError" /* 377 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4618 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
ReanimatedRexport = ReanimatedRexport_mod;
const FastestListNativeComponent = ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(BottomSheetModal.SCROLLABLE_TYPE.SCROLLVIEW, FastestListNativeComponent);
let closure_9 = 0;
const forwardRefResult = react.forwardRef(function FastestList(enabled, arg1) {
  let inActionSheet;
  let itemSize;
  let items5;
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
  let tmp10Result;
  let tmp25;
  let wrapChildren;
  let current = enabled;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  const accessibilityLabel = enabled.accessibilityLabel;
  if (!tmp) {
    tmp = enabled;
  }
  const horizontal = enabled.horizontal;
  let tmp2 = undefined !== horizontal;
  const estimatedListSize = enabled.estimatedListSize;
  if (tmp2) {
    tmp2 = horizontal;
  }
  ({ keyboardDismissMode, inActionSheet } = enabled);
  let tmp3 = undefined !== inActionSheet;
  const keyExtractor = enabled.keyExtractor;
  if (tmp3) {
    tmp3 = inActionSheet;
  }
  const insetStart = enabled.insetStart;
  let num = 0;
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const insetEnd = enabled.insetEnd;
  let num2 = 0;
  if (undefined !== insetEnd) {
    num2 = insetEnd;
  }
  const listId = enabled.listId;
  const onContentLengthChange = enabled.onContentLengthChange;
  ({ placeholderConfig, renderAhead } = enabled);
  let str = "nominal";
  ({ itemSize, listFooterSize, listFooterAlwaysMounted, listHeaderSize, listHeaderAlwaysMounted, onLayout, placeholdersForceEnabled } = enabled);
  if (undefined !== renderAhead) {
    str = renderAhead;
  }
  const scrollEventThrottle = enabled.scrollEventThrottle;
  let num3 = 32;
  ({ renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter } = enabled);
  if (undefined !== scrollEventThrottle) {
    num3 = scrollEventThrottle;
  }
  ({ scrollReporting, showsHorizontalScrollIndicator } = enabled);
  let tmp4 = undefined === showsHorizontalScrollIndicator;
  ({ sections, sectionHeaderSize, sectionFooterSize } = enabled);
  if (!tmp4) {
    tmp4 = showsHorizontalScrollIndicator;
  }
  const showsVerticalScrollIndicator = enabled.showsVerticalScrollIndicator;
  const tmp5 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  ({ style, wrapChildren } = enabled);
  const ref = listId.useRef(null);
  const ref1 = listId.useRef(null);
  const ref2 = listId.useRef(enabled);
  const items = [enabled];
  const effect = listId.useEffect(() => {
    ref2.current = current;
  }, items);
  ({ style: style2, marginEnd, marginStart } = num(num2[6])({ style }));
  num(num2[6])({ style });
  const imperativeHandle = listId.useImperativeHandle(arg1, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != ref.current) {
        const Commands = current(num2[4]).Commands;
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
      num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      if (null != ref.current) {
        const Commands = current(num2[4]).Commands;
        Commands.scrollToLocation(tmp.current, section, item, animated, num);
      }
    }
  }));
  const items1 = [ref1];
  const tmp14 = num(num2[7])(ref2);
  const callback = listId.useCallback((nativeEvent) => {
    current = ref1.current;
    if (current != null) {
      current.setVisibleItems(nativeEvent.nativeEvent);
    }
  }, items1);
  num(num2[8])({ estimatedListSize, horizontal: tmp2 });
  const items2 = [listId];
  const tmp17 = num(num2[9])(placeholderConfig);
  const memo = listId.useMemo(() => {
    let str = "fst";
    if (null != listId) {
      str = listId;
    }
    closure_9 = tmp + 1;
    return "" + str + "-" + +closure_9;
  }, items2);
  const tmp19 = num(num2[10])({ fastestListId: memo, itemSize, keyExtractor, listFooterSize, listHeaderSize, sections, sectionHeaderSize, sectionFooterSize });
  closure_8 = tmp19;
  const items3 = [num2, num, onContentLengthChange, tmp19];
  const memo1 = listId.useMemo(() => {
    let closure_129_0;
    let closure_129_2;
    let closure_129_3;
    let closure_129_4;
    let closure_129_5;
    let itemSizes;
    let listFooterSize;
    let listHeaderSize;
    let sections;
    let reduced;
    if (null != onContentLengthChange) {
      ({ itemSizeIsUniform: closure_129_0, itemSizes } = closure_8);
      ({ sectionFooterSizeIsUniform: closure_129_2, sectionFooterSizes: closure_129_3, sectionHeaderSizeIsUniform: closure_129_4, sectionHeaderSizes: closure_129_5, sections } = closure_8);
      const first = itemSizes[0];
      num = undefined;
      ({ listFooterSize, listHeaderSize } = closure_8);
      const tmp3 = num;
      if (first != null) {
        num = first.sizes[0];
      }
      if (num == null) {
        num = 0;
      }
      reduced = sections.reduce((acc, item, index) => {
        let num5;
        num = 0;
        if (!closure_1_4) {
          num = index;
        }
        num2 = closure_1_5[num];
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = 0;
        if (!closure_1_2) {
          num3 = index;
        }
        let num4 = closure_1_3[num3];
        if (num4 == null) {
          num4 = 0;
        }
        const sum = acc + num2;
        if (closure_1_0) {
          num5 = item * num;
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
      }, tmp3 + listHeaderSize + listFooterSize + num2);
    }
    return reduced;
  }, items3);
  const items4 = [memo1, onContentLengthChange];
  const effect1 = listId.useEffect(() => {
    const tmp2 = null != memo1 && null != onContentLengthChange;
    if (tmp2) {
      onContentLengthChange(memo1);
    }
  }, items4);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = num(num2[11])(enabled, tmp2));
  num(num2[11])(enabled, tmp2);
  if (tmp3) {
    tmp10Result = closure_8;
  } else {
    if ("animatedScrollPosition" !== scrollReporting) {
      if ("animatedCallbacks" !== scrollReporting) {
        tmp10Result = tmp10(tmp11[4]);
      }
    }
    tmp10Result = ref2;
  }
  const obj = { accessibilityLabel, horizontal: tmp2, insetStart: num, insetEnd: num2, keyboardDismissOnDrag: tmp25, onUnexpectedItemSize: tmp14, onLayout, onScroll, onScrollBeginDrag, onScrollEndDrag, onVisibleItemsChanged: callback, placeholderConfig: tmp17, ref, renderAhead: str, scrollEventThrottle: num3, sectionsVersioned: tmp19, showsHorizontalScrollIndicator: tmp4, showsVerticalScrollIndicator: tmp5, style: style2 };
  tmp25 = "on-drag" === keyboardDismissMode || "interactive" === keyboardDismissMode;
  const tmp24Result = onContentLengthChange(tmp10Result, obj);
  if (tmp) {
    let tmp24Result2;
    if (null != placeholderConfig) {
      const obj2 = { children: items5 };
      items5 = [tmp24Result, tmp27];
      tmp24Result2 = ref1(ref, obj2);
    }
    return tmp24Result2;
  }
  const obj3 = {};
  const tmp10Result2 = num(num2[13]);
  const merged = Object.assign(enabled);
  tmp24Result2 = tmp24(tmp10Result2, obj3);
});
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default forwardRefResult;