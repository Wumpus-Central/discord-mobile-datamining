// === Module 10093: NotificationSettingsPresets ===

// Module 10093 (NotificationSettingsPresets)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function NotificationSettingsPresets(preset) {
  const _require = preset;
  let num = 0;
  if (preset.preset !== _require(num[4]).Presets.ALL_MESSAGES) {
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
  let tmp = callback3();
  const obj = { label: null, id: null, icon: null, page: null };
  const intl = tmp2(tmp3[3]).intl;
  obj[0] = intl.string(_require(num[3]).t.hZrr6k);
  obj[1] = _require(num[4]).Presets.ALL_MESSAGES;
  obj[2] = callback(_require(num[5]).CircleCheckIcon, {});
  const items = [obj, , ];
  obj1 = { label: null, id: null, icon: null, page: null };
  const intl2 = tmp2(tmp3[3]).intl;
  obj1[0] = intl2.string(_require(num[3]).t.y59NJm);
  obj1[1] = _require(num[4]).Presets.MENTIONS;
  obj1[2] = callback(_require(num[6]).MagicWandIcon, {});
  items[1] = obj1;
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl3 = tmp2(tmp3[3]).intl;
  obj2[0] = intl3.string(_require(num[3]).t["pGn/bJ"]);
  obj2[1] = _require(num[4]).Presets.NOTHING;
  obj2[2] = callback(_require(num[7]).BellSlashIcon, {});
  items[2] = obj2;
  obj[2] = items;
  obj[3] = num;
  const segmentedControlState = _require(num[10]).useSegmentedControlState(obj);
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
  if (preset.preset === _require(num[4]).Presets.CUSTOM) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.customContainer;
    const obj4 = { style: null, children: null };
    obj4[0] = { flex: 1, marginRight: 8 };
    const obj5 = { variant: "text-sm/semibold", children: null };
    const intl4 = tmp2(tmp3[3]).intl;
    obj5[1] = intl4.string(tmp2(tmp3[3]).t["32yow9"]);
    const items2 = [callback(tmp2(tmp3[11]).Text, obj5), ];
    const obj6 = { variant: "text-xs/medium", children: null };
    const intl5 = tmp2(tmp3[3]).intl;
    obj6[1] = intl5.string(tmp2(tmp3[3]).t.l3doVX);
    items2[1] = callback(tmp2(tmp3[11]).Text, obj6);
    obj4[1] = items2;
    const items3 = [callback2(View, obj4), ];
    const obj7 = { variant: "secondary", text: null, onPress: null };
    const intl6 = tmp2(tmp3[3]).intl;
    obj7[1] = intl6.string(tmp2(tmp3[3]).t["ztO+l+"]);
    obj7[2] = function onPress() {
      preset.updatePreset(preset(num[4]).Presets.MENTIONS);
    };
    items3[1] = callback(tmp2(tmp3[12]).Button, obj7);
    obj3[1] = items3;
    let tmp4Result = callback2(View, obj3);
  } else {
    const obj8 = { variant: "experimental_Large", state: null };
    obj8[1] = segmentedControlState;
    tmp4Result = callback(tmp2(tmp3[13]).SegmentedControl, obj8);
  }
  return tmp4Result;
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.lg + 8, backgroundColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = function NotificationSettingsGuildPresets(guildId) {
  const _require = guildId;
  const obj = {
    preset: _require(10098).useGuildPresetSettings(guildId.guildId).preset,
    updatePreset(arg0) {
      return guildId(dependencyMap[14]).updateGuildPreset(guildId.guildId, arg0);
    }
  };
  return callback(NotificationSettingsPresets, obj);
};
export const NotificationSettingsChannelPresets = function NotificationSettingsChannelPresets(channel) {
  const _require = channel;
  const obj = {
    preset: _require(10090).useChannelPresetSettings(channel.channel).preset,
    updatePreset(arg0) {
      return channel(dependencyMap[15]).updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
    }
  };
  return callback(NotificationSettingsPresets, obj);
};