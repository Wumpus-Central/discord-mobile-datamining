// === Module 11838: GuildNSFW ===

// Module 11838 (GuildNSFW)
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6778 */;
import GatedContentDefault from "GatedContent" /* 11839 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { AgeGateSource } from "result" /* 1221 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let closure_3 = ["modalType"];
let result = require("obj132").fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  const _require = channelId;
  let obj = _require(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(channelId.guildId));
  obj1 = _require(5252);
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = _require(4992);
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = React.useCallback(() => {
    callback(5428);
    const obj = { entryPoint: channelId(5254).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(callback(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    showTooManyUserGuildsAlertDefault.nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      onReturnToSafety();
    }
  }
  obj.guildId = id;
  obj.channelId = channelId.channelId;
  const intl = tmp(1236).intl;
  obj.disagreement = intl.string(_require(1236).t["/g10LC"]);
  if (_require(5254).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(5254).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(5254).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType: null, disagreementButtonVariant: "primary", onDisagree: null };
        obj[0] = modalType;
        obj[2] = handleDisagree;
        const merged1 = Object.assign(obj);
        return jsx(GatedContentDefault, { modalType: null, disagreementButtonVariant: "primary", onDisagree: null });
      } else {
        obj1 = { modalType: null, onAgree: null, onDisagree: null };
        obj1[0] = modalType;
        obj1[1] = function handleAgree() {
          showTooManyUserGuildsAlertDefault.nsfwAgree(channelId.guildId);
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