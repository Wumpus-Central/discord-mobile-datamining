// === Module 9424: AuthorizeScopes ===

// Module 9424 (AuthorizeScopes)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
function Scope(arg0) {
  ({ text, error, isFake } = arg0);
  const tmp = closure_6();
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isFake) {
    let stringResult = string(t.OX8EMU);
    let tmp6 = tmp2;
  } else {
    stringResult = string(t["0lpCFG"]);
    tmp6 = tmp2;
  }
  let obj = { style: tmp.scopeContainer, accessible: true, accessibilityLabel: null, children: null };
  let str = "";
  if (null != error) {
    const _HermesInternal = HermesInternal;
    str = ". " + error;
  }
  obj.accessibilityLabel = "" + stringResult + ": " + text + str;
  obj = { style: tmp.iconWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  if (isFake) {
    obj = { style: tmp.fakeScopeIcon, color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
    let tmp10Result = tmp10(tmp6(6616).CircleXIcon, obj);
  } else {
    const obj1 = { color: nativeDefault.colors.TEXT_MUTED, size: "refresh_sm" };
    tmp10Result = tmp10(tmp6(4520).CircleCheckIcon, obj1);
  }
  obj.children = tmp10Result;
  const items = [React4(View, obj), ];
  const obj2 = { style: tmp.scope, children: null };
  let str3;
  if (isFake) {
    str3 = "text-muted";
  }
  const items1 = [React4(tmp6(4556).Text, { variant: "text-md/normal", color: str3, children: text }), ];
  tmp10Result = null;
  if (null != error) {
    const obj3 = { variant: "text-xs/normal", children: error };
    tmp10Result = tmp10(tmp6(4556).Text, obj3);
  }
  items1[1] = tmp10Result;
  obj2.children = items1;
  items[1] = hasOwnProperty(View, obj2);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ scopesContainer: { flexDirection: "column", gap: 16 }, scopes: { flexDirection: "column", gap: 16 }, scopeContainer: { flexDirection: "row" }, scope: { flex: 1, flexDirection: "column", justifyContent: "center" }, iconWrapper: { marginRight: 12, width: 20, height: 20 }, fakeScopeIcon: { opacity: 0.6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default function AuthorizeScopes(accountScopes) {
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
    const t = accountScopes(1114).t;
    if (isTrustedName) {
      let PZpY9c = t.PZpY9c;
      let tmp5 = tmp15;
    } else {
      PZpY9c = t["1Hz+Sl"];
      tmp5 = tmp15;
    }
    let hasItem = integrationType === tmp5(9245).ApplicationIntegrationType.USER_INSTALL;
    if (hasItem) {
      hasItem = requestedScopes.includes(tmp5(8339).OAuth2Scopes.APPLICATIONS_COMMANDS);
    }
    let obj = { style: tmp.scopesContainer, children: null };
    obj = { variant: "heading-sm/normal", color: "text-default", children: null };
    const intl = tmp5(1114).intl;
    obj = { application: application.name };
    obj.children = intl.format(PZpY9c, obj);
    const items = [closure_4(tmp5(4556).Text, obj), ];
    const obj1 = { style: tmp.scopes, children: null };
    const mapped = accountScopes.map((item) => {
      closure_0 = item;
      const scopeNames = accountScopes(9238).getScopeNames(item, closure_0);
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
        return React4(Scope, obj, "" + closure_0 + "-" + index);
      });
    });
    const items1 = [mapped.flat(), , ];
    if (hasItem) {
      const obj2 = { text: null };
      const intl2 = tmp5(1114).intl;
      obj2.text = intl2.string(tmp5(1114).t.Ls2XRq);
      hasItem = tmp10(Scope, obj2);
    }
    items1[1] = hasItem;
    const obj3 = { text: tmp3(), isFake: true };
    items1[2] = closure_4(Scope, obj3);
    obj1.children = items1;
    items[1] = closure_5(View, obj1);
    obj.children = items;
    return closure_5(View, obj);
  }
};