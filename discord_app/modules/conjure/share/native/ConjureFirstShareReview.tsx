// discord_app/modules/conjure/share/native/ConjureFirstShareReview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4089 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ConjureProjectTypes from "../../projects/ConjureProjectTypes.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import ConjureManagedCopyStatusDefault from "../../managed_copy/native/ConjureManagedCopyStatus.tsx";
import ConjureAppIdentity from "../../identity/native/ConjureAppIdentity.tsx";
import useConjureFirstShareReview from "../useConjureFirstShareReview.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SectionTitle(children) {
  const tmp = closure_9();
  return React4(Text_Text.Text, {
    variant: "body-sm/semibold",
    color: "text-subtle",
    accessibilityRole: "header",
    style: closure_9().sectionTitle,
    children: children.title,
  });
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
function ContentRow(arg0) {
  ({ icon, label } = arg0);
  const tmp = closure_9();
  obj = { style: tmp.row, children: null };
  items = [
    React4(icon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }),
    React4(Text_Text.Text, {
      variant: "body-md/semibold",
      color: "text-strong",
      lineClamp: 1,
      style: tmp.rowLabel,
      children: label,
    }),
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { screen_capture: fn(9782).ScreenIcon, connect_user_to_voice: fn(6915).VoiceNormalIcon };
let obj2 = {};
obj2[fn(6501).ConjureSupportedSurface.BOT] = fn(12108).RobotIcon;
obj2[fn(6501).ConjureSupportedSurface.ACTIVITY] = fn(18043).ActivitiesIcon;
obj2[fn(6501).ConjureSupportedSurface.VOICE_CHANNEL] = fn(6915).VoiceNormalIcon;
obj2[fn(6501).ConjureSupportedSurface.PROFILE_WIDGET] = fn(18432).BadgeIcon;
obj2[fn(6501).ConjureSupportedSurface.AUTOMOD] = fn(10010).ShieldIcon;
obj2[fn(6501).ConjureSupportedSurface.OVERLAY] = fn(6921).GameControllerIcon;
const createStyles = fn(4792);
const obj4 = {
  sectionTitle: { marginBottom: nativeDefault.space.PX_4 },
  followingSection: null,
  row: null,
  rowLabel: null,
};
let obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj4.followingSection = { marginTop: -nativeDefault.space.PX_8 };
let obj6 = { marginTop: -nativeDefault.space.PX_8 };
obj4.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4,
};
obj4.rowLabel = { flex: 1 };
let closure_9 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareReview.tsx");

export default function ConjureFirstShareReview(review) {
  review = review.review;
  ({ identity, channelNames } = review);
  items = [
    ...channelNames.map((label) => closure_1_4(ContentRow, { icon: AppsIcon.AppsIcon, label }, "channel:" + label)),
    ...components.map((label) => {
      const surface = label.surface;
      return closure_1_4(ContentRow, { icon: obj2[surface], label: label.label }, surface);
    }),
  ];
  components = review.components;
  if (review.managedCopy) {
    const obj3 = { projectId: review.projectId };
    let tmpResult = React4(ConjureManagedCopyStatusDefault, obj3);
    let tmp8 = importDefault;
    let tmp9 = React4;
  } else {
    obj = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: review.saving,
      onChange: identity.setIcon,
      onError(text) {
        if (null != text) {
          obj2 = { text, variant: "critical" };
          ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
        }
      },
      onConjure: review.onConjureIcon,
    };
    const items1 = [React4(ConjureAppIdentity.ConjureAppIconTile, obj), ,];
    const obj5 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
    let intl = util.intl;
    obj5.label = intl.string(_modDef4089.knevPu);
    ({ name: obj2.value, setName: obj2.onChange } = review);
    obj5.maxLength = ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH;
    ({ saving: obj2.disabled, nameError } = review);
    const obj6 = { children: null };
    obj5.errorMessage = nameError;
    items1[1] = React4(TextInput.TextInput, obj5);
    const obj7 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
    const intl2 = util.intl;
    obj7.label = intl2.string(_modDef4089.ynaGa1);
    const intl3 = util.intl;
    obj7.placeholder = intl3.string(_modDef4089["I+3UTL"]);
    ({ description: obj4.value, setDescription: obj4.onChange } = identity);
    obj7.maxLength = ConjureProjectTypes.MAX_APP_DESCRIPTION_LENGTH;
    obj7.disabled = review.saving;
    items1[2] = React4(TextArea.TextArea, obj7);
    obj6.children = items1;
    tmp8 = importDefault;
    tmp9 = React4;
    tmpResult = timestampProducer(hasOwnProperty, obj6);
  }
  const obj8 = { children: null };
  const items2 = [tmpResult, ,];
  const obj15 = { title: null, rows: null };
  const intl4 = util.intl;
  obj15.title = intl4.string(tmp8(4089).BqNMms);
  obj15.rows = items;
  items2[1] = tmp9(RowSection, obj15);
  const obj16 = { title: null, following: null, rows: null };
  const intl5 = util.intl;
  obj16.title = intl5.string(tmp8(4089).LnqeFd);
  obj16.following = items.length > 0;
  const devicePermissions = review.devicePermissions;
  obj16.rows = devicePermissions.map((item) => {
    obj = { icon: closure_1_7[item], label: null };
    const intl = util.intl;
    obj.label = intl.string(useConjureFirstShareReview.CONJURE_REVIEW_PERMISSION_LABELS[item]);
    return closure_1_4(ContentRow, obj, item);
  });
  items2[2] = tmp9(RowSection, obj16);
  obj8.children = items2;
  return timestampProducer(hasOwnProperty, obj8);
}
