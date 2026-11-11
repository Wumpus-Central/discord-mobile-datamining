// === Module 13239: buildConjureProjectLink ===

// Module 13239 (buildConjureProjectLink)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/buildConjureProjectLink.tsx");

export default function buildConjureProjectLink(arg0, str) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  str = "conjure.city";
  if (RELEASE_CHANNEL.startsWith("staging")) {
    str = "conjure.town";
  }
  const str2 = str.normalize("NFKD");
  const str3 = str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  const replaced = str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const str4 = str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const replaced1 = replaced.slice(0, 48).replace(/^-+|-+$/g, "");
  let str6 = "app";
  if ("" !== replaced1) {
    str6 = replaced1;
  }
  const combined = "https://" + str + "/" + arg0 + "/" + str6;
  let combined1 = combined;
  if (null != tmp) {
    const _HermesInternal = HermesInternal;
    combined1 = "" + combined + "/" + tmp;
  }
  return combined1;
};