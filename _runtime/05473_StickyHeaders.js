import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ useRef: c3, useState: c4, useMemo: c5, useImperativeHandle: closure_6, useCallback: error, useEffect: metroImportAll } = noop);

export const StickyHeaders = (stickyHeaderIndices) => {
  let c10;
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
  if (num === undefined) {
    num = 2;
  }
  c10 = undefined;
  let currentStickyIndex;
  let pushStartsAt;
  let arr2;
  let c14;
  let c15;
  let current;
  let translateY;
  let opacity;
  [tmp2, c10] = renderItem(scrollY({ currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER }), 2);
  currentStickyIndex = tmp2.currentStickyIndex;
  pushStartsAt = tmp2.pushStartsAt;
  let items = [stickyHeaderIndices];
  arr2 = data(() => {
    const items = [...stickyHeaderIndices];
    return items.sort((arg0, arg1) => arg0 - arg1);
  }, items);
  let tmp4 = 0 === arr2.length;
  if (!tmp4) {
    tmp4 = recyclerViewManager.getDataLength() <= arr2[arr2.length - 1];
  }
  c14 = tmp4;
  let items1 = [tmp4, recyclerViewManager, arr2, currentStickyIndex, pushStartsAt, onChangeStickyIndex, stickyHeaderOffset];
  const tmp5 = onChangeStickyIndex(() => {
    let diff1;
    let sum;
    if (!c14) {
      let obj = recyclerViewManager;
      let diff = arr2.length - 1;
      let num5 = -1;
      let num6 = 0;
      let num7 = -1;
      if (0 <= diff) {
        do {
          let _Math = Math;
          let rounded = Math.floor((num6 + diff) / 2);
          let tmp7 = recyclerViewManager;
          let tmp8 = num5;
          let tmp9 = diff;
          sum = num6;
          if (recyclerViewManager.getLayout(tmp[rounded]).y <= tmp3) {
            sum = rounded + 1;
            tmp8 = rounded;
            diff1 = diff;
          } else {
            diff1 = rounded - 1;
          }
          num5 = tmp8;
          diff = diff1;
          num6 = sum;
          num7 = tmp8;
        } while (sum <= diff1);
      }
      let num8 = tmp[num7];
      if (num8 == null) {
        num8 = -1;
      }
      let num9 = tmp[num7 + 1];
      if (num9 == null) {
        num9 = -1;
      }
      if (num9 > obj.getEngagedIndices().endIndex) {
        num9 = -1;
      }
      if (-1 === num9) {
        const _Number = Number;
      } else {
        const tryGetLayoutResult = obj.tryGetLayout(num9);
        let num10;
        if (tryGetLayoutResult != null) {
          num10 = tryGetLayoutResult.y;
        }
        if (num10 == null) {
          num10 = 0;
        }
        MAX_SAFE_INTEGER = num10 + obj.firstItemOffset;
      }
      const tryGetLayoutResult1 = obj.tryGetLayout(num8);
      let num11;
      if (tryGetLayoutResult1 != null) {
        num11 = tryGetLayoutResult1.height;
      }
      if (num11 == null) {
        num11 = 0;
      }
      const diff2 = MAX_SAFE_INTEGER - num11;
      let tmp17 = num8 === currentStickyIndex;
      if (tmp17) {
        tmp17 = diff2 === pushStartsAt;
      }
      if (!tmp17) {
        obj = { currentStickyIndex: null, pushStartsAt: null };
        obj[0] = num8;
        obj[1] = diff2 - tmp2;
        _undefined(obj);
      }
      if (num8 !== tmp16) {
        if (onChangeStickyIndex != null) {
          onChangeStickyIndex(num8);
        }
      }
      tmp16 = currentStickyIndex;
      tmp2 = stickyHeaderOffset;
    }
  }, items1);
  c15 = tmp5;
  let items2 = [tmp5];
  inverted(() => {
    _undefined2();
  }, items2);
  const items3 = [tmp5];
  extraData(stickyHeaderIndices.stickyHeaderRef, () => ({
    reportScrollEvent(nativeEvent) {
      callback();
    }
  }), items3);
  let obj = { currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER };
  const tmp = renderItem(scrollY({ currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER }), 2);
  current = recyclerViewManager(new Map()).current;
  const items4 = [recyclerViewManager, currentStickyIndex, scrollY, pushStartsAt, stickyHeaderOffset];
  let tmp3Result = tmp3(() => {
    const tryGetLayoutResult = recyclerViewManager.tryGetLayout(currentStickyIndex);
    let num;
    if (tryGetLayoutResult != null) {
      num = tryGetLayoutResult.height;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { translateY: scrollY.interpolate({ inputRange: items, outputRange: items1, extrapolate: "clamp" }), opacity: null };
    items = [pushStartsAt, pushStartsAt + num];
    items1 = [0, -num];
    let interpolateResult;
    if (stickyHeaderOffset > 0) {
      obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
      const items2 = [tmp2, tmp2 + num];
      obj[0] = items2;
      obj[1] = [1, 0];
      interpolateResult = scrollY.interpolate(obj);
    }
    obj[1] = interpolateResult;
    return obj;
  }, items4);
  translateY = tmp3Result.translateY;
  opacity = tmp3Result.opacity;
  const items5 = [translateY, opacity, currentStickyIndex, data, renderItem, current, extraData, stickyHeaderOffset, num, inverted];
  tmp3Result = tmp3(() => {
    obj = { style: obj, children: null };
    obj = { position: "absolute", top: stickyHeaderOffset, left: 0, right: 0, zIndex: num, transform: items, opacity };
    obj = { translateY };
    items = [obj];
    let tmpResult = null;
    if (-1 !== currentStickyIndex) {
      tmpResult = null;
      if (tmp4 < data.length) {
        const obj1 = { index: null, item: null, renderItem: null, layout: null, refHolder: null, extraData: null, trailingItem: "accessibilityRole", target: false, hidden: false, inverted: false };
        obj1[0] = tmp4;
        obj1[1] = tmp6[tmp4];
        obj1[2] = renderItem;
        obj1[3] = { x: 0, y: 0, width: 0, height: 0 };
        obj1[4] = current;
        obj1[5] = extraData;
        obj1[9] = inverted;
        tmpResult = tmp(stickyHeaderIndices(stickyHeaderOffset[4]).ViewHolder, obj1);
      }
    }
    obj[1] = tmpResult;
    return num(stickyHeaderIndices(stickyHeaderOffset[3]).CompatAnimatedView, obj);
  }, items5);
  if (!stickyHeaderIndices(stickyHeaderOffset[5]).PlatformConfig.isRN083OrAbove) {
    let tmp11 = tmp3Result;
  } else {
    tmp11 = null;
  }
  return tmp11;
};