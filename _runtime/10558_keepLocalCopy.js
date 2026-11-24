// _runtime/10558_keepLocalCopy.js
import NativeDocumentPicker from "10559_NativeDocumentPicker.js";
import _mod10561 from "metro/10561__.js";
import _mod10562 from "metro/10562__.js";
import errorCodes from "10563_errorCodes.js";
import _pickDirectory from "10564__pickDirectory.js";
import _pick from "10565__pick.js";
import _saveDocuments from "10567__saveDocuments.js";
import releaseLongTermAccess from "10568_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10561.keepLocalCopy;
export const types = _mod10562.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
