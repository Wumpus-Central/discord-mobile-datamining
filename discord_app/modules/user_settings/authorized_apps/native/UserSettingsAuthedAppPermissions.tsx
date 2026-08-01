// === Module 13994: UserSettingsAuthedAppPermissions ===

// Module 13994 (UserSettingsAuthedAppPermissions)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default function UserSettingsAuthedAppPermissions(oauth2Token) {
  let c1;
  let c2;
  let c3;
  let c0;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp = callback2();
  c0 = tmp;
  ({ application: c1, scopes: c2, disclosures: c3 } = oauth2Token.oauth2Token);
  return callback(c3, {
    contentContainerStyle: tmp.container,
    children: (() => {
      let items = [];
      const iter = _undefined3[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let tmp3 = _undefined;
        let tmp4 = _undefined3;
        let obj = _undefined(_undefined3[4]);
        let tmp5 = _undefined3;
        let items1 = [];
        let tmp6 = items1;
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(nextResult, _undefined3), 0);
        let tmp8 = push;
        let tmp9 = items1;
        let tmp10 = items;
        let applyResult = HermesBuiltin.apply(items1, items);
        let tmp12 = _undefined;
        let tmp13 = _undefined3;
        if (nextResult === _undefined(_undefined3[5]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
          let tmp14 = _undefined;
          let tmp15 = _undefined3;
          let intl = _undefined(_undefined3[6]).intl;
          let tmp16 = _undefined;
          let tmp17 = _undefined3;
          let arr = items.push(intl.string(_undefined(_undefined3[6]).t.Ls2XRq));
        }
        continue;
      }
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _undefined2.name };
      const children = [outer1_5(_undefined(_undefined3[7]).Text, obj), , , ];
      obj = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = _undefined(_undefined3[6]).intl;
      obj[2] = intl2.string(_undefined(_undefined3[6]).t.xrmhRX);
      children[1] = outer1_5(_undefined(_undefined3[7]).Text, obj);
      children[2] = items.map((children) => {
        let obj = { style: items.permissionContainer, children: null };
        obj = { style: items.permissionIcon, size: "xs", color: null };
        obj[2] = outer1_1(outer1_2[9]).colors.STATUS_POSITIVE;
        items = [, ];
        items[0] = outer1_5(items(outer1_2[8]).CircleCheckIcon, obj);
        obj = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
        items[1] = outer1_5(items(outer1_2[7]).Text, obj);
        obj[1] = items;
        return outer1_6(outer1_4, obj, arg1);
      });
      let mapped;
      if (_undefined4 != null) {
        mapped = _undefined4.map((toFixed) => {
          let obj = items(table[10]);
          const textForDisclosure = obj.getTextForDisclosure(toFixed);
          let tmp4 = null;
          if (null != textForDisclosure) {
            obj = { style: null, children: null };
            obj[0] = items.permissionContainer;
            obj = { style: null, disclosure: null };
            obj[0] = items.permissionIcon;
            obj[1] = toFixed;
            items = [outer2_5(tmp(tmp2[11]).DisclosureIcon, obj), ];
            const obj1 = { style: null, variant: "text-sm/normal", children: null };
            obj1[0] = items.permissionText;
            obj1[2] = textForDisclosure;
            items[1] = outer2_5(tmp(tmp2[7]).Text, obj1);
            obj[1] = items;
            tmp4 = outer2_6(outer2_4, obj, arg1 + items.length);
          }
          return tmp4;
        });
      }
      children[3] = mapped;
      return outer1_6(outer1_4, { children });
    })()
  });
};