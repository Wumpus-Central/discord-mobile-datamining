// === Module 10999: keepLocalCopy ===

// Module 10999 (keepLocalCopy)
import NativeDocumentPicker from "NativeDocumentPicker" /* 11000 */;
import _mod11002 from "module_11002" /* 11002 */;
import _mod11003 from "module_11003" /* 11003 */;
import errorCodes from "errorCodes" /* 11004 */;
import _pickDirectory from "_pickDirectory" /* 11005 */;
import _pick from "_pick" /* 11006 */;
import _saveDocuments from "_saveDocuments" /* 11008 */;
import releaseLongTermAccess from "releaseLongTermAccess" /* 11009 */;


export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11002.keepLocalCopy;
export const types = _mod11003.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;