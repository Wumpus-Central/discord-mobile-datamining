// _runtime/11256_keepLocalCopy.js
import NativeDocumentPicker from "11257_NativeDocumentPicker.js";
import _mod11259 from "metro/11259__.js";
import _mod11260 from "metro/11260__.js";
import errorCodes from "11261_errorCodes.js";
import _pickDirectory from "11262__pickDirectory.js";
import _pick from "11263__pick.js";
import _saveDocuments from "11265__saveDocuments.js";
import releaseLongTermAccess from "11266_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11259.keepLocalCopy;
export const types = _mod11260.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
