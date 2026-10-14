// _runtime/11283_keepLocalCopy.js
import NativeDocumentPicker from "11284_NativeDocumentPicker.js";
import _mod11286 from "metro/11286__.js";
import _mod11287 from "metro/11287__.js";
import errorCodes from "11288_errorCodes.js";
import _pickDirectory from "11289__pickDirectory.js";
import _pick from "11290__pick.js";
import _saveDocuments from "11292__saveDocuments.js";
import releaseLongTermAccess from "11293_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11286.keepLocalCopy;
export const types = _mod11287.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
