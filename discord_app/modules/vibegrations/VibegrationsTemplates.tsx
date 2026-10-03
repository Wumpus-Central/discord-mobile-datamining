// === Module 16555: VibegrationsTemplates ===

// Module 16555 (VibegrationsTemplates)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import size from "module_2" /* 2 */;

const sendUserMessage = VibegrationsConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/vibegrations/VibegrationsTemplates.tsx");

export const VIBEGRATIONS_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "collaborative-whiteboard", "rust-sphere"];
export const vibegrationsTemplates = function vibegrationsTemplates() {
  const obj = { id: "moderation-bot", name: null, description: null, wizard: true };
  const intl = util.intl;
  obj.name = intl.string(_modDef3723.idRAwG);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3723["oP90O/"]);
  const items = [obj, , , ];
  const obj2 = { id: "feature-showcase", name: null, description: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(_modDef3723.BLDsiz);
  const intl4 = util.intl;
  obj2.description = intl4.string(_modDef3723.jK1PL5);
  items[1] = obj2;
  const obj3 = { id: "collaborative-whiteboard", name: null, description: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(_modDef3723["+abXa8"]);
  const intl6 = util.intl;
  obj3.description = intl6.string(_modDef3723.OZYPMR);
  items[2] = obj3;
  const obj4 = { id: "rust-sphere", name: null, description: null };
  const intl7 = util.intl;
  obj4.name = intl7.string(_modDef3723.ieAgex);
  const intl8 = util.intl;
  obj4.description = intl8.string(_modDef3723["5yvj+f"]);
  items[3] = obj4;
  return items;
};
export const templateImportMessage = function templateImportMessage(templateName) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3723["9D9L0S"], { templateName });
};
export const startVibegrationsTemplateProject = function startVibegrationsTemplateProject(arg0, templateName) {
  const intl = util.intl;
  sendUserMessage(arg0, intl.formatToPlainString(_modDef3723["9D9L0S"], { templateName: templateName.name }), undefined, { templateId: templateName.id });
};