// _runtime/00396_ScrollViewStickyHeader.js
import Fragment from "react/00021_Fragment.js";
import _mod390 from "metro/00390__.js";
import get_FlatListDefault from "00397_get_FlatList.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import "react";
import react from "00019_react.js";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

let value;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({
  cloneElement: hasOwnProperty,
  useCallback: metroRequire,
  useEffect: metroImportDefault,
  useMemo: metroImportAll,
  useRef: c9,
  useState: c10,
} = react);
const jsx = Fragment.jsx;
let closure_12 = get_hairlineWidth.create({ fill: { flex: 1 }, header: { zIndex: 10 } });

export default function ScrollViewStickyHeader(ref) {
  let items3;
  let items4;
  let items5;
  let obj2;
  let obj6;
  ref = ref.ref;
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let closure_10;
  ref = undefined;
  let inverted = merged.inverted;
  const scrollViewHeight = merged.scrollViewHeight;
  const hiddenOnScroll = merged.hiddenOnScroll;
  const scrollAnimatedValue = merged.scrollAnimatedValue;
  const nextHeaderLayoutY = merged.nextHeaderLayoutY;
  let tmp2 = hiddenOnScroll(closure_10(false), 2);
  const first = tmp2[0];
  let closure_6 = tmp2[1];
  const tmp4 = hiddenOnScroll(closure_10(0), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const tmp6 = hiddenOnScroll(closure_10(0), 2);
  const first2 = tmp6[0];
  closure_10 = tmp6[1];
  const tmp8 = hiddenOnScroll(closure_10(null), 2);
  const first3 = tmp8[0];
  closure_12 = tmp8[1];
  const tmp10 = hiddenOnScroll(closure_10(nextHeaderLayoutY), 2);
  const first4 = tmp10[0];
  const setNextHeaderY = tmp10[1];
  const tmp12 = hiddenOnScroll(closure_10(false), 2);
  const first5 = tmp12[0];
  let closure_16 = tmp12[1];
  const tmp16 = scrollViewHeight;
  let items = [scrollAnimatedValue, first2, first1, hiddenOnScroll];
  const tmp14 = closure_6((nativeScrollRef) => {
    if (null != nativeScrollRef) {
      nativeScrollRef.setNextHeaderY = setNextHeaderY;
      const obj = _mod390;
      closure_16(obj.isPublicInstance(nativeScrollRef));
    }
  }, []);
  const tmp17 = inverted(scrollViewHeight[4])(tmp14, ref);
  const tmp18 = closure_8(() => {
    let items;
    let diffClampResult = null;
    if (true === hiddenOnScroll) {
      const obj = { extrapolateLeft: "clamp", inputRange: items, outputRange: [0, 1] };
      items = [first1, first1 + 1];
      const diffClamp = get_FlatListDefault.diffClamp;
      get_FlatListDefault;
      const obj2 = { inputRange: [0, 1], outputRange: [0, -1] };
      const interpolateResult = scrollAnimatedValue.interpolate(obj);
      diffClampResult = diffClamp(interpolateResult.interpolate(obj2), -first2, 0);
    }
    return diffClampResult;
  }, items);
  let closure_17 = tmp18;
  const tmp19 = hiddenOnScroll(
    closure_10(() => {
      const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: [-1, 0], outputRange: [0, 0] });
      let addResult = interpolateResult;
      if (null != closure_17) {
        const obj = get_FlatListDefault;
        addResult = obj.add(interpolateResult, tmp2);
      }
      return addResult;
    }),
    2,
  );
  let closure_18 = tmp19[1];
  const first6 = tmp19[0];
  ref = first2(true);
  const ref2 = first2(null);
  let items1 = [first3];
  const tmp21 = first1(() => {
    const tmp2 = 0 !== first3 && null != tmp;
    if (tmp2) {
      ref.current = false;
    }
  }, items1);
  const tmp22 = closure_6((value) => {
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
    ref2.current = setTimeout(() => closure_12(merged), 15);
  }, []);
  let closure_21 = tmp22;
  const items2 = [first4, first, first2, first1, scrollViewHeight, scrollAnimatedValue, inverted, tmp18, tmp22, first5];
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
            const diff1 = (first4 || 0) - tmp32 - scrollViewHeight;
            if (diff1 > diff) {
              items.push(diff1, diff1 + 1);
              items1.push(diff1 - diff, diff1 - diff);
            }
          }
        }
      } else {
        items.push(first1);
        items1.push(0);
        const diff2 = (first4 || 0) - first2;
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
      const obj2 = inverted(scrollViewHeight[5]);
      const addResult = obj2.add(interpolateResult, tmp21);
      inverted = addResult;
      obj = addResult;
    }
    if (first5) {
      let closure_0 = obj.addListener(closure_21);
    }
    closure_18(obj);
    return () => {
      if (closure_0) {
        inverted.removeListener(tmp);
      }
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp4.current);
      }
    };
  }, items2);
  let Children = scrollAnimatedValue.Children;
  let onlyResult = Children.only(merged.children);
  let tmp25 = null;
  const tmp15 = inverted;
  if (first5) {
    tmp25 = null;
    if (null != first3) {
      let obj = { style: obj2 };
      obj2 = { transform: items3 };
      items3 = [{ translateY: first3 }];
      tmp25 = obj;
      const obj3 = { translateY: first3 };
    }
  }
  const obj4 = {
    collapsable: false,
    nativeID: merged.nativeID,
    onLayout(nativeEvent) {
      closure_8(nativeEvent.nativeEvent.layout.y);
      closure_10(nativeEvent.nativeEvent.layout.height);
      closure_6(true);
      merged.onLayout(nativeEvent);
      const Children = react.Children;
      const onlyResult = Children.only(merged.children);
      if (onlyResult.props.onLayout) {
        const props = onlyResult.props;
        props.onLayout(nativeEvent);
      }
    },
    ref: tmp17,
    style: items4,
    passthroughAnimatedPropExplicitValues: tmp25,
    children: first(onlyResult, obj6),
  };
  items4 = [onlyResult.props.style, closure_12.header];
  const obj5 = { transform: items5 };
  items5 = [{ translateY: first6 }];
  items4[2] = obj5;
  obj6 = { onLayout: "Array", style: closure_12.fill };
  const View = tmp15(tmp16[5]).View;
  return first3(View, obj4);
}
