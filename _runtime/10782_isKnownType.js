// _runtime/10782_isKnownType.js
import isKnownType from "10783_isKnownType.js";
import keepLocalCopy from "10785_keepLocalCopy.js";
import frozen from "10786_frozen.js";
import isErrorWithCode from "10787_isErrorWithCode.js";
import _pickDirectory from "10788__pickDirectory.js";
import _pick from "10789__pick.js";
import _saveDocuments from "10791__saveDocuments.js";
import releaseLongTermAccess from "10792_releaseLongTermAccess.js";


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