// === Module 2050: GuildScheduledEventsConstants ===

// Module 2050 (GuildScheduledEventsConstants)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const obj = { SCHEDULED: 1, [1]: "SCHEDULED", ACTIVE: 2, [2]: "ACTIVE", COMPLETED: 3, [3]: "COMPLETED", CANCELED: 4, [4]: "CANCELED" };
const items = [, ];
({ COMPLETED: arr[0], CANCELED: arr[1] } = obj);
const obj2 = { NONE: 0, [0]: "NONE", STAGE_INSTANCE: 1, [1]: "STAGE_INSTANCE", VOICE: 2, [2]: "VOICE", EXTERNAL: 3, [3]: "EXTERNAL", PRIME_TIME: 4, [4]: "PRIME_TIME" };
const items1 = [, ];
({ STAGE_INSTANCE: arr2[0], PRIME_TIME: arr2[1] } = obj2);
const set = new Set(items);
const items2 = [obj2.EXTERNAL];
const obj3 = { [obj2.STAGE_INSTANCE]: ChannelTypes.GUILD_STAGE_VOICE, [obj2.VOICE]: ChannelTypes.GUILD_VOICE };
const set1 = new Set(items1);
const items3 = [, ];
({ STAGE_INSTANCE: arr4[0], VOICE: arr4[1] } = obj2);
const set2 = new Set(items2);
const result = 2 * DurationsDefault.Millis.DAY;
const result1 = 12 * DurationsDefault.Millis.HOUR;
const result2 = size.fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsConstants.tsx");

export const GUILD_EVENT_MAX_NAME_LENGTH = 100;
export const GUILD_EVENT_MAX_DESCRIPTION_LENGTH = 1000;
export const MAX_EVENT_LOCATION_LENGTH = 100;
export const EXPLICIT_END_EVENT_SHEET_KEY = "explicit-end-stage";
export const ANALYTICS_GUILD_EVENTS_MODAL_NAME = "Guild Events Modal";
export const GUILD_EVENT_STAGE_UPSELL_CARD_KEY = "hasSeenGuildEventStageUpsellCard";
export const FAKE_EVENT_ID = "-1";
export const GuildScheduledEventStatus = obj;
export const GuildScheduledEventStatusDone = set;
export const GuildScheduledEventEntityTypes = obj2;
export const GuildScheduledEventNotificationTypes = { EVENT_START: 1, [1]: "EVENT_START" };
export const GuildScheduledEventPrivacyLevel = { PUBLIC: 1, [1]: "PUBLIC", GUILD_ONLY: 2, [2]: "GUILD_ONLY" };
export const AGE_VERIFICATION_STAGE_CHANNEL_TYPES = set1;
export const EntityChannelTypes = obj3;
export const ENTITY_TYPES_REQUIRED_ENTITY_METADATA = set2;
export const ENTITY_TYPES_REQUIRED_CHANNEL_ID = new Set(items3);
export const EventDetailSections = { EVENT_INFO: 0, [0]: "EVENT_INFO", RSVP_LIST: 1, [1]: "RSVP_LIST" };
export const MAX_RSVP_USER_DISPLAY_COUNT = 100;
export const NEW_EVENT_WINDOW_MILLISECONDS = result;
export const EVENT_STARTING_SOON_WINDOW_MILLISECONDS = result1;
export const ACKED_RECENTLY_WINDOW_DAYS = 4;
export const UpcomingGuildEventNoticeTypes = { NEW_EVENT: "Upcoming Event Notice", EVENT_STARTING_SOON: "Event Starting Soon Notice" };
export const GuildScheduledEventUserResponses = { UNINTERESTED: 0, [0]: "UNINTERESTED", INTERESTED: 1, [1]: "INTERESTED" };