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
function renderComponent(component, arg1) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (tmp(1894).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1894).ComponentType.TEXT_INPUT === type) {
    const obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponentDefault, {}, arg1);
  } else {
    if (tmp(1894).ComponentType.USER_SELECT !== type) {
      if (tmp(1894).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1894).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1894).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1894).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(FileUploadActionComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(CheckboxActionComponentDefault, {}, arg1);
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
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
