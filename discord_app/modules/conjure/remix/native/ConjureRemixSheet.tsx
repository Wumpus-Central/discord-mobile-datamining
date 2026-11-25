// === Module 11404: ConjureRemixSheet ===

// Module 11404 (ConjureRemixSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5226 */;
import TableRowIcon from "TableRowIcon" /* 6124 */;
import AppsIcon from "AppsIcon" /* 7141 */;
import ConjureRemix from "ConjureRemix" /* 11406 */;
import ConjureServerPickerSheetDefault from "ConjureServerPickerSheet" /* 11408 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureRemixSheet = "ConjureRemixSheet";
const ConjureRemixServerSheet = "ConjureRemixServerSheet";
const createStyles = fn(5012);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { list: { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 }, footer: null, footerBody: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 };
  obj.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
  obj.footerBody = { gap: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  project = project.project;
  let str = project.mode;
  if (str === undefined) {
    str = "copy";
  }
  let onRemixed = project.onRemixed;
  const shareTicket = project.shareTicket;
  setDestination = undefined;
  noop = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let memo;
  c11 = undefined;
  let stringResult1;
  let id;
  closure_14 = undefined;
  c15 = undefined;
  const tmp3 = onRemixed(shareTicket[8])(project.currentGuildId, "ConjureRemixSheet");
  const guilds = tmp3.guilds;
  ({ destinationGuild, setDestination } = tmp3);
  [tmp5, c5] = setDestination(noop.useState(str), 2);
  const tmp6 = setDestination(noop.useState(project.name), 2);
  const str2 = tmp6[0];
  const tmp4 = setDestination(noop.useState(str), 2);
  [tmp8, c7] = setDestination(noop.useState(false), 2);
  const tmp7 = setDestination(noop.useState(false), 2);
  [tmp10, c8] = setDestination(noop.useState(null), 2);
  const tmp9 = setDestination(noop.useState(null), 2);
  [tmp12, c9] = setDestination(noop.useState(null), 2);
  const tmp13 = onRemixed(shareTicket[9])();
  const height = tmp13.height;
  let num = 0;
  ({ ref, onLayout } = tmp13);
  if (undefined !== height) {
    num = height;
  }
  const tmp14Result = stringResult1(num);
  items = [project, shareTicket];
  memo = obj.useMemo(() => ConjureRemix.createConjureRemix(project, undefined, shareTicket), items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  const intl = project(tmp2[11]).intl;
  const stringResult = intl.string(onRemixed(shareTicket[12])["maL0+X"]);
  c11 = stringResult;
  const intl2 = project(tmp2[11]).intl;
  stringResult1 = intl2.string(tmp(tmp2[12])["0Vceid"]);
  const intl3 = project(tmp2[11]).intl;
  const stringResult2 = intl3.string(onRemixed(shareTicket[12])["pgbZu+"]);
  id = undefined;
  if (destinationGuild != null) {
    id = destinationGuild.id;
  }
  if (id == null) {
    id = null;
  }
  closure_14 = tmp23;
  const tmp11 = setDestination(noop.useState(null), 2);
  const isValidCopyNameResult = project(shareTicket[10]).isValidCopyName(str2);
  c15 = isValidCopyNameResult;
  const intl4 = tmp18(tmp2[11]).intl;
  const items2 = [id, stringResult, guilds, stringResult1, setDestination];
  const tmp18Result = project(shareTicket[10]);
  const callback = obj.useCallback(() => {
    const obj2 = { key: ConjureRemixServerSheet, stackingBehavior: "stack", content: null };
    const obj3 = {
      sheetKey: ConjureRemixServerSheet,
      title,
      guilds,
      selectedGuildId: id,
      onPick(id) {
        return setDestination(id.id);
      },
      otherOption: null
    };
    const obj4 = { label: stringResult1, icon: null, selected: null, onPick: null };
    const obj = ActionSheetActionCreators;
    const tmp = ConjureServerPickerSheetDefault;
    obj4.icon = React5(TableRowIcon.TableRowIcon, { IconComponent: AppsIcon.AppsIcon });
    obj4.selected = null == id;
    obj4.onPick = function onPick() {
      return setDestination(project(shareTicket[8]).CONJURE_REMIX_LIBRARY);
    };
    obj3.otherOption = obj4;
    obj2.content = React5(tmp, obj3);
    obj.showActionSheet(obj2);
  }, items2);
  const items3 = [isValidCopyNameResult, id, "copy" === tmp5, str2, onRemixed, memo];
  const callback1 = obj.useCallback(guilds(function*() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
              guild(true);
              _undefined(null);
              if (closure_14) {
                const obj6 = { name: str2, copy: true };
                let obj7 = obj6;
              } else {
                obj7 = { name: str2 };
              }
              memo.confirm(id, obj7);
              c3 = num8;
              c4 = num8;
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
              let tmp60 = null;
              if (null != closure_129_0) {
                if (closure_129_0.ok) {
                  projectId = closure_129_0.projectId;
                  guildId = closure_129_0.guildId;
                  guild = guild.getGuild(guildId);
                  let name;
                  if (guild != tmp60) {
                    name = guild.name;
                  }
                  let _var = name;
                  if (name == tmp60) {
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
            tmp60 = closure_129_3;
            if (null != closure_129_3) {
              onRemixed(tmp2[13]).hideActionSheet(closure_1_10);
              const obj12 = onRemixed(tmp2[13]);
              _var(tmp2[17]).openConjureCopy(guildId, closure_129_3.appChannelId);
              c4 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
          }
          onRemixed(tmp2[13]).hideActionSheet(closure_1_10);
          closure_130_1(projectId, guildId);
          const obj4 = onRemixed(tmp2[13]);
        }
        c4 = 3;
      } catch (tmp54) {
        c4 = tmp;
        throw tmp54;
      }
    }
  }), items3);
  let obj2 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, footer: null, children: null };
  let obj3 = { title: null, subtitle: null };
  const intl5 = tmp18(tmp2[11]).intl;
  obj3.title = intl5.formatToPlainString(onRemixed(shareTicket[12]).vU1gB6, { projectName: project.name });
  const intl6 = tmp18(tmp2[11]).intl;
  obj3.subtitle = intl6.string(onRemixed(shareTicket[12]).PrV2rD);
  obj2.header = c8(project(shareTicket[19]).BottomSheetTitleHeader, obj3);
  const obj5 = { style: tmp14Result.footer, ref, onLayout, children: null };
  let obj6 = { bottom: true, style: tmp14Result.footerBody, children: null };
  let tmp28Result = null;
  if (null != tmp12) {
    let obj7 = { accessibilityRole: "alert", children: null };
    let obj8 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp12 };
    obj7.children = tmp28(tmp18(tmp2[21]).Text, obj8);
    tmp28Result = tmp28(tmp29, obj7);
  }
  const items4 = [tmp28Result, , ];
  let tmp28Result3 = null;
  if (null != tmp10) {
    let obj9 = { accessibilityLiveRegion: "polite", children: null };
    let obj10 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl7 = tmp18(tmp2[11]).intl;
    let obj11 = { projectName: str2.trim(), server: tmp10 };
    obj10.children = intl7.formatToPlainString(tmp(tmp2[12]).O25g5n, obj11);
    obj9.children = tmp28(tmp18(tmp2[21]).Text, obj10);
    tmp28Result3 = tmp28(tmp29, obj9);
  }
  items4[1] = tmp28Result3;
  let obj4 = { projectName: project.name };
  const stringResult3 = intl4.string(onRemixed(shareTicket[12]).XWgAfc);
  items4[2] = c8(project(shareTicket[22]).Button, { variant: "primary", size: "md", text: intl4.string(onRemixed(shareTicket[12]).XWgAfc), loading: tmp8, disabled: !isValidCopyNameResult, onPress: callback1 });
  obj6.children = items4;
  obj5.children = c9(project(shareTicket[20]).SafeAreaPaddingView, obj6);
  obj2.footer = c8(str2, obj5);
  const obj13 = { style: tmp14Result.list, children: null };
  const obj14 = { label: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl8 = tmp18(tmp2[11]).intl;
  obj14.label = intl8.string(onRemixed(shareTicket[12])["7gI+sw"]);
  obj14.value = str2;
  obj14.onChange = tmp6[1];
  obj14.maxLength = project(shareTicket[24]).MAX_PROJECT_NAME_LENGTH;
  obj14.disabled = tmp8;
  const items5 = [c8(project(shareTicket[23]).TextInput, obj14), , ];
  const obj15 = { title: stringResult, hasIcons: true, children: null };
  if (null != destinationGuild) {
    const obj16 = { guild: destinationGuild, size: tmp18(tmp2[27]).GuildIconSizes.SMALL_32 };
    let tmp28Result4 = tmp28(tmp(tmp2[27]), obj16);
    const tmpResult = tmp(tmp2[27]);
  } else {
    const obj17 = { IconComponent: tmp18(tmp2[16]).AppsIcon };
    tmp28Result4 = tmp28(tmp18(tmp2[15]).TableRowIcon, obj17);
  }
  const obj18 = { icon: tmp28Result4, label: null, labelLineClamp: 1, arrow: true, disabled: null, onPress: null };
  let name;
  if (destinationGuild != null) {
    name = destinationGuild.name;
  }
  if (name == null) {
    name = stringResult1;
  }
  obj18.label = name;
  obj18.disabled = tmp8;
  obj18.onPress = callback;
  obj15.children = c8(project(shareTicket[26]).TableRow, obj18);
  items5[1] = c8(project(shareTicket[25]).TableRowGroup, obj15);
  const obj19 = {
    title: stringResult2,
    hasIcons: true,
    value: tmp5,
    onChange(arg0) {
      return _undefined(arg0);
    },
    accessibilityLabel: stringResult2,
    children: null
  };
  const obj20 = { value: "copy", icon: null, label: null, subLabel: null, disabled: null };
  let obj12 = { variant: "primary", size: "md", text: intl4.string(onRemixed(shareTicket[12]).XWgAfc), loading: tmp8, disabled: !isValidCopyNameResult, onPress: callback1 };
  obj20.icon = c8(project(shareTicket[15]).TableRowIcon, { IconComponent: project(shareTicket[30]).CopyIcon });
  const intl9 = tmp18(tmp2[11]).intl;
  obj20.label = intl9.string(onRemixed(shareTicket[12]).sx5jYE);
  const intl10 = tmp18(tmp2[11]).intl;
  obj20.subLabel = intl10.string(onRemixed(shareTicket[12])["S+Fcvd"]);
  obj20.disabled = tmp8;
  const items6 = [c8(project(shareTicket[29]).TableRadioRow, obj20), ];
  const obj22 = { value: "remix", icon: null, label: null, subLabel: null, disabled: null };
  const obj21 = { IconComponent: project(shareTicket[30]).CopyIcon };
  obj22.icon = c8(project(shareTicket[15]).TableRowIcon, { IconComponent: project(shareTicket[31]).MagicWandIcon });
  const intl11 = tmp18(tmp2[11]).intl;
  obj22.label = intl11.string(onRemixed(shareTicket[12]).ZdvGpk);
  const intl12 = tmp18(tmp2[11]).intl;
  obj22.subLabel = intl12.string(onRemixed(shareTicket[12]).EIh4da);
  obj22.disabled = tmp8;
  items6[1] = c8(project(shareTicket[29]).TableRadioRow, obj22);
  obj19.children = items6;
  items5[2] = c9(project(shareTicket[28]).TableRadioGroup, obj19);
  obj13.children = items5;
  obj2.children = c9(str2, obj13);
  return c8(project(shareTicket[18]).ActionSheet, obj2);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";