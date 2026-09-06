// === Module 14944: UserSettingsAuthedAppPermissions ===

// Module 14944 (UserSettingsAuthedAppPermissions)
import Text_Text from "Text/Text" /* 4556 */;
import disclosures from "disclosures" /* 9240 */;
import UserSettingsAuthedApps from "UserSettingsAuthedApps" /* 14938 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default function UserSettingsAuthedAppPermissions(oauth2Token) {
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp = closure_7();
  closure_0 = tmp;
  ({ application: c1, scopes: c2, disclosures: c3 } = oauth2Token.oauth2Token);
  return closure_5(c3, {
    contentContainerStyle: tmp.container,
    children: (() => {
      let items = [];
      const iter = _undefined2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let obj = items(_undefined2[4]);
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(nextResult, _undefined2), 0);
        let applyResult = HermesBuiltin.apply(items1, items);
        if (nextResult === items(_undefined2[5]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
          let intl = items(_undefined2[6]).intl;
          let arr = items.push(intl.string(items(_undefined2[6]).t.Ls2XRq));
        }
        continue;
      }
      obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _undefined.name };
      const children = [closure_1_5(items(_undefined2[7]).Text, obj), , , ];
      obj = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = items(_undefined2[6]).intl;
      obj.children = intl2.string(items(_undefined2[6]).t.xrmhRX);
      children[1] = closure_1_5(items(_undefined2[7]).Text, obj);
      children[2] = items.map((children, index) => {
        let obj = { style: items.permissionContainer, children: null };
        obj = { style: items.permissionIcon, size: "xs", color: c1(576).colors.STATUS_POSITIVE };
        items = [, ];
        items[0] = closure_2_5(items(4520).CircleCheckIcon, obj);
        obj = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
        items[1] = closure_2_5(items(4556).Text, obj);
        obj.children = items;
        return closure_2_6(closure_2_4, obj, index);
      });
      let mapped;
      if (_undefined3 != null) {
        mapped = _undefined3.map((disclosure, index) => {
          let obj = disclosures;
          const textForDisclosure = obj.getTextForDisclosure(disclosure);
          let tmp4 = null;
          if (null != textForDisclosure) {
            obj = { style: items.permissionContainer, children: null };
            obj = { style: items.permissionIcon, disclosure };
            items = [hasOwnProperty(UserSettingsAuthedApps.DisclosureIcon, obj), ];
            const obj1 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
            items[1] = hasOwnProperty(Text_Text.Text, obj1);
            obj.children = items;
            tmp4 = timestampProducer(React4, obj, index + items.length);
          }
          return tmp4;
        });
      }
      children[3] = mapped;
      return closure_1_6(closure_1_4, { children });
    })()
  });
};