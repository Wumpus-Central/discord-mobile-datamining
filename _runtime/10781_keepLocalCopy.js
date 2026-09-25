// _runtime/10781_keepLocalCopy.js
import NativeDocumentPicker from "10782_NativeDocumentPicker.js";
import _mod10784 from "metro/10784__.js";
import _mod10785 from "metro/10785__.js";
import errorCodes from "10786_errorCodes.js";
import _pickDirectory from "10787__pickDirectory.js";
import _pick from "10788__pick.js";
import _saveDocuments from "10790__saveDocuments.js";
import releaseLongTermAccess from "10791_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10784.keepLocalCopy;
export const types = _mod10785.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
