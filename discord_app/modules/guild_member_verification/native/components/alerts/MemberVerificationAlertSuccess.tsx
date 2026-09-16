// === Module 5614: MemberVerificationAlertSuccess ===

// Module 5614 (MemberVerificationAlertSuccess)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;
import GuildStore from "GuildStore" /* 1980 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let closure_8 = createStyles.createStyles({ alert: { marginTop: 120 }, header: { marginTop: 40, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" }, illustrationContainer: { position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", left: 0, right: 0, top: -220 }, illustration: { height: 246, width: 240 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx");

export default function MemberVerificationAlertSuccess(guildId) {
  guildId = guildId.guildId;
  const handleConfirmAndAck = guildId.handleConfirmAndAck;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, handleConfirmAndAck: 0 }));
  const tmp2 = closure_8();
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(merged[6]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  guildId(merged[6]);
  [][0] = AccessibilityStore;
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
    const obj2 = {};
    const merged1 = Object.assign(merged);
    const intl = tmp3(tmp4[8]).intl;
    obj2.confirmText = intl.string(tmp3(tmp4[8]).t.NuzmOA);
    obj2.style = tmp2.alert;
    obj2.onCancel = onConfirm;
    obj2.onConfirm = onConfirm;
    const obj3 = { style: tmp2.illustrationContainer, children: null };
    const obj4 = { source: null, autoPlay: null, style: null };
    const tmp10 = handleConfirmAndAck(tmp4[7]);
    obj4.source = tmp3(tmp4[10]);
    obj4.autoPlay = !tmp7;
    obj4.style = tmp2.illustration;
    obj3.children = closure_6(handleConfirmAndAck(tmp4[9]), obj4);
    const items2 = [closure_6(View, obj3), , ];
    const obj5 = { style: tmp2.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp3(tmp4[8]).intl;
    const obj6 = { guildName: stateFromStores.name };
    obj5.children = intl2.format(tmp3(tmp4[8]).t["7hhNEn"], obj6);
    items2[1] = closure_6(tmp3(tmp4[11]).Heading, obj5);
    const obj7 = { style: tmp2.text, variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = tmp3(tmp4[8]).intl;
    obj7.children = intl3.string(tmp3(tmp4[8]).t.nwpqyc);
    items2[2] = closure_6(tmp3(tmp4[11]).Text, obj7);
    obj2.children = items2;
    return closure_7(tmp10, obj2);
  }
  const obj = guildId(merged[6]);
};