// === Module 9619: handleAcceptEventInstantInvite ===

// Module 9619 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8496 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6054 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  if (obj.isGuildScheduledEventInviteEmbed(code)) {
    code = code.code;
    if (null != code) {
      const guild_scheduled_event = code.guild_scheduled_event;
      let id;
      if (guild_scheduled_event != null) {
        id = guild_scheduled_event.id;
      }
      const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id);
      if (null != guildScheduledEvent) {
        function acceptInvite() {
          return InstantInviteActionCreatorsDefault.acceptInvite({
            inviteKey: code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
              const result = code(dependencyMap[3]).transitionToEventDetailsFromInvite(guildScheduledEvent);
            }
          });
        }
        const obj2 = { onConfirm: acceptInvite };
        if (!tmpResult.handleNSFWGuildInvite(code, obj2)) {
          const obj3 = {
            inviteKey: code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
                      const result = code(dependencyMap[3]).transitionToEventDetailsFromInvite(guildScheduledEvent);
                    }
          };
          guildScheduledEvent(8496).acceptInvite(obj3);
          const obj4 = guildScheduledEvent(8496);
        }
        tmpResult = tmp(9620);
      }
    }
  }
  obj = code(7422);
  tmp = code;
};