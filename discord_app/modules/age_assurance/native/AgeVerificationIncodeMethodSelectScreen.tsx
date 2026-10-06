// discord_app/modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx
import AgeVerificationConstants from "../AgeVerificationConstants.tsx";
import AgeVerificationIncodeWebViewConstants from "../AgeVerificationIncodeWebViewConstants.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_1, dependencyMap;

let c10;
let c9;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const VerificationMethod = AgeVerificationConstants.VerificationMethod;
let closure_8 = AgeVerificationIncodeWebViewConstants.buildIncodeParamsInjection;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({
  container: { alignSelf: "stretch" },
  header: { textAlign: "center" },
  loadingContainer: { flex: 1, alignSelf: "stretch" },
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  let c2;
  let c3;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let items3;
  let items4;
  let tmp11;
  let tmp2;
  let tmp4;
  let tmp6Result;
  onMethodSelected = onMethodSelected.onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c2] = tmp;
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, c3] = tmp3;
  const tmp5 = closure_11();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (method) => {
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = undefined;
              tmp = undefined;
              tmp(true);
              tmp32(false);
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: obj3.requestIncodeMethodSession(method), done: false };
              obj3 = method(closure_2_2[8]);
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            tmp(false);
            throw tmp32;
          } else {
            if (2 === c5) {
              c4 = 1;
              tmp32(true);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              tmp(false);
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              if (null == closure_1) {
                tmp32(true);
                c4 = 0;
                tmp(false);
                c6 = 3;
                return { value: undefined, done: true };
              } else {
                const obj7 = {
                  apiUrl: closure_1.apiUrl,
                  sessionToken: closure_1.sessionToken,
                  consentId: closure_1.consentId,
                  interviewId: closure_1.interviewId,
                  theme: theme.theme,
                  method,
                };
                tmp = closure_2_8(obj7, closure_1);
                method(tmp);
                c4 = 1;
              }
            }
            c4 = 0;
            tmp(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp32) {
          if (0 === c4) {
            c6 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  const items = [onMethodSelected, trustedOrigin];
  _slicedToArray = useCallback(function () {
    return closure_0(...arguments);
  }, items);
  const obj = { children: null };
  const ModalScreen = onMethodSelected(8128).ModalScreen;
  const ModalContent = onMethodSelected(8129).ModalContent;
  const obj2 = { children: null };
  if (tmp2) {
    let obj3 = {
      align: "center",
      justify: "center",
      spacing: 16,
      style: tmp5.loadingContainer,
      children: closure_9(tmp7(5975).ActivityIndicator, { size: "large" }),
    };
    const Stack4 = tmp7(5600).Stack;
    obj2.children = closure_9(Stack4, obj3);
    obj.children = closure_9(ModalContent, obj2);
    tmp11 = obj;
  } else {
    const obj4 = { align: "stretch", spacing: 24, style: tmp5.container, children: items3 };
    const Stack = tmp7(5600).Stack;
    let obj5 = { align: "center", justify: "center", spacing: 16, children: items1 };
    const Stack2 = tmp7(5600).Stack;
    items1 = [closure_9(tmp7(8130).ShieldSpotIllustration, { height: 100, width: 177 })];
    const obj6 = { align: "center", justify: "center", spacing: 8, children: items2 };
    const Stack3 = tmp7(5600).Stack;
    let obj7 = {
      accessibilityRole: "header",
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp5.header,
      children: intl.string(trustedOrigin(3073).eZvwAe),
    };
    const Text = tmp7(4892).Text;
    intl = tmp7(1126).intl;
    items2 = [closure_9(Text, obj7)];
    const obj8 = {
      variant: "text-md/medium",
      color: "text-strong",
      style: tmp5.header,
      children: intl2.string(trustedOrigin(3073)["5yWXmT"]),
    };
    const Text2 = tmp7(4892).Text;
    intl2 = tmp7(1126).intl;
    items2[1] = closure_9(Text2, obj8);
    items1[1] = closure_10(Stack3, obj6);
    items3 = [closure_10(Stack2, obj5), ,];
    if (tmp6Result) {
      const obj9 = {
        variant: "text-sm/medium",
        color: "text-feedback-critical",
        style: tmp5.header,
        children: intl3.string(onMethodSelected(1126).t.c6kn6F),
      };
      const Text3 = tmp7(4892).Text;
      intl3 = tmp7(1126).intl;
      tmp6Result = closure_9(Text3, obj9);
    }
    items3[1] = tmp6Result;
    const obj10 = { hasIcons: false, children: items4 };
    const TableRowGroup = tmp7(6081).TableRowGroup;
    const obj11 = {
      arrow: true,
      label: intl4.string(trustedOrigin(3073).rgXXcW),
      subLabel: intl5.string(trustedOrigin(3073).fm7qBC),
      onPress() {
        closure_4(VerificationMethod.FACIAL_AGE_ESTIMATION);
      },
    };
    const TableRow = tmp7(6000).TableRow;
    intl4 = tmp7(1126).intl;
    intl5 = tmp7(1126).intl;
    items4 = [closure_9(TableRow, obj11)];
    const obj12 = {
      arrow: true,
      label: intl6.string(trustedOrigin(3073)["NeVlw/"]),
      subLabel: intl7.string(trustedOrigin(3073).ARmJ0M),
      onPress() {
        closure_4(VerificationMethod.ID_VERIFICATION);
      },
    };
    const TableRow2 = tmp7(6000).TableRow;
    intl6 = tmp7(1126).intl;
    intl7 = tmp7(1126).intl;
    items4[1] = closure_9(TableRow2, obj12);
    items3[2] = closure_10(TableRowGroup, obj10);
    obj2.children = closure_10(Stack, obj4);
    obj.children = closure_9(ModalContent, obj2);
    tmp11 = obj;
  }
  return closure_9(ModalScreen, tmp11);
}
