// === Module 7123: common/SafeAreaView ===

// Module 7123 (common/SafeAreaView)
import _modDef1332 from "module_1332" /* 1332 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useRefValueDefault from "useRefValue" /* 5586 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SafeAreaView.tsx");

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
  const merged = Object.assign(top, Object.assign({ top: 0, bottom: 0, left: 0, right: 0, style: 0 }));
  let current;
  closure_2 = undefined;
  const rect = useSafeAreaInsetsDefault();
  let obj1 = noop;
  const ref = noop.useRef(null);
  if (style == null) {
    style = {};
  }
  let items = [style, , , , ];
  let tmp9;
  if (flag) {
    let obj = { paddingTop: rect.top + tmp5 };
    tmp9 = obj;
  }
  items[1] = tmp9;
  let tmp10;
  if (flag2) {
    obj = { paddingBottom: rect.bottom + tmp6 };
    tmp10 = obj;
  }
  items[2] = tmp10;
  let tmp11;
  if (flag3) {
    obj1 = { paddingLeft: rect.left + tmp7 };
    tmp11 = obj1;
  }
  items[3] = tmp11;
  let tmp12;
  if (flag4) {
    const obj2 = { paddingRight: rect.right + tmp8 };
    tmp12 = obj2;
  }
  items[4] = tmp12;
  current = items;
  const tmp13 = useRefValueDefault(ref);
  const tmp14 = _modDef1332(items, tmp13);
  closure_2 = tmp14;
  if (tmp14) {
    current = tmp13;
    items = tmp13;
  }
  const insertionEffect = obj1.useInsertionEffect(() => {
    if (!closure_2) {
      ref.current = current;
    }
  });
  const merged1 = Object.assign(merged);
  return <View style={items} />;
};