// === Module 14475: invites ===

// Module 14475 (invites)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const InstantInviteSources = fn(1074).InstantInviteSources;
const Constants = fn(1085);
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14476);
obj = { scope: null, handler: null };
obj = {};
const items = [fn(8339).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, fn(8339).OAuth2Scopes.ACTIVITIES_INVITES_WRITE];
obj[fn(4465).RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(arg0) {
  ({ socket: require, args } = arg0);
  ({ user_id: dependencyMap, content: asyncGeneratorStep } = args);
  return (async (arg0, value) => {
    if (connectedActivityLocation === 2) {
      connectedActivityLocation = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            const id = application.application.id;
            if (null == id) {
              const obj1 = { errorCode: constants2.INVALID_COMMAND };
              const rPCError = new tmp3(9555).RPCError(obj1, "No application.");
              throw rPCError;
            } else {
              connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
              if (null == connectedActivityLocation) {
                const obj2 = { errorCode: constants2.NO_ELIGIBLE_ACTIVITY };
                const rPCError1 = new tmp3(9555).RPCError(obj2, "No eligible activity for application. Ensure an activity was set using setActivity.");
                throw rPCError1;
              } else {
                const kind = connectedActivityLocation.kind;
                if (tmp3(9525).EmbeddedActivityLocationKind.GUILD_CHANNEL !== kind) {
                  if (tmp3(9525).EmbeddedActivityLocationKind.GUILD_CHANNEL_MESSAGE !== kind) {
                    if (tmp3(9525).EmbeddedActivityLocationKind.PRIVATE_CHANNEL !== kind) {
                      if (tmp3(9525).EmbeddedActivityLocationKind.PRIVATE_CHANNEL_MESSAGE !== kind) {
                        const obj3 = { errorCode: constants2.NO_ELIGIBLE_ACTIVITY };
                        const rPCError2 = new tmp3(9555).RPCError(obj3, "Unsupported activity location");
                        throw rPCError2;
                      }
                    }
                    channel = channel.getChannel(connectedActivityLocation.channel_id);
                    if (null == channel) {
                      let obj4 = { errorCode: constants2.INVALID_CHANNEL };
                      const rPCError3 = new tmp3(9555).RPCError(obj4, "Invalid channel");
                      throw rPCError3;
                    } else if (channel.type === tmp3(1094).ChannelTypes.DM) {
                      let obj5 = { errorCode: constants2.INVALID_CHANNEL };
                      const rPCError4 = new tmp3(9555).RPCError(obj5, "Cannot send invite to a DM");
                      throw rPCError4;
                    }
                  }
                  c2 = 1;
                  obj5 = tmp3(9504);
                  const obj6 = { channelId: channel.id, applicationId: id, userId, prefixedContent, location: "RPC_ACTIVITY_INVITE_USER", inviteAnalyticsMetadata: null };
                  const obj7 = { source: constants.ACTIVITY_INVITE };
                  obj6.inviteAnalyticsMetadata = obj7;
                  dependencyMap = 2;
                  connectedActivityLocation = 1;
                  const obj8 = { value: obj5.sendEmbeddedActivityInviteUser(obj6), done: false };
                  return obj8;
                }
                obj4 = tmp3(14480);
                channel = obj4.validateOpenInviteDialog(tmp68).channel;
              }
            }
          }
        } else if (1 === tmp7) {
          c2 = 0;
          const obj9 = { errorCode: constants2.UNKNOWN_ERROR };
          const rPCError5 = new tmp3(9555).RPCError(obj9, "Failed to invite user");
          throw rPCError5;
        } else if (arg0 === 1) {
          connectedActivityLocation = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          connectedActivityLocation = 3;
          obj = { value, done: true };
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
obj[RPCCommands.INVITE_USER_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.INVITE_USER_EMBEDDED, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;