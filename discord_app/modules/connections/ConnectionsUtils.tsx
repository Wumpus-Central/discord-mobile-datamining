// === Module 6685: ConnectionsUtils ===

// Module 6685 (ConnectionsUtils)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import Constants2 from "Constants" /* 1085 */;
import intl27 from "intl" /* 1126 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import getConnectionsRolesDefault from "getConnectionsRoles" /* 6687 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 6686 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ MetadataFields: hasOwnProperty, OperatorTypes: metroRequire } = Constants);
const PlatformTypes = Constants2.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/ConnectionsUtils.tsx");

export const officialApplicationIds = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
export const ConnectionConfigurationRuleOperator = { AND: 0, [0]: "AND", OR: 1, [1]: "OR" };
export const getCallbackParamsFromURL = function getCallbackParamsFromURL(c0) {
  let code;
  let error;
  let error_description;
  let state;
  let uRLSearchParams;
  const obj = URLUtilsDefault;
  let toURLSafeResult = obj.toURLSafe(c0);
  if (toURLSafeResult == null) {
    const _URLSearchParams = URLSearchParams;
    const self = this;
    const self2 = this;
    const obj2 = { searchParams: uRLSearchParams };
    uRLSearchParams = new URLSearchParams();
    toURLSafeResult = obj2;
  }
  ({ code, state, error, error_description } = Object.fromEntries(toURLSafeResult.searchParams));
  Object.fromEntries(toURLSafeResult.searchParams);
  const tmpResult = _modDef38;
  tmpResult(!Array.isArray(code), "Received multiple query param values for code");
  const tmpResult4 = _modDef38;
  tmpResult4(!Array.isArray(state), "Received multiple query param values for state");
  const tmpResult5 = _modDef38;
  tmpResult5(!Array.isArray(error), "Received multiple query param values for error");
  const tmpResult6 = _modDef38;
  tmpResult6(!Array.isArray(errorDescription), "Received multiple query param values for error_description");
  return { code, state, error, errorDescription };
};
export const getConnectionsCheckText = function getConnectionsCheckText(value) {
  let closure_0;
  let connectionMetadataField;
  let connectionType;
  let operator;
  let operatorText;
  let prop;
  ({ connectionType, connectionMetadataField, operator, operatorText } = value);
  const rounded = Math.round(Number(value.value));
  _require = rounded;
  if (constants2.EQUAL === operator) {
    let tmp14 = connectionType === PlatformTypes.PAYPAL;
    const H97H4S = require("intl").t.H97H4S;
    const tmp11 = _require;
    if (tmp14) {
      tmp14 = connectionMetadataField === constants.PAYPAL_VERIFIED;
    }
    prop = H97H4S;
    if (tmp14) {
      prop = tmp11(1126).t["N95b+f"];
    }
  } else if (constants2.NOT_EQUAL === operator) {
    prop = require("intl").t["D9B/q2"];
  } else if (constants2.LESS_THAN === operator) {
    prop = require("intl").t["3ru8/N"];
    const _Math2 = Math;
    _require = Math.max(0, rounded - 1);
  } else if (constants2.GREATER_THAN === operator) {
    prop = require("intl").t.wCVDHn;
    const _Math = Math;
    _require = Math.max(0, rounded + 1);
  } else {
    if (undefined !== operator) {
      prop = null;
    }
    return null;
  }
  if (null != operatorText) {
    prop = operatorText;
  }
  let formatResult = prop;
  if (null != prop) {
    formatResult = prop;
    if (null != operator) {
      if (PlatformTypes.REDDIT === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl26 = require("intl").intl;
          const obj2 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { days };
                      return intl.formatToPlainString(intl27.t.TPbtEu, obj);
                    }
          };
          formatResult = intl26.format(prop, obj2);
        } else if (constants.REDDIT_TOTAL_KARMA === connectionMetadataField) {
          const intl25 = require("intl").intl;
          const obj3 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { karma };
                      return intl.formatToPlainString(intl27.t.P2JAEc, obj);
                    }
          };
          formatResult = intl25.format(prop, obj3);
        } else if (constants.REDDIT_GOLD === connectionMetadataField) {
          const intl24 = require("intl").intl;
          const obj4 = {
            platformQuantityHook() {
                      const intl = closure_0(dependencyMap[6]).intl;
                      return intl.string(closure_0(dependencyMap[6]).t["+/5TCx"]);
                    }
          };
          formatResult = intl24.format(prop, obj4);
        } else if (constants.REDDIT_MOD === connectionMetadataField) {
          const intl23 = require("intl").intl;
          const obj5 = {
            platformQuantityHook() {
                      const intl = closure_0(dependencyMap[6]).intl;
                      return intl.string(closure_0(dependencyMap[6]).t["9rPbEs"]);
                    }
          };
          formatResult = intl23.format(prop, obj5);
        } else {
          return null;
        }
      } else if (PlatformTypes.STEAM === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl22 = require("intl").intl;
          const obj6 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { days };
                      return intl.formatToPlainString(intl27.t.TPbtEu, obj);
                    }
          };
          formatResult = intl22.format(prop, obj6);
        } else if (constants.STEAM_GAME_COUNT === connectionMetadataField) {
          const intl21 = require("intl").intl;
          const obj7 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.H9eLoe, obj);
                    }
          };
          formatResult = intl21.format(prop, obj7);
        } else if (constants.STEAM_ITEM_COUNT_TF2 === connectionMetadataField) {
          const intl20 = require("intl").intl;
          const obj8 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.MceZJ6, obj);
                    }
          };
          formatResult = intl20.format(prop, obj8);
        } else if (constants.STEAM_ITEM_COUNT_DOTA2 === connectionMetadataField) {
          const intl19 = require("intl").intl;
          const obj9 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.dMnRar, obj);
                    }
          };
          formatResult = intl19.format(prop, obj9);
        } else {
          return null;
        }
      } else if (PlatformTypes.BLUESKY === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl18 = require("intl").intl;
          const obj10 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { days };
                      return intl.formatToPlainString(intl27.t.TPbtEu, obj);
                    }
          };
          formatResult = intl18.format(prop, obj10);
        } else if (constants.BLUESKY_FOLLOWERS_COUNT === connectionMetadataField) {
          const intl17 = require("intl").intl;
          const obj11 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.xIdKU8, obj);
                    }
          };
          formatResult = intl17.format(prop, obj11);
        } else if (constants.BLUESKY_STATUSES_COUNT === connectionMetadataField) {
          const intl16 = require("intl").intl;
          const obj12 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t["dy3+NR"], obj);
                    }
          };
          formatResult = intl16.format(prop, obj12);
        } else {
          return null;
        }
      } else if (PlatformTypes.TWITTER === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl15 = require("intl").intl;
          const obj13 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { days };
                      return intl.formatToPlainString(intl27.t.TPbtEu, obj);
                    }
          };
          formatResult = intl15.format(prop, obj13);
        } else if (constants.TWITTER_VERIFIED === connectionMetadataField) {
          const intl14 = require("intl").intl;
          const obj14 = {
            platformQuantityHook() {
                      const intl = closure_0(dependencyMap[6]).intl;
                      return intl.string(closure_0(dependencyMap[6]).t.xRygZL);
                    }
          };
          formatResult = intl14.format(prop, obj14);
        } else if (constants.TWITTER_FOLLOWERS_COUNT === connectionMetadataField) {
          const intl13 = require("intl").intl;
          const obj15 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.bkajar, obj);
                    }
          };
          formatResult = intl13.format(prop, obj15);
        } else if (constants.TWITTER_STATUSES_COUNT === connectionMetadataField) {
          const intl12 = require("intl").intl;
          const obj16 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.MI7NKi, obj);
                    }
          };
          formatResult = intl12.format(prop, obj16);
        } else {
          return null;
        }
      } else if (PlatformTypes.PAYPAL === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl11 = require("intl").intl;
          const obj17 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { days };
                      return intl.formatToPlainString(intl27.t.TPbtEu, obj);
                    }
          };
          formatResult = intl11.format(prop, obj17);
        } else if (tmp37.PAYPAL_VERIFIED === connectionMetadataField) {
          const intl10 = require("intl").intl;
          const obj18 = {
            platformQuantityHook() {
                      const intl = closure_0(dependencyMap[6]).intl;
                      return intl.string(closure_0(dependencyMap[6]).t.slSQuB);
                    }
          };
          formatResult = intl10.format(prop, obj18);
        } else {
          return null;
        }
      } else if (PlatformTypes.EBAY === connectionType) {
        if (constants.CREATED_AT === connectionMetadataField) {
          const intl9 = require("intl").intl;
          const obj19 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { days };
                      return intl.formatToPlainString(intl27.t.TPbtEu, obj);
                    }
          };
          formatResult = intl9.format(prop, obj19);
        } else if (constants.EBAY_TOP_RATED_SELLER === connectionMetadataField) {
          const intl8 = require("intl").intl;
          const obj20 = {
            platformQuantityHook() {
                      const intl = closure_0(dependencyMap[6]).intl;
                      return intl.string(closure_0(dependencyMap[6]).t.TEEYwa);
                    }
          };
          formatResult = intl8.format(prop, obj20);
        } else if (constants.EBAY_POSITIVE_FEEDBACK_PERCENTAGE === connectionMetadataField) {
          const intl7 = require("intl").intl;
          const obj21 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { value };
                      return intl.formatToPlainString(intl27.t.rl9Vgy, obj);
                    }
          };
          formatResult = intl7.format(prop, obj21);
        } else if (constants.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl6 = require("intl").intl;
          const obj22 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.QP5W1R, obj);
                    }
          };
          formatResult = intl6.format(prop, obj22);
        } else if (constants.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT === connectionMetadataField) {
          const intl5 = require("intl").intl;
          const obj23 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t["6ZFYdK"], obj);
                    }
          };
          formatResult = intl5.format(prop, obj23);
        } else {
          return null;
        }
      } else if (PlatformTypes.TIKTOK === connectionType) {
        if (constants.TIKTOK_VERIFIED === connectionMetadataField) {
          const intl4 = require("intl").intl;
          const obj24 = {
            platformQuantityHook() {
                      const intl = closure_0(dependencyMap[6]).intl;
                      return intl.string(closure_0(dependencyMap[6]).t.uv7ety);
                    }
          };
          formatResult = intl4.format(prop, obj24);
        } else if (constants.TIKTOK_FOLLOWER_COUNT === connectionMetadataField) {
          const intl3 = require("intl").intl;
          const obj25 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.qIPDRy, obj);
                    }
          };
          formatResult = intl3.format(prop, obj25);
        } else if (constants.TIKTOK_FOLLOWING_COUNT === connectionMetadataField) {
          const intl2 = require("intl").intl;
          const obj26 = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t.zRta4X, obj);
                    }
          };
          formatResult = intl2.format(prop, obj26);
        } else if (constants.TIKTOK_LIKES_COUNT === connectionMetadataField) {
          let intl = require("intl").intl;
          let obj = {
            platformQuantityHook() {
                      const intl = intl27.intl;
                      const obj = { count };
                      return intl.formatToPlainString(intl27.t["ar0WW+"], obj);
                    }
          };
          formatResult = intl.format(prop, obj);
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
  let channel;
  let guild;
  let onlyChannelConnectionRoles;
  let sortedGuildRoles;
  guildMember = guildMember.guildMember;
  ({ guild, sortedGuildRoles, channel, onlyChannelConnectionRoles } = guildMember);
  if (onlyChannelConnectionRoles === undefined) {
    onlyChannelConnectionRoles = false;
  }
  if (null == guildMember) {
    return null;
  } else {
    const tmp = null == guild && null != channel;
    if (tmp) {
      guild = GuildStore.getGuild(channel.getGuildId());
    }
    if (null == guild) {
      return null;
    } else {
      let tmp7;
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
      const obj = _modDef12;
      const intersectionResult = obj.intersection(found, getConnectionsRolesDefault(channel));
      if (intersectionResult.length > 0) {
        let first = intersectionResult[0];
        if (first == null) {
          first = null;
        }
        tmp7 = first;
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
  }
};
export const getCreatedAtDate = function getCreatedAtDate(metadata, locale) {
  if (null != metadata) {
    if ("" !== metadata) {
      const _Date = Date;
      const self = this;
      const self2 = this;
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