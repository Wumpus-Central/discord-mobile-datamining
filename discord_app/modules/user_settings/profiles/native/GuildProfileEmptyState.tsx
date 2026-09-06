// discord_app/modules/user_settings/profiles/native/GuildProfileEmptyState.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildProfileEmptyStateSvgDefault from "GuildProfileEmptyStateSvg.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  container: { paddingHorizontal: 16, alignItems: "center" },
  image: { marginBottom: 16, marginTop: 64, textAlign: "center" },
  header: { textAlign: "center", marginStart: 8, marginEnd: 8, marginBottom: 8 },
  createButton: { marginTop: 16, marginBottom: 12 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/GuildProfileEmptyState.tsx");

export default function GuildProfileEmptyState() {
  const tmp = closure_8();
  let obj = { contentContainerStyle: tmp.container, children: null };
  obj = { style: tmp.image, children: null };
  obj = { style: tmp.image };
  obj.children = timestampProducer(GuildProfileEmptyStateSvgDefault, obj);
  const items = [timestampProducer(hasOwnProperty, obj), , , ,];
  let obj1 = {
    style: tmp.header,
    variant: "heading-xl/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t.Z1OZCV);
  items[1] = timestampProducer(Text_Text.Text, obj1);
  const obj2 = { style: tmp.header, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.UEmBq7);
  items[2] = timestampProducer(Text_Text.Text, obj2);
  const obj3 = { style: tmp.createButton, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["6dIB4R"]);
  obj4.onPress = asyncGeneratorStep(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 1;
            c0 = 1;
            const obj1 = { value: asyncRequireImpl(dependencyMap[9], dependencyMap.paths), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          value.default.openCreateGuildModal();
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c0 = tmp;
        throw tmp8;
      }
    }
  });
  obj3.children = timestampProducer(components_Button_Button.Button, obj4);
  items[3] = timestampProducer(hasOwnProperty, obj3);
  const obj5 = { text: null, variant: "secondary", onPress: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t.yRjK4p);
  obj5.onPress = asyncGeneratorStep(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 1;
            c0 = 1;
            const obj1 = { value: asyncRequireImpl(dependencyMap[9], dependencyMap.paths), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const result = value.default.openGuildJoinServerScreen();
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c0 = tmp;
        throw tmp8;
      }
    }
  });
  items[4] = timestampProducer(components_Button_Button.Button, obj5);
  obj.children = items;
  return React5(React4, obj);
}
