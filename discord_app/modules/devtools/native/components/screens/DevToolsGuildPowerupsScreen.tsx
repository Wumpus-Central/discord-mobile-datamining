// === Module 17657: DevToolsGuildPowerupsScreen ===

// Module 17657 (DevToolsGuildPowerupsScreen)
import nativeDefault from "native" /* 575 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import _modDef2044 from "module_2044" /* 2044 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4839 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import TableSwitchRow from "TableSwitchRow" /* 7363 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 14020 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 17544 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 14086 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;

require = fn;
function setWarningBoosts() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _setWarningBoosts(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.APPLIED_BOOST_MODIFY_END_DATE, body: null, rejectWithError: true };
          const obj6 = { applied_boost_ids: importDefault.map((id) => id.id), ends_at: null };
          let addResult = null;
          if (!closure_2) {
            addResult = _modDef2044().add(1, "day");
            const obj4 = _modDef2044();
          }
          obj6.ends_at = addResult;
          request.body = obj6;
          c5 = 1;
          c6 = 1;
          const obj7 = { value: HTTP.patch(request), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        const appliedGuildBoostsForGuild = closure_132_0(closure_132_2[14]).fetchAppliedGuildBoostsForGuild(closure_131_0);
        const obj = closure_132_0(closure_132_2[14]);
        const guildBoostEntitlements = closure_132_0(closure_132_2[15]).fetchGuildBoostEntitlements(closure_131_0, true);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp20) {
      c6 = tmp;
      throw tmp20;
    }
  }
};
let closure_22 = async function _sendPowerupsSystemMessage(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.SEND_POWERUPS_SYSTEM_MESSAGE(closure_0), rejectWithError: true };
          c2 = 1;
          c1 = 1;
          const obj5 = { value: HTTP.post(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
function UserDCSwitchRow(dc) {
  dc = dc.dc;
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dc));
  const tmp = toggleDismissibleContentDismissStateDefault(dc);
  return closure_1_17(TableSwitchRow.TableSwitchRow, { label: __initData(dc), value: isDismissed, onValueChange: handleToggleDismissState });
}
function GuildDCSwitchRow(dc) {
  dc = dc.dc;
  const guildId = dc.guildId;
  const items = [dc, guildId];
  const callback = noop.useCallback((arg0) => {
    if (arg0) {
      const result = GuildDismissibleContentUtils.markContentAsDismissed(dc, guildId, false);
      const tmpResult = GuildDismissibleContentUtils;
    } else {
      const result1 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION);
      const tmpResult2 = UserSettingsProtoActionCreators;
      const result2 = GuildDismissibleContentUtils.unmarkContentAsDismissed(dc, guildId);
    }
  }, items);
  return closure_17(dc(7363).TableSwitchRow, { label: closure_14(dc), value: dc.isDismissed, onValueChange: callback });
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DevToolsGuildPowerupsConstants = fn(17658);
({ GUILD_DCS: closure_11, SERVER_TAG_GUILD_DCS: closure_12, USER_DCS: map1, getGuildDCString: closure_14, getUserDCString: closure_15 } = DevToolsGuildPowerupsConstants);
const Endpoints = fn(1072).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, scrollContainer: null, noGuildContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.noGuildContainer = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_32 };
let closure_19 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default function DevToolsGuildPowerupsScreen() {
  const tmp = closure_19();
  const tmp4 = useSafeAreaInsetsDefault();
  let items = [SelectedGuildStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guildId.getGuildId());
  let obj = stateFromStores(504);
  const items1 = [GuildStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const obj2 = stateFromStores(504);
  const items2 = [UserSettingsProtoStore];
  importDefault = stateFromStores(504).useStateFromStoresArray(items2, () => {
    const items = [...closure_2_12];
    return items.filter((item) => {
      let isContentDismissedResult = null != closure_1_0;
      if (isContentDismissedResult) {
        isContentDismissedResult = stateFromStores(dependencyMap[18]).isContentDismissed(item, tmp);
        const obj = stateFromStores(dependencyMap[18]);
      }
      return isContentDismissedResult;
    });
  });
  const obj3 = stateFromStores(504);
  const items3 = [AppliedGuildBoostStore];
  dependencyMap = stateFromStores(504).useStateFromStoresArray(items3, () => {
    if (null != stateFromStores) {
      let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
      if (appliedGuildBoostsForGuild == null) {
        appliedGuildBoostsForGuild = [];
      }
      let items = appliedGuildBoostsForGuild;
    } else {
      items = [];
    }
    return items;
  });
  if (null == stateFromStores) {
    const obj5 = { style: null, children: null };
    const items4 = [, ];
    ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
    obj5.style = items4;
    obj5.children = closure_17(tmp5(5619).Text, { variant: "heading-md/semibold", color: "text-muted", children: "No guild selected" });
    let tmp15Result = closure_17(closure_6, obj5);
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items5 = [tmp.scrollContainer, ];
    const obj7 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    items5[1] = obj7;
    obj6.contentContainerStyle = items5;
    let str = stateFromStores1;
    if (stateFromStores1 == null) {
      str = "Unknown";
    }
    const obj8 = { title: null, hasIcons: false, children: null };
    const _HermesInternal = HermesInternal;
    obj8.title = "Current Guild: " + str;
    const obj9 = {
      label: "Reset Notification Indicators",
      onPress() {
          return stateFromStores(closure_2[15]).guildPowerupsResetNotifications();
        }
    };
    obj8.children = closure_17(tmp5(6969).TableRow, obj9);
    const items6 = [closure_17(tmp5(7054).TableRowGroup, obj8), , , , , ];
    const obj10 = { title: "Warning State", hasIcons: false, children: null };
    const obj11 = {
      label: "Set Half Boosts expiring in 1 day",
      onPress() {
          return setWarningBoosts(stateFromStores, closure_2.slice(Math.floor(closure_2.length / 2)), false);
        }
    };
    const items7 = [closure_17(tmp5(6969).TableRow, obj11), ];
    const obj12 = {
      label: "Reset End Date",
      onPress() {
          return setWarningBoosts(stateFromStores, closure_2, true);
        }
    };
    items7[1] = closure_17(tmp5(6969).TableRow, obj12);
    obj10.children = items7;
    items6[1] = closure_18(tmp5(7054).TableRowGroup, obj10);
    const obj13 = { title: "User Level DCs", hasIcons: false, children: closure_13.map((dc) => closure_1_17(UserDCSwitchRow, { dc }, dc)) };
    items6[2] = closure_17(tmp5(7054).TableRowGroup, obj13);
    const obj14 = { title: "Guild Level DCs", hasIcons: false, children: closure_11.map((dc) => closure_2_17(GuildDCSwitchRow, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc)) };
    items6[3] = closure_17(tmp5(7054).TableRowGroup, obj14);
    const obj15 = { title: "Server Tag Guild Level DCs", hasIcons: false, children: closure_12.map((dc) => closure_2_17(GuildDCSwitchRow, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc)) };
    items6[4] = closure_17(tmp5(7054).TableRowGroup, obj15);
    const obj16 = { title: "System Messages", hasIcons: false, children: null };
    const obj17 = {
      label: "Send Powerups System Message",
      onPress() {
          return (function sendPowerupsSystemMessage() {
            const self = this;
            const apply = closure_1_22.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(stateFromStores);
        }
    };
    obj16.children = closure_17(tmp5(6969).TableRow, obj17);
    items6[5] = closure_17(tmp5(7054).TableRowGroup, obj16);
    obj6.children = items6;
    tmp15Result = closure_18(closure_5, obj6);
  }
  return tmp15Result;
};