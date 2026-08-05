// discord_app/modules/interaction_components/native/renderComponents.tsx
import "noop";
import { jsx } from "jsxProd";
import { PermissionOverwriteType } from "../../../flow/Server.tsx";
import { CheckboxActionComponent } from "actions/CheckboxActionComponent.tsx";
import { CheckboxGroupActionComponent } from "actions/CheckboxGroupActionComponent.tsx";
import { MainAreaCanUpload } from "actions/FileUploadActionComponent.tsx";
import { RadioGroupActionComponent } from "actions/RadioGroupActionComponent.tsx";
import { SearchableSelectActionComponent } from "actions/SearchableSelectActionComponent.tsx";
import { StringSelectActionComponent } from "actions/StringSelectActionComponent.tsx";
import { TextInputActionComponent } from "actions/TextInputActionComponent.tsx";
import { TextDisplayComponent } from "display/TextDisplayComponent.tsx";
import { ActionRowLayoutComponent } from "layouts/ActionRowLayoutComponent.tsx";
import { LabelLayoutComponent } from "layouts/LabelLayoutComponent.tsx";

const require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (PermissionOverwriteType /* PermissionOverwriteType */.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponent, {}, arg1);
  } else if (tmp(1906).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponent, {}, arg1);
  } else if (tmp(1906).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponent, {}, arg1);
  } else {
    if (tmp(1906).ComponentType.USER_SELECT !== type) {
      if (tmp(1906).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1906).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1906).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1906).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponent, {}, arg1);
            } else if (tmp(1906).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponent, {}, arg1);
            } else if (tmp(1906).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUpload, {}, arg1);
            } else if (tmp(1906).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponent, {}, arg1);
            } else if (tmp(1906).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponent, {}, arg1);
            } else if (tmp(1906).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(CheckboxActionComponent, {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponent, {}, arg1);
  }
}
const result = require("PermissionOverwriteType").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };