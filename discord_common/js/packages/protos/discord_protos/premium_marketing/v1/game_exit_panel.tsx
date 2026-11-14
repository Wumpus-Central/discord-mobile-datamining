// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/game_exit_panel.tsx
import _mod1197 from "../../../../../../../_runtime/metro/01197__.js";
import localized_string from "../../common/v1/localized_string.tsx";
import cta_button from "cta_button.tsx";
import theme_aware_asset from "theme_aware_asset.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const MessageType = fn(1197).MessageType;
class GameExitPanel$Type extends MessageType {
  constructor() {
    items = [, , , ,];
    items[0] = { no: 6, name: "trigger_application_id", kind: "scalar", T: 9 };
    items[1] = {
      no: 2,
      name: "body_localized",
      kind: "message",
      T() {
        return require("localized_string").LocalizedString;
      },
    };
    items[2] = { no: 3, name: "body", kind: "scalar", T: 9 };
    obj = { no: 4, name: "cta", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).CTAButton;
      }
    }
    obj.T = T;
    items[3] = obj;
    items[4] = {
      no: 5,
      name: "image",
      kind: "message",
      T() {
        return require("theme_aware_asset").ThemeAwareAsset;
      },
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.GameExitPanel", items, T);
    return tmp1;
  }
}
const prototype = GameExitPanel$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { triggerApplicationId: "", body: "" };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1197.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1197.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1197;
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
      if (6 === tmp5) {
        obj.triggerApplicationId = pos.string();
      } else if (2 === tmp5) {
        let LocalizedString = localized_string.LocalizedString;
        obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
      } else if (3 === tmp5) {
        obj.body = pos.string();
      } else if (4 === tmp5) {
        let CTAButton = cta_button.CTAButton;
        obj.cta = CTAButton.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.cta);
      } else if (5 === tmp5) {
        let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
        obj.image = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.image);
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
              onRead = _mod1197.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(triggerApplicationId, tag, writeUnknownFields) {
  if ("" !== triggerApplicationId.triggerApplicationId) {
    tag.tag(6, _mod1197.WireType.LengthDelimited).string(triggerApplicationId.triggerApplicationId);
    const tagResult = tag.tag(6, _mod1197.WireType.LengthDelimited);
  }
  if (triggerApplicationId.bodyLocalized) {
    const LocalizedString = localized_string.LocalizedString;
    const tagResult1 = tag.tag(2, _mod1197.WireType.LengthDelimited);
    const joined = LocalizedString.internalBinaryWrite(
      triggerApplicationId.bodyLocalized,
      tag.tag(2, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(
      triggerApplicationId.bodyLocalized,
      tag.tag(2, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if ("" !== triggerApplicationId.body) {
    tag.tag(3, _mod1197.WireType.LengthDelimited).string(triggerApplicationId.body);
    const tagResult2 = tag.tag(3, _mod1197.WireType.LengthDelimited);
  }
  if (triggerApplicationId.cta) {
    const CTAButton = cta_button.CTAButton;
    const tagResult3 = tag.tag(4, _mod1197.WireType.LengthDelimited);
    const joined1 = CTAButton.internalBinaryWrite(
      triggerApplicationId.cta,
      tag.tag(4, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult1 = CTAButton.internalBinaryWrite(
      triggerApplicationId.cta,
      tag.tag(4, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (triggerApplicationId.image) {
    const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
    const tagResult4 = tag.tag(5, _mod1197.WireType.LengthDelimited);
    const joined2 = ThemeAwareAsset.internalBinaryWrite(
      triggerApplicationId.image,
      tag.tag(5, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult2 = ThemeAwareAsset.internalBinaryWrite(
      triggerApplicationId.image,
      tag.tag(5, _mod1197.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1197.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, triggerApplicationId, tag);
  }
  return tag;
};
let items = [
  { no: 6, name: "trigger_application_id", kind: "scalar", T: 9 },
  {
    no: 2,
    name: "body_localized",
    kind: "message",
    T() {
      return require("localized_string").LocalizedString;
    },
  },
  { no: 3, name: "body", kind: "scalar", T: 9 },
  ,
];
let obj = { no: 4, name: "cta", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_0(closure_1_1[3]).CTAButton;
  }
}
obj.T = T;
items[3] = obj;
items[4] = {
  no: 5,
  name: "image",
  kind: "message",
  T() {
    return require("theme_aware_asset").ThemeAwareAsset;
  },
};
const prototype1 = new prototype(
  "discord_protos.premium_marketing.v1.GameExitPanel",
  items,
  tmp,
  T,
  GameExitPanel$Type,
  prototype,
  items,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/game_exit_panel.tsx",
);

export const GameExitPanel = prototype1;
