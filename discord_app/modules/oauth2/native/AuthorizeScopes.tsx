// discord_app/modules/oauth2/native/AuthorizeScopes.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleXIcon from "../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({
  scopesContainer: { flexDirection: "column", gap: 16 },
  scopes: { flexDirection: "column", gap: 16 },
  scopeContainer: { flexDirection: "row" },
  scope: { flex: 1, flexDirection: "column", justifyContent: "center" },
  iconWrapper: { marginRight: 12, width: 20, height: 20 },
  fakeScopeIcon: { opacity: 0.6 },
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Scope(arg0) {
      const cResult = c.c(22);
      ({ text, error, isFake } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== isFake) {
        const intl = util.intl;
        const string = intl.string;
        let OX8EMU = util.t;
        if (isFake) {
          OX8EMU = OX8EMU.OX8EMU;
          let stringResult = string(OX8EMU);
        } else {
          stringResult = string(OX8EMU["0lpCFG"]);
        }
        cResult[0] = isFake;
        cResult[1] = stringResult;
      } else {
        let str2 = "";
        if (null != error) {
          const _HermesInternal = HermesInternal;
          str2 = ". " + error;
        }
        const _HermesInternal2 = HermesInternal;
        const combined = "" + tmp5 + ": " + text + str2;
        if (cResult[2] === isFake) {
          if (cResult[3] === tmp4.fakeScopeIcon) {
            if (cResult[5] === tmp4.iconWrapper) {
              if (cResult[6] === tmp15) {
                let tmp21 = cResult[7];
              }
              let str6;
              if (isFake) {
                str6 = "text-muted";
              }
              if (cResult[8] === str6) {
                if (cResult[9] === text) {
                  let tmp25 = cResult[10];
                }
                if (cResult[11] !== error) {
                  let tmp29 = null;
                  if (null != error) {
                    const obj2 = { variant: "text-xs/normal", children: error };
                    tmp29 = React4(Text_Text.Text, obj2);
                  }
                  cResult[11] = error;
                  cResult[12] = tmp29;
                  let tmp28 = tmp29;
                } else {
                  tmp28 = cResult[12];
                }
                if (cResult[13] === tmp4.scope) {
                  if (cResult[14] === tmp25) {
                    if (cResult[15] === tmp28) {
                      let tmp31 = cResult[16];
                    }
                    if (cResult[17] === tmp4.scopeContainer) {
                      if (cResult[18] === combined) {
                        if (cResult[19] === tmp21) {
                          if (cResult[20] === tmp31) {
                            let tmp35 = cResult[21];
                          }
                          return tmp35;
                        }
                      }
                    }
                    const obj3 = {
                      style: tmp4.scopeContainer,
                      accessible: true,
                      accessibilityLabel: combined,
                      children: null,
                    };
                    const items = [tmp21, tmp31];
                    obj3.children = items;
                    const tmp38 = hasOwnProperty(View, obj3);
                    cResult[17] = tmp4.scopeContainer;
                    cResult[18] = combined;
                    cResult[19] = tmp21;
                    cResult[20] = tmp31;
                    cResult[21] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const obj4 = { style: tmp4.scope, children: null };
                const items1 = [tmp25, tmp28];
                obj4.children = items1;
                const tmp34 = hasOwnProperty(View, obj4);
                cResult[13] = tmp4.scope;
                cResult[14] = tmp25;
                cResult[15] = tmp28;
                cResult[16] = tmp34;
                tmp31 = tmp34;
              }
              const obj5 = { variant: "text-md/normal", color: str6, children: text };
              const tmp27 = React4(Text_Text.Text, obj5);
              cResult[8] = str6;
              cResult[9] = text;
              cResult[10] = tmp27;
              tmp25 = tmp27;
            }
            const obj6 = {
              style: tmp4.iconWrapper,
              accessible: false,
              importantForAccessibility: "no-hide-descendants",
              children: cResult[4],
            };
            const tmp24 = React4(View, obj6);
            cResult[5] = tmp4.iconWrapper;
            cResult[6] = cResult[4];
            cResult[7] = tmp24;
            tmp21 = tmp24;
          }
        }
        if (isFake) {
          const obj7 = { style: tmp4.fakeScopeIcon, color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
          let tmp16Result = React4(CircleXIcon.CircleXIcon, obj7);
        } else {
          const obj8 = { color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
          tmp16Result = React4(CircleCheckIcon.CircleCheckIcon, obj8);
        }
        cResult[2] = isFake;
        cResult[3] = tmp4.fakeScopeIcon;
        cResult[4] = tmp16Result;
      }
    }
  : function Scope(arg0) {
      ({ text, error, isFake } = arg0);
      const tmp = closure_6();
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isFake) {
        let stringResult = string(t.OX8EMU);
        let tmp6 = require;
      } else {
        stringResult = string(t["0lpCFG"]);
        tmp6 = require;
      }
      const obj = { style: tmp.scopeContainer, accessible: true, accessibilityLabel: null, children: null };
      let str = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str = ". " + error;
      }
      obj.accessibilityLabel = "" + stringResult + ": " + text + str;
      const obj2 = {
        style: tmp.iconWrapper,
        accessible: false,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      if (isFake) {
        const obj3 = { style: tmp.fakeScopeIcon, color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
        let tmp10Result = React4(tmp6(4998).CircleXIcon, obj3);
      } else {
        const obj4 = { color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
        tmp10Result = React4(tmp6(4993).CircleCheckIcon, obj4);
      }
      obj2.children = tmp10Result;
      const items = [React4(View, obj2)];
      const obj5 = { style: tmp.scope, children: null };
      let str3;
      if (isFake) {
        str3 = "text-muted";
      }
      const items1 = [React4(tmp6(5087).Text, { variant: "text-md/normal", color: str3, children: text })];
      let tmp10Result2 = null;
      if (null != error) {
        const obj6 = { variant: "text-xs/normal", children: error };
        tmp10Result2 = React4(tmp6(5087).Text, obj6);
      }
      items1[1] = tmp10Result2;
      obj5.children = items1;
      items[1] = hasOwnProperty(View, obj5);
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AuthorizeScopes(isTrustedName) {
      const cResult = accountScopes(576).c(27);
      ({ application, accountScopes } = isTrustedName);
      ({ requestedScopes, integrationType, errors } = isTrustedName);
      isTrustedName = isTrustedName.isTrustedName;
      const tmp5 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
          const random = Math.random();
          return accountScopes(9199).FAKE_SCOPES[
            Math.floor(Math, random * accountScopes(undefined, 9199).FAKE_SCOPES.length)
          ];
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = errors(6176)(first);
      if (0 === accountScopes.length) {
        return null;
      } else {
        if (cResult[1] !== tmp7) {
          const tmp7Result = tmp7();
          cResult[1] = tmp7;
          cResult[2] = tmp7Result;
          let tmp8 = tmp7Result;
        } else {
          tmp8 = cResult[2];
        }
        const t = accountScopes(1126).t;
        const tmp10 = tmp4 ? t.PZpY9c : t["1Hz+Sl"];
        if (cResult[3] === integrationType) {
          if (cResult[4] === requestedScopes) {
            let tmp11 = cResult[5];
          }
          if (cResult[6] === application.name) {
            if (cResult[7] === tmp10) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] !== tmp14) {
              const obj2 = { variant: "heading-sm/normal", color: "text-default", children: tmp14 };
              const tmp18 = closure_4(accountScopes(5087).Text, obj2);
              cResult[9] = tmp14;
              cResult[10] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[10];
            }
            if (cResult[11] === accountScopes) {
              if (cResult[12] === errors) {
                let tmp20 = cResult[13];
              }
              if (cResult[14] !== tmp11) {
                let tmp23 = tmp11;
                if (tmp11) {
                  const obj3 = { text: null };
                  const intl2 = accountScopes(1126).intl;
                  obj3.text = intl2.string(accountScopes(1126).t.Ls2XRq);
                  tmp23 = closure_4(closure_7, obj3);
                }
                cResult[14] = tmp11;
                cResult[15] = tmp23;
                let tmp22 = tmp23;
              } else {
                tmp22 = cResult[15];
              }
              if (cResult[16] !== tmp8) {
                const obj4 = { text: tmp8, isFake: true };
                const tmp29 = closure_4(closure_7, obj4);
                cResult[16] = tmp8;
                cResult[17] = tmp29;
                let tmp26 = tmp29;
              } else {
                tmp26 = cResult[17];
              }
              if (cResult[18] === tmp5.scopes) {
                if (cResult[19] === tmp22) {
                  if (cResult[20] === tmp26) {
                    if (cResult[21] === tmp20) {
                      let tmp30 = cResult[22];
                    }
                    if (cResult[23] === tmp5.scopesContainer) {
                      if (cResult[24] === tmp30) {
                        if (cResult[25] === tmp16) {
                          let tmp34 = cResult[26];
                        }
                        return tmp34;
                      }
                    }
                    const obj5 = { style: tmp13, children: null };
                    const items = [tmp16, tmp30];
                    obj5.children = items;
                    const tmp37 = closure_5(View, obj5);
                    cResult[23] = tmp5.scopesContainer;
                    cResult[24] = tmp30;
                    cResult[25] = tmp16;
                    cResult[26] = tmp37;
                    tmp34 = tmp37;
                  }
                }
              }
              const obj6 = { style: tmp19, children: null };
              const items1 = [tmp20, tmp22, tmp26];
              obj6.children = items1;
              const tmp33 = closure_5(View, obj6);
              cResult[18] = tmp5.scopes;
              cResult[19] = tmp22;
              cResult[20] = tmp26;
              cResult[21] = tmp20;
              cResult[22] = tmp33;
              tmp30 = tmp33;
            }
            const mapped = accountScopes.map((item) => {
              closure_0 = item;
              const scopeNames = accountScopes(9199).getScopeNames(item, closure_0);
              return scopeNames.map((text, index) => {
                const obj = { text, error: null };
                let tmp3;
                if (0 === index) {
                  let first;
                  if (errors != null) {
                    if (tmp4[closure_0] != null) {
                      first = tmp8[0];
                    }
                  }
                  tmp3 = first;
                }
                obj.error = tmp3;
                return React4(closure_7, obj, "" + closure_0 + "-" + index);
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
        let hasItem = integrationType === accountScopes(9207).ApplicationIntegrationType.USER_INSTALL;
        if (hasItem) {
          hasItem = requestedScopes.includes(accountScopes(8441).OAuth2Scopes.APPLICATIONS_COMMANDS);
        }
        cResult[3] = integrationType;
        cResult[4] = requestedScopes;
        cResult[5] = hasItem;
        tmp11 = hasItem;
      }
      let obj = accountScopes(576);
      tmp4 = undefined !== isTrustedName && isTrustedName;
    }
  : function AuthorizeScopes(accountScopes) {
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
        const t = accountScopes(1126).t;
        if (isTrustedName) {
          let PZpY9c = t.PZpY9c;
          let tmp5 = tmp15;
        } else {
          PZpY9c = t["1Hz+Sl"];
          tmp5 = tmp15;
        }
        let hasItem = integrationType === tmp5(9207).ApplicationIntegrationType.USER_INSTALL;
        if (hasItem) {
          hasItem = requestedScopes.includes(tmp5(8441).OAuth2Scopes.APPLICATIONS_COMMANDS);
        }
        let obj = { style: tmp.scopesContainer, children: null };
        const obj2 = { variant: "heading-sm/normal", color: "text-default", children: null };
        const intl = tmp5(1126).intl;
        const obj3 = { application: application.name };
        obj2.children = intl.format(PZpY9c, obj3);
        const items = [closure_4(tmp5(5087).Text, obj2)];
        const obj4 = { style: tmp.scopes, children: null };
        const mapped = accountScopes.map((item) => {
          closure_0 = item;
          const scopeNames = accountScopes(9199).getScopeNames(item, closure_0);
          return scopeNames.map((text, index) => {
            const obj = { text, error: null };
            let tmp3;
            if (0 === index) {
              let first;
              if (importDefault != null) {
                if (tmp4[closure_0] != null) {
                  first = tmp8[0];
                }
              }
              tmp3 = first;
            }
            obj.error = tmp3;
            return React4(closure_7, obj, "" + closure_0 + "-" + index);
          });
        });
        const items1 = [mapped.flat(), ,];
        if (hasItem) {
          const obj5 = { text: null };
          const intl2 = tmp5(1126).intl;
          obj5.text = intl2.string(tmp5(1126).t.Ls2XRq);
          hasItem = closure_4(closure_7, obj5);
        }
        items1[1] = hasItem;
        const obj6 = { text: tmp3(), isFake: true };
        items1[2] = closure_4(closure_7, obj6);
        obj4.children = items1;
        items[1] = closure_5(View, obj4);
        obj.children = items;
        return closure_5(View, obj);
      }
    };
