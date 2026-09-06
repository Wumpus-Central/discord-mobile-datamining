// === Module 16610: VibegrationsSettingsRequestCard ===

// Module 16610 (VibegrationsSettingsRequestCard)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16611 */;
import noop from "module_19" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 16589 */;

const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { card: null, chips: null, chip: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles.card = createStyles;
createStyles.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj1 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles.chip = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx");

export default function VibegrationsSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = projectId(504);
  const items = [VibegrationsConnectionStore];
  noop = obj.useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
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
  obj = { style: tmp.card, children: null };
  const callback = noop.useCallback(() => {
    let obj = { content: null, key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    obj = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true };
    obj.content = timestampProducer(VibegrationsSettingsSheetDefault, obj);
    obj.showActionSheet(obj);
  }, items1);
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = tmp2(1114).intl;
  obj.children = intl.string(request(3547).wgDhiQ);
  const items2 = [closure_6(projectId(4556).Text, obj), , , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj1 = { variant: "text-sm/normal", color: "text-default", children: note };
    items2[1] = closure_6(tmp9, obj1);
    let tmp7Result = null;
    if (found.length > 0) {
      const obj2 = {
        style: tmp.chips,
        children: found.map((children) => {
              let obj = { style: chip.chip, children: null };
              obj = { variant: "text-xs/medium", color: "text-default", children: children.label };
              obj.children = timestampProducer(Text_Text.Text, obj);
              return timestampProducer(View, obj, children.key);
            })
      };
      tmp7Result = closure_6(View, obj2);
    }
    items2[2] = tmp7Result;
    const obj3 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp2(1114).intl;
    obj3.text = intl3.string(tmp8(3547)["KO2xN+"]);
    items2[3] = closure_6(tmp2(4975).Button, obj3);
    obj.children = items2;
    return closure_7(View, obj);
  }
  const intl2 = tmp2(1114).intl;
  note = intl2.string(tmp8(3547)["V+DBhs"]);
};