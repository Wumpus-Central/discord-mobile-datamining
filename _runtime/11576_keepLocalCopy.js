// _runtime/11576_keepLocalCopy.js
import NativeDocumentPicker from "11577_NativeDocumentPicker.js";
import _mod11579 from "metro/11579__.js";
import _mod11580 from "metro/11580__.js";
import errorCodes from "11581_errorCodes.js";
import _pickDirectory from "11582__pickDirectory.js";
import _pick from "11583__pick.js";
import _saveDocuments from "11585__saveDocuments.js";
import releaseLongTermAccess from "11586_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11579.keepLocalCopy;
export const types = _mod11580.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
