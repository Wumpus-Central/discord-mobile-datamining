// _runtime/11273_keepLocalCopy.js
import NativeDocumentPicker from "11274_NativeDocumentPicker.js";
import _mod11276 from "metro/11276__.js";
import _mod11277 from "metro/11277__.js";
import errorCodes from "11278_errorCodes.js";
import _pickDirectory from "11279__pickDirectory.js";
import _pick from "11280__pick.js";
import _saveDocuments from "11282__saveDocuments.js";
import releaseLongTermAccess from "11283_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11276.keepLocalCopy;
export const types = _mod11277.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
