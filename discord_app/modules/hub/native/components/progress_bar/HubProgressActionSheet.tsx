// === Module 12673: HubProgressActionSheet ===

// Module 12673 (HubProgressActionSheet)
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "comparator" /* 2012 */;
import items from "items" /* 9831 */;
import ME from "ME" /* 1074 */;
import { DirectoryChannelScrollBehavior as closure_12 } from "GuildDirectoryCreate" /* 12310 */;
import Steps from "Steps" /* 12469 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_6, HUB_PROGRESS_NUM_TOTAL_STEPS: error } = items);
({ AnalyticEvents: closure_8, AnalyticsLocations: c9, InstantInviteSources: c10, Routes: unpackModuleId } = ME);
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = Steps);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = createCacheKey.createStyles({ container: { padding: 16 }, footer: { marginTop: 12, display: "flex", alignItems: "center" } });
let result = require("set").fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default function HubProgressActionSheet(guild) {
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let hubProgressBarCompletedSteps;
  let size;
  closure_4 = undefined;
  const tmp = callback2();
  let obj = guild(hubProgressBarCompletedSteps[10]);
  hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  size = hubProgressBarCompletedSteps.size;
  const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[11]).MIN_PROGRESS_PERCENT, 100 * size / closure_7);
  closure_4 = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    closure_4.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    let obj = analyticsSource(hubProgressBarCompletedSteps[12]);
    obj = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
    obj.track(closure_1_8.OPEN_MODAL, obj);
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
    let obj = analyticsSource(hubProgressBarCompletedSteps[12]);
    obj = { setup_type: closure_1_14.HUB_PROGRESS, action: closure_1_13.DISMISS, num_total_actions: closure_1_7, num_actions_completed: size };
    obj.track(closure_1_8.SERVER_SETUP_CTA_CLICKED, obj);
    guild(hubProgressBarCompletedSteps[13]).skipHubProgress(guild.id);
    const obj3 = guild(hubProgressBarCompletedSteps[13]);
    analyticsSource(hubProgressBarCompletedSteps[8]).hideActionSheet(closure_1_6);
  }
  obj = { style: tmp.container, children: null };
  obj = { title: stringResult, subtitle: null };
  const intl2 = tmp2(tmp3[14]).intl;
  obj[1] = intl2.format(guild(hubProgressBarCompletedSteps[14]).t.l6iRLs, {
    numFinished: size,
    total: closure_7,
    stepsHook(children) {
      return callback(guild(hubProgressBarCompletedSteps[16]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items1 = [callback(guild(hubProgressBarCompletedSteps[15]).GuildProgressHeader, obj), , , , ];
  let obj2 = {
    onPress() {
      const defaultChannel = closure_1_5.getDefaultChannel(guild.id);
      if (null != defaultChannel) {
        let obj = guild(hubProgressBarCompletedSteps[18]);
        obj = { state: null };
        obj = { scrollBehavior: null };
        obj[0] = closure_1_12.GUILD_LIST_TOP;
        obj[0] = obj;
        obj.transitionTo(closure_1_11.CHANNEL(guild.id, defaultChannel.id), obj);
        analyticsSource(hubProgressBarCompletedSteps[8]).hideActionSheet(closure_1_6);
        const obj4 = analyticsSource(hubProgressBarCompletedSteps[8]);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[19]),
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const intl3 = tmp2(tmp3[14]).intl;
  obj2[2] = intl3.string(guild(hubProgressBarCompletedSteps[14]).t.iNR25n);
  obj2[3] = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.JOIN_GUILD);
  obj2[4] = constants2.HUB_PROGRESS;
  obj2[5] = constants.JOIN_GUILD;
  items1[1] = callback(analyticsSource(hubProgressBarCompletedSteps[17]), obj2);
  let obj3 = {
    onPress() {
      const defaultChannel = closure_1_5.getDefaultChannel(guild.id);
      const channels = closure_1_5.getChannels(guild.id);
      if (tmp4) {
        const obj = guild(hubProgressBarCompletedSteps[21]);
        const result = obj.handleOpenInviteActionsheet(tmp, defaultChannel.id, channels, closure_1_10.HUB_PROGRESS);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  obj1 = {
    numFinished: size,
    total: closure_7,
    stepsHook(children) {
      return callback(guild(hubProgressBarCompletedSteps[16]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  };
  const tmp12 = analyticsSource(hubProgressBarCompletedSteps[17]);
  const tmp4 = closure_7;
  const tmp9 = closure_16;
  obj3[1] = analyticsSource(hubProgressBarCompletedSteps[22]);
  const intl4 = tmp2(tmp3[14]).intl;
  obj3[2] = intl4.string(guild(hubProgressBarCompletedSteps[14]).t["3NlTYU"]);
  obj3[3] = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.INVITE_USER);
  obj3[4] = constants2.HUB_PROGRESS;
  obj3[5] = constants.INVITE;
  items1[2] = callback(analyticsSource(hubProgressBarCompletedSteps[17]), obj3);
  let obj4 = {
    onPress() {
      if (!hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC)) {
        guild(tmp2[23]).openContactSyncModal({}, closure_1_9.HUB_PROGRESS);
        const tmpResult = guild(tmp2[23]);
        analyticsSource(tmp2[8]).hideActionSheet(closure_1_6);
        const obj2 = analyticsSource(tmp2[8]);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const tmp13 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj4[1] = analyticsSource(hubProgressBarCompletedSteps[24]);
  const intl5 = tmp2(tmp3[14]).intl;
  obj4[2] = intl5.string(guild(hubProgressBarCompletedSteps[14]).t.HFvFte);
  obj4[3] = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC);
  obj4[4] = constants2.HUB_PROGRESS;
  obj4[5] = constants.CONTACT_SYNC;
  items1[3] = callback(analyticsSource(hubProgressBarCompletedSteps[17]), obj4);
  const obj5 = { style: items2, children: null };
  items2 = [tmp.footer];
  if (tmp5) {
    const obj6 = { text: null, onPress: null };
    const intl7 = tmp2(tmp3[14]).intl;
    obj6[0] = intl7.string(tmp2(tmp3[14]).t["0/5zhg"]);
    obj6[1] = handleFinishPress;
    let tmp11Result = tmp11(tmp2(tmp3[25]).Button, obj6);
  } else {
    const obj7 = { accessibilityRole: "button", onPress: null, children: null };
    obj7[1] = handleFinishPress;
    const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = tmp2(tmp3[14]).intl;
    obj8[2] = intl6.string(tmp2(tmp3[14]).t["9E36wf"]);
    obj7[2] = tmp11(tmp2(tmp3[16]).Text, obj8);
    tmp11Result = tmp11(tmp2(tmp3[26]).PressableOpacity, obj7);
  }
  obj5[1] = tmp11Result;
  items1[4] = callback(closure_4, obj5);
  obj[1] = items1;
  const children = tmp9(tmp10, obj);
  return callback(guild(hubProgressBarCompletedSteps[27]).BottomSheet, { startExpanded: true, children });
};