// === Module 12147: GuildProgressActionSheet ===

// Module 12147 (GuildProgressActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import transitionToChannel from "transitionToChannel" /* 4907 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12145 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12148 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12153 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildProgressConstants from "GuildProgressConstants" /* 12140 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, guild, importDefault;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ AnalyticsSetupTypes: metroImportAll, AnalyticsActions: c9 } = GuildProgressConstants);
({ UPLOAD_MEDIUM_SIZE: c10, AnalyticEvents: unpackModuleId, ComponentActions: closure_12, InstantInviteSources: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { container: { padding: 16 }, header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 }, headerTitle: { marginBottom: 8, textAlign: "center" }, headerSubtitle: obj2, footer: { marginTop: 4 }, center: { alignItems: "center" } };
obj2 = { fontSize: 14, fontWeight: "500", color: nativeDefault.colors.TEXT_SUBTLE };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let errors;
  let first;
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let guildPopulated;
  let numFinished;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp18;
  const tmp = guild;
  let obj = guild(numFinished[11]);
  const cResult = obj.c(72);
  guild = guild.guild;
  closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    class P {
      constructor() {
        return GuildChannelStore.getDefaultChannel(guild.id);
      }
    }
    cResult[1] = guild.id;
    cResult[2] = P;
  } else {
    class P {
      constructor() {
        return GuildChannelStore.getDefaultChannel(guild.id);
      }
    }
  }
  const tmpResult = tmp(numFinished[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, P);
  const tmpResult3 = tmp(numFinished[13]);
  const iOSCompletionStates = tmpResult3.useIOSCompletionStates(guild);
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, numFinished } = iOSCompletionStates);
  const totalSteps = iOSCompletionStates.totalSteps;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return GuildChannelStore.getDefaultChannel(guild.id);
      }
    }
    const items1 = [GuildSettingsStore];
    class A {
      constructor() {
        return errors.getErrors();
      }
    }
    cResult[3] = items1;
    cResult[4] = A;
    tmp11 = A;
    tmp10 = items1;
  } else {
    class P {
      constructor() {
        return GuildChannelStore.getDefaultChannel(guild.id);
      }
    }
    tmp11 = cResult[4];
  }
  const tmpResult4 = tmp(numFinished[12]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp10, tmp11);
  const id = guild.id;
  if (cResult[5] !== stateFromStoresObject.message) {
    class P {
      constructor() {
        return GuildChannelStore.getDefaultChannel(guild.id);
      }
    }
    const items2 = [stateFromStoresObject.message];
    class A {
      constructor() {
        return errors.getErrors();
      }
    }
    cResult[5] = stateFromStoresObject.message;
    cResult[6] = tmp15;
    cResult[7] = items2;
    tmp14 = items2;
  } else {
    class P {
      constructor() {
        return GuildChannelStore.getDefaultChannel(guild.id);
      }
    }
    tmp14 = cResult[7];
  }
  const layoutEffect = stateFromStoresObject.useLayoutEffect(tmp15, tmp14);
  const obj5 = stateFromStoresObject;
  if (cResult[8] !== id) {
    class M {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Guild Progress Sheet", guild_id: id };
        obj.track(unpackModuleId.OPEN_POPOUT, obj2);
      }
    }
    const items3 = [id];
    class A {
      constructor() {
        return errors.getErrors();
      }
    }
    cResult[8] = id;
    cResult[9] = M;
    cResult[10] = items3;
    tmp18 = items3;
  } else {
    class M {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Guild Progress Sheet", guild_id: id };
        obj.track(unpackModuleId.OPEN_POPOUT, obj2);
      }
    }
    tmp18 = cResult[10];
  }
  const effect = obj5.useEffect(M, tmp18);
  if (cResult[11] === id) {
    class M {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Guild Progress Sheet", guild_id: id };
        obj.track(unpackModuleId.OPEN_POPOUT, obj2);
      }
    }
  }
  const fn = function j() {
    if (numFinished === totalSteps) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(id);
    }
  };
  const items4 = [id, totalSteps, numFinished];
  cResult[11] = id;
  cResult[12] = numFinished;
  cResult[13] = totalSteps;
  cResult[14] = items4;
  cResult[15] = fn;
}) : ((guild) => {
  let Text;
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let guildPopulated;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items5;
  let obj11;
  let obj14;
  let obj18;
  let obj5;
  let obj7;
  let obj9;
  let tmp9Result;
  let user;
  guild = guild.guild;
  let numFinished;
  let obj = function _addServerIcon2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              base64 = undefined;
              const obj6 = tmp4(c2[21]);
              obj6.init(closure_2_5);
              const obj7 = tmp(c2[13]);
              obj7.hideActionSheet(id.id);
              const obj4 = { size };
              const obj8 = tmp4(c2[22]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj8.openImagePicker(obj4), done: false };
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
              obj = tmp4(c2[21]);
              obj.updateIcon(closure_129_5, base64);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_16();
  let tmp2 = guild;
  const tmp3 = numFinished;
  obj = guild(numFinished[12]);
  const items = [GuildChannelStore];
  importDefault = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  let obj2 = guild(numFinished[13]);
  const iOSCompletionStates = obj2.useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  const totalSteps = iOSCompletionStates.totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted } = iOSCompletionStates);
  let obj3 = guild(numFinished[12]);
  const items1 = [obj];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => obj.getErrors());
  const id = guild.id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = stateFromStoresObject.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      obj = ToastUtils;
      obj.presentError(tmp.message);
    }
  }, items2);
  const items3 = [id];
  const effect = stateFromStoresObject.useEffect(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Guild Progress Sheet", guild_id: id };
    obj.track(unpackModuleId.OPEN_POPOUT, obj2);
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = stateFromStoresObject.useEffect(() => {
    if (numFinished === totalSteps) {
      obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(id);
    }
  }, items4);
  let obj4 = {
    onPress: function inviteFriends() {
      if (null != user) {
        const obj2 = { source: map1.GUILD_PROGRESS };
        obj = instant_invite_InstantInviteUtils;
        const result = obj.showInstantInviteActionSheet(tmp, obj2);
      }
    },
    source: obj5,
    title: intl.string(guild(numFinished[19]).t.q9n0Ta),
    isCompleted: guildPopulated,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.INVITE
  };
  obj5 = { uri: require("module_12149") };
  const tmp10 = require("ProgressItem");
  intl = guild(numFinished[19]).intl;
  const tmp11 = closure_14(tmp10, obj4);
  let obj6 = {
    onPress: function addServerIcon() {
      return obj(...arguments);
    },
    source: obj7,
    title: intl2.string(guild(numFinished[19]).t.DWB2YZ),
    isCompleted: guildPersonalized,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.PERSONALIZE_SERVER
  };
  obj7 = { uri: require("module_12151") };
  const tmp12 = require("ProgressItem");
  intl2 = guild(numFinished[19]).intl;
  const tmp13 = closure_14(tmp12, obj6);
  let obj8 = {
    onPress: function goToChannel() {
      if (null != user) {
        obj = transitionToChannel;
        obj.transitionToChannel(user.id);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      let tmp6;
      if (null != user) {
        tmp6 = { channelId: user.id };
        const obj3 = { channelId: user.id };
      }
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.TEXTAREA_FOCUS, tmp6);
    },
    source: obj9,
    title: intl3.string(guild(numFinished[19]).t.dNktpr),
    isCompleted: guildMessaged,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.SEND_MESSAGE
  };
  obj9 = { uri: require("module_12152") };
  const tmp14 = require("ProgressItem");
  intl3 = guild(numFinished[19]).intl;
  const tmp15 = closure_14(tmp14, obj8);
  const obj10 = {
    onPress: function goToBoosts() {
      obj = GuildProgressUtils;
      obj.hideActionSheet(id);
      const obj2 = { guildId: id, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_GUILD_PROGRESS };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    },
    source: obj11,
    title: intl4.string(guild(numFinished[19]).t["6Qbqxw"]),
    isCompleted: guildBoosted,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.BOOST
  };
  obj11 = { uri: require("module_12262") };
  const tmp16 = require("ProgressItem");
  intl4 = guild(numFinished[19]).intl;
  const obj12 = { style: tmp.container, children: items5 };
  const obj13 = { title: intl5.string(guild(numFinished[19]).t["tu/tr8"]), subtitle: intl6.format(guild(numFinished[19]).t.l6iRLs, obj14) };
  const tmp17 = closure_14(tmp16, obj10);
  intl5 = guild(numFinished[19]).intl;
  intl6 = guild(numFinished[19]).intl;
  obj14 = {
    numFinished,
    total: totalSteps,
    stepsHook(children, arg1) {
      obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return closure_1_14(guild(numFinished[31]).Text, obj, arg1);
    }
  };
  items5 = [closure_14(closure_17, obj13), tmp11, tmp13, tmp15, tmp17, ];
  const items6 = [tmp.footer, ];
  let center = null;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  function handleDismissGuildProgress() {
    obj = GuildProgressActionCreatorsDefault;
    obj.dismissProgress(guild.id);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet("guild-progress-" + guild.id);
    const obj3 = AnalyticsUtilsDefault;
    const obj4 = { action: constants.DISMISS_GUILD_PROGRESS, setup_type: metroImportAll.GUILD_PROGRESS, num_total_actions: totalSteps, num_actions_completed: numFinished };
    obj3.track(unpackModuleId.SERVER_SETUP_CTA_CLICKED, obj4);
  }
  const obj15 = { style: items6, children: tmp9Result };
  items6[1] = center;
  if (numFinished === totalSteps) {
    const obj16 = { variant: "primary", grow: true, onPress: handleDismissGuildProgress, text: intl8.string(tmp2(tmp3[19]).t["0/5zhg"]) };
    const Button = tmp2(tmp3[32]).Button;
    intl8 = tmp2(tmp3[19]).intl;
    tmp9Result = closure_14(Button, obj16);
  } else {
    const obj17 = { accessibilityRole: "button", onPress: handleDismissGuildProgress, children: closure_14(Text, obj18) };
    const PressableOpacity = tmp2(tmp3[33]).PressableOpacity;
    obj18 = { variant: "text-sm/medium", color: "text-default", children: intl7.string(tmp2(tmp3[19]).t["9E36wf"]) };
    Text = tmp2(tmp3[31]).Text;
    intl7 = tmp2(tmp3[19]).intl;
    tmp9Result = closure_14(PressableOpacity, obj17);
  }
  items5[5] = closure_14(id, obj15);
  const children = closure_15(tmp20, obj12);
  return closure_14(tmp2(tmp3[34]).ActionSheet, { showGradient: true, startExpanded: true, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProgressHeader(arg0) {
  let items;
  let subtitle;
  let title;
  const obj = react2;
  const cResult = obj.c(10);
  ({ title, subtitle } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] === tmp4.headerTitle) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.headerSubtitle) {
      let tmp7;
      if (cResult[4] === subtitle) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.header) {
        if (cResult[7] === tmp5) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
      const obj2 = { style: tmp4.header, children: items };
      items = [tmp5, tmp7];
      const tmp13 = closure_15(View, obj2);
      cResult[6] = tmp4.header;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { style: tmp4.headerSubtitle, children: subtitle };
    const tmp9 = authStore2(native.LegacyText, obj3);
    cResult[3] = tmp4.headerSubtitle;
    cResult[4] = subtitle;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj4 = { style: tmp4.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  const tmp6 = authStore2(Text_Text.Text, obj4);
  cResult[0] = tmp4.headerTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function GuildProgressHeader(arg0) {
  let items;
  let subtitle;
  let title;
  ({ title, subtitle } = arg0);
  const tmp = closure_16();
  const obj = { style: tmp.header, children: items };
  items = [, ];
  const obj2 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items[0] = authStore2(Text_Text.Text, obj2);
  const obj3 = { style: tmp.headerSubtitle, children: subtitle };
  items[1] = authStore2(native.LegacyText, obj3);
  return closure_15(View, obj);
});
let closure_17 = tmp6;
let result = size.fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default tmp5;
export const GuildProgressHeader = tmp6;