// discord_app/modules/interaction_components/native/renderComponents.tsx
import Server from "../../../flow/Server.tsx";
import StringSelectActionComponentDefault from "actions/StringSelectActionComponent.tsx";
import SearchableSelectActionComponentDefault from "actions/SearchableSelectActionComponent.tsx";
import TextDisplayComponentDefault from "display/TextDisplayComponent.tsx";
import ActionRowLayoutComponentDefault from "layouts/ActionRowLayoutComponent.tsx";
import TextInputActionComponentDefault from "actions/TextInputActionComponent.tsx";
import LabelLayoutComponentDefault from "layouts/LabelLayoutComponent.tsx";
import FileUploadActionComponentDefault from "actions/FileUploadActionComponent.tsx";
import RadioGroupActionComponentDefault from "actions/RadioGroupActionComponent.tsx";
import CheckboxGroupActionComponentDefault from "actions/CheckboxGroupActionComponent.tsx";
import CheckboxActionComponentDefault from "actions/CheckboxActionComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function renderComponents(components) {
  return components.map((item, index) => renderComponent(item, index.toString()));
}
function renderComponent(component, key) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, key);
  } else if (Server.ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, key);
  } else if (Server.ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponentDefault, {}, key);
  } else {
    if (Server.ComponentType.USER_SELECT !== type) {
      if (Server.ComponentType.ROLE_SELECT !== type) {
        if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
          if (Server.ComponentType.CHANNEL_SELECT !== type) {
            if (Server.ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, key);
            } else if (Server.ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, key);
            } else if (Server.ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(FileUploadActionComponentDefault, {}, key);
            } else if (Server.ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponentDefault, {}, key);
            } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponentDefault, {}, key);
            } else if (Server.ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(CheckboxActionComponentDefault, {}, key);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, key);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
