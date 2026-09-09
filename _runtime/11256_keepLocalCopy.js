// === Module 11256: keepLocalCopy ===

// Module 11256 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11257 */;
import _mod11259 from "module_11259" /* 11259 */;
import _mod11260 from "module_11260" /* 11260 */;
import errorCodes from "errorCodes" /* 11261 */;
import _pickDirectory from "_pickDirectory" /* 11262 */;
import _pick from "_pick" /* 11263 */;
import _saveDocuments from "_saveDocuments" /* 11265 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11266 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11259.keepLocalCopy;
export const types = _mod11260.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;