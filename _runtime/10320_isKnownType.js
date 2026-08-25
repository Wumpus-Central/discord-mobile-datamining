// _runtime/10320_isKnownType.js
import isKnownType from "10321_isKnownType.js";
import keepLocalCopy from "10323_keepLocalCopy.js";
import frozen from "10324_frozen.js";
import isErrorWithCode from "10325_isErrorWithCode.js";
import _pickDirectory from "10326__pickDirectory.js";
import _pick from "10327__pick.js";
import _saveDocuments from "10329__saveDocuments.js";
import releaseLongTermAccess from "10330_releaseLongTermAccess.js";


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