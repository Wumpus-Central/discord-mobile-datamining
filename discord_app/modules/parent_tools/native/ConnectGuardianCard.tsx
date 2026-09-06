// === Module 14881: ConnectGuardianCard ===

// Module 14881 (ConnectGuardianCard)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import shareGuardianConnectLink from "shareGuardianConnectLink" /* 14878 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
let closure_6 = fn(7538).FAMILY_CENTER_REQUEST_QR_CODE_URL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, compactContainer: null, card: null, countdown: null, divider: null, compactDividerFlush: null, dividerLine: null, dividerText: null, buttonGroup: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.compactContainer = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
let obj1 = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
createStyles.card = { alignSelf: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_NORMAL };
createStyles.countdown = { textAlign: "center" };
let obj2 = { alignSelf: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_NORMAL };
createStyles.divider = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.compactDividerFlush = { paddingHorizontal: 0 };
let obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.dividerLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
let obj4 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
createStyles.dividerText = { marginHorizontal: nativeDefault.space.PX_8 };
createStyles.buttonGroup = { paddingTop: 0 };
let closure_9 = createStyles.createStyles(createStyles);
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
  let obj = linkCode(id[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
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
    obj = { style: tmp.card, children: null };
    const tmp16 = closure_6(id, linkCode);
    obj = { align: "center", spacing: tmp6(tmp3[6]).space.PX_8, children: null };
    const obj1 = { size: 160, text: tmp16 };
    const items3 = [closure_7(tmp2(tmp3[16]).QRCodeWithOverlay, obj1), ];
    const obj2 = { style: tmp.countdown, variant: "text-xs/normal", children: null };
    const stringResult = intl5.string(tmp6(tmp3[14]).RfkLDs);
    const _HermesInternal = HermesInternal;
    obj2.children = "" + stringResult + " " + tmp2(tmp3[18]).getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds);
    items3[1] = closure_7(tmp2(tmp3[17]).Text, obj2);
    obj.children = items3;
    obj.children = closure_8(tmp2(tmp3[15]).Stack, obj);
    const tmp22 = closure_7(View, obj);
    if ("none" === shareActions) {
      return tmp22;
    } else {
      const items4 = [tmp.divider, ];
      let compactDividerFlush = tmp23;
      if ("compact" === shareActions) {
        compactDividerFlush = tmp.compactDividerFlush;
      }
      const obj3 = { style: null, children: null };
      items4[1] = compactDividerFlush;
      obj3.style = items4;
      const obj4 = { style: tmp.dividerLine };
      const items5 = [tmp18(tmp19, obj4), , ];
      const obj5 = { style: tmp.dividerText, variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = tmp2(tmp3[13]).intl;
      const tmp6Result = tmp6(tmp3[14]);
      obj5.children = intl.string("compact" === shareActions ? tmp6Result.XhROZk : tmp6Result.lggBOi);
      items5[1] = tmp18(tmp2(tmp3[17]).Text, obj5);
      const obj6 = { style: tmp.dividerLine };
      items5[2] = tmp18(tmp19, obj6);
      obj3.children = items5;
      let tmp20Result = tmp20(tmp19, obj3);
      if ("compact" === shareActions) {
        const obj7 = { style: tmp.compactContainer, children: null };
        const items6 = [tmp22, tmp20Result, ];
        const obj8 = { variant: "secondary", size: "md", text: null, icon: null, disabled: null, onPress: null };
        const intl4 = tmp2(tmp3[13]).intl;
        obj8.text = intl4.string(tmp2(tmp3[13]).t.Ej3B3Y);
        const obj9 = { size: "md", color: tmp6(tmp3[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
        obj8.icon = tmp18(tmp2(tmp3[20]).ShareIcon, obj9);
        obj8.disabled = "" === linkCode;
        obj8.onPress = callback;
        items6[2] = tmp18(tmp2(tmp3[19]).Button, obj8);
        obj7.children = items6;
        tmp20Result = tmp20(tmp19, obj7);
      } else {
        const obj10 = { spacing: tmp6(tmp3[6]).space.PX_32, style: tmp.container, children: null };
        const items7 = [tmp22, tmp20Result, ];
        const obj11 = { style: tmp.buttonGroup, children: null };
        const obj12 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
        const intl2 = tmp2(tmp3[13]).intl;
        obj12.text = intl2.string(tmp2(tmp3[13]).t.Ej3B3Y);
        obj12.disabled = "" === linkCode;
        obj12.onPress = callback;
        const items8 = [tmp18(tmp2(tmp3[19]).Button, obj12), ];
        const obj13 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
        const intl3 = tmp2(tmp3[13]).intl;
        obj13.text = intl3.string(tmp2(tmp3[13]).t.WqhZss);
        obj13.disabled = "" === linkCode;
        obj13.onPress = tmp10;
        items8[1] = tmp18(tmp2(tmp3[19]).Button, obj13);
        obj11.children = items8;
        items7[2] = tmp20(tmp2(tmp3[21]).ButtonGroup, obj11);
        obj10.children = items7;
        tmp20Result = tmp20(tmp2(tmp3[15]).Stack, obj10);
      }
      return tmp20Result;
    }
    const tmp2Result = tmp2(tmp3[18]);
  }
  const tmp7 = stateFromStores(id[8])(expiresAt);
};