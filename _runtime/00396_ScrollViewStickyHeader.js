// _runtime/00396_ScrollViewStickyHeader.js
import _mod390 from "metro/00390__.js";
import get_FlatListDefault from "00397_get_FlatList.js";
import _slicedToArray from "metro/00032__.js";
import "module_19";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

require = fn;
const noop = fn(19);
({
  cloneElement: hasOwnProperty,
  useCallback: metroRequire,
  useEffect: closure_7,
  useMemo: closure_8,
  useRef: closure_9,
  useState: c10,
} = noop);
const jsx = fn(21).jsx;
let closure_12 = get_hairlineWidth.create({ fill: { flex: 1 }, header: { zIndex: 10 } });

export default function ScrollViewStickyHeader(ref) {
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  closure_10 = undefined;
  let inverted = merged.inverted;
  const scrollViewHeight = merged.scrollViewHeight;
  const hiddenOnScroll = merged.hiddenOnScroll;
  const scrollAnimatedValue = merged.scrollAnimatedValue;
  let tmp2 = hiddenOnScroll(closure_10(false), 2);
  const first = tmp2[0];
  closure_6 = tmp2[1];
  const tmp4 = hiddenOnScroll(closure_10(0), 2);
  const first1 = tmp4[0];
  closure_8 = tmp4[1];
  const tmp6 = hiddenOnScroll(closure_10(0), 2);
  const first2 = tmp6[0];
  closure_10 = tmp6[1];
  const tmp8 = hiddenOnScroll(closure_10(null), 2);
  const first3 = tmp8[0];
  closure_12 = tmp8[1];
  const tmp10 = hiddenOnScroll(closure_10(merged.nextHeaderLayoutY), 2);
  const first4 = tmp10[0];
  const setNextHeaderY = tmp10[1];
  const tmp12 = hiddenOnScroll(closure_10(false), 2);
  const first5 = tmp12[0];
  closure_16 = tmp12[1];
  let items = [scrollAnimatedValue, first2, first1, hiddenOnScroll];
  const tmp14 = closure_6((nativeScrollRef) => {
    if (null != nativeScrollRef) {
      nativeScrollRef.setNextHeaderY = setNextHeaderY;
      closure_16(_mod390.isPublicInstance(nativeScrollRef));
    }
  }, []);
  const tmp15 = inverted;
  const tmp16 = scrollViewHeight;
  const tmp18 = closure_8(() => {
    let diffClampResult = null;
    if (true === hiddenOnScroll) {
      let obj = { extrapolateLeft: "clamp", inputRange: null, outputRange: null };
      const items = [first1, first1 + 1];
      obj.inputRange = items;
      obj.outputRange = [0, 1];
      obj = { inputRange: [0, 1], outputRange: [0, -1] };
      diffClampResult = obj.diffClamp(scrollAnimatedValue.interpolate(obj).interpolate(obj), -first2, 0);
      const interpolateResult = scrollAnimatedValue.interpolate(obj);
    }
    return diffClampResult;
  }, items);
  closure_17 = tmp18;
  const tmp19 = hiddenOnScroll(
    closure_10(() => {
      const interpolateResult = scrollAnimatedValue.interpolate({ inputRange: [-1, 0], outputRange: [0, 0] });
      let addResult = interpolateResult;
      if (null != closure_17) {
        addResult = get_FlatListDefault.add(interpolateResult, tmp2);
      }
      return addResult;
    }),
    2,
  );
  closure_18 = tmp19[1];
  ref = first2(true);
  first2(null);
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
  const tmp21 = closure_6((value) => {
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
    ref2.current = setTimeout(() => closure_12(value), 15);
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
    closure_18(obj);
    return () => {
      if (closure_0) {
        addResult.removeListener(tmp);
      }
      if (null != ref.current) {
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
      obj = { translateY: first3 };
      const items3 = [obj];
      obj.transform = items3;
      obj.style = obj;
      tmp24 = obj;
    }
  }
  const obj1 = {
    collapsable: false,
    nativeID: merged.nativeID,
    onLayout(nativeEvent) {
      closure_8(nativeEvent.nativeEvent.layout.y);
      closure_10(nativeEvent.nativeEvent.layout.height);
      closure_6(true);
      merged.onLayout(nativeEvent);
      const Children = noop.Children;
      const onlyResult = Children.only(merged.children);
      if (onlyResult.props.onLayout) {
        const props = onlyResult.props;
        props.onLayout(nativeEvent);
      }
    },
    ref: inverted(scrollViewHeight[4])(
      closure_6((nativeScrollRef) => {
        if (null != nativeScrollRef) {
          nativeScrollRef.setNextHeaderY = setNextHeaderY;
          closure_16(_mod390.isPublicInstance(nativeScrollRef));
        }
      }, []),
      ref.ref,
    ),
    style: null,
    passthroughAnimatedPropExplicitValues: tmp24,
    children: null,
  };
  const items4 = [onlyResult.props.style, closure_12.header];
  let obj2 = { transform: null };
  const items5 = [{ translateY: tmp19[0] }];
  obj2.transform = items5;
  items4[2] = obj2;
  obj1.style = items4;
  const obj3 = { onLayout: "Array", style: closure_12.fill };
  obj1.children = first(onlyResult, obj3);
  return first3(tmp15(tmp16[5]).View, obj1);
}
