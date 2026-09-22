// discord_app/modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx
import util from "../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import EyeSlashIcon2 from "../../../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import EyeIcon from "../../../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import DenyIcon from "../../../../../design/components/Icon/native/redesign/generated/DenyIcon.tsx";
import RelationshipActionCreatorsDefault from "../../../../../actions/RelationshipActionCreators.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const SafetyWarningTypes = fn(11185).SafetyWarningTypes;
let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/StrangerDangerMoreTipsModalActionItems.tsx",
);

export default function StrangerDangerMoreTipsModalActionItems(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const onBlockPressed = channelId.onBlockPressed;
  let isBlocked;
  let items = [isBlocked];
  const items1 = [senderId];
  const stateFromStores = channelId(senderId[6]).useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => UserUtilsDefault.getName(stateFromStores), items2);
  let obj = channelId(senderId[6]);
  const items3 = [memo];
  const items4 = [senderId];
  const stateFromStoresObject = channelId(senderId[6]).useStateFromStoresObject(
    items3,
    () => ({ isIgnored: RelationshipStore.isIgnored(senderId), isBlocked: RelationshipStore.isBlocked(senderId) }),
    items4,
  );
  isBlocked = stateFromStoresObject.isBlocked;
  const tmp4 = onBlockPressed(stateFromStores.useState(stateFromStoresObject.isIgnored), 2);
  const first = tmp4[0];
  jsx = tmp6;
  const items5 = [channelId, warningId, senderId, tmp4[1]];
  const callback = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    obj.trackCtaEvent({
      channelId,
      warningId,
      senderId,
      warningType: SafetyWarningTypes.STRANGER_DANGER,
      cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE,
    });
    const obj2 = {
      channelId,
      warningId,
      senderId,
      warningType: SafetyWarningTypes.STRANGER_DANGER,
      cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_IGNORE,
    };
    RelationshipActionCreatorsDefault.ignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(true);
  }, items5);
  const items6 = [channelId, warningId, senderId, tmp4[1]];
  const callback1 = stateFromStores.useCallback(() => {
    const obj = SafetyWarningUtils;
    obj.trackCtaEvent({
      channelId,
      warningId,
      senderId,
      warningType: SafetyWarningTypes.STRANGER_DANGER,
      cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE,
    });
    const obj2 = {
      channelId,
      warningId,
      senderId,
      warningType: SafetyWarningTypes.STRANGER_DANGER,
      cta: SafetyWarningUtils.CtaEventTypes.USER_MODAL_UNIGNORE,
    };
    RelationshipActionCreatorsDefault.unignoreUser(senderId, "mobile_stranger_danger_more", channelId);
    closure_8(false);
  }, items6);
  const items7 = [first, isBlocked, memo, callback, callback1, onBlockPressed];
  const memo1 = stateFromStores.useMemo(() => {
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (first) {
      const obj2 = { username: memo };
      let formatToPlainStringResult = formatToPlainString(t.ZLIKgJ, obj2);
      let tmp2 = memo;
    } else {
      const obj = { username: null };
      tmp2 = memo;
      obj.username = memo;
      formatToPlainStringResult = formatToPlainString(t.QiyPaJ, obj);
    }
    const obj3 = { title: formatToPlainStringResult, description: null, onClick: null, icon: null, disabled: null };
    let stringResult;
    if (!first) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.naWE6W);
    }
    obj3.description = stringResult;
    obj3.onClick = first ? callback1 : callback;
    if (first) {
      let EyeSlashIcon = EyeIcon.EyeIcon;
    } else {
      EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
    }
    obj3.icon = <EyeSlashIcon />;
    obj3.disabled = isBlocked;
    const items = [obj3];
    const intl3 = util.intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const t2 = util.t;
    if (isBlocked) {
      const obj4 = { username: tmp2 };
      let formatToPlainString2Result = formatToPlainString2(t2.bluEjH, obj4);
    } else {
      const obj5 = { username: tmp2 };
      formatToPlainString2Result = formatToPlainString2(t2["gc/wxc"], obj5);
    }
    const obj6 = {
      title: formatToPlainString2Result,
      description: null,
      onClick: null,
      icon: null,
      variant: "danger",
      disabled: null,
    };
    let stringResult1;
    if (!isBlocked) {
      const intl4 = util.intl;
      stringResult1 = intl4.string(util.t.G08MKu);
    }
    obj6.description = stringResult1;
    obj6.onClick = onBlockPressed;
    obj6.icon = jsx(DenyIcon.DenyIcon, { color: "text-feedback-critical" });
    obj6.disabled = isBlocked;
    items[1] = obj6;
    return items;
  }, items7);
  let obj2 = channelId(senderId[6]);
  return jsx(channelId(senderId[14]).TableRowGroup, {
    hasIcons: true,
    children: memo1.map((item, index) => {
      const obj = { children: null };
      const merged = Object.assign(item);
      obj.children = closure_8(warningId(senderId[15]), {});
      return closure_8(stateFromStores.Fragment, obj, index);
    }),
  });
}
