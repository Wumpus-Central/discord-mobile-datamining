// _runtime/12780_keepLocalCopy.js
import NativeDocumentPicker from "12781_NativeDocumentPicker.js";
import _mod12783 from "metro/12783__.js";
import _mod12784 from "metro/12784__.js";
import errorCodes from "12785_errorCodes.js";
import _pickDirectory from "12786__pickDirectory.js";
import _pick from "12787__pick.js";
import _saveDocuments from "12789__saveDocuments.js";
import releaseLongTermAccess from "12790_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12783.keepLocalCopy;
export const types = _mod12784.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
