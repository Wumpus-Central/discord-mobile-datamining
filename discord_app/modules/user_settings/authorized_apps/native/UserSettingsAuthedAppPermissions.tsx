// === Module 14752: UserSettingsAuthedAppPermissions ===

// Module 14752 (UserSettingsAuthedAppPermissions)
import Text_Text from "Text/Text" /* 4886 */;
import disclosures2 from "disclosures" /* 8722 */;
import UserSettingsAuthedApps from "UserSettingsAuthedApps" /* 14746 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, oauth2Token;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((oauth2Token) => {
  let closure_0;
  let scopes;
  let obj = require("react");
  const cResult = obj.c(12);
  oauth2Token = oauth2Token.oauth2Token;
  const tmp2 = closure_7();
  _require = tmp2;
  const application = oauth2Token.application;
  scopes = oauth2Token.scopes;
  const disclosures = oauth2Token.disclosures;
  if (cResult[0] === application) {
    if (cResult[1] === disclosures) {
      if (cResult[2] === scopes) {
        if (cResult[3] === tmp2.permissionContainer) {
          if (cResult[4] === tmp2.permissionIcon) {
            let tmp3;
            let tmp4;
            if (cResult[5] === tmp2.permissionText) {
              tmp3 = cResult[6];
            }
            const container = tmp2.container;
            if (cResult[7] !== tmp3) {
              const tmp3Result = tmp3();
              let num = 7;
              cResult[7] = tmp3;
              cResult[8] = tmp3Result;
              tmp4 = tmp3Result;
            } else {
              tmp4 = cResult[8];
            }
            if (cResult[9] === tmp2.container) {
              let tmp6;
              if (cResult[10] === tmp4) {
                tmp6 = cResult[11];
              }
              return tmp6;
            }
            let obj2 = { contentContainerStyle: container, children: tmp4 };
            let tmp9 = closure_5(disclosures, obj2);
            cResult[9] = tmp2.container;
            cResult[10] = tmp4;
            cResult[11] = tmp9;
            tmp6 = tmp9;
          }
        }
      }
    }
  }
  const fn = function s() {
    let intl2;
    let items = [];
    const iter = scopes[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let push = items.push;
      let tmp4 = items;
      let obj = items(scopes[6]);
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, obj.getScopeNames(nextResult, scopes), 0);
      let applyResult = HermesBuiltin.apply(push, items1, items);
      if (nextResult === items(scopes[7]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
        let push2 = items.push;
        let intl = items(scopes[8]).intl;
        let push2Result = push2(intl.string(items(scopes[8]).t.Ls2XRq));
      }
      continue;
    }
    let obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: application.name };
    const children = [closure_1_5(items(scopes[9]).Text, obj2), , , ];
    let obj3 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(items(scopes[8]).t.xrmhRX) };
    const Text = items(scopes[9]).Text;
    intl2 = items(scopes[8]).intl;
    children[1] = closure_1_5(Text, obj3);
    children[2] = items.map((children, index) => {
      const obj = { style: items.permissionContainer, children: items };
      const obj2 = { style: items.permissionIcon, size: "xs", color: application(scopes[11]).colors.STATUS_POSITIVE };
      const CircleCheckIcon = items(scopes[10]).CircleCheckIcon;
      items = [closure_2_5(CircleCheckIcon, obj2), ];
      const obj3 = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
      items[1] = closure_2_5(items(scopes[9]).Text, obj3);
      return closure_2_6(closure_2_4, obj, index);
    });
    let mapped;
    if (disclosures != null) {
      mapped = disclosures.map((disclosure, index) => {
        const obj = disclosures2;
        const textForDisclosure = obj.getTextForDisclosure(disclosure);
        let tmp4 = null;
        if (null != textForDisclosure) {
          const obj2 = { style: items.permissionContainer, children: items };
          const obj3 = { style: items.permissionIcon, disclosure };
          items = [hasOwnProperty(UserSettingsAuthedApps.DisclosureIcon, obj3), ];
          const obj4 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
          items[1] = hasOwnProperty(Text_Text.Text, obj4);
          tmp4 = metroRequire(React3, obj2, index + items.length);
        }
        return tmp4;
      });
    }
    children[3] = mapped;
    return closure_1_6(closure_1_4, { children });
  };
  cResult[0] = application;
  cResult[1] = disclosures;
  cResult[2] = scopes;
  cResult[3] = tmp2.permissionContainer;
  cResult[4] = tmp2.permissionIcon;
  cResult[5] = tmp2.permissionText;
  cResult[6] = fn;
  tmp3 = fn;
}) : ((oauth2Token) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c1;
  let c2;
  let c3;
  oauth2Token = oauth2Token.oauth2Token;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp = closure_7();
  let closure_0 = tmp;
  ({ application: c1, scopes: c2, disclosures: c3 } = oauth2Token);
  let obj = {
    contentContainerStyle: tmp.container,
    children: (() => {
      let intl2;
      let items = [];
      const iter = _undefined2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let tmp4 = items;
        let obj = items(_undefined2[6]);
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, obj.getScopeNames(nextResult, _undefined2), 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
        if (nextResult === items(_undefined2[7]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
          let push2 = items.push;
          let intl = items(_undefined2[8]).intl;
          let push2Result = push2(intl.string(items(_undefined2[8]).t.Ls2XRq));
        }
        continue;
      }
      let obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _undefined.name };
      const children = [closure_1_5(items(_undefined2[9]).Text, obj2), , , ];
      let obj3 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(items(_undefined2[8]).t.xrmhRX) };
      const Text = items(_undefined2[9]).Text;
      intl2 = items(_undefined2[8]).intl;
      children[1] = closure_1_5(Text, obj3);
      children[2] = items.map((children, index) => {
        const obj = { style: items.permissionContainer, children: items };
        const obj2 = { style: items.permissionIcon, size: "xs", color: c1(c2[11]).colors.STATUS_POSITIVE };
        const CircleCheckIcon = items(c2[10]).CircleCheckIcon;
        items = [closure_2_5(CircleCheckIcon, obj2), ];
        const obj3 = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
        items[1] = closure_2_5(items(c2[9]).Text, obj3);
        return closure_2_6(closure_2_4, obj, index);
      });
      let mapped;
      if (_undefined3 != null) {
        mapped = _undefined3.map((disclosure, index) => {
          const obj = disclosures2;
          const textForDisclosure = obj.getTextForDisclosure(disclosure);
          let tmp4 = null;
          if (null != textForDisclosure) {
            const obj2 = { style: items.permissionContainer, children: items };
            const obj3 = { style: items.permissionIcon, disclosure };
            items = [hasOwnProperty(UserSettingsAuthedApps.DisclosureIcon, obj3), ];
            const obj4 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
            items[1] = hasOwnProperty(Text_Text.Text, obj4);
            tmp4 = metroRequire(React3, obj2, index + items.length);
          }
          return tmp4;
        });
      }
      children[3] = mapped;
      return closure_1_6(closure_1_4, { children });
    })()
  };
  return closure_5(c3, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default tmp5;