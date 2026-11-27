// _runtime/10703_keepLocalCopy.js
import NativeDocumentPicker from "10704_NativeDocumentPicker.js";
import _mod10706 from "metro/10706__.js";
import _mod10707 from "metro/10707__.js";
import errorCodes from "10708_errorCodes.js";
import _pickDirectory from "10709__pickDirectory.js";
import _pick from "10710__pick.js";
import _saveDocuments from "10712__saveDocuments.js";
import releaseLongTermAccess from "10713_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10706.keepLocalCopy;
export const types = _mod10707.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
