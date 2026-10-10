// discord_app/modules/frames/native/FrameSurfaceState.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_24,
  },
};
let closure_5 = createStyles.createStyles(obj2);
fn(558);
let obj3 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
};
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FrameSurfaceExplanation(arg0) {
      const cResult = c.c(11);
      ({ heading, description, error } = arg0);
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
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === tmp11) {
              let tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
      }
      const obj5 = { style: tmp4.container, children: null };
      const items = [tmp5, tmp8, tmp11];
      obj5.children = items;
      const tmp15 = React4(View, obj5);
      cResult[6] = tmp4.container;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
      cResult[9] = tmp11;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
  : function FrameSurfaceExplanation(arg0) {
      ({ heading, description, error } = arg0);
      const obj = { style: closure_5().container, children: null };
      let tmp3 = null;
      if (null != heading) {
        const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
        tmp3 = React3(Text_Text.Heading, obj2);
      }
      const items = [tmp3, ,];
      let tmp7 = null;
      if (null != description) {
        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
        tmp7 = React3(Text_Text.Text, obj3);
      }
      items[1] = tmp7;
      let tmp11 = null;
      if (null != error) {
        const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
        tmp11 = React3(Text_Text.Text, obj4);
      }
      items[2] = tmp11;
      obj.children = items;
      return React4(View, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameSurfaceState.tsx");

export const FrameSurfaceExplanation = tmp4;
export const FrameSurfaceLoading = ReactCompilerGating.isReactCompilerEnabled()
  ? function FrameSurfaceLoading() {
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
    }
  : function FrameSurfaceLoading() {
      return React3(View, {
        style: closure_5().container,
        children: React3(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}),
      });
    };
