// === Module 9610: NotificationSettingsPresets ===

// Module 9610 (NotificationSettingsPresets)
import nativeDefault from "native" /* 576 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 9607 */;
import notificationSettingsGuildFlagUtils from "notificationSettingsGuildFlagUtils" /* 9615 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function NotificationSettingsPresets(preset) {
  _require = preset;
  let num = 0;
  if (preset.preset !== require("notificationSettingsPresetUtils").Presets.ALL_MESSAGES) {
    let num2 = 1;
    if (preset.preset !== tmp2(tmp3[4]).Presets.MENTIONS) {
      let num3;
      if (preset.preset === tmp2(tmp3[4]).Presets.NOTHING) {
        num3 = 2;
      }
      num2 = num3;
    }
    num = num2;
  }
  let tmp = closure_6();
  const obj = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let tmp = 0 === arg0;
      if (tmp) {
        tmp = preset.preset !== notificationSettingsPresetUtils.Presets.ALL_MESSAGES;
      }
      if (tmp) {
        preset.updatePreset(notificationSettingsPresetUtils.Presets.ALL_MESSAGES);
      }
      let tmp9 = 1 === arg0;
      if (tmp9) {
        tmp9 = preset.preset !== notificationSettingsPresetUtils.Presets.MENTIONS;
      }
      if (tmp9) {
        preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
      }
      let tmp17 = 2 === arg0;
      if (tmp17) {
        tmp17 = preset.preset !== notificationSettingsPresetUtils.Presets.NOTHING;
      }
      if (tmp17) {
        preset.updatePreset(notificationSettingsPresetUtils.Presets.NOTHING);
      }
    },
    items: null,
    defaultIndex: null
  };
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl = tmp2(tmp3[3]).intl;
  obj2.label = intl.string(require("util").t.hZrr6k);
  obj2.id = require("notificationSettingsPresetUtils").Presets.ALL_MESSAGES;
  obj2.icon = closure_4(require("CircleCheckIcon").CircleCheckIcon, {});
  const items = [obj2, , ];
  const obj3 = { label: null, id: null, icon: null, page: null };
  const intl2 = tmp2(tmp3[3]).intl;
  obj3.label = intl2.string(require("util").t.y59NJm);
  obj3.id = require("notificationSettingsPresetUtils").Presets.MENTIONS;
  obj3.icon = closure_4(require("MagicWandIcon").MagicWandIcon, {});
  items[1] = obj3;
  const obj4 = { label: null, id: null, icon: null, page: null };
  const intl3 = tmp2(tmp3[3]).intl;
  obj4.label = intl3.string(require("util").t["pGn/bJ"]);
  obj4.id = require("notificationSettingsPresetUtils").Presets.NOTHING;
  obj4.icon = closure_4(require("BellSlashIcon").BellSlashIcon, {});
  items[2] = obj4;
  obj.items = items;
  obj.defaultIndex = num;
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj);
  const items1 = [num, segmentedControlState];
  const effect = segmentedControlState.useEffect(() => {
    let tmp2 = null == num;
    if (!tmp2) {
      tmp2 = tmp >= 3;
    }
    if (!tmp2) {
      segmentedControlState.setActiveIndex(tmp);
    }
  }, items1);
  if (preset.preset === require("notificationSettingsPresetUtils").Presets.CUSTOM) {
    const obj5 = { style: tmp.customContainer, children: null };
    const obj6 = { style: { flex: 1, marginRight: 8 }, children: null };
    const obj7 = { variant: "text-sm/semibold", children: null };
    const intl4 = tmp2(tmp3[3]).intl;
    obj7.children = intl4.string(tmp2(tmp3[3]).t["32yow9"]);
    const items2 = [closure_4(tmp2(tmp3[11]).Text, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: null };
    const intl5 = tmp2(tmp3[3]).intl;
    obj8.children = intl5.string(tmp2(tmp3[3]).t.l3doVX);
    items2[1] = closure_4(tmp2(tmp3[11]).Text, obj8);
    obj6.children = items2;
    const items3 = [closure_5(View, obj6), ];
    const obj9 = { variant: "secondary", text: null, onPress: null };
    const intl6 = tmp2(tmp3[3]).intl;
    obj9.text = intl6.string(tmp2(tmp3[3]).t["ztO+l+"]);
    obj9.onPress = function onPress() {
      preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
    };
    items3[1] = closure_4(tmp2(tmp3[12]).Button, obj9);
    obj5.children = items3;
    let tmp4Result = closure_5(View, obj5);
  } else {
    const obj10 = { variant: "experimental_Large", state: segmentedControlState };
    tmp4Result = closure_4(tmp2(tmp3[13]).SegmentedControl, obj10);
  }
  return tmp4Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = { customContainer: { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = function NotificationSettingsGuildPresets(guildId) {
  _require = guildId;
  const obj = {
    preset: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId).preset,
    updatePreset(arg0) {
      return notificationSettingsGuildFlagUtils.updateGuildPreset(guildId.guildId, arg0);
    }
  };
  return closure_4(NotificationSettingsPresets, obj);
};
export const NotificationSettingsChannelPresets = function NotificationSettingsChannelPresets(channel) {
  _require = channel;
  const obj = {
    preset: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel).preset,
    updatePreset(arg0) {
      return notficationSettingsChannelFlagUtils.updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
    }
  };
  return closure_4(NotificationSettingsPresets, obj);
};