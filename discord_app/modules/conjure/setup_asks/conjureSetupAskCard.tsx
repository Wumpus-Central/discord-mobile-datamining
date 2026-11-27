// discord_app/modules/conjure/setup_asks/conjureSetupAskCard.tsx
import conjureSettingsAsks from "../settings/conjureSettingsAsks.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureSettingsStore from "../settings/ConjureSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/setup_asks/conjureSetupAskCard.tsx");

export function useConjureSetupAskCard(projectId, merged) {
  _require = projectId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.overlayGamesPickerPrompts;
  if (flag === undefined) {
    flag = false;
  }
  let askId1;
  let tmp = null;
  if ("settings" === merged.kind) {
    tmp = merged;
  }
  items = [ConjureSettingsStore];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureSettingsStore.getSettings(closure_0),
    items1,
  );
  const obj2 = require("initialize");
  let request1;
  if (tmp != null) {
    request1 = tmp.request;
  }
  if (request1 == null) {
    request1 = null;
  }
  let askId;
  if (tmp != null) {
    askId = tmp.askId;
  }
  const conjureSettingsAskSource = require("conjureSettingsAsks").useConjureSettingsAskSource(
    projectId,
    request1,
    askId,
  );
  if ("keys" === merged.kind) {
    const request = merged.request;
    const obj4 = { ask: null, body: null, keys: null, tags: null, summary: null, awaiting: null, transitionId: null };
    const obj5 = { kind: "keys", request, status: merged.status };
    obj4.ask = obj5;
    ({ cardId, awaiting } = merged);
    const intl = tmp2(1112).intl;
    obj4.body = intl.string(askId1(4245).MPGSHL);
    const fields = request.fields;
    obj4.keys = fields.map((name) => name.name);
    const fields1 = request.fields;
    obj4.tags = fields1.map((id) => ({ id: id.name, label: id.label }));
    const fields2 = request.fields;
    obj4.summary = tmp2(18658).conjureSavedKeysSummary(fields2.map((label) => label.label));
    obj4.awaiting = null != awaiting;
    obj4.transitionId = cardId;
    let tmp9 = askId1;
    let obj6 = obj4;
    const tmp2Result = tmp2(18658);
  } else {
    const request2 = merged.request;
    const summary = conjureSettingsAskSource.summary;
    obj6 = { ask: null, body: null, keys: null, tags: null, summary: null, awaiting: false, transitionId: null };
    const obj7 = { kind: "settings", request: request2, askId: merged.askId, saved: null, superseded: null };
    ({ saved: obj13.saved, superseded: obj13.superseded } = conjureSettingsAskSource);
    obj6.ask = obj7;
    const intl6 = tmp2(1112).intl;
    obj6.body = intl6.string(askId1(4245).XuOf5s);
    obj6.keys = request2.keys;
    obj6.tags = [];
    obj6.summary = summary.join(" \u00B7 ");
    tmp9 = askId1;
  }
  const obj3 = require("conjureSettingsAsks");
  const conjureSetupAskStateResult = require("conjureSetupAsk").conjureSetupAskState(obj6.ask, stateFromStores);
  const tmp2Result3 = require("conjureSetupAsk");
  let str = obj6.transitionId;
  if (str == null) {
    str = "";
  }
  let str2 = "open";
  if (null != obj6.transitionId) {
    str2 = conjureSetupAskStateResult.status;
  }
  let secretRequestStatusChanged = require("ConjureSecretRequestState").useSecretRequestStatusChanged(str, str2);
  askId1 = undefined;
  if (tmp != null) {
    askId1 = tmp.askId;
  }
  const items2 = [askId1];
  const keys = obj6.keys;
  let note = null;
  const callback = noop.useCallback(() => {
    if (null != askId1) {
      const result = conjureSettingsAsks.markSettingsRequestSaved(tmp);
    }
  }, items2);
  if (null != merged.request.note) {
    note = null;
    if ("" !== merged.request.note) {
      note = merged.request.note;
    }
  }
  if (flag) {
    length = undefined;
    if (keys != null) {
      length = keys.length;
    }
    flag = 1 === length;
  }
  if (flag) {
    flag = keys[0] === tmp2(18547).CONJURE_OVERLAY_GAMES_SETTING_KEY;
  }
  const obj8 = {
    state: conjureSetupAskStateResult,
    copy: null,
    awaiting: null,
    note: null,
    tags: null,
    summary: null,
    editForm: null,
    entering: null,
    transitionId: null,
    markSaved: null,
  };
  const obj9 = { title: null, open: null, saved: null, superseded: null };
  const intl2 = tmp2(1112).intl;
  obj9.title = intl2.string(tmp9(4245)["jZjP+I"]);
  const intl3 = tmp2(1112).intl;
  obj9.open = intl3.string(tmp9(4245).d49riY);
  const intl4 = tmp2(1112).intl;
  obj9.saved = intl4.string(tmp9(4245).AxBLLy);
  const intl5 = tmp2(1112).intl;
  obj9.superseded = intl5.string(tmp9(4245)["+uXDk+"]);
  obj8.copy = obj9;
  obj8.awaiting = obj6.awaiting;
  if (note == null) {
    let body = null;
    if (!flag) {
      body = obj6.body;
    }
    note = body;
  }
  obj8.note = note;
  ({ tags: obj10.tags, summary: obj10.summary } = obj6);
  obj8.editForm = { kind: "settings", request: { keys } };
  if (secretRequestStatusChanged) {
    secretRequestStatusChanged = "open" !== conjureSetupAskStateResult.status;
  }
  if (secretRequestStatusChanged) {
    secretRequestStatusChanged = "pending" !== conjureSetupAskStateResult.status;
  }
  obj8.entering = secretRequestStatusChanged;
  obj8.transitionId = obj6.transitionId;
  obj8.markSaved = callback;
  return obj8;
}
