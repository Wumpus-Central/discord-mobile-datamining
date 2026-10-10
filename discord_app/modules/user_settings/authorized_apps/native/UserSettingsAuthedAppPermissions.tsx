// === Module 15202: UserSettingsAuthedAppPermissions ===

// Module 15202 (UserSettingsAuthedAppPermissions)
import Text_Text from "Text/Text" /* 5088 */;
import disclosures2 from "disclosures" /* 9228 */;
import UserSettingsAuthedApps from "UserSettingsAuthedApps" /* 15196 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsAuthedAppPermissions(oauth2Token) {
  const cResult = require("c").c(12);
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
            if (cResult[5] === tmp2.permissionText) {
              let tmp3 = cResult[6];
            }
            if (cResult[7] !== tmp3) {
              const tmp3Result = tmp3();
              cResult[7] = tmp3;
              cResult[8] = tmp3Result;
              let tmp4 = tmp3Result;
            } else {
              tmp4 = cResult[8];
            }
            if (cResult[9] === tmp2.container) {
              if (cResult[10] === tmp4) {
                let tmp6 = cResult[11];
              }
              return tmp6;
            }
            let obj2 = { contentContainerStyle: tmp2.container, children: tmp4 };
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
  function renderPermissions() {
    let items = [];
    const iter = scopes[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let push = items.push;
      let obj = items(scopes[6]);
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(nextResult, scopes), 0);
      let applyResult = HermesBuiltin.apply(items1, items);
      if (nextResult === items(scopes[7]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
        let intl = items(scopes[8]).intl;
        let arr = items.push(intl.string(items(scopes[8]).t.Ls2XRq));
      }
      continue;
    }
    const children = [closure_1_5(items(scopes[9]).Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: application.name }), , , ];
    let obj3 = { variant: "heading-sm/semibold", color: "text-default", children: null };
    const intl2 = items(scopes[8]).intl;
    obj3.children = intl2.string(items(scopes[8]).t.xrmhRX);
    children[1] = closure_1_5(items(scopes[9]).Text, obj3);
    children[2] = items.map((children, index) => {
      const obj = { style: items.permissionContainer, children: null };
      items = [, ];
      items[0] = closure_2_5(items(scopes[10]).CircleCheckIcon, { style: items.permissionIcon, size: "xs", color: application(scopes[11]).colors.STATUS_POSITIVE });
      items[1] = closure_2_5(items(scopes[9]).Text, { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children });
      obj.children = items;
      return closure_2_6(closure_2_4, obj, index);
    });
    let mapped;
    if (disclosures != null) {
      mapped = disclosures.map((disclosure, index) => {
        const textForDisclosure = disclosures2.getTextForDisclosure(disclosure);
        let tmp4 = null;
        if (null != textForDisclosure) {
          const obj2 = { style: items.permissionContainer, children: null };
          const obj3 = { style: items.permissionIcon, disclosure };
          items = [hasOwnProperty(UserSettingsAuthedApps.DisclosureIcon, obj3), ];
          const obj4 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
          items[1] = hasOwnProperty(Text_Text.Text, obj4);
          obj2.children = items;
          tmp4 = timestampProducer(React4, obj2, index + items.length);
        }
        return tmp4;
      });
    }
    children[3] = mapped;
    return closure_1_6(closure_1_4, { children });
  }
  cResult[0] = application;
  cResult[1] = disclosures;
  cResult[2] = scopes;
  cResult[3] = tmp2.permissionContainer;
  cResult[4] = tmp2.permissionIcon;
  cResult[5] = tmp2.permissionText;
  cResult[6] = renderPermissions;
  tmp3 = renderPermissions;
  let obj = require("c");
}) : (function UserSettingsAuthedAppPermissions(oauth2Token) {
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp = closure_7();
  closure_0 = tmp;
  ({ application: c1, scopes: c2, disclosures: c3 } = oauth2Token.oauth2Token);
  return closure_5(c3, {
    contentContainerStyle: tmp.container,
    children: (function renderPermissions() {
      let items = [];
      const iter = _undefined2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let obj = items(_undefined2[6]);
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(obj.getScopeNames(nextResult, _undefined2), 0);
        let applyResult = HermesBuiltin.apply(items1, items);
        if (nextResult === items(_undefined2[7]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
          let intl = items(_undefined2[8]).intl;
          let arr = items.push(intl.string(items(_undefined2[8]).t.Ls2XRq));
        }
        continue;
      }
      const children = [closure_1_5(items(_undefined2[9]).Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _undefined.name }), , , ];
      let obj3 = { variant: "heading-sm/semibold", color: "text-default", children: null };
      const intl2 = items(_undefined2[8]).intl;
      obj3.children = intl2.string(items(_undefined2[8]).t.xrmhRX);
      children[1] = closure_1_5(items(_undefined2[9]).Text, obj3);
      children[2] = items.map((children, index) => {
        const obj = { style: items.permissionContainer, children: null };
        items = [, ];
        items[0] = closure_2_5(items(6867).CircleCheckIcon, { style: items.permissionIcon, size: "xs", color: c1(587).colors.STATUS_POSITIVE });
        items[1] = closure_2_5(items(5088).Text, { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children });
        obj.children = items;
        return closure_2_6(closure_2_4, obj, index);
      });
      let mapped;
      if (_undefined3 != null) {
        mapped = _undefined3.map((disclosure, index) => {
          const textForDisclosure = disclosures2.getTextForDisclosure(disclosure);
          let tmp4 = null;
          if (null != textForDisclosure) {
            const obj2 = { style: items.permissionContainer, children: null };
            const obj3 = { style: items.permissionIcon, disclosure };
            items = [hasOwnProperty(UserSettingsAuthedApps.DisclosureIcon, obj3), ];
            const obj4 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
            items[1] = hasOwnProperty(Text_Text.Text, obj4);
            obj2.children = items;
            tmp4 = timestampProducer(React4, obj2, index + items.length);
          }
          return tmp4;
        });
      }
      children[3] = mapped;
      return closure_1_6(closure_1_4, { children });
    })()
  });
});