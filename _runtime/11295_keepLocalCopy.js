// _runtime/11295_keepLocalCopy.js
import NativeDocumentPicker from "11296_NativeDocumentPicker.js";
import _mod11298 from "metro/11298__.js";
import _mod11299 from "metro/11299__.js";
import errorCodes from "11300_errorCodes.js";
import _pickDirectory from "11301__pickDirectory.js";
import _pick from "11302__pick.js";
import _saveDocuments from "11304__saveDocuments.js";
import releaseLongTermAccess from "11305_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11298.keepLocalCopy;
export const types = _mod11299.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
