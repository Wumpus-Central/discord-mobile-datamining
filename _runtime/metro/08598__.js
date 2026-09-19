// _runtime/metro/08598__.js
import colorPropType from "../08584_colorPropType.js";
import _mod8588 from "08588__.js";
import _mod8599 from "08599__.js";
import emptyFunction_mod from "04585__.js";
import "module_4585";

const items = ["phoneNumber", "link", "address", "calendarEvent", "none", "all"];
const obj = {};
const module_8588 = Object.assign(_mod8588);
let emptyFunction = emptyFunction_mod;
obj.autoCapitalize = emptyFunction.oneOf(["none", "sentences", "words", "characters"]);
let emptyFunction = emptyFunction_mod;
obj.autoCompleteType = emptyFunction.oneOf([
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
]);
obj.autoCorrect = emptyFunction.bool;
obj.spellCheck = emptyFunction.bool;
obj.autoFocus = emptyFunction.bool;
obj.allowFontScaling = emptyFunction.bool;
obj.maxFontSizeMultiplier = emptyFunction.number;
obj.editable = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.keyboardType = emptyFunction.oneOf([
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
]);
let emptyFunction = emptyFunction_mod;
obj.keyboardAppearance = emptyFunction.oneOf(["default", "light", "dark"]);
let emptyFunction = emptyFunction_mod;
obj.returnKeyType = emptyFunction.oneOf([
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
]);
obj.returnKeyLabel = emptyFunction.string;
obj.maxLength = emptyFunction.number;
obj.numberOfLines = emptyFunction.number;
obj.disableFullscreenUI = emptyFunction.bool;
obj.enablesReturnKeyAutomatically = emptyFunction.bool;
obj.multiline = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.textBreakStrategy = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj.onBlur = emptyFunction.func;
obj.onFocus = emptyFunction.func;
obj.onChange = emptyFunction.func;
obj.onChangeText = emptyFunction.func;
obj.onContentSizeChange = emptyFunction.func;
obj.onTextInput = emptyFunction.func;
obj.onEndEditing = emptyFunction.func;
obj.onSelectionChange = emptyFunction.func;
obj.onSubmitEditing = emptyFunction.func;
obj.onKeyPress = emptyFunction.func;
obj.onLayout = emptyFunction.func;
obj.onScroll = emptyFunction.func;
obj.placeholder = emptyFunction.string;
obj.placeholderTextColor = colorPropType;
obj.scrollEnabled = emptyFunction.bool;
obj.secureTextEntry = emptyFunction.bool;
obj.selectionColor = colorPropType;
let emptyFunction = emptyFunction_mod;
obj.selection = emptyFunction.shape({ start: emptyFunction.number.isRequired, end: emptyFunction.number });
obj.value = emptyFunction.string;
obj.defaultValue = emptyFunction.string;
let emptyFunction = emptyFunction_mod;
obj.clearButtonMode = emptyFunction.oneOf(["never", "while-editing", "unless-editing", "always"]);
obj.clearTextOnFocus = emptyFunction.bool;
obj.selectTextOnFocus = emptyFunction.bool;
obj.blurOnSubmit = emptyFunction.bool;
obj.style = _mod8599.style;
obj.underlineColorAndroid = colorPropType;
obj.inlineImageLeft = emptyFunction.string;
obj.inlineImagePadding = emptyFunction.number;
obj.rejectResponderTermination = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
const items1 = [emptyFunction.oneOf(items)];
let emptyFunction = emptyFunction_mod;
items1[1] = emptyFunction.arrayOf(emptyFunction.oneOf(items));
obj.dataDetectorTypes = emptyFunction.oneOfType(items1);
obj.caretHidden = emptyFunction.bool;
obj.contextMenuHidden = emptyFunction.bool;
obj.inputAccessoryViewID = emptyFunction.string;
let emptyFunction = emptyFunction_mod;
obj.textContentType = emptyFunction.oneOf([
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
]);
obj.showSoftInputOnFocus = emptyFunction.bool;

export default obj;
