// discord_app/design/components/Sheet/native/BottomSheetHandle.tsx
import noop from "noop";

const result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = function useBottomSheetImperativeHandle(ref, ref) {
  const React = ref;
  const items = [ref];
  const imperativeHandle = React.useImperativeHandle(ref, () => ({
    expandActionSheet() {
      const current = noop.current;
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
        const current2 = noop.current;
        if (current2 != null) {
          current2.forceClose();
        }
      } else {
        const current = noop.current;
        if (current != null) {
          current.close();
        }
      }
    },
    collapseActionSheet() {
      const current = noop.current;
      if (current != null) {
        current.collapse();
      }
    },
    snapToIndex(current, items) {
      current = noop.current;
      if (current != null) {
        current.snapToIndex(current);
      }
    }
  }), items);
};