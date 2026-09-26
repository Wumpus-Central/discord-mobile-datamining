// === Module 11798: GuildDirectoryEditDescriptionModal ===

// Module 11798 (GuildDirectoryEditDescriptionModal)
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 11797 */;
import GuildDirectoryEditDescriptionTemplateDefault from "GuildDirectoryEditDescriptionTemplate" /* 11800 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function GuildDirectoryEditDescription(entry) {
  entry = entry.entry;
  importDefault = async function _onSubmit(arg0) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj3 = tmp4(11799);
            dependencyMap = 1;
            c4 = 1;
            const obj5 = { value: obj3.updateDirectoryEntry(entry.channelId, entry.guildId, closure_0, closure_1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1(11797).close();
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
  const obj = { top: true, style: tmp.safeArea, children: null };
  let obj2 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  let obj3 = { style: tmp.header, children: null };
  let obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = entry(1115).intl;
  obj4.children = intl.format(entry(1115).t.w9tsNk, { guildName: entry.name });
  obj3.children = closure_7(entry(4832).Text, obj4);
  const items = [closure_7(closure_5, obj3), ];
  let obj6 = {
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
  const intl2 = entry(1115).intl;
  obj6.buttonLabel = intl2.string(entry(1115).t["R3BPH+"]);
  obj6.entry = entry;
  obj6.directoryChannelId = entry.channelId;
  items[1] = closure_7(GuildDirectoryEditDescriptionTemplateDefault, obj6);
  obj2.children = items;
  obj.children = closure_8(closure_6, obj2);
  return closure_7(entry(6544).SafeAreaPaddingView, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { safeArea: { marginTop: fn(5994).NAV_BAR_HEIGHT, flex: 1 }, container: { flex: 1 }, title: { marginBottom: 8, textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 } };
let closure_9 = createStyles.createStyles(obj2);
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  const obj = { screens: null, initialRouteName: null };
  _require = arg0;
  const obj2 = {};
  const obj3 = {
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
  obj2[EDIT_DESCRIPTION] = obj3;
  obj.screens = obj2;
  obj.initialRouteName = EDIT_DESCRIPTION;
  return closure_7(require("Navigator").Navigator, obj);
};