// _runtime/11182_keepLocalCopy.js
import NativeDocumentPicker from "11183_NativeDocumentPicker.js";
import _mod11185 from "metro/11185__.js";
import _mod11186 from "metro/11186__.js";
import errorCodes from "11187_errorCodes.js";
import _pickDirectory from "11188__pickDirectory.js";
import _pick from "11189__pick.js";
import _saveDocuments from "11191__saveDocuments.js";
import releaseLongTermAccess from "11192_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11185.keepLocalCopy;
export const types = _mod11186.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
