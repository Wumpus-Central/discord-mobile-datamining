// _runtime/12264_keepLocalCopy.js
import NativeDocumentPicker from "12265_NativeDocumentPicker.js";
import _mod12267 from "metro/12267__.js";
import _mod12268 from "metro/12268__.js";
import errorCodes from "12269_errorCodes.js";
import _pickDirectory from "12270__pickDirectory.js";
import _pick from "12271__pick.js";
import _saveDocuments from "12273__saveDocuments.js";
import releaseLongTermAccess from "12274_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12267.keepLocalCopy;
export const types = _mod12268.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
