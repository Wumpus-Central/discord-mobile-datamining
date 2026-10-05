// discord_app/modules/oauth2/Authorize.tsx
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import QueryStringUtils from "../../utils/QueryStringUtils.tsx";
import _mod5635 from "../../../_runtime/metro/05635__.js";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import scopes from "scopes.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ EMPTY_NUX_SERVER: hasOwnProperty, FAVORITES: metroRequire, ME: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/oauth2/Authorize.tsx");

export const filterScopes = function filterScopes(items) {
  const found = items.filter((item) => {
    const RemovedScopes = scopes.RemovedScopes;
    return !RemovedScopes.includes(item);
  });
  const hasItem =
    found.includes(OAuth2Scopes.OAuth2Scopes.BOT) && !found.includes(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  if (hasItem) {
    found.push(OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS);
  }
  return found;
};
export const parseOAuth2AuthorizeProps = function parseOAuth2AuthorizeProps(query) {
  let NumberResult;
  let channel_id;
  let guild_id;
  function sanitizeOAuthGuild(guild_id) {
    const items = [closure_1_7, closure_1_6, closure_1_5];
    if (!items.includes(guild_id)) {
      return guild_id;
    }
  }
  const obj = _mod5635;
  const parsed = obj.parse(query, { arrayFormat: "bracket" });
  let NONE = PermissionUtilsAll.NONE;
  try {
    let str2 = "0";
    const deserialize = BigFlagUtilsAll.deserialize;
    BigFlagUtilsAll;
    if (null != parsed.permissions) {
      str2 = "0";
      if ("" !== parsed.permissions) {
        str2 = parsed.permissions;
      }
    }
    NONE = deserialize(str2);
  } catch (err) {}
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
  const tmp11 = sanitizeOAuthGuild(guild_id);
  const tmpResult = QueryStringUtils;
  let str4 = tmpResult.getFirstQueryStringValue(parsed.scope);
  if (str4 == null) {
    str4 = "";
  }
  const str5 = str4.replace(/\+/g, " ");
  const parts = str5.split(" ");
  let str6 = parsed.client_id;
  const found = parts.filter((item) => item.length > 0);
  if (str6 == null) {
    str6 = "";
  }
  const obj2 = {
    clientId: str6,
    scopes: found,
    responseType: parsed.response_type,
    redirectUri: parsed.redirect_uri,
    codeChallenge: parsed.code_challenge,
    codeChallengeMethod: parsed.code_challenge_method,
    state: parsed.state,
    permissions: NONE,
    channelId: channel_id,
    guildId: tmp11,
    prompt: parsed.prompt,
    disableGuildSelect: "true" === parsed.disable_guild_select,
    integrationType: NumberResult,
    nonce: parsed.nonce,
  };
  NumberResult = undefined;
  if (null != parsed.integration_type) {
    const _Number = Number;
    NumberResult = Number(parsed.integration_type);
  }
  return obj2;
};
