// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef11881 from "GuildDirectoryEditDescriptionModalActionCreators.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function GuildDirectoryEditDescription(entry) {
  entry = entry.entry;
  function _onSubmit(arg0) {
    const self = this;
    const tmp = closure_1_4((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c3 = 0;
      c4 = 0;
      return (function*(arg0, arg1) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp4;
                let obj2 = closure_1_2(11883);
                dependencyMap = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.updateDirectoryEntry(closure_0.channelId, closure_0.guildId, closure_0, callback);
                return obj1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj = callback(11881);
              obj.close();
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp15) {
            c4 = tmp;
            throw tmp15;
          }
        }
      })();
    });
    closure_1 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = { top: true, style: tmp.safeArea, children: null };
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = entry(1236).intl;
  obj1[4] = intl.format(entry(1236).t.w9tsNk, { guildName: entry.name });
  obj[1] = callback(entry(4474).Text, obj1);
  const items = [callback(closure_5, obj), ];
  const obj3 = {
    onSubmit(arg0, arg1) {
      const self = this;
      const apply = _onSubmit.apply;
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
  const intl2 = entry(1236).intl;
  obj3[1] = intl2.string(entry(1236).t["R3BPH+"]);
  obj3[2] = entry;
  obj3[3] = entry.channelId;
  items[1] = callback(_onSubmit(11884), obj3);
  obj[2] = items;
  obj[2] = callback2(closure_6, obj);
  return callback(entry(5553).SafeAreaPaddingView, obj);
}
noopAll;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { safeArea: null, container: null, title: null, header: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center", padding: 16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  let obj = { screens: null, initialRouteName: null };
  const _require = arg0;
  obj = {};
  obj = {
    fullscreen: true,
    headerLeft: require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderCloseButton(_modDef11881.close),
    headerTitle() {
      return null;
    },
    render() {
      const merged = Object.assign(closure_0);
      return closure_1_7(closure_1_10, {});
    }
  };
  obj[EDIT_DESCRIPTION] = obj;
  obj[0] = obj;
  obj[1] = EDIT_DESCRIPTION;
  return callback(require("../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, obj);
};