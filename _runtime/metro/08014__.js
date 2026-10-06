// _runtime/metro/08014__.js
import normalizeColor from "../08000_normalizeColor.js";
import _mod8004 from "08004__.js";
import _mod8015 from "08015__.js";
import "module_4713";
import module_4713_mod from "04713__.js";

let items1;
let module_4713;
let obj2;
let oneOfType;
const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = {
  autoCapitalize: module_4713.oneOf(["none", "sentences", "words", "characters"]),
  autoCompleteType: module_4713.oneOf([
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
  autoCorrect: module_4713.bool,
  spellCheck: module_4713.bool,
  autoFocus: module_4713.bool,
  allowFontScaling: module_4713.bool,
  maxFontSizeMultiplier: module_4713.number,
  editable: module_4713.bool,
  keyboardType: module_4713.oneOf([
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
  keyboardAppearance: module_4713.oneOf(["default", "light", "dark"]),
  returnKeyType: module_4713.oneOf([
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
  returnKeyLabel: module_4713.string,
  maxLength: module_4713.number,
  numberOfLines: module_4713.number,
  disableFullscreenUI: module_4713.bool,
  enablesReturnKeyAutomatically: module_4713.bool,
  multiline: module_4713.bool,
  textBreakStrategy: module_4713.oneOf(["simple", "highQuality", "balanced"]),
  onBlur: module_4713.func,
  onFocus: module_4713.func,
  onChange: module_4713.func,
  onChangeText: module_4713.func,
  onContentSizeChange: module_4713.func,
  onTextInput: module_4713.func,
  onEndEditing: module_4713.func,
  onSelectionChange: module_4713.func,
  onSubmitEditing: module_4713.func,
  onKeyPress: module_4713.func,
  onLayout: module_4713.func,
  onScroll: module_4713.func,
  placeholder: module_4713.string,
  placeholderTextColor: normalizeColor,
  scrollEnabled: module_4713.bool,
  secureTextEntry: module_4713.bool,
  selectionColor: normalizeColor,
  selection: module_4713.shape(obj2),
  value: module_4713.string,
  defaultValue: module_4713.string,
  clearButtonMode: module_4713.oneOf(["never", "while-editing", "unless-editing", "always"]),
  clearTextOnFocus: module_4713.bool,
  selectTextOnFocus: module_4713.bool,
  blurOnSubmit: module_4713.bool,
  style: _mod8015.style,
  underlineColorAndroid: normalizeColor,
  inlineImageLeft: module_4713.string,
  inlineImagePadding: module_4713.number,
  rejectResponderTermination: module_4713.bool,
  dataDetectorTypes: oneOfType(items1),
  caretHidden: module_4713.bool,
  contextMenuHidden: module_4713.bool,
  inputAccessoryViewID: module_4713.string,
  textContentType: module_4713.oneOf([
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
  showSoftInputOnFocus: module_4713.bool,
};
const module_8004 = Object.assign(_mod8004);
module_4713 = module_4713_mod;
obj2 = { start: module_4713.number.isRequired, end: module_4713.number };
module_4713 = module_4713_mod;
oneOfType = module_4713.oneOfType;
module_4713 = module_4713_mod;
items1 = [module_4713.oneOf(items)];
module_4713 = module_4713_mod;
const arrayOf = module_4713.arrayOf;
module_4713 = module_4713_mod;
items1[1] = arrayOf(module_4713.oneOf(items));
module_4713 = module_4713_mod;

export default obj;
