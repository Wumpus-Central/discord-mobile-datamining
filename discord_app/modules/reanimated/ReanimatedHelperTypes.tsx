// === Module 7806: createFakeSharedValue ===

// Module 7806 (createFakeSharedValue)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/reanimated/ReanimatedHelperTypes.tsx");

export function createFakeSharedValue(COLLAPSED) {
  return {
    value: COLLAPSED,
    get() {
      error = new Error("FakeSharedValue: You cannot get a value on fake shared value");
      throw error;
    },
    set() {
      error = new Error("FakeSharedValue: You cannot set a value on fake shared value");
      throw error;
    },
    addListener() {
      error = new Error("FakeSharedValue: You cannot add a listener to a fake shared value, please use a real one");
      throw error;
    },
    removeListener() {
      error = new Error("FakeSharedValue: You cannot remove a listener to a fake shared value, please use a real one");
      throw error;
    },
    modify() {
      error = new Error("FakeSharedValue: You cannot modify a shared value, please use a real one");
      throw error;
    }
  };
}