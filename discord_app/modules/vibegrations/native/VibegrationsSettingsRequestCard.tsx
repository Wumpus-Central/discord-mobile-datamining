// === Module 16383: VibegrationsSettingsRequestCard ===

// Module 16383 (VibegrationsSettingsRequestCard)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16264 */;
import noop from "module_19" /* 19 */;

const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx");

export default function VibegrationsSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  const items = [projectId, request];
  const obj = { style: closure_7().card, children: null };
  const callback = noop.useCallback(() => {
    const obj2 = { content: hasOwnProperty(VibegrationsSettingsSheetDefault, { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(1115).intl;
  obj2.children = intl.string(request(3715).wgDhiQ);
  const items1 = [closure_5(projectId(4832).Text, obj2), , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_5(tmp9, obj3);
    const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp6(1115).intl;
    obj4.text = intl3.string(tmp8(3715)["KO2xN+"]);
    items1[2] = closure_5(tmp6(5281).Button, obj4);
    obj.children = items1;
    return closure_6(View, obj);
  }
  const intl2 = tmp6(1115).intl;
  note = intl2.string(tmp8(3715)["V+DBhs"]);
  const tmp = closure_7();
};