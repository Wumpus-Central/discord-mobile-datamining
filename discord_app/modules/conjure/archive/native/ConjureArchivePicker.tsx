// === Module 12359: ConjureArchivePicker ===

// Module 12359 (ConjureArchivePicker)
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 12260 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12290 */;
import FilePickerUtils from "FilePickerUtils" /* 12360 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_7 = async function _pickConjureArchive() {
  await FilePickerUtils.handleDocumentSelection({ pickMultiple: false, extensions });
  closure_130_0 = value;
  if (closure_130_0 != null) {
    const first = closure_130_0[0];
  }
  closure_130_1 = first;
  if (null == closure_130_1) {
    return null;
  }
  let str3 = "application/octet-stream";
  if (null != closure_130_1.type) {
    str3 = "application/octet-stream";
    if ("" !== closure_130_1.type) {
      str3 = closure_130_1.type;
    }
  }
  closure_130_2 = str3;
  value = {};
  const _fetch = fetch;
  await fetch(closure_130_1.uri);
  await value.blob();
  value.bytes = value;
  let name = closure_130_1.name;
  if (name == null) {
    name = "archive.zip";
  }
  value.name = name;
  value.contentType = closure_130_2;
  return value;
};
let closure_8 = async function _sendConjureArchiveImport(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp3;
          closure_131_0 = closure_0;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          React4(closure_0);
          const obj5 = conjureAttachmentRequests;
          c5 = 1;
          c6 = 1;
          const obj4 = { value: obj5.uploadAttachmentBytes(closure_0, importDefault.bytes, importDefault.name, importDefault.contentType), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_131_2 = value;
        const items = [closure_131_2];
        closure_132_5(closure_131_0, closure_131_1, items);
        c6 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      }
    } catch (tmp14) {
      c6 = tmp;
      throw tmp14;
    }
  }
};
const ConjureConnectionStore = fn(10807);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
let closure_6 = ["zip", "tar", "gz", "tgz", "bz2", "xz"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/archive/native/ConjureArchivePicker.tsx");

export function pickConjureArchive() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function describeConjureArchiveRejection(bytes) {
  let formatToPlainStringResult = null;
  if (!obj.isConjureAttachmentWithinLimit(bytes.bytes.size, bytes.contentType)) {
    const intl = util.intl;
    const obj2 = { size: null };
    const tmpResult = ConjureAttachmentTypes;
    obj2.size = tmpResult.formatConjureAttachmentLimit(ConjureAttachmentTypes.conjureAttachmentLimit(bytes.contentType));
    formatToPlainStringResult = intl.formatToPlainString(_modDef3864.ThxcOX, obj2);
    const tmpResult2 = ConjureAttachmentTypes;
  }
  return formatToPlainStringResult;
}
export function sendConjureArchiveImport() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}