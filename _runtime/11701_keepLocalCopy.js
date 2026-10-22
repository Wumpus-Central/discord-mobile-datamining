// === Module 11701: keepLocalCopy ===

// Module 11701 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11702 */;
import _mod11704 from "module_11704" /* 11704 */;
import _mod11705 from "module_11705" /* 11705 */;
import errorCodes from "errorCodes" /* 11706 */;
import _pickDirectory from "_pickDirectory" /* 11707 */;
import _pick from "_pick" /* 11708 */;
import _saveDocuments from "_saveDocuments" /* 11710 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11711 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11704.keepLocalCopy;
export const types = _mod11705.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;