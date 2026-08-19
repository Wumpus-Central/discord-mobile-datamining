// _runtime/00396_ScrollViewStickyHeader.js
import get_hairlineWidthDefault from "00254_get_hairlineWidth.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop2 from "00019_noop.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = fn;
({ cloneElement: c5, useCallback: closure_6, useEffect: error, useMemo: closure_8, useRef: c9, useState: c10 } = noop);
let closure_12 = get_hairlineWidthDefault.create({ fill: { flex: 1 }, header: { zIndex: 10 } });

export default function ScrollViewStickyHeader(ref) {
  let merged = Object.assign(ref, Object.create(null));
  let callback3;
  let inverted = merged.inverted;
  const scrollViewHeight = merged.scrollViewHeight;
  const hiddenOnScroll = merged.hiddenOnScroll;
  const scrollAnimatedValue = merged.scrollAnimatedValue;
  let tmp2 = hiddenOnScroll(callback3(false), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  const tmp4 = hiddenOnScroll(callback3(0), 2);
  const first1 = tmp4[0];
  const callback2 = tmp4[1];
  const tmp6 = hiddenOnScroll(callback3(0), 2);
  const first2 = tmp6[0];
  callback3 = tmp6[1];
  const tmp8 = hiddenOnScroll(callback3(null), 2);
  const first3 = tmp8[0];
  closure_12 = tmp8[1];
  const tmp10 = hiddenOnScroll(callback3(merged.nextHeaderLayoutY), 2);
  const first4 = tmp10[0];
  closure_14 = tmp10[1];
  const tmp12 = hiddenOnScroll(callback3(false), 2);
  const first5 = tmp12[0];
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
      inverted(scrollViewHeight[5]);
      let obj = { extrapolateLeft: "clamp", inputRange: null, outputRange: null };
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
  closure_17 = tmp18;
  const tmp19 = hiddenOnScroll(callback3(() => {
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: [-1, 0], outputRange: [0, 0] });
    let addResult = interpolateResult;
    if (null != closure_17) {
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
    merged = value;
    if (0 === value) {
      if (!ref.current) {
        tmp.current = true;
      }
    }
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
    }
    ref2.current = setTimeout(() => closure_1_12(closure_0), 15);
  }, []);
  closure_21 = tmp21;
  const items2 = [first4, first, first2, first1, scrollViewHeight, scrollAnimatedValue, inverted, tmp18, tmp21, first5];
  first1(() => {
    const items = [-1, 0];
    const items1 = [0, 0];
    if (first) {
      if (true === inverted) {
        if (null != scrollViewHeight) {
          const diff = first1 + first2 - scrollViewHeight;
          if (diff > 0) {
            items.push(diff);
            items1.push(0);
            items.push(diff + 1);
            items1.push(1);
            let num5 = first4;
            if (!first4) {
              num5 = 0;
            }
            const diff1 = num5 - tmp28 - scrollViewHeight;
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
          items1.push(diff2 - first1, diff2 - first1);
        } else {
          items.push(first1 + 1);
          items1.push(1);
        }
      }
    }
    const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: items, outputRange: items1 });
    inverted = interpolateResult;
    let obj = interpolateResult;
    if (null != closure_17) {
      const addResult = inverted(scrollViewHeight[5]).add(interpolateResult, tmp18);
      inverted = addResult;
      obj = addResult;
      const obj2 = inverted(scrollViewHeight[5]);
    }
    if (first5) {
      closure_0 = obj.addListener(closure_21);
    }
    callback5(obj);
    return () => {
      if (closure_0) {
        addResult.removeListener(tmp);
      }
      if (null != closure_1_20.current) {
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
      let obj = { translateY: null };
      obj[0] = first3;
      const items3 = [obj];
      obj[0] = items3;
      obj[0] = obj;
      tmp24 = obj;
    }
  }
  const tmp17 = inverted(scrollViewHeight[4])(callback((closure_0) => {
    if (null != closure_0) {
      closure_0.setNextHeaderY = closure_14;
      callback4(merged(scrollViewHeight[3]).isPublicInstance(closure_0));
      const obj = merged(scrollViewHeight[3]);
    }
  }, []), ref.ref);
  const items4 = [onlyResult.props.style, closure_12.header, ];
  const items5 = [{ translateY: tmp19[0] }];
  items4[2] = { transform: items5 };
  let obj2 = { onLayout: "Array", style: 0 };
  obj2[1] = closure_12.fill;
  return first3(tmp15(tmp16[5]).View, {
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
    children: first(onlyResult, obj2)
  });
};