// discord_app/modules/forwarding/handleForwardBreadcrumb.tsx
import showTooManyUserGuildsAlert from "showTooManyUserGuildsAlert";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function _handleForwardBreadcrumb() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (guild === 2) {
        guild = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          guild = 2;
          if (0 === store) {
            if (arg0 === 1) {
              guild = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guild = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let channel_id = tmp3;
              let guild_id = tmp7;
              guild_id = undefined;
              channel_id = undefined;
              let message_id;
              store = undefined;
              guild = undefined;
              let constants;
              if (null != lib.messageReference) {
                guild_id = tmp60.messageReference.guild_id;
                channel_id = tmp60.messageReference.channel_id;
                message_id = tmp60.messageReference.message_id;
                store = store.getChannel(channel_id);
                guild = false;
                if (null == store) {
                  if (null != guild_id) {
                    if (null == guild.getGuild(guild_id)) {
                      message_id = 1;
                      let obj1 = { object: null };
                      obj1[0] = outer1_7.FORWARD_BREADCRUMB;
                      store = 2;
                      guild = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = lib(outer1_2[4]).startLurking(guild_id, obj1, { shouldNavigate: false });
                      return obj2;
                    }
                  }
                }
              }
              guild = 3;
              return { value: "T", done: null };
            }
          } else if (1 === tmp7) {
            message_id = 0;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              guild = 3;
              throw arg1;
            } else if (arg0 === 2) {
              message_id = 0;
              guild = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              guild = true;
              obj1 = lib(channel_id[5]);
              store = 3;
              guild = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = obj1.waitForGuild(guild_id);
              return obj4;
            }
          } else if (arg0 === 1) {
            guild = 3;
            throw arg1;
          } else if (arg0 === 2) {
            message_id = 0;
            guild = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            store = store.getChannel(channel_id);
            message_id = 0;
          }
          obj4 = guild_id(channel_id[6]);
          const basicChannel = store.getBasicChannel(lib.channel_id);
          guild_id = undefined;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          const obj5 = { guild_id: null, channel_id: null, message_id: null, breadcrumb_guild_id: null, breadcrumb_channel_id: null, breadcrumb_message_id: null, did_lurk: null };
          obj5[0] = guild_id;
          obj5[1] = lib.channel_id;
          obj5[2] = lib.id;
          obj5[3] = guild_id;
          obj5[4] = channel_id;
          obj5[5] = message_id;
          obj5[6] = guild;
          obj4.track(constants.FORWARD_BREADCRUMB_CLICKED, obj5);
          let tmp36;
          if (guild) {
            tmp36 = channel_id;
          }
          constants = tmp36;
          const obj6 = { navigationReplace: false, welcomeModalChannelId: null };
          obj6[1] = constants;
          guild_id(channel_id[7])(closure_8.CHANNEL(guild_id, channel_id, message_id), obj6);
          const tmp42 = guild_id(channel_id[7]);
        } catch (tmp52) {
          if (tmp4 === message_id) {
            guild = tmp2;
            throw tmp52;
          } else {
            store = tmp;
          }
        }
      }
    })();
  });
  const _handleForwardBreadcrumb = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, AnalyticsObjects: error, Routes: metroImportAll } = ME);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/forwarding/handleForwardBreadcrumb.tsx");

export default function handleForwardBreadcrumb() {
  const self = this;
  const apply = _handleForwardBreadcrumb.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};