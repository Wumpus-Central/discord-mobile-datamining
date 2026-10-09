// discord_app/modules/icymi/native/ICYMIBottomLoading.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles(() => {
  const obj = {
    container: {
      paddingTop: nativeDefault.space.PX_8,
      paddingBottom: nativeDefault.space.PX_24,
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMIBottomLoading() {
      const cResult = c.c(3);
      const tmp2 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = <React4 size="small" />;
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp2.container) {
        const obj2 = { style: tmp2.container, children: first };
        const tmp10 = <React3 style={tmp2.container}>{first}</React3>;
        cResult[1] = tmp2.container;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : function ICYMIBottomLoading() {
      return (
        <React3 style={closure_6().container}>
          <React4 size="small" />
        </React3>
      );
    };
