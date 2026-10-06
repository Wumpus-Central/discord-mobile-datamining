// === Module 12512: NotificationSettingsChannel ===

// Module 12512 (NotificationSettingsChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 9864 */;
import react_mod from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap, importDefault, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { screenContainer: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_2;
  let first;
  _require = channel;
  let obj = require("react");
  const cResult = obj.c(39);
  let obj2 = require("notficationSettingsChannelFlagUtils");
  const channelPresetInheritance = obj2.useChannelPresetInheritance(channel.channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.h850Ss);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp7 = first(5049)(channel.channel);
  dependencyMap = tmp7;
  const tmpResult = require("useNavigation");
  navigation = tmpResult.useNavigation();
  closure_8();
  if (cResult[1] === navigation) {
    if (cResult[2] === channel.inGuildContext) {
      let tmp10;
      if (cResult[3] === tmp7) {
        tmp10 = cResult[4];
      }
      const layoutEffect = navigation.useLayoutEffect(tmp10);
      if (cResult[5] === channel.channel.guild_id) {
        if (cResult[8] === channel.channel.guild_id) {
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [UserGuildSettingsStore];
            class S {
              constructor() {
                const obj = notficationSettingsChannelFlagUtils;
                return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
              }
            }
            class M {
              constructor() {
                const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                return obj;
              }
            }
          }
          class S {
            constructor() {
              const obj = notficationSettingsChannelFlagUtils;
              return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
            }
          }
          class M {
            constructor() {
              const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
              return obj;
            }
          }
          cResult[12] = channel.channel.guild_id;
          cResult[13] = channel.channel.id;
          cResult[14] = M;
        }
        const fn2 = function v() {
          const obj = NotificationSettingsModalActionCreatorsDefault;
          const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
          const result = obj.updateChannelOverrideSettings(obj2);
        };
        class S {
          constructor() {
            const obj = notficationSettingsChannelFlagUtils;
            return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
          }
        }
        cResult[9] = channel.channel.id;
        cResult[10] = fn2;
      }
      class S {
        constructor() {
          const obj = notficationSettingsChannelFlagUtils;
          return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
        }
      }
      cResult[5] = channel.channel.guild_id;
      cResult[6] = channel.channel.id;
      cResult[7] = S;
    }
  }
  const fn = function _() {
    let obj3;
    let title;
    let obj = {
      title: "" + first + " (" + subtitle + ")",
      headerTitle() {
        const obj = { title, subtitle };
        return closure_2_6(channel(subtitle[12]).NavigatorHeader, obj);
      }
    };
    navigation.setOptions(obj);
    if (channel.inGuildContext) {
      const setOptions = navigation.setOptions;
      const obj2 = { headerLeft: obj3.getHeaderBackButton(() => navigation.popToTop()) };
      obj3 = NavigatorHeader;
      setOptions(obj2);
    }
  };
  cResult[1] = navigation;
  cResult[2] = channel.inGuildContext;
  cResult[3] = tmp7;
  cResult[4] = fn;
  tmp10 = fn;
}) : ((channel) => {
  let Button;
  let closure_1;
  let closure_2;
  let intl2;
  let intl3;
  let items3;
  let obj11;
  let options;
  let tmpResult;
  _require = channel;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = require("intl").intl;
  importDefault = intl.string(require("intl").t.h850Ss);
  dependencyMap = useChannelNameDefault(channel.channel);
  let obj2 = require("useNavigation");
  react = obj2.useNavigation();
  const tmp4 = closure_8();
  const layoutEffect = react.useLayoutEffect(() => {
    let obj3;
    let obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        const obj = { title, subtitle };
        return closure_2_6(channel(subtitle[12]).NavigatorHeader, obj);
      }
    };
    options.setOptions(obj);
    if (channel.inGuildContext) {
      const setOptions = options.setOptions;
      const obj2 = { headerLeft: obj3.getHeaderBackButton(() => options.popToTop()) };
      obj3 = NavigatorHeader;
      setOptions(obj2);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = react.useCallback(() => {
    const obj = notficationSettingsChannelFlagUtils;
    return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
    const result = obj.updateChannelOverrideSettings(obj2);
  }, items1);
  let obj3 = require("get initialized");
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
    return obj;
  });
  let muted = stateFromStoresObject.muted;
  const obj4 = { style: tmp4.screenContainer, children: items3 };
  const Form = require("Form").Form;
  if (muted) {
    const obj5 = { style: { marginBottom: 16 }, title: intl2.string(require("intl").t["6MCxAy"]), subtitle: tmpResult.getMuteBannerSubtitleFromConfig(stateFromStoresObject.config), onPressUnmute: callback1 };
    const NotificationSettingsMuteBanner = tmp(12513).NotificationSettingsMuteBanner;
    intl2 = tmp(1126).intl;
    tmpResult = require("NotificationSettingsMuteBanner");
    muted = closure_6(NotificationSettingsMuteBanner, obj5);
  }
  items3 = [muted, , , , , ];
  const obj6 = { channel: channel.channel };
  items3[1] = closure_6(require("NotificationSettingsPresets").NotificationSettingsChannelPresets, obj6);
  const obj7 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = closure_6(require("NotificationSettingsMessageNotification").NotificationSettingsChannelMessageNotification, obj7);
  const obj8 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[3] = closure_6(require("NotificationSettingsMessageUnread").NotificationSettingsChannelMessageUnread, obj8);
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const obj9 = { style: { marginTop: 24 }, channel: channel.channel };
    isForumLikeChannelResult = closure_6(tmp(12530).NotificationSettingsChannelPost, obj9);
  }
  items3[4] = isForumLikeChannelResult;
  let tmp11Result = !channelPresetInheritance.inherited;
  if (tmp11Result) {
    const obj10 = { style: { marginTop: 24 }, children: closure_6(Button, obj11) };
    obj11 = { variant: "secondary", onPress: callback, text: intl3.string(require("intl").t["3PBFN6"]) };
    Button = tmp(5601).Button;
    intl3 = tmp(1126).intl;
    tmp11Result = closure_6(View, obj10);
  }
  items3[5] = tmp11Result;
  return closure_7(Form, obj4);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default tmp3;