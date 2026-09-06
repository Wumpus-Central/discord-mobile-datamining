// discord_app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ConnectionsUtils from "../ConnectionsUtils.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildRoleConnectionEligibilityStore from "../GuildRoleConnectionEligibilityStore.tsx";

require = fn;
function PopoutCheck(arg0) {
  ({ operator, value, description } = arg0);
  ({ connectionType, connectionMetadataField } = arg0);
  const tmp = closure_19();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      const intl = util.intl;
      let obj = { description, count: null };
      const _Math = Math;
      const _Number = Number;
      obj.count = Math.max(0, Number(value) - 1);
      let formatResult = intl.format(util.t["2p7dA3"], obj);
    } else {
      formatResult = description;
      if (tmp5.GREATER_THAN === operator) {
        const intl2 = util.intl;
        obj = { description, count: null };
        const _Math2 = Math;
        const _Number2 = Number;
        obj.count = Math.max(0, Number(value) + 1);
        formatResult = intl2.format(util.t["2p7dA3"], obj);
      }
    }
  } else {
    obj = ConnectionsUtils;
    const obj1 = { connectionType, connectionMetadataField, operator, value };
    formatResult = obj.getConnectionsCheckText(obj1);
  }
  let tmp9 = null;
  if (null != formatResult) {
    const obj2 = { style: tmp.popoutCheck, children: null };
    const obj3 = { size: "sm", style: tmp.popoutCheckIcon };
    const items = [value2(CheckmarkLargeIcon.CheckmarkLargeIcon, obj3)];
    const obj4 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: formatResult };
    items[1] = value2(Text_Text.Text, obj4);
    obj2.children = items;
    tmp9 = closure_1_17(timestampProducer, obj2);
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
    closure_2 = closure_1(closure_2[18])();
    obj = closure_1(closure_2[19]);
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
    obj2 = guildId(closure_2[20]);
    closure_5 = obj2.useToken(closure_1(closure_2[13]).unsafe_rawColors.GREEN_330);
    obj = {
      children: keys.map((item, index) => {
        const found = arr.filter((operator) => null != operator.operator);
        const found1 = arr.find((application) => null != application.application);
        let obj = PlatformsDefault;
        value = obj.get(item);
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
          obj = { style: closure_1.botTag, guildId, roleColor, size: 16 };
          let tmp12 = value2(tmp2(11566), obj);
        } else if (null != tmp7) {
          obj = { style: closure_1.botTag, verified: false };
          tmp12 = value2(tmp2(9438), obj);
        }
        const items = [closure_1.popoutChecksGroup];
        let prop = null;
        if (index < closure_4) {
          prop = tmp21.popoutChecksGroupBottomMargin;
        }
        const obj1 = { style: items, children: null };
        items[1] = prop;
        const obj2 = { style: closure_1.popoutCheckGroupName, children: null };
        if (null == value) {
          const items1 = [null, , ,];
          let tmp26 = null;
          if (null != tmp7) {
            const obj3 = {
              style: tmp21.popoutCheckGroupPlatformIcon,
              user: tmp7,
              size: tmp11(1178).AvatarSizes.XSMALL,
              guildId: "Array",
            };
            tmp26 = value2(tmp11(1178).Avatar, obj3);
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
          const obj4 = { variant: "text-sm/medium", color: "interactive-text-active", children: name };
          items1[2] = value2(tmp11(4556).Text, obj4);
          items1[3] = tmp12;
          obj2.children = items1;
          const items2 = [
            tmp19(tmp20, obj2),
            found.map((description) => {
              ({ connection_type, connection_metadata_field, operator, value } = description);
              closure_1_1(38)(null != connectionMetadataField, "connectionMetadataField is null");
              closure_1_1(38)(null != operator, "operator is null");
              closure_1_1(38)(null != value, "value is null");
              return closure_1_16(
                closure_1_20,
                { connectionType, connectionMetadataField, operator, value, description: description.description },
                "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value,
              );
            }),
          ];
          obj1.children = items2;
          return tmp19(tmp20, obj1, item);
        } else {
          const obj5 = { style: tmp21.popoutCheckGroupPlatformIcon, source: null, disableColor: true, size: null };
          tmp11(1396);
          const tmp11Result = tmp11(4411);
          const icon = value.icon;
          obj5.source = tmp11Result.makeSource(tmp11Result.isThemeDark(dependencyMap) ? icon.darkPNG : icon.lightPNG);
          obj5.size = tmp11(1178).Icon.Sizes.MEDIUM;
          value2(tmp11(1178).Icon, obj5);
        }
      }),
    };
    return jsx(Fragment, obj);
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const OperatorTypes = fn(5408).OperatorTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flexDirection: "column", alignItems: "center", padding: 16 },
  header: null,
  verifiedContainer: null,
  headerTextContainer: null,
  verifiedCheck: null,
  loadingSpinner: null,
  popoutCheck: null,
  popoutCheckIcon: null,
  popoutChecksGroup: null,
  popoutChecksGroupBottomMargin: null,
  popoutCheckGroupName: null,
  popoutCheckGroupPlatformIcon: null,
  button: null,
  botTag: null,
};
createStyles = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
createStyles.header = createStyles;
createStyles.verifiedContainer = { marginRight: 8, height: 24, width: 24 };
createStyles.headerTextContainer = { flexShrink: 1, flexDirection: "column" };
createStyles.verifiedCheck = { position: "absolute", left: 0, top: 0 };
createStyles.loadingSpinner = { marginVertical: 40 };
createStyles.popoutCheck = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 8,
  marginLeft: 32,
  paddingRight: 20,
};
createStyles.popoutCheckIcon = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
createStyles.popoutChecksGroup = { width: "100%", marginBottom: 24 };
let obj1 = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
createStyles.popoutChecksGroupBottomMargin = {
  paddingBottom: 12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: 12,
};
createStyles.popoutCheckGroupName = { flexDirection: "row", alignItems: "center" };
createStyles.popoutCheckGroupPlatformIcon = { marginRight: 8 };
createStyles.button = { marginBottom: 8 };
createStyles.botTag = { marginLeft: 4 };
let closure_19 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default function ConnectionsRoleMessageBadgeActionSheet(userId) {
  userId = userId.userId;
  const roleId = userId.roleId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let first;
  closure_9 = undefined;
  let tmp = closure_19();
  const analyticsLocations = roleId(channelId[28])(roleId(channelId[29]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  let obj = userId(channelId[30]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = userId(channelId[30]);
  const items1 = [first];
  closure_6 = obj1.useStateFromStores(items1, () => first.getId());
  let obj2 = userId(channelId[30]);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildMemberStore.getMember(guildId, closure_6));
  let obj3 = userId(channelId[30]);
  const items3 = [GuildRoleConnectionEligibilityStore];
  const stateFromStores2 = obj3.useStateFromStores(items3, () =>
    GuildRoleConnectionEligibilityStore.getGuildRoleConnectionEligibility(roleId),
  );
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
    const obj = { other_user_id: userId, role_id: roleId };
    const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(channelId));
    const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.PASSPORT_ROLE_POPOUT_VIEWED, obj);
  }, items4);
  const items5 = [guildId, roleId, first, stateFromStores2];
  const effect1 = obj4.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null == stateFromStores2;
    }
    if (tmp) {
      const guildRoleConnectionsEligibility = GuildActionCreatorsDefault.fetchGuildRoleConnectionsEligibility(
        guildId,
        roleId,
      );
      guildRoleConnectionsEligibility.then(() => closure_1_9(false));
    }
  }, items5);
  if (stateFromStores2 != null) {
    const flatResult = stateFromStores2.flat();
    const someResult = stateFromStores2.flat().some((application_id) => undefined === application_id.application_id);
  }
  const tmp2 = roleId;
  const tmp4 = roleId(channelId[28]);
  const items6 = [GuildRoleStore];
  const stateFromStores3 = userId(channelId[30]).useStateFromStores(items6, () => {
    let role;
    if (null != stateFromStores) {
      role = GuildRoleStore.getRole(tmp.id, roleId);
    }
    return role;
  });
  if (null != stateFromStores2) {
    if (1 === stateFromStores2.length) {
      obj = { value: analyticsLocations, children: null };
      obj = { style: tmp.container, children: null };
      obj1 = { style: tmp.header, children: null };
      obj2 = { style: tmp.verifiedContainer, children: null };
      obj3 = { style: tmp.verifiedCheck, guildId: null, role: null, size: 24 };
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (id == null) {
        id = closure_15;
      }
      obj3.guildId = id;
      obj3.role = stateFromStores3;
      obj2.children = closure_16(tmp2(tmp3[35]), obj3);
      const items7 = [closure_16(closure_6, obj2)];
      obj4 = { style: tmp.headerTextContainer, children: null };
      let name;
      if (stateFromStores3 != null) {
        name = stateFromStores3.name;
      }
      const obj5 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: name };
      const items8 = [closure_16(tmp5(tmp3[17]).Text, obj5)];
      const obj6 = { variant: "text-xs/normal", color: "text-default", children: formatResult };
      items8[1] = closure_16(tmp5(tmp3[17]).Text, obj6);
      obj4.children = items8;
      items7[1] = closure_17(closure_6, obj4);
      obj1.children = items7;
      const items9 = [closure_17(closure_6, obj1)];
      if (null != stateFromStores2) {
        if (null != stateFromStores2.flat()) {
          const obj7 = { eligibilityStates: stateFromStores2.flat(), guildId };
          const items10 = [tmp16(PopoutChecks, obj7), ,];
          let tmp16Result = null;
          if (!hasItem) {
            const obj8 = { style: tmp.button, children: null };
            const obj9 = {
              onPress() {
                let obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet("ConnectionsRoleMessageBadgeActionSheet");
                obj = { guildId };
                const result = GuildRoleConnectionsModalActionCreators.openGuildRoleConnectionsModal(obj);
              },
              text: null,
              variant: "primary",
              grow: true,
            };
            const intl4 = tmp5(tmp3[14]).intl;
            obj9.text = intl4.string(tmp5(tmp3[14]).t.T1t1WV);
            obj8.children = tmp16(tmp5(tmp3[36]).Button, obj9);
            tmp16Result = tmp16(tmp18, obj8);
          }
          items10[1] = tmp16Result;
          tmp16Result = null;
          if (someResult) {
            const obj10 = { style: tmp.button, children: null };
            const obj11 = {
              onPress() {
                showUserProfileActionSheetDefault({
                  userId,
                  channelId,
                  roleId,
                  sourceAnalyticsLocations: analyticsLocations,
                });
              },
              text: null,
              variant: "secondary",
              grow: true,
            };
            const intl5 = tmp5(tmp3[14]).intl;
            obj11.text = intl5.string(tmp5(tmp3[14]).t.hgKDnG);
            obj10.children = tmp16(tmp5(tmp3[36]).Button, obj11);
            tmp16Result = tmp16(tmp18, obj10);
          }
          const obj12 = { children: null };
          items10[2] = tmp16Result;
          obj12.children = items10;
          let tmp16Result1 = tmp17(closure_18, obj12);
        }
        const obj13 = { children: null };
        items9[1] = tmp16Result1;
        obj.children = items9;
        obj13.children = tmp17(tmp18, obj);
        obj.children = tmp16(tmp5(tmp3[34]).BottomSheet, obj13);
        return tmp16(tmp5(tmp3[28]).AnalyticsLocationProvider, obj);
      }
      const obj14 = { style: tmp.loadingSpinner, size: "large" };
      tmp16Result1 = tmp16(stateFromStores, obj14);
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
}
export { PopoutChecks };
