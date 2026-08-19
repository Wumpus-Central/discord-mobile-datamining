// discord_app/modules/interaction_components/native/renderComponents.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import PermissionOverwriteType from "../../../flow/Server.tsx";
import StringSelectActionComponentDefault from "actions/StringSelectActionComponent.tsx";
import SearchableSelectActionComponentDefault from "actions/SearchableSelectActionComponent.tsx";
import TextDisplayComponentDefault from "display/TextDisplayComponent.tsx";
import ActionRowLayoutComponentDefault from "layouts/ActionRowLayoutComponent.tsx";
import _modDef16605 from "actions/TextInputActionComponent.tsx";
import LabelLayoutComponentDefault from "layouts/LabelLayoutComponent.tsx";
import MainAreaCanUploadDefault from "actions/FileUploadActionComponent.tsx";
import _modDef16609 from "actions/RadioGroupActionComponent.tsx";
import _modDef16610 from "actions/CheckboxGroupActionComponent.tsx";
import _modDef16611 from "actions/CheckboxActionComponent.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function renderComponents(components) {
  return components.map((item, index) => callback(item, index.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (PermissionOverwriteType.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (PermissionOverwriteType.ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (PermissionOverwriteType.ComponentType.TEXT_INPUT === type) {
    const merged2 = Object.assign(component);
    return jsx(_modDef16605, {}, arg1);
  } else {
    if (PermissionOverwriteType.ComponentType.USER_SELECT !== type) {
      if (PermissionOverwriteType.ComponentType.ROLE_SELECT !== type) {
        if (PermissionOverwriteType.ComponentType.MENTIONABLE_SELECT !== type) {
          if (PermissionOverwriteType.ComponentType.CHANNEL_SELECT !== type) {
            if (PermissionOverwriteType.ComponentType.TEXT_DISPLAY === type) {
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (PermissionOverwriteType.ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (PermissionOverwriteType.ComponentType.FILE_UPLOAD === type) {
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUploadDefault, {}, arg1);
            } else if (PermissionOverwriteType.ComponentType.RADIO_GROUP === type) {
              const merged6 = Object.assign(component);
              return jsx(_modDef16609, {}, arg1);
            } else if (PermissionOverwriteType.ComponentType.CHECKBOX_GROUP === type) {
              const merged7 = Object.assign(component);
              return jsx(_modDef16610, {}, arg1);
            } else if (PermissionOverwriteType.ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef16611, {}, arg1);
            }
          }
        }
      }
    }
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, arg1);
  }
}
noopAll;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };