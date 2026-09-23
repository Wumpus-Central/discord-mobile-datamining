// _runtime/11570_keepLocalCopy.js
import NativeDocumentPicker from "11571_NativeDocumentPicker.js";
import _mod11573 from "metro/11573__.js";
import _mod11574 from "metro/11574__.js";
import errorCodes from "11575_errorCodes.js";
import _pickDirectory from "11576__pickDirectory.js";
import _pick from "11577__pick.js";
import _saveDocuments from "11579__saveDocuments.js";
import releaseLongTermAccess from "11580_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11573.keepLocalCopy;
export const types = _mod11574.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
