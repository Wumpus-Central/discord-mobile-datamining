// === Module 14369: UserSettingsAuthedAppPermissions ===

// Module 14369 (UserSettingsAuthedAppPermissions)
import noopAll from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const result = require("set").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default function UserSettingsAuthedAppPermissions(oauth2Token) {
  closure_0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp = callback2();
  closure_0 = tmp;
  ({ application: c1, scopes: c2, disclosures: c3 } = oauth2Token.oauth2Token);
  return callback(c3, {
    contentContainerStyle: tmp.container,
    children: (() => {
      let items = [];
      const iter = _undefined2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let tmp3 = callback;
        let tmp4 = _undefined2;
        let obj = callback(_undefined2[4]);
        let tmp5 = _undefined2;
        let items1 = [];
        let tmp6 = items1;
        let num = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(nextResult, _undefined2), 0);
        let tmp8 = push;
        let tmp9 = items1;
        let tmp10 = items;
        let applyResult = HermesBuiltin.apply(items1, items);
        let tmp12 = callback;
        let tmp13 = _undefined2;
        if (nextResult === callback(_undefined2[5]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
          let tmp14 = callback;
          let tmp15 = _undefined2;
          let intl = callback(_undefined2[6]).intl;
          let tmp16 = callback;
          let tmp17 = _undefined2;
          let arr = items.push(intl.string(callback(_undefined2[6]).t.Ls2XRq));
        }
        continue;
      }
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _undefined.name };
      const children = [closure_1_5(callback(_undefined2[7]).Text, obj), , , ];
      obj = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = callback(_undefined2[6]).intl;
      obj[2] = intl2.string(callback(_undefined2[6]).t.xrmhRX);
      children[1] = closure_1_5(callback(_undefined2[7]).Text, obj);
      children[2] = items.map((children) => {
        let obj = { style: items.permissionContainer, children: null };
        obj = { style: items.permissionIcon, size: "xs", color: closure_1_1(closure_1_2[9]).colors.STATUS_POSITIVE };
        items = [, ];
        items[0] = closure_1_5(items(closure_1_2[8]).CircleCheckIcon, obj);
        obj = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
        items[1] = closure_1_5(items(closure_1_2[7]).Text, obj);
        obj[1] = items;
        return closure_1_6(closure_1_4, obj, arg1);
      });
      let mapped;
      if (_undefined3 != null) {
        mapped = _undefined3.map((toFixed) => {
          let obj = items(table[10]);
          const textForDisclosure = obj.getTextForDisclosure(toFixed);
          let tmp4 = null;
          if (null != textForDisclosure) {
            obj = { style: null, children: null };
            obj[0] = items.permissionContainer;
            obj = { style: null, disclosure: null };
            obj[0] = items.permissionIcon;
            obj[1] = toFixed;
            items = [closure_2_5(tmp(tmp2[11]).DisclosureIcon, obj), ];
            obj1 = { style: null, variant: "text-sm/normal", children: null };
            obj1[0] = items.permissionText;
            obj1[2] = textForDisclosure;
            items[1] = closure_2_5(tmp(tmp2[7]).Text, obj1);
            obj[1] = items;
            tmp4 = closure_2_6(closure_2_4, obj, arg1 + items.length);
          }
          return tmp4;
        });
      }
      children[3] = mapped;
      return closure_1_6(closure_1_4, { children });
    })()
  });
};