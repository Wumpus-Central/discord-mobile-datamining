// === Module 10152: NotificationSettingsPresets ===

// Module 10152 (NotificationSettingsPresets)
import nativeDefault from "native" /* 576 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4744 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 10149 */;
import notificationSettingsGuildFlagUtils from "notificationSettingsGuildFlagUtils" /* 10155 */;
import noop from "module_19" /* 19 */;

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
  let obj = {
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
  obj = { label: null, id: null, icon: null, page: null };
  const intl = tmp2(tmp3[3]).intl;
  obj.label = intl.string(require("util").t.hZrr6k);
  obj.id = require("notificationSettingsPresetUtils").Presets.ALL_MESSAGES;
  obj.icon = closure_4(require("CircleCheckIcon").CircleCheckIcon, {});
  const items = [obj, , ];
  const obj1 = { label: null, id: null, icon: null, page: null };
  const intl2 = tmp2(tmp3[3]).intl;
  obj1.label = intl2.string(require("util").t.y59NJm);
  obj1.id = require("notificationSettingsPresetUtils").Presets.MENTIONS;
  obj1.icon = closure_4(require("MagicWandIcon").MagicWandIcon, {});
  items[1] = obj1;
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl3 = tmp2(tmp3[3]).intl;
  obj2.label = intl3.string(require("util").t["pGn/bJ"]);
  obj2.id = require("notificationSettingsPresetUtils").Presets.NOTHING;
  obj2.icon = closure_4(require("BellSlashIcon").BellSlashIcon, {});
  items[2] = obj2;
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
    const obj3 = { style: tmp.customContainer, children: null };
    const obj4 = { style: { flex: 1, marginRight: 8 }, children: null };
    const obj5 = { variant: "text-sm/semibold", children: null };
    const intl4 = tmp2(tmp3[3]).intl;
    obj5.children = intl4.string(tmp2(tmp3[3]).t["32yow9"]);
    const items2 = [tmp4(tmp2(tmp3[11]).Text, obj5), ];
    const obj6 = { variant: "text-xs/medium", children: null };
    const intl5 = tmp2(tmp3[3]).intl;
    obj6.children = intl5.string(tmp2(tmp3[3]).t.l3doVX);
    items2[1] = tmp4(tmp2(tmp3[11]).Text, obj6);
    obj4.children = items2;
    const items3 = [closure_5(View, obj4), ];
    const obj7 = { variant: "secondary", text: null, onPress: null };
    const intl6 = tmp2(tmp3[3]).intl;
    obj7.text = intl6.string(tmp2(tmp3[3]).t["ztO+l+"]);
    obj7.onPress = function onPress() {
      preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
    };
    items3[1] = tmp4(tmp2(tmp3[12]).Button, obj7);
    obj3.children = items3;
    let tmp4Result = closure_5(View, obj3);
  } else {
    const obj8 = { variant: "experimental_Large", state: segmentedControlState };
    tmp4Result = tmp4(tmp2(tmp3[13]).SegmentedControl, obj8);
  }
  return tmp4Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { customContainer: null };
createStyles = { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG };
createStyles.customContainer = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
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