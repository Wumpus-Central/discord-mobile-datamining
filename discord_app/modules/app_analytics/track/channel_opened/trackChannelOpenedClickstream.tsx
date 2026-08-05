// discord_app/modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import { StaticChannelRoute } from "set";

let c3;
let c4;
const require = arg1;
({ ChannelTypes: c3, AnalyticEvents: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx");

export default function trackChannelOpenedClickstream(channelId) {
  channelId = channelId.channelId;
  if (StaticChannelRoute.VIBEGRATIONS !== channelId) {
    if (tmp.CHANNEL_BROWSER !== channelId) {
      if (tmp.GUILD_HOME !== channelId) {
        if (tmp.GUILD_SHOP !== channelId) {
          if (tmp.GAME_SHOP !== channelId) {
            if (tmp.MEMBER_APPLICATIONS !== channelId) {
              if (tmp.ROLE_SUBSCRIPTIONS !== channelId) {
                if (tmp.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (tmp.MEMBER_SAFETY !== channelId) {
                    if (tmp.GUILD_ONBOARDING !== channelId) {
                      if (tmp.GUILD_BOOSTS !== channelId) {
                        let obj = require("../../clickstream/Clickstream.tsx") /* isClickstreamEnabled */;
                        obj = { channel_id: null, channel_type: null };
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