// _runtime/11362_keepLocalCopy.js
import NativeDocumentPicker from "11363_NativeDocumentPicker.js";
import _mod11365 from "metro/11365__.js";
import _mod11366 from "metro/11366__.js";
import errorCodes from "11367_errorCodes.js";
import _pickDirectory from "11368__pickDirectory.js";
import _pick from "11369__pick.js";
import _saveDocuments from "11371__saveDocuments.js";
import releaseLongTermAccess from "11372_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11365.keepLocalCopy;
export const types = _mod11366.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
