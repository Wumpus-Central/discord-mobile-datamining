// _runtime/11634_keepLocalCopy.js
import NativeDocumentPicker from "11635_NativeDocumentPicker.js";
import _mod11637 from "metro/11637__.js";
import _mod11638 from "metro/11638__.js";
import errorCodes from "11639_errorCodes.js";
import _pickDirectory from "11640__pickDirectory.js";
import _pick from "11641__pick.js";
import _saveDocuments from "11643__saveDocuments.js";
import releaseLongTermAccess from "11644_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11637.keepLocalCopy;
export const types = _mod11638.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
