// === Module 17019: MuteSettingsScreen ===

// Module 17019 (MuteSettingsScreen)
import nativeDefault from "native" /* 587 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6614 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9800 */;
import threadActionSheets from "threadActionSheets" /* 11067 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function updateSettings(arg0, isThread, id2) {
  ({ muted, mute_config } = arg0);
  if (mute_config === undefined) {
    mute_config = null;
  }
  if (undefined !== muted) {
    if (isThread.isThread()) {
      const obj2 = { muted, mute_config: null };
      if (mute_config == null) {
        mute_config = null;
      }
      obj2.mute_config = mute_config;
      const result = ThreadActionCreatorsDefault.setNotificationSettings(isThread, obj2);
    } else if (null != id2) {
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const guildId = isThread.getGuildId();
      const id = isThread.id;
      const obj4 = { muted, mute_config: null };
      let tmp9 = mute_config;
      if (mute_config == null) {
        tmp9 = null;
      }
      obj4.mute_config = tmp9;
      const NotificationLabel2 = NotificationSettingsUtils.NotificationLabel;
      const result1 = obj.updateAppDMOverrideSettings(guildId, id, id2, obj4, NotificationLabel2.muted(muted));
    } else {
      const obj6 = { guildId: isThread.getGuildId(), channelId: isThread.id, settings: null, label: null };
      const obj7 = { muted, mute_config: null };
      let tmp3 = mute_config;
      if (mute_config == null) {
        tmp3 = null;
      }
      obj7.mute_config = tmp3;
      obj6.settings = obj7;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj6.label = NotificationLabel.muted(muted);
      const result2 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(obj6);
    }
  }
}
const View = fn(17).View;
const ChannelSettingsSections = fn(1085).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 }, options: { marginBottom: 16 }, trailing: { flexDirection: "row", alignItems: "center" }, hint: { marginTop: 8, paddingHorizontal: 12 } };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(19);
  channel = channel.channel;
  ({ muteConfig, navigation } = channel);
  const tmp4 = closure_13();
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === channel.id) {
      if (cResult[2] === navigation) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { disableColor: true, source: navigation(11065) };
        const tmp10 = closure_10(tmp(1188).Icon, obj2);
        cResult[4] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== channel) {
        const intl = tmp(1126).intl;
        const obj3 = { name: null };
        const tmpResult = tmp(5043);
        obj3.name = tmpResult.computeChannelName(channel, UserStore, RelationshipStore, true);
        const formatResult = intl.format(tmp(1126).t["eC+9rj"], obj3);
        cResult[5] = channel;
        cResult[6] = formatResult;
        let tmp11 = formatResult;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== tmp11) {
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp11 };
        const tmp19 = closure_10(tmp(4886).Text, obj4);
        cResult[7] = tmp11;
        cResult[8] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp17) {
          let tmp20 = cResult[11];
        }
        const MuteSettingType = tmp(11066).MuteSettingType;
        const tmp24 = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
        if (cResult[12] === muteConfig) {
          if (cResult[13] === tmp24) {
            let tmp25 = cResult[14];
          }
          if (cResult[15] === tmp4.options) {
            if (cResult[16] === tmp20) {
              if (cResult[17] === tmp25) {
                let tmp29 = cResult[18];
              }
              return tmp29;
            }
          }
          const obj5 = { style: tmp4.options, children: null };
          const items = [tmp20, tmp25];
          obj5.children = items;
          const tmp32 = closure_11(View, obj5);
          cResult[15] = tmp4.options;
          cResult[16] = tmp20;
          cResult[17] = tmp25;
          cResult[18] = tmp32;
          tmp29 = tmp32;
        }
        const obj6 = { muteConfig, type: tmp24 };
        const tmp28 = closure_10(navigation(11066), obj6);
        cResult[12] = muteConfig;
        cResult[13] = tmp24;
        cResult[14] = tmp28;
        tmp25 = tmp28;
        const isPrivateResult = channel.isPrivate();
      }
      const obj7 = { icon: tmp7, label: tmp17, onPress: tmp5, start: true, end: true };
      const tmp22 = closure_10(tmp(5993).TableRow, obj7);
      cResult[9] = tmp5;
      cResult[10] = tmp17;
      cResult[11] = tmp22;
      tmp20 = tmp22;
    }
  }
  const fn = function n() {
    navigation.goBack();
    MuteSettingsUtils.handleUnmutePress(channel.id, channel.guild_id);
  };
  cResult[0] = channel.guild_id;
  cResult[1] = channel.id;
  cResult[2] = navigation;
  cResult[3] = fn;
  tmp5 = fn;
  const obj = channel(576);
}) : ((channel) => {
  channel = channel.channel;
  const navigation = channel.navigation;
  const items = [, , ];
  ({ guild_id: arr[0], id: arr[1] } = channel);
  items[2] = navigation;
  const obj = { style: closure_13().options, children: null };
  const callback = noop.useCallback(() => {
    navigation.goBack();
    MuteSettingsUtils.handleUnmutePress(channel.id, channel.guild_id);
  }, items);
  const obj2 = { icon: null, label: null, onPress: null, start: true, end: true };
  const tmp = closure_13();
  obj2.icon = closure_10(channel(1188).Icon, { disableColor: true, source: navigation(11065) });
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = channel(1126).intl;
  const obj5 = { name: null };
  const obj3 = { disableColor: true, source: navigation(11065) };
  obj5.name = channel(5043).computeChannelName(channel, UserStore, RelationshipStore, true);
  obj4.children = intl.format(channel(1126).t["eC+9rj"], obj5);
  obj2.label = closure_10(channel(4886).Text, obj4);
  obj2.onPress = callback;
  const items1 = [closure_10(channel(5993).TableRow, obj2), ];
  const obj7 = { muteConfig: channel.muteConfig, type: null };
  const obj6 = channel(5043);
  const tmp6 = navigation(11066);
  const MuteSettingType = channel(11066).MuteSettingType;
  obj7.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
  items1[1] = closure_10(tmp6, obj7);
  obj.children = items1;
  return closure_11(View, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(navigation[14]).c(10);
  channel = channel.channel;
  const applicationId = channel.applicationId;
  navigation = channel.navigation;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const muteOptions = tmp(tmp2[15]).getMuteOptions();
    cResult[0] = muteOptions;
    let first = muteOptions;
    const tmpResult = tmp(tmp2[15]);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === applicationId) {
    if (cResult[2] === channel) {
      if (cResult[3] === navigation) {
        let tmp6 = cResult[4];
      }
      closure_4 = tmp6;
      if (cResult[5] !== tmp6) {
        const mapped = first.map((item, index) => {
          ({ label, duration: channel } = item);
          return closure_1_10(channel(navigation[21]).TableRow, {
            label,
            onPress() {
              return closure_4(channel);
            },
            start: 0 === index,
            end: index === first.length - 1
          }, label);
        });
        cResult[5] = tmp6;
        cResult[6] = mapped;
        let tmp7 = mapped;
      } else {
        tmp7 = cResult[6];
      }
      if (cResult[7] === tmp4.options) {
        if (cResult[8] === tmp7) {
          let tmp9 = cResult[9];
        }
        return tmp9;
      }
      const obj2 = { style: tmp4.options, children: tmp7 };
      const tmp12 = closure_10(closure_4, obj2);
      cResult[7] = tmp4.options;
      cResult[8] = tmp7;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
  }
  const fn = function p(muteDurationSeconds) {
    navigation.goBack();
    const result = MuteSettingsUtils.handleMuteSettingPress({
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        updateSettings(arg0, channel, applicationId);
      },
      muteDurationSeconds
    });
  };
  cResult[1] = applicationId;
  cResult[2] = channel;
  cResult[3] = navigation;
  cResult[4] = fn;
  tmp6 = fn;
  const obj = channel(navigation[14]);
  tmp = channel;
  tmp2 = navigation;
}) : ((channel) => {
  channel = channel.channel;
  const applicationId = channel.applicationId;
  const navigation = channel.navigation;
  let memo;
  memo = memo.useMemo(() => channel(navigation[15]).getMuteOptions(), []);
  const items = [channel, navigation, applicationId];
  closure_4 = memo.useCallback((muteDurationSeconds) => {
    navigation.goBack();
    const result = MuteSettingsUtils.handleMuteSettingPress({
      channelId: channel.id,
      guildId: channel.guild_id,
      onOptionPress(arg0) {
        updateSettings(arg0, channel, applicationId);
      },
      muteDurationSeconds
    });
  }, items);
  const tmp = closure_13();
  return closure_10(closure_4, {
    style: closure_13().options,
    children: memo.map((item, index) => {
      ({ label, duration: channel } = item);
      return closure_1_10(channel(navigation[21]).TableRow, {
        label,
        onPress() {
          return closure_4(channel);
        },
        start: 0 === index,
        end: index === memo.length - 1
      }, label);
    })
  });
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(26);
  channel = channel.channel;
  ({ isMuted, isGuildMuted, messageNotifications, guildMessageNotifications } = channel);
  const tmp4 = closure_13();
  let obj = channel(576);
  const navigation = channel(1490).useNavigation();
  if (cResult[0] === channel) {
    if (cResult[1] === navigation) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== messageNotifications) {
      const messageNotificationsText = tmp(9800).getMessageNotificationsText(messageNotifications);
      cResult[3] = messageNotifications;
      cResult[4] = messageNotificationsText;
      let tmp7 = messageNotificationsText;
      const tmpResult = tmp(9800);
    } else {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.h850Ss);
      cResult[5] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== tmp7) {
      const obj3 = { variant: "text-md/medium", color: "text-muted", children: tmp7 };
      const tmp14 = closure_10(tmp(4886).Text, obj3);
      cResult[6] = tmp7;
      cResult[7] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = closure_10(tmp(5993).TableRow.Arrow, {});
      cResult[8] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp4.trailing) {
      if (cResult[10] === tmp12) {
        let tmp18 = cResult[11];
      }
      let tmp22 = isMuted;
      if (!isMuted) {
        tmp22 = isGuildMuted;
      }
      if (cResult[12] === tmp6) {
        if (cResult[13] === tmp18) {
          if (cResult[14] === tmp22) {
            let tmp23 = cResult[15];
          }
          if (cResult[16] === guildMessageNotifications) {
            if (cResult[17] === isGuildMuted) {
              if (cResult[18] === isMuted) {
                let tmp26 = cResult[19];
              }
              if (cResult[20] === tmp4.hint) {
                if (cResult[21] === tmp26) {
                  let tmp29 = cResult[22];
                }
                if (cResult[23] === tmp29) {
                  if (cResult[24] === tmp23) {
                    let tmp33 = cResult[25];
                  }
                  return tmp33;
                }
                const obj4 = { children: null };
                const items = [tmp23, tmp29];
                obj4.children = items;
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
          const tmp28 = closure_10(tmp(11064).MuteSettingsHint, obj6);
          cResult[16] = guildMessageNotifications;
          cResult[17] = isGuildMuted;
          cResult[18] = isMuted;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        }
      }
      const obj7 = { label: tmp10, onPress: tmp6, trailing: tmp18, disabled: tmp22, start: true, end: true };
      const tmp25 = closure_10(tmp(5993).TableRow, obj7);
      cResult[12] = tmp6;
      cResult[13] = tmp18;
      cResult[14] = tmp22;
      cResult[15] = tmp25;
      tmp23 = tmp25;
    }
    const obj8 = { style: tmp4.trailing, children: null };
    const items1 = [tmp12, tmp15];
    obj8.children = items1;
    const tmp21 = closure_11(View, obj8);
    cResult[9] = tmp4.trailing;
    cResult[10] = tmp12;
    cResult[11] = tmp21;
    tmp18 = tmp21;
  }
  const fn = function n() {
    if (channel.isThread()) {
      const result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  };
  cResult[0] = channel;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp6 = fn;
  const obj2 = channel(1490);
}) : ((guildMessageNotifications) => {
  const channel = guildMessageNotifications.channel;
  ({ isMuted, isGuildMuted, messageNotifications } = guildMessageNotifications);
  let navigation;
  const tmp = closure_13();
  navigation = channel(navigation[23]).useNavigation();
  const items = [channel, navigation];
  const items1 = [messageNotifications];
  const callback = noop.useCallback(() => {
    if (channel.isThread()) {
      const result = threadActionSheets.showThreadNotificationsBottomSheet(channel);
    } else {
      navigation.navigate(ChannelSettingsSections.NOTIFICATIONS);
    }
  }, items);
  const memo = noop.useMemo(() => MuteSettingsUtils.getMessageNotificationsText(messageNotifications), items1);
  const obj2 = { label: null, onPress: null, trailing: null, disabled: null, start: true, end: true };
  const intl = channel(navigation[18]).intl;
  obj2.label = intl.string(channel(navigation[18]).t.h850Ss);
  obj2.onPress = callback;
  const obj3 = { style: tmp.trailing, children: null };
  const items2 = [closure_10(channel(navigation[20]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }), closure_10(channel(navigation[21]).TableRow.Arrow, {})];
  obj3.children = items2;
  obj2.trailing = closure_11(View, obj3);
  let tmp11 = isMuted;
  if (!isMuted) {
    tmp11 = isGuildMuted;
  }
  const obj4 = { children: null };
  obj2.disabled = tmp11;
  const items3 = [closure_10(channel(navigation[21]).TableRow, obj2), ];
  let obj = channel(navigation[23]);
  items3[1] = closure_10(View, { style: tmp.hint, children: closure_10(channel(navigation[25]).MuteSettingsHint, { isMuted, isGuildMuted, guildMessageNotifications: guildMessageNotifications.guildMessageNotifications }) });
  obj4.children = items3;
  return closure_11(closure_12, obj4);
});
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(stateFromStores[14]).c(39);
  const tmp4 = closure_13();
  const obj = navigation(stateFromStores[14]);
  navigation = navigation(stateFromStores[23]).useNavigation();
  const obj2 = navigation(stateFromStores[23]);
  const route = navigation(stateFromStores[26]).useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj3 = navigation(stateFromStores[26]);
  stateFromStores = navigation(stateFromStores[27]).useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const fn2 = function y() {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return GuildStore.getGuild(guild_id);
    };
    cResult[4] = guild_id1;
    cResult[5] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult = navigation(stateFromStores[27]);
  const stateFromStores1 = navigation(stateFromStores[27]).useStateFromStores(tmp10, tmp13);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === stateFromStores1) {
      let tmp16 = cResult[8];
    }
    noop = tmp16;
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === stateFromStores1) {
        let tmp18 = cResult[11];
      }
      closure_4 = tmp18;
      if (cResult[12] === navigation) {
        if (cResult[13] === tmp18) {
          if (cResult[14] === tmp16) {
            let tmp20 = cResult[15];
          }
          const layoutEffect = noop.useLayoutEffect(tmp20);
          if (cResult[16] !== channelId) {
            const muteSettings = tmp(tmp2[15]).getMuteSettings(channelId);
            cResult[16] = channelId;
            cResult[17] = muteSettings;
            let tmp23 = muteSettings;
            const tmpResult6 = tmp(tmp2[15]);
          } else {
            tmp23 = cResult[17];
          }
          ({ muteConfig, messageNotifications, guildMessageNotifications, muted, guildMuted } = tmp23);
          const bottom = channelId(tmp2[29])().bottom;
          if (null == stateFromStores) {
            return null;
          } else {
            if (cResult[18] !== bottom) {
              const obj4 = { paddingBottom: bottom };
              cResult[18] = bottom;
              cResult[19] = obj4;
              let tmp27 = obj4;
            } else {
              tmp27 = cResult[19];
            }
            if (cResult[20] === tmp4.container) {
              if (cResult[21] === tmp27) {
                let tmp28 = cResult[22];
              }
              if (cResult[23] === applicationId) {
                if (cResult[24] === stateFromStores) {
                  if (cResult[25] === muted) {
                    if (cResult[26] === muteConfig) {
                      if (cResult[27] === navigation) {
                        if (cResult[29] === stateFromStores) {
                          if (cResult[30] === guildMessageNotifications) {
                            if (cResult[31] === guildMuted) {
                              if (cResult[32] === muted) {
                                if (cResult[33] === messageNotifications) {
                                  let tmp35 = cResult[34];
                                }
                                if (cResult[35] === tmp29) {
                                  if (cResult[36] === tmp35) {
                                  }
                                }
                                const obj5 = { style: tmp28, children: null };
                                const items2 = [tmp29, tmp35];
                                obj5.children = items2;
                                const tmp43 = closure_11(closure_4, obj5);
                                cResult[35] = tmp29;
                                cResult[36] = tmp35;
                                cResult[37] = tmp28;
                                cResult[38] = tmp43;
                              }
                            }
                          }
                        }
                        const isPrivateResult = stateFromStores.isPrivate();
                        let tmp37 = !isPrivateResult;
                        if (!isPrivateResult) {
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
              }
              if (muted) {
                const obj7 = { channel: stateFromStores, applicationId, muteConfig, navigation };
                let tmp30Result = closure_10(closure_15, obj7);
              } else {
                const obj8 = { channel: stateFromStores, applicationId, navigation };
                tmp30Result = closure_10(closure_16, obj8);
              }
              cResult[23] = applicationId;
              cResult[24] = stateFromStores;
              cResult[25] = muted;
              cResult[26] = muteConfig;
              cResult[27] = navigation;
              cResult[28] = tmp30Result;
            }
            const items3 = [tmp4.container, tmp27];
            cResult[20] = tmp4.container;
            cResult[21] = tmp27;
            cResult[22] = items3;
            tmp28 = items3;
          }
        }
      }
      const fn3 = function w() {
        navigation.setOptions({
          title: "" + title + " (" + subtitle + ")",
          headerTitle() {
            return closure_2_10(navigation(stateFromStores[28]).GenericHeaderTitle, { title, subtitle });
          },
          headerTitleAlign: "center"
        });
      };
      cResult[12] = navigation;
      cResult[13] = tmp18;
      cResult[14] = tmp16;
      cResult[15] = fn3;
      tmp20 = fn3;
    }
    const muteSettingSublabel = tmp(tmp2[15]).getMuteSettingSublabel(stateFromStores, stateFromStores1);
    cResult[9] = stateFromStores;
    cResult[10] = stateFromStores1;
    cResult[11] = muteSettingSublabel;
    tmp18 = muteSettingSublabel;
    const tmpResult7 = tmp(tmp2[15]);
  }
  const tmpResult5 = navigation(stateFromStores[27]);
  const muteSettingLabel = navigation(stateFromStores[15]).getMuteSettingLabel(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = muteSettingLabel;
  tmp16 = muteSettingLabel;
  const tmpResult8 = navigation(stateFromStores[15]);
}) : (() => {
  const tmp = closure_13();
  navigation = navigation(stateFromStores[23]).useNavigation();
  const obj = navigation(stateFromStores[23]);
  const route = navigation(stateFromStores[26]).useRoute();
  const channelId = route.params.channelId;
  const applicationId = route.params.applicationId;
  const obj2 = navigation(stateFromStores[26]);
  const items = [closure_5];
  stateFromStores = navigation(stateFromStores[27]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj3 = navigation(stateFromStores[27]);
  const items1 = [GuildStore];
  const stateFromStores1 = navigation(stateFromStores[27]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const items2 = [stateFromStores, stateFromStores1];
  closure_4 = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettingLabel(stateFromStores, stateFromStores1), items2);
  const items3 = [stateFromStores, stateFromStores1];
  closure_5 = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettingSublabel(stateFromStores, stateFromStores1), items3);
  const layoutEffect = stateFromStores1.useLayoutEffect(() => {
    navigation.setOptions({
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_10(navigation(stateFromStores[28]).GenericHeaderTitle, { title, subtitle });
      },
      headerTitleAlign: "center"
    });
  });
  const items4 = [channelId];
  const memo = stateFromStores1.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items4);
  const muted = memo.muted;
  ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = { style: null, children: null };
    const items5 = [tmp.container, ];
    const obj6 = { paddingBottom: tmp7 };
    items5[1] = obj6;
    obj4.style = items5;
    if (muted) {
      const obj7 = { channel: stateFromStores, applicationId, muteConfig, navigation };
      let tmp11Result = closure_10(closure_15, obj7);
      let tmp14 = closure_10;
    } else {
      const obj8 = { channel: stateFromStores, applicationId, navigation };
      tmp11Result = closure_10(closure_16, obj8);
      tmp14 = closure_10;
    }
    const items6 = [tmp11Result, ];
    const isPrivateResult = stateFromStores.isPrivate();
    let tmp14Result = !isPrivateResult;
    if (!isPrivateResult) {
      const obj9 = { isMuted: muted, isGuildMuted: guildMuted, channel: stateFromStores, messageNotifications, guildMessageNotifications };
      tmp14Result = tmp14(closure_17, obj9);
    }
    items6[1] = tmp14Result;
    obj4.children = items6;
    tmp9Result = closure_11(closure_4, obj4);
  }
  return tmp9Result;
}));