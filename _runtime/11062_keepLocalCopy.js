// === Module 11062: keepLocalCopy ===

// Module 11062 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11063 */;
import _mod11065 from "module_11065" /* 11065 */;
import _mod11066 from "module_11066" /* 11066 */;
import errorCodes from "errorCodes" /* 11067 */;
import _pickDirectory from "_pickDirectory" /* 11068 */;
import _pick from "_pick" /* 11069 */;
import _saveDocuments from "_saveDocuments" /* 11071 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11072 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11065.keepLocalCopy;
export const types = _mod11066.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;