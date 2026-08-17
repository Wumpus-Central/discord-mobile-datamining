// discord_app/modules/interaction_components/native/renderComponents.tsx
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15165 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15168 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15169 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 16604 */;
import _modDef16605 from "module_16605" /* 16605 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 16606 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 16607 */;
import _modDef16609 from "module_16609" /* 16609 */;
import _modDef16610 from "module_16610" /* 16610 */;
import _modDef16611 from "module_16611" /* 16611 */;
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
  } else if (tmp(1954).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1954).ComponentType.TEXT_INPUT === type) {
    obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(_modDef16605, {}, arg1);
  } else {
    if (tmp(1954).ComponentType.USER_SELECT !== type) {
      if (tmp(1954).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1954).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1954).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1954).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1954).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1954).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUploadDefault, {}, arg1);
            } else if (tmp(1954).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(_modDef16609, {}, arg1);
            } else if (tmp(1954).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef16610, {}, arg1);
            } else if (tmp(1954).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef16611, {}, arg1);
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