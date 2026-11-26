// === Module 18494: ConjureViewPlacementSection ===

// Module 18494 (ConjureViewPlacementSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import TrashIcon from "TrashIcon" /* 5750 */;
import TextInput from "TextInput" /* 7274 */;
import ConjureViewsTypes from "ConjureViewsTypes" /* 7708 */;
import IconButton from "IconButton" /* 7944 */;
import ChevronLargeDownIcon from "ChevronLargeDownIcon" /* 14795 */;
import noop from "module_19" /* 19 */;

require = fn;
function ViewPicker(label) {
  label = label.label;
  const choices = label.choices;
  value = label.value;
  dependencyMap = value;
  const onChange = label.onChange;
  const disabled = label.disabled;
  const tmp = closure_8();
  items = [choices, value, onChange];
  const memo = onChange.useMemo(() => {
    const found = choices.filter((missing) => !missing.missing);
    return found.map((label) => {
      const obj = { label: label.label, trailingIndicator: null, action: null };
      let CheckmarkLargeIcon;
      if (label.value === closure_2) {
        CheckmarkLargeIcon = label(closure_1_2[10]).CheckmarkLargeIcon;
      }
      obj.trailingIndicator = CheckmarkLargeIcon;
      obj.action = function action() {
        return onChange(label.value);
      };
      return obj;
    });
  }, items);
  label = choices.find((value) => value.value === value);
  let obj = { style: tmp.pickerRow, children: null };
  let str = "text-strong";
  if (label.missing) {
    str = "text-feedback-critical";
  }
  const items1 = [
    label(label(5634).Text, { variant: "body-sm/medium", color: str, style: tmp.pickerLabel, children: label }),
    label(label(9067).ContextMenu, {
      items: memo,
      title: label,
      enabled: !disabled,
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: null, icon: null, iconPosition: "end", disabled: null, accessibilityHint: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null };
        let str;
        if (label != null) {
          str = label.label;
        }
        if (str == null) {
          str = "";
        }
        obj.text = str;
        obj.icon = hasOwnProperty(ChevronLargeDownIcon.ChevronLargeDownIcon, { size: "xs" });
        obj.disabled = disabled;
        obj.accessibilityHint = label;
        obj.onPress = onPress;
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return hasOwnProperty(components_Button_Button.Button, obj);
      }
    })
  ];
  obj.children = items1;
  return closure_6(disabled, obj);
}
function AppChannel(row) {
  row = row.row;
  const placement = row.placement;
  const disabled = row.disabled;
  const tmp = closure_8();
  const trimmed = row.name.trim();
  if ("" === trimmed) {
    const intl = util.intl;
    let stringResult = intl.string(_modDef4245.xI4N6Q);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "#" + trimmed;
  }
  items = [placement, row.key];
  const obj = { style: tmp.channel, children: null };
  const callback = noop.useCallback((arg0) => placement.setAppChannelView(row.key, arg0), items);
  const obj2 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(_modDef4245.RXXA5n);
  obj2.value = row.name;
  obj2.onChange = function onChange(arg0) {
    return placement.renameAppChannel(row.key, arg0);
  };
  obj2.maxLength = ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH;
  let tmp15 = disabled;
  if (!disabled) {
    tmp15 = null != row.existing;
  }
  obj2.disabled = tmp15;
  obj2.errorMessage = placement.channelError(row.key);
  const items1 = [hasOwnProperty(TextInput.TextInput, obj2), ];
  const obj3 = { style: tmp.channelFooter, children: null };
  const obj4 = { style: tmp.channelPicker, children: null };
  const obj5 = { label: null, choices: null, value: null, missing: null, onChange: null, disabled: null };
  const intl3 = util.intl;
  obj5.label = intl3.formatToPlainString(_modDef4245.oAyECS, { channel: stringResult });
  obj5.choices = placement.channelChoices(row.view);
  obj5.value = row.view;
  obj5.missing = placement.isMissing(row.view);
  obj5.onChange = callback;
  obj5.disabled = disabled;
  obj4.children = hasOwnProperty(ViewPicker, obj5);
  const items2 = [hasOwnProperty(View, obj4), ];
  const obj6 = { variant: "tertiary", size: "sm", icon: hasOwnProperty(TrashIcon.TrashIcon, { size: "sm" }), disabled, accessibilityLabel: null, onPress: null };
  const intl4 = util.intl;
  obj6.accessibilityLabel = intl4.formatToPlainString(_modDef4245.B3mNv4, { channel: stringResult });
  obj6.onPress = function onPress() {
    return placement.removeAppChannel(row.key);
  };
  items2[1] = hasOwnProperty(IconButton.IconButton, obj6);
  obj3.children = items2;
  items1[1] = timestampProducer(View, obj3);
  obj.children = items1;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6, Fragment: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
let obj2 = { section: { gap: nativeDefault.space.PX_12 }, heading: null, pickerRow: null, pickerLabel: null, appChannels: null, channel: null, channelFooter: null, channelPicker: null, addRow: null, addHint: null };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.heading = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.pickerRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16, minHeight: nativeDefault.space.PX_32 };
obj2.pickerLabel = { flexShrink: 1, minWidth: "40%" };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16, minHeight: nativeDefault.space.PX_32 };
obj2.appChannels = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj2.channel = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj7 = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.channelFooter = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.channelPicker = { flex: 1 };
let obj8 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.addRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.addHint = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/views/native/ConjureViewPlacementSection.tsx");

export default function ConjureViewPlacementSection(placement) {
  placement = placement.placement;
  let disabled = placement.disabled;
  const tmp = closure_8();
  const draft = placement.draft;
  const obj = { style: tmp.section, children: null };
  const obj2 = { style: tmp.heading, children: null };
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", accessibilityRole: "header", children: null };
  const intl = placement(1112).intl;
  obj3.children = intl.string(disabled(4245)["zI+Y/G"]);
  items = [closure_5(placement(5634).Text, obj3), ];
  const obj4 = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl2 = placement(1112).intl;
  obj4.children = intl2.string(disabled(4245).yUT1lm);
  items[1] = closure_5(placement(5634).Text, obj4);
  obj2.children = items;
  const items1 = [closure_6(View, obj2), , , , ];
  let tmp4Result = null;
  if (null != placement.missingNotice) {
    const obj5 = { variant: "body-sm/medium", color: "text-feedback-critical", children: placement.missingNotice };
    tmp4Result = closure_5(tmp5(5634).Text, obj5);
  }
  items1[1] = tmp4Result;
  const obj6 = { label: null, choices: null, value: null, missing: null, onChange: null, disabled: null };
  const intl3 = tmp5(1112).intl;
  obj6.label = intl3.string(disabled(4245).ZWevfx);
  obj6.choices = placement.surfaceChoices(draft.activity);
  obj6.value = draft.activity;
  obj6.missing = placement.isMissing(draft.activity);
  obj6.onChange = placement.setActivity;
  obj6.disabled = disabled;
  items1[2] = closure_5(ViewPicker, obj6);
  if (placement.personal) {
    const obj7 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl9 = tmp5(1112).intl;
    obj7.children = intl9.string(tmp7(4245).Tg4m1p);
    let tmp4Result5 = closure_5(tmp5(5634).Text, obj7);
  } else {
    const obj8 = { label: null, choices: null, value: null, missing: null, onChange: null, disabled: null };
    const intl4 = tmp5(1112).intl;
    obj8.label = intl4.string(tmp7(4245).gRNv14);
    obj8.choices = placement.surfaceChoices(draft.voiceChannel);
    obj8.value = draft.voiceChannel;
    obj8.missing = placement.isMissing(draft.voiceChannel);
    obj8.onChange = placement.setVoiceChannel;
    obj8.disabled = disabled;
    const items2 = [closure_5(ViewPicker, obj8), ];
    const obj9 = { style: tmp.appChannels, children: null };
    const obj10 = { variant: "body-sm/medium", color: "text-default", accessibilityRole: "header", children: null };
    const intl5 = tmp5(1112).intl;
    obj10.children = intl5.string(tmp7(4245)["8NKFKk"]);
    const items3 = [closure_5(tmp5(5634).Text, obj10), , , , ];
    let tmp4Result6 = null;
    if (0 === draft.appChannels.length) {
      const obj11 = { variant: "body-xs/normal", color: "text-muted", children: null };
      const intl6 = tmp5(1112).intl;
      obj11.children = intl6.string(tmp7(4245)["62VVHK"]);
      tmp4Result6 = closure_5(tmp5(5634).Text, obj11);
    }
    items3[1] = tmp4Result6;
    const appChannels = draft.appChannels;
    items3[2] = appChannels.map((row) => hasOwnProperty(AppChannel, { row, placement, disabled }, row.key));
    let tmp4Result7 = null;
    if (placement.hasExistingAppChannel) {
      const obj12 = { variant: "body-xs/normal", color: "text-muted", children: null };
      const intl7 = tmp5(1112).intl;
      obj12.children = intl7.string(tmp7(4245).AMgl7V);
      tmp4Result7 = closure_5(tmp5(5634).Text, obj12);
    }
    items3[3] = tmp4Result7;
    const obj13 = { style: tmp.addRow, children: null };
    const obj14 = { variant: "secondary", size: "sm", text: null, icon: null, disabled: null, onPress: null };
    const intl8 = tmp5(1112).intl;
    obj14.text = intl8.string(tmp7(4245)["3g7BVY"]);
    obj14.icon = closure_5(tmp5(11268).PlusSmallIcon, { size: "xs" });
    if (!disabled) {
      disabled = !placement.canAddAppChannel;
    }
    const obj15 = { children: null };
    obj14.disabled = disabled;
    obj14.onPress = placement.addAppChannel;
    const items4 = [closure_5(tmp5(5641).Button, obj14), ];
    const obj16 = { variant: "body-xs/normal", color: "text-muted", style: tmp.addHint, children: placement.appChannelLimitHint };
    items4[1] = closure_5(tmp5(5634).Text, obj16);
    obj13.children = items4;
    items3[4] = closure_6(View, obj13);
    obj9.children = items3;
    items2[1] = closure_6(View, obj9);
    obj15.children = items2;
    tmp4Result5 = closure_6(closure_7, obj15);
  }
  items1[3] = tmp4Result5;
  let tmp4Result8 = null;
  if (null != placement.unplacedNotice) {
    const obj17 = { variant: "body-sm/normal", color: "text-feedback-warning", children: placement.unplacedNotice };
    tmp4Result8 = closure_5(tmp5(5634).Text, obj17);
  }
  items1[4] = tmp4Result8;
  obj.children = items1;
  return closure_6(View, obj);
};