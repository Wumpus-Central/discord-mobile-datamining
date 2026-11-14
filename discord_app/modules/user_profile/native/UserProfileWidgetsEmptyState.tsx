// discord_app/modules/user_profile/native/UserProfileWidgetsEmptyState.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import useAddableWidgetsDefault from "../hooks/useAddableWidgets.tsx";
import UserProfileWidgetOptionAddButton from "UserProfileWidgetOptionAddButton.tsx";
import UserProfileAddableWidgetCategories from "../UserProfileAddableWidgetCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
let closure_8 = fn(8479).TrackUserProfileEditActions;
const PROFILE_SIDE_PADDING = fn(7962).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_14 = [1.3, 1.6, 2.3, 3.3];
const UserProfileWidgetsEmptyState = "UserProfileWidgetsEmptyState";
const createStyles = fn(5306);
let obj2 = {
  container: { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" },
  textContainer: null,
  centeredText: null,
  scroller: null,
  scrollerContent: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
obj2.textContainer = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.centeredText = { textAlign: "center" };
obj2.scroller = { alignSelf: "stretch", marginHorizontal: -PROFILE_SIDE_PADDING };
obj2.scrollerContent = { paddingHorizontal: PROFILE_SIDE_PADDING, gap: PX_12 };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default function UserProfileWidgetsEmptyState() {
  const tmp = closure_16();
  items = [AuthenticationStore];
  _require = require("initialize").useStateFromStores(items, () => id.getId());
  const tmp5 = useAddableWidgetsDefault();
  importDefault = tmp5;
  const items1 = [tmp5];
  const memo = compact.useMemo(
    () => UserProfileAddableWidgetCategories.partitionAddableWidgets(closure_1).interestsWidgets,
    items1,
  );
  let obj = require("initialize");
  let obj2 = compact;
  [tmp7, dependencyMap] = compact.useState(0);
  const sum = tmp7 + PROFILE_SIDE_PADDING;
  _slicedToArray = sum;
  compact = require("UserProfileWidgetOptionAddButton").NUMBER_OF_COLUMNS_BY_VARIANT.compact;
  let found = closure_14.find((item) => {
    const diff = (sum - Math.floor(item) * PX_12) / item - 2 * PX_16;
    const diff1 = compact - 1;
    return diff / (compact + diff1 * UserProfileWidgetOptionAddButton.GRID_GAP_TO_COVER_RATIO) <= 90;
  });
  if (found == null) {
    found = closure_14[closure_14.length - 1];
  }
  let result = (sum - Math.floor(found) * PX_12) / found;
  const width = result;
  const callback = obj2.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.width);
  }, []);
  closure_6 = tmp4(15824)();
  const tmp6 = _slicedToArray(compact.useState(0), 2);
  const canConjureCustomWidget = require("ConjureCustomWidget").useCanConjureCustomWidget(UserProfileWidgetsEmptyState);
  const tmp2Result = require("ConjureCustomWidget");
  let isConjureMobileEnabled = require("ConjureMobileExperiment").useIsConjureMobileEnabled(
    canConjureCustomWidget,
    UserProfileWidgetsEmptyState,
  );
  const obj3 = { style: tmp.container, onLayout: callback, children: null };
  const obj4 = { style: tmp.textContainer, children: null };
  const obj5 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centeredText, children: null };
  const intl = tmp2(1113).intl;
  obj5.children = intl.string(require("util").t["oqalC+"]);
  const items2 = [closure_10(require("Text/Text").Heading, obj5)];
  const obj6 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: null };
  const intl2 = tmp2(1113).intl;
  obj6.children = intl2.string(require("util").t.O9SQ1c);
  items2[1] = closure_10(require("Text/Text").Text, obj6);
  obj4.children = items2;
  const items3 = [closure_11(closure_6, obj4), ,];
  let tmp15Result = tmp7 > 0 && memo.length > 0;
  if (tmp15Result) {
    const obj7 = {
      horizontal: true,
      style: null,
      contentContainerStyle: null,
      showsHorizontalScrollIndicator: false,
      decelerationRate: "fast",
      snapToInterval: null,
      accessibilityRole: "list",
      accessibilityLabel: null,
      children: null,
    };
    ({ scroller: obj9.style, scrollerContent: obj9.contentContainerStyle } = tmp);
    obj7.snapToInterval = result + PX_12;
    const intl3 = tmp2(1113).intl;
    obj7.accessibilityLabel = intl3.string(tmp2(1113).t["+EIBSA"]);
    const items4 = [
      memo.map((widget) => {
        closure_0 = widget;
        return closure_1_10(
          closure_1(15819),
          {
            widget,
            variant: "compact",
            width,
            padding,
            onPress() {
              return closure_6(closure_0);
            },
          },
          widget.getUniqueKey(),
        );
      }),
    ];
    if (isConjureMobileEnabled) {
      const obj8 = { width: result, padding: PX_16 };
      isConjureMobileEnabled = closure_10(tmp4(15826), obj8);
    }
    items4[1] = isConjureMobileEnabled;
    obj7.children = items4;
    tmp15Result = closure_11(width, obj7);
  }
  items3[1] = tmp15Result;
  const obj10 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1113).intl;
  obj10.text = intl4.string(require("util").t["/NKLK5"]);
  obj10.onPress = function onPress() {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId, action: constants.PRESS_ADD_WIDGET });
    const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(15828, dependencyMap.paths),
      "UserProfileWidgetAddActionSheet",
    );
  };
  items3[2] = closure_10(require("components/Button/Button").Button, obj10);
  obj3.children = items3;
  return closure_11(closure_6, obj3);
}
