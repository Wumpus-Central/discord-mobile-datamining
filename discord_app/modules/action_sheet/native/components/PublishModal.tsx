// discord_app/modules/action_sheet/native/components/PublishModal.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useChannelFollowerStatsDefault from "../../../channel_following/useChannelFollowerStats.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = {
  alertContainer: { paddingTop: 16 },
  alertLoading: { paddingTop: 62, paddingBottom: 46 },
  alertBodyText: { marginBottom: 16, fontSize: 16, lineHeight: 24, color: fn(5660).DARK_PRIMARY_300_LIGHT_PRIMARY_400 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default function PublishModal(channelId) {
  const tmp = closure_7();
  const tmp3 = _slicedToArray(useChannelFollowerStatsDefault(channelId.channelId), 2);
  const first = tmp3[0];
  if (tmp3[1]) {
    const obj2 = { style: tmp.alertLoading, children: <hasOwnProperty animating /> };
    return (
      <React4 style={tmp.alertLoading}>
        <hasOwnProperty animating />
      </React4>
    );
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
    const obj = { style: tmp.alertContainer, children: null };
    const obj3 = { style: tmp.alertBodyText, children: null };
    const intl = util.intl;
    if (tmp7) {
      let num2;
      if (first != null) {
        num2 = first.guildsFollowing;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const obj4 = { numGuildsFollowing: num2 };
      obj3.children = intl.format(util.t.GCGrNP, obj4);
      let tmp12 = obj3;
    } else {
      obj3.children = intl.string(util.t["8FpqOs"]);
      tmp12 = obj3;
    }
    obj.children = jsx(native.LegacyText, tmp12);
    return <React4 style={tmp.alertContainer}>{null}</React4>;
  }
}
