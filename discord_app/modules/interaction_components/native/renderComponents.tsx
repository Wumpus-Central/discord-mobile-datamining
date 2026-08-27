// === Module 16882: renderComponents ===

// Module 16882 (renderComponents)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1955 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15402 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15405 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15406 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 16883 */;
import _modDef16884 from "module_16884" /* 16884 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 16885 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 16886 */;
import _modDef16888 from "module_16888" /* 16888 */;
import _modDef16889 from "module_16889" /* 16889 */;
import _modDef16890 from "module_16890" /* 16890 */;
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
  } else if (tmp(1955).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1955).ComponentType.TEXT_INPUT === type) {
    obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(_modDef16884, {}, arg1);
  } else {
    if (tmp(1955).ComponentType.USER_SELECT !== type) {
      if (tmp(1955).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1955).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1955).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1955).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1955).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1955).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUploadDefault, {}, arg1);
            } else if (tmp(1955).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(_modDef16888, {}, arg1);
            } else if (tmp(1955).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef16889, {}, arg1);
            } else if (tmp(1955).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef16890, {}, arg1);
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