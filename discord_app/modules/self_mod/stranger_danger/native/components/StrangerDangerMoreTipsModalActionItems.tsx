// === Module 11385: StrangerDangerMoreTipsModalActionItems ===

// Module 11385 (StrangerDangerMoreTipsModalActionItems)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import EyeSlashIcon2 from "EyeSlashIcon" /* 6968 */;
import EyeIcon from "EyeIcon" /* 6970 */;
import DenyIcon from "DenyIcon" /* 7929 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11370 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SafetyWarningTypes = fn(10915).SafetyWarningTypes;
let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx");

export default function StrangerDangerMoreTipsModalActionItems(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let isBlocked;
  let obj = channelId(senderId[6]);
  let items = [isBlocked];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => UserUtilsDefault.getName(stateFromStores), items2);
  const items3 = [memo];
  const items4 = [senderId];
  const stateFromStoresObject = channelId(senderId[6]).useStateFromStoresObject(items3, () => ({ isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) }), items4);
  isBlocked = stateFromStoresObject.isBlocked;
  const tmp4 = onBlockPressed(stateFromStores.useState(stateFromStoresObject.isIgnored), 2);
  const first = tmp4[0];
  jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp4[1]];
  const callback = stateFromStores.useCallback(() => {
    const obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE };
    obj.trackCtaEvent(obj);
    RelationshipActionCreatorsDefault.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp4[1]];
  const callback1 = stateFromStores.useCallback(() => {
    const obj = { channelId, warningId, senderId, warningType: SafetyWarningTypes.STRANGER_DANGER, cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE };
    obj.trackCtaEvent(obj);
    RelationshipActionCreatorsDefault.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = stateFromStores.useMemo(() => {
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (first) {
      let obj = { username: memo };
      let formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj);
      let tmp2 = memo;
    } else {
      obj = { username: null };
      tmp2 = memo;
      obj.username = memo;
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    obj = { title: formatToPlainStringResult, description: null, onClick: null, icon: null, disabled: null };
    let stringResult;
    if (!first) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.naWE6W);
    }
    obj.description = stringResult;
    obj.onClick = first ? callback1 : callback;
    if (first) {
      let EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    obj.icon = <EyeSlashIcon />;
    obj.disabled = isBlocked;
    const items = [obj, ];
    const intl3 = util.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = util.t;
    if (isBlocked) {
      const obj1 = { username: tmp2 };
      let formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj1);
    } else {
      const obj2 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2["gc/wxc"], obj2);
    }
    const obj3 = { title: formatToPlainString2Result, description: null, onClick: null, icon: null, variant: "danger", disabled: null };
    let stringResult1;
    if (!isBlocked) {
      const intl4 = util.intl;
      stringResult1 = intl4.string(util.t.G08MKu);
    }
    obj3.description = stringResult1;
    obj3.onClick = onBlockPressed;
    obj3.icon = jsx(DenyIcon.DenyIcon, { color: "text-feedback-critical" });
    obj3.disabled = isBlocked;
    items[1] = obj3;
    return items;
  }, items7);
  obj = {
    hasIcons: true,
    children: memo1.map((item, index) => {
      let obj = { children: null };
      obj = {};
      const merged = Object.assign(item);
      obj.children = closure_8(warningId(senderId[15]), obj);
      return closure_8(stateFromStores.Fragment, obj, index);
    })
  };
  return jsx(channelId(senderId[14]).TableRowGroup, {
    hasIcons: true,
    children: memo1.map((item, index) => {
      let obj = { children: null };
      obj = {};
      const merged = Object.assign(item);
      obj.children = closure_8(warningId(senderId[15]), obj);
      return closure_8(stateFromStores.Fragment, obj, index);
    })
  });
};