// === Module 14749: FamilyCenterModalAccept ===

// Module 14749 (FamilyCenterModalAccept)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let otherUser;

let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function headerTitle() {
  return null;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3, icon: obj4, disclaimer: obj5 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj4 = { transform: items, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
items = [{ rotate: "45deg" }];
obj5 = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  let first;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj8;
  let tmp6;
  let tmp7;
  const tmp = otherUser;
  const obj = otherUser(576);
  const cResult = obj.c(38);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const arr = acceptLinkRequest(dependencyMap[7]);
      arr.pop();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const presentFailedToast = otherUser(dependencyMap[8]).presentFailedToast;
      otherUser(dependencyMap[8]);
      const intl = otherUser(dependencyMap[9]).intl;
      presentFailedToast(intl.string(otherUser(dependencyMap[9]).t.R0RpRX));
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onSuccess: first, onError: tmp6 };
    cResult[2] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(11541);
  const familyCenterActions = tmpResult.useFamilyCenterActions(tmp7);
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  if (cResult[3] === acceptLinkRequest) {
    let tmp9;
    if (cResult[4] === otherUser.id) {
      tmp9 = cResult[5];
    }
    if (cResult[6] === otherUser) {
      let tmp11;
      let tmp16;
      let tmp19;
      let tmp22;
      if (cResult[7] === tmp4.icon) {
        tmp11 = cResult[8];
      }
      const _Symbol = Symbol;
      const headerText = tmp4.headerText;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(acceptLinkRequest(2521).rlNJwZ);
        cResult[9] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] !== tmp4.headerText) {
        const obj3 = { style: headerText, variant: "text-lg/bold", children: tmp16 };
        const tmp21 = closure_5(tmp(4892).Text, obj3);
        cResult[10] = tmp4.headerText;
        cResult[11] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] !== otherUser) {
        const obj4 = { user: otherUser };
        const tmp25 = closure_5(acceptLinkRequest(14716), obj4);
        cResult[12] = otherUser;
        cResult[13] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.header) {
        if (cResult[15] === tmp22) {
          if (cResult[16] === tmp11) {
            let tmp26;
            let tmp30;
            let tmp34;
            if (cResult[17] === tmp19) {
              tmp26 = cResult[18];
            }
            const _Symbol2 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp33 = closure_5(acceptLinkRequest(11543), {});
              cResult[19] = tmp33;
              tmp30 = tmp33;
            } else {
              tmp30 = cResult[19];
            }
            const disclaimer = tmp4.disclaimer;
            if (cResult[20] !== otherUser.username) {
              const intl2 = tmp(1126).intl;
              const obj5 = { username: otherUser.username };
              const formatResult = intl2.format(acceptLinkRequest(2521).snlFqR, obj5);
              cResult[20] = otherUser.username;
              cResult[21] = formatResult;
              tmp34 = formatResult;
            } else {
              tmp34 = cResult[21];
            }
            if (cResult[22] === tmp4.disclaimer) {
              let tmp37;
              if (cResult[23] === tmp34) {
                tmp37 = cResult[24];
              }
              if (cResult[25] === tmp26) {
                let tmp40;
                let tmp43;
                if (cResult[26] === tmp37) {
                  tmp40 = cResult[27];
                }
                const _Symbol3 = Symbol;
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1126).intl;
                  const stringResult1 = intl3.string(acceptLinkRequest(2521)["wI/jo3"]);
                  cResult[28] = stringResult1;
                  tmp43 = stringResult1;
                } else {
                  tmp43 = cResult[28];
                }
                if (cResult[29] === tmp9) {
                  let tmp46;
                  let tmp49;
                  let tmp53;
                  if (cResult[30] === isAcceptLoading) {
                    tmp46 = cResult[31];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { variant: "tertiary", text: intl4.string(tmp(1126).t["ETE/oC"]), onPress: acceptLinkRequest(5099).pop };
                    const Button = tmp(5601).Button;
                    intl4 = tmp(1126).intl;
                    const tmp52 = closure_5(Button, obj6);
                    cResult[32] = tmp52;
                    tmp49 = tmp52;
                  } else {
                    tmp49 = cResult[32];
                  }
                  if (cResult[33] !== tmp46) {
                    const obj7 = { children: closure_6(tmp(5599).ButtonGroup, obj8) };
                    const ModalFooter = tmp(11549).ModalFooter;
                    obj8 = { children: items };
                    items = [tmp46, tmp49];
                    const tmp56 = closure_5(ModalFooter, obj7);
                    cResult[33] = tmp46;
                    cResult[34] = tmp56;
                    tmp53 = tmp56;
                  } else {
                    tmp53 = cResult[34];
                  }
                  if (cResult[35] === tmp40) {
                    let tmp57;
                    if (cResult[36] === tmp53) {
                      tmp57 = cResult[37];
                    }
                    return tmp57;
                  }
                  const obj9 = { children: items1 };
                  items1 = [tmp40, tmp53];
                  const tmp59 = closure_6(tmp(8128).ModalScreen, obj9);
                  cResult[35] = tmp40;
                  cResult[36] = tmp53;
                  cResult[37] = tmp59;
                  tmp57 = tmp59;
                }
                const obj10 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: tmp43, onPress: tmp9 };
                const tmp48 = closure_5(tmp(5601).Button, obj10);
                cResult[29] = tmp9;
                cResult[30] = isAcceptLoading;
                cResult[31] = tmp48;
                tmp46 = tmp48;
              }
              const obj11 = { children: items2 };
              items2 = [tmp26, tmp30, tmp37];
              const tmp42 = closure_6(tmp(8129).ModalContent, obj11);
              cResult[25] = tmp26;
              cResult[26] = tmp37;
              cResult[27] = tmp42;
              tmp40 = tmp42;
            }
            const obj12 = { style: disclaimer, variant: "text-xs/normal", color: "text-default", children: tmp34 };
            const tmp39 = closure_5(tmp(4892).Text, obj12);
            cResult[22] = tmp4.disclaimer;
            cResult[23] = tmp34;
            cResult[24] = tmp39;
            tmp37 = tmp39;
          }
        }
      }
      const obj13 = { style: tmp10, children: items3 };
      items3 = [tmp11, tmp19, tmp22];
      const tmp29 = closure_6(View, obj13);
      cResult[14] = tmp4.header;
      cResult[15] = tmp22;
      cResult[16] = tmp11;
      cResult[17] = tmp19;
      cResult[18] = tmp29;
      tmp26 = tmp29;
    }
    const obj14 = { otherUser, iconSrc: acceptLinkRequest(4846), iconStyles: tmp4.icon };
    const tmp14 = acceptLinkRequest(14746);
    const tmp15 = closure_5(tmp14, obj14);
    cResult[6] = otherUser;
    cResult[7] = tmp4.icon;
    cResult[8] = tmp15;
    tmp11 = tmp15;
  }
  const fn3 = function x() {
    acceptLinkRequest(otherUser.id);
  };
  cResult[3] = acceptLinkRequest;
  cResult[4] = otherUser.id;
  cResult[5] = fn3;
  tmp9 = fn3;
}) : ((otherUser) => {
  let ButtonGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj8;
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const arr = acceptLinkRequest(dependencyMap[7]);
    arr.pop();
  }, []);
  const callback1 = react.useCallback(() => {
    const presentFailedToast = otherUser(dependencyMap[8]).presentFailedToast;
    otherUser(dependencyMap[8]);
    const intl = otherUser(dependencyMap[9]).intl;
    presentFailedToast(intl.string(otherUser(dependencyMap[9]).t.R0RpRX));
  }, []);
  const obj = otherUser(11541);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = react.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  const obj2 = { children: items3 };
  const ModalScreen = otherUser(8128).ModalScreen;
  const obj3 = { children: items2 };
  const obj4 = { style: tmp.header, children: items1 };
  const ModalContent = otherUser(8129).ModalContent;
  const obj5 = { otherUser, iconSrc: acceptLinkRequest(4846), iconStyles: tmp.icon };
  const tmp6 = acceptLinkRequest(14746);
  items1 = [closure_5(tmp6, obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: intl.string(acceptLinkRequest(2521).rlNJwZ) };
  const Text = otherUser(4892).Text;
  intl = otherUser(1126).intl;
  items1[1] = closure_5(Text, obj6);
  items1[2] = closure_5(acceptLinkRequest(14716), { user: otherUser });
  items2 = [closure_6(View, obj4), closure_5(acceptLinkRequest(11543), {}), ];
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: intl2.format(acceptLinkRequest(2521).snlFqR, obj8) };
  const Text2 = otherUser(4892).Text;
  intl2 = otherUser(1126).intl;
  obj8 = { username: otherUser.username };
  items2[2] = closure_5(Text2, obj7);
  items3 = [closure_6(ModalContent, obj3), ];
  const obj9 = { children: closure_6(ButtonGroup, obj10) };
  const ModalFooter = otherUser(11549).ModalFooter;
  obj10 = { children: items4 };
  ButtonGroup = otherUser(5599).ButtonGroup;
  const obj11 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: intl3.string(acceptLinkRequest(2521)["wI/jo3"]), onPress: callback2 };
  const Button = otherUser(5601).Button;
  intl3 = otherUser(1126).intl;
  items4 = [closure_5(Button, obj11), ];
  const obj12 = { variant: "tertiary", text: intl4.string(otherUser(1126).t["ETE/oC"]), onPress: acceptLinkRequest(5099).pop };
  const Button2 = otherUser(5601).Button;
  intl4 = otherUser(1126).intl;
  items4[1] = closure_5(Button2, obj12);
  items3[1] = closure_5(ModalFooter, obj9);
  return closure_6(ModalScreen, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  let obj3;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmpResult;
  const obj = otherUser(576);
  const cResult = obj.c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { ACCEPT: obj3 };
    obj3 = {
      headerShown: true,
      headerLeft: tmpResult.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle,
      render() {
          const obj = { otherUser };
          return closure_2_5(closure_2_8, obj);
        }
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
    const obj4 = { initialRouteName: "ACCEPT", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_5(otherUser(10989).Modal, obj4);
    cResult[3] = tmp4;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((otherUser) => {
  let intl;
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    let closure_0 = otherUser;
    let obj = { ACCEPT: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle,
      render() {
        const obj = { otherUser };
        return closure_2_5(closure_2_8, obj);
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: intl.string(otherUser(1126).t["13/7kX"]) };
  const Modal = otherUser(10989).Modal;
  intl = otherUser(1126).intl;
  return closure_5(Modal, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default tmp4;