// === Module 10089: NotificationSettingsChannel ===

// Module 10089 (NotificationSettingsChannel)
import ThemesDefault from "Themes" /* 712 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  const _require = channel;
  let obj = _require(10090);
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = _require(1236).intl;
  importDefault = intl.string(_require(1236).t.h850Ss);
  dependencyMap = computeChannelNameDefault(channel.channel);
  obj1 = _require(1500);
  const React = obj1.useNavigation();
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = {
      title: "" + closure_1 + " (" + dependencyMap + ")",
      headerTitle() {
        return closure_1_6(channel(closure_1_2[10]).NavigatorHeader, { title: closure_1, subtitle: closure_2 });
      }
    };
    options.setOptions(obj);
    if (channel.inGuildContext) {
      obj = { headerLeft: null };
      obj[0] = channel(6314).getHeaderBackButton(() => closure_3.popToTop());
      obj.setOptions(obj);
      const obj4 = channel(6314);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = React.useCallback(() => channel(10090).updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id), items);
  const callback1 = React.useCallback(() => {
    const result = callback(6798).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, { muted: false }, channel(6795).NotificationLabels.Unmuted);
  }, items1);
  let obj2 = _require(589);
  const items2 = [closure_5];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ config: closure_1_5.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: closure_1_5.isChannelMuted(channel.channel.guild_id, channel.channel.id) }));
  obj = { style: callback2().screenContainer, children: null };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    obj = { style: null, title: null, subtitle: null, onPressUnmute: null };
    obj[0] = { marginBottom: 16 };
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t["6MCxAy"]);
    obj[2] = tmp(10092).getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj[3] = callback1;
    muted = callback(tmp(10092).NotificationSettingsMuteBanner, obj);
    const tmpResult = tmp(10092);
  }
  const items3 = [muted, , , , , ];
  obj1 = { channel: channel.channel };
  items3[1] = callback(_require(10093).NotificationSettingsChannelPresets, obj1);
  obj2 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = callback(_require(10099).NotificationSettingsChannelMessageNotification, obj2);
  items3[3] = callback(_require(10106).NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel });
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    let obj4 = { style: null, channel: null };
    obj4[0] = { marginTop: 24 };
    obj4[1] = channel.channel;
    isForumLikeChannelResult = tmp11(tmp(10112).NotificationSettingsChannelPost, obj4);
  }
  items3[4] = isForumLikeChannelResult;
  const inherited = channelPresetInheritance.inherited;
  let tmp11Result = !inherited;
  if (!inherited) {
    const obj5 = { style: null, children: null };
    obj5[0] = { marginTop: 24 };
    const obj6 = { variant: "secondary", onPress: null, text: null };
    obj6[1] = callback;
    const intl3 = tmp(1236).intl;
    obj6[2] = intl3.string(tmp(1236).t["3PBFN6"]);
    obj5[1] = tmp11(tmp(4745).Button, obj6);
    tmp11Result = tmp11(View, obj5);
  }
  items3[5] = tmp11Result;
  obj[1] = items3;
  return callback(_require(8083).Form, obj);
};