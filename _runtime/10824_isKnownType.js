// _runtime/10824_isKnownType.js
import isKnownType from "10825_isKnownType.js";
import keepLocalCopy from "10827_keepLocalCopy.js";
import frozen from "10828_frozen.js";
import isErrorWithCode from "10829_isErrorWithCode.js";
import _pickDirectory from "10830__pickDirectory.js";
import _pick from "10831__pick.js";
import _saveDocuments from "10833__saveDocuments.js";
import releaseLongTermAccess from "10834_releaseLongTermAccess.js";


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