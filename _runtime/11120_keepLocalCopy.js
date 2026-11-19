// === Module 11120: keepLocalCopy ===

// Module 11120 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11121 */;
import _mod11123 from "module_11123" /* 11123 */;
import _mod11124 from "module_11124" /* 11124 */;
import errorCodes from "errorCodes" /* 11125 */;
import _pickDirectory from "_pickDirectory" /* 11126 */;
import _pick from "_pick" /* 11127 */;
import _saveDocuments from "_saveDocuments" /* 11129 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11130 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11123.keepLocalCopy;
export const types = _mod11124.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;