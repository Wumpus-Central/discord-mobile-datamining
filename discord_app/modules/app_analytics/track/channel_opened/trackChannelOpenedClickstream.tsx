// discord_app/modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx
import isClickstreamEnabled from "../../clickstream/Clickstream.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import ME from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";

require = fn;
({ ChannelTypes: c3, AnalyticEvents: c4 } = ME);
const result = require("obj132").fileFinishedImporting("modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx");

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
                        const obj = { channel_id: null, channel_type: null };
                        obj[0] = channelId;
                        channel = channel.getChannel(channelId);
                        let type;
                        if (channel != null) {
                          type = channel.type;
                        }
                        if (type == null) {
                          type = constants.UNKNOWN;
                        }
                        obj[1] = type;
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
};