// === Module 14319: TwoFASetupSuccess ===

// Module 14319 (TwoFASetupSuccess)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4440 */;
import Button2 from "Button" /* 4879 */;
import TwoFAModalSetupSections from "TwoFAModalSetupSections" /* 14310 */;
import registerAsset from "registerAsset" /* 14320 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
({ View: closure_6, Image: error } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }, flex: { flex: 1 }, image: { width: 190, height: 70 }, success: { marginTop: 33 }, successBody: null, divider: null, buttonWrapper: null, ctaDescription: null, errorText: null };
createCacheKey = { fontSize: 14, textAlign: "center", marginHorizontal: 20, marginTop: 4, color: ThemesDefault.colors.TEXT_STRONG };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { height: 2, width: 48, margin: 32, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[6] = { alignSelf: "stretch", margin: 16, marginTop: 0 };
let obj1 = { height: 2, width: 48, margin: 32, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[7] = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: ThemesDefault.colors.TEXT_STRONG };
let obj2 = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: ThemesDefault.colors.TEXT_STRONG };
createCacheKey[8] = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default function TwoFASetupSuccess() {
  let tmp = callback3();
  [tmp3, require] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  [tmp5, importDefault] = callback(React.useState(""), 2);
  callback = React.useCallback(() => {
    function _onRegisterSuccess() {
      const self = this;
      const tmp = closure_2_3((arg0) => {
        closure_0 = arg0;
        c5 = 0;
        c6 = 0;
        c4 = 0;
        const iter = (function*(arg0) {
          if (c6 === 2) {
            c6 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp7 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_2 = tmp3;
                  c1 = tmp5;
                  c0 = undefined;
                  c1 = undefined;
                  ({ ticket: c0, credential: c1 } = c0);
                  c5 = 1;
                  c6 = 1;
                  return { value: "ct", done: true };
                }
              } else if (1 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  c4 = 1;
                  const intl = callback(closure_2_2[8]).intl;
                  c5 = 3;
                  c6 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback(closure_2_2[7]).finishRegisterWebAuthnCredential(intl.string(callback(closure_2_2[8]).t["8H5RmH"]), callback, closure_2_1);
                  return obj2;
                }
              } else {
                if (2 === tmp8) {
                  c4 = 0;
                  closure_1_1(body.body.message);
                  c6 = 3;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj = closure_2_1(closure_2_2[9]);
                  obj.close();
                  c4 = 0;
                }
                c4 = 0;
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
            } catch (tmp19) {
              body = tmp19;
              if (tmp4 === c4) {
                c6 = tmp2;
                throw tmp19;
              } else {
                c5 = tmp;
              }
            }
          }
        })();
        iter.next();
        return iter;
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback("");
    let obj = closure_1_1(closure_1_2[10]);
    obj = {
      setRegistering: _onRegisterSuccess,
      setError: callback,
      onRegisterSuccess(arg0) {
        const self = this;
        const apply = _onRegisterSuccess.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
    };
    obj.registerPasskey(obj);
  }, []);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.flex };
  const items = [callback2(closure_6, obj), , , , , , , ];
  obj = { source: registerAsset, style: tmp.image };
  items[1] = callback2(closure_7, obj);
  obj1 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t.Awk3Gw);
  items[2] = callback2(Text.Text, obj1);
  let obj2 = { style: tmp.successBody, children: null };
  const intl2 = getSystemLocale.intl;
  obj2[1] = intl2.string(getSystemLocale.t["0d1bXM"]);
  items[3] = callback2(Button.LegacyText, obj2);
  items[4] = callback2(closure_6, { style: tmp.divider });
  const obj4 = { style: tmp.ctaDescription, children: null };
  const intl3 = getSystemLocale.intl;
  obj4[1] = intl3.string(getSystemLocale.t.okgGTu);
  items[5] = callback2(Button.LegacyText, obj4);
  const obj5 = { style: tmp.buttonWrapper, children: null };
  const intl4 = getSystemLocale.intl;
  const string = intl4.string;
  const t = getSystemLocale.t;
  if (tmp3) {
    let stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  const items1 = [callback2(Button2.Button, { text: stringResult, onPress: callback, disabled: tmp3, loading: tmp3, grow: true }), ];
  let tmp7Result = "" !== tmp5;
  if (tmp7Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.errorText;
    obj6[1] = tmp5;
    tmp7Result = tmp7(Button.LegacyText, obj6);
  }
  const obj7 = { children: null };
  items1[1] = tmp7Result;
  obj5[1] = items1;
  items[6] = closure_9(closure_6, obj5);
  items[7] = callback2(closure_6, { style: tmp.flex });
  obj[1] = items;
  obj7[0] = closure_9(closure_6, obj);
  return callback2(TwoFAModalSetupSections.TwoFASetupModalScreen, obj7);
};