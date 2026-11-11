// === Module 12038: UserProfileWidgetEditOptionsActionSheet ===

// Module 12038 (UserProfileWidgetEditOptionsActionSheet)
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
let closure_5 = fn(8413).TrackUserProfileEditActions;
const jsx = fn(21).jsx;
const constants = { REMOVE: "remove-widget" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsActionSheet.tsx");

export default function UserProfileWidgetEditOptionsActionSheet(widget) {
  widget = widget.widget;
  const returnFocusRef = widget.returnFocusRef;
  let header;
  noop = undefined;
  if (widget instanceof widget(header[4]).UserProfilePersonalWidget) {
    header = widget.header;
  } else {
    header = tmp(tmp2[5]).getWidgetTitle(widget);
    const tmpResult = tmp(tmp2[5]);
  }
  noop = noop.useRef(true);
  items = [returnFocusRef];
  const effect = noop.useEffect(() => () => {
    if (ref2.current) {
      const obj2 = { ref, delay: 100 };
      const result = widget(header[10]).setAccessibilityFocus(obj2);
      const obj = widget(header[10]);
    }
  }, items);
  let obj = { key: constants.REMOVE, label: null, IconComponent: null, variant: "danger" };
  let intl = tmp(tmp2[8]).intl;
  obj.label = intl.string(widget(header[8]).t.Mm07Yc);
  obj.IconComponent = widget(header[9]).TrashIcon;
  const items1 = [obj];
  let obj2 = { header: jsx(widget(header[15]).BottomSheetTitleHeader, { title: header }), dismissAccessibilityLabel: null, children: null };
  const intl2 = tmp(tmp2[8]).intl;
  obj2.dismissAccessibilityLabel = intl2.formatToPlainString(widget(header[8]).t["6TwVYM"], { widgetName: header });
  obj2.children = jsx(widget(header[16]).TableRowGroup, {
    hasIcons: true,
    children: items1.map((label) => {
      let obj = {
        label: label.label,
        variant: label.variant,
        icon: jsx(widget(header[17]).TableRow.Icon, { IconComponent: label.IconComponent, variant: label.variant }),
        onPress() {
          if (label.key === constants2.REMOVE) {
            closure_3.current = false;
            returnFocusRef(5489).hideActionSheet(label(12037).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            let obj = returnFocusRef(5489);
            const obj3 = {
              widgetName: header,
              onConfirm() {
                  const result = profileEditAnalyticsOptions(12029).removeWidgetFromPending(profileEditAnalyticsOptions);
                  const obj = profileEditAnalyticsOptions(12029);
                  const obj2 = profileEditAnalyticsOptions(8480);
                  const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                  const result1 = obj2.trackUserProfileEditAction({ userId: id.getId(), action: constants.WIDGET_REMOVED });
                  const AccessibilityAnnouncer = profileEditAnalyticsOptions(5252).AccessibilityAnnouncer;
                  const intl = profileEditAnalyticsOptions(1113).intl;
                  AccessibilityAnnouncer.announce(intl.string(profileEditAnalyticsOptions(1113).t.zzsK7h));
                },
              onDismissWithoutRemoving() {
                  return profileEditAnalyticsOptions(6268).setAccessibilityFocus({ ref, delay: 100 });
                }
            };
            label(12039).confirmRemoveWidget(obj3);
            let obj2 = label(12039);
          }
        }
      };
      return jsx(widget(header[17]).TableRow, {
        label: label.label,
        variant: label.variant,
        icon: jsx(widget(header[17]).TableRow.Icon, { IconComponent: label.IconComponent, variant: label.variant }),
        onPress() {
          if (label.key === constants2.REMOVE) {
            closure_3.current = false;
            returnFocusRef(5489).hideActionSheet(label(12037).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            let obj = returnFocusRef(5489);
            const obj3 = {
              widgetName: header,
              onConfirm() {
                  const result = profileEditAnalyticsOptions(12029).removeWidgetFromPending(profileEditAnalyticsOptions);
                  const obj = profileEditAnalyticsOptions(12029);
                  const obj2 = profileEditAnalyticsOptions(8480);
                  const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                  const result1 = obj2.trackUserProfileEditAction({ userId: id.getId(), action: constants.WIDGET_REMOVED });
                  const AccessibilityAnnouncer = profileEditAnalyticsOptions(5252).AccessibilityAnnouncer;
                  const intl = profileEditAnalyticsOptions(1113).intl;
                  AccessibilityAnnouncer.announce(intl.string(profileEditAnalyticsOptions(1113).t.zzsK7h));
                },
              onDismissWithoutRemoving() {
                  return profileEditAnalyticsOptions(6268).setAccessibilityFocus({ ref, delay: 100 });
                }
            };
            label(12039).confirmRemoveWidget(obj3);
            let obj2 = label(12039);
          }
        }
      }, label.key);
    })
  });
  return jsx(widget(header[14]).ActionSheet, { header: jsx(widget(header[15]).BottomSheetTitleHeader, { title: header }), dismissAccessibilityLabel: null, children: null });
};