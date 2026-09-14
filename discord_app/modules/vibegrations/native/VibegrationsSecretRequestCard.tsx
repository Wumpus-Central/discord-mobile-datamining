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
const createStyles = fn(4636);
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
  chips: null,
  chip: null,
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
obj2.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.chip = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let closure_7 = createStyles.createStyles(obj2);
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
    const obj2 = {
      content: hasOwnProperty(VibegrationsSecretsSheetDefault, { projectId, request }),
      key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(1114).intl;
  obj2.children = intl.string(request(3590)["/e28TK"]);
  const items1 = [closure_5(projectId(4632).Text, obj2), , ,];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_5(tmp9, obj3);
    const obj4 = { style: tmp.chips, children: null };
    const fields = request.fields;
    obj4.children = fields.map((children) => {
      const obj = {
        style: chip.chip,
        children: hasOwnProperty(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: children.label,
        }),
      };
      return hasOwnProperty(View, obj, children.name);
    });
    items1[2] = closure_5(View, obj4);
    const obj5 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp6(1114).intl;
    obj5.text = intl3.string(tmp8(3590)["gVV+HX"]);
    items1[3] = closure_5(tmp6(5056).Button, obj5);
    obj.children = items1;
    return closure_6(View, obj);
  }
  const intl2 = tmp6(1114).intl;
  note = intl2.string(tmp8(3590).jxvtin);
}
