// === Module 11081: keepLocalCopy ===

// Module 11081 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11082 */;
import _mod11084 from "module_11084" /* 11084 */;
import _mod11085 from "module_11085" /* 11085 */;
import errorCodes from "errorCodes" /* 11086 */;
import _pickDirectory from "_pickDirectory" /* 11087 */;
import _pick from "_pick" /* 11088 */;
import _saveDocuments from "_saveDocuments" /* 11090 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11091 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11084.keepLocalCopy;
export const types = _mod11085.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;