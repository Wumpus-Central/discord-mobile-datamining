// === Module 17765: IAPUpsellActionSheet ===

// Module 17765 (IAPUpsellActionSheet)
import router_utils from "router_utils" /* 1098 */;
import util from "util" /* 1112 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1071).Routes;
const StaticChannelRoute = fn(4769).StaticChannelRoute;
const ContentDismissActionType = fn(4759).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: markAsDismissed(17767), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null };
  const intl = util.intl;
  obj.header = intl.string(util.t.rBw4cE);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.mKHibc);
  const intl3 = util.intl;
  obj.cta = intl3.string(util.t.RzWDqY);
  obj.onCTAPress = function handleCTAPress() {
    router_utils.transitionTo(Routes.CHANNEL(closure_1_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  obj.markAsDismissed = markAsDismissed;
  return jsx(markAsDismissed(17766), { imageSource: markAsDismissed(17767), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
};