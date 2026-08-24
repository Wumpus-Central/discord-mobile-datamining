// === Module 10801: handleAcceptEventInstantInvite ===

// Module 10801 (handleAcceptEventInstantInvite)
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8042 */;
import closure_3 from "scheduledEventSort" /* 4370 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

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
            const result = guildScheduledEvent(closure_1_2[4]).transitionToEventDetailsFromInvite(guildScheduledEvent);
          };
          generateAcceptInviteOptionsDefault.acceptInvite(obj);
          const obj3 = generateAcceptInviteOptionsDefault;
        }
      }
    }
    tmpResult = guildScheduledEvent(4369);
  }
};