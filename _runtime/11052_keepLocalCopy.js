// _runtime/11052_keepLocalCopy.js
import NativeDocumentPicker from "11053_NativeDocumentPicker.js";
import _mod11055 from "metro/11055__.js";
import _mod11056 from "metro/11056__.js";
import errorCodes from "11057_errorCodes.js";
import _pickDirectory from "11058__pickDirectory.js";
import _pick from "11059__pick.js";
import _saveDocuments from "11061__saveDocuments.js";
import releaseLongTermAccess from "11062_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11055.keepLocalCopy;
export const types = _mod11056.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
