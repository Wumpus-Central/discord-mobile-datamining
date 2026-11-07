// === Module 13208: ConjureTemplates ===

// Module 13208 (ConjureTemplates)
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10969 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplates.tsx");

export const CONJURE_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "rust-sphere"];
export function conjureTemplates() {
  const obj = { id: "moderation-bot", name: null, description: null, wizard: true };
  const intl = util.intl;
  obj.name = intl.string(_modDef4026.lGLnE8);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef4026["pAC6k/"]);
  items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: null, description: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(_modDef4026.uJKQTs);
  const intl4 = util.intl;
  obj2.description = intl4.string(_modDef4026["+dKy/B"]);
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: null, description: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(_modDef4026.iF5Oru);
  const intl6 = util.intl;
  obj3.description = intl6.string(_modDef4026.NbDDO6);
  items[2] = obj3;
  return items;
}
export function templateImportMessage(templateName) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef4026["0PQip6"], { templateName });
}
export function startConjureTemplateProject(arg0, templateName) {
  const intl = util.intl;
  sendUserMessage(arg0, intl.formatToPlainString(_modDef4026["0PQip6"], { templateName: templateName.name }), undefined, { templateId: templateName.id });
}