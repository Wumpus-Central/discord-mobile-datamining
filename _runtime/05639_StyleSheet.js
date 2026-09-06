// === Module 5639: StyleSheet ===

// Module 5639 (StyleSheet)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["backgroundColor"];
get_ActivityIndicator = fn(17);
({ Animated: closure_7, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const container = StyleSheet.create({ container: { alignSelf: "flex-end", textAlign: "center", paddingHorizontal: 4, overflow: "hidden" } });

export const Badge = function Badge(visible) {
  let flag = visible.visible;
  ({ children, style } = visible);
  if (flag === undefined) {
    flag = true;
  }
  let num = visible.size;
  if (num === undefined) {
    num = 18;
  }
  const merged = Object.assign(visible, Object.assign({ children: 0, style: 0, visible: 0, size: 0 }));
  const opacity = _slicedToArray(noop.useState(() => {
    let num = 0;
    if (flag) {
      num = 1;
    }
    value = new RN.Value(num);
    return value;
  }), 1)[0];
  const tmp2 = _slicedToArray(noop.useState(flag), 2);
  const first1 = tmp2[0];
  closure_3 = tmp4;
  let obj1 = flag(first1[5]);
  const theme = obj1.useTheme();
  const items = [opacity, first1, flag];
  ({ colors, fonts } = theme);
  const effect = noop.useEffect(() => {
    if (first1) {
      let num = 0;
      if (flag) {
        num = 1;
      }
      const obj = { toValue: num, duration: 150, useNativeDriver: true };
      RN.timing(first, obj).start((finished) => {
        finished = finished.finished;
        if (finished) {
          finished = !flag;
        }
        if (finished) {
          closure_1_3(false);
        }
      });
      return () => opacity.stopAnimation();
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
  const tmp10 = _objectWithoutProperties(tmp9, closure_3);
  let str = "white";
  if (obj3.isLight()) {
    str = "black";
  }
  const result = num / 2;
  let obj = { numberOfLines: 1, style: null };
  obj = { transform: null, color: null, lineHeight: null, height: null, minWidth: null, opacity: null, backgroundColor: null, fontSize: null, borderRadius: null, borderCurve: "continuous" };
  obj1 = { scale: null };
  const rounded = Math.floor(3 * num / 4);
  obj1.scale = opacity.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] });
  const items1 = [obj1];
  obj.transform = items1;
  obj.color = str;
  obj.lineHeight = num - 1;
  obj.height = num;
  obj.minWidth = num;
  obj.opacity = opacity;
  obj.backgroundColor = notification;
  obj.fontSize = rounded;
  obj.borderRadius = result;
  const items2 = [obj, fonts.regular, container.container, tmp10];
  obj.style = items2;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return <RN.Text transform={null} color={null} lineHeight={null} height={null} minWidth={null} opacity={null} backgroundColor={null} fontSize={null} borderRadius={null} borderCurve="continuous" />;
};