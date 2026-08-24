// === Module 11209: useTextareaPlaceholderAndLabels ===

// Module 11209 (useTextareaPlaceholderAndLabels)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelNameDefault from "computeChannelName" /* 4989 */;
import ME from "ME" /* 676 */;

({ ChannelTypes: c3, ChannelTypesSets: c4 } = ME);
const result = set.fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default function useTextareaPlaceholderAndLabels(isCreatingThread) {
  ({ channel, isReadonly } = isCreatingThread);
  if (isReadonly === undefined) {
    isReadonly = false;
  }
  let flag = isCreatingThread.isCreatingThread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = computeChannelNameDefault(channel, true);
  const tmp3 = computeChannelNameDefault(channel, false);
  if (null != channel) {
    if (null != tmp2) {
      if (flag) {
        let obj = { placeholder: null, accessibilityLabel: null };
        const intl9 = getSystemLocale.intl;
        obj[0] = intl9.string(getSystemLocale.t.YzpScd);
        const intl10 = getSystemLocale.intl;
        obj[1] = intl10.string(getSystemLocale.t.YzpScd);
        let obj9 = obj;
      } else if (isReadonly) {
        obj = { placeholder: null, accessibilityLabel: null };
        const intl7 = getSystemLocale.intl;
        obj[0] = intl7.string(getSystemLocale.t["RRvRp/"]);
        const intl8 = getSystemLocale.intl;
        obj[1] = intl8.string(getSystemLocale.t["RRvRp/"]);
        obj9 = obj;
      } else if (channel.isForumPost()) {
        obj1 = { placeholder: null, accessibilityLabel: null };
        const intl5 = getSystemLocale.intl;
        const obj2 = { channel: null };
        obj2[0] = tmp2;
        obj1[0] = intl5.formatToPlainString(getSystemLocale.t.Y6qWLc, obj2);
        const intl6 = getSystemLocale.intl;
        const obj3 = { channel: null };
        obj3[0] = tmp3;
        obj1[1] = intl6.formatToPlainString(getSystemLocale.t.KffKoR, obj3);
        obj9 = obj1;
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj4 = { placeholder: null, accessibilityLabel: null };
          const intl3 = getSystemLocale.intl;
          const obj5 = { channel: null };
          obj5[0] = tmp2;
          obj4[0] = intl3.formatToPlainString(getSystemLocale.t["8lzR/R"], obj5);
          const intl4 = getSystemLocale.intl;
          const obj6 = { channel: null };
          obj6[0] = tmp3;
          obj4[1] = intl4.formatToPlainString(getSystemLocale.t.UZIMWS, obj6);
          obj9 = obj4;
        } else if (channel.type === constants.DM) {
          obj = { placeholder: null, accessibilityLabel: null };
          const intl = getSystemLocale.intl;
          const obj7 = { channel: null };
          obj7[0] = tmp2;
          obj[0] = intl.formatToPlainString(getSystemLocale.t["4c+CAx"], obj7);
          const intl2 = getSystemLocale.intl;
          const obj8 = { channel: null };
          obj8[0] = tmp3;
          obj[1] = intl2.formatToPlainString(getSystemLocale.t.fqOxbV, obj8);
          obj9 = obj;
        } else {
          obj9 = { placeholder: null, accessibilityLabel: null };
          const intl13 = getSystemLocale.intl;
          const obj10 = { channel: null };
          obj10[0] = tmp2;
          obj9[0] = intl13.formatToPlainString(getSystemLocale.t["8lzR/R"], obj10);
          const intl14 = getSystemLocale.intl;
          const obj11 = { channel: null };
          obj11[0] = tmp3;
          obj9[1] = intl14.formatToPlainString(getSystemLocale.t.ih7ZSA, obj11);
        }
      }
    }
    return obj9;
  }
  const obj12 = { placeholder: null, accessibilityLabel: null };
  const intl11 = getSystemLocale.intl;
  obj12[0] = intl11.string(getSystemLocale.t.MKDeyL);
  const intl12 = getSystemLocale.intl;
  obj12[1] = intl12.string(getSystemLocale.t.MKDeyL);
  obj9 = obj12;
};