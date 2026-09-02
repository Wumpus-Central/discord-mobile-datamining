// === Module 7781: CountryCodeSelector ===

// Module 7781 (CountryCodeSelector)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5076 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function CountryCodeSelector(alpha2) {
  let str = alpha2.alpha2;
  ({ show, countryCode, onPress } = alpha2);
  const tmp = callback3();
  if (str == null) {
    str = "";
  }
  const combined = "" + str + " " + countryCode;
  let tmp3 = null;
  if (show) {
    let obj = { style: null, children: null };
    obj[0] = tmp.selectorOuterContainer;
    obj = { style: null, children: null };
    obj[0] = tmp.selectorContainer;
    obj = { onPress: null, style: null, androidRippleConfig: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
    obj[0] = onPress;
    obj[1] = tmp.selectorPressable;
    obj[2] = { borderless: true };
    obj[4] = combined;
    const intl = getSystemLocale.intl;
    obj[5] = intl.string(getSystemLocale.t.GwAW3k);
    obj1 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.selectorText;
    obj1[3] = combined;
    obj[6] = callback(Text.Text, obj1);
    const items = [callback(PressableBase.PressableOpacity, obj), ];
    const obj2 = { style: null };
    obj2[0] = tmp.separator;
    items[1] = callback(View, obj2);
    obj[1] = items;
    obj[1] = callback2(View, obj);
    tmp3 = callback(View, obj);
  }
  return tmp3;
}
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" }, separator: null };
obj = { borderLeftWidth: 1, borderLeftColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
obj[8] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ({ label, error, value, hint, onChangeText: require, alpha2: importDefault, countryCode } = arg0);
  ({ onPressCountrySelector: closure_3, forceMode } = arg0);
  ({ style, textInputStyle } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let callback;
  let obj;
  let callback3;
  function handleChangeText(value) {
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (callback != null) {
      callback(value, str);
    }
  }
  const tmp2 = callback3();
  obj = require(countryCode[8]);
  callback = obj.shouldShowCountryCodeSelector(forceMode, value);
  obj = { handleChangeText, value };
  callback3 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_7.current = obj;
  });
  const items = [countryCode];
  const effect1 = importAllResult.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  obj = { style, children: null };
  let tmp9 = null;
  if (null != label) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp2.label;
    obj1[1] = label;
    tmp9 = callback(importDefault(tmp4[9]), obj1);
  }
  const items1 = [tmp9, , , ];
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.renderLeadingComponent = function renderLeadingComponent() {
    return callback2(closure_1_8, { show: callback2, alpha2: closure_1, countryCode, onPress: closure_3 });
  };
  obj2.error = null != error;
  obj2.ref = ref;
  obj2.value = value;
  const items2 = [tmp2.input, textInputStyle];
  obj2.style = items2;
  obj2.onChangeText = handleChangeText;
  let str = "emailAddress";
  if (forceMode === require(countryCode[8]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  obj2.textContentType = str;
  let str2 = "email-address";
  if (forceMode === require(countryCode[8]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  obj2.keyboardType = str2;
  obj2.accessibilityLabel = label;
  obj2.accessibilityHint = hint;
  items1[1] = callback(importDefault(countryCode[10]), obj2);
  let tmp12Result = null;
  if (null != error) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp2.error;
    obj3[1] = error;
    tmp12Result = tmp12(importDefault(tmp4[11]), obj3);
  }
  items1[2] = tmp12Result;
  tmp12Result = null;
  if (null != hint) {
    const obj4 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj4[0] = tmp2.hint;
    obj4[3] = hint;
    tmp12Result = tmp12(tmp3(tmp4[7]).Text, obj4);
  }
  items1[3] = tmp12Result;
  obj[1] = items1;
  return obj(forceMode, obj);
});
const result = require("set").fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default forwardRefResult;