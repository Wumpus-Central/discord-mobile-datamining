// discord_app/modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx
import _createGuildFromTemplate from "_createGuildFromTemplate";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { GuildDirectoryEditDescriptionTemplate } from "GuildDirectoryEditDescriptionTemplate.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { flex: 1 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx");

export default function GuildDirectoryCreateOrAddDescription(directoryChannelId) {
  let _createGuildFromTemplate;
  let dependencyMap;
  let importDefault;
  directoryChannelId = directoryChannelId.directoryChannelId;
  ({ directoryGuildName: importDefault, guild: dependencyMap, createGuild: _createGuildFromTemplate } = directoryChannelId);
  function _onSubmit() {
    const self = this;
    const tmp = outer1_3((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let c4 = 0;
      let c5 = 0;
      return (function*(arg0, arg1) {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let _createGuildFromTemplate = tmp5;
                let closure_2 = tmp2;
                closure_2 = undefined;
                if (null != outer1_3) {
                  const template = tmp37.template;
                  if (null == template) {
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    c4 = 1;
                    c5 = 1;
                    let obj1 = { value: null, done: false };
                    obj1[0] = callback2(outer1_2[5]).createGuildFromTemplate(tmp25, tmp26, template);
                    return obj1;
                  }
                } else if (null != closure_2) {
                  let obj3 = callback(outer1_2[7]);
                  const obj2 = { directoryChannelId: null, directoryGuildName: null, guild: null, description: null, category: null, onClose: null };
                  obj2[0] = callback;
                  obj2[1] = callback2;
                  obj2[2] = closure_2;
                  obj2[3] = callback;
                  obj2[4] = callback2;
                  obj2[5] = callback2(outer1_2[8]).close;
                  c4 = 2;
                  c5 = 1;
                  obj3 = { value: null, done: false };
                  obj3[0] = obj3.onAddDirectoryGuildEntry(obj2);
                  return obj3;
                }
                tmp37 = outer1_3;
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_2 = arg1;
                obj1 = callback(outer1_2[6]);
                closure_2 = obj1.fromGuild(closure_2);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp29) {
            c5 = tmp;
            throw tmp29;
          }
        }
      })();
    });
    const _onSubmit = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  obj = { style: tmp.header, children: null };
  let obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = directoryChannelId(1236).intl;
  obj1[4] = intl.string(directoryChannelId(1236).t["5bQcoa"]);
  const items = [callback(directoryChannelId(4299).Text, obj1), ];
  let obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = directoryChannelId(1236).intl;
  obj2[3] = intl2.string(directoryChannelId(1236).t.Ie60Wc);
  items[1] = callback(directoryChannelId(4299).Text, obj2);
  obj[1] = items;
  const items1 = [callback2(_onSubmit, obj), ];
  let obj3 = {
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
    directoryChannelId: null
  };
  const intl3 = directoryChannelId(1236).intl;
  obj3[1] = intl3.string(directoryChannelId(1236).t.H9jxS1);
  obj3[2] = directoryChannelId;
  items1[1] = callback(GuildDirectoryEditDescriptionTemplate, obj3);
  obj[2] = items1;
  obj[0] = callback2(closure_5, obj);
  return callback(directoryChannelId(11680).GuildDirectoryAddModalScreen, obj);
};