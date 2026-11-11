// === Module 11052: keepLocalCopy ===

// Module 11052 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11053 */;
import _mod11055 from "module_11055" /* 11055 */;
import _mod11056 from "module_11056" /* 11056 */;
import errorCodes from "errorCodes" /* 11057 */;
import _pickDirectory from "_pickDirectory" /* 11058 */;
import _pick from "_pick" /* 11059 */;
import _saveDocuments from "_saveDocuments" /* 11061 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11062 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11055.keepLocalCopy;
export const types = _mod11056.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;