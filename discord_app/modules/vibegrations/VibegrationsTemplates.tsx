// === Module 16720: VibegrationsTemplates ===

// Module 16720 (VibegrationsTemplates)
import util from "util" /* 1115 */;
import _modDef3591 from "module_3591" /* 3591 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/VibegrationsTemplates.tsx");

export const VIBEGRATIONS_TEMPLATE_IDS = ["feature-showcase", "collaborative-whiteboard", "rust-sphere"];
export const vibegrationsTemplates = function vibegrationsTemplates() {
  const obj = { id: "feature-showcase", name: null, description: null };
  const intl = util.intl;
  obj.name = intl.string(_modDef3591.BLDsiz);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3591.jK1PL5);
  const items = [obj, , ];
  const obj2 = { id: "collaborative-whiteboard", name: null, description: null };
  const intl3 = util.intl;
  obj2.name = intl3.string(_modDef3591["+abXa8"]);
  const intl4 = util.intl;
  obj2.description = intl4.string(_modDef3591.OZYPMR);
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: null, description: null };
  const intl5 = util.intl;
  obj3.name = intl5.string(_modDef3591.ieAgex);
  const intl6 = util.intl;
  obj3.description = intl6.string(_modDef3591["5yvj+f"]);
  items[2] = obj3;
  return items;
};
export const templateImportMessage = function templateImportMessage(name) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3591["9D9L0S"], { templateName: name });
};