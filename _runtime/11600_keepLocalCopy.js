// _runtime/11600_keepLocalCopy.js
import NativeDocumentPicker from "11601_NativeDocumentPicker.js";
import _mod11603 from "metro/11603__.js";
import _mod11604 from "metro/11604__.js";
import errorCodes from "11605_errorCodes.js";
import _pickDirectory from "11606__pickDirectory.js";
import _pick from "11607__pick.js";
import _saveDocuments from "11609__saveDocuments.js";
import releaseLongTermAccess from "11610_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11603.keepLocalCopy;
export const types = _mod11604.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
