// === Module 17652: Overview ===

// Module 17652 (Overview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2115 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, action, currentUser, navigation;

let HelpdeskArticles;
let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
({ Endpoints: metroImportDefault, VerificationModalScenes: metroImportAll, VerificationTypes: c9, HelpdeskArticles } = Constants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerInner: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }, title: obj3, body: obj4, blocks: { width: "60%", justifyContent: "center" }, verificationType: { marginBottom: 20 }, button: { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 20, fontSize: 17, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_13 = createStyles(obj);
const helpCenterURL = HelpdeskUtils.getArticleURL(HelpdeskArticles.VERIFICATION_FAQ);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let constants2;
  let container;
  let containerInner;
  let intl3;
  let items2;
  let items3;
  let stateFromStores;
  let title;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(30);
  let tmp4 = closure_13();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserRequiredActionStore];
    const fn = function c() {
      action = action.getAction();
      const obj = stateFromStores(navigation[11]);
      return obj.getVerificationTypes(action);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = fn;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7, stateFromStores(tmp2[11]).areVerificationTypesEqual);
  const tmpResult2 = require("useNavigation");
  navigation = tmpResult2.useNavigation();
  const tmp11 = stateFromStores(navigation[14]);
  tmp11(require("useBackPressHandler").BackPressHandler.minimize);
  if (cResult[3] === navigation) {
    if (cResult[4] === tmp4.verificationType) {
      let tmp13;
      let tmp14;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp25;
      if (cResult[5] === stateFromStores) {
        tmp13 = cResult[6];
      }
      const _Symbol = Symbol;
      ({ container, containerInner, title } = tmp4);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[16]).intl;
        const stringResult = intl.string(require("intl").t.Iz0kDg);
        cResult[7] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp4.title) {
        let obj2 = { variant: "heading-lg/semibold", style: title, accessibilityRole: "header", children: tmp14 };
        const tmp18 = closure_10(require("Text/Text").Text, obj2);
        cResult[8] = tmp4.title;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      const _Symbol2 = Symbol;
      const body = tmp4.body;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[16]).intl;
        let obj3 = { helpCenterURL };
        const formatResult = intl2.format(require("intl").t["0rqMV5"], obj3);
        cResult[10] = formatResult;
        tmp19 = formatResult;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] !== tmp4.body) {
        let obj4 = { variant: "text-sm/medium", style: body, children: tmp19 };
        const tmp24 = closure_10(require("Text/Text").Text, obj4);
        cResult[11] = tmp4.body;
        cResult[12] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[12];
      }
      const blocks = tmp4.blocks;
      if (cResult[13] !== tmp13) {
        const tmp13Result = tmp13();
        cResult[13] = tmp13;
        cResult[14] = tmp13Result;
        tmp25 = tmp13Result;
      } else {
        tmp25 = cResult[14];
      }
      if (cResult[15] === tmp4.blocks) {
        let tmp27;
        if (cResult[16] === tmp25) {
          tmp27 = cResult[17];
        }
        if (cResult[18] === tmp4.containerInner) {
          if (cResult[19] === tmp22) {
            if (cResult[20] === tmp27) {
              let tmp31;
              let tmp35;
              let tmp38;
              if (cResult[21] === tmp16) {
                tmp31 = cResult[22];
              }
              const _Symbol3 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { variant: "secondary", text: intl3.string(require("intl").t["Yl/Riu"]), onPress: require("SupportUtils").emailSupport };
                let Button = tmp(tmp2[15]).Button;
                intl3 = tmp(tmp2[16]).intl;
                const tmp37 = closure_10(Button, obj5);
                cResult[23] = tmp37;
                tmp35 = tmp37;
              } else {
                tmp35 = cResult[23];
              }
              if (cResult[24] !== tmp4.button) {
                const obj6 = { style: tmp4.button, accessibilityRole: "link", children: tmp35 };
                const tmp41 = closure_10(View, obj6);
                cResult[24] = tmp4.button;
                cResult[25] = tmp41;
                tmp38 = tmp41;
              } else {
                tmp38 = cResult[25];
              }
              if (cResult[26] === tmp4.container) {
                if (cResult[27] === tmp31) {
                  let tmp42;
                  if (cResult[28] === tmp38) {
                    tmp42 = cResult[29];
                  }
                  return tmp42;
                }
              }
              const obj7 = { style: container, children: items2 };
              items2 = [tmp31, tmp38];
              const tmp45 = closure_12(View, obj7);
              cResult[26] = tmp4.container;
              cResult[27] = tmp31;
              cResult[28] = tmp38;
              cResult[29] = tmp45;
              tmp42 = tmp45;
            }
          }
        }
        const obj8 = { style: containerInner, children: items3 };
        items3 = [tmp16, tmp22, tmp27];
        const tmp34 = closure_12(View, obj8);
        cResult[18] = tmp4.containerInner;
        cResult[19] = tmp22;
        cResult[20] = tmp27;
        cResult[21] = tmp16;
        cResult[22] = tmp34;
        tmp31 = tmp34;
      }
      const obj9 = { style: blocks, children: tmp25 };
      const tmp30 = closure_10(View, obj9);
      cResult[15] = tmp4.blocks;
      cResult[16] = tmp25;
      cResult[17] = tmp30;
      tmp27 = tmp30;
    }
  }
  const fn2 = function v() {
    let obj = {
      children: stateFromStores.map((item) => {
        let Button2;
        let intl;
        let obj3;
        let obj4;
        let tmp4;
        if (item === constants.CAPTCHA) {
          let obj = {
            text: intl.string(closure_1_0(navigation[16]).t["3413d0"]),
            onPress() {
                let obj = closure_1_1(closure_1_2[17]);
                const showCaptchaResult = obj.showCaptcha();
                showCaptchaResult.then((captcha_key) => {
                  let obj;
                  const HTTP = item(closure_1_2[18]).HTTP;
                  const request = { url: constants.CAPTCHA, body: obj, oldFormErrors: true, rejectWithError: true };
                  obj = { captcha_key };
                  HTTP.post(request);
                });
              },
            grow: true
          };
          const Button = closure_1_0(navigation[15]).Button;
          intl = closure_1_0(navigation[16]).intl;
          tmp4 = closure_1_10(Button, obj, item);
        } else {
          const obj2 = { style: item.verificationType, children: closure_1_10(Button2, obj3) };
          obj3 = {
            text: obj4.getButtonTitle(item),
            onPress() {
                let ADD_PHONE = constants.ADD_PHONE;
                const tmp4 = item !== constants2.EMAIL_OR_PHONE && item !== constants2.EMAIL && item !== constants2.REVERIFY_EMAIL;
                if (!tmp4) {
                  const obj = item(navigation[19]);
                  obj.accountDetailsInit();
                  currentUser = currentUser.getCurrentUser();
                  let email;
                  if (currentUser != null) {
                    email = currentUser.email;
                  }
                  ADD_PHONE = null != email ? constants.RESEND_EMAIL : constants.ENTER_EMAIL;
                }
                const dispatch = closure_2_2.dispatch;
                const StackActions = item(navigation[20]).StackActions;
                dispatch(StackActions.push(ADD_PHONE));
              },
            grow: true
          };
          Button2 = closure_1_0(navigation[15]).Button;
          obj4 = stateFromStores(navigation[11]);
          tmp4 = closure_1_10(closure_1_4, obj2, item);
        }
        return tmp4;
      })
    };
    return authStore(unpackModuleId, obj);
  };
  cResult[3] = navigation;
  cResult[4] = tmp4.verificationType;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp13 = fn2;
}) : (() => {
  let Button;
  let closure_0;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj10;
  let obj7;
  let stateFromStores;
  const tmp = closure_13();
  _require = tmp;
  let obj = require("get initialized");
  const items = [UserRequiredActionStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    action = action.getAction();
    const obj = stateFromStores(navigation[11]);
    return obj.getVerificationTypes(action);
  }, [], stateFromStores(navigation[11]).areVerificationTypesEqual);
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let tmp4 = stateFromStores(navigation[14]);
  tmp4(require("useBackPressHandler").BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  let obj3 = { style: tmp.container, children: items3 };
  let obj4 = { style: tmp.containerInner, children: items2 };
  const callback = react.useCallback(() => {
    let obj = {
      children: stateFromStores.map((item) => {
        let Button2;
        let intl;
        let obj3;
        let obj4;
        let tmp4;
        if (item === constants.CAPTCHA) {
          let obj = {
            text: intl.string(closure_1_0(navigation[16]).t["3413d0"]),
            onPress() {
                let obj = closure_1_1(closure_1_2[17]);
                const showCaptchaResult = obj.showCaptcha();
                showCaptchaResult.then((captcha_key) => {
                  let obj;
                  const HTTP = item(closure_1_2[18]).HTTP;
                  const request = { url: constants.CAPTCHA, body: obj, oldFormErrors: true, rejectWithError: true };
                  obj = { captcha_key };
                  HTTP.post(request);
                });
              },
            grow: true
          };
          const Button = closure_1_0(navigation[15]).Button;
          intl = closure_1_0(navigation[16]).intl;
          tmp4 = closure_1_10(Button, obj, item);
        } else {
          const obj2 = { style: item.verificationType, children: closure_1_10(Button2, obj3) };
          obj3 = {
            text: obj4.getButtonTitle(item),
            onPress() {
                let ADD_PHONE = constants.ADD_PHONE;
                const tmp4 = item !== constants2.EMAIL_OR_PHONE && item !== constants2.EMAIL && item !== constants2.REVERIFY_EMAIL;
                if (!tmp4) {
                  const obj = item(navigation[19]);
                  obj.accountDetailsInit();
                  currentUser = currentUser.getCurrentUser();
                  let email;
                  if (currentUser != null) {
                    email = currentUser.email;
                  }
                  ADD_PHONE = null != email ? constants.RESEND_EMAIL : constants.ENTER_EMAIL;
                }
                const dispatch = closure_2_2.dispatch;
                const StackActions = item(navigation[20]).StackActions;
                dispatch(StackActions.push(ADD_PHONE));
              },
            grow: true
          };
          Button2 = closure_1_0(navigation[15]).Button;
          obj4 = stateFromStores(navigation[11]);
          tmp4 = closure_1_10(closure_1_4, obj2, item);
        }
        return tmp4;
      })
    };
    return authStore(unpackModuleId, obj);
  }, items1);
  const obj5 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header", children: intl.string(require("intl").t.Iz0kDg) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items2 = [closure_10(Text, obj5), , ];
  const obj6 = { variant: "text-sm/medium", style: tmp.body, children: intl2.format(require("intl").t["0rqMV5"], obj7) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  obj7 = { helpCenterURL };
  items2[1] = closure_10(Text2, obj6);
  const obj8 = { style: tmp.blocks, children: callback() };
  items2[2] = closure_10(View, obj8);
  items3 = [closure_12(View, obj4), ];
  const obj9 = { style: tmp.button, accessibilityRole: "link", children: closure_10(Button, obj10) };
  obj10 = { variant: "secondary", text: intl3.string(require("intl").t["Yl/Riu"]), onPress: require("SupportUtils").emailSupport };
  Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items3[1] = closure_10(View, obj9);
  return closure_12(View, obj3);
});
const result = size.fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default tmp5;