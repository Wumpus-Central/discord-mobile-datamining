// === Module 11021: keepLocalCopy ===

// Module 11021 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11022 */;
import _mod11024 from "module_11024" /* 11024 */;
import _mod11025 from "module_11025" /* 11025 */;
import errorCodes from "errorCodes" /* 11026 */;
import _pickDirectory from "_pickDirectory" /* 11027 */;
import _pick from "_pick" /* 11028 */;
import _saveDocuments from "_saveDocuments" /* 11030 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11031 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11024.keepLocalCopy;
export const types = _mod11025.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;