// _runtime/11046_keepLocalCopy.js
import NativeDocumentPicker from "11047_NativeDocumentPicker.js";
import _mod11049 from "metro/11049__.js";
import _mod11050 from "metro/11050__.js";
import errorCodes from "11051_errorCodes.js";
import _pickDirectory from "11052__pickDirectory.js";
import _pick from "11053__pick.js";
import _saveDocuments from "11055__saveDocuments.js";
import releaseLongTermAccess from "11056_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11049.keepLocalCopy;
export const types = _mod11050.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
