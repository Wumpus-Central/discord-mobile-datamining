// === Module 10424: theme_aware_asset ===

// Module 10424 (theme_aware_asset)
import _mod1198 from "module_1198" /* 1198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const MessageType = _mod1198.MessageType;
class ThemeAwareAsset$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "light_url", kind: "scalar", T: 9 }, { no: 2, name: "dark_url", kind: "scalar", T: 9 }, { no: 3, name: "light_static_url", kind: "scalar", T: 9 }, { no: 4, name: "dark_static_url", kind: "scalar", T: 9 }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.ThemeAwareAsset", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { lightUrl: "", darkUrl: "", lightStaticUrl: "", darkStaticUrl: "" };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
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
          obj.lightUrl = pos.string();
        } else if (2 === tmp5) {
          obj.darkUrl = pos.string();
        } else if (3 === tmp5) {
          obj.lightStaticUrl = pos.string();
        } else if (4 === tmp5) {
          obj.darkStaticUrl = pos.string();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1198.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(lightUrl, tag, writeUnknownFields) {
    if ("" !== lightUrl.lightUrl) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(lightUrl.lightUrl);
    }
    if ("" !== lightUrl.darkUrl) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(lightUrl.darkUrl);
    }
    if ("" !== lightUrl.lightStaticUrl) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult2.string(lightUrl.lightStaticUrl);
    }
    if ("" !== lightUrl.darkStaticUrl) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      tagResult3.string(lightUrl.darkStaticUrl);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, lightUrl, tag);
    }
    return tag;
  }
}
const prototype = ThemeAwareAsset$Type.prototype;
let items = [{ no: 1, name: "light_url", kind: "scalar", T: 9 }, { no: 2, name: "dark_url", kind: "scalar", T: 9 }, { no: 3, name: "light_static_url", kind: "scalar", T: 9 }, { no: 4, name: "dark_static_url", kind: "scalar", T: 9 }];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.ThemeAwareAsset", items, tmp, ThemeAwareAsset$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/theme_aware_asset.tsx");

export const ThemeAwareAsset = prototype1;