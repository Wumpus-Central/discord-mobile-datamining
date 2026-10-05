// discord_app/modules/conjure/debug/native/ConjureTraceFormat.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import debug_ConjureTraceFormat from "../ConjureTraceFormat.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let status;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  model: obj2,
  subagent: { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE },
  context: { color: nativeDefault.colors.TEXT_SUBTLE },
  tool: { color: nativeDefault.colors.TEXT_MUTED },
  delegated: { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING },
};
obj2 = { color: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
({ color: nativeDefault.colors.TEXT_SUBTLE });
({ color: nativeDefault.colors.TEXT_MUTED });
({ color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
const styles = createStyles(obj);
createStyles = createStyles_mod;
const createStyles2 = createStyles.createStyles;
const obj7 = {
  model: { backgroundColor: nativeDefault.colors.TEXT_BRAND },
  subagent: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE },
  context: { backgroundColor: nativeDefault.colors.TEXT_SUBTLE },
  tool: { backgroundColor: nativeDefault.colors.TEXT_MUTED },
  delegated: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING },
};
({ backgroundColor: nativeDefault.colors.TEXT_BRAND });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.TEXT_SUBTLE });
({ backgroundColor: nativeDefault.colors.TEXT_MUTED });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
const styles2 = createStyles2(obj7);
createStyles = createStyles_mod;
const createStyles3 = createStyles.createStyles;
const obj13 = {
  dot: { width: 8, height: 8, borderRadius: 4 },
  started: { backgroundColor: nativeDefault.colors.STATUS_WARNING },
  ok: { backgroundColor: nativeDefault.colors.STATUS_POSITIVE },
  error: { backgroundColor: nativeDefault.colors.STATUS_DANGER },
};
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ backgroundColor: nativeDefault.colors.STATUS_DANGER });
let closure_4 = createStyles3(obj13);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (status) => {
      const obj = react2;
      const cResult = obj.c(8);
      status = status.status;
      const tmp4 = closure_4();
      if (cResult[0] === tmp4.dot) {
        let tmp6;
        let tmp7;
        if (cResult[1] === tmp4[status]) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== status) {
          const tmpResult = debug_ConjureTraceFormat;
          const statusLabelResult = tmpResult.statusLabel(status);
          cResult[3] = status;
          cResult[4] = statusLabelResult;
          tmp7 = statusLabelResult;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp6) {
          let tmp9;
          if (cResult[6] === tmp7) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const tmp12 = <View style={tmp6} accessibilityRole="image" accessibilityLabel={tmp7} />;
        cResult[5] = tmp6;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const items = [tmp4.dot, tmp4[status]];
      cResult[0] = tmp4.dot;
      cResult[1] = tmp4[status];
      cResult[2] = items;
      tmp6 = items;
    }
  : (status) => {
      status = status.status;
      const tmp = closure_4();
      const items = [tmp.dot, tmp[status]];
      const obj2 = debug_ConjureTraceFormat;
      return <View style={items} accessibilityRole="image" accessibilityLabel={obj2.statusLabel(status)} />;
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureTraceFormat.tsx");

export const useTraceCategoryTextStyles = styles;
export const useTraceCategoryFillStyles = styles2;
export const TraceStatusDot = tmp8;
