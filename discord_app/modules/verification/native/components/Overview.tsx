// === Module 17698: Overview ===

// Module 17698 (Overview)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2115 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Endpoints: closure_7, VerificationModalScenes: closure_8, VerificationTypes: closure_9, HelpdeskArticles } = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, containerInner: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }, title: null, body: null, blocks: null, verificationType: null, button: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.title = { marginTop: 20, fontSize: 17, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { marginTop: 20, fontSize: 17, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.body = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.blocks = { width: "60%", justifyContent: "center" };
obj2.verificationType = { marginBottom: 20 };
obj2.button = { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" };
let closure_13 = createStyles.createStyles(obj2);
const helpCenterURL = HelpdeskUtils.getArticleURL(HelpdeskArticles.VERIFICATION_FAQ);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(30);
  let tmp4 = closure_13();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserRequiredActionStore];
    const fn = function c() {
      action = action.getAction();
      return stateFromStores(navigation[11]).getVerificationTypes(action);
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
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6, tmp7, stateFromStores(tmp2[11]).areVerificationTypesEqual);
  const tmpResult = require("initialize");
  navigation = require("useNavigation").useNavigation();
  const tmpResult2 = require("useNavigation");
  stateFromStores(navigation[14])(require("useBackPressHandler").BackPressHandler.minimize);
  if (cResult[3] === navigation) {
    if (cResult[4] === tmp4.verificationType) {
      if (cResult[5] === stateFromStores) {
        let tmp13 = cResult[6];
      }
      const _Symbol = Symbol;
      ({ container, containerInner, title } = tmp4);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[16]).intl;
        const stringResult = intl.string(tmp(tmp2[16]).t.Iz0kDg);
        cResult[7] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp4.title) {
        let obj2 = { variant: "heading-lg/semibold", style: title, accessibilityRole: "header", children: tmp14 };
        const tmp18 = closure_10(tmp(tmp2[21]).Text, obj2);
        cResult[8] = tmp4.title;
        cResult[9] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[16]).intl;
        let obj3 = { helpCenterURL };
        const formatResult = intl2.format(tmp(tmp2[16]).t["0rqMV5"], obj3);
        cResult[10] = formatResult;
        let tmp19 = formatResult;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] !== tmp4.body) {
        let obj4 = { variant: "text-sm/medium", style: tmp4.body, children: tmp19 };
        const tmp24 = closure_10(tmp(tmp2[21]).Text, obj4);
        cResult[11] = tmp4.body;
        cResult[12] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[12];
      }
      if (cResult[13] !== tmp13) {
        const tmp13Result = tmp13();
        cResult[13] = tmp13;
        cResult[14] = tmp13Result;
        let tmp25 = tmp13Result;
      } else {
        tmp25 = cResult[14];
      }
      if (cResult[15] === tmp4.blocks) {
        if (cResult[16] === tmp25) {
          let tmp27 = cResult[17];
        }
        if (cResult[18] === tmp4.containerInner) {
          if (cResult[19] === tmp22) {
            if (cResult[20] === tmp27) {
              if (cResult[21] === tmp16) {
                let tmp31 = cResult[22];
              }
              const _Symbol3 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { variant: "secondary", text: null, onPress: null };
                const intl3 = tmp(tmp2[16]).intl;
                obj5.text = intl3.string(tmp(tmp2[16]).t["Yl/Riu"]);
                obj5.onPress = tmp(tmp2[22]).emailSupport;
                const tmp37 = closure_10(tmp(tmp2[15]).Button, obj5);
                cResult[23] = tmp37;
                let tmp35 = tmp37;
              } else {
                tmp35 = cResult[23];
              }
              if (cResult[24] !== tmp4.button) {
                const obj6 = { style: tmp4.button, accessibilityRole: "link", children: tmp35 };
                const tmp41 = closure_10(View, obj6);
                cResult[24] = tmp4.button;
                cResult[25] = tmp41;
                let tmp38 = tmp41;
              } else {
                tmp38 = cResult[25];
              }
              if (cResult[26] === tmp4.container) {
                if (cResult[27] === tmp31) {
                  if (cResult[28] === tmp38) {
                    let tmp42 = cResult[29];
                  }
                  return tmp42;
                }
              }
              const obj7 = { style: container, children: null };
              const items2 = [tmp31, tmp38];
              obj7.children = items2;
              const tmp45 = closure_12(View, obj7);
              cResult[26] = tmp4.container;
              cResult[27] = tmp31;
              cResult[28] = tmp38;
              cResult[29] = tmp45;
              tmp42 = tmp45;
            }
          }
        }
        const obj8 = { style: containerInner, children: null };
        const items3 = [tmp16, tmp22, tmp27];
        obj8.children = items3;
        const tmp34 = closure_12(View, obj8);
        cResult[18] = tmp4.containerInner;
        cResult[19] = tmp22;
        cResult[20] = tmp27;
        cResult[21] = tmp16;
        cResult[22] = tmp34;
        tmp31 = tmp34;
      }
      const obj9 = { style: tmp4.blocks, children: tmp25 };
      const tmp30 = closure_10(View, obj9);
      cResult[15] = tmp4.blocks;
      cResult[16] = tmp25;
      cResult[17] = tmp30;
      tmp27 = tmp30;
    }
  }
  const fn2 = function v() {
    return v65535(closure_2_11, {
      children: stateFromStores.map((item) => {
        if (item === constants.CAPTCHA) {
          let obj = { text: null, onPress: null, grow: true };
          const intl = closure_1_0(navigation[16]).intl;
          obj.text = intl.string(closure_1_0(navigation[16]).t["3413d0"]);
          obj.onPress = function onPress() {
            const obj = closure_1_1(dependencyMap[17]);
            closure_1_1(dependencyMap[17]).showCaptcha().then((captcha_key) => {
              const HTTP = item(dependencyMap[18]).HTTP;
              const request = { url: constants.CAPTCHA, body: { captcha_key }, oldFormErrors: true, rejectWithError: true };
              HTTP.post(request);
            });
          };
          let tmp4 = closure_1_10(closure_1_0(navigation[15]).Button, obj, item);
        } else {
          const obj2 = { style: item.verificationType, children: null };
          const obj3 = {
            text: stateFromStores(navigation[11]).getButtonTitle(item),
            onPress() {
                let tmp4 = item !== constants2.EMAIL_OR_PHONE;
                if (tmp4) {
                  tmp4 = item !== constants2.EMAIL;
                }
                if (tmp4) {
                  tmp4 = item !== constants2.REVERIFY_EMAIL;
                }
                if (tmp4) {
                  const StackActions = item(navigation[20]).StackActions;
                  closure_2_2.dispatch(StackActions.push(constants.ADD_PHONE));
                } else {
                  item(navigation[19]).accountDetailsInit();
                  currentUser = currentUser.getCurrentUser();
                  let email;
                  if (currentUser != null) {
                    email = currentUser.email;
                  }
                  const obj = item(navigation[19]);
                }
              },
            grow: true
          };
          obj2.children = closure_1_10(closure_1_0(navigation[15]).Button, obj3);
          tmp4 = closure_1_10(closure_1_4, obj2, item);
          const obj4 = stateFromStores(navigation[11]);
        }
        return tmp4;
      })
    });
  };
  cResult[3] = navigation;
  cResult[4] = tmp4.verificationType;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp13 = fn2;
  const tmp11 = stateFromStores(navigation[14]);
}) : (() => {
  const tmp = closure_13();
  _require = tmp;
  const items = [UserRequiredActionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    action = action.getAction();
    return stateFromStores(navigation[11]).getVerificationTypes(action);
  }, [], stateFromStores(navigation[11]).areVerificationTypesEqual);
  let obj = require("initialize");
  navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  stateFromStores(navigation[14])(require("useBackPressHandler").BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  let obj3 = { style: tmp.container, children: null };
  let obj4 = { style: tmp.containerInner, children: null };
  const callback = noop.useCallback(() => v65535(closure_2_11, {
    children: stateFromStores.map((item) => {
      if (item === constants.CAPTCHA) {
        let obj = { text: null, onPress: null, grow: true };
        const intl = closure_1_0(navigation[16]).intl;
        obj.text = intl.string(closure_1_0(navigation[16]).t["3413d0"]);
        obj.onPress = function onPress() {
          const obj = closure_1_1(dependencyMap[17]);
          closure_1_1(dependencyMap[17]).showCaptcha().then((captcha_key) => {
            const HTTP = item(dependencyMap[18]).HTTP;
            const request = { url: constants.CAPTCHA, body: { captcha_key }, oldFormErrors: true, rejectWithError: true };
            HTTP.post(request);
          });
        };
        let tmp4 = closure_1_10(closure_1_0(navigation[15]).Button, obj, item);
      } else {
        const obj2 = { style: item.verificationType, children: null };
        const obj3 = {
          text: stateFromStores(navigation[11]).getButtonTitle(item),
          onPress() {
              let tmp4 = item !== constants2.EMAIL_OR_PHONE;
              if (tmp4) {
                tmp4 = item !== constants2.EMAIL;
              }
              if (tmp4) {
                tmp4 = item !== constants2.REVERIFY_EMAIL;
              }
              if (tmp4) {
                const StackActions = item(navigation[20]).StackActions;
                closure_2_2.dispatch(StackActions.push(constants.ADD_PHONE));
              } else {
                item(navigation[19]).accountDetailsInit();
                currentUser = currentUser.getCurrentUser();
                let email;
                if (currentUser != null) {
                  email = currentUser.email;
                }
                const obj = item(navigation[19]);
              }
            },
          grow: true
        };
        obj2.children = closure_1_10(closure_1_0(navigation[15]).Button, obj3);
        tmp4 = closure_1_10(closure_1_4, obj2, item);
        const obj4 = stateFromStores(navigation[11]);
      }
      return tmp4;
    })
  }), items1);
  const obj5 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header", children: null };
  let intl = require("util").intl;
  obj5.children = intl.string(require("util").t.Iz0kDg);
  const items2 = [closure_10(require("Text/Text").Text, obj5), , ];
  const obj6 = { variant: "text-sm/medium", style: tmp.body, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.format(require("util").t["0rqMV5"], { helpCenterURL });
  items2[1] = closure_10(require("Text/Text").Text, obj6);
  const obj7 = { helpCenterURL };
  let tmp4 = stateFromStores(navigation[14]);
  items2[2] = closure_10(View, { style: tmp.blocks, children: callback() });
  obj4.children = items2;
  const items3 = [closure_12(View, obj4), ];
  const obj9 = { style: tmp.button, accessibilityRole: "link", children: null };
  const obj10 = { variant: "secondary", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj10.text = intl3.string(require("util").t["Yl/Riu"]);
  obj10.onPress = require("SupportUtils").emailSupport;
  obj9.children = closure_10(require("components/Button/Button").Button, obj10);
  items3[1] = closure_10(View, obj9);
  obj3.children = items3;
  return closure_12(View, obj3);
});