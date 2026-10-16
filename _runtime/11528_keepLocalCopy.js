// === Module 11528: keepLocalCopy ===

// Module 11528 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11529 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import errorCodes from "errorCodes" /* 11533 */;
import _pickDirectory from "_pickDirectory" /* 11534 */;
import _pick from "_pick" /* 11535 */;
import _saveDocuments from "_saveDocuments" /* 11537 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11538 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11531.keepLocalCopy;
export const types = _mod11532.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;