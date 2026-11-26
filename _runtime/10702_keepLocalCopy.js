// === Module 10702: keepLocalCopy ===

// Module 10702 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 10703 */;
import _mod10705 from "module_10705" /* 10705 */;
import _mod10706 from "module_10706" /* 10706 */;
import errorCodes from "errorCodes" /* 10707 */;
import _pickDirectory from "_pickDirectory" /* 10708 */;
import _pick from "_pick" /* 10709 */;
import _saveDocuments from "_saveDocuments" /* 10711 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 10712 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10705.keepLocalCopy;
export const types = _mod10706.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;