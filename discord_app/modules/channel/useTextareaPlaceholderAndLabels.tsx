// discord_app/modules/channel/useTextareaPlaceholderAndLabels.tsx
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import useChannelNameDefault from "useChannelName.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ ChannelTypes: c3, ChannelTypesSets: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTextareaPlaceholderAndLabels(arg0) {
      let stringResult = dependencyMap;
      const cResult = c.c(31);
      ({ channel, isReadonly, isCreatingThread } = arg0);
      const tmp6 = useChannelNameDefault(channel, true);
      const tmp7 = useChannelNameDefault(channel, false);
      if (null != channel) {
        if (null != tmp6) {
          if (tmp5) {
            const _Symbol2 = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { placeholder: null, accessibilityLabel: null };
              const intl11 = util.intl;
              obj2.placeholder = intl11.string(util.t.YzpScd);
              const intl12 = util.intl;
              obj2.accessibilityLabel = intl12.string(util.t.YzpScd);
              cResult[1] = obj2;
            }
          } else if (tmp4) {
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { placeholder: null, accessibilityLabel: null };
              const intl9 = util.intl;
              obj3.placeholder = intl9.string(util.t["RRvRp/"]);
              const intl10 = util.intl;
              obj3.accessibilityLabel = intl10.string(util.t["RRvRp/"]);
              cResult[2] = obj3;
            }
          } else if (channel.isForumPost()) {
            if (cResult[3] !== tmp6) {
              const intl7 = util.intl;
              const obj4 = { channel: tmp6 };
              const formatToPlainStringResult = intl7.formatToPlainString(util.t.Y6qWLc, obj4);
              cResult[3] = tmp6;
              cResult[4] = formatToPlainStringResult;
              let tmp27 = formatToPlainStringResult;
            } else {
              tmp27 = cResult[4];
            }
            if (cResult[5] !== tmp7) {
              const intl8 = util.intl;
              const obj5 = { channel: tmp7 };
              const formatToPlainStringResult1 = intl8.formatToPlainString(util.t.KffKoR, obj5);
              cResult[5] = tmp7;
              cResult[6] = formatToPlainStringResult1;
              let tmp29 = formatToPlainStringResult1;
            } else {
              tmp29 = cResult[6];
            }
            if (cResult[7] === tmp27) {
            }
            const obj6 = { placeholder: tmp27, accessibilityLabel: tmp29 };
            cResult[7] = tmp27;
            cResult[8] = tmp29;
            cResult[9] = obj6;
          } else {
            const THREADS = constants2.THREADS;
            if (THREADS.has(channel.type)) {
              if (cResult[10] !== tmp6) {
                const intl5 = util.intl;
                const obj7 = { channel: tmp6 };
                const formatToPlainStringResult2 = intl5.formatToPlainString(util.t["8lzR/R"], obj7);
                cResult[10] = tmp6;
                cResult[11] = formatToPlainStringResult2;
                let tmp21 = formatToPlainStringResult2;
              } else {
                tmp21 = cResult[11];
              }
              if (cResult[12] !== tmp7) {
                const intl6 = util.intl;
                const obj8 = { channel: tmp7 };
                const formatToPlainStringResult3 = intl6.formatToPlainString(util.t.UZIMWS, obj8);
                cResult[12] = tmp7;
                cResult[13] = formatToPlainStringResult3;
                let tmp23 = formatToPlainStringResult3;
              } else {
                tmp23 = cResult[13];
              }
              if (cResult[14] === tmp21) {
              }
              const obj9 = { placeholder: tmp21, accessibilityLabel: tmp23 };
              cResult[14] = tmp21;
              cResult[15] = tmp23;
              cResult[16] = obj9;
            } else if (channel.type === constants.DM) {
              if (cResult[17] !== tmp6) {
                const intl3 = util.intl;
                const obj10 = { channel: tmp6 };
                const formatToPlainStringResult4 = intl3.formatToPlainString(util.t["4c+CAx"], obj10);
                cResult[17] = tmp6;
                cResult[18] = formatToPlainStringResult4;
                let tmp15 = formatToPlainStringResult4;
              } else {
                tmp15 = cResult[18];
              }
              if (cResult[19] !== tmp7) {
                const intl4 = util.intl;
                const obj11 = { channel: tmp7 };
                const formatToPlainStringResult5 = intl4.formatToPlainString(util.t.fqOxbV, obj11);
                cResult[19] = tmp7;
                cResult[20] = formatToPlainStringResult5;
                let tmp17 = formatToPlainStringResult5;
              } else {
                tmp17 = cResult[20];
              }
              if (cResult[21] === tmp15) {
              }
              const obj12 = { placeholder: tmp15, accessibilityLabel: tmp17 };
              cResult[21] = tmp15;
              cResult[22] = tmp17;
              cResult[23] = obj12;
            } else {
              if (cResult[24] !== tmp6) {
                const intl = util.intl;
                const obj13 = { channel: tmp6 };
                const formatToPlainStringResult6 = intl.formatToPlainString(util.t["8lzR/R"], obj13);
                cResult[24] = tmp6;
                cResult[25] = formatToPlainStringResult6;
                let tmp10 = formatToPlainStringResult6;
              } else {
                tmp10 = cResult[25];
              }
              if (cResult[26] !== tmp7) {
                const intl2 = util.intl;
                const obj14 = { channel: tmp7 };
                const formatToPlainStringResult7 = intl2.formatToPlainString(util.t.ih7ZSA, obj14);
                cResult[26] = tmp7;
                cResult[27] = formatToPlainStringResult7;
                let tmp12 = formatToPlainStringResult7;
              } else {
                tmp12 = cResult[27];
              }
              if (cResult[28] === tmp10) {
                if (cResult[29] === tmp12) {
                  let tmp14 = cResult[30];
                }
                return tmp14;
              }
              const obj15 = { placeholder: tmp10, accessibilityLabel: tmp12 };
              cResult[28] = tmp10;
              cResult[29] = tmp12;
              cResult[30] = obj15;
              tmp14 = obj15;
            }
          }
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj16 = { placeholder: null, accessibilityLabel: null };
        const intl13 = util.intl;
        obj16.placeholder = intl13.string(util.t.MKDeyL);
        const intl14 = util.intl;
        stringResult = intl14.string(util.t.MKDeyL);
        obj16.accessibilityLabel = stringResult;
        cResult[0] = obj16;
        let first = obj16;
      } else {
        first = cResult[0];
      }
      tmp4 = undefined !== isReadonly && isReadonly;
      tmp5 = undefined !== isCreatingThread && isCreatingThread;
    }
  : function useTextareaPlaceholderAndLabels(isCreatingThread) {
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
        if (null != tmp2) {
          if (flag) {
            const obj2 = { placeholder: null, accessibilityLabel: null };
            const intl9 = util.intl;
            obj2.placeholder = intl9.string(util.t.YzpScd);
            const intl10 = util.intl;
            obj2.accessibilityLabel = intl10.string(util.t.YzpScd);
            let obj12 = obj2;
          } else if (isReadonly) {
            const obj3 = { placeholder: null, accessibilityLabel: null };
            const intl7 = util.intl;
            obj3.placeholder = intl7.string(util.t["RRvRp/"]);
            const intl8 = util.intl;
            obj3.accessibilityLabel = intl8.string(util.t["RRvRp/"]);
            obj12 = obj3;
          } else if (channel.isForumPost()) {
            const obj4 = { placeholder: null, accessibilityLabel: null };
            const intl5 = util.intl;
            const obj5 = { channel: tmp2 };
            obj4.placeholder = intl5.formatToPlainString(util.t.Y6qWLc, obj5);
            const intl6 = util.intl;
            const obj6 = { channel: tmp3 };
            obj4.accessibilityLabel = intl6.formatToPlainString(util.t.KffKoR, obj6);
            obj12 = obj4;
          } else {
            const THREADS = constants2.THREADS;
            if (THREADS.has(channel.type)) {
              const obj7 = { placeholder: null, accessibilityLabel: null };
              const intl3 = util.intl;
              const obj8 = { channel: tmp2 };
              obj7.placeholder = intl3.formatToPlainString(util.t["8lzR/R"], obj8);
              const intl4 = util.intl;
              const obj9 = { channel: tmp3 };
              obj7.accessibilityLabel = intl4.formatToPlainString(util.t.UZIMWS, obj9);
              obj12 = obj7;
            } else if (channel.type === constants.DM) {
              const obj = { placeholder: null, accessibilityLabel: null };
              const intl = util.intl;
              const obj10 = { channel: tmp2 };
              obj.placeholder = intl.formatToPlainString(util.t["4c+CAx"], obj10);
              const intl2 = util.intl;
              const obj11 = { channel: tmp3 };
              obj.accessibilityLabel = intl2.formatToPlainString(util.t.fqOxbV, obj11);
              obj12 = obj;
            } else {
              obj12 = { placeholder: null, accessibilityLabel: null };
              const intl13 = util.intl;
              const obj13 = { channel: tmp2 };
              obj12.placeholder = intl13.formatToPlainString(util.t["8lzR/R"], obj13);
              const intl14 = util.intl;
              const obj14 = { channel: tmp3 };
              obj12.accessibilityLabel = intl14.formatToPlainString(util.t.ih7ZSA, obj14);
            }
          }
        }
        return obj12;
      }
      const obj15 = { placeholder: null, accessibilityLabel: null };
      const intl11 = util.intl;
      obj15.placeholder = intl11.string(util.t.MKDeyL);
      const intl12 = util.intl;
      obj15.accessibilityLabel = intl12.string(util.t.MKDeyL);
      obj12 = obj15;
    };
