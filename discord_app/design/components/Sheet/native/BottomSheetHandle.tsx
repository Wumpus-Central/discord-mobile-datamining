// discord_app/design/components/Sheet/native/BottomSheetHandle.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetHandle.tsx");

export const useBottomSheetImperativeHandle = function useBottomSheetImperativeHandle(arg0, ref) {
  closure_0 = ref;
  const items = [ref];
  const imperativeHandle = noop.useImperativeHandle(
    arg0,
    () => ({
      expandActionSheet() {
        const current = ref.current;
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
          const current2 = ref.current;
          if (current2 != null) {
            current2.forceClose();
          }
        } else {
          const current = ref.current;
          if (current != null) {
            current.close();
          }
        }
      },
      collapseActionSheet() {
        const current = ref.current;
        if (current != null) {
          current.collapse();
        }
      },
      snapToIndex(collapse) {
        const current = ref.current;
        if (current != null) {
          current.snapToIndex(collapse);
        }
      },
    }),
    items,
  );
};
