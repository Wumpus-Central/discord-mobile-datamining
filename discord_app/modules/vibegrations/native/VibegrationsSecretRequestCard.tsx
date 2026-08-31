// === Module 16158: VibegrationsSecretRequestCard ===

// Module 16158 (VibegrationsSecretRequestCard)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { card: null, chips: null, chip: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, padding: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
let obj1 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretRequestCard.tsx");

export default function VibegrationsSecretRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  dependencyMap = undefined;
  const tmp = callback2();
  dependencyMap = tmp;
  const items = [projectId, request];
  let obj = { style: tmp.card, children: null };
  const callback = React.useCallback(() => {
    let obj = projectId(chip[5]);
    obj = { content: closure_1_5(request(chip[6]), obj), key: projectId(chip[6]).VIBEGRATIONS_SECRETS_SHEET_KEY };
    obj = { projectId, request };
    obj.showActionSheet(obj);
  }, items);
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(1236).intl;
  obj[2] = intl.string(request(3471)["/e28TK"]);
  const items1 = [callback(projectId(4444).Text, obj), , , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    obj = { variant: "text-sm/normal", color: "text-default", children: null };
    obj[2] = note;
    items1[1] = tmp5(tmp9, obj);
    obj1 = { style: null, children: null };
    obj1[0] = tmp.chips;
    const fields = request.fields;
    obj1[1] = fields.map((children) => {
      obj = { style: chip.chip, children: closure_1_5(projectId(chip[7]).Text, obj) };
      obj = { variant: "text-xs/medium", color: "text-default", children: children.label };
      return closure_1_5(closure_1_4, obj, children.name);
    });
    items1[2] = tmp5(tmp4, obj1);
    const obj2 = { variant: "secondary", size: "sm", onPress: null, text: null };
    obj2[2] = callback;
    const intl3 = tmp6(1236).intl;
    obj2[3] = intl3.string(tmp8(3471)["gVV+HX"]);
    items1[3] = tmp5(tmp6(4896).Button, obj2);
    obj[1] = items1;
    return closure_6(tmp4, obj);
  }
  const intl2 = tmp6(1236).intl;
  note = intl2.string(tmp8(3471).jxvtin);
};