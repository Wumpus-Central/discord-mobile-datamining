// === Module 10963: keepLocalCopy ===

// Module 10963 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 10964 */;
import _mod10966 from "module_10966" /* 10966 */;
import _mod10967 from "module_10967" /* 10967 */;
import errorCodes from "errorCodes" /* 10968 */;
import _pickDirectory from "_pickDirectory" /* 10969 */;
import _pick from "_pick" /* 10970 */;
import _saveDocuments from "_saveDocuments" /* 10972 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 10973 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10966.keepLocalCopy;
export const types = _mod10967.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;