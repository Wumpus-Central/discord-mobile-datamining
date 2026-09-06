// === Module 12673: HubProgressActionSheet ===

// Module 12673 (HubProgressActionSheet)
import router_utils from "router_utils" /* 1100 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9830 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

require = fn;
const View = fn(17).View;
const HubProgressBarConstants = fn(9831);
({ HUB_PROGRESS_ACTION_SHEET_ID: metroRequire, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_7 } = HubProgressBarConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsLocations: closure_9, InstantInviteSources: c10, Routes: closure_11 } = Constants);
let closure_12 = fn(12310).DirectoryChannelScrollBehavior;
const GuildProgressConstants = fn(12469);
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = GuildProgressConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles({ container: { padding: 16 }, footer: { marginTop: 12, display: "flex", alignItems: "center" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default function HubProgressActionSheet(guild) {
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let hubProgressBarCompletedSteps;
  const tmp = closure_17();
  let obj = guild(hubProgressBarCompletedSteps[10]);
  hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const size = hubProgressBarCompletedSteps.size;
  const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[11]).MIN_PROGRESS_PERCENT, 100 * size / total);
  const ref = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    closure_4.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    const obj = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
    obj.track(constants.OPEN_MODAL, obj);
  }, items);
  const intl = guild(hubProgressBarCompletedSteps[14]).intl;
  const string = intl.string;
  const t = guild(hubProgressBarCompletedSteps[14]).t;
  if (tmp5) {
    let stringResult = string(t.zQ4gGo);
  } else {
    stringResult = string(t.hRVjpT);
  }
  function handleFinishPress() {
    const obj = { setup_type: constants5.HUB_PROGRESS, action: constants4.DISMISS, num_total_actions, num_actions_completed: size };
    obj.track(constants.SERVER_SETUP_CTA_CLICKED, obj);
    HubProgressActionCreators.skipHubProgress(guild.id);
    ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
  }
  obj = { style: tmp.container, children: null };
  obj = { title: stringResult, subtitle: null };
  const intl2 = tmp2(tmp3[14]).intl;
  obj.subtitle = intl2.format(guild(hubProgressBarCompletedSteps[14]).t.l6iRLs, {
    numFinished: size,
    total,
    stepsHook(children, arg1) {
      return closure_1_15(guild(hubProgressBarCompletedSteps[16]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items1 = [closure_15(guild(hubProgressBarCompletedSteps[15]).GuildProgressHeader, obj), , , , ];
  let obj2 = {
    onPress() {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      if (null != defaultChannel) {
        let obj = { state: null };
        obj = { scrollBehavior: constants.GUILD_LIST_TOP };
        obj.state = obj;
        obj.transitionTo(closure_2_11.CHANNEL(guild.id, defaultChannel.id), obj);
        ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[19]),
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const intl3 = tmp2(tmp3[14]).intl;
  obj2.title = intl3.string(guild(hubProgressBarCompletedSteps[14]).t.iNR25n);
  obj2.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.JOIN_GUILD);
  obj2.analyticsSetupType = constants5.HUB_PROGRESS;
  obj2.analyticsAction = constants4.JOIN_GUILD;
  items1[1] = closure_15(analyticsSource(hubProgressBarCompletedSteps[17]), obj2);
  let obj3 = {
    onPress() {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      const channels = GuildChannelStore.getChannels(guild.id);
      if (tmp4) {
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(guild, defaultChannel.id, channels, constants3.HUB_PROGRESS);
      }
      tmp4 = null != defaultChannel && null != channels;
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const obj1 = {
    numFinished: size,
    total,
    stepsHook(children, arg1) {
      return closure_1_15(guild(hubProgressBarCompletedSteps[16]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  };
  const tmp12 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj3.source = analyticsSource(hubProgressBarCompletedSteps[22]);
  const intl4 = tmp2(tmp3[14]).intl;
  obj3.title = intl4.string(guild(hubProgressBarCompletedSteps[14]).t["3NlTYU"]);
  obj3.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.INVITE_USER);
  obj3.analyticsSetupType = constants5.HUB_PROGRESS;
  obj3.analyticsAction = constants4.INVITE;
  items1[2] = closure_15(analyticsSource(hubProgressBarCompletedSteps[17]), obj3);
  let obj4 = {
    onPress() {
      if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
        ContactSyncModalActionCreators.openContactSyncModal({}, constants2.HUB_PROGRESS);
        const tmpResult = ContactSyncModalActionCreators;
        ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const tmp13 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj4.source = analyticsSource(hubProgressBarCompletedSteps[24]);
  const intl5 = tmp2(tmp3[14]).intl;
  obj4.title = intl5.string(guild(hubProgressBarCompletedSteps[14]).t.HFvFte);
  obj4.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC);
  obj4.analyticsSetupType = constants5.HUB_PROGRESS;
  obj4.analyticsAction = constants4.CONTACT_SYNC;
  items1[3] = closure_15(analyticsSource(hubProgressBarCompletedSteps[17]), obj4);
  const obj5 = { style: null, children: null };
  const items2 = [tmp.footer];
  obj5.style = items2;
  if (tmp5) {
    const obj6 = { text: null, onPress: null };
    const intl7 = tmp2(tmp3[14]).intl;
    obj6.text = intl7.string(tmp2(tmp3[14]).t["0/5zhg"]);
    obj6.onPress = handleFinishPress;
    let tmp11Result = closure_15(tmp2(tmp3[25]).Button, obj6);
  } else {
    const obj7 = { accessibilityRole: "button", onPress: handleFinishPress, children: null };
    const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = tmp2(tmp3[14]).intl;
    obj8.children = intl6.string(tmp2(tmp3[14]).t["9E36wf"]);
    obj7.children = closure_15(tmp2(tmp3[16]).Text, obj8);
    tmp11Result = closure_15(tmp2(tmp3[26]).PressableOpacity, obj7);
  }
  obj5.children = tmp11Result;
  items1[4] = closure_15(ref, obj5);
  obj.children = items1;
  const children = closure_16(tmp10, obj);
  return closure_15(guild(hubProgressBarCompletedSteps[27]).BottomSheet, { startExpanded: true, children });
};