// === Module 16559: ConjureTemplates ===

// Module 16559 (ConjureTemplates)
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12904 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplates.tsx");

export const CONJURE_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "rust-sphere"];
export const conjureTemplates = function conjureTemplates() {
  const obj = { id: "moderation-bot", name: null, description: null, wizard: true };
  const intl = util.intl;
  obj.name = intl.string(_modDef3723.lGLnE8);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3723["pAC6k/"]);
  const items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: null, description: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(_modDef3723.uJKQTs);
  const intl4 = util.intl;
  obj2.description = intl4.string(_modDef3723["+dKy/B"]);
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: null, description: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(_modDef3723.iF5Oru);
  const intl6 = util.intl;
  obj3.description = intl6.string(_modDef3723.NbDDO6);
  items[2] = obj3;
  return items;
};
export const templateImportMessage = function templateImportMessage(templateName) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3723["0PQip6"], { templateName });
};
export const startConjureTemplateProject = function startConjureTemplateProject(arg0, templateName) {
  const intl = util.intl;
  sendUserMessage(arg0, intl.formatToPlainString(_modDef3723["0PQip6"], { templateName: templateName.name }), undefined, { templateId: templateName.id });
};