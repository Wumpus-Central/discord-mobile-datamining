// === Module 11362: keepLocalCopy ===

// Module 11362 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11363 */;
import _mod11365 from "module_11365" /* 11365 */;
import _mod11366 from "module_11366" /* 11366 */;
import errorCodes from "errorCodes" /* 11367 */;
import _pickDirectory from "_pickDirectory" /* 11368 */;
import _pick from "_pick" /* 11369 */;
import _saveDocuments from "_saveDocuments" /* 11371 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11372 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11365.keepLocalCopy;
export const types = _mod11366.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;