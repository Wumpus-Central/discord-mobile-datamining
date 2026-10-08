// === Module 17737: CaptchaModal ===

// Module 17737 (CaptchaModal)
import util from "util" /* 1126 */;
import Link from "Link" /* 1503 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5723 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import RegistrationUtils from "RegistrationUtils" /* 16173 */;
import CaptchaUtilsDefault from "CaptchaUtils" /* 17739 */;
import DisguiseSpotIllustration from "DisguiseSpotIllustration" /* 17742 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(16165).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(16166);
({ RegisterTransitionSteps: closure_7, RegistrationTransitionActionTypes: closure_8 } = RegistrationConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles((arg0) => {
  let num = 8;
  if (arg0) {
    num = 32;
  }
  return { contentContainer: { alignItems: "center", paddingVertical: 8, paddingHorizontal: num }, description: { paddingBottom: 12, paddingTop: 4 } };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CaptchaModal(onCaptchaVerify) {
  const cResult = onCaptchaVerify(close[7]).c(36);
  onCaptchaVerify = onCaptchaVerify.onCaptchaVerify;
  const onReject = onCaptchaVerify.onReject;
  close = onCaptchaVerify.close;
  const sitekey = onCaptchaVerify.sitekey;
  const captchaService = onCaptchaVerify.captchaService;
  ({ headerText, bodyText, rqdata } = onCaptchaVerify);
  const rqtoken = onCaptchaVerify.rqtoken;
  const userflow = onCaptchaVerify.userflow;
  closure_11(onReject(close[8])());
  let obj = onCaptchaVerify(close[7]);
  const tmp = close;
  const tmp3 = onReject;
  const navigation = onCaptchaVerify(close[9]).useNavigation();
  state = navigation.getState();
  let name;
  if (state != null) {
    let first = state.routes[0];
    if (first != null) {
      name = first.name;
    }
  }
  let str = "Guild Join Captcha";
  if ("auth" === name) {
    str = "Guild Join Captcha";
    if (rqtoken()) {
      str = "User Registration Captcha";
    }
  }
  if (cResult[0] === str) {
    if (cResult[1] === onReject) {
      let tmp9 = cResult[2];
    }
    const tmp10 = tmp3(tmp[10])(tmp9);
    closure_9 = tmp10;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          dismissResult = captchaService.dismiss();
          return;
        }
      }
      const items = [];
      cResult[3] = B;
      cResult[4] = items;
      let tmp13 = items;
    } else {
      class B {
        constructor() {
          dismissResult = captchaService.dismiss();
          return;
        }
      }
      tmp13 = cResult[4];
    }
    const effect = sitekey.useEffect(B, tmp13);
    if (cResult[5] === captchaService) {
      class B {
        constructor() {
          dismissResult = captchaService.dismiss();
          return;
        }
      }
    }
    function handleShowCaptcha() {
      closure_9();
      close();
      const result = SharedCaptchaUtils.emitCaptchaDistributionMetric(userflow);
      const showCaptchaResult = CaptchaUtilsDefault.showCaptcha(captchaService, sitekey, rqdata);
      CaptchaUtilsDefault.showCaptcha(captchaService, sitekey, rqdata).then((result) => {
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
          tmp4 = rqtoken();
        }
        if (tmp4) {
          const obj3 = { step: userflow.CAPTCHA, actionType: navigation.SUBMITTED };
          onCaptchaVerify(close[13]).trackRegTransition(obj3);
          const obj2 = onCaptchaVerify(close[13]);
        }
        closure_1_0(result, closure_1_6);
        const state1 = state.getState();
        let name1;
        if (state1 != null) {
          const first1 = state1.routes[0];
          if (first1 != null) {
            name1 = first1.name;
          }
        }
        let tmp15 = "auth" === name1;
        if (tmp15) {
          tmp15 = rqtoken();
        }
        if (tmp15) {
          const obj5 = { step: userflow.CAPTCHA, actionType: navigation.SUCCESS };
          onCaptchaVerify(close[13]).trackRegTransition(obj5);
          const obj4 = onCaptchaVerify(close[13]);
        }
      }).catch((error) => {
        if (onReject != null) {
          tmp(error);
        }
      });
    }
    cResult[5] = captchaService;
    cResult[6] = close;
    cResult[7] = navigation;
    cResult[8] = tmp10;
    cResult[9] = onCaptchaVerify;
    cResult[10] = onReject;
    cResult[11] = rqdata;
    cResult[12] = rqtoken;
    cResult[13] = sitekey;
    cResult[14] = userflow;
    cResult[15] = handleShowCaptcha;
  }
  let obj3 = { onReject, analyticsType: str };
  cResult[0] = str;
  cResult[1] = onReject;
  cResult[2] = obj3;
  tmp9 = obj3;
  let obj2 = onCaptchaVerify(close[9]);
}) : (function CaptchaModal(arg0) {
  ({ onCaptchaVerify: require, onReject } = arg0);
  ({ close: dependencyMap, sitekey: noop, captchaService: closure_4, headerText, bodyText, rqdata: closure_5, rqtoken: closure_6, userflow: closure_7 } = arg0);
  const tmp2 = closure_11(onReject(6617)());
  const navigation = Link.useNavigation();
  const items = [navigation];
  const memo = noop.useMemo(() => {
    state = navigation.getState();
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
      if (closure_6()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  closure_9 = onReject(17738)({ onReject, analyticsType: memo });
  const effect = noop.useEffect(() => {
    closure_1_4.dismiss();
  }, []);
  let obj2 = { style: tmp2.contentContainer, spacing: 12, children: null };
  const items1 = [closure_9(DisguiseSpotIllustration.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  if (headerText == null) {
    const intl = util.intl;
    headerText = intl.string(util.t.FpoiHe);
  }
  const items2 = [closure_9(Text_Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }), ];
  let obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: null };
  if (bodyText == null) {
    const intl2 = util.intl;
    bodyText = intl2.string(util.t["/CidxO"]);
  }
  let obj4 = { startHeight: 900, startExpanded: true, children: null };
  let obj5 = { children: null };
  obj3.children = bodyText;
  items2[1] = closure_9(Text_Text.Text, obj3);
  obj5.children = items2;
  items1[1] = closure_10(closure_5, obj5);
  const obj6 = {
    grow: true,
    onPress: function handleShowCaptcha() {
      closure_9();
      dependencyMap();
      const result = SharedCaptchaUtils.emitCaptchaDistributionMetric(constants);
      const showCaptchaResult = CaptchaUtilsDefault.showCaptcha(closure_1_4, noop, closure_1_5);
      CaptchaUtilsDefault.showCaptcha(closure_1_4, noop, closure_1_5).then((result) => {
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
          tmp4 = closure_2_6();
        }
        if (tmp4) {
          const obj3 = { step: constants.CAPTCHA, actionType: navigation.SUBMITTED };
          RegistrationUtils.trackRegTransition(obj3);
        }
        closure_1_0(result, closure_1_6);
        const state1 = state.getState();
        let name1;
        if (state1 != null) {
          const first1 = state1.routes[0];
          if (first1 != null) {
            name1 = first1.name;
          }
        }
        let tmp15 = "auth" === name1;
        if (tmp15) {
          tmp15 = closure_2_6();
        }
        if (tmp15) {
          const obj5 = { step: constants.CAPTCHA, actionType: navigation.SUCCESS };
          RegistrationUtils.trackRegTransition(obj5);
        }
      }).catch((error) => {
        if (onReject != null) {
          tmp(error);
        }
      });
    },
    text: null
  };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["cY+Oob"]);
  items1[2] = closure_9(components_Button_Button.Button, obj6);
  obj2.children = items1;
  obj4.children = closure_10(Stack_Stack.Stack, obj2);
  return closure_9(Sheet_BottomSheet.BottomSheet, obj4);
});