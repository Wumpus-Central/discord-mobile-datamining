// === Module 5434: SafeAreaPaddingView ===

// Module 5434 (SafeAreaPaddingView)
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const result = require("set").fileFinishedImporting("components_native/common/SafeAreaView.tsx");

export const SafeAreaPaddingView = function SafeAreaPaddingView(top) {
  let flag = top.top;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = top.bottom;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = top.left;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = top.right;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let style = top.style;
  const merged = Object.assign(top, Object.create(null));
  let ref;
  dependencyMap = undefined;
  let React;
  const rect = ref(1629)();
  obj1 = React;
  ref = React.useRef(null);
  if (style == null) {
    style = {};
  }
  let items = [style, , , , ];
  let tmp9;
  if (flag) {
    let obj = { paddingTop: null };
    obj[0] = rect.top + tmp5;
    tmp9 = obj;
  }
  items[1] = tmp9;
  let tmp10;
  if (flag2) {
    obj = { paddingBottom: null };
    obj[0] = rect.bottom + tmp6;
    tmp10 = obj;
  }
  items[2] = tmp10;
  let tmp11;
  if (flag3) {
    obj1 = { paddingLeft: null };
    obj1[0] = rect.left + tmp7;
    tmp11 = obj1;
  }
  items[3] = tmp11;
  let tmp12;
  if (flag4) {
    const obj2 = { paddingRight: null };
    obj2[0] = rect.right + tmp8;
    tmp12 = obj2;
  }
  items[4] = tmp12;
  dependencyMap = items;
  const tmp13 = ref(5435)(ref);
  const tmp14 = ref(659)(items, tmp13);
  React = tmp14;
  if (tmp14) {
    dependencyMap = tmp13;
    items = tmp13;
  }
  const insertionEffect = obj1.useInsertionEffect(() => {
    if (!closure_2) {
      ref.current = closure_1;
    }
  });
  const merged1 = Object.assign(merged);
  return <View style={items} />;
};