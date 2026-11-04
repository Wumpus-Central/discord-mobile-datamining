// _runtime/11287_keepLocalCopy.js
import NativeDocumentPicker from "11288_NativeDocumentPicker.js";
import _mod11290 from "metro/11290__.js";
import _mod11291 from "metro/11291__.js";
import errorCodes from "11292_errorCodes.js";
import _pickDirectory from "11293__pickDirectory.js";
import _pick from "11294__pick.js";
import _saveDocuments from "11296__saveDocuments.js";
import releaseLongTermAccess from "11297_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11290.keepLocalCopy;
export const types = _mod11291.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
