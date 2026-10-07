// === Module 11452: GuildIncidentActionsActionSheet ===

// Module 11452 (GuildIncidentActionsActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 7696 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11454 */;
import GuildRaidLockdownFeedbackActionSheetDefault from "GuildRaidLockdownFeedbackActionSheet" /* 11456 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 11173 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const GuildIncidentsActionSheetStore = fn(11453);
({ resetGuildIncidentsActionSheetStore: hasOwnProperty, setInitialTime: metroRequire, setPauseDms: closure_7, setPauseInvites: closure_8, setTime: closure_9, useGuildIncidentsActionSheetStore: c10 } = GuildIncidentsActionSheetStore);
const getTimeframes = fn(7697).getTimeframes;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
const value2 = createStyles.createStyles({ beta: { marginLeft: -12 } });
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let map = onClose;
  let Group = dependencyMap;
  const cResult = onClose(576).c(15);
  onClose = onClose.onClose;
  if (cResult[0] !== onClose) {
    const ActionSheet = map(6708).ActionSheet;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { title: null };
      const intl = map(1126).intl;
      obj2.title = intl.string(map(1126).t.vKYZzc);
      const tmp11 = closure_14(map(6651).BottomSheetTitleHeader, obj2);
      cResult[6] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[6];
    }
    Group = map(6704).ActionSheetRow.Group;
    map = getTimeframes().map;
    const mapped = map((label) => closure_1_14(onClose(dependencyMap[12]).ActionSheetRow, {
      label: label.label,
      onPress() {
        options(label.value);
        onClose();
      }
    }, label.value));
    cResult[0] = onClose;
    cResult[1] = Group;
    cResult[2] = ActionSheet;
    cResult[3] = false;
    cResult[4] = mapped;
    cResult[5] = tmp9;
    const arr = getTimeframes();
  } else {
    if (cResult[7] === cResult[1]) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          let tmp17 = cResult[10];
        }
        if (cResult[11] === tmp3) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp17) {
              let tmp20 = cResult[14];
            }
            return tmp20;
          }
        }
        const obj3 = { children: null };
        const items = [tmp6, tmp17];
        obj3.children = items;
        const tmp22 = closure_15(tmp3, obj3);
        cResult[11] = tmp3;
        cResult[12] = tmp6;
        cResult[13] = tmp17;
        cResult[14] = tmp22;
        tmp20 = tmp22;
      }
    }
    const obj4 = { hasIcons: cResult[3], children: cResult[4] };
    const tmp19 = closure_14(cResult[1], obj4);
    cResult[7] = cResult[1];
    cResult[8] = cResult[3];
    cResult[9] = cResult[4];
    cResult[10] = tmp19;
    tmp17 = tmp19;
  }
  const obj = onClose(576);
}) : ((onClose) => {
  onClose = onClose.onClose;
  const obj = { children: null };
  const obj2 = { title: null };
  const intl = onClose(1126).intl;
  obj2.title = intl.string(onClose(1126).t.vKYZzc);
  const items = [closure_14(onClose(6651).BottomSheetTitleHeader, obj2), ];
  const arr = getTimeframes();
  items[1] = closure_14(onClose(6704).ActionSheetRow.Group, {
    hasIcons: false,
    children: getTimeframes().map((label) => closure_1_14(onClose(dependencyMap[12]).ActionSheetRow, {
      label: label.label,
      onPress() {
        options(label.value);
        onClose();
      }
    }, label.value))
  });
  obj.children = items;
  return closure_15(onClose(6708).ActionSheet, obj);
});
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
      const obj2 = { content: state(GuildIncidentActionsActionSheet, { guild, analyticsData }), key: "GuildIncidentActionsActionSheet" };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    tmp = closure_16();
    tmp2 = closure_10();
    time = tmp2.time;
    pauseInvites = tmp2.pauseInvites;
    pauseDms = tmp2.pauseDms;
    tmp3 = guild;
    tmp4 = time;
    obj = guild(time[13]);
    items = [];
    items[0] = pauseDms;
    stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
    obj2 = guild(time[14]);
    hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    closure_5 = hasInvitesDisabledResult;
    obj3 = guild(time[14]);
    hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    closure_6 = hasDMsDisabledResult;
    obj4 = guild(time[14]);
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
      closure_2_8(c5);
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
    intl = tmp3(tmp4[11]).intl;
    obj16.title = intl.string(tmp3(tmp4[11]).t.oCYAc7);
    obj17 = { size: tmp3(tmp4[16]).BetaSizes.SMALL, style: tmp.beta };
    obj16.leading = jsx(tmp3(tmp4[16]).BetaTag, obj17);
    obj1.header = jsx(tmp3(tmp4[10]).BottomSheetTitleHeader, obj16);
    str = memo;
    if (memo == null) {
      str = "";
    }
    obj18 = { trailing: tmp15(tmp3(tmp4[17]).TableRow.TrailingText, { text: str }), label: null, arrow: true, onPress: null, start: true, end: true, accessibilityLabel: null, accessibilityHint: null };
    intl2 = tmp3(tmp4[11]).intl;
    obj18.label = intl2.string(tmp3(tmp4[11]).t.vKYZzc);
    obj18.onPress = function onPress() {
      const obj2 = { content: state(closure_17, { onClose: onDurationSelectorClose }), key: "DurationSelectionActionSheet" };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    intl3 = tmp3(tmp4[11]).intl;
    obj18.accessibilityLabel = intl3.string(tmp3(tmp4[11]).t.vKYZzc);
    obj18.accessibilityHint = memo;
    items4 = [, , , ];
    items4[0] = tmp15(tmp3(tmp4[17]).TableRow, obj18);
    obj19 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
    intl4 = tmp3(tmp4[11]).intl;
    obj19.label = intl4.string(tmp3(tmp4[11]).t.Uwsjn6);
    intl5 = tmp3(tmp4[11]).intl;
    obj19.subLabel = intl5.string(tmp3(tmp4[11]).t.qPJkZh);
    tmp16 = pauseInvites;
    if (!pauseInvites) {
      tmp16 = hasItem;
    }
    obj19.value = tmp16;
    obj19.onValueChange = function onValueChange() {
      closure_2_8(!pauseInvites);
    };
    obj19.disabled = hasItem;
    items5 = [, ];
    items5[0] = tmp15(tmp3(tmp4[19]).TableSwitchRow, obj19);
    if (hasItem) {
      obj20 = { icon: null, label: null };
      obj21 = { source: null, IconComponent: null, variant: "secondary" };
      tmp17 = analyticsData;
      obj21.source = analyticsData(tmp4[20]);
      obj21.IconComponent = tmp3(tmp4[21]).WarningIcon;
      obj20.icon = tmp15(tmp3(tmp4[17]).TableRow.Icon, obj21);
      intl6 = tmp3(tmp4[11]).intl;
      obj20.label = intl6.string(tmp3(tmp4[11]).t["9GPbsV"]);
      hasItem = tmp15(tmp3(tmp4[17]).TableRow, obj20);
    }
    items5[1] = hasItem;
    items4[1] = tmp14(tmp3(tmp4[18]).TableRowGroup, { hasIcons: true, children: items5 });
    obj22 = { label: null, subLabel: null, value: null, onValueChange: null, start: true, end: true };
    intl7 = tmp3(tmp4[11]).intl;
    obj22.label = intl7.string(tmp3(tmp4[11]).t["wrDmA/"]);
    intl8 = tmp3(tmp4[11]).intl;
    obj22.subLabel = intl8.string(tmp3(tmp4[11]).t.UQbJW7);
    obj22.value = pauseDms;
    obj22.onValueChange = function onValueChange() {
      React5(!pauseDms);
    };
    items4[2] = tmp15(tmp3(tmp4[19]).TableSwitchRow, obj22);
    obj23 = {
      onPress() {
            const result = GuildAntiRaidActionCreators.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
            ActionSheetActionCreatorsDefault.hideActionSheet("GuildIncidentActionsActionSheet");
            hasOwnProperty();
            ({ source, alertType, messageId } = analyticsData);
            const obj4 = { guild_id: guild.id, source, raid_alert_id: messageId, raid_alert_type: alertType, intervention_type_enabled: null, intervention_type_disabled: null, duration: null };
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
              obj7.content = state(GuildRaidLockdownFeedbackActionSheetDefault, obj8);
              ActionSheetActionCreators.showActionSheet(obj7);
              const tmpResult = ActionSheetActionCreators;
            }
          },
      text: null,
      variant: "primary",
      size: "md",
      disabled: null
    };
    intl9 = tmp3(tmp4[11]).intl;
    obj23.text = intl9.string(tmp3(tmp4[11]).t["R3BPH+"]);
    tmp18 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || tmp2.hasTimeChanges;
    obj24 = { children: null };
    obj23.disabled = !tmp18;
    handleClose = function handleClose() {
      analyticsData(time[15]).hideActionSheet("GuildIncidentActionsActionSheet");
      _undefined();
    };
    items6 = [, ];
    items6[0] = tmp15(tmp3(tmp4[23]).Button, obj23);
    obj25 = { onPress: handleClose, text: null, variant: "secondary", size: "md" };
    intl10 = tmp3(tmp4[11]).intl;
    obj25.text = intl10.string(tmp3(tmp4[11]).t["ETE/oC"]);
    items6[1] = tmp15(tmp3(tmp4[23]).Button, obj25);
    obj24.children = items6;
    items4[3] = tmp14(tmp3(tmp4[22]).ButtonGroup, obj24);
    obj1.children = items4;
    return tmp14(tmp3(tmp4[9]).ActionSheet, obj1);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;