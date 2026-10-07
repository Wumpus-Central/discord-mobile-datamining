// _runtime/11034_keepLocalCopy.js
import NativeDocumentPicker from "11035_NativeDocumentPicker.js";
import _mod11037 from "metro/11037__.js";
import _mod11038 from "metro/11038__.js";
import errorCodes from "11039_errorCodes.js";
import _pickDirectory from "11040__pickDirectory.js";
import _pick from "11041__pick.js";
import _saveDocuments from "11043__saveDocuments.js";
import releaseLongTermAccess from "11044_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11037.keepLocalCopy;
export const types = _mod11038.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
