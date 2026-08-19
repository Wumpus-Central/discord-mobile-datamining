// discord_app/modules/parent_tools/native/ConnectGuardianCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_6 } from "../FamilyCenterConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[2] = { alignSelf: "center", padding: ThemesDefault.space.PX_12, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, borderColor: ThemesDefault.colors.BORDER_NORMAL };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[5] = { paddingHorizontal: 0 };
createCacheKey[6] = { flex: 1, height: 1, backgroundColor: ThemesDefault.colors.BORDER_NORMAL };
createCacheKey[7] = { marginHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[8] = { paddingTop: 0 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = function ConnectGuardianCard(linkCode) {
  linkCode = linkCode.linkCode;
  ({ expiresAt, shareActions } = linkCode);
  if (shareActions === undefined) {
    shareActions = "none";
  }
  let id;
  const tmp = callback4();
  let obj = linkCode(id[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  ({ days, hours, minutes, seconds } = stateFromStores(id[8])(expiresAt));
  stateFromStores(id[9])(expiresAt, linkCode.onRefresh);
  const items1 = [stateFromStores, linkCode];
  const callback = React.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = "" !== linkCode;
    }
    if (tmp2) {
      const result = linkCode(id[10]).shareGuardianConnectLink(stateFromStores, linkCode);
      const obj = linkCode(id[10]);
    }
  }, items1);
  const items2 = [id, linkCode];
  if (null == id) {
    return null;
  } else {
    const intl5 = tmp2(tmp3[13]).intl;
    obj = { style: null, children: null };
    obj[0] = tmp.card;
    const tmp16 = callback(id, linkCode);
    obj = { align: "center", spacing: null, children: null };
    obj[1] = tmp6(tmp3[6]).space.PX_8;
    obj1 = { size: 160, text: null };
    obj1[1] = tmp16;
    const items3 = [callback2(tmp2(tmp3[16]).QRCodeWithOverlay, obj1), ];
    const obj2 = { style: null, variant: "text-xs/normal", children: null };
    obj2[0] = tmp.countdown;
    const stringResult = intl5.string(tmp6(tmp3[14]).RfkLDs);
    const _HermesInternal = HermesInternal;
    obj2[2] = "" + stringResult + " " + tmp2(tmp3[18]).getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds);
    items3[1] = callback2(tmp2(tmp3[17]).Text, obj2);
    obj[2] = items3;
    obj[1] = callback3(tmp2(tmp3[15]).Stack, obj);
    const tmp22 = callback2(View, obj);
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
      obj3[0] = items4;
      const obj4 = { style: null };
      obj4[0] = tmp.dividerLine;
      const items5 = [callback2(View, obj4), , ];
      const obj5 = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
      obj5[0] = tmp.dividerText;
      const intl = tmp2(tmp3[13]).intl;
      const tmp6Result = tmp6(tmp3[14]);
      obj5[3] = intl.string("compact" === shareActions ? tmp6Result.XhROZk : tmp6Result.lggBOi);
      items5[1] = callback2(tmp2(tmp3[17]).Text, obj5);
      const obj6 = { style: null };
      obj6[0] = tmp.dividerLine;
      items5[2] = callback2(View, obj6);
      obj3[1] = items5;
      let tmp20Result = callback3(View, obj3);
      if ("compact" === shareActions) {
        const obj7 = { style: null, children: null };
        obj7[0] = tmp.compactContainer;
        const items6 = [tmp22, tmp20Result, ];
        const obj8 = { variant: "secondary", size: "md", text: null, icon: null, disabled: null, onPress: null };
        const intl4 = tmp2(tmp3[13]).intl;
        obj8[2] = intl4.string(tmp2(tmp3[13]).t.Ej3B3Y);
        const obj9 = { size: "md", color: null };
        obj9[1] = tmp6(tmp3[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
        obj8[3] = callback2(tmp2(tmp3[20]).ShareIcon, obj9);
        obj8[4] = "" === linkCode;
        obj8[5] = callback;
        items6[2] = callback2(tmp2(tmp3[19]).Button, obj8);
        obj7[1] = items6;
        tmp20Result = callback3(View, obj7);
      } else {
        const obj10 = { spacing: null, style: null, children: null };
        obj10[0] = tmp6(tmp3[6]).space.PX_32;
        obj10[1] = tmp.container;
        const items7 = [tmp22, tmp20Result, ];
        const obj11 = { style: null, children: null };
        obj11[0] = tmp.buttonGroup;
        const obj12 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
        const intl2 = tmp2(tmp3[13]).intl;
        obj12[2] = intl2.string(tmp2(tmp3[13]).t.Ej3B3Y);
        obj12[3] = "" === linkCode;
        obj12[4] = callback;
        const items8 = [callback2(tmp2(tmp3[19]).Button, obj12), ];
        const obj13 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
        const intl3 = tmp2(tmp3[13]).intl;
        obj13[2] = intl3.string(tmp2(tmp3[13]).t.WqhZss);
        obj13[3] = "" === linkCode;
        obj13[4] = tmp10;
        items8[1] = callback2(tmp2(tmp3[19]).Button, obj13);
        obj11[1] = items8;
        items7[2] = callback3(tmp2(tmp3[21]).ButtonGroup, obj11);
        obj10[2] = items7;
        tmp20Result = callback3(tmp2(tmp3[15]).Stack, obj10);
      }
      return tmp20Result;
    }
    const tmp2Result = tmp2(tmp3[18]);
  }
  const tmp7 = stateFromStores(id[8])(expiresAt);
};