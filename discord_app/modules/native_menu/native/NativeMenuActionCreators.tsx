// discord_app/modules/native_menu/native/NativeMenuActionCreators.tsx
let result = require("IMPACT_LIGHT").fileFinishedImporting("modules/native_menu/native/NativeMenuActionCreators.tsx");

export default {
  showNativeMenu(key, memo) {
    let closure_0 = key;
    const importDefault = memo;
    require("../../../Dispatcher.tsx").wait(() => {
      let obj = key(outer1_2[1]);
      const result = obj.triggerHapticFeedback(memo(outer1_2[2]).IMPACT_LIGHT);
      obj = { type: "SHOW_NATIVE_MENU", key, menu: memo };
      memo(outer1_2[0]).dispatch(obj);
    });
  },
  hideNativeMenu(key) {
    let obj = require("../../../Dispatcher.tsx");
    obj = { type: "HIDE_NATIVE_MENU", key };
    obj.dispatch(obj);
  }
};