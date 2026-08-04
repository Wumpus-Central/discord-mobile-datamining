// discord_app/actions/CreateChannelActionCreators.tsx
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import ME from "ME";
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES";

let c4;
let c5;
let closure_6;
const require = arg1;
({ BITRATE_DEFAULT: c4, ChannelTypes: c5, Endpoints: closure_6 } = ME);
let result = require("MAX_FAVORITES").fileFinishedImporting("actions/CreateChannelActionCreators.tsx");

export default {
  createChannel(guildId) {
    let availableTags;
    let bitrate;
    let flags;
    let parentId;
    let permissionOverwrites;
    let skuId;
    let type;
    let userLimit;
    guildId = guildId.guildId;
    ({ type, permissionOverwrites } = guildId);
    if (permissionOverwrites === undefined) {
      permissionOverwrites = [];
    }
    ({ bitrate, userLimit, parentId, skuId, flags, availableTags } = guildId);
    let obj = permissionOverwrites(709);
    obj.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId, channelType: type });
    obj = { type, name: guildId.name, permission_overwrites: permissionOverwrites };
    let tmp4 = null != bitrate;
    if (tmp4) {
      tmp4 = bitrate !== closure_4;
    }
    if (tmp4) {
      obj.bitrate = bitrate;
    }
    let tmp6 = null != userLimit;
    if (tmp6) {
      tmp6 = userLimit > 0;
    }
    if (tmp6) {
      obj.user_limit = userLimit;
    }
    if (null != parentId) {
      obj.parent_id = parentId;
    }
    if (null != flags) {
      obj.flags = flags;
    }
    let tmp7 = null != availableTags;
    if (tmp7) {
      tmp7 = availableTags.length > 0;
    }
    if (tmp7) {
      obj.available_tags = availableTags.map((name) => ({ name: name.name, emoji_id: name.emojiId, emoji_name: name.emojiName, moderated: name.moderated }));
    }
    if (type === constants.GUILD_STORE) {
      if (null == skuId) {
        const _Error = Error;
        const error = new Error("Unexpected missing SKU");
        throw error;
      } else {
        obj.sku_id = skuId;
        obj.branch_id = guildId.branchId;
      }
    }
    obj = { url: closure_6.GUILD_CHANNELS(guildId), body: obj, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const tmp = permissionOverwrites;
    const tmpResult = permissionOverwrites(5003);
    obj[3] = {
      event: guildId(503).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = guildId(outer1_2[6]);
        obj = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj[1] = id;
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj[2] = type;
        return obj.exact(obj);
      }
    };
    const obj1 = {
      event: guildId(503).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = guildId(outer1_2[6]);
        obj = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj[1] = id;
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj[2] = type;
        return obj.exact(obj);
      }
    };
    obj[4] = guildId(530).rejectWithMigratedError();
    const obj6 = guildId(530);
    return tmpResult.post(obj).then((body) => {
      if (outer1_3.isOptInEnabled(guildId)) {
        let obj = permissionOverwrites(outer1_2[8]);
        obj = { flags: null };
        obj[0] = outer1_7.OPT_IN_ENABLED;
        const result = obj.updateChannelOverrideSettings(tmp, body.body.id, obj, guildId(outer1_2[9]).NotificationLabels.OptedIn);
      }
      const result1 = permissionOverwrites(outer1_2[10]).checkGuildTemplateDirty(tmp);
      return body;
    }, (body) => {
      let obj = permissionOverwrites(table[3]);
      obj = { type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      throw body;
    });
  },
  createRoleSubscriptionTemplateChannel(closure_0, name, type, topic) {
    let obj = importDefault(5003);
    obj = { url: closure_6.GUILD_CHANNELS(closure_0), body: obj, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { name, type, topic };
    obj[3] = {
      event: require(503) /* encodeProperties */.NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = callback(table[6]);
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj = { is_private: true, channel_id: id, channel_type: null };
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj[2] = type;
        return obj.exact(obj);
      }
    };
    const obj1 = {
      event: require(503) /* encodeProperties */.NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = callback(table[6]);
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj = { is_private: true, channel_id: id, channel_type: null };
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj[2] = type;
        return obj.exact(obj);
      }
    };
    obj[4] = require(530) /* sendRequest */.rejectWithMigratedError();
    return obj.post(obj);
  }
};