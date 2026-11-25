// === Module 12101: handleAcceptEventInstantInvite ===

// Module 12101 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7785 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 5744 */;

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
          guildScheduledEvent(7785).acceptInvite(obj3);
          const obj4 = guildScheduledEvent(7785);
        }
        tmpResult = tmp(12102);
      }
    }
  }
  obj = code(5743);
  tmp = code;
};