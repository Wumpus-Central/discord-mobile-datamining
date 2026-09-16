// === Module 11370: keepLocalCopy ===

// Module 11370 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11371 */;
import _mod11373 from "module_11373" /* 11373 */;
import _mod11374 from "module_11374" /* 11374 */;
import errorCodes from "errorCodes" /* 11375 */;
import _pickDirectory from "_pickDirectory" /* 11376 */;
import _pick from "_pick" /* 11377 */;
import _saveDocuments from "_saveDocuments" /* 11379 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11380 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11373.keepLocalCopy;
export const types = _mod11374.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;