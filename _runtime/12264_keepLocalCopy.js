// === Module 12264: keepLocalCopy ===

// Module 12264 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12265 */;
import _mod12267 from "module_12267" /* 12267 */;
import _mod12268 from "module_12268" /* 12268 */;
import errorCodes from "errorCodes" /* 12269 */;
import _pickDirectory from "_pickDirectory" /* 12270 */;
import _pick from "_pick" /* 12271 */;
import _saveDocuments from "_saveDocuments" /* 12273 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12274 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12267.keepLocalCopy;
export const types = _mod12268.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;