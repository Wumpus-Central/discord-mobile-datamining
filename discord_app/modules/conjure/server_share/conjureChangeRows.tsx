// === Module 18167: conjureChangeRows ===

// Module 18167 (conjureChangeRows)
import util from "util" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6503 */;
import size from "module_2" /* 2 */;

function conjureLeaveServerRows(canRemoveBot) {
  if (null == canRemoveBot) {
    return [];
  } else {
    const intl = util.intl;
    const tmp5 = _modDef4091;
    if (canRemoveBot.canRemoveBot) {
      let PDLHwR = tmp5["cU/7df"];
      let tmp = importDefault;
    } else {
      PDLHwR = tmp5.PDLHwR;
      tmp = importDefault;
    }
    const obj = { key: "bots", text: null };
    const obj2 = { server: canRemoveBot.guildName };
    obj.text = intl.formatToPlainString(PDLHwR, obj2);
    items = [obj];
    if (canRemoveBot.channelNames.length > 0) {
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
      const channelNames = canRemoveBot.channelNames;
      const obj3 = { key: "channels", text: null };
      const intl2 = util.intl;
      const obj4 = { channels: listFormat.format(channelNames.map((item) => "#" + item)) };
      obj3.text = intl2.formatToPlainString(tmp(4091).DbZ8af, obj4);
      items.push(obj3);
      const formatResult = listFormat.format(channelNames.map((item) => "#" + item));
    }
    return items;
  }
}
const result = size.fileFinishedImporting("modules/conjure/server_share/conjureChangeRows.tsx");

export function conjureShareRows(stateFromStores, name) {
  const obj = { key: "bots", text: null };
  const intl = util.intl;
  obj.text = intl.string(_modDef4091.eSpjGV);
  items = [obj, ];
  const obj2 = { key: "location", text: null };
  const intl2 = util.intl;
  obj2.text = intl2.formatToPlainString(_modDef4091.c3xGbr, { server: name });
  items[1] = obj2;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_application_id;
  }
  let usesPreviewAppResult = null != prop;
  if (usesPreviewAppResult) {
    usesPreviewAppResult = ConjureProjectTypes.usesPreviewApp(stateFromStores);
    const tmpResult = ConjureProjectTypes;
  }
  if (!usesPreviewAppResult) {
    let preview_app_chosen;
    if (stateFromStores != null) {
      preview_app_chosen = stateFromStores.preview_app_chosen;
    }
    usesPreviewAppResult = true === preview_app_chosen;
  }
  if (!usesPreviewAppResult) {
    const obj4 = { key: "test_app", text: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(_modDef4091["+5f47F"]);
    items.push(obj4);
  }
  let supported_surfaces;
  if (stateFromStores != null) {
    supported_surfaces = stateFromStores.supported_surfaces;
  }
  if (supported_surfaces == null) {
    supported_surfaces = [];
  }
  const items1 = [...supported_surfaces];
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.preview_supported_surfaces;
  }
  if (prop1 == null) {
    prop1 = [];
  }
  HermesBuiltin.arraySpread(prop1, tmp8);
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    const obj5 = { key: "profile_widget", text: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(_modDef4091.u6ckHo);
    items.push(obj5);
  }
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY)) {
    const obj6 = { key: "overlay", text: null };
    const intl5 = util.intl;
    obj6.text = intl5.string(_modDef4091.UZHlmt);
    items.push(obj6);
  }
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD)) {
    const obj7 = { key: "automod", text: null };
    const intl6 = util.intl;
    obj7.text = intl6.string(_modDef4091.IPtiUf);
    items.push(obj7);
  }
  const obj8 = { key: "collaboration", text: null };
  const intl7 = util.intl;
  obj8.text = intl7.string(_modDef4091["s3/5nF"]);
  items.push(obj8);
  return items;
}
export function conjureMoveRows(stateFromStores, target, name) {
  const obj = { key: "server", text: null };
  const intl = util.intl;
  obj.text = intl.formatToPlainString(_modDef4091.YFZDXO, { server: name });
  items = [obj, ...conjureLeaveServerRows(target)];
  const obj3 = { key: "settings", text: null };
  const intl2 = util.intl;
  obj3.text = intl2.string(_modDef4091.F058cu);
  items[tmp4] = obj3;
  const prop = stateFromStores.collaborator_role_ids;
  let num;
  if (prop != null) {
    num = prop.length;
  }
  if (num == null) {
    num = 0;
  }
  if (num > 0) {
    const obj4 = { key: "collaboration", text: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(_modDef4091.SDpkkt);
    items.push(obj4);
  }
  return items;
}
export function conjureMakePersonalRows(preview_app_chosen, target) {
  const arr = conjureLeaveServerRows(target);
  let usesPreviewAppResult = ConjureProjectTypes.usesPreviewApp(preview_app_chosen);
  if (usesPreviewAppResult) {
    usesPreviewAppResult = true !== preview_app_chosen.preview_app_chosen;
  }
  if (usesPreviewAppResult) {
    const obj2 = { key: "test_app", text: null };
    const intl = util.intl;
    obj2.text = intl.string(_modDef4091.jKXaUH);
    arr.push(obj2);
  }
  const supported_surfaces = preview_app_chosen.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET);
  }
  if (true === hasItem) {
    const obj3 = { key: "profile_widget", text: null };
    const intl2 = util.intl;
    obj3.text = intl2.string(_modDef4091.HHZxrL);
    arr.push(obj3);
  }
  const supported_surfaces2 = preview_app_chosen.supported_surfaces;
  let hasItem1;
  if (supported_surfaces2 != null) {
    hasItem1 = supported_surfaces2.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY);
  }
  if (true === hasItem1) {
    const obj4 = { key: "overlay", text: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(_modDef4091.rVTFDs);
    arr.push(obj4);
  }
  if (tmpResult.isProjectGuildCollaborationEnabled(preview_app_chosen)) {
    const obj5 = { key: "collaboration", text: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(_modDef4091["+a1lOS"]);
    arr.push(obj5);
  }
  const obj6 = { key: "only_you", text: null };
  const intl5 = util.intl;
  obj6.text = intl5.string(_modDef4091.TrTx1Z);
  arr.push(obj6);
  const obj7 = { key: "location", text: null };
  const intl6 = util.intl;
  obj7.text = intl6.string(_modDef4091["GC/COK"]);
  arr.push(obj7);
  return arr;
}