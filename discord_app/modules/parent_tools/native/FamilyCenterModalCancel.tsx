// discord_app/modules/parent_tools/native/FamilyCenterModalCancel.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let otherUser;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function headerTitle() {
  return null;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (otherUser) => {
      let cancelLinkRequest;
      let first;
      let items;
      let obj7;
      const tmp = otherUser;
      const obj = otherUser(576);
      const cResult = obj.c(28);
      otherUser = otherUser.otherUser;
      const tmp4 = closure_7();
      const tmp6 = cancelLinkRequest(8329)();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const arr = cancelLinkRequest(dependencyMap[8]);
          arr.pop();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
            otherUser(dependencyMap[9]);
            const intl = otherUser(dependencyMap[10]).intl;
            presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
          }
        }
        cResult[1] = C;
      } else {
        class C {
          constructor() {
            const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
            otherUser(dependencyMap[9]);
            const intl = otherUser(dependencyMap[10]).intl;
            presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
          }
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
            otherUser(dependencyMap[9]);
            const intl = otherUser(dependencyMap[10]).intl;
            presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
          }
        }
        tmp10[0] = first;
        tmp10[1] = C;
        cResult[2] = tmp10;
      } else {
        class C {
          constructor() {
            const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
            otherUser(dependencyMap[9]);
            const intl = otherUser(dependencyMap[10]).intl;
            presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
          }
        }
      }
      const tmpResult = tmp(11541);
      const familyCenterActions = tmpResult.useFamilyCenterActions(tmp10);
      cancelLinkRequest = familyCenterActions.cancelLinkRequest;
      if (cResult[3] === cancelLinkRequest) {
        let tmp16;
        class C {
          constructor() {
            const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
            otherUser(dependencyMap[9]);
            const intl = otherUser(dependencyMap[10]).intl;
            presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
          }
        }
        cancelLinkRequest(38)(tmp6, "FamilyCenterCancelModal should only be rendered for parents.");
        const header = tmp4.header;
        if (cResult[6] !== otherUser) {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
          const obj2 = { otherUser, iconSrc: cancelLinkRequest(4815) };
          const tmp5Result = cancelLinkRequest(14746);
          cResult[6] = otherUser;
          cResult[7] = closure_5(tmp5Result, obj2);
          const tmp15 = closure_5(tmp5Result, obj2);
        } else {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
        }
        const _Symbol = Symbol;
        const headerText = tmp4.headerText;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
          const stringResult = obj4.string(cancelLinkRequest(2521).HynllX);
          cResult[8] = stringResult;
          tmp16 = stringResult;
        } else {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
        }
        if (cResult[9] !== tmp4.headerText) {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
          const obj3 = { style: headerText, variant: "text-lg/bold", children: tmp16 };
          cResult[9] = tmp4.headerText;
          cResult[10] = closure_5(tmp(4892).Text, obj3);
          const tmp19 = closure_5(tmp(4892).Text, obj3);
        } else {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
        }
        if (cResult[11] !== otherUser) {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
          const obj5 = { user: otherUser };
          cResult[11] = otherUser;
          cResult[12] = closure_5(cancelLinkRequest(14716), obj5);
          const tmp21 = closure_5(cancelLinkRequest(14716), obj5);
        } else {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
        }
        if (cResult[13] === tmp4.header) {
          class C {
            constructor() {
              const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
              otherUser(dependencyMap[9]);
              const intl = otherUser(dependencyMap[10]).intl;
              presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
            }
          }
        }
        const obj6 = { children: closure_6(View, obj7) };
        obj7 = { style: header, children: items };
        items = [tmp13, tmp18, tmp20];
        const ModalContent = tmp(8129).ModalContent;
        cResult[13] = tmp4.header;
        cResult[14] = tmp20;
        cResult[15] = tmp13;
        cResult[16] = tmp18;
        cResult[17] = closure_5(ModalContent, obj6);
        const tmp26 = closure_5(ModalContent, obj6);
      }
      const fn2 = function f() {
        cancelLinkRequest(otherUser.id);
      };
      cResult[3] = cancelLinkRequest;
      cResult[4] = otherUser.id;
      cResult[5] = fn2;
    }
  : (otherUser) => {
      let ButtonGroup;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj8;
      otherUser = otherUser.otherUser;
      let cancelLinkRequest;
      const tmp = closure_7();
      const tmp2 = cancelLinkRequest(8329)();
      const callback = react.useCallback(() => {
        const arr = cancelLinkRequest(dependencyMap[8]);
        arr.pop();
      }, []);
      const callback1 = react.useCallback(() => {
        const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
        otherUser(dependencyMap[9]);
        const intl = otherUser(dependencyMap[10]).intl;
        presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
      }, []);
      const obj = otherUser(11541);
      const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
      cancelLinkRequest = familyCenterActions.cancelLinkRequest;
      const isCancelLoading = familyCenterActions.isCancelLoading;
      const items = [cancelLinkRequest, otherUser.id];
      const callback2 = react.useCallback(() => {
        cancelLinkRequest(otherUser.id);
      }, items);
      cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
      const obj2 = { children: items2 };
      const ModalScreen = otherUser(8128).ModalScreen;
      const obj3 = { children: closure_6(View, obj4) };
      obj4 = { style: tmp.header, children: items1 };
      const ModalContent = otherUser(8129).ModalContent;
      const obj5 = { otherUser, iconSrc: cancelLinkRequest(4815) };
      const tmp8 = cancelLinkRequest(14746);
      items1 = [closure_5(tmp8, obj5), ,];
      const obj6 = {
        style: tmp.headerText,
        variant: "text-lg/bold",
        children: intl.string(cancelLinkRequest(2521).HynllX),
      };
      const Text = otherUser(4892).Text;
      intl = otherUser(1126).intl;
      items1[1] = closure_5(Text, obj6);
      items1[2] = closure_5(cancelLinkRequest(14716), { user: otherUser });
      items2 = [closure_5(ModalContent, obj3)];
      const obj7 = { children: closure_6(ButtonGroup, obj8) };
      const ModalFooter = otherUser(11549).ModalFooter;
      obj8 = { children: items3 };
      ButtonGroup = otherUser(5599).ButtonGroup;
      const obj9 = {
        variant: "destructive",
        disabled: isCancelLoading,
        loading: isCancelLoading,
        text: intl2.string(cancelLinkRequest(2521).mK40bk),
        onPress: callback2,
      };
      const Button = otherUser(5601).Button;
      intl2 = otherUser(1126).intl;
      items3 = [closure_5(Button, obj9)];
      const obj10 = {
        variant: "tertiary",
        text: intl3.string(cancelLinkRequest(2521).czincX),
        onPress: cancelLinkRequest(5099).pop,
      };
      const Button2 = otherUser(5601).Button;
      intl3 = otherUser(1126).intl;
      items3[1] = closure_5(Button2, obj10);
      items2[1] = closure_5(ModalFooter, obj7);
      return closure_6(ModalScreen, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (otherUser) => {
      let obj3;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmpResult;
      const obj = otherUser(576);
      const cResult = obj.c(5);
      otherUser = otherUser.otherUser;
      if (cResult[0] !== otherUser) {
        const obj2 = { CANCEL: obj3 };
        obj3 = {
          headerShown: true,
          headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle,
          render() {
            const obj = { otherUser };
            return closure_2_5(closure_2_8, obj);
          },
        };
        cResult[0] = otherUser;
        cResult[1] = obj2;
        tmp4 = obj2;
        tmpResult = otherUser(6017);
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(otherUser(1126).t["13/7kX"]);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const obj4 = { initialRouteName: "CANCEL", screens: tmp4, headerBackTitle: tmp6 };
        const tmp10 = closure_5(otherUser(10989).Modal, obj4);
        cResult[3] = tmp4;
        cResult[4] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : (otherUser) => {
      let intl;
      otherUser = otherUser.otherUser;
      const items = [otherUser];
      const memo = react.useMemo(() => {
        let obj2;
        let obj3;
        let closure_0 = otherUser;
        let obj = { CANCEL: obj2 };
        obj2 = {
          headerShown: true,
          headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle,
          render() {
            const obj = { otherUser };
            return closure_2_5(closure_2_8, obj);
          },
        };
        obj3 = NavigatorHeader;
        return obj;
      }, items);
      let obj = {
        initialRouteName: "CANCEL",
        screens: memo,
        headerBackTitle: intl.string(otherUser(1126).t["13/7kX"]),
      };
      const Modal = otherUser(10989).Modal;
      intl = otherUser(1126).intl;
      return closure_5(Modal, obj);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default tmp4;
