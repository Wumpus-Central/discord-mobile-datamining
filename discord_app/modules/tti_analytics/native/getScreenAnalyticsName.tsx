// discord_app/modules/tti_analytics/native/getScreenAnalyticsName.tsx
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import AcceptInviteConstants from "../../accept_invite/native/AcceptInviteConstants.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ACCEPT_INVITE_MODAL_KEY = AcceptInviteConstants.ACCEPT_INVITE_MODAL_KEY;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const result = size.fileFinishedImporting("modules/tti_analytics/native/getScreenAnalyticsName.tsx");

export default function getScreenAnalyticsName() {
  let name;
  let params;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  if (null == currentRoute) {
    return null;
  } else {
    const tmpResult = NavigationRouteUtils;
    if (tmpResult.isModalOpen(ACCEPT_INVITE_MODAL_KEY)) {
      return "invite";
    } else {
      let channelId;
      ({ name, params } = currentRoute);
      if (params != null) {
        channelId = params.channelId;
      }
      if ("channel" === name) {
        let combined;
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
          combined = tmp7;
        }
        return combined;
      }
      const _HermesInternal = HermesInternal;
      combined = "redesign-" + name;
    }
  }
}
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
