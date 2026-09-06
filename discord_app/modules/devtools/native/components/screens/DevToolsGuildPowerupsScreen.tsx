// discord_app/modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import HTTPUtils from "../../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef4153 from "../../../../../../_runtime/metro/04153__.js";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import GuildDismissibleContentUtils from "../../../../guild_dismissible_content/GuildDismissibleContentUtils.tsx";
import toggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../../../user_settings/UserSettingsProtoStore.tsx";
import AppliedGuildBoostStore from "../../../../../stores/AppliedGuildBoostStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";

require = fn;
function setWarningBoosts() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _setWarningBoosts(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.APPLIED_BOOST_MODIFY_END_DATE, body: null, rejectWithError: true };
          let obj1 = { applied_boost_ids: importDefault.map((id) => id.id), ends_at: null };
          let addResult = null;
          if (!closure_2) {
            let obj3 = _modDef4153();
            addResult = obj3.add(1, "day");
          }
          obj1.ends_at = addResult;
          request.body = obj1;
          c5 = 1;
          c6 = 1;
          const obj2 = { value: HTTP.patch(request), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj3 = { value, done: true };
        return obj3;
      } else {
        obj = closure_132_0(closure_132_2[14]);
        const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_131_0);
        obj1 = closure_132_0(closure_132_2[15]);
        const guildBoostEntitlements = obj1.fetchGuildBoostEntitlements(closure_131_0, true);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp20) {
      c6 = tmp;
      throw tmp20;
    }
  }
};
let closure_23 = async function _sendPowerupsSystemMessage(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.SEND_POWERUPS_SYSTEM_MESSAGE(closure_0), rejectWithError: true };
          c2 = 1;
          c1 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
  return collapsedCategories(TableSwitchRow.TableSwitchRow, {
    label: value2(dc),
    value: isDismissed,
    onValueChange: handleToggleDismissState,
  });
}
function GuildDCSwitchRow(dc) {
  dc = dc.dc;
  const guildId = dc.guildId;
  const items = [dc, guildId];
  const callback = noop.useCallback((arg0) => {
    if (arg0) {
      let tmpResult = tmp(12494);
      const result = tmpResult.markContentAsDismissed(dc, guildId, false);
    } else {
      tmpResult = tmp(1940);
      const result1 = tmpResult.removeDismissedRecurringContent(
        dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
      );
      const result2 = GuildDismissibleContentUtils.unmarkContentAsDismissed(dc, guildId);
    }
  }, items);
  return closure_18(dc(7201).TableSwitchRow, { label: closure_15(dc), value: dc.isDismissed, onValueChange: callback });
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DevToolsGuildPowerupsConstants = fn(15702);
({
  GUILD_DCS: closure_11,
  SERVER_TAG_GUILD_DCS: closure_12,
  USER_DCS: map1,
  VANITY_URL_POWERUP_DCS: closure_14,
  getGuildDCString: closure_15,
  getUserDCString: closure_16,
} = DevToolsGuildPowerupsConstants);
const Endpoints = fn(1074).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollContainer: null, noGuildContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.container = createStyles;
createStyles.scrollContainer = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj1 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.noGuildContainer = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: nativeDefault.space.PX_32,
};
let closure_20 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default function DevToolsGuildPowerupsScreen() {
  const tmp = closure_20();
  let obj = stateFromStores(504);
  let items = [SelectedGuildStore];
  stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  let obj1 = stateFromStores(504);
  const items1 = [GuildStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
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
  let obj2 = stateFromStores(504);
  const items2 = [UserSettingsProtoStore];
  importDefault = obj2.useStateFromStoresArray(items2, () => {
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
  let obj3 = stateFromStores(504);
  const items3 = [AppliedGuildBoostStore];
  dependencyMap = obj3.useStateFromStoresArray(items3, () => {
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
    obj = { style: null, children: null };
    const items4 = [,];
    ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
    obj.style = items4;
    obj.children = closure_18(tmp5(4556).Text, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: "No guild selected",
    });
    let tmp16Result = closure_18(closure_6, obj);
  } else {
    obj = { style: tmp.container, contentContainerStyle: null, children: null };
    const items5 = [tmp.scrollContainer];
    obj1 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    items5[1] = obj1;
    obj.contentContainerStyle = items5;
    let str = stateFromStores1;
    if (stateFromStores1 == null) {
      str = "Unknown";
    }
    obj2 = { title: null, hasIcons: false, children: null };
    const _HermesInternal = HermesInternal;
    obj2.title = "Current Guild: " + str;
    obj3 = {
      label: "Reset Notification Indicators",
      onPress() {
        return stateFromStores(closure_2[15]).guildPowerupsResetNotifications();
      },
    };
    obj2.children = closure_18(tmp5(5605).TableRow, obj3);
    const items6 = [closure_18(tmp5(5687).TableRowGroup, obj2), , , , , ,];
    const obj4 = { title: "Warning State", hasIcons: false, children: null };
    const obj5 = {
      label: "Set Half Boosts expiring in 1 day",
      onPress() {
        return setWarningBoosts(stateFromStores, closure_2.slice(Math.floor(closure_2.length / 2)), false);
      },
    };
    const items7 = [closure_18(tmp5(5605).TableRow, obj5)];
    const obj6 = {
      label: "Reset End Date",
      onPress() {
        return setWarningBoosts(stateFromStores, closure_2, true);
      },
    };
    items7[1] = closure_18(tmp5(5605).TableRow, obj6);
    obj4.children = items7;
    items6[1] = closure_19(tmp5(5687).TableRowGroup, obj4);
    const obj7 = {
      title: "User Level DCs",
      hasIcons: false,
      children: closure_13.map((dc) => closure_1_18(UserDCSwitchRow, { dc }, dc)),
    };
    items6[2] = closure_18(tmp5(5687).TableRowGroup, obj7);
    const obj8 = {
      title: "Guild Level DCs",
      hasIcons: false,
      children: closure_11.map((dc) =>
        collapsedCategories(
          GuildDCSwitchRow,
          { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) },
          dc,
        ),
      ),
    };
    items6[3] = closure_18(tmp5(5687).TableRowGroup, obj8);
    const obj9 = {
      title: "Server Tag Guild Level DCs",
      hasIcons: false,
      children: closure_12.map((dc) =>
        collapsedCategories(
          GuildDCSwitchRow,
          { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) },
          dc,
        ),
      ),
    };
    items6[4] = closure_18(tmp5(5687).TableRowGroup, obj9);
    const obj10 = {
      title: "Powerup Rollback DCs",
      hasIcons: false,
      children: closure_14.map((dc) => closure_1_18(UserDCSwitchRow, { dc }, dc)),
    };
    items6[5] = closure_18(tmp5(5687).TableRowGroup, obj10);
    const obj11 = { title: "System Messages", hasIcons: false, children: null };
    const obj12 = {
      label: "Send Powerups System Message",
      onPress() {
        return (function sendPowerupsSystemMessage() {
          const self = this;
          const apply = closure_1_23.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(stateFromStores);
      },
    };
    obj11.children = closure_18(tmp5(5605).TableRow, obj12);
    items6[6] = closure_18(tmp5(5687).TableRowGroup, obj11);
    obj.children = items6;
    tmp16Result = tmp16(closure_5, obj);
  }
  return tmp16Result;
}
