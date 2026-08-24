// discord_app/design/components/Sheet/native/BottomSheetHandle.tsx
import closure_0 from "../../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

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
    snapToIndex(current, items) {
      current = closure_0.current;
      if (current != null) {
        current.snapToIndex(current);
      }
    }
  }), items);
};