// discord_app/modules/parent_tools/native/FamilyCenterModalCancel.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  header: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 },
  headerText: null,
};
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterModalCancelScreen(otherUser) {
      const cResult = otherUser(576).c(28);
      otherUser = otherUser.otherUser;
      const tmp4 = closure_7();
      const obj = otherUser(576);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          cancelLinkRequest(5941).pop();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p() {
          const intl = otherUser(1126).intl;
          otherUser(4767).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
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
      const tmp6 = cancelLinkRequest(7721)();
      const familyCenterActions = otherUser(11484).useFamilyCenterActions(tmp9);
      cancelLinkRequest = familyCenterActions.cancelLinkRequest;
      const isCancelLoading = familyCenterActions.isCancelLoading;
      if (cResult[3] === cancelLinkRequest) {
        if (cResult[4] === otherUser.id) {
          let tmp11 = cResult[5];
        }
        tmp5(38)(tmp6, "FamilyCenterCancelModal should only be rendered for parents.");
        if (cResult[6] !== otherUser) {
          const obj3 = { otherUser, iconSrc: tmp5(5010) };
          const tmp16 = closure_5(tmp5(15119), obj3);
          cResult[6] = otherUser;
          cResult[7] = tmp16;
          let tmp13 = tmp16;
          const tmp5Result = tmp5(15119);
        } else {
          tmp13 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(1126).intl;
          const stringResult = intl.string(tmp5(2565).HynllX);
          cResult[8] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== tmp4.headerText) {
          const obj4 = { style: tmp4.headerText, variant: "text-lg/bold", children: tmp17 };
          const tmp21 = closure_5(tmp(5087).Text, obj4);
          cResult[9] = tmp4.headerText;
          cResult[10] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] !== otherUser) {
          const obj5 = { user: otherUser };
          const tmp24 = closure_5(tmp5(15089), obj5);
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
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1126).intl;
                const stringResult1 = intl2.string(tmp5(2565).mK40bk);
                cResult[18] = stringResult1;
                let tmp30 = stringResult1;
              } else {
                tmp30 = cResult[18];
              }
              if (cResult[19] === tmp11) {
                if (cResult[20] === isCancelLoading) {
                  let tmp32 = cResult[21];
                }
                const _Symbol3 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { variant: "tertiary", text: null, onPress: null };
                  const intl3 = tmp(1126).intl;
                  obj6.text = intl3.string(tmp5(2565).czincX);
                  obj6.onPress = tmp5(5941).pop;
                  const tmp37 = closure_5(tmp(5376).Button, obj6);
                  cResult[22] = tmp37;
                  let tmp35 = tmp37;
                } else {
                  tmp35 = cResult[22];
                }
                if (cResult[23] !== tmp32) {
                  const obj7 = { children: null };
                  const obj8 = { children: null };
                  const items = [tmp32, tmp35];
                  obj8.children = items;
                  obj7.children = closure_6(tmp(5965).ButtonGroup, obj8);
                  const tmp41 = closure_5(tmp(11493).ModalFooter, obj7);
                  cResult[23] = tmp32;
                  cResult[24] = tmp41;
                  let tmp38 = tmp41;
                } else {
                  tmp38 = cResult[24];
                }
                if (cResult[25] === tmp25) {
                  if (cResult[26] === tmp38) {
                    let tmp42 = cResult[27];
                  }
                  return tmp42;
                }
                const obj9 = { children: null };
                const items1 = [tmp25, tmp38];
                obj9.children = items1;
                const tmp44 = closure_6(tmp(7511).ModalScreen, obj9);
                cResult[25] = tmp25;
                cResult[26] = tmp38;
                cResult[27] = tmp44;
                tmp42 = tmp44;
              }
              const obj10 = {
                variant: "destructive",
                disabled: isCancelLoading,
                loading: isCancelLoading,
                text: tmp30,
                onPress: tmp11,
              };
              const tmp34 = closure_5(tmp(5376).Button, obj10);
              cResult[19] = tmp11;
              cResult[20] = isCancelLoading;
              cResult[21] = tmp34;
              tmp32 = tmp34;
            }
          }
        }
        const obj11 = { children: null };
        const obj12 = { style: tmp4.header, children: null };
        const items2 = [tmp13, tmp19, tmp22];
        obj12.children = items2;
        obj11.children = closure_6(View, obj12);
        const tmp29 = closure_5(tmp(7512).ModalContent, obj11);
        cResult[13] = tmp4.header;
        cResult[14] = tmp22;
        cResult[15] = tmp13;
        cResult[16] = tmp19;
        cResult[17] = tmp29;
        tmp25 = tmp29;
      }
      const fn3 = function f() {
        cancelLinkRequest(otherUser.id);
      };
      cResult[3] = cancelLinkRequest;
      cResult[4] = otherUser.id;
      cResult[5] = fn3;
      tmp11 = fn3;
      const tmpResult = otherUser(11484);
    }
  : function FamilyCenterModalCancelScreen(otherUser) {
      otherUser = otherUser.otherUser;
      let cancelLinkRequest;
      const tmp = closure_7();
      const callback = noop.useCallback(() => {
        cancelLinkRequest(5941).pop();
      }, []);
      const callback1 = noop.useCallback(() => {
        const intl = otherUser(1126).intl;
        otherUser(4767).presentFailedToast(intl.string(otherUser(1126).t.R0RpRX));
      }, []);
      const tmp2 = cancelLinkRequest(7721)();
      const familyCenterActions = otherUser(11484).useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
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
      const obj = otherUser(11484);
      obj5.iconSrc = cancelLinkRequest(5010);
      const items1 = [closure_5(cancelLinkRequest(15119), obj5), ,];
      const obj6 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
      let intl = otherUser(1126).intl;
      obj6.children = intl.string(cancelLinkRequest(2565).HynllX);
      items1[1] = closure_5(otherUser(5087).Text, obj6);
      items1[2] = closure_5(cancelLinkRequest(15089), { user: otherUser });
      obj4.children = items1;
      obj3.children = closure_6(View, obj4);
      const items2 = [closure_5(otherUser(7512).ModalContent, obj3)];
      const obj7 = { children: null };
      const obj8 = { children: null };
      const obj9 = {
        variant: "destructive",
        disabled: isCancelLoading,
        loading: isCancelLoading,
        text: null,
        onPress: null,
      };
      const intl2 = otherUser(1126).intl;
      obj9.text = intl2.string(cancelLinkRequest(2565).mK40bk);
      obj9.onPress = callback2;
      const items3 = [closure_5(otherUser(5376).Button, obj9)];
      const obj10 = { variant: "tertiary", text: null, onPress: null };
      const intl3 = otherUser(1126).intl;
      obj10.text = intl3.string(cancelLinkRequest(2565).czincX);
      obj10.onPress = cancelLinkRequest(5941).pop;
      items3[1] = closure_5(otherUser(5376).Button, obj10);
      obj8.children = items3;
      obj7.children = closure_6(otherUser(5965).ButtonGroup, obj8);
      items2[1] = closure_5(otherUser(11493).ModalFooter, obj7);
      obj2.children = items2;
      return closure_6(otherUser(7511).ModalScreen, obj2);
    };
ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterModalCancel(otherUser) {
      const cResult = otherUser(576).c(5);
      otherUser = otherUser.otherUser;
      if (cResult[0] !== otherUser) {
        const obj2 = { CANCEL: null };
        const obj3 = {
          headerShown: true,
          headerLeft: tmp(6205).getHeaderCloseButton(ModalActionCreatorsDefault.pop),
          headerTitle() {
            return null;
          },
          render() {
            return closure_2_5(closure_2_8, { otherUser });
          },
        };
        obj2.CANCEL = obj3;
        cResult[0] = otherUser;
        cResult[1] = obj2;
        let tmp4 = obj2;
        const tmpResult = tmp(6205);
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
        const tmp10 = closure_5(tmp(10568).Modal, obj4);
        cResult[3] = tmp4;
        cResult[4] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : function FamilyCenterModalCancel(otherUser) {
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
          },
        };
        obj.CANCEL = obj2;
        return obj;
      }, items);
      let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
      const intl = otherUser(1126).intl;
      obj.headerBackTitle = intl.string(otherUser(1126).t["13/7kX"]);
      return closure_5(otherUser(10568).Modal, obj);
    };
