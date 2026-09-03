// === Module 11243: StrangerDangerMoreTipsModalActionItems ===

// Module 11243 (StrangerDangerMoreTipsModalActionItems)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "markAllUserIdListsStale" /* 4130 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 10878 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx");

export default function StrangerDangerMoreTipsModalActionItems(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let stateFromStores;
  let memo;
  let isBlocked;
  let first;
  jsx = undefined;
  let callback;
  let callback1;
  let obj = channelId(senderId[6]);
  let items = [isBlocked];
  const items1 = [senderId];
  stateFromStores = obj.useStateFromStores(items, () => isBlocked.getUser(senderId), items1);
  const items2 = [stateFromStores];
  memo = stateFromStores.useMemo(() => warningId(senderId[7]).getName(stateFromStores), items2);
  const items3 = [memo];
  const items4 = [senderId];
  const stateFromStoresObject = channelId(senderId[6]).useStateFromStoresObject(items3, () => ({ isIgnored: memo.isIgnored(senderId), isBlocked: memo.isBlocked(senderId) }), items4);
  isBlocked = stateFromStoresObject.isBlocked;
  const tmp4 = onBlockPressed(stateFromStores.useState(stateFromStoresObject.isIgnored), 2);
  first = tmp4[0];
  jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp4[1]];
  callback = stateFromStores.useCallback(() => {
    let obj = channelId(senderId[8]);
    obj = { channelId, warningId, senderId, warningType: first.STRANGER_DANGER, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_IGNORE };
    obj.trackCtaEvent(obj);
    warningId(senderId[9]).ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    callback(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp4[1]];
  callback1 = stateFromStores.useCallback(() => {
    let obj = channelId(senderId[8]);
    obj = { channelId, warningId, senderId, warningType: first.STRANGER_DANGER, cta: channelId(senderId[8]).CtaEventTypes.USER_MODAL_UNIGNORE };
    obj.trackCtaEvent(obj);
    warningId(senderId[9]).unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    callback(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = stateFromStores.useMemo(() => {
    const intl = channelId(senderId[10]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = channelId(senderId[10]).t;
    if (first) {
      let obj = { username: null };
      obj[0] = memo;
      let formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj);
      let tmp2 = memo;
    } else {
      obj = { username: null };
      tmp2 = memo;
      obj[0] = memo;
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    obj = { title: formatToPlainStringResult, description: null, onClick: null, icon: null, disabled: null };
    let stringResult;
    if (!first) {
      const intl2 = channelId(senderId[10]).intl;
      stringResult = intl2.string(channelId(senderId[10]).t.naWE6W);
    }
    obj[1] = stringResult;
    obj[2] = first ? callback1 : callback;
    if (first) {
      let EyeSlashIcon = tmp11(tmp12[11]).EyeIcon;
    } else {
      EyeSlashIcon = tmp11(tmp12[12]).EyeSlashIcon;
    }
    obj[3] = closure_8(EyeSlashIcon, {});
    obj[4] = isBlocked;
    const items = [obj, ];
    const intl3 = channelId(senderId[10]).intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = channelId(senderId[10]).t;
    if (isBlocked) {
      obj1 = { username: null };
      obj1[0] = tmp2;
      let formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj1);
    } else {
      const obj2 = { username: null };
      obj2[0] = tmp2;
      formatToPlainString2Result = formatToPlainString2(t2["gc/wxc"], obj2);
    }
    const obj3 = { title: formatToPlainString2Result, description: null, onClick: null, icon: null, variant: "danger", disabled: null };
    let stringResult1;
    if (!isBlocked) {
      const intl4 = channelId(senderId[10]).intl;
      stringResult1 = intl4.string(channelId(senderId[10]).t.G08MKu);
    }
    obj3[1] = stringResult1;
    obj3[2] = onBlockPressed;
    obj3[3] = closure_8(channelId(senderId[13]).DenyIcon, { color: "text-feedback-critical" });
    obj3[5] = isBlocked;
    items[1] = obj3;
    return items;
  }, items7);
  obj = {
    hasIcons: true,
    children: memo1.map((arg0, arg1) => {
      let obj = { children: null };
      obj = {};
      const merged = Object.assign(arg0);
      obj[0] = callback(warningId(senderId[15]), obj);
      return callback(stateFromStores.Fragment, obj, arg1);
    })
  };
  return jsx(channelId(senderId[14]).TableRowGroup, {
    hasIcons: true,
    children: memo1.map((arg0, arg1) => {
      let obj = { children: null };
      obj = {};
      const merged = Object.assign(arg0);
      obj[0] = callback(warningId(senderId[15]), obj);
      return callback(stateFromStores.Fragment, obj, arg1);
    })
  });
};