// === Module 8848: ? ===

// Module 8848
import encodeProperties from "encodeProperties" /* 503 */;
import sendRequest from "sendRequest" /* 530 */;
import _modDef5227 from "module_5227" /* 5227 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import ME from "ME" /* 676 */;
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES" /* 685 */;

require = fn;
({ BITRATE_DEFAULT: c4, ChannelTypes: c5, Endpoints: closure_6 } = ME);
let result = require("obj132").fileFinishedImporting("actions/CreateChannelActionCreators.tsx");

export default {
  createChannel(guildId) {
    guildId = guildId.guildId;
    ({ type, permissionOverwrites } = guildId);
    if (permissionOverwrites === undefined) {
      permissionOverwrites = [];
    }
    ({ bitrate, userLimit, parentId, skuId, flags, availableTags, gameId } = guildId);
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
      obj.available_tags = availableTags.map((item, index) => ({ name: item.name, emoji_id: item.emojiId, emoji_name: item.emojiName, moderated: item.moderated }));
    }
    if (null != gameId) {
      obj.game_id = gameId;
    }
    if (type === constants.GUILD_STORE) {
      if (null == skuId) {
        const _Error = Error;
        error = new Error("Unexpected missing SKU");
        throw error;
      } else {
        obj.sku_id = skuId;
        obj.branch_id = guildId.branchId;
      }
    }
    obj = { url: closure_6.GUILD_CHANNELS(guildId), body: obj, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const tmpResult = permissionOverwrites(5227);
    obj[3] = {
      event: guildId(503).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        guildId(dependencyMap[6]);
        const obj = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
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
    obj1 = {
      event: guildId(503).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        guildId(dependencyMap[6]);
        const obj = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
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
    return tmpResult.post(obj).then((result) => {
      if (closure_1_3.isOptInEnabled(guildId)) {
        permissionOverwrites(dependencyMap[8]);
        const obj = { flags: null };
        obj[0] = closure_1_7.OPT_IN_ENABLED;
        result = obj.updateChannelOverrideSettings(guildId, result.body.id, obj, guildId(dependencyMap[9]).NotificationLabels.OptedIn);
      }
      const result1 = permissionOverwrites(dependencyMap[10]).checkGuildTemplateDirty(guildId);
      return result;
    }, (body) => {
      permissionOverwrites(table[3]);
      const obj = { type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      throw body;
    });
  },
  createRoleSubscriptionTemplateChannel(closure_0, name, type, topic) {
    let obj = _modDef5227;
    { url: closure_6.GUILD_CHANNELS(closure_0), body: obj, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { name, type, topic };
    obj[3] = {
      event: encodeProperties.NetworkActionNames.CHANNEL_CREATE,
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
    obj[4] = sendRequest.rejectWithMigratedError();
    return obj.post(obj);
  }
};