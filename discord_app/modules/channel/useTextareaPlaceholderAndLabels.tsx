// === Module 12118: useTextareaPlaceholderAndLabels ===

// Module 12118 (useTextareaPlaceholderAndLabels)
import util from "util" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 4792 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ChannelTypes: c3, ChannelTypesSets: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default function useTextareaPlaceholderAndLabels(isCreatingThread) {
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