// === Module 11032: ConjureRemixSheet ===

// Module 11032 (ConjureRemixSheet)
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7205 */;
import ConjureRemix from "ConjureRemix" /* 11033 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;
import SortedGuildStore from "SortedGuildStore" /* 6910 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const createStyles = fn(5143);
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, list: { gap: nativeDefault.space.PX_24, paddingBottom }, fields: null, footer: null, footerBody: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom };
  obj.fields = { gap: nativeDefault.space.PX_16 };
  const obj3 = { gap: nativeDefault.space.PX_16 };
  obj.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  const obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.footerBody = { gap: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  project = project.project;
  const onRemixed = project.onRemixed;
  let first1;
  let first2;
  c8 = undefined;
  let memo;
  c10 = undefined;
  closure_11 = undefined;
  const tmp = first1(first2.useState(project.currentGuildId), 2);
  value = tmp[0];
  asyncGeneratorStep = tmp[1];
  const tmp3 = first1(first2.useState(""), 2);
  first1 = tmp3[0];
  const tmp5 = first1(first2.useState(() => ConjureRemix.copyProjectName(project.name)), 2);
  first2 = tmp5[0];
  const tmp7 = first1(first2.useState(false), 2);
  const first3 = tmp7[0];
  guild = tmp7[1];
  [tmp10, c8] = first1(first2.useState(null), 2);
  const tmp13 = onRemixed(value[10])();
  const height = tmp13.height;
  let num = 0;
  ({ ref, onLayout } = tmp13);
  if (undefined !== height) {
    num = height;
  }
  const tmp14Result = closure_12(num);
  items = [project];
  memo = obj.useMemo(() => ConjureRemix.createConjureRemix(project), items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  const tmp9 = first1(first2.useState(null), 2);
  const items2 = [c8, guild];
  const stateFromStoresArray = project(value[11]).useStateFromStoresArray(items2, () => {
    items = [];
    const flattenedGuildIds = _undefined.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = guild.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(first[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(tmp12[13]).intl;
  const stringResult = intl.string(onRemixed(value[14]).cIWtCk);
  let someResult = stateFromStoresArray.some((id) => id.id === first);
  if (someResult) {
    someResult = tmp18(tmp12[9]).isValidCopyName(first2);
    const tmp18Result = tmp18(tmp12[9]);
  }
  c10 = someResult;
  const items3 = [someResult, value, first2, onRemixed, first1, memo];
  closure_11 = obj.useCallback(asyncGeneratorStep(async () => {
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
        if (0 === value) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp5;
            closure_128_0 = undefined;
            if (c10) {
              guild(true);
              _undefined(null);
              const obj4 = { name: first2, prompt: first1 };
              value = 1;
              c3 = 1;
              const obj5 = { value: memo.confirm(first, obj4), done: false };
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
          if (null != closure_128_0) {
            if (!closure_128_0.ok) {
              closure_129_8(closure_128_0.message);
              closure_129_7(false);
            }
          }
          tmp2(value[15]).hideActionSheet(closure_1_11);
          closure_129_1(closure_128_0.projectId, closure_128_0.guildId);
          c3 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        }
        c3 = 3;
      } catch (tmp28) {
        c3 = tmp;
        throw tmp28;
      }
    }
  }), items3);
  let obj3 = { scrollable: true, startExpanded: true, header: null, footer: null, children: null };
  let obj4 = { title: null, subtitle: null };
  const intl2 = tmp18(tmp12[13]).intl;
  obj4.title = intl2.string(onRemixed(value[14])["276ll6"]);
  const intl3 = tmp18(tmp12[13]).intl;
  obj4.subtitle = intl3.formatToPlainString(onRemixed(value[14])["QN8T+C"], { projectName: project.name });
  obj3.header = memo(project(value[17]).BottomSheetTitleHeader, obj4);
  let obj6 = { style: tmp14Result.footer, ref, onLayout, children: null };
  let obj7 = { bottom: true, style: tmp14Result.footerBody, children: null };
  let tmp21Result = null;
  if (null != tmp10) {
    const obj8 = { accessibilityRole: "alert", children: null };
    const obj9 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp10 };
    obj8.children = tmp21(tmp18(tmp12[19]).Text, obj9);
    tmp21Result = tmp21(tmp22, obj8);
  }
  const items4 = [tmp21Result, ];
  const obj10 = { variant: "primary", size: "md", text: null, loading: null, disabled: null, onPress: null };
  const intl4 = tmp18(tmp12[13]).intl;
  obj10.text = intl4.string(onRemixed(value[14])["276ll6"]);
  obj10.loading = first3;
  obj10.disabled = !someResult;
  obj10.onPress = function onPress() {
    closure_11().catch(() => {

    });
  };
  items4[1] = memo(project(value[20]).Button, obj10);
  obj7.children = items4;
  obj6.children = c10(project(value[18]).SafeAreaPaddingView, obj7);
  obj3.footer = memo(first3, obj6);
  const obj11 = { style: tmp14Result.scroll, contentContainerStyle: tmp14Result.list, keyboardShouldPersistTaps: "handled", children: null };
  const obj12 = { style: tmp14Result.fields, children: null };
  const obj13 = { label: null, placeholder: null, value: null, onChange: null, disabled: null };
  const intl5 = tmp18(tmp12[13]).intl;
  obj13.label = intl5.string(onRemixed(value[14]).cvvDlE);
  const intl6 = tmp18(tmp12[13]).intl;
  obj13.placeholder = intl6.string(onRemixed(value[14]).u3W0k0);
  obj13.value = first1;
  obj13.onChange = tmp3[1];
  obj13.disabled = first3;
  const items5 = [memo(project(value[22]).TextArea, obj13), ];
  const obj14 = { label: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl7 = tmp18(tmp12[13]).intl;
  obj14.label = intl7.string(onRemixed(value[14]).PuVQeX);
  obj14.value = first2;
  obj14.onChange = tmp5[1];
  obj14.maxLength = project(value[24]).MAX_PROJECT_NAME_LENGTH;
  obj14.disabled = first3;
  items5[1] = memo(project(value[23]).TextInput, obj14);
  obj12.children = items5;
  const items6 = [c10(first3, obj12), ];
  let obj2 = project(value[11]);
  let obj5 = { projectName: project.name };
  items6[1] = memo(project(value[25]).TableRadioGroup, {
    title: stringResult,
    hasIcons: false,
    value,
    onChange(arg0) {
      return closure_3(arg0);
    },
    accessibilityLabel: stringResult,
    children: stateFromStoresArray.map((label) => React6(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first3 }, label.id))
  });
  obj11.children = items6;
  obj3.children = c10(project(value[21]).BottomSheetScrollView, obj11);
  return memo(project(value[16]).ActionSheet, obj3);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";