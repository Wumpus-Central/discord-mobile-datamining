// === Module 16251: VibegrationsTemplates ===

// Module 16251 (VibegrationsTemplates)
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12624 */;
import size from "module_2" /* 2 */;

const sendUserMessage = VibegrationsConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/vibegrations/VibegrationsTemplates.tsx");

export const VIBEGRATIONS_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "collaborative-whiteboard", "rust-sphere"];
export const vibegrationsTemplates = function vibegrationsTemplates() {
  const obj = { id: "moderation-bot", name: null, description: null, wizard: true };
  const intl = util.intl;
  obj.name = intl.string(_modDef3715.idRAwG);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3715["oP90O/"]);
  const items = [obj, , , ];
  const obj2 = { id: "feature-showcase", name: null, description: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(_modDef3715.BLDsiz);
  const intl4 = util.intl;
  obj2.description = intl4.string(_modDef3715.jK1PL5);
  items[1] = obj2;
  const obj3 = { id: "collaborative-whiteboard", name: null, description: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(_modDef3715["+abXa8"]);
  const intl6 = util.intl;
  obj3.description = intl6.string(_modDef3715.OZYPMR);
  items[2] = obj3;
  const obj4 = { id: "rust-sphere", name: null, description: null };
  const intl7 = util.intl;
  obj4.name = intl7.string(_modDef3715.ieAgex);
  const intl8 = util.intl;
  obj4.description = intl8.string(_modDef3715["5yvj+f"]);
  items[3] = obj4;
  return items;
};
export const templateImportMessage = function templateImportMessage(templateName) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3715["9D9L0S"], { templateName });
};
export const startVibegrationsTemplateProject = function startVibegrationsTemplateProject(arg0, templateName) {
  const intl = util.intl;
  sendUserMessage(arg0, intl.formatToPlainString(_modDef3715["9D9L0S"], { templateName: templateName.name }), undefined, { templateId: templateName.id });
};