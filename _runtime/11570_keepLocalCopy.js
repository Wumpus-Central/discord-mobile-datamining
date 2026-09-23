// === Module 11570: keepLocalCopy ===

// Module 11570 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11571 */;
import _mod11573 from "module_11573" /* 11573 */;
import _mod11574 from "module_11574" /* 11574 */;
import errorCodes from "errorCodes" /* 11575 */;
import _pickDirectory from "_pickDirectory" /* 11576 */;
import _pick from "_pick" /* 11577 */;
import _saveDocuments from "_saveDocuments" /* 11579 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11580 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11573.keepLocalCopy;
export const types = _mod11574.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;