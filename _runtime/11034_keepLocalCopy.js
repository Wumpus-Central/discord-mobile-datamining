// === Module 11034: keepLocalCopy ===

// Module 11034 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11035 */;
import _mod11037 from "module_11037" /* 11037 */;
import _mod11038 from "module_11038" /* 11038 */;
import errorCodes from "errorCodes" /* 11039 */;
import _pickDirectory from "_pickDirectory" /* 11040 */;
import _pick from "_pick" /* 11041 */;
import _saveDocuments from "_saveDocuments" /* 11043 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11044 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11037.keepLocalCopy;
export const types = _mod11038.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;