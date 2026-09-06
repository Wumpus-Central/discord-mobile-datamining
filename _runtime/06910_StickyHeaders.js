// === Module 6910: StickyHeaders ===

// Module 6910 (StickyHeaders)
import CompatView from "CompatView" /* 6907 */;
import ViewHolder from "ViewHolder" /* 6911 */;
import _slicedToArray from "module_6857" /* 6857 */;
import noop from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useRef: c3, useState: closure_4, useMemo: hasOwnProperty, useImperativeHandle: metroRequire, useCallback: closure_7, useEffect: closure_8 } = noop);
const jsx = fn(21).jsx;

export const StickyHeaders = (stickyHeaderIndices) => {
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
  closure_14 = undefined;
  closure_15 = undefined;
  let current;
  let translateY;
  let opacity;
  [tmp2, c10] = renderItem(scrollY({ currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER }), 2);
  const currentStickyIndex = tmp2.currentStickyIndex;
  const pushStartsAt = tmp2.pushStartsAt;
  let items = [stickyHeaderIndices];
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
      let obj = recyclerViewManager;
      let diff = arr2.length - 1;
      let num5 = -1;
      let num6 = 0;
      let num7 = -1;
      if (0 <= diff) {
        do {
          let _Math = Math;
          let rounded = Math.floor((num6 + diff) / 2);
          let tmp8 = num5;
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
        obj = { currentStickyIndex: num8, pushStartsAt: diff2 - tmp2 };
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
  closure_15 = tmp5;
  let items2 = [tmp5];
  inverted(() => {
    closure_15();
  }, items2);
  const items3 = [tmp5];
  extraData(stickyHeaderIndices.stickyHeaderRef, () => ({
    reportScrollEvent() {
      closure_1_15();
    }
  }), items3);
  let obj = { currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER };
  const tmp = renderItem(scrollY({ currentStickyIndex: -1, pushStartsAt: Number.MAX_SAFE_INTEGER }), 2);
  current = recyclerViewManager(new Map()).current;
  const items4 = [recyclerViewManager, currentStickyIndex, scrollY, pushStartsAt, stickyHeaderOffset];
  let tmp3Result = tmp3(() => {
    const tryGetLayoutResult = recyclerViewManager.tryGetLayout(currentStickyIndex);
    num = undefined;
    if (tryGetLayoutResult != null) {
      num = tryGetLayoutResult.height;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { translateY: null, opacity: null };
    obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
    const items = [pushStartsAt, pushStartsAt + num];
    obj.inputRange = items;
    const items1 = [0, -num];
    obj.outputRange = items1;
    obj.translateY = scrollY.interpolate(obj);
    let interpolateResult;
    if (stickyHeaderOffset > 0) {
      obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
      const items2 = [tmp2, tmp2 + num];
      obj.inputRange = items2;
      obj.outputRange = [1, 0];
      interpolateResult = scrollY.interpolate(obj);
    }
    obj.opacity = interpolateResult;
    return obj;
  }, items4);
  translateY = tmp3Result.translateY;
  opacity = tmp3Result.opacity;
  const items5 = [translateY, opacity, currentStickyIndex, data, renderItem, current, extraData, stickyHeaderOffset, num, inverted];
  tmp3Result = tmp3(() => {
    let obj = { style: null, children: null };
    const rect = { position: "absolute", top: stickyHeaderOffset, left: 0, right: 0, zIndex: num, transform: null, opacity };
    obj = { translateY };
    const items = [obj];
    rect.transform = items;
    obj.style = rect;
    let tmpResult = null;
    if (-1 !== currentStickyIndex) {
      tmpResult = null;
      if (tmp4 < data.length) {
        obj = { index: tmp4, item: tmp6[tmp4], renderItem, layout: { x: 0, y: 0, width: 0, height: 0 }, refHolder: current, extraData, trailingItem: "accessible", target: "y", hidden: "ro", inverted };
        tmpResult = tmp(ViewHolder.ViewHolder, obj);
      }
    }
    obj.children = tmpResult;
    return jsx(CompatView.CompatAnimatedView, { translateY });
  }, items5);
  if (!stickyHeaderIndices(stickyHeaderOffset[5]).PlatformConfig.isRN083OrAbove) {
    let tmp11 = tmp3Result;
  } else {
    tmp11 = null;
  }
  return tmp11;
};