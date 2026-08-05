// discord_app/modules/channel/useTextareaPlaceholderAndLabels.tsx
import ME from "ME";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { computeChannelName } from "useChannelName.tsx";

let c3;
let c4;
({ ChannelTypes: c3, ChannelTypesSets: c4 } = ME);
const result = require("getSystemLocale").fileFinishedImporting("modules/channel/useTextareaPlaceholderAndLabels.tsx");

export default function useTextareaPlaceholderAndLabels(isCreatingThread) {
  let channel;
  let isReadonly;
  ({ channel, isReadonly } = isCreatingThread);
  if (isReadonly === undefined) {
    isReadonly = false;
  }
  let flag = isCreatingThread.isCreatingThread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = computeChannelName(channel, true);
  const tmp3 = computeChannelName(channel, false);
  if (null != channel) {
    if (null != tmp2) {
      if (flag) {
        let obj = { placeholder: null, accessibilityLabel: null };
        const intl9 = getSystemLocale /* getSystemLocale */.intl;
        obj[0] = intl9.string(getSystemLocale /* getSystemLocale */.t.YzpScd);
        const intl10 = getSystemLocale /* getSystemLocale */.intl;
        obj[1] = intl10.string(getSystemLocale /* getSystemLocale */.t.YzpScd);
        let obj9 = obj;
      } else if (isReadonly) {
        obj = { placeholder: null, accessibilityLabel: null };
        const intl7 = getSystemLocale /* getSystemLocale */.intl;
        obj[0] = intl7.string(getSystemLocale /* getSystemLocale */.t["RRvRp/"]);
        const intl8 = getSystemLocale /* getSystemLocale */.intl;
        obj[1] = intl8.string(getSystemLocale /* getSystemLocale */.t["RRvRp/"]);
        obj9 = obj;
      } else if (channel.isForumPost()) {
        const obj1 = { placeholder: null, accessibilityLabel: null };
        const intl5 = getSystemLocale /* getSystemLocale */.intl;
        const obj2 = { channel: null };
        obj2[0] = tmp2;
        obj1[0] = intl5.formatToPlainString(getSystemLocale /* getSystemLocale */.t.Y6qWLc, obj2);
        const intl6 = getSystemLocale /* getSystemLocale */.intl;
        const obj3 = { channel: null };
        obj3[0] = tmp3;
        obj1[1] = intl6.formatToPlainString(getSystemLocale /* getSystemLocale */.t.KffKoR, obj3);
        obj9 = obj1;
      } else {
        const THREADS = constants2.THREADS;
        if (THREADS.has(channel.type)) {
          const obj4 = { placeholder: null, accessibilityLabel: null };
          const intl3 = getSystemLocale /* getSystemLocale */.intl;
          const obj5 = { channel: null };
          obj5[0] = tmp2;
          obj4[0] = intl3.formatToPlainString(getSystemLocale /* getSystemLocale */.t["8lzR/R"], obj5);
          const intl4 = getSystemLocale /* getSystemLocale */.intl;
          const obj6 = { channel: null };
          obj6[0] = tmp3;
          obj4[1] = intl4.formatToPlainString(getSystemLocale /* getSystemLocale */.t.UZIMWS, obj6);
          obj9 = obj4;
        } else if (channel.type === constants.DM) {
          obj = { placeholder: null, accessibilityLabel: null };
          const intl = getSystemLocale /* getSystemLocale */.intl;
          const obj7 = { channel: null };
          obj7[0] = tmp2;
          obj[0] = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t["4c+CAx"], obj7);
          const intl2 = getSystemLocale /* getSystemLocale */.intl;
          const obj8 = { channel: null };
          obj8[0] = tmp3;
          obj[1] = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.fqOxbV, obj8);
          obj9 = obj;
        } else {
          obj9 = { placeholder: null, accessibilityLabel: null };
          const intl13 = getSystemLocale /* getSystemLocale */.intl;
          const obj10 = { channel: null };
          obj10[0] = tmp2;
          obj9[0] = intl13.formatToPlainString(getSystemLocale /* getSystemLocale */.t["8lzR/R"], obj10);
          const intl14 = getSystemLocale /* getSystemLocale */.intl;
          const obj11 = { channel: null };
          obj11[0] = tmp3;
          obj9[1] = intl14.formatToPlainString(getSystemLocale /* getSystemLocale */.t.ih7ZSA, obj11);
        }
      }
    }
    return obj9;
  }
  const obj12 = { placeholder: null, accessibilityLabel: null };
  const intl11 = getSystemLocale /* getSystemLocale */.intl;
  obj12[0] = intl11.string(getSystemLocale /* getSystemLocale */.t.MKDeyL);
  const intl12 = getSystemLocale /* getSystemLocale */.intl;
  obj12[1] = intl12.string(getSystemLocale /* getSystemLocale */.t.MKDeyL);
  obj9 = obj12;
};