// _runtime/11712_keepLocalCopy.js
import NativeDocumentPicker from "11713_NativeDocumentPicker.js";
import _mod11715 from "metro/11715__.js";
import _mod11716 from "metro/11716__.js";
import errorCodes from "11717_errorCodes.js";
import _pickDirectory from "11718__pickDirectory.js";
import _pick from "11719__pick.js";
import _saveDocuments from "11721__saveDocuments.js";
import releaseLongTermAccess from "11722_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11715.keepLocalCopy;
export const types = _mod11716.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
