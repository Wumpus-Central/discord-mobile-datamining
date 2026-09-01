// === Module 15835: IAPUpsellActionSheet ===

// Module 15835 (IAPUpsellActionSheet)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import { Routes } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1394 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: markAsDismissed(15837), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null };
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
  return jsx(markAsDismissed(15836), { imageSource: markAsDismissed(15837), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
};