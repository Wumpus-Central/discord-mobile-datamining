// _runtime/11701_keepLocalCopy.js
import NativeDocumentPicker from "11702_NativeDocumentPicker.js";
import _mod11704 from "metro/11704__.js";
import _mod11705 from "metro/11705__.js";
import errorCodes from "11706_errorCodes.js";
import _pickDirectory from "11707__pickDirectory.js";
import _pick from "11708__pick.js";
import _saveDocuments from "11710__saveDocuments.js";
import releaseLongTermAccess from "11711_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11704.keepLocalCopy;
export const types = _mod11705.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
