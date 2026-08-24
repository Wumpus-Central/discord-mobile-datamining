// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import getAlertModalItemKey from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import closure_2 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            obj1 = { value: null, done: false };
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        c0 = tmp;
        throw tmp10;
      }
    }
  }), []);
  let obj = { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null };
  const items = [jsx(getAlertModalItemKey.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"), jsx(getAlertModalItemKey.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel")];
  obj[2] = items;
  return jsx(getAlertModalItemKey.AlertModal, { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null });
}
function openDemoModal() {
  useAlertStore.openAlert("demo-1", <DemoModal />);
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  let obj = { children: null };
  obj = { style: callback2().container, children: jsx(Button.Button, { children: null }) };
  obj = { onPress: openDemoModal, text: "Show Alert" };
  obj[0] = <closure_4 onPress={openDemoModal} text="Show Alert" />;
  return <closure_5 onPress={openDemoModal} text="Show Alert" />;
};