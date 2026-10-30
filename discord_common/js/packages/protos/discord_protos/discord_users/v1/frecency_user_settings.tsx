// discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import user_settings_shared from "user_settings_shared.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";

require = fn;
const GIFType = { NONE: 0, [0]: "NONE", IMAGE: 1, [1]: "IMAGE", VIDEO: 2, [2]: "VIDEO" };
const MessageType = fn(1198).MessageType;
class FrecencyUserSettings$Type extends MessageType {
  constructor() {
    obj = {
      no: 1,
      name: "versions",
      kind: "message",
      T() {
        return user_settings_shared.Versions;
      },
    };
    items = [, , , , , , , , , , , , ,];
    items[0] = obj;
    items[1] = {
      no: 2,
      name: "favorite_gifs",
      kind: "message",
      T() {
        return object;
      },
    };
    items[2] = {
      no: 3,
      name: "favorite_stickers",
      kind: "message",
      T() {
        return object12;
      },
    };
    items[3] = {
      no: 4,
      name: "sticker_frecency",
      kind: "message",
      T() {
        return object13;
      },
    };
    items[4] = {
      no: 5,
      name: "favorite_emojis",
      kind: "message",
      T() {
        return object14;
      },
    };
    items[5] = {
      no: 6,
      name: "emoji_frecency",
      kind: "message",
      T() {
        return object16;
      },
    };
    items[6] = {
      no: 7,
      name: "application_command_frecency",
      kind: "message",
      T() {
        return object17;
      },
    };
    items[7] = {
      no: 8,
      name: "favorite_soundboard_sounds",
      kind: "message",
      T() {
        return object19;
      },
    };
    items[8] = {
      no: 9,
      name: "application_frecency",
      kind: "message",
      T() {
        return playedSoundFrecencyType;
      },
    };
    items[9] = {
      no: 10,
      name: "heard_sound_frecency",
      kind: "message",
      T() {
        return object20;
      },
    };
    items[10] = {
      no: 11,
      name: "played_sound_frecency",
      kind: "message",
      T() {
        return heardSoundFrecencyType;
      },
    };
    items[11] = {
      no: 12,
      name: "guild_and_channel_frecency",
      kind: "message",
      T() {
        return closure_1_17;
      },
    };
    obj1 = { no: 13, name: "emoji_reaction_frecency", kind: "message", T: null };
    class T {
      constructor() {
        return closure_1_10;
      }
    }
    obj1.T = T;
    items[12] = obj1;
    items[13] = {
      no: 14,
      name: "pinned_emoji_packs",
      kind: "message",
      T() {
        return object15;
      },
    };
    tmp1 = new tmp("discord_protos.discord_users.v1.FrecencyUserSettings", items, T);
    return tmp1;
  }
}
const prototype = FrecencyUserSettings$Type.prototype;
prototype["create"] = function create(partialSettings) {
  const obj = {};
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = pos.tag();
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(versions, tag, writeUnknownFields) {
  if (versions.versions) {
    const Versions = user_settings_shared.Versions;
    const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    const joined = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    ).join();
    const internalBinaryWriteResult = Versions.internalBinaryWrite(
      versions.versions,
      tag.tag(1, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteGifs) {
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    const joined1 = object
      .internalBinaryWrite(
        versions.favoriteGifs,
        tag.tag(2, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult1 = object.internalBinaryWrite(
      versions.favoriteGifs,
      tag.tag(2, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteStickers) {
    const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
    const joined2 = object12
      .internalBinaryWrite(
        versions.favoriteStickers,
        tag.tag(3, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult2 = object12.internalBinaryWrite(
      versions.favoriteStickers,
      tag.tag(3, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.stickerFrecency) {
    const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
    const joined3 = object13
      .internalBinaryWrite(
        versions.stickerFrecency,
        tag.tag(4, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult3 = object13.internalBinaryWrite(
      versions.stickerFrecency,
      tag.tag(4, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteEmojis) {
    const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
    const joined4 = object14
      .internalBinaryWrite(
        versions.favoriteEmojis,
        tag.tag(5, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult4 = object14.internalBinaryWrite(
      versions.favoriteEmojis,
      tag.tag(5, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.emojiFrecency) {
    const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
    const joined5 = object16
      .internalBinaryWrite(
        versions.emojiFrecency,
        tag.tag(6, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult5 = object16.internalBinaryWrite(
      versions.emojiFrecency,
      tag.tag(6, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.applicationCommandFrecency) {
    const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
    const joined6 = object17
      .internalBinaryWrite(
        versions.applicationCommandFrecency,
        tag.tag(7, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult6 = object17.internalBinaryWrite(
      versions.applicationCommandFrecency,
      tag.tag(7, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.favoriteSoundboardSounds) {
    const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
    const joined7 = object19
      .internalBinaryWrite(
        versions.favoriteSoundboardSounds,
        tag.tag(8, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult7 = object19.internalBinaryWrite(
      versions.favoriteSoundboardSounds,
      tag.tag(8, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.applicationFrecency) {
    const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
    const joined8 = playedSoundFrecencyType
      .internalBinaryWrite(
        versions.applicationFrecency,
        tag.tag(9, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult8 = playedSoundFrecencyType.internalBinaryWrite(
      versions.applicationFrecency,
      tag.tag(9, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.heardSoundFrecency) {
    const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
    const joined9 = object20
      .internalBinaryWrite(
        versions.heardSoundFrecency,
        tag.tag(10, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult9 = object20.internalBinaryWrite(
      versions.heardSoundFrecency,
      tag.tag(10, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.playedSoundFrecency) {
    const tagResult10 = tag.tag(11, _mod1198.WireType.LengthDelimited);
    const joined10 = heardSoundFrecencyType
      .internalBinaryWrite(
        versions.playedSoundFrecency,
        tag.tag(11, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult10 = heardSoundFrecencyType.internalBinaryWrite(
      versions.playedSoundFrecency,
      tag.tag(11, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.guildAndChannelFrecency) {
    const tagResult11 = tag.tag(12, _mod1198.WireType.LengthDelimited);
    const joined11 = closure_17
      .internalBinaryWrite(
        versions.guildAndChannelFrecency,
        tag.tag(12, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult11 = closure_17.internalBinaryWrite(
      versions.guildAndChannelFrecency,
      tag.tag(12, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.emojiReactionFrecency) {
    const tagResult12 = tag.tag(13, _mod1198.WireType.LengthDelimited);
    const joined12 = object16
      .internalBinaryWrite(
        versions.emojiReactionFrecency,
        tag.tag(13, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult12 = object16.internalBinaryWrite(
      versions.emojiReactionFrecency,
      tag.tag(13, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  if (versions.pinnedEmojiPacks) {
    const tagResult13 = tag.tag(14, _mod1198.WireType.LengthDelimited);
    const joined13 = object15
      .internalBinaryWrite(
        versions.pinnedEmojiPacks,
        tag.tag(14, _mod1198.WireType.LengthDelimited).fork(),
        writeUnknownFields,
      )
      .join();
    const internalBinaryWriteResult13 = object15.internalBinaryWrite(
      versions.pinnedEmojiPacks,
      tag.tag(14, _mod1198.WireType.LengthDelimited).fork(),
      writeUnknownFields,
    );
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, versions, tag);
  }
  return tag;
};
const frecencyUserSettingsType = new FrecencyUserSettings$Type();
const MessageType2 = fn(1198).MessageType;
class FavoriteGIFs$Type extends MessageType2 {
  constructor() {
    obj = {
      no: 1,
      name: "gifs",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T() {
          return object11;
        },
      },
    };
    items = [,];
    items[0] = obj;
    items[1] = { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 };
    tmp1 = new tmp("discord_protos.discord_users.v1.FavoriteGIFs", items, new.target);
    return tmp1;
  }
}
const prototype2 = FavoriteGIFs$Type.prototype;
prototype2["create"] = function create(partialSettings) {
  const obj = { gifs: {}, hideTooltip: false };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype2["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object11.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs");
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object11.create();
  }
  arg0[str] = obj;
};
prototype2["internalBinaryWrite"] = function internalBinaryWrite(gifs, tag, writeUnknownFields) {
  const keys = Object.keys(gifs.gifs);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object11.internalBinaryWrite(gifs.gifs[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  if (false !== gifs.hideTooltip) {
    tag.tag(2, _mod1198.WireType.Varint).bool(gifs.hideTooltip);
    const tagResult3 = tag.tag(2, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, gifs, tag);
  }
  return tag;
};
let items = [
  {
    no: 1,
    name: "gifs",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return object11;
      },
    },
  },
  { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 },
];
const object = new Object(
  "discord_protos.discord_users.v1.FavoriteGIFs",
  items,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType3 = fn(1198).MessageType;
class FavoriteGIF$Type extends MessageType3 {
  constructor() {
    obj = {
      no: 1,
      name: "format",
      kind: "enum",
      T() {
        const items = ["discord_protos.discord_users.v1.GIFType", GIFType];
        return items;
      },
    };
    items = [, , , ,];
    items[0] = obj;
    items[1] = { no: 2, name: "src", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "width", kind: "scalar", T: 13 };
    items[3] = { no: 4, name: "height", kind: "scalar", T: 13 };
    items[4] = { no: 5, name: "order", kind: "scalar", T: 13 };
    tmp1 = new tmp("discord_protos.discord_users.v1.FavoriteGIF", items, new.target);
    return tmp1;
  }
}
const prototype3 = FavoriteGIF$Type.prototype;
prototype3["create"] = function create(partialSettings) {
  const size = { format: 0, src: "", width: 0, height: 0, order: 0 };
  const _Object = Object;
  _Object.defineProperty(size, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, size, partialSettings);
    const tmpResult = _mod1198;
  }
  return size;
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype3["internalBinaryWrite"] = function internalBinaryWrite(format, tag, writeUnknownFields) {
  if (0 !== format.format) {
    tag.tag(1, _mod1198.WireType.Varint).int32(format.format);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  if ("" !== format.src) {
    tag.tag(2, _mod1198.WireType.LengthDelimited).string(format.src);
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
  }
  if (0 !== format.width) {
    tag.tag(3, _mod1198.WireType.Varint).uint32(format.width);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  if (0 !== format.height) {
    tag.tag(4, _mod1198.WireType.Varint).uint32(format.height);
    const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
  }
  if (0 !== format.order) {
    tag.tag(5, _mod1198.WireType.Varint).uint32(format.order);
    const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, format, tag);
  }
  return tag;
};
const items1 = [
  {
    no: 1,
    name: "format",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_users.v1.GIFType", GIFType];
      return items;
    },
  },
  { no: 2, name: "src", kind: "scalar", T: 9 },
  { no: 3, name: "width", kind: "scalar", T: 13 },
  { no: 4, name: "height", kind: "scalar", T: 13 },
  { no: 5, name: "order", kind: "scalar", T: 13 },
];
const object11 = new Object(
  "discord_protos.discord_users.v1.FavoriteGIF",
  items1,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType4 = fn(1198).MessageType;
class FavoriteStickers$Type extends MessageType4 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp1 = new tmp("discord_protos.discord_users.v1.FavoriteStickers", items, new.target);
    return tmp1;
  }
}
const prototype4 = FavoriteStickers$Type.prototype;
prototype4["create"] = function create(partialSettings) {
  const obj = { stickerIds: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype4["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        if (tmp6 === _mod1198.WireType.LengthDelimited) {
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
          let arr2 = stickerIds1.push(str4.toString());
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype4["internalBinaryWrite"] = function internalBinaryWrite(stickerIds, tag, writeUnknownFields) {
  let length;
  if (stickerIds.stickerIds.length) {
    tag.tag(1, _mod1198.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < stickerIds.stickerIds.length) {
      do {
        let fixed64Result = tag.fixed64(stickerIds.stickerIds[num2]);
        num2 = num2 + 1;
        length = stickerIds.stickerIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, stickerIds, tag);
  }
  return tag;
};
const items2 = [{ no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 }];
const object12 = new Object(
  "discord_protos.discord_users.v1.FavoriteStickers",
  items2,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType5 = fn(1198).MessageType;
class StickerFrecency$Type extends MessageType5 {
  constructor() {
    obj = {
      no: 1,
      name: "stickers",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.StickerFrecency", items, new.target);
    return tmp1;
  }
}
const prototype5 = StickerFrecency$Type.prototype;
prototype5["create"] = function create(partialSettings) {
  const obj = { stickers: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype5["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype5["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let str1 = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str1 = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str1;
      obj = internalBinaryReadResult;
      str = str1;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers",
    );
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype5["internalBinaryWrite"] = function internalBinaryWrite(stickers, tag, writeUnknownFields) {
  const keys = Object.keys(stickers.stickers);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(
      stickers.stickers[nextResult],
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
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
        return object18;
      },
    },
  },
];
const object13 = new Object(
  "discord_protos.discord_users.v1.StickerFrecency",
  items3,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType6 = fn(1198).MessageType;
class FavoriteEmojis$Type extends MessageType6 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 };
    tmp1 = new tmp("discord_protos.discord_users.v1.FavoriteEmojis", items, new.target);
    return tmp1;
  }
}
const prototype6 = FavoriteEmojis$Type.prototype;
prototype6["create"] = function create(partialSettings) {
  const obj = { emojis: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype6["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype6["internalBinaryWrite"] = function internalBinaryWrite(emojis, tag, writeUnknownFields) {
  let length;
  let num = 0;
  if (0 < emojis.emojis.length) {
    do {
      let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      let stringResult = tagResult.string(emojis.emojis[num]);
      num = num + 1;
      length = emojis.emojis.length;
    } while (num < length);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, emojis, tag);
  }
  return tag;
};
const items4 = [{ no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 }];
const object14 = new Object(
  "discord_protos.discord_users.v1.FavoriteEmojis",
  items4,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType7 = fn(1198).MessageType;
class PinnedEmojiPacks$Type extends MessageType7 {
  constructor() {
    items = [];
    items[0] = { no: 1, name: "pack_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp1 = new tmp("discord_protos.discord_users.v1.PinnedEmojiPacks", items, new.target);
    return tmp1;
  }
}
const prototype7 = PinnedEmojiPacks$Type.prototype;
prototype7["create"] = function create(partialSettings) {
  const obj = { packIds: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype7["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        if (tmp6 === _mod1198.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let packIds = obj.packIds;
              let str5 = pos.fixed64();
              let arr = packIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum1);
          }
        } else {
          let packIds1 = obj.packIds;
          let str4 = pos.fixed64();
          let arr2 = packIds1.push(str4.toString());
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype7["internalBinaryWrite"] = function internalBinaryWrite(packIds, tag, writeUnknownFields) {
  let length;
  if (packIds.packIds.length) {
    tag.tag(1, _mod1198.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < packIds.packIds.length) {
      do {
        let fixed64Result = tag.fixed64(packIds.packIds[num2]);
        num2 = num2 + 1;
        length = packIds.packIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, packIds, tag);
  }
  return tag;
};
const items5 = [{ no: 1, name: "pack_ids", kind: "scalar", repeat: 1, T: 6 }];
const object15 = new Object(
  "discord_protos.discord_users.v1.PinnedEmojiPacks",
  items5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType8 = fn(1198).MessageType;
class EmojiFrecency$Type extends MessageType8 {
  constructor() {
    obj = {
      no: 1,
      name: "emojis",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.EmojiFrecency", items, new.target);
    return tmp1;
  }
}
const prototype8 = EmojiFrecency$Type.prototype;
prototype8["create"] = function create(partialSettings) {
  const obj = { emojis: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype8["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype8["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis");
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype8["internalBinaryWrite"] = function internalBinaryWrite(emojis, tag, writeUnknownFields) {
  const keys = Object.keys(emojis.emojis);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(emojis.emojis[nextResult], tag, writeUnknownFields);
    let joined = tag.join();
    let joined1 = joined.join();
    continue;
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, emojis, tag);
  }
  return tag;
};
const items6 = [
  {
    no: 1,
    name: "emojis",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return object18;
      },
    },
  },
];
const object16 = new Object(
  "discord_protos.discord_users.v1.EmojiFrecency",
  items6,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType9 = fn(1198).MessageType;
class ApplicationCommandFrecency$Type extends MessageType9 {
  constructor() {
    obj = {
      no: 1,
      name: "application_commands",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.ApplicationCommandFrecency", items, new.target);
    return tmp1;
  }
}
const prototype9 = ApplicationCommandFrecency$Type.prototype;
prototype9["create"] = function create(partialSettings) {
  const obj = { applicationCommands: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype9["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype9["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype9["internalBinaryWrite"] = function internalBinaryWrite(applicationCommands, tag, writeUnknownFields) {
  const keys = Object.keys(applicationCommands.applicationCommands);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, applicationCommands, tag);
  }
  return tag;
};
const items7 = [
  {
    no: 1,
    name: "application_commands",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return object18;
      },
    },
  },
];
const object17 = new Object(
  "discord_protos.discord_users.v1.ApplicationCommandFrecency",
  items7,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType10 = fn(1198).MessageType;
class FrecencyItem$Type extends MessageType10 {
  constructor() {
    items = [, , ,];
    items[0] = { no: 1, name: "total_uses", kind: "scalar", T: 13 };
    items[1] = { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 };
    items[2] = { no: 3, name: "frecency", kind: "scalar", T: 5 };
    items[3] = { no: 4, name: "score", kind: "scalar", T: 5 };
    tmp1 = new tmp("discord_protos.discord_users.v1.FrecencyItem", items, new.target);
    return tmp1;
  }
}
const prototype10 = FrecencyItem$Type.prototype;
prototype10["create"] = function create(partialSettings) {
  const obj = { totalUses: 0, recentUses: [], frecency: 0, score: 0 };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype10["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        obj.totalUses = pos.uint32();
      } else if (2 === tmp5) {
        if (tmp6 === _mod1198.WireType.LengthDelimited) {
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
          let arr2 = recentUses1.push(str4.toString());
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype10["internalBinaryWrite"] = function internalBinaryWrite(totalUses, tag, writeUnknownFields) {
  let length;
  if (0 !== totalUses.totalUses) {
    tag.tag(1, _mod1198.WireType.Varint).uint32(totalUses.totalUses);
    const tagResult = tag.tag(1, _mod1198.WireType.Varint);
  }
  if (totalUses.recentUses.length) {
    tag.tag(2, _mod1198.WireType.LengthDelimited).fork();
    let num4 = 0;
    if (0 < totalUses.recentUses.length) {
      do {
        let uint64Result = tag.uint64(totalUses.recentUses[num4]);
        num4 = num4 + 1;
        length = totalUses.recentUses.length;
      } while (num4 < length);
    }
    const joined = tag.join();
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
  }
  if (0 !== totalUses.frecency) {
    tag.tag(3, _mod1198.WireType.Varint).int32(totalUses.frecency);
    const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
  }
  if (0 !== totalUses.score) {
    tag.tag(4, _mod1198.WireType.Varint).int32(totalUses.score);
    const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, totalUses, tag);
  }
  return tag;
};
const items8 = [
  { no: 1, name: "total_uses", kind: "scalar", T: 13 },
  { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 },
  { no: 3, name: "frecency", kind: "scalar", T: 5 },
  { no: 4, name: "score", kind: "scalar", T: 5 },
];
const object18 = new Object(
  "discord_protos.discord_users.v1.FrecencyItem",
  items8,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType11 = fn(1198).MessageType;
class FavoriteSoundboardSounds$Type extends MessageType11 {
  constructor() {
    items = [,];
    items[0] = { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 };
    items[1] = { no: 2, name: "ordered_sound_ids", kind: "scalar", repeat: 1, T: 6 };
    tmp1 = new tmp("discord_protos.discord_users.v1.FavoriteSoundboardSounds", items, new.target);
    return tmp1;
  }
}
const prototype11 = FavoriteSoundboardSounds$Type.prototype;
prototype11["create"] = function create(partialSettings) {
  const obj = { soundIds: [], orderedSoundIds: [] };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype11["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
        if (tmp6 === _mod1198.WireType.LengthDelimited) {
          let sum1 = pos.int32() + pos.pos;
          if (pos.pos < sum1) {
            do {
              let soundIds = obj.soundIds;
              let str7 = pos.fixed64();
              let arr = soundIds.push(str7.toString());
              pos2 = pos.pos;
            } while (pos2 < sum1);
          }
        } else {
          let soundIds1 = obj.soundIds;
          let str6 = pos.fixed64();
          let arr2 = soundIds1.push(str6.toString());
        }
      } else if (2 === tmp5) {
        if (tmp6 === _mod1198.WireType.LengthDelimited) {
          let sum2 = pos.int32() + pos.pos;
          if (pos.pos < sum2) {
            do {
              let orderedSoundIds = obj.orderedSoundIds;
              let str5 = pos.fixed64();
              let arr3 = orderedSoundIds.push(str5.toString());
              pos = pos.pos;
            } while (pos < sum2);
          }
        } else {
          let orderedSoundIds1 = obj.orderedSoundIds;
          let str4 = pos.fixed64();
          let arr4 = orderedSoundIds1.push(str4.toString());
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype11["internalBinaryWrite"] = function internalBinaryWrite(soundIds, tag, writeUnknownFields) {
  let length;
  let length2;
  if (soundIds.soundIds.length) {
    tag.tag(1, _mod1198.WireType.LengthDelimited).fork();
    let num2 = 0;
    if (0 < soundIds.soundIds.length) {
      do {
        let fixed64Result = tag.fixed64(soundIds.soundIds[num2]);
        num2 = num2 + 1;
        length = soundIds.soundIds.length;
      } while (num2 < length);
    }
    const joined = tag.join();
    const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
  }
  if (soundIds.orderedSoundIds.length) {
    tag.tag(2, _mod1198.WireType.LengthDelimited).fork();
    let num4 = 0;
    if (0 < soundIds.orderedSoundIds.length) {
      do {
        let fixed64Result1 = tag.fixed64(soundIds.orderedSoundIds[num4]);
        num4 = num4 + 1;
        length2 = soundIds.orderedSoundIds.length;
      } while (num4 < length2);
    }
    const joined1 = tag.join();
    const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, soundIds, tag);
  }
  return tag;
};
const items9 = [
  { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 },
  { no: 2, name: "ordered_sound_ids", kind: "scalar", repeat: 1, T: 6 },
];
const object19 = new Object(
  "discord_protos.discord_users.v1.FavoriteSoundboardSounds",
  items9,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType12 = fn(1198).MessageType;
class HeardSoundFrecency$Type extends MessageType12 {
  constructor() {
    obj = {
      no: 1,
      name: "heard_sounds",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.HeardSoundFrecency", items, new.target);
    return tmp1;
  }
}
const prototype12 = HeardSoundFrecency$Type.prototype;
prototype12["create"] = function create(partialSettings) {
  const obj = { heardSounds: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype12["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype12["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype12["internalBinaryWrite"] = function internalBinaryWrite(heardSounds, tag, writeUnknownFields) {
  const keys = Object.keys(heardSounds.heardSounds);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, heardSounds, tag);
  }
  return tag;
};
const items10 = [
  {
    no: 1,
    name: "heard_sounds",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return object18;
      },
    },
  },
];
const object20 = new Object(
  "discord_protos.discord_users.v1.HeardSoundFrecency",
  items10,
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
  fn,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object11,
  object12,
  object13,
  object14,
  object15,
);
const MessageType13 = fn(1198).MessageType;
class PlayedSoundFrecency$Type extends MessageType13 {
  constructor() {
    obj = {
      no: 1,
      name: "played_sounds",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.PlayedSoundFrecency", items, new.target);
    return tmp1;
  }
}
const prototype13 = PlayedSoundFrecency$Type.prototype;
prototype13["create"] = function create(partialSettings) {
  const obj = { playedSounds: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype13["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype13["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype13["internalBinaryWrite"] = function internalBinaryWrite(playedSounds, tag, writeUnknownFields) {
  const keys = Object.keys(playedSounds.playedSounds);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, playedSounds, tag);
  }
  return tag;
};
const items11 = [
  {
    no: 1,
    name: "played_sounds",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return object18;
      },
    },
  },
];
const heardSoundFrecencyType = new HeardSoundFrecency$Type(
  "discord_protos.discord_users.v1.PlayedSoundFrecency",
  items11,
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
  fn,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object11,
  object12,
  object13,
  object14,
  object15,
  object16,
  object17,
  object18,
);
const MessageType14 = fn(1198).MessageType;
class ApplicationFrecency$Type extends MessageType14 {
  constructor() {
    obj = {
      no: 1,
      name: "applications",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.ApplicationFrecency", items, new.target);
    return tmp1;
  }
}
const prototype14 = ApplicationFrecency$Type.prototype;
prototype14["create"] = function create(partialSettings) {
  const obj = { applications: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype14["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype14["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let stringResult = tmp3;
      if (1 === tmp7) {
        stringResult = pos.string();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = stringResult;
      obj = internalBinaryReadResult;
      str = stringResult;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
    );
    throw error;
  }
  if (str == null) {
    str = "";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype14["internalBinaryWrite"] = function internalBinaryWrite(applications, tag, writeUnknownFields) {
  const keys = Object.keys(applications.applications);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.LengthDelimited);
    let stringResult = tagResult1.string(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, applications, tag);
  }
  return tag;
};
const items12 = [
  {
    no: 1,
    name: "applications",
    kind: "map",
    K: 9,
    V: {
      kind: "message",
      T() {
        return object18;
      },
    },
  },
];
const playedSoundFrecencyType = new PlayedSoundFrecency$Type(
  "discord_protos.discord_users.v1.ApplicationFrecency",
  items12,
  tmp4,
  ApplicationFrecency$Type,
  "create",
  "internalBinaryRead",
  PlayedSoundFrecency$Type,
  "binaryReadMap1",
  "internalBinaryWrite",
  items12,
  undefined,
  tmp,
  fn,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object11,
  object12,
  object13,
  object14,
  object15,
  object16,
  object17,
  object18,
  object19,
  object20,
  heardSoundFrecencyType,
);
const MessageType15 = fn(1198).MessageType;
class GuildAndChannelFrecency$Type extends MessageType15 {
  constructor() {
    obj = {
      no: 1,
      name: "guild_and_channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T() {
          return object18;
        },
      },
    };
    items = [];
    items[0] = obj;
    tmp1 = new tmp("discord_protos.discord_users.v1.GuildAndChannelFrecency", items, new.target);
    return tmp1;
  }
}
const prototype15 = GuildAndChannelFrecency$Type.prototype;
prototype15["create"] = function create(partialSettings) {
  const obj = { guildAndChannels: {} };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== partialSettings) {
    const result = _mod1198.reflectionMergePartial(this, obj, partialSettings);
    const tmpResult = _mod1198;
  }
  return obj;
};
prototype15["internalBinaryRead"] = function internalBinaryRead(pos, arg1, readUnknownField, arg3) {
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
          let tmp18 = new.target;
          let tmp19 = new.target;
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
};
prototype15["binaryReadMap1"] = function binaryReadMap1(arg0, pos, arg2) {
  const sum = pos.pos + pos.uint32();
  let obj;
  let str;
  if (pos.pos < sum) {
    while (true) {
      let tmp6 = _slicedToArray(pos.tag(), 2);
      [tmp7, r10020] = tmp6;
      let str1 = tmp3;
      if (1 === tmp7) {
        let str3 = pos.fixed64();
        str1 = str3.toString();
        let internalBinaryReadResult = tmp2;
      } else if (2 !== tmp7) {
        break;
      } else {
        internalBinaryReadResult = object18.internalBinaryRead(pos, pos.uint32(), arg2);
      }
      tmp2 = internalBinaryReadResult;
      tmp3 = str1;
      obj = internalBinaryReadResult;
      str = str1;
    }
    const _globalThis = globalThis;
    const error = new Error(
      "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
    );
    throw error;
  }
  if (str == null) {
    str = "0";
  }
  if (obj == null) {
    obj = object18.create();
  }
  arg0[str] = obj;
};
prototype15["internalBinaryWrite"] = function internalBinaryWrite(guildAndChannels, tag, writeUnknownFields) {
  const keys = Object.keys(guildAndChannels.guildAndChannels);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
    let forkResult = tagResult.fork();
    let tagResult1 = forkResult.tag(1, _mod1198.WireType.Bit64);
    let fixed64Result = tagResult1.fixed64(nextResult);
    let tagResult2 = tag.tag(2, _mod1198.WireType.LengthDelimited);
    let forkResult1 = tagResult2.fork();
    let internalBinaryWriteResult = object18.internalBinaryWrite(
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
      onWrite = _mod1198.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, guildAndChannels, tag);
  }
  return tag;
};
const items13 = [
  {
    no: 1,
    name: "guild_and_channels",
    kind: "map",
    K: 6,
    V: {
      kind: "message",
      T() {
        return object18;
      },
    },
  },
];
const tmp20 = new "binaryReadMap1"(
  "discord_protos.discord_users.v1.GuildAndChannelFrecency",
  items13,
  tmp4,
  ApplicationFrecency$Type,
  "create",
  "internalBinaryRead",
  GuildAndChannelFrecency$Type,
  "binaryReadMap1",
  items13,
  new.target,
  undefined,
  tmp,
  fn,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object11,
  object12,
  object13,
  object14,
  object15,
  object16,
  object17,
  object18,
);
let closure_17 = tmp20;
let size = fn(2);
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx",
);

export { GIFType };
export const FrecencyUserSettings = frecencyUserSettingsType;
export const FavoriteGIFs = object;
export const FavoriteGIF = object11;
export const FavoriteStickers = object12;
export const StickerFrecency = object13;
export const FavoriteEmojis = object14;
export const PinnedEmojiPacks = object15;
export const EmojiFrecency = object16;
export const ApplicationCommandFrecency = object17;
export const FrecencyItem = object18;
export const FavoriteSoundboardSounds = object19;
export const HeardSoundFrecency = object20;
export const PlayedSoundFrecency = heardSoundFrecencyType;
export const ApplicationFrecency = playedSoundFrecencyType;
export const GuildAndChannelFrecency = tmp20;
