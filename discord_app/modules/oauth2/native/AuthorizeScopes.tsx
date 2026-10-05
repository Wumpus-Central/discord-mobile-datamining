// discord_app/modules/oauth2/native/AuthorizeScopes.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import CircleCheckIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleXIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({
  scopesContainer: { flexDirection: "column", gap: 16 },
  scopes: { flexDirection: "column", gap: 16 },
  scopeContainer: { flexDirection: "row" },
  scope: { flex: 1, flexDirection: "column", justifyContent: "center" },
  iconWrapper: { marginRight: 12, width: 20, height: 20 },
  fakeScopeIcon: { opacity: 0.6 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let error;
      let isFake;
      let items;
      let items1;
      let text;
      let tmp10Result;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(22);
      ({ text, error, isFake } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== isFake) {
        let stringResult;
        const intl = intl3.intl;
        const string = intl.string;
        const t = intl3.t;
        if (isFake) {
          stringResult = string(t.OX8EMU);
        } else {
          stringResult = string(t["0lpCFG"]);
        }
        cResult[0] = isFake;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      let str = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str = ". " + error;
      }
      const combined = "" + tmp5 + ": " + text + str;
      if (cResult[2] === isFake) {
        let tmp9;
        if (cResult[3] === tmp4.fakeScopeIcon) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.iconWrapper) {
          let tmp14;
          if (cResult[6] === tmp9) {
            tmp14 = cResult[7];
          }
          let str3;
          if (isFake) {
            str3 = "text-muted";
          }
          if (cResult[8] === str3) {
            let tmp18;
            let tmp21;
            if (cResult[9] === text) {
              tmp18 = cResult[10];
            }
            if (cResult[11] !== error) {
              let tmp22 = null;
              if (null != error) {
                const obj2 = { variant: "text-xs/normal", children: error };
                tmp22 = React3(Text_Text.Text, obj2);
              }
              cResult[11] = error;
              cResult[12] = tmp22;
              tmp21 = tmp22;
            } else {
              tmp21 = cResult[12];
            }
            if (cResult[13] === tmp4.scope) {
              if (cResult[14] === tmp18) {
                let tmp24;
                if (cResult[15] === tmp21) {
                  tmp24 = cResult[16];
                }
                if (cResult[17] === tmp4.scopeContainer) {
                  if (cResult[18] === combined) {
                    if (cResult[19] === tmp14) {
                      let tmp28;
                      if (cResult[20] === tmp24) {
                        tmp28 = cResult[21];
                      }
                      return tmp28;
                    }
                  }
                }
                const obj3 = {
                  style: tmp4.scopeContainer,
                  accessible: true,
                  accessibilityLabel: combined,
                  children: items,
                };
                items = [tmp14, tmp24];
                const tmp31 = hasOwnProperty(View, obj3);
                cResult[17] = tmp4.scopeContainer;
                cResult[18] = combined;
                cResult[19] = tmp14;
                cResult[20] = tmp24;
                cResult[21] = tmp31;
                tmp28 = tmp31;
              }
            }
            const obj4 = { style: tmp4.scope, children: items1 };
            items1 = [tmp18, tmp21];
            const tmp27 = hasOwnProperty(View, obj4);
            cResult[13] = tmp4.scope;
            cResult[14] = tmp18;
            cResult[15] = tmp21;
            cResult[16] = tmp27;
            tmp24 = tmp27;
          }
          const obj5 = { variant: "text-md/normal", color: str3, children: text };
          const tmp20 = React3(Text_Text.Text, obj5);
          cResult[8] = str3;
          cResult[9] = text;
          cResult[10] = tmp20;
          tmp18 = tmp20;
        }
        const obj6 = {
          style: tmp4.iconWrapper,
          accessible: false,
          importantForAccessibility: "no-hide-descendants",
          children: tmp9,
        };
        const tmp17 = React3(View, obj6);
        cResult[5] = tmp4.iconWrapper;
        cResult[6] = tmp9;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
      if (isFake) {
        const obj7 = { style: tmp4.fakeScopeIcon, color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
        const CircleXIcon = CircleXIcon2.CircleXIcon;
        tmp10Result = React3(CircleXIcon, obj7);
      } else {
        const obj8 = { color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
        const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
        tmp10Result = React3(CircleCheckIcon, obj8);
      }
      cResult[2] = isFake;
      cResult[3] = tmp4.fakeScopeIcon;
      cResult[4] = tmp10Result;
      tmp9 = tmp10Result;
    }
  : (arg0) => {
      let error;
      let isFake;
      let items;
      let items1;
      let str;
      let stringResult;
      let text;
      let tmp10Result;
      let tmp6;
      ({ text, error, isFake } = arg0);
      const tmp = closure_6();
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (isFake) {
        stringResult = string(t.OX8EMU);
        tmp6 = require;
      } else {
        stringResult = string(t["0lpCFG"]);
        tmp6 = require;
      }
      const obj = {
        style: tmp.scopeContainer,
        accessible: true,
        accessibilityLabel: "" + stringResult + ": " + text + str,
        children: items,
      };
      str = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str = ". " + error;
      }
      const obj2 = {
        style: tmp.iconWrapper,
        accessible: false,
        importantForAccessibility: "no-hide-descendants",
        children: tmp10Result,
      };
      if (isFake) {
        const obj3 = { style: tmp.fakeScopeIcon, color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
        const CircleXIcon = tmp6(4797).CircleXIcon;
        tmp10Result = React3(CircleXIcon, obj3);
      } else {
        const obj4 = { color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
        const CircleCheckIcon = tmp6(4792).CircleCheckIcon;
        tmp10Result = React3(CircleCheckIcon, obj4);
      }
      items = [React3(View, obj2)];
      let str3;
      const obj5 = { style: tmp.scope, children: items1 };
      const Text = tmp6(4886).Text;
      if (isFake) {
        str3 = "text-muted";
      }
      items1 = [React3(Text, { variant: "text-md/normal", color: str3, children: text })];
      let tmp10Result2 = null;
      if (null != error) {
        const obj6 = { variant: "text-xs/normal", children: error };
        tmp10Result2 = React3(tmp6(4886).Text, obj6);
      }
      items1[1] = tmp10Result2;
      items[1] = hasOwnProperty(View, obj5);
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isTrustedName) => {
      let accountScopes;
      let application;
      let errors;
      let first;
      let integrationType;
      let intl2;
      let items;
      let items1;
      let requestedScopes;
      let obj = accountScopes(576);
      const cResult = obj.c(27);
      ({ application, accountScopes } = isTrustedName);
      ({ requestedScopes, integrationType, errors } = isTrustedName);
      isTrustedName = isTrustedName.isTrustedName;
      const tmp4 = undefined !== isTrustedName && isTrustedName;
      const tmp5 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
          const FAKE_SCOPES = accountScopes(dependencyMap[11]).FAKE_SCOPES;
          const random = Math.random();
          return FAKE_SCOPES[floor(Math, random * accountScopes(undefined, dependencyMap[11]).FAKE_SCOPES.length)];
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = errors(5984)(first);
      if (0 === accountScopes.length) {
        return null;
      } else {
        let tmp8;
        if (cResult[1] !== tmp7) {
          const tmp7Result = tmp7();
          cResult[1] = tmp7;
          cResult[2] = tmp7Result;
          tmp8 = tmp7Result;
        } else {
          tmp8 = cResult[2];
        }
        const t = accountScopes(1126).t;
        const tmp10 = tmp4 ? t.PZpY9c : t["1Hz+Sl"];
        if (cResult[3] === integrationType) {
          let tmp11;
          if (cResult[4] === requestedScopes) {
            tmp11 = cResult[5];
          }
          if (cResult[6] === application.name) {
            let tmp14;
            let tmp16;
            if (cResult[7] === tmp10) {
              tmp14 = cResult[8];
            }
            if (cResult[9] !== tmp14) {
              const obj2 = { variant: "heading-sm/normal", color: "text-default", children: tmp14 };
              const tmp18 = closure_4(accountScopes(4886).Text, obj2);
              cResult[9] = tmp14;
              cResult[10] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === accountScopes) {
              let tmp20;
              let tmp22;
              let tmp26;
              if (cResult[12] === errors) {
                tmp20 = cResult[13];
              }
              if (cResult[14] !== tmp11) {
                let tmp23 = tmp11;
                if (tmp23) {
                  const obj3 = { text: intl2.string(accountScopes(1126).t.Ls2XRq) };
                  intl2 = accountScopes(1126).intl;
                  tmp23 = closure_4(closure_7, obj3);
                }
                cResult[14] = tmp11;
                cResult[15] = tmp23;
                tmp22 = tmp23;
              } else {
                tmp22 = cResult[15];
              }
              if (cResult[16] !== tmp8) {
                const obj4 = { text: tmp8, isFake: true };
                const tmp29 = closure_4(closure_7, obj4);
                cResult[16] = tmp8;
                cResult[17] = tmp29;
                tmp26 = tmp29;
              } else {
                tmp26 = cResult[17];
              }
              if (cResult[18] === tmp5.scopes) {
                if (cResult[19] === tmp22) {
                  if (cResult[20] === tmp26) {
                    let tmp30;
                    if (cResult[21] === tmp20) {
                      tmp30 = cResult[22];
                    }
                    if (cResult[23] === tmp5.scopesContainer) {
                      if (cResult[24] === tmp30) {
                        let tmp34;
                        if (cResult[25] === tmp16) {
                          tmp34 = cResult[26];
                        }
                        return tmp34;
                      }
                    }
                    const obj5 = { style: tmp13, children: items };
                    items = [tmp16, tmp30];
                    const tmp37 = closure_5(View, obj5);
                    cResult[23] = tmp5.scopesContainer;
                    cResult[24] = tmp30;
                    cResult[25] = tmp16;
                    cResult[26] = tmp37;
                    tmp34 = tmp37;
                  }
                }
              }
              const obj6 = { style: tmp19, children: items1 };
              items1 = [tmp20, tmp22, tmp26];
              const tmp33 = closure_5(View, obj6);
              cResult[18] = tmp5.scopes;
              cResult[19] = tmp22;
              cResult[20] = tmp26;
              cResult[21] = tmp20;
              cResult[22] = tmp33;
              tmp30 = tmp33;
            }
            const mapped = accountScopes.map((item) => {
              let closure_0 = item;
              let obj = accountScopes(dependencyMap[11]);
              const scopeNames = obj.getScopeNames(item, closure_0);
              return scopeNames.map((text, index) => {
                let tmp3;
                const obj = { text, error: tmp3 };
                tmp3 = undefined;
                if (0 === index) {
                  let first;
                  if (errors != null) {
                    if (tmp4[item] != null) {
                      first = tmp8[0];
                    }
                  }
                  tmp3 = first;
                }
                return React3(closure_7, obj, "" + item + "-" + index);
              });
            });
            const flatResult = mapped.flat();
            cResult[11] = accountScopes;
            cResult[12] = errors;
            cResult[13] = flatResult;
            tmp20 = flatResult;
          }
          const intl = accountScopes(1126).intl;
          const obj7 = { application: application.name };
          const formatResult = intl.format(tmp10, obj7);
          cResult[6] = application.name;
          cResult[7] = tmp10;
          cResult[8] = formatResult;
          tmp14 = formatResult;
        }
        const hasItem =
          integrationType === accountScopes(8708).ApplicationIntegrationType.USER_INSTALL &&
          requestedScopes.includes(accountScopes(8015).OAuth2Scopes.APPLICATIONS_COMMANDS);
        cResult[3] = integrationType;
        cResult[4] = requestedScopes;
        cResult[5] = hasItem;
        tmp11 = hasItem;
      }
    }
  : (accountScopes) => {
      let application;
      let integrationType;
      let intl;
      let intl2;
      let isTrustedName;
      let items;
      let items1;
      let obj3;
      let requestedScopes;
      let tmp3;
      accountScopes = accountScopes.accountScopes;
      ({ requestedScopes, errors: importDefault, isTrustedName } = accountScopes);
      ({ application, integrationType } = accountScopes);
      if (isTrustedName === undefined) {
        isTrustedName = false;
      }
      const tmp = closure_6();
      if (0 === accountScopes.length) {
        return null;
      } else {
        let PZpY9c;
        let tmp5;
        const tmp3Result = tmp3();
        const t = accountScopes(1126).t;
        if (isTrustedName) {
          PZpY9c = t.PZpY9c;
          tmp5 = tmp15;
        } else {
          PZpY9c = t["1Hz+Sl"];
          tmp5 = tmp15;
        }
        let hasItem =
          integrationType === tmp5(8708).ApplicationIntegrationType.USER_INSTALL &&
          requestedScopes.includes(tmp5(8015).OAuth2Scopes.APPLICATIONS_COMMANDS);
        let obj = { style: tmp.scopesContainer, children: items };
        const obj2 = { variant: "heading-sm/normal", color: "text-default", children: intl.format(PZpY9c, obj3) };
        const Text = tmp5(4886).Text;
        intl = tmp5(1126).intl;
        obj3 = { application: application.name };
        items = [closure_4(Text, obj2)];
        const obj4 = { style: tmp.scopes, children: items1 };
        const mapped = accountScopes.map((item) => {
          let closure_0 = item;
          let obj = accountScopes(dependencyMap[11]);
          const scopeNames = obj.getScopeNames(item, closure_0);
          return scopeNames.map((text, index) => {
            let tmp3;
            const obj = { text, error: tmp3 };
            tmp3 = undefined;
            if (0 === index) {
              let first;
              if (importDefault != null) {
                if (tmp4[item] != null) {
                  first = tmp8[0];
                }
              }
              tmp3 = first;
            }
            return React3(closure_7, obj, "" + item + "-" + index);
          });
        });
        items1 = [mapped.flat(), ,];
        if (hasItem) {
          const obj5 = { text: intl2.string(tmp5(1126).t.Ls2XRq) };
          intl2 = tmp5(1126).intl;
          hasItem = closure_4(closure_7, obj5);
        }
        items1[1] = hasItem;
        const obj6 = { text: tmp3Result, isFake: true };
        items1[2] = closure_4(closure_7, obj6);
        items[1] = closure_5(View, obj4);
        return closure_5(View, obj);
      }
    };
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default tmp4;
