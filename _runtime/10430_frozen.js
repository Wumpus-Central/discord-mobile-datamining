// _runtime/10430_frozen.js
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const frozen = Object.freeze({ allFiles: "*/*", audio: "audio/*", csv: ["text/csv", "text/comma-separated-values"], doc: "application/msword", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", images: "image/*", pdf: "application/pdf", plainText: "text/plain", json: "application/json", ppt: "application/vnd.ms-powerpoint", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", video: "video/*", xls: "application/vnd.ms-excel", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", zip: "application/zip" });
const frozen1 = Object.freeze({ allFiles: "public.item", audio: "public.audio", csv: "public.comma-separated-values-text", doc: "com.microsoft.word.doc", docx: "org.openxmlformats.wordprocessingml.document", images: "public.image", pdf: "com.adobe.pdf", plainText: "public.plain-text", json: "public.json", ppt: "com.microsoft.powerpoint.ppt", pptx: "org.openxmlformats.presentationml.presentation", video: "public.movie", xls: "com.microsoft.excel.xls", xlsx: "org.openxmlformats.spreadsheetml.sheet", zip: "public.zip-archive" });

export const types = frozen;
export const typesAreEqual = true;