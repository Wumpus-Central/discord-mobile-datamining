// discord_app/modules/parent_tools/native/FamilyCenterModalDecline.tsx
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
let obj4;
let obj5;
function headerTitle() {
  return null;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: obj3, body: obj4, noticeHeader: obj5 };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj4 = {
  padding: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj5 = { marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (otherUser) => {
      let body;
      let declineLinkRequest;
      let first;
      let intl3;
      let intl5;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let noticeHeader;
      let obj10;
      let tmp8;
      let tmp9;
      const tmp = otherUser;
      const obj = otherUser(576);
      const cResult = obj.c(38);
      otherUser = otherUser.otherUser;
      const tmp4 = closure_7();
      const tmp6 = declineLinkRequest(8296)();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const arr = declineLinkRequest(dependencyMap[8]);
          arr.pop();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p() {
          const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
          otherUser(dependencyMap[9]);
          const intl = otherUser(dependencyMap[10]).intl;
          presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
        };
        cResult[1] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { onSuccess: first, onError: tmp8 };
        cResult[2] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = tmp(11528);
      const familyCenterActions = tmpResult.useFamilyCenterActions(tmp9);
      declineLinkRequest = familyCenterActions.declineLinkRequest;
      const isDeclineLoading = familyCenterActions.isDeclineLoading;
      if (cResult[3] === declineLinkRequest) {
        let tmp11;
        let tmp13;
        let tmp17;
        let tmp19;
        let tmp22;
        if (cResult[4] === otherUser.id) {
          tmp11 = cResult[5];
        }
        declineLinkRequest(38)(!tmp6, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
        const header = tmp4.header;
        if (cResult[6] !== otherUser) {
          const obj3 = { otherUser, iconSrc: declineLinkRequest(4809) };
          const tmp5Result = declineLinkRequest(14730);
          const tmp16 = closure_5(tmp5Result, obj3);
          cResult[6] = otherUser;
          cResult[7] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[7];
        }
        const _Symbol = Symbol;
        const headerText = tmp4.headerText;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(1126).intl;
          const stringResult = intl.string(declineLinkRequest(2493).teIRCR);
          cResult[8] = stringResult;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== tmp4.headerText) {
          const obj4 = { style: headerText, variant: "text-lg/bold", children: tmp17 };
          const tmp21 = closure_5(tmp(4886).Text, obj4);
          cResult[9] = tmp4.headerText;
          cResult[10] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] !== otherUser) {
          const obj5 = { user: otherUser };
          const tmp24 = closure_5(declineLinkRequest(14700), obj5);
          cResult[11] = otherUser;
          cResult[12] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp4.header) {
          if (cResult[14] === tmp22) {
            if (cResult[15] === tmp13) {
              let tmp25;
              let tmp29;
              let tmp31;
              let tmp34;
              if (cResult[16] === tmp19) {
                tmp25 = cResult[17];
              }
              const _Symbol2 = Symbol;
              ({ body, noticeHeader } = tmp4);
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1126).intl;
                const stringResult1 = intl2.string(declineLinkRequest(2493).cXgKMD);
                cResult[18] = stringResult1;
                tmp29 = stringResult1;
              } else {
                tmp29 = cResult[18];
              }
              if (cResult[19] !== tmp4.noticeHeader) {
                const obj6 = {
                  style: noticeHeader,
                  variant: "eyebrow",
                  color: "mobile-text-heading-primary",
                  children: tmp29,
                };
                const tmp33 = closure_5(tmp(4886).Text, obj6);
                cResult[19] = tmp4.noticeHeader;
                cResult[20] = tmp33;
                tmp31 = tmp33;
              } else {
                tmp31 = cResult[20];
              }
              const _Symbol3 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const obj7 = {
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: intl3.string(declineLinkRequest(2493).LcM8BS),
                };
                const Text = tmp(4886).Text;
                intl3 = tmp(1126).intl;
                const tmp36 = closure_5(Text, obj7);
                cResult[21] = tmp36;
                tmp34 = tmp36;
              } else {
                tmp34 = cResult[21];
              }
              if (cResult[22] === tmp4.body) {
                let tmp37;
                if (cResult[23] === tmp31) {
                  tmp37 = cResult[24];
                }
                if (cResult[25] === tmp25) {
                  let tmp41;
                  let tmp44;
                  if (cResult[26] === tmp37) {
                    tmp41 = cResult[27];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult2 = intl4.string(declineLinkRequest(2493).dKxFcn);
                    cResult[28] = stringResult2;
                    tmp44 = stringResult2;
                  } else {
                    tmp44 = cResult[28];
                  }
                  if (cResult[29] === tmp11) {
                    let tmp46;
                    let tmp49;
                    let tmp52;
                    if (cResult[30] === isDeclineLoading) {
                      tmp46 = cResult[31];
                    }
                    const _Symbol5 = Symbol;
                    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj8 = {
                        variant: "tertiary",
                        text: intl5.string(tmp(1126).t["ETE/oC"]),
                        onPress: declineLinkRequest(5093).pop,
                      };
                      const Button = tmp(5594).Button;
                      intl5 = tmp(1126).intl;
                      const tmp51 = closure_5(Button, obj8);
                      cResult[32] = tmp51;
                      tmp49 = tmp51;
                    } else {
                      tmp49 = cResult[32];
                    }
                    if (cResult[33] !== tmp46) {
                      const obj9 = { children: closure_6(tmp(5592).ButtonGroup, obj10) };
                      const ModalFooter = tmp(11536).ModalFooter;
                      obj10 = { children: items };
                      items = [tmp46, tmp49];
                      const tmp55 = closure_5(ModalFooter, obj9);
                      cResult[33] = tmp46;
                      cResult[34] = tmp55;
                      tmp52 = tmp55;
                    } else {
                      tmp52 = cResult[34];
                    }
                    if (cResult[35] === tmp41) {
                      let tmp56;
                      if (cResult[36] === tmp52) {
                        tmp56 = cResult[37];
                      }
                      return tmp56;
                    }
                    const obj11 = { children: items1 };
                    items1 = [tmp41, tmp52];
                    const tmp58 = closure_6(tmp(8095).ModalScreen, obj11);
                    cResult[35] = tmp41;
                    cResult[36] = tmp52;
                    cResult[37] = tmp58;
                    tmp56 = tmp58;
                  }
                  const obj12 = {
                    variant: "destructive",
                    disabled: isDeclineLoading,
                    loading: isDeclineLoading,
                    text: tmp44,
                    onPress: tmp11,
                  };
                  const tmp48 = closure_5(tmp(5594).Button, obj12);
                  cResult[29] = tmp11;
                  cResult[30] = isDeclineLoading;
                  cResult[31] = tmp48;
                  tmp46 = tmp48;
                }
                const obj13 = { children: items2 };
                items2 = [tmp25, tmp37];
                const tmp43 = closure_6(tmp(8096).ModalContent, obj13);
                cResult[25] = tmp25;
                cResult[26] = tmp37;
                cResult[27] = tmp43;
                tmp41 = tmp43;
              }
              const obj14 = { style: body, children: items3 };
              items3 = [tmp31, tmp34];
              const tmp40 = closure_6(View, obj14);
              cResult[22] = tmp4.body;
              cResult[23] = tmp31;
              cResult[24] = tmp40;
              tmp37 = tmp40;
            }
          }
        }
        const obj15 = { style: header, children: items4 };
        items4 = [tmp13, tmp19, tmp22];
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
    }
  : (otherUser) => {
      let ButtonGroup;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj11;
      otherUser = otherUser.otherUser;
      let declineLinkRequest;
      const tmp = closure_7();
      const tmp2 = declineLinkRequest(8296)();
      const callback = react.useCallback(() => {
        const arr = declineLinkRequest(dependencyMap[8]);
        arr.pop();
      }, []);
      const callback1 = react.useCallback(() => {
        const presentFailedToast = otherUser(dependencyMap[9]).presentFailedToast;
        otherUser(dependencyMap[9]);
        const intl = otherUser(dependencyMap[10]).intl;
        presentFailedToast(intl.string(otherUser(dependencyMap[10]).t.R0RpRX));
      }, []);
      const obj = otherUser(11528);
      const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
      declineLinkRequest = familyCenterActions.declineLinkRequest;
      const isDeclineLoading = familyCenterActions.isDeclineLoading;
      const items = [declineLinkRequest, otherUser.id];
      const callback2 = react.useCallback(() => {
        declineLinkRequest(otherUser.id);
      }, items);
      declineLinkRequest(38)(!tmp2, "FamilyCenterDeclineLinkModal should only be rendered for teens.");
      const obj2 = { children: items4 };
      const ModalScreen = otherUser(8095).ModalScreen;
      const obj3 = { children: items2 };
      const obj4 = { style: tmp.header, children: items1 };
      const ModalContent = otherUser(8096).ModalContent;
      const obj5 = { otherUser, iconSrc: declineLinkRequest(4809) };
      const tmp8 = declineLinkRequest(14730);
      items1 = [closure_5(tmp8, obj5), ,];
      const obj6 = {
        style: tmp.headerText,
        variant: "text-lg/bold",
        children: intl.string(declineLinkRequest(2493).teIRCR),
      };
      const Text = otherUser(4886).Text;
      intl = otherUser(1126).intl;
      items1[1] = closure_5(Text, obj6);
      items1[2] = closure_5(declineLinkRequest(14700), { user: otherUser });
      items2 = [closure_6(View, obj4)];
      const obj7 = { style: tmp.body, children: items3 };
      const obj8 = {
        style: tmp.noticeHeader,
        variant: "eyebrow",
        color: "mobile-text-heading-primary",
        children: intl2.string(declineLinkRequest(2493).cXgKMD),
      };
      const Text2 = otherUser(4886).Text;
      intl2 = otherUser(1126).intl;
      items3 = [closure_5(Text2, obj8)];
      const obj9 = {
        variant: "text-sm/normal",
        color: "text-default",
        children: intl3.string(declineLinkRequest(2493).LcM8BS),
      };
      const Text3 = otherUser(4886).Text;
      intl3 = otherUser(1126).intl;
      items3[1] = closure_5(Text3, obj9);
      items2[1] = closure_6(View, obj7);
      items4 = [closure_6(ModalContent, obj3)];
      const obj10 = { children: closure_6(ButtonGroup, obj11) };
      const ModalFooter = otherUser(11536).ModalFooter;
      obj11 = { children: items5 };
      ButtonGroup = otherUser(5592).ButtonGroup;
      const obj12 = {
        variant: "destructive",
        disabled: isDeclineLoading,
        loading: isDeclineLoading,
        text: intl4.string(declineLinkRequest(2493).dKxFcn),
        onPress: callback2,
      };
      const Button = otherUser(5594).Button;
      intl4 = otherUser(1126).intl;
      items5 = [closure_5(Button, obj12)];
      const obj13 = {
        variant: "tertiary",
        text: intl5.string(otherUser(1126).t["ETE/oC"]),
        onPress: declineLinkRequest(5093).pop,
      };
      const Button2 = otherUser(5594).Button;
      intl5 = otherUser(1126).intl;
      items5[1] = closure_5(Button2, obj13);
      items4[1] = closure_5(ModalFooter, obj10);
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
        const obj2 = { DECLINE: obj3 };
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
        tmpResult = otherUser(6010);
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
        const obj4 = { initialRouteName: "DECLINE", screens: tmp4, headerBackTitle: tmp6 };
        const tmp10 = closure_5(otherUser(10976).Modal, obj4);
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
        let obj = { DECLINE: obj2 };
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
        initialRouteName: "DECLINE",
        screens: memo,
        headerBackTitle: intl.string(otherUser(1126).t["13/7kX"]),
      };
      const Modal = otherUser(10976).Modal;
      intl = otherUser(1126).intl;
      return closure_5(Modal, obj);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDecline.tsx");

export default tmp4;
