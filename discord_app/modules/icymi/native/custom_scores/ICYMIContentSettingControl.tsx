// discord_app/modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useSegmentedControlState from "useSegmentedControlState" /* 8799 */;
import generateHydrationId from "generateHydrationId" /* 9056 */;
import SegmentedControl from "SegmentedControl" /* 10096 */;
import registerAssetDefault from "registerAsset" /* 15716 */;
import registerAssetDefault2 from "registerAsset" /* 15717 */;
import registerAssetDefault3 from "registerAsset" /* 15718 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "updateUserGuildSettingsInternal" /* 5043 */;
import closure_7 from "filterStaffGuild" /* 9044 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function ContentSettingsControl(initialValue) {
  ({ onValueUpdated: require, disabled } = initialValue);
  importDefault = undefined;
  const tmp = callback3();
  [tmp3, c1] = callback(React.useState(initialValue.initialValue), 2);
  let obj = { label: null, id: "-1", icon: null, page: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.rdt65I);
  obj = { source: registerAssetDefault, style: null };
  const items = [tmp.icon, ];
  let iconSelected = null;
  if (tmp3 === generateHydrationId.ICYMICustomScore.LESS) {
    iconSelected = tmp.iconSelected;
  }
  items[1] = iconSelected;
  obj[1] = items;
  obj[2] = closure_8(Button.Icon, obj);
  const items1 = [obj, , ];
  obj = { label: null, id: "0", icon: null, page: null };
  const intl2 = tmp4(1236).intl;
  obj[0] = intl2.string(getSystemLocale.t.SnrG00);
  obj1 = { source: registerAssetDefault2, style: null };
  const items2 = [tmp.icon, ];
  let iconSelected1 = null;
  if (tmp3 === generateHydrationId.ICYMICustomScore.DEFAULT) {
    iconSelected1 = tmp.iconSelected;
  }
  items2[1] = iconSelected1;
  obj1[1] = items2;
  obj[2] = closure_8(Button.Icon, obj1);
  items1[1] = obj;
  const obj2 = { label: null, id: "1", icon: null, page: null };
  const intl3 = tmp4(1236).intl;
  obj2[0] = intl3.string(getSystemLocale.t.Rxe3jF);
  const obj3 = { source: registerAssetDefault3, style: null };
  const items3 = [tmp.icon, ];
  let iconSelected2 = null;
  if (tmp3 === generateHydrationId.ICYMICustomScore.MORE) {
    iconSelected2 = tmp.iconSelected;
  }
  items3[1] = iconSelected2;
  obj3[1] = items3;
  obj2[2] = closure_8(Button.Icon, obj3);
  items1[2] = obj2;
  const tmp2 = callback(React.useState(initialValue.initialValue), 2);
  const obj4 = {
    pageWidth: 0,
    onSetActiveIndex(arg0) {
      let MORE = closure_1_0(closure_1_2[8]).ICYMICustomScore.DEFAULT;
      if (0 === arg0) {
        MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
      } else if (2 === arg0) {
        MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
      }
      _undefined(MORE);
      callback(MORE);
    },
    items: items1,
    defaultIndex: null
  };
  let num = 0;
  if (generateHydrationId.ICYMICustomScore.LESS !== tmp3) {
    num = 1;
    if (tmp4(9056).ICYMICustomScore.MORE === tmp3) {
      num = 2;
    }
  }
  obj4[3] = num;
  let obj5 = null;
  const segmentedControlState = useSegmentedControlState.useSegmentedControlState(obj4);
  if (disabled) {
    obj5 = { opacity: 0.7 };
  }
  const obj6 = { style: obj5, pointerEvents: null, children: null };
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj6[1] = str;
  obj6[2] = closure_8(SegmentedControl.SegmentedControl, { variant: "experimental_Large", state: segmentedControlState });
  return closure_8(View, obj6);
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { customScoreWrapper: null, warningText: null, icon: null, iconSelected: null, muted: null };
createCacheKey = { marginVertical: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_12 };
let obj1 = { marginTop: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[2] = { width: 24, height: 24, tintColor: ThemesDefault.colors.TEXT_MUTED };
let obj2 = { width: 24, height: 24, tintColor: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[3] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj3 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginTop: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = function GuildScoreSettings(guild) {
  guild = guild.guild;
  let id;
  c1 = undefined;
  id = guild.id;
  let obj = id(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getCustomGuildScore(id));
  obj1 = id(9056);
  const numberToCustomScoreResult = obj1.numberToCustomScore(stateFromStores);
  c1 = numberToCustomScoreResult;
  const tmp5 = numberToCustomScoreResult === id(9056).ICYMICustomScore.MUTED;
  const items1 = [id];
  const items2 = [numberToCustomScoreResult, id];
  const callback = React.useCallback((arg0) => {
    let obj = _undefined(closure_1_2[17]);
    obj = { guildId: id, guildScore: null };
    const customScoreToNumber = id(closure_1_2[8]).customScoreToNumber;
    const ICYMICustomScore = id(closure_1_2[8]).ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj[1] = customScoreToNumberResult;
    obj.customScoreGuild(obj);
  }, items1);
  const callback1 = React.useCallback((DEFAULT) => {
    if (_undefined !== DEFAULT) {
      let obj = _undefined(closure_1_2[17]);
      obj = { guildId: null, guildScore: null };
      obj[0] = id;
      obj[1] = id(closure_1_2[8]).customScoreToNumber(DEFAULT);
      obj.customScoreGuild(obj);
      const obj3 = id(closure_1_2[8]);
    }
  }, items2);
  const tmp8 = callback3();
  obj = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = id(1236).intl;
  obj[2] = intl.string(id(1236).t.Clq6km);
  const items3 = [callback2(id(4734).Text, obj), , , , ];
  obj = { variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = id(1236).intl;
  obj1 = { guildName: guild.name };
  obj[2] = intl2.format(id(1236).t["0DhU2P"], obj1);
  items3[1] = callback2(id(4734).Text, obj);
  let tmp11Result = null;
  if (!tmp5) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp8.customScoreWrapper;
    let obj3 = { initialValue: null, onValueUpdated: null };
    obj3[0] = numberToCustomScoreResult;
    obj3[1] = callback1;
    obj2[1] = tmp11(ContentSettingsControl, obj3);
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
  const intl3 = tmp(1236).intl;
  obj6[2] = intl3.string(id(1236).t.oujX73);
  obj5[1] = callback2(id(7178).TableSwitchRow, obj6);
  items3[3] = callback2(View, obj5);
  const obj7 = { variant: "text-xs/normal", color: "text-muted", style: tmp8.warningText, children: null };
  const intl4 = tmp(1236).intl;
  obj7[3] = intl4.string(id(1236).t.vRVs07);
  items3[4] = callback2(id(4734).Text, obj7);
  obj4[0] = items3;
  return closure_9(View, obj4);
};
export const ChannelScoreSettings = function ChannelScoreSettings(channel) {
  channel = channel.channel;
  let id;
  let id2;
  let stateFromStores;
  id = channel.guild.id;
  id2 = channel.id;
  let obj = id(stateFromStores[16]);
  let items = [closure_7, closure_6];
  stateFromStores = obj.useStateFromStores(items, () => {
    const customChannelScore = closure_1_7.getCustomChannelScore(id, id2);
    if (customChannelScore !== id(stateFromStores[8]).ICYMICustomScore.UNKNOWN) {
      return customChannelScore;
    } else {
      const ICYMICustomScore = id(stateFromStores[8]).ICYMICustomScore;
      const isChannelMutedResult = closure_1_6.isChannelMuted(id, id2);
    }
  });
  obj1 = id(stateFromStores[16]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_7.getCustomGuildScore(id));
  let obj2 = id(stateFromStores[8]);
  const tmp4 = id2(stateFromStores[20])(channel, true);
  const tmp7 = obj2.numberToCustomScore(stateFromStores1) === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const tmp8 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
  const items2 = [stateFromStores, id, id2];
  const items3 = [id2, id];
  const callback = React.useCallback((DEFAULT) => {
    if (stateFromStores !== DEFAULT) {
      let obj = id2(stateFromStores[17]);
      obj = { guildId: null, channelScores: null };
      obj[0] = id;
      obj = { channelId: null, score: null };
      obj[0] = id2;
      obj[1] = id(stateFromStores[8]).customScoreToNumber(DEFAULT);
      const items = [obj];
      obj[1] = items;
      obj.customScoreGuild(obj);
      const obj4 = id(stateFromStores[8]);
    }
  }, items2);
  const callback1 = React.useCallback((arg0) => {
    let obj = id2(stateFromStores[17]);
    obj = { guildId: id, channelScores: null };
    obj = { channelId: id2, score: null };
    const customScoreToNumber = id(stateFromStores[8]).customScoreToNumber;
    const ICYMICustomScore = id(stateFromStores[8]).ICYMICustomScore;
    if (arg0) {
      let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
    } else {
      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
    }
    obj[1] = customScoreToNumberResult;
    const items = [obj];
    obj[1] = items;
    obj.customScoreGuild(obj);
  }, items3);
  const tmp11 = callback3();
  obj = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = id(stateFromStores[9]).intl;
  obj[2] = intl.string(id(stateFromStores[9]).t["0jRosn"]);
  const items4 = [callback2(id(stateFromStores[18]).Text, obj), , , , ];
  obj = { variant: "text-xs/normal", color: "text-default", children: null };
  const intl2 = id(stateFromStores[9]).intl;
  obj[2] = intl2.format(id(stateFromStores[9]).t.KzkF1j, { channelName: tmp4 });
  items4[1] = callback2(id(stateFromStores[18]).Text, obj);
  let tmp14Result = null;
  if (!tmp8) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp11.customScoreWrapper;
    obj2 = { disabled: null, initialValue: null, onValueUpdated: null };
    obj2[0] = tmp7;
    obj2[1] = stateFromStores;
    obj2[2] = callback;
    obj1[1] = tmp14(ContentSettingsControl, obj2);
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
  obj5[2] = intl3.string(id(stateFromStores[9]).t.W2aJRS);
  obj5[3] = tmp7;
  obj4[1] = callback2(id(stateFromStores[19]).TableSwitchRow, obj5);
  items4[3] = callback2(View, obj4);
  const obj6 = { variant: "text-xs/normal", color: "text-muted", style: tmp11.warningText, children: null };
  const intl4 = tmp(tmp2[9]).intl;
  obj6[3] = intl4.string(id(stateFromStores[9]).t["5lP6Ax"]);
  items4[4] = callback2(id(stateFromStores[18]).Text, obj6);
  obj3[0] = items4;
  return closure_9(View, obj3);
};