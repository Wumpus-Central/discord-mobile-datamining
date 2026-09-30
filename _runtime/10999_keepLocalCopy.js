// _runtime/10999_keepLocalCopy.js
import NativeDocumentPicker from "11000_NativeDocumentPicker.js";
import _mod11002 from "metro/11002__.js";
import _mod11003 from "metro/11003__.js";
import errorCodes from "11004_errorCodes.js";
import _pickDirectory from "11005__pickDirectory.js";
import _pick from "11006__pick.js";
import _saveDocuments from "11008__saveDocuments.js";
import releaseLongTermAccess from "11009_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11002.keepLocalCopy;
export const types = _mod11003.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
