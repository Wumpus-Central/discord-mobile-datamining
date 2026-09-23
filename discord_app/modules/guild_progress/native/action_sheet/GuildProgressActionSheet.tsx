// discord_app/modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildProgressUtils from "../GuildProgressUtils.tsx";
import GuildProgressActionCreatorsDefault from "../../GuildProgressActionCreators.tsx";
import openGuildPowerupsModalDefault from "../../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../guild_settings/GuildSettingsStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";

const require = globalThis.__r;

require = fn;
class GuildProgressHeader {
  constructor(arg0) {
    ({ title, subtitle } = global);
    tmp = closure_16();
    obj = { style: tmp.header, children: null };
    obj1 = {
      style: tmp.headerTitle,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: title,
    };
    items = [,];
    items[0] = jsx(closure_0(closure_2[29]).Text, obj1);
    obj4 = { style: tmp.headerSubtitle, children: subtitle };
    items[1] = jsx(closure_0(closure_2[33]).LegacyText, obj4);
    obj.children = items;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const GuildProgressConstants = fn(12809);
({ AnalyticsSetupTypes: closure_8, AnalyticsActions: closure_9 } = GuildProgressConstants);
const Constants = fn(1074);
({
  UPLOAD_MEDIUM_SIZE: c10,
  AnalyticEvents: closure_11,
  ComponentActions: closure_12,
  InstantInviteSources: map1,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  container: { padding: 16 },
  header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 },
  headerTitle: { marginBottom: 8, textAlign: "center" },
  headerSubtitle: { fontSize: 14, fontWeight: "500", color: nativeDefault.colors.TEXT_SUBTLE },
  footer: { marginTop: 4 },
  center: { alignItems: "center" },
};
const value = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default function GuildProgressActionSheet(guild) {
  guild = guild.guild;
  let numFinished;
  const errors = async function _addServerIcon() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let base64;
            tmp5(9934).init(View);
            const obj6 = tmp5(9934);
            tmp2(12814).hideActionSheet(id.id);
            const obj7 = tmp2(12814);
            const obj4 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp5(5440).openImagePicker(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          base64 = value.base64;
          if (null != base64) {
            tmp5(9934).updateIcon(closure_129_5, base64);
            const obj = tmp5(9934);
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
  const items = [GuildChannelStore];
  importDefault = guild(numFinished[10]).useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  let obj = guild(numFinished[10]);
  const iOSCompletionStates = guild(numFinished[11]).useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  const totalSteps = iOSCompletionStates.totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted } = iOSCompletionStates);
  let obj2 = guild(numFinished[11]);
  const items1 = [errors];
  const stateFromStoresObject = guild(numFinished[10]).useStateFromStoresObject(items1, () => errors.getErrors());
  const id = guild.id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = stateFromStoresObject.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      ToastUtils.presentError(tmp.message);
    }
  }, items2);
  const items3 = [id];
  const effect = stateFromStoresObject.useEffect(() => {
    AnalyticsUtilsDefault.track(constants3.OPEN_POPOUT, { type: "Guild Progress Sheet", guild_id: id });
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = stateFromStoresObject.useEffect(() => {
    if (numFinished === totalSteps) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(id);
    }
  }, items4);
  let obj4 = {
    onPress: function inviteFriends() {
      if (null != closure_1) {
        const obj2 = { source: constants5.GUILD_PROGRESS };
        const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(tmp, obj2);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null,
  };
  let obj5 = { uri: null };
  let obj3 = guild(numFinished[10]);
  obj5.uri = require("../../../../../discord_assets/assets/mana/asset-library/generated/MailboxIllocon-2x.png.js");
  obj4.source = obj5;
  const intl = guild(numFinished[18]).intl;
  obj4.title = intl.string(guild(numFinished[18]).t.q9n0Ta);
  obj4.isCompleted = guildPopulated;
  obj4.analyticsSetupType = constants.GUILD_PROGRESS;
  obj4.analyticsAction = constants2.INVITE;
  const tmp10 = require("ProgressItem");
  let obj6 = {
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
    analyticsAction: null,
  };
  let obj7 = { uri: null };
  const tmp11 = closure_14(require("ProgressItem"), obj4);
  obj7.uri = require("../../../../../discord_assets/assets/mana/asset-library/generated/BrushIllocon-2x.png.js");
  obj6.source = obj7;
  const intl2 = guild(numFinished[18]).intl;
  obj6.title = intl2.string(guild(numFinished[18]).t.DWB2YZ);
  obj6.isCompleted = guildPersonalized;
  obj6.analyticsSetupType = constants.GUILD_PROGRESS;
  obj6.analyticsAction = constants2.PERSONALIZE_SERVER;
  const tmp12 = require("ProgressItem");
  const obj8 = {
    onPress: function goToChannel() {
      if (null != user) {
        transitionToChannel.transitionToChannel(user.id);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
      let tmp6;
      if (null != user) {
        const obj3 = { channelId: user.id };
        tmp6 = obj3;
      }
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants4.TEXTAREA_FOCUS, tmp6);
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null,
  };
  let obj9 = { uri: null };
  const tmp13 = closure_14(require("ProgressItem"), obj6);
  obj9.uri = require("../../../../../discord_assets/assets/mana/asset-library/generated/PlaneIllocon-2x.png.js");
  obj8.source = obj9;
  const intl3 = guild(numFinished[18]).intl;
  obj8.title = intl3.string(guild(numFinished[18]).t.dNktpr);
  obj8.isCompleted = guildMessaged;
  obj8.analyticsSetupType = constants.GUILD_PROGRESS;
  obj8.analyticsAction = constants2.SEND_MESSAGE;
  const tmp14 = require("ProgressItem");
  const obj10 = {
    onPress: function goToBoosts() {
      GuildProgressUtils.hideActionSheet(id);
      const obj2 = { guildId: id, analyticsLocation: null };
      obj2.analyticsLocation = AnalyticsLocationDefault.GUILD_POWERUPS_GUILD_PROGRESS;
      openGuildPowerupsModalDefault(obj2);
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null,
  };
  const obj11 = { uri: null };
  const tmp15 = closure_14(require("ProgressItem"), obj8);
  obj11.uri = require("../../../../../discord_assets/assets/mana/asset-library/generated/BoostGemIllocon-2x.png.js");
  obj10.source = obj11;
  const intl4 = guild(numFinished[18]).intl;
  obj10.title = intl4.string(guild(numFinished[18]).t["6Qbqxw"]);
  obj10.isCompleted = guildBoosted;
  obj10.analyticsSetupType = constants.GUILD_PROGRESS;
  obj10.analyticsAction = constants2.BOOST;
  const obj12 = { style: tmp.container, children: null };
  const obj13 = { title: null, subtitle: null };
  const tmp16 = require("ProgressItem");
  const intl5 = guild(numFinished[18]).intl;
  obj13.title = intl5.string(guild(numFinished[18]).t["tu/tr8"]);
  const intl6 = guild(numFinished[18]).intl;
  obj13.subtitle = intl6.format(guild(numFinished[18]).t.l6iRLs, {
    numFinished,
    total: totalSteps,
    stepsHook(children, arg1) {
      return closure_1_14(
        guild(numFinished[29]).Text,
        { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
        arg1,
      );
    },
  });
  const items5 = [
    closure_14(GuildProgressHeader, obj13),
    tmp11,
    tmp13,
    tmp15,
    closure_14(require("ProgressItem"), obj10),
  ];
  const items6 = [tmp.footer];
  let center = null;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  function handleDismissGuildProgress() {
    GuildProgressActionCreatorsDefault.dismissProgress(guild.id);
    ActionSheetActionCreatorsDefault.hideActionSheet("guild-progress-" + guild.id);
    AnalyticsUtilsDefault.track(constants3.SERVER_SETUP_CTA_CLICKED, {
      action: constants2.DISMISS_GUILD_PROGRESS,
      setup_type: constants.GUILD_PROGRESS,
      num_total_actions: totalSteps,
      num_actions_completed: numFinished,
    });
  }
  const obj15 = { style: items6, children: null };
  items6[1] = center;
  if (numFinished === totalSteps) {
    const obj16 = { variant: "primary", grow: true, onPress: handleDismissGuildProgress, text: null };
    const intl8 = tmp2(tmp3[18]).intl;
    obj16.text = intl8.string(tmp2(tmp3[18]).t["0/5zhg"]);
    let tmp9Result = closure_14(tmp2(tmp3[30]).Button, obj16);
  } else {
    const obj17 = { accessibilityRole: "button", onPress: handleDismissGuildProgress, children: null };
    const obj18 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl7 = tmp2(tmp3[18]).intl;
    obj18.children = intl7.string(tmp2(tmp3[18]).t["9E36wf"]);
    obj17.children = closure_14(tmp2(tmp3[29]).Text, obj18);
    tmp9Result = closure_14(tmp2(tmp3[31]).PressableOpacity, obj17);
  }
  obj15.children = tmp9Result;
  items5[5] = closure_14(id, obj15);
  obj12.children = items5;
  const children = closure_15(tmp20, obj12);
  return closure_14(guild(numFinished[32]).ActionSheet, { showGradient: true, startExpanded: true, children });
}
export { GuildProgressHeader };
