// discord_app/modules/user_profile/native/UserProfileWidgetsEmptyState.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import useAddableWidgetsDefault from "../hooks/useAddableWidgets.tsx";
import UserProfileWidgetOptionAddButton from "UserProfileWidgetOptionAddButton.tsx";
import useAddProfileWidgetDefault from "../hooks/native/useAddProfileWidget.tsx";
import UserProfileWidgetOptionConjureButtonDefault from "UserProfileWidgetOptionConjureButton.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
let closure_8 = fn(8825).TrackUserProfileEditActions;
const PROFILE_SIDE_PADDING = fn(7437).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_14 = [1.3, 1.6, 2.3, 3.3];
const UserProfileWidgetsEmptyState = "UserProfileWidgetsEmptyState";
const createStyles = fn(5140);
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
  const arr2 = useAddableWidgetsDefault();
  let obj = require("initialize");
  let obj2 = noop;
  [tmp6, importDefault] = compact(noop.useState(0), 2);
  const sum = tmp6 + PROFILE_SIDE_PADDING;
  dependencyMap = sum;
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
  noop = result;
  const callback = obj2.useCallback((nativeEvent) => {
    importDefault(nativeEvent.nativeEvent.layout.width);
  }, []);
  closure_5 = useAddProfileWidgetDefault();
  const tmp5 = compact(noop.useState(0), 2);
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
  const items1 = [closure_10(require("Text/Text").Heading, obj5)];
  const obj6 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: null };
  const intl2 = tmp2(1113).intl;
  obj6.children = intl2.string(require("util").t.O9SQ1c);
  items1[1] = closure_10(require("Text/Text").Text, obj6);
  obj4.children = items1;
  const items2 = [closure_11(closure_6, obj4), ,];
  let tmp14Result = tmp6 > 0 && arr2.length > 0;
  if (tmp14Result) {
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
    const items3 = [
      arr2.map((widget) => {
        closure_0 = widget;
        return closure_1_10(
          require("UserProfileWidgetOptionAddButton"),
          {
            widget,
            variant: "compact",
            width,
            padding,
            onPress() {
              return closure_5(closure_0);
            },
          },
          widget.getUniqueKey(),
        );
      }),
    ];
    if (isConjureMobileEnabled) {
      const obj8 = { width: result, padding: PX_16 };
      isConjureMobileEnabled = closure_10(UserProfileWidgetOptionConjureButtonDefault, obj8);
    }
    items3[1] = isConjureMobileEnabled;
    obj7.children = items3;
    tmp14Result = closure_11(closure_5, obj7);
  }
  items2[1] = tmp14Result;
  const obj10 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1113).intl;
  obj10.text = intl4.string(require("util").t["/NKLK5"]);
  obj10.onPress = function onPress() {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId, action: constants.PRESS_ADD_WIDGET });
    const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(15201, dependencyMap.paths),
      "UserProfileWidgetAddActionSheet",
    );
  };
  items2[2] = closure_10(require("components/Button/Button").Button, obj10);
  obj3.children = items2;
  return closure_11(closure_6, obj3);
}
