// === Module 10657: keepLocalCopy ===

// Module 10657 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 10658 */;
import _mod10660 from "module_10660" /* 10660 */;
import _mod10661 from "module_10661" /* 10661 */;
import errorCodes from "errorCodes" /* 10662 */;
import _pickDirectory from "_pickDirectory" /* 10663 */;
import _pick from "_pick" /* 10664 */;
import _saveDocuments from "_saveDocuments" /* 10666 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 10667 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10660.keepLocalCopy;
export const types = _mod10661.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;