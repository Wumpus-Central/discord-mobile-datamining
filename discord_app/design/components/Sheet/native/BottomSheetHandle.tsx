// === Module 7123: useBottomSheetImperativeHandle ===

// Module 7123 (useBottomSheetImperativeHandle)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = function useBottomSheetImperativeHandle(ref, ref) {
  const React = ref;
  const items = [ref];
  const imperativeHandle = React.useImperativeHandle(ref, () => ({
    expandActionSheet() {
      const current = closure_0.current;
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
        const current2 = closure_0.current;
        if (current2 != null) {
          current2.forceClose();
        }
      } else {
        const current = closure_0.current;
        if (current != null) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = closure_0.current;
      if (current != null) {
        current.collapse();
      }
    },
    snapToIndex(collapse, items) {
      const current = closure_0.current;
      if (current != null) {
        current.snapToIndex(collapse);
      }
    }
  }), items);
};