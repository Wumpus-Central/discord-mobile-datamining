// === Module 15667: UserSettingsDesignSystemAlertModal ===

// Module 15667 (UserSettingsDesignSystemAlertModal)
import c from "c" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import AlertModal from "AlertModal" /* 5720 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function openDemoModal() {
  useAlertStore.openAlert("demo-1", <closure_7 />);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    closure_0 = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c0 = tmp;
          throw tmp10;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null };
    let obj3 = { variant: "destructive", onPress: first, text: "Clear" };
    const items = [jsx(AlertModal.AlertActionButton, { variant: "destructive", onPress: first, text: "Clear" }, "clear"), ];
    let obj4 = { variant: "secondary", onPress: first, text: "Cancel" };
    items[1] = jsx(AlertModal.AlertActionButton, { variant: "secondary", onPress: first, text: "Cancel" }, "cancel");
    obj2.actions = items;
    const tmp8 = jsx(AlertModal.AlertModal, { title: "Are you sure?", content: "This will clear 3 incoming friend requests. The users who sent them won\u2019t be informed.", actions: null });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
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
        return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
});
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onPress: openDemoModal, text: "Show Alert" };
    const tmp8 = jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj3 = { children: null };
    const obj4 = { style: tmp4.container, children: first };
    obj3.children = <React4 style={tmp4.container}>{first}</React4>;
    const tmp13 = <hasOwnProperty>{null}</hasOwnProperty>;
    cResult[1] = tmp4.container;
    cResult[2] = tmp13;
    let tmp9 = tmp13;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  const obj = { children: null };
  const obj2 = { style: closure_9().container, children: jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" }) };
  obj.children = <React4 style={closure_9().container}>{jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" })}</React4>;
  return <hasOwnProperty>{null}</hasOwnProperty>;
});