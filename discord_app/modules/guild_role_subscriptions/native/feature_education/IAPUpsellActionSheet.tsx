import "noop";
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  let markAsDismissed;
  let require;
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: null, header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null };
  obj[0] = markAsDismissed(15217);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.rBw4cE);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.mKHibc);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.RzWDqY);
  obj[4] = function onCTAPress() {
    outer1_0(outer1_2[8]).transitionTo(outer1_3.CHANNEL(closure_0, outer1_4.ROLE_SUBSCRIPTIONS));
    markAsDismissed(outer1_5.UNKNOWN);
  };
  obj[5] = markAsDismissed;
  return jsx(markAsDismissed(15216), { imageSource: null, header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
};