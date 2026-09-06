// === Module 11672: ChannelFollowerStatsStore ===

// Module 11672 (ChannelFollowerStatsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const constants = { FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_1 = {};
const Store = initializeDefault.Store;
class ChannelFollowerStatsStore extends Store {
}
ChannelFollowerStatsStore.prototype["getFollowerStatsForChannel"] = function getFollowerStatsForChannel(arg0) {
  return closure_1[arg0];
};
ChannelFollowerStatsStore.displayName = "ChannelFollowerStatsStore";
const channelFollowerStatsStore = new ChannelFollowerStatsStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_1 = {};
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function handleFollowerStatsFetchSuccess(stats) {
    stats = stats.stats;
    if (null == stats) {
      stats = {};
    }
    closure_1[stats.channelId] = { loadingStatus: constants.SUCCEEDED, lastFetched: Date.now(), channelsFollowing: stats.channels_following, guildMembers: stats.guild_members, guildsFollowing: stats.guilds_following, usersSeenEver: stats.users_seen_ever, subscribersGainedSinceLastPost: stats.subscribers_gained_since_last_post, subscribersLostSinceLastPost: stats.subscribers_lost_since_last_post };
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function handleFollowerStatsFetchFailure(channelId) {
    closure_1[channelId.channelId] = { loadingStatus: constants.FAILED, lastFetched: Date.now(), channelsFollowing: 0, guildMembers: 0, guildsFollowing: 0, usersSeenEver: 0, subscribersGainedSinceLastPost: 0, subscribersLostSinceLastPost: 0 };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/ChannelFollowerStatsStore.tsx");

export default channelFollowerStatsStore;