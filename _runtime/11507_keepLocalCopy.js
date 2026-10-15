// === Module 11507: keepLocalCopy ===

// Module 11507 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11508 */;
import _mod11510 from "module_11510" /* 11510 */;
import _mod11511 from "module_11511" /* 11511 */;
import errorCodes from "errorCodes" /* 11512 */;
import _pickDirectory from "_pickDirectory" /* 11513 */;
import _pick from "_pick" /* 11514 */;
import _saveDocuments from "_saveDocuments" /* 11516 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11517 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11510.keepLocalCopy;
export const types = _mod11511.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;