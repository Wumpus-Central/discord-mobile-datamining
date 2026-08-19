// === Module 14069: GuildProfileEmptyState ===

// Module 14069 (GuildProfileEmptyState)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import SvgComponentDefault from "SvgComponent" /* 14070 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16, alignItems: "center" }, image: { marginBottom: 16, marginTop: 64, textAlign: "center" }, header: { textAlign: "center", marginStart: 8, marginEnd: 8, marginBottom: 8 }, createButton: { marginTop: 16, marginBottom: 12 } });
let result = require("obj132").fileFinishedImporting("modules/user_settings/profiles/native/GuildProfileEmptyState.tsx");

export default function GuildProfileEmptyState() {
  const tmp = callback4();
  let obj = { contentContainerStyle: tmp.container, children: null };
  { style: tmp.image, children: callback2(SvgComponentDefault, obj) };
  obj = { style: tmp.image };
  const items = [callback2(closure_5, obj), , , , ];
  obj1 = { style: tmp.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t.Z1OZCV);
  items[1] = callback2(Text.Text, obj1);
  const obj2 = { style: tmp.header, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[3] = intl2.string(getSystemLocale.t.UEmBq7);
  items[2] = callback2(Text.Text, obj2);
  const obj3 = { style: tmp.createButton, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj4[0] = intl3.string(getSystemLocale.t["6dIB4R"]);
  obj4[1] = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = v0(closure_1_2[10])(closure_1_2[9], closure_1_2.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          arg1.default.openCreateGuildModal();
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  obj3[1] = callback2(Button.Button, obj4);
  items[3] = callback2(closure_5, obj3);
  const obj5 = { text: null, variant: "secondary", onPress: null };
  const intl4 = getSystemLocale.intl;
  obj5[0] = intl4.string(getSystemLocale.t.yRjK4p);
  obj5[2] = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = v0(closure_1_2[10])(closure_1_2[9], closure_1_2.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const result = arg1.default.openGuildJoinServerScreen();
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  items[4] = callback2(Button.Button, obj5);
  obj[1] = items;
  return callback3(closure_4, obj);
};