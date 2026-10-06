// === Module 16599: ConjureTemplates ===

// Module 16599 (ConjureTemplates)
import intl7 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplates.tsx");

export const CONJURE_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "rust-sphere"];
export const conjureTemplates = function conjureTemplates() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { id: "moderation-bot", name: intl.string(_modDef3753.lGLnE8), description: intl2.string(_modDef3753["pAC6k/"]), wizard: true };
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: intl3.string(_modDef3753.uJKQTs), description: intl4.string(_modDef3753["+dKy/B"]) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: intl5.string(_modDef3753.iF5Oru), description: intl6.string(_modDef3753.NbDDO6) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = obj3;
  return items;
};
export const templateImportMessage = function templateImportMessage(templateName) {
  const intl = intl7.intl;
  const obj = { templateName };
  return intl.formatToPlainString(_modDef3753["0PQip6"], obj);
};
export const startConjureTemplateProject = function startConjureTemplateProject(arg0, name) {
  name = name.name;
  const intl = intl7.intl;
  const obj = { templateId: name.id };
  sendUserMessage(arg0, intl.formatToPlainString(_modDef3753["0PQip6"], { templateName: name }), undefined, obj);
};