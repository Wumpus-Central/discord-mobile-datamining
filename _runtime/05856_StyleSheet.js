// _runtime/05856_StyleSheet.js
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

const require = fn;
let closure_3 = ["backgroundColor"];
get_ActivityIndicator = fn(17);
({ Animated: closure_7, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const container = StyleSheet.create({
  container: { alignSelf: "flex-end", textAlign: "center", paddingHorizontal: 4, overflow: "hidden" },
});

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
  first1 = undefined;
  const opacity = _slicedToArray(
    noop.useState(() => {
      let num = 0;
      if (flag) {
        num = 1;
      }
      value = new RN.Value(num);
      return value;
    }),
    1,
  )[0];
  [first1] = noop.useState(flag);
  closure_3 = tmp4;
  const theme = flag(first1[5]).useTheme();
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
  const obj2 = flag(first1[5]);
  const tmp10 = _objectWithoutProperties(tmp9, closure_3);
  let str = "white";
  if (obj3.isLight()) {
    str = "black";
  }
  const result = num / 2;
  let obj = { numberOfLines: 1, style: null };
  const obj4 = {
    transform: null,
    color: null,
    lineHeight: null,
    height: null,
    minWidth: null,
    opacity: null,
    backgroundColor: null,
    fontSize: null,
    borderRadius: null,
    borderCurve: "continuous",
  };
  const obj5 = { scale: null };
  const rounded = Math.floor((3 * num) / 4);
  obj5.scale = opacity.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] });
  const items1 = [obj5];
  obj4.transform = items1;
  obj4.color = str;
  obj4.lineHeight = num - 1;
  obj4.height = num;
  obj4.minWidth = num;
  obj4.opacity = opacity;
  obj4.backgroundColor = notification;
  obj4.fontSize = rounded;
  obj4.borderRadius = result;
  const items2 = [obj4, fonts.regular, container.container, tmp10];
  obj.style = items2;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return <RN.Text numberOfLines={1} style={null} />;
};
