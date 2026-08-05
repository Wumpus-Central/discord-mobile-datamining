// discord_app/modules/notifications/settings/native/NotificationSettingsChannel.tsx
import NotificationSettingsChannelPost from "NotificationSettingsChannelPost";
import { View } from "NotificationSettingsMessageNotification";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { screenContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default function NotificationSettingsChannel(channel) {
  const _require = channel;
  let obj = _require(9741);
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = _require(1236).intl;
  const importDefault = intl.string(_require(1236).t.h850Ss);
  const dependencyMap = importDefault(4475)(channel.channel);
  let obj1 = _require(1480);
  const React = obj1.useNavigation();
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = options;
    obj = {
      title: "" + closure_1 + " (" + dependencyMap + ")",
      headerTitle() {
        return outer1_6(outer1_0(outer1_2[10]).NavigatorHeader, { title: closure_1, subtitle: closure_2 });
      }
    };
    options.setOptions(obj);
    if (channel.inGuildContext) {
      obj = { headerLeft: null };
      obj[0] = channel(5238).getHeaderBackButton(() => NotificationSettingsChannelPost.popToTop());
      obj.setOptions(obj);
      const obj4 = channel(5238);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = React.useCallback(() => channel(9741).updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id), items);
  const callback1 = React.useCallback(() => {
    const result = callback(5230).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, { muted: false }, channel(5225).NotificationLabels.Unmuted);
  }, items1);
  let obj2 = _require(589);
  const items2 = [updateUserGuildSettingsInternal];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ config: outer1_5.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: outer1_5.isChannelMuted(channel.channel.guild_id, channel.channel.id) }));
  obj = { style: createCacheKey().screenContainer, children: null };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    obj = { style: null, title: null, subtitle: null, onPressUnmute: null };
    obj[0] = { marginBottom: 16 };
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t["6MCxAy"]);
    obj[2] = tmp(9743).getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj[3] = callback1;
    muted = callback(tmp(9743).NotificationSettingsMuteBanner, obj);
    const tmpResult = tmp(9743);
  }
  const items3 = [muted, , , , , ];
  obj1 = { channel: channel.channel };
  items3[1] = callback(_require(9744).NotificationSettingsChannelPresets, obj1);
  obj2 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = callback(_require(9748).NotificationSettingsChannelMessageNotification, obj2);
  items3[3] = callback(_require(9755).NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel });
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    let obj4 = { style: null, channel: null };
    obj4[0] = { marginTop: 24 };
    obj4[1] = channel.channel;
    isForumLikeChannelResult = tmp11(tmp(9761).NotificationSettingsChannelPost, obj4);
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
    obj5[1] = tmp11(tmp(4695).Button, obj6);
    tmp11Result = tmp11(View, obj5);
  }
  items3[5] = tmp11Result;
  obj[1] = items3;
  return closure_7(_require(7777).Form, obj);
};