// === Module 12099: UserProfileWidgetEditOptionsActionSheet ===

// Module 12099 (UserProfileWidgetEditOptionsActionSheet)
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
let closure_5 = fn(8479).TrackUserProfileEditActions;
const widgetShowsGameDetails = fn(7355).widgetShowsGameDetails;
const jsx = fn(21).jsx;
const constants = { REORDER_GAMES: "reorder-games", REMOVE: "remove-widget" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsActionSheet.tsx");

export default function UserProfileWidgetEditOptionsActionSheet(widget) {
  widget = widget.widget;
  const returnFocusRef = widget.returnFocusRef;
  let header;
  noop = undefined;
  if (widget instanceof widget(header[5]).UserProfilePersonalWidget) {
    header = widget.header;
  } else {
    header = tmp(tmp2[6]).getWidgetTitle(widget);
    const tmpResult = tmp(tmp2[6]);
  }
  noop = noop.useRef(true);
  items = [returnFocusRef];
  const effect = noop.useEffect(() => () => {
    if (ref2.current) {
      const obj2 = { ref, delay: 100 };
      const result = widget(header[13]).setAccessibilityFocus(obj2);
      const obj = widget(header[13]);
    }
  }, items);
  let isGameWidgetResult = widget(header[10]).isGameWidget(widget);
  if (isGameWidgetResult) {
    isGameWidgetResult = widgetShowsGameDetails(widget.type);
  }
  if (isGameWidgetResult) {
    isGameWidgetResult = tmp(tmp2[6]).widgetMaxGames(widget.type) > 1;
    const tmpResult5 = tmp(tmp2[6]);
  }
  const items1 = [];
  if (isGameWidgetResult) {
    let obj = { key: constants.REORDER_GAMES, label: null, IconComponent: null, variant: "default", disabled: null };
    let intl = tmp(tmp2[9]).intl;
    obj.label = intl.string(tmp(tmp2[9]).t["0dOFq+"]);
    obj.IconComponent = tmp(tmp2[11]).ArrowsUpDownIcon;
    obj.disabled = tmp(tmp2[6]).getUniqueWidgetGames(widget).length < 2;
    items1.push(obj);
    const tmpResult6 = tmp(tmp2[6]);
  }
  let obj2 = { key: constants.REMOVE, label: null, IconComponent: null, variant: "danger" };
  const intl2 = tmp(tmp2[9]).intl;
  obj2.label = intl2.string(widget(header[9]).t.Mm07Yc);
  obj2.IconComponent = widget(header[12]).TrashIcon;
  items1.push(obj2);
  let obj3 = { header: jsx(widget(header[20]).BottomSheetTitleHeader, { title: header }), dismissAccessibilityLabel: null, children: null };
  const intl3 = tmp(tmp2[9]).intl;
  obj3.dismissAccessibilityLabel = intl3.formatToPlainString(widget(header[9]).t.X5Fk6g, { widgetName: header });
  const tmpResult4 = widget(header[10]);
  obj3.children = jsx(widget(header[21]).TableRowGroup, {
    hasIcons: true,
    children: items1.map((label) => {
      let obj = {
        label: label.label,
        variant: label.variant,
        disabled: label.disabled,
        icon: jsx(widget(header[22]).TableRow.Icon, { IconComponent: label.IconComponent, variant: label.variant }),
        onPress() {
          if (constants2.REORDER_GAMES === label.key) {
            if (obj.isGameWidget(widget)) {
              closure_3.current = false;
              closure_1_1(5552).hideActionSheet(label(12098).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
              let obj2 = closure_1_1(5552);
              const obj4 = { widgetType: widget.type, returnFocusRef };
              closure_1_1(5552).openLazy(label(2121)(12102, dependencyMap.paths), "UserProfileWidgetGamesReorderActionSheet", obj4);
              const obj3 = closure_1_1(5552);
            }
            obj = label(7354);
          } else if (tmp.REMOVE === key) {
            closure_3.current = false;
            closure_1_1(5552).hideActionSheet(label(12098).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            const obj5 = closure_1_1(5552);
            const obj7 = {
              widgetName: header,
              onConfirm() {
                  const result = profileEditAnalyticsOptions(12090).removeWidgetFromPending(profileEditAnalyticsOptions);
                  const obj = profileEditAnalyticsOptions(12090);
                  const obj2 = profileEditAnalyticsOptions(8546);
                  const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                  const result1 = obj2.trackUserProfileEditAction({ userId: id.getId(), action: constants.WIDGET_REMOVED });
                  const AccessibilityAnnouncer = profileEditAnalyticsOptions(5315).AccessibilityAnnouncer;
                  const intl = profileEditAnalyticsOptions(1113).intl;
                  AccessibilityAnnouncer.announce(intl.string(profileEditAnalyticsOptions(1113).t.zzsK7h));
                },
              onDismissWithoutRemoving() {
                  return profileEditAnalyticsOptions(6331).setAccessibilityFocus({ ref, delay: 100 });
                }
            };
            label(12123).confirmRemoveWidget(obj7);
            const obj6 = label(12123);
          }
        }
      };
      return jsx(widget(header[22]).TableRow, {
        label: label.label,
        variant: label.variant,
        disabled: label.disabled,
        icon: jsx(widget(header[22]).TableRow.Icon, { IconComponent: label.IconComponent, variant: label.variant }),
        onPress() {
          if (constants2.REORDER_GAMES === label.key) {
            if (obj.isGameWidget(widget)) {
              closure_3.current = false;
              closure_1_1(5552).hideActionSheet(label(12098).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
              let obj2 = closure_1_1(5552);
              const obj4 = { widgetType: widget.type, returnFocusRef };
              closure_1_1(5552).openLazy(label(2121)(12102, dependencyMap.paths), "UserProfileWidgetGamesReorderActionSheet", obj4);
              const obj3 = closure_1_1(5552);
            }
            obj = label(7354);
          } else if (tmp.REMOVE === key) {
            closure_3.current = false;
            closure_1_1(5552).hideActionSheet(label(12098).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            const obj5 = closure_1_1(5552);
            const obj7 = {
              widgetName: header,
              onConfirm() {
                  const result = profileEditAnalyticsOptions(12090).removeWidgetFromPending(profileEditAnalyticsOptions);
                  const obj = profileEditAnalyticsOptions(12090);
                  const obj2 = profileEditAnalyticsOptions(8546);
                  const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                  const result1 = obj2.trackUserProfileEditAction({ userId: id.getId(), action: constants.WIDGET_REMOVED });
                  const AccessibilityAnnouncer = profileEditAnalyticsOptions(5315).AccessibilityAnnouncer;
                  const intl = profileEditAnalyticsOptions(1113).intl;
                  AccessibilityAnnouncer.announce(intl.string(profileEditAnalyticsOptions(1113).t.zzsK7h));
                },
              onDismissWithoutRemoving() {
                  return profileEditAnalyticsOptions(6331).setAccessibilityFocus({ ref, delay: 100 });
                }
            };
            label(12123).confirmRemoveWidget(obj7);
            const obj6 = label(12123);
          }
        }
      }, label.key);
    })
  });
  return jsx(widget(header[19]).ActionSheet, { header: jsx(widget(header[20]).BottomSheetTitleHeader, { title: header }), dismissAccessibilityLabel: null, children: null });
};