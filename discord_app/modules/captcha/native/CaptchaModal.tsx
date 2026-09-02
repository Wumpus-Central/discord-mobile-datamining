// === Module 17101: CaptchaModal ===

// Module 17101 (CaptchaModal)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1499 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4926 */;
import Button from "Button" /* 4928 */;
import Background from "Background" /* 5630 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6265 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { doesRegistrationHaveIdentityType as closure_6 } from "useRegistrationUIStore" /* 15768 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15769 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ Keyboard: c4, View: c5 } = get_ActivityIndicator);
({ RegisterTransitionSteps: error, RegistrationTransitionActionTypes: closure_8 } = RegistrationTransitionActionTypes);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let paddingHorizontal = 8;
  if (arg0) {
    paddingHorizontal = 32;
  }
  return { contentContainer: { alignItems: "center", paddingVertical: 8, paddingHorizontal }, description: { paddingBottom: 12, paddingTop: 4 } };
});
let result = require("set").fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default function CaptchaModal(arg0) {
  ({ onCaptchaVerify: require, onReject } = arg0);
  ({ close: dependencyMap, sitekey: closure_3, captchaService: closure_4, headerText, bodyText, rqdata: closure_5, rqtoken: closure_6, userflow: closure_7 } = arg0);
  let navigation;
  let callback;
  const tmp2 = callback2(onReject(7726)());
  let obj = createStandardNavigationFactories;
  navigation = obj.useNavigation();
  const items = [navigation];
  const memo = React.useMemo(() => {
    const state = navigation.getState();
    let name;
    if (state != null) {
      const first = state.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    let str = "Guild Join Captcha";
    if ("auth" === name) {
      str = "Guild Join Captcha";
      if (closure_1_6()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  callback = onReject(17102)({ onReject, analyticsType: memo });
  const effect = React.useEffect(() => {
    closure_4.dismiss();
  }, []);
  obj = { style: tmp2.contentContainer, spacing: 12, children: null };
  const items1 = [callback(AccountAgeTier10LargeBadge.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  if (headerText == null) {
    const intl = tmp3(1233).intl;
    headerText = intl.string(tmp3(1233).t.FpoiHe);
  }
  const items2 = [callback(Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }), ];
  obj = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: null };
  if (bodyText == null) {
    const intl2 = tmp3(1233).intl;
    bodyText = intl2.string(tmp3(1233).t["/CidxO"]);
  }
  obj1 = { startHeight: 900, startExpanded: true, children: null };
  let obj2 = { children: null };
  obj[3] = bodyText;
  items2[1] = callback(Text.Text, obj);
  obj2[0] = items2;
  items1[1] = closure_10(closure_5, obj2);
  const obj3 = {
    grow: true,
    onPress() {
      callback2();
      callback();
      const result = closure_1_0(closure_1_2[15]).emitCaptchaDistributionMetric(closure_7);
      let obj = closure_1_0(closure_1_2[15]);
      let obj2 = onReject(closure_1_2[16]);
      const showCaptchaResult = onReject(closure_1_2[16]).showCaptcha(closure_4, closure_3, closure_5);
      onReject(closure_1_2[16]).showCaptcha(closure_4, closure_3, closure_5).then((arg0) => {
        let obj = state;
        state = state.getState();
        let name;
        if (state != null) {
          const first = state.routes[0];
          if (first != null) {
            name = first.name;
          }
        }
        let tmp4 = "auth" === name;
        if (tmp4) {
          tmp4 = closure_1_6();
        }
        if (tmp4) {
          obj = { step: null, actionType: null };
          obj[0] = closure_1_7.CAPTCHA;
          obj[1] = closure_1_8.SUBMITTED;
          closure_1_0(closure_1_2[17]).trackRegTransition(obj);
          const obj2 = closure_1_0(closure_1_2[17]);
        }
        callback(arg0, closure_6);
        const state1 = obj.getState();
        let name1;
        if (state1 != null) {
          const first1 = state1.routes[0];
          if (first1 != null) {
            name1 = first1.name;
          }
        }
        let tmp15 = "auth" === name1;
        if (tmp15) {
          tmp15 = closure_1_6();
        }
        if (tmp15) {
          obj = { step: null, actionType: null };
          obj[0] = closure_1_7.CAPTCHA;
          obj[1] = closure_1_8.SUCCESS;
          closure_1_0(closure_1_2[17]).trackRegTransition(obj);
          const obj4 = closure_1_0(closure_1_2[17]);
        }
      }).catch((arg0) => {
        if (closure_1 != null) {
          tmp(arg0);
        }
      });
    },
    text: null
  };
  const intl3 = tmp3(1233).intl;
  obj3[2] = intl3.string(getSystemLocale.t["cY+Oob"]);
  items1[2] = callback(Button.Button, obj3);
  obj[2] = items1;
  obj1[2] = closure_10(Stack.Stack, obj);
  return callback(Background.BottomSheet, obj1);
};