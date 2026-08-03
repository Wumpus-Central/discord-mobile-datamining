import "noop";
import { jsx } from "jsxProd";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (require(1906) /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(importDefault(16306), {}, arg1);
  } else if (tmp(1906).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(importDefault(14895), {}, arg1);
  } else if (tmp(1906).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(importDefault(16307), {}, arg1);
  } else {
    if (tmp(1906).ComponentType.USER_SELECT !== type) {
      if (tmp(1906).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1906).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1906).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1906).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(importDefault(14899), {}, arg1);
            } else if (tmp(1906).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(importDefault(16308), {}, arg1);
            } else if (tmp(1906).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(importDefault(16309), {}, arg1);
            } else if (tmp(1906).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(importDefault(16311), {}, arg1);
            } else if (tmp(1906).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(importDefault(16312), {}, arg1);
            } else if (tmp(1906).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(importDefault(16313), {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(importDefault(14898), {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };