// === Module 12420: HubEmailConnectionSubmitSchool ===

// Module 12420 (HubEmailConnectionSubmitSchool)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1490 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6104 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import HubConstants from "HubConstants" /* 12400 */;
import HubEmailConnectionModal from "HubEmailConnectionModal" /* 12409 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c5, closure_2, dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
const Fonts = Constants.Fonts;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingHorizontal: 16 }, title: obj2, description: { textAlign: "center", marginBottom: 24 }, scrollViewContainer: { flexGrow: 2 }, input: { marginBottom: 8 }, redesignTextInput: obj3, redesignGrowSpacing: obj4, redesignSubmit: obj5 };
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
obj4 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionSubmitSchool.tsx");

export default function HubEmailConnectionSubmitSchool(arg0) {
  let Button;
  let _undefined;
  let anyErrorMessage;
  let c4;
  let closure_3;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj22;
  let tmp10;
  ({ onClose: require, email: importDefault } = arg0);
  dependencyMap = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  let ref;
  first1 = undefined;
  let obj = function _submitWaitlist() {
    obj = _asyncToGenerator(async function() {
      let closure_1;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              _undefined(null);
              c3 = 2;
              closure_2_3(true);
              c4 = 3;
              c5 = 1;
              const obj5 = { value: obj3.signup(importDefault, first1), done: false };
              obj3 = tmp(closure_2[11]);
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_3(false);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[12]).APIError(closure_0);
              closure_129_4(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              obj = { school: closure_129_6, onClose: closure_129_0 };
              closure_129_2.push(constants.EMAIL_WAITLIST, obj);
              c3 = 1;
            }
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp41) {
          closure_2 = tmp41;
          if (0 === c3) {
            c5 = 3;
            throw tmp41;
          } else if (1 === tmp43) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  const tmp3 = dependencyMap;
  obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [first, closure_3] = ref.useState(false);
  [obj2, c4] = ref.useState(null);
  _slicedToArray(ref.useState(null), 2);
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  ref = ref.useRef(null);
  [first1, tmp10] = ref.useState("");
  let obj3 = { ref, contentContainerStyle: items, children: items2 };
  items = [, ];
  items[0] = tmp.scrollViewContainer;
  let obj4 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16 };
  const HubEmailConnectionScreen = HubEmailConnectionModal.HubEmailConnectionScreen;
  items[1] = obj4;
  let obj5 = { style: tmp.container, children: items1 };
  let obj6 = { style: tmp.title, accessibilityRole: "header", children: intl.string(intl6.t["2FNWBG"]) };
  const LegacyText = native.LegacyText;
  intl = intl6.intl;
  items1 = [closure_9(LegacyText, obj6), , ];
  const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl6.t["/4y6ox"]) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items1[1] = closure_9(Text, obj7);
  const obj9 = {
    label: intl3.string(intl6.t["L+AfJr"]),
    placeholder: intl4.string(intl6.t.Y1btJd),
    value: first1,
    onChangeText: tmp10,
    style: null,
    textStyle: null,
    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
    error: anyErrorMessage,
    onFocus() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    },
    onBlur() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  const tmp15 = FreeFormInputGroupDefault;
  intl3 = intl6.intl;
  intl4 = intl6.intl;
  ({ input: obj8.style, redesignTextInput: obj8.textStyle } = tmp);
  anyErrorMessage = undefined;
  const tmp13 = obj;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj10 = { children: closure_10(tmp13, obj3) };
  items1[2] = closure_9(tmp15, obj9);
  items2 = [closure_10(tmp14, obj5), , ];
  const obj11 = { style: tmp.redesignGrowSpacing };
  items2[1] = closure_9(first1, obj11);
  const obj12 = { style: tmp.redesignSubmit, children: closure_9(Button, obj22) };
  obj22 = {
    size: "lg",
    loading: first,
    text: intl5.string(intl6.t.PDsYAo),
    onPress: function submitWaitlist() {
      return obj(...arguments);
    }
  };
  Button = components_Button_Button.Button;
  intl5 = intl6.intl;
  items2[2] = closure_9(first1, obj12);
  return closure_9(HubEmailConnectionScreen, obj10);
};