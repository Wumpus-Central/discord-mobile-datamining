// === Module 11113: keepLocalCopy ===

// Module 11113 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11114 */;
import _mod11116 from "module_11116" /* 11116 */;
import _mod11117 from "module_11117" /* 11117 */;
import errorCodes from "errorCodes" /* 11118 */;
import _pickDirectory from "_pickDirectory" /* 11119 */;
import _pick from "_pick" /* 11120 */;
import _saveDocuments from "_saveDocuments" /* 11122 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11123 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11116.keepLocalCopy;
export const types = _mod11117.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;