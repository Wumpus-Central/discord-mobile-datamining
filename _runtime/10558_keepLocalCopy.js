// === Module 10558: keepLocalCopy ===

// Module 10558 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 10559 */;
import _mod10561 from "module_10561" /* 10561 */;
import _mod10562 from "module_10562" /* 10562 */;
import errorCodes from "errorCodes" /* 10563 */;
import _pickDirectory from "_pickDirectory" /* 10564 */;
import _pick from "_pick" /* 10565 */;
import _saveDocuments from "_saveDocuments" /* 10567 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 10568 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10561.keepLocalCopy;
export const types = _mod10562.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;