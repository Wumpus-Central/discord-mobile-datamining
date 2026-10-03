// discord_app/modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
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
const View = fn(17).View;
const GuildProgressConstants = fn(12125);
({ AnalyticsSetupTypes: closure_8, AnalyticsActions: closure_9 } = GuildProgressConstants);
const Constants = fn(1085);
({
  UPLOAD_MEDIUM_SIZE: c10,
  AnalyticEvents: closure_11,
  ComponentActions: closure_12,
  InstantInviteSources: map1,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { padding: 16 },
  header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 },
  headerTitle: { marginBottom: 8, textAlign: "center" },
  headerSubtitle: { fontSize: 14, fontWeight: "500", color: nativeDefault.colors.TEXT_SUBTLE },
  footer: { marginTop: 4 },
  center: { alignItems: "center" },
};
let closure_16 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { fontSize: 14, fontWeight: "500", color: nativeDefault.colors.TEXT_SUBTLE };
const ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildProgressHeader(arg0) {
      const cResult = c.c(10);
      ({ title, subtitle } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === tmp4.headerTitle) {
        if (cResult[1] === title) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.headerSubtitle) {
          if (cResult[4] === subtitle) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.header) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp7) {
                let tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
          const obj2 = { style: tmp4.header, children: null };
          const items = [tmp5, tmp7];
          obj2.children = items;
          const tmp13 = closure_1_15(View, obj2);
          cResult[6] = tmp4.header;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        const obj3 = { style: tmp4.headerSubtitle, children: subtitle };
        const tmp9 = state(native.LegacyText, obj3);
        cResult[3] = tmp4.headerSubtitle;
        cResult[4] = subtitle;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const tmp6 = state(Text_Text.Text, {
        style: tmp4.headerTitle,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: title,
      });
      cResult[0] = tmp4.headerTitle;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj4 = {
        style: tmp4.headerTitle,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: title,
      };
    }
  : function GuildProgressHeader(arg0) {
      ({ title, subtitle } = arg0);
      const tmp = closure_16();
      const obj = { style: tmp.header, children: null };
      const items = [
        state(Text_Text.Text, {
          style: tmp.headerTitle,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: title,
        }),
        state(native.LegacyText, { style: tmp.headerSubtitle, children: subtitle }),
      ];
      obj.children = items;
      return closure_1_15(View, obj);
    };
let closure_17 = tmp6;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(numFinished[11]).c(72);
      guild = guild.guild;
      closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        class P {
          constructor() {
            return closure_7.getDefaultChannel(closure_0.id);
          }
        }
        cResult[1] = guild.id;
        cResult[2] = P;
      } else {
        class P {
          constructor() {
            return closure_7.getDefaultChannel(closure_0.id);
          }
        }
      }
      let obj = guild(numFinished[11]);
      const stateFromStores = guild(numFinished[12]).useStateFromStores(first, P);
      const tmpResult = guild(numFinished[12]);
      const iOSCompletionStates = guild(numFinished[13]).useIOSCompletionStates(guild);
      ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, numFinished } = iOSCompletionStates);
      const totalSteps = iOSCompletionStates.totalSteps;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            return closure_7.getDefaultChannel(closure_0.id);
          }
        }
        const items1 = [GuildSettingsStore];
        class A {
          constructor() {
            return closure_1_6.getErrors();
          }
        }
        cResult[3] = items1;
        cResult[4] = A;
        let tmp11 = A;
        const tmp10 = items1;
      } else {
        class P {
          constructor() {
            return closure_7.getDefaultChannel(closure_0.id);
          }
        }
        tmp11 = cResult[4];
      }
      const tmpResult3 = guild(numFinished[13]);
      const stateFromStoresObject = guild(numFinished[12]).useStateFromStoresObject(tmp10, tmp11);
      const id = guild.id;
      if (cResult[5] !== stateFromStoresObject.message) {
        class P {
          constructor() {
            return closure_7.getDefaultChannel(closure_0.id);
          }
        }
        const items2 = [stateFromStoresObject.message];
        class A {
          constructor() {
            return closure_1_6.getErrors();
          }
        }
        cResult[5] = stateFromStoresObject.message;
        cResult[6] = tmp15;
        cResult[7] = items2;
        let tmp14 = items2;
      } else {
        class P {
          constructor() {
            return closure_7.getDefaultChannel(closure_0.id);
          }
        }
        tmp14 = cResult[7];
      }
      const layoutEffect = stateFromStoresObject.useLayoutEffect(tmp15, tmp14);
      if (cResult[8] !== id) {
        class M {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { type: "Guild Progress Sheet", guild_id: id };
            trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
            return;
          }
        }
        const items3 = [id];
        class A {
          constructor() {
            return closure_1_6.getErrors();
          }
        }
        cResult[8] = id;
        cResult[9] = M;
        cResult[10] = items3;
        let tmp18 = items3;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { type: "Guild Progress Sheet", guild_id: id };
            trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
            return;
          }
        }
        tmp18 = cResult[10];
      }
      const effect = stateFromStoresObject.useEffect(M, tmp18);
      if (cResult[11] === id) {
        class M {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { type: "Guild Progress Sheet", guild_id: id };
            trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
            return;
          }
        }
      }
      const fn = function j() {
        if (numFinished === totalSteps) {
          const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(id);
        }
      };
      const items4 = [id, totalSteps, numFinished];
      cResult[11] = id;
      cResult[12] = numFinished;
      cResult[13] = totalSteps;
      cResult[14] = items4;
      cResult[15] = fn;
      const tmpResult4 = guild(numFinished[12]);
    }
  : (guild) => {
      guild = guild.guild;
      let numFinished;
      const errors = async function _addServerIcon2() {
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
            return { value: "IconComponent", done: "IconComponent" };
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
                tmp5(9247).init(View);
                const obj6 = tmp5(9247);
                tmp2(12130).hideActionSheet(id.id);
                const obj7 = tmp2(12130);
                const obj4 = { size };
                dependencyMap = 1;
                c3 = 1;
                const obj5 = { value: tmp5(7274).openImagePicker(obj4), done: false };
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
                tmp5(9247).updateIcon(closure_129_5, base64);
                const obj = tmp5(9247);
              }
              c3 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp16) {
            c3 = tmp;
            throw tmp16;
          }
        }
      };
      const tmp = closure_16();
      const items = [GuildChannelStore];
      importDefault = guild(numFinished[12]).useStateFromStores(items, () =>
        GuildChannelStore.getDefaultChannel(guild.id),
      );
      let obj = guild(numFinished[12]);
      const iOSCompletionStates = guild(numFinished[13]).useIOSCompletionStates(guild);
      numFinished = iOSCompletionStates.numFinished;
      const totalSteps = iOSCompletionStates.totalSteps;
      ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted } = iOSCompletionStates);
      let obj2 = guild(numFinished[13]);
      const items1 = [errors];
      const stateFromStoresObject = guild(numFinished[12]).useStateFromStoresObject(items1, () => errors.getErrors());
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
      let obj3 = guild(numFinished[12]);
      obj5.uri = require("../../../../../discord_assets/assets/mana/asset-library/generated/MailboxIllocon-2x.png.js");
      obj4.source = obj5;
      const intl = guild(numFinished[19]).intl;
      obj4.title = intl.string(guild(numFinished[19]).t.q9n0Ta);
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
      const intl2 = guild(numFinished[19]).intl;
      obj6.title = intl2.string(guild(numFinished[19]).t.DWB2YZ);
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
      const intl3 = guild(numFinished[19]).intl;
      obj8.title = intl3.string(guild(numFinished[19]).t.dNktpr);
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
      const intl4 = guild(numFinished[19]).intl;
      obj10.title = intl4.string(guild(numFinished[19]).t["6Qbqxw"]);
      obj10.isCompleted = guildBoosted;
      obj10.analyticsSetupType = constants.GUILD_PROGRESS;
      obj10.analyticsAction = constants2.BOOST;
      const obj12 = { style: tmp.container, children: null };
      const obj13 = { title: null, subtitle: null };
      const tmp16 = require("ProgressItem");
      const intl5 = guild(numFinished[19]).intl;
      obj13.title = intl5.string(guild(numFinished[19]).t["tu/tr8"]);
      const intl6 = guild(numFinished[19]).intl;
      obj13.subtitle = intl6.format(guild(numFinished[19]).t.l6iRLs, {
        numFinished,
        total: totalSteps,
        stepsHook(children, arg1) {
          return closure_1_14(
            guild(numFinished[31]).Text,
            { variant: "text-sm/medium", color: "mobile-text-heading-primary", children },
            arg1,
          );
        },
      });
      const items5 = [closure_14(closure_17, obj13), tmp11, tmp13, tmp15, closure_14(require("ProgressItem"), obj10)];
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
        const intl8 = tmp2(tmp3[19]).intl;
        obj16.text = intl8.string(tmp2(tmp3[19]).t["0/5zhg"]);
        let tmp9Result = closure_14(tmp2(tmp3[32]).Button, obj16);
      } else {
        const obj17 = { accessibilityRole: "button", onPress: handleDismissGuildProgress, children: null };
        const obj18 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl7 = tmp2(tmp3[19]).intl;
        obj18.children = intl7.string(tmp2(tmp3[19]).t["9E36wf"]);
        obj17.children = closure_14(tmp2(tmp3[31]).Text, obj18);
        tmp9Result = closure_14(tmp2(tmp3[33]).PressableOpacity, obj17);
      }
      obj15.children = tmp9Result;
      items5[5] = closure_14(id, obj15);
      obj12.children = items5;
      const children = closure_15(tmp20, obj12);
      return closure_14(guild(numFinished[34]).ActionSheet, { showGradient: true, startExpanded: true, children });
    };
export const GuildProgressHeader = tmp6;
