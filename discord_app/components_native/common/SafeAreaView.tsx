// === Module 6626: common/SafeAreaView ===

// Module 6626 (common/SafeAreaView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _modDef1342 from "module_1342" /* 1342 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useRefValueDefault from "useRefValue" /* 5980 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, tmp;

let closure_3 = ["top", "bottom", "left", "right", "style"];
const View = react_native.View;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottom;
  let left;
  let obj2;
  let right;
  let style;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let top;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ top, bottom, left, right, style } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = style;
    cResult[2] = tmp10;
    cResult[3] = top;
    cResult[4] = bottom;
    cResult[5] = left;
    cResult[6] = right;
    tmp7 = right;
    tmp6 = left;
    tmp5 = bottom;
    tmp4 = top;
    tmp3 = tmp10;
    obj2 = style;
  } else {
    obj2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
    tmp7 = cResult[6];
  }
  const tmp11 = undefined !== tmp4 && tmp4;
  const tmp12 = undefined !== tmp5 && tmp5;
  const tmp13 = undefined !== tmp6 && tmp6;
  const tmp14 = undefined !== tmp7 && tmp7;
  const rect = useSafeAreaInsetsDefault();
  const ref = react.useRef(null);
  if (obj2 == null) {
    obj2 = {};
  }
  let items = [, , , , ];
  const tmp17 = obj2.paddingTop || obj2.paddingVertical || 0;
  const tmp18 = obj2.paddingBottom || obj2.paddingVertical || 0;
  const tmp19 = obj2.paddingLeft || obj2.paddingHorizontal || 0;
  const tmp20 = obj2.paddingRight || obj2.paddingHorizontal || 0;
  items[0] = obj2;
  let tmp21;
  if (tmp11) {
    tmp21 = { paddingTop: rect.top + tmp17 };
    const obj4 = { paddingTop: rect.top + tmp17 };
  }
  items[1] = tmp21;
  let tmp22;
  if (tmp12) {
    tmp22 = { paddingBottom: rect.bottom + tmp18 };
    const obj5 = { paddingBottom: rect.bottom + tmp18 };
  }
  items[2] = tmp22;
  let tmp23;
  if (tmp13) {
    tmp23 = { paddingLeft: rect.left + tmp19 };
    const obj6 = { paddingLeft: rect.left + tmp19 };
  }
  items[3] = tmp23;
  let tmp24;
  if (tmp14) {
    tmp24 = { paddingRight: rect.right + tmp20 };
    const obj7 = { paddingRight: rect.right + tmp20 };
  }
  items[4] = tmp24;
  importDefault = items;
  const tmp25 = useRefValueDefault(ref);
  const tmp26 = _modDef1342(items, tmp25);
  let closure_2 = tmp26;
  if (closure_2) {
    importDefault = tmp25;
    items = tmp25;
  }
  if (cResult[7] === tmp26) {
    let tmp27;
    if (cResult[8] === items) {
      tmp27 = cResult[9];
    }
    const insertionEffect = react.useInsertionEffect(tmp27);
    if (cResult[10] === tmp3) {
      let tmp29;
      if (cResult[11] === items) {
        tmp29 = cResult[12];
      }
      return tmp29;
    }
    const merged = Object.assign(tmp3);
    const tmp35 = <View style={items} />;
    cResult[10] = tmp3;
    cResult[11] = items;
    cResult[12] = tmp35;
    tmp29 = tmp35;
  }
  class V {
    constructor() {
      tmp = closure_2;
      if (!tmp) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        closure_0.current = closure_1;
      }
      return;
    }
  }
  cResult[7] = tmp26;
  cResult[8] = items;
  cResult[9] = V;
  tmp27 = V;
}) : ((top) => {
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
  let closure_1;
  let closure_2;
  const rect = useSafeAreaInsetsDefault();
  const ref = react.useRef(null);
  if (style == null) {
    style = {};
  }
  let items = [, , , , ];
  const tmp5 = style.paddingTop || style.paddingVertical || 0;
  const tmp6 = style.paddingBottom || style.paddingVertical || 0;
  const tmp7 = style.paddingLeft || style.paddingHorizontal || 0;
  const tmp8 = style.paddingRight || style.paddingHorizontal || 0;
  items[0] = style;
  let tmp9;
  if (flag) {
    tmp9 = { paddingTop: rect.top + tmp5 };
    const obj = { paddingTop: rect.top + tmp5 };
  }
  items[1] = tmp9;
  let tmp10;
  if (flag2) {
    tmp10 = { paddingBottom: rect.bottom + tmp6 };
    const obj3 = { paddingBottom: rect.bottom + tmp6 };
  }
  items[2] = tmp10;
  let tmp11;
  if (flag3) {
    tmp11 = { paddingLeft: rect.left + tmp7 };
    const obj4 = { paddingLeft: rect.left + tmp7 };
  }
  items[3] = tmp11;
  let tmp12;
  if (flag4) {
    tmp12 = { paddingRight: rect.right + tmp8 };
    const obj5 = { paddingRight: rect.right + tmp8 };
  }
  items[4] = tmp12;
  closure_1 = items;
  const tmp13 = useRefValueDefault(ref);
  closure_2 = _modDef1342(items, tmp13);
  const tmp14 = _modDef1342(items, tmp13);
  if (closure_2) {
    closure_1 = tmp13;
    items = tmp13;
  }
  const insertionEffect = react.useInsertionEffect(() => {
    if (!closure_2) {
      ref.current = current;
    }
  });
  const merged1 = Object.assign(merged);
  return <View style={items} />;
});
const result = size.fileFinishedImporting("components_native/common/SafeAreaView.tsx");

export const SafeAreaPaddingView = tmp2;