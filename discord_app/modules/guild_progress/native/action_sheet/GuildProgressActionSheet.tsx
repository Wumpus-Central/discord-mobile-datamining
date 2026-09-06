// === Module 12476: GuildProgressActionSheet ===

// Module 12476 (GuildProgressActionSheet)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12474 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12477 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12479 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;

require = fn;
class GuildProgressHeader {
  constructor(arg0) {
    ({ title, subtitle } = global);
    tmp = closure_16();
    obj = { style: tmp.header, children: null };
    obj = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items = [, ];
    items[0] = jsx(closure_0(closure_2[29]).Text, obj);
    obj1 = { style: tmp.headerSubtitle, children: subtitle };
    items[1] = jsx(closure_0(closure_2[33]).LegacyText, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const GuildProgressConstants = fn(12469);
({ AnalyticsSetupTypes: closure_8, AnalyticsActions: closure_9 } = GuildProgressConstants);
const Constants = fn(1074);
({ UPLOAD_MEDIUM_SIZE: c10, AnalyticEvents: closure_11, ComponentActions: closure_12, InstantInviteSources: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16 }, header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 }, headerTitle: { marginBottom: 8, textAlign: "center" }, headerSubtitle: null, footer: null, center: null };
createStyles = { fontSize: 14, fontWeight: "500", color: nativeDefault.colors.TEXT_SUBTLE };
createStyles.headerSubtitle = createStyles;
createStyles.footer = { marginTop: 4 };
createStyles.center = { alignItems: "center" };
const value = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default function GuildProgressActionSheet(guild) {
  guild = guild.guild;
  let numFinished;
  const errors = async function _addServerIcon(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let base64;
            tmp5(9063).init(View);
            const obj6 = tmp5(9063);
            tmp2(12474).hideActionSheet(id.id);
            const obj7 = tmp2(12474);
            const obj1 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: tmp5(5138).openImagePicker(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          base64 = value.base64;
          if (null != base64) {
            obj = tmp5(9063);
            obj.updateIcon(closure_129_5, base64);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  };
  const tmp = closure_16();
  let obj = guild(numFinished[10]);
  const items = [GuildChannelStore];
  importDefault = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  let obj1 = guild(numFinished[11]);
  const iOSCompletionStates = obj1.useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  const totalSteps = iOSCompletionStates.totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, showBoostStep } = iOSCompletionStates);
  let obj2 = guild(numFinished[10]);
  const items1 = [errors];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => errors.getErrors());
  const id = guild.id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = stateFromStoresObject.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items2);
  const items3 = [id];
  const effect = stateFromStoresObject.useEffect(() => {
    const obj = { type: "Guild Progress Sheet", guild_id: id };
    obj.track(constants3.OPEN_POPOUT, obj);
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = stateFromStoresObject.useEffect(() => {
    if (numFinished === totalSteps) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(id);
    }
  }, items4);
  obj = {
    onPress: function inviteFriends() {
      if (null != closure_1) {
        const obj = { source: constants5.GUILD_PROGRESS };
        const result = obj.showInstantInviteActionSheet(tmp, obj);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  obj = { uri: require("module_6232") };
  obj.source = obj;
  const intl = guild(numFinished[18]).intl;
  obj.title = intl.string(guild(numFinished[18]).t.q9n0Ta);
  obj.isCompleted = guildPopulated;
  obj.analyticsSetupType = constants.GUILD_PROGRESS;
  obj.analyticsAction = constants2.INVITE;
  const tmp11 = require("ProgressItem");
  const tmp12 = constants;
  const tmp13 = constants2;
  obj1 = {
    onPress: function addServerIcon() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  obj2 = { uri: null };
  const tmp14 = closure_14(require("ProgressItem"), obj);
  obj2.uri = require("module_5812");
  obj1.source = obj2;
  const intl2 = guild(numFinished[18]).intl;
  obj1.title = intl2.string(guild(numFinished[18]).t.DWB2YZ);
  obj1.isCompleted = guildPersonalized;
  obj1.analyticsSetupType = constants.GUILD_PROGRESS;
  obj1.analyticsAction = constants2.PERSONALIZE_SERVER;
  const tmp15 = require("ProgressItem");
  let obj3 = {
    onPress: function goToChannel() {
      if (null != closure_1) {
        let obj = transitionToChannel;
        obj.transitionToChannel(tmp.id);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
      let tmp6;
      if (null != closure_1) {
        obj = { channelId: tmp.id };
        tmp6 = obj;
      }
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants4.TEXTAREA_FOCUS, tmp6);
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const obj4 = { uri: null };
  const tmp16 = closure_14(require("ProgressItem"), obj1);
  obj4.uri = require("module_6348");
  obj3.source = obj4;
  const intl3 = guild(numFinished[18]).intl;
  obj3.title = intl3.string(guild(numFinished[18]).t.dNktpr);
  obj3.isCompleted = guildMessaged;
  obj3.analyticsSetupType = constants.GUILD_PROGRESS;
  obj3.analyticsAction = constants2.SEND_MESSAGE;
  let tmp9Result = null;
  const tmp17 = require("ProgressItem");
  if (showBoostStep) {
    const obj5 = {
      onPress: function goToBoosts() {
          let obj = GuildProgressUtils;
          obj.hideActionSheet(id);
          obj = { guildId: id, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_GUILD_PROGRESS };
          openGuildPowerupsModalDefault(obj);
        },
      source: null,
      title: null,
      isCompleted: null,
      analyticsSetupType: null,
      analyticsAction: null
    };
    let obj6 = { uri: tmp10(tmp3[28]) };
    obj5.source = obj6;
    const intl4 = tmp2(tmp3[18]).intl;
    obj5.title = intl4.string(tmp2(tmp3[18]).t["6Qbqxw"]);
    obj5.isCompleted = guildBoosted;
    obj5.analyticsSetupType = tmp12.GUILD_PROGRESS;
    obj5.analyticsAction = tmp13.BOOST;
    tmp9Result = tmp9(tmp10(tmp3[15]), obj5);
    const tmp10Result = tmp10(tmp3[15]);
  }
  let obj7 = { style: tmp.container, children: null };
  const obj8 = { title: null, subtitle: null };
  const intl5 = tmp2(tmp3[18]).intl;
  obj8.title = intl5.string(guild(numFinished[18]).t["tu/tr8"]);
  const intl6 = tmp2(tmp3[18]).intl;
  obj8.subtitle = intl6.format(guild(numFinished[18]).t.l6iRLs, {
    numFinished,
    total: totalSteps,
    stepsHook(children, arg1) {
      return closure_1_14(guild(numFinished[29]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items5 = [closure_14(GuildProgressHeader, obj8), tmp14, tmp16, closure_14(require("ProgressItem"), obj3), tmp9Result, ];
  const items6 = [tmp.footer, ];
  let center = null;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  function handleDismissGuildProgress() {
    let obj = GuildProgressActionCreatorsDefault;
    obj.dismissProgress(guild.id);
    ActionSheetActionCreatorsDefault.hideActionSheet("guild-progress-" + guild.id);
    obj = { action: constants2.DISMISS_GUILD_PROGRESS, setup_type: constants.GUILD_PROGRESS, num_total_actions: totalSteps, num_actions_completed: numFinished };
    AnalyticsUtilsDefault.track(constants3.SERVER_SETUP_CTA_CLICKED, obj);
  }
  const obj10 = { style: items6, children: null };
  items6[1] = center;
  if (numFinished === totalSteps) {
    const obj11 = { variant: "primary", grow: true, onPress: handleDismissGuildProgress, text: null };
    const intl8 = tmp2(tmp3[18]).intl;
    obj11.text = intl8.string(tmp2(tmp3[18]).t["0/5zhg"]);
    tmp9Result = tmp9(tmp2(tmp3[30]).Button, obj11);
  } else {
    const obj12 = { accessibilityRole: "button", onPress: handleDismissGuildProgress, children: null };
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl7 = tmp2(tmp3[18]).intl;
    obj13.children = intl7.string(tmp2(tmp3[18]).t["9E36wf"]);
    obj12.children = tmp9(tmp2(tmp3[29]).Text, obj13);
    tmp9Result = tmp9(tmp2(tmp3[31]).PressableOpacity, obj12);
  }
  obj10.children = tmp9Result;
  items5[5] = closure_14(id, obj10);
  obj7.children = items5;
  const children = closure_15(tmp23, obj7);
  return closure_14(guild(numFinished[32]).ActionSheet, { showGradient: true, startExpanded: true, children });
};
export { GuildProgressHeader };