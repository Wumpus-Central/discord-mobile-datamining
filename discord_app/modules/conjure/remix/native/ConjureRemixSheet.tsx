// === Module 12298: ConjureRemixSheet ===

// Module 12298 (ConjureRemixSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import ConjureRemix from "ConjureRemix" /* 12299 */;
import ConjureServerPickerSheetDefault from "ConjureServerPickerSheet" /* 12301 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import SortedGuildStore from "SortedGuildStore" /* 6550 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const ConjureRemixServerSheet = "ConjureRemixServerSheet";
const createStyles = fn(4913);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { list: { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 }, footer: null, footerBody: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 };
  obj.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.footerBody = { gap: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  project = project.project;
  let str = project.mode;
  if (str === undefined) {
    str = "copy";
  }
  let onRemixed = project.onRemixed;
  const shareTicket = project.shareTicket;
  _slicedToArray = undefined;
  noop = undefined;
  str2 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let memo;
  let stateFromStoresArray;
  c12 = undefined;
  first = undefined;
  closure_14 = undefined;
  c15 = undefined;
  [first, _slicedToArray] = noop.useState(project.currentGuildId);
  [tmp4, c5] = noop.useState(str);
  [str2, obj15.onChange] = noop.useState(project.name);
  const tmp3 = _slicedToArray(noop.useState(str), 2);
  [tmp7, c7] = _slicedToArray(noop.useState(false), 2);
  let tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp9, c8] = _slicedToArray(noop.useState(null), 2);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  [tmp11, c9] = _slicedToArray(noop.useState(null), 2);
  const tmp14 = onRemixed(shareTicket[9])();
  const height = tmp14.height;
  let num = 0;
  ({ ref, onLayout } = tmp14);
  if (undefined !== height) {
    num = height;
  }
  const tmp15Result = first(num);
  items = [project, shareTicket];
  memo = obj.useMemo(() => ConjureRemix.createConjureRemix(project, undefined, shareTicket), items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  let tmp10 = _slicedToArray(noop.useState(null), 2);
  const items2 = [c8, c7];
  stateFromStoresArray = project(shareTicket[11]).useStateFromStoresArray(items2, () => {
    items = [];
    const flattenedGuildIds = _undefined3.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = _undefined2.getGuild(tmp3);
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
  const intl = project(tmp13[13]).intl;
  const stringResult = intl.string(onRemixed(shareTicket[14])["maL0+X"]);
  c12 = stringResult;
  const intl2 = project(tmp13[13]).intl;
  const stringResult1 = intl2.string(onRemixed(shareTicket[14])["pgbZu+"]);
  if (null == first) {
    const first1 = stateFromStoresArray[0];
    let id;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    first = id;
  }
  let found = stateFromStoresArray.find((id) => id.id === first);
  if (found == null) {
    found = null;
  }
  closure_14 = tmp25;
  let isValidCopyNameResult = null != first;
  if (isValidCopyNameResult) {
    isValidCopyNameResult = tmp19(tmp13[10]).isValidCopyName(str2);
    const tmp19Result = tmp19(tmp13[10]);
  }
  c15 = isValidCopyNameResult;
  const intl3 = tmp19(tmp13[13]).intl;
  const items3 = [first, stringResult, stateFromStoresArray];
  let obj2 = project(shareTicket[11]);
  const callback = obj.useCallback(() => {
    const obj2 = {
      key: ConjureRemixServerSheet,
      stackingBehavior: "stack",
      content: React6(ConjureServerPickerSheetDefault, {
        sheetKey: ConjureRemixServerSheet,
        title,
        guilds: stateFromStoresArray,
        selectedGuildId: first,
        onPick(id) {
          return closure_1_4(id.id);
        }
      })
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items3);
  const items4 = [isValidCopyNameResult, first, "copy" === tmp4, str2, onRemixed, memo];
  const callback1 = obj.useCallback(first(function*() {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          let num8 = 1;
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            onRemixed = tmp5;
            closure_129_0 = undefined;
            let projectId;
            let guildId;
            closure_129_3 = undefined;
            if (c15) {
              let tmp43 = null;
              if (null != first) {
                guild(true);
                _undefined(tmp43);
                if (closure_14) {
                  const obj6 = { name: str2, copy: true };
                  let obj7 = obj6;
                } else {
                  obj7 = { name: str2 };
                }
                memo.confirm(tmp42, obj7);
                c3 = num8;
                c4 = num8;
              }
            }
          }
        } else {
          num8 = 1;
          if (1 === tmp5) {
            if (arg0 === num8) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_129_0 = value;
              tmp43 = null;
              if (null != closure_129_0) {
                if (closure_129_0.ok) {
                  projectId = closure_129_0.projectId;
                  guildId = closure_129_0.guildId;
                  guild = guild.getGuild(guildId);
                  let name;
                  if (guild != tmp43) {
                    name = guild.name;
                  }
                  let _var = name;
                  if (name == tmp43) {
                    _var = "";
                  }
                  closure_130_8(_var);
                  c3 = 2;
                  c4 = num8;
                  const obj9 = { value: _var(tmp2[17]).publishConjureCopy(projectId, guildId), done: false };
                  return obj9;
                } else {
                  closure_130_9(closure_129_0.message);
                  closure_130_7(false);
                  c4 = 3;
                  const obj10 = { value: undefined, done: true };
                  return obj10;
                }
              }
            }
          } else if (arg0 === num8) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_129_3 = value;
            tmp43 = closure_129_3;
            if (null != closure_129_3) {
              onRemixed(tmp2[15]).hideActionSheet(stateFromStoresArray);
              const obj12 = onRemixed(tmp2[15]);
              _var(tmp2[17]).openConjureCopy(guildId, closure_129_3.appChannelId);
              c4 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
          }
          onRemixed(tmp2[15]).hideActionSheet(stateFromStoresArray);
          closure_130_1(projectId, guildId);
          const obj4 = onRemixed(tmp2[15]);
        }
        c4 = 3;
      } catch (tmp54) {
        c4 = tmp;
        throw tmp54;
      }
    }
  }), items4);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, footer: null, children: null };
  let obj4 = { title: null, subtitle: null };
  const intl4 = tmp19(tmp13[13]).intl;
  obj4.title = intl4.formatToPlainString(onRemixed(shareTicket[14]).vU1gB6, { projectName: project.name });
  const intl5 = tmp19(tmp13[13]).intl;
  obj4.subtitle = intl5.string(onRemixed(shareTicket[14]).PrV2rD);
  obj3.header = c9(project(shareTicket[19]).BottomSheetTitleHeader, obj4);
  let obj6 = { style: tmp15Result.footer, ref, onLayout, children: null };
  let obj7 = { bottom: true, style: tmp15Result.footerBody, children: null };
  let tmp30Result = null;
  if (null != tmp11) {
    let obj8 = { accessibilityRole: "alert", children: null };
    let obj9 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp11 };
    obj8.children = tmp30(tmp19(tmp13[21]).Text, obj9);
    tmp30Result = tmp30(tmp31, obj8);
  }
  const items5 = [tmp30Result, , ];
  let tmp30Result3 = null;
  if (null != tmp9) {
    let obj10 = { accessibilityLiveRegion: "polite", children: null };
    let obj11 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl6 = tmp19(tmp13[13]).intl;
    let obj12 = { projectName: str2.trim(), server: tmp9 };
    obj11.children = intl6.formatToPlainString(tmp12(tmp13[14]).O25g5n, obj12);
    obj10.children = tmp30(tmp19(tmp13[21]).Text, obj11);
    tmp30Result3 = tmp30(tmp31, obj10);
  }
  items5[1] = tmp30Result3;
  const obj5 = { projectName: project.name };
  const stringResult2 = intl3.string(onRemixed(shareTicket[14]).XWgAfc);
  items5[2] = c9(project(shareTicket[22]).Button, { variant: "primary", size: "md", text: intl3.string(onRemixed(shareTicket[14]).XWgAfc), loading: tmp7, disabled: !isValidCopyNameResult, onPress: callback1 });
  obj7.children = items5;
  obj6.children = memo(project(shareTicket[20]).SafeAreaPaddingView, obj7);
  obj3.footer = c9(str2, obj6);
  const obj14 = { style: tmp15Result.list, children: null };
  const obj15 = { label: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl7 = tmp19(tmp13[13]).intl;
  obj15.label = intl7.string(onRemixed(shareTicket[14])["7gI+sw"]);
  obj15.value = str2;
  obj15.maxLength = project(shareTicket[24]).MAX_PROJECT_NAME_LENGTH;
  obj15.disabled = tmp7;
  const items6 = [c9(project(shareTicket[23]).TextInput, obj15), , ];
  let tmp30Result4 = null;
  if (null != found) {
    const obj16 = { title: stringResult, hasIcons: true, children: null };
    const obj17 = { icon: null, label: null, labelLineClamp: 1, arrow: true, disabled: null, onPress: null };
    const obj18 = { guild: found, size: tmp19(tmp13[27]).GuildIconSizes.SMALL_32 };
    obj17.icon = tmp30(tmp12(tmp13[27]), obj18);
    obj17.label = found.name;
    obj17.disabled = tmp7;
    obj17.onPress = callback;
    obj16.children = tmp30(tmp19(tmp13[26]).TableRow, obj17);
    tmp30Result4 = tmp30(tmp19(tmp13[25]).TableRowGroup, obj16);
    const tmp12Result = tmp12(tmp13[27]);
  }
  items6[1] = tmp30Result4;
  const obj19 = {
    title: stringResult1,
    hasIcons: true,
    value: tmp4,
    onChange(arg0) {
      return _undefined(arg0);
    },
    accessibilityLabel: stringResult1,
    children: null
  };
  const obj20 = { value: "copy", icon: null, label: null, subLabel: null, disabled: null };
  const obj13 = { variant: "primary", size: "md", text: intl3.string(onRemixed(shareTicket[14]).XWgAfc), loading: tmp7, disabled: !isValidCopyNameResult, onPress: callback1 };
  obj20.icon = c9(project(shareTicket[30]).TableRowIcon, { IconComponent: project(shareTicket[31]).CopyIcon });
  const intl8 = tmp19(tmp13[13]).intl;
  obj20.label = intl8.string(onRemixed(shareTicket[14]).sx5jYE);
  const intl9 = tmp19(tmp13[13]).intl;
  obj20.subLabel = intl9.string(onRemixed(shareTicket[14])["S+Fcvd"]);
  obj20.disabled = tmp7;
  const items7 = [c9(project(shareTicket[29]).TableRadioRow, obj20), ];
  const obj22 = { value: "remix", icon: null, label: null, subLabel: null, disabled: null };
  const obj21 = { IconComponent: project(shareTicket[31]).CopyIcon };
  obj22.icon = c9(project(shareTicket[30]).TableRowIcon, { IconComponent: project(shareTicket[32]).MagicWandIcon });
  const intl10 = tmp19(tmp13[13]).intl;
  obj22.label = intl10.string(onRemixed(shareTicket[14]).ZdvGpk);
  const intl11 = tmp19(tmp13[13]).intl;
  obj22.subLabel = intl11.string(onRemixed(shareTicket[14]).EIh4da);
  obj22.disabled = tmp7;
  items7[1] = c9(project(shareTicket[29]).TableRadioRow, obj22);
  obj19.children = items7;
  items6[2] = memo(project(shareTicket[28]).TableRadioGroup, obj19);
  obj14.children = items6;
  obj3.children = memo(str2, obj14);
  return c9(project(shareTicket[18]).ActionSheet, obj3);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";