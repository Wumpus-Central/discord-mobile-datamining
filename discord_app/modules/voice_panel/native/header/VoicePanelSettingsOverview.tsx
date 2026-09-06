// === Module 17111: VoicePanelSettingsOverview ===

// Module 17111 (VoicePanelSettingsOverview)
import LogAggregator from "LogAggregator" /* 7 */;
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import LockIcon from "LockIcon" /* 5095 */;
import TableRow from "TableRow" /* 5605 */;
import TableRowIcon from "TableRowIcon" /* 5611 */;
import TableRowArrow from "TableRowArrow" /* 5612 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8625 */;
import _modDef8627 from "module_8627" /* 8627 */;
import FormComponents from "FormComponents" /* 9118 */;
import useIsSecureFramesVerified from "useIsSecureFramesVerified" /* 9131 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9154 */;
import useIsSecureFramesUIEnabled from "useIsSecureFramesUIEnabled" /* 9170 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9212 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9978 */;
import WrenchIcon from "WrenchIcon" /* 15562 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 17109 */;
import getChannelInfoSubtitleDefault from "getChannelInfoSubtitle" /* 17112 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9486 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

require = fn;
class VoicePanelSettingsOverviewHeader {
  constructor(arg0) {
    ({ guildId, channelId } = global);
    tmp = closure_21();
    tmp2 = guildId;
    tmp3 = closure_2;
    obj = guildId(closure_2[16]);
    items = [];
    items[0] = closure_12;
    stateFromStores = obj.useStateFromStores(items, () => {
      const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, require);
      const substr = voiceStatesForChannelAlt.slice(0, 2);
      const mapped = substr.map((user) => user.user);
      return getChannelInfoSubtitleDefault(require, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
    });
    obj2 = guildId(closure_2[16]);
    items1 = [];
    items1[0] = closure_8;
    items2 = [];
    items2[0] = channelId;
    stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
    tmp6 = channelId;
    tmp7 = channelId(closure_2[18])(stateFromStores1);
    obj3 = guildId(closure_2[19]);
    isSecureFramesUIEnabled = obj3.useIsSecureFramesUIEnabled({ channelId });
    obj4 = guildId(closure_2[20]);
    isCallSecureFramesVerified = obj4.useIsCallSecureFramesVerified({ channelId });
    tmp10 = jsxs;
    obj = { style: tmp.headerContainer, children: null };
    tmp11 = channelId(closure_2[21]);
    obj1 = { style: tmp.channelTitleWrapper, children: null };
    tmp13 = jsx;
    tmp12 = channelId(closure_2[21]);
    obj2 = { style: tmp.channelTitle, variant: "heading-lg/bold", lineClamp: 1, accessibilityRole: "header", children: tmp7 };
    items3 = [, ];
    items3[0] = jsx(guildId(closure_2[22]).Text, obj2);
    if (isCallSecureFramesVerified) {
      obj3 = { style: null, size: "xs", accessibilityLabel: null };
      obj3.style = tmp.secureFramesIcon;
      intl = tmp2(tmp3[24]).intl;
      obj3.accessibilityLabel = intl.string(tmp2(tmp3[24]).t.mR9cf3);
      isCallSecureFramesVerified = tmp13(tmp2(tmp3[23]).ShieldLockIcon, obj3);
    }
    items3[1] = isCallSecureFramesVerified;
    obj1.children = items3;
    items4 = [, , ];
    items4[0] = tmp10(tmp12, obj1);
    obj4 = { style: tmp.channelSubtitle, variant: "text-sm/medium", accessibilityRole: "summary", children: stateFromStores };
    items4[1] = tmp13(tmp2(tmp3[22]).Text, obj4);
    if (isSecureFramesUIEnabled) {
      obj5 = { style: null, children: null };
      obj5.style = tmp.secureFrames;
      tmp6Result = tmp6(tmp3[21]);
      items5 = [, ];
      items5[0] = tmp13(tmp2(tmp3[25]).LockIcon, { size: "xxs", color: "status-positive" });
      obj6 = { variant: "text-xs/medium", color: "status-positive", children: null };
      intl2 = tmp2(tmp3[24]).intl;
      obj6.children = intl2.string(tmp2(tmp3[24]).t["3BogKe"]);
      items5[1] = tmp13(tmp2(tmp3[22]).Text, obj6);
      obj5.children = items5;
      isSecureFramesUIEnabled = tmp10(tmp6Result, obj5);
    }
    items4[2] = isSecureFramesUIEnabled;
    obj.children = items4;
    return tmp10(tmp11, obj);
  }
}
function ShareActivityLogsButton() {
  const callback = noop.useCallback(() => {
    let obj = LogAggregator;
    const items = [closure_1_15];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = util.intl;
      obj.content = intl.string(util.t["i+9VWy"]);
      ToastActionCreatorsDefault.open(obj);
    } else {
      let tmpResult = VoicePanelSettingsActionCreators;
      const result = tmpResult.closeVoicePanelSettingsActionSheet();
      tmpResult = showShareActionSheet;
      obj = { message: json };
      tmpResult.showShareActionSheet(obj, "Activity Logs");
    }
  }, []);
  let obj = { onPress: callback, icon: null, label: null, trailing: null };
  obj = { IconComponent: WrenchIcon.WrenchIcon, source: _modDef8627 };
  obj.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj);
  let intl = util.intl;
  obj.label = intl.string(util.t.iQzQs3);
  obj.trailing = collapsedCategories(TableRowArrow.TableRowArrow, {});
  return collapsedCategories(TableRow.TableRow, obj);
}
function ActivityDebugToggle() {
  let obj = initialize;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const callback = noop.useCallback((visible) => {
    const obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  }, []);
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null };
  obj = { IconComponent: WrenchIcon.WrenchIcon, source: _modDef8627 };
  obj.icon = collapsedCategories(TableRowIcon.TableRowIcon, obj);
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t["qv5/SP"]);
  obj.value = stateFromStores;
  obj.onValueChange = callback;
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["qv5/SP"]);
  return collapsedCategories(TableSwitchRow.TableSwitchRow, obj);
}
const Constants = fn(1074);
({ AnalyticsSections: map1, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = Constants);
const isStreamParticipant = fn(4581).isStreamParticipant;
let closure_17 = fn(9152).SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const createStyles = fn(4560);
let obj = { headerContainer: { alignItems: "center" }, channelTitleWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 }, channelTitle: { textAlign: "center" }, channelSubtitle: { marginTop: 4, marginHorizontal: 16, textAlign: "center" }, secureFrames: null, secureFramesIcon: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 4, gap: 4 };
obj.secureFrames = obj;
obj.secureFramesIcon = { marginStart: 4 };
const __initData = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default noop.memo(function VoicePanelSettingsOverview(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let stateFromStores;
  let stateFromStores4;
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[16]);
  let items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const DeveloperMode = guildId(stateFromStores[37]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = guildId(stateFromStores[16]);
  const items1 = [SortedVoiceStateStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, guildId));
  let obj2 = guildId(stateFromStores[16]);
  const items2 = [UserStore];
  const items3 = [stateFromStores, stateFromStores1];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const _Set = Set;
        const set = new Set(stateFromStores1.map((user) => user.user.id));
        const items = [];
        const recipients = stateFromStores.recipients;
        for (const item10020 of recipients) {
          let user = UserStore.getUser(item10020);
          let hasItem = null == user;
          let tmp11 = user;
          if (!hasItem) {
            hasItem = set.has(item10020);
          }
          if (!hasItem) {
            let arr = items.push(tmp11);
          }
          continue;
        }
        return items;
      }
    }
    return [];
  }, items3);
  let obj3 = guildId(stateFromStores[16]);
  const items4 = [MediaEngineStore];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => selfDeaf.isSelfDeaf());
  const callback = stateFromStores1.useCallback(() => {
    channelId(stateFromStores[38]).toggleSelfDeaf();
  }, []);
  let obj4 = guildId(stateFromStores[16]);
  const items5 = [stateFromStores4];
  const stateFromStores3 = obj4.useStateFromStores(items5, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  let obj5 = guildId(stateFromStores[16]);
  const items6 = [stateFromStores4, AuthenticationStore];
  stateFromStores4 = obj5.useStateFromStores(items6, () => {
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
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores3);
  }, items7);
  const items9 = [guildId];
  const callback2 = stateFromStores1.useCallback(() => {
    const result = VoicePanelSettingsActionCreators.closeVoicePanelSettingsActionSheet();
    ChannelSettingsActionCreatorsDefault.open(channelId);
  }, items8);
  const items10 = [channelId];
  const callback3 = stateFromStores1.useCallback(() => {
    const result = VoicePanelSettingsActionCreators.closeVoicePanelSettingsActionSheet();
    const result1 = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items9);
  const items11 = [channelId, stateFromStores4];
  const callback4 = stateFromStores1.useCallback(() => {
    const obj = { channelId };
    obj.openLazy(asyncRequireImpl(17113, dependencyMap.paths), closure_17, obj);
  }, items10);
  const callback5 = stateFromStores1.useCallback(() => {
    if (null != stateFromStores4) {
      const result = SecureFramesPlatformUtilsDefault.openSecureFramesStreamVerification(tmp, channelId);
    }
  }, items11);
  let obj6 = guildId(stateFromStores[46]);
  const isCallRTCConnectionEmpty = obj6.useIsCallRTCConnectionEmpty();
  let obj7 = guildId(stateFromStores[46]);
  const isStreamRTCConnectionEmpty = obj7.useIsStreamRTCConnectionEmpty(stateFromStores4);
  let obj8 = guildId(stateFromStores[16]);
  const items12 = [stateFromStores3];
  const stateFromStores5 = obj8.useStateFromStores(items12, () => null != stateFromStores3.getCurrentEmbeddedActivity(), []);
  let obj9 = guildId(stateFromStores[16]);
  const items13 = [PermissionStore];
  const items14 = [channelId];
  const stateFromStores6 = obj9.useStateFromStores(items13, () => PermissionStore.canWithPartialContext(constants2.MANAGE_CHANNELS, { channelId }), items14);
  let obj10 = guildId(stateFromStores[48]);
  const canInviteMembers = obj10.useCanInviteMembers(channelId);
  let obj11 = guildId(stateFromStores[49]);
  const tmp18 = channelId(stateFromStores[47])(stateFromStores);
  const inviteMembersCallback = obj11.useInviteMembersCallback(channelId);
  let obj12 = guildId(stateFromStores[19]);
  let isSecureFramesUIEnabled = obj12.useIsSecureFramesUIEnabled({ channelId });
  const children = [closure_18(VoicePanelSettingsOverviewHeader, { guildId, channelId }), , , , , ];
  let tmp26Result = null;
  if (tmp22) {
    obj = { hasIcons: false, children: null };
    obj = { channel: stateFromStores, analyticsSection: constants.CHANNEL_ACTION_SHEET };
    obj.children = closure_18(tmp17(tmp2[52]), obj);
    tmp26Result = closure_18(tmp(tmp2[51]).VoicePanelFormSection, obj);
  }
  children[1] = tmp26Result;
  let tmp26Result1 = stateFromStores6;
  if (!stateFromStores6) {
    tmp26Result1 = tmp18;
  }
  if (tmp26Result1) {
    tmp26Result = stateFromStores6;
    if (stateFromStores6) {
      obj1 = { onPress: callback2, label: null, subLabel: null, trailing: null };
      const intl = tmp(tmp2[24]).intl;
      obj1.label = intl.string(tmp(tmp2[24]).t.XPDhcc);
      const intl2 = tmp(tmp2[24]).intl;
      obj1.subLabel = intl2.string(tmp(tmp2[24]).t.w7ZEot);
      obj1.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
      tmp26Result = closure_18(tmp(tmp2[30]).TableRow, obj1);
    }
    obj2 = { hasIcons: false, children: tmp26Result };
    tmp26Result1 = closure_18(tmp(tmp2[51]).VoicePanelFormSection, obj2);
  }
  children[2] = tmp26Result1;
  obj3 = { onPress: callback3, icon: null, label: null, subLabel: null, trailing: null };
  obj4 = { IconComponent: tmp(tmp2[53]).SettingsIcon, source: tmp17(tmp2[54]) };
  obj3.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj4);
  const intl3 = tmp(tmp2[24]).intl;
  obj3.label = intl3.string(tmp(tmp2[24]).t.NiTd0e);
  const intl4 = tmp(tmp2[24]).intl;
  obj3.subLabel = intl4.string(tmp(tmp2[24]).t["16SG+O"]);
  obj3.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
  const items16 = [closure_18(tmp(tmp2[30]).TableRow, obj3), , , , ];
  obj5 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj6 = { IconComponent: tmp(tmp2[55]).HeadphonesSlashIcon, source: tmp17(tmp2[56]) };
  obj5.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj6);
  const intl5 = tmp(tmp2[24]).intl;
  obj5.accessibilityHint = intl5.string(tmp(tmp2[24]).t.wjcRFX);
  obj5.value = stateFromStores2;
  obj5.onValueChange = callback;
  const intl6 = tmp(tmp2[24]).intl;
  obj5.label = intl6.string(tmp(tmp2[24]).t.wjcRFX);
  const intl7 = tmp(tmp2[24]).intl;
  obj5.subLabel = intl7.string(tmp(tmp2[24]).t.M3VN2U);
  items16[1] = closure_18(tmp(tmp2[36]).TableSwitchRow, obj5);
  obj7 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj8 = { IconComponent: tmp(tmp2[57]).VideoIcon, source: tmp17(tmp2[58]) };
  obj7.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj8);
  const intl8 = tmp(tmp2[24]).intl;
  obj7.accessibilityHint = intl8.string(tmp(tmp2[24]).t.ZMTRyc);
  obj7.value = stateFromStores3;
  obj7.onValueChange = callback1;
  const intl9 = tmp(tmp2[24]).intl;
  obj7.label = intl9.string(tmp(tmp2[24]).t.ZMTRyc);
  const intl10 = tmp(tmp2[24]).intl;
  obj7.subLabel = intl10.string(tmp(tmp2[24]).t.MlpCFS);
  items16[2] = closure_18(tmp(tmp2[36]).TableSwitchRow, obj7);
  let tmp26Result2 = isSecureFramesUIEnabled;
  if (isSecureFramesUIEnabled) {
    tmp26Result2 = null == stateFromStores4;
  }
  if (tmp26Result2) {
    tmp26Result2 = !isCallRTCConnectionEmpty;
  }
  if (tmp26Result2) {
    obj9 = { onPress: callback4, icon: null, label: null, subLabel: null, trailing: null };
    obj10 = { IconComponent: tmp(tmp2[25]).LockIcon, source: tmp17(tmp2[54]) };
    obj9.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj10);
    const intl11 = tmp(tmp2[24]).intl;
    obj9.label = intl11.string(tmp(tmp2[24]).t.cTQI5t);
    const intl12 = tmp(tmp2[24]).intl;
    obj9.subLabel = intl12.string(tmp(tmp2[24]).t.Etxti2);
    obj9.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
    tmp26Result2 = closure_18(tmp(tmp2[30]).TableRow, obj9);
  }
  items16[3] = tmp26Result2;
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = null != stateFromStores4;
  }
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = !isStreamRTCConnectionEmpty;
  }
  if (isSecureFramesUIEnabled) {
    obj11 = { onPress: callback5, icon: null, label: null, subLabel: null, trailing: null };
    obj12 = { IconComponent: tmp(tmp2[25]).LockIcon, source: tmp17(tmp2[54]) };
    obj11.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj12);
    const intl13 = tmp(tmp2[24]).intl;
    obj11.label = intl13.string(tmp(tmp2[24]).t.QogHld);
    const intl14 = tmp(tmp2[24]).intl;
    obj11.subLabel = intl14.string(tmp(tmp2[24]).t["j5+1ed"]);
    obj11.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
    isSecureFramesUIEnabled = closure_18(tmp(tmp2[30]).TableRow, obj11);
  }
  items16[4] = isSecureFramesUIEnabled;
  children[3] = closure_19(tmp(tmp2[51]).VoicePanelFormSection, { hasIcons: true, children: items16 });
  let tmp24Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp24Result) {
    const obj13 = { title: null, hasIcons: true, children: null };
    const intl15 = tmp(tmp2[24]).intl;
    const obj14 = { count: null };
    const _HermesInternal = HermesInternal;
    obj14.count = "" + stateFromStores1.length;
    const _HermesInternal2 = HermesInternal;
    obj13.title = "" + intl15.formatToPlainString(tmp(tmp2[24]).t.AWmdd9, obj14);
    let tmp26Result3 = null;
    if (canInviteMembers) {
      const obj15 = { onPress: inviteMembersCallback, icon: null, label: null, trailing: null };
      const obj16 = { IconComponent: tmp(tmp2[59]).GroupPlusIcon, source: tmp17(tmp2[60]) };
      obj15.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj16);
      const intl16 = tmp(tmp2[24]).intl;
      obj15.label = intl16.string(tmp(tmp2[24]).t["f1+QIK"]);
      obj15.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
      tmp26Result3 = closure_18(tmp(tmp2[30]).TableRow, obj15);
    }
    const items17 = [
      tmp26Result3,
      stateFromStores1.map((user) => {
          const obj = { user: user.user, selfStream: user.voiceState.selfStream, nick: null, channelId, guildId, showSecureFramesUI: isSecureFramesUIEnabled, showGameActivity: true };
          const nick = user.nick;
          obj.nick = nick;
          return collapsedCategories(FormComponents.MemberRowItem, obj, user.user.id);
        }),
      stateFromStoresArray.map((user) => collapsedCategories(FormComponents.MemberRowItem, { user, channelId, guildId, notConnected: true, showRing: true }, user.id))
    ];
    obj13.children = items17;
    tmp24Result = closure_19(tmp(tmp2[51]).VoicePanelFormSection, obj13);
  }
  children[4] = tmp24Result;
  tmp24Result = null;
  if (setting) {
    const obj17 = { title: null, hasIcons: true, children: null };
    const intl17 = tmp(tmp2[24]).intl;
    obj17.title = intl17.string(tmp(tmp2[24]).t.J6rqB7);
    let tmp26Result4 = null;
    if (stateFromStores5) {
      tmp26Result4 = closure_18(ShareActivityLogsButton, {});
    }
    const items18 = [tmp26Result4, closure_18(ActivityDebugToggle, {})];
    obj17.children = items18;
    tmp24Result = closure_19(tmp(tmp2[51]).VoicePanelFormSection, obj17);
  }
  children[5] = tmp24Result;
  return closure_19(closure_20, { children });
});
export { VoicePanelSettingsOverviewHeader };