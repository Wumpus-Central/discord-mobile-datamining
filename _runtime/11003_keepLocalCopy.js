// _runtime/11003_keepLocalCopy.js
import NativeDocumentPicker from "11004_NativeDocumentPicker.js";
import _mod11006 from "metro/11006__.js";
import _mod11007 from "metro/11007__.js";
import errorCodes from "11008_errorCodes.js";
import _pickDirectory from "11009__pickDirectory.js";
import _pick from "11010__pick.js";
import _saveDocuments from "11012__saveDocuments.js";
import releaseLongTermAccess from "11013_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11006.keepLocalCopy;
export const types = _mod11007.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
