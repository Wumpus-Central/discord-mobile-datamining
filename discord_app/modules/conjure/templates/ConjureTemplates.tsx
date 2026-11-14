// === Module 13987: ConjureTemplates ===

// Module 13987 (ConjureTemplates)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7365 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplates.tsx");

export const CONJURE_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "rust-sphere"];
export function conjureTemplates() {
  const obj = { id: "moderation-bot", name: null, description: null, wizard: true };
  const intl = util.intl;
  obj.name = intl.string(_modDef4131.lGLnE8);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef4131["pAC6k/"]);
  items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: null, description: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(_modDef4131.uJKQTs);
  const intl4 = util.intl;
  obj2.description = intl4.string(_modDef4131["+dKy/B"]);
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: null, description: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(_modDef4131.iF5Oru);
  const intl6 = util.intl;
  obj3.description = intl6.string(_modDef4131.NbDDO6);
  items[2] = obj3;
  return items;
}
export function templateImportMessage(templateName) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef4131["0PQip6"], { templateName });
}
export function startConjureTemplateProject(arg0, templateName) {
  const intl = util.intl;
  sendUserMessage(arg0, intl.formatToPlainString(_modDef4131["0PQip6"], { templateName: templateName.name }), undefined, { templateId: templateName.id });
}