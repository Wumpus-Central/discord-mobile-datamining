// === Module 15141: UserProfileWidgetsBoardTab ===

// Module 15141 (UserProfileWidgetsBoardTab)
import nativeDefault from "native" /* 575 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8906 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15142 */;
import useDisplayableBoardWidgets from "useDisplayableBoardWidgets" /* 15143 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15145 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 15159 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 15162 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15163 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardTab.tsx");

export default function UserProfileWidgetsBoardTab(arg0) {
  ({ userId, isCurrentUser } = arg0);
  ({ isVisible, cardStyle } = arg0);
  const tmp3 = UserProfileSharedStylesDefault();
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileWidgetsBoardTab");
  let tmp6 = isCurrentUser;
  if (isCurrentUser) {
    tmp6 = isMobileWidgetEditingEnabled;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  items = [tmp3.profileContent, ];
  let tmp9 = tmp6;
  if (tmp6) {
    const obj3 = { gap: nativeDefault.space.PX_24 };
    tmp9 = obj3;
  }
  const obj4 = { style: items, children: null };
  items[1] = tmp9;
  const obj5 = { children: null };
  if (tmp6) {
    const items1 = [React4(UserProfileWidgetsEmptyStateDefault, {}), React4(ConjureCustomWidgetAddOptionDefault, {})];
    obj5.children = items1;
    let tmp13 = obj5;
  } else {
    let tmp7Result = isCurrentUser;
    if (isCurrentUser) {
      tmp7Result = !isMobileWidgetEditingEnabled;
    }
    if (tmp7Result) {
      tmp7Result = React4(UserProfileWidgetsBoardEditNoticeDefault, {});
    }
    const items2 = [tmp7Result, , ];
    if (isCurrentUser) {
      isCurrentUser = React4(ConjureCustomWidgetAddOptionDefault, {});
    }
    items2[1] = isCurrentUser;
    const obj6 = { userId, isVisible, cardStyle };
    items2[2] = React4(UserProfileWidgetsBoardDefault, obj6);
    obj5.children = items2;
    tmp13 = obj5;
  }
  obj4.children = timestampProducer(hasOwnProperty, tmp13);
  return React4(View, obj4);
};