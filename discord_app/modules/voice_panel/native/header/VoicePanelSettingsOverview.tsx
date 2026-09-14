// discord_app/modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx
import LogAggregator from "../../../debug/LogAggregator.tsx";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import LockIcon from "../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRowArrow from "../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import _modDef8750 from "../../../../../_runtime/metro/08750__.js";
import FormComponents from "../shared/FormComponents.tsx";
import useIsSecureFramesVerified from "../../../rtc/hooks/useIsSecureFramesVerified.tsx";
import SecureFramesPlatformUtilsDefault from "../../../rtc/SecureFramesPlatformUtils.native.tsx";
import useIsSecureFramesUIEnabled from "../../../rtc/hooks/useIsSecureFramesUIEnabled.tsx";
import ShieldLockIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldLockIcon.tsx";
import ChannelCallConnectingScreen from "../../../video_calls/native/components/ChannelCallConnectingScreen.tsx";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators.tsx";
import getChannelInfoSubtitleDefault from "../utils/getChannelInfoSubtitle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ChannelCallLifecycleStore from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

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
    obj1 = { style: tmp.headerContainer, children: null };
    tmp11 = channelId(closure_2[21]);
    obj12 = { style: tmp.channelTitleWrapper, children: null };
    tmp13 = jsx;
    tmp12 = channelId(closure_2[21]);
    obj13 = {
      style: tmp.channelTitle,
      variant: "heading-lg/bold",
      lineClamp: 1,
      accessibilityRole: "header",
      children: tmp7,
    };
    items3 = [,];
    items3[0] = jsx(guildId(closure_2[22]).Text, obj13);
    if (isCallSecureFramesVerified) {
      obj14 = { style: null, size: "xs", accessibilityLabel: null };
      obj14.style = tmp.secureFramesIcon;
      intl = tmp2(tmp3[24]).intl;
      obj14.accessibilityLabel = intl.string(tmp2(tmp3[24]).t.mR9cf3);
      isCallSecureFramesVerified = tmp13(tmp2(tmp3[23]).ShieldLockIcon, obj14);
    }
    items3[1] = isCallSecureFramesVerified;
    obj12.children = items3;
    items4 = [, ,];
    items4[0] = tmp10(tmp12, obj12);
    obj15 = {
      style: tmp.channelSubtitle,
      variant: "text-sm/medium",
      accessibilityRole: "summary",
      children: stateFromStores,
    };
    items4[1] = tmp13(tmp2(tmp3[22]).Text, obj15);
    if (isSecureFramesUIEnabled) {
      obj16 = { style: null, children: null };
      obj16.style = tmp.secureFrames;
      tmp6Result = tmp6(tmp3[21]);
      items5 = [,];
      items5[0] = tmp13(tmp2(tmp3[25]).LockIcon, { size: "xxs", color: "status-positive" });
      obj17 = { variant: "text-xs/medium", color: "status-positive", children: null };
      intl2 = tmp2(tmp3[24]).intl;
      obj17.children = intl2.string(tmp2(tmp3[24]).t["3BogKe"]);
      items5[1] = tmp13(tmp2(tmp3[22]).Text, obj17);
      obj16.children = items5;
      isSecureFramesUIEnabled = tmp10(tmp6Result, obj16);
    }
    items4[2] = isSecureFramesUIEnabled;
    obj1.children = items4;
    return tmp10(tmp11, obj1);
  }
}
function ShareActivityLogsButton() {
  const callback = noop.useCallback(() => {
    const items = [closure_1_15];
    const json = LogAggregator.stringify(items);
    if ("" === json) {
      const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t["i+9VWy"]);
      ToastActionCreatorsDefault.open(obj2);
    } else {
      const result = VoicePanelSettingsActionCreators.closeVoicePanelSettingsActionSheet();
      const tmpResult = VoicePanelSettingsActionCreators;
      const obj3 = { message: json };
      showShareActionSheet.showShareActionSheet(obj3, "Activity Logs");
      const tmpResult2 = showShareActionSheet;
    }
  }, []);
  let obj = {
    onPress: callback,
    icon: collapsedCategories(TableRowIcon.TableRowIcon, { IconComponent: WrenchIcon.WrenchIcon, source: _modDef8750 }),
    label: null,
    trailing: null,
  };
  let intl = util.intl;
  obj.label = intl.string(util.t.iQzQs3);
  obj.trailing = collapsedCategories(TableRowArrow.TableRowArrow, {});
  return collapsedCategories(TableRow.TableRow, obj);
}
function ActivityDebugToggle() {
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    showActivitiesDebugOverlay.getShowActivitiesDebugOverlay(),
  );
  const callback = noop.useCallback((visible) => {
    DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
  }, []);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null };
  obj2.icon = collapsedCategories(TableRowIcon.TableRowIcon, {
    IconComponent: WrenchIcon.WrenchIcon,
    source: _modDef8750,
  });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t["qv5/SP"]);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t["qv5/SP"]);
  return collapsedCategories(TableSwitchRow.TableSwitchRow, obj2);
}
const Constants = fn(1074);
({ AnalyticsSections: map1, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = Constants);
const isStreamParticipant = fn(4657).isStreamParticipant;
let closure_17 = fn(9281).SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const createStyles = fn(4636);
let obj = {
  headerContainer: { alignItems: "center" },
  channelTitleWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 },
  channelTitle: { textAlign: "center" },
  channelSubtitle: { marginTop: 4, marginHorizontal: 16, textAlign: "center" },
  secureFrames: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    marginTop: 8,
    padding: 4,
    gap: 4,
  },
  secureFramesIcon: { marginStart: 4 },
};
const __initData = createStyles.createStyles(obj);
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 8,
  padding: 4,
  gap: 4,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default noop.memo(function VoicePanelSettingsOverview(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let stateFromStores;
  let stateFromStores4;
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let items = [ChannelStore];
  stateFromStores = guildId(stateFromStores[16]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const DeveloperMode = guildId(stateFromStores[37]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj = guildId(stateFromStores[16]);
  const items1 = [SortedVoiceStateStore];
  const stateFromStores1 = guildId(stateFromStores[16]).useStateFromStores(items1, () =>
    SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, guildId),
  );
  const obj2 = guildId(stateFromStores[16]);
  const items2 = [UserStore];
  const items3 = [stateFromStores, stateFromStores1];
  const stateFromStoresArray = guildId(stateFromStores[16]).useStateFromStoresArray(
    items2,
    () => {
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
    },
    items3,
  );
  const obj3 = guildId(stateFromStores[16]);
  const items4 = [MediaEngineStore];
  const stateFromStores2 = guildId(stateFromStores[16]).useStateFromStores(items4, () => selfDeaf.isSelfDeaf());
  const callback = stateFromStores1.useCallback(() => {
    channelId(stateFromStores[38]).toggleSelfDeaf();
  }, []);
  const obj4 = guildId(stateFromStores[16]);
  const items5 = [stateFromStores4];
  const stateFromStores3 = guildId(stateFromStores[16]).useStateFromStores(items5, () =>
    ChannelRTCStore.getVoiceParticipantsHidden(channelId),
  );
  const obj5 = guildId(stateFromStores[16]);
  const items6 = [stateFromStores4, AuthenticationStore];
  stateFromStores4 = guildId(stateFromStores[16]).useStateFromStores(items6, () => {
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17224, dependencyMap.paths), closure_17, { channelId });
  }, items10);
  const callback5 = stateFromStores1.useCallback(() => {
    if (null != stateFromStores4) {
      const result = SecureFramesPlatformUtilsDefault.openSecureFramesStreamVerification(tmp, channelId);
    }
  }, items11);
  const obj6 = guildId(stateFromStores[16]);
  const isCallRTCConnectionEmpty = guildId(stateFromStores[46]).useIsCallRTCConnectionEmpty();
  const obj7 = guildId(stateFromStores[46]);
  const isStreamRTCConnectionEmpty = guildId(stateFromStores[46]).useIsStreamRTCConnectionEmpty(stateFromStores4);
  const obj8 = guildId(stateFromStores[46]);
  const items12 = [stateFromStores3];
  const stateFromStores5 = guildId(stateFromStores[16]).useStateFromStores(
    items12,
    () => null != stateFromStores3.getCurrentEmbeddedActivity(),
    [],
  );
  const obj9 = guildId(stateFromStores[16]);
  const tmp18 = channelId(stateFromStores[47])(stateFromStores);
  const items13 = [PermissionStore];
  const items14 = [channelId];
  const stateFromStores6 = guildId(stateFromStores[16]).useStateFromStores(
    items13,
    () => PermissionStore.canWithPartialContext(constants2.MANAGE_CHANNELS, { channelId }),
    items14,
  );
  const obj10 = guildId(stateFromStores[16]);
  const canInviteMembers = guildId(stateFromStores[48]).useCanInviteMembers(channelId);
  const obj11 = guildId(stateFromStores[48]);
  const obj12 = guildId(stateFromStores[49]);
  const inviteMembersCallback = guildId(stateFromStores[49]).useInviteMembersCallback(channelId);
  const tmp22 = channelId(stateFromStores[50])(stateFromStores);
  let isSecureFramesUIEnabled = guildId(stateFromStores[19]).useIsSecureFramesUIEnabled({ channelId });
  const children = [closure_18(VoicePanelSettingsOverviewHeader, { guildId, channelId }), , , , ,];
  let tmp26Result = null;
  if (tmp22) {
    const obj14 = { hasIcons: false, children: null };
    const obj15 = { channel: stateFromStores, analyticsSection: constants.CHANNEL_ACTION_SHEET };
    obj14.children = closure_18(tmp17(tmp2[52]), obj15);
    tmp26Result = closure_18(tmp(tmp2[51]).VoicePanelFormSection, obj14);
  }
  children[1] = tmp26Result;
  let tmp26Result7 = stateFromStores6;
  if (!stateFromStores6) {
    tmp26Result7 = tmp18;
  }
  if (tmp26Result7) {
    let tmp26Result6 = stateFromStores6;
    if (stateFromStores6) {
      const obj16 = { onPress: callback2, label: null, subLabel: null, trailing: null };
      const intl = tmp(tmp2[24]).intl;
      obj16.label = intl.string(tmp(tmp2[24]).t.XPDhcc);
      const intl2 = tmp(tmp2[24]).intl;
      obj16.subLabel = intl2.string(tmp(tmp2[24]).t.w7ZEot);
      obj16.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
      tmp26Result6 = closure_18(tmp(tmp2[30]).TableRow, obj16);
    }
    const obj17 = { hasIcons: false, children: tmp26Result6 };
    tmp26Result7 = closure_18(tmp(tmp2[51]).VoicePanelFormSection, obj17);
  }
  children[2] = tmp26Result7;
  const obj18 = { onPress: callback3, icon: null, label: null, subLabel: null, trailing: null };
  const obj13 = guildId(stateFromStores[19]);
  obj18.icon = closure_18(tmp(tmp2[31]).TableRowIcon, {
    IconComponent: tmp(tmp2[53]).SettingsIcon,
    source: channelId(tmp2[54]),
  });
  const intl3 = tmp(tmp2[24]).intl;
  obj18.label = intl3.string(tmp(tmp2[24]).t.NiTd0e);
  const intl4 = tmp(tmp2[24]).intl;
  obj18.subLabel = intl4.string(tmp(tmp2[24]).t["16SG+O"]);
  obj18.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
  const items16 = [closure_18(tmp(tmp2[30]).TableRow, obj18), , , ,];
  const obj20 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj19 = { IconComponent: tmp(tmp2[53]).SettingsIcon, source: channelId(tmp2[54]) };
  obj20.icon = closure_18(tmp(tmp2[31]).TableRowIcon, {
    IconComponent: tmp(tmp2[55]).HeadphonesSlashIcon,
    source: channelId(tmp2[56]),
  });
  const intl5 = tmp(tmp2[24]).intl;
  obj20.accessibilityHint = intl5.string(tmp(tmp2[24]).t.wjcRFX);
  obj20.value = stateFromStores2;
  obj20.onValueChange = callback;
  const intl6 = tmp(tmp2[24]).intl;
  obj20.label = intl6.string(tmp(tmp2[24]).t.wjcRFX);
  const intl7 = tmp(tmp2[24]).intl;
  obj20.subLabel = intl7.string(tmp(tmp2[24]).t.M3VN2U);
  items16[1] = closure_18(tmp(tmp2[36]).TableSwitchRow, obj20);
  const obj22 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj21 = { IconComponent: tmp(tmp2[55]).HeadphonesSlashIcon, source: channelId(tmp2[56]) };
  obj22.icon = closure_18(tmp(tmp2[31]).TableRowIcon, {
    IconComponent: tmp(tmp2[57]).VideoIcon,
    source: channelId(tmp2[58]),
  });
  const intl8 = tmp(tmp2[24]).intl;
  obj22.accessibilityHint = intl8.string(tmp(tmp2[24]).t.ZMTRyc);
  obj22.value = stateFromStores3;
  obj22.onValueChange = callback1;
  const intl9 = tmp(tmp2[24]).intl;
  obj22.label = intl9.string(tmp(tmp2[24]).t.ZMTRyc);
  const intl10 = tmp(tmp2[24]).intl;
  obj22.subLabel = intl10.string(tmp(tmp2[24]).t.MlpCFS);
  items16[2] = closure_18(tmp(tmp2[36]).TableSwitchRow, obj22);
  let tmp26Result8 = isSecureFramesUIEnabled;
  if (isSecureFramesUIEnabled) {
    tmp26Result8 = null == stateFromStores4;
  }
  if (tmp26Result8) {
    tmp26Result8 = !isCallRTCConnectionEmpty;
  }
  if (tmp26Result8) {
    const obj24 = { onPress: callback4, icon: null, label: null, subLabel: null, trailing: null };
    const obj25 = { IconComponent: tmp(tmp2[25]).LockIcon, source: tmp17(tmp2[54]) };
    obj24.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj25);
    const intl11 = tmp(tmp2[24]).intl;
    obj24.label = intl11.string(tmp(tmp2[24]).t.cTQI5t);
    const intl12 = tmp(tmp2[24]).intl;
    obj24.subLabel = intl12.string(tmp(tmp2[24]).t.Etxti2);
    obj24.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
    tmp26Result8 = closure_18(tmp(tmp2[30]).TableRow, obj24);
  }
  items16[3] = tmp26Result8;
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = null != stateFromStores4;
  }
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = !isStreamRTCConnectionEmpty;
  }
  if (isSecureFramesUIEnabled) {
    const obj26 = { onPress: callback5, icon: null, label: null, subLabel: null, trailing: null };
    const obj27 = { IconComponent: tmp(tmp2[25]).LockIcon, source: tmp17(tmp2[54]) };
    obj26.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj27);
    const intl13 = tmp(tmp2[24]).intl;
    obj26.label = intl13.string(tmp(tmp2[24]).t.QogHld);
    const intl14 = tmp(tmp2[24]).intl;
    obj26.subLabel = intl14.string(tmp(tmp2[24]).t["j5+1ed"]);
    obj26.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
    isSecureFramesUIEnabled = closure_18(tmp(tmp2[30]).TableRow, obj26);
  }
  items16[4] = isSecureFramesUIEnabled;
  children[3] = closure_19(tmp(tmp2[51]).VoicePanelFormSection, { hasIcons: true, children: items16 });
  let tmp24Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp24Result) {
    const obj28 = { title: null, hasIcons: true, children: null };
    const intl15 = tmp(tmp2[24]).intl;
    const obj29 = { count: null };
    const _HermesInternal = HermesInternal;
    obj29.count = "" + stateFromStores1.length;
    const _HermesInternal2 = HermesInternal;
    obj28.title = "" + intl15.formatToPlainString(tmp(tmp2[24]).t.AWmdd9, obj29);
    let tmp26Result9 = null;
    if (canInviteMembers) {
      const obj30 = { onPress: inviteMembersCallback, icon: null, label: null, trailing: null };
      const obj31 = { IconComponent: tmp(tmp2[59]).GroupPlusIcon, source: tmp17(tmp2[60]) };
      obj30.icon = closure_18(tmp(tmp2[31]).TableRowIcon, obj31);
      const intl16 = tmp(tmp2[24]).intl;
      obj30.label = intl16.string(tmp(tmp2[24]).t["f1+QIK"]);
      obj30.trailing = closure_18(tmp(tmp2[34]).TableRowArrow, {});
      tmp26Result9 = closure_18(tmp(tmp2[30]).TableRow, obj30);
    }
    const items17 = [
      tmp26Result9,
      stateFromStores1.map((user) => {
        const obj = {
          user: user.user,
          selfStream: user.voiceState.selfStream,
          nick: null,
          channelId,
          guildId,
          showSecureFramesUI: isSecureFramesUIEnabled,
          showGameActivity: true,
        };
        const nick = user.nick;
        obj.nick = nick;
        return collapsedCategories(FormComponents.MemberRowItem, obj, user.user.id);
      }),
      stateFromStoresArray.map((user) =>
        collapsedCategories(
          FormComponents.MemberRowItem,
          { user, channelId, guildId, notConnected: true, showRing: true },
          user.id,
        ),
      ),
    ];
    obj28.children = items17;
    tmp24Result = closure_19(tmp(tmp2[51]).VoicePanelFormSection, obj28);
  }
  children[4] = tmp24Result;
  let tmp24Result2 = null;
  if (setting) {
    const obj32 = { title: null, hasIcons: true, children: null };
    const intl17 = tmp(tmp2[24]).intl;
    obj32.title = intl17.string(tmp(tmp2[24]).t.J6rqB7);
    let tmp26Result10 = null;
    if (stateFromStores5) {
      tmp26Result10 = closure_18(ShareActivityLogsButton, {});
    }
    const items18 = [tmp26Result10, closure_18(ActivityDebugToggle, {})];
    obj32.children = items18;
    tmp24Result2 = closure_19(tmp(tmp2[51]).VoicePanelFormSection, obj32);
  }
  children[5] = tmp24Result2;
  return closure_19(closure_20, { children });
});
export { VoicePanelSettingsOverviewHeader };
