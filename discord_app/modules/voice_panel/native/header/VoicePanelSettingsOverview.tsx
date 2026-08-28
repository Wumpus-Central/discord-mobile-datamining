// discord_app/modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../../../design/components/TableRow/native/TableRowIcon.native.tsx";
import TableRowArrow from "../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import registerAssetDefault from "../../../../../_runtime/08695_registerAsset.js";
import useIsUserSecureFramesVerified from "../../../rtc/hooks/useIsSecureFramesVerified.tsx";
import useIsSecureFramesUIEnabled from "../../../rtc/hooks/useIsSecureFramesUIEnabled.tsx";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_5 from "../../../calls/ChannelRTCStore.tsx";
import closure_6 from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import closure_7 from "../../../../stores/AuthenticationStore.tsx";
import closure_8 from "../../../../stores/ChannelStore.tsx";
import closure_9 from "../../../../stores/MediaEngineStore.tsx";
import closure_10 from "../../../../stores/PermissionStore.tsx";
import closure_11 from "../../../../stores/UserStore.tsx";
import closure_12 from "../../../../stores/views/SortedVoiceStateStore.tsx";
import ME from "../../../../Constants.tsx";
import { isStreamParticipant } from "../../../calls/CallConstants.tsx";
import { SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY as closure_17 } from "../../../rtc/SecureFramesConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class VoicePanelSettingsOverviewHeader {
  constructor(arg0) {
    ({ guildId, channelId } = global);
    tmp = closure_21();
    tmp2 = guildId;
    tmp3 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = closure_12;
    stateFromStores = obj.useStateFromStores(items, () => {
      const voiceStatesForChannelAlt = closure_1_12.getVoiceStatesForChannelAlt(channelId, closure_0);
      const substr = voiceStatesForChannelAlt.slice(0, 2);
      const mapped = substr.map((user) => user.user);
      return channelId(closure_1_2[17])(closure_0, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
    });
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_8;
    items2 = [];
    items2[0] = channelId;
    stateFromStores1 = obj2.useStateFromStores(items1, () => closure_1_8.getChannel(channelId), items2);
    tmp6 = channelId;
    tmp7 = require("computeChannelName")(stateFromStores1);
    obj3 = require("useIsSecureFramesUIEnabled");
    isSecureFramesUIEnabled = obj3.useIsSecureFramesUIEnabled({ channelId });
    obj4 = require("useIsUserSecureFramesVerified");
    isCallSecureFramesVerified = obj4.useIsCallSecureFramesVerified({ channelId });
    tmp10 = jsxs;
    obj = { style: tmp.headerContainer, children: null };
    tmp11 = require("set");
    obj1 = { style: tmp.channelTitleWrapper, children: null };
    tmp13 = jsx;
    tmp12 = require("set");
    obj2 = { style: tmp.channelTitle, variant: "heading-lg/bold", lineClamp: 1, accessibilityRole: "header", children: tmp7 };
    items3 = [, ];
    items3[0] = jsx(require("Text").Text, obj2);
    if (isCallSecureFramesVerified) {
      obj3 = { style: null, size: "xs", accessibilityLabel: null };
      obj3[0] = tmp.secureFramesIcon;
      intl = require("getSystemLocale").intl;
      obj3[2] = intl.string(require("getSystemLocale").t.mR9cf3);
      isCallSecureFramesVerified = tmp13(require("ShieldLockIcon").ShieldLockIcon, obj3);
    }
    items3[1] = isCallSecureFramesVerified;
    obj1[1] = items3;
    items4 = [, , ];
    items4[0] = tmp10(tmp12, obj1);
    obj4 = { style: tmp.channelSubtitle, variant: "text-sm/medium", accessibilityRole: "summary", children: stateFromStores };
    items4[1] = tmp13(require("Text").Text, obj4);
    if (isSecureFramesUIEnabled) {
      obj5 = { style: null, children: null };
      obj5[0] = tmp.secureFrames;
      tmp6Result = require("set");
      items5 = [, ];
      items5[0] = tmp13(require("LockIcon").LockIcon, { size: "xxs", color: "status-positive" });
      obj6 = { variant: "text-xs/medium", color: "status-positive", children: null };
      intl2 = require("getSystemLocale").intl;
      obj6[2] = intl2.string(require("getSystemLocale").t["3BogKe"]);
      items5[1] = tmp13(require("Text").Text, obj6);
      obj5[1] = items5;
      isSecureFramesUIEnabled = tmp10(tmp6Result, obj5);
    }
    items4[2] = isSecureFramesUIEnabled;
    obj[1] = items4;
    return tmp10(tmp11, obj);
  }
}
function ShareActivityLogsButton() {
  const callback = importAllResult.useCallback(() => {
    let obj = callback(table[26]);
    const items = [closure_15];
    const json = obj.stringify(items);
    if ("" === json) {
      obj = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = tmp(tmp2[24]).intl;
      obj[1] = intl.string(tmp(tmp2[24]).t["i+9VWy"]);
      callback2(tmp2[27]).open(obj);
      const obj5 = callback2(tmp2[27]);
    } else {
      let tmpResult = tmp(tmp2[28]);
      const result = tmpResult.closeVoicePanelSettingsActionSheet();
      tmpResult = tmp(tmp2[29]);
      obj = { message: null };
      obj[0] = json;
      tmpResult.showShareActionSheet(obj, "Activity Logs");
    }
  }, []);
  let obj = { onPress: callback, icon: null, label: null, trailing: null };
  obj = { IconComponent: WrenchIcon.WrenchIcon, source: registerAssetDefault };
  obj[1] = callback(TableRowIcon.TableRowIcon, obj);
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.iQzQs3);
  obj[3] = callback(TableRowArrow.TableRowArrow, {});
  return callback(TableRowInner.TableRow, obj);
}
function ActivityDebugToggle() {
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const callback = importAllResult.useCallback((visible) => {
    let obj = callback(table[35]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  }, []);
  obj = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null };
  obj = { IconComponent: WrenchIcon.WrenchIcon, source: registerAssetDefault };
  obj[0] = callback(TableRowIcon.TableRowIcon, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["qv5/SP"]);
  obj[2] = stateFromStores;
  obj[3] = callback;
  const intl2 = getSystemLocale.intl;
  obj[4] = intl2.string(getSystemLocale.t["qv5/SP"]);
  return callback(TableSwitchRow.TableSwitchRow, obj);
}
let c3 = importAllResult;
({ AnalyticsSections: map1, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = ME);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let obj = { headerContainer: { alignItems: "center" }, channelTitleWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 }, channelTitle: { textAlign: "center" }, channelSubtitle: { marginTop: 4, marginHorizontal: 16, textAlign: "center" }, secureFrames: null, secureFramesIcon: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, marginTop: 8, padding: 4, gap: 4 };
obj[4] = obj;
obj[5] = { marginStart: 4 };
let closure_21 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function VoicePanelSettingsOverview(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores3;
  let stateFromStores4;
  let isSecureFramesUIEnabled;
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[16]);
  let items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getChannel(channelId));
  const DeveloperMode = guildId(stateFromStores[37]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  obj1 = guildId(stateFromStores[16]);
  const items1 = [closure_12];
  stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_12.getVoiceStatesForChannelAlt(channelId, guildId));
  let obj2 = guildId(stateFromStores[16]);
  const items2 = [closure_11];
  const items3 = [stateFromStores, stateFromStores1];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    if (null != stateFromStores) {
      if (obj.isPrivate()) {
        const _Set = Set;
        const set = new Set(stateFromStores1.map((user) => user.user.id));
        const items = [];
        const recipients = obj.recipients;
        for (const item10020 of recipients) {
          let tmp9 = closure_1_11;
          let tmp8 = item10020;
          let user = closure_1_11.getUser(item10020);
          let hasItem = null == user;
          let tmp11 = user;
          if (!hasItem) {
            let tmp13 = item10020;
            hasItem = set.has(tmp8);
          }
          if (!hasItem) {
            let tmp14 = user;
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
  const items4 = [closure_9];
  const stateFromStores2 = obj3.useStateFromStores(items4, () => selfDeaf.isSelfDeaf());
  const callback = stateFromStores1.useCallback(() => {
    channelId(stateFromStores[38]).toggleSelfDeaf();
  }, []);
  let obj4 = guildId(stateFromStores[16]);
  const items5 = [stateFromStores4];
  stateFromStores3 = obj4.useStateFromStores(items5, () => stateFromStores4.getVoiceParticipantsHidden(channelId));
  let obj5 = guildId(stateFromStores[16]);
  const items6 = [stateFromStores4, closure_7];
  stateFromStores4 = obj5.useStateFromStores(items6, () => {
    const selectedParticipant = stateFromStores4.getSelectedParticipant(channelId);
    let id = null;
    if (closure_1_16(selectedParticipant)) {
      id = null;
      if (selectedParticipant.stream.ownerId !== closure_1_7.getId()) {
        id = selectedParticipant.id;
      }
    }
    return id;
  });
  const items7 = [channelId, stateFromStores3];
  const items8 = [channelId];
  const callback1 = stateFromStores1.useCallback(() => {
    const result = channelId(stateFromStores[39]).toggleVoiceParticipantsHidden(channelId, !stateFromStores3);
  }, items7);
  const items9 = [guildId];
  const callback2 = stateFromStores1.useCallback(() => {
    const result = guildId(stateFromStores[28]).closeVoicePanelSettingsActionSheet();
    const obj = guildId(stateFromStores[28]);
    channelId(stateFromStores[40]).open(channelId);
  }, items8);
  const items10 = [channelId];
  const callback3 = stateFromStores1.useCallback(() => {
    const result = guildId(stateFromStores[28]).closeVoicePanelSettingsActionSheet();
    const obj = guildId(stateFromStores[28]);
    const result1 = guildId(stateFromStores[41]).showVoiceSettingsActionSheet(guildId);
  }, items9);
  const items11 = [channelId, stateFromStores4];
  const callback4 = stateFromStores1.useCallback(() => {
    let obj = channelId(stateFromStores[42]);
    obj = { channelId };
    obj.openLazy(guildId(stateFromStores[44])(stateFromStores[43], stateFromStores.paths), closure_1_17, obj);
  }, items10);
  const callback5 = stateFromStores1.useCallback(() => {
    if (null != stateFromStores4) {
      const result = channelId(stateFromStores[45]).openSecureFramesStreamVerification(tmp, channelId);
      const obj = channelId(stateFromStores[45]);
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
  const items13 = [closure_10];
  const items14 = [channelId];
  const stateFromStores6 = obj9.useStateFromStores(items13, () => closure_1_10.canWithPartialContext(closure_1_14.MANAGE_CHANNELS, { channelId }), items14);
  let obj10 = guildId(stateFromStores[48]);
  const canInviteMembers = obj10.useCanInviteMembers(channelId);
  let obj11 = guildId(stateFromStores[49]);
  const tmp18 = channelId(stateFromStores[47])(stateFromStores);
  const inviteMembersCallback = obj11.useInviteMembersCallback(channelId);
  let obj12 = guildId(stateFromStores[19]);
  isSecureFramesUIEnabled = obj12.useIsSecureFramesUIEnabled({ channelId });
  const children = [callback(VoicePanelSettingsOverviewHeader, { guildId, channelId }), , , , , ];
  let tmp26Result = null;
  if (tmp22) {
    obj = { hasIcons: false, children: null };
    obj = { channel: null, analyticsSection: null };
    obj[0] = stateFromStores;
    obj[1] = constants.CHANNEL_ACTION_SHEET;
    obj[1] = tmp26(tmp17(tmp2[52]), obj);
    tmp26Result = tmp26(tmp(tmp2[51]).VoicePanelFormSection, obj);
  }
  children[1] = tmp26Result;
  let tmp26Result1 = stateFromStores6;
  if (!stateFromStores6) {
    tmp26Result1 = tmp18;
  }
  if (tmp26Result1) {
    tmp26Result = stateFromStores6;
    if (stateFromStores6) {
      obj1 = { onPress: null, label: null, subLabel: null, trailing: null };
      obj1[0] = callback2;
      const intl = tmp(tmp2[24]).intl;
      obj1[1] = intl.string(tmp(tmp2[24]).t.XPDhcc);
      const intl2 = tmp(tmp2[24]).intl;
      obj1[2] = intl2.string(tmp(tmp2[24]).t.w7ZEot);
      obj1[3] = tmp26(tmp(tmp2[34]).TableRowArrow, {});
      tmp26Result = tmp26(tmp(tmp2[30]).TableRow, obj1);
    }
    obj2 = { hasIcons: false, children: null };
    obj2[1] = tmp26Result;
    tmp26Result1 = tmp26(tmp(tmp2[51]).VoicePanelFormSection, obj2);
  }
  children[2] = tmp26Result1;
  obj3 = { onPress: callback3, icon: null, label: null, subLabel: null, trailing: null };
  obj4 = { IconComponent: tmp(tmp2[53]).SettingsIcon, source: tmp17(tmp2[54]) };
  obj3[1] = callback(tmp(tmp2[31]).TableRowIcon, obj4);
  const intl3 = tmp(tmp2[24]).intl;
  obj3[2] = intl3.string(tmp(tmp2[24]).t.NiTd0e);
  const intl4 = tmp(tmp2[24]).intl;
  obj3[3] = intl4.string(tmp(tmp2[24]).t["16SG+O"]);
  obj3[4] = callback(tmp(tmp2[34]).TableRowArrow, {});
  const items16 = [callback(tmp(tmp2[30]).TableRow, obj3), , , , ];
  obj5 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj6 = { IconComponent: tmp(tmp2[55]).HeadphonesSlashIcon, source: tmp17(tmp2[56]) };
  obj5[0] = callback(tmp(tmp2[31]).TableRowIcon, obj6);
  const intl5 = tmp(tmp2[24]).intl;
  obj5[1] = intl5.string(tmp(tmp2[24]).t.wjcRFX);
  obj5[2] = stateFromStores2;
  obj5[3] = callback;
  const intl6 = tmp(tmp2[24]).intl;
  obj5[4] = intl6.string(tmp(tmp2[24]).t.wjcRFX);
  const intl7 = tmp(tmp2[24]).intl;
  obj5[5] = intl7.string(tmp(tmp2[24]).t.M3VN2U);
  items16[1] = callback(tmp(tmp2[36]).TableSwitchRow, obj5);
  obj7 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj8 = { IconComponent: tmp(tmp2[57]).VideoIcon, source: tmp17(tmp2[58]) };
  obj7[0] = callback(tmp(tmp2[31]).TableRowIcon, obj8);
  const intl8 = tmp(tmp2[24]).intl;
  obj7[1] = intl8.string(tmp(tmp2[24]).t.ZMTRyc);
  obj7[2] = stateFromStores3;
  obj7[3] = callback1;
  const intl9 = tmp(tmp2[24]).intl;
  obj7[4] = intl9.string(tmp(tmp2[24]).t.ZMTRyc);
  const intl10 = tmp(tmp2[24]).intl;
  obj7[5] = intl10.string(tmp(tmp2[24]).t.MlpCFS);
  items16[2] = callback(tmp(tmp2[36]).TableSwitchRow, obj7);
  let tmp26Result2 = isSecureFramesUIEnabled;
  if (isSecureFramesUIEnabled) {
    tmp26Result2 = null == stateFromStores4;
  }
  if (tmp26Result2) {
    tmp26Result2 = !isCallRTCConnectionEmpty;
  }
  if (tmp26Result2) {
    obj9 = { onPress: null, icon: null, label: null, subLabel: null, trailing: null };
    obj9[0] = callback4;
    obj10 = { IconComponent: null, source: null };
    obj10[0] = tmp(tmp2[25]).LockIcon;
    obj10[1] = tmp17(tmp2[54]);
    obj9[1] = tmp26(tmp(tmp2[31]).TableRowIcon, obj10);
    const intl11 = tmp(tmp2[24]).intl;
    obj9[2] = intl11.string(tmp(tmp2[24]).t.cTQI5t);
    const intl12 = tmp(tmp2[24]).intl;
    obj9[3] = intl12.string(tmp(tmp2[24]).t.Etxti2);
    obj9[4] = tmp26(tmp(tmp2[34]).TableRowArrow, {});
    tmp26Result2 = tmp26(tmp(tmp2[30]).TableRow, obj9);
  }
  items16[3] = tmp26Result2;
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = null != stateFromStores4;
  }
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = !isStreamRTCConnectionEmpty;
  }
  if (isSecureFramesUIEnabled) {
    obj11 = { onPress: null, icon: null, label: null, subLabel: null, trailing: null };
    obj11[0] = callback5;
    obj12 = { IconComponent: null, source: null };
    obj12[0] = tmp(tmp2[25]).LockIcon;
    obj12[1] = tmp17(tmp2[54]);
    obj11[1] = tmp26(tmp(tmp2[31]).TableRowIcon, obj12);
    const intl13 = tmp(tmp2[24]).intl;
    obj11[2] = intl13.string(tmp(tmp2[24]).t.QogHld);
    const intl14 = tmp(tmp2[24]).intl;
    obj11[3] = intl14.string(tmp(tmp2[24]).t["j5+1ed"]);
    obj11[4] = tmp26(tmp(tmp2[34]).TableRowArrow, {});
    isSecureFramesUIEnabled = tmp26(tmp(tmp2[30]).TableRow, obj11);
  }
  items16[4] = isSecureFramesUIEnabled;
  children[3] = closure_19(tmp(tmp2[51]).VoicePanelFormSection, { hasIcons: true, children: items16 });
  let tmp24Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp24Result) {
    const obj13 = { title: null, hasIcons: true, children: null };
    const intl15 = tmp(tmp2[24]).intl;
    const obj14 = { count: null };
    const _HermesInternal = HermesInternal;
    obj14[0] = "" + stateFromStores1.length;
    const _HermesInternal2 = HermesInternal;
    obj13[0] = "" + intl15.formatToPlainString(tmp(tmp2[24]).t.AWmdd9, obj14);
    let tmp26Result3 = null;
    if (canInviteMembers) {
      const obj15 = { onPress: null, icon: null, label: null, trailing: null };
      obj15[0] = inviteMembersCallback;
      const obj16 = { IconComponent: null, source: null };
      obj16[0] = tmp(tmp2[59]).GroupPlusIcon;
      obj16[1] = tmp17(tmp2[60]);
      obj15[1] = tmp26(tmp(tmp2[31]).TableRowIcon, obj16);
      const intl16 = tmp(tmp2[24]).intl;
      obj15[2] = intl16.string(tmp(tmp2[24]).t["f1+QIK"]);
      obj15[3] = tmp26(tmp(tmp2[34]).TableRowArrow, {});
      tmp26Result3 = tmp26(tmp(tmp2[30]).TableRow, obj15);
    }
    const items17 = [
      tmp26Result3,
      stateFromStores1.map((user) => {
          const obj = { user: user.user, selfStream: user.voiceState.selfStream, nick, channelId, guildId, showSecureFramesUI: isSecureFramesUIEnabled, showGameActivity: true };
          nick = user.nick;
          return closure_1_18(guildId(stateFromStores[51]).MemberRowItem, obj, user.user.id);
        }),
      stateFromStoresArray.map((id) => closure_1_18(guildId(stateFromStores[51]).MemberRowItem, { user: id, channelId, guildId, notConnected: true, showRing: true }, id.id))
    ];
    obj13[2] = items17;
    tmp24Result = tmp24(tmp(tmp2[51]).VoicePanelFormSection, obj13);
  }
  children[4] = tmp24Result;
  tmp24Result = null;
  if (setting) {
    const obj17 = { title: null, hasIcons: true, children: null };
    const intl17 = tmp(tmp2[24]).intl;
    obj17[0] = intl17.string(tmp(tmp2[24]).t.J6rqB7);
    let tmp26Result4 = null;
    if (stateFromStores5) {
      tmp26Result4 = tmp26(ShareActivityLogsButton, {});
    }
    const items18 = [tmp26Result4, tmp26(ActivityDebugToggle, {})];
    obj17[2] = items18;
    tmp24Result = tmp24(tmp(tmp2[51]).VoicePanelFormSection, obj17);
  }
  children[5] = tmp24Result;
  return closure_19(closure_20, { children });
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default memoResult;
export { VoicePanelSettingsOverviewHeader };