// _runtime/12749_keepLocalCopy.js
import NativeDocumentPicker from "12750_NativeDocumentPicker.js";
import _mod12752 from "metro/12752__.js";
import _mod12753 from "metro/12753__.js";
import errorCodes from "12754_errorCodes.js";
import _pickDirectory from "12755__pickDirectory.js";
import _pick from "12756__pick.js";
import _saveDocuments from "12758__saveDocuments.js";
import releaseLongTermAccess from "12759_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12752.keepLocalCopy;
export const types = _mod12753.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
