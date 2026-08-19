// === Module 11482: GuildDirectoryEditDescription ===

// Module 11482 (GuildDirectoryEditDescription)
import noopAll from "noop" /* 19 */;
import _modDef11481 from "module_11481" /* 11481 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function GuildDirectoryEditDescription(entry) {
  entry = entry.entry;
  function _onSubmit(dependencyMap) {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                let obj2 = closure_1_2(11483);
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
              obj = callback(11481);
              obj.close();
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
  let obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = entry(1236).intl;
  obj1[4] = intl.format(entry(1236).t.w9tsNk, { guildName: entry.name });
  obj[1] = callback(entry(4734).Text, obj1);
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
  items[1] = callback(_onSubmit(11484), obj3);
  obj[2] = items;
  obj[2] = callback2(closure_6, obj);
  return callback(entry(6803).SafeAreaPaddingView, obj);
}
noopAll;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center", padding: 16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
const result = require("obj132").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  const _require = arg0;
  const obj = {
    fullscreen: true,
    headerLeft: _require(6314).getHeaderCloseButton(_modDef11481.close),
    headerTitle() {
      return null;
    },
    render() {
      const merged = Object.assign(closure_0);
      return closure_1_7(GuildDirectoryEditDescription, {});
    }
  };
  obj[EDIT_DESCRIPTION] = obj;
  obj[0] = obj;
  obj[1] = EDIT_DESCRIPTION;
  return callback(_require(6312).Navigator, obj);
};