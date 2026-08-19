// === Module 15507: IAPUpsellActionSheet ===

// Module 15507 (IAPUpsellActionSheet)
import noopAll from "noop" /* 19 */;
import transitionTo from "transitionTo" /* 1222 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import { Routes } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;

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