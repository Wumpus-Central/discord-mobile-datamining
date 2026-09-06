// === Module 5407: ConnectionsUtils ===

// Module 5407 (ConnectionsUtils)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1114 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import getConnectionsRolesDefault from "getConnectionsRoles" /* 5409 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
let Constants = fn(5408);
({ MetadataFields: metroRequire, OperatorTypes: closure_7 } = Constants);
Constants = fn(1074);
({ Permissions: closure_8, PlatformTypes: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/connections/ConnectionsUtils.tsx");

export const officialApplicationIds = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
export const ConnectionConfigurationRuleOperator = { AND: 0, [0]: "AND", OR: 1, [1]: "OR" };
export const getCallbackParamsFromURL = function getCallbackParamsFromURL(c0) {
  let obj = URLUtilsDefault;
  let toURLSafeResult = obj.toURLSafe(c0);
  if (toURLSafeResult == null) {
    obj = { searchParams: null };
    const _URLSearchParams = URLSearchParams;
    const uRLSearchParams = new URLSearchParams();
    obj.searchParams = uRLSearchParams;
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
  const rounded = Math.round(Number(value.value));
  _require = rounded;
  if (constants2.EQUAL === operator) {
    let tmp14 = connectionType === constants4.PAYPAL;
    if (tmp14) {
      tmp14 = connectionMetadataField === constants.PAYPAL_VERIFIED;
    }
    let H97H4S = require("util").t.H97H4S;
    if (tmp14) {
      H97H4S = tmp11(1114).t["N95b+f"];
    }
    tmp11 = _require;
  } else if (tmp2.NOT_EQUAL === operator) {
    H97H4S = require("util").t["D9B/q2"];
  } else if (tmp2.LESS_THAN === operator) {
    H97H4S = require("util").t["3ru8/N"];
    const _Math2 = Math;
    _require = Math.max(0, rounded - 1);
  } else if (tmp2.GREATER_THAN === operator) {
    H97H4S = require("util").t.wCVDHn;
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
      if (constants4.REDDIT === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl26 = require("util").intl;
          let obj = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.TPbtEu, { days });
                    }
          };
          formatResult = intl26.format(H97H4S, obj);
        } else if (tmp67.REDDIT_TOTAL_KARMA === connectionMetadataField) {
          const intl25 = require("util").intl;
          obj = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.P2JAEc, { karma });
                    }
          };
          formatResult = intl25.format(H97H4S, obj);
        } else if (tmp67.REDDIT_GOLD === connectionMetadataField) {
          const intl24 = require("util").intl;
          const obj1 = {
            platformQuantityHook() {
                      const intl = closure_0(1114).intl;
                      return intl.string(closure_0(1114).t["+/5TCx"]);
                    }
          };
          formatResult = intl24.format(H97H4S, obj1);
        } else if (tmp67.REDDIT_MOD === connectionMetadataField) {
          const intl23 = require("util").intl;
          const obj2 = {
            platformQuantityHook() {
                      const intl = closure_0(1114).intl;
                      return intl.string(closure_0(1114).t["9rPbEs"]);
                    }
          };
          formatResult = intl23.format(H97H4S, obj2);
        } else {
          return null;
        }
      } else if (tmp76.STEAM === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl22 = require("util").intl;
          const obj3 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.TPbtEu, { days });
                    }
          };
          formatResult = intl22.format(H97H4S, obj3);
        } else if (tmp58.STEAM_GAME_COUNT === connectionMetadataField) {
          const intl21 = require("util").intl;
          const obj4 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.H9eLoe, { count });
                    }
          };
          formatResult = intl21.format(H97H4S, obj4);
        } else if (tmp58.STEAM_ITEM_COUNT_TF2 === connectionMetadataField) {
          const intl20 = require("util").intl;
          const obj5 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.MceZJ6, { count });
                    }
          };
          formatResult = intl20.format(H97H4S, obj5);
        } else if (tmp58.STEAM_ITEM_COUNT_DOTA2 === connectionMetadataField) {
          const intl19 = require("util").intl;
          const obj6 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.dMnRar, { count });
                    }
          };
          formatResult = intl19.format(H97H4S, obj6);
        } else {
          return null;
        }
      } else if (tmp76.BLUESKY === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl18 = require("util").intl;
          const obj7 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.TPbtEu, { days });
                    }
          };
          formatResult = intl18.format(H97H4S, obj7);
        } else if (tmp51.BLUESKY_FOLLOWERS_COUNT === connectionMetadataField) {
          const intl17 = require("util").intl;
          const obj8 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.xIdKU8, { count });
                    }
          };
          formatResult = intl17.format(H97H4S, obj8);
        } else if (tmp51.BLUESKY_STATUSES_COUNT === connectionMetadataField) {
          const intl16 = require("util").intl;
          const obj9 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t["dy3+NR"], { count });
                    }
          };
          formatResult = intl16.format(H97H4S, obj9);
        } else {
          return null;
        }
      } else if (tmp76.TWITTER === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl15 = require("util").intl;
          const obj10 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.TPbtEu, { days });
                    }
          };
          formatResult = intl15.format(H97H4S, obj10);
        } else if (tmp42.TWITTER_VERIFIED === connectionMetadataField) {
          const intl14 = require("util").intl;
          const obj11 = {
            platformQuantityHook() {
                      const intl = closure_0(1114).intl;
                      return intl.string(closure_0(1114).t.xRygZL);
                    }
          };
          formatResult = intl14.format(H97H4S, obj11);
        } else if (tmp42.TWITTER_FOLLOWERS_COUNT === connectionMetadataField) {
          const intl13 = require("util").intl;
          const obj12 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.bkajar, { count });
                    }
          };
          formatResult = intl13.format(H97H4S, obj12);
        } else if (tmp42.TWITTER_STATUSES_COUNT === connectionMetadataField) {
          const intl12 = require("util").intl;
          const obj13 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.MI7NKi, { count });
                    }
          };
          formatResult = intl12.format(H97H4S, obj13);
        } else {
          return null;
        }
      } else if (tmp76.PAYPAL === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl11 = require("util").intl;
          const obj14 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.TPbtEu, { days });
                    }
          };
          formatResult = intl11.format(H97H4S, obj14);
        } else if (tmp37.PAYPAL_VERIFIED === connectionMetadataField) {
          const intl10 = require("util").intl;
          const obj15 = {
            platformQuantityHook() {
                      const intl = closure_0(1114).intl;
                      return intl.string(closure_0(1114).t.slSQuB);
                    }
          };
          formatResult = intl10.format(H97H4S, obj15);
        } else {
          return null;
        }
      } else if (tmp76.EBAY === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl9 = require("util").intl;
          const obj16 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.TPbtEu, { days });
                    }
          };
          formatResult = intl9.format(H97H4S, obj16);
        } else if (tmp26.EBAY_TOP_RATED_SELLER === connectionMetadataField) {
          const intl8 = require("util").intl;
          const obj17 = {
            platformQuantityHook() {
                      const intl = closure_0(1114).intl;
                      return intl.string(closure_0(1114).t.TEEYwa);
                    }
          };
          formatResult = intl8.format(H97H4S, obj17);
        } else if (tmp26.EBAY_POSITIVE_FEEDBACK_PERCENTAGE === connectionMetadataField) {
          const intl7 = require("util").intl;
          const obj18 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.rl9Vgy, { value });
                    }
          };
          formatResult = intl7.format(H97H4S, obj18);
        } else if (tmp26.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl6 = require("util").intl;
          const obj19 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.QP5W1R, { count });
                    }
          };
          formatResult = intl6.format(H97H4S, obj19);
        } else if (tmp26.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl5 = require("util").intl;
          const obj20 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t["6ZFYdK"], { count });
                    }
          };
          formatResult = intl5.format(H97H4S, obj20);
        } else {
          return null;
        }
      } else if (tmp76.TIKTOK === connectionType) {
        if (constants.TIKTOK_VERIFIED === connectionMetadataField) {
          const intl4 = require("util").intl;
          const obj21 = {
            platformQuantityHook() {
                      const intl = closure_0(1114).intl;
                      return intl.string(closure_0(1114).t.uv7ety);
                    }
          };
          formatResult = intl4.format(H97H4S, obj21);
        } else if (tmp17.TIKTOK_FOLLOWER_COUNT === connectionMetadataField) {
          const intl3 = require("util").intl;
          const obj22 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.qIPDRy, { count });
                    }
          };
          formatResult = intl3.format(H97H4S, obj22);
        } else if (tmp17.TIKTOK_FOLLOWING_COUNT === connectionMetadataField) {
          const intl2 = require("util").intl;
          const obj23 = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t.zRta4X, { count });
                    }
          };
          formatResult = intl2.format(H97H4S, obj23);
        } else if (tmp17.TIKTOK_LIKES_COUNT === connectionMetadataField) {
          let intl = require("util").intl;
          obj = {
            platformQuantityHook() {
                      const intl = util.intl;
                      return intl.formatToPlainString(util.t["ar0WW+"], { count });
                    }
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
      guild = GuildStore.getGuild(channel.getGuildId());
    }
    if (null == guild) {
      return null;
    } else {
      if (null == sortedGuildRoles) {
        sortedGuildRoles = GuildRoleStore.getSortedRoles(tmp10);
      }
      const found = sortedGuildRoles.filter((tags) => {
        let hasItem = null === tags.tags.guild_connections;
        if (hasItem) {
          const roles = guildMember.roles;
          hasItem = roles.includes(tags.id);
        }
        return hasItem;
      });
      const intersectionResult = _modDef12.intersection(found, getConnectionsRolesDefault(channel));
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
export const getCreatedAtDate = function getCreatedAtDate(metadata, locale) {
  if (null != metadata) {
    if ("" !== metadata) {
      const _Date = Date;
      const date = new Date(metadata);
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
  _require = arg0;
  const items = [GuildRoleStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const sortedRoles = GuildRoleStore.getSortedRoles(id.id);
    const someResult = sortedRoles.some((tags) => null === tags.tags.guild_connections);
    const result = DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.CONNECTIONS_NUX);
    let tmp4 = !someResult;
    if (!someResult) {
      tmp4 = result;
    }
    if (tmp4) {
      tmp4 = canResult;
    }
    return tmp4;
  });
};