// discord_app/actions/GuildSubscriptionsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import GuildChannelSubscriptions from "../lib/guild/GuildChannelSubscriptions.tsx";
import size from "../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("actions/GuildSubscriptionsActionCreators.tsx");

export const subscribeMembers = function subscribeMembers(guildId, userIds) {
  const obj = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId, userIds };
  obj.dispatch(obj);
};
export const unsubscribeMembers = function unsubscribeMembers(guildId, userIds) {
  const obj = { type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId, userIds };
  obj.dispatch(obj);
};
export const subscribeToMemberUpdates = function subscribeToMemberUpdates(guildId) {
  const obj = { type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId };
  obj.dispatch(obj);
};
export const unsubscribeFromMemberUpdates = function unsubscribeFromMemberUpdates(guildId) {
  const obj = { type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId };
  obj.dispatch(obj);
};
export const subscribeGuild = function subscribeGuild(guildId) {
  const obj = { type: "GUILD_SUBSCRIPTIONS", guildId };
  obj.dispatch(obj);
};
export const subscribeChannel = function subscribeChannel(guildId, channelId, ranges) {
  const obj = { type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges };
  obj.dispatch(obj);
};
export const subscribeChannelDimensions = function subscribeChannelDimensions(arg0) {
  ({ y, height, rowHeight } = arg0);
  ({ guildId, channelId } = arg0);
  const bound = Math.max(0, Math.ceil(Math.ceil((0.5 * height) / rowHeight)));
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
    const diff = GuildChannelSubscriptions.MINIMUM_RANGE - 1;
    const items1 = [0, diff];
    items.push(items1);
    bound3 = Math.max(diff + 1, bound1);
  }
  const rounded = Math.floor(bound3 / GuildChannelSubscriptions.MINIMUM_RANGE);
  let result = rounded * GuildChannelSubscriptions.MINIMUM_RANGE;
  if (result <= bound2) {
    do {
      let sum1 = result + (GuildChannelSubscriptions.MINIMUM_RANGE - 1);
      let items2 = [result, sum1];
      let arr = items.push(items2);
      result = sum1 + 1;
    } while (result <= bound2);
  }
  DispatcherDefault.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId, channelId, ranges: items });
};
