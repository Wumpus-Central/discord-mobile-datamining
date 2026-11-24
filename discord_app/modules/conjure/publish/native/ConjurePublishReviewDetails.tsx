// === Module 18309: ConjurePublishReviewDetails ===

// Module 18309 (ConjurePublishReviewDetails)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4979 */;
import Text_Text from "Text/Text" /* 5508 */;
import Pressables from "Pressables" /* 6026 */;
import Badge from "Badge" /* 6033 */;
import AppsLockIcon2 from "AppsLockIcon" /* 7045 */;
import FormCheckbox from "FormCheckbox" /* 7056 */;
import noop from "module_19" /* 19 */;

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
    children: null
  };
  items = [React4(FormCheckbox.FormCheckbox, { checked: isPrivate }), ];
  const obj3 = { variant: "body-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef4192.RSyIc9);
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
  items = [React4(icon, { size: "xs", color: nativeDefault.colors.ICON_MUTED }), React4(Text_Text.Text, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, style: tmp2.rowLabel, children: label }), , ];
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
let obj = { screen_capture: fn(13181).ScreenIcon, connect_user_to_voice: fn(7041).VoiceNormalIcon };
let obj2 = { app_channel: fn(7046).AppsIcon };
obj2[fn(6809).ConjureSupportedSurface.BOT] = fn(12121).RobotIcon;
obj2[fn(6809).ConjureSupportedSurface.ACTIVITY] = fn(18037).ActivitiesIcon;
obj2[fn(6809).ConjureSupportedSurface.VOICE_CHANNEL] = fn(7041).VoiceNormalIcon;
obj2[fn(6809).ConjureSupportedSurface.PROFILE_WIDGET] = fn(18310).BadgeIcon;
obj2[fn(6809).ConjureSupportedSurface.AUTOMOD] = fn(9937).ShieldIcon;
obj2[fn(6809).ConjureSupportedSurface.OVERLAY] = fn(18312).WindowTopIcon;
const createStyles = fn(4917);
let obj4 = { section: { gap: nativeDefault.space.PX_4 }, row: null, rowLabel: null, rowTrailing: null, privateCheckbox: null, readOnlyIcon: null, readOnlyText: null };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj4.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 };
obj4.rowLabel = { flexShrink: 1 };
obj4.rowTrailing = { marginStart: "auto" };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 };
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
  let tmp6 = null;
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
  if (review.managedCopy) {
    obj = { projectId: review.projectId };
    tmp6 = closure_4(appChannelsPrivate(18314), obj);
  }
  items = [tmp6, , , , , ];
  obj2 = { children: null };
  if (review.editable) {
    const obj3 = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: review.saving,
      onChange: identity.setIcon,
      onError(text) {
          if (null != text) {
            obj2 = { text, variant: "critical" };
            appChannelsPrivate(5599).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
            obj = appChannelsPrivate(5599);
          }
        },
      onConjure: review.onConjureIcon
    };
    const items1 = [closure_4(appChannelsPrivate(18316).ConjureAppIconTile, obj3), , ];
    const obj4 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
    let intl = appChannelsPrivate(1112).intl;
    obj4.label = intl.string(appChannelsPrivate(4192).knevPu);
    ({ name: obj9.value, setName: obj9.onChange } = review);
    obj4.maxLength = appChannelsPrivate(6809).MAX_PROJECT_NAME_LENGTH;
    ({ saving: obj9.disabled, nameError } = review);
    obj4.errorMessage = nameError;
    items1[1] = closure_4(appChannelsPrivate(7148).TextInput, obj4);
    const obj5 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl2 = tmp21(1112).intl;
    obj5.label = intl2.string(appChannelsPrivate(4192).ynaGa1);
    const intl3 = tmp21(1112).intl;
    obj5.placeholder = intl3.string(appChannelsPrivate(4192)["I+3UTL"]);
    ({ description: obj10.value, setDescription: obj10.onChange } = identity);
    obj5.maxLength = appChannelsPrivate(6809).MAX_APP_DESCRIPTION_LENGTH;
    obj5.disabled = review.saving;
    items1[2] = closure_4(appChannelsPrivate(7314).TextArea, obj5);
    obj2.children = items1;
    let tmp4Result = closure_6(closure_5, obj2);
    let tmp16 = tmp21;
    let tmp15 = closure_4;
  } else {
    let tmp10 = null;
    if (null != identity.iconURL) {
      const obj6 = { source: null, style: null, resizeMode: "cover" };
      const obj7 = { uri: identity.iconURL };
      obj6.source = obj7;
      obj6.style = tmp.readOnlyIcon;
      tmp10 = closure_4(appChannelsPrivate(5604), obj6);
    }
    const items2 = [tmp10, ];
    const obj8 = { style: tmp.readOnlyText, children: null };
    tmp15 = closure_4;
    tmp16 = appChannelsPrivate;
    const obj11 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: review.name };
    const items3 = [closure_4(appChannelsPrivate(5508).Text, obj11), ];
    let tmp15Result = null;
    if ("" !== identity.description) {
      const obj13 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 3, children: identity.description };
      tmp15Result = tmp15(tmp16(5508).Text, obj13);
    }
    items3[1] = tmp15Result;
    obj8.children = items3;
    items2[1] = closure_6(View, obj8);
    obj2.children = items2;
    tmp4Result = closure_6(closure_5, obj2);
  }
  items[1] = tmp4Result;
  const obj14 = { title: null, rows: null };
  const intl4 = tmp16(1112).intl;
  obj14.title = intl4.string(appChannelsPrivate(4192).BqNMms);
  obj14.rows = mapped;
  items[2] = tmp15(RowSection, obj14);
  let shared;
  if (appChannelsPrivate != null) {
    shared = appChannelsPrivate.shared;
  }
  let tmp15Result2 = null;
  if (true === shared) {
    const obj15 = { label: null, checked: null, onToggle: null };
    const intl5 = tmp16(1112).intl;
    obj15.label = intl5.string(tmp25(4192).Td1mlg);
    ({ isPrivate: obj12.checked, setPrivate: obj12.onToggle } = appChannelsPrivate);
    tmp15Result2 = tmp15(tmp16(14554).Checkbox, obj15);
  }
  const obj29 = { children: null };
  items[3] = tmp15Result2;
  const obj30 = { title: null, rows: null };
  const intl6 = tmp16(1112).intl;
  obj30.title = intl6.string(appChannelsPrivate(4192).LnqeFd);
  const devicePermissions = review.devicePermissions;
  obj30.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_7[item], label: null };
    const intl = appChannelsPrivate(1112).intl;
    obj.label = intl.string(appChannelsPrivate(18293).CONJURE_REVIEW_PERMISSION_LABELS[item]);
    return closure_1_4(ContentRow, obj, item);
  });
  items[4] = tmp15(RowSection, obj30);
  items[5] = tmp15(appChannelsPrivate(18320), { remix: review.remix, disabled: review.saving });
  obj29.children = items;
  return closure_6(closure_5, obj29);
};