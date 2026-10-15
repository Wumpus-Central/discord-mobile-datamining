// _runtime/11507_keepLocalCopy.js
import NativeDocumentPicker from "11508_NativeDocumentPicker.js";
import _mod11510 from "metro/11510__.js";
import _mod11511 from "metro/11511__.js";
import errorCodes from "11512_errorCodes.js";
import _pickDirectory from "11513__pickDirectory.js";
import _pick from "11514__pick.js";
import _saveDocuments from "11516__saveDocuments.js";
import releaseLongTermAccess from "11517_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11510.keepLocalCopy;
export const types = _mod11511.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
