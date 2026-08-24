// === Module 11694: GuildProgressHeader ===

// Module 11694 (GuildProgressHeader)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4739 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleFormInit" /* 8912 */;
import closure_7 from "comparator" /* 1981 */;
import Steps from "Steps" /* 11686 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
class GuildProgressHeader {
  constructor(arg0) {
    ({ title, subtitle } = global);
    tmp = closure_16();
    obj = { style: tmp.header, children: null };
    obj = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items = [, ];
    items[0] = jsx(require("Text").Text, obj);
    obj1 = { style: tmp.headerSubtitle, children: subtitle };
    items[1] = jsx(require("Button").LegacyText, obj1);
    obj[1] = items;
    return jsxs(View, obj);
  }
}
({ AnalyticsSetupTypes: closure_8, AnalyticsActions: c9 } = Steps);
({ UPLOAD_MEDIUM_SIZE: c10, AnalyticEvents: unpackModuleId, ComponentActions: closure_12, InstantInviteSources: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: { padding: 16 }, header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 }, headerTitle: { marginBottom: 8, textAlign: "center" }, headerSubtitle: null, footer: null, center: null };
createCacheKey = { fontSize: 14, fontWeight: "500", color: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { marginTop: 4 };
createCacheKey[5] = { alignItems: "center" };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default function GuildProgressActionSheet(guild) {
  guild = guild.guild;
  importDefault = undefined;
  let numFinished;
  let totalSteps;
  let stateFromStoresObject;
  let id;
  function _addServerIcon() {
    const self = this;
    const tmp = totalSteps(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              let base64 = tmp2;
              base64 = undefined;
              closure_1_1(8911).init(closure_1_5);
              const obj6 = closure_1_1(8911);
              closure_1_0(11692).hideActionSheet(closure_1_0.id);
              const obj7 = closure_1_0(11692);
              obj1 = { size: null };
              obj1[0] = closure_1_10;
              dependencyMap = 1;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_1(4843).openImagePicker(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            base64 = arg1.base64;
            if (null != base64) {
              obj = closure_1_1(8911);
              obj.updateIcon(closure_5, base64);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    });
    closure_6 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = guild(numFinished[10]);
  const items = [closure_7];
  importDefault = obj.useStateFromStores(items, () => closure_1_7.getDefaultChannel(guild.id));
  obj1 = guild(numFinished[11]);
  const iOSCompletionStates = obj1.useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  totalSteps = iOSCompletionStates.totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, showBoostStep } = iOSCompletionStates);
  let obj2 = guild(numFinished[10]);
  const items1 = [_addServerIcon];
  stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => _addServerIcon.getErrors());
  id = guild.id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = stateFromStoresObject.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      guild(numFinished[12]).presentError(tmp.message);
      const obj = guild(numFinished[12]);
    }
  }, items2);
  const items3 = [id];
  const effect = stateFromStoresObject.useEffect(() => {
    let obj = callback(numFinished[13]);
    obj = { type: "Guild Progress Sheet", guild_id: id };
    obj.track(closure_1_11.OPEN_POPOUT, obj);
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = stateFromStoresObject.useEffect(() => {
    if (numFinished === totalSteps) {
      const result = callback(numFinished[14]).markCompletedProgressSeen(id);
      const obj = callback(numFinished[14]);
    }
  }, items4);
  obj = {
    onPress: function inviteFriends() {
      if (null != closure_1) {
        let obj = guild(numFinished[16]);
        obj = { source: null };
        obj[0] = closure_1_13.GUILD_PROGRESS;
        const result = obj.showInstantInviteActionSheet(tmp, obj);
      }
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  obj = { uri: importDefault(numFinished[17]) };
  obj[1] = obj;
  const intl = guild(numFinished[18]).intl;
  obj[2] = intl.string(guild(numFinished[18]).t.q9n0Ta);
  obj[3] = guildPopulated;
  obj[4] = constants.GUILD_PROGRESS;
  obj[5] = constants2.INVITE;
  const tmp11 = importDefault(numFinished[15]);
  const tmp12 = constants;
  const tmp13 = constants2;
  obj1 = {
    onPress: function addServerIcon() {
      const self = this;
      const apply = _addServerIcon.apply;
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
  const tmp14 = callback(importDefault(numFinished[15]), obj);
  obj2[0] = importDefault(numFinished[21]);
  obj1[1] = obj2;
  const intl2 = guild(numFinished[18]).intl;
  obj1[2] = intl2.string(guild(numFinished[18]).t.DWB2YZ);
  obj1[3] = guildPersonalized;
  obj1[4] = constants.GUILD_PROGRESS;
  obj1[5] = constants2.PERSONALIZE_SERVER;
  const tmp15 = importDefault(numFinished[15]);
  let obj3 = {
    onPress: function goToChannel() {
      if (null != callback) {
        let obj = guild(numFinished[22]);
        obj.transitionToChannel(tmp.id);
      }
      callback(numFinished[23]).hideActionSheet();
      let tmp6;
      if (null != callback) {
        obj = { channelId: null };
        obj[0] = tmp.id;
        tmp6 = obj;
      }
      const ComponentDispatch = guild(numFinished[24]).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_12.TEXTAREA_FOCUS, tmp6);
    },
    source: null,
    title: null,
    isCompleted: null,
    analyticsSetupType: null,
    analyticsAction: null
  };
  const obj4 = { uri: null };
  const tmp16 = callback(importDefault(numFinished[15]), obj1);
  obj4[0] = importDefault(numFinished[25]);
  obj3[1] = obj4;
  const intl3 = guild(numFinished[18]).intl;
  obj3[2] = intl3.string(guild(numFinished[18]).t.dNktpr);
  obj3[3] = guildMessaged;
  obj3[4] = constants.GUILD_PROGRESS;
  obj3[5] = constants2.SEND_MESSAGE;
  let tmp9Result = null;
  const tmp17 = importDefault(numFinished[15]);
  if (showBoostStep) {
    const obj5 = { onPress: null, source: null, title: null, isCompleted: null, analyticsSetupType: null, analyticsAction: null };
    obj5[0] = function goToBoosts() {
      let obj = guild(numFinished[11]);
      obj.hideActionSheet(id);
      obj = { guildId: id, analyticsLocation: callback(numFinished[27]).GUILD_POWERUPS_GUILD_PROGRESS };
      callback(numFinished[26])(obj);
    };
    let obj6 = { uri: null };
    obj6[0] = tmp10(tmp3[28]);
    obj5[1] = obj6;
    const intl4 = tmp2(tmp3[18]).intl;
    obj5[2] = intl4.string(tmp2(tmp3[18]).t["6Qbqxw"]);
    obj5[3] = guildBoosted;
    obj5[4] = tmp12.GUILD_PROGRESS;
    obj5[5] = tmp13.BOOST;
    tmp9Result = tmp9(tmp10(tmp3[15]), obj5);
    const tmp10Result = tmp10(tmp3[15]);
  }
  let obj7 = { style: tmp.container, children: null };
  const obj8 = { title: null, subtitle: null };
  const intl5 = tmp2(tmp3[18]).intl;
  obj8[0] = intl5.string(guild(numFinished[18]).t["tu/tr8"]);
  const intl6 = tmp2(tmp3[18]).intl;
  obj8[1] = intl6.format(guild(numFinished[18]).t.l6iRLs, {
    numFinished,
    total: totalSteps,
    stepsHook(children) {
      return callback2(guild(numFinished[29]).Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items5 = [callback(GuildProgressHeader, obj8), tmp14, tmp16, callback(importDefault(numFinished[15]), obj3), tmp9Result, ];
  const items6 = [tmp.footer, ];
  let center = null;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  function handleDismissGuildProgress() {
    let obj = callback(numFinished[14]);
    obj.dismissProgress(guild.id);
    callback(numFinished[23]).hideActionSheet("guild-progress-" + guild.id);
    const obj2 = callback(numFinished[23]);
    obj = { action: closure_1_9.DISMISS_GUILD_PROGRESS, setup_type: closure_1_8.GUILD_PROGRESS, num_total_actions: totalSteps, num_actions_completed: numFinished };
    callback(numFinished[13]).track(closure_1_11.SERVER_SETUP_CTA_CLICKED, obj);
  }
  const obj10 = { style: items6, children: null };
  items6[1] = center;
  if (numFinished === totalSteps) {
    const obj11 = { variant: "primary", grow: true, onPress: null, text: null };
    obj11[2] = handleDismissGuildProgress;
    const intl8 = tmp2(tmp3[18]).intl;
    obj11[3] = intl8.string(tmp2(tmp3[18]).t["0/5zhg"]);
    tmp9Result = tmp9(tmp2(tmp3[30]).Button, obj11);
  } else {
    const obj12 = { accessibilityRole: "button", onPress: null, children: null };
    obj12[1] = handleDismissGuildProgress;
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl7 = tmp2(tmp3[18]).intl;
    obj13[2] = intl7.string(tmp2(tmp3[18]).t["9E36wf"]);
    obj12[2] = tmp9(tmp2(tmp3[29]).Text, obj13);
    tmp9Result = tmp9(tmp2(tmp3[31]).PressableOpacity, obj12);
  }
  obj10[1] = tmp9Result;
  items5[5] = callback(id, obj10);
  obj7[1] = items5;
  const children = closure_15(tmp23, obj7);
  return callback(guild(numFinished[32]).ActionSheet, { showGradient: true, startExpanded: true, children });
};
export { GuildProgressHeader };