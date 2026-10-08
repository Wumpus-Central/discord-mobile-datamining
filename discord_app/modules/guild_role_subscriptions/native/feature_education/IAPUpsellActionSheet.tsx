// === Module 16473: IAPUpsellActionSheet ===

// Module 16473 (IAPUpsellActionSheet)
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1085).Routes;
const StaticChannelRoute = fn(2070).StaticChannelRoute;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function IAPUpsellActionSheet(guildId) {
  const cResult = guildId(576).c(9);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  if (cResult[0] === guildId) {
    if (cResult[1] === markAsDismissed) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.rBw4cE);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.mKHibc);
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(tmp(1126).t.RzWDqY);
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      cResult[5] = stringResult2;
      let tmp8 = stringResult2;
      let tmp7 = stringResult1;
      let tmp6 = stringResult;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    if (cResult[6] === tmp4) {
      if (cResult[7] === markAsDismissed) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj2 = { imageSource: markAsDismissed(16475), header: tmp6, body: tmp7, cta: tmp8, onCTAPress: tmp4, markAsDismissed };
    const tmp16 = jsx(markAsDismissed(16474), { imageSource: markAsDismissed(16475), header: tmp6, body: tmp7, cta: tmp8, onCTAPress: tmp4, markAsDismissed });
    cResult[6] = tmp4;
    cResult[7] = markAsDismissed;
    cResult[8] = tmp16;
    tmp12 = tmp16;
    const tmp15 = markAsDismissed(16474);
  }
  function handleCTAPress() {
    router_utils.transitionTo(Routes.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  }
  cResult[0] = guildId;
  cResult[1] = markAsDismissed;
  cResult[2] = handleCTAPress;
  tmp4 = handleCTAPress;
  const obj = guildId(576);
}) : (function IAPUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: markAsDismissed(16475), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null };
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
  return jsx(markAsDismissed(16474), { imageSource: markAsDismissed(16475), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
});