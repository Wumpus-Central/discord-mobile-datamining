// _runtime/06327_StyleSheet.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let error;
const require = arg1;
let closure_3 = ["backgroundColor"];
({ Animated: error, Platform, StyleSheet } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { alignSelf: "flex-end", textAlign: "center", paddingHorizontal: 4, overflow: "hidden" } });

export const Badge = function Badge(visible) {
  let children;
  let colors;
  let fonts;
  let style;
  let flag = visible.visible;
  ({ children, style } = visible);
  if (flag === undefined) {
    flag = true;
  }
  let num = visible.size;
  if (num === undefined) {
    num = 18;
  }
  const merged = Object.assign(visible, Object.create(null));
  let first;
  let first1;
  let c3;
  first = callback2(React.useState(() => {
    let num = 0;
    if (flag) {
      num = 1;
    }
    const value = new outer1_7.Value(num);
    return value;
  }), 1)[0];
  const tmp2 = callback2(React.useState(flag), 2);
  first1 = tmp2[0];
  c3 = tmp4;
  let obj1 = flag(first1[5]);
  const theme = obj1.useTheme();
  const items = [first, first1, flag];
  ({ colors, fonts } = theme);
  const effect = React.useEffect(() => {
    if (first1) {
      let num = 0;
      if (flag) {
        num = 1;
      }
      const obj = { toValue: null, duration: 150, useNativeDriver: true };
      obj[0] = num;
      outer1_7.timing(first, obj).start((finished) => {
        finished = finished.finished;
        if (finished) {
          finished = !closure_0;
        }
        if (finished) {
          callback(false);
        }
      });
      return () => closure_1.stopAnimation();
    }
  }, items);
  if (!first1) {
    if (flag) {
      tmp4(true);
    } else {
      return null;
    }
  }
  const tmp9 = StyleSheet.flatten(style) || {};
  let notification = tmp9.backgroundColor;
  if (undefined === notification) {
    notification = colors.notification;
  }
  const tmp10 = callback(tmp9, c3);
  const tmp5 = first1;
  let str = "white";
  if (obj3.isLight()) {
    str = "black";
  }
  const result = num / 2;
  let obj = { numberOfLines: 1, style: null };
  obj = { transform: null, color: null, lineHeight: null, height: null, minWidth: null, opacity: null, backgroundColor: null, fontSize: null, borderRadius: null, borderCurve: "continuous" };
  obj1 = { scale: null };
  const rounded = Math.floor(3 * num / 4);
  obj1[0] = first.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] });
  const items1 = [obj1];
  obj[0] = items1;
  obj[1] = str;
  obj[2] = num - 1;
  obj[3] = num;
  obj[4] = num;
  obj[5] = first;
  obj[6] = notification;
  obj[7] = rounded;
  obj[8] = result;
  const items2 = [obj, fonts.regular, container.container, tmp10];
  obj[1] = items2;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return <RN.Text transform={null} color={null} lineHeight={null} height={null} minWidth={null} opacity={null} backgroundColor={null} fontSize={null} borderRadius={null} borderCurve="continuous" />;
};