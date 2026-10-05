// === Module 17521: renderComponents ===

// Module 17521 (renderComponents)
import Fragment from "Fragment" /* 21 */;
import Server from "Server" /* 1985 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15591 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15594 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15595 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17522 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 17523 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17524 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 17525 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 17527 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 17528 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 17529 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function renderComponents(components) {
  return components.map((item, index) => renderComponent(item, index.toString()));
}
function renderComponent(component, key) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    ActionRowLayoutComponentDefault;
    const merged = Object.assign(component);
    return <tmp60 key={key} renderComponents={renderComponents} />;
  } else if (Server.ComponentType.STRING_SELECT === type) {
    StringSelectActionComponentDefault;
    const merged1 = Object.assign(component);
    return <tmp54 key={key} />;
  } else if (Server.ComponentType.TEXT_INPUT === type) {
    TextInputActionComponentDefault;
    const merged2 = Object.assign(component);
    return <tmp48 key={key} />;
  } else {
    if (Server.ComponentType.USER_SELECT !== type) {
      if (Server.ComponentType.ROLE_SELECT !== type) {
        if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
          if (Server.ComponentType.CHANNEL_SELECT !== type) {
            if (Server.ComponentType.TEXT_DISPLAY === type) {
              TextDisplayComponentDefault;
              const merged3 = Object.assign(component);
              return <tmp36 key={key} />;
            } else if (Server.ComponentType.LABEL === type) {
              LabelLayoutComponentDefault;
              const merged4 = Object.assign(component);
              return <tmp29 key={key} renderComponent={renderComponent} />;
            } else if (Server.ComponentType.FILE_UPLOAD === type) {
              FileUploadActionComponentDefault;
              const merged5 = Object.assign(component);
              return <tmp23 key={key} />;
            } else if (Server.ComponentType.RADIO_GROUP === type) {
              RadioGroupActionComponentDefault;
              const merged6 = Object.assign(component);
              return <tmp17 key={key} />;
            } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
              CheckboxGroupActionComponentDefault;
              const merged7 = Object.assign(component);
              return <tmp11 key={key} />;
            } else if (Server.ComponentType.CHECKBOX === type) {
              CheckboxActionComponentDefault;
              const merged8 = Object.assign(component);
              return <tmp5 key={key} />;
            }
          }
        }
      }
    }
    SearchableSelectActionComponentDefault;
    const merged9 = Object.assign(component);
    return <tmp42 key={key} />;
  }
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };