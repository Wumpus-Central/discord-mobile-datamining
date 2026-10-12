// _runtime/12798_keepLocalCopy.js
import NativeDocumentPicker from "12799_NativeDocumentPicker.js";
import _mod12801 from "metro/12801__.js";
import _mod12802 from "metro/12802__.js";
import errorCodes from "12803_errorCodes.js";
import _pickDirectory from "12804__pickDirectory.js";
import _pick from "12805__pick.js";
import _saveDocuments from "12807__saveDocuments.js";
import releaseLongTermAccess from "12808_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod12801.keepLocalCopy;
export const types = _mod12802.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
