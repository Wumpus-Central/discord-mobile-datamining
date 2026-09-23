// === Module 17878: renderComponents ===

// Module 17878 (renderComponents)
import Server from "Server" /* 1978 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 16090 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 16093 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 16094 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17879 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 17880 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17881 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 17882 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 17884 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 17885 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 17886 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderComponents(components) {
  return components.map((item, index) => renderComponent(item, index.toString()));
}
function renderComponent(component, key) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    const obj2 = {};
    const merged = Object.assign(component);
    obj2.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, key);
  } else if (Server.ComponentType.STRING_SELECT === type) {
    const obj3 = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, key);
  } else if (Server.ComponentType.TEXT_INPUT === type) {
    const obj4 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponentDefault, {}, key);
  } else {
    if (Server.ComponentType.USER_SELECT !== type) {
      if (Server.ComponentType.ROLE_SELECT !== type) {
        if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
          if (Server.ComponentType.CHANNEL_SELECT !== type) {
            if (Server.ComponentType.TEXT_DISPLAY === type) {
              const obj5 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, key);
            } else if (Server.ComponentType.LABEL === type) {
              const obj6 = {};
              const merged4 = Object.assign(component);
              obj6.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, key);
            } else if (Server.ComponentType.FILE_UPLOAD === type) {
              const obj7 = {};
              const merged5 = Object.assign(component);
              return jsx(FileUploadActionComponentDefault, {}, key);
            } else if (Server.ComponentType.RADIO_GROUP === type) {
              const obj8 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponentDefault, {}, key);
            } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
              const obj9 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponentDefault, {}, key);
            } else if (Server.ComponentType.CHECKBOX === type) {
              const obj = {};
              const merged8 = Object.assign(component);
              return jsx(CheckboxActionComponentDefault, {}, key);
            }
          }
        }
      }
    }
    const obj10 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, key);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };