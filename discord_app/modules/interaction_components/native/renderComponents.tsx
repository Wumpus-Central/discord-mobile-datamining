// === Module 16900: renderComponents ===

// Module 16900 (renderComponents)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1956 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15244 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15247 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15248 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 16901 */;
import _modDef16902 from "module_16902" /* 16902 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 16903 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 16904 */;
import _modDef16906 from "module_16906" /* 16906 */;
import _modDef16907 from "module_16907" /* 16907 */;
import _modDef16908 from "module_16908" /* 16908 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (PermissionOverwriteType.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (tmp(1956).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1956).ComponentType.TEXT_INPUT === type) {
    obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(_modDef16902, {}, arg1);
  } else {
    if (tmp(1956).ComponentType.USER_SELECT !== type) {
      if (tmp(1956).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1956).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1956).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1956).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1956).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1956).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUploadDefault, {}, arg1);
            } else if (tmp(1956).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(_modDef16906, {}, arg1);
            } else if (tmp(1956).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef16907, {}, arg1);
            } else if (tmp(1956).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef16908, {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, arg1);
  }
}
noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };