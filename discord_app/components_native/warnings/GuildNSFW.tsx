// === Module 12916: GuildNSFW ===

// Module 12916 (GuildNSFW)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5732 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8681 */;
import GatedContentDefault from "GatedContent" /* 12917 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["modalType", "emphasiseDisagree"];
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  _require = channelId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj = require("initialize");
  const ageGateVerifyContentForGuild = require("AgeGateUtils").useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  const obj2 = require("AgeGateUtils");
  const obj3 = {};
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: channelId(8683).AgeVerificationModalEntryPoint.NSFW_GUILD });
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
  obj3.guildId = id;
  obj3.channelId = channelId.channelId;
  const intl = tmp(1115).intl;
  obj3.disagreement = intl.string(require("util").t["/g10LC"]);
  if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(8683).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(8683).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        const obj4 = { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree };
        const merged1 = Object.assign(obj3);
        return jsx(GatedContentDefault, { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree });
      } else {
        const obj5 = {
          modalType,
          onAgree: function handleAgree() {
                  GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        };
        const merged2 = Object.assign(obj3);
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
  const obj6 = { modalType, onAgree: callback, onDisagree: handleDisagree, agreementButtonVariant: null, disagreementButtonVariant: null };
  let str = "primary";
  const tmp5 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_3);
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
  return jsx(GatedContentDefault, { modalType, onAgree: callback, onDisagree: handleDisagree, agreementButtonVariant: null, disagreementButtonVariant: null });
};