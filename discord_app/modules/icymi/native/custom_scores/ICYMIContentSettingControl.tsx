// === Module 16886: ICYMIContentSettingControl ===

// Module 16886 (ICYMIContentSettingControl)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import ICYMIUtils from "ICYMIUtils" /* 8700 */;
import SegmentedControlState from "SegmentedControlState" /* 9974 */;
import SegmentedControl from "SegmentedControl" /* 9975 */;
import _modDef16887 from "module_16887" /* 16887 */;
import _modDef16888 from "module_16888" /* 16888 */;
import _modDef16889 from "module_16889" /* 16889 */;
import NativeICYMIActionCreatorsDefault from "NativeICYMIActionCreators" /* 16890 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;
import ICYMIStore from "ICYMIStore" /* 8685 */;

require = fn;
function ContentSettingsControl(initialValue) {
  ({ onValueUpdated: require, disabled } = initialValue);
  importDefault = undefined;
  const tmp = closure_10();
  [tmp3, c1] = noop.useState(initialValue.initialValue);
  const obj = { label: null, id: "-1", icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.rdt65I);
  const obj2 = { source: _modDef16887, style: null };
  const items = [tmp.icon, ];
  let iconSelected = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.LESS) {
    iconSelected = tmp.iconSelected;
  }
  items[1] = iconSelected;
  obj2.style = items;
  obj.icon = closure_8(native.Icon, obj2);
  const items1 = [obj, , ];
  const obj3 = { label: null, id: "0", icon: null, page: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.SnrG00);
  const obj4 = { source: _modDef16888, style: null };
  const items2 = [tmp.icon, ];
  let iconSelected1 = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.DEFAULT) {
    iconSelected1 = tmp.iconSelected;
  }
  items2[1] = iconSelected1;
  obj4.style = items2;
  obj3.icon = closure_8(native.Icon, obj4);
  items1[1] = obj3;
  const obj5 = { label: null, id: "1", icon: null, page: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.Rxe3jF);
  const obj6 = { source: _modDef16889, style: null };
  const items3 = [tmp.icon, ];
  let iconSelected2 = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.MORE) {
    iconSelected2 = tmp.iconSelected;
  }
  items3[1] = iconSelected2;
  obj6.style = items3;
  obj5.icon = closure_8(native.Icon, obj6);
  items1[2] = obj5;
  const tmp2 = _slicedToArray(noop.useState(initialValue.initialValue), 2);
  const obj7 = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let MORE = ICYMIUtils.ICYMICustomScore.DEFAULT;
      if (0 === arg0) {
        MORE = ICYMIUtils.ICYMICustomScore.LESS;
      } else if (2 === arg0) {
        MORE = ICYMIUtils.ICYMICustomScore.MORE;
      }
      _undefined(MORE);
      closure_1_0(MORE);
    },
    items: items1,
    defaultIndex: null
  };
  let num = 0;
  if (ICYMIUtils.ICYMICustomScore.LESS !== tmp3) {
    num = 1;
    if (ICYMIUtils.ICYMICustomScore.MORE === tmp3) {
      num = 2;
    }
  }
  obj7.defaultIndex = num;
  let obj8 = null;
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj7);
  if (disabled) {
    obj8 = { opacity: 0.7 };
  }
  const obj9 = { style: obj8, pointerEvents: null, children: null };
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj9.pointerEvents = str;
  obj9.children = closure_8(SegmentedControl.SegmentedControl, { variant: "experimental_Large", state: segmentedControlState });
  return closure_8(View, obj9);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { customScoreWrapper: { marginVertical: nativeDefault.space.PX_16 }, warningText: null, icon: null, iconSelected: null, muted: null };
let obj3 = { marginVertical: nativeDefault.space.PX_16 };
obj2.warningText = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
let size = { width: 24, height: 24, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.icon = size;
let obj4 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
obj2.iconSelected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.muted = { marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = function GuildScoreSettings(guild) {
  guild = guild.guild;
  const id = guild.id;
  const items = [ICYMIStore];
  const stateFromStores = id(504).useStateFromStores(items, () => ICYMIStore.getCustomGuildScore(id));
  let obj = id(504);
  const numberToCustomScoreResult = id(8700).numberToCustomScore(stateFromStores);
  c1 = numberToCustomScoreResult;
  const tmp5 = numberToCustomScoreResult === id(8700).ICYMICustomScore.MUTED;
  const items1 = [id];
  const items2 = [numberToCustomScoreResult, id];
  const callback = noop.useCallback((arg0) => {
    const obj2 = { guildId: id, guildScore: null };
    const obj = NativeICYMIActionCreatorsDefault;
    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj2.guildScore = customScoreToNumberResult;
    obj.customScoreGuild(obj2);
  }, items1);
  const callback1 = noop.useCallback((DEFAULT) => {
    if (c1 !== DEFAULT) {
      const obj2 = { guildId: id, guildScore: null };
      const obj = NativeICYMIActionCreatorsDefault;
      obj2.guildScore = ICYMIUtils.customScoreToNumber(DEFAULT);
      obj.customScoreGuild(obj2);
    }
  }, items2);
  const tmp8 = closure_10();
  let obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = id(1115).intl;
  obj3.children = intl.string(id(1115).t.Clq6km);
  const items3 = [closure_8(id(4825).Text, obj3), , , , ];
  const obj4 = { variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = id(1115).intl;
  obj4.children = intl2.format(id(1115).t["0DhU2P"], { guildName: guild.name });
  items3[1] = closure_8(id(4825).Text, obj4);
  let tmp11Result = null;
  if (!tmp5) {
    const obj6 = { style: tmp8.customScoreWrapper, children: null };
    const obj7 = { initialValue: numberToCustomScoreResult, onValueUpdated: callback1 };
    obj6.children = closure_8(ContentSettingsControl, obj7);
    tmp11Result = closure_8(View, obj6);
  }
  items3[2] = tmp11Result;
  let muted = tmp5;
  if (tmp5) {
    muted = tmp8.muted;
  }
  const obj8 = { children: null };
  const obj9 = { style: muted, children: null };
  const obj10 = { value: !tmp5, onValueChange: callback, label: null, start: true, end: true };
  const intl3 = tmp(1115).intl;
  obj10.label = intl3.string(id(1115).t.oujX73);
  obj9.children = closure_8(id(7533).TableSwitchRow, obj10);
  items3[3] = closure_8(View, obj9);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp8.warningText, children: null };
  const intl4 = tmp(1115).intl;
  obj11.children = intl4.string(id(1115).t.vRVs07);
  items3[4] = closure_8(id(4825).Text, obj11);
  obj8.children = items3;
  return closure_9(View, obj8);
};
export const ChannelScoreSettings = function ChannelScoreSettings(channel) {
  channel = channel.channel;
  let stateFromStores;
  const id = channel.guild.id;
  const id2 = channel.id;
  let items = [ICYMIStore, UserGuildSettingsStore];
  stateFromStores = id(stateFromStores[16]).useStateFromStores(items, () => {
    const customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
    if (customChannelScore !== ICYMIUtils.ICYMICustomScore.UNKNOWN) {
      return customChannelScore;
    } else {
      const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
      const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(id, id2);
    }
  });
  let obj = id(stateFromStores[16]);
  const tmp4 = id2(stateFromStores[20])(channel, true);
  const items1 = [ICYMIStore];
  const stateFromStores1 = id(stateFromStores[16]).useStateFromStores(items1, () => ICYMIStore.getCustomGuildScore(id));
  let obj2 = id(stateFromStores[16]);
  let obj3 = id(stateFromStores[8]);
  const tmp7 = id(stateFromStores[8]).numberToCustomScore(stateFromStores1) === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const tmp8 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const items2 = [stateFromStores, id, id2];
  const items3 = [id2, id];
  const callback = noop.useCallback((DEFAULT) => {
    if (stateFromStores !== DEFAULT) {
      const obj2 = { guildId: id, channelScores: null };
      const obj3 = { channelId: id2, score: null };
      const obj = NativeICYMIActionCreatorsDefault;
      obj3.score = ICYMIUtils.customScoreToNumber(DEFAULT);
      const items = [obj3];
      obj2.channelScores = items;
      obj.customScoreGuild(obj2);
    }
  }, items2);
  const callback1 = noop.useCallback((arg0) => {
    const obj2 = { guildId: id, channelScores: null };
    const obj3 = { channelId: id2, score: null };
    const obj = NativeICYMIActionCreatorsDefault;
    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj3.score = customScoreToNumberResult;
    const items = [obj3];
    obj2.channelScores = items;
    obj.customScoreGuild(obj2);
  }, items3);
  const tmp11 = closure_10();
  let obj4 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = id(stateFromStores[9]).intl;
  obj4.children = intl.string(id(stateFromStores[9]).t["0jRosn"]);
  const items4 = [closure_8(id(stateFromStores[18]).Text, obj4), , , , ];
  const obj5 = { variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = id(stateFromStores[9]).intl;
  obj5.children = intl2.format(id(stateFromStores[9]).t.KzkF1j, { channelName: tmp4 });
  items4[1] = closure_8(id(stateFromStores[18]).Text, obj5);
  let tmp14Result = null;
  if (!tmp8) {
    const obj6 = { style: tmp11.customScoreWrapper, children: null };
    const obj7 = { disabled: tmp7, initialValue: stateFromStores, onValueUpdated: callback };
    obj6.children = closure_8(ContentSettingsControl, obj7);
    tmp14Result = closure_8(View, obj6);
  }
  items4[2] = tmp14Result;
  let muted = tmp8;
  if (tmp8) {
    muted = tmp11.muted;
  }
  const obj8 = { children: null };
  const obj9 = { style: muted, children: null };
  const obj10 = { value: !tmp8, onValueChange: callback1, label: null, disabled: null, start: true, end: true };
  const intl3 = tmp(tmp2[9]).intl;
  obj10.label = intl3.string(id(stateFromStores[9]).t.W2aJRS);
  obj10.disabled = tmp7;
  obj9.children = closure_8(id(stateFromStores[19]).TableSwitchRow, obj10);
  items4[3] = closure_8(View, obj9);
  const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp11.warningText, children: null };
  const intl4 = tmp(tmp2[9]).intl;
  obj11.children = intl4.string(id(stateFromStores[9]).t["5lP6Ax"]);
  items4[4] = closure_8(id(stateFromStores[18]).Text, obj11);
  obj8.children = items4;
  return closure_9(View, obj8);
};