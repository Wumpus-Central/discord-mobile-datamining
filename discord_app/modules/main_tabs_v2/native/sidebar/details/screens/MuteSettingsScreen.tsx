// === Module 17069: MuteSettingsScreen ===

// Module 17069 (MuteSettingsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7274 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9813 */;
import threadActionSheets from "threadActionSheets" /* 11080 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, closure_5, navigation;

let c10;
let closure_12;
let obj2;
let unpackModuleId;
function updateSettings(arg0, isThread, id2) {
  let NotificationLabel;
  let mute_config;
  let muted;
  let obj4;
  let tmp10;
  let tmp3;
  ({ muted, mute_config } = arg0);
  if (mute_config === undefined) {
    mute_config = null;
  }
  if (undefined !== muted) {
    if (isThread.isThread()) {
      const obj2 = { muted, mute_config };
      const setNotificationSettings = ThreadActionCreatorsDefault.setNotificationSettings;
      ThreadActionCreatorsDefault;
      if (mute_config == null) {
        mute_config = null;
      }
      const result = setNotificationSettings(isThread, obj2);
    } else if (null != id2) {
      const updateAppDMOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateAppDMOverrideSettings;
      const guildId = isThread.getGuildId();
      const id = isThread.id;
      const obj = { muted, mute_config: tmp10 };
      tmp10 = mute_config;
      if (mute_config == null) {
        tmp10 = null;
      }
      const NotificationLabel2 = NotificationSettingsUtils.NotificationLabel;
      const result1 = updateAppDMOverrideSettings(guildId, id, id2, obj, NotificationLabel2.muted(muted));
    } else {
      const obj3 = { guildId: isThread.getGuildId(), channelId: isThread.id, settings: obj4, label: NotificationLabel.muted(muted) };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      obj4 = { muted, mute_config: tmp3 };
      tmp3 = mute_config;
      if (mute_config == null) {
        tmp3 = null;
      }
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result2 = updateChannelOverrideSettings(obj3);
    }
  }
}
let react = react_mod;
const View = react_native.View;
const ChannelSettingsSections = Constants.ChannelSettingsSections;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { container: obj2, options: { marginBottom: 16 }, trailing: { flexDirection: "row", alignItems: "center" }, hint: { marginTop: 8, paddingHorizontal: 12 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let muteConfig;
  let tmpResult;
  let obj = channel(576);
  const cResult = obj.c(19);
  channel = channel.channel;
  ({ muteConfig, navigation } = channel);
  const tmp4 = closure_13();
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === channel.id) {
      let tmp5;
      let tmp7;
      let tmp11;
      let tmp18;
      if (cResult[2] === navigation) {
        tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      const options = tmp4.options;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { disableColor: true, source: navigation(11078) };
        const Icon = tmp(1188).Icon;
        const tmp10 = closure_10(Icon, obj2);
        cResult[4] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== channel) {
        const intl = tmp(1126).intl;
        const format = intl.format;
        const obj3 = { name: tmpResult.computeChannelName(channel, UserStore, RelationshipStore, true) };
        const prop = tmp(1126).t["eC+9rj"];
        tmpResult = channel(5049);
        const formatResult = format(prop, obj3);
        cResult[5] = channel;
        cResult[6] = formatResult;
        tmp11 = formatResult;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp11) {
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp11 };
        const tmp20 = closure_10(channel(4892).Text, obj4);
        cResult[7] = tmp11;
        cResult[8] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        let tmp21;
        if (cResult[10] === tmp18) {
          tmp21 = cResult[11];
        }
        const isPrivateResult = channel.isPrivate();
        const MuteSettingType = tmp(11079).MuteSettingType;
        const tmp25 = isPrivateResult ? MuteSettingType.DM : MuteSettingType.CHANNEL;
        if (cResult[12] === muteConfig) {
          let tmp26;
          if (cResult[13] === tmp25) {
            tmp26 = cResult[14];
          }
          if (cResult[15] === tmp4.options) {
            if (cResult[16] === tmp21) {
              let tmp30;
              if (cResult[17] === tmp26) {
                tmp30 = cResult[18];
              }
              return tmp30;
            }
          }
          const obj5 = { style: options, children: items };
          items = [tmp21, tmp26];
          const tmp33 = closure_11(View, obj5);
          cResult[15] = tmp4.options;
          cResult[16] = tmp21;
          cResult[17] = tmp26;
          cResult[18] = tmp33;
          tmp30 = tmp33;
        }
        const obj6 = { muteConfig, type: tmp25 };
        const tmp29 = closure_10(navigation(11079), obj6);
        cResult[12] = muteConfig;
        cResult[13] = tmp25;
        cResult[14] = tmp29;
        tmp26 = tmp29;
      }
      const obj7 = { icon: tmp7, label: tmp18, onPress: tmp5, start: true, end: true };
      const tmp23 = closure_10(channel(6000).TableRow, obj7);
      cResult[9] = tmp5;
      cResult[10] = tmp18;
      cResult[11] = tmp23;
      tmp21 = tmp23;
    }
  }
  const fn = function n() {
    navigation.goBack();
    const obj = MuteSettingsUtils;
    obj.handleUnmutePress(channel.id, channel.guild_id);
  };
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = navigation;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((channel) => {
  let Icon;
  let MuteSettingType;
  let Text;
  let format;
  let isPrivateResult;
  let items1;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let prop;
  channel = channel.channel;
  navigation = channel.navigation;
  const muteConfig = channel.muteConfig;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  let obj = { style: closure_13().options, children: items1 };
  closure_13();
  const callback = react.useCallback(() => {
    navigation.goBack();
    const obj = MuteSettingsUtils;
    obj.handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  const obj2 = { icon: closure_10(Icon, obj3), label: closure_10(Text, obj4), onPress: callback, start: true, end: true };
  const TableRow = channel(6000).TableRow;
  obj3 = { disableColor: true, source: navigation(11078) };
  Icon = channel(1188).Icon;
  obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: format(prop, obj5) };
  Text = channel(4892).Text;
  const intl = channel(1126).intl;
  format = intl.format;
  obj5 = { name: obj6.computeChannelName(channel, UserStore, RelationshipStore, true) };
  prop = channel(1126).t["eC+9rj"];
  obj6 = channel(5049);
  items1 = [closure_10(TableRow, obj2), ];
  const obj7 = { muteConfig, type: isPrivateResult ? MuteSettingType.DM : MuteSettingType.CHANNEL };
  const tmp7 = navigation(11079);
  isPrivateResult = channel.isPrivate();
  MuteSettingType = channel(11079).MuteSettingType;
  items1[1] = closure_10(tmp7, obj7);
  return closure_11(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let obj = channel(navigation[14]);
  const cResult = obj.c(10);
  const tmp = channel;
  channel = channel.channel;
  const applicationId = channel.applicationId;
  const tmp2 = navigation;
  navigation = channel.navigation;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(tmp2[15]);
    const muteOptions = tmpResult.getMuteOptions();
    cResult[0] = muteOptions;
    first = muteOptions;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationId) {
    if (cResult[2] === channel) {
      let tmp6;
      let tmp7;
      if (cResult[3] === navigation) {
        tmp6 = cResult[4];
      }
      let closure_4 = tmp6;
      const options = tmp4.options;
      if (cResult[5] !== tmp6) {
        const mapped = first.map((item, index) => {
          let label;
          ({ label, duration: channel } = item);
          const obj = {
            label,
            onPress() {
              return closure_4(channel);
            },
            start: 0 === index,
            end: index === first.length - 1
          };
          return closure_1_10(channel(navigation[21]).TableRow, obj, label);
        });
        cResult[5] = tmp6;
        cResult[6] = mapped;
        tmp7 = mapped;
      } else {
        tmp7 = cResult[6];
      }
      if (cResult[7] === tmp4.options) {
        let tmp9;
        if (cResult[8] === tmp7) {
          tmp9 = cResult[9];
        }
        return tmp9;
      }
      let obj2 = { style: options, children: tmp7 };
      const tmp12 = closure_10(closure_4, obj2);
      cResult[7] = tmp4.options;
      cResult[8] = tmp7;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
  }
  const fn = function p(muteDurationSeconds) {
    navigation.goBack();
    const obj = MuteSettingsUtils;
    const obj2 = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        updateSettings(arg0, channel, applicationId);
      },
      muteDurationSeconds
    };
    const result = obj.handleMuteSettingPress(obj2);
  };
  cResult[1] = applicationId;
  cResult[2] = channel;
  cResult[3] = navigation;
  cResult[4] = fn;
  tmp6 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const applicationId = channel.applicationId;
  navigation = channel.navigation;
  let memo;
  const tmp = closure_13();
  memo = memo.useMemo(() => {
    const obj = channel(navigation[15]);
    return obj.getMuteOptions();
  }, []);
  const items = [channel, navigation, applicationId];
  let closure_4 = memo.useCallback((muteDurationSeconds) => {
    navigation.goBack();
    const obj = MuteSettingsUtils;
    const obj2 = {
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        updateSettings(arg0, channel, applicationId);
      },
      muteDurationSeconds
    };
    const result = obj.handleMuteSettingPress(obj2);
  }, items);
  let obj = {
    style: tmp.options,
    children: memo.map((item, index) => {
      let label;
      ({ label, duration: channel } = item);
      const obj = {
        label,
        onPress() {
          return closure_4(channel);
        },
        start: 0 === index,
        end: index === memo.length - 1
      };
      return closure_1_10(channel(navigation[21]).TableRow, obj, label);
    })
  };
  return closure_10(closure_4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let guildMessageNotifications;
  let isGuildMuted;
  let isMuted;
  let items;
  let items1;
  let messageNotifications;
  let obj = channel(576);
  const cResult = obj.c(26);
  channel = channel.channel;
  ({ isMuted, isGuildMuted, messageNotifications, guildMessageNotifications } = channel);
  const tmp4 = closure_13();
  const obj2 = channel(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === channel) {
    let tmp6;
    let tmp7;
    let tmp10;
    let tmp12;
    let tmp15;
    if (cResult[1] === navigation) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== messageNotifications) {
      const tmpResult = channel(9813);
      const messageNotificationsText = tmpResult.getMessageNotificationsText(messageNotifications);
      cResult[3] = messageNotifications;
      cResult[4] = messageNotificationsText;
      tmp7 = messageNotificationsText;
    } else {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(channel(1126).t.h850Ss);
      cResult[5] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== tmp7) {
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: tmp7 };
      const tmp14 = closure_10(channel(4892).Text, obj3);
      cResult[6] = tmp7;
      cResult[7] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = closure_10(channel(6000).TableRow.Arrow, {});
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp4.trailing) {
      let tmp18;
      if (cResult[10] === tmp12) {
        tmp18 = cResult[11];
      }
      if (cResult[12] === tmp6) {
        if (cResult[13] === tmp18) {
          let tmp23;
          if (cResult[14] === (isMuted || isGuildMuted)) {
            tmp23 = cResult[15];
          }
          if (cResult[16] === guildMessageNotifications) {
            if (cResult[17] === isGuildMuted) {
              let tmp26;
              if (cResult[18] === isMuted) {
                tmp26 = cResult[19];
              }
              if (cResult[20] === tmp4.hint) {
                let tmp29;
                if (cResult[21] === tmp26) {
                  tmp29 = cResult[22];
                }
                if (cResult[23] === tmp29) {
                  let tmp33;
                  if (cResult[24] === tmp23) {
                    tmp33 = cResult[25];
                  }
                  return tmp33;
                }
                const obj4 = { children: items };
                items = [tmp23, tmp29];
                const tmp36 = closure_11(closure_12, obj4);
                cResult[23] = tmp29;
                cResult[24] = tmp23;
                cResult[25] = tmp36;
                tmp33 = tmp36;
              }
              const obj5 = { style: tmp4.hint, children: tmp26 };
              const tmp32 = closure_10(View, obj5);
              cResult[20] = tmp4.hint;
              cResult[21] = tmp26;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj6 = { isMuted, isGuildMuted, guildMessageNotifications };
          const tmp28 = closure_10(channel(11077).MuteSettingsHint, obj6);
          cResult[16] = guildMessageNotifications;
          cResult[17] = isGuildMuted;
          cResult[18] = isMuted;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        }
      }
      const obj7 = { label: tmp10, onPress: tmp6, trailing: tmp18, disabled: isMuted || isGuildMuted, start: true, end: true };
      const tmp25 = closure_10(channel(6000).TableRow, obj7);
      cResult[12] = tmp6;
      cResult[13] = tmp18;
      cResult[14] = isMuted || isGuildMuted;
      cResult[15] = tmp25;
      tmp23 = tmp25;
    }
    const obj8 = { style: tmp4.trailing, children: items1 };
    items1 = [tmp12, tmp15];
    const tmp21 = closure_11(View, obj8);
    cResult[9] = tmp4.trailing;
    cResult[10] = tmp12;
    cResult[11] = tmp21;
    tmp18 = tmp21;
  }
  const fn = function n() {
    if (channel.isThread()) {
      const obj = threadActionSheets;
      const result = obj.showThreadNotificationsBottomSheet(channel);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  };
  cResult[0] = channel;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((channel) => {
  let intl;
  let isGuildMuted;
  let isMuted;
  let items2;
  let items3;
  let messageNotifications;
  let obj3;
  let tmp11;
  channel = channel.channel;
  ({ isMuted, isGuildMuted, messageNotifications } = channel);
  navigation = undefined;
  const guildMessageNotifications = channel.guildMessageNotifications;
  const tmp = closure_13();
  let obj = channel(navigation[23]);
  const tmp3 = navigation;
  navigation = obj.useNavigation();
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = react.useCallback(() => {
    if (channel.isThread()) {
      const obj = threadActionSheets;
      const result = obj.showThreadNotificationsBottomSheet(channel);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  }, items);
  const memo = react.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMessageNotificationsText(messageNotifications);
  }, items1);
  const obj2 = { label: intl.string(channel(navigation[18]).t.h850Ss), onPress: callback, trailing: closure_11(View, obj3), disabled: tmp11, start: true, end: true };
  const TableRow = channel(navigation[21]).TableRow;
  intl = channel(navigation[18]).intl;
  obj3 = { style: tmp.trailing, children: items2 };
  items2 = [closure_10(channel(navigation[20]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }), closure_10(channel(navigation[21]).TableRow.Arrow, {})];
  const obj4 = { children: items3 };
  tmp11 = isMuted || isGuildMuted;
  items3 = [closure_10(TableRow, obj2), ];
  const obj5 = { style: tmp.hint, children: closure_10(channel(tmp3[25]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications }) };
  items3[1] = closure_10(View, obj5);
  return closure_11(closure_12, obj4);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_3;
  let first;
  let guildMessageNotifications;
  let guildMuted;
  let items2;
  let messageNotifications;
  let muteConfig;
  let muted;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp9;
  let obj = navigation(stateFromStores[14]);
  const cResult = obj.c(39);
  const tmp4 = closure_13();
  const obj2 = navigation(stateFromStores[23]);
  navigation = obj2.useNavigation();
  const obj3 = navigation(stateFromStores[26]);
  const route = obj3.useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = navigation(stateFromStores[27]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  let guild_id;
  const tmp12 = cResult[4];
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (tmp12 !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const fn2 = function y() {
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return getGuild(guild_id);
    };
    cResult[4] = guild_id1;
    cResult[5] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
  }
  const tmpResult5 = navigation(stateFromStores[27]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp14);
  if (cResult[6] === stateFromStores) {
    let tmp17;
    if (cResult[7] === stateFromStores1) {
      tmp17 = cResult[8];
    }
    react = tmp17;
    if (cResult[9] === stateFromStores) {
      let tmp19;
      if (cResult[10] === stateFromStores1) {
        tmp19 = cResult[11];
      }
      let closure_4 = tmp19;
      if (cResult[12] === navigation) {
        if (cResult[13] === tmp19) {
          let tmp21;
          let tmp24;
          if (cResult[14] === tmp17) {
            tmp21 = cResult[15];
          }
          const layoutEffect = react.useLayoutEffect(tmp21);
          if (cResult[16] !== channelId) {
            const tmpResult6 = navigation(stateFromStores[15]);
            const muteSettings = tmpResult6.getMuteSettings(channelId);
            cResult[16] = channelId;
            cResult[17] = muteSettings;
            tmp24 = muteSettings;
          } else {
            tmp24 = cResult[17];
          }
          ({ muteConfig, messageNotifications, guildMessageNotifications, muted, guildMuted } = tmp24);
          const bottom = channelId(tmp2[29])().bottom;
          let tmp27 = null;
          if (null != stateFromStores) {
            let tmp28;
            if (cResult[18] !== bottom) {
              const obj4 = { paddingBottom: bottom };
              cResult[18] = bottom;
              cResult[19] = obj4;
              tmp28 = obj4;
            } else {
              tmp28 = cResult[19];
            }
            if (cResult[20] === tmp4.container) {
              let tmp29;
              let tmp31Result;
              if (cResult[21] === tmp28) {
                tmp29 = cResult[22];
              }
              if (cResult[23] === applicationId) {
                if (cResult[24] === stateFromStores) {
                  if (cResult[25] === muted) {
                    if (cResult[26] === muteConfig) {
                      let tmp30;
                      if (cResult[27] === navigation) {
                        tmp30 = cResult[28];
                      }
                      if (cResult[29] === stateFromStores) {
                        if (cResult[30] === guildMessageNotifications) {
                          if (cResult[31] === guildMuted) {
                            if (cResult[32] === muted) {
                              let tmp35;
                              if (cResult[33] === messageNotifications) {
                                tmp35 = cResult[34];
                              }
                              if (cResult[35] === tmp30) {
                                if (cResult[36] === tmp35) {
                                  let tmp40;
                                  if (cResult[37] === tmp29) {
                                    tmp40 = cResult[38];
                                  }
                                  tmp27 = tmp40;
                                }
                              }
                              const obj5 = { style: tmp29, children: items2 };
                              items2 = [tmp30, tmp35];
                              const tmp43 = closure_11(closure_4, obj5);
                              cResult[35] = tmp30;
                              cResult[36] = tmp35;
                              cResult[37] = tmp29;
                              cResult[38] = tmp43;
                              tmp40 = tmp43;
                            }
                          }
                        }
                      }
                      let tmp37 = !stateFromStores.isPrivate();
                      stateFromStores.isPrivate();
                      if (tmp37) {
                        const obj6 = { isMuted: muted, isGuildMuted: guildMuted, channel: stateFromStores, messageNotifications, guildMessageNotifications };
                        tmp37 = closure_10(closure_17, obj6);
                      }
                      cResult[29] = stateFromStores;
                      cResult[30] = guildMessageNotifications;
                      cResult[31] = guildMuted;
                      cResult[32] = muted;
                      cResult[33] = messageNotifications;
                      cResult[34] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                }
              }
              if (muted) {
                const obj7 = { channel: stateFromStores, applicationId, muteConfig, navigation };
                tmp31Result = closure_10(closure_15, obj7);
              } else {
                const obj8 = { channel: stateFromStores, applicationId, navigation };
                tmp31Result = closure_10(closure_16, obj8);
              }
              cResult[23] = applicationId;
              cResult[24] = stateFromStores;
              cResult[25] = muted;
              cResult[26] = muteConfig;
              cResult[27] = navigation;
              cResult[28] = tmp31Result;
              tmp30 = tmp31Result;
            }
            const items3 = [tmp4.container, tmp28];
            cResult[20] = tmp4.container;
            cResult[21] = tmp28;
            cResult[22] = items3;
            tmp29 = items3;
          }
          return tmp27;
        }
      }
      const fn3 = function w() {
        let obj = {
          title: "" + title + " (" + subtitle + ")",
          headerTitle() {
            const obj = { title, subtitle };
            return closure_2_10(navigation(stateFromStores[28]).GenericHeaderTitle, obj);
          },
          headerTitleAlign: "center"
        };
        navigation.setOptions(obj);
      };
      cResult[12] = navigation;
      cResult[13] = tmp19;
      cResult[14] = tmp17;
      cResult[15] = fn3;
      tmp21 = fn3;
    }
    const tmpResult7 = navigation(stateFromStores[15]);
    const muteSettingSublabel = tmpResult7.getMuteSettingSublabel(stateFromStores, stateFromStores1);
    cResult[9] = stateFromStores;
    cResult[10] = stateFromStores1;
    cResult[11] = muteSettingSublabel;
    tmp19 = muteSettingSublabel;
  }
  const tmpResult8 = navigation(stateFromStores[15]);
  const muteSettingLabel = tmpResult8.getMuteSettingLabel(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = muteSettingLabel;
  tmp17 = muteSettingLabel;
}) : (() => {
  let guildMessageNotifications;
  let guildMuted;
  let items5;
  let items6;
  let messageNotifications;
  let muteConfig;
  let stateFromStores;
  const tmp = closure_13();
  let obj = navigation(stateFromStores[23]);
  navigation = obj.useNavigation();
  const obj2 = navigation(stateFromStores[26]);
  const route = obj2.useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  const items = [closure_5];
  const obj3 = navigation(stateFromStores[27]);
  stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GuildStore];
  const obj5 = navigation(stateFromStores[27]);
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  let closure_4 = stateFromStores1.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettingLabel(stateFromStores, stateFromStores1);
  }, items2);
  const items3 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores1.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettingSublabel(stateFromStores, stateFromStores1);
  }, items3);
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    let obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        const obj = { title, subtitle };
        return closure_2_10(navigation(stateFromStores[28]).GenericHeaderTitle, obj);
      },
      headerTitleAlign: "center"
    };
    navigation.setOptions(obj);
  });
  const items4 = [channelId];
  const memo = stateFromStores1.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettings(channelId);
  }, items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let tmp11Result;
    let tmp14;
    const obj4 = { style: items5, children: items6 };
    items5 = [tmp.container, ];
    const obj6 = { paddingBottom: tmp7 };
    items5[1] = obj6;
    const tmp10 = closure_4;
    if (muted) {
      const obj7 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      tmp11Result = closure_10(closure_15, obj7);
      tmp14 = closure_10;
    } else {
      const obj8 = { channel: stateFromStores, applicationId, navigation };
      tmp11Result = closure_10(closure_16, obj8);
      tmp14 = closure_10;
    }
    items6 = [tmp11Result, ];
    let tmp14Result = !stateFromStores.isPrivate();
    stateFromStores.isPrivate();
    if (tmp14Result) {
      const obj9 = { isMuted: muted, isGuildMuted: guildMuted, channel: stateFromStores, messageNotifications, guildMessageNotifications };
      tmp14Result = tmp14(closure_17, obj9);
    }
    items6[1] = tmp14Result;
    tmp9Result = closure_11(tmp10, obj4);
  }
  return tmp9Result;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default memoResult;