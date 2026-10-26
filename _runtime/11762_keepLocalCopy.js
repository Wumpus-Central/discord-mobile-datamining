// _runtime/11762_keepLocalCopy.js
import NativeDocumentPicker from "11763_NativeDocumentPicker.js";
import _mod11765 from "metro/11765__.js";
import _mod11766 from "metro/11766__.js";
import errorCodes from "11767_errorCodes.js";
import _pickDirectory from "11768__pickDirectory.js";
import _pick from "11769__pick.js";
import _saveDocuments from "11771__saveDocuments.js";
import releaseLongTermAccess from "11772_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11765.keepLocalCopy;
export const types = _mod11766.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
