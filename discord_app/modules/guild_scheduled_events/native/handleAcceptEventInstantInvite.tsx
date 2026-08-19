// discord_app/modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx
import generateAcceptInviteOptionsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import scheduledEventSort from "../GuildScheduledEventStore.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  let obj = guildScheduledEvent(9346);
  if (!obj.handleNSFWGuildInvite(code)) {
    if (tmpResult.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          obj = { inviteKey: null, context: null, callback: null };
          obj[0] = code.code;
          obj[1] = { location: "Guild Scheduled Event Invite Button Embed" };
          obj[2] = function callback() {
            const result = guildScheduledEvent(dependencyMap[4]).transitionToEventDetailsFromInvite(guildScheduledEvent);
          };
          generateAcceptInviteOptionsDefault.acceptInvite(obj);
        }
      }
    }
    tmpResult = tmp(4369);
  }
  tmp = guildScheduledEvent;
};