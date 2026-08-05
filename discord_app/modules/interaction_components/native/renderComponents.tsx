// discord_app/modules/interaction_components/native/renderComponents.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (require("../../../flow/Server.tsx") /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(require("layouts/ActionRowLayoutComponent.tsx"), {}, arg1);
  } else if (tmp(1906).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(require("actions/StringSelectActionComponent.tsx"), {}, arg1);
  } else if (tmp(1906).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(require("actions/TextInputActionComponent.tsx"), {}, arg1);
  } else {
    if (tmp(1906).ComponentType.USER_SELECT !== type) {
      if (tmp(1906).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1906).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1906).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1906).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(require("display/TextDisplayComponent.tsx"), {}, arg1);
            } else if (tmp(1906).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(require("layouts/LabelLayoutComponent.tsx"), {}, arg1);
            } else if (tmp(1906).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(require("actions/FileUploadActionComponent.tsx"), {}, arg1);
            } else if (tmp(1906).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(require("actions/RadioGroupActionComponent.tsx"), {}, arg1);
            } else if (tmp(1906).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(require("actions/CheckboxGroupActionComponent.tsx"), {}, arg1);
            } else if (tmp(1906).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(require("actions/CheckboxActionComponent.tsx"), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(require("actions/SearchableSelectActionComponent.tsx"), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };