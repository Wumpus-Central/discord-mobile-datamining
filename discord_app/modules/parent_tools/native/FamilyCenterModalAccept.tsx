// === Module 14733: FamilyCenterModalAccept ===

// Module 14733 (FamilyCenterModalAccept)
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null, icon: null, disclaimer: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj5 = { transform: null, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "45deg" }];
obj5.transform = items;
obj2.icon = obj5;
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.disclaimer = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(576).c(38);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      acceptLinkRequest(5093).pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const intl = otherUser(1126).intl;
      otherUser(4567).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
    };
    cResult[1] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onSuccess: first, onError: tmp6 };
    cResult[2] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[2];
  }
  const obj = otherUser(576);
  const familyCenterActions = otherUser(11528).useFamilyCenterActions(tmp7);
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  if (cResult[3] === acceptLinkRequest) {
    if (cResult[4] === otherUser.id) {
      let tmp9 = cResult[5];
    }
    if (cResult[6] === otherUser) {
      if (cResult[7] === tmp4.icon) {
        let tmp11 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(acceptLinkRequest(2493).rlNJwZ);
        cResult[9] = stringResult;
        let tmp16 = stringResult;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] !== tmp4.headerText) {
        const obj3 = { style: tmp4.headerText, variant: "text-lg/bold", children: tmp16 };
        const tmp21 = closure_5(tmp(4886).Text, obj3);
        cResult[10] = tmp4.headerText;
        cResult[11] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] !== otherUser) {
        const obj4 = { user: otherUser };
        const tmp25 = closure_5(acceptLinkRequest(14700), obj4);
        cResult[12] = otherUser;
        cResult[13] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] === tmp4.header) {
        if (cResult[15] === tmp22) {
          if (cResult[16] === tmp11) {
            if (cResult[17] === tmp19) {
              let tmp26 = cResult[18];
            }
            const _Symbol2 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp33 = closure_5(acceptLinkRequest(11530), {});
              cResult[19] = tmp33;
              let tmp30 = tmp33;
            } else {
              tmp30 = cResult[19];
            }
            if (cResult[20] !== otherUser.username) {
              const intl2 = tmp(1126).intl;
              const obj5 = { username: otherUser.username };
              const formatResult = intl2.format(acceptLinkRequest(2493).snlFqR, obj5);
              cResult[20] = otherUser.username;
              cResult[21] = formatResult;
              let tmp34 = formatResult;
            } else {
              tmp34 = cResult[21];
            }
            if (cResult[22] === tmp4.disclaimer) {
              if (cResult[23] === tmp34) {
                let tmp37 = cResult[24];
              }
              if (cResult[25] === tmp26) {
                if (cResult[26] === tmp37) {
                  let tmp40 = cResult[27];
                }
                const _Symbol3 = Symbol;
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1126).intl;
                  const stringResult1 = intl3.string(acceptLinkRequest(2493)["wI/jo3"]);
                  cResult[28] = stringResult1;
                  let tmp43 = stringResult1;
                } else {
                  tmp43 = cResult[28];
                }
                if (cResult[29] === tmp9) {
                  if (cResult[30] === isAcceptLoading) {
                    let tmp46 = cResult[31];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { variant: "tertiary", text: null, onPress: null };
                    const intl4 = tmp(1126).intl;
                    obj6.text = intl4.string(tmp(1126).t["ETE/oC"]);
                    obj6.onPress = acceptLinkRequest(5093).pop;
                    const tmp52 = closure_5(tmp(5594).Button, obj6);
                    cResult[32] = tmp52;
                    let tmp49 = tmp52;
                  } else {
                    tmp49 = cResult[32];
                  }
                  if (cResult[33] !== tmp46) {
                    const obj7 = { children: null };
                    const obj8 = { children: null };
                    const items = [tmp46, tmp49];
                    obj8.children = items;
                    obj7.children = closure_6(tmp(5592).ButtonGroup, obj8);
                    const tmp56 = closure_5(tmp(11536).ModalFooter, obj7);
                    cResult[33] = tmp46;
                    cResult[34] = tmp56;
                    let tmp53 = tmp56;
                  } else {
                    tmp53 = cResult[34];
                  }
                  if (cResult[35] === tmp40) {
                    if (cResult[36] === tmp53) {
                      let tmp57 = cResult[37];
                    }
                    return tmp57;
                  }
                  const obj9 = { children: null };
                  const items1 = [tmp40, tmp53];
                  obj9.children = items1;
                  const tmp59 = closure_6(tmp(8095).ModalScreen, obj9);
                  cResult[35] = tmp40;
                  cResult[36] = tmp53;
                  cResult[37] = tmp59;
                  tmp57 = tmp59;
                }
                const obj10 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: tmp43, onPress: tmp9 };
                const tmp48 = closure_5(tmp(5594).Button, obj10);
                cResult[29] = tmp9;
                cResult[30] = isAcceptLoading;
                cResult[31] = tmp48;
                tmp46 = tmp48;
              }
              const obj11 = { children: null };
              const items2 = [tmp26, tmp30, tmp37];
              obj11.children = items2;
              const tmp42 = closure_6(tmp(8096).ModalContent, obj11);
              cResult[25] = tmp26;
              cResult[26] = tmp37;
              cResult[27] = tmp42;
              tmp40 = tmp42;
            }
            const obj12 = { style: tmp4.disclaimer, variant: "text-xs/normal", color: "text-default", children: tmp34 };
            const tmp39 = closure_5(tmp(4886).Text, obj12);
            cResult[22] = tmp4.disclaimer;
            cResult[23] = tmp34;
            cResult[24] = tmp39;
            tmp37 = tmp39;
          }
        }
      }
      const obj13 = { style: tmp10, children: null };
      const items3 = [tmp11, tmp19, tmp22];
      obj13.children = items3;
      const tmp29 = closure_6(View, obj13);
      cResult[14] = tmp4.header;
      cResult[15] = tmp22;
      cResult[16] = tmp11;
      cResult[17] = tmp19;
      cResult[18] = tmp29;
      tmp26 = tmp29;
    }
    const obj14 = { otherUser, iconSrc: acceptLinkRequest(4840), iconStyles: tmp4.icon };
    const tmp15 = closure_5(acceptLinkRequest(14730), obj14);
    cResult[6] = otherUser;
    cResult[7] = tmp4.icon;
    cResult[8] = tmp15;
    tmp11 = tmp15;
    const tmp14 = acceptLinkRequest(14730);
  }
  const fn3 = function x() {
    acceptLinkRequest(otherUser.id);
  };
  cResult[3] = acceptLinkRequest;
  cResult[4] = otherUser.id;
  cResult[5] = fn3;
  tmp9 = fn3;
  const tmpResult = otherUser(11528);
}) : ((otherUser) => {
  otherUser = otherUser.otherUser;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    acceptLinkRequest(5093).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1126).intl;
    otherUser(4567).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
  }, []);
  const familyCenterActions = otherUser(11528).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const isAcceptLoading = familyCenterActions.isAcceptLoading;
  const items = [acceptLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    acceptLinkRequest(otherUser.id);
  }, items);
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null, iconStyles: null };
  const obj = otherUser(11528);
  obj5.iconSrc = acceptLinkRequest(4840);
  obj5.iconStyles = tmp.icon;
  const items1 = [closure_5(acceptLinkRequest(14730), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1126).intl;
  obj6.children = intl.string(acceptLinkRequest(2493).rlNJwZ);
  items1[1] = closure_5(otherUser(4886).Text, obj6);
  items1[2] = closure_5(acceptLinkRequest(14700), { user: otherUser });
  obj4.children = items1;
  const items2 = [closure_6(View, obj4), closure_5(acceptLinkRequest(11530), {}), ];
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = otherUser(1126).intl;
  obj7.children = intl2.format(acceptLinkRequest(2493).snlFqR, { username: otherUser.username });
  items2[2] = closure_5(otherUser(4886).Text, obj7);
  obj3.children = items2;
  const items3 = [closure_6(otherUser(8096).ModalContent, obj3), ];
  const obj9 = { children: null };
  const obj10 = { children: null };
  const obj11 = { variant: "primary", disabled: isAcceptLoading, loading: isAcceptLoading, text: null, onPress: null };
  const intl3 = otherUser(1126).intl;
  obj11.text = intl3.string(acceptLinkRequest(2493)["wI/jo3"]);
  obj11.onPress = callback2;
  const items4 = [closure_5(otherUser(5594).Button, obj11), ];
  const obj12 = { variant: "tertiary", text: null, onPress: null };
  const intl4 = otherUser(1126).intl;
  obj12.text = intl4.string(otherUser(1126).t["ETE/oC"]);
  obj12.onPress = acceptLinkRequest(5093).pop;
  items4[1] = closure_5(otherUser(5594).Button, obj12);
  obj10.children = items4;
  obj9.children = closure_6(otherUser(5592).ButtonGroup, obj10);
  items3[1] = closure_5(otherUser(11536).ModalFooter, obj9);
  obj2.children = items3;
  return closure_6(otherUser(8095).ModalScreen, obj2);
});
ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalAccept.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(576).c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { ACCEPT: null };
    const obj3 = {
      headerShown: true,
      headerLeft: tmp(6010).getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
          return null;
        },
      render() {
          return closure_2_5(closure_2_8, { otherUser });
        }
    };
    obj2.ACCEPT = obj3;
    cResult[0] = otherUser;
    cResult[1] = obj2;
    let tmp4 = obj2;
    const tmpResult = tmp(6010);
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
    const obj4 = { initialRouteName: "ACCEPT", screens: tmp4, headerBackTitle: tmp6 };
    const tmp10 = closure_5(tmp(10976).Modal, obj4);
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
    const obj = { ACCEPT: null };
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
    obj.ACCEPT = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "ACCEPT", screens: memo, headerBackTitle: null };
  const intl = otherUser(1126).intl;
  obj.headerBackTitle = intl.string(otherUser(1126).t["13/7kX"]);
  return closure_5(otherUser(10976).Modal, obj);
});