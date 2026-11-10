// === Module 11241: keepLocalCopy ===

// Module 11241 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11242 */;
import _mod11244 from "module_11244" /* 11244 */;
import _mod11245 from "module_11245" /* 11245 */;
import errorCodes from "errorCodes" /* 11246 */;
import _pickDirectory from "_pickDirectory" /* 11247 */;
import _pick from "_pick" /* 11248 */;
import _saveDocuments from "_saveDocuments" /* 11250 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11251 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11244.keepLocalCopy;
export const types = _mod11245.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;