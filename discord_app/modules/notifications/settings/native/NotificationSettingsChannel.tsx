// discord_app/modules/notifications/settings/native/NotificationSettingsChannel.tsx
import NotificationSettingsChannelPost from "NotificationSettingsChannelPost";
import { View } from "NotificationSettingsMessageNotification";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { computeChannelName } from "../../../channel/useChannelName.tsx";
import { useChannelPresetSettings } from "../utils/notficationSettingsChannelFlagUtils.tsx";
import { NotificationSettingsMessageNotification } from "NotificationSettingsMessageNotification.tsx";
import { NotificationSettingsMessageUnread } from "NotificationSettingsMessageUnread.tsx";
import { NotificationSettingsPresets } from "NotificationSettingsPresets.tsx";

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
  let obj = _useChannelPresetSettings;
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = _getSystemLocale.intl;
  const importDefault = intl.string(_getSystemLocale.t.h850Ss);
  const dependencyMap = computeChannelName(channel.channel);
  let obj1 = _useNavigation;
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
      obj[0] = channel(5270).getHeaderBackButton(() => NotificationSettingsChannelPost.popToTop());
      obj.setOptions(obj);
      const obj4 = channel(5270);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = React.useCallback(() => channel(9826).updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id), items);
  const callback1 = React.useCallback(() => {
    const result = callback(5262).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, { muted: false }, channel(5257).NotificationLabels.Unmuted);
  }, items1);
  let obj2 = _initialize;
  const items2 = [updateUserGuildSettingsInternal];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => ({ config: outer1_5.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: outer1_5.isChannelMuted(channel.channel.guild_id, channel.channel.id) }));
  obj = { style: createCacheKey().screenContainer, children: null };
  let muted = stateFromStoresObject.muted;
  if (muted) {
    obj = { style: null, title: null, subtitle: null, onPressUnmute: null };
    obj[0] = { marginBottom: 16 };
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t["6MCxAy"]);
    obj[2] = tmp(9828).getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
    obj[3] = callback1;
    muted = callback(tmp(9828).NotificationSettingsMuteBanner, obj);
    const tmpResult = tmp(9828);
  }
  const items3 = [muted, , , , , ];
  obj1 = { channel: channel.channel };
  items3[1] = callback(_NotificationSettingsPresets.NotificationSettingsChannelPresets, obj1);
  obj2 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = callback(_NotificationSettingsMessageNotification.NotificationSettingsChannelMessageNotification, obj2);
  items3[3] = callback(_NotificationSettingsMessageUnread.NotificationSettingsChannelMessageUnread, { style: { marginTop: 24 }, channel: channel.channel });
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    let obj4 = { style: null, channel: null };
    obj4[0] = { marginTop: 24 };
    obj4[1] = channel.channel;
    isForumLikeChannelResult = tmp11(tmp(9846).NotificationSettingsChannelPost, obj4);
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
    obj5[1] = tmp11(tmp(4714).Button, obj6);
    tmp11Result = tmp11(View, obj5);
  }
  items3[5] = tmp11Result;
  obj[1] = items3;
  return closure_7(_Form.Form, obj);
};