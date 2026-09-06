// === Module 7046: FormPhoneOrEmail ===

// Module 7046 (FormPhoneOrEmail)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;

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
    let obj = { style: tmp.selectorOuterContainer, children: null };
    obj = { style: tmp.selectorContainer, children: null };
    obj = { onPress, style: tmp.selectorPressable, androidRippleConfig: { borderless: true }, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: null, children: null };
    const intl = util.intl;
    obj.accessibilityHint = intl.string(util.t.GwAW3k);
    const obj1 = { style: tmp.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    obj.children = hasOwnProperty(Text_Text.Text, obj1);
    const items = [hasOwnProperty(Pressables.PressableOpacity, obj), ];
    const obj2 = { style: tmp.separator };
    items[1] = hasOwnProperty(View, obj2);
    obj.children = items;
    obj.children = timestampProducer(View, obj);
    tmp3 = hasOwnProperty(View, obj);
  }
  return tmp3;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" }, separator: null };
obj = { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
obj.separator = obj;
let closure_7 = createStyles.createStyles(obj);
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
  let current = require("PhoneOrEmailUtils");
  const show = current.shouldShowCountryCodeSelector(forceMode, value);
  current = { handleChangeText, value };
  ref = noop.useRef(current);
  const effect = noop.useEffect(() => {
    closure_7.current = current;
  });
  const items = [countryCode];
  const effect1 = noop.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  current = { style, children: null };
  let tmp9 = null;
  if (null != label) {
    const obj1 = { style: tmp2.label, children: label };
    tmp9 = show(require("FreeFormLabel"), obj1);
  }
  const items1 = [tmp9, , , ];
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.renderLeadingComponent = function renderLeadingComponent() {
    return hasOwnProperty(CountryCodeSelector, { show, alpha2, countryCode, onPress });
  };
  obj2.error = null != error;
  obj2.ref = ref;
  obj2.value = value;
  const items2 = [tmp2.input, textInputStyle];
  obj2.style = items2;
  obj2.onChangeText = handleChangeText;
  let str = "emailAddress";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  obj2.textContentType = str;
  let str2 = "email-address";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  obj2.keyboardType = str2;
  obj2.accessibilityLabel = label;
  obj2.accessibilityHint = hint;
  items1[1] = show(require("FreeFormTextInput"), obj2);
  let tmp12Result = null;
  if (null != error) {
    const obj3 = { style: tmp2.error, children: error };
    tmp12Result = tmp12(require("FreeFormErrorLabel"), obj3);
  }
  items1[2] = tmp12Result;
  tmp12Result = null;
  if (null != hint) {
    const obj4 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
    tmp12Result = tmp12(require("Text/Text").Text, obj4);
  }
  items1[3] = tmp12Result;
  current.children = items1;
  return current(forceMode, current);
});