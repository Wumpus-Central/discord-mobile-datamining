// === Module 11306: PublishModal ===

// Module 11306 (PublishModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import useChannelFollowerStatsDefault from "useChannelFollowerStats" /* 11307 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { alertContainer: { paddingTop: 16 }, alertLoading: { paddingTop: 62, paddingBottom: 46 }, alertBodyText: { marginBottom: 16, fontSize: 16, lineHeight: 24, color: fn(5627).DARK_PRIMARY_300_LIGHT_PRIMARY_400 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: 16, fontSize: 16, lineHeight: 24, color: fn(5627).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = c.c(10);
  const tmp4 = closure_7();
  const tmp5 = _slicedToArray(useChannelFollowerStatsDefault(channelId.channelId), 2);
  const first = tmp5[0];
  if (tmp5[1]) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp25 = <hasOwnProperty animating />;
      cResult[0] = tmp25;
      let first1 = tmp25;
    } else {
      first1 = cResult[0];
    }
    if (cResult[1] !== tmp4.alertLoading) {
      const obj2 = { style: tmp4.alertLoading, children: first1 };
      const tmp29 = <React4 style={tmp4.alertLoading}>{first1}</React4>;
      cResult[1] = tmp4.alertLoading;
      cResult[2] = tmp29;
      let tmp26 = tmp29;
    } else {
      tmp26 = cResult[2];
    }
    return tmp26;
  } else {
    let guildsFollowing;
    if (first != null) {
      guildsFollowing = first.guildsFollowing;
    }
    let tmp9 = null != guildsFollowing;
    if (tmp9) {
      let guildsFollowing1;
      if (first != null) {
        guildsFollowing1 = first.guildsFollowing;
      }
      tmp9 = guildsFollowing1 > 0;
    }
    let guildsFollowing2;
    if (first != null) {
      guildsFollowing2 = first.guildsFollowing;
    }
    if (cResult[3] === guildsFollowing2) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === tmp4.alertBodyText) {
          let tmp12 = cResult[6];
        }
        if (cResult[7] === tmp4.alertContainer) {
          if (cResult[8] === tmp12) {
            let tmp17 = cResult[9];
          }
          return tmp17;
        }
        const obj3 = { style: tmp4.alertContainer, children: tmp12 };
        const tmp20 = <React4 style={tmp4.alertContainer}>{tmp12}</React4>;
        cResult[7] = tmp4.alertContainer;
        cResult[8] = tmp12;
        cResult[9] = tmp20;
        tmp17 = tmp20;
      }
    }
    const obj4 = { style: tmp4.alertBodyText, children: null };
    const intl = util.intl;
    if (tmp9) {
      let num2;
      if (first != null) {
        num2 = first.guildsFollowing;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const obj5 = { numGuildsFollowing: num2 };
      obj4.children = intl.format(util.t.GCGrNP, obj5);
      let tmp14 = obj4;
    } else {
      obj4.children = intl.string(util.t["8FpqOs"]);
      tmp14 = obj4;
    }
    const tmp13Result = jsx(native.LegacyText, tmp14);
    let guildsFollowing3;
    if (first != null) {
      guildsFollowing3 = first.guildsFollowing;
    }
    cResult[3] = guildsFollowing3;
    cResult[4] = tmp9;
    cResult[5] = tmp4.alertBodyText;
    cResult[6] = tmp13Result;
    tmp12 = tmp13Result;
  }
}) : ((channelId) => {
  const tmp = closure_7();
  const tmp3 = _slicedToArray(useChannelFollowerStatsDefault(channelId.channelId), 2);
  const first = tmp3[0];
  if (tmp3[1]) {
    const obj2 = { style: tmp.alertLoading, children: <hasOwnProperty animating /> };
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
});