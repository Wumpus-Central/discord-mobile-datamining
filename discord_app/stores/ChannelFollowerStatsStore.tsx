// discord_app/stores/ChannelFollowerStatsStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_1;

const constants = { FAILED: "failed", SUCCEEDED: "succeeded" };
const Store = get_initializedDefault.Store;
class ChannelFollowerStatsStore extends Store {
  getFollowerStatsForChannel(arg0) {
    return closure_1[arg0];
  }
}
const prototype = ChannelFollowerStatsStore.prototype;
ChannelFollowerStatsStore.displayName = "ChannelFollowerStatsStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_1 = {};
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function handleFollowerStatsFetchSuccess(stats) {
    stats = stats.stats;
    const channelId = stats.channelId;
    if (null == stats) {
      stats = {};
    }
    closure_1[channelId] = {
      loadingStatus: constants.SUCCEEDED,
      lastFetched: Date.now(),
      channelsFollowing: stats.channels_following,
      guildMembers: stats.guild_members,
      guildsFollowing: stats.guilds_following,
      usersSeenEver: stats.users_seen_ever,
      subscribersGainedSinceLastPost: stats.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: stats.subscribers_lost_since_last_post,
    };
    ({
      loadingStatus: constants.SUCCEEDED,
      lastFetched: Date.now(),
      channelsFollowing: stats.channels_following,
      guildMembers: stats.guild_members,
      guildsFollowing: stats.guilds_following,
      usersSeenEver: stats.users_seen_ever,
      subscribersGainedSinceLastPost: stats.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: stats.subscribers_lost_since_last_post,
    });
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function handleFollowerStatsFetchFailure(channelId) {
    closure_1[channelId.channelId] = {
      loadingStatus: constants.FAILED,
      lastFetched: Date.now(),
      channelsFollowing: 0,
      guildMembers: 0,
      guildsFollowing: 0,
      usersSeenEver: 0,
      subscribersGainedSinceLastPost: 0,
      subscribersLostSinceLastPost: 0,
    };
    ({
      loadingStatus: constants.FAILED,
      lastFetched: Date.now(),
      channelsFollowing: 0,
      guildMembers: 0,
      guildsFollowing: 0,
      usersSeenEver: 0,
      subscribersGainedSinceLastPost: 0,
      subscribersLostSinceLastPost: 0,
    });
  },
};
const channelFollowerStatsStore = new ChannelFollowerStatsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ChannelFollowerStatsStore.tsx");

export default channelFollowerStatsStore;
