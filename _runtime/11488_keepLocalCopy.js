// _runtime/11488_keepLocalCopy.js
import NativeDocumentPicker from "11489_NativeDocumentPicker.js";
import _mod11491 from "metro/11491__.js";
import _mod11492 from "metro/11492__.js";
import errorCodes from "11493_errorCodes.js";
import _pickDirectory from "11494__pickDirectory.js";
import _pick from "11495__pick.js";
import _saveDocuments from "11497__saveDocuments.js";
import releaseLongTermAccess from "11498_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11491.keepLocalCopy;
export const types = _mod11492.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
