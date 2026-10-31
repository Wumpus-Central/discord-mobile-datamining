// === Module 11100: keepLocalCopy ===

// Module 11100 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11101 */;
import _mod11103 from "module_11103" /* 11103 */;
import _mod11104 from "module_11104" /* 11104 */;
import errorCodes from "errorCodes" /* 11105 */;
import _pickDirectory from "_pickDirectory" /* 11106 */;
import _pick from "_pick" /* 11107 */;
import _saveDocuments from "_saveDocuments" /* 11109 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11110 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11103.keepLocalCopy;
export const types = _mod11104.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;