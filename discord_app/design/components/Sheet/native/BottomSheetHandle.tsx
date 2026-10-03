// === Module 6648: Sheet/BottomSheetHandle ===

// Module 6648 (Sheet/BottomSheetHandle)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  closure_0 = arg1;
  const cResult = c.c(3);
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
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const imperativeHandle = noop.useImperativeHandle(arg0, tmp2, tmp3);
}) : ((arg0, arg1) => {
  closure_0 = arg1;
  const items = [arg1];
  const imperativeHandle = noop.useImperativeHandle(arg0, () => ({
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