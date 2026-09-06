// discord_app/modules/captcha/native/CaptchaModal.tsx
import util from "../../../intl/index.native.tsx";
import Link from "../../../../_runtime/01484_Link.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import native from "../../../design/assets/native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import SharedCaptchaUtils from "../SharedCaptchaUtils.tsx";
import RegistrationUtils from "../../auth/native/RegistrationUtils.tsx";
import CaptchaUtilsDefault from "../../../utils/native/CaptchaUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(15946).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(15947);
({ RegisterTransitionSteps: closure_7, RegistrationTransitionActionTypes: closure_8 } = RegistrationConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0) => {
  let num = 8;
  if (arg0) {
    num = 32;
  }
  return {
    contentContainer: { alignItems: "center", paddingVertical: 8, paddingHorizontal: num },
    description: { paddingBottom: 12, paddingTop: 4 },
  };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default function CaptchaModal(arg0) {
  ({ onCaptchaVerify: require, onReject } = arg0);
  ({
    close: dependencyMap,
    sitekey: noop,
    captchaService: closure_4,
    headerText,
    bodyText,
    rqdata: closure_5,
    rqtoken: closure_6,
    userflow: closure_7,
  } = arg0);
  const tmp2 = closure_11(onReject(6944)());
  let obj = Link;
  const navigation = obj.useNavigation();
  const items = [navigation];
  const memo = noop.useMemo(() => {
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
      if (closure_6()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  closure_9 = onReject(17288)({ onReject, analyticsType: memo });
  const effect = noop.useEffect(() => {
    closure_1_4.dismiss();
  }, []);
  obj = { style: tmp2.contentContainer, spacing: 12, children: null };
  const items1 = [closure_9(native.DisguiseSpotIllustration, { scale: 0.5 }), ,];
  if (headerText == null) {
    const intl = util.intl;
    headerText = intl.string(util.t.FpoiHe);
  }
  const items2 = [
    closure_9(Text_Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }),
  ];
  obj = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: null };
  if (bodyText == null) {
    const intl2 = util.intl;
    bodyText = intl2.string(util.t["/CidxO"]);
  }
  const obj1 = { startHeight: 900, startExpanded: true, children: null };
  let obj2 = { children: null };
  obj.children = bodyText;
  items2[1] = closure_9(Text_Text.Text, obj);
  obj2.children = items2;
  items1[1] = closure_10(closure_5, obj2);
  const obj3 = {
    grow: true,
    onPress() {
      closure_9();
      dependencyMap();
      const result = SharedCaptchaUtils.emitCaptchaDistributionMetric(constants);
      const showCaptchaResult = CaptchaUtilsDefault.showCaptcha(closure_1_4, noop, closure_1_5);
      CaptchaUtilsDefault.showCaptcha(closure_1_4, noop, closure_1_5)
        .then((result) => {
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
            tmp4 = closure_2_6();
          }
          if (tmp4) {
            obj = { step: constants.CAPTCHA, actionType: navigation.SUBMITTED };
            RegistrationUtils.trackRegTransition(obj);
          }
          closure_1_0(result, closure_1_6);
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
            tmp15 = closure_2_6();
          }
          if (tmp15) {
            obj = { step: constants.CAPTCHA, actionType: navigation.SUCCESS };
            RegistrationUtils.trackRegTransition(obj);
          }
        })
        .catch((error) => {
          if (onReject != null) {
            tmp(error);
          }
        });
    },
    text: null,
  };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["cY+Oob"]);
  items1[2] = closure_9(components_Button_Button.Button, obj3);
  obj.children = items1;
  obj1.children = closure_10(Stack_Stack.Stack, obj);
  return closure_9(Sheet_BottomSheet.BottomSheet, obj1);
}
