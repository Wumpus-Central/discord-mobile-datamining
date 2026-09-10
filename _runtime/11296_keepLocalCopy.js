// _runtime/11296_keepLocalCopy.js
import NativeDocumentPicker from "11297_NativeDocumentPicker.js";
import _mod11299 from "metro/11299__.js";
import _mod11300 from "metro/11300__.js";
import errorCodes from "11301_errorCodes.js";
import _pickDirectory from "11302__pickDirectory.js";
import _pick from "11303__pick.js";
import _saveDocuments from "11305__saveDocuments.js";
import releaseLongTermAccess from "11306_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11299.keepLocalCopy;
export const types = _mod11300.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
