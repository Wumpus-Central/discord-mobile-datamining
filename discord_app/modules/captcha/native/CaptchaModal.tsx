import noop from "noop";
import get_ActivityIndicator from "trackRegTransition";
import { doesRegistrationHaveIdentityType as closure_6 } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  let c8;
  let callback;
  const tmp2 = callback2(onReject(8283)());
  const tmp3 = onReject(1532)();
  c8 = tmp3;
  const items = [tmp3];
  const memo = React.useMemo(() => {
    const first = _undefined.getState().routes[0];
    let name;
    if (first != null) {
      name = first.name;
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
  callback = onReject(16226)({ onReject, analyticsType: memo });
  const effect = React.useEffect(() => {
    closure_4.dismiss();
  }, []);
  let obj = { style: tmp2.contentContainer, spacing: 12, children: null };
  const items1 = [callback(require(5936) /* AccountAgeTier10LargeBadge */.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  if (headerText == null) {
    const intl = tmp7(1236).intl;
    headerText = intl.string(tmp7(1236).t.FpoiHe);
  }
  const items2 = [callback(require(4281) /* Text */.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }), ];
  obj = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: null };
  if (bodyText == null) {
    const intl2 = tmp7(1236).intl;
    bodyText = intl2.string(tmp7(1236).t["/CidxO"]);
  }
  obj = { startHeight: 900, startExpanded: true, children: null };
  const obj1 = { children: null };
  obj[3] = bodyText;
  items2[1] = callback(require(4281) /* Text */.Text, obj);
  obj1[0] = items2;
  items1[1] = closure_10(closure_5, obj1);
  let obj2 = {
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
        let tmp = "auth" === state.getState().routes[0].name;
        if (tmp) {
          tmp = outer1_6();
        }
        if (tmp) {
          obj = { step: null, actionType: null };
          obj[0] = outer1_7.CAPTCHA;
          obj[1] = outer1_8.SUBMITTED;
          outer1_0(outer1_2[17]).trackRegTransition(obj);
          const obj2 = outer1_0(outer1_2[17]);
        }
        callback(arg0, closure_6);
        let tmp9 = "auth" === obj.getState().routes[0].name;
        if (tmp9) {
          tmp9 = outer1_6();
        }
        if (tmp9) {
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
  const intl3 = tmp7(1236).intl;
  obj2[2] = intl3.string(require(1236) /* getSystemLocale */.t["cY+Oob"]);
  items1[2] = callback(require(4695) /* Button */.Button, obj2);
  obj[2] = items1;
  obj[2] = closure_10(require(4693) /* Stack */.Stack, obj);
  return callback(require(5338) /* Background */.BottomSheet, obj);
};