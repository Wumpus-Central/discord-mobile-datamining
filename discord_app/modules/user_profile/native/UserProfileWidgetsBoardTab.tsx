// === Module 15173: UserProfileWidgetsBoardTab ===

// Module 15173 (UserProfileWidgetsBoardTab)
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8888 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15174 */;
import useDisplayableBoardWidgets from "useDisplayableBoardWidgets" /* 15175 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15177 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 15194 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 15195 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15196 */;
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
  const obj3 = { style: tmp3.profileContent, children: null };
  if (isCurrentUser) {
    if (isMobileWidgetEditingEnabled) {
      if (obj2.useDisplayableBoardWidgets(userId).length <= 0) {
        let tmp8Result = React4(UserProfileWidgetsEmptyStateDefault, {});
      }
      obj3.children = tmp8Result;
      return React4(tmp6, obj3);
    }
  }
  let tmp5Result2 = isCurrentUser;
  if (isCurrentUser) {
    tmp5Result2 = !isMobileWidgetEditingEnabled;
  }
  if (tmp5Result2) {
    tmp5Result2 = React4(UserProfileWidgetsBoardEditNoticeDefault, {});
  }
  items = [tmp5Result2, , ];
  if (isCurrentUser) {
    isCurrentUser = React4(ConjureCustomWidgetAddOptionDefault, {});
  }
  const obj4 = { children: null };
  items[1] = isCurrentUser;
  items[2] = React4(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle });
  obj4.children = items;
  tmp8Result = timestampProducer(hasOwnProperty, obj4);
  obj2 = useDisplayableBoardWidgets;
};