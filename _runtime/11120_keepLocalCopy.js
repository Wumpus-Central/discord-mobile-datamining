// _runtime/11120_keepLocalCopy.js
import NativeDocumentPicker from "11121_NativeDocumentPicker.js";
import _mod11123 from "metro/11123__.js";
import _mod11124 from "metro/11124__.js";
import errorCodes from "11125_errorCodes.js";
import _pickDirectory from "11126__pickDirectory.js";
import _pick from "11127__pick.js";
import _saveDocuments from "11129__saveDocuments.js";
import releaseLongTermAccess from "11130_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11123.keepLocalCopy;
export const types = _mod11124.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
