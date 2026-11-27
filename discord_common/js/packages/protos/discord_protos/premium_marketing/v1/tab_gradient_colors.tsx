// === Module 9175: tab_gradient_colors ===

// Module 9175 (tab_gradient_colors)
import _mod1196 from "module_1196" /* 1196 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1196).MessageType;
class PaletteColor$Type extends MessageType {
  constructor() {
    items = [, ];
    items[0] = { no: 1, name: "palette_color", kind: "scalar", T: 9 };
    items[1] = { no: 2, name: "opacity", kind: "scalar", T: 2 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.PaletteColor", items, new.target);
    return tmp1;
  }
}
const prototype = PaletteColor$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = { paletteColor: "", opacity: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
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
        obj.paletteColor = pos.string();
      } else if (2 === tmp5) {
        obj.opacity = pos.float();
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
              onRead = _mod1196.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(paletteColor, tag, writeUnknownFields) {
  if ("" !== paletteColor.paletteColor) {
    tag.tag(1, _mod1196.WireType.LengthDelimited).string(paletteColor.paletteColor);
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
  }
  if (0 !== paletteColor.opacity) {
    tag.tag(2, _mod1196.WireType.Bit32).float(paletteColor.opacity);
    const tagResult1 = tag.tag(2, _mod1196.WireType.Bit32);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, paletteColor, tag);
  }
  return tag;
};
let items = [{ no: 1, name: "palette_color", kind: "scalar", T: 9 }, { no: 2, name: "opacity", kind: "scalar", T: 2 }];
const object = new Object("discord_protos.premium_marketing.v1.PaletteColor", items, tmp3, tmp2, "create", "internalBinaryRead", tmp, "internalBinaryWrite");
const MessageType2 = fn(1196).MessageType;
class ThemedPaletteColor$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "light",
      kind: "message",
      T() {
            return object;
          }
    };
    items = [, , , ];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "ash",
      kind: "message",
      T() {
            return object;
          }
    };
    obj1 = { no: 3, name: "dark", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_3;
      }
    }
    obj1.T = T;
    items[2] = obj1;
    items[3] = {
      no: 4,
      name: "onyx",
      kind: "message",
      T() {
            return object;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.ThemedPaletteColor", items, T);
    return tmp1;
  }
}
const prototype2 = ThemedPaletteColor$Type.prototype;
prototype2["create"] = function create(partialSettings) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.light = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.light);
      } else if (2 === tmp5) {
        obj.ash = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ash);
      } else if (3 === tmp5) {
        obj.dark = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.dark);
      } else if (4 === tmp5) {
        obj.onyx = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.onyx);
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
              onRead = _mod1196.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(light, tag, writeUnknownFields) {
  if (light.light) {
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
    const joined = object.internalBinaryWrite(light.light, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = object.internalBinaryWrite(light.light, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (light.ash) {
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
    const joined1 = object.internalBinaryWrite(light.ash, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = object.internalBinaryWrite(light.ash, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (light.dark) {
    const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
    const joined2 = object.internalBinaryWrite(light.dark, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = object.internalBinaryWrite(light.dark, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (light.onyx) {
    const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
    const joined3 = object.internalBinaryWrite(light.onyx, tag.tag(4, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = object.internalBinaryWrite(light.onyx, tag.tag(4, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, light, tag);
  }
  return tag;
};
const items1 = [
  {
    no: 1,
    name: "light",
    kind: "message",
    T() {
      return object;
    }
  },
  {
    no: 2,
    name: "ash",
    kind: "message",
    T() {
      return object;
    }
  },
  {
    no: 3,
    name: "dark",
    kind: "message",
    T() {
      return object;
    }
  },
  {
    no: 4,
    name: "onyx",
    kind: "message",
    T() {
      return object;
    }
  }
];
let tmp4 = new tmp("discord_protos.premium_marketing.v1.ThemedPaletteColor", items1, tmp3, ThemedPaletteColor$Type, "create", "internalBinaryRead", tmp, "internalBinaryWrite", items1, undefined, fn, dependencyMap, object);
let closure_4 = tmp4;
const MessageType3 = fn(1196).MessageType;
class TabGradientColors$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "center",
      kind: "message",
      T() {
            return closure_1_4;
          }
    };
    items = [, , ];
    items[0] = obj;
    obj1 = { no: 2, name: "inner_ring", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_4;
      }
    }
    obj1.T = T;
    items[1] = obj1;
    items[2] = {
      no: 3,
      name: "outer_ring",
      kind: "message",
      T() {
            return closure_1_4;
          }
    };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.TabGradientColors", items, T);
    return tmp1;
  }
}
const prototype3 = TabGradientColors$Type.prototype;
prototype3["create"] = function create(partialSettings) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1196.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1196;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.center = closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.center);
      } else if (2 === tmp5) {
        obj.innerRing = closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.innerRing);
      } else if (3 === tmp5) {
        obj.outerRing = closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.outerRing);
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
              onRead = _mod1196.UnknownFieldHandler.onRead;
            }
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(center, tag, writeUnknownFields) {
  if (center.center) {
    const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
    const joined = closure_4.internalBinaryWrite(center.center, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = closure_4.internalBinaryWrite(center.center, tag.tag(1, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (center.innerRing) {
    const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
    const joined1 = closure_4.internalBinaryWrite(center.innerRing, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = closure_4.internalBinaryWrite(center.innerRing, tag.tag(2, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if (center.outerRing) {
    const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
    const joined2 = closure_4.internalBinaryWrite(center.outerRing, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = closure_4.internalBinaryWrite(center.outerRing, tag.tag(3, _mod1196.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1196.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, center, tag);
  }
  return tag;
};
const items2 = [
  {
    no: 1,
    name: "center",
    kind: "message",
    T() {
      return closure_1_4;
    }
  },
,

];
const obj3 = { no: 2, name: "inner_ring", kind: "message", T: null };
class T {
  constructor() {
    return closure_1_4;
  }
}
obj3.T = T;
items2[1] = obj3;
items2[2] = {
  no: 3,
  name: "outer_ring",
  kind: "message",
  T() {
    return closure_1_4;
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/tab_gradient_colors.tsx");

export const PaletteColor = object;
export const ThemedPaletteColor = tmp4;
export const TabGradientColors = new "internalBinaryWrite"("discord_protos.premium_marketing.v1.TabGradientColors", items2, tmp3, ThemedPaletteColor$Type, "create", T, TabGradientColors$Type, "internalBinaryWrite", items2, undefined);