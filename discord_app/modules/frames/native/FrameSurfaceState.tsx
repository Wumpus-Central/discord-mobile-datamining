// === Module 16800: FrameSurfaceState ===

// Module 16800 (FrameSurfaceState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5975 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let description;
  let error;
  let heading;
  let items;
  let tmp11;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(11);
  ({ heading, description, error } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== heading) {
    let tmp6 = null;
    if (null != heading) {
      const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
      tmp6 = _false(Text_Text.Heading, obj2);
    }
    cResult[0] = heading;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== description) {
    let tmp9 = null;
    if (null != description) {
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
      tmp9 = _false(Text_Text.Text, obj3);
    }
    cResult[2] = description;
    cResult[3] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== error) {
    let tmp12 = null;
    if (null != error) {
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
      tmp12 = _false(Text_Text.Text, obj4);
    }
    cResult[4] = error;
    cResult[5] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp8) {
        let tmp14;
        if (cResult[9] === tmp11) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
    }
  }
  const obj5 = { style: tmp4.container, children: items };
  items = [tmp5, tmp8, tmp11];
  const tmp15 = React3(View, obj5);
  cResult[6] = tmp4.container;
  cResult[7] = tmp5;
  cResult[8] = tmp8;
  cResult[9] = tmp11;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : ((arg0) => {
  let description;
  let error;
  let heading;
  let items;
  ({ heading, description, error } = arg0);
  let tmp3 = null;
  const obj = { style: closure_5().container, children: items };
  if (null != heading) {
    const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
    tmp3 = _false(Text_Text.Heading, obj2);
  }
  items = [tmp3, , ];
  let tmp7 = null;
  if (null != description) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
    tmp7 = _false(Text_Text.Text, obj3);
  }
  items[1] = tmp7;
  let tmp11 = null;
  if (null != error) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp11 = _false(Text_Text.Text, obj4);
  }
  items[2] = tmp11;
  return React3(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = _false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { style: tmp4.container, children: first };
    const tmp11 = _false(View, obj2);
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  const obj = { style: closure_5().container, children: _false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return _false(View, obj);
});
const result = size.fileFinishedImporting("modules/frames/native/FrameSurfaceState.tsx");

export const FrameSurfaceExplanation = tmp4;
export const FrameSurfaceLoading = tmp5;