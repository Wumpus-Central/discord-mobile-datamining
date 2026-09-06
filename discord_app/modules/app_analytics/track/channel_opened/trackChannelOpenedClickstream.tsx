// discord_app/modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx
import Clickstream from "../../clickstream/Clickstream.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const Constants = fn(1074);
({ ChannelTypes: c3, AnalyticEvents: closure_4 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx",
);

export default function trackChannelOpenedClickstream(channelId) {
  channelId = channelId.channelId;
  if (StaticChannelRoute.VIBEGRATIONS !== channelId) {
    if (StaticChannelRoute.CHANNEL_BROWSER !== channelId) {
      if (StaticChannelRoute.GUILD_HOME !== channelId) {
        if (StaticChannelRoute.GUILD_SHOP !== channelId) {
          if (StaticChannelRoute.GAME_SHOP !== channelId) {
            if (StaticChannelRoute.MEMBER_APPLICATIONS !== channelId) {
              if (StaticChannelRoute.ROLE_SUBSCRIPTIONS !== channelId) {
                if (StaticChannelRoute.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (StaticChannelRoute.MEMBER_SAFETY !== channelId) {
                    if (StaticChannelRoute.GUILD_ONBOARDING !== channelId) {
                      if (StaticChannelRoute.GUILD_BOOSTS !== channelId) {
                        const obj = { channel_id: channelId, channel_type: null };
                        const channel = ChannelStore.getChannel(channelId);
                        let type;
                        if (channel != null) {
                          type = channel.type;
                        }
                        if (type == null) {
                          type = constants.UNKNOWN;
                        }
                        obj.channel_type = type;
                        obj.trackClickstream(constants2.CHANNEL_OPENED_CLICKSTREAM, obj);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
