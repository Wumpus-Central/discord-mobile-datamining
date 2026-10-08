// === Module 13408: InAppReportsBottomButton ===

// Module 13408 (InAppReportsBottomButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import _modDef2697 from "module_2697" /* 2697 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 }, paddingHorizontal: { paddingHorizontal: 16 }, divider: { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 }, descriptionText: { lineHeight: 16, textAlign: "center", marginBottom: 12 }, errorText: null };
let obj3 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 };
obj2.errorText = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: fn(1096).Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: fn(1096).Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InAppReportsBottomButton(button) {
  const cResult = c.c(34);
  button = button.button;
  const onPress = button.onPress;
  ({ disabled, hasError, isModeratorReport } = button);
  const tmp4 = closure_6();
  if (null == button) {
    return null;
  } else {
    const _Symbol5 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.i4jeWR);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if ("submit" === button.type) {
      if (!isModeratorReport) {
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult1 = intl4.string(util.t["G+vU89"]);
          cResult[2] = stringResult1;
        }
        const _Symbol3 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = util.intl;
          const formatResult = intl5.format(util.t.Q0tSKT, {});
          cResult[3] = formatResult;
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = util.intl;
        const stringResult2 = intl6.string(_modDef2697.ZUyreS);
        cResult[1] = stringResult2;
      }
    } else {
      if ("next" === button.type) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult3 = intl3.string(util.t.PDTjLN);
          cResult[4] = stringResult3;
          let tmp10 = stringResult3;
        } else {
          tmp10 = cResult[4];
        }
        first = tmp10;
      } else if ("cancel" === button.type) {
        const _Symbol6 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult4 = intl2.string(util.t["ETE/oC"]);
          cResult[5] = stringResult4;
          let tmp8 = stringResult4;
        } else {
          tmp8 = cResult[5];
        }
        first = tmp8;
      }
      if (cResult[6] !== isModeratorReport) {
        const intl7 = util.intl;
        const string = intl7.string;
        if (isModeratorReport) {
          let stringResult5 = string(_modDef2697.psKFdJ);
        } else {
          stringResult5 = string(util.t.h6D8Vy);
        }
        cResult[6] = isModeratorReport;
        cResult[7] = stringResult5;
      } else {
        if (cResult[8] !== tmp4.divider) {
          const obj2 = { style: tmp4.divider };
          const tmp29 = React4(View, obj2);
          cResult[8] = tmp4.divider;
          cResult[9] = tmp29;
          let tmp26 = tmp29;
        } else {
          tmp26 = cResult[9];
        }
        if (cResult[10] === tmp7) {
          if (cResult[11] === tmp4.descriptionText) {
            let tmp30 = cResult[12];
          }
          if (cResult[13] === button) {
            if (cResult[14] === onPress) {
              let tmp33 = cResult[15];
            }
            if (cResult[16] === first) {
              if (cResult[17] === str3) {
                if (cResult[18] === disabled) {
                  if (cResult[19] === tmp33) {
                    let tmp34 = cResult[20];
                  }
                  if (cResult[21] === tmp22) {
                    if (cResult[22] === hasError) {
                      if (cResult[23] === tmp4.errorText) {
                        let tmp36 = cResult[24];
                      }
                      if (cResult[25] === tmp4.paddingHorizontal) {
                        if (cResult[26] === tmp30) {
                          if (cResult[27] === tmp34) {
                            if (cResult[28] === tmp36) {
                              let tmp39 = cResult[29];
                            }
                            if (cResult[30] === tmp4.container) {
                              if (cResult[31] === tmp26) {
                                if (cResult[32] === tmp39) {
                                  let tmp42 = cResult[33];
                                }
                                return tmp42;
                              }
                            }
                            class D {
                              constructor() {
                                return onPress(button);
                              }
                            }
                            const obj3 = { style: tmp4.container, children: null };
                            const items = [tmp26, tmp39];
                            obj3.children = items;
                            const tmp44 = hasOwnProperty(View, obj3);
                            cResult[30] = tmp4.container;
                            cResult[31] = tmp26;
                            cResult[32] = tmp39;
                            cResult[33] = tmp44;
                            tmp42 = tmp44;
                          }
                        }
                      }
                      class D {
                        constructor() {
                          return onPress(button);
                        }
                      }
                      const obj4 = { style: tmp4.paddingHorizontal, children: null };
                      const items1 = [tmp30, tmp34, tmp36];
                      obj4.children = items1;
                      const tmp41 = hasOwnProperty(View, obj4);
                      cResult[25] = tmp4.paddingHorizontal;
                      cResult[26] = tmp30;
                      cResult[27] = tmp34;
                      cResult[28] = tmp36;
                      cResult[29] = tmp41;
                      tmp39 = tmp41;
                    }
                  }
                  class D {
                    constructor() {
                      return onPress(button);
                    }
                  }
                  if (hasError) {
                    const obj5 = { style: null, children: null };
                    class D {
                      constructor() {
                        return onPress(button);
                      }
                    }
                    obj5.children = tmp22;
                    const tmp37 = React4(native.LegacyText, obj5);
                  }
                  cResult[21] = tmp22;
                  cResult[22] = hasError;
                  cResult[23] = tmp4.errorText;
                  cResult[24] = tmp37;
                  tmp36 = tmp37;
                }
              }
            }
            class D {
              constructor() {
                return onPress(button);
              }
            }
            const obj6 = { disabled, onPress: tmp33, text: first, variant: str3 };
            const tmp35 = React4(components_Button_Button.Button, obj6);
            cResult[16] = first;
            cResult[17] = str3;
            cResult[18] = disabled;
            cResult[19] = tmp33;
            cResult[20] = tmp35;
            tmp34 = tmp35;
          }
          class D {
            constructor() {
              return onPress(button);
            }
          }
          cResult[13] = button;
          cResult[14] = onPress;
          cResult[15] = D;
          tmp33 = D;
        }
        let tmp31 = null;
        if (null != tmp7) {
          const obj7 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
          class D {
            constructor() {
              return onPress(button);
            }
          }
          obj7.children = tmp7;
          tmp31 = React4(Text_Text.Text, obj7);
        }
        cResult[10] = tmp7;
        cResult[11] = tmp4.descriptionText;
        cResult[12] = tmp31;
        tmp30 = tmp31;
      }
    }
  }
}) : (function InAppReportsBottomButton(button) {
  button = button.button;
  ({ onPress: importDefault, isModeratorReport } = button);
  ({ disabled, hasError } = button);
  const tmp = closure_6();
  if (null == button) {
    return null;
  } else {
    const string3 = util.intl.string;
    if ("submit" === button.type) {
      const intl2 = util.intl;
      const string = intl2.string;
      if (isModeratorReport) {
        let stringResult = string(_modDef2697.ZUyreS);
      } else {
        const intl3 = util.intl;
        const stringResult1 = string(util.t["G+vU89"]);
        stringResult = stringResult1;
        const formatResult = intl3.format(util.t.Q0tSKT, {});
      }
    } else {
      if ("next" === button.type) {
        const intl = util.intl;
        let stringResult2 = intl.string(util.t.PDTjLN);
      } else {
        stringResult2 = tmp19;
        if ("cancel" === button.type) {
          const intl5 = util.intl;
          stringResult2 = intl5.string(util.t["ETE/oC"]);
        }
      }
      const intl4 = util.intl;
      const string2 = intl4.string;
      if (isModeratorReport) {
        let string2Result = string2(_modDef2697.psKFdJ);
      } else {
        string2Result = string2(util.t.h6D8Vy);
      }
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.divider };
      const items = [React4(View, obj2), ];
      const obj3 = { style: tmp.paddingHorizontal, children: null };
      let tmp14Result = null;
      if (null != tmp3) {
        const obj4 = { style: tmp.descriptionText, variant: "text-xs/medium", color: "text-default", children: tmp3 };
        tmp14Result = React4(Text_Text.Text, obj4);
      }
      const items1 = [tmp14Result, , ];
      const obj5 = {
        disabled,
        onPress() {
              return importDefault(button);
            },
        text: stringResult2,
        variant: str2
      };
      items1[1] = React4(components_Button_Button.Button, obj5);
      let tmp14Result2 = null;
      if (hasError) {
        const obj6 = { style: tmp.errorText, children: string2Result };
        tmp14Result2 = React4(native.LegacyText, obj6);
      }
      items1[2] = tmp14Result2;
      obj3.children = items1;
      items[1] = hasOwnProperty(View, obj3);
      obj.children = items;
      return hasOwnProperty(View, obj);
    }
  }
});