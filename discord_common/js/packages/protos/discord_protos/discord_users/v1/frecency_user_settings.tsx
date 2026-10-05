// discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import user_settings_shared from "user_settings_shared.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size_mod from "../../../../../../../_runtime/metro/00002__.js";

let internalBinaryWrite,
  internalBinaryWrite2,
  internalBinaryWrite3,
  internalBinaryWrite4,
  internalBinaryWrite5,
  internalBinaryWrite6,
  internalBinaryWrite7,
  internalBinaryWrite8;

let tmp2;
let tmp3;
let tmp4;
function T() {
  return object10;
}
const T2 = function T() {
  const items = ["discord_protos.discord_users.v1.GIFType", GIFType];
  return items;
};
const T3 = function T() {
  return object16;
};
const T4 = function T() {
  return object16;
};
const T5 = function T() {
  return object16;
};
const T6 = function T() {
  return object16;
};
const T7 = function T() {
  return object16;
};
const T8 = function T() {
  return object16;
};
const T9 = function T() {
  return object16;
};
const GIFType = { NONE: 0, [0]: "NONE", IMAGE: 1, [1]: "IMAGE", VIDEO: 2, [2]: "VIDEO" };
const MessageType = _mod1198.MessageType;
class FrecencyUserSettings$Type extends MessageType {
  constructor() {
    const items = [, , , , , , , , , , , ,];
    const obj = {
      no: 1,
      name: "versions",
      kind: "message",
      T() {
        return user_settings_shared.Versions;
      },
    };
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
        return object11;
      },
    };
    items[3] = {
      no: 4,
      name: "sticker_frecency",
      kind: "message",
      T() {
        return object12;
      },
    };
    items[4] = {
      no: 5,
      name: "favorite_emojis",
      kind: "message",
      T() {
        return object13;
      },
    };
    items[5] = {
      no: 6,
      name: "emoji_frecency",
      kind: "message",
      T() {
        return object14;
      },
    };
    items[6] = {
      no: 7,
      name: "application_command_frecency",
      kind: "message",
      T() {
        return object15;
      },
    };
    items[7] = {
      no: 8,
      name: "favorite_soundboard_sounds",
      kind: "message",
      T() {
        return object17;
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
        return object18;
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
    const obj2 = { no: 12, name: "guild_and_channel_frecency", kind: "message", T };
    class T {
      constructor() {
        return internalBinaryWrite;
      }
    }
    items[11] = obj2;
    items[12] = {
      no: 13,
      name: "emoji_reaction_frecency",
      kind: "message",
      T() {
        return object14;
      },
    };
    const tmp2 = new tmp("discord_protos.discord_users.v1.FrecencyUserSettings", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = {};
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(versions, tag, writeUnknownFields) {
    if (versions.versions) {
      const Versions = user_settings_shared.Versions;
      internalBinaryWrite = Versions.internalBinaryWrite;
      versions = versions.versions;
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(versions, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (versions.favoriteGifs) {
      internalBinaryWrite2 = object.internalBinaryWrite;
      const favoriteGifs = versions.favoriteGifs;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(favoriteGifs, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (versions.favoriteStickers) {
      internalBinaryWrite3 = object11.internalBinaryWrite;
      const favoriteStickers = versions.favoriteStickers;
      const tagResult2 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(favoriteStickers, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (versions.stickerFrecency) {
      internalBinaryWrite4 = object12.internalBinaryWrite;
      const stickerFrecency = versions.stickerFrecency;
      const tagResult3 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(stickerFrecency, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    if (versions.favoriteEmojis) {
      internalBinaryWrite5 = object13.internalBinaryWrite;
      const favoriteEmojis = versions.favoriteEmojis;
      const tagResult4 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(favoriteEmojis, tagResult4.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if (versions.emojiFrecency) {
      internalBinaryWrite6 = object14.internalBinaryWrite;
      const emojiFrecency = versions.emojiFrecency;
      const tagResult5 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(emojiFrecency, tagResult5.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if (versions.applicationCommandFrecency) {
      internalBinaryWrite7 = object15.internalBinaryWrite;
      const applicationCommandFrecency = versions.applicationCommandFrecency;
      const tagResult6 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(
        applicationCommandFrecency,
        tagResult6.fork(),
        writeUnknownFields,
      );
      const joined6 = internalBinaryWrite7Result.join();
    }
    if (versions.favoriteSoundboardSounds) {
      internalBinaryWrite8 = object17.internalBinaryWrite;
      const favoriteSoundboardSounds = versions.favoriteSoundboardSounds;
      const tagResult7 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(
        favoriteSoundboardSounds,
        tagResult7.fork(),
        writeUnknownFields,
      );
      const joined7 = internalBinaryWrite8Result.join();
    }
    if (versions.applicationFrecency) {
      const internalBinaryWrite9 = playedSoundFrecencyType.internalBinaryWrite;
      const applicationFrecency = versions.applicationFrecency;
      const tagResult8 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(
        applicationFrecency,
        tagResult8.fork(),
        writeUnknownFields,
      );
      const joined8 = internalBinaryWrite9Result.join();
    }
    if (versions.heardSoundFrecency) {
      const internalBinaryWrite10 = object18.internalBinaryWrite;
      const heardSoundFrecency = versions.heardSoundFrecency;
      const tagResult9 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const result = internalBinaryWrite10(heardSoundFrecency, tagResult9.fork(), writeUnknownFields);
      const joined9 = result.join();
    }
    if (versions.playedSoundFrecency) {
      const internalBinaryWrite11 = heardSoundFrecencyType.internalBinaryWrite;
      const playedSoundFrecency = versions.playedSoundFrecency;
      const tagResult10 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const result1 = internalBinaryWrite11(playedSoundFrecency, tagResult10.fork(), writeUnknownFields);
      const joined10 = result1.join();
    }
    if (versions.guildAndChannelFrecency) {
      const internalBinaryWrite12 = internalBinaryWrite.internalBinaryWrite;
      const guildAndChannelFrecency = versions.guildAndChannelFrecency;
      const tagResult11 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const result2 = internalBinaryWrite12(guildAndChannelFrecency, tagResult11.fork(), writeUnknownFields);
      const joined11 = result2.join();
    }
    if (versions.emojiReactionFrecency) {
      const internalBinaryWrite13 = object14.internalBinaryWrite;
      const emojiReactionFrecency = versions.emojiReactionFrecency;
      const tagResult12 = tag.tag(13, _mod1198.WireType.LengthDelimited);
      const result3 = internalBinaryWrite13(emojiReactionFrecency, tagResult12.fork(), writeUnknownFields);
      const joined12 = result3.join();
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
  }
}
const prototype = FrecencyUserSettings$Type.prototype;
const frecencyUserSettingsType = new FrecencyUserSettings$Type();
const MessageType2 = _mod1198.MessageType;
class FavoriteGIFs$Type extends MessageType2 {
  constructor() {
    const items = [,];
    const obj = { no: 1, name: "gifs", kind: "map", K: 9, V: { kind: "message", T } };
    items[0] = obj;
    items[1] = { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.discord_users.v1.FavoriteGIFs", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { gifs: {}, hideTooltip: false };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let stringResult = tmp3;
        if (1 === tmp7) {
          stringResult = pos.string();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object10.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = stringResult;
        obj = internalBinaryReadResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs");
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (obj == null) {
      obj = object10.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(gifs, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object10.internalBinaryWrite(gifs.gifs[nextResult], tag, writeUnknownFields);
      let joined = tag.join();
      let joined1 = joined.join();
      continue;
    }
    if (false !== gifs.hideTooltip) {
      const tagResult3 = tag.tag(2, _mod1198.WireType.Varint);
      tagResult3.bool(gifs.hideTooltip);
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
  }
}
const prototype2 = FavoriteGIFs$Type.prototype;
let obj2 = { no: 1, name: "gifs", kind: "map", K: 9, V: { kind: "message", T } };
let items = [obj2, { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 }];
const object = new Object(
  "discord_protos.discord_users.v1.FavoriteGIFs",
  items,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType3 = _mod1198.MessageType;
class FavoriteGIF$Type extends MessageType3 {
  constructor() {
    let items = [, , , ,];
    const obj = { no: 1, name: "format", kind: "enum", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "src", kind: "scalar", T: 9 };
    items[2] = { no: 3, name: "width", kind: "scalar", T: 13 };
    items[3] = { no: 4, name: "height", kind: "scalar", T: 13 };
    items[4] = { no: 5, name: "order", kind: "scalar", T: 13 };
    const tmp2 = new tmp("discord_protos.discord_users.v1.FavoriteGIF", items, new.target);
    return tmp2;
  }
  create(arr) {
    size = { format: 0, src: "", width: 0, height: 0, order: 0 };
    const _Object = Object;
    const obj = { enumerable: false, value: this };
    _Object.defineProperty(size, _mod1198.MESSAGE_TYPE, obj);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, size, arr);
    }
    return size;
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
  internalBinaryWrite(format, tag, writeUnknownFields) {
    if (0 !== format.format) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.int32(format.format);
    }
    if ("" !== format.src) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.string(format.src);
    }
    if (0 !== format.width) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.uint32(format.width);
    }
    if (0 !== format.height) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
      tagResult3.uint32(format.height);
    }
    if (0 !== format.order) {
      const tagResult4 = tag.tag(5, _mod1198.WireType.Varint);
      tagResult4.uint32(format.order);
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
  }
}
const prototype3 = FavoriteGIF$Type.prototype;
const items1 = [, , , ,];
const obj3 = { no: 1, name: "format", kind: "enum", T: T2 };
items1[0] = obj3;
items1[1] = { no: 2, name: "src", kind: "scalar", T: 9 };
items1[2] = { no: 3, name: "width", kind: "scalar", T: 13 };
items1[3] = { no: 4, name: "height", kind: "scalar", T: 13 };
items1[4] = { no: 5, name: "order", kind: "scalar", T: 13 };
const object10 = new Object(
  "discord_protos.discord_users.v1.FavoriteGIF",
  items1,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType4 = _mod1198.MessageType;
class FavoriteStickers$Type extends MessageType4 {
  constructor() {
    const items = [{ no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 }];
    const tmp2 = new tmp("discord_protos.discord_users.v1.FavoriteStickers", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { stickerIds: [] };
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
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let stickerIds = obj.stickerIds;
                let push2 = stickerIds.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let stickerIds1 = obj.stickerIds;
            let push = stickerIds1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(stickerIds, tag, writeUnknownFields) {
    let length;
    if (stickerIds.stickerIds.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < stickerIds.stickerIds.length) {
        do {
          let fixed64Result = tag.fixed64(stickerIds.stickerIds[num2]);
          num2 = num2 + 1;
          length = stickerIds.stickerIds.length;
        } while (num2 < length);
      }
      const joined = tag.join();
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
  }
}
const prototype4 = FavoriteStickers$Type.prototype;
const items2 = [{ no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 }];
const object11 = new Object(
  "discord_protos.discord_users.v1.FavoriteStickers",
  items2,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType5 = _mod1198.MessageType;
class StickerFrecency$Type extends MessageType5 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: T3 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.StickerFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { stickers: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let str1 = tmp3;
        if (1 === tmp7) {
          let str3 = pos.fixed64();
          str1 = str3.toString();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = str1;
        obj = internalBinaryReadResult;
        str = str1;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers",
      );
      throw error;
    }
    if (str == null) {
      str = "0";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(stickers, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(
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
  }
}
const prototype5 = StickerFrecency$Type.prototype;
const items3 = [];
const obj4 = { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: T3 } };
items3[0] = obj4;
const object12 = new Object(
  "discord_protos.discord_users.v1.StickerFrecency",
  items3,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType6 = _mod1198.MessageType;
class FavoriteEmojis$Type extends MessageType6 {
  constructor() {
    const items = [{ no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 }];
    const tmp2 = new tmp("discord_protos.discord_users.v1.FavoriteEmojis", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { emojis: [] };
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
  internalBinaryWrite(emojis, tag, writeUnknownFields) {
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
  }
}
const prototype6 = FavoriteEmojis$Type.prototype;
const items4 = [{ no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 }];
const object13 = new Object(
  "discord_protos.discord_users.v1.FavoriteEmojis",
  items4,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType7 = _mod1198.MessageType;
class EmojiFrecency$Type extends MessageType7 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: T4 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.EmojiFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { emojis: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let stringResult = tmp3;
        if (1 === tmp7) {
          stringResult = pos.string();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = stringResult;
        obj = internalBinaryReadResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis");
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(emojis, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(emojis.emojis[nextResult], tag, writeUnknownFields);
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
  }
}
const prototype7 = EmojiFrecency$Type.prototype;
const items5 = [];
const obj5 = { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: T4 } };
items5[0] = obj5;
const object14 = new Object(
  "discord_protos.discord_users.v1.EmojiFrecency",
  items5,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType8 = _mod1198.MessageType;
class ApplicationCommandFrecency$Type extends MessageType8 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: T5 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.ApplicationCommandFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { applicationCommands: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let stringResult = tmp3;
        if (1 === tmp7) {
          stringResult = pos.string();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = stringResult;
        obj = internalBinaryReadResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
      );
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(applicationCommands, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(
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
  }
}
const prototype8 = ApplicationCommandFrecency$Type.prototype;
const items6 = [];
const obj6 = { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: T5 } };
items6[0] = obj6;
const object15 = new Object(
  "discord_protos.discord_users.v1.ApplicationCommandFrecency",
  items6,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType9 = _mod1198.MessageType;
class FrecencyItem$Type extends MessageType9 {
  constructor() {
    const items = [
      { no: 1, name: "total_uses", kind: "scalar", T: 13 },
      { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 },
      { no: 3, name: "frecency", kind: "scalar", T: 5 },
      { no: 4, name: "score", kind: "scalar", T: 5 },
    ];
    const tmp2 = new tmp("discord_protos.discord_users.v1.FrecencyItem", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { totalUses: 0, recentUses: [], frecency: 0, score: 0 };
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
          obj.totalUses = pos.uint32();
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let recentUses = obj.recentUses;
                let push2 = recentUses.push;
                let str5 = pos.uint64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let recentUses1 = obj.recentUses;
            let push = recentUses1.push;
            let str4 = pos.uint64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(totalUses, tag, writeUnknownFields) {
    let length;
    if (0 !== totalUses.totalUses) {
      const tagResult = tag.tag(1, _mod1198.WireType.Varint);
      tagResult.uint32(totalUses.totalUses);
    }
    if (totalUses.recentUses.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num4 = 0;
      if (0 < totalUses.recentUses.length) {
        do {
          let uint64Result = tag.uint64(totalUses.recentUses[num4]);
          num4 = num4 + 1;
          length = totalUses.recentUses.length;
        } while (num4 < length);
      }
      const joined = tag.join();
    }
    if (0 !== totalUses.frecency) {
      const tagResult2 = tag.tag(3, _mod1198.WireType.Varint);
      tagResult2.int32(totalUses.frecency);
    }
    if (0 !== totalUses.score) {
      const tagResult3 = tag.tag(4, _mod1198.WireType.Varint);
      tagResult3.int32(totalUses.score);
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
  }
}
const prototype9 = FrecencyItem$Type.prototype;
const items7 = [
  { no: 1, name: "total_uses", kind: "scalar", T: 13 },
  { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 },
  { no: 3, name: "frecency", kind: "scalar", T: 5 },
  { no: 4, name: "score", kind: "scalar", T: 5 },
];
const object16 = new Object(
  "discord_protos.discord_users.v1.FrecencyItem",
  items7,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType10 = _mod1198.MessageType;
class FavoriteSoundboardSounds$Type extends MessageType10 {
  constructor() {
    const items = [
      { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 },
      { no: 2, name: "ordered_sound_ids", kind: "scalar", repeat: 1, T: 6 },
    ];
    const tmp2 = new tmp("discord_protos.discord_users.v1.FavoriteSoundboardSounds", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { soundIds: [], orderedSoundIds: [] };
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
    let pos2;
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
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            if (pos.pos < sum1) {
              do {
                let soundIds = obj.soundIds;
                let push4 = soundIds.push;
                let str7 = pos.fixed64();
                let push4Result = push4(str7.toString());
                pos2 = pos.pos;
              } while (pos2 < sum1);
            }
          } else {
            let soundIds1 = obj.soundIds;
            let push3 = soundIds1.push;
            let str6 = pos.fixed64();
            let push3Result = push3(str6.toString());
          }
        } else if (2 === tmp5) {
          if (tmp6 === _mod1198.WireType.LengthDelimited) {
            let sum2 = pos.int32() + pos.pos;
            if (pos.pos < sum2) {
              do {
                let orderedSoundIds = obj.orderedSoundIds;
                let push2 = orderedSoundIds.push;
                let str5 = pos.fixed64();
                let push2Result = push2(str5.toString());
                pos = pos.pos;
              } while (pos < sum2);
            }
          } else {
            let orderedSoundIds1 = obj.orderedSoundIds;
            let push = orderedSoundIds1.push;
            let str4 = pos.fixed64();
            let arr = push(str4.toString());
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
  internalBinaryWrite(soundIds, tag, writeUnknownFields) {
    let length;
    let length2;
    if (soundIds.soundIds.length) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.fork();
      let num2 = 0;
      if (0 < soundIds.soundIds.length) {
        do {
          let fixed64Result = tag.fixed64(soundIds.soundIds[num2]);
          num2 = num2 + 1;
          length = soundIds.soundIds.length;
        } while (num2 < length);
      }
      const joined = tag.join();
    }
    if (soundIds.orderedSoundIds.length) {
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      tagResult1.fork();
      let num4 = 0;
      if (0 < soundIds.orderedSoundIds.length) {
        do {
          let fixed64Result1 = tag.fixed64(soundIds.orderedSoundIds[num4]);
          num4 = num4 + 1;
          length2 = soundIds.orderedSoundIds.length;
        } while (num4 < length2);
      }
      const joined1 = tag.join();
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
  }
}
const prototype10 = FavoriteSoundboardSounds$Type.prototype;
const items8 = [
  { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 },
  { no: 2, name: "ordered_sound_ids", kind: "scalar", repeat: 1, T: 6 },
];
const object17 = new Object(
  "discord_protos.discord_users.v1.FavoriteSoundboardSounds",
  items8,
  tmp4,
  tmp3,
  "create",
  "internalBinaryRead",
);
const MessageType11 = _mod1198.MessageType;
class HeardSoundFrecency$Type extends MessageType11 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: T6 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.HeardSoundFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { heardSounds: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let stringResult = tmp3;
        if (1 === tmp7) {
          stringResult = pos.string();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = stringResult;
        obj = internalBinaryReadResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
      );
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(heardSounds, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(
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
  }
}
const prototype11 = HeardSoundFrecency$Type.prototype;
const items9 = [];
const obj7 = { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: T6 } };
items9[0] = obj7;
const object18 = new Object(
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
  require,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object10,
  object11,
  object12,
  object13,
);
const MessageType12 = _mod1198.MessageType;
class PlayedSoundFrecency$Type extends MessageType12 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: T7 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.PlayedSoundFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { playedSounds: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let stringResult = tmp3;
        if (1 === tmp7) {
          stringResult = pos.string();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = stringResult;
        obj = internalBinaryReadResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
      );
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(playedSounds, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(
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
  }
}
const prototype12 = PlayedSoundFrecency$Type.prototype;
const items10 = [];
const obj8 = { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: T7 } };
items10[0] = obj8;
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
  require,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object10,
  object11,
  object12,
  object13,
  object14,
  object15,
  object16,
);
const MessageType13 = _mod1198.MessageType;
class ApplicationFrecency$Type extends MessageType13 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: T8 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.ApplicationFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { applications: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let stringResult = tmp3;
        if (1 === tmp7) {
          stringResult = pos.string();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = stringResult;
        obj = internalBinaryReadResult;
        str = stringResult;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
      );
      throw error;
    }
    if (str == null) {
      str = "";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(applications, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(
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
  }
}
const prototype13 = ApplicationFrecency$Type.prototype;
const items11 = [];
const obj9 = { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: T8 } };
items11[0] = obj9;
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
  require,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object10,
  object11,
  object12,
  object13,
  object14,
  object15,
  object16,
  object17,
  object18,
  heardSoundFrecencyType,
);
const MessageType14 = _mod1198.MessageType;
class GuildAndChannelFrecency$Type extends MessageType14 {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: T9 } };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.discord_users.v1.GuildAndChannelFrecency", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { guildAndChannels: {} };
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
  binaryReadMap1(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let str1 = tmp3;
        if (1 === tmp7) {
          let str3 = pos.fixed64();
          str1 = str3.toString();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = object16.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = str1;
        obj = internalBinaryReadResult;
        str = str1;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error(
        "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
      );
      throw error;
    }
    if (str == null) {
      str = "0";
    }
    if (obj == null) {
      obj = object16.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(guildAndChannels, tag, writeUnknownFields) {
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
      let internalBinaryWriteResult = object16.internalBinaryWrite(
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
  }
}
const prototype14 = GuildAndChannelFrecency$Type.prototype;
const items12 = [];
const obj10 = { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: T9 } };
items12[0] = obj10;
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
  this,
  undefined,
  tmp,
  require,
  dependencyMap,
  GIFType,
  frecencyUserSettingsType,
  object,
  object10,
  object11,
  object12,
  object13,
  object14,
  object15,
  object16,
);
const authStore3 = tmp19;
let size = size_mod;
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx",
);

export { GIFType };
export const FrecencyUserSettings = frecencyUserSettingsType;
export const FavoriteGIFs = object;
export const FavoriteGIF = object10;
export const FavoriteStickers = object11;
export const StickerFrecency = object12;
export const FavoriteEmojis = object13;
export const EmojiFrecency = object14;
export const ApplicationCommandFrecency = object15;
export const FrecencyItem = object16;
export const FavoriteSoundboardSounds = object17;
export const HeardSoundFrecency = object18;
export const PlayedSoundFrecency = heardSoundFrecencyType;
export const ApplicationFrecency = playedSoundFrecencyType;
export const GuildAndChannelFrecency = tmp19;
