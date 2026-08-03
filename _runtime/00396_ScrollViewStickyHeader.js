// === Module 396: ScrollViewStickyHeader ===

// Module 396 (ScrollViewStickyHeader)
import _slicedToArray from "_slicedToArray";
import closure_4 from "noop";
import noop from "noop";
import { jsx } from "jsxProd";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ cloneElement: c5, useCallback: closure_6, useEffect: error, useMemo: metroImportAll, useRef: c9, useState: c10 } = noop);
let closure_12 = require("get hairlineWidth").create({ fill: { flex: 1 }, header: { zIndex: 10 } });

export default function ScrollViewStickyHeader(ref) {
  let merged = Object.assign(ref, Object.create(null));
  let inverted;
  let scrollViewHeight;
  let hiddenOnScroll;
  let scrollAnimatedValue;
  let first;
  let callback;
  let first1;
  let callback2;
  let first2;
  let callback3;
  let first3;
  let closure_12;
  let first4;
  let closure_14;
  let first5;
  let closure_16;
  let c17;
  let closure_18;
  let closure_19;
  let closure_20;
  let c21;
  inverted = merged.inverted;
  scrollViewHeight = merged.scrollViewHeight;
  hiddenOnScroll = merged.hiddenOnScroll;
  scrollAnimatedValue = merged.scrollAnimatedValue;
  let tmp2 = hiddenOnScroll(callback3(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = hiddenOnScroll(callback3(0), 2);
  first1 = tmp4[0];
  callback2 = tmp4[1];
  const tmp6 = hiddenOnScroll(callback3(0), 2);
  first2 = tmp6[0];
  callback3 = tmp6[1];
  const tmp8 = hiddenOnScroll(callback3(null), 2);
  first3 = tmp8[0];
  closure_12 = tmp8[1];
  const tmp10 = hiddenOnScroll(callback3(merged.nextHeaderLayoutY), 2);
  first4 = tmp10[0];
  closure_14 = tmp10[1];
  const tmp12 = hiddenOnScroll(callback3(false), 2);
  first5 = tmp12[0];
  closure_16 = tmp12[1];
  let items = [scrollAnimatedValue, first2, first1, hiddenOnScroll];
  const tmp14 = callback((closure_0) => {
    if (null != closure_0) {
      closure_0.setNextHeaderY = closure_14;
      callback4(merged(scrollViewHeight[3]).isPublicInstance(closure_0));
      const obj = merged(scrollViewHeight[3]);
    }
  }, []);
  const tmp15 = inverted;
  const tmp16 = scrollViewHeight;
  const tmp18 = callback2(() => {
    let diffClampResult = null;
    if (true === hiddenOnScroll) {
      let obj = inverted(scrollViewHeight[5]);
      obj = { extrapolateLeft: "clamp", inputRange: null, outputRange: null };
      const items = [first1, first1 + 1];
      obj[1] = items;
      obj[2] = [0, 1];
      obj = { inputRange: null, outputRange: null };
      obj[0] = [0, 1];
      obj[1] = [0, -1];
      diffClampResult = obj.diffClamp(scrollAnimatedValue.interpolate(obj).interpolate(obj), -first2, 0);
      const interpolateResult = scrollAnimatedValue.interpolate(obj);
    }
    return diffClampResult;
  }, items);
  c17 = tmp18;
  const tmp19 = hiddenOnScroll(callback3(() => {
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: [-1, 0], outputRange: [0, 0] });
    let addResult = interpolateResult;
    if (null != c17) {
      addResult = inverted(scrollViewHeight[5]).add(interpolateResult, tmp2);
      const obj = inverted(scrollViewHeight[5]);
    }
    return addResult;
  }), 2);
  closure_18 = tmp19[1];
  closure_19 = first2(true);
  closure_20 = first2(null);
  let items1 = [first3];
  first1(() => {
    let tmp2 = 0 !== first3;
    if (tmp2) {
      tmp2 = null != tmp;
    }
    if (tmp2) {
      closure_19.current = false;
    }
  }, items1);
  const tmp21 = callback((value) => {
    value = value.value;
    const merged = value;
    if (0 === value) {
      if (!ref.current) {
        tmp.current = true;
      }
    }
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp2.current);
    }
    ref2.current = setTimeout(() => outer1_12(closure_0), 15);
  }, []);
  c21 = tmp21;
  const items2 = [first4, first, first2, first1, scrollViewHeight, scrollAnimatedValue, inverted, tmp18, tmp21, first5];
  first1(() => {
    const items = [-1, 0];
    const items1 = [0, 0];
    if (first) {
      if (true === inverted) {
        if (null != scrollViewHeight) {
          const diff = first1 + first2 - tmp8;
          if (diff > 0) {
            items.push(diff);
            items1.push(0);
            items.push(diff + 1);
            items1.push(1);
            let num5 = first4;
            if (!first4) {
              num5 = 0;
            }
            const diff1 = num5 - tmp28 - tmp8;
            if (diff1 > diff) {
              items.push(diff1, diff1 + 1);
              items1.push(diff1 - diff, diff1 - diff);
            }
          }
        }
      } else {
        items.push(first1);
        items1.push(0);
        let num = first4;
        if (!first4) {
          num = 0;
        }
        const diff2 = num - first2;
        if (diff2 >= first1) {
          items.push(diff2, diff2 + 1);
          items1.push(diff2 - tmp24, diff2 - tmp24);
        } else {
          items.push(tmp24 + 1);
          items1.push(1);
        }
      }
    }
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: items1 });
    inverted = interpolateResult;
    let obj = interpolateResult;
    if (null != c17) {
      const addResult = inverted(scrollViewHeight[5]).add(interpolateResult, tmp18);
      inverted = addResult;
      obj = addResult;
      const obj2 = inverted(scrollViewHeight[5]);
    }
    if (first5) {
      let closure_0 = obj.addListener(c21);
    }
    callback5(obj);
    return () => {
      if (closure_0) {
        addResult.removeListener(tmp);
      }
      if (null != outer1_20.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp4.current);
      }
    };
  }, items2);
  let Children = scrollAnimatedValue.Children;
  let onlyResult = Children.only(merged.children);
  let tmp24 = null;
  if (first5) {
    tmp24 = null;
    if (null != first3) {
      let obj = { style: null };
      obj = { transform: null };
      obj = { translateY: null };
      obj[0] = first3;
      const items3 = [obj];
      obj[0] = items3;
      obj[0] = obj;
      tmp24 = obj;
    }
  }
  const obj1 = {
    collapsable: false,
    nativeID: merged.nativeID,
    onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.y);
      callback3(nativeEvent.nativeEvent.layout.height);
      callback(true);
      merged.onLayout(nativeEvent);
      const Children = scrollAnimatedValue.Children;
      const onlyResult = Children.only(merged.children);
      if (onlyResult.props.onLayout) {
        const props = onlyResult.props;
        props.onLayout(nativeEvent);
      }
    },
    ref: inverted(scrollViewHeight[4])(callback((closure_0) => {
      if (null != closure_0) {
        closure_0.setNextHeaderY = closure_14;
        callback4(merged(scrollViewHeight[3]).isPublicInstance(closure_0));
        const obj = merged(scrollViewHeight[3]);
      }
    }, []), ref.ref),
    style: items4,
    passthroughAnimatedPropExplicitValues: tmp24,
    children: null
  };
  items4 = [onlyResult.props.style, closure_12.header, ];
  const items5 = [{ translateY: tmp19[0] }];
  items4[2] = { transform: items5 };
  let obj2 = { onLayout: "Array", style: true };
  obj2[1] = closure_12.fill;
  obj1[6] = first(onlyResult, obj2);
  return first3(tmp15(tmp16[5]).View, obj1);
};