// === Module 10517: GUILD_SELECT_ALL_SERVERS_OPTION_ID ===

// Module 10517 (GUILD_SELECT_ALL_SERVERS_OPTION_ID)
import set from "set" /* 2 */;

const obj = { ROUTE: "route", PRESSABLE: "pressable", TOGGLE: "toggle", STATIC: "static", RADIO: "radio", VOLUME_SLIDER: "volume_slider", SLIDER: "slider", GUILD_SELECTOR: "guild_selector", LIST: "list", SEGMENTED_CONTROL: "segmented_control" };
const items = [, , ];
({ ROUTE: arr[0], PRESSABLE: arr[1], STATIC: arr[2] } = obj);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/settings/native/renderer/SettingRendererConstants.tsx");

export const GUILD_SELECT_ALL_SERVERS_OPTION_ID = "0";
export const NodeType = obj;
export const ListItemType = { SECTION_HEADER: "section_header", SECTION_FOOTER: "section_footer", SECTION_ROW: "section_row", SECTION_ROW_PLACEHOLDER: "section_row_placeholder", SETTING_SEARCH_RESULT: "setting_search_result" };
export const SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES = set;