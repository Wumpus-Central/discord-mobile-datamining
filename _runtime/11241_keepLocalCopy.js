// _runtime/11241_keepLocalCopy.js
import NativeDocumentPicker from "11242_NativeDocumentPicker.js";
import _mod11244 from "metro/11244__.js";
import _mod11245 from "metro/11245__.js";
import errorCodes from "11246_errorCodes.js";
import _pickDirectory from "11247__pickDirectory.js";
import _pick from "11248__pick.js";
import _saveDocuments from "11250__saveDocuments.js";
import releaseLongTermAccess from "11251_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11244.keepLocalCopy;
export const types = _mod11245.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
