// === Module 11358: keepLocalCopy ===

// Module 11358 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11359 */;
import _mod11361 from "module_11361" /* 11361 */;
import _mod11362 from "module_11362" /* 11362 */;
import errorCodes from "errorCodes" /* 11363 */;
import _pickDirectory from "_pickDirectory" /* 11364 */;
import _pick from "_pick" /* 11365 */;
import _saveDocuments from "_saveDocuments" /* 11367 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11368 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11361.keepLocalCopy;
export const types = _mod11362.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;