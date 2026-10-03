// === Module 6619: common/SafeAreaView ===

// Module 6619 (common/SafeAreaView)
import c from "c" /* 576 */;
import _modDef1342 from "module_1342" /* 1342 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useRefValueDefault from "useRefValue" /* 5973 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["top", "bottom", "left", "right", "style"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SafeAreaView.tsx");

export const SafeAreaPaddingView = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
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
    let tmp7 = right;
    let tmp6 = left;
    let tmp5 = bottom;
    let tmp4 = top;
    let tmp3 = tmp10;
    let obj2 = style;
  } else {
    obj2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
    tmp7 = cResult[6];
  }
  const rect = useSafeAreaInsetsDefault();
  const tmp11 = undefined !== tmp4 && tmp4;
  const tmp12 = undefined !== tmp5 && tmp5;
  const tmp13 = undefined !== tmp6 && tmp6;
  const tmp14 = undefined !== tmp7 && tmp7;
  if (obj2 == null) {
    obj2 = {};
  }
  let items = [obj2, , , , ];
  let tmp21;
  if (tmp11) {
    const obj4 = { paddingTop: rect.top + tmp17 };
    tmp21 = obj4;
  }
  items[1] = tmp21;
  let tmp22;
  if (tmp12) {
    const obj5 = { paddingBottom: rect.bottom + tmp18 };
    tmp22 = obj5;
  }
  items[2] = tmp22;
  let tmp23;
  if (tmp13) {
    const obj6 = { paddingLeft: rect.left + tmp19 };
    tmp23 = obj6;
  }
  items[3] = tmp23;
  let tmp24;
  if (tmp14) {
    const obj7 = { paddingRight: rect.right + tmp20 };
    tmp24 = obj7;
  }
  items[4] = tmp24;
  importDefault = items;
  const tmp25 = useRefValueDefault(noop.useRef(null));
  const tmp26 = _modDef1342(items, tmp25);
  closure_2 = tmp26;
  if (tmp26) {
    importDefault = tmp25;
    items = tmp25;
  }
  if (cResult[7] === tmp26) {
    if (cResult[8] === items) {
      let tmp27 = cResult[9];
    }
    const insertionEffect = noop.useInsertionEffect(tmp27);
    if (cResult[10] === tmp3) {
      if (cResult[11] === items) {
        let tmp29 = cResult[12];
      }
      return tmp29;
    }
    const obj8 = { style: items };
    const merged = Object.assign(tmp3);
    const tmp35 = <View style={items} />;
    cResult[10] = tmp3;
    cResult[11] = items;
    cResult[12] = tmp35;
    tmp29 = tmp35;
  }
  class V {
    constructor() {
      if (!closure_2) {
        tmp = closure_0;
        tmp2 = closure_1;
        closure_0.current = closure_1;
      }
      return;
    }
  }
  cResult[7] = tmp26;
  cResult[8] = items;
  cResult[9] = V;
  tmp27 = V;
  const ref = noop.useRef(null);
  tmp17 = obj2.paddingTop || obj2.paddingVertical || 0;
  tmp18 = obj2.paddingBottom || obj2.paddingVertical || 0;
  tmp19 = obj2.paddingLeft || obj2.paddingHorizontal || 0;
  tmp20 = obj2.paddingRight || obj2.paddingHorizontal || 0;
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
  let current;
  closure_2 = undefined;
  const rect = useSafeAreaInsetsDefault();
  const ref = noop.useRef(null);
  if (style == null) {
    style = {};
  }
  let items = [style, , , , ];
  let tmp9;
  if (flag) {
    const obj = { paddingTop: rect.top + tmp5 };
    tmp9 = obj;
  }
  items[1] = tmp9;
  let tmp10;
  if (flag2) {
    const obj3 = { paddingBottom: rect.bottom + tmp6 };
    tmp10 = obj3;
  }
  items[2] = tmp10;
  let tmp11;
  if (flag3) {
    const obj4 = { paddingLeft: rect.left + tmp7 };
    tmp11 = obj4;
  }
  items[3] = tmp11;
  let tmp12;
  if (flag4) {
    const obj5 = { paddingRight: rect.right + tmp8 };
    tmp12 = obj5;
  }
  items[4] = tmp12;
  current = items;
  const tmp13 = useRefValueDefault(ref);
  const tmp14 = _modDef1342(items, tmp13);
  closure_2 = tmp14;
  if (tmp14) {
    current = tmp13;
    items = tmp13;
  }
  const insertionEffect = noop.useInsertionEffect(() => {
    if (!closure_2) {
      ref.current = current;
    }
  });
  const merged1 = Object.assign(merged);
  return <View style={items} />;
});