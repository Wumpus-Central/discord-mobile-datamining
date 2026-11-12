// === Module 15685: UserProfileWidgetsBoardTab ===

// Module 15685 (UserProfileWidgetsBoardTab)
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8540 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 12041 */;
import useDisplayableBoardWidgets from "useDisplayableBoardWidgets" /* 12184 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15686 */;
import ConjureServerWidgetUpsellDefault from "ConjureServerWidgetUpsell" /* 15687 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15699 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 15710 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 15711 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardTab.tsx");

export default function UserProfileWidgetsBoardTab(isVisible) {
  ({ userId, cardStyle, isCurrentUser } = isVisible);
  const tmp3 = UserProfileSharedStylesDefault();
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileWidgetsBoardTab");
  const obj3 = { style: tmp3.profileContent, children: null };
  let tmp8 = isCurrentUser;
  if (isCurrentUser) {
    const obj4 = { cardStyle };
    tmp8 = React4(ConjureServerWidgetUpsellDefault, obj4);
  }
  items = [tmp8, ];
  if (isCurrentUser) {
    if (isMobileWidgetEditingEnabled) {
      if (!tmp5) {
        let tmp6Result = React4(UserProfileWidgetsEmptyStateDefault, {});
      }
      items[1] = tmp6Result;
      obj3.children = items;
      return timestampProducer(View, obj3);
    }
  }
  let tmp13 = isCurrentUser;
  if (isCurrentUser) {
    tmp13 = !isMobileWidgetEditingEnabled;
  }
  if (tmp13) {
    tmp13 = React4(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  const items1 = [tmp13, , ];
  if (isCurrentUser) {
    isCurrentUser = React4(ConjureCustomWidgetAddOptionDefault, {});
  }
  const obj5 = { children: null };
  items1[1] = isCurrentUser;
  items1[2] = React4(UserProfileWidgetsBoardDefault, { userId, isVisible: isVisible.isVisible, cardStyle });
  obj5.children = items1;
  tmp6Result = timestampProducer(hasOwnProperty, obj5);
  tmp5 = useDisplayableBoardWidgets.useDisplayableBoardWidgets(userId).length > 0;
};