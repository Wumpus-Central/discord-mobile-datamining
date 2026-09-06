// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/payment_modal_banner.tsx
import _mod1188 from "../../../../../../../_runtime/metro/01188__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1188).MessageType;
class PaymentModalBanner$Type extends MessageType {
  constructor() {
    items = [, , , ,];
    items[0] = { no: 1, name: "asset_url", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "header", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
    obj = { no: 4, name: "header_localized", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    obj.T = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "body_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    tmp = new tmp("discord_protos.premium_marketing.v1.PaymentModalBanner", items, T);
    return tmp;
  }
}
let prototype = PaymentModalBanner$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { assetUrl: "", header: "", body: "" };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1188.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1188.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1188;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp4 = _slicedToArray(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.assetUrl = pos.string();
      } else if (2 === tmp5) {
        obj.header = pos.string();
      } else if (3 === tmp5) {
        obj.body = pos.string();
      } else if (4 === tmp5) {
        let LocalizedString2 = localized_string.LocalizedString;
        obj.headerLocalized = LocalizedString2.internalBinaryRead(
          pos,
          pos.uint32(),
          readUnknownField,
          obj.headerLocalized,
        );
      } else if (5 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp18 = new.target;
          let tmp19 = new.target;
          let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              onRead = _mod1188.UnknownFieldHandler.onRead;
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
    tag.tag(1, _mod1188.WireType.LengthDelimited).string(assetUrl.assetUrl);
    const tagResult = tag.tag(1, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.header) {
    tag.tag(2, _mod1188.WireType.LengthDelimited).string(assetUrl.header);
    const tagResult1 = tag.tag(2, _mod1188.WireType.LengthDelimited);
  }
  if ("" !== assetUrl.body) {
    tag.tag(3, _mod1188.WireType.LengthDelimited).string(assetUrl.body);
    const tagResult2 = tag.tag(3, _mod1188.WireType.LengthDelimited);
  }
  if (assetUrl.headerLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult3 = tag.tag(4, _mod1188.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(
      assetUrl.headerLocalized,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(
      assetUrl.headerLocalized,
      tag.tag(4, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (assetUrl.bodyLocalized) {
    const LocalizedString2 = localized_string.LocalizedString;
    const tagResult4 = tag.tag(5, _mod1188.WireType.LengthDelimited);
    const joined1 = LocalizedString2.internalBinaryWrite(
      assetUrl.bodyLocalized,
      tag.tag(5, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(
      assetUrl.bodyLocalized,
      tag.tag(5, _mod1188.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1188.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, assetUrl, tag);
  }
  return tag;
};
let items = [
  { no: 1, name: "asset_url", kind: "scalar", T: 9 },
  { no: 2, name: "header", kind: "scalar", T: 9 },
  { no: 3, name: "body", kind: "scalar", T: 9 },
  ,
];
let obj = { no: 4, name: "header_localized", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[2]).LocalizedString;
  }
}
obj.T = T;
items[3] = obj;
items[4] = {
  no: 5,
  name: "body_localized",
  kind: "message",
  T() {
    return require("localized_string").LocalizedString;
  },
};
prototype = new prototype(
  "discord_protos.premium_marketing.v1.PaymentModalBanner",
  items,
  tmp,
  T,
  PaymentModalBanner$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/payment_modal_banner.tsx",
);

export const PaymentModalBanner = prototype;
