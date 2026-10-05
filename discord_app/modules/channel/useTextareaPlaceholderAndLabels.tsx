// === Module 11598: useTextareaPlaceholderAndLabels ===

// Module 11598 (useTextareaPlaceholderAndLabels)
import react from "react" /* 576 */;
import intl15 from "intl" /* 1126 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ChannelTypes: c3, ChannelTypesSets: closure_4 } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl9;
  let isCreatingThread;
  let isReadonly;
  const obj = react;
  const cResult = obj.c(31);
  ({ channel, isReadonly, isCreatingThread } = arg0);
  const tmp4 = undefined !== isReadonly && isReadonly;
  const tmp5 = undefined !== isCreatingThread && isCreatingThread;
  const tmp6 = useChannelNameDefault(channel, true);
  const tmp7 = useChannelNameDefault(channel, false);
  if (null != channel) {
    let tmp14;
    if (null != tmp6) {
      if (tmp5) {
        let tmp33;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { placeholder: intl11.string(intl15.t.YzpScd), accessibilityLabel: intl12.string(intl15.t.YzpScd) };
          intl11 = intl15.intl;
          intl12 = intl15.intl;
          cResult[1] = obj2;
          tmp33 = obj2;
        } else {
          tmp33 = cResult[1];
        }
        tmp14 = tmp33;
      } else if (tmp4) {
        let tmp31;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { placeholder: intl9.string(intl15.t["RRvRp/"]), accessibilityLabel: intl10.string(intl15.t["RRvRp/"]) };
          intl9 = intl15.intl;
          intl10 = intl15.intl;
          cResult[2] = obj3;
          tmp31 = obj3;
        } else {
          tmp31 = cResult[2];
        }
        tmp14 = tmp31;
      } else if (channel.isForumPost()) {
        let tmp25;
        let tmp27;
        if (cResult[3] !== tmp6) {
          const intl7 = intl15.intl;
          const obj4 = { channel: tmp6 };
          const formatToPlainStringResult = intl7.formatToPlainString(intl15.t.Y6qWLc, obj4);
          cResult[3] = tmp6;
          cResult[4] = formatToPlainStringResult;
          tmp25 = formatToPlainStringResult;
        } else {
          tmp25 = cResult[4];
        }
        if (cResult[5] !== tmp7) {
          const intl8 = intl15.intl;
          const obj5 = { channel: tmp7 };
          const formatToPlainStringResult1 = intl8.formatToPlainString(intl15.t.KffKoR, obj5);
          cResult[5] = tmp7;
          cResult[6] = formatToPlainStringResult1;
          tmp27 = formatToPlainStringResult1;
        } else {
          tmp27 = cResult[6];
        }
        if (cResult[7] === tmp25) {
          let tmp29;
          if (cResult[8] === tmp27) {
            tmp29 = cResult[9];
          }
          tmp14 = tmp29;
        }
        const obj6 = { placeholder: tmp25, accessibilityLabel: tmp27 };
        cResult[7] = tmp25;
        cResult[8] = tmp27;
        cResult[9] = obj6;
        tmp29 = obj6;
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          let tmp20;
          let tmp22;
          if (cResult[10] !== tmp6) {
            const intl5 = intl15.intl;
            const obj7 = { channel: tmp6 };
            const formatToPlainStringResult2 = intl5.formatToPlainString(intl15.t["8lzR/R"], obj7);
            cResult[10] = tmp6;
            cResult[11] = formatToPlainStringResult2;
            tmp20 = formatToPlainStringResult2;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] !== tmp7) {
            const intl6 = intl15.intl;
            const obj8 = { channel: tmp7 };
            const formatToPlainStringResult3 = intl6.formatToPlainString(intl15.t.UZIMWS, obj8);
            cResult[12] = tmp7;
            cResult[13] = formatToPlainStringResult3;
            tmp22 = formatToPlainStringResult3;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp20) {
            let tmp24;
            if (cResult[15] === tmp22) {
              tmp24 = cResult[16];
            }
            tmp14 = tmp24;
          }
          const obj9 = { placeholder: tmp20, accessibilityLabel: tmp22 };
          cResult[14] = tmp20;
          cResult[15] = tmp22;
          cResult[16] = obj9;
          tmp24 = obj9;
        } else if (channel.type === constants.DM) {
          let tmp15;
          let tmp17;
          if (cResult[17] !== tmp6) {
            const intl3 = intl15.intl;
            const obj10 = { channel: tmp6 };
            const formatToPlainStringResult4 = intl3.formatToPlainString(intl15.t["4c+CAx"], obj10);
            cResult[17] = tmp6;
            cResult[18] = formatToPlainStringResult4;
            tmp15 = formatToPlainStringResult4;
          } else {
            tmp15 = cResult[18];
          }
          if (cResult[19] !== tmp7) {
            const intl4 = intl15.intl;
            const obj11 = { channel: tmp7 };
            const formatToPlainStringResult5 = intl4.formatToPlainString(intl15.t.fqOxbV, obj11);
            cResult[19] = tmp7;
            cResult[20] = formatToPlainStringResult5;
            tmp17 = formatToPlainStringResult5;
          } else {
            tmp17 = cResult[20];
          }
          if (cResult[21] === tmp15) {
            let tmp19;
            if (cResult[22] === tmp17) {
              tmp19 = cResult[23];
            }
            tmp14 = tmp19;
          }
          const obj12 = { placeholder: tmp15, accessibilityLabel: tmp17 };
          cResult[21] = tmp15;
          cResult[22] = tmp17;
          cResult[23] = obj12;
          tmp19 = obj12;
        } else {
          let tmp10;
          let tmp12;
          if (cResult[24] !== tmp6) {
            const intl = intl15.intl;
            const obj13 = { channel: tmp6 };
            const formatToPlainStringResult6 = intl.formatToPlainString(intl15.t["8lzR/R"], obj13);
            cResult[24] = tmp6;
            cResult[25] = formatToPlainStringResult6;
            tmp10 = formatToPlainStringResult6;
          } else {
            tmp10 = cResult[25];
          }
          if (cResult[26] !== tmp7) {
            const intl2 = intl15.intl;
            const obj14 = { channel: tmp7 };
            const formatToPlainStringResult7 = intl2.formatToPlainString(intl15.t.ih7ZSA, obj14);
            cResult[26] = tmp7;
            cResult[27] = formatToPlainStringResult7;
            tmp12 = formatToPlainStringResult7;
          } else {
            tmp12 = cResult[27];
          }
          if (cResult[28] === tmp10) {
            if (cResult[29] === tmp12) {
              tmp14 = cResult[30];
            }
          }
          const obj15 = { placeholder: tmp10, accessibilityLabel: tmp12 };
          cResult[28] = tmp10;
          cResult[29] = tmp12;
          cResult[30] = obj15;
          tmp14 = obj15;
        }
      }
    }
    return tmp14;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj16 = { placeholder: intl13.string(intl15.t.MKDeyL), accessibilityLabel: intl14.string(intl15.t.MKDeyL) };
    intl13 = intl15.intl;
    intl14 = intl15.intl;
    cResult[0] = obj16;
    first = obj16;
  } else {
    first = cResult[0];
  }
  tmp14 = first;
}) : ((isCreatingThread) => {
  let channel;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isReadonly;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  ({ channel, isReadonly } = isCreatingThread);
  if (isReadonly === undefined) {
    isReadonly = false;
  }
  let flag = isCreatingThread.isCreatingThread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = useChannelNameDefault(channel, true);
  const tmp3 = useChannelNameDefault(channel, false);
  if (null != channel) {
    let obj12;
    if (null != tmp2) {
      if (flag) {
        const obj2 = { placeholder: intl9.string(intl15.t.YzpScd), accessibilityLabel: intl10.string(intl15.t.YzpScd) };
        intl9 = intl15.intl;
        intl10 = intl15.intl;
        obj12 = obj2;
      } else if (isReadonly) {
        const obj3 = { placeholder: intl7.string(intl15.t["RRvRp/"]), accessibilityLabel: intl8.string(intl15.t["RRvRp/"]) };
        intl7 = intl15.intl;
        intl8 = intl15.intl;
        obj12 = obj3;
      } else if (channel.isForumPost()) {
        const obj4 = { placeholder: intl5.formatToPlainString(intl15.t.Y6qWLc, obj5), accessibilityLabel: intl6.formatToPlainString(intl15.t.KffKoR, obj6) };
        intl5 = intl15.intl;
        obj5 = { channel: tmp2 };
        intl6 = intl15.intl;
        obj12 = obj4;
        obj6 = { channel: tmp3 };
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj7 = { placeholder: intl3.formatToPlainString(intl15.t["8lzR/R"], obj8), accessibilityLabel: intl4.formatToPlainString(intl15.t.UZIMWS, obj9) };
          intl3 = intl15.intl;
          obj8 = { channel: tmp2 };
          intl4 = intl15.intl;
          obj12 = obj7;
          obj9 = { channel: tmp3 };
        } else if (channel.type === constants.DM) {
          const obj = { placeholder: intl.formatToPlainString(intl15.t["4c+CAx"], obj10), accessibilityLabel: intl2.formatToPlainString(intl15.t.fqOxbV, obj11) };
          intl = intl15.intl;
          obj10 = { channel: tmp2 };
          intl2 = intl15.intl;
          obj12 = obj;
          obj11 = { channel: tmp3 };
        } else {
          obj12 = { placeholder: intl13.formatToPlainString(intl15.t["8lzR/R"], obj13), accessibilityLabel: intl14.formatToPlainString(intl15.t.ih7ZSA, obj14) };
          intl13 = intl15.intl;
          obj13 = { channel: tmp2 };
          intl14 = intl15.intl;
          obj14 = { channel: tmp3 };
        }
      }
    }
    return obj12;
  }
  const obj15 = { placeholder: intl11.string(intl15.t.MKDeyL), accessibilityLabel: intl12.string(intl15.t.MKDeyL) };
  intl11 = intl15.intl;
  intl12 = intl15.intl;
  obj12 = obj15;
});
const result = size.fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default tmp3;