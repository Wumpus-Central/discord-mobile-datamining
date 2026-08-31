// === Module 16933: renderComponents ===

// Module 16933 (renderComponents)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1955 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15277 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15280 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15281 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 16934 */;
import _modDef16935 from "module_16935" /* 16935 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 16936 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 16937 */;
import _modDef16939 from "module_16939" /* 16939 */;
import _modDef16940 from "module_16940" /* 16940 */;
import _modDef16941 from "module_16941" /* 16941 */;
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
    return jsx(_modDef16935, {}, arg1);
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
              return jsx(_modDef16939, {}, arg1);
            } else if (tmp(1955).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef16940, {}, arg1);
            } else if (tmp(1955).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef16941, {}, arg1);
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