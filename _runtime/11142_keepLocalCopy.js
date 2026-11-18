// _runtime/11142_keepLocalCopy.js
import NativeDocumentPicker from "11143_NativeDocumentPicker.js";
import _mod11145 from "metro/11145__.js";
import _mod11146 from "metro/11146__.js";
import errorCodes from "11147_errorCodes.js";
import _pickDirectory from "11148__pickDirectory.js";
import _pick from "11149__pick.js";
import _saveDocuments from "11151__saveDocuments.js";
import releaseLongTermAccess from "11152_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11145.keepLocalCopy;
export const types = _mod11146.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
