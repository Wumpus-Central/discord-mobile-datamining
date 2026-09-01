// discord_app/modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../stores/VibegrationsConnectionStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { card: null, chips: null, chip: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.md, padding: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
let obj1 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx");

export default function VibegrationsSettingsRequestCard(projectId) {
  projectId = projectId.projectId;
  const request = projectId.request;
  dependencyMap = undefined;
  let React;
  const tmp = callback2();
  dependencyMap = tmp;
  let obj = projectId(589);
  const items = [closure_5];
  React = obj.useStateFromStores(items, () => closure_1_5.getSettings(projectId));
  let keys = request.keys;
  if (keys == null) {
    keys = [];
  }
  const mapped = keys.map((arg0) => {
    closure_0 = arg0;
    let found;
    if (schema != null) {
      schema = schema.schema;
      found = schema.find((key) => key.key === closure_0);
    }
    return found;
  });
  let found = mapped.filter((arg0) => null != arg0);
  const items1 = [projectId, request];
  obj = { style: tmp.card, children: null };
  const callback = React.useCallback(() => {
    let obj = projectId(chip[7]);
    obj = { content: closure_1_6(request(chip[8]), obj), key: projectId(chip[8]).VIBEGRATIONS_SETTINGS_SHEET_KEY };
    obj = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true };
    obj.showActionSheet(obj);
  }, items1);
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = tmp2(1236).intl;
  obj[2] = intl.string(request(3501).wgDhiQ);
  const items2 = [callback(projectId(4474).Text, obj), , , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
    obj1[2] = note;
    items2[1] = tmp7(tmp9, obj1);
    let tmp7Result = null;
    if (found.length > 0) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.chips;
      obj2[1] = found.map((children) => {
        obj = { style: chip.chip, children: closure_1_6(projectId(chip[9]).Text, obj) };
        obj = { variant: "text-xs/medium", color: "text-default", children: children.label };
        return closure_1_6(closure_1_4, obj, children.key);
      });
      tmp7Result = tmp7(tmp6, obj2);
    }
    items2[2] = tmp7Result;
    const obj3 = { variant: "secondary", size: "sm", onPress: null, text: null };
    obj3[2] = callback;
    const intl3 = tmp2(1236).intl;
    obj3[3] = intl3.string(tmp8(3501)["KO2xN+"]);
    items2[3] = tmp7(tmp2(4928).Button, obj3);
    obj[1] = items2;
    return closure_7(tmp6, obj);
  }
  const intl2 = tmp2(1236).intl;
  note = intl2.string(tmp8(3501)["V+DBhs"]);
};