// discord_app/modules/in_app_reports/native/components/InAppReportsBottomButton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import _modDef2625 from "../../../report_to_mod/ReportToMod.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let button;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 },
  paddingHorizontal: { paddingHorizontal: 16 },
  divider: obj2,
  descriptionText: { lineHeight: 16, textAlign: "center", marginBottom: 12 },
  errorText: obj3,
};
obj2 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = {
  color: nativeDefault.unsafe_rawColors.RED_400,
  fontSize: 12,
  lineHeight: 16,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  textAlign: "center",
  marginTop: 12,
};
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (button) => {
      let disabled;
      let hasError;
      let isModeratorReport;
      let items;
      let items1;
      const obj = react2;
      const cResult = obj.c(34);
      button = button.button;
      const onPress = button.onPress;
      ({ disabled, hasError, isModeratorReport } = button);
      const tmp4 = closure_6();
      if (null == button) {
        return null;
      } else {
        let first;
        let str3;
        let tmp19;
        let tmp22;
        const _Symbol5 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl8.intl;
          const stringResult = intl.string(intl8.t.i4jeWR);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if ("submit" === button.type) {
          let tmp12;
          if (isModeratorReport) {
            let tmp16;
            const _Symbol4 = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = intl8.intl;
              const stringResult1 = intl6.string(_modDef2625.ZUyreS);
              cResult[1] = stringResult1;
              tmp16 = stringResult1;
            } else {
              tmp16 = cResult[1];
            }
            tmp12 = tmp16;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = intl8.intl;
              const stringResult2 = intl4.string(intl8.t["G+vU89"]);
              cResult[2] = stringResult2;
              tmp12 = stringResult2;
            } else {
              tmp12 = cResult[2];
            }
            const _Symbol3 = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = intl8.intl;
              const formatResult = intl5.format(intl8.t.Q0tSKT, {});
              cResult[3] = formatResult;
            }
          }
          str3 = "destructive";
          first = tmp12;
        } else if ("next" === button.type) {
          let tmp10;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = intl8.intl;
            const stringResult3 = intl3.string(intl8.t.PDTjLN);
            cResult[4] = stringResult3;
            tmp10 = stringResult3;
          } else {
            tmp10 = cResult[4];
          }
          first = tmp10;
        } else if ("cancel" === button.type) {
          let tmp8;
          const _Symbol6 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl8.intl;
            const stringResult4 = intl2.string(intl8.t["ETE/oC"]);
            cResult[5] = stringResult4;
            tmp8 = stringResult4;
          } else {
            tmp8 = cResult[5];
          }
          str3 = "secondary";
          first = tmp8;
        }
        if (cResult[6] !== isModeratorReport) {
          let stringResult5;
          const intl7 = intl8.intl;
          const string = intl7.string;
          if (isModeratorReport) {
            stringResult5 = string(_modDef2625.psKFdJ);
          } else {
            stringResult5 = string(intl8.t.h6D8Vy);
          }
          cResult[6] = isModeratorReport;
          cResult[7] = stringResult5;
          tmp19 = stringResult5;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== tmp4.divider) {
          const obj2 = { style: tmp4.divider };
          const tmp25 = React3(View, obj2);
          cResult[8] = tmp4.divider;
          cResult[9] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[9];
        }
        if (cResult[10] === tmp7) {
          let tmp26;
          if (cResult[11] === tmp4.descriptionText) {
            tmp26 = cResult[12];
          }
          if (cResult[13] === button) {
            let tmp29;
            if (cResult[14] === onPress) {
              tmp29 = cResult[15];
            }
            if (cResult[16] === first) {
              if (cResult[17] === str3) {
                if (cResult[18] === disabled) {
                  let tmp30;
                  let tmp33;
                  if (cResult[19] === tmp29) {
                    tmp30 = cResult[20];
                  }
                  if (cResult[21] === tmp19) {
                    if (cResult[22] === hasError) {
                      let tmp32;
                      if (cResult[23] === tmp4.errorText) {
                        tmp32 = cResult[24];
                      }
                      if (cResult[25] === tmp4.paddingHorizontal) {
                        if (cResult[26] === tmp26) {
                          if (cResult[27] === tmp30) {
                            let tmp35;
                            if (cResult[28] === tmp32) {
                              tmp35 = cResult[29];
                            }
                            if (cResult[30] === tmp4.container) {
                              if (cResult[31] === tmp22) {
                                let tmp38;
                                if (cResult[32] === tmp35) {
                                  tmp38 = cResult[33];
                                }
                                return tmp38;
                              }
                            }
                            class D {
                              constructor() {
                                return onPress(button);
                              }
                            }
                            const obj3 = { style: tmp4.container, children: items };
                            items = [tmp22, tmp35];
                            const tmp40 = hasOwnProperty(View, obj3);
                            cResult[30] = tmp4.container;
                            cResult[31] = tmp22;
                            cResult[32] = tmp35;
                            cResult[33] = tmp40;
                            tmp38 = tmp40;
                          }
                        }
                      }
                      class D {
                        constructor() {
                          return onPress(button);
                        }
                      }
                      const obj4 = { style: tmp4.paddingHorizontal, children: items1 };
                      items1 = [tmp26, tmp30, tmp32];
                      const tmp37 = hasOwnProperty(View, obj4);
                      cResult[25] = tmp4.paddingHorizontal;
                      cResult[26] = tmp26;
                      cResult[27] = tmp30;
                      cResult[28] = tmp32;
                      cResult[29] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                  class D {
                    constructor() {
                      return onPress(button);
                    }
                  }
                  if (hasError) {
                    const obj5 = { style: null, children: tmp19 };
                    class D {
                      constructor() {
                        return onPress(button);
                      }
                    }
                    tmp33 = React3(native.LegacyText, obj5);
                  }
                  cResult[21] = tmp19;
                  cResult[22] = hasError;
                  cResult[23] = tmp4.errorText;
                  cResult[24] = tmp33;
                  tmp32 = tmp33;
                }
              }
            }
            class D {
              constructor() {
                return onPress(button);
              }
            }
            const obj6 = { disabled, onPress: tmp29, text: first, variant: str3 };
            const tmp31 = React3(components_Button_Button.Button, obj6);
            cResult[16] = first;
            cResult[17] = str3;
            cResult[18] = disabled;
            cResult[19] = tmp29;
            cResult[20] = tmp31;
            tmp30 = tmp31;
          }
          class D {
            constructor() {
              return onPress(button);
            }
          }
          cResult[13] = button;
          cResult[14] = onPress;
          cResult[15] = D;
          tmp29 = D;
        }
        let tmp27 = null;
        if (null != tmp7) {
          const obj7 = { style: null, variant: "text-xs/medium", color: "text-default", children: tmp7 };
          class D {
            constructor() {
              return onPress(button);
            }
          }
          tmp27 = React3(Text_Text.Text, obj7);
        }
        cResult[10] = tmp7;
        cResult[11] = tmp4.descriptionText;
        cResult[12] = tmp27;
        tmp26 = tmp27;
      }
    }
  : (button) => {
      let closure_129_1;
      let disabled;
      let hasError;
      let isModeratorReport;
      let items;
      let items1;
      button = button.button;
      ({ onPress: closure_129_1, isModeratorReport } = button);
      ({ disabled, hasError } = button);
      const tmp = closure_6();
      if (null == button) {
        return null;
      } else {
        let str2;
        let stringResult2;
        let string2Result;
        const string3 = intl8.intl.string;
        if ("submit" === button.type) {
          let stringResult;
          const intl2 = intl8.intl;
          const string = intl2.string;
          if (isModeratorReport) {
            stringResult = string(_modDef2625.ZUyreS);
          } else {
            const stringResult1 = string(intl8.t["G+vU89"]);
            const intl3 = intl8.intl;
            stringResult = stringResult1;
            intl3.format(intl8.t.Q0tSKT, {});
          }
          str2 = "destructive";
          stringResult2 = stringResult;
        } else if ("next" === button.type) {
          const intl = intl8.intl;
          stringResult2 = intl.string(intl8.t.PDTjLN);
        } else {
          stringResult2 = tmp17;
          if ("cancel" === button.type) {
            const intl5 = intl8.intl;
            stringResult2 = intl5.string(intl8.t["ETE/oC"]);
            str2 = "secondary";
          }
        }
        const intl4 = intl8.intl;
        const string2 = intl4.string;
        if (isModeratorReport) {
          string2Result = string2(_modDef2625.psKFdJ);
        } else {
          string2Result = string2(intl8.t.h6D8Vy);
        }
        const obj = { style: tmp.container, children: items };
        const obj2 = { style: tmp.divider };
        items = [React3(View, obj2)];
        let tmp12Result = null;
        const obj3 = { style: tmp.paddingHorizontal, children: items1 };
        if (null != tmp3) {
          const obj4 = { style: tmp.descriptionText, variant: "text-xs/medium", color: "text-default", children: tmp3 };
          tmp12Result = React3(Text_Text.Text, obj4);
        }
        items1 = [tmp12Result, ,];
        const obj5 = {
          disabled,
          onPress() {
            return closure_1_1(button);
          },
          text: stringResult2,
          variant: str2,
        };
        items1[1] = React3(components_Button_Button.Button, obj5);
        let tmp12Result2 = null;
        if (hasError) {
          const obj6 = { style: tmp.errorText, children: string2Result };
          tmp12Result2 = React3(native.LegacyText, obj6);
        }
        items1[2] = tmp12Result2;
        items[1] = hasOwnProperty(View, obj3);
        return hasOwnProperty(View, obj);
      }
    };
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default tmp5;
