// discord_app/modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildAntiRaidUtils from "../GuildAntiRaidUtils.tsx";
import GuildAntiRaidConstants from "../GuildAntiRaidConstants.tsx";
import GuildAntiRaidActionCreators from "../GuildAntiRaidActionCreators.tsx";
import GuildRaidLockdownFeedbackActionSheetDefault from "GuildRaidLockdownFeedbackActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildIncidentsStore from "../GuildIncidentsStore.tsx";
import GuildIncidentsActionSheetStore from "GuildIncidentsActionSheetStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let onClose;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({
  resetGuildIncidentsActionSheetStore: hasOwnProperty,
  setInitialTime: metroRequire,
  setPauseDms: metroImportDefault,
  setPauseInvites: metroImportAll,
  setTime: c9,
  useGuildIncidentsActionSheetStore: c10,
} = GuildIncidentsActionSheetStore);
const getTimeframes = GuildAntiRaidConstants.getTimeframes;
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const authStore3 = createStyles.createStyles({ beta: { marginLeft: -12 } });
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let flag;
      let intl;
      let items;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = onClose(576);
      const cResult = obj.c(15);
      onClose = onClose.onClose;
      if (cResult[0] !== onClose) {
        let tmp10;
        const arr = getTimeframes();
        const ActionSheet = tmp(6708).ActionSheet;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { title: intl.string(onClose(1126).t.vKYZzc) };
          const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
          intl = tmp(1126).intl;
          const tmp12 = closure_14(BottomSheetTitleHeader, obj2);
          cResult[6] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[6];
        }
        const Group = tmp(6704).ActionSheetRow.Group;
        const mapped = arr.map((label) => {
          const obj = {
            label: label.label,
            onPress() {
              React4(label.value);
              onClose();
            },
          };
          return closure_1_14(onClose(dependencyMap[12]).ActionSheetRow, obj, label.value);
        });
        cResult[0] = onClose;
        cResult[1] = Group;
        cResult[2] = ActionSheet;
        cResult[3] = false;
        cResult[4] = mapped;
        cResult[5] = tmp10;
        tmp7 = tmp10;
        tmp6 = mapped;
        flag = false;
        tmp5 = ActionSheet;
        tmp4 = Group;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        flag = cResult[3];
        tmp6 = cResult[4];
        tmp7 = cResult[5];
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === flag) {
          let tmp14;
          if (cResult[9] === tmp6) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp5) {
            if (cResult[12] === tmp7) {
              let tmp16;
              if (cResult[13] === tmp14) {
                tmp16 = cResult[14];
              }
              return tmp16;
            }
          }
          const obj3 = { children: items };
          items = [tmp7, tmp14];
          const tmp18 = closure_15(tmp5, obj3);
          cResult[11] = tmp5;
          cResult[12] = tmp7;
          cResult[13] = tmp14;
          cResult[14] = tmp18;
          tmp16 = tmp18;
        }
      }
      const tmp15 = closure_14(tmp4, { hasIcons: flag, children: tmp6 });
      cResult[7] = tmp4;
      cResult[8] = flag;
      cResult[9] = tmp6;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
  : (onClose) => {
      let intl;
      let items;
      onClose = onClose.onClose;
      let obj = { children: items };
      const arr = getTimeframes();
      const ActionSheet = onClose(6708).ActionSheet;
      const obj2 = { title: intl.string(onClose(1126).t.vKYZzc) };
      const BottomSheetTitleHeader = onClose(6651).BottomSheetTitleHeader;
      intl = onClose(1126).intl;
      items = [closure_14(BottomSheetTitleHeader, obj2)];
      const obj3 = {
        hasIcons: false,
        children: arr.map((label) => {
          const obj = {
            label: label.label,
            onPress() {
              React4(label.value);
              onClose();
            },
          };
          return closure_1_14(onClose(dependencyMap[12]).ActionSheetRow, obj, label.value);
        }),
      };
      const Group = onClose(6704).ActionSheetRow.Group;
      items[1] = closure_14(Group, obj3);
      return closure_15(ActionSheet, obj);
    };
class GuildIncidentActionsActionSheet {
  constructor(guild) {
    let BetaTag;
    let BottomSheetTitleHeader;
    let Icon;
    let _undefined;
    let intl;
    let intl10;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items4;
    let items6;
    let obj11;
    let obj6;
    let obj7;
    let tmp17;
    guild = guild.guild;
    const analyticsData = guild.analyticsData;
    function onDurationSelectorClose() {
      let obj2;
      const obj = {
        content: authStore2(GuildIncidentActionsActionSheet, obj2),
        key: "GuildIncidentActionsActionSheet",
      };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      obj2 = { guild, analyticsData };
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
    const tmp = closure_16();
    const tmp2 = state();
    const time = tmp2.time;
    const pauseInvites = tmp2.pauseInvites;
    const pauseDms = tmp2.pauseDms;
    const hasTimeChanges = tmp2.hasTimeChanges;
    let obj = guild(time[13]);
    const items = [pauseDms];
    const stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
    let obj2 = guild(time[14]);
    const hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    let c5 = hasInvitesDisabledResult;
    let obj3 = guild(time[14]);
    const hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    let c6 = hasDMsDisabledResult;
    let obj4 = guild(time[14]);
    let result = obj4.initialLockdownDurationHours(stateFromStores);
    let c7 = result;
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants2.INVITES_DISABLED);
    }
    const items1 = [hasDMsDisabledResult, hasInvitesDisabledResult];
    const effect = pauseInvites.useEffect(() => {
      metroImportAll(c5);
      metroImportDefault(c6);
    }, items1);
    const items2 = [result];
    const effect1 = pauseInvites.useEffect(() => {
      if (!state.getState().hasTimeChanges) {
        metroRequire(c7);
      }
    }, items2);
    const items3 = [time];
    const memo = pauseInvites.useMemo(() => {
      const arr = getTimeframes();
      const found = arr.find((value) => value.value === time);
      let label;
      if (found != null) {
        label = found.label;
      }
      return label;
    }, items3);
    let obj5 = { startExpanded: true, header: closure_14(BottomSheetTitleHeader, obj6), children: items4 };
    const ActionSheet = tmp3(tmp4[9]).ActionSheet;
    obj6 = { title: intl.string(tmp3(time[11]).t.oCYAc7), leading: closure_14(BetaTag, obj7) };
    BottomSheetTitleHeader = tmp3(tmp4[10]).BottomSheetTitleHeader;
    intl = tmp3(tmp4[11]).intl;
    obj7 = { size: tmp3(time[16]).BetaSizes.SMALL, style: tmp.beta };
    BetaTag = tmp3(tmp4[16]).BetaTag;
    const TableRow = tmp3(tmp4[17]).TableRow;
    let str = memo;
    const TrailingText = tmp3(tmp4[17]).TableRow.TrailingText;
    if (memo == null) {
      str = "";
    }
    const obj8 = {
      trailing: closure_14(TrailingText, { text: str }),
      label: intl2.string(guild(time[11]).t.vKYZzc),
      arrow: true,
      onPress() {
        let obj2;
        const obj = { content: authStore2(closure_17, obj2), key: "DurationSelectionActionSheet" };
        const showActionSheet = ActionSheetActionCreators.showActionSheet;
        obj2 = { onClose: onDurationSelectorClose };
        ActionSheetActionCreators;
        showActionSheet(obj);
      },
      start: true,
      end: true,
      accessibilityLabel: intl3.string(guild(time[11]).t.vKYZzc),
      accessibilityHint: memo,
    };
    intl2 = tmp3(tmp4[11]).intl;
    intl3 = tmp3(tmp4[11]).intl;
    items4 = [closure_14(TableRow, obj8), , ,];
    const TableRowGroup = tmp3(tmp4[18]).TableRowGroup;
    const obj9 = {
      label: intl4.string(guild(time[11]).t.Uwsjn6),
      subLabel: intl5.string(guild(time[11]).t.qPJkZh),
      value: pauseInvites || hasItem,
      onValueChange() {
        metroImportAll(!pauseInvites);
      },
      disabled: hasItem,
    };
    const TableSwitchRow = tmp3(tmp4[19]).TableSwitchRow;
    intl4 = tmp3(tmp4[11]).intl;
    intl5 = tmp3(tmp4[11]).intl;
    const items5 = [closure_14(TableSwitchRow, obj9)];
    if (hasItem) {
      const obj10 = { icon: closure_14(Icon, obj11), label: intl6.string(guild(time[11]).t["9GPbsV"]) };
      const TableRow2 = tmp3(tmp4[17]).TableRow;
      obj11 = { source: analyticsData(time[20]), IconComponent: guild(time[21]).WarningIcon, variant: "secondary" };
      Icon = tmp3(tmp4[17]).TableRow.Icon;
      intl6 = tmp3(tmp4[11]).intl;
      hasItem = closure_14(TableRow2, obj10);
    }
    items5[1] = hasItem;
    items4[1] = closure_15(TableRowGroup, { hasIcons: true, children: items5 });
    const obj12 = {
      label: intl7.string(guild(time[11]).t["wrDmA/"]),
      subLabel: intl8.string(guild(time[11]).t.UQbJW7),
      value: pauseDms,
      onValueChange() {
        metroImportDefault(!pauseDms);
      },
      start: true,
      end: true,
    };
    const TableSwitchRow2 = tmp3(tmp4[19]).TableSwitchRow;
    intl7 = tmp3(tmp4[11]).intl;
    intl8 = tmp3(tmp4[11]).intl;
    items4[2] = closure_14(TableSwitchRow2, obj12);
    const ButtonGroup = tmp3(tmp4[22]).ButtonGroup;
    const obj13 = {
      onPress() {
        let alertType;
        let messageId;
        let obj4;
        let obj5;
        let obj7;
        let source;
        const obj = GuildAntiRaidActionCreators;
        const result = obj.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet("GuildIncidentActionsActionSheet");
        hasOwnProperty();
        ({ source, alertType, messageId } = analyticsData);
        const obj3 = {
          guild_id: guild.id,
          source,
          raid_alert_id: messageId,
          raid_alert_type: alertType,
          intervention_type_enabled: obj4.getEnabledInterventions(pauseInvites, pauseDms),
          intervention_type_disabled: obj5.getDisabledInterventions(pauseInvites, pauseDms),
          duration: 60 * time,
        };
        const track = AnalyticsUtilsDefault.track;
        const GUILD_RAID_INTERVENTION_STATE_CHANGE = constants.GUILD_RAID_INTERVENTION_STATE_CHANGE;
        AnalyticsUtilsDefault;
        obj4 = GuildAntiRaidUtils;
        obj5 = GuildAntiRaidUtils;
        track(GUILD_RAID_INTERVENTION_STATE_CHANGE, obj3);
        const tmp12 = (!c5 && !c6) || pauseInvites || pauseDms;
        if (!tmp12) {
          const obj6 = {
            content: authStore2(GuildRaidLockdownFeedbackActionSheetDefault, obj7),
            key: "GuildRaidLockdownFeedbackActionSheet",
          };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          obj7 = { guildId: guild.id };
          ActionSheetActionCreators;
          showActionSheet(obj6);
        }
      },
      text: intl9.string(guild(time[11]).t["R3BPH+"]),
      variant: "primary",
      size: "md",
      disabled: !tmp17,
    };
    const Button = tmp3(tmp4[23]).Button;
    intl9 = tmp3(tmp4[11]).intl;
    function handleClose() {
      const obj = analyticsData(time[15]);
      obj.hideActionSheet("GuildIncidentActionsActionSheet");
      _undefined();
    }
    const obj14 = { children: items6 };
    tmp17 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || hasTimeChanges;
    items6 = [closure_14(Button, obj13)];
    const obj15 = {
      onPress: handleClose,
      text: intl10.string(guild(time[11]).t["ETE/oC"]),
      variant: "secondary",
      size: "md",
    };
    const Button2 = tmp3(tmp4[23]).Button;
    intl10 = tmp3(tmp4[11]).intl;
    items6[1] = closure_14(Button2, obj15);
    items4[3] = closure_15(ButtonGroup, obj14);
    return closure_15(ActionSheet, obj5);
  }
}
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;
