// discord_app/modules/conjure/server_share/conjureChangeRows.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4079 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/server_share/conjureChangeRows.tsx");

export function conjureShareRows(stateFromStores) {
  const obj = { key: "bots", text: null };
  const intl = util.intl;
  obj.text = intl.string(_modDef4079.eSpjGV);
  items = [obj];
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
    const obj2 = { key: "test_app", text: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(_modDef4079["+5f47F"]);
    items.push(obj2);
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
    const obj3 = { key: "profile_widget", text: null };
    const intl3 = util.intl;
    obj3.text = intl3.string(_modDef4079.u6ckHo);
    items.push(obj3);
  }
  if (items1.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY)) {
    const obj4 = { key: "overlay", text: null };
    const intl4 = util.intl;
    obj4.text = intl4.string(_modDef4079.UZHlmt);
    items.push(obj4);
  }
  const obj5 = { key: "collaboration", text: null };
  const intl5 = util.intl;
  obj5.text = intl5.string(_modDef4079["s3/5nF"]);
  items.push(obj5);
  return items;
}
export function conjureMakePersonalRows(preview_app_chosen, target) {
  items = [];
  if (null != target) {
    const intl6 = util.intl;
    const tmp20 = _modDef4079;
    if (target.canRemoveBot) {
      let PDLHwR = tmp20["cU/7df"];
      let tmp = importDefault;
    } else {
      PDLHwR = tmp20.PDLHwR;
      tmp = importDefault;
    }
    const obj = { key: "bots", text: null };
    const obj2 = { server: target.guildName };
    obj.text = intl6.formatToPlainString(PDLHwR, obj2);
    items.push(obj);
    if (target.channelNames.length > 0) {
      const _Intl = Intl;
      const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
      const channelNames = target.channelNames;
      const obj4 = { key: "channels", text: null };
      const intl7 = util.intl;
      const obj5 = { channels: listFormat.format(channelNames.map((item) => "#" + item)) };
      obj4.text = intl7.formatToPlainString(tmp(4079).DbZ8af, obj5);
      items.push(obj4);
      const formatResult = listFormat.format(channelNames.map((item) => "#" + item));
    }
  }
  let usesPreviewAppResult = ConjureProjectTypes.usesPreviewApp(preview_app_chosen);
  if (usesPreviewAppResult) {
    usesPreviewAppResult = true !== preview_app_chosen.preview_app_chosen;
  }
  if (usesPreviewAppResult) {
    const obj6 = { key: "test_app", text: null };
    const intl = util.intl;
    obj6.text = intl.string(_modDef4079.jKXaUH);
    items.push(obj6);
  }
  const supported_surfaces = preview_app_chosen.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET);
  }
  if (true === hasItem) {
    const obj7 = { key: "profile_widget", text: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(_modDef4079.HHZxrL);
    items.push(obj7);
  }
  const supported_surfaces2 = preview_app_chosen.supported_surfaces;
  let hasItem1;
  if (supported_surfaces2 != null) {
    hasItem1 = supported_surfaces2.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY);
  }
  if (true === hasItem1) {
    const obj8 = { key: "overlay", text: null };
    const intl3 = util.intl;
    obj8.text = intl3.string(_modDef4079.rVTFDs);
    items.push(obj8);
  }
  if (tmp3Result.isProjectGuildCollaborationEnabled(preview_app_chosen)) {
    const obj9 = { key: "collaboration", text: null };
    const intl4 = util.intl;
    obj9.text = intl4.string(_modDef4079["+a1lOS"]);
    items.push(obj9);
  }
  const obj10 = { key: "only_you", text: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(_modDef4079.TrTx1Z);
  items.push(obj10);
  return items;
}
