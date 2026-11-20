// === Module 19672: SoundboardCreationUtils ===

// Module 19672 (SoundboardCreationUtils)
import util from "util" /* 1112 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5742 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

require = fn;
function showInvalidFileAlert() {
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = util.intl;
    stringResult = intl.string(util.t["Koklr/"]);
  }
  const obj2 = { title: null, body: null };
  const intl2 = util.intl;
  obj2.title = intl2.string(util.t.azO1Pe);
  obj2.body = stringResult;
  actions_AlertActionCreatorsDefault.show(obj2);
}
function pickSoundboardSoundFile() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _pickSoundboardSoundFile() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp4;
          closure_2 = tmp8;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          let localUri;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          const obj5 = { pickMultiple: false, extensions, types: null };
          const obj18 = require("FilePickerUtils");
          items = undefined;
          if (!obj20.isIOS()) {
            items = ["audio/*", "application/ogg"];
          }
          obj5.types = items;
          c6 = 1;
          c7 = 1;
          const obj6 = { value: obj18.handleDocumentSelection(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_0 = value;
          let first;
          if (closure_130_0 != null) {
            first = closure_130_0[0];
          }
          closure_130_1 = first;
          if (null == closure_130_1) {
            c7 = 3;
            return { value: null, done: true };
          } else {
            const name2 = closure_130_1.name;
            let uri = name2;
            if (name2 == null) {
              uri = closure_130_1.uri;
            }
            closure_130_3 = uri;
            closure_130_4 = closure_130_3.lastIndexOf(".");
            let str = "";
            if (closure_130_4 >= 0) {
              str = closure_130_3.slice(closure_130_4 + 1).toLowerCase();
              const str2 = closure_130_3.slice(closure_130_4 + 1);
            }
            closure_130_5 = str;
            if (closure_131_6.includes(closure_130_5)) {
              c5 = 1;
              const obj9 = { uri: closure_130_1.uri, fileName: null };
              const name = closure_130_1.name;
              let fileName = name;
              if (name == null) {
                const _HermesInternal = HermesInternal;
                fileName = "sound." + closure_130_5;
              }
              const obj11 = { files: null, destination: "cachesDirectory" };
              obj9.fileName = fileName;
              const items1 = [obj9];
              obj11.files = items1;
              c6 = 4;
              c7 = 1;
              const obj12 = { value: closure_131_0(closure_131_2[6]).keepLocalCopy(obj11), done: false };
              return obj12;
            } else {
              closure_131_7();
              c7 = 3;
              return { value: null, done: true };
            }
          }
        }
      } else if (2 === tmp8) {
        c5 = 0;
        const intl4 = closure_131_0(closure_131_2[2]).intl;
        closure_131_7(intl4.string(closure_131_0(closure_131_2[2]).t["6w+Dyr"]));
        c7 = 3;
        return { value: null, done: true };
      } else if (3 === tmp8) {
        c5 = 0;
        let code;
        if (tmp88 != null) {
          code = tmp88.code;
        }
        if ("SOUNDBOARD_AUDIO_TOO_LONG" === code) {
          const obj13 = { title: null, body: null };
          const intl2 = closure_131_0(closure_131_2[2]).intl;
          obj13.title = intl2.string(closure_131_0(closure_131_2[2]).t["/tGlcj"]);
          const intl3 = closure_131_0(closure_131_2[2]).intl;
          const obj14 = { limit: closure_131_0(closure_131_2[7]).MAX_SOUNDBOARD_SOURCE_DURATION_MS / 1000 };
          obj13.body = intl3.formatToPlainString(closure_131_0(closure_131_2[2]).t["e12/z4"], obj14);
          closure_131_1(closure_131_2[3]).show(obj13);
          const obj7 = closure_131_1(closure_131_2[3]);
        } else {
          const intl = closure_131_0(closure_131_2[2]).intl;
          closure_131_7(intl.string(closure_131_0(closure_131_2[2]).t["6w+Dyr"]));
        }
        c7 = 3;
      } else if (4 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_130_6 = value;
          closure_130_7 = closure_131_3(closure_130_6, 1)[0];
          if ("success" !== closure_130_7.status) {
            const _Error = Error;
            const error = new Error(closure_130_7.copyError);
            throw error;
          } else {
            localUri = closure_130_7.localUri;
            c5 = 2;
            c6 = 5;
            c7 = 1;
            const obj16 = { value: closure_131_0(closure_131_2[7]).loadSoundboardAudioPreview(localUri, closure_131_0(closure_131_2[7]).WAVEFORM_BAR_COUNT), done: false };
            return obj16;
          }
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        closure_130_8 = value;
        const obj = { uri: localUri, isOgg: closure_131_5.has(closure_130_5), preview: closure_130_8 };
        c5 = 0;
        c7 = 3;
        const obj19 = { value: obj, done: true };
        return obj19;
      }
    } catch (tmp88) {
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp88;
      } else if (tmp2 === tmp90) {
        c6 = tmp;
      } else {
        c6 = tmp3;
      }
    }
  }
};
function readLocalAudioAsDataUrl() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _readLocalAudioAsDataUrl() {
  closure_130_0 = type;
  let combined = _require;
  if (!_require.startsWith("file://")) {
    const _HermesInternal = HermesInternal;
    combined = "file://" + _require;
  }
  const _fetch = fetch;
  await fetch(combined);
  await value.blob();
  closure_130_1 = value;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const fileReader = new FileReader();
    fileReader.onerror = () => {
      let error = fileReader.error;
      if (error == null) {
        const _Error = Error;
        error = new Error("Failed to read audio file");
      }
      return closure_1(error);
    };
    fileReader.onload = () => {
      const result = fileReader.result;
      if (typeof result === "string") {
        closure_0(result);
      } else {
        const _Error = Error;
        const error = new Error("Expected a string data URL, got " + typeof result);
        closure_1(error);
      }
    };
    if (type.type === closure_1_0) {
      let blob = type;
    } else {
      const _Blob = Blob;
      items = [type];
      const obj = { type: tmp };
      blob = new Blob(items, obj);
    }
    const asDataURL = fileReader.readAsDataURL(blob);
  });
};
let closure_12 = async function _createSoundboardSound(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      let obj5 = closure_133_7;
      if (closure_133_7 == null) {
        let tmp15 = null;
        if (!closure_133_5.isOgg) {
          obj5 = { startMs: 0, endMs: closure_133_6 };
          tmp15 = obj5;
        }
        obj5 = tmp15;
      }
      closure_133_8 = obj5;
      if (null != closure_133_8) {
        c7 = 2;
        c8 = 1;
        return { value: closure_132_0(closure_132_2[7]).trimSoundboardAudio(closure_133_5.uri, closure_133_8), done: false };
      } else {
        let uri = closure_133_5.uri;
      }
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else {
      uri = value;
      if (arg0 === 2) {
        c8 = 3;
        return { value, done: true };
      }
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  } else {
    obj10.sound = value;
    obj10.volume = closure_133_2;
    obj10.emojiId = closure_133_3;
    obj10.emojiName = closure_133_4;
    c8 = 3;
    return { value: uploadSound(obj10), done: true };
  }
  closure_133_9 = uri;
  const tmp25 = closure_132_0(closure_132_2[8]);
  closure_6 = tmp25;
  uploadSound = tmp25.uploadSound;
  obj10 = { guildId: closure_133_0, name: closure_133_1 };
  await closure_132_10(closure_133_9, "audio/ogg");
  closure_5 = tmp2;
  ({ guildId: closure_133_0, name: closure_133_1, volume: closure_133_2, emojiId: closure_133_3, emojiName: closure_133_4, localSource: closure_133_5, durationMs: closure_133_6, trim: closure_133_7 } = closure_0);
  return "Path";
};
const set = new Set(["ogg", "opus"]);
let items = ["mp3", "wav"];
HermesBuiltin.arraySpread(set, 2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardCreationUtils.tsx");

export { pickSoundboardSoundFile };
export function createSoundboardSound() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function showAddSoundboardSoundOptions(guildId) {
  _require = guildId;
  let obj2 = { key: "AddSoundboardSoundOptions", header: null, hasIcons: false, options: null };
  let obj3 = { title: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t["8Fu/S7"]);
  obj2.header = obj3;
  let obj4 = { label: null, onPress: null };
  const intl2 = require("util").intl;
  obj4.label = intl2.string(require("util").t["/VJ/Sp"]);
  obj4.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19674, dependencyMap.paths), "SoundboardRecordSoundActionSheet", { guildId, analyticsSource: "guild_settings_record" });
  };
  items = [obj4, ];
  let obj5 = { label: null, onPress: null };
  const intl3 = require("util").intl;
  obj5.label = intl3.string(require("util").t["/uNYPJ"]);
  closure_1 = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: pickSoundboardSoundFile(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            const obj = { guildId: closure_129_0, localSource: closure_128_0, analyticsSource: "guild_settings_upload" };
            tmp5(c2[13])(obj);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  });
  obj5.onPress = function onPress() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[1] = obj5;
  obj2.options = items;
  const result = require("Sheet/showSimpleActionSheet").showSimpleActionSheet(obj2);
}