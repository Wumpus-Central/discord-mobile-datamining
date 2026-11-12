// === Module 11046: keepLocalCopy ===

// Module 11046 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11047 */;
import _mod11049 from "module_11049" /* 11049 */;
import _mod11050 from "module_11050" /* 11050 */;
import errorCodes from "errorCodes" /* 11051 */;
import _pickDirectory from "_pickDirectory" /* 11052 */;
import _pick from "_pick" /* 11053 */;
import _saveDocuments from "_saveDocuments" /* 11055 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11056 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11049.keepLocalCopy;
export const types = _mod11050.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;