// === Module 12597: NotificationSettingsPresets ===

// Module 12597 (NotificationSettingsPresets)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CircleCheckIcon from "CircleCheckIcon" /* 6867 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 7913 */;
import BellSlashIcon from "BellSlashIcon" /* 10345 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 10446 */;
import MagicWandIcon from "MagicWandIcon" /* 12598 */;
import notificationSettingsGuildFlagUtils from "notificationSettingsGuildFlagUtils" /* 12600 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
function getSegmentedControlItems() {
  const obj = { label: null, id: null, icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.hZrr6k);
  obj.id = notificationSettingsPresetUtils.Presets.ALL_MESSAGES;
  obj.icon = React4(CircleCheckIcon.CircleCheckIcon, {});
  const items = [obj, , ];
  const obj2 = { label: null, id: null, icon: null, page: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.y59NJm);
  obj2.id = notificationSettingsPresetUtils.Presets.MENTIONS;
  obj2.icon = React4(MagicWandIcon.MagicWandIcon, {});
  items[1] = obj2;
  const obj3 = { label: null, id: null, icon: null, page: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t["pGn/bJ"]);
  obj3.id = notificationSettingsPresetUtils.Presets.NOTHING;
  obj3.icon = React4(BellSlashIcon.BellSlashIcon, {});
  items[2] = obj3;
  return items;
}
const createStyles = fn(5092);
let obj2 = { customContainer: { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG } };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsPresets(preset) {
  _require = preset;
  const cResult = require("c").c(21);
  const tmp4 = closure_7();
  if (cResult[0] !== preset) {
    function onSetActiveIndex(arg0) {
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
    }
    cResult[0] = preset;
    cResult[1] = onSetActiveIndex;
    let tmp5 = onSetActiveIndex;
  } else {
    tmp5 = cResult[1];
  }
  num3 = 0;
  if (preset.preset !== require("notificationSettingsPresetUtils").Presets.ALL_MESSAGES) {
    let num4 = 1;
    if (preset.preset !== tmp(tmp2[4]).Presets.MENTIONS) {
      num4 = num5;
    }
    num3 = num4;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = getSegmentedControlItems();
    cResult[2] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === num3) {
      let tmp9 = cResult[5];
    }
    const segmentedControlState = tmp(tmp2[12]).useSegmentedControlState(tmp9);
    if (cResult[6] === segmentedControlState) {
      if (cResult[7] === num3) {
        let tmp11 = cResult[8];
        let tmp12 = cResult[9];
      }
      const effect = segmentedControlState.useEffect(tmp11, tmp12);
      if (preset.preset === tmp(tmp2[4]).Presets.CUSTOM) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { flex: 1, marginRight: 8 };
          cResult[10] = obj2;
          let tmp18 = obj2;
        } else {
          tmp18 = cResult[10];
        }
        const _Symbol2 = Symbol;
        class I {
          constructor() {
            tmp = c1;
            tmp2 = null == c1;
            if (!tmp2) {
              num = 3;
              tmp2 = tmp >= 3;
            }
            if (!tmp2) {
              tmp3 = closure_2;
              setActiveIndexResult = closure_2.setActiveIndex(tmp);
            }
            return;
          }
        }
        if (tmp19 === Symbol.for("react.memo_cache_sentinel")) {
          const string = tmp(tmp2[3]).intl.string;
          class I {
            constructor() {
              tmp = c1;
              tmp2 = null == c1;
              if (!tmp2) {
                num = 3;
                tmp2 = tmp >= 3;
              }
              if (!tmp2) {
                tmp3 = closure_2;
                setActiveIndexResult = closure_2.setActiveIndex(tmp);
              }
              return;
            }
          }
          const tmp22 = closure_4(tmp(tmp2[13]).Text, { variant: "text-sm/semibold", children: null });
          cResult[11] = tmp22;
          const obj3 = { variant: "text-sm/semibold", children: null };
        }
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { style: tmp18, children: null };
          const items = [, ];
          class I {
            constructor() {
              tmp = c1;
              tmp2 = null == c1;
              if (!tmp2) {
                num = 3;
                tmp2 = tmp >= 3;
              }
              if (!tmp2) {
                tmp3 = closure_2;
                setActiveIndexResult = closure_2.setActiveIndex(tmp);
              }
              return;
            }
          }
          const obj5 = { variant: "text-xs/medium", children: null };
          const intl = tmp(tmp2[3]).intl;
          obj5.children = intl.string(tmp(tmp2[3]).t.l3doVX);
          items[1] = closure_4(tmp(tmp2[13]).Text, obj5);
          obj4.children = items;
          const tmp27 = closure_5(View, obj4);
          cResult[12] = tmp27;
          let tmp23 = tmp27;
        } else {
          tmp23 = cResult[12];
        }
        const _Symbol4 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[3]).intl;
          cResult[13] = intl2.string(tmp(tmp2[3]).t["ztO+l+"]);
          class I {
            constructor() {
              tmp = c1;
              tmp2 = null == c1;
              if (!tmp2) {
                num = 3;
                tmp2 = tmp >= 3;
              }
              if (!tmp2) {
                tmp3 = closure_2;
                setActiveIndexResult = closure_2.setActiveIndex(tmp);
              }
              return;
            }
          }
          const stringResult = intl2.string(tmp(tmp2[3]).t["ztO+l+"]);
        } else {
          const tmp28 = cResult[13];
        }
        if (cResult[14] !== preset) {
          const obj6 = {
            variant: "secondary",
            text: tmp28,
            onPress() {
                      preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
                    }
          };
          const tmp32 = closure_4(tmp(tmp2[14]).Button, obj6);
          class I {
            constructor() {
              tmp = c1;
              tmp2 = null == c1;
              if (!tmp2) {
                num = 3;
                tmp2 = tmp >= 3;
              }
              if (!tmp2) {
                tmp3 = closure_2;
                setActiveIndexResult = closure_2.setActiveIndex(tmp);
              }
              return;
            }
          }
          cResult[14] = preset;
          cResult[15] = tmp32;
          let tmp30 = tmp32;
        } else {
          tmp30 = cResult[15];
        }
        if (cResult[16] === tmp4.customContainer) {
          if (cResult[17] === tmp30) {
            let tmp33 = cResult[18];
          }
          return tmp33;
        }
        const obj7 = { style: tmp4.customContainer, children: null };
        const items1 = [tmp23, tmp30];
        obj7.children = items1;
        const tmp36 = closure_5(View, obj7);
        cResult[16] = tmp4.customContainer;
        cResult[17] = tmp30;
        cResult[18] = tmp36;
        tmp33 = tmp36;
      } else {
        if (cResult[19] !== segmentedControlState) {
          const obj8 = { variant: "experimental_Large", state: segmentedControlState };
          let tmp17 = closure_4(tmp(tmp2[15]).SegmentedControl, obj8);
          class I {
            constructor() {
              tmp = c1;
              tmp2 = null == c1;
              if (!tmp2) {
                num = 3;
                tmp2 = tmp >= 3;
              }
              if (!tmp2) {
                tmp3 = closure_2;
                setActiveIndexResult = closure_2.setActiveIndex(tmp);
              }
              return;
            }
          }
          cResult[20] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[20];
        }
        return tmp15;
      }
    }
    class I {
      constructor() {
        tmp = c1;
        tmp2 = null == c1;
        if (!tmp2) {
          num = 3;
          tmp2 = tmp >= 3;
        }
        if (!tmp2) {
          tmp3 = closure_2;
          setActiveIndexResult = closure_2.setActiveIndex(tmp);
        }
        return;
      }
    }
    const items2 = [num3, segmentedControlState];
    cResult[6] = segmentedControlState;
    cResult[7] = num3;
    cResult[8] = I;
    cResult[9] = items2;
    tmp12 = items2;
    tmp11 = I;
    const tmpResult = tmp(tmp2[12]);
  }
  const obj9 = { pageWidth: 0, onSetActiveIndex: tmp5, items: tmp6, defaultIndex: num3 };
  cResult[3] = tmp5;
  cResult[4] = num3;
  cResult[5] = obj9;
  tmp9 = obj9;
  const obj = require("c");
}) : (function NotificationSettingsPresets(preset) {
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
  let tmp = closure_7();
  const tmp2Result = require("SegmentedControlState");
  const segmentedControlState = tmp2Result.useSegmentedControlState({
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
    items: getSegmentedControlItems(),
    defaultIndex: num
  });
  const items = [num, segmentedControlState];
  const effect = segmentedControlState.useEffect(() => {
    let tmp2 = null == num;
    if (!tmp2) {
      tmp2 = tmp >= 3;
    }
    if (!tmp2) {
      segmentedControlState.setActiveIndex(tmp);
    }
  }, items);
  if (preset.preset === require("notificationSettingsPresetUtils").Presets.CUSTOM) {
    const obj2 = { style: tmp.customContainer, children: null };
    const obj3 = { style: { flex: 1, marginRight: 8 }, children: null };
    const obj4 = { variant: "text-sm/semibold", children: null };
    const intl = tmp2(tmp3[3]).intl;
    obj4.children = intl.string(tmp2(tmp3[3]).t["32yow9"]);
    const items1 = [closure_4(tmp2(tmp3[13]).Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", children: null };
    const intl2 = tmp2(tmp3[3]).intl;
    obj5.children = intl2.string(tmp2(tmp3[3]).t.l3doVX);
    items1[1] = closure_4(tmp2(tmp3[13]).Text, obj5);
    obj3.children = items1;
    const items2 = [closure_5(View, obj3), ];
    const obj6 = { variant: "secondary", text: null, onPress: null };
    const intl3 = tmp2(tmp3[3]).intl;
    obj6.text = intl3.string(tmp2(tmp3[3]).t["ztO+l+"]);
    obj6.onPress = function onPress() {
      preset.updatePreset(notificationSettingsPresetUtils.Presets.MENTIONS);
    };
    items2[1] = closure_4(tmp2(tmp3[14]).Button, obj6);
    obj2.children = items2;
    let tmp7 = closure_5(View, obj2);
  } else {
    const obj7 = { variant: "experimental_Large", state: segmentedControlState };
    tmp7 = closure_4(tmp2(tmp3[15]).SegmentedControl, obj7);
  }
  return tmp7;
});
fn(558);
let obj3 = { padding: 16, minHeight: 82, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg + 8, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_ACTIVE_BG };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsGuildPresets(guildId) {
  _require = guildId;
  const cResult = require("c").c(5);
  const obj = require("c");
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  if (cResult[0] !== guildId.guildId) {
    const fn = function s(arg0) {
      return notificationSettingsGuildFlagUtils.updateGuildPreset(guildId.guildId, arg0);
    };
    cResult[0] = guildId.guildId;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildPresetSettings.preset) {
    if (cResult[3] === tmp3) {
      let tmp4 = cResult[4];
    }
    return tmp4;
  }
  const tmp5 = closure_4(closure_8, { preset: guildPresetSettings.preset, updatePreset: tmp3 });
  cResult[2] = guildPresetSettings.preset;
  cResult[3] = tmp3;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : (function NotificationSettingsGuildPresets(guildId) {
  _require = guildId;
  const obj = {
    preset: require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId).preset,
    updatePreset(arg0) {
      return notificationSettingsGuildFlagUtils.updateGuildPreset(guildId.guildId, arg0);
    }
  };
  return closure_4(closure_8, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsPresets.tsx");

export const NotificationSettingsGuildPresets = tmp3;
export const NotificationSettingsChannelPresets = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsChannelPresets(channel) {
  _require = channel;
  const cResult = require("c").c(6);
  const obj = require("c");
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  if (cResult[0] === channel.channel.guild_id) {
    if (cResult[1] === channel.channel.id) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === channelPresetSettings.preset) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
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
    return notficationSettingsChannelFlagUtils.updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
  };
  cResult[0] = channel.channel.guild_id;
  cResult[1] = channel.channel.id;
  cResult[2] = fn;
  tmp3 = fn;
  const obj2 = require("notficationSettingsChannelFlagUtils");
}) : (function NotificationSettingsChannelPresets(channel) {
  _require = channel;
  const obj = {
    preset: require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel).preset,
    updatePreset(arg0) {
      return notficationSettingsChannelFlagUtils.updateChannelPreset(channel.channel.guild_id, channel.channel.id, arg0);
    }
  };
  return closure_4(closure_8, obj);
});