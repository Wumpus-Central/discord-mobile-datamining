// discord_app/modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx
import router_utils from "../../../../routing/router_utils.tsx";
import preloaded_user_settings from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../../instant_invite/native/InstantInviteUtils.tsx";
import HubProgressActionCreators from "../../../HubProgressActionCreators.tsx";
import ContactSyncModalActionCreators from "../../../../contact_sync/native/ContactSyncModalActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../../stores/GuildChannelStore.tsx";

require = fn;
const View = fn(17).View;
const HubProgressBarConstants = fn(10087);
({ HUB_PROGRESS_ACTION_SHEET_ID: metroRequire, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_7 } = HubProgressBarConstants);
const Constants = fn(1074);
({
  AnalyticEvents: closure_8,
  AnalyticsLocations: closure_9,
  InstantInviteSources: c10,
  Routes: closure_11,
} = Constants);
let closure_12 = fn(12564).DirectoryChannelScrollBehavior;
const GuildProgressConstants = fn(12723);
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = GuildProgressConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4756);
let closure_17 = createStyles.createStyles({
  container: { padding: 16 },
  footer: { marginTop: 12, display: "flex", alignItems: "center" },
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default function HubProgressActionSheet(guild) {
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let hubProgressBarCompletedSteps;
  const tmp = closure_17();
  hubProgressBarCompletedSteps = guild(hubProgressBarCompletedSteps[10]).useHubProgressBarCompletedSteps(guild);
  const size = hubProgressBarCompletedSteps.size;
  const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[11]).MIN_PROGRESS_PERCENT, (100 * size) / total);
  const ref = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    closure_4.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
      type: "Hub Progress Action Sheet",
      guild_id: guild.id,
      source: ref.current,
    });
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
    AnalyticsUtilsDefault.track(constants.SERVER_SETUP_CTA_CLICKED, {
      setup_type: constants5.HUB_PROGRESS,
      action: constants4.DISMISS,
      num_total_actions,
      num_actions_completed: size,
    });
    const obj2 = {
      setup_type: constants5.HUB_PROGRESS,
      action: constants4.DISMISS,
      num_total_actions,
      num_actions_completed: size,
    };
    HubProgressActionCreators.skipHubProgress(guild.id);
    ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
  }
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { title: stringResult, subtitle: null };
  const intl2 = tmp2(tmp3[14]).intl;
  obj3.subtitle = intl2.format(guild(hubProgressBarCompletedSteps[14]).t.l6iRLs, {
    numFinished: size,
    total,
    stepsHook(children, arg1) {
      return closure_1_15(
        guild(hubProgressBarCompletedSteps[16]).Text,
        { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
        arg1,
      );
    },
  });
  const items1 = [closure_15(guild(hubProgressBarCompletedSteps[15]).GuildProgressHeader, obj3), , , ,];
  const obj5 = {
    onPress() {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      if (null != defaultChannel) {
        const obj2 = { state: null };
        const obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
        obj2.state = obj3;
        router_utils.transitionTo(closure_2_11.CHANNEL(guild.id, defaultChannel.id), obj2);
        ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null,
  };
  let obj = guild(hubProgressBarCompletedSteps[10]);
  let obj4 = {
    numFinished: size,
    total,
    stepsHook(children, arg1) {
      return closure_1_15(
        guild(hubProgressBarCompletedSteps[16]).Text,
        { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
        arg1,
      );
    },
  };
  obj5.source = analyticsSource(hubProgressBarCompletedSteps[19]);
  const intl3 = tmp2(tmp3[14]).intl;
  obj5.title = intl3.string(guild(hubProgressBarCompletedSteps[14]).t.iNR25n);
  obj5.isCompleted = hubProgressBarCompletedSteps.has(
    guild(hubProgressBarCompletedSteps[20]).HubProgressStep.JOIN_GUILD,
  );
  obj5.analyticsSetupType = constants5.HUB_PROGRESS;
  obj5.analyticsAction = constants4.JOIN_GUILD;
  items1[1] = closure_15(analyticsSource(hubProgressBarCompletedSteps[17]), obj5);
  const obj6 = {
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
    analyticsAction: null,
  };
  const tmp12 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj6.source = analyticsSource(hubProgressBarCompletedSteps[22]);
  const intl4 = tmp2(tmp3[14]).intl;
  obj6.title = intl4.string(guild(hubProgressBarCompletedSteps[14]).t["3NlTYU"]);
  obj6.isCompleted = hubProgressBarCompletedSteps.has(
    guild(hubProgressBarCompletedSteps[20]).HubProgressStep.INVITE_USER,
  );
  obj6.analyticsSetupType = constants5.HUB_PROGRESS;
  obj6.analyticsAction = constants4.INVITE;
  items1[2] = closure_15(analyticsSource(hubProgressBarCompletedSteps[17]), obj6);
  const obj7 = {
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
    analyticsAction: null,
  };
  const tmp13 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj7.source = analyticsSource(hubProgressBarCompletedSteps[24]);
  const intl5 = tmp2(tmp3[14]).intl;
  obj7.title = intl5.string(guild(hubProgressBarCompletedSteps[14]).t.HFvFte);
  obj7.isCompleted = hubProgressBarCompletedSteps.has(
    guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC,
  );
  obj7.analyticsSetupType = constants5.HUB_PROGRESS;
  obj7.analyticsAction = constants4.CONTACT_SYNC;
  items1[3] = closure_15(analyticsSource(hubProgressBarCompletedSteps[17]), obj7);
  const obj8 = { style: null, children: null };
  const items2 = [tmp.footer];
  obj8.style = items2;
  if (tmp5) {
    const obj9 = { text: null, onPress: null };
    const intl7 = tmp2(tmp3[14]).intl;
    obj9.text = intl7.string(tmp2(tmp3[14]).t["0/5zhg"]);
    obj9.onPress = handleFinishPress;
    let tmp11Result = closure_15(tmp2(tmp3[25]).Button, obj9);
  } else {
    const obj10 = { accessibilityRole: "button", onPress: handleFinishPress, children: null };
    const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = tmp2(tmp3[14]).intl;
    obj11.children = intl6.string(tmp2(tmp3[14]).t["9E36wf"]);
    obj10.children = closure_15(tmp2(tmp3[16]).Text, obj11);
    tmp11Result = closure_15(tmp2(tmp3[26]).PressableOpacity, obj10);
  }
  obj8.children = tmp11Result;
  items1[4] = closure_15(ref, obj8);
  obj2.children = items1;
  const children = closure_16(tmp10, obj2);
  return closure_15(guild(hubProgressBarCompletedSteps[27]).BottomSheet, { startExpanded: true, children });
}
