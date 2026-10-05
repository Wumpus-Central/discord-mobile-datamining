// === Module 17251: VoicePanelSettingsOverview ===

// Module 17251 (VoicePanelSettingsOverview)
import LogAggregator from "LogAggregator" /* 7 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl18 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import CallConstants from "CallConstants" /* 4911 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import LockIcon from "LockIcon" /* 5879 */;
import TableRow6 from "TableRow" /* 5993 */;
import TableRowIcon7 from "TableRowIcon" /* 5999 */;
import TableRowArrow from "TableRowArrow" /* 6000 */;
import TableSwitchRow3 from "TableSwitchRow" /* 6698 */;
import showShareActionSheet from "showShareActionSheet" /* 8038 */;
import FormComponents from "FormComponents" /* 9334 */;
import useIsSecureFramesVerified from "useIsSecureFramesVerified" /* 9345 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9366 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9368 */;
import useIsSecureFramesUIEnabled from "useIsSecureFramesUIEnabled" /* 9384 */;
import ShieldLockIcon2 from "ShieldLockIcon" /* 9431 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9656 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10062 */;
import AssetRegistryDefault from "AssetRegistry" /* 12728 */;
import WrenchIcon from "WrenchIcon" /* 15389 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 17249 */;
import getChannelInfoSubtitleDefault from "getChannelInfoSubtitle" /* 17252 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9065 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let map1;
let obj2;
({ AnalyticsSections: map1, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = Constants);
const isStreamParticipant = CallConstants.isStreamParticipant;
let closure_17 = SecureFramesConstants.SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let obj = { headerContainer: { alignItems: "center" }, channelTitleWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 }, channelTitle: { textAlign: "center" }, channelSubtitle: { marginTop: 4, marginHorizontal: 16, textAlign: "center" }, secureFrames: obj2, secureFramesIcon: { marginStart: 4 } };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 4, gap: 4 };
let closure_21 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  const obj = guildId(576);
  const cResult = obj.c(33);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const tmp4 = closure_21();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let tmp9;
    let tmp12;
    let tmp11;
    let tmp16;
    let tmp18;
    if (cResult[2] === guildId) {
      tmp7 = cResult[3];
    }
    const tmpResult = guildId(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelStore];
      cResult[4] = items1;
      tmp9 = items1;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== channelId) {
      const fn2 = function b() {
        return ChannelStore.getChannel(channelId);
      };
      const items2 = [channelId];
      cResult[5] = channelId;
      cResult[6] = fn2;
      cResult[7] = items2;
      tmp12 = items2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
    }
    const tmpResult4 = guildId(504);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11, tmp12);
    const tmp15 = channelId(5043)(stateFromStores1);
    if (cResult[8] !== channelId) {
      const obj2 = { channelId };
      cResult[8] = channelId;
      cResult[9] = obj2;
      tmp16 = obj2;
    } else {
      tmp16 = cResult[9];
    }
    const tmpResult5 = guildId(9384);
    const isSecureFramesUIEnabled = tmpResult5.useIsSecureFramesUIEnabled(tmp16);
    if (cResult[10] !== channelId) {
      const obj3 = { channelId };
      cResult[10] = channelId;
      cResult[11] = obj3;
      tmp18 = obj3;
    } else {
      tmp18 = cResult[11];
    }
    const tmpResult6 = guildId(9345);
    const isCallSecureFramesVerified = tmpResult6.useIsCallSecureFramesVerified(tmp18);
    if (cResult[12] === tmp15) {
      let tmp20;
      if (cResult[13] === tmp4.channelTitle) {
        tmp20 = cResult[14];
      }
      if (cResult[15] === isCallSecureFramesVerified) {
        let tmp23;
        if (cResult[16] === tmp4.secureFramesIcon) {
          tmp23 = cResult[17];
        }
        if (cResult[18] === tmp4.channelTitleWrapper) {
          if (cResult[19] === tmp20) {
            let tmp26;
            if (cResult[20] === tmp23) {
              tmp26 = cResult[21];
            }
            if (cResult[22] === stateFromStores) {
              let tmp29;
              if (cResult[23] === tmp4.channelSubtitle) {
                tmp29 = cResult[24];
              }
              if (cResult[25] === isSecureFramesUIEnabled) {
                let tmp32;
                if (cResult[26] === tmp4.secureFrames) {
                  tmp32 = cResult[27];
                }
                if (cResult[28] === tmp4.headerContainer) {
                  if (cResult[29] === tmp26) {
                    if (cResult[30] === tmp29) {
                      let tmp37;
                      if (cResult[31] === tmp32) {
                        tmp37 = cResult[32];
                      }
                      return tmp37;
                    }
                  }
                }
                const obj4 = { style: tmp4.headerContainer, children: items3 };
                items3 = [tmp26, tmp29, tmp32];
                const tmp39 = closure_19(channelId(5976), obj4);
                cResult[28] = tmp4.headerContainer;
                cResult[29] = tmp26;
                cResult[30] = tmp29;
                cResult[31] = tmp32;
                cResult[32] = tmp39;
                tmp37 = tmp39;
              }
              let tmp33 = isSecureFramesUIEnabled;
              if (tmp33) {
                const obj5 = { style: tmp4.secureFrames, children: items4 };
                items4 = [, ];
                const tmp14Result = channelId(5976);
                items4[0] = closure_18(guildId(5879).LockIcon, { size: "xxs", color: "status-positive" });
                const obj6 = { variant: "text-xs/medium", color: "status-positive", children: intl2.string(guildId(1126).t["3BogKe"]) };
                const Text = tmp(4886).Text;
                intl2 = tmp(1126).intl;
                items4[1] = closure_18(Text, obj6);
                tmp33 = closure_19(tmp14Result, obj5);
              }
              cResult[25] = isSecureFramesUIEnabled;
              cResult[26] = tmp4.secureFrames;
              cResult[27] = tmp33;
              tmp32 = tmp33;
            }
            const obj7 = { style: tmp4.channelSubtitle, variant: "text-sm/medium", accessibilityRole: "summary", children: stateFromStores };
            const tmp31 = closure_18(guildId(4886).Text, obj7);
            cResult[22] = stateFromStores;
            cResult[23] = tmp4.channelSubtitle;
            cResult[24] = tmp31;
            tmp29 = tmp31;
          }
        }
        const obj8 = { style: tmp4.channelTitleWrapper, children: items5 };
        items5 = [tmp20, tmp23];
        const tmp28 = closure_19(channelId(5976), obj8);
        cResult[18] = tmp4.channelTitleWrapper;
        cResult[19] = tmp20;
        cResult[20] = tmp23;
        cResult[21] = tmp28;
        tmp26 = tmp28;
      }
      let tmp24 = isCallSecureFramesVerified;
      if (tmp24) {
        const obj9 = { style: tmp4.secureFramesIcon, size: "xs", accessibilityLabel: intl.string(guildId(1126).t.mR9cf3) };
        const ShieldLockIcon = tmp(9431).ShieldLockIcon;
        intl = tmp(1126).intl;
        tmp24 = closure_18(ShieldLockIcon, obj9);
      }
      cResult[15] = isCallSecureFramesVerified;
      cResult[16] = tmp4.secureFramesIcon;
      cResult[17] = tmp24;
      tmp23 = tmp24;
    }
    const obj10 = { style: tmp4.channelTitle, variant: "heading-lg/bold", lineClamp: 1, accessibilityRole: "header", children: tmp15 };
    const tmp22 = closure_18(guildId(4886).Text, obj10);
    cResult[12] = tmp15;
    cResult[13] = tmp4.channelTitle;
    cResult[14] = tmp22;
    tmp20 = tmp22;
  }
  const fn = function l() {
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, guildId);
    const substr = voiceStatesForChannelAlt.slice(0, 2);
    const mapped = substr.map((user) => user.user);
    return getChannelInfoSubtitleDefault(guildId, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
  };
  cResult[1] = channelId;
  cResult[2] = guildId;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  let channelId;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  ({ guildId: require, channelId } = arg0);
  const tmp = closure_21();
  const items = [SortedVoiceStateStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, require);
    const substr = voiceStatesForChannelAlt.slice(0, 2);
    const mapped = substr.map((user) => user.user);
    return getChannelInfoSubtitleDefault(require, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
  });
  const items1 = [ChannelStore];
  const items2 = [channelId];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  const tmp7 = channelId(5043)(stateFromStores1);
  const obj3 = useIsSecureFramesUIEnabled;
  let isSecureFramesUIEnabled = obj3.useIsSecureFramesUIEnabled({ channelId });
  const obj4 = useIsSecureFramesVerified;
  let isCallSecureFramesVerified = obj4.useIsCallSecureFramesVerified({ channelId });
  const obj5 = { style: tmp.headerContainer, children: items4 };
  const obj6 = { style: tmp.channelTitleWrapper, children: items3 };
  items3 = [, ];
  const obj7 = { style: tmp.channelTitle, variant: "heading-lg/bold", lineClamp: 1, accessibilityRole: "header", children: tmp7 };
  const tmp11 = channelId(5976);
  const tmp12 = channelId(5976);
  items3[0] = closure_18(Text_Text.Text, obj7);
  if (isCallSecureFramesVerified) {
    const obj8 = { style: tmp.secureFramesIcon, size: "xs", accessibilityLabel: intl.string(intl18.t.mR9cf3) };
    const ShieldLockIcon = ShieldLockIcon2.ShieldLockIcon;
    intl = intl18.intl;
    isCallSecureFramesVerified = closure_18(ShieldLockIcon, obj8);
  }
  items3[1] = isCallSecureFramesVerified;
  items4 = [closure_19(tmp12, obj6), , ];
  const obj9 = { style: tmp.channelSubtitle, variant: "text-sm/medium", accessibilityRole: "summary", children: stateFromStores };
  items4[1] = closure_18(Text_Text.Text, obj9);
  if (isSecureFramesUIEnabled) {
    const obj10 = { style: tmp.secureFrames, children: items5 };
    items5 = [, ];
    const tmp6Result = channelId(5976);
    items5[0] = closure_18(LockIcon.LockIcon, { size: "xxs", color: "status-positive" });
    const obj11 = { variant: "text-xs/medium", color: "status-positive", children: intl2.string(intl18.t["3BogKe"]) };
    const Text = Text_Text.Text;
    intl2 = intl18.intl;
    items5[1] = closure_18(Text, obj11);
    isSecureFramesUIEnabled = closure_19(tmp6Result, obj10);
  }
  items4[2] = isSecureFramesUIEnabled;
  return closure_19(tmp11, obj5);
});
let closure_22 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TableRowIcon;
  let first;
  let intl;
  let obj3;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      let intl;
      const items = [closure_1_15];
      const obj = LogAggregator;
      const json = obj.stringify(items);
      if ("" === json) {
        const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: intl.string(intl18.t["i+9VWy"]) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl18.intl;
        open(obj2);
      } else {
        const tmpResult = VoicePanelSettingsActionCreators;
        const result = tmpResult.closeVoicePanelSettingsActionSheet();
        const obj3 = { message: json };
        const tmpResult2 = showShareActionSheet;
        tmpResult2.showShareActionSheet(obj3, "Activity Logs");
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { onPress: first, icon: authStore4(TableRowIcon, obj3), label: intl.string(intl18.t.iQzQs3), trailing: authStore4(TableRowArrow.TableRowArrow, {}) };
    const TableRow = TableRow6.TableRow;
    obj3 = { IconComponent: WrenchIcon.WrenchIcon, source: AssetRegistryDefault };
    TableRowIcon = TableRowIcon7.TableRowIcon;
    intl = intl18.intl;
    const tmp8 = authStore4(TableRow, obj2);
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let TableRowIcon;
  let intl;
  let obj2;
  const callback = react.useCallback(() => {
    let intl;
    const items = [closure_1_15];
    const obj = LogAggregator;
    const json = obj.stringify(items);
    if ("" === json) {
      const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: intl.string(intl18.t["i+9VWy"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl18.intl;
      open(obj2);
    } else {
      const tmpResult = VoicePanelSettingsActionCreators;
      const result = tmpResult.closeVoicePanelSettingsActionSheet();
      const obj3 = { message: json };
      const tmpResult2 = showShareActionSheet;
      tmpResult2.showShareActionSheet(obj3, "Activity Logs");
    }
  }, []);
  let obj = { onPress: callback, icon: authStore4(TableRowIcon, obj2), label: intl.string(intl18.t.iQzQs3), trailing: authStore4(TableRowArrow.TableRowArrow, {}) };
  const TableRow = TableRow6.TableRow;
  obj2 = { IconComponent: WrenchIcon.WrenchIcon, source: AssetRegistryDefault };
  TableRowIcon = TableRowIcon7.TableRowIcon;
  intl = intl18.intl;
  return authStore4(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let showActivitiesDebugOverlay;
  let tmp10;
  let tmp15;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelCallLifecycleStore];
    const fn = function t() {
      return showActivitiesDebugOverlay.getShowActivitiesDebugOverlay();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(visible) {
      const obj = DispatcherDefault;
      const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
      obj.dispatch(obj2);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { IconComponent: WrenchIcon.WrenchIcon, source: AssetRegistryDefault };
    const TableRowIcon = TableRowIcon7.TableRowIcon;
    const tmp13 = authStore4(TableRowIcon, obj2);
    const intl = intl18.intl;
    const stringResult = intl.string(intl18.t["qv5/SP"]);
    cResult[3] = tmp13;
    cResult[4] = stringResult;
    tmp10 = stringResult;
    tmp9 = tmp13;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl18.intl;
    const stringResult1 = intl2.string(intl18.t["qv5/SP"]);
    cResult[5] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const obj3 = { icon: tmp9, accessibilityHint: tmp10, value: stateFromStores, onValueChange: tmp8, label: tmp15 };
    const tmp19 = authStore4(TableSwitchRow3.TableSwitchRow, obj3);
    cResult[6] = stateFromStores;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  return tmp17;
}) : (() => {
  let TableRowIcon;
  let intl;
  let intl2;
  let obj3;
  let showActivitiesDebugOverlay;
  let obj = get_initialized;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const callback = react.useCallback((visible) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj2);
  }, []);
  let obj2 = { icon: authStore4(TableRowIcon, obj3), accessibilityHint: intl.string(intl18.t["qv5/SP"]), value: stateFromStores, onValueChange: callback, label: intl2.string(intl18.t["qv5/SP"]) };
  const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
  obj3 = { IconComponent: WrenchIcon.WrenchIcon, source: AssetRegistryDefault };
  TableRowIcon = TableRowIcon7.TableRowIcon;
  intl = intl18.intl;
  intl2 = intl18.intl;
  return authStore4(TableSwitchRow, obj2);
});
const memoResult = react.memo(function VoicePanelSettingsOverview(guildId) {
  let AWmdd9;
  let TableRowIcon;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let TableRowIcon5;
  let TableRowIcon6;
  let formatToPlainString;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl16;
  let intl17;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items17;
  let items18;
  let obj15;
  let obj19;
  let obj21;
  let obj23;
  let obj25;
  let obj27;
  let obj29;
  let obj31;
  let selfDeaf;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let stateFromStores;
  let stateFromStores4;
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[19]);
  let items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const DeveloperMode = guildId(stateFromStores[39]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj2 = guildId(stateFromStores[19]);
  const items1 = [SortedVoiceStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, guildId));
  const items2 = [UserStore];
  const items3 = [stateFromStores, stateFromStores1];
  const obj3 = guildId(stateFromStores[19]);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, function() {
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        const items = [];
        const recipients = stateFromStores.recipients;
        set = new Set(stateFromStores1.map((user) => user.user.id));
        for (const item10020 of recipients) {
          let user = UserStore.getUser(item10020);
          let hasItem = null == user;
          let tmp9 = user;
          if (!hasItem) {
            hasItem = set.has(item10020);
          }
          if (!hasItem) {
            let arr = items.push(tmp9);
          }
          continue;
        }
        return items;
      }
    }
    return [];
  }, items3);
  const items4 = [MediaEngineStore];
  const obj4 = guildId(stateFromStores[19]);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => selfDeaf.isSelfDeaf());
  const callback = stateFromStores1.useCallback(() => {
    const obj = channelId(stateFromStores[40]);
    obj.toggleSelfDeaf();
  }, []);
  const items5 = [stateFromStores4];
  const obj5 = guildId(stateFromStores[19]);
  const stateFromStores3 = obj5.useStateFromStores(items5, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items6 = [stateFromStores4, AuthenticationStore];
  const obj6 = guildId(stateFromStores[19]);
  stateFromStores4 = obj6.useStateFromStores(items6, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id = null;
    if (isStreamParticipant(selectedParticipant)) {
      id = null;
      if (selectedParticipant.stream.ownerId !== AuthenticationStore.getId()) {
        id = selectedParticipant.id;
      }
    }
    return id;
  });
  const items7 = [channelId, stateFromStores3];
  const items8 = [channelId];
  const callback1 = stateFromStores1.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores3);
  }, items7);
  const items9 = [guildId];
  const callback2 = stateFromStores1.useCallback(() => {
    const obj = VoicePanelSettingsActionCreators;
    const result = obj.closeVoicePanelSettingsActionSheet();
    const obj2 = ChannelSettingsActionCreatorsDefault;
    obj2.open(channelId);
  }, items8);
  const items10 = [channelId];
  const callback3 = stateFromStores1.useCallback(() => {
    const obj = VoicePanelSettingsActionCreators;
    const result = obj.closeVoicePanelSettingsActionSheet();
    const obj2 = ChannelCallConnectingScreen;
    const result1 = obj2.showVoiceSettingsActionSheet(guildId);
  }, items9);
  const items11 = [channelId, stateFromStores4];
  const callback4 = stateFromStores1.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { channelId };
    obj.openLazy(asyncRequire(17253, dependencyMap.paths), closure_17, obj2);
  }, items10);
  const callback5 = stateFromStores1.useCallback(() => {
    if (null != stateFromStores4) {
      const obj = SecureFramesPlatformUtilsDefault;
      const result = obj.openSecureFramesStreamVerification(tmp, channelId);
    }
  }, items11);
  const obj7 = guildId(stateFromStores[48]);
  const isCallRTCConnectionEmpty = obj7.useIsCallRTCConnectionEmpty();
  const obj8 = guildId(stateFromStores[48]);
  const isStreamRTCConnectionEmpty = obj8.useIsStreamRTCConnectionEmpty(stateFromStores4);
  const items12 = [stateFromStores3];
  const obj9 = guildId(stateFromStores[19]);
  const stateFromStores5 = obj9.useStateFromStores(items12, () => null != stateFromStores3.getCurrentEmbeddedActivity(), []);
  const items13 = [PermissionStore];
  const items14 = [channelId];
  const tmp18 = channelId(stateFromStores[49])(stateFromStores);
  const obj10 = guildId(stateFromStores[19]);
  const stateFromStores6 = obj10.useStateFromStores(items13, () => {
    const obj = { channelId };
    return PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
  }, items14);
  const obj11 = guildId(stateFromStores[50]);
  const canInviteMembers = obj11.useCanInviteMembers(channelId);
  const obj12 = guildId(stateFromStores[51]);
  const inviteMembersCallback = obj12.useInviteMembersCallback(channelId);
  const tmp22 = channelId(stateFromStores[52])(stateFromStores);
  const obj13 = guildId(stateFromStores[21]);
  let isSecureFramesUIEnabled = obj13.useIsSecureFramesUIEnabled({ channelId });
  const children = [closure_18(closure_22, { guildId, channelId }), , , , , ];
  let tmp26Result = null;
  if (tmp22) {
    const obj14 = { hasIcons: false, children: closure_18(channelId(tmp2[54]), obj15) };
    const VoicePanelFormSection = tmp(tmp2[53]).VoicePanelFormSection;
    obj15 = { channel: stateFromStores, analyticsSection: constants.CHANNEL_ACTION_SHEET };
    tmp26Result = closure_18(VoicePanelFormSection, obj14);
  }
  children[1] = tmp26Result;
  let tmp26Result7 = stateFromStores6 || tmp18;
  if (tmp26Result7) {
    let tmp26Result6 = stateFromStores6;
    const VoicePanelFormSection2 = tmp(tmp2[53]).VoicePanelFormSection;
    if (stateFromStores6) {
      const obj16 = { onPress: callback2, label: intl.string(tmp(tmp2[25]).t.XPDhcc), subLabel: intl2.string(tmp(tmp2[25]).t.w7ZEot), trailing: closure_18(tmp(tmp2[36]).TableRowArrow, {}) };
      const TableRow = tmp(tmp2[32]).TableRow;
      intl = tmp(tmp2[25]).intl;
      intl2 = tmp(tmp2[25]).intl;
      tmp26Result6 = closure_18(TableRow, obj16);
    }
    const obj17 = { hasIcons: false, children: tmp26Result6 };
    tmp26Result7 = closure_18(VoicePanelFormSection2, obj17);
  }
  children[2] = tmp26Result7;
  const VoicePanelFormSection3 = tmp(tmp2[53]).VoicePanelFormSection;
  const obj18 = { onPress: callback3, icon: closure_18(TableRowIcon, obj19), label: intl3.string(tmp(tmp2[25]).t.dsXapM), subLabel: intl4.string(tmp(tmp2[25]).t["16SG+O"]), trailing: closure_18(tmp(tmp2[36]).TableRowArrow, {}) };
  const TableRow2 = tmp(tmp2[32]).TableRow;
  obj19 = { IconComponent: tmp(tmp2[55]).SettingsIcon, source: channelId(tmp2[56]) };
  TableRowIcon = tmp(tmp2[33]).TableRowIcon;
  intl3 = tmp(tmp2[25]).intl;
  intl4 = tmp(tmp2[25]).intl;
  const items16 = [closure_18(TableRow2, obj18), , , , ];
  const obj20 = { icon: closure_18(TableRowIcon2, obj21), accessibilityHint: intl5.string(tmp(tmp2[25]).t.wjcRFX), value: stateFromStores2, onValueChange: callback, label: intl6.string(tmp(tmp2[25]).t.wjcRFX), subLabel: intl7.string(tmp(tmp2[25]).t.M3VN2U) };
  const TableSwitchRow = tmp(tmp2[38]).TableSwitchRow;
  obj21 = { IconComponent: tmp(tmp2[57]).HeadphonesSlashIcon, source: channelId(tmp2[58]) };
  TableRowIcon2 = tmp(tmp2[33]).TableRowIcon;
  intl5 = tmp(tmp2[25]).intl;
  intl6 = tmp(tmp2[25]).intl;
  intl7 = tmp(tmp2[25]).intl;
  items16[1] = closure_18(TableSwitchRow, obj20);
  const obj22 = { icon: closure_18(TableRowIcon3, obj23), accessibilityHint: intl8.string(tmp(tmp2[25]).t.ZMTRyc), value: stateFromStores3, onValueChange: callback1, label: intl9.string(tmp(tmp2[25]).t.ZMTRyc), subLabel: intl10.string(tmp(tmp2[25]).t.MlpCFS) };
  const TableSwitchRow2 = tmp(tmp2[38]).TableSwitchRow;
  obj23 = { IconComponent: tmp(tmp2[59]).VideoIcon, source: channelId(tmp2[60]) };
  TableRowIcon3 = tmp(tmp2[33]).TableRowIcon;
  intl8 = tmp(tmp2[25]).intl;
  intl9 = tmp(tmp2[25]).intl;
  intl10 = tmp(tmp2[25]).intl;
  items16[2] = closure_18(TableSwitchRow2, obj22);
  let tmp26Result8 = isSecureFramesUIEnabled && null == stateFromStores4 && !isCallRTCConnectionEmpty;
  if (tmp26Result8) {
    const obj24 = { onPress: callback4, icon: closure_18(TableRowIcon4, obj25), label: intl11.string(tmp(tmp2[25]).t.cTQI5t), subLabel: intl12.string(tmp(tmp2[25]).t.Etxti2), trailing: closure_18(tmp(tmp2[36]).TableRowArrow, {}) };
    const TableRow3 = tmp(tmp2[32]).TableRow;
    obj25 = { IconComponent: tmp(tmp2[27]).LockIcon, source: channelId(tmp2[56]) };
    TableRowIcon4 = tmp(tmp2[33]).TableRowIcon;
    intl11 = tmp(tmp2[25]).intl;
    intl12 = tmp(tmp2[25]).intl;
    tmp26Result8 = closure_18(TableRow3, obj24);
  }
  items16[3] = tmp26Result8;
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = null != stateFromStores4;
  }
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = !isStreamRTCConnectionEmpty;
  }
  if (isSecureFramesUIEnabled) {
    const obj26 = { onPress: callback5, icon: closure_18(TableRowIcon5, obj27), label: intl13.string(tmp(tmp2[25]).t.QogHld), subLabel: intl14.string(tmp(tmp2[25]).t["j5+1ed"]), trailing: closure_18(tmp(tmp2[36]).TableRowArrow, {}) };
    const TableRow4 = tmp(tmp2[32]).TableRow;
    obj27 = { IconComponent: tmp(tmp2[27]).LockIcon, source: channelId(tmp2[56]) };
    TableRowIcon5 = tmp(tmp2[33]).TableRowIcon;
    intl13 = tmp(tmp2[25]).intl;
    intl14 = tmp(tmp2[25]).intl;
    isSecureFramesUIEnabled = closure_18(TableRow4, obj26);
  }
  items16[4] = isSecureFramesUIEnabled;
  children[3] = closure_19(VoicePanelFormSection3, { hasIcons: true, children: items16 });
  let tmp24Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp24Result) {
    const obj28 = { title: "" + formatToPlainString(AWmdd9, obj29), hasIcons: true, children: items17 };
    const VoicePanelFormSection4 = tmp(tmp2[53]).VoicePanelFormSection;
    const intl15 = tmp(tmp2[25]).intl;
    formatToPlainString = intl15.formatToPlainString;
    const _HermesInternal = HermesInternal;
    obj29 = { count: "" + stateFromStores1.length };
    AWmdd9 = tmp(tmp2[25]).t.AWmdd9;
    const _HermesInternal2 = HermesInternal;
    let tmp26Result9 = null;
    if (canInviteMembers) {
      const obj30 = { onPress: inviteMembersCallback, icon: closure_18(TableRowIcon6, obj31), label: intl16.string(tmp(tmp2[25]).t["f1+QIK"]), trailing: closure_18(tmp(tmp2[36]).TableRowArrow, {}) };
      const TableRow5 = tmp(tmp2[32]).TableRow;
      obj31 = { IconComponent: tmp(tmp2[61]).GroupPlusIcon, source: channelId(tmp2[62]) };
      TableRowIcon6 = tmp(tmp2[33]).TableRowIcon;
      intl16 = tmp(tmp2[25]).intl;
      tmp26Result9 = closure_18(TableRow5, obj30);
    }
    items17 = [
      tmp26Result9,
      stateFromStores1.map((user) => {
          let nick;
          const obj = { user: user.user, selfStream: user.voiceState.selfStream, nick, channelId, guildId, showSecureFramesUI: isSecureFramesUIEnabled, showGameActivity: true };
          nick = user.nick;
          const MemberRowItem = FormComponents.MemberRowItem;
          return authStore4(MemberRowItem, obj, user.user.id);
        }),
      stateFromStoresArray.map((user) => {
          const obj = { user, channelId, guildId, notConnected: true, showRing: true };
          return authStore4(FormComponents.MemberRowItem, obj, user.id);
        })
    ];
    tmp24Result = closure_19(VoicePanelFormSection4, obj28);
  }
  children[4] = tmp24Result;
  let tmp24Result2 = null;
  if (setting) {
    const obj32 = { title: intl17.string(tmp(tmp2[25]).t.J6rqB7), hasIcons: true, children: items18 };
    const VoicePanelFormSection5 = tmp(tmp2[53]).VoicePanelFormSection;
    intl17 = tmp(tmp2[25]).intl;
    let tmp26Result10 = null;
    if (stateFromStores5) {
      tmp26Result10 = closure_18(closure_23, {});
    }
    items18 = [tmp26Result10, closure_18(closure_24, {})];
    tmp24Result2 = closure_19(VoicePanelFormSection5, obj32);
  }
  children[5] = tmp24Result2;
  return closure_19(closure_20, { children });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default memoResult;
export const VoicePanelSettingsOverviewHeader = tmp4;