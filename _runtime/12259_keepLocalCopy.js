// _runtime/12259_keepLocalCopy.js
import NativeDocumentPicker from "12260_NativeDocumentPicker.js";
import _mod12262 from "metro/12262__.js";
import _mod12263 from "metro/12263__.js";
import errorCodes from "12264_errorCodes.js";
import _pickDirectory from "12265__pickDirectory.js";
import _pick from "12266__pick.js";
import _saveDocuments from "12268__saveDocuments.js";
import releaseLongTermAccess from "12269_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12262.keepLocalCopy;
export const types = _mod12263.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
