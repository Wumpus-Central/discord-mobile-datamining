// _runtime/00145_Commands.js
let obj = { uiViewClassName: "AndroidTextInput", bubblingEventTypes: { topEndEditing: { phasedRegistrationNames: { bubbled: "onEndEditing", captured: "onEndEditingCapture" } }, topKeyPress: { phasedRegistrationNames: { bubbled: "onKeyPress", captured: "onKeyPressCapture" } }, topSubmitEditing: { phasedRegistrationNames: { bubbled: "onSubmitEditing", captured: "onSubmitEditingCapture" } } }, directEventTypes: { topScroll: { registrationName: "onScroll" } }, validAttributes: null };
obj = { acceptDragAndDropTypes: true, maxFontSizeMultiplier: true, adjustsFontSizeToFit: true, minimumFontScale: true, autoFocus: true, placeholder: true, inlineImagePadding: true, contextMenuHidden: true, textShadowColor: null, maxLength: true, selectTextOnFocus: true, textShadowRadius: true, underlineColorAndroid: null, textDecorationLine: true, submitBehavior: true, textAlignVertical: true, fontStyle: true, textShadowOffset: true, selectionColor: null, selectionHandleColor: null, placeholderTextColor: null, importantForAutofill: true, lineHeight: true, textTransform: true, returnKeyType: true, keyboardType: true, multiline: true, color: null, autoComplete: true, numberOfLines: true, letterSpacing: true, returnKeyLabel: true, fontSize: true, onKeyPress: true, cursorColor: null, text: true, showSoftInputOnFocus: true, textAlign: true, autoCapitalize: true, autoCorrect: true, caretHidden: true, secureTextEntry: true, textBreakStrategy: true, onScroll: true, onContentSizeChange: true, disableFullscreenUI: true, includeFontPadding: true, fontWeight: true, fontFamily: true, allowFontScaling: true, onSelectionChange: true, mostRecentEventCount: true, inlineImageLeft: true, editable: true, fontVariant: true, borderBottomRightRadius: true, borderBottomColor: null, borderRadius: true, borderRightColor: null, borderColor: null, borderTopRightRadius: true, borderStyle: true, borderBottomLeftRadius: true, borderLeftColor: null, borderTopLeftRadius: true, borderTopColor: null };
obj[8] = require("result").colorAttribute;
obj[12] = require("result").colorAttribute;
obj[18] = require("result").colorAttribute;
obj[19] = require("result").colorAttribute;
obj[20] = require("result").colorAttribute;
obj[27] = require("result").colorAttribute;
obj[34] = require("result").colorAttribute;
obj[56] = require("result").colorAttribute;
obj[58] = require("result").colorAttribute;
obj[59] = require("result").colorAttribute;
obj[63] = require("result").colorAttribute;
obj[65] = require("result").colorAttribute;
obj[3] = obj;
const tmp2 = require("codegenNativeCommands")({ supportedCommands: ["focus", "blur", "setTextAndSelection"] });

export default require("setRuntimeConfigProvider").get("AndroidTextInput", () => obj);
export const Commands = tmp2;
export const __INTERNAL_VIEW_CONFIG = obj;