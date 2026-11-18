// === Module 11142: keepLocalCopy ===

// Module 11142 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11143 */;
import _mod11145 from "module_11145" /* 11145 */;
import _mod11146 from "module_11146" /* 11146 */;
import errorCodes from "errorCodes" /* 11147 */;
import _pickDirectory from "_pickDirectory" /* 11148 */;
import _pick from "_pick" /* 11149 */;
import _saveDocuments from "_saveDocuments" /* 11151 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11152 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11145.keepLocalCopy;
export const types = _mod11146.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;