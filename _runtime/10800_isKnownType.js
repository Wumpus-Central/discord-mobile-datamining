// _runtime/10800_isKnownType.js
import isKnownType from "10801_isKnownType.js";
import keepLocalCopy from "10803_keepLocalCopy.js";
import frozen from "10804_frozen.js";
import isErrorWithCode from "10805_isErrorWithCode.js";
import _pickDirectory from "10806__pickDirectory.js";
import _pick from "10807__pick.js";
import _saveDocuments from "10809__saveDocuments.js";
import releaseLongTermAccess from "10810_releaseLongTermAccess.js";


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