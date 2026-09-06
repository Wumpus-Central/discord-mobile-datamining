// === Module 12665: GuildNSFW ===

// Module 12665 (GuildNSFW)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import GatedContentDefault from "GatedContent" /* 12666 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
let closure_3 = ["modalType"];
const AgeGateSource = fn(1098).AgeGateSource;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  _require = channelId;
  let obj = require("initialize");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj1 = require("AgeGateUtils");
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = require("AgeVerificationUtils");
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = noop.useCallback(() => {
    const obj = { entryPoint: channelId(8413).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(_objectWithoutProperties(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    GuildActionCreatorsDefault.nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      onReturnToSafety();
    }
  }
  obj.guildId = id;
  obj.channelId = channelId.channelId;
  const intl = tmp(1114).intl;
  obj.disagreement = intl.string(require("util").t["/g10LC"]);
  if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(8413).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(8413).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree };
        const merged1 = Object.assign(obj);
        return jsx(GatedContentDefault, { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree });
      } else {
        obj1 = {
          modalType,
          onAgree: function handleAgree() {
                  GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        };
        const merged2 = Object.assign(obj);
        return jsx(GatedContentDefault, {
          modalType,
          onAgree: function handleAgree() {
                  GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        });
      }
    }
  }
  obj2 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const tmp5 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_3);
  const merged3 = Object.assign(obj);
  return jsx(GatedContentDefault, { modalType, onAgree: callback, onDisagree: handleDisagree });
};