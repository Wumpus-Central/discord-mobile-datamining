// discord_app/modules/rpc/server/commands/invites.tsx
import closure_2 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import { InstantInviteSources } from "../../../../Constants.tsx";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";

const require = arg1;
({ RPCCommands, RPCErrors: closure_6 } = sum);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [
  require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE,
  require("set").OAuth2Scopes.ACTIVITIES_INVITES_WRITE,
];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler(arg0) {
  ({ socket: require, args } = arg0);
  ({ user_id: dependencyMap, content: closure_2 } = args);
  return callback(function* () {
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
            closure_0 = tmp3;
            const id = closure_1_0.application.id;
            if (null == id) {
              obj1 = { errorCode: null };
              obj1[0] = closure_1_6.INVALID_COMMAND;
              const rPCError = new closure_1_0(9555).RPCError(obj1, "No application.");
              throw rPCError;
            } else {
              connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
              if (null == connectedActivityLocation) {
                const obj2 = { errorCode: null };
                obj2[0] = closure_1_6.NO_ELIGIBLE_ACTIVITY;
                const rPCError1 = new closure_1_0(9555).RPCError(
                  obj2,
                  "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
                throw rPCError1;
              } else {
                const kind = connectedActivityLocation.kind;
                if (closure_1_0(9525).EmbeddedActivityLocationKind.GUILD_CHANNEL !== kind) {
                  if (closure_1_0(9525).EmbeddedActivityLocationKind.GUILD_CHANNEL_MESSAGE !== kind) {
                    if (closure_1_0(9525).EmbeddedActivityLocationKind.PRIVATE_CHANNEL !== kind) {
                      if (closure_1_0(9525).EmbeddedActivityLocationKind.PRIVATE_CHANNEL_MESSAGE !== kind) {
                        const obj3 = { errorCode: null };
                        obj3[0] = closure_1_6.NO_ELIGIBLE_ACTIVITY;
                        const rPCError2 = new closure_1_0(9555).RPCError(obj3, "Unsupported activity location");
                        throw rPCError2;
                      }
                    }
                    let channel = closure_1_4.getChannel(connectedActivityLocation.channel_id);
                    if (null == channel) {
                      let obj4 = { errorCode: null };
                      obj4[0] = closure_1_6.INVALID_CHANNEL;
                      const rPCError3 = new closure_1_0(9555).RPCError(obj4, "Invalid channel");
                      throw rPCError3;
                    } else if (channel.type === closure_1_0(1094).ChannelTypes.DM) {
                      let obj5 = { errorCode: null };
                      obj5[0] = closure_1_6.INVALID_CHANNEL;
                      const rPCError4 = new closure_1_0(9555).RPCError(obj5, "Cannot send invite to a DM");
                      throw rPCError4;
                    }
                  }
                  c2 = 1;
                  obj5 = closure_1_0(9504);
                  const obj6 = {
                    channelId: null,
                    applicationId: null,
                    userId: null,
                    prefixedContent: null,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: null,
                  };
                  obj6[0] = channel.id;
                  obj6[1] = id;
                  obj6[2] = dependencyMap;
                  obj6[3] = c2;
                  const obj7 = { source: null };
                  obj7[0] = closure_1_5.ACTIVITY_INVITE;
                  obj6[5] = obj7;
                  dependencyMap = 2;
                  connectedActivityLocation = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = obj5.sendEmbeddedActivityInviteUser(obj6);
                  return obj8;
                }
                obj4 = closure_1_0(14480);
                channel = obj4.validateOpenInviteDialog(tmp69).channel;
              }
            }
          }
        } else if (1 === tmp7) {
          c2 = 0;
          const obj9 = { errorCode: null };
          obj9[0] = closure_1_6.UNKNOWN_ERROR;
          const rPCError5 = new closure_1_0(9555).RPCError(obj9, "Failed to invite user");
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
obj[RPCCommands.INVITE_USER_EMBEDDED] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.INVITE_USER_EMBEDDED, obj);
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;
