// _runtime/10862_isKnownType.js
import isKnownType from "10863_isKnownType.js";
import keepLocalCopy from "10865_keepLocalCopy.js";
import frozen from "10866_frozen.js";
import isErrorWithCode from "10867_isErrorWithCode.js";
import _pickDirectory from "10868__pickDirectory.js";
import _pick from "10869__pick.js";
import _saveDocuments from "10871__saveDocuments.js";
import releaseLongTermAccess from "10872_releaseLongTermAccess.js";

export const isKnownType = isKnownType.isKnownType;
export const keepLocalCopy = keepLocalCopy.keepLocalCopy;
export const types = frozen.types;
export const errorCodes = isErrorWithCode.errorCodes;
export const isErrorWithCode = isErrorWithCode.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
