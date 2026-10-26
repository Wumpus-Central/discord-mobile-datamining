// === Module 18053: FrameSurfaceState ===

// Module 18053 (FrameSurfaceState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5234 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6880 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 }, action: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.action = { marginTop: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_16 };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameSurfaceExplanation(arg0) {
  const cResult = c.c(16);
  ({ icon, heading, description, error, action } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== heading) {
    let tmp6 = null;
    if (null != heading) {
      const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
      tmp6 = React3(Text_Text.Heading, obj2);
    }
    cResult[0] = heading;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== description) {
    let tmp9 = null;
    if (null != description) {
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
      tmp9 = React3(Text_Text.Text, obj3);
    }
    cResult[2] = description;
    cResult[3] = tmp9;
    let tmp8 = tmp9;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== error) {
    let tmp12 = null;
    if (null != error) {
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
      tmp12 = React3(Text_Text.Text, obj4);
    }
    cResult[4] = error;
    cResult[5] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === action) {
    if (cResult[7] === tmp4.action) {
      let tmp14 = cResult[8];
    }
    if (cResult[9] === icon) {
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp8) {
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp14) {
                let tmp18 = cResult[15];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const obj5 = { style: tmp4.container, children: null };
    const items = [icon, tmp5, tmp8, tmp11, tmp14];
    obj5.children = items;
    const tmp21 = React4(View, obj5);
    cResult[9] = icon;
    cResult[10] = tmp4.container;
    cResult[11] = tmp5;
    cResult[12] = tmp8;
    cResult[13] = tmp11;
    cResult[14] = tmp14;
    cResult[15] = tmp21;
    tmp18 = tmp21;
  }
  let tmp15 = null;
  if (null != action) {
    const obj6 = { style: tmp4.action, children: action };
    tmp15 = React3(View, obj6);
  }
  cResult[6] = action;
  cResult[7] = tmp4.action;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function FrameSurfaceExplanation(icon) {
  ({ heading, description, error, action } = icon);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const items = [icon.icon, , , , ];
  let tmp4 = null;
  if (null != heading) {
    const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
    tmp4 = React3(Text_Text.Heading, obj2);
  }
  items[1] = tmp4;
  let tmp8 = null;
  if (null != description) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
    tmp8 = React3(Text_Text.Text, obj3);
  }
  items[2] = tmp8;
  let tmp12 = null;
  if (null != error) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp12 = React3(Text_Text.Text, obj4);
  }
  items[3] = tmp12;
  let tmp16 = null;
  if (null != action) {
    const obj5 = { style: tmp.action, children: action };
    tmp16 = React3(View, obj5);
  }
  items[4] = tmp16;
  obj.children = items;
  return React4(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameSurfaceState.tsx");

export const FrameSurfaceExplanation = tmp4;
export const FrameSurfaceLoading = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameSurfaceLoading() {
  const cResult = c.c(3);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { style: tmp4.container, children: first };
    const tmp11 = React3(View, obj2);
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function FrameSurfaceLoading() {
  return React3(View, { style: closure_5().container, children: React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
});