// === Module 16459: ICYMIContentSettingControl ===

// Module 16459 (ICYMIContentSettingControl)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ICYMIUtils from "ICYMIUtils" /* 8350 */;
import SegmentedControlState from "SegmentedControlState" /* 9792 */;
import SegmentedControl from "SegmentedControl" /* 9793 */;
import _modDef16460 from "module_16460" /* 16460 */;
import _modDef16461 from "module_16461" /* 16461 */;
import _modDef16462 from "module_16462" /* 16462 */;
import NativeICYMIActionCreatorsDefault from "NativeICYMIActionCreators" /* 16463 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

require = fn;
function ContentSettingsControl(initialValue) {
  ({ onValueUpdated: require, disabled } = initialValue);
  importDefault = undefined;
  const tmp = closure_10();
  [tmp3, c1] = _slicedToArray(noop.useState(initialValue.initialValue), 2);
  let obj = { label: null, id: "-1", icon: null, page: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.rdt65I);
  obj = { source: _modDef16460, style: null };
  const items = [tmp.icon, ];
  let iconSelected = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.LESS) {
    iconSelected = tmp.iconSelected;
  }
  items[1] = iconSelected;
  obj.style = items;
  obj.icon = closure_8(native.Icon, obj);
  const items1 = [obj, , ];
  obj = { label: null, id: "0", icon: null, page: null };
  const intl2 = tmp4(1114).intl;
  obj.label = intl2.string(util.t.SnrG00);
  const obj1 = { source: _modDef16461, style: null };
  const items2 = [tmp.icon, ];
  let iconSelected1 = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.DEFAULT) {
    iconSelected1 = tmp.iconSelected;
  }
  items2[1] = iconSelected1;
  obj1.style = items2;
  obj.icon = closure_8(native.Icon, obj1);
  items1[1] = obj;
  const obj2 = { label: null, id: "1", icon: null, page: null };
  const intl3 = tmp4(1114).intl;
  obj2.label = intl3.string(util.t.Rxe3jF);
  const obj3 = { source: _modDef16462, style: null };
  const items3 = [tmp.icon, ];
  let iconSelected2 = null;
  if (tmp3 === ICYMIUtils.ICYMICustomScore.MORE) {
    iconSelected2 = tmp.iconSelected;
  }
  items3[1] = iconSelected2;
  obj3.style = items3;
  obj2.icon = closure_8(native.Icon, obj3);
  items1[2] = obj2;
  const tmp2 = _slicedToArray(noop.useState(initialValue.initialValue), 2);
  const obj4 = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let MORE = ICYMIUtils.ICYMICustomScore.DEFAULT;
      if (0 === arg0) {
        MORE = tmp(8350).ICYMICustomScore.LESS;
      } else if (2 === arg0) {
        MORE = tmp(8350).ICYMICustomScore.MORE;
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
    if (tmp4(8350).ICYMICustomScore.MORE === tmp3) {
      num = 2;
    }
  }
  obj4.defaultIndex = num;
  let obj5 = null;
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj4);
  if (disabled) {
    obj5 = { opacity: 0.7 };
  }
  const obj6 = { style: obj5, pointerEvents: null, children: null };
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj6.pointerEvents = str;
  obj6.children = closure_8(SegmentedControl.SegmentedControl, { variant: "experimental_Large", state: segmentedControlState });
  return closure_8(View, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { customScoreWrapper: null, warningText: null, icon: null, iconSelected: null, muted: null };
createStyles = { marginVertical: nativeDefault.space.PX_16 };
createStyles.customScoreWrapper = createStyles;
createStyles.warningText = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
let size = { width: 24, height: 24, tintColor: nativeDefault.colors.TEXT_MUTED };
createStyles.icon = size;
let obj1 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
createStyles.iconSelected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles.muted = { marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = function GuildScoreSettings(guild) {
  guild = guild.guild;
  const id = guild.id;
  let obj = id(504);
  const items = [ICYMIStore];
  const stateFromStores = obj.useStateFromStores(items, () => ICYMIStore.getCustomGuildScore(id));
  let obj1 = id(8350);
  const numberToCustomScoreResult = obj1.numberToCustomScore(stateFromStores);
  c1 = numberToCustomScoreResult;
  const tmp5 = numberToCustomScoreResult === id(8350).ICYMICustomScore.MUTED;
  const items1 = [id];
  const items2 = [numberToCustomScoreResult, id];
  const callback = noop.useCallback((arg0) => {
    const obj = { guildId: id, guildScore: null };
    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj.guildScore = customScoreToNumberResult;
    obj.customScoreGuild(obj);
  }, items1);
  const callback1 = noop.useCallback((DEFAULT) => {
    if (c1 !== DEFAULT) {
      const obj = { guildId: id, guildScore: ICYMIUtils.customScoreToNumber(DEFAULT) };
      obj.customScoreGuild(obj);
    }
  }, items2);
  const tmp8 = closure_10();
  obj = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = id(1114).intl;
  obj.children = intl.string(id(1114).t.Clq6km);
  const items3 = [closure_8(id(4556).Text, obj), , , , ];
  obj = { variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = id(1114).intl;
  obj1 = { guildName: guild.name };
  obj.children = intl2.format(id(1114).t["0DhU2P"], obj1);
  items3[1] = closure_8(id(4556).Text, obj);
  let tmp11Result = null;
  if (!tmp5) {
    const obj2 = { style: tmp8.customScoreWrapper, children: null };
    let obj3 = { initialValue: numberToCustomScoreResult, onValueUpdated: callback1 };
    obj2.children = tmp11(ContentSettingsControl, obj3);
    tmp11Result = tmp11(tmp10, obj2);
  }
  items3[2] = tmp11Result;
  let muted = tmp5;
  if (tmp5) {
    muted = tmp8.muted;
  }
  const obj4 = { children: null };
  const obj5 = { style: muted, children: null };
  const obj6 = { value: !tmp5, onValueChange: callback, label: null, start: true, end: true };
  const intl3 = tmp(1114).intl;
  obj6.label = intl3.string(id(1114).t.oujX73);
  obj5.children = closure_8(id(7201).TableSwitchRow, obj6);
  items3[3] = closure_8(View, obj5);
  const obj7 = { variant: "text-xs/normal", color: "text-muted", style: tmp8.warningText, children: null };
  const intl4 = tmp(1114).intl;
  obj7.children = intl4.string(id(1114).t.vRVs07);
  items3[4] = closure_8(id(4556).Text, obj7);
  obj4.children = items3;
  return closure_9(View, obj4);
};
export const ChannelScoreSettings = function ChannelScoreSettings(channel) {
  channel = channel.channel;
  let stateFromStores;
  const id = channel.guild.id;
  const id2 = channel.id;
  let obj = id(stateFromStores[16]);
  let items = [ICYMIStore, UserGuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
    if (customChannelScore !== ICYMIUtils.ICYMICustomScore.UNKNOWN) {
      return customChannelScore;
    } else {
      const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
      const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(id, id2);
    }
  });
  let obj1 = id(stateFromStores[16]);
  const items1 = [ICYMIStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ICYMIStore.getCustomGuildScore(id));
  let obj2 = id(stateFromStores[8]);
  const tmp4 = id2(stateFromStores[20])(channel, true);
  const tmp7 = obj2.numberToCustomScore(stateFromStores1) === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const tmp8 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const items2 = [stateFromStores, id, id2];
  const items3 = [id2, id];
  const callback = noop.useCallback((DEFAULT) => {
    if (stateFromStores !== DEFAULT) {
      let obj = { guildId: id, channelScores: null };
      obj = { channelId: id2, score: ICYMIUtils.customScoreToNumber(DEFAULT) };
      const items = [obj];
      obj.channelScores = items;
      obj.customScoreGuild(obj);
    }
  }, items2);
  const callback1 = noop.useCallback((arg0) => {
    let obj = { guildId: id, channelScores: null };
    obj = { channelId: id2, score: null };
    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj.score = customScoreToNumberResult;
    const items = [obj];
    obj.channelScores = items;
    obj.customScoreGuild(obj);
  }, items3);
  const tmp11 = closure_10();
  obj = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = id(stateFromStores[9]).intl;
  obj.children = intl.string(id(stateFromStores[9]).t["0jRosn"]);
  const items4 = [closure_8(id(stateFromStores[18]).Text, obj), , , , ];
  obj = { variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = id(stateFromStores[9]).intl;
  obj.children = intl2.format(id(stateFromStores[9]).t.KzkF1j, { channelName: tmp4 });
  items4[1] = closure_8(id(stateFromStores[18]).Text, obj);
  let tmp14Result = null;
  if (!tmp8) {
    obj1 = { style: tmp11.customScoreWrapper, children: null };
    obj2 = { disabled: tmp7, initialValue: stateFromStores, onValueUpdated: callback };
    obj1.children = tmp14(ContentSettingsControl, obj2);
    tmp14Result = tmp14(tmp13, obj1);
  }
  items4[2] = tmp14Result;
  let muted = tmp8;
  if (tmp8) {
    muted = tmp11.muted;
  }
  const obj3 = { children: null };
  let obj4 = { style: muted, children: null };
  const obj5 = { value: !tmp8, onValueChange: callback1, label: null, disabled: null, start: true, end: true };
  const intl3 = tmp(tmp2[9]).intl;
  obj5.label = intl3.string(id(stateFromStores[9]).t.W2aJRS);
  obj5.disabled = tmp7;
  obj4.children = closure_8(id(stateFromStores[19]).TableSwitchRow, obj5);
  items4[3] = closure_8(View, obj4);
  const obj6 = { variant: "text-xs/normal", color: "text-muted", style: tmp11.warningText, children: null };
  const intl4 = tmp(tmp2[9]).intl;
  obj6.children = intl4.string(id(stateFromStores[9]).t["5lP6Ax"]);
  items4[4] = closure_8(id(stateFromStores[18]).Text, obj6);
  obj3.children = items4;
  return closure_9(View, obj3);
};