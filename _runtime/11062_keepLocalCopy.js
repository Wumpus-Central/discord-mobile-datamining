// _runtime/11062_keepLocalCopy.js
import NativeDocumentPicker from "11063_NativeDocumentPicker.js";
import _mod11065 from "metro/11065__.js";
import _mod11066 from "metro/11066__.js";
import errorCodes from "11067_errorCodes.js";
import _pickDirectory from "11068__pickDirectory.js";
import _pick from "11069__pick.js";
import _saveDocuments from "11071__saveDocuments.js";
import releaseLongTermAccess from "11072_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11065.keepLocalCopy;
export const types = _mod11066.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
