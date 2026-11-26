// _runtime/10702_keepLocalCopy.js
import NativeDocumentPicker from "10703_NativeDocumentPicker.js";
import _mod10705 from "metro/10705__.js";
import _mod10706 from "metro/10706__.js";
import errorCodes from "10707_errorCodes.js";
import _pickDirectory from "10708__pickDirectory.js";
import _pick from "10709__pick.js";
import _saveDocuments from "10711__saveDocuments.js";
import releaseLongTermAccess from "10712_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10705.keepLocalCopy;
export const types = _mod10706.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
