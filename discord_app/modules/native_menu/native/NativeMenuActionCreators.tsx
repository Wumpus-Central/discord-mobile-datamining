// === Module 10284: ? ===

// Module 10284
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let result = obj132.fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    closure_0 = key;
    importDefault = memo;
    dispatcherDefault.wait(() => {
      let obj = key(dependencyMap[1]);
      const result = obj.triggerHapticFeedback(memo(dependencyMap[2]).IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key, menu: memo };
      memo(dependencyMap[0]).dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    const obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  }
};