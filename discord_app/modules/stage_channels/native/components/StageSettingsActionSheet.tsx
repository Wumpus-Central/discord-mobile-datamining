// discord_app/modules/stage_channels/native/components/StageSettingsActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StageChannelPermissions from "../../StageChannelPermissions.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import StageInstanceStore from "../../StageInstanceStore.tsx";

require = fn;
const View = fn(17).View;
const STAGE_SETTINGS_SHEET_KEY = fn(5414).STAGE_SETTINGS_SHEET_KEY;
const Constants = fn(1074);
({ ChannelSettingsSections: c10, UserSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { container: { marginTop: 8 }, icon: null, warning: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.icon = createStyles;
createStyles.warning = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default function StageSettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  let stateFromStores;
  const tmp = closure_14();
  let obj = channelId(stateFromStores[12]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj1 = channelId(stateFromStores[12]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () =>
    PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores),
  );
  let obj2 = channelId(stateFromStores[14]);
  const isStageSpeakingDisabledForCurrentUser = obj2.useIsStageSpeakingDisabledForCurrentUser();
  let obj3 = channelId(stateFromStores[12]);
  const items2 = [ChannelRTCStore];
  const items3 = [channelId];
  const stateFromStores2 = obj3.useStateFromStores(
    items2,
    () => ChannelRTCStore.getSelectedParticipant(channelId),
    items3,
  );
  let obj4 = channelId(stateFromStores[12]);
  const items4 = [StageInstanceStore];
  const items5 = [stateFromStores];
  const stateFromStores3 = obj4.useStateFromStores(items4, () =>
    StageInstanceStore.getStageInstanceByChannel(channelId),
  );
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
    }
  }, items5);
  let tmp11Result1 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.container, children: null };
    let tmp14 = null;
    if (stateFromStores1) {
      tmp14 = null;
      if (null == stateFromStores2) {
        tmp14 = null;
        if (!isStageSpeakingDisabledForCurrentUser) {
          if (null != stateFromStores3) {
            const intl2 = tmp2(tmp3[17]).intl;
            let stringResult = intl2.string(tmp2(tmp3[17]).t["5BKP4y"]);
          } else {
            const intl = tmp2(tmp3[17]).intl;
            stringResult = intl.string(tmp2(tmp3[17]).t.s8mM8A);
          }
          obj = { label: stringResult, leading: null, onPress: null };
          obj1 = { source: onOpenRTCDebugOverlay(tmp3[19]), color: tmp.icon.color };
          obj.leading = closure_12(tmp2(tmp3[18]).Icon, obj1);
          obj.onPress = function onPress() {
            if (null != stateFromStores) {
              const result = StageChannelActionCreatorExtras.openStageChannelSettings(tmp);
              ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          };
          let tmp11Result = closure_12(tmp2(tmp3[16]).FormRow, obj);
        }
      }
    }
    const items6 = [tmp14, , , ,];
    obj2 = { label: null, leading: null, onPress: null };
    const intl3 = tmp2(tmp3[17]).intl;
    obj2.label = intl3.string(tmp2(tmp3[17]).t.NiTd0e);
    obj3 = { source: onOpenRTCDebugOverlay(tmp3[21]), color: tmp.icon.color };
    obj2.leading = closure_12(tmp2(tmp3[18]).Icon, obj3);
    obj2.onPress = function onPress() {
      channelId(stateFromStores[22]);
      const obj = { screen: constants.VOICE };
      obj.openUserSettings(obj);
      onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
    };
    items6[1] = closure_12(tmp2(tmp3[16]).FormRow, obj2);
    obj4 = { label: null, leading: null, onPress: null };
    const intl4 = tmp2(tmp3[17]).intl;
    obj4.label = intl4.string(tmp2(tmp3[17]).t.h850Ss);
    const obj5 = { source: onOpenRTCDebugOverlay(tmp3[23]), color: tmp.icon.color };
    obj4.leading = closure_12(tmp2(tmp3[18]).Icon, obj5);
    obj4.onPress = function onPress() {
      if (null != stateFromStores) {
        ChannelSettingsActionCreatorsDefault.setSection(constants.NOTIFICATIONS);
        ChannelSettingsActionCreatorsDefault.open(tmp.id);
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
      }
    };
    items6[2] = closure_12(tmp2(tmp3[16]).FormRow, obj4);
    tmp11Result = null != onOpenRTCDebugOverlay;
    if (tmp11Result) {
      const obj6 = { label: null, leading: null, onPress: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj6.label = intl5.string(tmp2(tmp3[17]).t.X8bCMe);
      const obj7 = { source: tmp18(tmp3[25]), color: tmp.icon.color };
      obj6.leading = closure_12(tmp2(tmp3[18]).Icon, obj7);
      obj6.onPress = function onPress() {
        if (onOpenRTCDebugOverlay != null) {
          tmp();
        }
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
      };
      tmp11Result = closure_12(tmp2(tmp3[16]).FormRow, obj6);
    }
    const obj8 = { keyboardShouldPersistTaps: "always", children: null };
    items6[3] = tmp11Result;
    const obj9 = { label: null, leading: null, onPress: null };
    const obj10 = { text: null, style: null };
    const intl6 = tmp2(tmp3[17]).intl;
    obj10.text = intl6.string(tmp2(tmp3[17]).t["+78Pfm"]);
    obj10.style = tmp.warning;
    obj9.label = closure_12(tmp2(tmp3[16]).FormLabel, obj10);
    const obj11 = {
      color: onOpenRTCDebugOverlay(tmp3[10]).unsafe_rawColors.RED_400,
      source: onOpenRTCDebugOverlay(tmp3[26]),
    };
    obj9.leading = closure_12(tmp2(tmp3[18]).Icon, obj11);
    obj9.onPress = function onPress() {
      if (null != stateFromStores) {
        const result = ReportModals.showReportModalForStageChannel(tmp);
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
      }
    };
    items6[4] = closure_12(tmp2(tmp3[16]).FormRow, obj9);
    obj.children = items6;
    obj8.children = closure_13(View, obj);
    tmp11Result1 = closure_12(tmp2(tmp3[15]).ActionSheet, obj8);
  }
  return tmp11Result1;
}
