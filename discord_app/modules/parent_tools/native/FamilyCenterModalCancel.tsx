// === Module 14751: FamilyCenterModalCancel ===

// Module 14751 (FamilyCenterModalCancel)
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(576).c(28);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_7();
  const obj = otherUser(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      cancelLinkRequest(5099).pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
    tmp10[0] = first;
    tmp10[1] = C;
    cResult[2] = tmp10;
  } else {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
  }
  const tmp6 = cancelLinkRequest(8329)();
  const familyCenterActions = otherUser(11541).useFamilyCenterActions(tmp10);
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  if (cResult[3] === cancelLinkRequest) {
    class C {
      constructor() {
        obj = otherUser(closure_1_2[9]);
        intl = otherUser(closure_1_2[10]).intl;
        presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
        return;
      }
    }
    tmp5(38)(tmp6, "FamilyCenterCancelModal should only be rendered for parents.");
    if (cResult[6] !== otherUser) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const obj2 = { otherUser, iconSrc: tmp5(4815) };
      const tmp15 = closure_5(tmp5(14746), obj2);
      cResult[6] = otherUser;
      cResult[7] = tmp15;
      const tmp5Result = tmp5(14746);
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const stringResult = obj4.string(tmp5(2521).HynllX);
      cResult[8] = stringResult;
      const tmp16 = stringResult;
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    if (cResult[9] !== tmp4.headerText) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const obj3 = { style: tmp4.headerText, variant: "text-lg/bold", children: tmp16 };
      const tmp19 = closure_5(tmp(4892).Text, obj3);
      cResult[9] = tmp4.headerText;
      cResult[10] = tmp19;
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    if (cResult[11] !== otherUser) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
      const obj5 = { user: otherUser };
      const tmp21 = closure_5(tmp5(14716), obj5);
      cResult[11] = otherUser;
      cResult[12] = tmp21;
    } else {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    if (cResult[13] === tmp4.header) {
      class C {
        constructor() {
          obj = otherUser(closure_1_2[9]);
          intl = otherUser(closure_1_2[10]).intl;
          presentFailedToastResult = obj.presentFailedToast(intl.string(otherUser(closure_1_2[10]).t.R0RpRX));
          return;
        }
      }
    }
    const obj6 = { children: null };
    const obj7 = { style: tmp4.header, children: null };
    const items = [tmp13, tmp18, tmp20];
    obj7.children = items;
    obj6.children = closure_6(View, obj7);
    const tmp26 = closure_5(tmp(8129).ModalContent, obj6);
    cResult[13] = tmp4.header;
    cResult[14] = tmp20;
    cResult[15] = tmp13;
    cResult[16] = tmp18;
    cResult[17] = tmp26;
  }
  const fn2 = function f() {
    cancelLinkRequest(otherUser.id);
  };
  cResult[3] = cancelLinkRequest;
  cResult[4] = otherUser.id;
  cResult[5] = fn2;
  const tmpResult = otherUser(11541);
}) : ((otherUser) => {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    cancelLinkRequest(5099).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1126).intl;
    otherUser(4573).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
  }, []);
  const tmp2 = cancelLinkRequest(8329)();
  const familyCenterActions = otherUser(11541).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(tmp2, "FamilyCenterCancelModal should only be rendered for parents.");
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null };
  const obj = otherUser(11541);
  obj5.iconSrc = cancelLinkRequest(4815);
  const items1 = [closure_5(cancelLinkRequest(14746), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1126).intl;
  obj6.children = intl.string(cancelLinkRequest(2521).HynllX);
  items1[1] = closure_5(otherUser(4892).Text, obj6);
  items1[2] = closure_5(cancelLinkRequest(14716), { user: otherUser });
  obj4.children = items1;
  obj3.children = closure_6(View, obj4);
  const items2 = [closure_5(otherUser(8129).ModalContent, obj3), ];
  const obj7 = { children: null };
  const obj8 = { children: null };
  const obj9 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1126).intl;
  obj9.text = intl2.string(cancelLinkRequest(2521).mK40bk);
  obj9.onPress = callback2;
  const items3 = [closure_5(otherUser(5601).Button, obj9), ];
  const obj10 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1126).intl;
  obj10.text = intl3.string(cancelLinkRequest(2521).czincX);
  obj10.onPress = cancelLinkRequest(5099).pop;
  items3[1] = closure_5(otherUser(5601).Button, obj10);
  obj8.children = items3;
  obj7.children = closure_6(otherUser(5599).ButtonGroup, obj8);
  items2[1] = closure_5(otherUser(11549).ModalFooter, obj7);
  obj2.children = items2;
  return closure_6(otherUser(8128).ModalScreen, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(576).c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { CANCEL: null };
    const obj3 = {
      headerShown: true,
      headerLeft: tmp(6017).getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
          return null;
        },
      render() {
          return closure_2_5(closure_2_8, { otherUser });
        }
    };
    obj2.CANCEL = obj3;
    cResult[0] = otherUser;
    cResult[1] = obj2;
    let tmp4 = obj2;
    const tmpResult = tmp(6017);
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["13/7kX"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj4 = { initialRouteName: "CANCEL", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_5(tmp(10989).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((otherUser) => {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = noop.useMemo(() => {
    const obj = { CANCEL: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(closure_2_8, { otherUser });
      }
    };
    obj.CANCEL = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1126).intl;
  obj.headerBackTitle = intl.string(otherUser(1126).t["13/7kX"]);
  return closure_5(otherUser(10989).Modal, obj);
});