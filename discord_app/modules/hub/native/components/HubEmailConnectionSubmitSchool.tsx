// === Module 12879: HubEmailConnectionSubmitSchool ===

// Module 12879 (HubEmailConnectionSubmitSchool)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1484 */;
import Text_Text from "Text/Text" /* 4634 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6713 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7091 */;
import HubEmailConnectionModal from "HubEmailConnectionModal" /* 12870 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12862).HubEmailConnectionSteps;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { paddingHorizontal: 16 }, title: { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 24 }, scrollViewContainer: { flexGrow: 2 }, input: { marginBottom: 8 }, redesignTextInput: null, redesignGrowSpacing: null, redesignSubmit: null };
let obj3 = { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
obj2.redesignTextInput = { borderRadius: nativeDefault.radii.lg };
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.redesignGrowSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj5 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.redesignSubmit = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionSubmitSchool.tsx");

export default function HubEmailConnectionSubmitSchool(arg0) {
  ({ onClose: require, email: importDefault } = arg0);
  _slicedToArray = undefined;
  let ref;
  value = undefined;
  closure_7 = async function _submitWaitlist() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp8;
            _slicedToArray(null);
            c3 = 2;
            asyncGeneratorStep(true);
            c4 = 3;
            c5 = 1;
            const obj5 = { value: tmp4(tmp47[11]).signup(importDefault, timestampProducer), done: false };
            return obj5;
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
            const obj = { school: closure_129_6, onClose: closure_129_0 };
            closure_129_2.push(constants.EMAIL_WAITLIST, obj);
            c3 = 1;
          }
          c3 = 0;
          closure_129_3(false);
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
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
  dependencyMap = useNavigation.useNavigation();
  const tmp4 = _slicedToArray(ref.useState(false), 2);
  closure_3 = tmp4[1];
  [obj2, c4] = ref.useState(null);
  ref = ref.useRef(null);
  [value, obj9.onChangeText] = ref.useState("");
  const obj3 = { ref, contentContainerStyle: null, children: null };
  const items = [tmp.scrollViewContainer, ];
  const tmp5 = _slicedToArray(ref.useState(null), 2);
  items[1] = { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16 };
  obj3.contentContainerStyle = items;
  let obj5 = { style: tmp.container, children: null };
  let obj6 = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["2FNWBG"]);
  const items1 = [closure_9(native.LegacyText, obj6), , ];
  const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t["/4y6ox"]);
  items1[1] = closure_9(Text_Text.Text, obj7);
  const obj9 = { label: null, placeholder: null, value: null, onChangeText: null, style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  let obj4 = { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16 };
  const tmp11 = closure_7;
  const intl3 = util.intl;
  obj9.label = intl3.string(util.t["L+AfJr"]);
  const intl4 = util.intl;
  obj9.placeholder = intl4.string(util.t.Y1btJd);
  obj9.value = value;
  ({ input: obj8.style, redesignTextInput: obj8.textStyle } = tmp);
  obj9.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  const obj10 = { children: null };
  obj9.error = anyErrorMessage;
  obj9.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj9.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[2] = closure_9(FreeFormInputGroupDefault, obj9);
  obj5.children = items1;
  const items2 = [closure_10(value, obj5), closure_9(value, { style: tmp.redesignGrowSpacing }), ];
  const obj12 = { style: tmp.redesignSubmit, children: null };
  const obj22 = { size: "lg", loading: tmp4[0], text: null, onPress: null };
  const intl5 = util.intl;
  obj22.text = intl5.string(util.t.PDsYAo);
  obj22.onPress = function submitWaitlist() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj12.children = closure_9(components_Button_Button.Button, obj22);
  items2[2] = closure_9(value, obj12);
  obj3.children = items2;
  obj10.children = closure_10(tmp11, obj3);
  return closure_9(HubEmailConnectionModal.HubEmailConnectionScreen, obj10);
};