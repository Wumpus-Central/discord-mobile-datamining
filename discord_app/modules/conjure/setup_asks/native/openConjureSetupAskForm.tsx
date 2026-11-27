// discord_app/modules/conjure/setup_asks/native/openConjureSetupAskForm.tsx
import ConjureSettingsSheetDefault from "../../settings/native/ConjureSettingsSheet.tsx";
import conjureSettingsAsks from "../../settings/conjureSettingsAsks.tsx";
import ConjureSecretsSheetDefault from "../../secrets/native/ConjureSecretsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/setup_asks/native/openConjureSetupAskForm.tsx");

export default function openConjureSetupAskForm(projectId, kind) {
  if ("keys" !== kind.kind) {
    ({ request, askId } = kind);
    const obj2 = {
      projectId,
      initialTab: "app",
      scopeKeys: null,
      note: null,
      notifyAgent: null,
      onSaved: null,
      isPreview: true,
    };
    ({ keys: obj5.scopeKeys, note: obj5.note } = request);
    obj2.notifyAgent = null != askId;
    let fn;
    const obj4 = askId(5257);
    if (null != askId) {
      fn = () => conjureSettingsAsks.markSettingsRequestSaved(askId);
    }
    const obj3 = { content: null, key: null };
    obj2.onSaved = fn;
    obj3.content = jsx(ConjureSettingsSheetDefault, {
      projectId,
      initialTab: "app",
      scopeKeys: null,
      note: null,
      notifyAgent: null,
      onSaved: null,
      isPreview: true,
    });
    obj3.key = askId(18505).CONJURE_SETTINGS_SHEET_KEY;
    obj4.showActionSheet(obj3);
  } else {
    const obj6 = { content: null, key: null };
    const obj10 = { projectId, request: kind.request };
    obj6.content = jsx(ConjureSecretsSheetDefault, { projectId, request: kind.request });
    obj6.key = askId(18724).CONJURE_SECRETS_SHEET_KEY;
    askId(5257).showActionSheet(obj6);
    const obj = askId(5257);
  }
}
