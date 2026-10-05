// === Module 11947: GuildDirectoryCreateOrAddDescription ===

// Module 11947 (GuildDirectoryCreateOrAddDescription)
import GuildDirectoryEditDescriptionTemplateDefault from "GuildDirectoryEditDescriptionTemplate" /* 11945 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let closure_3, guild, template;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flex: 1 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 } });
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx");

export default function GuildDirectoryCreateOrAddDescription(directoryChannelId) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj2;
  directoryChannelId = directoryChannelId.directoryChannelId;
  ({ directoryGuildName: importDefault, guild: dependencyMap, createGuild: _asyncToGenerator } = directoryChannelId);
  let obj = function _onSubmit() {
    obj = _asyncToGenerator(async (description, category) => {
      let c4 = 0;
      let c5 = 0;
      return (async (arg0, value) => {
        let obj6;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
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
                return { value, done: true };
              } else {
                closure_3 = tmp4;
                guild = undefined;
                if (null != template) {
                  template = template.template;
                  if (null == template) {
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c4 = 1;
                    c5 = 1;
                    const obj5 = { value: obj6.createGuildFromTemplate(tmp25, tmp26, template), done: false };
                    obj6 = category(guild[5]);
                    return obj5;
                  }
                } else if (null != guild) {
                  const obj7 = { directoryChannelId, directoryGuildName, guild, description, category, onClose: category(guild[8]).close };
                  const onAddDirectoryGuildEntry = description(guild[7]).onAddDirectoryGuildEntry;
                  description(guild[7]);
                  c4 = 2;
                  c5 = 1;
                  const obj8 = { value: onAddDirectoryGuildEntry(obj7), done: false };
                  return obj8;
                }
              }
            } else if (1 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                guild = value;
                const obj2 = description(guild[6]);
                guild = obj2.fromGuild(guild);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp29) {
            c5 = 3;
            throw tmp29;
          }
        }
      })();
    });
    return obj(...arguments);
  };
  const tmp = closure_8();
  obj = { children: closure_7(closure_5, obj2) };
  obj2 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const GuildDirectoryAddModalScreen = directoryChannelId(11937).GuildDirectoryAddModalScreen;
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(directoryChannelId(1126).t["5bQcoa"]) };
  const Text = directoryChannelId(4886).Text;
  intl = directoryChannelId(1126).intl;
  items = [closure_6(Text, obj4), ];
  let obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(directoryChannelId(1126).t.Ie60Wc) };
  const Text2 = directoryChannelId(4886).Text;
  intl2 = directoryChannelId(1126).intl;
  items[1] = closure_6(Text2, obj5);
  items1 = [closure_7(obj, obj3), ];
  let obj6 = {
    onSubmit(arg0, arg1) {
      return obj(...arguments);
    },
    buttonLabel: intl3.string(directoryChannelId(1126).t.H9jxS1),
    directoryChannelId
  };
  const tmp2 = GuildDirectoryEditDescriptionTemplateDefault;
  intl3 = directoryChannelId(1126).intl;
  items1[1] = closure_6(tmp2, obj6);
  return closure_6(GuildDirectoryAddModalScreen, obj);
};