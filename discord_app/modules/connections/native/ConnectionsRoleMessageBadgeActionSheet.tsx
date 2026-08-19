// === Module 10998: PopoutCheck ===

// Module 10998 (PopoutCheck)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4310 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4326 */;
import Text from "Text" /* 4734 */;
import officialApplicationIds2 from "officialApplicationIds" /* 5224 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createdAt from "createdAt" /* 1930 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import map from "map" /* 10999 */;
import { OperatorTypes } from "OperatorTypes" /* 5225 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function PopoutCheck(arg0) {
  ({ operator, value, description } = arg0);
  ({ connectionType, connectionMetadataField } = arg0);
  const tmp = callback3();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      const intl = getSystemLocale.intl;
      let obj = { description: null, count: null };
      obj[0] = description;
      const _Math = Math;
      const _Number = Number;
      obj[1] = Math.max(0, Number(value) - 1);
      let formatResult = intl.format(getSystemLocale.t["2p7dA3"], obj);
    } else {
      formatResult = description;
      if (tmp5.GREATER_THAN === operator) {
        const intl2 = getSystemLocale.intl;
        obj = { description: null, count: null };
        obj[0] = description;
        const _Math2 = Math;
        const _Number2 = Number;
        obj[1] = Math.max(0, Number(value) + 1);
        formatResult = intl2.format(getSystemLocale.t["2p7dA3"], obj);
      }
    }
  } else {
    obj = officialApplicationIds2;
    obj1 = { connectionType: null, connectionMetadataField: null, operator: null, value: null };
    obj1[0] = connectionType;
    obj1[1] = connectionMetadataField;
    obj1[2] = operator;
    obj1[3] = value;
    formatResult = obj.getConnectionsCheckText(obj1);
  }
  let tmp9 = null;
  if (null != formatResult) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.popoutCheck;
    const obj3 = { size: "sm", style: null };
    obj3[1] = tmp.popoutCheckIcon;
    const items = [callback(CheckmarkLargeIcon.CheckmarkLargeIcon, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: null };
    obj4[2] = formatResult;
    items[1] = callback(Text.Text, obj4);
    obj2[1] = items;
    tmp9 = callback2(closure_6, obj2);
  }
  return tmp9;
}
class PopoutChecks {
  constructor(arg0) {
    guildId = global.guildId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_1 = closure_19();
    closure_2 = require("useTheme")();
    obj = require("apply");
    groupByResult = obj.groupBy(global.eligibilityStates, (application_id) => {
      let str = "";
      if (null != application_id.application_id) {
        const _HermesInternal = HermesInternal;
        str = ":" + application_id.application_id;
      }
      return "" + application_id.connection_type + str;
    });
    closure_3 = groupByResult;
    keys = Object.keys(groupByResult);
    closure_4 = keys.length - 1;
    obj2 = require("map");
    closure_5 = obj2.useToken(require("Themes").unsafe_rawColors.GREEN_330);
    obj = {
      children: keys.map((item, index) => {
            const found = arr.filter((item, index) => null != item.operator);
            const found1 = arr.find((item, index) => null != item.application);
            let obj = lib(table[21]);
            const value = obj.get(item);
            let application;
            if (found1 != null) {
              application = found1.application;
            }
            let bot;
            if (application != null) {
              bot = application.bot;
            }
            let tmp7 = null;
            if (null != bot) {
              tmp7 = new closure_1_7(application.bot);
            }
            const officialApplicationIds = guildId(table[15]).officialApplicationIds;
            let str;
            if (application != null) {
              str = application.id;
            }
            if (str == null) {
              str = "";
            }
            if (officialApplicationIds.includes(str)) {
              obj = { style: null, guildId: null, roleColor: null, size: 16 };
              obj[0] = lib.botTag;
              obj[1] = guildId;
              obj[2] = closure_5;
              let tmp12 = closure_1_16(lib(table[22]), obj);
            } else if (null != tmp7) {
              obj = { style: null, verified: false };
              obj[0] = lib.botTag;
              tmp12 = closure_1_16(lib(table[23]), obj);
            }
            const items = [lib.popoutChecksGroup, ];
            let prop = null;
            if (index < closure_4) {
              prop = lib.popoutChecksGroupBottomMargin;
            }
            obj1 = { style: items, children: null };
            items[1] = prop;
            const obj2 = { style: lib.popoutCheckGroupName, children: null };
            if (null == value) {
              const items1 = [null, , , ];
              let tmp26 = null;
              if (null != tmp7) {
                const obj3 = { style: null, user: null, size: null, guildId: "Array" };
                obj3[0] = lib.popoutCheckGroupPlatformIcon;
                obj3[1] = tmp7;
                obj3[2] = guildId(table[24]).AvatarSizes.XSMALL;
                tmp26 = closure_1_16(guildId(table[24]).Avatar, obj3);
              }
              items1[1] = tmp26;
              let name;
              if (value != null) {
                name = value.name;
              }
              if (name == null) {
                let name1;
                if (application != null) {
                  name1 = application.name;
                }
                name = name1;
              }
              const obj4 = { variant: "text-sm/medium", color: "interactive-text-active", children: null };
              obj4[2] = name;
              items1[2] = closure_1_16(guildId(table[17]).Text, obj4);
              items1[3] = tmp12;
              obj2[1] = items1;
              const items2 = [
                closure_1_17(closure_1_6, obj2),
                found.map((item, index) => {
                    ({ connection_type, connection_metadata_field, operator, value } = item);
                    callback(38)(null != connectionMetadataField, "connectionMetadataField is null");
                    callback(38)(null != operator, "operator is null");
                    callback(38)(null != value, "value is null");
                    return callback2(closure_20, { connectionType, connectionMetadataField, operator, value, description: item.description }, "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value);
                  })
              ];
              obj1[1] = items2;
              return closure_1_17(closure_1_6, obj1, item);
            } else {
              const obj5 = { style: null, source: null, disableColor: true, size: null };
              obj5[0] = lib.popoutCheckGroupPlatformIcon;
              guildId(table[25]);
              const tmp11Result = guildId(table[26]);
              const icon = value.icon;
              obj5[1] = tmp11Result.makeSource(tmp11Result.isThemeDark(table) ? icon.darkPNG : icon.lightPNG);
              obj5[3] = guildId(table[24]).Icon.Sizes.MEDIUM;
              closure_1_16(guildId(table[24]).Icon, obj5);
            }
          })
    };
    return jsx(Fragment, obj);
  }
}
({ ActivityIndicator: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const createCacheKey = { width: "100%", flexDirection: "row", alignItems: "center", paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 8, height: 24, width: 24 };
createCacheKey[3] = { flexShrink: 1, flexDirection: "column" };
createCacheKey[4] = { position: "absolute", left: 0, top: 0 };
createCacheKey[5] = { marginVertical: 40 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 32, paddingRight: 20 };
createCacheKey[7] = { marginRight: 8, tintColor: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE };
createCacheKey[8] = { width: "100%", marginBottom: 24 };
createCacheKey[9] = { paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: 12 };
createCacheKey[10] = { flexDirection: "row", alignItems: "center" };
createCacheKey[11] = { marginRight: 8 };
createCacheKey[12] = { marginBottom: 8 };
createCacheKey[13] = { marginLeft: 4 };
let closure_19 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default function ConnectionsRoleMessageBadgeActionSheet(userId) {
  userId = userId.userId;
  const roleId = userId.roleId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let first;
  closure_9 = undefined;
  let tmp = callback3();
  const analyticsLocations = roleId(channelId[28])(roleId(channelId[29]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  let obj = userId(channelId[30]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getGuild(guildId));
  obj1 = userId(channelId[30]);
  const items1 = [first];
  closure_6 = obj1.useStateFromStores(items1, () => first.getId());
  let obj2 = userId(channelId[30]);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => member.getMember(guildId, closure_6));
  let obj3 = userId(channelId[30]);
  const items3 = [closure_12];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => closure_1_12.getGuildRoleConnectionEligibility(roleId));
  let obj4 = analyticsLocations;
  const tmp8 = guildId(analyticsLocations.useState(null == stateFromStores2), 2);
  first = tmp8[0];
  closure_9 = tmp8[1];
  if (stateFromStores1 != null) {
    const roles = stateFromStores1.roles;
    const hasItem = roles.includes(roleId);
  }
  const items4 = [userId, roleId, channelId, guildId];
  const effect = obj4.useEffect(() => {
    roleId(channelId[31]);
    const obj = { other_user_id: userId, role_id: roleId };
    const merged = Object.assign(userId(channelId[32]).collectChannelAnalyticsMetadataFromId(channelId));
    const obj3 = userId(channelId[32]);
    const merged1 = Object.assign(userId(channelId[32]).collectGuildAnalyticsMetadata(guildId));
    obj.track(closure_1_14.PASSPORT_ROLE_POPOUT_VIEWED, obj);
  }, items4);
  const items5 = [guildId, roleId, first, stateFromStores2];
  const effect1 = obj4.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null == stateFromStores2;
    }
    if (tmp) {
      const guildRoleConnectionsEligibility = roleId(channelId[33]).fetchGuildRoleConnectionsEligibility(guildId, roleId);
      guildRoleConnectionsEligibility.then((result) => callback(false));
      const obj = roleId(channelId[33]);
    }
  }, items5);
  if (stateFromStores2 != null) {
    const flatResult = stateFromStores2.flat();
    const someResult = stateFromStores2.flat().some((item, index) => undefined === item.application_id);
  }
  const tmp2 = roleId;
  const tmp4 = roleId(channelId[28]);
  const items6 = [closure_10];
  const stateFromStores3 = userId(channelId[30]).useStateFromStores(items6, () => {
    let role;
    if (null != stateFromStores) {
      role = closure_1_10.getRole(tmp.id, roleId);
    }
    return role;
  });
  if (null != stateFromStores2) {
    if (1 === stateFromStores2.length) {
      obj = { value: null, children: null };
      obj[0] = analyticsLocations;
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.header;
      obj2 = { style: null, children: null };
      obj2[0] = tmp.verifiedContainer;
      obj3 = { style: null, guildId: null, role: null, size: 24 };
      obj3[0] = tmp.verifiedCheck;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (id == null) {
        id = closure_15;
      }
      obj3[1] = id;
      obj3[2] = stateFromStores3;
      obj2[1] = callback(tmp2(tmp3[35]), obj3);
      const items7 = [callback(closure_6, obj2), ];
      obj4 = { style: null, children: null };
      obj4[0] = tmp.headerTextContainer;
      let name;
      if (stateFromStores3 != null) {
        name = stateFromStores3.name;
      }
      const obj5 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
      obj5[2] = name;
      const items8 = [callback(tmp5(tmp3[17]).Text, obj5), ];
      const obj6 = { variant: "text-xs/normal", color: "text-default", children: null };
      obj6[2] = formatResult;
      items8[1] = callback(tmp5(tmp3[17]).Text, obj6);
      obj4[1] = items8;
      items7[1] = callback2(closure_6, obj4);
      obj1[1] = items7;
      const items9 = [callback2(closure_6, obj1), ];
      if (null != stateFromStores2) {
        if (null != stateFromStores2.flat()) {
          const obj7 = { eligibilityStates: null, guildId: null };
          obj7[0] = stateFromStores2.flat();
          obj7[1] = guildId;
          const items10 = [callback(PopoutChecks, obj7), , ];
          let tmp16Result = null;
          if (!hasItem) {
            const obj8 = { style: null, children: null };
            obj8[0] = tmp.button;
            const obj9 = { onPress: null, text: null, variant: "primary", grow: true };
            obj9[0] = function onPress() {
              let obj = roleId(channelId[37]);
              obj.hideActionSheet("ConnectionsRoleMessageBadgeActionSheet");
              obj = { guildId };
              const result = userId(channelId[38]).openGuildRoleConnectionsModal(obj);
            };
            const intl4 = tmp5(tmp3[14]).intl;
            obj9[1] = intl4.string(tmp5(tmp3[14]).t.T1t1WV);
            obj8[1] = callback(tmp5(tmp3[36]).Button, obj9);
            tmp16Result = callback(tmp18, obj8);
          }
          items10[1] = tmp16Result;
          tmp16Result = null;
          if (someResult) {
            const obj10 = { style: null, children: null };
            obj10[0] = tmp.button;
            const obj11 = { onPress: null, text: null, variant: "secondary", grow: true };
            obj11[0] = function onPress() {
              roleId(channelId[39])({ userId, channelId, roleId, sourceAnalyticsLocations: analyticsLocations });
            };
            const intl5 = tmp5(tmp3[14]).intl;
            obj11[1] = intl5.string(tmp5(tmp3[14]).t.hgKDnG);
            obj10[1] = callback(tmp5(tmp3[36]).Button, obj11);
            tmp16Result = callback(tmp18, obj10);
          }
          const obj12 = { children: null };
          items10[2] = tmp16Result;
          obj12[0] = items10;
          let tmp16Result1 = callback2(closure_18, obj12);
        }
        const obj13 = { children: null };
        items9[1] = tmp16Result1;
        obj[1] = items9;
        obj13[0] = callback2(tmp18, obj);
        obj[1] = callback(tmp5(tmp3[34]).BottomSheet, obj13);
        return callback(tmp5(tmp3[28]).AnalyticsLocationProvider, obj);
      }
      const obj14 = { style: null, size: "large" };
      obj14[0] = tmp.loadingSpinner;
      tmp16Result1 = callback(stateFromStores, obj14);
      const tmp2Result = tmp2(tmp3[35]);
    }
    if (1 === stateFromStores2.length) {
      const intl2 = tmp5(tmp3[14]).intl;
      formatResult = intl2.format(tmp5(tmp3[14]).t["0eBj3x"], {});
    } else {
      const intl = tmp5(tmp3[14]).intl;
      formatResult = intl.format(tmp5(tmp3[14]).t.D7uftB, {});
    }
  }
  const intl3 = tmp5(tmp3[14]).intl;
  formatResult = intl3.string(tmp5(tmp3[14]).t.jDym4E);
  const tmp5Result = userId(channelId[30]);
};
export { PopoutChecks };