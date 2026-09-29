// _runtime/10963_keepLocalCopy.js
import NativeDocumentPicker from "10964_NativeDocumentPicker.js";
import _mod10966 from "metro/10966__.js";
import _mod10967 from "metro/10967__.js";
import errorCodes from "10968_errorCodes.js";
import _pickDirectory from "10969__pickDirectory.js";
import _pick from "10970__pick.js";
import _saveDocuments from "10972__saveDocuments.js";
import releaseLongTermAccess from "10973_releaseLongTermAccess.js";

export const isKnownType = NativeDocumentPicker.isKnownType;
export const keepLocalCopy = _mod10966.keepLocalCopy;
export const types = _mod10967.types;
export const errorCodes = errorCodes.errorCodes;
export const isErrorWithCode = errorCodes.isErrorWithCode;
export const pickDirectory = _pickDirectory.pickDirectory;
export const pick = _pick.pick;
export const saveDocuments = _saveDocuments.saveDocuments;
export const releaseLongTermAccess = releaseLongTermAccess.releaseLongTermAccess;
export const releaseSecureAccess = releaseLongTermAccess.releaseSecureAccess;
