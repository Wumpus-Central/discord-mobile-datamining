// discord_app/modules/rpc/server/commands/invites.tsx
import Constants2 from "../../../../Constants.tsx";
import Constants3 from "../../Constants.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import CONTEXT_MENU_ICON_NAMES from "../../../../../discord_common/js/packages/rpc-schema/rpc-schema.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let userId;

let RPCCommands;
let metroRequire;
let obj3;
const RPC_SCOPE_CONFIG = Constants3.RPC_SCOPE_CONFIG;
const InstantInviteSources = Constants2.InstantInviteSources;
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
const INVITE_USER_EMBEDDED = RPCCommands.INVITE_USER_EMBEDDED;
let obj2 = {
  scope: obj3,
  handler(arg0) {
    let application;
    let args;
    let prefixedContent;
    ({ socket: require, args } = arg0);
    ({ user_id: dependencyMap, content: _asyncToGenerator } = args);
    return (async function () {
      let c1;
      let channel;
      let closure_0;
      let connectedActivityLocation;
      let obj12;
      if (connectedActivityLocation === 2) {
        connectedActivityLocation = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          connectedActivityLocation = 2;
          if (0 === userId) {
            if (arg0 === 1) {
              connectedActivityLocation = 3;
              throw value;
            } else if (arg0 === 2) {
              connectedActivityLocation = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const id = require.application.id;
              if (null == id) {
                const obj4 = { errorCode: constants2.INVALID_COMMAND };
                const self9 = this;
                const self10 = this;
                const rPCError = new tmp(userId[8]).RPCError(obj4, "No application.");
                throw rPCError;
              } else {
                connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
                if (null == connectedActivityLocation) {
                  const obj7 = { errorCode: constants2.NO_ELIGIBLE_ACTIVITY };
                  const self7 = this;
                  const self8 = this;
                  const rPCError1 = new tmp(userId[8]).RPCError(
                    obj7,
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                  );
                  throw rPCError1;
                } else {
                  const kind = connectedActivityLocation.kind;
                  if (tmp(userId[9]).EmbeddedActivityLocationKind.GUILD_CHANNEL !== kind) {
                    if (tmp(userId[9]).EmbeddedActivityLocationKind.GUILD_CHANNEL_MESSAGE !== kind) {
                      if (tmp(userId[9]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL !== kind) {
                        if (tmp(userId[9]).EmbeddedActivityLocationKind.PRIVATE_CHANNEL_MESSAGE !== kind) {
                          const obj8 = { errorCode: constants2.NO_ELIGIBLE_ACTIVITY };
                          const self3 = this;
                          const self4 = this;
                          const rPCError2 = new tmp(userId[8]).RPCError(obj8, "Unsupported activity location");
                          throw rPCError2;
                        }
                      }
                      channel = channel.getChannel(connectedActivityLocation.channel_id);
                      if (null == channel) {
                        const obj9 = { errorCode: constants2.INVALID_CHANNEL };
                        const self5 = this;
                        const self6 = this;
                        const rPCError3 = new tmp(userId[8]).RPCError(obj9, "Invalid channel");
                        throw rPCError3;
                      } else if (channel.type === tmp(userId[11]).ChannelTypes.DM) {
                        const obj10 = { errorCode: constants2.INVALID_CHANNEL };
                        const self11 = this;
                        const self12 = this;
                        const rPCError4 = new tmp(userId[8]).RPCError(obj10, "Cannot send invite to a DM");
                        throw rPCError4;
                      }
                    }
                    c2 = 1;
                    const obj11 = {
                      channelId: channel.id,
                      applicationId: id,
                      userId: dependencyMap,
                      prefixedContent: _asyncToGenerator,
                      location: "RPC_ACTIVITY_INVITE_USER",
                      inviteAnalyticsMetadata: obj12,
                    };
                    obj12 = { source: constants.ACTIVITY_INVITE };
                    const obj6 = tmp(userId[12]);
                    userId = 2;
                    connectedActivityLocation = 1;
                    const obj13 = { value: obj6.sendEmbeddedActivityInviteUser(obj11), done: false };
                    return obj13;
                  }
                  const obj5 = tmp(userId[10]);
                  channel = obj5.validateOpenInviteDialog(tmp54).channel;
                }
              }
            }
          } else if (1 === tmp4) {
            c2 = 0;
            const obj14 = { errorCode: constants2.UNKNOWN_ERROR };
            const self = this;
            const self2 = this;
            const rPCError5 = new tmp(userId[8]).RPCError(obj14, "Failed to invite user");
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp48) {
          if (0 === c2) {
            connectedActivityLocation = 3;
            throw tmp48;
          } else {
            userId = 1;
          }
        }
      }
    })();
  },
};
obj3 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const INVITE_USER_EMBEDDED2 = RPCCommands.INVITE_USER_EMBEDDED;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [
  OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE,
  OAuth2Scopes.OAuth2Scopes.ACTIVITIES_INVITES_WRITE,
];
obj3[ANY] = items;
obj[INVITE_USER_EMBEDDED] = createRPCCommand(INVITE_USER_EMBEDDED2, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;
