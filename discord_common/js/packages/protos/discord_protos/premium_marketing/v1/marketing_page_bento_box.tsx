// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/marketing_page_bento_box.tsx
import _mod1212 from "../../../../../../../_runtime/metro/01212__.js";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1212).MessageType;
class MarketingPageBentoBox$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "asset",
      kind: "message",
      T() {
        return theme_aware_asset.ThemeAwareAsset;
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.premium_marketing.v1.MarketingPageBentoBox", items, new.target);
    return tmp1;
  }
}
const prototype = MarketingPageBentoBox$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1212.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1212.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1212;
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
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
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
              onRead = _mod1212.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(asset, tag, writeUnknownFields) {
  if (asset.asset) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult = tag.tag(1, _mod1212.WireType.LengthDelimited);
    const joined = ThemeAwareAsset.internalBinaryWrite(
      asset.asset,
      tag.tag(1, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(
      asset.asset,
      tag.tag(1, _mod1212.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1212.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, asset, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "asset",
    kind: "message",
    T() {
      return theme_aware_asset.ThemeAwareAsset;
    },
  },
];
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.MarketingPageBentoBox",
  items,
  tmp,
  MarketingPageBentoBox$Type,
  prototype,
  items,
  fn,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/marketing_page_bento_box.tsx",
);

export const MarketingPageBentoBox = prototype1;
