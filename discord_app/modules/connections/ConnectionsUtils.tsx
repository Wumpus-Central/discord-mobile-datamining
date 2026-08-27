// === Module 5303: officialApplicationIds ===

// Module 5303 (officialApplicationIds)
import applyDefault from "apply" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import ChannelTypesDefault from "ChannelTypes" /* 5305 */;
import closure_3 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "getUncachedChannelPermissions" /* 4089 */;
import OperatorTypes from "OperatorTypes" /* 5304 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ MetadataFields: closure_6, OperatorTypes: error } = OperatorTypes);
({ Permissions: closure_8, PlatformTypes: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/connections/ConnectionsUtils.tsx");

export const officialApplicationIds = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
export const ConnectionConfigurationRuleOperator = { AND: 0, [0]: "AND", OR: 1, [1]: "OR" };
export const getCallbackParamsFromURL = function getCallbackParamsFromURL(c0) {
  let obj = isDiscordProxiedAssetUrlDefault;
  let toURLSafeResult = obj.toURLSafe(c0);
  if (toURLSafeResult == null) {
    obj = { searchParams: null };
    const _URLSearchParams = URLSearchParams;
    const uRLSearchParams = new URLSearchParams();
    obj[0] = uRLSearchParams;
    toURLSafeResult = obj;
  }
  ({ code, state, error, error_description } = Object.fromEntries(toURLSafeResult.searchParams));
  let tmpResult = tmp(38);
  tmpResult(!Array.isArray(code), "Received multiple query param values for code");
  tmpResult = tmp(38);
  tmpResult(!Array.isArray(state), "Received multiple query param values for state");
  const fromEntriesResult = Object.fromEntries(toURLSafeResult.searchParams);
  _modDef38(!Array.isArray(error), "Received multiple query param values for error");
  const tmpResult1 = _modDef38;
  _modDef38(!Array.isArray(errorDescription), "Received multiple query param values for error_description");
  return { code, state, error, errorDescription };
};
export const getConnectionsCheckText = function getConnectionsCheckText(value) {
  ({ connectionType, connectionMetadataField, operator, operatorText } = value);
  let _require;
  const rounded = Math.round(Number(value.value));
  _require = rounded;
  if (constants2.EQUAL === operator) {
    let tmp14 = connectionType === constants3.PAYPAL;
    if (tmp14) {
      tmp14 = connectionMetadataField === constants.PAYPAL_VERIFIED;
    }
    let H97H4S = _require(1236).t.H97H4S;
    if (tmp14) {
      H97H4S = tmp11(1236).t["N95b+f"];
    }
    tmp11 = _require;
  } else if (tmp2.NOT_EQUAL === operator) {
    H97H4S = _require(1236).t["D9B/q2"];
  } else if (tmp2.LESS_THAN === operator) {
    H97H4S = _require(1236).t["3ru8/N"];
    const _Math2 = Math;
    _require = Math.max(0, rounded - 1);
  } else if (tmp2.GREATER_THAN === operator) {
    H97H4S = _require(1236).t.wCVDHn;
    const _Math = Math;
    _require = Math.max(0, rounded + 1);
  } else {
    if (undefined !== operator) {
      H97H4S = null;
    }
    return null;
  }
  if (null != operatorText) {
    H97H4S = operatorText;
  }
  let formatResult = H97H4S;
  if (null != H97H4S) {
    formatResult = H97H4S;
    if (null != operator) {
      if (constants3.REDDIT === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl26 = _require(1236).intl;
          let obj = { platformQuantityHook: null };
          obj[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.TPbtEu, { days: callback });
          };
          formatResult = intl26.format(H97H4S, obj);
        } else if (tmp67.REDDIT_TOTAL_KARMA === connectionMetadataField) {
          const intl25 = _require(1236).intl;
          obj = { platformQuantityHook: null };
          obj[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.P2JAEc, { karma: callback });
          };
          formatResult = intl25.format(H97H4S, obj);
        } else if (tmp67.REDDIT_GOLD === connectionMetadataField) {
          const intl24 = _require(1236).intl;
          obj1 = { platformQuantityHook: null };
          obj1[0] = function platformQuantityHook() {
            const intl = callback(1236).intl;
            return intl.string(callback(1236).t["+/5TCx"]);
          };
          formatResult = intl24.format(H97H4S, obj1);
        } else if (tmp67.REDDIT_MOD === connectionMetadataField) {
          const intl23 = _require(1236).intl;
          const obj2 = { platformQuantityHook: null };
          obj2[0] = function platformQuantityHook() {
            const intl = callback(1236).intl;
            return intl.string(callback(1236).t["9rPbEs"]);
          };
          formatResult = intl23.format(H97H4S, obj2);
        } else {
          return null;
        }
      } else if (tmp76.STEAM === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl22 = _require(1236).intl;
          const obj3 = { platformQuantityHook: null };
          obj3[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.TPbtEu, { days: callback });
          };
          formatResult = intl22.format(H97H4S, obj3);
        } else if (tmp58.STEAM_GAME_COUNT === connectionMetadataField) {
          const intl21 = _require(1236).intl;
          const obj4 = { platformQuantityHook: null };
          obj4[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.H9eLoe, { count: callback });
          };
          formatResult = intl21.format(H97H4S, obj4);
        } else if (tmp58.STEAM_ITEM_COUNT_TF2 === connectionMetadataField) {
          const intl20 = _require(1236).intl;
          const obj5 = { platformQuantityHook: null };
          obj5[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.MceZJ6, { count: callback });
          };
          formatResult = intl20.format(H97H4S, obj5);
        } else if (tmp58.STEAM_ITEM_COUNT_DOTA2 === connectionMetadataField) {
          const intl19 = _require(1236).intl;
          const obj6 = { platformQuantityHook: null };
          obj6[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.dMnRar, { count: callback });
          };
          formatResult = intl19.format(H97H4S, obj6);
        } else {
          return null;
        }
      } else if (tmp76.BLUESKY === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl18 = _require(1236).intl;
          const obj7 = { platformQuantityHook: null };
          obj7[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.TPbtEu, { days: callback });
          };
          formatResult = intl18.format(H97H4S, obj7);
        } else if (tmp51.BLUESKY_FOLLOWERS_COUNT === connectionMetadataField) {
          const intl17 = _require(1236).intl;
          const obj8 = { platformQuantityHook: null };
          obj8[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.xIdKU8, { count: callback });
          };
          formatResult = intl17.format(H97H4S, obj8);
        } else if (tmp51.BLUESKY_STATUSES_COUNT === connectionMetadataField) {
          const intl16 = _require(1236).intl;
          const obj9 = { platformQuantityHook: null };
          obj9[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t["dy3+NR"], { count: callback });
          };
          formatResult = intl16.format(H97H4S, obj9);
        } else {
          return null;
        }
      } else if (tmp76.TWITTER === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl15 = _require(1236).intl;
          const obj10 = { platformQuantityHook: null };
          obj10[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.TPbtEu, { days: callback });
          };
          formatResult = intl15.format(H97H4S, obj10);
        } else if (tmp42.TWITTER_VERIFIED === connectionMetadataField) {
          const intl14 = _require(1236).intl;
          const obj11 = { platformQuantityHook: null };
          obj11[0] = function platformQuantityHook() {
            const intl = callback(1236).intl;
            return intl.string(callback(1236).t.xRygZL);
          };
          formatResult = intl14.format(H97H4S, obj11);
        } else if (tmp42.TWITTER_FOLLOWERS_COUNT === connectionMetadataField) {
          const intl13 = _require(1236).intl;
          const obj12 = { platformQuantityHook: null };
          obj12[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.bkajar, { count: callback });
          };
          formatResult = intl13.format(H97H4S, obj12);
        } else if (tmp42.TWITTER_STATUSES_COUNT === connectionMetadataField) {
          const intl12 = _require(1236).intl;
          const obj13 = { platformQuantityHook: null };
          obj13[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.MI7NKi, { count: callback });
          };
          formatResult = intl12.format(H97H4S, obj13);
        } else {
          return null;
        }
      } else if (tmp76.PAYPAL === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl11 = _require(1236).intl;
          const obj14 = { platformQuantityHook: null };
          obj14[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.TPbtEu, { days: callback });
          };
          formatResult = intl11.format(H97H4S, obj14);
        } else if (tmp37.PAYPAL_VERIFIED === connectionMetadataField) {
          const intl10 = _require(1236).intl;
          const obj15 = { platformQuantityHook: null };
          obj15[0] = function platformQuantityHook() {
            const intl = callback(1236).intl;
            return intl.string(callback(1236).t.slSQuB);
          };
          formatResult = intl10.format(H97H4S, obj15);
        } else {
          return null;
        }
      } else if (tmp76.EBAY === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl9 = _require(1236).intl;
          const obj16 = { platformQuantityHook: null };
          obj16[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.TPbtEu, { days: callback });
          };
          formatResult = intl9.format(H97H4S, obj16);
        } else if (tmp26.EBAY_TOP_RATED_SELLER === connectionMetadataField) {
          const intl8 = _require(1236).intl;
          const obj17 = { platformQuantityHook: null };
          obj17[0] = function platformQuantityHook() {
            const intl = callback(1236).intl;
            return intl.string(callback(1236).t.TEEYwa);
          };
          formatResult = intl8.format(H97H4S, obj17);
        } else if (tmp26.EBAY_POSITIVE_FEEDBACK_PERCENTAGE === connectionMetadataField) {
          const intl7 = _require(1236).intl;
          const obj18 = { platformQuantityHook: null };
          obj18[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.rl9Vgy, { value: callback });
          };
          formatResult = intl7.format(H97H4S, obj18);
        } else if (tmp26.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl6 = _require(1236).intl;
          const obj19 = { platformQuantityHook: null };
          obj19[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.QP5W1R, { count: callback });
          };
          formatResult = intl6.format(H97H4S, obj19);
        } else if (tmp26.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl5 = _require(1236).intl;
          const obj20 = { platformQuantityHook: null };
          obj20[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t["6ZFYdK"], { count: callback });
          };
          formatResult = intl5.format(H97H4S, obj20);
        } else {
          return null;
        }
      } else if (tmp76.TIKTOK === connectionType) {
        if (constants.TIKTOK_VERIFIED === connectionMetadataField) {
          const intl4 = _require(1236).intl;
          const obj21 = { platformQuantityHook: null };
          obj21[0] = function platformQuantityHook() {
            const intl = callback(1236).intl;
            return intl.string(callback(1236).t.uv7ety);
          };
          formatResult = intl4.format(H97H4S, obj21);
        } else if (tmp17.TIKTOK_FOLLOWER_COUNT === connectionMetadataField) {
          const intl3 = _require(1236).intl;
          const obj22 = { platformQuantityHook: null };
          obj22[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.qIPDRy, { count: callback });
          };
          formatResult = intl3.format(H97H4S, obj22);
        } else if (tmp17.TIKTOK_FOLLOWING_COUNT === connectionMetadataField) {
          const intl2 = _require(1236).intl;
          const obj23 = { platformQuantityHook: null };
          obj23[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t.zRta4X, { count: callback });
          };
          formatResult = intl2.format(H97H4S, obj23);
        } else if (tmp17.TIKTOK_LIKES_COUNT === connectionMetadataField) {
          let intl = _require(1236).intl;
          obj = { platformQuantityHook: null };
          obj[0] = function platformQuantityHook() {
            const intl = callback(closure_1_2[7]).intl;
            return intl.formatToPlainString(callback(closure_1_2[7]).t["ar0WW+"], { count: callback });
          };
          formatResult = intl.format(H97H4S, obj);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }
  return formatResult;
};
export const isVerifiedRolesChannelVisible = function isVerifiedRolesChannelVisible(sortedRoles) {
  return sortedRoles.some((tags) => null === tags.tags.guild_connections);
};
export const getVisibleConnectionsRole = function getVisibleConnectionsRole(guildMember) {
  guildMember = guildMember.guildMember;
  ({ guild, sortedGuildRoles, channel, onlyChannelConnectionRoles } = guildMember);
  if (onlyChannelConnectionRoles === undefined) {
    onlyChannelConnectionRoles = false;
  }
  if (null == guildMember) {
    return null;
  } else {
    if (tmp) {
      guild = guild.getGuild(channel.getGuildId());
    }
    if (null == guild) {
      return null;
    } else {
      if (null == sortedGuildRoles) {
        sortedGuildRoles = sortedRoles.getSortedRoles(tmp10);
      }
      const found = sortedGuildRoles.filter((tags) => {
        let hasItem = null === tags.tags.guild_connections;
        if (hasItem) {
          const roles = guildMember.roles;
          hasItem = roles.includes(tags.id);
        }
        return hasItem;
      });
      const intersectionResult = applyDefault.intersection(found, ChannelTypesDefault(channel));
      if (intersectionResult.length > 0) {
        let first = intersectionResult[0];
        if (first == null) {
          first = null;
        }
        let tmp7 = first;
      } else {
        tmp7 = null;
        if (!onlyChannelConnectionRoles) {
          let first1 = found[0];
          if (first1 == null) {
            first1 = null;
          }
          tmp7 = first1;
        }
      }
      return tmp7;
    }
    tmp = null == guild && null != channel;
  }
};
export const getCreatedAtDate = function getCreatedAtDate(date, locale) {
  if (null != date) {
    if ("" !== date) {
      const _Date = Date;
      date = new Date(date);
      const _Date2 = Date;
      let toLocaleDateStringResult = null;
      if (date instanceof Date) {
        const _isNaN = isNaN;
        toLocaleDateStringResult = null;
        if (!isNaN(date.getTime())) {
          toLocaleDateStringResult = date.toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" });
        }
      }
      return toLocaleDateStringResult;
    }
  }
  return null;
};
export const useShowLinkedRolesAdminNux = function useShowLinkedRolesAdminNux(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_5];
  return _require(589).useStateFromStores(items, () => {
    const sortedRoles = closure_1_3.getSortedRoles(lib.id);
    const someResult = sortedRoles.some((tags) => null === tags.tags.guild_connections);
    const result = lib(closure_1_2[11]).UNSAFE_isDismissibleContentDismissed(lib(closure_1_2[12]).DismissibleContent.CONNECTIONS_NUX);
    let tmp4 = !someResult;
    const obj2 = lib(closure_1_2[11]);
    if (!someResult) {
      tmp4 = result;
    }
    if (tmp4) {
      tmp4 = canResult;
    }
    return tmp4;
  });
};