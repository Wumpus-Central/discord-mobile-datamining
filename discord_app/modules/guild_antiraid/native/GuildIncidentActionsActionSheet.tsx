// === Module 11389: DurationSelectionActionSheet ===

// Module 11389 (DurationSelectionActionSheet)
import closure_3 from "noop" /* 19 */;
import closure_4 from "computeAlertSettings" /* 9908 */;
import useGuildIncidentsActionSheetStore from "useGuildIncidentsActionSheetStore" /* 11390 */;
import { getTimeframes } from "GUILD_REPORT_RAID_MOBILE_KEY" /* 8276 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
function DurationSelectionActionSheet(onClose) {
  onClose = onClose.onClose;
  let obj = { children: null };
  obj = { title: null };
  const intl = onClose(1236).intl;
  obj[0] = intl.string(onClose(1236).t.vKYZzc);
  const items = [callback2(onClose(5502).BottomSheetTitleHeader, obj), ];
  obj = {
    hasIcons: false,
    children: getTimeframes().map((label) => {
      closure_0 = label;
      return closure_1_14(onClose(closure_1_2[10]).ActionSheetRow, {
        label: label.label,
        onPress() {
          closure_2_9(label.value);
          label();
        }
      }, label.value);
    })
  };
  items[1] = callback2(onClose(5872).ActionSheetRow.Group, obj);
  obj[0] = items;
  return callback3(onClose(5870).ActionSheet, obj);
}
({ resetGuildIncidentsActionSheetStore: c5, setInitialTime: closure_6, setPauseDms: error, setPauseInvites: closure_8, setTime: c9, useGuildIncidentsActionSheetStore: c10 } = useGuildIncidentsActionSheetStore);
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles({ beta: { marginLeft: -12 } });
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
    onDurationSelectorClose = function onDurationSelectorClose(c5) {
      let obj = guild(time[13]);
      obj = { content: closure_1_14(closure_1_18, obj), key: "GuildIncidentActionsActionSheet" };
      obj = { guild, analyticsData };
      obj.showActionSheet(obj);
    };
    tmp = closure_16();
    tmp2 = closure_10();
    time = tmp2.time;
    pauseInvites = tmp2.pauseInvites;
    pauseDms = tmp2.pauseDms;
    tmp3 = guild;
    tmp4 = time;
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = pauseDms;
    stateFromStores = obj.useStateFromStores(items, () => pauseDms.getGuildIncident(guild.id));
    obj2 = require("DATE_CONFIG");
    hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    closure_5 = hasInvitesDisabledResult;
    obj3 = require("DATE_CONFIG");
    hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    closure_6 = hasDMsDisabledResult;
    obj4 = require("DATE_CONFIG");
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
      onDurationSelectorClose(c5);
      _undefined3(c6);
    }, items1);
    items2 = [];
    items2[0] = result;
    effect1 = pauseInvites.useEffect(() => {
      if (!closure_1_10.getState().hasTimeChanges) {
        _undefined2(c7);
      }
    }, items2);
    items3 = [];
    items3[0] = time;
    memo = pauseInvites.useMemo(() => {
      const found = closure_1_11().find((value) => value.value === closure_2);
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
    intl = require("getSystemLocale").intl;
    obj1[0] = intl.string(require("getSystemLocale").t.oCYAc7);
    obj2 = { size: require("Button").BetaSizes.SMALL, style: tmp.beta };
    obj1[1] = jsx(require("Button").BetaTag, obj2);
    obj[1] = jsx(require("RedesignBottomSheetTitleHeaderBase").BottomSheetTitleHeader, obj1);
    str = memo;
    if (memo == null) {
      str = "";
    }
    obj3 = { trailing: tmp15(require("TableRowInner").TableRow.TrailingText, { text: str }), label: null, arrow: true, onPress: null, start: true, end: true, accessibilityLabel: null, accessibilityHint: null };
    intl2 = require("getSystemLocale").intl;
    obj3[1] = intl2.string(require("getSystemLocale").t.vKYZzc);
    obj3[3] = function onPress() {
      let obj = guild(time[13]);
      obj = { content: closure_1_14(closure_1_17, obj), key: "DurationSelectionActionSheet" };
      obj = { onClose: onDurationSelectorClose };
      obj.showActionSheet(obj);
    };
    intl3 = require("getSystemLocale").intl;
    obj3[6] = intl3.string(require("getSystemLocale").t.vKYZzc);
    obj3[7] = memo;
    items4 = [, , , ];
    items4[0] = tmp15(require("TableRowInner").TableRow, obj3);
    obj4 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
    intl4 = require("getSystemLocale").intl;
    obj4[0] = intl4.string(require("getSystemLocale").t.Uwsjn6);
    intl5 = require("getSystemLocale").intl;
    obj4[1] = intl5.string(require("getSystemLocale").t.qPJkZh);
    tmp16 = pauseInvites;
    if (!pauseInvites) {
      tmp16 = hasItem;
    }
    obj4[2] = tmp16;
    obj4[3] = function onValueChange() {
      onDurationSelectorClose(!pauseInvites);
    };
    obj4[4] = hasItem;
    items5 = [, ];
    items5[0] = tmp15(require("TableSwitchRow").TableSwitchRow, obj4);
    if (hasItem) {
      obj5 = { icon: null, label: null };
      obj6 = { source: null, IconComponent: null, variant: "secondary" };
      tmp17 = analyticsData;
      obj6[0] = require("registerAsset");
      obj6[1] = require("WarningIcon").WarningIcon;
      obj5[0] = tmp15(require("TableRowInner").TableRow.Icon, obj6);
      intl6 = require("getSystemLocale").intl;
      obj5[1] = intl6.string(require("getSystemLocale").t["9GPbsV"]);
      hasItem = tmp15(require("TableRowInner").TableRow, obj5);
    }
    items5[1] = hasItem;
    items4[1] = tmp14(require("TableRowGroupTitle").TableRowGroup, { hasIcons: true, children: items5 });
    obj7 = { label: null, subLabel: null, value: null, onValueChange: null, start: true, end: true };
    intl7 = require("getSystemLocale").intl;
    obj7[0] = intl7.string(require("getSystemLocale").t["wrDmA/"]);
    intl8 = require("getSystemLocale").intl;
    obj7[1] = intl8.string(require("getSystemLocale").t.UQbJW7);
    obj7[2] = pauseDms;
    obj7[3] = function onValueChange() {
      _undefined3(!pauseDms);
    };
    items4[2] = tmp15(require("TableSwitchRow").TableSwitchRow, obj7);
    obj8 = {
      onPress() {
            let obj = guild(time[22]);
            const result = obj.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
            obj1 = analyticsData(time[13]);
            obj1.hideActionSheet("GuildIncidentActionsActionSheet");
            _undefined();
            ({ source, alertType, messageId } = analyticsData);
            obj = { guild_id: guild.id, source, raid_alert_id: messageId, raid_alert_type: alertType, intervention_type_enabled: null, intervention_type_disabled: null, duration: null };
            const obj3 = analyticsData(time[23]);
            const tmp = guild;
            const tmp3 = guild;
            const tmp4 = pauseInvites;
            const tmp5 = pauseDms;
            const tmp7 = analyticsData;
            obj[4] = guild(time[12]).getEnabledInterventions(pauseInvites, pauseDms);
            const obj5 = guild(time[12]);
            obj[5] = guild(time[12]).getDisabledInterventions(pauseInvites, pauseDms);
            obj[6] = 60 * time;
            obj3.track(closure_1_12.GUILD_RAID_INTERVENTION_STATE_CHANGE, obj);
            let tmp11 = !_undefined;
            if (!_undefined) {
              tmp11 = !c6;
            }
            if (!tmp11) {
              tmp11 = tmp4;
            }
            if (!tmp11) {
              tmp11 = tmp5;
            }
            if (!tmp11) {
              obj = { content: null, key: "GuildRaidLockdownFeedbackActionSheet" };
              obj1 = { guildId: null };
              obj1[0] = tmp3.id;
              obj[0] = closure_1_14(tmp7(tmp2[24]), obj1);
              tmp(tmp2[13]).showActionSheet(obj);
              const tmpResult = tmp(tmp2[13]);
            }
          },
      text: null,
      variant: "primary",
      size: "md",
      disabled: null
    };
    intl9 = require("getSystemLocale").intl;
    obj8[1] = intl9.string(require("getSystemLocale").t["R3BPH+"]);
    tmp18 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || tmp2.hasTimeChanges;
    obj9 = { children: null };
    obj8[4] = !tmp18;
    handleClose = function handleClose() {
      analyticsData(time[13]).hideActionSheet("GuildIncidentActionsActionSheet");
      _undefined();
    };
    items6 = [, ];
    items6[0] = tmp15(require("Button").Button, obj8);
    obj10 = { onPress: handleClose, text: null, variant: "secondary", size: "md" };
    intl10 = require("getSystemLocale").intl;
    obj10[1] = intl10.string(require("getSystemLocale").t["ETE/oC"]);
    items6[1] = tmp15(require("Button").Button, obj10);
    obj9[0] = items6;
    items4[3] = tmp14(require("ButtonGroup").ButtonGroup, obj9);
    obj[2] = items4;
    return tmp14(require("ActionSheet").ActionSheet, obj);
  }
}
let result = require("set").fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;