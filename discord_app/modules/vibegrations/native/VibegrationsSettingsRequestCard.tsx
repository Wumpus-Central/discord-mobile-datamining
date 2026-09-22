// discord_app/modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";

const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
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
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx");

export default function VibegrationsSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp = closure_8();
  dependencyMap = tmp;
  const items = [VibegrationsConnectionStore];
  noop = projectId(504).useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
  let keys = request.keys;
  if (keys == null) {
    keys = [];
  }
  const mapped = keys.map((item) => {
    closure_0 = item;
    let found;
    if (schema != null) {
      schema = schema.schema;
      found = schema.find((key) => key.key === closure_0);
    }
    return found;
  });
  let found = mapped.filter((item) => null != item);
  const items1 = [projectId, request];
  let obj2 = { style: tmp.card, children: null };
  const callback = noop.useCallback(() => {
    const obj2 = {
      content: timestampProducer(VibegrationsSettingsSheetDefault, {
        projectId,
        scopeKeys: request.keys,
        note: request.note,
        notifyAgent: true,
        isPreview: true,
      }),
      key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items1);
  const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = tmp2(1115).intl;
  obj3.children = intl.string(request(3678).wgDhiQ);
  const items2 = [closure_6(projectId(4753).Text, obj3), , ,];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: note };
    items2[1] = closure_6(tmp9, obj4);
    let tmp7Result = null;
    if (found.length > 0) {
      const obj5 = {
        style: tmp.chips,
        children: found.map((children) => {
          const obj = {
            style: chip.chip,
            children: timestampProducer(Text_Text.Text, {
              variant: "text-xs/medium",
              color: "text-default",
              children: children.label,
            }),
          };
          return timestampProducer(View, obj, children.key);
        }),
      };
      tmp7Result = closure_6(View, obj5);
    }
    items2[2] = tmp7Result;
    const obj6 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp2(1115).intl;
    obj6.text = intl3.string(tmp8(3678)["KO2xN+"]);
    items2[3] = closure_6(tmp2(5187).Button, obj6);
    obj2.children = items2;
    return closure_7(View, obj2);
  }
  const intl2 = tmp2(1115).intl;
  note = intl2.string(tmp8(3678)["V+DBhs"]);
  let obj = projectId(504);
}
