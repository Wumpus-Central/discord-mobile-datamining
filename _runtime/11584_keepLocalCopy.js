// _runtime/11584_keepLocalCopy.js
import NativeDocumentPicker from "11585_NativeDocumentPicker.js";
import _mod11587 from "metro/11587__.js";
import _mod11588 from "metro/11588__.js";
import errorCodes from "11589_errorCodes.js";
import _pickDirectory from "11590__pickDirectory.js";
import _pick from "11591__pick.js";
import _saveDocuments from "11593__saveDocuments.js";
import releaseLongTermAccess from "11594_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11587.keepLocalCopy;
export const types = _mod11588.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
