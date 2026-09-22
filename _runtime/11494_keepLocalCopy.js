// _runtime/11494_keepLocalCopy.js
import NativeDocumentPicker from "11495_NativeDocumentPicker.js";
import _mod11497 from "metro/11497__.js";
import _mod11498 from "metro/11498__.js";
import errorCodes from "11499_errorCodes.js";
import _pickDirectory from "11500__pickDirectory.js";
import _pick from "11501__pick.js";
import _saveDocuments from "11503__saveDocuments.js";
import releaseLongTermAccess from "11504_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11497.keepLocalCopy;
export const types = _mod11498.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
