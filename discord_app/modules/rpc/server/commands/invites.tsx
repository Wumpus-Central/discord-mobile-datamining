// discord_app/modules/rpc/server/commands/invites.tsx
import closure_2 from "sum";
import participantFromServer from "participantFromServer";
import ensureGuildLoaded from "ensureGuildLoaded";
import { InstantInviteSources } from "ME";
import sum from "sum";
import createRPCCommand from "createRPCCommand";

let RPCCommands;
let closure_6;
const require = arg1;
({ RPCCommands, RPCErrors: closure_6 } = sum);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, require("set").OAuth2Scopes.ACTIVITIES_INVITES_WRITE];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(arg0) {
  let args;
  let closure_2;
  let dependencyMap;
  let require;
  ({ socket: require, args } = arg0);
  ({ user_id: dependencyMap, content: closure_2 } = args);
  return callback(function*() {
    if (connectedActivityLocation === 2) {
      connectedActivityLocation = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            connectedActivityLocation = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp3;
            const id = outer1_0.application.id;
            if (null == id) {
              const obj1 = { errorCode: null };
              obj1[0] = outer1_6.INVALID_COMMAND;
              const rPCError = new outer1_0(10710).RPCError(obj1, "No application.");
              throw rPCError;
            } else {
              connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
              if (null == connectedActivityLocation) {
                const obj2 = { errorCode: null };
                obj2[0] = outer1_6.NO_ELIGIBLE_ACTIVITY;
                const rPCError1 = new outer1_0(10710).RPCError(obj2, "No eligible activity for application. Ensure an activity was set using setActivity.");
                throw rPCError1;
              } else {
                const kind = connectedActivityLocation.kind;
                if (outer1_0(10587).EmbeddedActivityLocationKind.GUILD_CHANNEL !== kind) {
                  if (outer1_0(10587).EmbeddedActivityLocationKind.GUILD_CHANNEL_MESSAGE !== kind) {
                    if (outer1_0(10587).EmbeddedActivityLocationKind.PRIVATE_CHANNEL !== kind) {
                      if (outer1_0(10587).EmbeddedActivityLocationKind.PRIVATE_CHANNEL_MESSAGE !== kind) {
                        const obj3 = { errorCode: null };
                        obj3[0] = outer1_6.NO_ELIGIBLE_ACTIVITY;
                        const rPCError2 = new outer1_0(10710).RPCError(obj3, "Unsupported activity location");
                        throw rPCError2;
                      }
                    }
                    let channel = outer1_4.getChannel(connectedActivityLocation.channel_id);
                    if (null == channel) {
                      let obj4 = { errorCode: null };
                      obj4[0] = outer1_6.INVALID_CHANNEL;
                      const rPCError3 = new outer1_0(10710).RPCError(obj4, "Invalid channel");
                      throw rPCError3;
                    } else if (channel.type === outer1_0(692).ChannelTypes.DM) {
                      let obj5 = { errorCode: null };
                      obj5[0] = outer1_6.INVALID_CHANNEL;
                      const rPCError4 = new outer1_0(10710).RPCError(obj5, "Cannot send invite to a DM");
                      throw rPCError4;
                    }
                  }
                  let c2 = 1;
                  obj5 = outer1_0(10586);
                  const obj6 = { channelId: null, applicationId: null, userId: null, prefixedContent: null, location: "RPC_ACTIVITY_INVITE_USER", inviteAnalyticsMetadata: null };
                  obj6[0] = channel.id;
                  obj6[1] = id;
                  obj6[2] = dependencyMap;
                  obj6[3] = c2;
                  const obj7 = { source: null };
                  obj7[0] = outer1_5.ACTIVITY_INVITE;
                  obj6[5] = obj7;
                  dependencyMap = 2;
                  connectedActivityLocation = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = obj5.sendEmbeddedActivityInviteUser(obj6);
                  return obj8;
                }
                obj4 = outer1_0(13814);
                channel = obj4.validateOpenInviteDialog(tmp69).channel;
              }
            }
          }
        } else if (1 === tmp7) {
          c2 = 0;
          const obj9 = { errorCode: null };
          obj9[0] = outer1_6.UNKNOWN_ERROR;
          const rPCError5 = new outer1_0(10710).RPCError(obj9, "Failed to invite user");
          throw rPCError5;
        } else if (arg0 === 1) {
          connectedActivityLocation = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 0;
          connectedActivityLocation = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
obj[RPCCommands.INVITE_USER_EMBEDDED] = createRPCCommand.createRPCCommand(RPCCommands.INVITE_USER_EMBEDDED, obj);
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;