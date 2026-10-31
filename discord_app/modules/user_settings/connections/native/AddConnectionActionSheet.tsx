// === Module 16844: AddConnectionActionSheet ===

// Module 16844 (AddConnectionActionSheet)
import Constants from "Constants" /* 1072 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import UserApplicationIdentityConstants from "UserApplicationIdentityConstants" /* 2022 */;
import shared from "shared" /* 5021 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRow from "TableRow" /* 6975 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import native from "native" /* 1187 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function AddApplicationIdentityTableRow(application) {
  application = application.application;
  _require = undefined;
  let analyticsLocations;
  ({ start, end } = application);
  ({ startAuthorization: c0, canStartAuthorization } = analyticsLocations(7327)(application));
  const tmp2 = analyticsLocations(7327)(application);
  analyticsLocations = analyticsLocations(7326)(analyticsLocations(7351).ACTION_SHEET).analyticsLocations;
  const tmp3 = analyticsLocations(7326);
  const tmp4 = closure_7();
  const iconSource = application.getIconSource(require("native").getIconSize(require("native").IconSizes.LARGE));
  const obj2 = {
    start,
    end,
    label: application.name,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      _undefined({ analyticsLocations });
    },
    icon: null,
    trailing: null,
    disabled: null
  };
  let tmp7Result = null;
  if (null != iconSource) {
    const obj3 = { source: iconSource, style: tmp4.icon, disableColor: true };
    tmp7Result = closure_5(tmp5(1187).Icon, obj3);
  }
  obj2.icon = tmp7Result;
  obj2.trailing = closure_5(require("TableRow").TableRow.Arrow, {});
  obj2.disabled = !canStartAuthorization;
  return closure_5(require("TableRow").TableRow, obj2, application.id);
}
const AnalyticsLocations = Constants.AnalyticsLocations;
let closure_4 = UserApplicationIdentityConstants.getMigratedApplicationIdentityConnectionsScreenApplications;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { list: { paddingHorizontal: 16 }, icon: null };
let obj2 = { borderRadius: null };
obj2.borderRadius = native.getIconSize(native.Icon.Sizes.LARGE);
obj.icon = obj2;
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/AddConnectionActionSheet.tsx");

export default function AddConnectionActionSheet() {
  _require = found(found1[5])();
  const tmp = closure_7();
  const platforms = require("ConnectionsHooks").usePlatforms();
  found = platforms.filter((migrationData) => null == migrationData.migrationData);
  let obj = require("ConnectionsHooks");
  const tmp2 = found(found1[8]);
  found1 = found(found1[8])(closure_4()).filter((item) => null != item);
  const obj2 = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj3 = { title: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.Zhcj9X);
  obj2.header = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
  const obj4 = { style: tmp.list, contentContainerStyle: { paddingBottom: found(found1[6])().bottom }, children: null };
  const items = [
    found1.map((application, index) => {
      const obj = { application, start: 0 === index, end: null };
      let tmp3 = index === found1.length - 1;
      if (tmp3) {
        tmp3 = 0 === found.length;
      }
      obj.end = tmp3;
      return hasOwnProperty(AddApplicationIdentityTableRow, obj, application.id);
    }),
    found.map((label, index) => {
      const type = label.type;
      const icon = label.icon;
      let tmp4 = 0 === index;
      if (tmp4) {
        tmp4 = 0 === found1.length;
      }
      const obj = {
        start: tmp4,
        end: index === found.length - 1,
        label: label.name,
        onPress() {
          found(found1[14]).hideActionSheet();
          found(found1[15])({ platformType: type, location: constants.USER_SETTINGS });
        },
        icon: null,
        trailing: null
      };
      const tmp2Result = AvatarUtils;
      const tmp2Result2 = shared;
      obj.icon = hasOwnProperty(native.Icon, { source: tmp2Result.makeSource(shared.isThemeDark(closure_0) ? icon.darkPNG : icon.lightPNG), disableColor: true });
      obj.trailing = hasOwnProperty(TableRow.TableRow.Arrow, {});
      return hasOwnProperty(TableRow.TableRow, obj, type);
    })
  ];
  obj4.children = items;
  obj2.children = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj4);
  return closure_5(require("Sheet/BottomSheet").BottomSheet, obj2);
};