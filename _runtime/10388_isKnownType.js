// _runtime/10388_isKnownType.js
import isKnownType from "10389_isKnownType.js";
import keepLocalCopy from "10391_keepLocalCopy.js";
import frozen from "10392_frozen.js";
import isErrorWithCode from "10393_isErrorWithCode.js";
import _pickDirectory from "10394__pickDirectory.js";
import _pick from "10395__pick.js";
import _saveDocuments from "10397__saveDocuments.js";
import releaseLongTermAccess from "10398_releaseLongTermAccess.js";


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