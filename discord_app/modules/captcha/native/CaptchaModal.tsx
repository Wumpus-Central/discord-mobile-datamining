// discord_app/modules/captcha/native/CaptchaModal.tsx
import intl4 from "../../../intl/index.native.tsx";
import Link from "../../../../_runtime/01491_Link.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SharedCaptchaUtils from "../SharedCaptchaUtils.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import RegistrationUIStore from "../../auth/native/RegistrationUIStore.tsx";
import CaptchaUtilsDefault from "../../../utils/native/CaptchaUtils.tsx";
import DisguiseSpotIllustration from "../../../design/components/mana-assets/native/generated/DisguiseSpotIllustration.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import RegistrationConstants from "../../auth/RegistrationConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, catchPromise, dismissResult, navigation, onCaptchaVerify;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ Keyboard: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: metroImportDefault, RegistrationTransitionActionTypes: metroImportAll } =
  RegistrationConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let num = 8;
  const tmp = arg0;
  if (tmp) {
    num = 32;
  }
  return {
    contentContainer: { alignItems: "center", paddingVertical: 8, paddingHorizontal: num },
    description: { paddingBottom: 12, paddingTop: 4 },
  };
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onCaptchaVerify) => {
      let bodyText;
      let close;
      let headerText;
      let rqdata;
      let tmp = close;
      let obj = onCaptchaVerify(close[7]);
      const cResult = obj.c(36);
      onCaptchaVerify = onCaptchaVerify.onCaptchaVerify;
      const onReject = onCaptchaVerify.onReject;
      close = onCaptchaVerify.close;
      const sitekey = onCaptchaVerify.sitekey;
      const captchaService = onCaptchaVerify.captchaService;
      ({ headerText, bodyText, rqdata } = onCaptchaVerify);
      const rqtoken = onCaptchaVerify.rqtoken;
      const userflow = onCaptchaVerify.userflow;
      let tmp4 = closure_11(onReject(close[8])());
      let obj2 = onCaptchaVerify(close[9]);
      navigation = obj2.useNavigation();
      let state = navigation.getState();
      let name;
      const tmp3 = onReject;
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
        let tmp9;
        let tmp13;
        if (cResult[1] === onReject) {
          tmp9 = cResult[2];
        }
        const tmp10 = tmp3(tmp[10])(tmp9);
        let closure_9 = tmp10;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              dismissResult = captchaService.dismiss();
              return;
            }
          }
          const items = [];
          cResult[3] = I;
          cResult[4] = items;
          tmp13 = items;
        } else {
          class I {
            constructor() {
              dismissResult = captchaService.dismiss();
              return;
            }
          }
          tmp13 = cResult[4];
        }
        const effect = sitekey.useEffect(I, tmp13);
        if (cResult[5] === captchaService) {
          class I {
            constructor() {
              dismissResult = captchaService.dismiss();
              return;
            }
          }
        }
        class P {
          constructor() {
            tmp = closure_9();
            tmp2 = close();
            obj = closure_0(closure_2[11]);
            result = obj.emitCaptchaDistributionMetric(userflow);
            obj2 = closure_1(closure_2[12]);
            showCaptchaResult = obj2.showCaptcha(captchaService, sitekey, rqdata);
            nextPromise = showCaptchaResult.then(() => {
              /* body not rendered: F148805 */
            });
            catchPromise = nextPromise.catch(() => {
              /* body not rendered: F148806 */
            });
            return;
          }
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
        cResult[15] = P;
      }
      let obj3 = { onReject, analyticsType: str };
      cResult[0] = str;
      cResult[1] = onReject;
      cResult[2] = obj3;
      tmp9 = obj3;
    }
  : (arg0) => {
      let bodyText;
      let closure_4;
      let closure_5;
      let closure_7;
      let headerText;
      let intl3;
      let items1;
      let onReject;
      let require;
      ({ onCaptchaVerify: require, onReject } = arg0);
      ({
        close: dependencyMap,
        sitekey: react,
        captchaService: closure_4,
        headerText,
        bodyText,
        rqdata: closure_5,
        rqtoken: closure_6,
        userflow: closure_7,
      } = arg0);
      const tmp2 = closure_11(onReject(6439)());
      let obj = Link;
      navigation = obj.useNavigation();
      const items = [navigation];
      const memo = react.useMemo(() => {
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
      let closure_9 = onReject(17456)({ onReject, analyticsType: memo });
      const effect = react.useEffect(() => {
        closure_4.dismiss();
      }, []);
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      let obj2 = { style: tmp2.contentContainer, spacing: 12, children: items1 };
      const Stack = Stack_Stack.Stack;
      items1 = [closure_9(DisguiseSpotIllustration.DisguiseSpotIllustration, { scale: 0.5 }), ,];
      const Text = Text_Text.Text;
      if (headerText == null) {
        const intl = intl4.intl;
        headerText = intl.string(intl4.t.FpoiHe);
      }
      const items2 = [
        closure_9(Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }),
      ];
      let obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: bodyText };
      const Text2 = Text_Text.Text;
      if (bodyText == null) {
        const intl2 = intl4.intl;
        bodyText = intl2.string(intl4.t["/CidxO"]);
      }
      let obj4 = { startHeight: 900, startExpanded: true, children: closure_10(Stack, obj2) };
      let obj5 = { children: items2 };
      items2[1] = closure_9(Text2, obj3);
      items1[1] = closure_10(closure_5, obj5);
      const obj6 = {
        grow: true,
        onPress() {
          const tmp = closure_9();
          dependencyMap();
          let obj = SharedCaptchaUtils;
          const result = obj.emitCaptchaDistributionMetric(constants);
          let obj2 = CaptchaUtilsDefault;
          const showCaptchaResult = obj2.showCaptcha(closure_4, react, closure_5);
          const nextPromise = showCaptchaResult.then((result) => {
            const obj = state;
            state = state.getState();
            let name;
            if (state != null) {
              const first = state.routes[0];
              if (first != null) {
                name = first.name;
              }
            }
            const tmp4 = "auth" === name && closure_6();
            if (tmp4) {
              const obj3 = { step: constants.CAPTCHA, actionType: navigation.SUBMITTED };
              const obj2 = require("RegistrationUtils");
              obj2.trackRegTransition(obj3);
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
            const tmp15 = "auth" === name1 && closure_6();
            if (tmp15) {
              const obj5 = { step: constants.CAPTCHA, actionType: navigation.SUCCESS };
              const obj4 = require("RegistrationUtils");
              obj4.trackRegTransition(obj5);
            }
          });
          nextPromise.catch((error) => {
            if (onReject != null) {
              tmp(error);
            }
          });
        },
        text: intl3.string(intl4.t["cY+Oob"]),
      };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items1[2] = closure_9(Button, obj6);
      return closure_9(BottomSheet, obj4);
    };
let result = size.fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default tmp5;
