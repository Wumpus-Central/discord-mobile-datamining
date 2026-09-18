// _runtime/11476_keepLocalCopy.js
import NativeDocumentPicker from "11477_NativeDocumentPicker.js";
import _mod11479 from "metro/11479__.js";
import _mod11480 from "metro/11480__.js";
import errorCodes from "11481_errorCodes.js";
import _pickDirectory from "11482__pickDirectory.js";
import _pick from "11483__pick.js";
import _saveDocuments from "11485__saveDocuments.js";
import releaseLongTermAccess from "11486_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11479.keepLocalCopy;
export const types = _mod11480.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
