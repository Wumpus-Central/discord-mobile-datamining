// === Module 15018: TwoFASetupEnterCode ===

// Module 15018 (TwoFASetupEnterCode)
import MFAUtils from "MFAUtils" /* 6632 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 15019 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;

const require = globalThis.__r;

require = fn;
const TwoFAModalSetupSections = fn(15012).TwoFAModalSetupSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TwoFASetupEnterCode(current) {
  _require = current;
  const cResult = require("c").c(22);
  const tmp4 = closure_9();
  let obj = require("c");
  const twoFASetupStyles = require("TwoFASetupStyles").useTwoFASetupStyles();
  importDefault = ref.useRef(current);
  if (cResult[0] !== current) {
    const fn = function f() {
      closure_1.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const effect = obj3.useEffect(tmp6);
  let obj2 = require("TwoFASetupStyles");
  navigation = require("useNavigation").useNavigation();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ref1];
    const fn2 = function w() {
      return ref1.getState();
    };
    cResult[2] = items;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("useNavigation");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp10);
  const tmpResult2 = require("initialize");
  [tmp14, _slicedToArray] = ref.useState(false);
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  if (cResult[4] !== navigation) {
    const fn3 = function x(code) {
      _slicedToArray(true);
      const encodeTotpSecretResult = MFAUtils.encodeTotpSecret(ref.current.totpSecret);
      const obj3 = { code, secret: encodeTotpSecretResult };
      const enableResult = MFAActionCreatorsDefault.enable({ code, secret: encodeTotpSecretResult });
      MFAActionCreatorsDefault.enable({ code, secret: encodeTotpSecretResult }).then(() => {
        navigation.push(constants.SUCCESS);
      }).catch((error) => {
        if (null != error.body) {
          let message = error.body.message;
        } else {
          const intl = closure_0(navigation[13]).intl;
          message = intl.string(closure_0(navigation[13]).t["1u5B+G"]);
        }
        closure_1_4.current = message;
        current = ref.current;
        if (current != null) {
          current.clear();
        }
        closure_1_3(false);
      });
    };
    cResult[4] = navigation;
    cResult[5] = fn3;
    let tmp17 = fn3;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === twoFASetupStyles.modalHeader) {
    if (cResult[7] === twoFASetupStyles.text) {
      let tmp19 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(tmp2[13]).intl;
      const stringResult = intl.string(tmp(tmp2[13]).t.HZPBOd);
      cResult[9] = stringResult;
      let tmp20 = stringResult;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] !== tmp19) {
      const obj4 = { style: tmp19, children: tmp20 };
      const tmp24 = closure_7(tmp(tmp2[14]).LegacyText, obj4);
      cResult[10] = tmp19;
      cResult[11] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[11];
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { maxHeight: 520 };
      cResult[12] = obj5;
      let tmp25 = obj5;
    } else {
      tmp25 = cResult[12];
    }
    const tmp27 = require("useRefValue")(ref);
    if (cResult[13] === stateFromStores) {
      if (cResult[14] === tmp17) {
        if (cResult[15] === tmp14) {
          if (cResult[16] === tmp27) {
            let tmp28 = cResult[17];
          }
          if (cResult[18] === tmp4.container) {
            if (cResult[19] === tmp28) {
              if (cResult[20] === tmp22) {
                let tmp31 = cResult[21];
              }
              return tmp31;
            }
          }
          const obj6 = { children: null };
          const obj7 = { bottom: true, style: tmp18, children: null };
          const items1 = [tmp22, tmp28];
          obj7.children = items1;
          obj6.children = closure_8(tmp(tmp2[18]).SafeAreaPaddingView, obj7);
          const tmp34 = closure_7(tmp(tmp2[17]).TwoFASetupModalScreen, obj6);
          cResult[18] = tmp4.container;
          cResult[19] = tmp28;
          cResult[20] = tmp22;
          cResult[21] = tmp34;
          tmp31 = tmp34;
        }
      }
    }
    const obj8 = { style: tmp25, ref: ref1, showActivityIndicator: tmp14, handleSubmit: tmp17, error: tmp27, appState: stateFromStores };
    const tmp30 = closure_7(require("MFACodeInput"), obj8);
    cResult[13] = stateFromStores;
    cResult[14] = tmp17;
    cResult[15] = tmp14;
    cResult[16] = tmp27;
    cResult[17] = tmp30;
    tmp28 = tmp30;
  }
  const items2 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  cResult[6] = twoFASetupStyles.modalHeader;
  cResult[7] = twoFASetupStyles.text;
  cResult[8] = items2;
  tmp19 = items2;
  const tmp13 = _slicedToArray(ref.useState(false), 2);
}) : (function TwoFASetupEnterCode(current) {
  _require = current;
  const tmp = closure_9();
  const twoFASetupStyles = require("TwoFASetupStyles").useTwoFASetupStyles();
  importDefault = ref.useRef(current);
  const effect = ref.useEffect(() => {
    closure_1.current = current;
  });
  let obj = require("TwoFASetupStyles");
  navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const items = [ref1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ref1.getState());
  const tmp6 = _slicedToArray(ref.useState(false), 2);
  _slicedToArray = tmp6[1];
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  const callback = ref.useCallback((code) => {
    closure_3(true);
    const encodeTotpSecretResult = MFAUtils.encodeTotpSecret(ref.current.totpSecret);
    const obj3 = { code, secret: encodeTotpSecretResult };
    const enableResult = MFAActionCreatorsDefault.enable({ code, secret: encodeTotpSecretResult });
    MFAActionCreatorsDefault.enable({ code, secret: encodeTotpSecretResult }).then(() => {
      navigation.push(constants.SUCCESS);
    }).catch((error) => {
      if (null != error.body) {
        let message = error.body.message;
      } else {
        const intl = closure_0(navigation[13]).intl;
        message = intl.string(closure_0(navigation[13]).t["1u5B+G"]);
      }
      closure_1_4.current = message;
      current = ref.current;
      if (current != null) {
        current.clear();
      }
      closure_1_3(false);
    });
  }, items1);
  const obj4 = { children: null };
  const obj5 = { bottom: true, style: tmp.container, children: null };
  const obj6 = { style: null, children: null };
  const items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  obj6.style = items2;
  let intl = require("util").intl;
  obj6.children = intl.string(require("util").t.HZPBOd);
  const items3 = [closure_7(require("native").LegacyText, obj6), ];
  const obj7 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: tmp6[0], handleSubmit: callback, error: null, appState: null };
  let obj3 = require("initialize");
  obj7.error = require("useRefValue")(ref);
  obj7.appState = stateFromStores;
  items3[1] = closure_7(require("MFACodeInput"), obj7);
  obj5.children = items3;
  obj4.children = closure_8(require("common/SafeAreaView").SafeAreaPaddingView, obj5);
  return closure_7(require("TwoFASetupModal").TwoFASetupModalScreen, obj4);
});