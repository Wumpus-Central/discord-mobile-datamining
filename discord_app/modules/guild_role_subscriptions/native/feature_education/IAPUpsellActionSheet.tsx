// discord_app/modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import transitionTo from "../../../routing/router_utils.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import { Routes } from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

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
    transitionTo.transitionTo(Routes.CHANNEL(closure_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  obj[5] = markAsDismissed;
  return jsx(markAsDismissed(15508), { imageSource: markAsDismissed(15509), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
};