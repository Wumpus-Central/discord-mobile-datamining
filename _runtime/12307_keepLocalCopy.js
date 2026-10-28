// _runtime/12307_keepLocalCopy.js
import NativeDocumentPicker from "12308_NativeDocumentPicker.js";
import _mod12310 from "metro/12310__.js";
import _mod12311 from "metro/12311__.js";
import errorCodes from "12312_errorCodes.js";
import _pickDirectory from "12313__pickDirectory.js";
import _pick from "12314__pick.js";
import _saveDocuments from "12316__saveDocuments.js";
import releaseLongTermAccess from "12317_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12310.keepLocalCopy;
export const types = _mod12311.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
