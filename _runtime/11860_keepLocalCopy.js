// _runtime/11860_keepLocalCopy.js
import NativeDocumentPicker from "11861_NativeDocumentPicker.js";
import _mod11863 from "metro/11863__.js";
import _mod11864 from "metro/11864__.js";
import errorCodes from "11865_errorCodes.js";
import _pickDirectory from "11866__pickDirectory.js";
import _pick from "11867__pick.js";
import _saveDocuments from "11869__saveDocuments.js";
import releaseLongTermAccess from "11870_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11863.keepLocalCopy;
export const types = _mod11864.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
