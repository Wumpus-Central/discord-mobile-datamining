// === Module 12736: HubEmailConnectionSubmitSchool ===

// Module 12736 (HubEmailConnectionSubmitSchool)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useNavigation from "useNavigation" /* 1483 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6605 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import HubEmailConnectionModal from "HubEmailConnectionModal" /* 12727 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12719).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: { paddingHorizontal: 16 }, title: null, description: null, scrollViewContainer: null, input: null, redesignTextInput: null, redesignGrowSpacing: null, redesignSubmit: null };
createStyles = { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
createStyles.title = createStyles;
createStyles.description = { textAlign: "center", marginBottom: 24 };
createStyles.scrollViewContainer = { flexGrow: 2 };
createStyles.input = { marginBottom: 8 };
createStyles.redesignTextInput = { borderRadius: nativeDefault.radii.lg };
let obj1 = { borderRadius: nativeDefault.radii.lg };
createStyles.redesignGrowSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj2 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles.redesignSubmit = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionSubmitSchool.tsx");

export default function HubEmailConnectionSubmitSchool(arg0) {
  ({ onClose: require, email: importDefault } = arg0);
  _slicedToArray = undefined;
  let ref;
  closure_7 = async function _submitWaitlist(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp8;
            _slicedToArray(null);
            c3 = 2;
            asyncGeneratorStep(true);
            let obj2 = tmp4(tmp47[11]);
            c4 = 3;
            c5 = 1;
            const obj1 = { value: obj2.signup(importDefault, timestampProducer), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_3(false);
          throw tmp47;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_0 = tmp47;
            const aPIError = new closure_0(tmp47[12]).APIError(closure_128_0);
            closure_129_4(aPIError);
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            obj = { school: closure_129_6, onClose: closure_129_0 };
            closure_129_2.push(constants.EMAIL_WAITLIST, obj);
            c3 = 1;
          }
          c3 = 0;
          closure_129_3(false);
          c5 = 3;
          obj2 = { value, done: true };
          return obj2;
        }
      } catch (tmp47) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp47;
        } else if (tmp2 === tmp49) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_11();
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  const tmp4 = _slicedToArray(ref.useState(false), 2);
  closure_3 = tmp4[1];
  [obj2, c4] = _slicedToArray(ref.useState(null), 2);
  ref = ref.useRef(null);
  const tmp7 = _slicedToArray(ref.useState(""), 2);
  value = tmp7[0];
  obj = { ref, contentContainerStyle: null, children: null };
  const items = [tmp.scrollViewContainer, ];
  obj = { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16 };
  items[1] = obj;
  obj.contentContainerStyle = items;
  let obj1 = { style: tmp.container, children: null };
  obj2 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["2FNWBG"]);
  const items1 = [closure_9(native.LegacyText, obj2), , ];
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t["/4y6ox"]);
  items1[1] = closure_9(Text_Text.Text, obj3);
  const obj4 = { label: null, placeholder: null, value: null, onChangeText: null, style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  const tmp11 = closure_7;
  const tmp5 = _slicedToArray(ref.useState(null), 2);
  const intl3 = util.intl;
  obj4.label = intl3.string(util.t["L+AfJr"]);
  const intl4 = util.intl;
  obj4.placeholder = intl4.string(util.t.Y1btJd);
  obj4.value = value;
  obj4.onChangeText = tmp7[1];
  ({ input: obj8.style, redesignTextInput: obj8.textStyle } = tmp);
  obj4.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (obj1 != null) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  const obj5 = { children: null };
  obj4.error = anyErrorMessage;
  obj4.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj4.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[2] = closure_9(FreeFormInputGroupDefault, obj4);
  obj1.children = items1;
  const items2 = [closure_10(value, obj1), closure_9(value, { style: tmp.redesignGrowSpacing }), ];
  const obj7 = { style: tmp.redesignSubmit, children: null };
  const obj8 = { size: "lg", loading: tmp4[0], text: null, onPress: null };
  const intl5 = tmp2(1114).intl;
  obj8.text = intl5.string(util.t.PDsYAo);
  obj8.onPress = function submitWaitlist() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7.children = closure_9(components_Button_Button.Button, obj8);
  items2[2] = closure_9(value, obj7);
  obj.children = items2;
  obj5.children = closure_10(tmp11, obj);
  return closure_9(HubEmailConnectionModal.HubEmailConnectionScreen, obj5);
};