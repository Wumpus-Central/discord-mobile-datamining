// discord_app/modules/vibegrations/native/VibegrationsSecretRequestCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsSecretsSheet from "VibegrationsSecretsSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const VibegrationsSecretsSheetDefault = VibegrationsSecretsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { card: null, chips: null, chip: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
createStyles.card = createStyles;
createStyles.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj1 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles.chip = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretRequestCard.tsx");

export default function VibegrationsSecretRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [projectId, request];
  let obj = { style: tmp.card, children: null };
  const callback = noop.useCallback(() => {
    let obj = { content: null, key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY };
    obj = { projectId, request };
    obj.content = hasOwnProperty(VibegrationsSecretsSheetDefault, obj);
    obj.showActionSheet(obj);
  }, items);
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(1114).intl;
  obj.children = intl.string(request(3547)["/e28TK"]);
  const items1 = [closure_5(projectId(4556).Text, obj), , ,];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    obj = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = tmp5(tmp9, obj);
    const obj1 = { style: tmp.chips, children: null };
    const fields = request.fields;
    obj1.children = fields.map((children) => {
      let obj = { style: chip.chip, children: null };
      obj = { variant: "text-xs/medium", color: "text-default", children: children.label };
      obj.children = hasOwnProperty(Text_Text.Text, obj);
      return hasOwnProperty(View, obj, children.name);
    });
    items1[2] = tmp5(tmp4, obj1);
    const obj2 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp6(1114).intl;
    obj2.text = intl3.string(tmp8(3547)["gVV+HX"]);
    items1[3] = tmp5(tmp6(4975).Button, obj2);
    obj.children = items1;
    return closure_6(tmp4, obj);
  }
  const intl2 = tmp6(1114).intl;
  note = intl2.string(tmp8(3547).jxvtin);
}
