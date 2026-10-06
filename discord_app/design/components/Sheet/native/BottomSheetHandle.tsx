// === Module 6655: Sheet/BottomSheetHandle ===

// Module 6655 (Sheet/BottomSheetHandle)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp2;
  let tmp3;
  let closure_0 = arg1;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] !== arg1) {
    const fn = function c() {
      return {
        expandActionSheet() {
          const current = closure_1_0.current;
          if (current != null) {
            current.expand();
          }
        },
        closeActionSheet(force) {
          force = undefined;
          if (force != null) {
            force = force.force;
          }
          if (true === force) {
            const current2 = closure_1_0.current;
            if (current2 != null) {
              current2.forceClose();
            }
          } else {
            const current = closure_1_0.current;
            if (current != null) {
              current.close();
            }
          }
        },
        collapseActionSheet() {
          const current = closure_1_0.current;
          if (current != null) {
            current.collapse();
          }
        },
        snapToIndex(arg0) {
          const current = closure_1_0.current;
          if (current != null) {
            current.snapToIndex(arg0);
          }
        }
      };
    };
    const items = [arg1];
    cResult[0] = arg1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const imperativeHandle = react.useImperativeHandle(arg0, tmp2, tmp3);
}) : ((arg0, arg1) => {
  let closure_0 = arg1;
  const items = [arg1];
  const imperativeHandle = react.useImperativeHandle(arg0, () => ({
    expandActionSheet() {
      const current = closure_1_0.current;
      if (current != null) {
        current.expand();
      }
    },
    closeActionSheet(force) {
      force = undefined;
      if (force != null) {
        force = force.force;
      }
      if (true === force) {
        const current2 = closure_1_0.current;
        if (current2 != null) {
          current2.forceClose();
        }
      } else {
        const current = closure_1_0.current;
        if (current != null) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = closure_1_0.current;
      if (current != null) {
        current.collapse();
      }
    },
    snapToIndex(arg0) {
      const current = closure_1_0.current;
      if (current != null) {
        current.snapToIndex(arg0);
      }
    }
  }), items);
});
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = tmp2;