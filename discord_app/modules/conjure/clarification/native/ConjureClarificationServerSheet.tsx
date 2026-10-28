// discord_app/modules/conjure/clarification/native/ConjureClarificationServerSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { list: { paddingBottom: nativeDefault.space.PX_64 }, empty: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.empty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationServerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureClarificationServerSheet(sheetKey) {
      const cResult = sheetKey(576).c(19);
      sheetKey = sheetKey.sheetKey;
      ({ title, guilds, onPick } = sheetKey);
      const tmp4 = closure_8();
      let obj = sheetKey(576);
      [str, tmp6] = noop.useState("");
      if (cResult[0] !== str) {
        const trimmed = str.trim();
        const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
        cResult[0] = str;
        cResult[1] = toLocaleLowerCaseResult;
        let tmp7 = toLocaleLowerCaseResult;
      } else {
        tmp7 = cResult[1];
      }
      dependencyMap = tmp7;
      if (cResult[2] === guilds) {
        if (cResult[3] === tmp7) {
          let empty = cResult[4];
        }
        if (cResult[5] !== title) {
          let obj2 = { title };
          const tmp12 = closure_6(tmp(7284).BottomSheetTitleHeader, obj2);
          cResult[5] = title;
          cResult[6] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            size: "md",
            round: true,
            grow: false,
            accessibilityLabel: null,
            placeholder: null,
            onChange: null,
          };
          const intl = tmp(1125).intl;
          obj3.accessibilityLabel = intl.string(onPick(3863).gnsPOt);
          const intl2 = tmp(1125).intl;
          obj3.placeholder = intl2.string(onPick(3863).gnsPOt);
          obj3.onChange = tmp6;
          const tmp17 = closure_6(tmp(7181).SearchBar, obj3);
          cResult[7] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === onPick) {
          if (cResult[9] === sheetKey) {
            if (cResult[10] === empty) {
              if (cResult[11] === tmp4.empty) {
                if (cResult[13] === tmp4.list) {
                  if (cResult[14] === tmp18) {
                    let tmp24 = cResult[15];
                  }
                  if (cResult[16] === tmp10) {
                    if (cResult[17] === tmp24) {
                      let tmp28 = cResult[18];
                    }
                    return tmp28;
                  }
                  const obj4 = {
                    startExpanded: true,
                    keyboardShouldPersistTaps: "handled",
                    header: tmp10,
                    children: null,
                  };
                  const items = [tmp14, tmp24];
                  obj4.children = items;
                  const tmp30 = closure_7(tmp(7334).ActionSheet, obj4);
                  cResult[16] = tmp10;
                  cResult[17] = tmp24;
                  cResult[18] = tmp30;
                  tmp28 = tmp30;
                }
                const obj5 = { style: tmp4.list, children: cResult[12] };
                const tmp27 = closure_6(View, obj5);
                cResult[13] = tmp4.list;
                cResult[14] = cResult[12];
                cResult[15] = tmp27;
                tmp24 = tmp27;
              }
            }
          }
        }
        if (0 === empty.length) {
          const obj6 = { style: tmp4.empty, children: null };
          const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl3 = tmp(1125).intl;
          obj7.children = intl3.string(tmp(1125).t.V6nAfF);
          obj6.children = closure_6(tmp(5270).Text, obj7);
          let tmp20 = closure_6(View, obj6);
        } else {
          const obj8 = {
            hasIcons: true,
            children: empty.map((guild) => {
              closure_0 = guild;
              const obj = { label: guild.name, icon: null, onPress: null };
              const obj2 = { guild, size: sheetKey(6919).GuildIconSizes.SMALL_32 };
              obj.icon = closure_1_6(onPick(6919), obj2);
              obj.onPress = function onPress() {
                ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
                onPick(closure_0);
              };
              return closure_1_6(sheetKey(6939).TableRow, obj, guild.id);
            }),
          };
          tmp20 = closure_6(tmp(7023).TableRowGroup, obj8);
        }
        cResult[8] = onPick;
        cResult[9] = sheetKey;
        cResult[10] = empty;
        empty = tmp4.empty;
        cResult[11] = empty;
        cResult[12] = tmp20;
      }
      let found = guilds;
      if ("" !== tmp7) {
        found = guilds.filter((name) => {
          name = name.name;
          return name.toLocaleLowerCase().includes(closure_2);
        });
      }
      cResult[2] = guilds;
      cResult[3] = tmp7;
      cResult[4] = found;
      empty = found;
      const tmp5 = _slicedToArray(noop.useState(""), 2);
    }
  : function ConjureClarificationServerSheet(title) {
      ({ sheetKey: require, guilds } = title);
      const onPick = title.onPick;
      const tmp = closure_8();
      [str, tmp3] = noop.useState("");
      const trimmed = str.trim();
      const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
      _slicedToArray = toLocaleLowerCaseResult;
      const items = [guilds, toLocaleLowerCaseResult];
      const memo = noop.useMemo(() => {
        if ("" === c3) {
          let found = guilds;
        } else {
          found = guilds.filter((name) => {
            name = name.name;
            return name.toLocaleLowerCase().includes(closure_1_3);
          });
        }
        return found;
      }, items);
      let obj = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        header: closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: title.title }),
        children: null,
      };
      let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
      const intl = require("util").intl;
      obj2.accessibilityLabel = intl.string(guilds(onPick[11]).gnsPOt);
      const intl2 = require("util").intl;
      obj2.placeholder = intl2.string(guilds(onPick[11]).gnsPOt);
      obj2.onChange = tmp3;
      const items1 = [closure_6(require("Search/SearchBar").SearchBar, obj2)];
      const obj3 = { style: tmp.list, children: null };
      if (0 === memo.length) {
        const obj4 = { style: tmp.empty, children: null };
        const obj5 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl3 = require("util").intl;
        obj5.children = intl3.string(require("util").t.V6nAfF);
        obj4.children = closure_6(require("Text/Text").Text, obj5);
        let tmp8Result = closure_6(View, obj4);
      } else {
        const obj6 = {
          hasIcons: true,
          children: memo.map((guild) => {
            closure_0 = guild;
            const obj = { label: guild.name, icon: null, onPress: null };
            const obj2 = { guild, size: require("GuildIcon").GuildIconSizes.SMALL_32 };
            obj.icon = closure_1_6(guilds(onPick[15]), obj2);
            obj.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet(require);
              onPick(closure_0);
            };
            return closure_1_6(require("TableRow").TableRow, obj, guild.id);
          }),
        };
        tmp8Result = closure_6(require("TableRowGroup").TableRowGroup, obj6);
      }
      obj3.children = tmp8Result;
      items1[1] = closure_6(View, obj3);
      obj.children = items1;
      return closure_7(require("ActionSheet").ActionSheet, obj);
    };
