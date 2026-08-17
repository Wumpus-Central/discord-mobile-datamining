// _runtime/10426_isKnownType.js
import isKnownType from "10427_isKnownType.js";
import keepLocalCopy from "10429_keepLocalCopy.js";
import frozen from "10430_frozen.js";
import isErrorWithCode from "10431_isErrorWithCode.js";
import _pickDirectory from "10432__pickDirectory.js";
import _pick from "10433__pick.js";
import _saveDocuments from "10435__saveDocuments.js";
import releaseLongTermAccess from "10436_releaseLongTermAccess.js";


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