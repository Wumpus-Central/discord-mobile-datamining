// === Module 11670: PublishModal ===

// Module 11670 (PublishModal)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useChannelFollowerStatsDefault from "useChannelFollowerStats" /* 11671 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { alertContainer: { paddingTop: 16 }, alertLoading: { paddingTop: 62, paddingBottom: 46 }, alertBodyText: null };
createStyles = { marginBottom: 16, fontSize: 16, lineHeight: 24, color: fn(5441).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
createStyles.alertBodyText = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default function PublishModal(channelId) {
  const tmp = closure_7();
  const tmp3 = _slicedToArray(useChannelFollowerStatsDefault(channelId.channelId), 2);
  const first = tmp3[0];
  if (tmp3[1]) {
    let obj = { style: tmp.alertLoading, children: <hasOwnProperty animating /> };
    return <React4 style={tmp.alertLoading}><hasOwnProperty animating /></React4>;
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
    obj = { style: tmp.alertContainer, children: null };
    obj = { style: tmp.alertBodyText, children: null };
    const intl = util.intl;
    if (tmp7) {
      let num2;
      if (first != null) {
        num2 = first.guildsFollowing;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const obj1 = { numGuildsFollowing: num2 };
      obj.children = intl.format(util.t.GCGrNP, obj1);
      let tmp12 = obj;
    } else {
      obj.children = intl.string(util.t["8FpqOs"]);
      tmp12 = obj;
    }
    obj.children = jsx(native.LegacyText, tmp12);
    return <React4 style={tmp.alertBodyText}>{null}</React4>;
  }
};