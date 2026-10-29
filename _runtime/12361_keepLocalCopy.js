// === Module 12361: keepLocalCopy ===

// Module 12361 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12362 */;
import _mod12364 from "module_12364" /* 12364 */;
import _mod12365 from "module_12365" /* 12365 */;
import errorCodes from "errorCodes" /* 12366 */;
import _pickDirectory from "_pickDirectory" /* 12367 */;
import _pick from "_pick" /* 12368 */;
import _saveDocuments from "_saveDocuments" /* 12370 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12371 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12364.keepLocalCopy;
export const types = _mod12365.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;