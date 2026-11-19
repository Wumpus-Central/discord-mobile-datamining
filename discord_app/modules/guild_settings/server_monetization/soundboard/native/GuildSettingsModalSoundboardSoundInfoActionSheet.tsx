// === Module 19865: GuildSettingsModalSoundboardSoundInfoActionSheet ===

// Module 19865 (GuildSettingsModalSoundboardSoundInfoActionSheet)
import SoundboardActionCreators from "SoundboardActionCreators" /* 6709 */;
import showSoundboardSoundEditModalDefault from "showSoundboardSoundEditModal" /* 19858 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5840 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/soundboard/native/GuildSettingsModalSoundboardSoundInfoActionSheet.tsx");

export default noop.memo(function GuildSettingsModalSoundboardSoundInfoActionSheet(guildId) {
  guildId = guildId.guildId;
  const soundId = guildId.soundId;
  const hideActionSheet = guildId.hideActionSheet;
  _slicedToArray = undefined;
  noop = async function _onDeleteSound() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null != stateFromStores) {
            const obj6 = { title: null, body: null, confirmText: null, confirmColor: null };
            const intl2 = tmp3(tmp57[9]).intl;
            const obj8 = { soundName: stateFromStores.name };
            obj6.title = intl2.formatToPlainString(tmp3(tmp57[9]).t["PR/VbI"], obj8);
            const intl3 = tmp3(tmp57[9]).intl;
            const obj9 = { soundName: stateFromStores.name };
            obj6.body = intl3.format(tmp3(tmp57[9]).t["u6+CmN"], obj9);
            const intl4 = tmp3(tmp57[9]).intl;
            obj6.confirmText = intl4.string(tmp3(tmp57[9]).t.oyYWHE);
            obj6.confirmColor = tmp3(tmp57[10]).ButtonColors.RED;
            v4 = 2;
            c4 = 1;
            const obj10 = { value: v4(tmp57[8]).confirm(obj6), done: false };
            return obj10;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_4(false);
          throw tmp57;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else if (value) {
              closure_128_4(true);
              c3 = 2;
              v4 = 4;
              c4 = 1;
              const obj12 = { value: tmp3(tmp57[11]).deleteSound(closure_128_0, closure_128_1), done: false };
              return obj12;
            }
          } else if (3 === tmp7) {
            c3 = 1;
            const intl = tmp3(tmp57[9]).intl;
            tmp3(tmp57[12]).presentError(intl.string(tmp3(tmp57[9]).t["5NMPSS"]));
            c3 = 0;
            closure_128_4(false);
            c4 = 3;
            const obj13 = { value: undefined, done: true };
            return obj13;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
            closure_128_4(false);
            closure_128_2();
          }
          c3 = 0;
          closure_128_4(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp57) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp57;
        } else if (tmp === tmp59) {
          v4 = tmp;
        } else {
          v4 = tmp2;
        }
      }
    }
  };
  items = [SoundboardStore];
  const items1 = [guildId, soundId];
  const stateFromStores = guildId(hideActionSheet[7]).useStateFromStores(items, () => {
    const soundsForGuild = SoundboardStore.getSoundsForGuild(guildId);
    let found;
    if (soundsForGuild != null) {
      found = soundsForGuild.find((soundId) => soundId.soundId === soundId);
    }
    return found;
  }, items1);
  let obj = guildId(hideActionSheet[7]);
  const items2 = [SoundboardStore, AuthenticationStore];
  const items3 = [soundId];
  const stateFromStores1 = guildId(hideActionSheet[7]).useStateFromStores(items2, () => {
    let isPlayingSoundResult = SoundboardStore.isPlayingSound(soundId);
    if (isPlayingSoundResult) {
      isPlayingSoundResult = SoundboardStore.isUserPlayingSounds(AuthenticationStore.getId());
    }
    return isPlayingSoundResult;
  }, items3);
  const obj2 = guildId(hideActionSheet[7]);
  [tmp6, c4] = noop.useState(false);
  const items4 = [hideActionSheet, stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      hideActionSheet();
    }
  }, items4);
  let tmp9Result2 = null;
  if (null != stateFromStores) {
    let obj3 = { header: null, children: null };
    const obj4 = { title: stateFromStores.name };
    obj3.header = closure_10(tmp(tmp2[14]).BottomSheetTitleHeader, obj4);
    let obj5 = { style: null, children: null };
    let obj6 = { paddingHorizontal: soundId(tmp2[15]).space.PX_12, paddingBottom: soundId(tmp2[15]).space.PX_16 };
    obj5.style = obj6;
    const obj7 = { icon: closure_10(tmp(tmp2[18]).VoiceNormalIcon, {}), label: null, disabled: null, onPress: null };
    let intl = tmp(tmp2[9]).intl;
    const t = tmp(tmp2[9]).t;
    obj7.label = intl.string(stateFromStores1 ? t.diasud : t.Kd4uxG);
    obj7.disabled = stateFromStores1;
    obj7.onPress = function onPress() {
      SoundboardActionCreators.playSoundLocally(null, { soundId: stateFromStores.soundId, volume: stateFromStores.volume });
    };
    const items5 = [closure_10(tmp(tmp2[17]).TableRow, obj7), , ];
    let obj8 = { icon: closure_10(tmp(tmp2[19]).PencilIcon, {}), label: null, onPress: null };
    let intl2 = tmp(tmp2[9]).intl;
    obj8.label = intl2.string(tmp(tmp2[9]).t.uKlG0Z);
    obj8.onPress = function onPress() {
      showSoundboardSoundEditModalDefault({ guildId, sound: stateFromStores, analyticsSource: "guild_settings" });
    };
    items5[1] = closure_10(tmp(tmp2[17]).TableRow, obj8);
    let obj9 = { icon: closure_10(tmp(tmp2[21]).TrashIcon, { color: "text-feedback-critical" }), trailing: null, label: null, variant: "danger", disabled: null, onPress: null };
    let tmp9Result = null;
    if (tmp6) {
      tmp9Result = closure_10(closure_6, {});
    }
    let obj10 = { hasIcons: true, children: null };
    obj9.trailing = tmp9Result;
    let intl3 = tmp(tmp2[9]).intl;
    obj9.label = intl3.string(tmp(tmp2[9]).t.gq0iCT);
    obj9.disabled = tmp6;
    obj9.onPress = function onDeleteSound() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items5[2] = closure_10(tmp(tmp2[17]).TableRow, obj9);
    obj10.children = items5;
    obj5.children = closure_11(tmp(tmp2[16]).TableRowGroup, obj10);
    obj3.children = closure_10(closure_7, obj5);
    tmp9Result2 = closure_10(tmp(tmp2[13]).BottomSheet, obj3);
  }
  return tmp9Result2;
});