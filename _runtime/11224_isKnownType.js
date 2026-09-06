// _runtime/11224_isKnownType.js
import isKnownType from "11225_isKnownType.js";
import keepLocalCopy from "11227_keepLocalCopy.js";
import frozen from "11228_frozen.js";
import isErrorWithCode from "11229_isErrorWithCode.js";
import _pickDirectory from "11230__pickDirectory.js";
import _pick from "11231__pick.js";
import _saveDocuments from "11233__saveDocuments.js";
import releaseLongTermAccess from "11234_releaseLongTermAccess.js";

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
