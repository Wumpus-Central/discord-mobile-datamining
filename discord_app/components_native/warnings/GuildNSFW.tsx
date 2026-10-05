// === Module 12316: GuildNSFW ===

// Module 12316 (GuildNSFW)
import Fragment from "Fragment" /* 21 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import GatedContentDefault from "GatedContent" /* 12317 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["modalType", "emphasiseDisagree"];
let closure_4 = ["modalType", "emphasiseDisagree"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let emphasiseDisagree;
  let first;
  let modalType;
  let tmp19;
  let tmp6;
  let tmp9;
  _require = guildId;
  let obj = require("react");
  const cResult = obj.c(32);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId.guildId);
    };
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmpResult2 = require("AgeGateUtils");
  const ageGateVerifyContentForGuild = tmpResult2.useAgeGateVerifyContentForGuild(stateFromStores);
  if (cResult[3] !== ageGateVerifyContentForGuild) {
    ({ modalType, emphasiseDisagree } = ageGateVerifyContentForGuild);
    const tmp14 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_3);
    cResult[3] = ageGateVerifyContentForGuild;
    cResult[4] = tmp14;
    cResult[5] = emphasiseDisagree;
    cResult[6] = modalType;
    tmp9 = tmp14;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[7] !== guildId) {
    const fn2 = function _() {
      const obj = GuildActionCreatorsDefault;
      obj.nsfwReturnToSafety(guildId.guildId);
      if (guildId.onReturnToSafety != null) {
        guildId.onReturnToSafety();
      }
    };
    cResult[7] = guildId;
    cResult[8] = fn2;
  }
  if (cResult[9] !== guildId.guildId) {
    class A {
      constructor() {
        const obj = GuildActionCreatorsDefault;
        obj.nsfwAgree(guildId.guildId);
      }
    }
    cResult[9] = guildId.guildId;
    cResult[10] = A;
  } else {
    class A {
      constructor() {
        const obj = GuildActionCreatorsDefault;
        obj.nsfwAgree(guildId.guildId);
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: guildId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }
    }
    cResult[11] = E;
  } else {
    class E {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: guildId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }
    }
  }
  if (stateFromStores != null) {
    class E {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: guildId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }
    }
  }
  const channelId = guildId.channelId;
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: guildId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }
    }
    const stringResult = obj4.string(require("intl").t["/g10LC"]);
    cResult[12] = stringResult;
    tmp19 = stringResult;
  } else {
    class E {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: guildId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }
    }
  }
  if (cResult[13] === tmp9) {
    class E {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: guildId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
      }
    }
  }
  let obj2 = { guildId: undefined, channelId, disagreement: tmp19 };
  const merged = Object.assign(tmp9);
  cResult[13] = tmp9;
  cResult[14] = guildId.channelId;
  cResult[15] = undefined;
  cResult[16] = obj2;
}) : ((channelId) => {
  let id;
  let intl;
  _require = channelId;
  let obj = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj2 = require("AgeGateUtils");
  const ageGateVerifyContentForGuild = obj2.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  const emphasiseDisagree = ageGateVerifyContentForGuild.emphasiseDisagree;
  const obj3 = { guildId: id, channelId: channelId.channelId, disagreement: intl.string(require("intl").t["/g10LC"]) };
  const tmp5 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_4);
  const callback = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: channelId(dependencyMap[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }, []);
  const merged = Object.assign(tmp5);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    const obj = GuildActionCreatorsDefault;
    obj.nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      channelId.onReturnToSafety();
    }
  }
  intl = tmp(1126).intl;
  if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        GatedContentDefault;
        const merged1 = Object.assign(obj3);
        return <tmp17 modalType={modalType} disagreementButtonVariant="primary" onDisagree={handleDisagree} />;
      } else {
        GatedContentDefault;
        const merged2 = Object.assign(obj3);
        return <tmp11 modalType={modalType} onAgree={function handleAgree() {
          const obj = GuildActionCreatorsDefault;
          obj.nsfwAgree(channelId.guildId);
        }} onDisagree={handleDisagree} />;
      }
    }
  }
  let str = "primary";
  GatedContentDefault;
  if (true === emphasiseDisagree) {
    str = "secondary";
  }
  let str2 = "secondary";
  if (true === emphasiseDisagree) {
    str2 = "primary";
  }
  const merged3 = Object.assign(obj3);
  return <tmp22 modalType={modalType} onAgree={callback} onDisagree={handleDisagree} agreementButtonVariant={str} disagreementButtonVariant={str2} />;
});
let result = size.fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default tmp2;