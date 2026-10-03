// === Module 11429: ConnectionsRoleMessageBadgeActionSheet ===

// Module 11429 (ConnectionsRoleMessageBadgeActionSheet)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4577 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import PlatformsDefault from "Platforms" /* 5442 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6678 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import BotTagDefault from "BotTag" /* 8961 */;
import OfficialConnectionIconDefault from "OfficialConnectionIcon" /* 11183 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11186 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1391 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildRoleConnectionEligibilityStore from "GuildRoleConnectionEligibilityStore" /* 11430 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const OperatorTypes = fn(6679).OperatorTypes;
const Constants = fn(1085);
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flexDirection: "column", alignItems: "center", padding: 16 }, header: { width: "100%", flexDirection: "row", alignItems: "center", paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 }, verifiedContainer: { marginRight: 8, height: 24, width: 24 }, headerTextContainer: { flexShrink: 1, flexDirection: "column" }, verifiedCheck: { position: "absolute", left: 0, top: 0 }, loadingSpinner: { marginVertical: 40 }, popoutCheck: { flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 32, paddingRight: 20 }, popoutCheckIcon: null, popoutChecksGroup: null, popoutChecksGroupBottomMargin: null, popoutCheckGroupName: null, popoutCheckGroupPlatformIcon: null, button: null, botTag: null };
let obj3 = { width: "100%", flexDirection: "row", alignItems: "center", paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj2.popoutCheckIcon = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.popoutChecksGroup = { width: "100%", marginBottom: 24 };
let obj4 = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.popoutChecksGroupBottomMargin = { paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 12 };
obj2.popoutCheckGroupName = { flexDirection: "row", alignItems: "center" };
obj2.popoutCheckGroupPlatformIcon = { marginRight: 8 };
obj2.button = { marginBottom: 8 };
obj2.botTag = { marginLeft: 4 };
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ connectionType, connectionMetadataField, operator, value, description } = arg0);
  let popoutCheck = closure_19();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      if (cResult[0] === description) {
      }
      const intl2 = util.intl;
      const obj2 = { description, count: null };
      const _Math2 = Math;
      const _Number2 = Number;
      obj2.count = Math.max(0, Number(value) - 1);
      const formatResult = intl2.format(util.t["2p7dA3"], obj2);
      cResult[0] = description;
      cResult[1] = value;
      cResult[2] = formatResult;
    } else {
      let tmp4 = description;
      if (tmp6.GREATER_THAN === operator) {
        if (cResult[3] === description) {
          if (cResult[4] === value) {
            let tmp7 = cResult[5];
          }
          tmp4 = tmp7;
        }
        const intl = util.intl;
        const obj3 = { description, count: null };
        const _Math = Math;
        const _Number = Number;
        obj3.count = Math.max(0, Number(value) + 1);
        const formatResult1 = intl.format(util.t["2p7dA3"], obj3);
        cResult[3] = description;
        cResult[4] = value;
        cResult[5] = formatResult1;
        tmp7 = formatResult1;
      }
    }
  } else {
    if (cResult[6] === connectionMetadataField) {
      if (cResult[7] === connectionType) {
        if (cResult[8] === operator) {
          if (cResult[9] === value) {
            tmp4 = cResult[10];
          }
        }
      }
    }
    const obj4 = { connectionType, connectionMetadataField, operator, value };
    const connectionsCheckText = ConnectionsUtils.getConnectionsCheckText(obj4);
    cResult[6] = connectionMetadataField;
    cResult[7] = connectionType;
    cResult[8] = operator;
    cResult[9] = value;
    cResult[10] = connectionsCheckText;
    tmp4 = connectionsCheckText;
    const tmpResult = ConnectionsUtils;
  }
  if (null == tmp4) {
    return null;
  } else {
    if (cResult[11] !== popoutCheck.popoutCheckIcon) {
      const obj5 = { size: "sm", style: popoutCheck.popoutCheckIcon };
      const tmp16 = value2(CheckmarkLargeIcon.CheckmarkLargeIcon, obj5);
      cResult[11] = popoutCheck.popoutCheckIcon;
      cResult[12] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[12];
    }
    if (cResult[13] !== tmp4) {
      const obj6 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: tmp4 };
      const tmp19 = value2(Text_Text.Text, obj6);
      cResult[13] = tmp4;
      cResult[14] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[14];
    }
    if (cResult[15] === popoutCheck.popoutCheck) {
      if (cResult[16] === tmp14) {
      }
    }
    const obj7 = { style: popoutCheck.popoutCheck, children: null };
    const items = [tmp14, tmp17];
    obj7.children = items;
    const tmp23 = constants(timestampProducer, obj7);
    popoutCheck = popoutCheck.popoutCheck;
    cResult[15] = popoutCheck;
    cResult[16] = tmp14;
    cResult[17] = tmp17;
    cResult[18] = tmp23;
  }
}) : ((arg0) => {
  ({ operator, value, description } = arg0);
  ({ connectionType, connectionMetadataField } = arg0);
  const tmp = closure_19();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      const intl = util.intl;
      const obj2 = { description, count: null };
      const _Math = Math;
      const _Number = Number;
      obj2.count = Math.max(0, Number(value) - 1);
      let formatResult = intl.format(util.t["2p7dA3"], obj2);
    } else {
      formatResult = description;
      if (tmp5.GREATER_THAN === operator) {
        const intl2 = util.intl;
        const obj3 = { description, count: null };
        const _Math2 = Math;
        const _Number2 = Number;
        obj3.count = Math.max(0, Number(value) + 1);
        formatResult = intl2.format(util.t["2p7dA3"], obj3);
      }
    }
  } else {
    const obj4 = { connectionType, connectionMetadataField, operator, value };
    formatResult = ConnectionsUtils.getConnectionsCheckText(obj4);
  }
  let tmp9 = null;
  if (null != formatResult) {
    const obj5 = { style: tmp.popoutCheck, children: null };
    const obj6 = { size: "sm", style: tmp.popoutCheckIcon };
    const items = [value2(CheckmarkLargeIcon.CheckmarkLargeIcon, obj6), ];
    const obj7 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: formatResult };
    items[1] = value2(Text_Text.Text, obj7);
    obj5.children = items;
    tmp9 = constants(timestampProducer, obj5);
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(2);
  guildId = guildId.guildId;
  importDefault = closure_19();
  dependencyMap = useThemeDefault();
  let obj = guildId(576);
  const groupByResult = _modDef12.groupBy(guildId.eligibilityStates, (application_id) => {
    let str = "";
    if (null != application_id.application_id) {
      const _HermesInternal = HermesInternal;
      str = ":" + application_id.application_id;
    }
    return "" + application_id.connection_type + str;
  });
  _slicedToArray = groupByResult;
  const keys = Object.keys(groupByResult);
  closure_4 = keys.length - 1;
  const roleColor = guildId(4580).useToken(nativeDefault.unsafe_rawColors.GREEN_330);
  const mapped = keys.map((item, index) => {
    const found = arr.filter((operator) => null != operator.operator);
    const found1 = arr.find((application) => null != application.application);
    value = PlatformsDefault.get(item);
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
      tmp7 = new UserRecord(application.bot);
    }
    const officialApplicationIds = ConnectionsUtils.officialApplicationIds;
    let str;
    if (application != null) {
      str = application.id;
    }
    if (str == null) {
      str = "";
    }
    if (officialApplicationIds.includes(str)) {
      const obj2 = { style: closure_1.botTag, guildId, roleColor, size: 16 };
      let tmp12 = value2(OfficialConnectionIconDefault, obj2);
    } else if (null != tmp7) {
      const obj3 = { style: closure_1.botTag, verified: false };
      tmp12 = value2(BotTagDefault, obj3);
    }
    const items = [closure_1.popoutChecksGroup, ];
    let prop = null;
    if (index < closure_4) {
      prop = closure_1.popoutChecksGroupBottomMargin;
    }
    const obj4 = { style: items, children: null };
    items[1] = prop;
    const obj5 = { style: closure_1.popoutCheckGroupName, children: null };
    if (null == value) {
      const items1 = [null, , , ];
      let tmp26 = null;
      if (null != tmp7) {
        const obj6 = { style: closure_1.popoutCheckGroupPlatformIcon, user: tmp7, size: native.AvatarSizes.XSMALL, guildId: "a" };
        tmp26 = value2(native.Avatar, obj6);
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
      const obj7 = { variant: "text-sm/medium", color: "interactive-text-active", children: name };
      items1[2] = value2(Text_Text.Text, obj7);
      items1[3] = tmp12;
      obj5.children = items1;
      const items2 = [
        constants(timestampProducer, obj5),
        found.map((description) => {
            ({ connection_type, connection_metadata_field, operator, value } = description);
            closure_1_1(38)(null != connectionMetadataField, "connectionMetadataField is null");
            closure_1_1(38)(null != operator, "operator is null");
            closure_1_1(38)(null != value, "value is null");
            return closure_1_16(closure_1_20, { connectionType, connectionMetadataField, operator, value, description: description.description }, "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value);
          })
      ];
      obj4.children = items2;
      return constants(timestampProducer, obj4, item);
    } else {
      const obj8 = { style: closure_1.popoutCheckGroupPlatformIcon, source: null, disableColor: true, size: null };
      const tmp11Result = AvatarUtils;
      const icon = value.icon;
      obj8.source = tmp11Result.makeSource(shared.isThemeDark(dependencyMap) ? icon.darkPNG : icon.lightPNG);
      obj8.size = native.Icon.Sizes.MEDIUM;
      value2(native.Icon, obj8);
      const tmp11Result2 = shared;
    }
  });
  if (cResult[0] !== mapped) {
    let obj4 = { children: mapped };
    let tmp7 = closure_16(closure_18, obj4);
    cResult[0] = mapped;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((guildId) => {
  guildId = guildId.guildId;
  importDefault = closure_19();
  dependencyMap = useThemeDefault();
  const groupByResult = _modDef12.groupBy(guildId.eligibilityStates, (application_id) => {
    let str = "";
    if (null != application_id.application_id) {
      const _HermesInternal = HermesInternal;
      str = ":" + application_id.application_id;
    }
    return "" + application_id.connection_type + str;
  });
  c3 = groupByResult;
  const keys = Object.keys(groupByResult);
  closure_4 = keys.length - 1;
  const roleColor = guildId(4580).useToken(nativeDefault.unsafe_rawColors.GREEN_330);
  let obj2 = guildId(4580);
  return closure_16(closure_18, {
    children: keys.map((item, index) => {
      const found = arr.filter((operator) => null != operator.operator);
      const found1 = arr.find((application) => null != application.application);
      value = PlatformsDefault.get(item);
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
        tmp7 = new UserRecord(application.bot);
      }
      const officialApplicationIds = ConnectionsUtils.officialApplicationIds;
      let str;
      if (application != null) {
        str = application.id;
      }
      if (str == null) {
        str = "";
      }
      if (officialApplicationIds.includes(str)) {
        const obj2 = { style: closure_1.botTag, guildId, roleColor, size: 16 };
        let tmp12 = value2(OfficialConnectionIconDefault, obj2);
      } else if (null != tmp7) {
        const obj3 = { style: closure_1.botTag, verified: false };
        tmp12 = value2(BotTagDefault, obj3);
      }
      const items = [closure_1.popoutChecksGroup, ];
      let prop = null;
      if (index < closure_4) {
        prop = closure_1.popoutChecksGroupBottomMargin;
      }
      const obj4 = { style: items, children: null };
      items[1] = prop;
      const obj5 = { style: closure_1.popoutCheckGroupName, children: null };
      if (null == value) {
        const items1 = [null, , , ];
        let tmp26 = null;
        if (null != tmp7) {
          const obj6 = { style: closure_1.popoutCheckGroupPlatformIcon, user: tmp7, size: native.AvatarSizes.XSMALL, guildId: "a" };
          tmp26 = value2(native.Avatar, obj6);
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
        const obj7 = { variant: "text-sm/medium", color: "interactive-text-active", children: name };
        items1[2] = value2(Text_Text.Text, obj7);
        items1[3] = tmp12;
        obj5.children = items1;
        const items2 = [
          constants(timestampProducer, obj5),
          found.map((description) => {
              ({ connection_type, connection_metadata_field, operator, value } = description);
              closure_1_1(38)(null != connectionMetadataField, "connectionMetadataField is null");
              closure_1_1(38)(null != operator, "operator is null");
              closure_1_1(38)(null != value, "value is null");
              return closure_1_16(closure_1_20, { connectionType, connectionMetadataField, operator, value, description: description.description }, "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value);
            })
        ];
        obj4.children = items2;
        return constants(timestampProducer, obj4, item);
      } else {
        const obj8 = { style: closure_1.popoutCheckGroupPlatformIcon, source: null, disableColor: true, size: null };
        const tmp11Result = AvatarUtils;
        const icon = value.icon;
        obj8.source = tmp11Result.makeSource(shared.isThemeDark(dependencyMap) ? icon.darkPNG : icon.lightPNG);
        obj8.size = native.Icon.Sizes.MEDIUM;
        value2(native.Icon, obj8);
        const tmp11Result2 = shared;
      }
    })
  });
});
let closure_21 = tmp5;
ReactCompilerGating = fn(558);
let obj5 = { paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(channelId[15]).c(78);
  userId = userId.userId;
  const roleId = userId.roleId;
  channelId = userId.channelId;
  const guildId = userId.guildId;
  closure_19();
  let obj = userId(channelId[15]);
  const analyticsLocations = roleId(channelId[30])(roleId(channelId[31]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function v() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmp5 = roleId(channelId[30]);
  const stateFromStores = userId(channelId[32]).useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [first1];
    class O {
      constructor() {
        return closure_8.getId();
      }
    }
    cResult[3] = items1;
    cResult[4] = O;
    let tmp11 = O;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult = userId(channelId[32]);
  const stateFromStores1 = userId(channelId[32]).useStateFromStores(tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildMemberStore];
    class O {
      constructor() {
        return closure_8.getId();
      }
    }
    cResult[5] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === guildId) {
      let tmp16 = cResult[8];
    }
    const stateFromStores2 = tmp(tmp2[32]).useStateFromStores(tmp14, tmp16);
    class O {
      constructor() {
        return closure_8.getId();
      }
    }
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [GuildRoleConnectionEligibilityStore];
      class O {
        constructor() {
          return closure_8.getId();
        }
      }
      cResult[9] = items3;
      let tmp18 = items3;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== roleId) {
      const fn2 = function z() {
        return GuildRoleConnectionEligibilityStore.getGuildRoleConnectionEligibility(roleId);
      };
      cResult[10] = roleId;
      class O {
        constructor() {
          return closure_8.getId();
        }
      }
      cResult[11] = fn2;
      let tmp20 = fn2;
    } else {
      tmp20 = cResult[11];
    }
    const tmpResult5 = tmp(tmp2[32]);
    const stateFromStores3 = tmp(tmp2[32]).useStateFromStores(tmp18, tmp20);
    const tmp24 = guildId(analyticsLocations.useState(null == stateFromStores3), 2);
    first1 = tmp24[0];
    GuildMemberStore = tmp24[1];
    let roles1;
    if (stateFromStores2 != null) {
      roles1 = stateFromStores2.roles;
    }
    if (cResult[12] === roles1) {
      if (cResult[15] === channelId) {
        if (cResult[16] === guildId) {
          if (cResult[17] === roleId) {
            if (cResult[18] === userId) {
              let tmp30 = cResult[19];
              let tmp31 = cResult[20];
            }
            const effect = obj6.useEffect(tmp30, tmp31);
            class X {
              constructor() {
                obj = closure_1(closure_2[33]);
                obj1 = { other_user_id: userId, role_id: roleId };
                obj3 = closure_0(closure_2[34]);
                merged = Object.assign(obj3.collectChannelAnalyticsMetadataFromId(channelId));
                obj4 = closure_0(closure_2[34]);
                merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                trackResult = obj.track(AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, obj1);
                return;
              }
            }
            class O {
              constructor() {
                return closure_8.getId();
              }
            }
            const items4 = [guildId, roleId, first1, stateFromStores3];
            cResult[21] = stateFromStores3;
            cResult[22] = guildId;
            cResult[23] = first1;
            cResult[24] = roleId;
            cResult[25] = tmp36;
            cResult[26] = items4;
          }
        }
      }
      class X {
        constructor() {
          obj = closure_1(closure_2[33]);
          obj1 = { other_user_id: userId, role_id: roleId };
          obj3 = closure_0(closure_2[34]);
          merged = Object.assign(obj3.collectChannelAnalyticsMetadataFromId(channelId));
          obj4 = closure_0(closure_2[34]);
          merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
          trackResult = obj.track(AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, obj1);
          return;
        }
      }
      class O {
        constructor() {
          return closure_8.getId();
        }
      }
      tmp32[0] = userId;
      tmp32[1] = roleId;
      tmp32[2] = channelId;
      tmp32[3] = guildId;
      cResult[15] = channelId;
      cResult[16] = guildId;
      cResult[17] = roleId;
      cResult[18] = userId;
      cResult[19] = X;
      cResult[20] = tmp32;
      tmp31 = tmp32;
      tmp30 = X;
    }
    let hasItem;
    if (stateFromStores2 != null) {
      const roles = stateFromStores2.roles;
      hasItem = roles.includes(roleId);
    }
    let roles2;
    if (stateFromStores2 != null) {
      roles2 = stateFromStores2.roles;
    }
    cResult[12] = roles2;
    cResult[13] = roleId;
    cResult[14] = hasItem;
    obj6 = analyticsLocations;
    const tmpResult6 = tmp(tmp2[32]);
  }
  class L {
    constructor() {
      return closure_9.getMember(guildId, closure_6);
    }
  }
  cResult[6] = stateFromStores1;
  cResult[7] = guildId;
  cResult[8] = L;
  tmp16 = L;
  const tmpResult4 = userId(channelId[32]);
}) : ((userId) => {
  userId = userId.userId;
  const roleId = userId.roleId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let first;
  closure_9 = undefined;
  let tmp = closure_19();
  const analyticsLocations = roleId(channelId[30])(roleId(channelId[31]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  const tmp2 = roleId;
  const tmp4 = roleId(channelId[30]);
  const items = [GuildStore];
  const stateFromStores = userId(channelId[32]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = userId(channelId[32]);
  const items1 = [first];
  closure_6 = userId(channelId[32]).useStateFromStores(items1, () => first.getId());
  let obj2 = userId(channelId[32]);
  const items2 = [closure_9];
  const stateFromStores1 = userId(channelId[32]).useStateFromStores(items2, () => GuildMemberStore.getMember(guildId, closure_6));
  let obj3 = userId(channelId[32]);
  const items3 = [GuildRoleConnectionEligibilityStore];
  const stateFromStores2 = userId(channelId[32]).useStateFromStores(items3, () => GuildRoleConnectionEligibilityStore.getGuildRoleConnectionEligibility(roleId));
  const tmp8 = guildId(analyticsLocations.useState(null == stateFromStores2), 2);
  first = tmp8[0];
  closure_9 = tmp8[1];
  if (stateFromStores1 != null) {
    const roles = stateFromStores1.roles;
    const hasItem = roles.includes(roleId);
  }
  const items4 = [userId, roleId, channelId, guildId];
  const effect = obj5.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { other_user_id: userId, role_id: roleId };
    const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
    const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.PASSPORT_ROLE_POPOUT_VIEWED, obj2);
  }, items4);
  const items5 = [guildId, roleId, first, stateFromStores2];
  const effect1 = obj5.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null == stateFromStores2;
    }
    if (tmp) {
      const guildRoleConnectionsEligibility = GuildActionCreatorsDefault.fetchGuildRoleConnectionsEligibility(guildId, roleId);
      guildRoleConnectionsEligibility.then(() => closure_1_9(false));
    }
  }, items5);
  if (stateFromStores2 != null) {
    const flatResult = stateFromStores2.flat();
    const someResult = stateFromStores2.flat().some((application_id) => undefined === application_id.application_id);
  }
  const obj4 = userId(channelId[32]);
  const items6 = [GuildRoleStore];
  const stateFromStores3 = userId(channelId[32]).useStateFromStores(items6, () => {
    let role;
    if (null != stateFromStores) {
      role = GuildRoleStore.getRole(tmp.id, roleId);
    }
    return role;
  });
  if (null != stateFromStores2) {
    if (1 === stateFromStores2.length) {
      const obj6 = { value: analyticsLocations, children: null };
      const obj7 = { style: tmp.container, children: null };
      const obj8 = { style: tmp.header, children: null };
      const obj9 = { style: tmp.verifiedContainer, children: null };
      const obj10 = { style: tmp.verifiedCheck, guildId: null, role: null, size: 24 };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (id == null) {
        id = closure_15;
      }
      obj10.guildId = id;
      obj10.role = stateFromStores3;
      obj9.children = closure_16(tmp2(tmp3[39]), obj10);
      const items7 = [closure_16(closure_6, obj9), ];
      const obj11 = { style: tmp.headerTextContainer, children: null };
      let name;
      if (stateFromStores3 != null) {
        name = stateFromStores3.name;
      }
      const obj12 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: name };
      const items8 = [closure_16(tmp5(tmp3[19]).Text, obj12), ];
      const obj13 = { variant: "text-xs/normal", color: "text-default", children: formatResult };
      items8[1] = closure_16(tmp5(tmp3[19]).Text, obj13);
      obj11.children = items8;
      items7[1] = closure_17(closure_6, obj11);
      obj8.children = items7;
      const items9 = [closure_17(closure_6, obj8), ];
      if (null != stateFromStores2) {
        if (null != stateFromStores2.flat()) {
          const obj14 = { eligibilityStates: stateFromStores2.flat(), guildId };
          const items10 = [closure_16(closure_21, obj14), , ];
          let tmp16Result = null;
          if (!hasItem) {
            const obj15 = { style: tmp.button, children: null };
            const obj16 = {
              onPress() {
                          ActionSheetActionCreatorsDefault.hideActionSheet("ConnectionsRoleMessageBadgeActionSheet");
                          const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsModal({ guildId });
                        },
              text: null,
              variant: "primary",
              grow: true
            };
            const intl4 = tmp5(tmp3[16]).intl;
            obj16.text = intl4.string(tmp5(tmp3[16]).t.T1t1WV);
            obj15.children = closure_16(tmp5(tmp3[40]).Button, obj16);
            tmp16Result = closure_16(tmp18, obj15);
          }
          items10[1] = tmp16Result;
          let tmp16Result2 = null;
          if (someResult) {
            const obj17 = { style: tmp.button, children: null };
            const obj18 = {
              onPress() {
                          showUserProfileActionSheetDefault({ userId, channelId, roleId, sourceAnalyticsLocations: analyticsLocations });
                        },
              text: null,
              variant: "secondary",
              grow: true
            };
            const intl5 = tmp5(tmp3[16]).intl;
            obj18.text = intl5.string(tmp5(tmp3[16]).t.hgKDnG);
            obj17.children = closure_16(tmp5(tmp3[40]).Button, obj18);
            tmp16Result2 = closure_16(tmp18, obj17);
          }
          const obj19 = { children: null };
          items10[2] = tmp16Result2;
          obj19.children = items10;
          let tmp16Result3 = closure_17(closure_18, obj19);
        }
        const obj20 = { children: null };
        items9[1] = tmp16Result3;
        obj7.children = items9;
        obj20.children = closure_17(tmp18, obj7);
        obj6.children = closure_16(tmp5(tmp3[41]).BottomSheet, obj20);
        return closure_16(tmp5(tmp3[30]).AnalyticsLocationProvider, obj6);
      }
      const obj21 = { style: tmp.loadingSpinner, size: "large" };
      tmp16Result3 = closure_16(stateFromStores, obj21);
      const tmp2Result = tmp2(tmp3[39]);
    }
    if (1 === stateFromStores2.length) {
      const intl2 = tmp5(tmp3[16]).intl;
      formatResult = intl2.format(tmp5(tmp3[16]).t["0eBj3x"], {});
    } else {
      const intl = tmp5(tmp3[16]).intl;
      formatResult = intl.format(tmp5(tmp3[16]).t.D7uftB, {});
    }
  }
  const intl3 = tmp5(tmp3[16]).intl;
  formatResult = intl3.string(tmp5(tmp3[16]).t.jDym4E);
  const tmp5Result = userId(channelId[32]);
});
export const PopoutChecks = tmp5;