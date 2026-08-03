import closure_3 from "createCacheKey";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: closure_6, Image: error } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }, flex: { flex: 1 }, image: { width: 190, height: 70 }, success: { marginTop: 33 }, successBody: null, divider: null, buttonWrapper: null, ctaDescription: null, errorText: null };
createCacheKey = { fontSize: 14, textAlign: "center", marginHorizontal: 20, marginTop: 4, color: require("Themes").colors.TEXT_STRONG };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { height: 2, width: 48, margin: 32, backgroundColor: require("Themes").colors.BORDER_STRONG };
createCacheKey[6] = { alignSelf: "stretch", margin: 16, marginTop: 0 };
let obj1 = { height: 2, width: 48, margin: 32, backgroundColor: require("Themes").colors.BORDER_STRONG };
createCacheKey[7] = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: require("Themes").colors.TEXT_STRONG };
let obj2 = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: require("Themes").colors.TEXT_STRONG };
createCacheKey[8] = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
const result = require("noop").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default function TwoFASetupSuccess() {
  let importDefault;
  let require;
  let tmp3;
  let tmp5;
  let tmp = createCacheKey();
  [tmp3, require] = callback(React.useState(false), 2);
  const tmp2 = callback(React.useState(false), 2);
  [tmp5, importDefault] = callback(React.useState(""), 2);
  callback = React.useCallback(() => {
    function _onRegisterSuccess() {
      const self = this;
      const tmp = outer2_3((arg0) => {
        let closure_0 = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        const iter = (function*(arg0) {
          let c0;
          let c1;
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
                  let closure_2 = tmp3;
                  c1 = tmp5;
                  c0 = undefined;
                  c1 = undefined;
                  ({ ticket: c0, credential: c1 } = c0);
                  c5 = 1;
                  c6 = 1;
                  return { value: "ct", done: "Array" };
                }
              } else if (1 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  let c4 = 1;
                  const intl = callback(outer2_2[8]).intl;
                  c5 = 3;
                  c6 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback(outer2_2[7]).finishRegisterWebAuthnCredential(intl.string(callback(outer2_2[8]).t["8H5RmH"]), callback, outer2_1);
                  return obj2;
                }
              } else {
                if (2 === tmp8) {
                  c4 = 0;
                  outer1_1(body.body.message);
                  c6 = 3;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  obj = outer2_1(outer2_2[9]);
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
      const _onRegisterSuccess = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    callback("");
    let obj = outer1_1(outer1_2[10]);
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
  obj = { source: require(13842) /* registerAsset */, style: tmp.image };
  items[1] = callback2(closure_7, obj);
  let obj1 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.Awk3Gw);
  items[2] = callback2(require(4189) /* Text */.Text, obj1);
  let obj2 = { style: tmp.successBody, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl2.string(require(1236) /* getSystemLocale */.t["0d1bXM"]);
  items[3] = callback2(require(1297) /* Button */.LegacyText, obj2);
  items[4] = callback2(closure_6, { style: tmp.divider });
  const obj4 = { style: tmp.ctaDescription, children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[1] = intl3.string(require(1236) /* getSystemLocale */.t.okgGTu);
  items[5] = callback2(require(1297) /* Button */.LegacyText, obj4);
  const obj5 = { style: tmp.buttonWrapper, children: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  const string = intl4.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (tmp3) {
    let stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  const items1 = [callback2(require(4604) /* Button */.Button, { text: stringResult, onPress: callback, disabled: tmp3, loading: tmp3, grow: true }), ];
  let tmp7Result = "" !== tmp5;
  if (tmp7Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.errorText;
    obj6[1] = tmp5;
    tmp7Result = tmp7(require(1297) /* Button */.LegacyText, obj6);
  }
  const obj7 = { children: null };
  items1[1] = tmp7Result;
  obj5[1] = items1;
  items[6] = closure_9(closure_6, obj5);
  items[7] = callback2(closure_6, { style: tmp.flex });
  obj[1] = items;
  obj7[0] = closure_9(closure_6, obj);
  return callback2(require(13832) /* TwoFAModalSetupSections */.TwoFASetupModalScreen, obj7);
};