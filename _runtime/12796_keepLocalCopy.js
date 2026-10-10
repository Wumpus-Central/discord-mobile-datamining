// _runtime/12796_keepLocalCopy.js
import NativeDocumentPicker from "12797_NativeDocumentPicker.js";
import _mod12799 from "metro/12799__.js";
import _mod12800 from "metro/12800__.js";
import errorCodes from "12801_errorCodes.js";
import _pickDirectory from "12802__pickDirectory.js";
import _pick from "12803__pick.js";
import _saveDocuments from "12805__saveDocuments.js";
import releaseLongTermAccess from "12806_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12799.keepLocalCopy;
export const types = _mod12800.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
