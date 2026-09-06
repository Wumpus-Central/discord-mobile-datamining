// === Module 12315: GuildDirectoryEditDescriptionModal ===

// Module 12315 (GuildDirectoryEditDescriptionModal)
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 12314 */;
import GuildDirectoryEditDescriptionTemplateDefault from "GuildDirectoryEditDescriptionTemplate" /* 12317 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
function GuildDirectoryEditDescription(entry) {
  entry = entry.entry;
  importDefault = async function _onSubmit(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let obj2 = tmp4(12316);
            dependencyMap = 1;
            c4 = 1;
            const obj1 = { value: obj2.updateDirectoryEntry(entry.channelId, entry.guildId, closure_0, closure_1), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          obj = closure_1(12314);
          obj.close();
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c4 = tmp;
        throw tmp15;
      }
    }
  };
  const tmp = closure_9();
  let obj = { top: true, style: tmp.safeArea, children: null };
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  obj = { style: tmp.header, children: null };
  let obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = entry(1114).intl;
  obj1.children = intl.format(entry(1114).t.w9tsNk, { guildName: entry.name });
  obj.children = closure_7(entry(4556).Text, obj1);
  const items = [closure_7(closure_5, obj), ];
  const obj3 = {
    onSubmit(arg0, arg1) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    buttonLabel: null,
    entry: null,
    directoryChannelId: null
  };
  const intl2 = entry(1114).intl;
  obj3.buttonLabel = intl2.string(entry(1114).t["R3BPH+"]);
  obj3.entry = entry;
  obj3.directoryChannelId = entry.channelId;
  items[1] = closure_7(GuildDirectoryEditDescriptionTemplateDefault, obj3);
  obj.children = items;
  obj.children = closure_8(closure_6, obj);
  return closure_7(entry(7123).SafeAreaPaddingView, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { safeArea: null, container: null, title: null, header: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT, flex: 1 };
createStyles.safeArea = createStyles;
createStyles.container = { flex: 1 };
createStyles.title = { marginBottom: 8, textAlign: "center" };
createStyles.header = { alignItems: "center", justifyContent: "center", padding: 16 };
let closure_9 = createStyles.createStyles(createStyles);
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  let obj = { screens: null, initialRouteName: null };
  _require = arg0;
  obj = {};
  obj = {
    fullscreen: true,
    headerLeft: require("NavigatorHeader").getHeaderCloseButton(GuildDirectoryEditDescriptionModalActionCreatorsDefault.close),
    headerTitle() {
      return null;
    },
    render() {
      const merged = Object.assign(closure_0);
      return React5(GuildDirectoryEditDescription, {});
    }
  };
  obj[EDIT_DESCRIPTION] = obj;
  obj.screens = obj;
  obj.initialRouteName = EDIT_DESCRIPTION;
  return closure_7(require("Navigator").Navigator, obj);
};