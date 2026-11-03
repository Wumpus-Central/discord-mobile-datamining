// _runtime/11237_keepLocalCopy.js
import NativeDocumentPicker from "11238_NativeDocumentPicker.js";
import _mod11240 from "metro/11240__.js";
import _mod11241 from "metro/11241__.js";
import errorCodes from "11242_errorCodes.js";
import _pickDirectory from "11243__pickDirectory.js";
import _pick from "11244__pick.js";
import _saveDocuments from "11246__saveDocuments.js";
import releaseLongTermAccess from "11247_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11240.keepLocalCopy;
export const types = _mod11241.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
