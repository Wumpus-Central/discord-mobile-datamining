// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import NotificationSettingsUtils from "../../../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../../../actions/NotificationSettingsModalActionCreators.tsx";
import ThreadActionCreatorsDefault from "../../../../../threads/ThreadActionCreators.tsx";
import MuteSettingsUtils from "MuteSettingsUtils.tsx";
import threadActionSheets from "../../../../../threads/native/threadActionSheets.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

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
const createStyles = fn(5092);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 },
  options: { marginBottom: 16 },
  trailing: { flexDirection: "row", alignItems: "center" },
  hint: { marginTop: 8, paddingHorizontal: 12 },
  headerRightSpacer: { width: fn(9298).MIN_HEADER_HEIGHT },
};
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UnmuteOptions(channel) {
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
            const obj2 = { disableColor: true, source: navigation(10463) };
            const tmp10 = closure_10(tmp(1200).Icon, obj2);
            cResult[4] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[4];
          }
          if (cResult[5] !== channel) {
            const intl = tmp(1126).intl;
            const obj3 = { name: null };
            const tmpResult = tmp(5421);
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
            const tmp19 = closure_10(tmp(5088).Text, obj4);
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
            const MuteSettingType = tmp(10464).MuteSettingType;
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
            const tmp28 = closure_10(navigation(10464), obj6);
            cResult[12] = muteConfig;
            cResult[13] = tmp24;
            cResult[14] = tmp28;
            tmp25 = tmp28;
            const isPrivateResult = channel.isPrivate();
          }
          const obj7 = { icon: tmp7, label: tmp17, onPress: tmp5, start: true, end: true };
          const tmp22 = closure_10(tmp(6179).TableRow, obj7);
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
    }
  : function UnmuteOptions(channel) {
      channel = channel.channel;
      const navigation = channel.navigation;
      const items = [, ,];
      ({ guild_id: arr[0], id: arr[1] } = channel);
      items[2] = navigation;
      const obj = { style: closure_13().options, children: null };
      const callback = noop.useCallback(() => {
        navigation.goBack();
        MuteSettingsUtils.handleUnmutePress(channel.id, channel.guild_id);
      }, items);
      const obj2 = { icon: null, label: null, onPress: null, start: true, end: true };
      const tmp = closure_13();
      obj2.icon = closure_10(channel(1200).Icon, { disableColor: true, source: navigation(10463) });
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = channel(1126).intl;
      const obj5 = { name: null };
      const obj3 = { disableColor: true, source: navigation(10463) };
      obj5.name = channel(5421).computeChannelName(channel, UserStore, RelationshipStore, true);
      obj4.children = intl.format(channel(1126).t["eC+9rj"], obj5);
      obj2.label = closure_10(channel(5088).Text, obj4);
      obj2.onPress = callback;
      const items1 = [closure_10(channel(6179).TableRow, obj2)];
      const obj7 = { muteConfig: channel.muteConfig, type: null };
      const obj6 = channel(5421);
      const tmp6 = navigation(10464);
      const MuteSettingType = channel(10464).MuteSettingType;
      obj7.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      items1[1] = closure_10(tmp6, obj7);
      obj.children = items1;
      return closure_11(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MuteOptions(channel) {
      const cResult = channel(navigation[15]).c(10);
      channel = channel.channel;
      const applicationId = channel.applicationId;
      navigation = channel.navigation;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const muteOptions = tmp(tmp2[16]).getMuteOptions();
        cResult[0] = muteOptions;
        let first = muteOptions;
        const tmpResult = tmp(tmp2[16]);
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
              return closure_1_10(
                channel(navigation[22]).TableRow,
                {
                  label,
                  onPress() {
                    return closure_4(channel);
                  },
                  start: 0 === index,
                  end: index === first.length - 1,
                },
                label,
              );
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
      const fn = function h(muteDurationSeconds) {
        navigation.goBack();
        const result = MuteSettingsUtils.handleMuteSettingPress({
          channelId: channel.id,
          guildId: channel.guild_id,
          onOptionPress(arg0) {
            updateSettings(arg0, channel, applicationId);
          },
          muteDurationSeconds,
        });
      };
      cResult[1] = applicationId;
      cResult[2] = channel;
      cResult[3] = navigation;
      cResult[4] = fn;
      tmp6 = fn;
      const obj = channel(navigation[15]);
      tmp = channel;
      tmp2 = navigation;
    }
  : function MuteOptions(channel) {
      channel = channel.channel;
      const applicationId = channel.applicationId;
      const navigation = channel.navigation;
      let memo;
      memo = memo.useMemo(() => channel(navigation[16]).getMuteOptions(), []);
      const items = [channel, navigation, applicationId];
      closure_4 = memo.useCallback((muteDurationSeconds) => {
        navigation.goBack();
        const result = MuteSettingsUtils.handleMuteSettingPress({
          channelId: channel.id,
          guildId: channel.guild_id,
          onOptionPress(arg0) {
            updateSettings(arg0, channel, applicationId);
          },
          muteDurationSeconds,
        });
      }, items);
      const tmp = closure_13();
      return closure_10(closure_4, {
        style: closure_13().options,
        children: memo.map((item, index) => {
          ({ label, duration: channel } = item);
          return closure_1_10(
            channel(navigation[22]).TableRow,
            {
              label,
              onPress() {
                return closure_4(channel);
              },
              start: 0 === index,
              end: index === memo.length - 1,
            },
            label,
          );
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationSettingsButton(channel) {
      const cResult = channel(576).c(26);
      channel = channel.channel;
      ({ isMuted, isGuildMuted, messageNotifications, guildMessageNotifications } = channel);
      const tmp4 = closure_13();
      let obj = channel(576);
      const navigation = channel(1503).useNavigation();
      if (cResult[0] === channel) {
        if (cResult[1] === navigation) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== messageNotifications) {
          const messageNotificationsText = tmp(10396).getMessageNotificationsText(messageNotifications);
          cResult[3] = messageNotifications;
          cResult[4] = messageNotificationsText;
          let tmp7 = messageNotificationsText;
          const tmpResult = tmp(10396);
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
          const tmp14 = closure_10(tmp(5088).Text, obj3);
          cResult[6] = tmp7;
          cResult[7] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = closure_10(tmp(6179).TableRow.Arrow, {});
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
              const tmp28 = closure_10(tmp(10462).MuteSettingsHint, obj6);
              cResult[16] = guildMessageNotifications;
              cResult[17] = isGuildMuted;
              cResult[18] = isMuted;
              cResult[19] = tmp28;
              tmp26 = tmp28;
            }
          }
          const obj7 = { label: tmp10, onPress: tmp6, trailing: tmp18, disabled: tmp22, start: true, end: true };
          const tmp25 = closure_10(tmp(6179).TableRow, obj7);
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
      const obj2 = channel(1503);
    }
  : function NotificationSettingsButton(guildMessageNotifications) {
      const channel = guildMessageNotifications.channel;
      ({ isMuted, isGuildMuted, messageNotifications } = guildMessageNotifications);
      let navigation;
      const tmp = closure_13();
      navigation = channel(navigation[24]).useNavigation();
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
      const intl = channel(navigation[19]).intl;
      obj2.label = intl.string(channel(navigation[19]).t.h850Ss);
      obj2.onPress = callback;
      const obj3 = { style: tmp.trailing, children: null };
      const items2 = [
        closure_10(channel(navigation[21]).Text, { variant: "text-md/medium", color: "text-muted", children: memo }),
        closure_10(channel(navigation[22]).TableRow.Arrow, {}),
      ];
      obj3.children = items2;
      obj2.trailing = closure_11(View, obj3);
      let tmp11 = isMuted;
      if (!isMuted) {
        tmp11 = isGuildMuted;
      }
      const obj4 = { children: null };
      obj2.disabled = tmp11;
      const items3 = [closure_10(channel(navigation[22]).TableRow, obj2)];
      let obj = channel(navigation[24]);
      items3[1] = closure_10(View, {
        style: tmp.hint,
        children: closure_10(channel(navigation[26]).MuteSettingsHint, {
          isMuted,
          isGuildMuted,
          guildMessageNotifications: guildMessageNotifications.guildMessageNotifications,
        }),
      });
      obj4.children = items3;
      return closure_11(closure_12, obj4);
    };
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ConnectedChannelMuteScreen() {
        const cResult = require("c").c(43);
        let obj = require("c");
        _require = closure_13();
        const tmp4 = closure_13();
        const navigation = require("useNavigation").useNavigation();
        const obj2 = require("useNavigation");
        const route = require("Link").useRoute();
        channelId = route.params.channelId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          let fn = function s() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        const obj3 = require("Link");
        const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp9);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildStore];
          cResult[3] = items1;
          let tmp11 = items1;
        } else {
          tmp11 = cResult[3];
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
          class I {
            constructor() {
              guild_id = undefined;
              tmp = closure_6;
              if (closure_3 != null) {
                guild_id = closure_3.guild_id;
              }
              return closure_6.getGuild(guild_id);
            }
          }
          cResult[4] = guild_id1;
          cResult[5] = I;
          let tmp14 = I;
        } else {
          tmp14 = cResult[5];
        }
        const tmpResult = require("useStateFromStores");
        const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp11, tmp14);
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === stateFromStores1) {
            let tmp17 = cResult[8];
          }
          closure_4 = tmp17;
          class I {
            constructor() {
              guild_id = undefined;
              tmp = closure_6;
              if (closure_3 != null) {
                guild_id = closure_3.guild_id;
              }
              return closure_6.getGuild(guild_id);
            }
          }
          const muteSettingSublabel = tmp(tmp2[16]).getMuteSettingSublabel(stateFromStores, stateFromStores1);
          cResult[9] = stateFromStores;
          cResult[10] = stateFromStores1;
          cResult[11] = muteSettingSublabel;
          const tmpResult5 = tmp(tmp2[16]);
        }
        const tmpResult4 = require("useStateFromStores");
        const muteSettingLabel = require("MuteSettingsUtils").getMuteSettingLabel(stateFromStores, stateFromStores1);
        cResult[6] = stateFromStores;
        cResult[7] = stateFromStores1;
        cResult[8] = muteSettingLabel;
        tmp17 = muteSettingLabel;
        const tmpResult6 = require("MuteSettingsUtils");
      }
    : function ConnectedChannelMuteScreen() {
        const tmp = closure_13();
        _require = tmp;
        const navigation = require("useNavigation").useNavigation();
        let obj = require("useNavigation");
        const route = require("Link").useRoute();
        channelId = route.params.channelId;
        const applicationId = route.params.applicationId;
        const obj2 = require("Link");
        const items = [closure_5];
        const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
          ChannelStore.getChannel(channelId),
        );
        const obj3 = require("useStateFromStores");
        const items1 = [closure_6];
        const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => {
          let guild_id;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          return GuildStore.getGuild(guild_id);
        });
        const items2 = [stateFromStores, stateFromStores1];
        closure_5 = stateFromStores.useMemo(
          () => MuteSettingsUtils.getMuteSettingLabel(stateFromStores, stateFromStores1),
          items2,
        );
        const items3 = [stateFromStores, stateFromStores1];
        closure_6 = stateFromStores.useMemo(
          () => MuteSettingsUtils.getMuteSettingSublabel(stateFromStores, stateFromStores1),
          items3,
        );
        const obj5 = require("useStateFromStores");
        let isIOSResult = require("PlatformUtils").isIOS();
        if (isIOSResult) {
          let isThreadResult;
          if (stateFromStores != null) {
            isThreadResult = stateFromStores.isThread();
          }
          isIOSResult = isThreadResult;
        }
        RelationshipStore = isIOSResult;
        const layoutEffect = obj6.useLayoutEffect(() => {
          const obj = {
            title: "" + title + " (" + subtitle + ")",
            headerTitle() {
              return closure_2_10(closure_0(channelId[30]).GenericHeaderTitle, { title, subtitle });
            },
            headerRight: null,
            headerTitleAlign: "center",
          };
          let fn;
          if (isIOSResult) {
            fn = () => closure_2_10(stateFromStores1, { style: closure_1_0.headerRightSpacer });
          }
          obj.headerRight = fn;
          navigation.setOptions(obj);
        });
        const items4 = [channelId];
        const memo = obj6.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items4);
        const muted = memo.muted;
        ({ muteConfig, messageNotifications, guildMessageNotifications, guildMuted } = memo);
        let tmp12Result = null;
        if (null != stateFromStores) {
          const obj4 = { style: null, children: null };
          const items5 = [tmp.container];
          const obj8 = { paddingBottom: tmp10 };
          items5[1] = obj8;
          obj4.style = items5;
          if (muted) {
            const obj9 = { channel: stateFromStores, applicationId, muteConfig, navigation };
            let tmp14Result = closure_10(closure_15, obj9);
            let tmp17 = closure_10;
          } else {
            const obj10 = { channel: stateFromStores, applicationId, navigation };
            tmp14Result = closure_10(closure_16, obj10);
            tmp17 = closure_10;
          }
          const items6 = [tmp14Result];
          const isPrivateResult = stateFromStores.isPrivate();
          let tmp17Result = !isPrivateResult;
          if (!isPrivateResult) {
            const obj11 = {
              isMuted: muted,
              isGuildMuted: guildMuted,
              channel: stateFromStores,
              messageNotifications,
              guildMessageNotifications,
            };
            tmp17Result = tmp17(closure_17, obj11);
          }
          items6[1] = tmp17Result;
          obj4.children = items6;
          tmp12Result = closure_11(stateFromStores1, obj4);
        }
        return tmp12Result;
      },
);
