// === Module 11476: PublishModal ===

// Module 11476 (PublishModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import useChannelFollowerStatsDefault from "useChannelFollowerStats" /* 11477 */;
import closure_3 from "_slicedToArray" /* 32 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ View: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
createCacheKey = { alertContainer: { paddingTop: 16 }, alertLoading: { paddingTop: 62, paddingBottom: 46 }, alertBodyText: null };
createCacheKey = { marginBottom: 16, fontSize: 16, lineHeight: 24, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createCacheKey[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default function PublishModal(channelId) {
  const tmp = callback2();
  const tmp3 = callback(useChannelFollowerStatsDefault(channelId.channelId), 2);
  const first = tmp3[0];
  if (tmp3[1]) {
    let obj = { style: null, children: null };
    obj[0] = tmp.alertLoading;
    obj[1] = <closure_5 animating />;
    return <closure_4 style={null}>{null}</closure_4>;
  } else {
    let guildsFollowing;
    if (first != null) {
      guildsFollowing = first.guildsFollowing;
    }
    let tmp7 = null != guildsFollowing;
    if (tmp7) {
      let guildsFollowing1;
      if (first != null) {
        guildsFollowing1 = first.guildsFollowing;
      }
      tmp7 = guildsFollowing1 > 0;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.alertContainer;
    obj = { style: null, children: null };
    obj[0] = tmp.alertBodyText;
    const intl = getSystemLocale.intl;
    if (tmp7) {
      let num2;
      if (first != null) {
        num2 = first.guildsFollowing;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj1 = { numGuildsFollowing: null };
      obj1[0] = num2;
      obj[1] = intl.format(tmp11(1233).t.GCGrNP, obj1);
      let tmp12 = obj;
    } else {
      obj[1] = intl.string(tmp11(1233).t["8FpqOs"]);
      tmp12 = obj;
    }
    obj[1] = jsx(Button.LegacyText, tmp12);
    return <closure_4 style={null}>{null}</closure_4>;
  }
};