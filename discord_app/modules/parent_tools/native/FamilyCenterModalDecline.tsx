// === Module 14730: FamilyCenterModalDecline ===

// Module 14730 (FamilyCenterModalDecline)
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 }, headerText: null, body: null, noticeHeader: null };
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.body = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj5 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.noticeHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(576).c(38);
  otherUser = otherUser.otherUser;
  const tmp4 = closure_7();
  const obj = otherUser(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      declineLinkRequest(5093).pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p() {
      const intl = otherUser(1126).intl;
      otherUser(4567).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onSuccess: first, onError: tmp8 };
    cResult[2] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  const tmp6 = declineLinkRequest(8296)();
  const familyCenterActions = otherUser(11528).useFamilyCenterActions(tmp9);
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  if (cResult[3] === declineLinkRequest) {
    if (cResult[4] === otherUser.id) {
      let tmp11 = cResult[5];
    }
    tmp5(38)(!tmp6, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
    if (cResult[6] !== otherUser) {
      const obj3 = { otherUser, iconSrc: tmp5(4809) };
      const tmp16 = closure_5(tmp5(14726), obj3);
      cResult[6] = otherUser;
      cResult[7] = tmp16;
      let tmp13 = tmp16;
      const tmp5Result = tmp5(14726);
    } else {
      tmp13 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp5(2493).teIRCR);
      cResult[8] = stringResult;
      let tmp17 = stringResult;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] !== tmp4.headerText) {
      const obj4 = { style: tmp4.headerText, variant: "text-lg/bold", children: tmp17 };
      const tmp21 = closure_5(tmp(4886).Text, obj4);
      cResult[9] = tmp4.headerText;
      cResult[10] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] !== otherUser) {
      const obj5 = { user: otherUser };
      const tmp24 = closure_5(tmp5(14696), obj5);
      cResult[11] = otherUser;
      cResult[12] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[12];
    }
    if (cResult[13] === tmp4.header) {
      if (cResult[14] === tmp22) {
        if (cResult[15] === tmp13) {
          if (cResult[16] === tmp19) {
            let tmp25 = cResult[17];
          }
          const _Symbol2 = Symbol;
          ({ body, noticeHeader } = tmp4);
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp5(2493).cXgKMD);
            cResult[18] = stringResult1;
            let tmp29 = stringResult1;
          } else {
            tmp29 = cResult[18];
          }
          if (cResult[19] !== tmp4.noticeHeader) {
            const obj6 = { style: noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: tmp29 };
            const tmp33 = closure_5(tmp(4886).Text, obj6);
            cResult[19] = tmp4.noticeHeader;
            cResult[20] = tmp33;
            let tmp31 = tmp33;
          } else {
            tmp31 = cResult[20];
          }
          const _Symbol3 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
            const intl3 = tmp(1126).intl;
            obj7.children = intl3.string(tmp5(2493).LcM8BS);
            const tmp36 = closure_5(tmp(4886).Text, obj7);
            cResult[21] = tmp36;
            let tmp34 = tmp36;
          } else {
            tmp34 = cResult[21];
          }
          if (cResult[22] === tmp4.body) {
            if (cResult[23] === tmp31) {
              let tmp37 = cResult[24];
            }
            if (cResult[25] === tmp25) {
              if (cResult[26] === tmp37) {
                let tmp41 = cResult[27];
              }
              const _Symbol4 = Symbol;
              if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(1126).intl;
                const stringResult2 = intl4.string(tmp5(2493).dKxFcn);
                cResult[28] = stringResult2;
                let tmp44 = stringResult2;
              } else {
                tmp44 = cResult[28];
              }
              if (cResult[29] === tmp11) {
                if (cResult[30] === isDeclineLoading) {
                  let tmp46 = cResult[31];
                }
                const _Symbol5 = Symbol;
                if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = { variant: "tertiary", text: null, onPress: null };
                  const intl5 = tmp(1126).intl;
                  obj8.text = intl5.string(tmp(1126).t["ETE/oC"]);
                  obj8.onPress = tmp5(5093).pop;
                  const tmp51 = closure_5(tmp(5594).Button, obj8);
                  cResult[32] = tmp51;
                  let tmp49 = tmp51;
                } else {
                  tmp49 = cResult[32];
                }
                if (cResult[33] !== tmp46) {
                  const obj9 = { children: null };
                  const obj10 = { children: null };
                  const items = [tmp46, tmp49];
                  obj10.children = items;
                  obj9.children = closure_6(tmp(5592).ButtonGroup, obj10);
                  const tmp55 = closure_5(tmp(11536).ModalFooter, obj9);
                  cResult[33] = tmp46;
                  cResult[34] = tmp55;
                  let tmp52 = tmp55;
                } else {
                  tmp52 = cResult[34];
                }
                if (cResult[35] === tmp41) {
                  if (cResult[36] === tmp52) {
                    let tmp56 = cResult[37];
                  }
                  return tmp56;
                }
                const obj11 = { children: null };
                const items1 = [tmp41, tmp52];
                obj11.children = items1;
                const tmp58 = closure_6(tmp(8095).ModalScreen, obj11);
                cResult[35] = tmp41;
                cResult[36] = tmp52;
                cResult[37] = tmp58;
                tmp56 = tmp58;
              }
              const obj12 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading, text: tmp44, onPress: tmp11 };
              const tmp48 = closure_5(tmp(5594).Button, obj12);
              cResult[29] = tmp11;
              cResult[30] = isDeclineLoading;
              cResult[31] = tmp48;
              tmp46 = tmp48;
            }
            const obj13 = { children: null };
            const items2 = [tmp25, tmp37];
            obj13.children = items2;
            const tmp43 = closure_6(tmp(8096).ModalContent, obj13);
            cResult[25] = tmp25;
            cResult[26] = tmp37;
            cResult[27] = tmp43;
            tmp41 = tmp43;
          }
          const obj14 = { style: body, children: null };
          const items3 = [tmp31, tmp34];
          obj14.children = items3;
          const tmp40 = closure_6(View, obj14);
          cResult[22] = tmp4.body;
          cResult[23] = tmp31;
          cResult[24] = tmp40;
          tmp37 = tmp40;
        }
      }
    }
    const obj15 = { style: tmp4.header, children: null };
    const items4 = [tmp13, tmp19, tmp22];
    obj15.children = items4;
    const tmp28 = closure_6(View, obj15);
    cResult[13] = tmp4.header;
    cResult[14] = tmp22;
    cResult[15] = tmp13;
    cResult[16] = tmp19;
    cResult[17] = tmp28;
    tmp25 = tmp28;
  }
  const fn3 = function f() {
    declineLinkRequest(otherUser.id);
  };
  cResult[3] = declineLinkRequest;
  cResult[4] = otherUser.id;
  cResult[5] = fn3;
  tmp11 = fn3;
  const tmpResult = otherUser(11528);
}) : ((otherUser) => {
  otherUser = otherUser.otherUser;
  let declineLinkRequest;
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    declineLinkRequest(5093).pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    const intl = otherUser(1126).intl;
    otherUser(4567).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
  }, []);
  const tmp2 = declineLinkRequest(8296)();
  const familyCenterActions = otherUser(11528).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  const isDeclineLoading = familyCenterActions.isDeclineLoading;
  const items = [declineLinkRequest, otherUser.id];
  const callback2 = noop.useCallback(() => {
    declineLinkRequest(otherUser.id);
  }, items);
  declineLinkRequest(38)(!tmp2, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { otherUser, iconSrc: null };
  const obj = otherUser(11528);
  obj5.iconSrc = declineLinkRequest(4809);
  const items1 = [closure_5(declineLinkRequest(14726), obj5), , ];
  const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1126).intl;
  obj6.children = intl.string(declineLinkRequest(2493).teIRCR);
  items1[1] = closure_5(otherUser(4886).Text, obj6);
  items1[2] = closure_5(declineLinkRequest(14696), { user: otherUser });
  obj4.children = items1;
  const items2 = [closure_6(View, obj4), ];
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { style: tmp.noticeHeader, variant: "eyebrow", color: "mobile-text-heading-primary", children: null };
  const intl2 = otherUser(1126).intl;
  obj8.children = intl2.string(declineLinkRequest(2493).cXgKMD);
  const items3 = [closure_5(otherUser(4886).Text, obj8), ];
  const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = otherUser(1126).intl;
  obj9.children = intl3.string(declineLinkRequest(2493).LcM8BS);
  items3[1] = closure_5(otherUser(4886).Text, obj9);
  obj7.children = items3;
  items2[1] = closure_6(View, obj7);
  obj3.children = items2;
  const items4 = [closure_6(otherUser(8096).ModalContent, obj3), ];
  const obj10 = { children: null };
  const obj11 = { children: null };
  const obj12 = { variant: "destructive", disabled: isDeclineLoading, loading: isDeclineLoading, text: null, onPress: null };
  const intl4 = otherUser(1126).intl;
  obj12.text = intl4.string(declineLinkRequest(2493).dKxFcn);
  obj12.onPress = callback2;
  const items5 = [closure_5(otherUser(5594).Button, obj12), ];
  const obj13 = { variant: "tertiary", text: null, onPress: null };
  const intl5 = otherUser(1126).intl;
  obj13.text = intl5.string(otherUser(1126).t["ETE/oC"]);
  obj13.onPress = declineLinkRequest(5093).pop;
  items5[1] = closure_5(otherUser(5594).Button, obj13);
  obj11.children = items5;
  obj10.children = closure_6(otherUser(5592).ButtonGroup, obj11);
  items4[1] = closure_5(otherUser(11536).ModalFooter, obj10);
  obj2.children = items4;
  return closure_6(otherUser(8095).ModalScreen, obj2);
});
ReactCompilerGating = fn(558);
let obj6 = { marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((otherUser) => {
  const cResult = otherUser(576).c(5);
  otherUser = otherUser.otherUser;
  if (cResult[0] !== otherUser) {
    const obj2 = { DECLINE: null };
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
    obj2.DECLINE = obj3;
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
    const obj4 = { initialRouteName: "DECLINE", screens: tmp4, headerBackTitle: tmp6 };
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
    const obj = { DECLINE: null };
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
    obj.DECLINE = obj2;
    return obj;
  }, items);
  let obj = { initialRouteName: "DECLINE", screens: memo, headerBackTitle: null };
  const intl = otherUser(1126).intl;
  obj.headerBackTitle = intl.string(otherUser(1126).t["13/7kX"]);
  return closure_5(otherUser(10976).Modal, obj);
});