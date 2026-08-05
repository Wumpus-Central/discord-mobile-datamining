// discord_app/modules/toast/native/ToastActionCreators.tsx
import { dispatcher } from "../../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/toast/native/ToastActionCreators.tsx");

export default {
  open(arg0) {
    const importDefault = arg0;
    dispatcher.wait(() => {
      let obj = callback(outer1_1[0]);
      obj = { type: "TOAST_OPEN", toastProps: callback };
      return obj.dispatch(obj);
    });
  },
  close() {
    dispatcher.wait(() => callback(table[0]).dispatch({ type: "TOAST_CLOSE" }));
  }
};