// === Module 12780: keepLocalCopy ===

// Module 12780 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12781 */;
import _mod12783 from "module_12783" /* 12783 */;
import _mod12784 from "module_12784" /* 12784 */;
import errorCodes from "errorCodes" /* 12785 */;
import _pickDirectory from "_pickDirectory" /* 12786 */;
import _pick from "_pick" /* 12787 */;
import _saveDocuments from "_saveDocuments" /* 12789 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12790 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12783.keepLocalCopy;
export const types = _mod12784.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;