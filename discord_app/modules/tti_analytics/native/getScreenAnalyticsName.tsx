// === Module 16434: getScreenAnalyticsName ===

// Module 16434 (getScreenAnalyticsName)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4686 */;
import RootNavigationRef from "RootNavigationRef" /* 4687 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
const ACCEPT_INVITE_MODAL_KEY = fn(7994).ACCEPT_INVITE_MODAL_KEY;
const isStaticChannelRoute = fn(2051).isStaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/getScreenAnalyticsName.tsx");

export default function getScreenAnalyticsName() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  if (null == currentRoute) {
    return null;
  } else {
    if (tmpResult.isModalOpen(ACCEPT_INVITE_MODAL_KEY)) {
      return "invite";
    } else {
      ({ name, params } = currentRoute);
      if (params != null) {
        const channelId = params.channelId;
      }
      if ("channel" === name) {
        if (null != channelId) {
          let tmp7 = channelId;
          if (!isStaticChannelRoute(channelId)) {
            const channel = ChannelStore.getChannel(channelId);
            let str3 = "unknown-channel";
            if (null != channel) {
              let str4 = "thread";
              if (!channel.isThread()) {
                let str5 = "private_channel";
                if (!channel.isPrivate()) {
                  let str6 = "guild-voice";
                  if (!channel.isGuildVocal()) {
                    let str7 = "guild-forum";
                    if (!channel.isForumLikeChannel()) {
                      let str8 = "guild-text";
                      if (channel.isDirectory()) {
                        str8 = "guild-directory";
                      }
                      str7 = str8;
                    }
                    str6 = str7;
                  }
                  str5 = str6;
                }
                str4 = str5;
              }
              str3 = str4;
            }
            tmp7 = str3;
          }
          let combined = tmp7;
        }
        return combined;
      }
      const _HermesInternal = HermesInternal;
      combined = "redesign-" + name;
    }
    tmpResult = NavigationRouteUtils;
  }
};
export const getChannelScreenName = function getChannelScreenName(channelId) {
  if (isStaticChannelRoute(channelId)) {
    return channelId;
  } else {
    const channel = ChannelStore.getChannel(channelId);
    let str = "unknown-channel";
    if (null != channel) {
      let str2 = "thread";
      if (!channel.isThread()) {
        let str3 = "private_channel";
        if (!channel.isPrivate()) {
          let str4 = "guild-voice";
          if (!channel.isGuildVocal()) {
            let str5 = "guild-forum";
            if (!channel.isForumLikeChannel()) {
              let str6 = "guild-text";
              if (channel.isDirectory()) {
                str6 = "guild-directory";
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};