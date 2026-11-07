// _runtime/11232_keepLocalCopy.js
import NativeDocumentPicker from "11233_NativeDocumentPicker.js";
import _mod11235 from "metro/11235__.js";
import _mod11236 from "metro/11236__.js";
import errorCodes from "11237_errorCodes.js";
import _pickDirectory from "11238__pickDirectory.js";
import _pick from "11239__pick.js";
import _saveDocuments from "11241__saveDocuments.js";
import releaseLongTermAccess from "11242_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod11235.keepLocalCopy;
export const types = _mod11236.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
