// === Module 10148: NotificationSettingsChannel ===

// Module 10148 (NotificationSettingsChannel)
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 10149 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { screenContainer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
createStyles.screenContainer = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  _require = channel;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = require("util").intl;
  importDefault = intl.string(require("util").t.h850Ss);
  dependencyMap = useChannelNameDefault(channel.channel);
  let obj1 = require("useNavigation");
  noop = obj1.useNavigation();
  const layoutEffect = noop.useLayoutEffect(() => {
    let obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        return closure_2_6(closure_0(subtitle[10]).NavigatorHeader, { title, subtitle });
      }
    };
    options.setOptions(obj);
    if (channel.inGuildContext) {
      obj = { headerLeft: NavigatorHeader.getHeaderBackButton(() => options.popToTop()) };
      obj.setOptions(obj);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = noop.useCallback(() => notficationSettingsChannelFlagUtils.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id), items);
  const callback1 = noop.useCallback(() => {
    const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
  }, items1);
  let obj2 = require("initialize");
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) }));
  obj = { style: closure_8().screenContainer, children: null };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    obj = { style: { marginBottom: 16 }, title: null, subtitle: null, onPressUnmute: null };
    const intl2 = tmp(1114).intl;
    obj.title = intl2.string(tmp(1114).t["6MCxAy"]);
    obj.subtitle = tmp(10151).getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj.onPressUnmute = callback1;
    muted = closure_6(tmp(10151).NotificationSettingsMuteBanner, obj);
    const tmpResult = tmp(10151);
  }
  const items3 = [muted, , , , , ];
  obj1 = { channel: channel.channel };
  items3[1] = closure_6(require("NotificationSettingsPresets").NotificationSettingsChannelPresets, obj1);
  obj2 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = closure_6(require("NotificationSettingsMessageNotification").NotificationSettingsChannelMessageNotification, obj2);
  items3[3] = closure_6(require("NotificationSettingsMessageUnread").NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel });
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    let obj4 = { style: { marginTop: 24 }, channel: channel.channel };
    isForumLikeChannelResult = closure_6(tmp(10169).NotificationSettingsChannelPost, obj4);
  }
  items3[4] = isForumLikeChannelResult;
  const inherited = channelPresetInheritance.inherited;
  let tmp11Result = !inherited;
  if (!inherited) {
    const obj5 = { style: { marginTop: 24 }, children: null };
    const obj6 = { variant: "secondary", onPress: callback, text: null };
    const intl3 = tmp(1114).intl;
    obj6.text = intl3.string(tmp(1114).t["3PBFN6"]);
    obj5.children = closure_6(tmp(4975).Button, obj6);
    tmp11Result = closure_6(View, obj5);
  }
  items3[5] = tmp11Result;
  obj.children = items3;
  return closure_7(require("Form").Form, obj);
};