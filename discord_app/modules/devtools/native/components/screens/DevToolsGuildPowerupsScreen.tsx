// discord_app/modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import useToggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import closure_3 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../user_settings/UserSettingsProtoStore.tsx";
import closure_8 from "../../../../../stores/AppliedGuildBoostStore.tsx";
import closure_9 from "../../../../../stores/GuildStore.tsx";
import closure_10 from "../../../../../stores/SelectedGuildStore.tsx";
import items from "../../../DevToolsGuildPowerupsConstants.tsx";
import { Endpoints } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function setWarningBoosts() {
  const self = this;
  const apply = _setWarningBoosts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setWarningBoosts() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp2;
              const HTTP = callback(1272).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = closure_1_17.APPLIED_BOOST_MODIFY_END_DATE;
              const obj2 = { applied_boost_ids: null, ends_at: null };
              obj2[0] = lib.map((id) => id.id);
              let addResult = null;
              if (!dependencyMap) {
                let obj3 = lib(4153)();
                addResult = obj3.add(1, "day");
              }
              obj2[1] = addResult;
              obj1[1] = obj2;
              c5 = 1;
              c6 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = callback(4458);
            const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(callback);
            obj1 = callback(12488);
            const guildBoostEntitlements = obj1.fetchGuildBoostEntitlements(callback, true);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c6 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _sendPowerupsSystemMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[12]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = closure_1_17.SEND_POWERUPS_SYSTEM_MESSAGE(callback);
              table = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function UserDCSwitchRow(dc) {
  dc = dc.dc;
  ({ isDismissed, handleToggleDismissState } = useToggleDismissibleContentDismissStateDefault(dc));
  const tmp = useToggleDismissibleContentDismissStateDefault(dc);
  return callback4(TableSwitchRow.TableSwitchRow, {
    label: callback3(dc),
    value: isDismissed,
    onValueChange: handleToggleDismissState,
  });
}
function GuildDCSwitchRow(dc) {
  dc = dc.dc;
  const guildId = dc.guildId;
  const items = [dc, guildId];
  const callback = React.useCallback((arg0) => {
    if (arg0) {
      let tmpResult = tmp(tmp2[18]);
      const result = tmpResult.markContentAsDismissed(dc, guildId, false);
    } else {
      tmpResult = tmp(tmp2[19]);
      const result1 = tmpResult.removeDismissedRecurringContent(
        dc(closure_1_2[20]).DismissibleContent.GUILD_POWERUP_NOTIFICATION,
      );
      const result2 = dc(closure_1_2[18]).unmarkContentAsDismissed(dc, guildId);
      const obj2 = dc(closure_1_2[18]);
    }
  }, items);
  return callback4(dc(7201).TableSwitchRow, { label: callback2(dc), value: dc.isDismissed, onValueChange: callback });
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({
  GUILD_DCS: unpackModuleId,
  SERVER_TAG_GUILD_DCS: closure_12,
  USER_DCS: map1,
  VANITY_URL_POWERUP_DCS: closure_14,
  getGuildDCString: closure_15,
  getUserDCString: closure_16,
} = items);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
createCacheKey = { container: null, scrollContainer: null, noGuildContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[2] = { flex: 1, justifyContent: "center", alignItems: "center", padding: ThemesDefault.space.PX_32 };
let closure_20 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, justifyContent: "center", alignItems: "center", padding: ThemesDefault.space.PX_32 };
let result = require("set").fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx",
);

export default function DevToolsGuildPowerupsScreen() {
  const tmp = callback5();
  let obj = stateFromStores(504);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  obj1 = stateFromStores(504);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const guild = closure_1_9.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  let obj2 = stateFromStores(504);
  const items2 = [closure_7];
  importDefault = obj2.useStateFromStoresArray(items2, () => {
    const items = [...closure_1_12];
    return items.filter((GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK) => {
      let isContentDismissedResult = null != closure_0;
      if (isContentDismissedResult) {
        isContentDismissedResult = closure_1_0(closure_1_2[18]).isContentDismissed(
          GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
          tmp,
        );
        const obj = closure_1_0(closure_1_2[18]);
      }
      return isContentDismissedResult;
    });
  });
  let obj3 = stateFromStores(504);
  const items3 = [closure_8];
  dependencyMap = obj3.useStateFromStoresArray(items3, () => {
    if (null != stateFromStores) {
      let appliedGuildBoostsForGuild = closure_1_8.getAppliedGuildBoostsForGuild(tmp);
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
    obj[0] = items4;
    obj[1] = callback4(tmp5(4556).Text, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: "No guild selected",
    });
    let tmp16Result = callback4(closure_6, obj);
  } else {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.container;
    const items5 = [tmp.scrollContainer];
    obj1 = { paddingBottom: null };
    obj1[0] = tmp4.bottom + ThemesDefault.space.PX_16;
    items5[1] = obj1;
    obj[1] = items5;
    let str = stateFromStores1;
    if (stateFromStores1 == null) {
      str = "Unknown";
    }
    obj2 = { title: null, hasIcons: false, children: null };
    const _HermesInternal = HermesInternal;
    obj2[0] = "Current Guild: " + str;
    obj3 = { label: "Reset Notification Indicators", onPress: null };
    obj3[1] = function onPress() {
      return stateFromStores(arr[15]).guildPowerupsResetNotifications();
    };
    obj2[2] = callback4(tmp5(5605).TableRow, obj3);
    const items6 = [callback4(tmp5(5687).TableRowGroup, obj2), , , , , ,];
    const obj4 = { title: "Warning State", hasIcons: false, children: null };
    const obj5 = { label: "Set Half Boosts expiring in 1 day", onPress: null };
    obj5[1] = function onPress() {
      return closure_1_21(stateFromStores, arr.slice(Math.floor(arr.length / 2)), false);
    };
    const items7 = [callback4(tmp5(5605).TableRow, obj5)];
    const obj6 = { label: "Reset End Date", onPress: null };
    obj6[1] = function onPress() {
      return closure_1_21(stateFromStores, closure_2, true);
    };
    items7[1] = callback4(tmp5(5605).TableRow, obj6);
    obj4[2] = items7;
    items6[1] = closure_19(tmp5(5687).TableRowGroup, obj4);
    const obj7 = { title: "User Level DCs", hasIcons: false, children: null };
    obj7[2] = closure_13.map((dc) => callback(closure_24, { dc }, dc));
    items6[2] = callback4(tmp5(5687).TableRowGroup, obj7);
    const obj8 = { title: "Guild Level DCs", hasIcons: false, children: null };
    obj8[2] = closure_11.map((dc) =>
      closure_1_18(closure_1_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc),
    );
    items6[3] = callback4(tmp5(5687).TableRowGroup, obj8);
    const obj9 = { title: "Server Tag Guild Level DCs", hasIcons: false, children: null };
    obj9[2] = closure_12.map((dc) =>
      closure_1_18(closure_1_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc),
    );
    items6[4] = callback4(tmp5(5687).TableRowGroup, obj9);
    const obj10 = { title: "Powerup Rollback DCs", hasIcons: false, children: null };
    obj10[2] = closure_14.map((dc) => callback(closure_24, { dc }, dc));
    items6[5] = callback4(tmp5(5687).TableRowGroup, obj10);
    const obj11 = { title: "System Messages", hasIcons: false, children: null };
    const obj12 = { label: "Send Powerups System Message", onPress: null };
    obj12[1] = function onPress() {
      return (function sendPowerupsSystemMessage(stateFromStores) {
        const self = this;
        const apply = closure_23.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(stateFromStores);
    };
    obj11[2] = callback4(tmp5(5605).TableRow, obj12);
    items6[6] = callback4(tmp5(5687).TableRowGroup, obj11);
    obj[2] = items6;
    tmp16Result = tmp16(closure_5, obj);
    const tmp17 = closure_5;
  }
  return tmp16Result;
}
