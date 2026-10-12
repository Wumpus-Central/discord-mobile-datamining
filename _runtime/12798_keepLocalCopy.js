// === Module 12798: keepLocalCopy ===

// Module 12798 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12799 */;
import _mod12801 from "module_12801" /* 12801 */;
import _mod12802 from "module_12802" /* 12802 */;
import errorCodes from "errorCodes" /* 12803 */;
import _pickDirectory from "_pickDirectory" /* 12804 */;
import _pick from "_pick" /* 12805 */;
import _saveDocuments from "_saveDocuments" /* 12807 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12808 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12801.keepLocalCopy;
export const types = _mod12802.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;