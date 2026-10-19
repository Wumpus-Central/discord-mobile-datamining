// === Module 11600: keepLocalCopy ===

// Module 11600 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11601 */;
import _mod11603 from "module_11603" /* 11603 */;
import _mod11604 from "module_11604" /* 11604 */;
import errorCodes from "errorCodes" /* 11605 */;
import _pickDirectory from "_pickDirectory" /* 11606 */;
import _pick from "_pick" /* 11607 */;
import _saveDocuments from "_saveDocuments" /* 11609 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11610 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11603.keepLocalCopy;
export const types = _mod11604.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;