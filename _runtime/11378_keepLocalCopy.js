// _runtime/11378_keepLocalCopy.js
import NativeDocumentPicker from "11379_NativeDocumentPicker.js";
import _mod11381 from "metro/11381__.js";
import _mod11382 from "metro/11382__.js";
import errorCodes from "11383_errorCodes.js";
import _pickDirectory from "11384__pickDirectory.js";
import _pick from "11385__pick.js";
import _saveDocuments from "11387__saveDocuments.js";
import releaseLongTermAccess from "11388_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11381.keepLocalCopy;
export const types = _mod11382.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
