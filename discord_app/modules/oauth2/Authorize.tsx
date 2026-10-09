// === Module 9198: Authorize ===

// Module 9198 (Authorize)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4714 */;
import QueryStringUtils from "QueryStringUtils" /* 5074 */;
import keysSorter from "keysSorter" /* 5991 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8441 */;
import scopes from "scopes" /* 9199 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;

require = fn;
const Constants = fn(1085);
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
    hasItem = !found.includes(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  if (hasItem) {
    found.push(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
};
export const parseOAuth2AuthorizeProps = function parseOAuth2AuthorizeProps(query) {
  const parsed = keysSorter.parse(query, { arrayFormat: "bracket" });
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
      let guild_id1;
      if (channel != null) {
        guild_id1 = channel.guild_id;
      }
      guild_id = guild_id1;
    }
    if (guild_id == null) {
      guild_id = SelectedGuildStore.getGuildId();
    }
    const deserializeResult = deserializer.deserialize(str2);
    const tmp12 = (function sanitizeOAuthGuild(guild_id) {
      const items = [closure_1_7, closure_1_6, closure_1_5];
      if (!items.includes(guild_id)) {
        return tmp;
      }
    })(guild_id);
    let str4 = QueryStringUtils.getFirstQueryStringValue(parsed.scope);
    if (str4 == null) {
      str4 = "";
    }
    const tmpResult = QueryStringUtils;
    const parts = str4.replace(/\+/g, " ").split(" ");
    let str7 = parsed.client_id;
    const found = parts.filter((item) => item.length > 0);
    if (str7 == null) {
      str7 = "";
    }
    const obj2 = { clientId: str7, scopes: found, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, permissions: null, channelId: null, guildId: null, prompt: null, disableGuildSelect: null, integrationType: null, nonce: null };
    ({ response_type: obj3.responseType, redirect_uri: obj3.redirectUri, code_challenge: obj3.codeChallenge, code_challenge_method: obj3.codeChallengeMethod, state: obj3.state } = parsed);
    obj2.permissions = deserializeResult;
    obj2.channelId = channel_id;
    obj2.guildId = tmp12;
    obj2.prompt = parsed.prompt;
    obj2.disableGuildSelect = "true" === parsed.disable_guild_select;
    let NumberResult;
    if (null != parsed.integration_type) {
      const _Number = Number;
      NumberResult = Number(parsed.integration_type);
    }
    obj2.integrationType = NumberResult;
    obj2.nonce = parsed.nonce;
    return obj2;
  } catch (err) {
  }
};