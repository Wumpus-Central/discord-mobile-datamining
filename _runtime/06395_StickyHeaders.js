// === Module 6395: StickyHeaders ===

// Module 6395 (StickyHeaders)
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 6392 */;
import ViewHolder from "ViewHolder" /* 6396 */;
import _slicedToArray from "_slicedToArray" /* 6342 */;
import react_mod from "react" /* 19 */;

let map;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useRef: c3, useState: closure_4, useMemo: hasOwnProperty, useImperativeHandle: metroRequire, useCallback: metroImportDefault, useEffect: metroImportAll } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const StickyHeaders = (stickyHeaderIndices) => {
  let _undefined;
  let c10;
  let tmp11;
  let tmp2;
  stickyHeaderIndices = stickyHeaderIndices.stickyHeaderIndices;
  const stickyHeaderOffset = stickyHeaderIndices.stickyHeaderOffset;
  const renderItem = stickyHeaderIndices.renderItem;
  const recyclerViewManager = stickyHeaderIndices.recyclerViewManager;
  const scrollY = stickyHeaderIndices.scrollY;
  const data = stickyHeaderIndices.data;
  const extraData = stickyHeaderIndices.extraData;
  const onChangeStickyIndex = stickyHeaderIndices.onChangeStickyIndex;
  const inverted = stickyHeaderIndices.inverted;
  let num = stickyHeaderIndices.stickyHeaderZIndex;
  const stickyHeaderRef = stickyHeaderIndices.stickyHeaderRef;
  if (num === undefined) {
    num = 2;
  }
  c10 = undefined;
  let closure_14;
  let closure_15;
  let current;
  let translateY;
  let opacity;
  let obj = { currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER };
  [tmp2, c10] = renderItem(scrollY(obj), 2);
  const currentStickyIndex = tmp2.currentStickyIndex;
  const pushStartsAt = tmp2.pushStartsAt;
  let items = [stickyHeaderIndices];
  const tmp = renderItem(scrollY(obj), 2);
  const arr2 = data(() => {
    const items = [...stickyHeaderIndices];
    return items.sort((arg0, arg1) => arg0 - arg1);
  }, items);
  let tmp4 = 0 === arr2.length;
  if (!tmp4) {
    tmp4 = recyclerViewManager.getDataLength() <= arr2[arr2.length - 1];
  }
  closure_14 = tmp4;
  let items1 = [tmp4, recyclerViewManager, arr2, currentStickyIndex, pushStartsAt, onChangeStickyIndex, stickyHeaderOffset];
  const tmp5 = onChangeStickyIndex(() => {
    let diff1;
    let sum;
    if (!closure_14) {
      let MAX_SAFE_INTEGER;
      let diff = arr2.length - 1;
      let num5 = -1;
      let num6 = 0;
      let num7 = -1;
      if (0 <= diff) {
        do {
          let _Math = Math;
          let rounded = Math.floor((num6 + diff) / 2);
          let tmp9 = num5;
          sum = num6;
          if (recyclerViewManager.getLayout(arr2[rounded]).y <= tmp4) {
            sum = rounded + 1;
            tmp9 = rounded;
            diff1 = diff;
          } else {
            diff1 = rounded - 1;
          }
          num5 = tmp9;
          diff = diff1;
          num6 = sum;
          num7 = tmp9;
        } while (sum <= diff1);
      }
      let num8 = arr2[num7];
      if (num8 == null) {
        num8 = -1;
      }
      let num9 = arr2[num7 + 1];
      if (num9 == null) {
        num9 = -1;
      }
      if (num9 > recyclerViewManager.getEngagedIndices().endIndex) {
        num9 = -1;
      }
      if (-1 === num9) {
        const _Number = Number;
        MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
      } else {
        const tryGetLayoutResult = recyclerViewManager.tryGetLayout(num9);
        let num10;
        if (tryGetLayoutResult != null) {
          num10 = tryGetLayoutResult.y;
        }
        if (num10 == null) {
          num10 = 0;
        }
        MAX_SAFE_INTEGER = num10 + recyclerViewManager.firstItemOffset;
      }
      const tryGetLayoutResult1 = recyclerViewManager.tryGetLayout(num8);
      let num11;
      if (tryGetLayoutResult1 != null) {
        num11 = tryGetLayoutResult1.height;
      }
      if (num11 == null) {
        num11 = 0;
      }
      const diff2 = MAX_SAFE_INTEGER - num11;
      const tmp18 = num8 === currentStickyIndex && diff2 === pushStartsAt;
      if (!tmp18) {
        const obj2 = { currentStickyIndex: num8, pushStartsAt: diff2 - stickyHeaderOffset };
        _undefined(obj2);
      }
      if (num8 !== currentStickyIndex) {
        if (onChangeStickyIndex != null) {
          onChangeStickyIndex(num8);
        }
      }
    }
  }, items1);
  closure_15 = tmp5;
  let items2 = [tmp5];
  const tmp6 = inverted(() => {
    closure_15();
  }, items2);
  const items3 = [tmp5];
  extraData(stickyHeaderRef, () => ({
    reportScrollEvent() {
      closure_1_15();
    }
  }), items3);
  map = new Map();
  current = recyclerViewManager(map).current;
  const items4 = [recyclerViewManager, currentStickyIndex, scrollY, pushStartsAt, stickyHeaderOffset];
  const tmp3Result = data(() => {
    let interpolateResult;
    let items;
    let items1;
    let items2;
    let obj3;
    const tryGetLayoutResult = recyclerViewManager.tryGetLayout(currentStickyIndex);
    num = undefined;
    if (tryGetLayoutResult != null) {
      num = tryGetLayoutResult.height;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { translateY: scrollY.interpolate(obj3), opacity: interpolateResult };
    obj3 = { inputRange: items, outputRange: items1, extrapolate: "clamp" };
    items = [pushStartsAt, pushStartsAt + num];
    items1 = [0, -num];
    interpolateResult = undefined;
    if (stickyHeaderOffset > 0) {
      const obj4 = { inputRange: items2, outputRange: [1, 0], extrapolate: "clamp" };
      items2 = [pushStartsAt, pushStartsAt + num];
      interpolateResult = scrollY.interpolate(obj4);
    }
    return obj;
  }, items4);
  translateY = tmp3Result.translateY;
  opacity = tmp3Result.opacity;
  const items5 = [translateY, opacity, currentStickyIndex, data, renderItem, current, extraData, stickyHeaderOffset, num, inverted];
  const tmp3Result2 = data(() => {
    let items;
    const rect = { position: "absolute", top: stickyHeaderOffset, left: 0, right: 0, zIndex: num, transform: items, opacity };
    items = [];
    const obj2 = { translateY };
    items[0] = obj2;
    let tmpResult = null;
    const CompatAnimatedView = react_native.CompatAnimatedView;
    if (-1 !== currentStickyIndex) {
      tmpResult = null;
      if (currentStickyIndex < data.length) {
        tmpResult = jsx(ViewHolder.ViewHolder, { index: currentStickyIndex, item: tmp6[currentStickyIndex], renderItem, layout: { x: 0, y: 0, width: 0, height: 0 }, refHolder: current, extraData, trailingItem: "applicationId", target: 18939908, hidden: 49948994, inverted });
      }
    }
    return <CompatAnimatedView style={rect}>{tmpResult}</CompatAnimatedView>;
  }, items5);
  if (!stickyHeaderIndices(stickyHeaderOffset[5]).PlatformConfig.isRN083OrAbove) {
    tmp11 = tmp3Result2;
  } else {
    tmp11 = null;
  }
  return tmp11;
};