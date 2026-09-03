// === Module 12439: GuildNSFW ===

// Module 12439 (GuildNSFW)
import GatedContentDefault from "GatedContent" /* 12440 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "createGuildRecordFromRust" /* 1908 */;
import { AgeGateSource } from "result" /* 1218 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["modalType"];
let result = require("set").fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  const _require = channelId;
  let obj = _require(586);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(channelId.guildId));
  obj1 = _require(4732);
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = _require(4734);
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = React.useCallback(() => {
    let obj = callback(8701);
    obj = { entryPoint: channelId(8703).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(callback(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    closure_1_1(closure_1_2[8]).nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      onReturnToSafety();
    }
  }
  obj.guildId = id;
  obj.channelId = channelId.channelId;
  const intl = tmp(1233).intl;
  obj.disagreement = intl.string(_require(1233).t["/g10LC"]);
  if (_require(8703).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(8703).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(8703).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType: null, disagreementButtonVariant: "primary", onDisagree: null };
        obj[0] = modalType;
        obj[2] = handleDisagree;
        const merged1 = Object.assign(obj);
        return jsx(GatedContentDefault, { modalType: null, disagreementButtonVariant: "primary", onDisagree: null });
      } else {
        obj1 = { modalType: null, onAgree: null, onDisagree: null };
        obj1[0] = modalType;
        obj1[1] = function handleAgree() {
          closure_1_1(closure_1_2[8]).nsfwAgree(channelId.guildId);
        };
        obj1[2] = handleDisagree;
        const merged2 = Object.assign(obj);
        return jsx(GatedContentDefault, { modalType: null, onAgree: null, onDisagree: null });
      }
    }
  }
  obj2 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const tmp5 = callback(ageGateVerifyContentForGuild, closure_3);
  const merged3 = Object.assign(obj);
  return jsx(GatedContentDefault, { modalType, onAgree: callback, onDisagree: handleDisagree });
};