// _runtime/metro/00145__.js
import _mod26 from "00026__.js";
import codegenNativeCommandsDefault from "../00113_codegenNativeCommands.js";
import 00065__ from "00065__.js";

let obj2;
let obj3;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "AndroidTextInput", bubblingEventTypes: obj2, directEventTypes: { topScroll: { registrationName: "onScroll" } }, validAttributes: obj3 };
obj2 = { topEndEditing: { phasedRegistrationNames: { bubbled: "onEndEditing", captured: "onEndEditingCapture" } }, topKeyPress: { phasedRegistrationNames: { bubbled: "onKeyPress", captured: "onKeyPressCapture" } }, topSubmitEditing: { phasedRegistrationNames: { bubbled: "onSubmitEditing", captured: "onSubmitEditingCapture" } } };
obj3 = { acceptDragAndDropTypes: true, maxFontSizeMultiplier: true, adjustsFontSizeToFit: true, minimumFontScale: true, autoFocus: true, placeholder: true, inlineImagePadding: true, contextMenuHidden: true, textShadowColor: _mod26.colorAttribute, maxLength: true, selectTextOnFocus: true, textShadowRadius: true, underlineColorAndroid: _mod26.colorAttribute, textDecorationLine: true, submitBehavior: true, textAlignVertical: true, fontStyle: true, textShadowOffset: true, selectionColor: _mod26.colorAttribute, selectionHandleColor: _mod26.colorAttribute, placeholderTextColor: _mod26.colorAttribute, importantForAutofill: true, lineHeight: true, textTransform: true, returnKeyType: true, keyboardType: true, multiline: true, color: _mod26.colorAttribute, autoComplete: true, numberOfLines: true, letterSpacing: true, returnKeyLabel: true, fontSize: true, onKeyPress: true, cursorColor: _mod26.colorAttribute, text: true, showSoftInputOnFocus: true, textAlign: true, autoCapitalize: true, autoCorrect: true, caretHidden: true, secureTextEntry: true, textBreakStrategy: true, onScroll: true, onContentSizeChange: true, disableFullscreenUI: true, includeFontPadding: true, fontWeight: true, fontFamily: true, allowFontScaling: true, onSelectionChange: true, mostRecentEventCount: true, inlineImageLeft: true, editable: true, fontVariant: true, borderBottomRightRadius: true, borderBottomColor: _mod26.colorAttribute, borderRadius: true, borderRightColor: _mod26.colorAttribute, borderColor: _mod26.colorAttribute, borderTopRightRadius: true, borderStyle: true, borderBottomLeftRadius: true, borderLeftColor: _mod26.colorAttribute, borderTopLeftRadius: true, borderTopColor: _mod26.colorAttribute };
const tmp2 = codegenNativeCommandsDefault({ supportedCommands: ["focus", "blur", "setTextAndSelection"] });

export default module_65.get("AndroidTextInput", () => obj);
export const Commands = tmp2;
export { __INTERNAL_VIEW_CONFIG };