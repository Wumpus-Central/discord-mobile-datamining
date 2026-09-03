// _runtime/11086_isKnownType.js
import isKnownType from "11087_isKnownType.js";
import keepLocalCopy from "11089_keepLocalCopy.js";
import frozen from "11090_frozen.js";
import isErrorWithCode from "11091_isErrorWithCode.js";
import _pickDirectory from "11092__pickDirectory.js";
import _pick from "11093__pick.js";
import _saveDocuments from "11095__saveDocuments.js";
import releaseLongTermAccess from "11096_releaseLongTermAccess.js";

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
