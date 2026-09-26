// === Module 6467: FormPhoneOrEmail ===

// Module 6467 (FormPhoneOrEmail)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function CountryCodeSelector(alpha2) {
  let str = alpha2.alpha2;
  ({ show, countryCode, onPress } = alpha2);
  const tmp = closure_7();
  if (str == null) {
    str = "";
  }
  const combined = "" + str + " " + countryCode;
  let tmp3 = null;
  if (show) {
    const obj = { style: tmp.selectorOuterContainer, children: null };
    const obj2 = { style: tmp.selectorContainer, children: null };
    const obj3 = { onPress, style: tmp.selectorPressable, androidRippleConfig: { borderless: true }, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: null, children: null };
    const intl = util.intl;
    obj3.accessibilityHint = intl.string(util.t.GwAW3k);
    const obj4 = { style: tmp.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    obj3.children = hasOwnProperty(Text_Text.Text, obj4);
    const items = [hasOwnProperty(Pressables.PressableOpacity, obj3), ];
    const obj5 = { style: tmp.separator };
    items[1] = hasOwnProperty(View, obj5);
    obj2.children = items;
    obj.children = timestampProducer(View, obj2);
    tmp3 = hasOwnProperty(View, obj);
  }
  return tmp3;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" }, separator: { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 } };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ label, error, value, hint, onChangeText: require, alpha2: importDefault, countryCode } = arg0);
  ({ onPressCountrySelector: noop, forceMode } = arg0);
  ({ style, textInputStyle } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, textInputStyle: 0, label: 0, error: 0, value: 0, hint: 0, onChangeText: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }));
  ref = undefined;
  function handleChangeText(value) {
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (require != null) {
      require(value, str);
    }
  }
  const tmp2 = ref();
  const show = require("PhoneOrEmailUtils").shouldShowCountryCodeSelector(forceMode, value);
  const obj2 = { handleChangeText, value };
  ref = noop.useRef(obj2);
  const effect = noop.useEffect(() => {
    closure_7.current = obj2;
  });
  const items = [countryCode];
  const effect1 = noop.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  const obj3 = { style, children: null };
  let tmp9 = null;
  if (null != label) {
    const obj4 = { style: tmp2.label, children: label };
    tmp9 = show(require("FreeFormLabel"), obj4);
  }
  const items1 = [tmp9, , , ];
  const obj5 = {};
  const obj = require("PhoneOrEmailUtils");
  const tmp7 = obj2;
  const merged1 = Object.assign(merged);
  obj5.renderLeadingComponent = function renderLeadingComponent() {
    return hasOwnProperty(CountryCodeSelector, { show, alpha2, countryCode, onPress });
  };
  obj5.error = null != error;
  obj5.ref = ref;
  obj5.value = value;
  const items2 = [tmp2.input, textInputStyle];
  obj5.style = items2;
  obj5.onChangeText = handleChangeText;
  let str = "emailAddress";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  obj5.textContentType = str;
  let str2 = "email-address";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  obj5.keyboardType = str2;
  obj5.accessibilityLabel = label;
  obj5.accessibilityHint = hint;
  items1[1] = show(require("FreeFormTextInput"), obj5);
  let tmp12Result = null;
  if (null != error) {
    const obj6 = { style: tmp2.error, children: error };
    tmp12Result = tmp12(require("FreeFormErrorLabel"), obj6);
  }
  items1[2] = tmp12Result;
  let tmp12Result2 = null;
  if (null != hint) {
    const obj7 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
    tmp12Result2 = tmp12(require("Text/Text").Text, obj7);
  }
  items1[3] = tmp12Result2;
  obj3.children = items1;
  return tmp7(forceMode, obj3);
});