// discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx
import _mod1306 from "../../../../../../../_runtime/metro/01306__.js";
import create2 from "user_settings_shared.tsx";
import closure_2 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import {
  MessageType,
  MessageType as MessageType2,
  MessageType as MessageType3,
  MessageType as MessageType4,
  MessageType as MessageType5,
  MessageType as MessageType6,
  MessageType as MessageType7,
  MessageType as MessageType8,
  MessageType as MessageType9,
  MessageType as MessageType10,
  MessageType as MessageType11,
  MessageType as MessageType12,
  MessageType as MessageType13,
  MessageType as MessageType14,
} from "../../../../../../../_runtime/metro/01306__.js";

require = arg1;
let obj = { NONE: 0, [0]: "NONE", IMAGE: 1, [1]: "IMAGE", VIDEO: 2, [2]: "VIDEO" };
class FrecencyUserSettings$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "versions",
      kind: "message",
      T() {
        return callback(table[2]).Versions;
      },
    };
    items = [, , , , , , , , , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "favorite_gifs",
      kind: "message",
      T() {
        return closure_4;
      },
    };
    items[2] = {
      no: 3,
      name: "favorite_stickers",
      kind: "message",
      T() {
        return closure_6;
      },
    };
    items[3] = {
      no: 4,
      name: "sticker_frecency",
      kind: "message",
      T() {
        return closure_7;
      },
    };
    items[4] = {
      no: 5,
      name: "favorite_emojis",
      kind: "message",
      T() {
        return closure_8;
      },
    };
    items[5] = {
      no: 6,
      name: "emoji_frecency",
      kind: "message",
      T() {
        return closure_9;
      },
    };
    items[6] = {
      no: 7,
      name: "application_command_frecency",
      kind: "message",
      T() {
        return closure_10;
      },
    };
    items[7] = {
      no: 8,
      name: "favorite_soundboard_sounds",
      kind: "message",
      T() {
        return closure_12;
      },
    };
    items[8] = {
      no: 9,
      name: "application_frecency",
      kind: "message",
      T() {
        return closure_15;
      },
    };
    items[9] = {
      no: 10,
      name: "heard_sound_frecency",
      kind: "message",
      T() {
        return closure_13;
      },
    };
    items[10] = {
      no: 11,
      name: "played_sound_frecency",
      kind: "message",
      T() {
        return closure_14;
      },
    };
    obj = { no: 12, name: "guild_and_channel_frecency", kind: "message", T: null };
    class T {
      constructor() {
        return closure_16;
      }
    }
    obj[3] = T;
    items[11] = obj;
    items[12] = {
      no: 13,
      name: "emoji_reaction_frecency",
      kind: "message",
      T() {
        return closure_9;
      },
    };
    tmp = new tmp("discord_protos.discord_users.v1.FrecencyUserSettings", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = FrecencyUserSettings$Type.prototype;
prototype["create"] = function create(arr) {
  obj = {};
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    obj.emojiReactionFrecency = object4.internalBinaryRead(pos, pos.uint32(), arg2, obj.emojiReactionFrecency);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(versions, tag, writeUnknownFields) {
  if (versions.versions) {
    const Versions = create2.Versions;
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    const joined = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteGifs) {
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined1 = object
      .internalBinaryWrite(
        versions.favoriteGifs,
        tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = object.internalBinaryWrite(
      versions.favoriteGifs,
      tag.tag(2, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteStickers) {
    const tagResult2 = tag.tag(3, _mod1306.WireType.LengthDelimited);
    const joined2 = object1
      .internalBinaryWrite(
        versions.favoriteStickers,
        tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult2 = object1.internalBinaryWrite(
      versions.favoriteStickers,
      tag.tag(3, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.stickerFrecency) {
    const tagResult3 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined3 = object2
      .internalBinaryWrite(
        versions.stickerFrecency,
        tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult3 = object2.internalBinaryWrite(
      versions.stickerFrecency,
      tag.tag(4, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteEmojis) {
    const tagResult4 = tag.tag(5, _mod1306.WireType.LengthDelimited);
    const joined4 = object3
      .internalBinaryWrite(
        versions.favoriteEmojis,
        tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult4 = object3.internalBinaryWrite(
      versions.favoriteEmojis,
      tag.tag(5, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.emojiFrecency) {
    const tagResult5 = tag.tag(6, _mod1306.WireType.LengthDelimited);
    const joined5 = object4
      .internalBinaryWrite(
        versions.emojiFrecency,
        tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult5 = object4.internalBinaryWrite(
      versions.emojiFrecency,
      tag.tag(6, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.applicationCommandFrecency) {
    const tagResult6 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined6 = object5
      .internalBinaryWrite(
        versions.applicationCommandFrecency,
        tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult6 = object5.internalBinaryWrite(
      versions.applicationCommandFrecency,
      tag.tag(7, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteSoundboardSounds) {
    const tagResult7 = tag.tag(8, _mod1306.WireType.LengthDelimited);
    const joined7 = object7
      .internalBinaryWrite(
        versions.favoriteSoundboardSounds,
        tag.tag(8, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult7 = object7.internalBinaryWrite(
      versions.favoriteSoundboardSounds,
      tag.tag(8, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.applicationFrecency) {
    const tagResult8 = tag.tag(9, _mod1306.WireType.LengthDelimited);
    const joined8 = playedSoundFrecencyType
      .internalBinaryWrite(
        versions.applicationFrecency,
        tag.tag(9, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult8 = playedSoundFrecencyType.internalBinaryWrite(
      versions.applicationFrecency,
      tag.tag(9, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.heardSoundFrecency) {
    const tagResult9 = tag.tag(10, _mod1306.WireType.LengthDelimited);
    const joined9 = object8
      .internalBinaryWrite(
        versions.heardSoundFrecency,
        tag.tag(10, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult9 = object8.internalBinaryWrite(
      versions.heardSoundFrecency,
      tag.tag(10, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.playedSoundFrecency) {
    const tagResult10 = tag.tag(11, _mod1306.WireType.LengthDelimited);
    const joined10 = heardSoundFrecencyType
      .internalBinaryWrite(
        versions.playedSoundFrecency,
        tag.tag(11, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult10 = heardSoundFrecencyType.internalBinaryWrite(
      versions.playedSoundFrecency,
      tag.tag(11, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.guildAndChannelFrecency) {
    const tagResult11 = tag.tag(12, _mod1306.WireType.LengthDelimited);
    const joined11 = closure_16
      .internalBinaryWrite(
        versions.guildAndChannelFrecency,
        tag.tag(12, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult11 = closure_16.internalBinaryWrite(
      versions.guildAndChannelFrecency,
      tag.tag(12, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.emojiReactionFrecency) {
    const tagResult12 = tag.tag(13, _mod1306.WireType.LengthDelimited);
    const joined12 = object4
      .internalBinaryWrite(
        versions.emojiReactionFrecency,
        tag.tag(13, _mod1306.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult12 = object4.internalBinaryWrite(
      versions.emojiReactionFrecency,
      tag.tag(13, _mod1306.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, versions, tag);
  }
  return tag;
};
const frecencyUserSettingsType = new FrecencyUserSettings$Type();
class FavoriteGIFs$Type extends MessageType2 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_5;
      },
    };
    items = [,];
    items[0] = { no: 1, name: "gifs", kind: "map", K: 9, V: obj };
    items[1] = { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.discord_users.v1.FavoriteGIFs", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype2 = FavoriteGIFs$Type.prototype;
prototype2["create"] = function create(arr) {
  obj = { gifs: {}, hideTooltip: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype2["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.gifs, pos, readUnknownField);
      } else if (2 === tmp5) {
        obj.hideTooltip = pos.bool();
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype2["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object;
        internalBinaryReadResult = object.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    error = new Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs");
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object.create();
  }
  arg0[str] = obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(gifs, tag, writeUnknownFields) {
  const keys = Object.keys(gifs.gifs);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object;
    let internalBinaryWriteResult = object.internalBinaryWrite(gifs.gifs[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  if (false !== gifs.hideTooltip) {
    tag.tag(2, _mod1306.WireType.Varint).bool(gifs.hideTooltip);
    const tagResult3 = tag.tag(2, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, gifs, tag);
  }
  return tag;
};
obj = {
  kind: "message",
  T() {
    return closure_5;
  },
};
let items = [
  { no: 1, name: "gifs", kind: "map", K: 9, V: obj },
  { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 },
];
let object = new Object(
  "discord_protos.discord_users.v1.FavoriteGIFs",
  items,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class FavoriteGIF$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "format",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_users.v1.GIFType", closure_3];
        return items;
      },
    };
    items = [, , , ,];
    items[0] = obj;
    items[1] = { no: 2, name: "src", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "width", kind: "scalar", T: 13 };
    items[3] = { no: 4, name: "height", kind: "scalar", T: 13 };
    items[4] = { no: 5, name: "order", kind: "scalar", T: 13 };
    tmp = new tmp("discord_protos.discord_users.v1.FavoriteGIF", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype3 = FavoriteGIF$Type.prototype;
prototype3["create"] = function create(arr) {
  obj = { format: 0, src: "", width: 0, height: 0, order: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype3["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.format = pos.int32();
      } else if (2 === tmp5) {
        obj.src = pos.string();
      } else if (3 === tmp5) {
        obj.width = pos.uint32();
      } else if (4 === tmp5) {
        obj.height = pos.uint32();
      } else if (5 === tmp5) {
        obj.order = pos.uint32();
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(format, tag, writeUnknownFields) {
  if (0 !== format.format) {
    tag.tag(1, _mod1306.WireType.Varint).int32(format.format);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if ("" !== format.src) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).string(format.src);
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  if (0 !== format.width) {
    tag.tag(3, _mod1306.WireType.Varint).uint32(format.width);
    const tagResult2 = tag.tag(3, _mod1306.WireType.Varint);
  }
  if (0 !== format.height) {
    tag.tag(4, _mod1306.WireType.Varint).uint32(format.height);
    const tagResult3 = tag.tag(4, _mod1306.WireType.Varint);
  }
  if (0 !== format.order) {
    tag.tag(5, _mod1306.WireType.Varint).uint32(format.order);
    const tagResult4 = tag.tag(5, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, format, tag);
  }
  return tag;
};
obj = {
  no: 1,
  name: "format",
  kind: "enum",
  T() {
    const items = ["discord_protos.discord_users.v1.GIFType", closure_3];
    return items;
  },
};
const items1 = [
  obj,
  { no: 2, name: "src", kind: "scalar", T: 9 },
  { no: 3, name: "width", kind: "scalar", T: 13 },
  { no: 4, name: "height", kind: "scalar", T: 13 },
  { no: 5, name: "order", kind: "scalar", T: 13 },
];
object = new Object("discord_protos.discord_users.v1.FavoriteGIF", items1, tmp4, tmp3, "create", "internalBinaryRead");
// ThrowIfThisInitialized (0x7c)
class FavoriteStickers$Type extends MessageType4 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp("discord_protos.discord_users.v1.FavoriteStickers", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype4 = FavoriteStickers$Type.prototype;
prototype4["create"] = function create(arr) {
  obj = { stickerIds: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let stickerIds = obj.stickerIds;
              let str5 = pos.fixed64();
              let arr = stickerIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let stickerIds1 = obj.stickerIds;
          let str4 = pos.fixed64();
          arr = stickerIds1.push(str4.toString());
        }
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(stickerIds, tag, writeUnknownFields) {
  let length;
  if (stickerIds.stickerIds.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < stickerIds.stickerIds.length) {
      do {
        let fixed64Result = tag.fixed64(stickerIds.stickerIds[num2]);
        num2 = num2 + 1;
        length = stickerIds.stickerIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, stickerIds, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 }];
const object1 = new Object(
  "discord_protos.discord_users.v1.FavoriteStickers",
  items2,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class StickerFrecency$Type extends MessageType5 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "stickers", kind: "map", K: 6, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.StickerFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype5 = StickerFrecency$Type.prototype;
prototype5["create"] = function create(arr) {
  obj = { stickers: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.stickers, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype5["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      str = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    error = new Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers");
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(stickers, tag, writeUnknownFields) {
  const keys = Object.keys(stickers.stickers);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(stickers.stickers[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, stickers, tag);
  }
  return tag;
};
const items3 = [
  {
    no: 1,
    name: "stickers",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
const object2 = new Object(
  "discord_protos.discord_users.v1.StickerFrecency",
  items3,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class FavoriteEmojis$Type extends MessageType6 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 };
    tmp = new tmp("discord_protos.discord_users.v1.FavoriteEmojis", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype6 = FavoriteEmojis$Type.prototype;
prototype6["create"] = function create(arr) {
  obj = { emojis: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let emojis = obj.emojis;
        let arr = emojis.push(pos.string());
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(emojis, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < emojis.emojis.length) {
    do {
      let tmp = require;
      let tmp2 = dependencyMap;
      let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
      let stringResult = tagResult.string(emojis.emojis[num]);
      num = num + 1;
      length = emojis.emojis.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, emojis, tag);
  }
  return tag;
};
const items4 = [{ no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 }];
const object3 = new Object(
  "discord_protos.discord_users.v1.FavoriteEmojis",
  items4,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class EmojiFrecency$Type extends MessageType7 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "emojis", kind: "map", K: 9, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.EmojiFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype7 = EmojiFrecency$Type.prototype;
prototype7["create"] = function create(arr) {
  obj = { emojis: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.emojis, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype7["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    error = new Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis");
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype7["internalBinaryWrite"] = function internalBinaryWrite(emojis, tag, writeUnknownFields) {
  const keys = Object.keys(emojis.emojis);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(emojis.emojis[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, emojis, tag);
  }
  return tag;
};
const items5 = [
  {
    no: 1,
    name: "emojis",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
const object4 = new Object(
  "discord_protos.discord_users.v1.EmojiFrecency",
  items5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class ApplicationCommandFrecency$Type extends MessageType8 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "application_commands", kind: "map", K: 9, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.ApplicationCommandFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype8 = ApplicationCommandFrecency$Type.prototype;
prototype8["create"] = function create(arr) {
  obj = { applicationCommands: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.applicationCommands, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype8["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype8["internalBinaryWrite"] = function internalBinaryWrite(applicationCommands, tag, writeUnknownFields) {
  const keys = Object.keys(applicationCommands.applicationCommands);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(
      applicationCommands.applicationCommands[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, applicationCommands, tag);
  }
  return tag;
};
const items6 = [
  {
    no: 1,
    name: "application_commands",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
const object5 = new Object(
  "discord_protos.discord_users.v1.ApplicationCommandFrecency",
  items6,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class FrecencyItem$Type extends MessageType9 {
  constructor() {
    items = [, , ,];
    items[0] = { no: 1, name: "total_uses", kind: "scalar", T: 13 };
    items[1] = { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 };
    items[2] = { no: 3, name: "frecency", kind: "scalar", T: 5 };
    items[3] = { no: 4, name: "score", kind: "scalar", T: 5 };
    tmp = new tmp("discord_protos.discord_users.v1.FrecencyItem", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype9 = FrecencyItem$Type.prototype;
prototype9["create"] = function create(arr) {
  obj = { totalUses: 0, recentUses: [], frecency: 0, score: 0 };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        obj.totalUses = pos.uint32();
      } else if (2 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let recentUses = obj.recentUses;
              let str5 = pos.uint64();
              let arr = recentUses.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let recentUses1 = obj.recentUses;
          let str4 = pos.uint64();
          arr = recentUses1.push(str4.toString());
        }
      } else if (3 === tmp5) {
        obj.frecency = pos.int32();
      } else if (4 === tmp5) {
        obj.score = pos.int32();
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype9["internalBinaryWrite"] = function internalBinaryWrite(totalUses, tag, writeUnknownFields) {
  let length;
  if (0 !== totalUses.totalUses) {
    tag.tag(1, _mod1306.WireType.Varint).uint32(totalUses.totalUses);
    const tagResult = tag.tag(1, _mod1306.WireType.Varint);
  }
  if (totalUses.recentUses.length) {
    tag.tag(2, _mod1306.WireType.LengthDelimited).fork();
    let num4 = 0;
    if (0 < totalUses.recentUses.length) {
      do {
        let uint64Result = tag.uint64(totalUses.recentUses[num4]);
        num4 = num4 + 1;
        length = totalUses.recentUses.length;
      } while (num4 < length);
    }
    const joined = tag.join();
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
  }
  if (0 !== totalUses.frecency) {
    tag.tag(3, _mod1306.WireType.Varint).int32(totalUses.frecency);
    const tagResult2 = tag.tag(3, _mod1306.WireType.Varint);
  }
  if (0 !== totalUses.score) {
    tag.tag(4, _mod1306.WireType.Varint).int32(totalUses.score);
    const tagResult3 = tag.tag(4, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, totalUses, tag);
  }
  return tag;
};
const items7 = [
  { no: 1, name: "total_uses", kind: "scalar", T: 13 },
  { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 },
  { no: 3, name: "frecency", kind: "scalar", T: 5 },
  { no: 4, name: "score", kind: "scalar", T: 5 },
];
const object6 = new Object(
  "discord_protos.discord_users.v1.FrecencyItem",
  items7,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class FavoriteSoundboardSounds$Type extends MessageType10 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp = new tmp("discord_protos.discord_users.v1.FavoriteSoundboardSounds", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype10 = FavoriteSoundboardSounds$Type.prototype;
prototype10["create"] = function create(arr) {
  obj = { soundIds: [] };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype10["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let tmp22 = require;
        let tmp23 = dependencyMap;
        if (tmp6 === _mod1306.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let soundIds = obj.soundIds;
              let str5 = pos.fixed64();
              let arr = soundIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let soundIds1 = obj.soundIds;
          let str4 = pos.fixed64();
          arr = soundIds1.push(str4.toString());
        }
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype10["internalBinaryWrite"] = function internalBinaryWrite(soundIds, tag, writeUnknownFields) {
  let length;
  if (soundIds.soundIds.length) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < soundIds.soundIds.length) {
      do {
        let fixed64Result = tag.fixed64(soundIds.soundIds[num2]);
        num2 = num2 + 1;
        length = soundIds.soundIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, soundIds, tag);
  }
  return tag;
};
const items8 = [{ no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 }];
const object7 = new Object(
  "discord_protos.discord_users.v1.FavoriteSoundboardSounds",
  items8,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
// ThrowIfThisInitialized (0x7c)
class HeardSoundFrecency$Type extends MessageType11 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "heard_sounds", kind: "map", K: 9, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.HeardSoundFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype11 = HeardSoundFrecency$Type.prototype;
prototype11["create"] = function create(arr) {
  obj = { heardSounds: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype11["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.heardSounds, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype11["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype11["internalBinaryWrite"] = function internalBinaryWrite(heardSounds, tag, writeUnknownFields) {
  const keys = Object.keys(heardSounds.heardSounds);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(
      heardSounds.heardSounds[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, heardSounds, tag);
  }
  return tag;
};
const items9 = [
  {
    no: 1,
    name: "heard_sounds",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
const object8 = new Object(
  "discord_protos.discord_users.v1.HeardSoundFrecency",
  items9,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  tmp2,
  "binaryReadMap1",
  "internalBinaryWrite",
  HeardSoundFrecency$Type,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  frecencyUserSettingsType,
  object,
  object,
  object1,
  object2,
  object3,
);
// ThrowIfThisInitialized (0x7c)
class PlayedSoundFrecency$Type extends MessageType12 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "played_sounds", kind: "map", K: 9, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.PlayedSoundFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype12 = PlayedSoundFrecency$Type.prototype;
prototype12["create"] = function create(arr) {
  obj = { playedSounds: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype12["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.playedSounds, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype12["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype12["internalBinaryWrite"] = function internalBinaryWrite(playedSounds, tag, writeUnknownFields) {
  const keys = Object.keys(playedSounds.playedSounds);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(
      playedSounds.playedSounds[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, playedSounds, tag);
  }
  return tag;
};
const items10 = [
  {
    no: 1,
    name: "played_sounds",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
const heardSoundFrecencyType = new HeardSoundFrecency$Type(
  "discord_protos.discord_users.v1.PlayedSoundFrecency",
  items10,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
  PlayedSoundFrecency$Type,
  "binaryReadMap1",
  "internalBinaryWrite",
  HeardSoundFrecency$Type,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  frecencyUserSettingsType,
  object,
  object,
  object1,
  object2,
  object3,
  object4,
  object5,
  object6,
);
// ThrowIfThisInitialized (0x7c)
class ApplicationFrecency$Type extends MessageType13 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "applications", kind: "map", K: 9, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.ApplicationFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype13 = ApplicationFrecency$Type.prototype;
prototype13["create"] = function create(arr) {
  obj = { applications: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype13["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.applications, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype13["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype13["internalBinaryWrite"] = function internalBinaryWrite(applications, tag, writeUnknownFields) {
  const keys = Object.keys(applications.applications);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(
      applications.applications[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, applications, tag);
  }
  return tag;
};
const items11 = [
  {
    no: 1,
    name: "applications",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
const playedSoundFrecencyType = new PlayedSoundFrecency$Type(
  "discord_protos.discord_users.v1.ApplicationFrecency",
  items11,
  tmp4,
  ApplicationFrecency$Type,
  "create",
  "internalBinaryRead",
  PlayedSoundFrecency$Type,
  "binaryReadMap1",
  "internalBinaryWrite",
  items11,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  frecencyUserSettingsType,
  object,
  object,
  object1,
  object2,
  object3,
  object4,
  object5,
  object6,
  object7,
  object8,
  heardSoundFrecencyType,
);
// ThrowIfThisInitialized (0x7c)
class GuildAndChannelFrecency$Type extends MessageType14 {
  constructor() {
    obj = {
      kind: "message",
      T() {
        return closure_11;
      },
    };
    items = [];
    items[0] = { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: obj };
    tmp = new tmp("discord_protos.discord_users.v1.GuildAndChannelFrecency", items, new.target);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype14 = GuildAndChannelFrecency$Type.prototype;
prototype14["create"] = function create(arr) {
  obj = { guildAndChannels: {} };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype14["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField) {
  const self = this;
  obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  const sum = pos.pos + arg1;
  if (pos.pos < sum) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(pos.tag(), 2);
      [tmp5, tmp6] = tmp4;
      if (1 === tmp5) {
        let binaryReadMap1Result = self.binaryReadMap1(obj.guildAndChannels, pos, readUnknownField);
      } else {
        let onRead = readUnknownField.readUnknownField;
        if ("throw" === onRead) {
          let tmp15 = globalThis;
          let _globalThis = globalThis;
          let _HermesInternal = HermesInternal;
          let str = ") for ";
          let str2 = " (wire type ";
          let str3 = "Unknown field ";
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          let tmp18 = new.target;
          let tmp19 = new.target;
          error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
          let tmp21 = error;
          throw error;
        } else {
          let skipResult = pos.skip(tmp6);
          if (false !== onRead) {
            if (true === onRead) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              onRead = _mod1306.UnknownFieldHandler.onRead;
            }
            let tmp10 = obj;
            let tmp11 = tmp5;
            let tmp12 = tmp6;
            let tmp13 = skipResult;
            let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
          }
        }
      }
    } while (pos.pos < sum);
  }
  return obj;
};
prototype14["binaryReadMap1"] = function binaryReadMap1(arg0, pos) {
  const sum = pos.pos + pos.uint32();
  obj = undefined;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp5 = callback;
      let tmp6 = callback(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let tmp8 = tmp2;
      str = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        let tmp15 = object6;
        internalBinaryReadResult = object6.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str;
      obj = internalBinaryReadResult;
    }
    const _globalThis = globalThis;
    error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
    );
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = object6.create();
  }
  arg0[str] = obj;
};
prototype14["internalBinaryWrite"] = function internalBinaryWrite(guildAndChannels, tag, writeUnknownFields) {
  const keys = Object.keys(guildAndChannels.guildAndChannels);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1306.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let tmp7 = object6;
    let internalBinaryWriteResult = object6.internalBinaryWrite(
      guildAndChannels.guildAndChannels[nextResult],
      tag,
      writeUnknownFields,
    );
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, guildAndChannels, tag);
  }
  return tag;
};
const items12 = [
  {
    no: 1,
    name: "guild_and_channels",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return closure_11;
      },
    },
  },
];
let tmp19 = new "binaryReadMap1"(
  "discord_protos.discord_users.v1.GuildAndChannelFrecency",
  items12,
  tmp4,
  ApplicationFrecency$Type,
  "create",
  "internalBinaryRead",
  GuildAndChannelFrecency$Type,
  "binaryReadMap1",
  items12,
  new.target,
  undefined,
  tmp,
  arg1,
  dependencyMap,
  obj,
  frecencyUserSettingsType,
  object,
  object,
  object1,
  object2,
  object3,
  object4,
  object5,
  object6,
);
// ThrowIfThisInitialized (0x7c)
let closure_16 = tmp19;
let result = require("set").fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx",
);

export const GIFType = obj;
export const FrecencyUserSettings = frecencyUserSettingsType;
export const FavoriteGIFs = object;
export const FavoriteGIF = object;
export const FavoriteStickers = object1;
export const StickerFrecency = object2;
export const FavoriteEmojis = object3;
export const EmojiFrecency = object4;
export const ApplicationCommandFrecency = object5;
export const FrecencyItem = object6;
export const FavoriteSoundboardSounds = object7;
export const HeardSoundFrecency = object8;
export const PlayedSoundFrecency = heardSoundFrecencyType;
export const ApplicationFrecency = playedSoundFrecencyType;
export const GuildAndChannelFrecency = tmp19;
