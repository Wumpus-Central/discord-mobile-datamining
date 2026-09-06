// discord_app/modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx
import InstantInviteActionCreatorsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators.tsx";
import GuildScheduledEventStore from "../GuildScheduledEventStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = guildScheduledEvent(10294);
  if (!obj.handleNSFWGuildInvite(code)) {
    if (tmpResult.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          obj = {
            inviteKey: code.code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
              const result =
                GuildScheduledEventModalActionCreators.transitionToEventDetailsFromInvite(guildScheduledEvent);
            },
          };
          InstantInviteActionCreatorsDefault.acceptInvite(obj);
        }
      }
    }
    tmpResult = tmp(7735);
  }
  tmp = guildScheduledEvent;
}
