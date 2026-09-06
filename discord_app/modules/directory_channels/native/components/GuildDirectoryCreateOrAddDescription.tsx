// discord_app/modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx
import GuildDirectoryEditDescriptionTemplateDefault from "GuildDirectoryEditDescriptionTemplate.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  container: { flex: 1 },
  title: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  header: { alignItems: "center", justifyContent: "center", padding: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx",
);

export default function GuildDirectoryCreateOrAddDescription(directoryChannelId) {
  directoryChannelId = directoryChannelId.directoryChannelId;
  ({ directoryGuildName: importDefault, guild: dependencyMap, createGuild: asyncGeneratorStep } = directoryChannelId);
  closure_4 = async function _onSubmit(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            closure_130_0 = directoryChannelId;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            if (null != asyncGeneratorStep) {
              const template = tmp36.template;
              if (null == template) {
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c4 = 1;
                c5 = 1;
                let obj1 = { value: closure_1(tmp2[5]).createGuildFromTemplate(tmp25, tmp26, template), done: false };
                return obj1;
              }
            } else if (null != closure_131_2) {
              let obj3 = directoryChannelId(tmp2[7]);
              const obj2 = {
                directoryChannelId: closure_131_0,
                directoryGuildName: closure_131_1,
                guild: closure_131_2,
                description: closure_130_0,
                category: closure_130_1,
                onClose: closure_1(tmp2[8]).close,
              };
              c4 = 2;
              c5 = 1;
              obj3 = { value: null, done: false };
              obj3.value = obj3.onAddDirectoryGuildEntry(obj2);
              return obj3;
            }
            tmp36 = asyncGeneratorStep;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_130_2 = value;
            obj1 = directoryChannelId(tmp2[6]);
            closure_131_2 = obj1.fromGuild(closure_130_2);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp29) {
        c5 = tmp;
        throw tmp29;
      }
    }
  };
  const tmp = closure_8();
  let obj = { children: null };
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  obj = { style: tmp.header, children: null };
  let obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = directoryChannelId(1114).intl;
  obj1.children = intl.string(directoryChannelId(1114).t["5bQcoa"]);
  const items = [closure_6(directoryChannelId(4556).Text, obj1)];
  let obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = directoryChannelId(1114).intl;
  obj2.children = intl2.string(directoryChannelId(1114).t.Ie60Wc);
  items[1] = closure_6(directoryChannelId(4556).Text, obj2);
  obj.children = items;
  const items1 = [closure_7(closure_4, obj)];
  let obj3 = {
    onSubmit(arg0, arg1) {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    buttonLabel: null,
    directoryChannelId: null,
  };
  const intl3 = directoryChannelId(1114).intl;
  obj3.buttonLabel = intl3.string(directoryChannelId(1114).t.H9jxS1);
  obj3.directoryChannelId = directoryChannelId;
  items1[1] = closure_6(GuildDirectoryEditDescriptionTemplateDefault, obj3);
  obj.children = items1;
  obj.children = closure_7(closure_5, obj);
  return closure_6(directoryChannelId(12309).GuildDirectoryAddModalScreen, obj);
}
