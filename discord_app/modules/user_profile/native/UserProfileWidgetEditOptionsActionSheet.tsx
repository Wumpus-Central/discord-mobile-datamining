// discord_app/modules/user_profile/native/UserProfileWidgetEditOptionsActionSheet.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = fn;
let closure_5 = fn(7950).TrackUserProfileEditActions;
const widgetShowsGameDetails = fn(6840).widgetShowsGameDetails;
const jsx = fn(21).jsx;
const constants = { REORDER_GAMES: "reorder-games", REMOVE: "remove-widget" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsActionSheet.tsx");

export default function UserProfileWidgetEditOptionsActionSheet(widget) {
  widget = widget.widget;
  const returnFocusRef = widget.returnFocusRef;
  let widgetTitle;
  noop = undefined;
  widgetTitle = widget(widgetTitle[5]).getWidgetTitle(widget);
  noop = noop.useRef(true);
  items = [returnFocusRef];
  const effect = noop.useEffect(
    () => () => {
      if (ref2.current) {
        const obj2 = { ref, delay: 100 };
        const result = widget(widgetTitle[12]).setAccessibilityFocus(obj2);
        const obj = widget(widgetTitle[12]);
      }
    },
    items,
  );
  let obj = widget(widgetTitle[5]);
  let isGameWidgetResult = widget(widgetTitle[9]).isGameWidget(widget);
  if (isGameWidgetResult) {
    isGameWidgetResult = tmp(tmp2[5]).widgetMaxGames(widget.type) > 1;
    const tmpResult = tmp(tmp2[5]);
  }
  const items1 = [];
  if (isGameWidgetResult) {
    let obj3 = { key: constants.REORDER_GAMES, label: null, IconComponent: null, variant: "default", disabled: null };
    let intl = tmp(tmp2[8]).intl;
    obj3.label = intl.string(tmp(tmp2[8]).t["0dOFq+"]);
    obj3.IconComponent = tmp(tmp2[10]).ArrowsUpDownIcon;
    obj3.disabled = tmp(tmp2[5]).getUniqueWidgetGames(widget).length < 2;
    items1.push(obj3);
    const tmpResult2 = tmp(tmp2[5]);
  }
  let obj4 = { key: constants.REMOVE, label: null, IconComponent: null, variant: "danger" };
  const intl2 = tmp(tmp2[8]).intl;
  obj4.label = intl2.string(widget(widgetTitle[8]).t.Mm07Yc);
  obj4.IconComponent = widget(widgetTitle[11]).TrashIcon;
  items1.push(obj4);
  let obj5 = {
    header: jsx(widget(widgetTitle[20]).BottomSheetTitleHeader, { title: widgetTitle }),
    dismissAccessibilityLabel: null,
    children: null,
  };
  const intl3 = tmp(tmp2[8]).intl;
  obj5.dismissAccessibilityLabel = intl3.formatToPlainString(widget(widgetTitle[8]).t.X5Fk6g, {
    widgetName: widgetTitle,
  });
  let obj2 = widget(widgetTitle[9]);
  obj5.children = jsx(widget(widgetTitle[21]).TableRowGroup, {
    hasIcons: true,
    children: items1.map((label) => {
      let obj = {
        label: label.label,
        variant: label.variant,
        disabled: label.disabled,
        icon: jsx(widget(widgetTitle[22]).TableRow.Icon, {
          IconComponent: label.IconComponent,
          variant: label.variant,
        }),
        onPress() {
          if (constants2.REORDER_GAMES === label.key) {
            if (obj.isGameWidget(widget)) {
              closure_3.current = false;
              closure_1_1(5006).hideActionSheet(label(10103).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
              let obj2 = closure_1_1(5006);
              const tmp9 = closure_1_6(widget.type);
              const openLazy = closure_1_1(5006).openLazy;
              const tmp2Result = label(2121);
              if (tmp9) {
                const obj3 = { widgetType: widget.type, returnFocusRef };
                openLazy(
                  tmp2Result(10107, dependencyMap.paths),
                  "UserProfileWidgetGameDetailsReorderActionSheet",
                  obj3,
                );
              } else {
                const obj4 = { widgetType: widget.type, returnFocusRef };
                openLazy(
                  tmp2Result(10123, dependencyMap.paths),
                  "UserProfileWidgetGameCoverGridReorderActionSheet",
                  obj4,
                );
              }
              const tmp10 = closure_1_1(5006);
            }
            obj = label(6839);
          } else if (tmp.REMOVE === key) {
            closure_3.current = false;
            closure_1_1(5006).hideActionSheet(label(10103).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            const obj5 = closure_1_1(5006);
            const obj7 = {
              widgetName: widgetTitle,
              onConfirm() {
                const result = profileEditAnalyticsOptions(10094).removeWidgetFromPending(profileEditAnalyticsOptions);
                const obj = profileEditAnalyticsOptions(10094);
                const obj2 = profileEditAnalyticsOptions(8017);
                const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                const result1 = obj2.trackUserProfileEditAction({
                  userId: id.getId(),
                  action: constants.WIDGET_REMOVED,
                });
                const AccessibilityAnnouncer = profileEditAnalyticsOptions(4801).AccessibilityAnnouncer;
                const intl = profileEditAnalyticsOptions(1113).intl;
                AccessibilityAnnouncer.announce(intl.string(profileEditAnalyticsOptions(1113).t.zzsK7h));
              },
              onDismissWithoutRemoving() {
                return profileEditAnalyticsOptions(5802).setAccessibilityFocus({ ref, delay: 100 });
              },
            };
            label(10124).confirmRemoveWidget(obj7);
            const obj6 = label(10124);
          }
        },
      };
      return jsx(
        widget(widgetTitle[22]).TableRow,
        {
          label: label.label,
          variant: label.variant,
          disabled: label.disabled,
          icon: jsx(widget(widgetTitle[22]).TableRow.Icon, {
            IconComponent: label.IconComponent,
            variant: label.variant,
          }),
          onPress() {
            if (constants2.REORDER_GAMES === label.key) {
              if (obj.isGameWidget(widget)) {
                closure_3.current = false;
                closure_1_1(5006).hideActionSheet(label(10103).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
                let obj2 = closure_1_1(5006);
                const tmp9 = closure_1_6(widget.type);
                const openLazy = closure_1_1(5006).openLazy;
                const tmp2Result = label(2121);
                if (tmp9) {
                  const obj3 = { widgetType: widget.type, returnFocusRef };
                  openLazy(
                    tmp2Result(10107, dependencyMap.paths),
                    "UserProfileWidgetGameDetailsReorderActionSheet",
                    obj3,
                  );
                } else {
                  const obj4 = { widgetType: widget.type, returnFocusRef };
                  openLazy(
                    tmp2Result(10123, dependencyMap.paths),
                    "UserProfileWidgetGameCoverGridReorderActionSheet",
                    obj4,
                  );
                }
                const tmp10 = closure_1_1(5006);
              }
              obj = label(6839);
            } else if (tmp.REMOVE === key) {
              closure_3.current = false;
              closure_1_1(5006).hideActionSheet(label(10103).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
              const obj5 = closure_1_1(5006);
              const obj7 = {
                widgetName: widgetTitle,
                onConfirm() {
                  const result =
                    profileEditAnalyticsOptions(10094).removeWidgetFromPending(profileEditAnalyticsOptions);
                  const obj = profileEditAnalyticsOptions(10094);
                  const obj2 = profileEditAnalyticsOptions(8017);
                  const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                  const result1 = obj2.trackUserProfileEditAction({
                    userId: id.getId(),
                    action: constants.WIDGET_REMOVED,
                  });
                  const AccessibilityAnnouncer = profileEditAnalyticsOptions(4801).AccessibilityAnnouncer;
                  const intl = profileEditAnalyticsOptions(1113).intl;
                  AccessibilityAnnouncer.announce(intl.string(profileEditAnalyticsOptions(1113).t.zzsK7h));
                },
                onDismissWithoutRemoving() {
                  return profileEditAnalyticsOptions(5802).setAccessibilityFocus({ ref, delay: 100 });
                },
              };
              label(10124).confirmRemoveWidget(obj7);
              const obj6 = label(10124);
            }
          },
        },
        label.key,
      );
    }),
  });
  return jsx(widget(widgetTitle[19]).ActionSheet, {
    header: jsx(widget(widgetTitle[20]).BottomSheetTitleHeader, { title: widgetTitle }),
    dismissAccessibilityLabel: null,
    children: null,
  });
}
