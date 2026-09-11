// _runtime/11318_keepLocalCopy.js
import NativeDocumentPicker from "11319_NativeDocumentPicker.js";
import _mod11321 from "metro/11321__.js";
import _mod11322 from "metro/11322__.js";
import errorCodes from "11323_errorCodes.js";
import _pickDirectory from "11324__pickDirectory.js";
import _pick from "11325__pick.js";
import _saveDocuments from "11327__saveDocuments.js";
import releaseLongTermAccess from "11328_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11321.keepLocalCopy;
export const types = _mod11322.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
