// discord_app/modules/notifications/settings/native/NotificationSettingsPresets.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import notificationSettingsPresetUtils from "../utils/notificationSettingsPresetUtils.tsx";
import BellSlashIcon from "../../../../design/components/Icon/native/redesign/generated/BellSlashIcon.tsx";
import notficationSettingsChannelFlagUtils from "../utils/notficationSettingsChannelFlagUtils.tsx";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import notificationSettingsGuildFlagUtils from "../utils/notificationSettingsGuildFlagUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
function getSegmentedControlItems() {
  let intl;
  let intl2;
  let intl3;
  const obj = {
    label: intl.string(intl4.t.hZrr6k),
    id: notificationSettingsPresetUtils.Presets.ALL_MESSAGES,
    icon: React3(CircleCheckIcon.CircleCheckIcon, {}),
    page: null,
  };
  intl = intl4.intl;
  const items = [obj, ,];
  const obj2 = {
    label: intl2.string(intl4.t.y59NJm),
    id: notificationSettingsPresetUtils.Presets.MENTIONS,
    icon: React3(MagicWandIcon.MagicWandIcon, {}),
    page: null,
  };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = {
    label: intl3.string(intl4.t["pGn/bJ"]),
    id: notificationSettingsPresetUtils.Presets.NOTHING,
    icon: React3(BellSlashIcon.BellSlashIcon, {}),
    page: null,
  };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}
let obj = { customContainer: obj2 };
obj2 = {
  padding: 16,
  minHeight: 82,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg + 8,
  backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG,
};
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (preset) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let num3;
      let tmp5;
      let tmp6;
      _require = preset;
      let tmp = _require;
      let tmp2 = num3;
      const obj = require("react");
      const cResult = obj.c(21);
      const tmp4 = closure_7();
      if (cResult[0] !== preset) {
        const fn = function u(arg0) {
          const tmp = 0 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.ALL_MESSAGES;
          if (tmp) {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.ALL_MESSAGES);
          }
          const tmp9 = 1 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.MENTIONS;
          if (tmp9) {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
          }
          const tmp17 = 2 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.NOTHING;
          if (tmp17) {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.NOTHING);
          }
        };
        cResult[0] = preset;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      num3 = 0;
      if (preset.preset !== tmp(tmp2[4]).Presets.ALL_MESSAGES) {
        let num4 = 1;
        if (preset.preset !== tmp(tmp2[4]).Presets.MENTIONS) {
          num4 = num5;
        }
        num3 = num4;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = getSegmentedControlItems();
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp5) {
        let tmp9;
        if (cResult[4] === num3) {
          tmp9 = cResult[5];
        }
        const tmpResult = tmp(tmp2[12]);
        const segmentedControlState = tmpResult.useSegmentedControlState(tmp9);
        if (cResult[6] === segmentedControlState) {
          let tmp11;
          let tmp12;
          if (cResult[7] === num3) {
            tmp11 = cResult[8];
            tmp12 = cResult[9];
          }
          const effect = segmentedControlState.useEffect(tmp11, tmp12);
          if (preset.preset === tmp(tmp2[4]).Presets.CUSTOM) {
            let tmp18;
            let tmp19;
            let tmp22;
            let tmp27;
            let tmp29;
            const _Symbol = Symbol;
            const customContainer = tmp4.customContainer;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { flex: 1, marginRight: 8 };
              cResult[10] = obj2;
              tmp18 = obj2;
            } else {
              tmp18 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { variant: "text-sm/semibold", children: intl.string(tmp(tmp2[3]).t["32yow9"]) };
              const Text = tmp(tmp2[13]).Text;
              intl = tmp(tmp2[3]).intl;
              const tmp21 = closure_4(Text, obj3);
              cResult[11] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[11];
            }
            const _Symbol3 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { style: tmp18, children: items };
              items = [tmp19];
              const obj5 = { variant: "text-xs/medium", children: intl2.string(tmp(tmp2[3]).t.l3doVX) };
              const Text2 = tmp(tmp2[13]).Text;
              intl2 = tmp(tmp2[3]).intl;
              items[1] = closure_4(Text2, obj5);
              const tmp26 = closure_5(View, obj4);
              cResult[12] = tmp26;
              tmp22 = tmp26;
            } else {
              tmp22 = cResult[12];
            }
            const _Symbol4 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[3]).intl;
              const stringResult = intl3.string(tmp(tmp2[3]).t["ztO+l+"]);
              cResult[13] = stringResult;
              tmp27 = stringResult;
            } else {
              tmp27 = cResult[13];
            }
            if (cResult[14] !== preset) {
              const obj6 = {
                variant: "secondary",
                text: tmp27,
                onPress() {
                  preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
                },
              };
              const tmp31 = closure_4(tmp(tmp2[14]).Button, obj6);
              cResult[14] = preset;
              cResult[15] = tmp31;
              tmp29 = tmp31;
            } else {
              tmp29 = cResult[15];
            }
            if (cResult[16] === tmp4.customContainer) {
              let tmp32;
              if (cResult[17] === tmp29) {
                tmp32 = cResult[18];
              }
              return tmp32;
            }
            const obj7 = { style: customContainer, children: items1 };
            items1 = [tmp22, tmp29];
            const tmp35 = closure_5(View, obj7);
            cResult[16] = tmp4.customContainer;
            cResult[17] = tmp29;
            cResult[18] = tmp35;
            tmp32 = tmp35;
          } else {
            let tmp15;
            if (cResult[19] !== segmentedControlState) {
              const obj8 = { variant: "experimental_Large", state: segmentedControlState };
              let tmp17 = closure_4(tmp(tmp2[15]).SegmentedControl, obj8);
              cResult[19] = segmentedControlState;
              cResult[20] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[20];
            }
            return tmp15;
          }
        }
        const fn2 = function f() {
          const tmp2 = null == num3 || num3 >= 3;
          if (!tmp2) {
            segmentedControlState.setActiveIndex(num3);
          }
        };
        const items2 = [num3, segmentedControlState];
        cResult[6] = segmentedControlState;
        cResult[7] = num3;
        cResult[8] = fn2;
        cResult[9] = items2;
        tmp12 = items2;
        tmp11 = fn2;
      }
      const obj9 = { pageWidth: 0, onSetActiveIndex: tmp5, items: tmp6, defaultIndex: num3 };
      cResult[3] = tmp5;
      cResult[4] = num3;
      cResult[5] = obj9;
      tmp9 = obj9;
    }
  : (preset) => {
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let tmp7;
      _require = preset;
      let tmp2 = _require;
      let tmp = closure_7();
      let num = 0;
      if (preset.preset !== require("notificationSettingsPresetUtils").Presets.ALL_MESSAGES) {
        let num2 = 1;
        if (preset.preset !== tmp2(num[4]).Presets.MENTIONS) {
          let num3;
          if (preset.preset === tmp2(num[4]).Presets.NOTHING) {
            num3 = 2;
          }
          num2 = num3;
        }
        num = num2;
      }
      const tmp2Result = tmp2(num[12]);
      const obj = {
        pageWidth: 0,
        onSetActiveIndex(arg0) {
          const tmp = 0 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.ALL_MESSAGES;
          if (tmp) {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.ALL_MESSAGES);
          }
          const tmp9 = 1 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.MENTIONS;
          if (tmp9) {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
          }
          const tmp17 = 2 === arg0 && preset.preset !== notificationSettingsPresetUtils.Presets.NOTHING;
          if (tmp17) {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.NOTHING);
          }
        },
        items: getSegmentedControlItems(),
        defaultIndex: num,
      };
      const segmentedControlState = tmp2Result.useSegmentedControlState(obj);
      const items = [num, segmentedControlState];
      const effect = segmentedControlState.useEffect(() => {
        const tmp2 = null == num || tmp >= 3;
        if (!tmp2) {
          segmentedControlState.setActiveIndex(num);
        }
      }, items);
      if (preset.preset === tmp2(num[4]).Presets.CUSTOM) {
        const obj2 = { style: tmp.customContainer, children: items2 };
        const obj3 = { style: { flex: 1, marginRight: 8 }, children: items1 };
        const obj4 = { variant: "text-sm/semibold", children: intl.string(tmp2(num[3]).t["32yow9"]) };
        const Text = tmp2(tmp3[13]).Text;
        intl = tmp2(tmp3[3]).intl;
        items1 = [closure_4(Text, obj4)];
        const obj5 = { variant: "text-xs/medium", children: intl2.string(tmp2(num[3]).t.l3doVX) };
        const Text2 = tmp2(tmp3[13]).Text;
        intl2 = tmp2(tmp3[3]).intl;
        items1[1] = closure_4(Text2, obj5);
        items2 = [closure_5(View, obj3)];
        const obj6 = {
          variant: "secondary",
          text: intl3.string(tmp2(num[3]).t["ztO+l+"]),
          onPress() {
            preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
          },
        };
        const Button = tmp2(tmp3[14]).Button;
        intl3 = tmp2(tmp3[3]).intl;
        items2[1] = closure_4(Button, obj6);
        tmp7 = closure_5(View, obj2);
      } else {
        const obj7 = { variant: "experimental_Large", state: segmentedControlState };
        tmp7 = closure_4(tmp2(tmp3[15]).SegmentedControl, obj7);
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp3;
      _require = guildId;
      let obj = require("react");
      const cResult = obj.c(5);
      const obj2 = require("notificationSettingsGuildFlagUtils");
      const guildPresetSettings = obj2.useGuildPresetSettings(guildId.guildId);
      if (cResult[0] !== guildId.guildId) {
        const fn = function s(arg0) {
          const obj = notificationSettingsGuildFlagUtils;
          return obj.updateGuildPreset(guildId.guildId, arg0);
        };
        cResult[0] = guildId.guildId;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === guildPresetSettings.preset) {
        let tmp4;
        if (cResult[3] === tmp3) {
          tmp4 = cResult[4];
        }
        return tmp4;
      }
      const obj3 = { preset: guildPresetSettings.preset, updatePreset: tmp3 };
      const tmp5 = closure_4(closure_8, obj3);
      cResult[2] = guildPresetSettings.preset;
      cResult[3] = tmp3;
      cResult[4] = tmp5;
      tmp4 = tmp5;
    }
  : (guildId) => {
      let obj2;
      _require = guildId;
      let obj = {
        preset: obj2.useGuildPresetSettings(guildId.guildId).preset,
        updatePreset(arg0) {
          const obj = notificationSettingsGuildFlagUtils;
          return obj.updateGuildPreset(guildId.guildId, arg0);
        },
      };
      obj2 = require("notificationSettingsGuildFlagUtils");
      return closure_4(closure_8, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      _require = channel;
      let obj = require("react");
      const cResult = obj.c(6);
      const obj2 = require("notficationSettingsChannelFlagUtils");
      const channelPresetSettings = obj2.useChannelPresetSettings(channel.channel);
      if (cResult[0] === channel.channel.guild_id) {
        let tmp3;
        if (cResult[1] === channel.channel.id) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === channelPresetSettings.preset) {
          let tmp4;
          if (cResult[4] === tmp3) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
        const obj3 = { preset: channelPresetSettings.preset, updatePreset: tmp3 };
        const tmp7 = closure_4(closure_8, obj3);
        cResult[3] = channelPresetSettings.preset;
        cResult[4] = tmp3;
        cResult[5] = tmp7;
        tmp4 = tmp7;
      }
      const fn = function s(arg0) {
        const obj = notficationSettingsChannelFlagUtils;
        return obj.updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
      };
      cResult[0] = channel.channel.guild_id;
      cResult[1] = channel.channel.id;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (channel) => {
      let obj2;
      _require = channel;
      let obj = {
        preset: obj2.useChannelPresetSettings(channel.channel).preset,
        updatePreset(arg0) {
          const obj = notficationSettingsChannelFlagUtils;
          return obj.updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
        },
      };
      obj2 = require("notficationSettingsChannelFlagUtils");
      return closure_4(closure_8, obj);
    };
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = tmp3;
export const NotificationSettingsChannelPresets = tmp4;
