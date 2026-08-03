// === Module 13762: GuildProfileEmptyState ===

// Module 13762 (GuildProfileEmptyState)
import SvgComponent from "SvgComponent";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16, alignItems: "center" }, image: { marginBottom: 16, marginTop: 64, textAlign: "center" }, header: { textAlign: "center", marginStart: 8, marginEnd: 8, marginBottom: 8 }, createButton: { marginTop: 16, marginBottom: 12 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/profiles/native/GuildProfileEmptyState.tsx");

export default function GuildProfileEmptyState() {
  const tmp = callback4();
  let obj = { contentContainerStyle: tmp.container, children: null };
  obj = { style: tmp.image, children: callback2(importDefault(13763), obj) };
  obj = { style: tmp.image };
  const items = [callback2(closure_5, obj), , , , ];
  let obj1 = { style: tmp.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.Z1OZCV);
  items[1] = callback2(require(4189) /* Text */.Text, obj1);
  const obj2 = { style: tmp.header, variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[3] = intl2.string(require(1236) /* getSystemLocale */.t.UEmBq7);
  items[2] = callback2(require(4189) /* Text */.Text, obj2);
  const obj3 = { style: tmp.createButton, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl3.string(require(1236) /* getSystemLocale */.t["6dIB4R"]);
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
        return { value: "HermesInternal", done: null };
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
            const obj1 = { value: null, done: false };
            obj1[0] = v0(outer1_2[10])(outer1_2[9], outer1_2.paths);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  obj3[1] = callback2(require(4604) /* Button */.Button, obj4);
  items[3] = callback2(closure_5, obj3);
  const obj5 = { text: null, variant: "secondary", onPress: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj5[0] = intl4.string(require(1236) /* getSystemLocale */.t.yRjK4p);
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
        return { value: "HermesInternal", done: null };
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
            const obj1 = { value: null, done: false };
            obj1[0] = v0(outer1_2[10])(outer1_2[9], outer1_2.paths);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  items[4] = callback2(require(4604) /* Button */.Button, obj5);
  obj[1] = items;
  return callback3(closure_4, obj);
};