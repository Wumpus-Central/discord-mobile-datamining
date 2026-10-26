// === Module 12259: keepLocalCopy ===

// Module 12259 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12260 */;
import _mod12262 from "module_12262" /* 12262 */;
import _mod12263 from "module_12263" /* 12263 */;
import errorCodes from "errorCodes" /* 12264 */;
import _pickDirectory from "_pickDirectory" /* 12265 */;
import _pick from "_pick" /* 12266 */;
import _saveDocuments from "_saveDocuments" /* 12268 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12269 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12262.keepLocalCopy;
export const types = _mod12263.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;