// === Module 14567: ConjureFirstShareReview ===

// Module 14567 (ConjureFirstShareReview)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5372 */;
import Text_Text from "Text/Text" /* 5923 */;
import Pressables from "Pressables" /* 7438 */;
import FormCheckbox from "FormCheckbox" /* 7744 */;
import noop from "module_19" /* 19 */;

require = fn;
function SectionTitle(children) {
  const tmp = closure_9();
  return React4(Text_Text.Text, { variant: "body-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_9().sectionTitle, children: children.title });
}
function RowSection(title) {
  ({ rows, following } = title);
  if (following === undefined) {
    following = false;
  }
  let tmp3Result = null;
  if (0 !== rows.length) {
    if (following) {
      following = tmp.followingSection;
    }
    obj = { style: following, children: null };
    obj2 = { title: title.title };
    items = [React4(SectionTitle, obj2), rows];
    obj.children = items;
    tmp3Result = timestampProducer(View, obj);
  }
  return tmp3Result;
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
  const obj3 = { variant: "body-md/medium", color: "text-subtle", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef4133.RSyIc9);
  items[1] = React4(Text_Text.Text, obj3);
  obj2.children = items;
  return timestampProducer(Pressables.PressableOpacity, obj2);
}
function ContentRow(trailing) {
  trailing = trailing.trailing;
  ({ icon, label } = trailing);
  if (trailing === undefined) {
    trailing = null;
  }
  const tmp2 = closure_9();
  obj = { style: tmp2.row, children: null };
  items = [React4(icon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }), React4(Text_Text.Text, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp2.rowLabel, children: label }), trailing];
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { screen_capture: fn(10522).ScreenIcon, connect_user_to_voice: fn(7442).VoiceNormalIcon };
let obj2 = {};
obj2[fn(7026).ConjureSupportedSurface.BOT] = fn(12837).RobotIcon;
obj2[fn(7026).ConjureSupportedSurface.ACTIVITY] = fn(14568).ActivitiesIcon;
obj2[fn(7026).ConjureSupportedSurface.VOICE_CHANNEL] = fn(7442).VoiceNormalIcon;
obj2[fn(7026).ConjureSupportedSurface.PROFILE_WIDGET] = fn(14570).BadgeIcon;
obj2[fn(7026).ConjureSupportedSurface.AUTOMOD] = fn(10751).ShieldIcon;
obj2[fn(7026).ConjureSupportedSurface.OVERLAY] = fn(7448).GameControllerIcon;
const createStyles = fn(5310);
let obj4 = { sectionTitle: { marginBottom: nativeDefault.space.PX_4 }, followingSection: null, row: null, rowLabel: null, privateCheckbox: null };
const obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj4.followingSection = { marginTop: -nativeDefault.space.PX_8 };
let obj6 = { marginTop: -nativeDefault.space.PX_8 };
obj4.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj4.rowLabel = { flex: 1 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj4.privateCheckbox = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareReview.tsx");

export default function ConjureFirstShareReview(onConjure) {
  const review = onConjure.review;
  let AppsIcon;
  appChannelsPrivate = undefined;
  ({ identity, appChannelsPrivate } = review);
  let isPrivate;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = AppsIcon(8111).AppsLockIcon;
    let tmp4 = AppsIcon;
  } else {
    AppsIcon = AppsIcon(8112).AppsIcon;
    tmp4 = AppsIcon;
  }
  let tmp8 = null;
  if (review.channelNames.length <= 1) {
    tmp8 = appChannelsPrivate;
  }
  appChannelsPrivate = tmp8;
  const channelNames = review.channelNames;
  items = [
    ...channelNames.map((label) => {
      obj = { icon: AppsIcon, label, trailing: null };
      let tmpResult = null;
      if (null != appChannelsPrivate) {
        obj2 = { appChannelsPrivate: tmp3 };
        tmpResult = React4(PrivateCheckbox, obj2);
      }
      obj.trailing = tmpResult;
      return React4(ContentRow, obj, "channel:" + label);
    }),
    ...components.map((label) => {
      const surface = label.surface;
      return closure_1_4(ContentRow, { icon: obj2[surface], label: label.label }, surface);
    })
  ];
  components = review.components;
  const items1 = [
    closure_4(tmp4(14432).ConjureAppIconTile, {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: review.saving,
      onChange: identity.setIcon,
      onError(text) {
        if (null != text) {
          obj2 = { text, variant: "critical" };
          appChannelsPrivate(6009).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          obj = appChannelsPrivate(6009);
        }
      },
      onConjure: onConjure.onConjureIcon
    }),
  ,
  ,
  ,
  ,

  ];
  const obj4 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
  let intl = tmp4(1113).intl;
  obj4.label = intl.string(appChannelsPrivate(4133).knevPu);
  ({ name: obj2.value, setName: obj2.onChange } = review);
  obj4.maxLength = tmp4(7026).MAX_PROJECT_NAME_LENGTH;
  ({ saving: obj2.disabled, nameError } = review);
  obj4.errorMessage = nameError;
  items1[1] = closure_4(tmp4(7629).TextInput, obj4);
  const obj6 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = tmp4(1113).intl;
  obj6.label = intl2.string(appChannelsPrivate(4133).ynaGa1);
  const intl3 = tmp4(1113).intl;
  obj6.placeholder = intl3.string(appChannelsPrivate(4133)["I+3UTL"]);
  ({ description: obj3.value, setDescription: obj3.onChange } = identity);
  obj6.maxLength = tmp4(7026).MAX_APP_DESCRIPTION_LENGTH;
  obj6.disabled = review.saving;
  items1[2] = closure_4(tmp4(7869).TextArea, obj6);
  const obj7 = { title: null, rows: null };
  const intl4 = tmp4(1113).intl;
  obj7.title = intl4.string(appChannelsPrivate(4133).BqNMms);
  obj7.rows = items;
  items1[3] = closure_4(RowSection, obj7);
  let tmp11Result = null;
  if (review.channelNames.length > 1) {
    tmp11Result = null;
    if (null != appChannelsPrivate) {
      const obj13 = { label: null, checked: null, onToggle: null };
      const intl5 = tmp4(1113).intl;
      obj13.label = intl5.string(tmp12(4133).Td1mlg);
      ({ isPrivate: obj5.checked, setPrivate: obj5.onToggle } = appChannelsPrivate);
      tmp11Result = closure_4(tmp4(14572).Checkbox, obj13);
    }
  }
  const obj14 = { children: null };
  items1[4] = tmp11Result;
  const obj15 = { title: null, following: null, rows: null };
  const intl6 = tmp4(1113).intl;
  obj15.title = intl6.string(appChannelsPrivate(4133).LnqeFd);
  obj15.following = items.length > 0;
  const devicePermissions = review.devicePermissions;
  obj15.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_7[item], label: null };
    const intl = AppsIcon(1113).intl;
    obj.label = intl.string(AppsIcon(14563).CONJURE_REVIEW_PERMISSION_LABELS[item]);
    return closure_1_4(ContentRow, obj, item);
  });
  items1[5] = closure_4(RowSection, obj15);
  obj14.children = items1;
  return closure_6(closure_5, obj14);
};