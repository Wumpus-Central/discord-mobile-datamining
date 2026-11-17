// === Module 11860: keepLocalCopy ===

// Module 11860 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11861 */;
import _mod11863 from "module_11863" /* 11863 */;
import _mod11864 from "module_11864" /* 11864 */;
import errorCodes from "errorCodes" /* 11865 */;
import _pickDirectory from "_pickDirectory" /* 11866 */;
import _pick from "_pick" /* 11867 */;
import _saveDocuments from "_saveDocuments" /* 11869 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11870 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11863.keepLocalCopy;
export const types = _mod11864.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;