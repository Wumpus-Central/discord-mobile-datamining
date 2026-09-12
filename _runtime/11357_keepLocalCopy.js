// _runtime/11357_keepLocalCopy.js
import NativeDocumentPicker from "11358_NativeDocumentPicker.js";
import _mod11360 from "metro/11360__.js";
import _mod11361 from "metro/11361__.js";
import errorCodes from "11362_errorCodes.js";
import _pickDirectory from "11363__pickDirectory.js";
import _pick from "11364__pick.js";
import _saveDocuments from "11366__saveDocuments.js";
import releaseLongTermAccess from "11367_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11360.keepLocalCopy;
export const types = _mod11361.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
