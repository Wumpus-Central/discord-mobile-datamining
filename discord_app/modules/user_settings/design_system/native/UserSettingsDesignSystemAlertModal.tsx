// === Module 16097: UserSettingsDesignSystemAlertModal ===

// Module 16097 (UserSettingsDesignSystemAlertModal)
import useAlertStore from "useAlertStore" /* 5111 */;
import AlertModal from "AlertModal" /* 5115 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function DemoModal() {
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const promise = new Promise((arg0) => setTimeout(arg0, 2000));
            c1 = 1;
            c0 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
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
  const items = [jsx(AlertModal.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"), jsx(AlertModal.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel")];
  obj.actions = items;
  return jsx(AlertModal.AlertModal, { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null });
}
function openDemoModal() {
  useAlertStore.openAlert("demo-1", <DemoModal />);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  const obj = { children: null };
  const obj2 = { style: closure_9().container, children: jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" }) };
  obj.children = <React4 style={closure_9().container}>{jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" })}</React4>;
  return <hasOwnProperty>{null}</hasOwnProperty>;
};