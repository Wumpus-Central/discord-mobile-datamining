// === Module 9237: Authorize ===

// Module 9237 (Authorize)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import keysSorter from "keysSorter" /* 5456 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8339 */;
import scopes from "scopes" /* 9238 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
const Constants = fn(1074);
({ EMPTY_NUX_SERVER: hasOwnProperty, FAVORITES: metroRequire, ME: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/Authorize.tsx");

export const filterScopes = function filterScopes(items) {
  const found = items.filter((item) => {
    const RemovedScopes = scopes.RemovedScopes;
    return !RemovedScopes.includes(item);
  });
  let hasItem = found.includes(OAuth2Scopes.OAuth2Scopes.BOT);
  if (hasItem) {
    hasItem = !found.includes(tmp(8339).OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (hasItem) {
    found.push(tmp(8339).OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
};
export const parseOAuth2AuthorizeProps = function parseOAuth2AuthorizeProps(query) {
  let obj = keysSorter;
  const parsed = obj.parse(query, { arrayFormat: "bracket" });
  const NONE = PermissionUtilsAll.NONE;
  try {
    const deserializer = BigFlagUtilsAll;
    let str2 = "0";
    if (null != parsed.permissions) {
      str2 = "0";
      if ("" !== parsed.permissions) {
        str2 = parsed.permissions;
      }
    }
    ({ channel_id, guild_id } = parsed);
    if (guild_id == null) {
      const channel = ChannelStore.getChannel(channel_id);
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
    }
    if (guild_id == null) {
      guild_id = SelectedGuildStore.getGuildId();
    }
    let str4 = parsed.client_id;
    const deserializeResult = deserializer.deserialize(str2);
    if (str4 == null) {
      str4 = "";
    }
    obj = { clientId: str4, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, permissions: null, channelId: null, guildId: null, prompt: null, disableGuildSelect: null, integrationType: null, nonce: null };
    let str5 = parsed.scope;
    if (str5 == null) {
      str5 = "";
    }
    const tmp11 = (function sanitizeOAuthGuild(guild_id) {
      const items = [closure_1_7, closure_1_6, closure_1_5];
      if (!items.includes(guild_id)) {
        return tmp;
      }
    })(guild_id);
    const parts = str5.replace(/\+/g, " ").split(" ");
    obj.scopes = parts.filter((item) => item.length > 0);
    ({ response_type: obj2.responseType, redirect_uri: obj2.redirectUri, code_challenge: obj2.codeChallenge, code_challenge_method: obj2.codeChallengeMethod, state: obj2.state } = parsed);
    obj.permissions = deserializeResult;
    obj.channelId = channel_id;
    obj.guildId = tmp11;
    obj.prompt = parsed.prompt;
    obj.disableGuildSelect = "true" === parsed.disable_guild_select;
    let NumberResult;
    if (null != parsed.integration_type) {
      const _Number = Number;
      NumberResult = Number(parsed.integration_type);
    }
    obj.integrationType = NumberResult;
    obj.nonce = parsed.nonce;
    return obj;
  } catch (err) {
  }
};