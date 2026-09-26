// === Module 9606: NotificationSettingsChannel ===

// Module 9606 (NotificationSettingsChannel)
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 9607 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  _require = channel;
  const channelPresetInheritance = require("notficationSettingsChannelFlagUtils").useChannelPresetInheritance(channel.channel);
  const intl = require("util").intl;
  importDefault = intl.string(require("util").t.h850Ss);
  dependencyMap = useChannelNameDefault(channel.channel);
  let obj = require("notficationSettingsChannelFlagUtils");
  noop = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const layoutEffect = noop.useLayoutEffect(() => {
    options.setOptions({
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_6(closure_0(subtitle[10]).NavigatorHeader, { title, subtitle });
      }
    });
    if (channel.inGuildContext) {
      const obj3 = { headerLeft: NavigatorHeader.getHeaderBackButton(() => options.popToTop()) };
      options.setOptions(obj3);
    }
    const obj2 = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_6(closure_0(subtitle[10]).NavigatorHeader, { title, subtitle });
      }
    };
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = noop.useCallback(() => notficationSettingsChannelFlagUtils.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id), items);
  const callback1 = noop.useCallback(() => {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const result = obj.updateChannelOverrideSettings({ guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted });
  }, items1);
  const tmp4 = closure_8();
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => ({ config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) }));
  let obj4 = { style: tmp4.screenContainer, children: null };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    const obj5 = { style: { marginBottom: 16 }, title: null, subtitle: null, onPressUnmute: null };
    const intl2 = tmp(1115).intl;
    obj5.title = intl2.string(tmp(1115).t["6MCxAy"]);
    obj5.subtitle = tmp(9609).getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj5.onPressUnmute = callback1;
    muted = closure_6(tmp(9609).NotificationSettingsMuteBanner, obj5);
    const tmpResult = tmp(9609);
  }
  const items3 = [muted, closure_6(require("NotificationSettingsPresets").NotificationSettingsChannelPresets, { channel: channel.channel }), closure_6(require("NotificationSettingsMessageNotification").NotificationSettingsChannelMessageNotification, { style: { marginTop: 24 }, channel: channel.channel }), closure_6(require("NotificationSettingsMessageUnread").NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel }), , ];
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const obj9 = { style: { marginTop: 24 }, channel: channel.channel };
    isForumLikeChannelResult = closure_6(tmp(9629).NotificationSettingsChannelPost, obj9);
  }
  items3[4] = isForumLikeChannelResult;
  const inherited = channelPresetInheritance.inherited;
  let tmp11Result = !inherited;
  if (!inherited) {
    const obj10 = { style: { marginTop: 24 }, children: null };
    const obj11 = { variant: "secondary", onPress: callback, text: null };
    const intl3 = tmp(1115).intl;
    obj11.text = intl3.string(tmp(1115).t["3PBFN6"]);
    obj10.children = closure_6(tmp(5281).Button, obj11);
    tmp11Result = closure_6(View, obj10);
  }
  items3[5] = tmp11Result;
  obj4.children = items3;
  return closure_7(require("Form").Form, obj4);
};