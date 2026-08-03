// === Module 11056: items ===

// Module 11056 (items)
import _slicedToArray from "_slicedToArray";
import importAllResult from "TextArea";
import get_ActivityIndicator from "context";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ Image: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = {
  value: 0,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["4obaMS"]);
  }
};
let items = [obj, , , , , , ];
obj = {
  value: require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.RKpitY);
  }
};
items[1] = obj;
items[2] = {
  value: 6 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8WfJZ8"]);
  }
};
let obj1 = {
  value: 6 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8WfJZ8"]);
  }
};
items[3] = {
  value: 12 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.p1up7u);
  }
};
let obj2 = {
  value: 12 * require("set").Seconds.HOUR,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.p1up7u);
  }
};
items[4] = {
  value: require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XuVkkD);
  }
};
let obj3 = {
  value: require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XuVkkD);
  }
};
items[5] = {
  value: 3 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["gMcDS+"]);
  }
};
let obj4 = {
  value: 3 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["gMcDS+"]);
  }
};
items[6] = {
  value: 7 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FA7IUk);
  }
};
let obj6 = { container: null, iconLabelBlock: null, iconStyles: null, blurb: null, redText: null, errorText: null };
let obj5 = {
  value: 7 * require("set").Seconds.DAY,
  getLabel() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FA7IUk);
  }
};
obj6[0] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey = { marginTop: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, paddingTop: require("Themes").space.PX_8, paddingBottom: require("Themes").space.PX_16, alignItems: "center" };
obj6[1] = createCacheKey;
let obj7 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj6[2] = { height: 1.25 * require("Themes").space.PX_96 };
let obj9 = { height: 1.25 * require("Themes").space.PX_96 };
obj6[3] = { marginVertical: require("Themes").space.PX_16 };
let obj10 = { marginVertical: require("Themes").space.PX_16 };
obj6[4] = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_4, color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
let obj11 = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_4, color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
obj6[5] = { marginBottom: require("Themes").space.PX_16 };
let closure_14 = createCacheKey.createStyles(obj6);
let obj12 = { marginBottom: require("Themes").space.PX_16 };
const memoResult = importAllResult.memo(function BanConfirm(arg0) {
  let c7;
  let importDefault;
  let onBan;
  let require;
  let tmp11;
  ({ guildId: require, userId: importDefault, onBan } = arg0);
  let stateFromStores;
  let stateFromStores1;
  let closure_5;
  let closure_6;
  c7 = undefined;
  const tmp = callback3();
  const ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = importDefault(onBan[10])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(onBan[11])({ insets, inputs: items, scrollViewRef: ref });
  let obj = require(onBan[12]);
  const items1 = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_8.getGuild(closure_0));
  let obj1 = require(onBan[12]);
  const items2 = [mergeGuildAvatar];
  stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_9.getUser(closure_1));
  closure_5 = stateFromStores1.useRef(0);
  closure_6 = stateFromStores1.useRef("");
  [tmp11, c7] = stateFromStores(stateFromStores1.useState(() => ({ banning: false, banError: false })), 2);
  const items3 = [stateFromStores, stateFromStores1, onBan];
  let tmp14Result = null;
  if (null != stateFromStores1) {
    tmp14Result = null;
    if (null != stateFromStores) {
      obj = { style: null, ref: null, contentContainerStyle: null, children: null };
      obj[0] = tmp.container;
      obj[1] = ref;
      obj = { paddingHorizontal: null, paddingBottom: null };
      obj[0] = tmp4(tmp5[9]).space.PX_24;
      obj[1] = insets.bottom;
      obj[2] = obj;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.iconLabelBlock;
      const obj2 = { style: null, source: null, resizeMode: "contain" };
      obj2[0] = tmp.iconStyles;
      obj2[1] = tmp4(tmp5[14]);
      const items4 = [callback(closure_5, obj2), , ];
      const obj3 = { style: null, variant: "text-md/semibold", children: null };
      obj3[0] = tmp.redText;
      const intl = tmp7(tmp5[6]).intl;
      const obj4 = { username: null };
      let tmp4Result = tmp4(tmp5[16]);
      obj4[0] = tmp4Result.getName(stateFromStores1);
      obj3[2] = intl.format(tmp7(tmp5[6]).t.Qd6w7T, obj4);
      items4[1] = callback(tmp7(tmp5[15]).Text, obj3);
      const obj5 = { variant: "text-lg/bold", color: "text-feedback-warning", children: null };
      obj5[2] = stateFromStores.name;
      items4[2] = callback(tmp7(tmp5[15]).Text, obj5);
      obj1[1] = items4;
      const items5 = [callback2(closure_6, obj1), , , , , ];
      const obj6 = { style: null, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      obj6[0] = tmp.blurb;
      const intl2 = tmp7(tmp5[6]).intl;
      const obj7 = { user: null };
      tmp4Result = tmp4(tmp5[16]);
      obj7[0] = tmp4Result.getName(stateFromStores1);
      obj6[3] = intl2.format(tmp7(tmp5[6]).t["8jV9fx"], obj7);
      items5[1] = callback(tmp7(tmp5[15]).Text, obj6);
      const obj8 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
      const intl3 = tmp7(tmp5[6]).intl;
      obj8[0] = intl3.string(tmp7(tmp5[6]).t["8l3W0y"]);
      obj8[1] = items[0].value;
      obj8[2] = function onChange(current) {
        closure_5.current = current;
      };
      obj8[4] = items.map((getLabel, value) => {
        const obj = { value, label: null };
        obj[1] = getLabel.getLabel();
        return callback2(callback(onBan[18]).TableRadioRow, obj, value);
      });
      items5[2] = callback(tmp7(tmp5[17]).TableRadioGroup, obj8);
      const obj9 = { ref: null, containerStyle: null, label: null, maxLength: 512, onChange: null };
      obj9[0] = ref1;
      const obj10 = { marginVertical: null };
      obj10[0] = tmp4(tmp5[9]).space.PX_16;
      obj9[1] = obj10;
      const intl4 = tmp7(tmp5[6]).intl;
      obj9[2] = intl4.string(tmp7(tmp5[6]).t.w4Ivys);
      obj9[4] = function onChange(current) {
        closure_6.current = current;
      };
      items5[3] = callback(tmp7(tmp5[19]).TextArea, obj9);
      const obj11 = { style: null, children: null };
      const obj12 = { marginBottom: null };
      obj12[0] = tmp4(tmp5[9]).space.PX_16;
      obj11[0] = obj12;
      const obj13 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl5 = tmp7(tmp5[6]).intl;
      obj13[1] = intl5.string(tmp7(tmp5[6]).t["5MBJ5M"]);
      obj13[2] = tmp12;
      obj13[3] = tmp11.banning;
      obj11[1] = callback(tmp7(tmp5[20]).Button, obj13);
      items5[4] = callback(closure_6, obj11);
      tmp14Result = null;
      if (tmp11.banError) {
        const obj14 = { style: null, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        obj14[0] = tmp.errorText;
        const intl6 = tmp7(tmp5[6]).intl;
        const obj15 = { user: null };
        obj15[0] = tmp4(tmp5[16]).getName(stateFromStores1);
        obj14[3] = intl6.format(tmp7(tmp5[6]).t["/K6eer"], obj15);
        tmp14Result = tmp14(tmp7(tmp5[15]).Text, obj14);
        const tmp4Result1 = tmp4(tmp5[16]);
      }
      const obj16 = { children: null };
      items5[5] = tmp14Result;
      obj16[0] = items5;
      obj[3] = callback2(closure_12, obj16);
      tmp14Result = tmp14(c7, obj);
      const tmp15 = c7;
      const tmp16 = callback2;
      const tmp17 = closure_12;
    }
  }
  return tmp14Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_moderation/native/BanConfirm.tsx");

export default memoResult;