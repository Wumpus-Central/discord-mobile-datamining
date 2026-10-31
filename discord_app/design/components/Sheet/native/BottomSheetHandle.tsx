// === Module 5592: Sheet/BottomSheetHandle ===

// Module 5592 (Sheet/BottomSheetHandle)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export function useBottomSheetImperativeHandle(ref, ref2) {
  closure_0 = ref2;
  const items = [ref2];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    expandActionSheet() {
      const current = ref2.current;
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
        const current2 = ref2.current;
        if (current2 != null) {
          current2.forceClose();
        }
      } else {
        const current = ref2.current;
        if (current != null) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = ref2.current;
      if (current != null) {
        current.collapse();
      }
    },
    snapToIndex(collapse) {
      const current = ref2.current;
      if (current != null) {
        current.snapToIndex(collapse);
      }
    }
  }), items);
}