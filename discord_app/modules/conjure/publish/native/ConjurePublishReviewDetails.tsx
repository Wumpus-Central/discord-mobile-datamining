// discord_app/modules/conjure/publish/native/ConjurePublishReviewDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import Badge from "../../../../design/components/Badge/native/Badge.native.tsx";
import AppsLockIcon2 from "../../../../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function RowSection(rows) {
  rows = rows.rows;
  let tmp2 = null;
  if (0 !== rows.length) {
    obj = { style: tmp.section, children: null };
    obj2 = { variant: "body-sm/medium", color: "text-subtle", accessibilityRole: "header", children: rows.title };
    items = [React4(Text_Text.Text, obj2), rows];
    obj.children = items;
    tmp2 = timestampProducer(View, obj);
  }
  return tmp2;
}
function PrivateCheckbox(appChannelsPrivate) {
  appChannelsPrivate = appChannelsPrivate.appChannelsPrivate;
  const isPrivate = appChannelsPrivate.isPrivate;
  const setPrivate = appChannelsPrivate.setPrivate;
  const tmp = closure_9();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: isPrivate });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj2 = {
    style: tmp.privateCheckbox,
    accessibilityRole,
    accessibilityState,
    onPress() {
      return setPrivate(!isPrivate);
    },
    children: null,
  };
  items = [React4(FormCheckbox.FormCheckbox, { checked: isPrivate })];
  const obj3 = { variant: "body-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef4245.RSyIc9);
  items[1] = React4(Text_Text.Text, obj3);
  obj2.children = items;
  return timestampProducer(Pressables.PressableOpacity, obj2);
}
function ContentRow(isNew) {
  let flag = isNew.isNew;
  ({ icon, label } = isNew);
  if (flag === undefined) {
    flag = false;
  }
  let trailing = isNew.trailing;
  if (trailing === undefined) {
    trailing = null;
  }
  const tmp2 = closure_9();
  obj = { style: tmp2.row, children: null };
  items = [
    React4(icon, { size: "xs", color: nativeDefault.colors.ICON_MUTED }),
    React4(Text_Text.Text, {
      variant: "body-sm/medium",
      color: "text-strong",
      lineClamp: 1,
      style: tmp2.rowLabel,
      children: label,
    }),
    ,
  ];
  let tmp5Result = null;
  if (flag) {
    tmp5Result = React4(Badge.Badge, { type: "new" });
  }
  items[2] = tmp5Result;
  let tmp5Result2 = null;
  if (null != trailing) {
    const obj4 = { style: tmp2.rowTrailing, children: trailing };
    tmp5Result2 = React4(View, obj4);
  }
  items[3] = tmp5Result2;
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { screen_capture: fn(13364).ScreenIcon, connect_user_to_voice: fn(7167).VoiceNormalIcon };
let obj2 = { app_channel: fn(7172).AppsIcon };
obj2[fn(6935).ConjureSupportedSurface.BOT] = fn(12278).RobotIcon;
obj2[fn(6935).ConjureSupportedSurface.ACTIVITY] = fn(18215).ActivitiesIcon;
obj2[fn(6935).ConjureSupportedSurface.VOICE_CHANNEL] = fn(7167).VoiceNormalIcon;
obj2[fn(6935).ConjureSupportedSurface.PROFILE_WIDGET] = fn(18491).BadgeIcon;
obj2[fn(6935).ConjureSupportedSurface.AUTOMOD] = fn(10079).ShieldIcon;
obj2[fn(6935).ConjureSupportedSurface.OVERLAY] = fn(18493).WindowTopIcon;
const createStyles = fn(5043);
let obj4 = {
  section: { gap: nativeDefault.space.PX_4 },
  row: null,
  rowLabel: null,
  rowTrailing: null,
  privateCheckbox: null,
  readOnlyIcon: null,
  readOnlyText: null,
};
let obj5 = { gap: nativeDefault.space.PX_4 };
obj4.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
};
obj4.rowLabel = { flexShrink: 1 };
obj4.rowTrailing = { marginStart: "auto" };
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
};
obj4.privateCheckbox = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.md };
obj4.readOnlyIcon = size;
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4.readOnlyText = { gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj4);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishReviewDetails.tsx");

export default function ConjurePublishReviewDetails(review) {
  review = review.review;
  appChannelsPrivate = undefined;
  const tmp = closure_9();
  ({ identity, appChannelsPrivate } = review);
  let tmp2 = null;
  if (null != appChannelsPrivate) {
    tmp2 = null;
    if (!appChannelsPrivate.shared) {
      tmp2 = appChannelsPrivate;
    }
  }
  appChannelsPrivate = tmp2;
  const includes = review.includes;
  let shared;
  const mapped = includes.map((icon) => {
    if ("app_channel" === icon.icon) {
      if (icon.creates) {
        let isPrivate;
        if (appChannelsPrivate != null) {
          isPrivate = appChannelsPrivate.isPrivate;
        }
        if (true === isPrivate) {
          let AppsLockIcon = AppsLockIcon2.AppsLockIcon;
        }
        obj = { icon: AppsLockIcon, label: null, isNew: null, trailing: null };
        ({ label: obj.label, isNew: obj.isNew } = icon);
        let tmpResult = null;
        if (icon.creates) {
          tmpResult = null;
          if (null != appChannelsPrivate) {
            obj2 = { appChannelsPrivate: tmp9 };
            tmpResult = React4(PrivateCheckbox, obj2);
          }
        }
        obj.trailing = tmpResult;
        return React4(tmp2, obj, icon.key);
      }
    }
    AppsLockIcon = obj2[icon.icon];
  });
  if (appChannelsPrivate != null) {
    shared = appChannelsPrivate.shared;
  }
  let tmp5 = null;
  if (true === shared) {
    obj = { label: null, checked: null, onToggle: null };
    let intl = appChannelsPrivate(1112).intl;
    obj.label = intl.string(appChannelsPrivate(4245).Td1mlg);
    ({ isPrivate: obj.checked, setPrivate: obj.onToggle } = appChannelsPrivate);
    tmp5 = closure_4(appChannelsPrivate(12482).Checkbox, obj);
  }
  let tmp12 = null;
  if (review.managedCopy) {
    obj2 = { projectId: review.projectId };
    tmp12 = closure_4(appChannelsPrivate(18495), obj2);
  }
  items = [tmp12, , , , , , ,];
  const obj3 = { children: null };
  if (review.editable) {
    const obj4 = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: review.saving,
      onChange: identity.setIcon,
      onError(text) {
        if (null != text) {
          obj2 = { text, variant: "critical" };
          appChannelsPrivate(5725).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          obj = appChannelsPrivate(5725);
        }
      },
      onConjure: review.onConjureIcon,
    };
    const items1 = [closure_4(appChannelsPrivate(18497).ConjureAppIconTile, obj4), ,];
    const obj5 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
    const intl2 = appChannelsPrivate(1112).intl;
    obj5.label = intl2.string(appChannelsPrivate(4245).knevPu);
    ({ name: obj10.value, setName: obj10.onChange } = review);
    obj5.maxLength = appChannelsPrivate(6935).MAX_PROJECT_NAME_LENGTH;
    ({ saving: obj10.disabled, nameError } = review);
    obj5.errorMessage = nameError;
    items1[1] = closure_4(appChannelsPrivate(7274).TextInput, obj5);
    const obj6 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl3 = tmp28(1112).intl;
    obj6.label = intl3.string(appChannelsPrivate(4245).ynaGa1);
    const intl4 = tmp28(1112).intl;
    obj6.placeholder = intl4.string(appChannelsPrivate(4245)["I+3UTL"]);
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    obj6.maxLength = appChannelsPrivate(6935).MAX_APP_DESCRIPTION_LENGTH;
    obj6.disabled = review.saving;
    items1[2] = closure_4(appChannelsPrivate(7440).TextArea, obj6);
    obj3.children = items1;
    let tmp10Result = closure_6(closure_5, obj3);
    let tmp26 = tmp28;
    let tmp21 = closure_4;
  } else {
    let tmp16 = null;
    if (null != identity.iconURL) {
      const obj7 = { source: null, style: null, resizeMode: "cover" };
      const obj8 = { uri: identity.iconURL };
      obj7.source = obj8;
      obj7.style = tmp.readOnlyIcon;
      tmp16 = closure_4(appChannelsPrivate(5730), obj7);
    }
    const items2 = [tmp16];
    const obj9 = { style: tmp.readOnlyText, children: null };
    tmp21 = closure_4;
    const obj13 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: review.name };
    const items3 = [closure_4(appChannelsPrivate(5634).Text, obj13)];
    let tmp21Result = null;
    if ("" !== identity.description) {
      const obj14 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 3, children: identity.description };
      tmp21Result = tmp21(tmp22(5634).Text, obj14);
    }
    items3[1] = tmp21Result;
    obj9.children = items3;
    items2[1] = closure_6(View, obj9);
    obj3.children = items2;
    tmp10Result = closure_6(closure_5, obj3);
    tmp26 = tmp22;
  }
  items[1] = tmp10Result;
  let tmp21Result2 = null;
  if (null != review.placement) {
    ({ placement: obj12.placement, saving: obj12.disabled } = review);
    tmp21Result2 = tmp21(appChannelsPrivate(18501), { placement: null, disabled: null });
    const obj15 = { placement: null, disabled: null };
  }
  items[2] = tmp21Result2;
  let tmp33 = null;
  if (null != review.placement) {
    tmp33 = tmp5;
  }
  items[3] = tmp33;
  const obj16 = { title: null, rows: null };
  const intl5 = tmp26(1112).intl;
  obj16.title = intl5.string(appChannelsPrivate(4245).BqNMms);
  obj16.rows = mapped;
  items[4] = tmp21(RowSection, obj16);
  let tmp36 = null;
  if (null == review.placement) {
    tmp36 = tmp5;
  }
  const obj31 = { children: null };
  items[5] = tmp36;
  const obj32 = { title: null, rows: null };
  const intl6 = tmp26(1112).intl;
  obj32.title = intl6.string(appChannelsPrivate(4245).LnqeFd);
  const devicePermissions = review.devicePermissions;
  obj32.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_7[item], label: null };
    const intl = appChannelsPrivate(1112).intl;
    obj.label = intl.string(appChannelsPrivate(18471).CONJURE_REVIEW_PERMISSION_LABELS[item]);
    return closure_1_4(ContentRow, obj, item);
  });
  items[6] = tmp21(RowSection, obj32);
  items[7] = tmp21(appChannelsPrivate(18502), { remix: review.remix, disabled: review.saving });
  obj31.children = items;
  return closure_6(closure_5, obj31);
}
