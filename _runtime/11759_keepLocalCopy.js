// _runtime/11759_keepLocalCopy.js
import NativeDocumentPicker from "11760_NativeDocumentPicker.js";
import _mod11762 from "metro/11762__.js";
import _mod11763 from "metro/11763__.js";
import errorCodes from "11764_errorCodes.js";
import _pickDirectory from "11765__pickDirectory.js";
import _pick from "11766__pick.js";
import _saveDocuments from "11768__saveDocuments.js";
import releaseLongTermAccess from "11769_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11762.keepLocalCopy;
export const types = _mod11763.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
