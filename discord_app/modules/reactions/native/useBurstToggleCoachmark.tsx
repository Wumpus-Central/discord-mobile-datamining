// discord_app/modules/reactions/native/useBurstToggleCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import SuperReactionIcon from "../../../design/components/Icon/native/redesign/generated/SuperReactionIcon.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function EducationCoachmarkImg() {
  const obj = {
    style: closure_10().upsellImageContainer,
    children: jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" }),
  };
  return (
    <View style={closure_10().upsellImageContainer}>
      {jsx(SuperReactionIcon.SuperReactionIcon, { color: nativeDefault.colors.WHITE, size: "md" })}
    </View>
  );
}
const View = fn(17).View;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_9 = fn(2028).DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
const createStyles = fn(4827);
let obj2 = { upsellImageContainer: null };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
obj2.upsellImageContainer = size;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [UserStore];
  const stateFromStores = first(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(504);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  obj2 = first(4481);
  const tmp5 = _slicedToArray(first(7716).useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = noop.useMemo(() => {
    const obj = {
      description: null,
      onDismiss: null,
      position: "bottom",
      renderImgComponent: null,
      title: null,
      visible: null,
    };
    const intl = util.intl;
    obj.description = intl.string(util.t.nyYohm);
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.UNKNOWN);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_8(closure_1_11, {});
    };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t.ORK94p);
    obj.visible = first === closure_9;
    return obj;
  }, items3);
  const tmpResult = first(7716);
  const coachmark = first(11474).useCoachmark(targetRef, memo);
  return tmp5[1];
}
