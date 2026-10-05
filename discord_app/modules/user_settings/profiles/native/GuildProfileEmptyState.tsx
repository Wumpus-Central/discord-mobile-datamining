// === Module 14481: GuildProfileEmptyState ===

// Module 14481 (GuildProfileEmptyState)
import intl5 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import GuildProfileEmptyStateSvgDefault from "GuildProfileEmptyStateSvg" /* 14482 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let c0, c1;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16, alignItems: "center" }, image: { marginBottom: 16, marginTop: 64, textAlign: "center" }, header: { textAlign: "center", marginStart: 8, marginEnd: 8, marginBottom: 8 }, createButton: { marginTop: 16, marginBottom: 12 } });
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/GuildProfileEmptyState.tsx");

export default function GuildProfileEmptyState() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj7;
  const tmp = closure_8();
  let obj = { contentContainerStyle: tmp.container, children: items };
  let obj2 = { style: tmp.image, children: metroRequire(GuildProfileEmptyStateSvgDefault, obj3) };
  obj3 = { style: tmp.image };
  items = [metroRequire(hasOwnProperty, obj2), , , , ];
  let obj4 = { style: tmp.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.Z1OZCV) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items[1] = metroRequire(Text, obj4);
  const obj5 = { style: tmp.header, variant: "text-sm/normal", color: "text-default", children: intl2.string(intl5.t.UEmBq7) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[2] = metroRequire(Text2, obj5);
  const obj6 = { style: tmp.createButton, children: metroRequire(Button, obj7) };
  obj7 = {
    text: intl3.string(intl5.t["6dIB4R"]),
    onPress: _asyncToGenerator(async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c0 = 1;
              const obj4 = { value: asyncRequire(dependencyMap[9], dependencyMap.paths), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const _default = value.default;
            _default.openCreateGuildModal();
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    })
  };
  Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = metroRequire(hasOwnProperty, obj6);
  const obj8 = {
    text: intl4.string(intl5.t.yRjK4p),
    variant: "secondary",
    onPress: _asyncToGenerator(async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c1 = 1;
              c0 = 1;
              const obj4 = { value: asyncRequire(dependencyMap[9], dependencyMap.paths), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const _default = value.default;
            const result = _default.openGuildJoinServerScreen();
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    })
  };
  const Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[4] = metroRequire(Button2, obj8);
  return metroImportDefault(React3, obj);
};