// discord_app/modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import { Routes } from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: markAsDismissed(15509), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.rBw4cE);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.mKHibc);
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.RzWDqY);
  obj[4] = function onCTAPress() {
    closure_1_0(closure_1_2[8]).transitionTo(closure_1_3.CHANNEL(closure_0, closure_1_4.ROLE_SUBSCRIPTIONS));
    markAsDismissed(closure_1_5.UNKNOWN);
  };
  obj[5] = markAsDismissed;
  return jsx(markAsDismissed(15508), { imageSource: markAsDismissed(15509), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
};