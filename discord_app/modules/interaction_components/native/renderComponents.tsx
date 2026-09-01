// === Module 16969: renderComponents ===

// Module 16969 (renderComponents)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1955 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15311 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15314 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15315 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 16970 */;
import _modDef16971 from "module_16971" /* 16971 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 16972 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 16973 */;
import _modDef16975 from "module_16975" /* 16975 */;
import _modDef16976 from "module_16976" /* 16976 */;
import _modDef16977 from "module_16977" /* 16977 */;
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
    return jsx(_modDef16971, {}, arg1);
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
              return jsx(_modDef16975, {}, arg1);
            } else if (tmp(1955).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef16976, {}, arg1);
            } else if (tmp(1955).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef16977, {}, arg1);
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