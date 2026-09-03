// === Module 6166: subscribeMembers ===

// Module 6166 (subscribeMembers)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import reset from "reset" /* 6141 */;

let result = set.fileFinishedImporting("actions/GuildSubscriptionsActionCreators.tsx");

export const subscribeMembers = function subscribeMembers(guildId, userIds) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId, userIds };
  obj.dispatch(obj);
};
export const unsubscribeMembers = function unsubscribeMembers(guildId, userIds) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId, userIds };
  obj.dispatch(obj);
};
export const subscribeToMemberUpdates = function subscribeToMemberUpdates(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId };
  obj.dispatch(obj);
};
export const unsubscribeFromMemberUpdates = function unsubscribeFromMemberUpdates(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId };
  obj.dispatch(obj);
};
export const subscribeGuild = function subscribeGuild(id) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS", guildId: id };
  obj.dispatch(obj);
};
export const subscribeChannel = function subscribeChannel(guildId, channelId, ranges) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges };
  obj.dispatch(obj);
};
export const subscribeChannelDimensions = function subscribeChannelDimensions(arg0) {
  ({ y, height, rowHeight } = arg0);
  ({ guildId, channelId } = arg0);
  const bound = Math.max(0, Math.ceil(Math.ceil(0.5 * height / rowHeight)));
  const bound1 = Math.max(0, Math.ceil(Math.ceil(y / rowHeight)) + -bound);
  let num = bound;
  const sum = y + height;
  if (bound === undefined) {
    num = 0;
  }
  const items = [];
  const bound2 = Math.max(0, Math.ceil(Math.ceil(sum / rowHeight)) + num);
  let bound3 = bound1;
  if (bound1 > 0) {
    const _Math = Math;
    const diff = reset.MINIMUM_RANGE - 1;
    const items1 = [0, diff];
    items.push(items1);
    bound3 = Math.max(diff + 1, bound1);
  }
  const rounded = Math.floor(bound3 / reset.MINIMUM_RANGE);
  let result = rounded * reset.MINIMUM_RANGE;
  if (result <= bound2) {
    do {
      let tmp14 = require;
      let tmp15 = dependencyMap;
      let sum1 = result + (reset.MINIMUM_RANGE - 1);
      let items2 = [result, sum1];
      let arr = items.push(items2);
      result = sum1 + 1;
      let tmp11 = dependencyMap;
    } while (result <= bound2);
  }
  dispatcherDefault.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges: items });
};