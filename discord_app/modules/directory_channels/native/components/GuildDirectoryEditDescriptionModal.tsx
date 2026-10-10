// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import GuildDirectoryEditDescriptionTemplateDefault from "GuildDirectoryEditDescriptionTemplate.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  safeArea: { marginTop: fn(6258).NAV_BAR_HEIGHT, flex: 1 },
  container: { flex: 1 },
  title: { marginBottom: 8, textAlign: "center" },
  header: { alignItems: "center", justifyContent: "center", padding: 16 },
};
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildDirectoryEditDescription(entry) {
      const cResult = require("c").c(22);
      entry = entry.entry;
      _require = entry;
      const tmp4 = closure_9();
      if (cResult[0] === entry.channelId) {
        if (cResult[1] === entry.guildId) {
          let tmp5 = cResult[2];
        }
        ({ safeArea, container, header, title } = tmp4);
        if (cResult[3] !== entry.name) {
          const intl = tmp(1126).intl;
          let obj2 = { guildName: entry.name };
          const formatResult = intl.format(tmp(1126).t.w9tsNk, obj2);
          cResult[3] = entry.name;
          cResult[4] = formatResult;
          let tmp6 = formatResult;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp4.title) {
          if (cResult[6] === tmp6) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === tmp4.header) {
            if (cResult[9] === tmp8) {
              let tmp11 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t["R3BPH+"]);
              cResult[11] = stringResult;
              let tmp16 = stringResult;
            } else {
              tmp16 = cResult[11];
            }
            if (cResult[12] === entry) {
              if (cResult[13] === tmp5) {
                let tmp18 = cResult[14];
              }
              if (cResult[15] === tmp4.container) {
                if (cResult[16] === tmp18) {
                  if (cResult[17] === tmp11) {
                    let tmp22 = cResult[18];
                  }
                  if (cResult[19] === tmp4.safeArea) {
                    if (cResult[20] === tmp22) {
                      let tmp26 = cResult[21];
                    }
                    return tmp26;
                  }
                  let obj3 = { top: true, style: safeArea, children: tmp22 };
                  const tmp28 = closure_7(tmp(6813).SafeAreaPaddingView, obj3);
                  cResult[19] = tmp4.safeArea;
                  cResult[20] = tmp22;
                  cResult[21] = tmp28;
                  tmp26 = tmp28;
                }
              }
              let obj4 = { style: container, keyboardShouldPersistTaps: "handled", children: null };
              const items = [tmp11, tmp18];
              obj4.children = items;
              const tmp25 = closure_8(closure_6, obj4);
              cResult[15] = tmp4.container;
              cResult[16] = tmp18;
              cResult[17] = tmp11;
              cResult[18] = tmp25;
              tmp22 = tmp25;
            }
            let obj5 = { onSubmit: tmp5, buttonLabel: tmp16, entry, directoryChannelId: entry.channelId };
            const tmp21 = closure_7(GuildDirectoryEditDescriptionTemplateDefault, obj5);
            cResult[12] = entry;
            cResult[13] = tmp5;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          }
          let obj6 = { style: header, children: tmp8 };
          const tmp14 = closure_7(closure_5, obj6);
          cResult[8] = tmp4.header;
          cResult[9] = tmp8;
          cResult[10] = tmp14;
          tmp11 = tmp14;
        }
        const obj7 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp6,
        };
        const tmp10 = closure_7(tmp(5088).Text, obj7);
        cResult[5] = tmp4.title;
        cResult[6] = tmp6;
        cResult[7] = tmp10;
        tmp8 = tmp10;
      }
      _require = asyncGeneratorStep(async (arg0, arg1) => {
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
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2 = tmp4;
                const obj3 = GuildDirectoryActionCreatorsAll;
                c3 = 1;
                c4 = 1;
                const obj5 = {
                  value: obj3.updateDirectoryEntry(closure_0.channelId, closure_0.guildId, closure_0, closure_1),
                  done: false,
                };
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
              GuildDirectoryEditDescriptionModalActionCreatorsDefault.close();
              c4 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp15) {
            c4 = tmp;
            throw tmp15;
          }
        }
      });
      function onSubmit() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = entry.channelId;
      cResult[1] = entry.guildId;
      cResult[2] = onSubmit;
      tmp5 = onSubmit;
      const obj = require("c");
    }
  : function GuildDirectoryEditDescription(entry) {
      entry = entry.entry;
      importDefault = async function _onSubmit2(arg0) {
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
            return { value: "IconComponent", done: "+51" };
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
                const obj3 = tmp4(12012);
                dependencyMap = 1;
                c4 = 1;
                const obj5 = {
                  value: obj3.updateDirectoryEntry(entry.channelId, entry.guildId, closure_0, closure_1),
                  done: false,
                };
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
              closure_1(12010).close();
              c4 = 3;
              return { value: "IconComponent", done: "+51" };
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
      let obj4 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = entry(1126).intl;
      obj4.children = intl.format(entry(1126).t.w9tsNk, { guildName: entry.name });
      obj3.children = closure_7(entry(5088).Text, obj4);
      const items = [closure_7(closure_5, obj3)];
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
        directoryChannelId: null,
      };
      const intl2 = entry(1126).intl;
      obj6.buttonLabel = intl2.string(entry(1126).t["R3BPH+"]);
      obj6.entry = entry;
      obj6.directoryChannelId = entry.channelId;
      items[1] = closure_7(GuildDirectoryEditDescriptionTemplateDefault, obj6);
      obj2.children = items;
      obj.children = closure_8(closure_6, obj2);
      return closure_7(entry(6813).SafeAreaPaddingView, obj);
    };
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
ReactCompilerGating = fn(558);
let obj3 = { marginTop: fn(6258).NAV_BAR_HEIGHT, flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildDirectoryEditDescriptionModal(arg0) {
      const cResult = require("c").c(4);
      if (cResult[0] !== arg0) {
        _require = arg0;
        const obj2 = {};
        const obj3 = {
          fullscreen: true,
          headerLeft: tmp(6200).getHeaderCloseButton(GuildDirectoryEditDescriptionModalActionCreatorsDefault.close),
          headerTitle() {
            return null;
          },
          render() {
            const merged = Object.assign(closure_0);
            return React5(closure_10, {});
          },
        };
        obj2[EDIT_DESCRIPTION] = obj3;
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
        const tmpResult = tmp(6200);
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== tmp4) {
        const obj4 = { screens: tmp4, initialRouteName: EDIT_DESCRIPTION };
        const tmp10 = closure_7(tmp(6687).Navigator, obj4);
        cResult[2] = tmp4;
        cResult[3] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : function GuildDirectoryEditDescriptionModal(arg0) {
      const obj = { screens: null, initialRouteName: null };
      _require = arg0;
      const obj2 = {};
      const obj3 = {
        fullscreen: true,
        headerLeft: require("NavigatorHeader").getHeaderCloseButton(
          GuildDirectoryEditDescriptionModalActionCreatorsDefault.close,
        ),
        headerTitle() {
          return null;
        },
        render() {
          const merged = Object.assign(closure_0);
          return React5(closure_10, {});
        },
      };
      obj2[EDIT_DESCRIPTION] = obj3;
      obj.screens = obj2;
      obj.initialRouteName = EDIT_DESCRIPTION;
      return closure_7(require("Navigator").Navigator, obj);
    };
