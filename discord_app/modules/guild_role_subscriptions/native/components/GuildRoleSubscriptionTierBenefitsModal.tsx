// === Module 19834: GuildRoleSubscriptionTierBenefitsModal ===

// Module 19834 (GuildRoleSubscriptionTierBenefitsModal)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import FastImageDefault from "FastImage" /* 5707 */;
import TableRow from "TableRow" /* 6963 */;
import TableRowGroup from "TableRowGroup" /* 7047 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11249 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17093 */;
import useRoleSubscriptionFormatDefault from "useRoleSubscriptionFormat" /* 19814 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19824 */;
import EmojiAliasDefault from "EmojiAlias" /* 19835 */;
import useRoleSubscriptionEmojisDefault from "useRoleSubscriptionEmojis" /* 19840 */;
import GuildRoleSubscriptionsModalActionCreatorsAll from "GuildRoleSubscriptionsModalActionCreators" /* 19841 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const AllChannelsSwitchDefault = tmp10(19850);
require = fn;
get_ActivityIndicator = fn(17);
({ SectionList: metroRequire, View: closure_7 } = get_ActivityIndicator);
const AllChannelAccessOptions = fn(17094).AllChannelAccessOptions;
let useGroupIsFullGateState = fn(19822).useGroupIsFullGateState;
const GuildRoleSubscriptionsConstants = fn(17071);
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: closure_11 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { listContainer: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingBottom: 16 }, sectionTitle: null, listFooterContainer: null, allChannelsSwitch: null, emojiImage: null, addBenefitRowAfterBenefits: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingBottom: 16 };
obj2.sectionTitle = { marginTop: nativeDefault.space.PX_24 };
obj2.listFooterContainer = { marginVertical: 24 };
obj2.allChannelsSwitch = { marginTop: 24 };
obj2.emojiImage = { width: 24, height: 24 };
let obj4 = { marginTop: nativeDefault.space.PX_24 };
obj2.addBenefitRowAfterBenefits = { marginTop: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj2);
const constants3 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddBenefitRow(hasBenefits) {
  const cResult = c.c(8);
  ({ label, onPress, disabled } = hasBenefits);
  let tmp4 = undefined !== disabled;
  if (tmp4) {
    tmp4 = disabled;
  }
  if (hasBenefits.hasBenefits) {
    const addBenefitRowAfterBenefits = closure_14().addBenefitRowAfterBenefits;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "md", color: nativeDefault.colors.ICON_BRAND };
    const tmp8 = __initData(CirclePlusIcon.CirclePlusIcon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4) {
    if (cResult[2] === label) {
      if (cResult[3] === onPress) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === addBenefitRowAfterBenefits) {
        if (cResult[6] === tmp9) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
      const obj3 = { style: addBenefitRowAfterBenefits, children: tmp9 };
      const tmp14 = __initData(React5, obj3);
      cResult[5] = addBenefitRowAfterBenefits;
      cResult[6] = tmp9;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    }
  }
  const tmp10 = __initData(TableRow.TableRow, { start: true, end: true, icon: first, label, onPress, disabled: tmp4 });
  cResult[1] = tmp4;
  cResult[2] = label;
  cResult[3] = onPress;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function AddBenefitRow(disabled) {
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let prop;
  if (disabled.hasBenefits) {
    prop = closure_14().addBenefitRowAfterBenefits;
  }
  const obj = { style: prop, children: null };
  const obj2 = { start: true, end: true, icon: __initData(CirclePlusIcon.CirclePlusIcon, { size: "md", color: nativeDefault.colors.ICON_BRAND }), label, onPress, disabled: flag };
  obj.children = __initData(TableRow.TableRow, obj2);
  return __initData(React5, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiBenefitRow(arg0) {
  const cResult = c.c(16);
  ({ emoji, start, end, disabled } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === emoji.animated) {
    if (cResult[1] === emoji.id) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj3 = { uri: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.emojiImage) {
      if (cResult[6] === tmp8) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] !== emoji.name) {
        const obj4 = { children: emoji.name };
        const tmp16 = __initData(EmojiAliasDefault, obj4);
        cResult[8] = emoji.name;
        cResult[9] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === disabled) {
        if (cResult[11] === end) {
          if (cResult[12] === start) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp13) {
                let tmp17 = cResult[15];
              }
              return tmp17;
            }
          }
        }
      }
      const obj5 = { start, end, icon: tmp9, label: tmp13, disabled };
      const tmp19 = __initData(TableRow.TableRow, obj5);
      cResult[10] = disabled;
      cResult[11] = end;
      cResult[12] = start;
      cResult[13] = tmp9;
      cResult[14] = tmp13;
      cResult[15] = tmp19;
      tmp17 = tmp19;
    }
    const obj6 = { style: tmp5, source: tmp8 };
    const tmp12 = __initData(FastImageDefault, obj6);
    cResult[5] = tmp4.emojiImage;
    cResult[6] = tmp8;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  const emojiURL = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  cResult[0] = emoji.animated;
  cResult[1] = emoji.id;
  cResult[2] = emojiURL;
  tmp6 = emojiURL;
  const obj7 = { id: emoji.id, animated: emoji.animated, size: 48 };
}) : (function EmojiBenefitRow(emoji) {
  emoji = emoji.emoji;
  ({ start, end, disabled } = emoji);
  const obj = { start, end, icon: null, label: null, disabled: null };
  const obj2 = { style: closure_14().emojiImage, source: null };
  const obj3 = { uri: null };
  const tmp = closure_14();
  const tmp2 = FastImageDefault;
  obj3.uri = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj2.source = obj3;
  obj.icon = __initData(tmp2, obj2);
  obj.label = __initData(EmojiAliasDefault, { children: emoji.name });
  obj.disabled = disabled;
  return __initData(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListFooterSection(onChangeTrialInterval) {
  const cResult = onChangeTrialInterval(576).c(26);
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  ({ trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp4 = closure_14();
  const tmp6 = options(17098)(onChangeTrialInterval.interval);
  options = tmp6.options;
  const selectedOption = tmp6.selectedOption;
  if (cResult[0] === onChangeTrialInterval) {
    if (cResult[1] === options) {
      let tmp7 = cResult[2];
    }
    const roleSubscriptionSettingsDisabled = tmp(19818).useRoleSubscriptionSettingsDisabled();
    let tmp11 = !tmp9;
    if (null != selectedOption) {
      tmp11 = roleSubscriptionSettingsDisabled;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(tmp(1125).t["6anton"]);
      cResult[3] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult1 = intl2.string(tmp(1125).t.urVijS);
      cResult[4] = stringResult1;
      let tmp15 = stringResult1;
    } else {
      tmp15 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1125).intl;
      const stringResult2 = intl3.string(tmp(1125).t["+hTmdb"]);
      cResult[5] = stringResult2;
      let tmp17 = stringResult2;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] === tmp7) {
      if (cResult[7] === tmp9) {
        if (cResult[8] === roleSubscriptionSettingsDisabled) {
          let tmp19 = cResult[9];
        }
        if (cResult[10] === onChangeTrialInterval) {
          if (cResult[11] === selectedOption) {
            if (cResult[12] === options) {
              if (cResult[13] === tmp11) {
                let tmp22 = cResult[14];
              }
              if (cResult[15] === onChangeTrialActiveUserLimit) {
                if (cResult[16] === trialActiveUserLimit) {
                  if (cResult[17] === tmp11) {
                    let tmp25 = cResult[18];
                  }
                  if (cResult[19] === tmp19) {
                    if (cResult[20] === tmp22) {
                      if (cResult[21] === tmp25) {
                        let tmp28 = cResult[22];
                      }
                      if (cResult[23] === tmp4.listFooterContainer) {
                        if (cResult[24] === tmp28) {
                          let tmp31 = cResult[25];
                        }
                        return tmp31;
                      }
                      const obj2 = { style: tmp4.listFooterContainer, children: tmp28 };
                      const tmp34 = closure_12(closure_7, obj2);
                      cResult[23] = tmp4.listFooterContainer;
                      cResult[24] = tmp28;
                      cResult[25] = tmp34;
                      tmp31 = tmp34;
                    }
                  }
                  const obj3 = { title: tmp13, hasIcons: false, helperText: tmp15, children: null };
                  const items = [tmp19, tmp22, tmp25];
                  obj3.children = items;
                  const tmp30 = closure_13(tmp(7047).TableRowGroup, obj3);
                  cResult[19] = tmp19;
                  cResult[20] = tmp22;
                  cResult[21] = tmp25;
                  cResult[22] = tmp30;
                  tmp28 = tmp30;
                }
              }
              const obj4 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp11 };
              const tmp27 = closure_12(tmp5(19837), obj4);
              cResult[15] = onChangeTrialActiveUserLimit;
              cResult[16] = trialActiveUserLimit;
              cResult[17] = tmp11;
              cResult[18] = tmp27;
              tmp25 = tmp27;
            }
          }
        }
        const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp11 };
        const tmp24 = closure_12(tmp5(19836), obj5);
        cResult[10] = onChangeTrialInterval;
        cResult[11] = selectedOption;
        cResult[12] = options;
        cResult[13] = tmp11;
        cResult[14] = tmp24;
        tmp22 = tmp24;
      }
    }
    const obj6 = { label: tmp17, value: null != selectedOption, onValueChange: tmp7, disabled: roleSubscriptionSettingsDisabled };
    const tmp21 = closure_12(tmp(7355).TableSwitchRow, obj6);
    cResult[6] = tmp7;
    cResult[7] = null != selectedOption;
    cResult[8] = roleSubscriptionSettingsDisabled;
    cResult[9] = tmp21;
    tmp19 = tmp21;
    const tmpResult = tmp(19818);
  }
  const fn = function n(arg0) {
    const iter = options.find((isDefault) => isDefault.isDefault);
    value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  };
  cResult[0] = onChangeTrialInterval;
  cResult[1] = options;
  cResult[2] = fn;
  tmp7 = fn;
  const obj = onChangeTrialInterval(576);
}) : (function ListFooterSection(onChangeTrialInterval) {
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp4 = options(17098)(interval);
  options = tmp4.options;
  const selectedOption = tmp4.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = noop.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  const tmp = closure_14();
  const roleSubscriptionSettingsDisabled = onChangeTrialInterval(19818).useRoleSubscriptionSettingsDisabled();
  let tmp9 = !tmp6;
  if (null != selectedOption) {
    tmp9 = roleSubscriptionSettingsDisabled;
  }
  const obj2 = { style: tmp.listFooterContainer, children: null };
  const obj3 = { title: null, hasIcons: false, helperText: null, children: null };
  const intl = tmp7(1125).intl;
  obj3.title = intl.string(onChangeTrialInterval(1125).t["6anton"]);
  const intl2 = tmp7(1125).intl;
  obj3.helperText = intl2.string(onChangeTrialInterval(1125).t.urVijS);
  const obj4 = { label: null, value: null, onValueChange: null, disabled: null };
  const intl3 = tmp7(1125).intl;
  obj4.label = intl3.string(onChangeTrialInterval(1125).t["+hTmdb"]);
  obj4.value = null != selectedOption;
  obj4.onValueChange = callback;
  obj4.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [closure_12(onChangeTrialInterval(7355).TableSwitchRow, obj4), closure_12(options(19836), { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp9 }), closure_12(options(19837), { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp9 })];
  obj3.children = items1;
  obj2.children = closure_13(onChangeTrialInterval(7047).TableRowGroup, obj3);
  return closure_12(closure_7, obj2);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content(arg0) {
  const cResult = require("c").c(69);
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp4 = closure_14();
  _require = tmp4;
  let tmp7 = tmp5;
  if (true !== onlyIntangible) {
    tmp7 = tmp6;
  }
  let tmp8 = tmp5;
  if (true !== onlyIntangible) {
    tmp8 = tmp6;
  }
  let obj = require("c");
  const editStateContext = require("EditStateContextProvider").useEditStateContext();
  const editStateId = editStateContext.editStateId;
  const guildId = editStateContext.guildId;
  const tmpResult = require("EditStateContextProvider");
  const subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  let isFullServerGating = editStateId(tmp2[26])(guildId).isFullServerGating;
  let tmp14 = !tmp5;
  if (true !== onlyIntangible) {
    if (!isFullServerGating) {
      isFullServerGating = _slicedToArray(useGroupIsFullGateState(), 1)[0];
    }
    tmp14 = isFullServerGating;
  }
  const tmp12 = editStateId;
  const tmpResult3 = require("GuildRoleSubscriptionsHooks");
  let obj4 = guildId(role_id[27]);
  [tmp16, tmp17] = guildId(role_id[27]).useChannelBenefits(editStateId);
  _slicedToArray = tmp17;
  const tmp13Result = _slicedToArray(guildId(role_id[27]).useChannelBenefits(editStateId), 2);
  const obj5 = guildId(role_id[27]);
  [tmp19, tmp20] = guildId(role_id[27]).useIntangibleBenefits(editStateId);
  noop = tmp20;
  const tmp13Result6 = _slicedToArray(guildId(role_id[27]).useIntangibleBenefits(editStateId), 2);
  [initialTierEmojiIds] = guildId(role_id[27]).useTierEmojiIds(editStateId, guildId);
  const onSave = tmp23;
  const obj6 = guildId(role_id[27]);
  const obj7 = guildId(role_id[27]);
  [tmp25, tmp26] = guildId(role_id[27]).useTrialInterval(editStateId);
  const tmp13Result8 = _slicedToArray(guildId(role_id[27]).useTrialInterval(editStateId), 2);
  const obj8 = guildId(role_id[27]);
  [tmp28, tmp29] = guildId(role_id[27]).useTrialLimit(editStateId);
  const tmp13Result9 = _slicedToArray(guildId(role_id[27]).useTrialLimit(editStateId), 2);
  const obj9 = guildId(role_id[27]);
  [tmp31, tmp32] = guildId(role_id[27]).useChannelAccessFormat(editStateId, guildId);
  const tmp13Result10 = _slicedToArray(guildId(role_id[27]).useChannelAccessFormat(editStateId, guildId), 2);
  const roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  if (cResult[0] === tmp17) {
    if (cResult[1] === tmp20) {
      let tmp34 = cResult[2];
    }
    useGroupIsFullGateState = tmp34;
    if (cResult[3] === tmp17) {
      if (cResult[4] === tmp20) {
        let tmp35 = cResult[5];
      }
      closure_10 = tmp35;
      if (cResult[6] === tmp17) {
        if (cResult[7] === tmp20) {
          let tmp37 = cResult[8];
        }
        closure_11 = tmp37;
        const arr = tmp12(tmp2[28])(guildId);
        if (cResult[9] === arr) {
          if (cResult[10] === initialTierEmojiIds) {
            if (cResult[14] === tmp31 === roleSubscriptionSettingsDisabled.ALL_CHANNELS_ACCESS) {
              if (cResult[15] === tmp16) {
                if (cResult[16] === tmp39) {
                  if (cResult[17] === tmp5) {
                    if (cResult[18] === tmp8) {
                      if (cResult[19] === tmp6) {
                        if (cResult[20] === tmp19) {
                          let tmp44 = cResult[21];
                        }
                        if (cResult[28] === tmp34) {
                          if (cResult[29] === editStateId) {
                            if (cResult[30] === guildId) {
                              if (cResult[31] === tmp23) {
                                if (cResult[32] === role_id) {
                                  if (cResult[33] === initialTierEmojiIds) {
                                    let tmp54 = cResult[34];
                                  }
                                  closure_12 = tmp54;
                                  if (cResult[35] === tmp35) {
                                    if (cResult[36] === editStateId) {
                                      if (cResult[37] === guildId) {
                                        if (cResult[38] === tmp37) {
                                          let tmp55 = cResult[39];
                                        }
                                        closure_13 = tmp55;
                                        if (cResult[40] === guildId) {
                                          if (cResult[41] === tmp55) {
                                            if (cResult[42] === roleSubscriptionSettingsDisabled) {
                                              let tmp57 = cResult[43];
                                            }
                                            if (cResult[44] !== tmp4.sectionTitle) {
                                              function renderSectionHeader(section) {
                                                const type = section.section.type;
                                                const obj = { style: closure_0.sectionTitle, title: null };
                                                if (constants.CHANNEL === type) {
                                                  const intl2 = util.intl;
                                                  let stringResult = intl2.string(util.t.LtfhAj);
                                                } else if (constants.INTANGIBLE === type) {
                                                  const intl = util.intl;
                                                  stringResult = intl.string(util.t["8oxWpO"]);
                                                } else if (constants.EMOJI === type) {
                                                  const intl3 = util.intl;
                                                  stringResult = intl3.string(util.t.XBkDoA);
                                                }
                                                obj.title = stringResult;
                                                return __initData(TableRowGroup.TableRowGroupTitle, obj);
                                              }
                                              cResult[44] = tmp4.sectionTitle;
                                              class Ae {
                                                constructor(arg0) {
                                                  item = arg0.item;
                                                  index = arg0.index;
                                                  tmp = 0 === index;
                                                  tmp2 = index === arg0.section.data.length - 1;
                                                  tmp3 = closure_12;
                                                  if ("roles" in item) {
                                                    tmp9 = closure_1_17;
                                                    obj1 = { emoji: null, start: null, end: null, disabled: null };
                                                    obj1.emoji = item;
                                                    obj1.start = tmp;
                                                    obj1.end = tmp2;
                                                    tmp10 = closure_8;
                                                    obj1.disabled = closure_8;
                                                    tmp3Result = tmp3(closure_1_17, obj1);
                                                  } else {
                                                    tmp4 = editStateId;
                                                    tmp5 = c3;
                                                    obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                                                    tmp6 = guildId;
                                                    obj.guildId = guildId;
                                                    obj.benefit = item;
                                                    obj.start = tmp;
                                                    obj.end = tmp2;
                                                    obj.onPress = function onPress() {
                                                      return closure_13(item, index);
                                                    };
                                                    tmp7 = closure_8;
                                                    obj.disabled = closure_8;
                                                    tmp3Result = tmp3(editStateId(c3[30]), obj);
                                                  }
                                                  return tmp3Result;
                                                }
                                              }
                                              cResult[45] = renderSectionHeader;
                                              let tmp58 = renderSectionHeader;
                                            } else {
                                              tmp58 = cResult[45];
                                            }
                                            if (cResult[46] === tmp54) {
                                              if (cResult[47] === roleSubscriptionSettingsDisabled) {
                                                let tmp59 = cResult[48];
                                              }
                                              if (cResult[49] === tmp7) {
                                                if (cResult[50] === tmp29) {
                                                  if (cResult[51] === tmp26) {
                                                    if (cResult[52] === tmp28) {
                                                      if (cResult[53] === tmp25) {
                                                        let tmp61 = cResult[54];
                                                      }
                                                      if (cResult[55] === tmp14) {
                                                        if (cResult[56] === tmp31) {
                                                          if (cResult[57] === roleSubscriptionSettingsDisabled) {
                                                            if (cResult[58] === tmp32) {
                                                              if (cResult[59] === tmp4.allChannelsSwitch) {
                                                                let tmp63 = cResult[60];
                                                              }
                                                              if (cResult[61] === tmp61) {
                                                                if (cResult[62] === tmp59) {
                                                                  if (cResult[63] === tmp57) {
                                                                    if (cResult[64] === tmp58) {
                                                                      if (cResult[65] === tmp44) {
                                                                        if (cResult[66] === tmp4.listContainer) {
                                                                          if (cResult[67] === tmp63) {
                                                                            let tmp65 = cResult[68];
                                                                          }
                                                                          return tmp65;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              class Ae {
                                                                constructor(arg0) {
                                                                  item = arg0.item;
                                                                  index = arg0.index;
                                                                  tmp = 0 === index;
                                                                  tmp2 = index === arg0.section.data.length - 1;
                                                                  tmp3 = closure_12;
                                                                  if ("roles" in item) {
                                                                    tmp9 = closure_1_17;
                                                                    obj1 = { emoji: null, start: null, end: null, disabled: null };
                                                                    obj1.emoji = item;
                                                                    obj1.start = tmp;
                                                                    obj1.end = tmp2;
                                                                    tmp10 = closure_8;
                                                                    obj1.disabled = closure_8;
                                                                    tmp3Result = tmp3(closure_1_17, obj1);
                                                                  } else {
                                                                    tmp4 = editStateId;
                                                                    tmp5 = c3;
                                                                    obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                                                                    tmp6 = guildId;
                                                                    obj.guildId = guildId;
                                                                    obj.benefit = item;
                                                                    obj.start = tmp;
                                                                    obj.end = tmp2;
                                                                    obj.onPress = function onPress() {
                                                                      return closure_13(item, index);
                                                                    };
                                                                    tmp7 = closure_8;
                                                                    obj.disabled = closure_8;
                                                                    tmp3Result = tmp3(editStateId(c3[30]), obj);
                                                                  }
                                                                  return tmp3Result;
                                                                }
                                                              }
                                                              let obj2 = { sections: tmp44, contentContainerStyle: tmp4.listContainer, renderItem: tmp57, keyExtractor: tmp(tmp2[32]).getBenefitKey, ListHeaderComponent: tmp63, renderSectionHeader: tmp58, stickySectionHeadersEnabled: false, renderSectionFooter: tmp59, ListFooterComponent: tmp61 };
                                                              const tmp67 = closure_12(initialTierEmojiIds, obj2);
                                                              cResult[61] = tmp61;
                                                              cResult[62] = tmp59;
                                                              cResult[63] = tmp57;
                                                              cResult[64] = tmp58;
                                                              cResult[65] = tmp44;
                                                              cResult[66] = tmp4.listContainer;
                                                              cResult[67] = tmp63;
                                                              cResult[68] = tmp67;
                                                              tmp65 = tmp67;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      class Ae {
                                                        constructor(arg0) {
                                                          item = arg0.item;
                                                          index = arg0.index;
                                                          tmp = 0 === index;
                                                          tmp2 = index === arg0.section.data.length - 1;
                                                          tmp3 = closure_12;
                                                          if ("roles" in item) {
                                                            tmp9 = closure_1_17;
                                                            obj1 = { emoji: null, start: null, end: null, disabled: null };
                                                            obj1.emoji = item;
                                                            obj1.start = tmp;
                                                            obj1.end = tmp2;
                                                            tmp10 = closure_8;
                                                            obj1.disabled = closure_8;
                                                            tmp3Result = tmp3(closure_1_17, obj1);
                                                          } else {
                                                            tmp4 = editStateId;
                                                            tmp5 = c3;
                                                            obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                                                            tmp6 = guildId;
                                                            obj.guildId = guildId;
                                                            obj.benefit = item;
                                                            obj.start = tmp;
                                                            obj.end = tmp2;
                                                            obj.onPress = function onPress() {
                                                              return closure_13(item, index);
                                                            };
                                                            tmp7 = closure_8;
                                                            obj.disabled = closure_8;
                                                            tmp3Result = tmp3(editStateId(c3[30]), obj);
                                                          }
                                                          return tmp3Result;
                                                        }
                                                      }
                                                      cResult[55] = tmp14;
                                                      cResult[56] = tmp31;
                                                      cResult[57] = roleSubscriptionSettingsDisabled;
                                                      cResult[58] = tmp32;
                                                      cResult[59] = tmp4.allChannelsSwitch;
                                                      cResult[60] = null;
                                                      tmp63 = tmp64;
                                                    }
                                                  }
                                                }
                                              }
                                              class Ae {
                                                constructor(arg0) {
                                                  item = arg0.item;
                                                  index = arg0.index;
                                                  tmp = 0 === index;
                                                  tmp2 = index === arg0.section.data.length - 1;
                                                  tmp3 = closure_12;
                                                  if ("roles" in item) {
                                                    tmp9 = closure_1_17;
                                                    obj1 = { emoji: null, start: null, end: null, disabled: null };
                                                    obj1.emoji = item;
                                                    obj1.start = tmp;
                                                    obj1.end = tmp2;
                                                    tmp10 = closure_8;
                                                    obj1.disabled = closure_8;
                                                    tmp3Result = tmp3(closure_1_17, obj1);
                                                  } else {
                                                    tmp4 = editStateId;
                                                    tmp5 = c3;
                                                    obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                                                    tmp6 = guildId;
                                                    obj.guildId = guildId;
                                                    obj.benefit = item;
                                                    obj.start = tmp;
                                                    obj.end = tmp2;
                                                    obj.onPress = function onPress() {
                                                      return closure_13(item, index);
                                                    };
                                                    tmp7 = closure_8;
                                                    obj.disabled = closure_8;
                                                    tmp3Result = tmp3(editStateId(c3[30]), obj);
                                                  }
                                                  return tmp3Result;
                                                }
                                              }
                                              cResult[49] = tmp7;
                                              cResult[50] = tmp29;
                                              cResult[51] = tmp26;
                                              cResult[52] = tmp28;
                                              cResult[53] = tmp25;
                                              cResult[54] = null;
                                              tmp61 = tmp62;
                                            }
                                            class Ae {
                                              constructor(arg0) {
                                                item = arg0.item;
                                                index = arg0.index;
                                                tmp = 0 === index;
                                                tmp2 = index === arg0.section.data.length - 1;
                                                tmp3 = closure_12;
                                                if ("roles" in item) {
                                                  tmp9 = closure_1_17;
                                                  obj1 = { emoji: null, start: null, end: null, disabled: null };
                                                  obj1.emoji = item;
                                                  obj1.start = tmp;
                                                  obj1.end = tmp2;
                                                  tmp10 = closure_8;
                                                  obj1.disabled = closure_8;
                                                  tmp3Result = tmp3(closure_1_17, obj1);
                                                } else {
                                                  tmp4 = editStateId;
                                                  tmp5 = c3;
                                                  obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                                                  tmp6 = guildId;
                                                  obj.guildId = guildId;
                                                  obj.benefit = item;
                                                  obj.start = tmp;
                                                  obj.end = tmp2;
                                                  obj.onPress = function onPress() {
                                                    return closure_13(item, index);
                                                  };
                                                  tmp7 = closure_8;
                                                  obj.disabled = closure_8;
                                                  tmp3Result = tmp3(editStateId(c3[30]), obj);
                                                }
                                                return tmp3Result;
                                              }
                                            }
                                            cResult[46] = tmp54;
                                            cResult[47] = roleSubscriptionSettingsDisabled;
                                            cResult[48] = tmp60;
                                            tmp59 = tmp60;
                                          }
                                        }
                                        class Ae {
                                          constructor(arg0) {
                                            item = arg0.item;
                                            index = arg0.index;
                                            tmp = 0 === index;
                                            tmp2 = index === arg0.section.data.length - 1;
                                            tmp3 = closure_12;
                                            if ("roles" in item) {
                                              tmp9 = closure_1_17;
                                              obj1 = { emoji: null, start: null, end: null, disabled: null };
                                              obj1.emoji = item;
                                              obj1.start = tmp;
                                              obj1.end = tmp2;
                                              tmp10 = closure_8;
                                              obj1.disabled = closure_8;
                                              tmp3Result = tmp3(closure_1_17, obj1);
                                            } else {
                                              tmp4 = editStateId;
                                              tmp5 = c3;
                                              obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                                              tmp6 = guildId;
                                              obj.guildId = guildId;
                                              obj.benefit = item;
                                              obj.start = tmp;
                                              obj.end = tmp2;
                                              obj.onPress = function onPress() {
                                                return closure_13(item, index);
                                              };
                                              tmp7 = closure_8;
                                              obj.disabled = closure_8;
                                              tmp3Result = tmp3(editStateId(c3[30]), obj);
                                            }
                                            return tmp3Result;
                                          }
                                        }
                                        cResult[40] = guildId;
                                        cResult[41] = tmp55;
                                        cResult[42] = roleSubscriptionSettingsDisabled;
                                        cResult[43] = Ae;
                                        tmp57 = Ae;
                                      }
                                    }
                                  }
                                  cResult[35] = tmp35;
                                  cResult[36] = editStateId;
                                  cResult[37] = guildId;
                                  cResult[38] = tmp37;
                                  cResult[39] = tmp56;
                                  tmp55 = tmp56;
                                }
                              }
                            }
                          }
                        }
                        function handleAddBenefit(arg0) {
                          if (arg0 === constants.EMOJI) {
                            const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds, onSave, listingId: editStateId };
                            GuildRoleSubscriptionsModalActionCreatorsAll.showEditEmojisModal(obj2);
                          } else {
                            if (arg0 === tmp.CHANNEL) {
                              let INTANGIBLE = constants.CHANNEL;
                            } else {
                              INTANGIBLE = constants.INTANGIBLE;
                            }
                            const obj4 = { guildId, type: INTANGIBLE, onSave: onSave2, listingId: editStateId };
                            const result = GuildRoleSubscriptionsModalActionCreatorsAll.showCreateBenefitModal(obj4);
                          }
                        }
                        cResult[28] = tmp34;
                        cResult[29] = editStateId;
                        cResult[30] = guildId;
                        cResult[31] = tmp23;
                        cResult[32] = role_id;
                        cResult[33] = initialTierEmojiIds;
                        cResult[34] = handleAddBenefit;
                        tmp54 = handleAddBenefit;
                      }
                    }
                  }
                }
              }
            }
            if (!tmp5) {
              if (!tmp43) {
                if (cResult[22] !== tmp16) {
                  let obj3 = { type: constants3.CHANNEL, data: null };
                  class Ae {
                    constructor(arg0) {
                      item = arg0.item;
                      index = arg0.index;
                      tmp = 0 === index;
                      tmp2 = index === arg0.section.data.length - 1;
                      tmp3 = closure_12;
                      if ("roles" in item) {
                        tmp9 = closure_1_17;
                        obj1 = { emoji: null, start: null, end: null, disabled: null };
                        obj1.emoji = item;
                        obj1.start = tmp;
                        obj1.end = tmp2;
                        tmp10 = closure_8;
                        obj1.disabled = closure_8;
                        tmp3Result = tmp3(closure_1_17, obj1);
                      } else {
                        tmp4 = editStateId;
                        tmp5 = c3;
                        obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                        tmp6 = guildId;
                        obj.guildId = guildId;
                        obj.benefit = item;
                        obj.start = tmp;
                        obj.end = tmp2;
                        obj.onPress = function onPress() {
                          return closure_13(item, index);
                        };
                        tmp7 = closure_8;
                        obj.disabled = closure_8;
                        tmp3Result = tmp3(editStateId(c3[30]), obj);
                      }
                      return tmp3Result;
                    }
                  }
                  cResult[22] = tmp16;
                  cResult[23] = obj3;
                  let tmp45 = obj3;
                } else {
                  tmp45 = cResult[23];
                }
                arr2.push(tmp45);
              }
            }
            if (tmp6) {
              if (tmp8) {
                cResult[14] = tmp43;
                class Ae {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    tmp = 0 === index;
                    tmp2 = index === arg0.section.data.length - 1;
                    tmp3 = closure_12;
                    if ("roles" in item) {
                      tmp9 = closure_1_17;
                      obj1 = { emoji: null, start: null, end: null, disabled: null };
                      obj1.emoji = item;
                      obj1.start = tmp;
                      obj1.end = tmp2;
                      tmp10 = closure_8;
                      obj1.disabled = closure_8;
                      tmp3Result = tmp3(closure_1_17, obj1);
                    } else {
                      tmp4 = editStateId;
                      tmp5 = c3;
                      obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                      tmp6 = guildId;
                      obj.guildId = guildId;
                      obj.benefit = item;
                      obj.start = tmp;
                      obj.end = tmp2;
                      obj.onPress = function onPress() {
                        return closure_13(item, index);
                      };
                      tmp7 = closure_8;
                      obj.disabled = closure_8;
                      tmp3Result = tmp3(editStateId(c3[30]), obj);
                    }
                    return tmp3Result;
                  }
                }
                cResult[16] = tmp39;
                cResult[17] = tmp5;
                cResult[18] = tmp8;
                cResult[19] = tmp6;
                cResult[20] = tmp19;
                cResult[21] = arr2;
                tmp44 = arr2;
              } else {
                if (cResult[26] !== tmp39) {
                  const obj10 = { type: constants3.EMOJI, data: null };
                  class Ae {
                    constructor(arg0) {
                      item = arg0.item;
                      index = arg0.index;
                      tmp = 0 === index;
                      tmp2 = index === arg0.section.data.length - 1;
                      tmp3 = closure_12;
                      if ("roles" in item) {
                        tmp9 = closure_1_17;
                        obj1 = { emoji: null, start: null, end: null, disabled: null };
                        obj1.emoji = item;
                        obj1.start = tmp;
                        obj1.end = tmp2;
                        tmp10 = closure_8;
                        obj1.disabled = closure_8;
                        tmp3Result = tmp3(closure_1_17, obj1);
                      } else {
                        tmp4 = editStateId;
                        tmp5 = c3;
                        obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                        tmp6 = guildId;
                        obj.guildId = guildId;
                        obj.benefit = item;
                        obj.start = tmp;
                        obj.end = tmp2;
                        obj.onPress = function onPress() {
                          return closure_13(item, index);
                        };
                        tmp7 = closure_8;
                        obj.disabled = closure_8;
                        tmp3Result = tmp3(editStateId(c3[30]), obj);
                      }
                      return tmp3Result;
                    }
                  }
                  cResult[26] = tmp39;
                  cResult[27] = obj10;
                  let tmp51 = obj10;
                } else {
                  tmp51 = cResult[27];
                }
                arr2.push(tmp51);
              }
            } else {
              if (cResult[24] !== tmp19) {
                const obj11 = { type: constants3.INTANGIBLE, data: null };
                class Ae {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    tmp = 0 === index;
                    tmp2 = index === arg0.section.data.length - 1;
                    tmp3 = closure_12;
                    if ("roles" in item) {
                      tmp9 = closure_1_17;
                      obj1 = { emoji: null, start: null, end: null, disabled: null };
                      obj1.emoji = item;
                      obj1.start = tmp;
                      obj1.end = tmp2;
                      tmp10 = closure_8;
                      obj1.disabled = closure_8;
                      tmp3Result = tmp3(closure_1_17, obj1);
                    } else {
                      tmp4 = editStateId;
                      tmp5 = c3;
                      obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                      tmp6 = guildId;
                      obj.guildId = guildId;
                      obj.benefit = item;
                      obj.start = tmp;
                      obj.end = tmp2;
                      obj.onPress = function onPress() {
                        return closure_13(item, index);
                      };
                      tmp7 = closure_8;
                      obj.disabled = closure_8;
                      tmp3Result = tmp3(editStateId(c3[30]), obj);
                    }
                    return tmp3Result;
                  }
                }
                cResult[24] = tmp19;
                cResult[25] = obj11;
                let tmp48 = obj11;
              } else {
                tmp48 = cResult[25];
              }
              arr2.push(tmp48);
            }
          }
        }
        if (cResult[12] !== initialTierEmojiIds) {
          function be(id) {
            return first.has(id.id);
          }
          cResult[12] = initialTierEmojiIds;
          class Ae {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              tmp = 0 === index;
              tmp2 = index === arg0.section.data.length - 1;
              tmp3 = closure_12;
              if ("roles" in item) {
                tmp9 = closure_1_17;
                obj1 = { emoji: null, start: null, end: null, disabled: null };
                obj1.emoji = item;
                obj1.start = tmp;
                obj1.end = tmp2;
                tmp10 = closure_8;
                obj1.disabled = closure_8;
                tmp3Result = tmp3(closure_1_17, obj1);
              } else {
                tmp4 = editStateId;
                tmp5 = c3;
                obj = { guildId: null, benefit: null, start: null, end: null, onPress: null, disabled: null };
                tmp6 = guildId;
                obj.guildId = guildId;
                obj.benefit = item;
                obj.start = tmp;
                obj.end = tmp2;
                obj.onPress = function onPress() {
                  return closure_13(item, index);
                };
                tmp7 = closure_8;
                obj.disabled = closure_8;
                tmp3Result = tmp3(editStateId(c3[30]), obj);
              }
              return tmp3Result;
            }
          }
          cResult[13] = be;
          let tmp40 = be;
        } else {
          tmp40 = cResult[13];
        }
        const found = arr.filter(tmp40);
        cResult[9] = arr;
        cResult[10] = initialTierEmojiIds;
        cResult[11] = found;
      }
      cResult[6] = tmp17;
      cResult[7] = tmp20;
      cResult[8] = tmp38;
      tmp37 = tmp38;
    }
    cResult[3] = tmp17;
    cResult[4] = tmp20;
    cResult[5] = tmp36;
    tmp35 = tmp36;
  }
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === constants.CHANNEL) {
      tmp17((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    } else {
      tmp20((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  cResult[0] = tmp17;
  cResult[1] = tmp20;
  cResult[2] = addBenefit;
  tmp34 = addBenefit;
  const tmpResult4 = require("RoleSubscriptionSettingsDisabledContext");
}) : (function Content(arg0) {
  dependencyMap = undefined;
  let editStateId;
  let guildId;
  let role_id;
  let data;
  disabled = undefined;
  let first1;
  closure_10 = undefined;
  let first2;
  closure_12 = undefined;
  closure_13 = undefined;
  let roleSubscriptionSettingsDisabled;
  closure_16 = undefined;
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === constants.CHANNEL) {
      closure_8((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    } else {
      closure_10((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = roleSubscriptionSettingsDisabled();
  _require = tmp;
  importDefault = tmp2;
  importAll = tmp3;
  let tmp4 = tmp2;
  if (true !== onlyIntangible) {
    tmp4 = tmp3;
  }
  dependencyMap = tmp4;
  const editStateContext = require("EditStateContextProvider").useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  let obj = require("EditStateContextProvider");
  const subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  let obj2 = require("GuildRoleSubscriptionsHooks");
  const tmp11 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(editStateId), 2);
  data = tmp11[0];
  disabled = tmp11[1];
  const tmp13 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(editStateId), 2);
  first1 = tmp13[0];
  closure_10 = tmp13[1];
  const tmp15 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp15[0];
  closure_12 = tmp15[1];
  [tmp18, tmp19] = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialInterval(editStateId), 2);
  const tmp17 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialInterval(editStateId), 2);
  [tmp21, tmp22] = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialLimit(editStateId), 2);
  const tmp20 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialLimit(editStateId), 2);
  const tmp23 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp23[0];
  closure_13 = tmp25;
  roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  const tmp27 = useRoleSubscriptionEmojisDefault(guildId);
  closure_16 = tmp27;
  let items = [first2, tmp27, true === onlyIntangible, first3 === disabled.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, data, first1];
  let tmp29 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = closure_1;
    const found = closure_16.filter((id) => set.has(id.id));
    if (!closure_1) {
      tmp2 = closure_13;
    }
    const items = [];
    if (!tmp2) {
      const obj = { type: addBenefit.CHANNEL, data };
      items.push(obj);
    }
    if (!closure_2) {
      const obj2 = { type: addBenefit.INTANGIBLE, data: first1 };
      items.push(obj2);
    }
    if (!closure_3) {
      const obj3 = { type: addBenefit.EMOJI, data: found };
      items.push(obj3);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp29 = null;
    if (!tmp3) {
      const obj9 = { interval: tmp18, onChangeTrialInterval: tmp19, trialActiveUserLimit: tmp21, onChangeTrialActiveUserLimit: tmp22 };
      tmp29 = closure_12(closure_18, obj9);
    }
  }
  const obj10 = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
      item = item.item;
      const index = item.index;
      const tmp2 = index === item.section.data.length - 1;
      if ("roles" in item) {
        const obj2 = { emoji: item, start: tmp, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
        let tmp3Result = closure_12(closure_1_17, obj2);
      } else {
        const obj = {
          guildId,
          benefit: item,
          start: tmp,
          end: tmp2,
          onPress() {
              let ref_type = item;
              closure_1 = index;
              closure_1_2(dependencyMap[29]).showEditBenefitModal({
                guildId,
                benefit: item,
                onDelete() {
                  ref_type = closure_1;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arr) => arr.filter(/* F166666 */ function() { ... }));
                  } else {
                    closure_2_10((arr) => arr.filter(/* F166667 */ function() { ... }));
                  }
                },
                onSave(ref_type) {
                  closure_0 = ref_type;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arg0) => {
                      const items = [...arg0, closure_0];
                      return items;
                    });
                  } else {
                    closure_2_10((arg0) => {
                      const items = [...arg0, closure_0];
                      return items;
                    });
                  }
                },
                listingId: editStateId
              });
            },
          disabled: roleSubscriptionSettingsDisabled
        };
        tmp3Result = closure_12(closure_1(19849), obj);
      }
      return tmp3Result;
    },
    keyExtractor: require("GuildRoleSubscriptionTypeUtils").getBenefitKey,
    ListHeaderComponent: null,
    renderSectionHeader: null,
    stickySectionHeadersEnabled: false,
    renderSectionFooter: null,
    ListFooterComponent: null
  };
  let tmp32Result = null;
  if (true !== onlyIntangible) {
    if (useRoleSubscriptionFormatDefault(guildId).isFullServerGating) {
      const obj11 = { style: tmp.allChannelsSwitch, channelAccessFormat: first3, setChannelAccessFormat: tmp23[1], disabled: roleSubscriptionSettingsDisabled };
      tmp32Result = tmp32(AllChannelsSwitchDefault, obj11);
    } else {
      tmp32Result = null;
    }
  }
  obj10.ListHeaderComponent = tmp32Result;
  obj10.renderSectionHeader = function renderSectionHeader(section) {
    const type = section.section.type;
    const obj = { style: closure_0.sectionTitle, title: null };
    if (addBenefit.CHANNEL === type) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.LtfhAj);
    } else if (addBenefit.INTANGIBLE === type) {
      const intl = util.intl;
      stringResult = intl.string(util.t["8oxWpO"]);
    } else if (addBenefit.EMOJI === type) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.XBkDoA);
    }
    obj.title = stringResult;
    return __initData(TableRowGroup.TableRowGroupTitle, obj);
  };
  obj10.renderSectionFooter = function renderAddBenefitRow(section) {
    section = section.section;
    const type = section.type;
    if (addBenefit.CHANNEL === type) {
      const intl2 = closure_0(1125).intl;
      let stringResult = intl2.string(closure_0(1125).t.WEg7PK);
    } else if (addBenefit.INTANGIBLE === type) {
      const intl = closure_0(1125).intl;
      stringResult = intl.string(closure_0(1125).t.VinNZr);
    } else if (addBenefit.EMOJI === type) {
      const intl3 = closure_0(1125).intl;
      stringResult = intl3.string(closure_0(1125).t["0t1aNC"]);
    }
    return onSave(closure_16, {
      label: stringResult,
      onPress() {
        if (type === constants.EMOJI) {
          const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds: first2, onSave, listingId: editStateId };
          GuildRoleSubscriptionsModalActionCreatorsAll.showEditEmojisModal(obj2);
        } else {
          if (tmp === tmp2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          const obj4 = { guildId, type: INTANGIBLE, onSave: addBenefit, listingId: editStateId };
          const result = GuildRoleSubscriptionsModalActionCreatorsAll.showCreateBenefitModal(obj4);
        }
      },
      disabled: roleSubscriptionSettingsDisabled,
      hasBenefits: section.data.length > 0
    });
  };
  obj10.ListFooterComponent = tmp29;
  return closure_12(role_id, obj10);
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierBenefitsTab(arg0) {
  const cResult = c.c(3);
  ({ onlyChannels, onlyIntangible } = arg0);
  if (cResult[0] === onlyChannels) {
    if (cResult[1] === onlyIntangible) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = __initData(closure_19, { onlyChannels, onlyIntangible });
  cResult[0] = onlyChannels;
  cResult[1] = onlyIntangible;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function GuildRoleSubscriptionTierBenefitsTab(onlyChannels) {
  return __initData(closure_19, { onlyChannels: onlyChannels.onlyChannels, onlyIntangible: onlyChannels.onlyIntangible });
});
let closure_20 = tmp5;
fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["0eV/GY"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.iMSIWp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = __initData(closure_20, { onlyChannels: true });
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: constants2.INTANGIBLE_BENEFITS };
    const merged = Object.assign(arg0);
    obj2.scrollable = false;
    obj2.children = tmp8;
    const tmp20 = __initData(GuildRoleSubscriptionTierEditStepDefault, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    let tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0eV/GY"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.iMSIWp);
  obj.nextStep = constants2.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = __initData(closure_20, { onlyChannels: true });
  return __initData(GuildRoleSubscriptionTierEditStepDefault, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export const GuildRoleSubscriptionTierBenefitsTab = tmp5;
export const GuildRoleSubscriptionTierChannelBenefitsModal = tmp6;
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["+h9nJG"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.oGS4tC);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = __initData(closure_20, { onlyIntangible: true });
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: constants2.DESIGN };
    const merged = Object.assign(arg0);
    obj2.scrollable = false;
    obj2.children = tmp8;
    const tmp20 = __initData(GuildRoleSubscriptionTierEditStepDefault, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    let tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["+h9nJG"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.oGS4tC);
  obj.nextStep = constants2.DESIGN;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = __initData(closure_20, { onlyIntangible: true });
  return __initData(GuildRoleSubscriptionTierEditStepDefault, obj);
});