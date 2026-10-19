// _runtime/11621_keepLocalCopy.js
import NativeDocumentPicker from "11622_NativeDocumentPicker.js";
import _mod11624 from "metro/11624__.js";
import _mod11625 from "metro/11625__.js";
import errorCodes from "11626_errorCodes.js";
import _pickDirectory from "11627__pickDirectory.js";
import _pick from "11628__pick.js";
import _saveDocuments from "11630__saveDocuments.js";
import releaseLongTermAccess from "11631_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11624.keepLocalCopy;
export const types = _mod11625.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
