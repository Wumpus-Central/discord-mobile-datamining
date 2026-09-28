// discord_app/modules/vibegrations/native/VibegrationsSecretRequestCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsSecretsSheet from "VibegrationsSecretsSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const VibegrationsSecretsSheetDefault = VibegrationsSecretsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  card: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.md,
    padding: nativeDefault.space.PX_12,
    marginTop: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  },
  cardAwaiting: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
obj2.cardAwaiting = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretRequestCard.tsx");

export default function VibegrationsSecretRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  const awaiting = projectId.awaiting;
  const tmp = closure_7();
  const items = [projectId, request];
  const items1 = [request.fields];
  const callback = noop.useCallback(() => {
    const obj2 = {
      content: hasOwnProperty(VibegrationsSecretsSheetDefault, { projectId, request }),
      key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  const items2 = [tmp.card];
  let cardAwaiting = null != awaiting;
  const memo = noop.useMemo(() => {
    const fields = request.fields;
    return fields.map((id) => ({ id: id.name, label: id.label, icon: projectId(closure_1_2[7]).KeyIcon }));
  }, items1);
  if (cardAwaiting) {
    cardAwaiting = tmp.cardAwaiting;
  }
  const obj = { style: items2, children: null };
  items2[1] = cardAwaiting;
  let tmp6 = null;
  if (null != awaiting) {
    tmp6 = closure_5(projectId(16385).VibegrationsAwaitingPulseRing, {});
  }
  const items3 = [tmp6, , , ,];
  let str = "text-muted";
  if (null != awaiting) {
    str = "text-brand";
  }
  let obj2 = { variant: "text-xs/semibold", color: str, children: null };
  const intl = tmp11(1115).intl;
  if (null != awaiting) {
    let sKNh1M = request(3715).sKNh1M;
    let tmp13 = request;
  } else {
    tmp13 = request;
    sKNh1M = request(3715)["/e28TK"];
  }
  obj2.children = intl.string(sKNh1M);
  items3[1] = closure_5(projectId(4832).Text, obj2);
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items3[2] = closure_5(tmp16, obj3);
    const obj4 = { label: null, size: "xs", items: null };
    const intl3 = tmp11(1115).intl;
    obj4.label = intl3.string(tmp13(3715)["/e28TK"]);
    obj4.items = memo;
    items3[3] = closure_5(tmp11(13978).TagGroup, obj4);
    const obj5 = { variant: "primary", size: "sm", onPress: callback, text: null };
    const intl4 = tmp11(1115).intl;
    obj5.text = intl4.string(tmp13(3715)["gVV+HX"]);
    items3[4] = closure_5(tmp11(5281).Button, obj5);
    obj.children = items3;
    return closure_6(View, obj);
  }
  const intl2 = tmp11(1115).intl;
  note = intl2.string(tmp13(3715).jxvtin);
}
