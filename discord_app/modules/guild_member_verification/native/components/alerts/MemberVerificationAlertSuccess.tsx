// === Module 8569: MemberVerificationAlertSuccess ===

// Module 8569 (MemberVerificationAlertSuccess)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ alert: { marginTop: 120 }, header: { marginTop: 40, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" }, illustrationContainer: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: 0, right: 0, top: -220 }, illustration: { height: 246, width: 240 } });
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default function MemberVerificationAlertSuccess(guildId) {
  guildId = guildId.guildId;
  const handleConfirmAndAck = guildId.handleConfirmAndAck;
  const merged = Object.assign(guildId, Object.create(null));
  const tmp2 = callback3();
  let obj = guildId(merged[6]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getGuild(guildId), items1);
  guildId(merged[6]);
  [][0] = closure_4;
  if (null == stateFromStores) {
    return null;
  } else {
    function onConfirm() {
      handleConfirmAndAck();
      const onClose = merged.onClose;
      if (onClose != null) {
        onClose();
      }
    }
    obj = {};
    const merged1 = Object.assign(merged);
    const intl = tmp3(tmp4[8]).intl;
    obj.confirmText = intl.string(tmp3(tmp4[8]).t.NuzmOA);
    obj.style = tmp2.alert;
    obj.onCancel = onConfirm;
    obj.onConfirm = onConfirm;
    obj = { style: null, children: null };
    obj[0] = tmp2.illustrationContainer;
    obj1 = { source: null, autoPlay: null, style: null };
    const tmp10 = handleConfirmAndAck(tmp4[7]);
    obj1[0] = tmp3(tmp4[10]);
    obj1[1] = !tmp7;
    obj1[2] = tmp2.illustration;
    obj[1] = callback(handleConfirmAndAck(tmp4[9]), obj1);
    const items2 = [callback(View, obj), , ];
    const obj2 = { style: null, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp2.header;
    const intl2 = tmp3(tmp4[8]).intl;
    const obj3 = { guildName: null };
    obj3[0] = stateFromStores.name;
    obj2[3] = intl2.format(tmp3(tmp4[8]).t["7hhNEn"], obj3);
    items2[1] = callback(tmp3(tmp4[11]).Heading, obj2);
    const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj4[0] = tmp2.text;
    const intl3 = tmp3(tmp4[8]).intl;
    obj4[3] = intl3.string(tmp3(tmp4[8]).t.nwpqyc);
    items2[2] = callback(tmp3(tmp4[11]).Text, obj4);
    obj.children = items2;
    return callback2(tmp10, obj);
  }
};