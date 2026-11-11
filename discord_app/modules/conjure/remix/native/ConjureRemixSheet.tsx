// === Module 10915: ConjureRemixSheet ===

// Module 10915 (ConjureRemixSheet)
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7681 */;
import ConjureRemix from "ConjureRemix" /* 10916 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import SortedGuildStore from "SortedGuildStore" /* 6893 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const createStyles = fn(5243);
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
  let str = project.mode;
  if (str === undefined) {
    str = "remix";
  }
  const onRemixed = project.onRemixed;
  let shareTicket = project.shareTicket;
  _slicedToArray = undefined;
  value = undefined;
  first2 = undefined;
  flattenedGuildIds = undefined;
  c9 = undefined;
  let memo;
  str2 = undefined;
  closure_12 = undefined;
  c13 = undefined;
  closure_14 = undefined;
  [str2, _slicedToArray] = value.useState(project.currentGuildId);
  const tmp2 = _slicedToArray(value.useState(""), 2);
  value = tmp2[0];
  const tmp4 = _slicedToArray(value.useState(() => ConjureRemix.copyProjectName(project.name)), 2);
  const first1 = tmp4[0];
  [first2, flattenedGuildIds] = value.useState(false);
  [tmp9, c9] = value.useState(null);
  const tmp12 = onRemixed(shareTicket[10])();
  const height = tmp12.height;
  let num = 0;
  ({ ref, onLayout } = tmp12);
  if (undefined !== height) {
    num = height;
  }
  const tmp13Result = closure_12(num);
  items = [project, shareTicket];
  memo = obj.useMemo(() => ConjureRemix.createConjureRemix(project, undefined, shareTicket), items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  const tmp8 = _slicedToArray(value.useState(null), 2);
  const items2 = [flattenedGuildIds, first2];
  const stateFromStoresArray = project(shareTicket[11]).useStateFromStoresArray(items2, () => {
    items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = first2.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(shareTicket[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(tmp11[13]).intl;
  const stringResult = intl.string(onRemixed(shareTicket[14]).cIWtCk);
  if (null == str2) {
    const first3 = stateFromStoresArray[0];
    let id;
    if (first3 != null) {
      id = first3.id;
    }
    if (id == null) {
      id = null;
    }
    str2 = id;
  }
  closure_12 = tmp21;
  let tmp22 = null != str2;
  if (tmp22) {
    let isValidCopyNameResult = tmp21;
    if (!tmp21) {
      isValidCopyNameResult = tmp17(tmp11[9]).isValidCopyName(first1);
      const tmp17Result = tmp17(tmp11[9]);
    }
    tmp22 = isValidCopyNameResult;
  }
  c13 = tmp22;
  const intl2 = tmp17(tmp11[13]).intl;
  const tmp10Result = onRemixed(shareTicket[14]);
  const stringResult1 = intl2.string("copy" === str ? tmp10Result["UsUa/c"] : tmp10Result["276ll6"]);
  const items3 = [tmp22, str2, "copy" === str, first1, onRemixed, project.name, value, memo];
  closure_14 = obj.useCallback(str2(function*() {
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
        if (0 === shareTicket) {
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
            if (c13) {
              if (null != str2) {
                closure_8(true);
                _undefined(null);
                if (closure_12) {
                  const obj4 = { name: project.name, prompt: "", copy: true };
                  let obj5 = obj4;
                } else {
                  obj5 = { name: first1, prompt };
                }
                memo.confirm(tmp19, obj5);
                shareTicket = 1;
                c3 = 1;
              }
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
              closure_129_9(closure_128_0.message);
              closure_129_8(false);
            }
          }
          tmp2(shareTicket[15]).hideActionSheet(closure_1_11);
          closure_129_1(closure_128_0.projectId, closure_128_0.guildId);
          c3 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        }
        c3 = 3;
      } catch (tmp31) {
        c3 = tmp;
        throw tmp31;
      }
    }
  }), items3);
  let obj3 = { title: stringResult1, subtitle: null };
  const intl3 = tmp17(tmp11[13]).intl;
  const tmp10Result2 = onRemixed(shareTicket[14]);
  let obj4 = { scrollable: true, startExpanded: true, header: null, footer: null, children: null };
  obj3.subtitle = intl3.formatToPlainString("copy" === str ? tmp10Result2.GzGb2w : tmp10Result2["QN8T+C"], { projectName: project.name });
  obj4.header = c9(project(shareTicket[17]).BottomSheetTitleHeader, obj3);
  let obj6 = { style: tmp13Result.footer, ref, onLayout, children: null };
  let obj7 = { bottom: true, style: tmp13Result.footerBody, children: null };
  let tmp26Result = null;
  if (null != tmp9) {
    const obj8 = { accessibilityRole: "alert", children: null };
    const obj9 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp9 };
    obj8.children = tmp26(tmp17(tmp11[19]).Text, obj9);
    tmp26Result = tmp26(tmp28, obj8);
  }
  const items4 = [
    tmp26Result,
    c9(project(shareTicket[20]).Button, {
      variant: "primary",
      size: "md",
      text: stringResult1,
      loading: first2,
      disabled: !tmp22,
      onPress() {
        closure_14().catch(() => {

        });
      }
    })
  ];
  obj7.children = items4;
  obj6.children = memo(project(shareTicket[18]).SafeAreaPaddingView, obj7);
  obj4.footer = c9(first1, obj6);
  const obj11 = { style: tmp13Result.scroll, contentContainerStyle: tmp13Result.list, keyboardShouldPersistTaps: "handled", children: null };
  let tmp29Result = null;
  if ("copy" !== str) {
    const obj12 = { style: tmp13Result.fields, children: null };
    const obj13 = { label: null, placeholder: null, value: null, onChange: null, disabled: null };
    const intl4 = tmp17(tmp11[13]).intl;
    obj13.label = intl4.string(tmp10(tmp11[14]).cvvDlE);
    const intl5 = tmp17(tmp11[13]).intl;
    obj13.placeholder = intl5.string(tmp10(tmp11[14]).u3W0k0);
    obj13.value = value;
    obj13.onChange = tmp2[1];
    obj13.disabled = first2;
    const items5 = [tmp26(tmp17(tmp11[22]).TextArea, obj13), ];
    const obj14 = { label: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl6 = tmp17(tmp11[13]).intl;
    obj14.label = intl6.string(tmp10(tmp11[14]).PuVQeX);
    obj14.value = first1;
    obj14.onChange = tmp4[1];
    obj14.maxLength = tmp17(tmp11[24]).MAX_PROJECT_NAME_LENGTH;
    obj14.disabled = first2;
    items5[1] = tmp26(tmp17(tmp11[23]).TextInput, obj14);
    obj12.children = items5;
    tmp29Result = tmp29(tmp28, obj12);
  }
  const items6 = [tmp29Result, ];
  const obj15 = { title: stringResult, hasIcons: false, value: null, onChange: null, accessibilityLabel: null, children: null };
  if (str2 == null) {
    str2 = "";
  }
  obj15.value = str2;
  obj15.onChange = function onChange(arg0) {
    return closure_4(arg0);
  };
  obj15.accessibilityLabel = stringResult;
  obj15.children = stateFromStoresArray.map((label) => React6(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first2 }, label.id));
  items6[1] = c9(project(shareTicket[25]).TableRadioGroup, obj15);
  obj11.children = items6;
  obj4.children = memo(project(shareTicket[21]).BottomSheetScrollView, obj11);
  return c9(project(shareTicket[16]).ActionSheet, obj4);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";