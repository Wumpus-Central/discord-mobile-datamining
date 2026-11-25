// _runtime/10657_keepLocalCopy.js
import NativeDocumentPicker from "10658_NativeDocumentPicker.js";
import _mod10660 from "metro/10660__.js";
import _mod10661 from "metro/10661__.js";
import errorCodes from "10662_errorCodes.js";
import _pickDirectory from "10663__pickDirectory.js";
import _pick from "10664__pick.js";
import _saveDocuments from "10666__saveDocuments.js";
import releaseLongTermAccess from "10667_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10660.keepLocalCopy;
export const types = _mod10661.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
