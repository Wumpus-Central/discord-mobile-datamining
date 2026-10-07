// discord_app/components_native/warnings/GuildNSFW.tsx
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../modules/age_assurance/AgeVerificationActionCreators.native.tsx";
import GatedContentDefault from "GatedContent.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["modalType", "emphasiseDisagree"];
let closure_4 = ["modalType", "emphasiseDisagree"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      _require = guildId;
      const cResult = require("c").c(32);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId.guildId) {
        const fn = function c() {
          return GuildStore.getGuild(guildId.guildId);
        };
        cResult[1] = guildId.guildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      const tmpResult = require("initialize");
      const ageGateVerifyContentForGuild = require("AgeGateUtils").useAgeGateVerifyContentForGuild(stateFromStores);
      if (cResult[3] !== ageGateVerifyContentForGuild) {
        ({ modalType, emphasiseDisagree } = ageGateVerifyContentForGuild);
        const tmp14 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_3);
        cResult[3] = ageGateVerifyContentForGuild;
        cResult[4] = tmp14;
        cResult[5] = emphasiseDisagree;
        cResult[6] = modalType;
        let tmp9 = tmp14;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[7] !== guildId) {
        const fn2 = function _() {
          if (false !== guildId.returnToSafety) {
            GuildActionCreatorsDefault.nsfwReturnToSafety(guildId.guildId);
          }
          if (guildId.onReturnToSafety != null) {
            onReturnToSafety();
          }
        };
        cResult[7] = guildId;
        cResult[8] = fn2;
      }
      if (cResult[9] !== guildId.guildId) {
        class A {
          constructor() {
            obj = closure_1(closure_2[8]);
            nsfwAgreeResult = obj.nsfwAgree(closure_0.guildId);
            return;
          }
        }
        cResult[9] = guildId.guildId;
        cResult[10] = A;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[8]);
            nsfwAgreeResult = obj.nsfwAgree(closure_0.guildId);
            return;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            obj = closure_1_1(closure_1_2[9]);
            obj1 = { entryPoint: closure_0(closure_1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
        cResult[11] = T;
      } else {
        class T {
          constructor() {
            obj = closure_1_1(closure_1_2[9]);
            obj1 = { entryPoint: closure_0(closure_1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
      }
      if (stateFromStores != null) {
        class T {
          constructor() {
            obj = closure_1_1(closure_1_2[9]);
            obj1 = { entryPoint: closure_0(closure_1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            obj = closure_1_1(closure_1_2[9]);
            obj1 = { entryPoint: closure_0(closure_1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
        const stringResult = obj4.string(tmp(1126).t["/g10LC"]);
        cResult[12] = stringResult;
        const tmp19 = stringResult;
      } else {
        class T {
          constructor() {
            obj = closure_1_1(closure_1_2[9]);
            obj1 = { entryPoint: closure_0(closure_1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
      }
      if (cResult[13] === tmp9) {
        class T {
          constructor() {
            obj = closure_1_1(closure_1_2[9]);
            obj1 = { entryPoint: closure_0(closure_1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            return;
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp9);
      obj2.guildId = undefined;
      obj2.channelId = guildId.channelId;
      obj2.disagreement = tmp19;
      cResult[13] = tmp9;
      cResult[14] = guildId.channelId;
      cResult[15] = undefined;
      cResult[16] = obj2;
      const tmpResult2 = require("AgeGateUtils");
    }
  : (channelId) => {
      _require = channelId;
      const items = [GuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildStore.getGuild(channelId.guildId),
      );
      let obj = require("initialize");
      const ageGateVerifyContentForGuild = require("AgeGateUtils").useAgeGateVerifyContentForGuild(stateFromStores);
      const modalType = ageGateVerifyContentForGuild.modalType;
      const obj2 = require("AgeGateUtils");
      const obj3 = {};
      const callback = noop.useCallback(() => {
        const obj = AgeVerificationActionCreatorsDefault;
        const result = obj.showAgeVerificationGetStartedModal({
          entryPoint: channelId(8119).AgeVerificationModalEntryPoint.NSFW_GUILD,
        });
      }, []);
      const merged = Object.assign(_objectWithoutProperties(ageGateVerifyContentForGuild, closure_4));
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      function handleDisagree() {
        if (false !== channelId.returnToSafety) {
          GuildActionCreatorsDefault.nsfwReturnToSafety(channelId.guildId);
        }
        if (channelId.onReturnToSafety != null) {
          onReturnToSafety();
        }
      }
      obj3.guildId = id;
      obj3.channelId = channelId.channelId;
      const intl = tmp(1126).intl;
      obj3.disagreement = intl.string(require("util").t["/g10LC"]);
      if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
        if (tmp(8119).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
          if (tmp(8119).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
            const obj4 = { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree };
            const merged1 = Object.assign(obj3);
            return jsx(GatedContentDefault, {
              modalType,
              disagreementButtonVariant: "primary",
              onDisagree: handleDisagree,
            });
          } else {
            const obj5 = {
              modalType,
              onAgree: function handleAgree() {
                GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
              },
              onDisagree: handleDisagree,
            };
            const merged2 = Object.assign(obj3);
            return jsx(GatedContentDefault, {
              modalType,
              onAgree: function handleAgree() {
                GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
              },
              onDisagree: handleDisagree,
            });
          }
        }
      }
      const obj6 = {
        modalType,
        onAgree: callback,
        onDisagree: handleDisagree,
        agreementButtonVariant: null,
        disagreementButtonVariant: null,
      };
      let str = "primary";
      const tmp5 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_4);
      if (true === ageGateVerifyContentForGuild.emphasiseDisagree) {
        str = "secondary";
      }
      obj6.agreementButtonVariant = str;
      let str2 = "secondary";
      if (true === ageGateVerifyContentForGuild.emphasiseDisagree) {
        str2 = "primary";
      }
      obj6.disagreementButtonVariant = str2;
      const merged3 = Object.assign(obj3);
      return jsx(GatedContentDefault, {
        modalType,
        onAgree: callback,
        onDisagree: handleDisagree,
        agreementButtonVariant: null,
        disagreementButtonVariant: null,
      });
    };
