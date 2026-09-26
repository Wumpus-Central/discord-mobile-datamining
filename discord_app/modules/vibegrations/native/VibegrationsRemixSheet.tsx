// discord_app/modules/vibegrations/native/VibegrationsRemixSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Sheet_showSimpleActionSheet from "../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const VibegrationsRemixSheet = "VibegrationsRemixSheet";
const createStyles = fn(4836);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRemixSheet.tsx");

export default function VibegrationsRemixSheet(project) {
  project = project.project;
  const onRemixed = project.onRemixed;
  let first1;
  noop = undefined;
  c6 = undefined;
  let stateFromStoresArray;
  c8 = undefined;
  closure_9 = undefined;
  const tmp2 = first1(noop.useState(project.currentGuildId), 2);
  const first = tmp2[0];
  asyncGeneratorStep = tmp2[1];
  const tmp4 = first1(noop.useState(false), 2);
  first1 = tmp4[0];
  noop = tmp4[1];
  const tmp = closure_12();
  [tmp7, c6] = first1(noop.useState(null), 2);
  let tmp6 = first1(noop.useState(null), 2);
  let items = [c8, stateFromStoresArray];
  stateFromStoresArray = project(first[9]).useStateFromStoresArray(items, () => {
    const items = [];
    const flattenedGuildIds = title.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      let guild = stateFromStoresArray.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(first[10]);
        result = obj.isVibegrationsGuildEligible(tmp6, "VibegrationsRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const found = stateFromStoresArray.find((id) => id.id === first);
  let str;
  if (found != null) {
    str = found.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp8(tmp9[11]).intl;
  const stringResult = intl.string(onRemixed(first[12]).HQLYXD);
  c8 = stringResult;
  const items1 = [stringResult, stateFromStoresArray];
  const callback = obj.useCallback(() => {
    const obj2 = {
      key: "VibegrationsRemixDestination",
      stackingBehavior: "stack",
      header: { title },
      hasIcons: false,
      options: stateFromStoresArray.map((label) => ({
        label: label.name,
        onPress() {
          return closure_2_3(label.id);
        },
      })),
    };
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items1);
  const items2 = [first, onRemixed, project, first1];
  closure_9 = obj.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_128_0 = undefined;
              if (first1) {
                c3 = 3;
              } else {
                closure_5(true);
                _undefined(null);
                dependencyMap = 1;
                c3 = 1;
                const obj5 = { value: tmp2(16258).remixVibegrationsProjectInto(project, first), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            if (!closure_128_0.ok) {
              closure_129_6(closure_128_0.message);
              closure_129_5(false);
            }
          }
          tmp5(4800).hideActionSheet(VibegrationsRemixSheet);
          closure_129_1(closure_128_0.projectId, closure_129_2);
          c3 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        } catch (tmp28) {
          c3 = tmp;
          throw tmp28;
        }
      }
    }),
    items2,
  );
  let obj3 = { header: null, children: null };
  const obj4 = { title: null };
  const intl2 = tmp8(tmp9[11]).intl;
  obj4.title = intl2.string(onRemixed(first[12])["V+azw/"]);
  obj3.header = closure_9(project(first[17]).BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp.content, children: null };
  let obj6 = {
    label: stringResult,
    trailing: closure_9(project(first[20]).Text, { variant: "text-md/normal", color: "text-muted", children: str }),
    arrow: true,
    disabled: null,
    onPress: null,
  };
  let tmp17 = first1;
  if (!first1) {
    tmp17 = stateFromStoresArray.length < 2;
  }
  let obj2 = project(first[9]);
  let tmp11 = onRemixed;
  obj6.disabled = tmp17;
  obj6.onPress = callback;
  const items3 = [
    closure_9(project(first[18]).TableRowGroup, {
      hasIcons: false,
      children: closure_9(project(first[19]).TableRow, obj6),
    }),
    ,
  ];
  let tmp14Result = null;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: null };
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    obj8.children = tmp14(tmp8(tmp9[20]).Text, obj9);
    tmp14Result = tmp14(tmp16, obj8);
  }
  items3[1] = tmp14Result;
  const obj10 = { variant: "primary", text: null, loading: null, onPress: null };
  const intl3 = tmp8(tmp9[11]).intl;
  obj10.text = intl3.string(tmp11(first[12]).vPI794);
  obj10.loading = first1;
  obj10.onPress = function onPress() {
    closure_9().catch(() => {});
  };
  items3[2] = closure_9(project(first[21]).Button, obj10);
  obj5.children = items3;
  obj3.children = closure_10(c6, obj5);
  return closure_9(project(first[16]).ActionSheet, obj3);
}
export const VIBEGRATIONS_REMIX_SHEET_KEY = "VibegrationsRemixSheet";
