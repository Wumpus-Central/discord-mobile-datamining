// === Module 7403: trackChannelOpenedClickstream ===

// Module 7403 (trackChannelOpenedClickstream)
import ChannelConstants from "ChannelConstants" /* 2058 */;
import Clickstream from "Clickstream" /* 6974 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ChannelTypes: c3, AnalyticEvents: closure_4 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx");

export default function trackChannelOpenedClickstream(channelId) {
  let type;
  channelId = channelId.channelId;
  if (StaticChannelRoute.CONJURE !== channelId) {
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
                        const obj = { channel_id: channelId, channel_type: type };
                        const trackClickstream = Clickstream.trackClickstream;
                        const CHANNEL_OPENED_CLICKSTREAM = constants2.CHANNEL_OPENED_CLICKSTREAM;
                        Clickstream;
                        const channel = ChannelStore.getChannel(channelId);
                        type = undefined;
                        if (channel != null) {
                          type = channel.type;
                        }
                        if (type == null) {
                          type = constants.UNKNOWN;
                        }
                        trackClickstream(CHANNEL_OPENED_CLICKSTREAM, obj);
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