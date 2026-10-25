// _runtime/11760_keepLocalCopy.js
import NativeDocumentPicker from "11761_NativeDocumentPicker.js";
import _mod11763 from "metro/11763__.js";
import _mod11764 from "metro/11764__.js";
import errorCodes from "11765_errorCodes.js";
import _pickDirectory from "11766__pickDirectory.js";
import _pick from "11767__pick.js";
import _saveDocuments from "11769__saveDocuments.js";
import releaseLongTermAccess from "11770_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11763.keepLocalCopy;
export const types = _mod11764.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
