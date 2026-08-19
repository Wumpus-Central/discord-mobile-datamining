// discord_app/modules/oauth2/Authorize.tsx
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import applyOverwritesAll from "../../utils/PermissionUtils.tsx";
import set from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import keysSorter from "../../../_runtime/04376_keysSorter.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import ME from "../../Constants.tsx";

require = fn;
({ EMPTY_NUX_SERVER: c5, FAVORITES: closure_6, ME: error } = ME);
const result = require("obj132").fileFinishedImporting("modules/oauth2/Authorize.tsx");

export const filterScopes = function filterScopes(items) {
  const found = items.filter((item, index) => {
    const RemovedScopes = callback(table[3]).RemovedScopes;
    return !RemovedScopes.includes(item);
  });
  let hasItem = found.includes(set.OAuth2Scopes.BOT);
  if (hasItem) {
    hasItem = !found.includes(set.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (hasItem) {
    found.push(set.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
};
export const parseOAuth2AuthorizeProps = function parseOAuth2AuthorizeProps(query) {
  let obj = keysSorter;
  const parsed = obj.parse(query, { arrayFormat: "bracket" });
  const NONE = applyOverwritesAll.NONE;
  try {
    const deserializer = fromStringAll;
    let str2 = "0";
    if (null != parsed.permissions) {
      str2 = "0";
      if ("" !== parsed.permissions) {
        str2 = parsed.permissions;
      }
    }
    ({ channel_id, guild_id } = parsed);
    if (guild_id == null) {
      channel = channel.getChannel(channel_id);
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
    }
    if (guild_id == null) {
      guild_id = guildId.getGuildId();
    }
    let str4 = parsed.client_id;
    const deserializeResult = deserializer.deserialize(str2);
    if (str4 == null) {
      str4 = "";
    }
    obj = { clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, permissions: null, channelId: null, guildId: null, prompt: null, disableGuildSelect: null, integrationType: null, nonce: null };
    obj[0] = str4;
    let str5 = parsed.scope;
    if (str5 == null) {
      str5 = "";
    }
    const tmp11 = (function sanitizeOAuthGuild(guild_id) {
      const items = [closure_7, closure_6, closure_5];
      if (!items.includes(guild_id)) {
        return tmp;
      }
    })(guild_id);
    const parts = str5.replace(/\+/g, " ").split(" ");
    obj[1] = parts.filter((item, index) => item.length > 0);
    ({ response_type: obj2[2], redirect_uri: obj2[3], code_challenge: obj2[4], code_challenge_method: obj2[5], state: obj2[6] } = parsed);
    obj[7] = deserializeResult;
    obj[8] = channel_id;
    obj[9] = tmp11;
    obj[10] = parsed.prompt;
    obj[11] = "true" === parsed.disable_guild_select;
    let NumberResult;
    if (null != parsed.integration_type) {
      const _Number = Number;
      NumberResult = Number(parsed.integration_type);
    }
    obj[12] = NumberResult;
    obj[13] = parsed.nonce;
    return obj;
  } catch (err) {
  }
};