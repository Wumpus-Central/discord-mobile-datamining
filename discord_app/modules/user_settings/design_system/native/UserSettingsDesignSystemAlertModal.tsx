// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DemoModal() {
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const promise = new Promise((arg0) => setTimeout(arg0, 2000));
              c1 = 1;
              c0 = 1;
              const obj1 = { value: promise, done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
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
    }),
    [],
  );
  let obj = {
    title: "Are you sure?",
    content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.",
    actions: null,
  };
  const items = [
    jsx(AlertModal.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"),
    jsx(AlertModal.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel"),
  ];
  obj.actions = items;
  return jsx(AlertModal.AlertModal, {
    title: "Are you sure?",
    content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.",
    actions: null,
  });
}
function openDemoModal() {
  useAlertStore.openAlert("demo-1", <DemoModal />);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx",
);

export default function UserSettingsDesignSystemAlertModal() {
  let obj = { children: null };
  obj = { style: closure_9().container, children: <React4>{null}</React4> };
  obj = { onPress: openDemoModal, text: "Show Alert" };
  obj.children = jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" });
  return <hasOwnProperty onPress={openDemoModal} text="Show Alert" />;
}
