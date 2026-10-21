// _runtime/11684_keepLocalCopy.js
import NativeDocumentPicker from "11685_NativeDocumentPicker.js";
import _mod11687 from "metro/11687__.js";
import _mod11688 from "metro/11688__.js";
import errorCodes from "11689_errorCodes.js";
import _pickDirectory from "11690__pickDirectory.js";
import _pick from "11691__pick.js";
import _saveDocuments from "11693__saveDocuments.js";
import releaseLongTermAccess from "11694_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11687.keepLocalCopy;
export const types = _mod11688.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
