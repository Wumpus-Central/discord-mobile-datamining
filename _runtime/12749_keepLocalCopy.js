// === Module 12749: keepLocalCopy ===

// Module 12749 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 12750 */;
import _mod12752 from "module_12752" /* 12752 */;
import _mod12753 from "module_12753" /* 12753 */;
import errorCodes from "errorCodes" /* 12754 */;
import _pickDirectory from "_pickDirectory" /* 12755 */;
import _pick from "_pick" /* 12756 */;
import _saveDocuments from "_saveDocuments" /* 12758 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 12759 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12752.keepLocalCopy;
export const types = _mod12753.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;