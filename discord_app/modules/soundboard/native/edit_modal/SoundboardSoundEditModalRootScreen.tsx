// === Module 19802: SoundboardSoundEditModalRootScreen ===

// Module 19802 (SoundboardSoundEditModalRootScreen)
import nativeDefault from "native" /* 575 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9063 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const SoundboardConstants = fn(5963);
({ MAX_LENGTH_SOUND_NAME: closure_8, MAX_SOUND_LENGTH_SECONDS: closure_9 } = SoundboardConstants);
const EmojiConstants = fn(1389);
({ EMOJI_URL_BASE_SIZE: closure_10, EmojiIntention: closure_11 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, label: null, buttons: null, emojiPreview: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.label = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj2.buttons = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let obj5 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.emojiPreview = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_14 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/SoundboardSoundEditModalRootScreen.tsx");

export default function SoundboardSoundEditModalRootScreen(localSource) {
  ({ guildId: require, sound } = localSource);
  localSource = localSource.localSource;
  const onSaved = localSource.onSaved;
  let defaultValue;
  noop = undefined;
  c6 = undefined;
  let first1;
  let first2;
  closure_9 = undefined;
  size = undefined;
  let first3;
  let first4;
  closure_13 = undefined;
  closure_14 = undefined;
  closure_15 = async function _handleSave() {
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp4;
            dependencyMap = tmp8;
            closure_130_0 = undefined;
            let firstFieldErrorMessage;
            size(true);
            _undefined(null);
            c5 = 2;
            if (null != localSource) {
              const obj5 = { guildId, name, volume, emojiId: null, emojiName: null, localSource: null, durationMs: null, trim: null };
              ({ emojiId: obj7.emojiId, emojiName: obj7.emojiName } = emojiId);
              obj5.localSource = tmp90;
              obj5.durationMs = durationMs;
              obj5.trim = trim;
              ref.current = emojiId(19796).createSoundboardSound(obj5);
              c6 = 3;
              c7 = 1;
              const obj8 = { value: ref.current, done: false };
              return obj8;
            } else {
              const obj9 = { guildId, soundId: soundId.soundId, name, volume, emojiId: null, emojiName: null };
              emojiId = emojiId.emojiId;
              if (emojiId == null) {
                emojiId = null;
              }
              obj9.emojiId = emojiId;
              let emojiName = emojiId.emojiName;
              if (emojiName == null) {
                emojiName = null;
              }
              obj9.emojiName = emojiName;
              c6 = 4;
              c7 = 1;
              const obj10 = { value: emojiId(6830).updateSound(obj9), done: false };
              return obj10;
            }
          }
        } else if (1 === tmp8) {
          c5 = 0;
          if (closure_131_13()) {
            closure_131_10(false);
          }
          throw closure_4;
        } else if (2 === tmp8) {
          c5 = 1;
          closure_130_2 = closure_4;
          const tmp38 = new emojiName(6350)(closure_130_2);
          closure_130_0 = tmp38;
          firstFieldErrorMessage = closure_130_0.getFirstFieldErrorMessage("name");
          if (null != firstFieldErrorMessage) {
            if (closure_131_13()) {
              closure_131_6(firstFieldErrorMessage);
            }
            c5 = 0;
            if (closure_131_13()) {
              closure_131_10(false);
            }
            c7 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
          emojiId(5594).presentError(closure_130_0.getAnyErrorMessage());
          const obj3 = emojiId(5594);
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              if (closure_131_13()) {
                closure_131_10(false);
              }
              c7 = 3;
              const obj20 = { value, done: true };
              return obj20;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            if (closure_131_13()) {
              closure_131_10(false);
            }
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c5 = 0;
          if (closure_131_13()) {
            closure_131_10(false);
          }
          if (closure_131_13()) {
            closure_131_3();
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp78) {
        closure_4 = tmp78;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp78;
        } else if (tmp2 === tmp80) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  };
  const tmp = closure_14();
  let str;
  if (sound != null) {
    str = sound.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp3 = defaultValue(noop.useState(str), 2);
  defaultValue = tmp3[0];
  noop = tmp3[1];
  [tmp5, c6] = defaultValue(noop.useState(null), 2);
  let num;
  if (sound != null) {
    num = sound.volume;
  }
  if (num == null) {
    num = 1;
  }
  const tmp2Result = defaultValue(noop.useState(num), 2);
  first1 = tmp2Result[0];
  let emojiId;
  if (sound != null) {
    emojiId = sound.emojiId;
  }
  let obj2 = { emojiId, emojiName: null };
  let emojiName;
  if (sound != null) {
    emojiName = sound.emojiName;
  }
  obj2.emojiName = emojiName;
  const tmp2Result5 = defaultValue(noop.useState(obj2), 2);
  first2 = tmp2Result5[0];
  closure_9 = tmp2Result5[1];
  let tmp4 = defaultValue(noop.useState(null), 2);
  [tmp13, c10] = defaultValue(noop.useState(false), 2);
  const tmp2Result7 = defaultValue(noop.useState(0), 2);
  first3 = tmp2Result7[0];
  const tmp2Result8 = defaultValue(noop.useState(null), 2);
  first4 = tmp2Result8[0];
  const tmp20 = sound(localSource[9])(first2);
  let soundId;
  const tmp2Result6 = defaultValue(noop.useState(false), 2);
  if (sound != null) {
    soundId = sound.soundId;
  }
  const tmp21Result = sound(localSource[10])(soundId, first1);
  closure_13 = sound(tmp19[11])();
  closure_14 = obj.useRef(null);
  const tmp21 = sound(localSource[10]);
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    closure_0 = async function _removeLocalSource(arg0) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              closure_131_0 = closure_0;
              closure_131_1 = undefined;
              constants = undefined;
              let CacheDirPath;
              let DocumentsDirPath;
              closure_131_5 = undefined;
              closure_131_6 = undefined;
              closure_131_7 = undefined;
              closure_131_8 = undefined;
              c6 = 1;
              c7 = 2;
              c8 = 1;
              let obj5 = { value: ref.current, done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              let _decodeURI = decodeURI;
              closure_131_1 = decodeURI(closure_131_0.replace(/^file:\/\//, ""));
              let obj3 = sound(localSource[13]);
              constants = obj3.getConstants();
              CacheDirPath = constants.CacheDirPath;
              DocumentsDirPath = constants.DocumentsDirPath;
              items = ["cache", CacheDirPath];
              let items1 = [items, ];
              let items2 = ["documents", DocumentsDirPath];
              items1[1] = items2;
              closure_1 = items1[Symbol.iterator]();
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c6 = 0;
              }
            } else if (3 === tmp4) {
              c6 = 0;
              closure_1.return();
              throw closure_1_5;
            } else {
              if (4 === tmp4) {
                c6 = 0;
                closure_1.return();
                c8 = 3;
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c6 = 2;
              }
              c6 = 0;
              closure_1.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            }
            c6 = 0;
            c8 = 3;
            let obj6 = { value, done: true };
            return obj6;
          }
        }
      }
    };
    if (null != localSource) {
      (function removeLocalSource(uri) {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(localSource.uri);
    }
  });
  if (null != first4) {
    first3 = first4.endMs - first4.startMs;
  }
  let tmp26 = defaultValue.length >= 2;
  if (tmp26) {
    let tmp27 = null == localSource;
    if (!tmp27) {
      let tmp28 = first3 > 0;
      if (tmp28) {
        tmp28 = first3 <= 1000 * closure_9;
      }
      tmp27 = tmp28;
    }
    tmp26 = tmp27;
  }
  let obj4 = { contentContainerStyle: tmp.container, keyboardShouldPersistTaps: "always", children: null };
  let tmp32 = null;
  if (null != localSource) {
    let obj5 = { source: localSource, volume: first1, onDurationChange: tmp2Result7[1], onTrimChange: tmp2Result8[1] };
    tmp32 = first4(sound(tmp19[19]), obj5);
  }
  items = [tmp32, , , , , , ];
  let obj6 = { label: null, maxLength: null, defaultValue: null, onChange: null, errorMessage: null, clearable: true };
  const intl = require("util").intl;
  obj6.label = intl.string(require("util").t.NpJGaM);
  obj6.maxLength = first2;
  obj6.defaultValue = defaultValue;
  obj6.onChange = function onChange(arg0) {
    closure_5(arg0);
    _undefined(null);
  };
  obj6.errorMessage = tmp5;
  items[1] = first4(require("TextInput").TextInput, obj6);
  const obj7 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.label, children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(require("util").t["3BQmiC"]);
  items[2] = first4(require("Text/Text").Text, obj7);
  let obj8 = {
    style: tmp.emojiPreview,
    onPress() {
      return openEmojiPickerActionSheet.openEmojiPickerActionSheet({
        pickerIntention: constants.SOUNDBOARD,
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            const obj2 = { emojiId: id.id };
            closure_1_9(obj2);
          } else if (null != id.optionallyDiverseSequence) {
            const obj = { emojiName: id.optionallyDiverseSequence };
            closure_1_9(obj);
          }
        }
      });
    },
    children: null
  };
  if (null != tmp20) {
    let obj9 = { fastImageStyle: { width: 24, height: 24 }, name: null, src: null };
    let str2 = first2.emojiName;
    if (str2 == null) {
      str2 = "";
    }
    obj9.name = str2;
    let emojiURL;
    if (null != first2.emojiId) {
      let obj10 = { id: first2.emojiId, animated: false, size };
      emojiURL = sound(tmp19[26]).getEmojiURL(obj10);
      const tmp18Result2 = sound(tmp19[26]);
    }
    obj9.src = emojiURL;
    let tmp34Result = tmp34(sound(tmp19[25]), obj9);
    const tmp18Result = sound(tmp19[25]);
  } else {
    tmp34Result = tmp34(require("ReactionIcon").ReactionIcon, { size: "md", color: "text-subtle" });
  }
  let items1 = [tmp34Result, ];
  if (null != tmp20) {
    const _HermesInternal = HermesInternal;
    let combined = ":" + tmp20 + ":";
  } else {
    const intl3 = require("util").intl;
    combined = intl3.string(require("util").t["59QgaD"]);
  }
  items1[1] = first4(require("Text/Text").Text, { variant: "body-md/semibold", color: "input-placeholder-text-default", children: combined });
  obj8.children = items1;
  items[3] = closure_13(require("Pressables").PressableHighlight, obj8);
  const obj11 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.label, children: null };
  const intl4 = require("util").intl;
  obj11.children = intl4.string(require("util").t["3CJlb1"]);
  items[4] = first4(require("Text/Text").Text, obj11);
  let obj12 = {
    minValue: 0,
    maxValue: 1,
    value: first1,
    onChange: tmp2Result[1],
    formatValue(arg0) {
      return "" + Math.round(100 * arg0) + "%";
    },
    accessibilityLabel: null
  };
  const intl5 = require("util").intl;
  obj12.accessibilityLabel = intl5.string(require("util").t["3CJlb1"]);
  items[5] = first4(require("Slider").Slider, obj12);
  const obj13 = { style: tmp.buttons, children: null };
  if (null == sound) {
    let items2 = [null, ];
    const obj14 = { text: null, onPress: null, disabled: null, loading: null };
    const intl7 = require("util").intl;
    obj14.text = intl7.string(require("util").t.bZY171);
    obj14.onPress = function handleSave() {
      const self = this;
      const apply = closure_15.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let tmp43 = !tmp26;
    if (tmp26) {
      tmp43 = tmp13;
    }
    obj14.disabled = tmp43;
    obj14.loading = tmp13;
    items2[1] = tmp34(require("components/Button/Button").Button, obj14);
    obj13.children = items2;
    items[6] = tmp30(tmp41, obj13);
    obj4.children = items;
    return tmp30(tmp31, obj4);
  } else {
    const intl6 = require("util").intl;
    const t = require("util").t;
    const obj15 = { variant: "secondary", text: intl6.string(tmp21Result.isPlaying ? t.hHBkuG : t.CCRKNz), onPress: tmp21Result.isPlaying ? tmp21Result.stop : tmp21Result.play };
    tmp34(require("components/Button/Button").Button, obj15);
  }
  let obj3 = require("useMountEffect");
  tmp31 = c6;
};