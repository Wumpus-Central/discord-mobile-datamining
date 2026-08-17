// discord_app/modules/oauth2/native/AuthorizeScopes.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function Scope(arg0) {
  ({ text, error, isFake } = arg0);
  const tmp = callback2();
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
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
  obj[2] = "" + stringResult + ": " + text + str;
  obj = { style: tmp.iconWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  if (isFake) {
    obj = { style: null, color: null, size: "refresh_sm" };
    obj[0] = tmp.fakeScopeIcon;
    obj[1] = ThemesDefault.colors.TEXT_MUTED;
    let tmp10Result = tmp10(tmp6(7341).CircleXIcon, obj);
  } else {
    obj1 = { color: null, size: "refresh_sm" };
    obj1[0] = ThemesDefault.colors.TEXT_MUTED;
    tmp10Result = tmp10(tmp6(4335).CircleCheckIcon, obj1);
  }
  obj[3] = tmp10Result;
  const items = [closure_4(View, obj), ];
  const obj2 = { style: tmp.scope, children: null };
  let str3;
  if (isFake) {
    str3 = "text-muted";
  }
  const items1 = [closure_4(tmp6(4734).Text, { variant: "text-md/normal", color: str3, children: text }), ];
  tmp10Result = null;
  if (null != error) {
    const obj3 = { variant: "text-xs/normal", children: null };
    obj3[1] = error;
    tmp10Result = tmp10(tmp6(4734).Text, obj3);
  }
  items1[1] = tmp10Result;
  obj2[1] = items1;
  items[1] = closure_5(View, obj2);
  obj[3] = items;
  return closure_5(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ scopesContainer: { flexDirection: "column", gap: 16 }, scopes: { flexDirection: "column", gap: 16 }, scopeContainer: { flexDirection: "row" }, scope: { flex: 1, flexDirection: "column", justifyContent: "center" }, iconWrapper: { marginRight: 12, width: 20, height: 20 }, fakeScopeIcon: { opacity: 0.6 } });
const result = require("set").fileFinishedImporting("modules/oauth2/native/AuthorizeScopes.tsx");

export default function AuthorizeScopes(accountScopes) {
  accountScopes = accountScopes.accountScopes;
  ({ requestedScopes, errors: importDefault, isTrustedName } = accountScopes);
  ({ application, integrationType } = accountScopes);
  if (isTrustedName === undefined) {
    isTrustedName = false;
  }
  const tmp = callback2();
  if (0 === accountScopes.length) {
    return null;
  } else {
    const t = accountScopes(1236).t;
    if (isTrustedName) {
      let tmp4 = tmp14;
    } else {
      tmp4 = tmp14;
    }
    let hasItem = integrationType === tmp4(8770).ApplicationIntegrationType.USER_INSTALL;
    if (hasItem) {
      hasItem = requestedScopes.includes(tmp4(4375).OAuth2Scopes.APPLICATIONS_COMMANDS);
    }
    let obj = { style: null, children: null };
    obj[0] = tmp.scopesContainer;
    obj = { variant: "heading-sm/normal", color: "text-default", children: null };
    const intl = tmp4(1236).intl;
    obj = { application: null };
    obj[0] = application.name;
    obj[2] = intl.format(_1Hz_Sl, obj);
    const items = [callback(tmp4(4734).Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.scopes;
    const mapped = accountScopes.map((nextResult) => {
      closure_0 = nextResult;
      const scopeNames = accountScopes(closure_1_2[10]).getScopeNames(nextResult, closure_0);
      return scopeNames.map((text) => {
        const obj = { text, error: null };
        let tmp3;
        if (0 === arg1) {
          let first;
          if (closure_1_1 != null) {
            if (tmp4[closure_0] != null) {
              first = tmp8[0];
            }
          }
          tmp3 = first;
        }
        obj[1] = tmp3;
        return closure_2_4(closure_2_7, obj, "" + closure_0 + "-" + arg1);
      });
    });
    const items1 = [mapped.flat(), , ];
    if (hasItem) {
      const obj2 = { text: null };
      const intl2 = tmp4(1236).intl;
      obj2[0] = intl2.string(tmp4(1236).t.Ls2XRq);
      hasItem = tmp9(Scope, obj2);
    }
    items1[1] = hasItem;
    const obj3 = { text: null, isFake: true };
    obj3[0] = tmp3();
    items1[2] = callback(Scope, obj3);
    obj1[1] = items1;
    items[1] = closure_5(View, obj1);
    obj[1] = items;
    return closure_5(View, obj);
  }
};