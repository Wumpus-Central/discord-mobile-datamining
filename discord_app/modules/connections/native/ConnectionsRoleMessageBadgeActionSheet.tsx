// discord_app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ConnectionsUtils from "../ConnectionsUtils.tsx";
import Constants2 from "../Constants.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import OfficialConnectionIconDefault from "OfficialConnectionIcon.tsx";
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserRecord from "../../../records/UserRecord.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore_mod from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildRoleConnectionEligibilityStore from "../GuildRoleConnectionEligibilityStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, importDefault, userId;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
let GuildMemberStore = GuildMemberStore_mod;
const OperatorTypes = Constants2.OperatorTypes;
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flexDirection: "column", alignItems: "center", padding: 16 },
  header: obj2,
  verifiedContainer: { marginRight: 8, height: 24, width: 24 },
  headerTextContainer: { flexShrink: 1, flexDirection: "column" },
  verifiedCheck: { position: "absolute", left: 0, top: 0 },
  loadingSpinner: { marginVertical: 40 },
  popoutCheck: { flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 32, paddingRight: 20 },
  popoutCheckIcon: obj3,
  popoutChecksGroup: { width: "100%", marginBottom: 24 },
  popoutChecksGroupBottomMargin: obj4,
  popoutCheckGroupName: { flexDirection: "row", alignItems: "center" },
  popoutCheckGroupPlatformIcon: { marginRight: 8 },
  button: { marginBottom: 8 },
  botTag: { marginLeft: 4 },
};
obj2 = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
createStyles = createStyles.createStyles;
obj3 = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj4 = {
  paddingBottom: 12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: 12,
};
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let connectionMetadataField;
      let connectionType;
      let description;
      let items;
      let operator;
      let tmp5;
      let value;
      const obj = react2;
      const cResult = obj.c(19);
      ({ connectionType, connectionMetadataField, operator, value, description } = arg0);
      const tmp4 = closure_19();
      if (null != description) {
        if (OperatorTypes.LESS_THAN === operator) {
          if (cResult[0] === description) {
            let tmp12;
            if (cResult[1] === value) {
              tmp12 = cResult[2];
            }
            tmp5 = tmp12;
          }
          const intl2 = intl6.intl;
          const format2 = intl2.format;
          const _Math2 = Math;
          const _Number2 = Number;
          const obj2 = { description, count: Math.max(0, Number(value) - 1) };
          const v2p7dA3 = intl6.t["2p7dA3"];
          const format2Result = format2(v2p7dA3, obj2);
          cResult[0] = description;
          cResult[1] = value;
          cResult[2] = format2Result;
          tmp12 = format2Result;
        } else {
          tmp5 = description;
          if (tmp7.GREATER_THAN === operator) {
            if (cResult[3] === description) {
              let tmp8;
              if (cResult[4] === value) {
                tmp8 = cResult[5];
              }
              tmp5 = tmp8;
            }
            const intl = intl6.intl;
            const format = intl.format;
            const _Math = Math;
            const _Number = Number;
            const obj3 = { description, count: Math.max(0, Number(value) + 1) };
            const v2p7dA31 = intl6.t["2p7dA3"];
            const formatResult = format(v2p7dA31, obj3);
            cResult[3] = description;
            cResult[4] = value;
            cResult[5] = formatResult;
            tmp8 = formatResult;
          }
        }
      } else {
        if (cResult[6] === connectionMetadataField) {
          if (cResult[7] === connectionType) {
            if (cResult[8] === operator) {
              if (cResult[9] === value) {
                tmp5 = cResult[10];
              }
            }
          }
        }
        const obj4 = { connectionType, connectionMetadataField, operator, value };
        const tmpResult = ConnectionsUtils;
        const connectionsCheckText = tmpResult.getConnectionsCheckText(obj4);
        cResult[6] = connectionMetadataField;
        cResult[7] = connectionType;
        cResult[8] = operator;
        cResult[9] = value;
        cResult[10] = connectionsCheckText;
        tmp5 = connectionsCheckText;
      }
      let tmp16 = null;
      if (null != tmp5) {
        let tmp17;
        let tmp20;
        if (cResult[11] !== tmp4.popoutCheckIcon) {
          const obj5 = { size: "sm", style: tmp4.popoutCheckIcon };
          const tmp19 = authStore3(CheckmarkLargeIcon.CheckmarkLargeIcon, obj5);
          cResult[11] = tmp4.popoutCheckIcon;
          cResult[12] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== tmp5) {
          const obj6 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: tmp5 };
          const tmp22 = authStore3(Text_Text.Text, obj6);
          cResult[13] = tmp5;
          cResult[14] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[14];
        }
        if (cResult[15] === tmp4.popoutCheck) {
          if (cResult[16] === tmp17) {
            let tmp23;
            if (cResult[17] === tmp20) {
              tmp23 = cResult[18];
            }
            tmp16 = tmp23;
          }
        }
        const obj7 = { style: tmp4.popoutCheck, children: items };
        items = [tmp17, tmp20];
        const tmp26 = closure_17(metroRequire, obj7);
        cResult[15] = tmp4.popoutCheck;
        cResult[16] = tmp17;
        cResult[17] = tmp20;
        cResult[18] = tmp26;
        tmp23 = tmp26;
      }
      return tmp16;
    }
  : (arg0) => {
      let connectionMetadataField;
      let connectionType;
      let description;
      let formatResult;
      let items;
      let operator;
      let value;
      ({ operator, value, description } = arg0);
      ({ connectionType, connectionMetadataField } = arg0);
      const tmp = closure_19();
      if (null != description) {
        if (OperatorTypes.LESS_THAN === operator) {
          const intl = intl6.intl;
          const format = intl.format;
          const _Math = Math;
          const _Number = Number;
          const obj2 = { description, count: Math.max(0, Number(value) - 1) };
          const v2p7dA3 = intl6.t["2p7dA3"];
          formatResult = format(v2p7dA3, obj2);
        } else {
          formatResult = description;
          if (tmp5.GREATER_THAN === operator) {
            const intl2 = intl6.intl;
            const format2 = intl2.format;
            const _Math2 = Math;
            const _Number2 = Number;
            const obj3 = { description, count: Math.max(0, Number(value) + 1) };
            const v2p7dA31 = intl6.t["2p7dA3"];
            formatResult = format2(v2p7dA31, obj3);
          }
        }
      } else {
        const obj4 = { connectionType, connectionMetadataField, operator, value };
        const obj = ConnectionsUtils;
        formatResult = obj.getConnectionsCheckText(obj4);
      }
      let tmp10 = null;
      if (null != formatResult) {
        const obj5 = { style: tmp.popoutCheck, children: items };
        const obj6 = { size: "sm", style: tmp.popoutCheckIcon };
        items = [authStore3(CheckmarkLargeIcon.CheckmarkLargeIcon, obj6)];
        const obj7 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: formatResult };
        items[1] = authStore3(Text_Text.Text, obj7);
        tmp10 = closure_17(metroRequire, obj5);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_1;
      let closure_2;
      let tmp4;
      let obj = guildId(576);
      const cResult = obj.c(2);
      guildId = guildId.guildId;
      const eligibilityStates = guildId.eligibilityStates;
      importDefault = closure_19();
      dependencyMap = useThemeDefault();
      let obj2 = _modDef12;
      const groupByResult = obj2.groupBy(eligibilityStates, (connection_type) => {
        let str = "";
        connection_type = connection_type.connection_type;
        if (null != connection_type.application_id) {
          const _HermesInternal = HermesInternal;
          str = ":" + connection_type.application_id;
        }
        return "" + connection_type + str;
      });
      _slicedToArray = groupByResult;
      const keys = Object.keys(groupByResult);
      let closure_4 = keys.length - 1;
      let obj3 = guildId(4580);
      const roleColor = obj3.useToken(nativeDefault.unsafe_rawColors.GREEN_330);
      const mapped = keys.map(function (item, index) {
        let icon;
        let items1;
        let items2;
        let makeSource;
        let tmp10;
        let tmp9Result2;
        const found = arr.filter((operator) => null != operator.operator);
        const found1 = arr.find((application) => null != application.application);
        const obj = PlatformsDefault;
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
          const self = this;
          const self2 = this;
          tmp7 = new UserRecord(application.bot);
        }
        const officialApplicationIds = ConnectionsUtils.officialApplicationIds;
        let str;
        const includes = officialApplicationIds.includes;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        if (includes(str)) {
          const obj2 = { style: closure_1.botTag, guildId, roleColor, size: 16 };
          tmp10 = authStore3(OfficialConnectionIconDefault, obj2);
        } else if (null != tmp7) {
          const obj3 = { style: closure_1.botTag, verified: false };
          tmp10 = authStore3(BotTagDefault, obj3);
        }
        const items = [closure_1.popoutChecksGroup];
        let prop = null;
        if (index < closure_4) {
          prop = closure_1.popoutChecksGroupBottomMargin;
        }
        const obj4 = { style: items, children: items2 };
        items[1] = prop;
        let tmp22Result = null;
        const obj5 = { style: closure_1.popoutCheckGroupName, children: items1 };
        if (null != value) {
          const obj6 = {
            style: closure_1.popoutCheckGroupPlatformIcon,
            source: makeSource(tmp9Result2.isThemeDark(closure_2) ? icon.darkPNG : icon.lightPNG),
            disableColor: true,
            size: native.Icon.Sizes.MEDIUM,
          };
          const Icon = native.Icon;
          makeSource = AvatarUtils.makeSource;
          AvatarUtils;
          icon = value.icon;
          tmp9Result2 = shared;
          tmp22Result = authStore3(Icon, obj6);
        }
        items1 = [tmp22Result, , ,];
        let tmp25 = null;
        if (null != tmp7) {
          const obj7 = {
            style: closure_1.popoutCheckGroupPlatformIcon,
            user: tmp7,
            size: native.AvatarSizes.XSMALL,
            guildId: "a",
          };
          const Avatar = native.Avatar;
          tmp25 = authStore3(Avatar, obj7);
        }
        items1[1] = tmp25;
        let name;
        const Text = Text_Text.Text;
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
        items1[2] = authStore3(Text, { variant: "text-sm/medium", color: "interactive-text-active", children: name });
        items1[3] = tmp10;
        items2 = [
          closure_17(metroRequire, obj5),
          found.map((description) => {
            let connection_metadata_field;
            let connection_type;
            let operator;
            let value;
            ({ connection_type, connection_metadata_field, operator, value } = description);
            description = description.description;
            closure_1_1(closure_1_2[29])(null != connectionMetadataField, "connectionMetadataField is null");
            closure_1_1(closure_1_2[29])(null != operator, "operator is null");
            closure_1_1(closure_1_2[29])(null != value, "value is null");
            return closure_1_16(
              closure_1_20,
              { connectionType, connectionMetadataField, operator, value, description },
              "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value,
            );
          }),
        ];
        return closure_17(metroRequire, obj4, item);
      });
      if (cResult[0] !== mapped) {
        let obj4 = { children: mapped };
        let tmp7 = closure_16(closure_18, obj4);
        cResult[0] = mapped;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (guildId) => {
      let _undefined;
      let closure_1;
      let closure_2;
      guildId = guildId.guildId;
      const eligibilityStates = guildId.eligibilityStates;
      importDefault = closure_19();
      dependencyMap = useThemeDefault();
      let obj = _modDef12;
      const groupByResult = obj.groupBy(eligibilityStates, (connection_type) => {
        let str = "";
        connection_type = connection_type.connection_type;
        if (null != connection_type.application_id) {
          const _HermesInternal = HermesInternal;
          str = ":" + connection_type.application_id;
        }
        return "" + connection_type + str;
      });
      let c3 = groupByResult;
      const keys = Object.keys(groupByResult);
      let closure_4 = keys.length - 1;
      let obj2 = guildId(4580);
      const roleColor = obj2.useToken(nativeDefault.unsafe_rawColors.GREEN_330);
      let obj3 = {
        children: keys.map(function (item, index) {
          let icon;
          let items1;
          let items2;
          let makeSource;
          let tmp10;
          let tmp9Result2;
          const found = arr.filter((operator) => null != operator.operator);
          const found1 = arr.find((application) => null != application.application);
          const obj = PlatformsDefault;
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
            const self = this;
            const self2 = this;
            tmp7 = new UserRecord(application.bot);
          }
          const officialApplicationIds = ConnectionsUtils.officialApplicationIds;
          let str;
          const includes = officialApplicationIds.includes;
          if (application != null) {
            str = application.id;
          }
          if (str == null) {
            str = "";
          }
          if (includes(str)) {
            const obj2 = { style: closure_1.botTag, guildId, roleColor, size: 16 };
            tmp10 = authStore3(OfficialConnectionIconDefault, obj2);
          } else if (null != tmp7) {
            const obj3 = { style: closure_1.botTag, verified: false };
            tmp10 = authStore3(BotTagDefault, obj3);
          }
          const items = [closure_1.popoutChecksGroup];
          let prop = null;
          if (index < closure_4) {
            prop = closure_1.popoutChecksGroupBottomMargin;
          }
          const obj4 = { style: items, children: items2 };
          items[1] = prop;
          let tmp22Result = null;
          const obj5 = { style: closure_1.popoutCheckGroupName, children: items1 };
          if (null != value) {
            const obj6 = {
              style: closure_1.popoutCheckGroupPlatformIcon,
              source: makeSource(tmp9Result2.isThemeDark(closure_2) ? icon.darkPNG : icon.lightPNG),
              disableColor: true,
              size: native.Icon.Sizes.MEDIUM,
            };
            const Icon = native.Icon;
            makeSource = AvatarUtils.makeSource;
            AvatarUtils;
            icon = value.icon;
            tmp9Result2 = shared;
            tmp22Result = authStore3(Icon, obj6);
          }
          items1 = [tmp22Result, , ,];
          let tmp25 = null;
          if (null != tmp7) {
            const obj7 = {
              style: closure_1.popoutCheckGroupPlatformIcon,
              user: tmp7,
              size: native.AvatarSizes.XSMALL,
              guildId: "a",
            };
            const Avatar = native.Avatar;
            tmp25 = authStore3(Avatar, obj7);
          }
          items1[1] = tmp25;
          let name;
          const Text = Text_Text.Text;
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
          items1[2] = authStore3(Text, { variant: "text-sm/medium", color: "interactive-text-active", children: name });
          items1[3] = tmp10;
          items2 = [
            closure_17(metroRequire, obj5),
            found.map((description) => {
              let connection_metadata_field;
              let connection_type;
              let operator;
              let value;
              ({ connection_type, connection_metadata_field, operator, value } = description);
              description = description.description;
              closure_1_1(closure_1_2[29])(null != connectionMetadataField, "connectionMetadataField is null");
              closure_1_1(closure_1_2[29])(null != operator, "operator is null");
              closure_1_1(closure_1_2[29])(null != value, "value is null");
              return closure_1_16(
                closure_1_20,
                { connectionType, connectionMetadataField, operator, value, description },
                "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value,
              );
            }),
          ];
          return closure_17(metroRequire, obj4, item);
        }),
      };
      return closure_16(closure_18, obj3);
    };
let closure_21 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let channelId;
      let closure_9;
      let first;
      let first1;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp8;
      let tmp = userId;
      let obj = userId(channelId[15]);
      const cResult = obj.c(78);
      userId = userId.userId;
      const roleId = userId.roleId;
      channelId = userId.channelId;
      const guildId = userId.guildId;
      closure_19();
      const tmp5 = roleId(channelId[30]);
      const analyticsLocations = tmp5(roleId(channelId[31]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function v() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(channelId[32]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [first1];
        class O {
          constructor() {
            return first1.getId();
          }
        }
        cResult[3] = items1;
        cResult[4] = O;
        tmp11 = O;
        tmp10 = items1;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
      }
      const tmpResult4 = tmp(channelId[32]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberStore];
        class O {
          constructor() {
            return first1.getId();
          }
        }
        cResult[5] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === stateFromStores1) {
        let tmp16;
        let tmp18;
        let tmp20;
        if (cResult[7] === guildId) {
          tmp16 = cResult[8];
        }
        const tmpResult5 = tmp(channelId[32]);
        const stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp16);
        class O {
          constructor() {
            return first1.getId();
          }
        }
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [GuildRoleConnectionEligibilityStore];
          class O {
            constructor() {
              return first1.getId();
            }
          }
          cResult[9] = items3;
          tmp18 = items3;
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
              return first1.getId();
            }
          }
          cResult[11] = fn2;
          tmp20 = fn2;
        } else {
          tmp20 = cResult[11];
        }
        const tmpResult6 = tmp(channelId[32]);
        const stateFromStores3 = tmpResult6.useStateFromStores(tmp18, tmp20);
        const tmp24 = guildId(analyticsLocations.useState(null == stateFromStores3), 2);
        first1 = tmp24[0];
        GuildMemberStore = tmp24[1];
        let roles1;
        const obj6 = analyticsLocations;
        const tmp26 = cResult[12];
        if (stateFromStores2 != null) {
          roles1 = stateFromStores2.roles;
        }
        if (tmp26 === roles1) {
          if (cResult[15] === channelId) {
            if (cResult[16] === guildId) {
              if (cResult[17] === roleId) {
                let tmp31;
                let tmp32;
                if (cResult[18] === userId) {
                  tmp31 = cResult[19];
                  tmp32 = cResult[20];
                }
                const effect = obj6.useEffect(tmp31, tmp32);
                class X {
                  constructor() {
                    const track = AnalyticsUtilsDefault.track;
                    const PASSPORT_ROLE_POPOUT_VIEWED = constants.PASSPORT_ROLE_POPOUT_VIEWED;
                    const obj = { other_user_id: userId, role_id: roleId };
                    AnalyticsUtilsDefault;
                    const obj2 = AppAnalyticsUtils;
                    const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(channelId));
                    const obj3 = AppAnalyticsUtils;
                    const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
                    track(PASSPORT_ROLE_POPOUT_VIEWED, obj);
                  }
                }
                class O {
                  constructor() {
                    return first1.getId();
                  }
                }
                const items4 = [guildId, roleId, first1, stateFromStores3];
                cResult[21] = stateFromStores3;
                cResult[22] = guildId;
                cResult[23] = first1;
                cResult[24] = roleId;
                cResult[25] = tmp37;
                cResult[26] = items4;
              }
            }
          }
          class X {
            constructor() {
              const track = AnalyticsUtilsDefault.track;
              const PASSPORT_ROLE_POPOUT_VIEWED = constants.PASSPORT_ROLE_POPOUT_VIEWED;
              const obj = { other_user_id: userId, role_id: roleId };
              AnalyticsUtilsDefault;
              const obj2 = AppAnalyticsUtils;
              const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(channelId));
              const obj3 = AppAnalyticsUtils;
              const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
              track(PASSPORT_ROLE_POPOUT_VIEWED, obj);
            }
          }
          class O {
            constructor() {
              return first1.getId();
            }
          }
          tmp33[0] = userId;
          tmp33[1] = roleId;
          tmp33[2] = channelId;
          tmp33[3] = guildId;
          cResult[15] = channelId;
          cResult[16] = guildId;
          cResult[17] = roleId;
          cResult[18] = userId;
          cResult[19] = X;
          cResult[20] = tmp33;
          tmp32 = tmp33;
          tmp31 = X;
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
      }
      class L {
        constructor() {
          return GuildMemberStore.getMember(guildId, stateFromStores1);
        }
      }
      cResult[6] = stateFromStores1;
      cResult[7] = guildId;
      cResult[8] = L;
      tmp16 = L;
    }
  : (userId) => {
      let Button;
      let Button2;
      let formatResult;
      let hasItem;
      let id;
      let intl4;
      let intl5;
      let items7;
      let items8;
      let obj10;
      let obj16;
      let obj18;
      let someResult;
      let tmp2Result;
      userId = userId.userId;
      const roleId = userId.roleId;
      const channelId = userId.channelId;
      const guildId = userId.guildId;
      let first;
      let closure_9;
      let tmp = closure_19();
      const tmp4 = roleId(channelId[30]);
      const analyticsLocations = tmp4(roleId(channelId[31]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
      let obj = userId(channelId[32]);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj2 = userId(channelId[32]);
      const items1 = [first];
      let closure_6 = obj2.useStateFromStores(items1, () => first.getId());
      let obj3 = userId(channelId[32]);
      const items2 = [closure_9];
      const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildMemberStore.getMember(guildId, closure_6));
      const items3 = [GuildRoleConnectionEligibilityStore];
      const obj4 = userId(channelId[32]);
      const stateFromStores2 = obj4.useStateFromStores(items3, () =>
        GuildRoleConnectionEligibilityStore.getGuildRoleConnectionEligibility(roleId),
      );
      const tmp8 = guildId(analyticsLocations.useState(null == stateFromStores2), 2);
      first = tmp8[0];
      closure_9 = tmp8[1];
      const tmp2 = roleId;
      if (stateFromStores1 != null) {
        const roles = stateFromStores1.roles;
        hasItem = roles.includes(roleId);
      }
      const items4 = [userId, roleId, channelId, guildId];
      const effect = obj5.useEffect(() => {
        const track = AnalyticsUtilsDefault.track;
        const PASSPORT_ROLE_POPOUT_VIEWED = constants.PASSPORT_ROLE_POPOUT_VIEWED;
        const obj = { other_user_id: userId, role_id: roleId };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(channelId));
        const obj3 = AppAnalyticsUtils;
        const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
        track(PASSPORT_ROLE_POPOUT_VIEWED, obj);
      }, items4);
      const items5 = [guildId, roleId, first, stateFromStores2];
      const effect1 = obj5.useEffect(() => {
        const tmp = first && null == stateFromStores2;
        if (tmp) {
          const obj = GuildActionCreatorsDefault;
          const guildRoleConnectionsEligibility = obj.fetchGuildRoleConnectionsEligibility(guildId, roleId);
          guildRoleConnectionsEligibility.then(() => closure_1_9(false));
        }
      }, items5);
      if (stateFromStores2 != null) {
        const flatResult = stateFromStores2.flat();
        someResult = flatResult.some((application_id) => undefined === application_id.application_id);
      }
      const items6 = [GuildRoleStore];
      const tmp5Result = userId(channelId[32]);
      const stateFromStores3 = tmp5Result.useStateFromStores(items6, () => {
        let role;
        if (null != stateFromStores) {
          role = GuildRoleStore.getRole(tmp.id, roleId);
        }
        return role;
      });
      if (null != stateFromStores2) {
        if (1 === stateFromStores2.length) {
          const obj6 = { value: analyticsLocations, children: null };
          const AnalyticsLocationProvider = tmp5(tmp3[30]).AnalyticsLocationProvider;
          const obj7 = { style: tmp.container, children: null };
          const obj8 = { style: tmp.header, children: items7 };
          const obj9 = { style: tmp.verifiedContainer, children: closure_16(tmp2Result, obj10) };
          BottomSheet = tmp5(tmp3[41]).BottomSheet;
          obj10 = { style: tmp.verifiedCheck, guildId: id, role: stateFromStores3, size: 24 };
          id = undefined;
          tmp2Result = tmp2(channelId[39]);
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          if (id == null) {
            id = closure_15;
          }
          items7 = [closure_16(closure_6, obj9)];
          let name;
          const obj11 = { style: tmp.headerTextContainer, children: items8 };
          const Text = tmp5(tmp3[19]).Text;
          if (stateFromStores3 != null) {
            name = stateFromStores3.name;
          }
          const obj12 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: name };
          items8 = [closure_16(Text, obj12)];
          const obj13 = { variant: "text-xs/normal", color: "text-default", children: formatResult };
          items8[1] = closure_16(userId(channelId[19]).Text, obj13);
          items7[1] = closure_17(closure_6, obj11);
          const items9 = [closure_17(closure_6, obj8)];
          if (null != stateFromStores2) {
            let tmp16Result3;
            if (null != stateFromStores2.flat()) {
              const obj14 = { eligibilityStates: stateFromStores2.flat(), guildId };
              const items10 = [closure_16(closure_21, obj14), ,];
              let tmp16Result = null;
              if (!hasItem) {
                const obj15 = { style: tmp.button, children: closure_16(Button, obj16) };
                obj16 = {
                  onPress() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet("ConnectionsRoleMessageBadgeActionSheet");
                    const obj2 = GuildRoleConnectionsModalActionCreators;
                    const obj3 = { guildId };
                    const result = obj2.openGuildRoleConnectionsModal(obj3);
                  },
                  text: intl4.string(userId(channelId[16]).t.T1t1WV),
                  variant: "primary",
                  grow: true,
                };
                Button = tmp5(tmp3[40]).Button;
                intl4 = tmp5(tmp3[16]).intl;
                tmp16Result = closure_16(tmp18, obj15);
              }
              items10[1] = tmp16Result;
              let tmp16Result2 = null;
              if (someResult) {
                const obj17 = { style: tmp.button, children: closure_16(Button2, obj18) };
                obj18 = {
                  onPress() {
                    const obj = { userId, channelId, roleId, sourceAnalyticsLocations: analyticsLocations };
                    showUserProfileActionSheetDefault(obj);
                  },
                  text: intl5.string(userId(channelId[16]).t.hgKDnG),
                  variant: "secondary",
                  grow: true,
                };
                Button2 = tmp5(tmp3[40]).Button;
                intl5 = tmp5(tmp3[16]).intl;
                tmp16Result2 = closure_16(tmp18, obj17);
              }
              const obj19 = { children: items10 };
              items10[2] = tmp16Result2;
              tmp16Result3 = closure_17(closure_18, obj19);
            }
            items9[1] = tmp16Result3;
            obj7.children = items9;
            const obj20 = { children: closure_17(closure_6, obj7) };
            obj6.children = closure_16(BottomSheet, obj20);
            return closure_16(AnalyticsLocationProvider, obj6);
          }
          const obj21 = { style: tmp.loadingSpinner, size: "large" };
          tmp16Result3 = closure_16(stateFromStores, obj21);
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
    };
let result = size.fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default tmp7;
export const PopoutChecks = tmp6;
