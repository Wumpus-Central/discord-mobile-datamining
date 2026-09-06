// === Module 11829: GuildIncidentActionsActionSheet ===

// Module 11829 (GuildIncidentActionsActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4527 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 8015 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11831 */;
import GuildRaidLockdownFeedbackActionSheetDefault from "GuildRaidLockdownFeedbackActionSheet" /* 11832 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10080 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function DurationSelectionActionSheet(onClose) {
  onClose = onClose.onClose;
  let obj = { children: null };
  obj = { title: null };
  const intl = onClose(1114).intl;
  obj.title = intl.string(onClose(1114).t.vKYZzc);
  const items = [closure_14(onClose(7149).BottomSheetTitleHeader, obj), ];
  obj = {
    hasIcons: false,
    children: getTimeframes().map((label) => closure_1_14(onClose(dependencyMap[10]).ActionSheetRow, {
      label: label.label,
      onPress() {
        React7(label.value);
        onClose();
      }
    }, label.value))
  };
  items[1] = closure_14(onClose(7200).ActionSheetRow.Group, obj);
  obj.children = items;
  return closure_15(onClose(7198).ActionSheet, obj);
}
const GuildIncidentsActionSheetStore = fn(11830);
({ resetGuildIncidentsActionSheetStore: hasOwnProperty, setInitialTime: metroRequire, setPauseDms: closure_7, setPauseInvites: closure_8, setTime: closure_9, useGuildIncidentsActionSheetStore: c10 } = GuildIncidentsActionSheetStore);
const getTimeframes = fn(8016).getTimeframes;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
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
      let obj = { content: null, key: "GuildIncidentActionsActionSheet" };
      obj = { guild, analyticsData };
      obj.content = closure_2_14(GuildIncidentActionsActionSheet, obj);
      obj.showActionSheet(obj);
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
    items1 = [, ];
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
    obj = { startExpanded: true, header: null, children: null };
    tmp15 = jsx;
    obj1 = { title: null, leading: null };
    intl = tmp3(tmp4[9]).intl;
    obj1.title = intl.string(tmp3(tmp4[9]).t.oCYAc7);
    obj2 = { size: tmp3(tmp4[14]).BetaSizes.SMALL, style: tmp.beta };
    obj1.leading = jsx(tmp3(tmp4[14]).BetaTag, obj2);
    obj.header = jsx(tmp3(tmp4[8]).BottomSheetTitleHeader, obj1);
    str = memo;
    if (memo == null) {
      str = "";
    }
    obj3 = { trailing: tmp15(tmp3(tmp4[15]).TableRow.TrailingText, { text: str }), label: null, arrow: true, onPress: null, start: true, end: true, accessibilityLabel: null, accessibilityHint: null };
    intl2 = tmp3(tmp4[9]).intl;
    obj3.label = intl2.string(tmp3(tmp4[9]).t.vKYZzc);
    obj3.onPress = function onPress() {
      let obj = { content: null, key: "DurationSelectionActionSheet" };
      obj = { onClose: onDurationSelectorClose };
      obj.content = closure_2_14(DurationSelectionActionSheet, obj);
      obj.showActionSheet(obj);
    };
    intl3 = tmp3(tmp4[9]).intl;
    obj3.accessibilityLabel = intl3.string(tmp3(tmp4[9]).t.vKYZzc);
    obj3.accessibilityHint = memo;
    items4 = [, , , ];
    items4[0] = tmp15(tmp3(tmp4[15]).TableRow, obj3);
    obj4 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
    intl4 = tmp3(tmp4[9]).intl;
    obj4.label = intl4.string(tmp3(tmp4[9]).t.Uwsjn6);
    intl5 = tmp3(tmp4[9]).intl;
    obj4.subLabel = intl5.string(tmp3(tmp4[9]).t.qPJkZh);
    tmp16 = pauseInvites;
    if (!pauseInvites) {
      tmp16 = hasItem;
    }
    obj4.value = tmp16;
    obj4.onValueChange = function onValueChange() {
      React6(!pauseInvites);
    };
    obj4.disabled = hasItem;
    items5 = [, ];
    items5[0] = tmp15(tmp3(tmp4[17]).TableSwitchRow, obj4);
    if (hasItem) {
      obj5 = { icon: null, label: null };
      obj6 = { source: null, IconComponent: null, variant: "secondary" };
      tmp17 = analyticsData;
      obj6.source = analyticsData(tmp4[18]);
      obj6.IconComponent = tmp3(tmp4[19]).WarningIcon;
      obj5.icon = tmp15(tmp3(tmp4[15]).TableRow.Icon, obj6);
      intl6 = tmp3(tmp4[9]).intl;
      obj5.label = intl6.string(tmp3(tmp4[9]).t["9GPbsV"]);
      hasItem = tmp15(tmp3(tmp4[15]).TableRow, obj5);
    }
    items5[1] = hasItem;
    items4[1] = tmp14(tmp3(tmp4[16]).TableRowGroup, { hasIcons: true, children: items5 });
    obj7 = { label: null, subLabel: null, value: null, onValueChange: null, start: true, end: true };
    intl7 = tmp3(tmp4[9]).intl;
    obj7.label = intl7.string(tmp3(tmp4[9]).t["wrDmA/"]);
    intl8 = tmp3(tmp4[9]).intl;
    obj7.subLabel = intl8.string(tmp3(tmp4[9]).t.UQbJW7);
    obj7.value = pauseDms;
    obj7.onValueChange = function onValueChange() {
      React5(!pauseDms);
    };
    items4[2] = tmp15(tmp3(tmp4[17]).TableSwitchRow, obj7);
    obj8 = {
      onPress() {
            let obj = GuildAntiRaidActionCreators;
            const result = obj.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
            let obj1 = ActionSheetActionCreatorsDefault;
            obj1.hideActionSheet("GuildIncidentActionsActionSheet");
            hasOwnProperty();
            ({ source, alertType, messageId } = analyticsData);
            obj = { guild_id: guild.id, source, raid_alert_id: messageId, raid_alert_type: alertType, intervention_type_enabled: null, intervention_type_disabled: null, duration: null };
            const obj3 = AnalyticsUtilsDefault;
            obj.intervention_type_enabled = GuildAntiRaidUtils.getEnabledInterventions(pauseInvites, pauseDms);
            obj.intervention_type_disabled = GuildAntiRaidUtils.getDisabledInterventions(pauseInvites, pauseDms);
            obj.duration = 60 * time;
            obj3.track(constants.GUILD_RAID_INTERVENTION_STATE_CHANGE, obj);
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
              obj = { content: null, key: "GuildRaidLockdownFeedbackActionSheet" };
              obj1 = { guildId: guild.id };
              obj.content = closure_2_14(GuildRaidLockdownFeedbackActionSheetDefault, obj1);
              ActionSheetActionCreators.showActionSheet(obj);
              const tmpResult = ActionSheetActionCreators;
            }
          },
      text: null,
      variant: "primary",
      size: "md",
      disabled: null
    };
    intl9 = tmp3(tmp4[9]).intl;
    obj8.text = intl9.string(tmp3(tmp4[9]).t["R3BPH+"]);
    tmp18 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || tmp2.hasTimeChanges;
    obj9 = { children: null };
    obj8.disabled = !tmp18;
    handleClose = function handleClose() {
      analyticsData(time[13]).hideActionSheet("GuildIncidentActionsActionSheet");
      _undefined();
    };
    items6 = [, ];
    items6[0] = tmp15(tmp3(tmp4[21]).Button, obj8);
    obj10 = { onPress: handleClose, text: null, variant: "secondary", size: "md" };
    intl10 = tmp3(tmp4[9]).intl;
    obj10.text = intl10.string(tmp3(tmp4[9]).t["ETE/oC"]);
    items6[1] = tmp15(tmp3(tmp4[21]).Button, obj10);
    obj9.children = items6;
    items4[3] = tmp14(tmp3(tmp4[20]).ButtonGroup, obj9);
    obj.children = items4;
    return tmp14(tmp3(tmp4[7]).ActionSheet, obj);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;