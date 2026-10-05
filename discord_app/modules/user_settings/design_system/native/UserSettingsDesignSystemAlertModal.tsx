// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal2 from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, c1;

let closure_4;
let hasOwnProperty;
function openDemoModal() {
  const obj = useAlertStore;
  obj.openAlert("demo-1", <closure_7 />);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let closure_0 = _asyncToGenerator(async function () {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  const self = this;
                  const self2 = this;
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
            } catch (tmp7) {
              c0 = 3;
              throw tmp7;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const AlertModal = AlertModal2.AlertModal;
        const items = [
          jsx(AlertModal2.AlertActionButton, { variant: "destructive", onPress: first, text: "Clear" }, "clear"),
        ];
        items[1] = jsx(
          AlertModal2.AlertActionButton,
          { variant: "secondary", onPress: first, text: "Cancel" },
          "cancel",
        );
        const tmp8 = (
          <AlertModal
            title="Are you sure?"
            content="This will clear 3 incoming friend requests. The users who sent them won’t be informed."
            actions={items}
          />
        );
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      return tmp6;
    }
  : () => {
      const callback = react.useCallback(
        _asyncToGenerator(async function () {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  const self = this;
                  const self2 = this;
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
            } catch (tmp7) {
              c0 = 3;
              throw tmp7;
            }
          }
        }),
        [],
      );
      const AlertModal = AlertModal2.AlertModal;
      const items = [
        jsx(AlertModal2.AlertActionButton, { variant: "destructive", onPress: callback, text: "Clear" }, "clear"),
        jsx(AlertModal2.AlertActionButton, { variant: "secondary", onPress: callback, text: "Cancel" }, "cancel"),
      ];
      return (
        <AlertModal
          title="Are you sure?"
          content="This will clear 3 incoming friend requests. The users who sent them won’t be informed."
          actions={items}
        />
      );
    };
let closure_9 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp9;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = jsx(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Alert" });
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.container) {
        const tmp13 = <hasOwnProperty>{null}</hasOwnProperty>;
        cResult[1] = tmp4.container;
        cResult[2] = tmp13;
        tmp9 = tmp13;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      ({ style: closure_9().container, children: null });
      return <hasOwnProperty>{null}</hasOwnProperty>;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx",
);

export default tmp3;
