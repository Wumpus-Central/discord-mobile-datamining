// _runtime/11082_isKnownType.js
import isKnownType from "11083_isKnownType.js";
import keepLocalCopy from "11085_keepLocalCopy.js";
import frozen from "11086_frozen.js";
import isErrorWithCode from "11087_isErrorWithCode.js";
import _pickDirectory from "11088__pickDirectory.js";
import _pick from "11089__pick.js";
import _saveDocuments from "11091__saveDocuments.js";
import releaseLongTermAccess from "11092_releaseLongTermAccess.js";

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
