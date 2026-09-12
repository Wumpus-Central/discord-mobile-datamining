// === Module 11357: keepLocalCopy ===

// Module 11357 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11358 */;
import _mod11360 from "module_11360" /* 11360 */;
import _mod11361 from "module_11361" /* 11361 */;
import errorCodes from "errorCodes" /* 11362 */;
import _pickDirectory from "_pickDirectory" /* 11363 */;
import _pick from "_pick" /* 11364 */;
import _saveDocuments from "_saveDocuments" /* 11366 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11367 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11360.keepLocalCopy;
export const types = _mod11361.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;