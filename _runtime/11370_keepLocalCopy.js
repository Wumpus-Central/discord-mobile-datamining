// _runtime/11370_keepLocalCopy.js
import NativeDocumentPicker from "11371_NativeDocumentPicker.js";
import _mod11373 from "metro/11373__.js";
import _mod11374 from "metro/11374__.js";
import errorCodes from "11375_errorCodes.js";
import _pickDirectory from "11376__pickDirectory.js";
import _pick from "11377__pick.js";
import _saveDocuments from "11379__saveDocuments.js";
import releaseLongTermAccess from "11380_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11373.keepLocalCopy;
export const types = _mod11374.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
