// _runtime/12361_keepLocalCopy.js
import NativeDocumentPicker from "12362_NativeDocumentPicker.js";
import _mod12364 from "metro/12364__.js";
import _mod12365 from "metro/12365__.js";
import errorCodes from "12366_errorCodes.js";
import _pickDirectory from "12367__pickDirectory.js";
import _pick from "12368__pick.js";
import _saveDocuments from "12370__saveDocuments.js";
import releaseLongTermAccess from "12371_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12364.keepLocalCopy;
export const types = _mod12365.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
