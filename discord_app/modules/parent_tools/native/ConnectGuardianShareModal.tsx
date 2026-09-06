// discord_app/modules/parent_tools/native/ConnectGuardianShareModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Modal from "../../../design/components/Modal/native/Modal.native.tsx";
import useOnNewPendingRequestDefault from "../hooks/useOnNewPendingRequest.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
function ConnectGuardianShareScreen() {
  const tmp = closure_8();
  let obj = getLinkCode(1114);
  const syncMessages = obj.useSyncMessages(getLinkCode(2396).messagesLoader);
  const callback = noop.useCallback(() => {
    const intl = getLinkCode(1114).intl;
    getLinkCode(4258).presentFailedToast(intl.string(getLinkCode(1114).t.R0RpRX));
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
  }, []);
  let obj1 = getLinkCode(11916);
  getLinkCode = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj2 = getLinkCode(563);
  const items = [FamilyCenterStore];
  const stateFromStores = obj2.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  let obj3 = getLinkCode(563);
  const items1 = [FamilyCenterStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const effect = noop.useEffect(() => {
    getLinkCode();
  }, []);
  useOnNewPendingRequestDefault(ModalActionCreatorsDefault.pop);
  obj = { spacing: nativeDefault.space.PX_40, children: null };
  obj = { spacing: nativeDefault.space.PX_8, children: null };
  obj1 = {
    style: tmp.title,
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: null,
  };
  let intl = getLinkCode(1114).intl;
  obj1.children = intl.string(_modDef2396.ITlV6p);
  const items2 = [closure_6(getLinkCode(4556).Text, obj1)];
  obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = getLinkCode(1114).intl;
  obj2.children = intl2.format(_modDef2396.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = closure_6(getLinkCode(4556).Text, obj2);
  obj.children = items2;
  const items3 = [closure_7(getLinkCode(4973).Stack, obj)];
  obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.cardSection, children: null };
  const obj4 = {
    style: tmp.qrLabel,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = getLinkCode(1114).intl;
  obj4.children = intl3.string(_modDef2396.pojgfk);
  const items4 = [closure_6(getLinkCode(4556).Text, obj4)];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj5 = {
        shareActions: "full",
        linkCode: stateFromStores,
        expiresAt: stateFromStores1,
        onRefresh: getLinkCode,
      };
      let tmp11Result = closure_6(tmp2(14881).ConnectGuardianCard, obj5);
    }
    const obj6 = { children: null };
    const obj7 = { children: null };
    items4[1] = tmp11Result;
    obj3.children = items4;
    items3[1] = closure_7(getLinkCode(4973).Stack, obj3);
    obj.children = items3;
    obj7.children = closure_7(getLinkCode(4973).Stack, obj);
    obj6.children = closure_6(getLinkCode(8422).ModalContent, obj7);
    return closure_6(getLinkCode(8421).ModalScreen, obj6);
  }
  tmp11Result = closure_6(View, { style: tmp.loading, children: closure_6(getLinkCode(5577).ActivityIndicator, {}) });
  const obj8 = { style: tmp.loading, children: closure_6(getLinkCode(5577).ActivityIndicator, {}) };
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  title: { textAlign: "center" },
  body: { textAlign: "center" },
  qrLabel: { textAlign: "center" },
  cardSection: { alignItems: "center" },
  loading: null,
};
createStyles = { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 };
createStyles.loading = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  const memo = noop.useMemo(() => {
    let obj = { CONNECT_GUARDIAN_SHARE: null };
    obj = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderBackButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_6(closure_1_9, {});
      },
    };
    obj.CONNECT_GUARDIAN_SHARE = obj;
    return obj;
  }, []);
  let obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo, headerBackTitle: null };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return timestampProducer(Modal.Modal, obj);
}
