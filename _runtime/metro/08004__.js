// _runtime/metro/08004__.js
import normalizeColor from "../07990_normalizeColor.js";
import _mod7994 from "07994__.js";
import _mod8005 from "08005__.js";
import "module_4707";
import module_4707_mod from "04707__.js";

let items1;
let module_4707;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = {
  autoCapitalize: module_4707.oneOf(["none", "sentences", "words", "characters"]),
  autoCompleteType: module_4707.oneOf([
    "cc-csc",
    "cc-exp",
    "cc-exp-month",
    "cc-exp-year",
    "cc-number",
    "email",
    "name",
    "password",
    "postal-code",
    "street-address",
    "tel",
    "username",
    "off",
  ]),
  autoCorrect: module_4707.bool,
  spellCheck: module_4707.bool,
  autoFocus: module_4707.bool,
  allowFontScaling: module_4707.bool,
  maxFontSizeMultiplier: module_4707.number,
  editable: module_4707.bool,
  keyboardType: module_4707.oneOf([
    "default",
    "email-address",
    "numeric",
    "phone-pad",
    "number-pad",
    "ascii-capable",
    "numbers-and-punctuation",
    "url",
    "name-phone-pad",
    "decimal-pad",
    "twitter",
    "web-search",
    "ascii-capable-number-pad",
    "visible-password",
  ]),
  keyboardAppearance: module_4707.oneOf(["default", "light", "dark"]),
  returnKeyType: module_4707.oneOf([
    "done",
    "go",
    "next",
    "search",
    "send",
    "none",
    "previous",
    "default",
    "emergency-call",
    "google",
    "join",
    "route",
    "yahoo",
  ]),
  returnKeyLabel: module_4707.string,
  maxLength: module_4707.number,
  numberOfLines: module_4707.number,
  disableFullscreenUI: module_4707.bool,
  enablesReturnKeyAutomatically: module_4707.bool,
  multiline: module_4707.bool,
  textBreakStrategy: module_4707.oneOf(["simple", "highQuality", "balanced"]),
  onBlur: module_4707.func,
  onFocus: module_4707.func,
  onChange: module_4707.func,
  onChangeText: module_4707.func,
  onContentSizeChange: module_4707.func,
  onTextInput: module_4707.func,
  onEndEditing: module_4707.func,
  onSelectionChange: module_4707.func,
  onSubmitEditing: module_4707.func,
  onKeyPress: module_4707.func,
  onLayout: module_4707.func,
  onScroll: module_4707.func,
  placeholder: module_4707.string,
  placeholderTextColor: normalizeColor,
  scrollEnabled: module_4707.bool,
  secureTextEntry: module_4707.bool,
  selectionColor: normalizeColor,
  selection: module_4707.shape(obj2),
  value: module_4707.string,
  defaultValue: module_4707.string,
  clearButtonMode: module_4707.oneOf(["never", "while-editing", "unless-editing", "always"]),
  clearTextOnFocus: module_4707.bool,
  selectTextOnFocus: module_4707.bool,
  blurOnSubmit: module_4707.bool,
  style: _mod8005.style,
  underlineColorAndroid: normalizeColor,
  inlineImageLeft: module_4707.string,
  inlineImagePadding: module_4707.number,
  rejectResponderTermination: module_4707.bool,
  dataDetectorTypes: oneOfType(items1),
  caretHidden: module_4707.bool,
  contextMenuHidden: module_4707.bool,
  inputAccessoryViewID: module_4707.string,
  textContentType: module_4707.oneOf([
    "none",
    "URL",
    "addressCity",
    "addressCityAndState",
    "addressState",
    "countryName",
    "creditCardNumber",
    "emailAddress",
    "familyName",
    "fullStreetAddress",
    "givenName",
    "jobTitle",
    "location",
    "middleName",
    "name",
    "namePrefix",
    "nameSuffix",
    "nickname",
    "organizationName",
    "postalCode",
    "streetAddressLine1",
    "streetAddressLine2",
    "sublocality",
    "telephoneNumber",
    "username",
    "password",
    "newPassword",
    "oneTimeCode",
  ]),
  showSoftInputOnFocus: module_4707.bool,
};
const module_7994 = Object.assign(_mod7994);
module_4707 = module_4707_mod;
obj2 = { start: module_4707.number.isRequired, end: module_4707.number };
module_4707 = module_4707_mod;
oneOfType = module_4707.oneOfType;
module_4707 = module_4707_mod;
items1 = [module_4707.oneOf(items)];
module_4707 = module_4707_mod;
const arrayOf = module_4707.arrayOf;
module_4707 = module_4707_mod;
items1[1] = arrayOf(module_4707.oneOf(items));
module_4707 = module_4707_mod;

export default obj;
