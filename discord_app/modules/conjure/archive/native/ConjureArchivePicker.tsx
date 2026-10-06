// === Module 16594: ConjureArchivePicker ===

// Module 16594 (ConjureArchivePicker)
import intl3 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ConjureTypes from "ConjureTypes" /* 6757 */;
import FilePickerUtils from "FilePickerUtils" /* 11033 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import size from "module_2" /* 2 */;

let c3, c4, c5, c6;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj = function _pickConjureArchive() {
  let extensions;
  obj = _asyncToGenerator(async () => {
    let obj7;
    let value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let name;
        let first;
        let str3;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp3;
            name = undefined;
            first = undefined;
            str3 = undefined;
            const obj4 = { pickMultiple: false, extensions };
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj7.handleDocumentSelection(obj4), done: false };
            obj7 = FilePickerUtils;
            return obj5;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            name = value;
            first = undefined;
            if (name != null) {
              first = name[0];
            }
            if (null == first) {
              c4 = 3;
              return { value: null, done: true };
            } else {
              str3 = "application/octet-stream";
              if (null != first.type) {
                str3 = "application/octet-stream";
                if ("" !== first.type) {
                  str3 = first.type;
                }
              }
              value = {};
              const _fetch = fetch;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch(first.uri), done: false };
              return obj8;
            }
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c3 = 3;
            c4 = 1;
            const obj10 = { value: value.blob(), done: false };
            return obj10;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          value.bytes = value;
          name = first.name ?? "archive.zip";
          value.name = name;
          value.contentType = str3;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp26) {
        c4 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendConjureArchiveImport() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_4 = tmp;
            let closure_3 = tmp2;
            closure_1 = closure_2;
            closure_2 = undefined;
            React32(closure_0);
            c5 = 1;
            c6 = 1;
            const obj4 = { value: metroRequire(closure_0, closure_1.bytes, closure_1.name, closure_1.contentType), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = value;
          const items = [closure_2];
          closure_132_5(closure_0, closure_1, items);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c6 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty, uploadAttachmentBytes: metroRequire } = ConjureConnectionStore);
let closure_7 = ["zip", "tar", "gz", "tgz", "bz2", "xz"];
const result = size.fileFinishedImporting("modules/conjure/archive/native/ConjureArchivePicker.tsx");

export const pickConjureArchive = function pickConjureArchive() {
  return obj(...arguments);
};
export const describeConjureArchiveRejection = function describeConjureArchiveRejection(bytes) {
  let formatConjureAttachmentLimit;
  let tmpResult2;
  let formatToPlainStringResult = null;
  obj = ConjureTypes;
  if (!obj.isConjureAttachmentWithinLimit(bytes.bytes.size, bytes.contentType)) {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { size: formatConjureAttachmentLimit(tmpResult2.conjureAttachmentLimit(bytes.contentType)) };
    const ThxcOX = _modDef3753.ThxcOX;
    formatConjureAttachmentLimit = ConjureTypes.formatConjureAttachmentLimit;
    ConjureTypes;
    tmpResult2 = ConjureTypes;
    formatToPlainStringResult = formatToPlainString(ThxcOX, obj2);
  }
  return formatToPlainStringResult;
};
export const sendConjureArchiveImport = function sendConjureArchiveImport() {
  return obj(...arguments);
};