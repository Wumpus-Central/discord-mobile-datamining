// discord_app/modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildAntiRaidUtils from "../GuildAntiRaidUtils.tsx";
import GuildAntiRaidActionCreators from "../GuildAntiRaidActionCreators.tsx";
import GuildRaidLockdownFeedbackActionSheetDefault from "GuildRaidLockdownFeedbackActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildIncidentsStore from "../GuildIncidentsStore.tsx";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function DurationSelectionActionSheet(onClose) {
  onClose = onClose.onClose;
  const obj = { children: null };
  const obj2 = { title: null };
  const intl = onClose(1114).intl;
  obj2.title = intl.string(onClose(1114).t.vKYZzc);
  const items = [closure_14(onClose(7252).BottomSheetTitleHeader, obj2)];
  const arr = getTimeframes();
  items[1] = closure_14(onClose(7302).ActionSheetRow.Group, {
    hasIcons: false,
    children: getTimeframes().map((label) =>
      closure_1_14(
        onClose(dependencyMap[10]).ActionSheetRow,
        {
          label: label.label,
          onPress() {
            React7(label.value);
            onClose();
          },
        },
        label.value,
      ),
    ),
  });
  obj.children = items;
  return closure_15(onClose(7300).ActionSheet, obj);
}
const GuildIncidentsActionSheetStore = fn(11961);
({
  resetGuildIncidentsActionSheetStore: hasOwnProperty,
  setInitialTime: metroRequire,
  setPauseDms: closure_7,
  setPauseInvites: closure_8,
  setTime: closure_9,
  useGuildIncidentsActionSheetStore: c10,
} = GuildIncidentsActionSheetStore);
const getTimeframes = fn(8120).getTimeframes;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4636);
const value = createStyles.createStyles({ beta: { marginLeft: -12 } });
class GuildIncidentActionsActionSheet {
  constructor(arg0) {
    guild = global.guild;
    analyticsData = global.analyticsData;
    time = undefined;
    pauseInvites = undefined;
    pauseDms = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    onDurationSelectorClose = function onDurationSelectorClose() {
      const obj2 = {
        content: closure_2_14(GuildIncidentActionsActionSheet, { guild, analyticsData }),
        key: "GuildIncidentActionsActionSheet",
      };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    tmp = closure_16();
    tmp2 = closure_10();
    time = tmp2.time;
    pauseInvites = tmp2.pauseInvites;
    pauseDms = tmp2.pauseDms;
    tmp3 = guild;
    tmp4 = time;
    obj = guild(time[11]);
    items = [];
    items[0] = pauseDms;
    stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
    obj2 = guild(time[12]);
    hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    closure_5 = hasInvitesDisabledResult;
    obj3 = guild(time[12]);
    hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    closure_6 = hasDMsDisabledResult;
    obj4 = guild(time[12]);
    result = obj4.initialLockdownDurationHours(stateFromStores);
    closure_7 = result;
    hasItem = undefined;
    if (guild != null) {
      features = guild.features;
      tmp10 = GuildFeatures;
      hasItem = features.has(GuildFeatures.INVITES_DISABLED);
    }
    items1 = [,];
    items1[0] = hasDMsDisabledResult;
    items1[1] = hasInvitesDisabledResult;
    effect = pauseInvites.useEffect(() => {
      React6(c5);
      React5(c6);
    }, items1);
    items2 = [];
    items2[0] = result;
    effect1 = pauseInvites.useEffect(() => {
      if (!state.getState().hasTimeChanges) {
        timestampProducer(c7);
      }
    }, items2);
    items3 = [];
    items3[0] = time;
    memo = pauseInvites.useMemo(() => {
      const found = getTimeframes().find((value) => value.value === time);
      let label;
      if (found != null) {
        label = found.label;
      }
      return label;
    }, items3);
    tmp14 = jsxs;
    obj1 = { startExpanded: true, header: null, children: null };
    tmp15 = jsx;
    obj16 = { title: null, leading: null };
    intl = tmp3(tmp4[9]).intl;
    obj16.title = intl.string(tmp3(tmp4[9]).t.oCYAc7);
    obj17 = { size: tmp3(tmp4[14]).BetaSizes.SMALL, style: tmp.beta };
    obj16.leading = jsx(tmp3(tmp4[14]).BetaTag, obj17);
    obj1.header = jsx(tmp3(tmp4[8]).BottomSheetTitleHeader, obj16);
    str = memo;
    if (memo == null) {
      str = "";
    }
    obj18 = {
      trailing: tmp15(tmp3(tmp4[15]).TableRow.TrailingText, { text: str }),
      label: null,
      arrow: true,
      onPress: null,
      start: true,
      end: true,
      accessibilityLabel: null,
      accessibilityHint: null,
    };
    intl2 = tmp3(tmp4[9]).intl;
    obj18.label = intl2.string(tmp3(tmp4[9]).t.vKYZzc);
    obj18.onPress = function onPress() {
      const obj2 = {
        content: closure_2_14(DurationSelectionActionSheet, { onClose: onDurationSelectorClose }),
        key: "DurationSelectionActionSheet",
      };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    intl3 = tmp3(tmp4[9]).intl;
    obj18.accessibilityLabel = intl3.string(tmp3(tmp4[9]).t.vKYZzc);
    obj18.accessibilityHint = memo;
    items4 = [, , ,];
    items4[0] = tmp15(tmp3(tmp4[15]).TableRow, obj18);
    obj19 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
    intl4 = tmp3(tmp4[9]).intl;
    obj19.label = intl4.string(tmp3(tmp4[9]).t.Uwsjn6);
    intl5 = tmp3(tmp4[9]).intl;
    obj19.subLabel = intl5.string(tmp3(tmp4[9]).t.qPJkZh);
    tmp16 = pauseInvites;
    if (!pauseInvites) {
      tmp16 = hasItem;
    }
    obj19.value = tmp16;
    obj19.onValueChange = function onValueChange() {
      React6(!pauseInvites);
    };
    obj19.disabled = hasItem;
    items5 = [,];
    items5[0] = tmp15(tmp3(tmp4[17]).TableSwitchRow, obj19);
    if (hasItem) {
      obj20 = { icon: null, label: null };
      obj21 = { source: null, IconComponent: null, variant: "secondary" };
      tmp17 = analyticsData;
      obj21.source = analyticsData(tmp4[18]);
      obj21.IconComponent = tmp3(tmp4[19]).WarningIcon;
      obj20.icon = tmp15(tmp3(tmp4[15]).TableRow.Icon, obj21);
      intl6 = tmp3(tmp4[9]).intl;
      obj20.label = intl6.string(tmp3(tmp4[9]).t["9GPbsV"]);
      hasItem = tmp15(tmp3(tmp4[15]).TableRow, obj20);
    }
    items5[1] = hasItem;
    items4[1] = tmp14(tmp3(tmp4[16]).TableRowGroup, { hasIcons: true, children: items5 });
    obj22 = { label: null, subLabel: null, value: null, onValueChange: null, start: true, end: true };
    intl7 = tmp3(tmp4[9]).intl;
    obj22.label = intl7.string(tmp3(tmp4[9]).t["wrDmA/"]);
    intl8 = tmp3(tmp4[9]).intl;
    obj22.subLabel = intl8.string(tmp3(tmp4[9]).t.UQbJW7);
    obj22.value = pauseDms;
    obj22.onValueChange = function onValueChange() {
      React5(!pauseDms);
    };
    items4[2] = tmp15(tmp3(tmp4[17]).TableSwitchRow, obj22);
    obj23 = {
      onPress() {
        const result = GuildAntiRaidActionCreators.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
        ActionSheetActionCreatorsDefault.hideActionSheet("GuildIncidentActionsActionSheet");
        hasOwnProperty();
        ({ source, alertType, messageId } = analyticsData);
        const obj4 = {
          guild_id: guild.id,
          source,
          raid_alert_id: messageId,
          raid_alert_type: alertType,
          intervention_type_enabled: null,
          intervention_type_disabled: null,
          duration: null,
        };
        const obj3 = AnalyticsUtilsDefault;
        obj4.intervention_type_enabled = GuildAntiRaidUtils.getEnabledInterventions(pauseInvites, pauseDms);
        obj4.intervention_type_disabled = GuildAntiRaidUtils.getDisabledInterventions(pauseInvites, pauseDms);
        obj4.duration = 60 * time;
        obj3.track(constants.GUILD_RAID_INTERVENTION_STATE_CHANGE, obj4);
        let tmp11 = !c5;
        if (!c5) {
          tmp11 = !c6;
        }
        if (!tmp11) {
          tmp11 = pauseInvites;
        }
        if (!tmp11) {
          tmp11 = pauseDms;
        }
        if (!tmp11) {
          const obj7 = { content: null, key: "GuildRaidLockdownFeedbackActionSheet" };
          const obj8 = { guildId: guild.id };
          obj7.content = closure_2_14(GuildRaidLockdownFeedbackActionSheetDefault, obj8);
          ActionSheetActionCreators.showActionSheet(obj7);
          const tmpResult = ActionSheetActionCreators;
        }
      },
      text: null,
      variant: "primary",
      size: "md",
      disabled: null,
    };
    intl9 = tmp3(tmp4[9]).intl;
    obj23.text = intl9.string(tmp3(tmp4[9]).t["R3BPH+"]);
    tmp18 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || tmp2.hasTimeChanges;
    obj24 = { children: null };
    obj23.disabled = !tmp18;
    handleClose = function handleClose() {
      analyticsData(time[13]).hideActionSheet("GuildIncidentActionsActionSheet");
      _undefined();
    };
    items6 = [,];
    items6[0] = tmp15(tmp3(tmp4[21]).Button, obj23);
    obj25 = { onPress: handleClose, text: null, variant: "secondary", size: "md" };
    intl10 = tmp3(tmp4[9]).intl;
    obj25.text = intl10.string(tmp3(tmp4[9]).t["ETE/oC"]);
    items6[1] = tmp15(tmp3(tmp4[21]).Button, obj25);
    obj24.children = items6;
    items4[3] = tmp14(tmp3(tmp4[20]).ButtonGroup, obj24);
    obj1.children = items4;
    return tmp14(tmp3(tmp4[7]).ActionSheet, obj1);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;
