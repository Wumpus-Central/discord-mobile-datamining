// discord_app/modules/parent_tools/native/ConnectGuardianCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import shareGuardianConnectLink from "shareGuardianConnectLink.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(7778).FAMILY_CENTER_REQUEST_QR_CODE_URL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_16 },
  compactContainer: null,
  card: null,
  countdown: null,
  divider: null,
  compactDividerFlush: null,
  dividerLine: null,
  dividerText: null,
  buttonGroup: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.compactContainer = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
let obj4 = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
obj2.card = {
  alignSelf: "center",
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
obj2.countdown = { textAlign: "center" };
let obj5 = {
  alignSelf: "center",
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
obj2.divider = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.compactDividerFlush = { paddingHorizontal: 0 };
let obj6 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.dividerLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
let obj7 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj2.dividerText = { marginHorizontal: nativeDefault.space.PX_8 };
obj2.buttonGroup = { paddingTop: 0 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = function ConnectGuardianCard(linkCode) {
  linkCode = linkCode.linkCode;
  ({ expiresAt, shareActions } = linkCode);
  if (shareActions === undefined) {
    shareActions = "none";
  }
  let id;
  const tmp = closure_9();
  const items = [UserStore];
  const stateFromStores = linkCode(id[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj = linkCode(id[7]);
  ({ days, hours, minutes, seconds } = stateFromStores(id[8])(expiresAt));
  stateFromStores(id[9])(expiresAt, linkCode.onRefresh);
  const items1 = [stateFromStores, linkCode];
  const callback = noop.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = "" !== linkCode;
    }
    if (tmp2) {
      const result = shareGuardianConnectLink.shareGuardianConnectLink(stateFromStores, linkCode);
    }
  }, items1);
  const items2 = [id, linkCode];
  if (null == id) {
    return null;
  } else {
    const intl5 = tmp2(tmp3[13]).intl;
    const obj2 = { style: tmp.card, children: null };
    const tmp16 = closure_6(id, linkCode);
    const obj3 = { align: "center", spacing: tmp6(tmp3[6]).space.PX_8, children: null };
    const obj4 = { size: 160, text: tmp16 };
    const items3 = [closure_7(tmp2(tmp3[16]).QRCodeWithOverlay, obj4)];
    const obj5 = { style: tmp.countdown, variant: "text-xs/normal", children: null };
    const stringResult = intl5.string(tmp6(tmp3[14]).RfkLDs);
    const _HermesInternal = HermesInternal;
    obj5.children =
      "" + stringResult + " " + tmp2(tmp3[18]).getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds);
    items3[1] = closure_7(tmp2(tmp3[17]).Text, obj5);
    obj3.children = items3;
    obj2.children = closure_8(tmp2(tmp3[15]).Stack, obj3);
    const tmp22 = closure_7(View, obj2);
    if ("none" === shareActions) {
      return tmp22;
    } else {
      const items4 = [tmp.divider];
      let compactDividerFlush = tmp23;
      if ("compact" === shareActions) {
        compactDividerFlush = tmp.compactDividerFlush;
      }
      const obj6 = { style: null, children: null };
      items4[1] = compactDividerFlush;
      obj6.style = items4;
      const obj7 = { style: tmp.dividerLine };
      const items5 = [closure_7(View, obj7), ,];
      const obj8 = { style: tmp.dividerText, variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = tmp2(tmp3[13]).intl;
      const tmp6Result = tmp6(tmp3[14]);
      obj8.children = intl.string("compact" === shareActions ? tmp6Result.XhROZk : tmp6Result.lggBOi);
      items5[1] = closure_7(tmp2(tmp3[17]).Text, obj8);
      const obj9 = { style: tmp.dividerLine };
      items5[2] = closure_7(View, obj9);
      obj6.children = items5;
      const tmp20Result = closure_8(View, obj6);
      if ("compact" === shareActions) {
        const obj10 = { style: tmp.compactContainer, children: null };
        const items6 = [tmp22, tmp20Result];
        const obj11 = { variant: "secondary", size: "md", text: null, icon: null, disabled: null, onPress: null };
        const intl4 = tmp2(tmp3[13]).intl;
        obj11.text = intl4.string(tmp2(tmp3[13]).t.Ej3B3Y);
        const obj12 = { size: "md", color: tmp6(tmp3[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
        obj11.icon = closure_7(tmp2(tmp3[20]).ShareIcon, obj12);
        obj11.disabled = "" === linkCode;
        obj11.onPress = callback;
        items6[2] = closure_7(tmp2(tmp3[19]).Button, obj11);
        obj10.children = items6;
        let tmp20Result2 = closure_8(View, obj10);
      } else {
        const obj13 = { spacing: tmp6(tmp3[6]).space.PX_32, style: tmp.container, children: null };
        const items7 = [tmp22, tmp20Result];
        const obj14 = { style: tmp.buttonGroup, children: null };
        const obj15 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
        const intl2 = tmp2(tmp3[13]).intl;
        obj15.text = intl2.string(tmp2(tmp3[13]).t.Ej3B3Y);
        obj15.disabled = "" === linkCode;
        obj15.onPress = callback;
        const items8 = [closure_7(tmp2(tmp3[19]).Button, obj15)];
        const obj16 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
        const intl3 = tmp2(tmp3[13]).intl;
        obj16.text = intl3.string(tmp2(tmp3[13]).t.WqhZss);
        obj16.disabled = "" === linkCode;
        obj16.onPress = tmp10;
        items8[1] = closure_7(tmp2(tmp3[19]).Button, obj16);
        obj14.children = items8;
        items7[2] = closure_8(tmp2(tmp3[21]).ButtonGroup, obj14);
        obj13.children = items7;
        tmp20Result2 = closure_8(tmp2(tmp3[15]).Stack, obj13);
      }
      return tmp20Result2;
    }
    const tmp2Result = tmp2(tmp3[18]);
  }
  const tmp7 = stateFromStores(id[8])(expiresAt);
};
