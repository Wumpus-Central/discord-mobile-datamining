// discord_app/modules/guild_scheduled_events/utils/EntityUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_1;
let obj1;
({ GuildScheduledEventEntityTypes: closure_1, EntityChannelTypes: obj1 } = GUILD_EVENT_MAX_NAME_LENGTH);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/EntityUtils.tsx");

export const getChannelFromEvent = function getChannelFromEvent(entity_type) {
  let tmp2 = entity_type.entity_type in closure_2;
  if (tmp2) {
    tmp2 = null != tmp;
  }
  let tmp4;
  if (tmp2) {
    channel = channel.getChannel(entity_type.channel_id);
    tmp4 = channel;
  }
  return tmp4;
};
export const getLocationFromEvent = function getLocationFromEvent(event) {
  const entity_metadata = event.entity_metadata;
  let tmp = event.entity_type === constants.EXTERNAL;
  if (tmp) {
    tmp = null != entity_metadata;
  }
  if (tmp) {
    tmp = "location" in entity_metadata;
  }
  let _location = null;
  if (tmp) {
    _location = entity_metadata.location;
  }
  return _location;
};
export const getLocationFromEventData = function getLocationFromEventData(guildEvent) {
  const entityMetadata = guildEvent.entityMetadata;
  let tmp = guildEvent.entityType === constants.EXTERNAL;
  if (tmp) {
    tmp = null != entityMetadata;
  }
  if (tmp) {
    tmp = "location" in entityMetadata;
  }
  let _location = null;
  if (tmp) {
    _location = entityMetadata.location;
  }
  return _location;
};
export const getChannelTypeFromEntity = function getChannelTypeFromEntity(entityType) {
  if (entityType === constants.VOICE) {
    const tmp2 = table[entityType];
  }
  return tmp2;
};