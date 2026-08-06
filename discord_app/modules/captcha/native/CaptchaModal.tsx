// discord_app/modules/captcha/native/CaptchaModal.tsx
import noop from "noop";
import get_ActivityIndicator from "trackRegTransition";
import { doesRegistrationHaveIdentityType as closure_6 } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { createStandardNavigationFactories } from "../../../../_runtime/01481_createStandardNavigationFactories.js";
import { AccountAgeTier10LargeBadge } from "../../../design/assets/native.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let c4;
let c5;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ Keyboard: c4, View: c5 } = get_ActivityIndicator);
({ RegisterTransitionSteps: error, RegistrationTransitionActionTypes: metroImportAll } = RegistrationTransitionActionTypes);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let paddingHorizontal = 8;
  if (arg0) {
    paddingHorizontal = 32;
  }
  return { contentContainer: { alignItems: "center", paddingVertical: 8, paddingHorizontal }, description: { paddingBottom: 12, paddingTop: 4 } };
});
let result = require("useRegistrationUIStore").fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default function CaptchaModal(arg0) {
  let bodyText;
  let noop;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let dependencyMap;
  let headerText;
  let onReject;
  let require;
  ({ onCaptchaVerify: require, onReject } = arg0);
  ({ close: dependencyMap, sitekey: noop, captchaService: closure_4, headerText, bodyText, rqdata: closure_5, rqtoken: closure_6, userflow: closure_7 } = arg0);
  let navigation;
  let callback;
  const tmp2 = callback2(onReject(8395)());
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
      if (outer1_6()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  callback = onReject(16246)({ onReject, analyticsType: memo });
  const effect = React.useEffect(() => {
    closure_4.dismiss();
  }, []);
  obj = { style: tmp2.contentContainer, spacing: 12, children: null };
  const items1 = [callback(AccountAgeTier10LargeBadge.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  if (headerText == null) {
    const intl = tmp3(1236).intl;
    headerText = intl.string(tmp3(1236).t.FpoiHe);
  }
  const items2 = [callback(Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }), ];
  obj = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: null };
  if (bodyText == null) {
    const intl2 = tmp3(1236).intl;
    bodyText = intl2.string(tmp3(1236).t["/CidxO"]);
  }
  const obj1 = { startHeight: 900, startExpanded: true, children: null };
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
      const result = outer1_0(outer1_2[15]).emitCaptchaDistributionMetric(closure_7);
      let obj = outer1_0(outer1_2[15]);
      let obj2 = onReject(outer1_2[16]);
      const showCaptchaResult = onReject(outer1_2[16]).showCaptcha(closure_4, noop, closure_5);
      onReject(outer1_2[16]).showCaptcha(closure_4, noop, closure_5).then((arg0) => {
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
          tmp4 = outer1_6();
        }
        if (tmp4) {
          obj = { step: null, actionType: null };
          obj[0] = outer1_7.CAPTCHA;
          obj[1] = outer1_8.SUBMITTED;
          outer1_0(outer1_2[17]).trackRegTransition(obj);
          const obj2 = outer1_0(outer1_2[17]);
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
          tmp15 = outer1_6();
        }
        if (tmp15) {
          obj = { step: null, actionType: null };
          obj[0] = outer1_7.CAPTCHA;
          obj[1] = outer1_8.SUCCESS;
          outer1_0(outer1_2[17]).trackRegTransition(obj);
          const obj4 = outer1_0(outer1_2[17]);
        }
      }).catch((arg0) => {
        if (closure_1 != null) {
          tmp(arg0);
        }
      });
    },
    text: null
  };
  const intl3 = tmp3(1236).intl;
  obj3[2] = intl3.string(getSystemLocale.t["cY+Oob"]);
  items1[2] = callback(Button.Button, obj3);
  obj[2] = items1;
  obj1[2] = closure_10(Stack.Stack, obj);
  return callback(Background.BottomSheet, obj1);
};