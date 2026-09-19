// === Module 11864: handleAcceptEventInstantInvite ===

// Module 11864 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8648 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9782 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7766 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  if (!obj.handleNSFWGuildInvite(code)) {
    if (tmpResult.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          const obj2 = {
            inviteKey: code.code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
                      const result = GuildScheduledEventModalActionCreators.transitionToEventDetailsFromInvite(guildScheduledEvent);
                    }
          };
          InstantInviteActionCreatorsDefault.acceptInvite(obj2);
        }
      }
    }
    tmpResult = tmp(7975);
  }
  obj = guildScheduledEvent(10551);
  tmp = guildScheduledEvent;
};