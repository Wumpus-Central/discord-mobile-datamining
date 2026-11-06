// === Module 11250: keepLocalCopy ===

// Module 11250 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11251 */;
import _mod11253 from "module_11253" /* 11253 */;
import _mod11254 from "module_11254" /* 11254 */;
import errorCodes from "errorCodes" /* 11255 */;
import _pickDirectory from "_pickDirectory" /* 11256 */;
import _pick from "_pick" /* 11257 */;
import _saveDocuments from "_saveDocuments" /* 11259 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11260 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11253.keepLocalCopy;
export const types = _mod11254.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;