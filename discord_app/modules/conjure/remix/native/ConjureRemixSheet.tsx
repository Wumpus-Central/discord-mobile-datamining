// === Module 10848: ConjureRemixSheet ===

// Module 10848 (ConjureRemixSheet)
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import ConjureRemix from "ConjureRemix" /* 10849 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import SortedGuildStore from "SortedGuildStore" /* 6772 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const createStyles = fn(5014);
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, list: { gap: nativeDefault.space.PX_24, paddingBottom }, intro: null, footer: null, footerBody: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom };
  obj.intro = { gap: nativeDefault.space.PX_8 };
  const obj3 = { gap: nativeDefault.space.PX_8 };
  obj.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  const obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.footerBody = { gap: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  project = project.project;
  const currentGuildId = project.currentGuildId;
  let onRemixed = project.onRemixed;
  value = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  [value, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  [tmp6, c7] = first1.useState(null);
  const tmp5 = _slicedToArray(first1.useState(null), 2);
  [tmp8, c8] = first1.useState(0);
  const tmp9 = _slicedToArray(first1.useState(0), 2);
  closure_9 = tmp9[1];
  let tmp10 = closure_12(tmp9[0]);
  closure_10 = first1.useRef(null);
  let items = [project, currentGuildId, tmp8];
  const effect = first1.useEffect(() => {
    const prepareConjureRemixResult = ConjureRemix.prepareConjureRemix(project, currentGuildId);
    project = prepareConjureRemixResult;
    closure_10.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  }, items);
  const tmp7 = _slicedToArray(first1.useState(0), 2);
  const items1 = [c8, c7];
  const stateFromStoresArray = project(onRemixed[10]).useStateFromStoresArray(items1, () => {
    const items = [];
    const flattenedGuildIds = _undefined2.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      let guild = _undefined.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(onRemixed[11]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(onRemixed[12]).intl;
  const stringResult = intl.string(currentGuildId(onRemixed[13])["maL0+X"]);
  const someResult = stateFromStoresArray.some((id) => id.id === first);
  c11 = someResult;
  const items2 = [value, someResult, onRemixed, first1];
  closure_12 = first1.useCallback(value(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === onRemixed) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            if (!first1) {
              if (c11) {
                if (null != ref.current) {
                  closure_6(true);
                  _undefined(null);
                  const current = tmp25.current;
                  onRemixed = 1;
                  c3 = 1;
                  const obj4 = { value: current.open(first), done: false };
                  return obj4;
                }
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          if (!closure_128_0.ok) {
            closure_129_7(closure_128_0.message);
            if (!closure_128_0.kept) {
              closure_129_8((arg0) => arg0 + 1);
            }
            closure_129_6(false);
          }
        }
        tmp5(onRemixed[14]).hideActionSheet(closure_1_11);
        closure_129_2(closure_128_0.projectId, closure_128_0.guildId);
        c3 = 3;
        const obj6 = { value: undefined, done: true };
        return obj6;
      } catch (tmp32) {
        c3 = tmp;
        throw tmp32;
      }
    }
  }), items2);
  const callback = first1.useCallback((nativeEvent) => {
    closure_9(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj2 = { scrollable: true, header: null, footer: null, children: null };
  let obj3 = { title: null };
  const intl2 = project(onRemixed[12]).intl;
  obj3.title = intl2.string(currentGuildId(onRemixed[13])["9wQTdG"]);
  obj2.header = closure_9(project(onRemixed[16]).BottomSheetTitleHeader, obj3);
  let obj4 = { style: tmp10.footer, onLayout: callback, children: null };
  let obj5 = { bottom: true, style: tmp10.footerBody, children: null };
  let tmp18Result = null;
  if (null != tmp6) {
    let obj6 = { accessibilityRole: "alert", children: null };
    const obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp6 };
    obj6.children = tmp18(tmp12(tmp13[18]).Text, obj7);
    tmp18Result = tmp18(tmp19, obj6);
  }
  const items3 = [tmp18Result, ];
  const obj8 = { variant: "primary", size: "md", text: null, loading: null, disabled: null, onPress: null };
  const intl3 = tmp12(tmp13[12]).intl;
  obj8.text = intl3.string(currentGuildId(onRemixed[13]).XWgAfc);
  obj8.loading = first1;
  obj8.disabled = !someResult;
  obj8.onPress = function onPress() {
    closure_12().catch(() => {

    });
  };
  items3[1] = closure_9(project(onRemixed[19]).Button, obj8);
  obj5.children = items3;
  obj4.children = closure_10(project(onRemixed[17]).SafeAreaPaddingView, obj5);
  obj2.footer = closure_9(closure_6, obj4);
  const obj9 = { style: tmp10.scroll, contentContainerStyle: tmp10.list, children: null };
  const obj10 = { style: tmp10.intro, children: null };
  const obj11 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl4 = tmp12(tmp13[12]).intl;
  obj11.children = intl4.format(currentGuildId(onRemixed[13]).JKN64Y, { name: project.name });
  const items4 = [closure_9(project(onRemixed[18]).Text, obj11), ];
  const obj13 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl5 = tmp12(tmp13[12]).intl;
  obj13.children = intl5.string(currentGuildId(onRemixed[13])["fT4+km"]);
  items4[1] = closure_9(project(onRemixed[18]).Text, obj13);
  obj10.children = items4;
  const items5 = [closure_10(closure_6, obj10), ];
  const obj14 = { title: stringResult, description: null, hasIcons: false, value: null, onChange: null, accessibilityLabel: null, children: null };
  const intl6 = tmp12(tmp13[12]).intl;
  obj14.description = intl6.string(currentGuildId(onRemixed[13]).R2uxWO);
  obj14.value = value;
  obj14.onChange = function onChange(arg0) {
    return closure_4(arg0);
  };
  obj14.accessibilityLabel = stringResult;
  obj14.children = stateFromStoresArray.map((label) => React7(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: first1 }, label.id));
  items5[1] = closure_9(project(onRemixed[21]).TableRadioGroup, obj14);
  obj9.children = items5;
  obj2.children = closure_10(project(onRemixed[20]).BottomSheetScrollView, obj9);
  return closure_9(project(onRemixed[15]).ActionSheet, obj2);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";