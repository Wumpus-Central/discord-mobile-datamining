// _runtime/11490_keepLocalCopy.js
import NativeDocumentPicker from "11491_NativeDocumentPicker.js";
import _mod11493 from "metro/11493__.js";
import _mod11494 from "metro/11494__.js";
import errorCodes from "11495_errorCodes.js";
import _pickDirectory from "11496__pickDirectory.js";
import _pick from "11497__pick.js";
import _saveDocuments from "11499__saveDocuments.js";
import releaseLongTermAccess from "11500_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11493.keepLocalCopy;
export const types = _mod11494.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
