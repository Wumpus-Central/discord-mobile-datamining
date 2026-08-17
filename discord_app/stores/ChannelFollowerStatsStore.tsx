// discord_app/stores/ChannelFollowerStatsStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = { FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_1 = {};
const Store = initializeDefault.Store;
class ChannelFollowerStatsStore extends Store {
}
ChannelFollowerStatsStore.prototype["getFollowerStatsForChannel"] = function getFollowerStatsForChannel(closure_0) {
  return table[closure_0];
};
ChannelFollowerStatsStore.displayName = "ChannelFollowerStatsStore";
const channelFollowerStatsStore = new ChannelFollowerStatsStore(dispatcherDefault, {
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
const result = require("set").fileFinishedImporting("stores/ChannelFollowerStatsStore.tsx");

export default channelFollowerStatsStore;