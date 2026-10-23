// _runtime/11732_keepLocalCopy.js
import NativeDocumentPicker from "11733_NativeDocumentPicker.js";
import _mod11735 from "metro/11735__.js";
import _mod11736 from "metro/11736__.js";
import errorCodes from "11737_errorCodes.js";
import _pickDirectory from "11738__pickDirectory.js";
import _pick from "11739__pick.js";
import _saveDocuments from "11741__saveDocuments.js";
import releaseLongTermAccess from "11742_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11735.keepLocalCopy;
export const types = _mod11736.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
