// === Module 6742: FastestList ===

// Module 6742 (FastestList)
import FastestListNativeComponentDefault from "FastestListNativeComponent" /* 6743 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4811 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
let ReanimatedRexport = ReanimatedRexport_mod;
const FastestListNativeComponent = ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
const BottomSheetModal = fn(6305);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(fn(6305).SCROLLABLE_TYPE.SCROLLVIEW, FastestListNativeComponent);
let closure_9 = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default function FastestList(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let num;
  let num2;
  let listId;
  let onContentLengthChange;
  ref = undefined;
  let ref1;
  let ref2;
  closure_8 = undefined;
  let memo1;
  const enabled = merged.enabled;
  let tmp2 = undefined === enabled;
  if (!tmp2) {
    tmp2 = enabled;
  }
  const horizontal = merged.horizontal;
  let tmp3 = undefined !== horizontal;
  if (tmp3) {
    tmp3 = horizontal;
  }
  ({ keyboardDismissMode, inActionSheet } = merged);
  let tmp4 = undefined !== inActionSheet;
  if (tmp4) {
    tmp4 = inActionSheet;
  }
  const insetStart = merged.insetStart;
  num = 0;
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const insetEnd = merged.insetEnd;
  num2 = 0;
  if (undefined !== insetEnd) {
    num2 = insetEnd;
  }
  listId = merged.listId;
  onContentLengthChange = merged.onContentLengthChange;
  ({ placeholderConfig, renderAhead } = merged);
  let str = "nominal";
  ({ itemSize, listFooterSize, listFooterAlwaysMounted, listHeaderSize, listHeaderAlwaysMounted, onLayout, placeholdersForceEnabled } = merged);
  if (undefined !== renderAhead) {
    str = renderAhead;
  }
  const scrollEventThrottle = merged.scrollEventThrottle;
  let num3 = 32;
  ({ renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter } = merged);
  if (undefined !== scrollEventThrottle) {
    num3 = scrollEventThrottle;
  }
  ({ scrollReporting, showsHorizontalScrollIndicator } = merged);
  let tmp5 = undefined === showsHorizontalScrollIndicator;
  ({ sections, sectionHeaderSize, sectionFooterSize } = merged);
  if (!tmp5) {
    tmp5 = showsHorizontalScrollIndicator;
  }
  const showsVerticalScrollIndicator = merged.showsVerticalScrollIndicator;
  ({ style, wrapChildren } = merged);
  ref = listId.useRef(null);
  ref1 = listId.useRef(null);
  ref2 = listId.useRef(merged);
  const items = [merged];
  const effect = listId.useEffect(() => {
    ref2.current = merged;
  }, items);
  ({ style: style2, marginEnd, marginStart } = num(num2[5])({ style }));
  const imperativeHandle = listId.useImperativeHandle(ref.ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != ref.current) {
        const Commands = merged(num2[3]).Commands;
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
        const Commands = merged(num2[3]).Commands;
        Commands.scrollToLocation(tmp.current, section, item, animated, num);
      }
    }
  }));
  const items1 = [ref1];
  const tmp13 = num(num2[5])({ style });
  const tmp6 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  const callback = listId.useCallback((nativeEvent) => {
    const current = ref1.current;
    if (current != null) {
      current.setVisibleItems(nativeEvent.nativeEvent);
    }
  }, items1);
  num(num2[7])({ estimatedListSize: merged.estimatedListSize, horizontal: tmp3 });
  const items2 = [listId];
  const tmp15 = num(num2[6])(ref2);
  const memo = listId.useMemo(() => {
    let str = "fst";
    if (null != listId) {
      str = listId;
    }
    closure_9 = tmp + 1;
    return "" + str + "-" + +closure_9;
  }, items2);
  const tmp20 = num(num2[9])({ fastestListId: memo, itemSize, keyExtractor: merged.keyExtractor, listFooterSize, listHeaderSize, sections, sectionHeaderSize, sectionFooterSize });
  closure_8 = tmp20;
  const items3 = [num2, num, onContentLengthChange, tmp20];
  memo1 = listId.useMemo(() => {
    let reduced;
    if (null != onContentLengthChange) {
      ({ itemSizeIsUniform: merged, itemSizes } = closure_8);
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
        if (merged) {
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
  const tmp18 = num(num2[8])(placeholderConfig);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = num(num2[10])(merged, tmp3));
  if (tmp4) {
    let tmp11Result = closure_8;
  } else {
    if ("animatedScrollPosition" !== scrollReporting) {
      if ("animatedCallbacks" !== scrollReporting) {
        tmp11Result = tmp11(tmp12[3]);
      }
    }
    tmp11Result = ref2;
  }
  const obj = { accessibilityLabel: merged.accessibilityLabel, horizontal: tmp3, insetStart: num, insetEnd: num2, keyboardDismissOnDrag: null, onUnexpectedItemSize: null, onLayout: null, onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null, onVisibleItemsChanged: null, placeholderConfig: null, ref: null, renderAhead: null, scrollEventThrottle: null, sectionsVersioned: null, showsHorizontalScrollIndicator: null, showsVerticalScrollIndicator: null, style: null };
  let tmp26 = "on-drag" === keyboardDismissMode;
  if (!tmp26) {
    tmp26 = "interactive" === keyboardDismissMode;
  }
  obj.keyboardDismissOnDrag = tmp26;
  obj.onUnexpectedItemSize = tmp15;
  obj.onLayout = onLayout;
  obj.onScroll = onScroll;
  obj.onScrollBeginDrag = onScrollBeginDrag;
  obj.onScrollEndDrag = onScrollEndDrag;
  obj.onVisibleItemsChanged = callback;
  obj.placeholderConfig = tmp18;
  obj.ref = ref;
  obj.renderAhead = str;
  obj.scrollEventThrottle = num3;
  obj.sectionsVersioned = tmp20;
  obj.showsHorizontalScrollIndicator = tmp5;
  obj.showsVerticalScrollIndicator = tmp6;
  obj.style = style2;
  const tmp23 = num(num2[10])(merged, tmp3);
  if (tmp2) {
    if (null != placeholderConfig) {
      const obj2 = { children: null };
      const items5 = [tmp25Result, tmp28];
      obj2.children = items5;
      let tmp25Result2 = ref1(ref, obj2);
    }
    return tmp25Result2;
  }
  const obj3 = {};
  tmp25Result = onContentLengthChange(tmp11Result, obj);
  const merged1 = Object.assign(merged);
  tmp25Result2 = tmp25(num(num2[12]), obj3);
};