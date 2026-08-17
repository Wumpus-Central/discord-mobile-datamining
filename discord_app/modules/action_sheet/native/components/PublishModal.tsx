// discord_app/modules/action_sheet/native/components/PublishModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import useChannelFollowerStatsDefault from "../../../channel_following/useChannelFollowerStats.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
      obj[1] = intl.format(tmp11(1236).t.GCGrNP, obj1);
      let tmp12 = obj;
    } else {
      obj[1] = intl.string(tmp11(1236).t["8FpqOs"]);
      tmp12 = obj;
    }
    obj[1] = jsx(Button.LegacyText, tmp12);
    return <closure_4 style={null}>{null}</closure_4>;
  }
};