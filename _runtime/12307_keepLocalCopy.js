// === Module 12307: keepLocalCopy ===

// Module 12307 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12308 */;
import _mod12310 from "module_12310" /* 12310 */;
import _mod12311 from "module_12311" /* 12311 */;
import errorCodes from "errorCodes" /* 12312 */;
import _pickDirectory from "_pickDirectory" /* 12313 */;
import _pick from "_pick" /* 12314 */;
import _saveDocuments from "_saveDocuments" /* 12316 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12317 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12310.keepLocalCopy;
export const types = _mod12311.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;