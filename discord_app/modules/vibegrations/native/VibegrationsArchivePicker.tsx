// discord_app/modules/vibegrations/native/VibegrationsArchivePicker.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3678 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import FilePickerUtils from "../../../utils/native/FilePickerUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_8 = async function _pickVibegrationsArchive() {
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
let closure_9 = async function _sendVibegrationsArchiveImport(arg0) {
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
      return { value: "HermesInternal", done: null };
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
          c5 = 1;
          c6 = 1;
          const obj4 = {
            value: timestampProducer(closure_0, importDefault.bytes, importDefault.name, importDefault.contentType),
            done: false,
          };
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp21) {
      c6 = tmp;
      throw tmp21;
    }
  }
};
const VibegrationsConnectionStore = fn(13359);
({
  ensureConnection: closure_4,
  sendUserMessage: hasOwnProperty,
  uploadAttachmentBytes: metroRequire,
} = VibegrationsConnectionStore);
let closure_7 = ["zip", "tar", "gz", "tgz", "rar"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsArchivePicker.tsx");

export const pickVibegrationsArchive = function pickVibegrationsArchive() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const describeVibegrationsArchiveRejection = function describeVibegrationsArchiveRejection(bytes) {
  let formatToPlainStringResult = null;
  if (!obj.isVibegrationsAttachmentWithinLimit(bytes.bytes.size, bytes.contentType)) {
    const intl = util.intl;
    const obj2 = { size: null };
    const tmpResult = VibegrationsTypes;
    obj2.size = tmpResult.formatVibegrationsAttachmentLimit(
      VibegrationsTypes.vibegrationsAttachmentLimit(bytes.contentType),
    );
    formatToPlainStringResult = intl.formatToPlainString(_modDef3678.AzziHF, obj2);
    const tmpResult2 = VibegrationsTypes;
  }
  return formatToPlainStringResult;
};
export const sendVibegrationsArchiveImport = function sendVibegrationsArchiveImport() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
