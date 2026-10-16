// _runtime/11525_keepLocalCopy.js
import NativeDocumentPicker from "11526_NativeDocumentPicker.js";
import _mod11528 from "metro/11528__.js";
import _mod11529 from "metro/11529__.js";
import errorCodes from "11530_errorCodes.js";
import _pickDirectory from "11531__pickDirectory.js";
import _pick from "11532__pick.js";
import _saveDocuments from "11534__saveDocuments.js";
import releaseLongTermAccess from "11535_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11528.keepLocalCopy;
export const types = _mod11529.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
