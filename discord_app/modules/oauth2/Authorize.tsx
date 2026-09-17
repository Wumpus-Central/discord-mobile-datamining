// discord_app/modules/oauth2/Authorize.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import keysSorter from "../../../_runtime/05544_keysSorter.js";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import scopes from "scopes.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

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
    let str4 = parsed.client_id;
    const deserializeResult = deserializer.deserialize(str2);
    if (str4 == null) {
      str4 = "";
    }
    const obj3 = {
      clientId: str4,
      scopes: null,
      responseType: null,
      redirectUri: null,
      codeChallenge: null,
      codeChallengeMethod: null,
      state: null,
      permissions: null,
      channelId: null,
      guildId: null,
      prompt: null,
      disableGuildSelect: null,
      integrationType: null,
      nonce: null,
    };
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
    obj3.scopes = parts.filter((item) => item.length > 0);
    ({
      response_type: obj2.responseType,
      redirect_uri: obj2.redirectUri,
      code_challenge: obj2.codeChallenge,
      code_challenge_method: obj2.codeChallengeMethod,
      state: obj2.state,
    } = parsed);
    obj3.permissions = deserializeResult;
    obj3.channelId = channel_id;
    obj3.guildId = tmp11;
    obj3.prompt = parsed.prompt;
    obj3.disableGuildSelect = "true" === parsed.disable_guild_select;
    let NumberResult;
    if (null != parsed.integration_type) {
      const _Number = Number;
      NumberResult = Number(parsed.integration_type);
    }
    obj3.integrationType = NumberResult;
    obj3.nonce = parsed.nonce;
    return obj3;
  } catch (err) {}
};
