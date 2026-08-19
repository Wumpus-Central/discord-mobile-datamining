// === Module 7638: create ===

// Module 7638 (create)
import _mod1307 from "module_1307" /* 1307 */;
import create from "create" /* 7633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1307" /* 1307 */;

require = fn;
class PaymentModalBanner$Type extends MessageType {
  constructor() {
    items = [, , , , ];
    items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
    obj = { no: 4, name: "header_localized", kind: "message", T: null };
    class T {
      constructor() {
        return require("create").LocalizedString;
      }
    }
    obj[3] = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "body_localized",
      kind: "message",
      T() {
            return callback(7633).LocalizedString;
          }
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.PaymentModalBanner", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
let prototype = PaymentModalBanner$Type.prototype;
prototype["create"] = function create(arr) {
  const _Object = Object;
  const obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1307.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1307.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1307;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.assetUrl = pos.string();
      } else if (2 === tmp5) {
        obj.header = pos.string();
      } else if (3 === tmp5) {
        obj.body = pos.string();
      } else if (4 === tmp5) {
        let LocalizedString2 = create.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
      } else if (5 === tmp5) {
        let LocalizedString = create.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1307.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
  if ("" !== assetUrl.assetUrl) {
    tag.tag(1, _mod1307.WireType.LengthDelimited).string(assetUrl.assetUrl);
    const tagResult = tag.tag(1, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.header) {
    tag.tag(2, _mod1307.WireType.LengthDelimited).string(assetUrl.header);
    const tagResult1 = tag.tag(2, _mod1307.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.body) {
    tag.tag(3, _mod1307.WireType.LengthDelimited).string(assetUrl.body);
    const tagResult2 = tag.tag(3, _mod1307.WireType.LengthDelimited);
  }
  if (assetUrl.headerLocalized) {
    const LocalizedString = create.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1307.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(4, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(assetUrl.headerLocalized, tag.tag(4, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (assetUrl.bodyLocalized) {
    const LocalizedString2 = create.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1307.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(assetUrl.bodyLocalized, tag.tag(5, _mod1307.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1307.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, assetUrl, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, , ];
let obj = { no: 4, name: "header_localized", kind: "message", T: null };
class T {
  constructor() {
    return require("create").LocalizedString;
  }
}
obj[3] = T;
items[3] = obj;
items[4] = {
  no: 5,
  name: "body_localized",
  kind: "message",
  T() {
    return callback(7633).LocalizedString;
  }
};
prototype = new prototype("discord_protos.premium_marketing.v1.PaymentModalBanner", items, tmp, T, PaymentModalBanner$Type, prototype, items);
// ThrowIfThisInitialized (0x7c)
let result = require("obj132").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/payment_modal_banner.tsx");

export const PaymentModalBanner = prototype;