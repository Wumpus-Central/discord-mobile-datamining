// === Module 11224: keepLocalCopy ===

// Module 11224 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11225 */;
import _mod11227 from "module_11227" /* 11227 */;
import _mod11228 from "module_11228" /* 11228 */;
import errorCodes from "errorCodes" /* 11229 */;
import _pickDirectory from "_pickDirectory" /* 11230 */;
import _pick from "_pick" /* 11231 */;
import _saveDocuments from "_saveDocuments" /* 11233 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11234 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11227.keepLocalCopy;
export const types = _mod11228.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;