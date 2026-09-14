// discord_app/modules/rpc/server/commands/invites.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const InstantInviteSources = fn(1074).InstantInviteSources;
const Constants = fn(1085);
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14565);
let obj3 = { scope: null, handler: null };
let obj4 = {};
const items = [fn(8457).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, fn(8457).OAuth2Scopes.ACTIVITIES_INVITES_WRITE];
obj4[fn(4541).RPC_SCOPE_CONFIG.ANY] = items;
obj3.scope = obj4;
obj3.handler = function handler(arg0) {
  ({ socket: require, args } = arg0);
  ({ user_id: dependencyMap, content: asyncGeneratorStep } = args);
  return (async () => {
    if (connectedActivityLocation === 2) {
      connectedActivityLocation = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        connectedActivityLocation = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            connectedActivityLocation = 3;
            throw value;
          } else if (arg0 === 2) {
            connectedActivityLocation = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const id = application.application.id;
            if (null == id) {
              const obj4 = { errorCode: constants2.INVALID_COMMAND };
              const rPCError = new tmp3(9685).RPCError(obj4, "No application.");
              throw rPCError;
            } else {
              connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
              if (null == connectedActivityLocation) {
                const obj7 = { errorCode: constants2.NO_ELIGIBLE_ACTIVITY };
                const rPCError1 = new tmp3(9685).RPCError(
                  obj7,
                  "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
                throw rPCError1;
              } else {
                const kind = connectedActivityLocation.kind;
                if (tmp3(9655).EmbeddedActivityLocationKind.GUILD_CHANNEL !== kind) {
                  if (tmp3(9655).EmbeddedActivityLocationKind.GUILD_CHANNEL_MESSAGE !== kind) {
                    if (tmp3(9655).EmbeddedActivityLocationKind.PRIVATE_CHANNEL !== kind) {
                      if (tmp3(9655).EmbeddedActivityLocationKind.PRIVATE_CHANNEL_MESSAGE !== kind) {
                        const obj8 = { errorCode: constants2.NO_ELIGIBLE_ACTIVITY };
                        const rPCError2 = new tmp3(9685).RPCError(obj8, "Unsupported activity location");
                        throw rPCError2;
                      }
                    }
                    channel = channel.getChannel(connectedActivityLocation.channel_id);
                    if (null == channel) {
                      const obj9 = { errorCode: constants2.INVALID_CHANNEL };
                      const rPCError3 = new tmp3(9685).RPCError(obj9, "Invalid channel");
                      throw rPCError3;
                    } else if (channel.type === tmp3(1094).ChannelTypes.DM) {
                      const obj10 = { errorCode: constants2.INVALID_CHANNEL };
                      const rPCError4 = new tmp3(9685).RPCError(obj10, "Cannot send invite to a DM");
                      throw rPCError4;
                    }
                  }
                  c2 = 1;
                  const obj11 = {
                    channelId: channel.id,
                    applicationId: id,
                    userId,
                    prefixedContent,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: null,
                  };
                  const obj12 = { source: constants.ACTIVITY_INVITE };
                  obj11.inviteAnalyticsMetadata = obj12;
                  dependencyMap = 2;
                  connectedActivityLocation = 1;
                  const obj13 = { value: tmp3(9634).sendEmbeddedActivityInviteUser(obj11), done: false };
                  return obj13;
                }
                channel = tmp3(14569).validateOpenInviteDialog(tmp68).channel;
                const obj5 = tmp3(14569);
              }
            }
          }
        } else if (1 === tmp7) {
          c2 = 0;
          const obj14 = { errorCode: constants2.UNKNOWN_ERROR };
          const rPCError5 = new tmp3(9685).RPCError(obj14, "Failed to invite user");
          throw rPCError5;
        } else if (arg0 === 1) {
          connectedActivityLocation = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          connectedActivityLocation = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
          connectedActivityLocation = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp61) {
        if (tmp4 === c2) {
          connectedActivityLocation = tmp2;
          throw tmp61;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  })();
};
obj[RPCCommands.INVITE_USER_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.INVITE_USER_EMBEDDED,
  obj3,
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;
