// discord_app/modules/age_gate/native/components/AgeGateUnderage.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import AuthHeaderDefault from "../../../auth/native/components/atoms/AuthHeader.tsx";
import AuthNavbarPlaceholderDefault from "../../../auth/native/components/atoms/AuthNavbarPlaceholder.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, navigation, onClose;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = 80;
  }
  const obj = {
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      padding: 16,
      paddingTop: 0,
      paddingBottom: num,
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    },
    header: { marginTop: 16 },
    body: { marginTop: 8, lineHeight: 20, textAlign: "center" },
    buttonWrapper: { width: "100%", marginTop: 24 },
  };
  ({
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
    paddingTop: 0,
    paddingBottom: num,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  });
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let Button;
      let closure_1;
      let closure_2;
      let disableSwipe;
      let existingUser;
      let fromRegister;
      let intl4;
      let intl5;
      let items;
      let items1;
      let obj6;
      let tmp7Result;
      let underageMessage;
      let obj = onClose(576);
      const cResult = obj.c(34);
      onClose = onClose.onClose;
      ({ underageMessage, existingUser, fromRegister, disableSwipe } = onClose);
      importDefault = tmp4;
      dependencyMap = tmp6;
      const tmp8 = useWideAuthViewDefault();
      const tmp9 = closure_9(tmp8);
      const tmpResult = onClose(1490);
      navigation = tmpResult.useNavigation();
      if (cResult[0] === (undefined !== disableSwipe && disableSwipe)) {
        if (cResult[1] === (undefined !== existingUser && existingUser)) {
          if (cResult[2] === navigation) {
            let tmp11;
            let tmp12;
            let tmp15;
            let tmp17;
            let tmp19;
            let tmp24;
            let tmp23;
            if (cResult[3] === onClose) {
              tmp11 = cResult[4];
              tmp12 = cResult[5];
            }
            const layoutEffect = navigation.useLayoutEffect(tmp11, tmp12);
            if (cResult[6] !== onClose) {
              const fn2 = function f() {
                onClose();
                return true;
              };
              cResult[6] = onClose;
              cResult[7] = fn2;
              tmp15 = fn2;
            } else {
              tmp15 = cResult[7];
            }
            const tmpResult2 = onClose(6016);
            tmpResult2.useNavigatorBackPressHandler(tmp15);
            if (cResult[8] !== (undefined !== existingUser && existingUser)) {
              let stringResult;
              const intl = tmp(1126).intl;
              const string = intl.string;
              const t = tmp(1126).t;
              if (undefined !== existingUser && existingUser) {
                stringResult = string(t["NR/zrG"]);
              } else {
                stringResult = string(t.nCB6Ga);
              }
              cResult[8] = undefined !== existingUser && existingUser;
              cResult[9] = stringResult;
              tmp17 = stringResult;
            } else {
              tmp17 = cResult[9];
            }
            if (cResult[10] !== tmp8) {
              let tmp20 = null;
              if (!tmp8) {
                tmp20 = closure_6(tmp7(6463), {});
              }
              cResult[10] = tmp8;
              cResult[11] = tmp20;
              tmp19 = tmp20;
            } else {
              tmp19 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp26 = closure_6(AuthNavbarPlaceholderDefault, {});
              const tmp27 = closure_6(onClose(8097).ShieldSpotIllustration, {});
              cResult[12] = tmp27;
              cResult[13] = tmp26;
              tmp24 = tmp26;
              tmp23 = tmp27;
            } else {
              tmp23 = cResult[12];
              tmp24 = cResult[13];
            }
            if (cResult[14] === tmp17) {
              let tmp28;
              let stringResult1;
              if (cResult[15] === tmp9.header) {
                tmp28 = cResult[16];
              }
              if (cResult[17] === (undefined !== fromRegister && fromRegister)) {
                let tmp31;
                if (cResult[18] === underageMessage) {
                  tmp31 = cResult[19];
                }
                if (cResult[20] === tmp9.body) {
                  let tmp36;
                  if (cResult[21] === tmp31) {
                    tmp36 = cResult[22];
                  }
                  if (cResult[23] === (undefined !== existingUser && existingUser)) {
                    if (cResult[24] === onClose) {
                      if (cResult[25] === tmp9.body) {
                        let tmp39;
                        if (cResult[26] === tmp9.buttonWrapper) {
                          tmp39 = cResult[27];
                        }
                        if (cResult[28] === tmp9.container) {
                          if (cResult[29] === tmp28) {
                            if (cResult[30] === tmp36) {
                              if (cResult[31] === tmp39) {
                                let tmp45;
                                if (cResult[32] === tmp19) {
                                  tmp45 = cResult[33];
                                }
                                return tmp45;
                              }
                            }
                          }
                        }
                        let obj2 = { style: tmp9.container, children: items };
                        items = [tmp19, tmp24, tmp23, tmp28, tmp36, tmp39];
                        const tmp48 = closure_8(View, obj2);
                        cResult[28] = tmp9.container;
                        cResult[29] = tmp28;
                        cResult[30] = tmp36;
                        cResult[31] = tmp39;
                        cResult[32] = tmp19;
                        cResult[33] = tmp48;
                        tmp45 = tmp48;
                      }
                    }
                  }
                  let tmp40 = null;
                  if (undefined !== existingUser && existingUser) {
                    const obj3 = { children: items1 };
                    const obj4 = {
                      style: tmp9.body,
                      variant: "text-md/medium",
                      color: "interactive-text-default",
                      children: intl4.format(onClose(1126).t["3axQdB"], { days: 30 }),
                    };
                    const Text = tmp(4886).Text;
                    intl4 = tmp(1126).intl;
                    items1 = [closure_6(Text, obj4)];
                    const obj5 = { style: tmp9.buttonWrapper, children: closure_6(Button, obj6) };
                    obj6 = { onPress: onClose, text: intl5.string(onClose(1126).t.JhDw5o), grow: true };
                    Button = tmp(5594).Button;
                    intl5 = tmp(1126).intl;
                    items1[1] = closure_6(View, obj5);
                    tmp40 = closure_8(closure_7, obj3);
                  }
                  cResult[23] = undefined !== existingUser && existingUser;
                  cResult[24] = onClose;
                  cResult[25] = tmp9.body;
                  cResult[26] = tmp9.buttonWrapper;
                  cResult[27] = tmp40;
                  tmp39 = tmp40;
                }
                const obj7 = {
                  style: tmp9.body,
                  variant: "text-md/medium",
                  color: "interactive-text-default",
                  children: tmp31,
                };
                const tmp38 = closure_6(onClose(4886).Text, obj7);
                cResult[20] = tmp9.body;
                cResult[21] = tmp31;
                cResult[22] = tmp38;
                tmp36 = tmp38;
              }
              const intl2 = tmp(1126).intl;
              if (undefined !== fromRegister && fromRegister) {
                stringResult1 = intl2.string(tmp(1126).t.GDQgHL);
              } else {
                const format = intl2.format;
                let stringResult2 = underageMessage;
                const b0QzXe = tmp(1126).t.b0QzXe;
                if (underageMessage == null) {
                  const intl3 = tmp(1126).intl;
                  stringResult2 = intl3.string(tmp(1126).t.WqEH4D);
                }
                const obj8 = {
                  underageMessage: stringResult2,
                  helpURL: tmp7Result.getArticleURL(HelpdeskArticles.AGE_GATE),
                };
                tmp7Result = HelpdeskUtilsDefault;
                stringResult1 = format(b0QzXe, obj8);
              }
              cResult[17] = undefined !== fromRegister && fromRegister;
              cResult[18] = underageMessage;
              cResult[19] = stringResult1;
              tmp31 = stringResult1;
            }
            const obj9 = { style: tmp9.header, children: tmp17 };
            const tmp30 = closure_6(AuthHeaderDefault, obj9);
            cResult[14] = tmp17;
            cResult[15] = tmp9.header;
            cResult[16] = tmp30;
            tmp28 = tmp30;
          }
        }
      }
      let fn = function h() {
        let fn;
        const setOptions = navigation.setOptions;
        if (closure_1) {
          fn = () => null;
        } else {
          const obj = NavigatorHeader;
          fn = obj.getHeaderBackButton(onClose);
        }
        const obj2 = { headerLeft: fn, gestureEnabled: !closure_2 };
        setOptions(obj2);
      };
      const items2 = [
        onClose,
        undefined !== existingUser && existingUser,
        navigation,
        undefined !== disableSwipe && disableSwipe,
      ];
      cResult[0] = undefined !== disableSwipe && disableSwipe;
      cResult[1] = undefined !== existingUser && existingUser;
      cResult[2] = navigation;
      cResult[3] = onClose;
      cResult[4] = fn;
      cResult[5] = items2;
      tmp12 = items2;
      tmp11 = fn;
    }
  : (onClose) => {
      let Button;
      let existingUser;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let obj10;
      let stringResult;
      let stringResult1;
      let tmpResult;
      let underageMessage;
      onClose = onClose.onClose;
      ({ underageMessage, existingUser } = onClose);
      if (existingUser === undefined) {
        existingUser = false;
      }
      let flag = onClose.fromRegister;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = onClose.disableSwipe;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const tmp3 = existingUser(flag2[8])();
      const tmp4 = closure_9(tmp3);
      let obj = onClose(flag2[9]);
      navigation = obj.useNavigation();
      const items = [onClose, existingUser, navigation, flag2];
      const layoutEffect = navigation.useLayoutEffect(() => {
        let fn;
        const setOptions = navigation.setOptions;
        if (existingUser) {
          fn = () => null;
        } else {
          const obj = NavigatorHeader;
          fn = obj.getHeaderBackButton(onClose);
        }
        const obj2 = { headerLeft: fn, gestureEnabled: !flag2 };
        setOptions(obj2);
      }, items);
      let obj2 = onClose(flag2[11]);
      obj2.useNavigatorBackPressHandler(() => {
        onClose();
        return true;
      });
      const intl = onClose(flag2[12]).intl;
      const string = intl.string;
      const t = onClose(flag2[12]).t;
      if (existingUser) {
        stringResult = string(t["NR/zrG"]);
      } else {
        stringResult = string(t.nCB6Ga);
      }
      let tmp12 = null;
      const obj3 = { style: tmp4.container, children: items1 };
      if (!tmp3) {
        tmp12 = closure_6(tmp(tmp2[13]), {});
      }
      items1 = [tmp12, closure_6(tmp(flag2[14]), {}), closure_6(onClose(flag2[15]).ShieldSpotIllustration, {}), , ,];
      const obj4 = { style: tmp4.header, children: stringResult };
      items1[3] = closure_6(existingUser(flag2[16]), obj4);
      const obj5 = {
        style: tmp4.body,
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: stringResult1,
      };
      const Text = tmp5(tmp2[18]).Text;
      const intl2 = tmp5(tmp2[12]).intl;
      if (flag) {
        stringResult1 = intl2.string(tmp5(tmp2[12]).t.GDQgHL);
      } else {
        const format = intl2.format;
        const b0QzXe = tmp5(tmp2[12]).t.b0QzXe;
        if (underageMessage == null) {
          const intl3 = tmp5(tmp2[12]).intl;
          underageMessage = intl3.string(tmp5(tmp2[12]).t.WqEH4D);
        }
        const obj6 = { underageMessage, helpURL: tmpResult.getArticleURL(HelpdeskArticles.AGE_GATE) };
        tmpResult = existingUser(flag2[17]);
        stringResult1 = format(b0QzXe, obj6);
      }
      items1[4] = closure_6(Text, obj5);
      let tmp10Result = null;
      if (existingUser) {
        const obj7 = { children: items2 };
        const obj8 = {
          style: tmp4.body,
          variant: "text-md/medium",
          color: "interactive-text-default",
          children: intl4.format(onClose(flag2[12]).t["3axQdB"], { days: 30 }),
        };
        const Text2 = tmp5(tmp2[18]).Text;
        intl4 = tmp5(tmp2[12]).intl;
        items2 = [closure_6(Text2, obj8)];
        const obj9 = { style: tmp4.buttonWrapper, children: closure_6(Button, obj10) };
        obj10 = { onPress: onClose, text: intl5.string(onClose(flag2[12]).t.JhDw5o), grow: true };
        Button = tmp5(tmp2[19]).Button;
        intl5 = tmp5(tmp2[12]).intl;
        items2[1] = closure_6(View, obj9);
        tmp10Result = closure_8(closure_7, obj7);
      }
      items1[5] = tmp10Result;
      return closure_8(View, obj3);
    };
const result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

export default tmp3;
