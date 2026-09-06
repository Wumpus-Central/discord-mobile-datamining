// === Module 7074: ReanimatedHelperTypes ===

// Module 7074 (ReanimatedHelperTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/reanimated/ReanimatedHelperTypes.tsx");

export function createFakeSharedValue(COLLAPSED) {
  return {
    value: COLLAPSED,
    get() {
      const error = new Error("FakeSharedValue: You cannot get a value on fake shared value");
      throw error;
    },
    set() {
      const error = new Error("FakeSharedValue: You cannot set a value on fake shared value");
      throw error;
    },
    addListener() {
      const error = new Error("FakeSharedValue: You cannot add a listener to a fake shared value, please use a real one");
      throw error;
    },
    removeListener() {
      const error = new Error("FakeSharedValue: You cannot remove a listener to a fake shared value, please use a real one");
      throw error;
    },
    modify() {
      const error = new Error("FakeSharedValue: You cannot modify a shared value, please use a real one");
      throw error;
    }
  };
}