// _runtime/11081_keepLocalCopy.js
import NativeDocumentPicker from "11082_NativeDocumentPicker.js";
import _mod11084 from "metro/11084__.js";
import _mod11085 from "metro/11085__.js";
import errorCodes from "11086_errorCodes.js";
import _pickDirectory from "11087__pickDirectory.js";
import _pick from "11088__pick.js";
import _saveDocuments from "11090__saveDocuments.js";
import releaseLongTermAccess from "11091_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11084.keepLocalCopy;
export const types = _mod11085.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
