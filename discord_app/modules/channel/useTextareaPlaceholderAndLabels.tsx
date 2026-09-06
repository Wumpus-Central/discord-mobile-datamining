// === Module 11984: useTextareaPlaceholderAndLabels ===

// Module 11984 (useTextareaPlaceholderAndLabels)
import util from "util" /* 1114 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
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
        let obj = { placeholder: null, accessibilityLabel: null };
        const intl9 = util.intl;
        obj.placeholder = intl9.string(util.t.YzpScd);
        const intl10 = util.intl;
        obj.accessibilityLabel = intl10.string(util.t.YzpScd);
        let obj9 = obj;
      } else if (isReadonly) {
        obj = { placeholder: null, accessibilityLabel: null };
        const intl7 = util.intl;
        obj.placeholder = intl7.string(util.t["RRvRp/"]);
        const intl8 = util.intl;
        obj.accessibilityLabel = intl8.string(util.t["RRvRp/"]);
        obj9 = obj;
      } else if (channel.isForumPost()) {
        const obj1 = { placeholder: null, accessibilityLabel: null };
        const intl5 = util.intl;
        const obj2 = { channel: tmp2 };
        obj1.placeholder = intl5.formatToPlainString(util.t.Y6qWLc, obj2);
        const intl6 = util.intl;
        const obj3 = { channel: tmp3 };
        obj1.accessibilityLabel = intl6.formatToPlainString(util.t.KffKoR, obj3);
        obj9 = obj1;
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj4 = { placeholder: null, accessibilityLabel: null };
          const intl3 = util.intl;
          const obj5 = { channel: tmp2 };
          obj4.placeholder = intl3.formatToPlainString(util.t["8lzR/R"], obj5);
          const intl4 = util.intl;
          const obj6 = { channel: tmp3 };
          obj4.accessibilityLabel = intl4.formatToPlainString(util.t.UZIMWS, obj6);
          obj9 = obj4;
        } else if (channel.type === constants.DM) {
          obj = { placeholder: null, accessibilityLabel: null };
          const intl = util.intl;
          const obj7 = { channel: tmp2 };
          obj.placeholder = intl.formatToPlainString(util.t["4c+CAx"], obj7);
          const intl2 = util.intl;
          const obj8 = { channel: tmp3 };
          obj.accessibilityLabel = intl2.formatToPlainString(util.t.fqOxbV, obj8);
          obj9 = obj;
        } else {
          obj9 = { placeholder: null, accessibilityLabel: null };
          const intl13 = util.intl;
          const obj10 = { channel: tmp2 };
          obj9.placeholder = intl13.formatToPlainString(util.t["8lzR/R"], obj10);
          const intl14 = util.intl;
          const obj11 = { channel: tmp3 };
          obj9.accessibilityLabel = intl14.formatToPlainString(util.t.ih7ZSA, obj11);
        }
      }
    }
    return obj9;
  }
  const obj12 = { placeholder: null, accessibilityLabel: null };
  const intl11 = util.intl;
  obj12.placeholder = intl11.string(util.t.MKDeyL);
  const intl12 = util.intl;
  obj12.accessibilityLabel = intl12.string(util.t.MKDeyL);
  obj9 = obj12;
};