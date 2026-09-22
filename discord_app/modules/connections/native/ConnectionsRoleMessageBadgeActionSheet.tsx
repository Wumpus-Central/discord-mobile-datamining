// discord_app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ConnectionsUtils from "../ConnectionsUtils.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import OfficialConnectionIconDefault from "OfficialConnectionIcon.tsx";
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
    const items = [value2(CheckmarkLargeIcon.CheckmarkLargeIcon, obj6)];
    const obj7 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: formatResult };
    items[1] = value2(Text_Text.Text, obj7);
    obj5.children = items;
    tmp9 = closure_1_17(timestampProducer, obj5);
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
    obj1 = {
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
        const items = [closure_1.popoutChecksGroup];
        let prop = null;
        if (index < closure_4) {
          prop = closure_1.popoutChecksGroupBottomMargin;
        }
        const obj4 = { style: items, children: null };
        items[1] = prop;
        const obj5 = { style: closure_1.popoutCheckGroupName, children: null };
        if (null == value) {
          const items1 = [null, , ,];
          let tmp26 = null;
          if (null != tmp7) {
            const obj6 = {
              style: closure_1.popoutCheckGroupPlatformIcon,
              user: tmp7,
              size: native.AvatarSizes.XSMALL,
              guildId: "a",
            };
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
            closure_2_17(timestampProducer, obj5),
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
          obj4.children = items2;
          return closure_2_17(timestampProducer, obj4, item);
        } else {
          const obj8 = { style: closure_1.popoutCheckGroupPlatformIcon, source: null, disableColor: true, size: null };
          const tmp11Result = AvatarUtils;
          const icon = value.icon;
          obj8.source = tmp11Result.makeSource(shared.isThemeDark(dependencyMap) ? icon.darkPNG : icon.lightPNG);
          obj8.size = native.Icon.Sizes.MEDIUM;
          value2(native.Icon, obj8);
          const tmp11Result2 = shared;
        }
      }),
    };
    return jsx(Fragment, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const OperatorTypes = fn(5627).OperatorTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flexDirection: "column", alignItems: "center", padding: 16 },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: nativeDefault.space.PX_24,
  },
  verifiedContainer: { marginRight: 8, height: 24, width: 24 },
  headerTextContainer: { flexShrink: 1, flexDirection: "column" },
  verifiedCheck: { position: "absolute", left: 0, top: 0 },
  loadingSpinner: { marginVertical: 40 },
  popoutCheck: { flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 32, paddingRight: 20 },
  popoutCheckIcon: null,
  popoutChecksGroup: null,
  popoutChecksGroupBottomMargin: null,
  popoutCheckGroupName: null,
  popoutCheckGroupPlatformIcon: null,
  button: null,
  botTag: null,
};
let obj3 = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 16,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_24,
};
obj2.popoutCheckIcon = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.popoutChecksGroup = { width: "100%", marginBottom: 24 };
let obj4 = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.popoutChecksGroupBottomMargin = {
  paddingBottom: 12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: 12,
};
obj2.popoutCheckGroupName = { flexDirection: "row", alignItems: "center" };
obj2.popoutCheckGroupPlatformIcon = { marginRight: 8 };
obj2.button = { marginBottom: 8 };
obj2.botTag = { marginLeft: 4 };
let closure_19 = createStyles.createStyles(obj2);
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
  const tmp2 = roleId;
  const tmp4 = roleId(channelId[28]);
  const items = [GuildStore];
  const stateFromStores = userId(channelId[30]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = userId(channelId[30]);
  const items1 = [first];
  closure_6 = userId(channelId[30]).useStateFromStores(items1, () => first.getId());
  let obj2 = userId(channelId[30]);
  const items2 = [closure_9];
  const stateFromStores1 = userId(channelId[30]).useStateFromStores(items2, () =>
    GuildMemberStore.getMember(guildId, closure_6),
  );
  let obj3 = userId(channelId[30]);
  const items3 = [GuildRoleConnectionEligibilityStore];
  const stateFromStores2 = userId(channelId[30]).useStateFromStores(items3, () =>
    GuildRoleConnectionEligibilityStore.getGuildRoleConnectionEligibility(roleId),
  );
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
  const obj4 = userId(channelId[30]);
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
      obj9.children = closure_16(tmp2(tmp3[35]), obj10);
      const items7 = [closure_16(closure_6, obj9)];
      const obj11 = { style: tmp.headerTextContainer, children: null };
      let name;
      if (stateFromStores3 != null) {
        name = stateFromStores3.name;
      }
      const obj12 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: name };
      const items8 = [closure_16(tmp5(tmp3[17]).Text, obj12)];
      const obj13 = { variant: "text-xs/normal", color: "text-default", children: formatResult };
      items8[1] = closure_16(tmp5(tmp3[17]).Text, obj13);
      obj11.children = items8;
      items7[1] = closure_17(closure_6, obj11);
      obj8.children = items7;
      const items9 = [closure_17(closure_6, obj8)];
      if (null != stateFromStores2) {
        if (null != stateFromStores2.flat()) {
          const obj14 = { eligibilityStates: stateFromStores2.flat(), guildId };
          const items10 = [closure_16(PopoutChecks, obj14), ,];
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
              grow: true,
            };
            const intl4 = tmp5(tmp3[14]).intl;
            obj16.text = intl4.string(tmp5(tmp3[14]).t.T1t1WV);
            obj15.children = closure_16(tmp5(tmp3[36]).Button, obj16);
            tmp16Result = closure_16(tmp18, obj15);
          }
          items10[1] = tmp16Result;
          let tmp16Result2 = null;
          if (someResult) {
            const obj17 = { style: tmp.button, children: null };
            const obj18 = {
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
            obj18.text = intl5.string(tmp5(tmp3[14]).t.hgKDnG);
            obj17.children = closure_16(tmp5(tmp3[36]).Button, obj18);
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
        obj6.children = closure_16(tmp5(tmp3[34]).BottomSheet, obj20);
        return closure_16(tmp5(tmp3[28]).AnalyticsLocationProvider, obj6);
      }
      const obj21 = { style: tmp.loadingSpinner, size: "large" };
      tmp16Result3 = closure_16(stateFromStores, obj21);
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
}
export { PopoutChecks };
