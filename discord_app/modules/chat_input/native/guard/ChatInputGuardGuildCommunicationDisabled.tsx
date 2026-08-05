// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx
import { GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK as closure_3 } from "getFriendlyDurationString";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  let obj = require("../../../guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx") /* useCommunicationDisabledCountdownCleanup */;
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  obj = { type: "simple-action", icon: null, message: null, subtext: null, countdown: null };
  obj[1] = jsx(require("../../../../design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx") /* ClockWarningIcon */.ClockWarningIcon, {});
  const intl = tmp(1236).intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.VSpdzK);
  const intl2 = tmp(1236).intl;
  obj = { link: closure_3 };
  obj[3] = intl2.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["4ZwD5G"], obj);
  obj[4] = date;
  return jsx(require("ChatInputGuard.tsx"), { link: closure_3 });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;