// === Module 14652: DemoModal ===

// Module 14652 (DemoModal)
import useAlertStore from "useAlertStore";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function DemoModal() {
  callback = React.useCallback(callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const promise = new Promise((arg0) => setTimeout(arg0, 2000));
            c1 = 1;
            c0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = promise;
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c0 = tmp;
        throw tmp10;
      }
    }
  }), []);
  let obj = { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null };
  const items = [jsx(require(4599) /* getAlertModalItemKey */.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"), jsx(require(4599) /* getAlertModalItemKey */.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel")];
  obj[2] = items;
  return jsx(require(4599) /* getAlertModalItemKey */.AlertModal, { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null });
}
function openDemoModal() {
  require(4596) /* useAlertStore */.openAlert("demo-1", <DemoModal />);
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  let obj = { children: null };
  obj = { style: callback2().container, children: jsx(require(4666) /* Button */.Button, { children: null }) };
  obj = { onPress: openDemoModal, text: "Show Alert" };
  obj[0] = <closure_4 onPress={openDemoModal} text="Show Alert" />;
  return <closure_5 onPress={openDemoModal} text="Show Alert" />;
};