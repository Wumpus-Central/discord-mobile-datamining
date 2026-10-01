// discord_app/modules/directory_channels/native/GuildDirectoryUtils.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_6 = async function _onAddDirectoryGuildEntry(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({
            directoryChannelId: closure_129_0,
            directoryGuildName: closure_129_1,
            guild: closure_129_2,
            description: closure_129_3,
            category: closure_129_4,
            onClose: closure_129_5,
          } = closure_0);
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj4 = closure_130_2(closure_130_3[3]);
          c3 = 2;
          c4 = 1;
          const obj6 = {
            value: obj4.addDirectoryGuildEntry(closure_129_0, closure_129_2.id, closure_129_3, closure_129_4),
            done: false,
          };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_5();
        const obj8 = {
          importer() {
            return closure_0(paths[6])(paths[5], paths.paths).then((result) => {
              closure_0 = result.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.guild = guild;
                obj.directoryGuildName = directoryGuildName;
                return closure_3_5(closure_0, obj);
              };
            });
          },
          isDismissable: false,
        };
        closure_130_1(closure_130_3[4]).openLazy(obj8);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
};
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/GuildDirectoryUtils.tsx");

export const onAddDirectoryGuildEntry = function onAddDirectoryGuildEntry() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
