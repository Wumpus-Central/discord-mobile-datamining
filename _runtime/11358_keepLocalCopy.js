// _runtime/11358_keepLocalCopy.js
import NativeDocumentPicker from "11359_NativeDocumentPicker.js";
import _mod11361 from "metro/11361__.js";
import _mod11362 from "metro/11362__.js";
import errorCodes from "11363_errorCodes.js";
import _pickDirectory from "11364__pickDirectory.js";
import _pick from "11365__pick.js";
import _saveDocuments from "11367__saveDocuments.js";
import releaseLongTermAccess from "11368_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11361.keepLocalCopy;
export const types = _mod11362.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
